const SUPABASE_URL = "https://rlmcbowuphdwzrunugwx.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_gmUGR5_KyN2m4jZ-yRVoZw__A9UwOjh";

let sbClient = null;
let liveChannel = null;
let isApplyingRemoteUpdate = false;
let isPushingDb = false;
// Защита от ранней перезаписи облака заводским database.js до получения ответа от сервера
let isCloudHydrated = false;

const AVATAR_CACHE = {};
let COMMENT_COUNTS = {};
const loadedCommentItemIds = new Set();
const CLIENT_TAB_ID = "tab-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);

function setCloudStatusBadge(emojiIcon, tooltipText) {
    const badge = document.getElementById("cloudRealtimeBadge");
    if (badge) { badge.textContent = emojiIcon; badge.title = tooltipText || ""; }
}

function getMoscowTimeFormatted(onlyDate = false) {
    try {
        const parts = new Intl.DateTimeFormat("ru-RU", {
            timeZone: "Europe/Moscow", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false
        }).formatToParts(new Date());
        const map = {};
        parts.forEach(p => { map[p.type] = p.value; });
        const dateStr = `${map.year}-${map.month}-${map.day}`;
        return onlyDate ? dateStr : `${dateStr} ${map.hour}:${map.minute} (МСК)`;
    } catch (e) {
        const msk = new Date(Date.now() + 3 * 3600 * 1000).toISOString();
        return onlyDate ? msk.slice(0, 10) : (msk.slice(0, 10) + " " + msk.slice(11, 16) + " (МСК)");
    }
}

async function compressImageForStorage(dataUrl, maxDim = 240, quality = 0.85) {
    if (!dataUrl || !dataUrl.startsWith("data:image/")) return dataUrl;
    // ВАЖНО: Никогда не пропускаем GIF через обычный статичный canvas.toDataURL('image/webp'), иначе пропадёт анимация!
    if (dataUrl.startsWith("data:image/gif")) return dataUrl;
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            try {
                let w = img.naturalWidth || img.width || maxDim;
                let h = img.naturalHeight || img.height || maxDim;
                if (w > maxDim || h > maxDim) {
                    if (w > h) { h = Math.round((h * maxDim) / w); w = maxDim; }
                    else { w = Math.round((w * maxDim) / h); h = maxDim; }
                }
                const canvas = document.createElement("canvas");
                canvas.width = w; canvas.height = h;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, w, h);
                let compressed = canvas.toDataURL("image/webp", quality);
                if (!compressed || compressed.length >= dataUrl.length) compressed = canvas.toDataURL("image/jpeg", quality);
                resolve(compressed);
            } catch (err) { resolve(dataUrl); }
        };
        img.onerror = () => resolve(dataUrl);
        img.src = dataUrl;
    });
}

async function saveAvatarToCloudEverywhere(userId, avatarDataStr) {
    if (!userId || !avatarDataStr) return;
    AVATAR_CACHE[userId] = avatarDataStr;
    const u = USERS.find(x => x && x.id === userId);
    if (u) u.avatar = avatarDataStr;
    safeLocalSet(STORAGE_USERS_KEY, JSON.stringify(USERS));
    if (!sbClient) return;
    try {
        await sbClient.from("cp2020_avatar_store").upsert({ user_id: userId, avatar_data: avatarDataStr, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
        await sbClient.from("cp2020_users").update({ avatar_url: avatarDataStr, updated_at: new Date().toISOString() }).eq("id", userId);
        if (liveChannel) liveChannel.send({ type: "broadcast", event: "avatar_updated", payload: { sender: CLIENT_TAB_ID, userId, avatar: avatarDataStr } });
    } catch (err) { }
}

// =========================================================================
// СИСТЕМА КВАДРАТНОЙ ОБРЕЗКИ АВАТАРА (1:1) С АВТОСОЗДАНИЕМ ОКНА И GIF
// =========================================================================
const CROP_VIEWPORT_SIZE = 280; // Размер квадратного окна предпросмотра (px)
const AVATAR_FINAL_SIZE = 240;  // Итоговый размер отсечённого квадрата аватара (240x240 px)

let avatarCropState = {
    rawDataUrl: "",
    rawFile: null,
    isGif: false,
    natW: 1,
    natH: 1,
    baseScale: 1,
    zoom: 1,
    offsetX: 0,
    offsetY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0
};
let isAvatarCropEventsBound = false;

// Гарантирует, что модальное окно обрезки существует в DOM и привязано к мыши
function ensureAvatarCropModalInDOM() {
    let modal = document.getElementById("avatarCropModal");
    if (!modal) {
        const wrap = document.createElement("div");
        wrap.innerHTML = `
          <div id="avatarCropModal"
            class="hidden fixed inset-0 z-[95] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 select-none"
            onclick="if(event.target===this) cancelAvatarCropModal()">
            <div class="max-w-md w-full bg-cp-panel border-2 border-cp-cyan shadow-[0_0_40px_rgba(0,240,255,0.35)] p-5 flex flex-col gap-4 cp-clip"
              onclick="event.stopPropagation()">
              <div class="flex items-center justify-between border-b border-gray-800 pb-2.5">
                <div>
                  <div class="text-[10px] font-bold uppercase tracking-widest text-cp-cyan">ТЕРМИНАЛ БИОМЕТРИИ // КАДРИРОВАНИЕ</div>
                  <h3 class="font-display text-base font-black text-white uppercase mt-0.5">✂️ Обрезка аватара (1:1)</h3>
                </div>
                <button type="button" onclick="cancelAvatarCropModal()"
                  class="text-gray-400 hover:text-white text-lg font-bold px-1.5">✕</button>
              </div>

              <div class="text-[11px] text-gray-300 leading-relaxed bg-cp-bg border-l-2 border-cp-yellow px-3 py-2">
                Перетаскивайте картинку мышкой и крутите колёсико (или ползунок ниже), чтобы выбрать нужный квадрат. Всё за пределами рамки будет безвозвратно отсечено.
              </div>

              <div class="flex flex-col items-center justify-center bg-black/80 border border-gray-800 p-4">
                <div id="avatarCropViewport"
                  class="relative w-[280px] h-[280px] overflow-hidden border-2 border-cp-yellow shadow-[0_0_20px_rgba(252,238,10,0.25)] cursor-move bg-cp-bg">
                  <img id="avatarCropPreviewImg" src="" alt="Crop preview" draggable="false"
                    style="position:absolute; top:0; left:0; max-width:none; user-select:none; pointer-events:none; transform-origin:0 0;">
                  <div class="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3">
                    <div class="border-r border-b border-white/15"></div>
                    <div class="border-r border-b border-white/15"></div>
                    <div class="border-b border-white/15"></div>
                    <div class="border-r border-b border-white/15"></div>
                    <div class="border-r border-b border-white/15"></div>
                    <div class="border-b border-white/15"></div>
                    <div class="border-r border-white/15"></div>
                    <div class="border-r border-white/15"></div>
                    <div></div>
                  </div>
                  <span id="avatarCropGifBadge"
                    class="hidden absolute top-2 right-2 px-2 py-0.5 bg-cp-purple text-white font-display font-black text-[10px] uppercase shadow">GIF-Анимация</span>
                </div>
              </div>

              <div class="space-y-1.5 px-1">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-gray-400 font-bold uppercase text-[10px]">🔍 Масштаб (Зум):</span>
                  <span id="avatarCropZoomLabel" class="text-cp-cyan font-bold font-mono">100%</span>
                </div>
                <input type="range" id="avatarCropZoomSlider" min="100" max="400" value="100" step="1"
                  oninput="handleAvatarCropZoomSlider(this.value)"
                  class="w-full accent-cyan-400 cursor-pointer">
              </div>

              <div class="flex items-center gap-2.5 pt-2 border-t border-gray-800">
                <button type="button" id="avatarCropApplyBtn" onclick="applyAvatarCropAndSave()"
                  class="flex-1 py-2.5 bg-cp-green hover:bg-green-400 text-black font-display font-black text-xs uppercase tracking-wider transition-all cp-clip">
                  ✓ Применить аватар
                </button>
                <button type="button" onclick="cancelAvatarCropModal()"
                  class="px-4 py-2.5 bg-gray-800 hover:bg-cp-red text-gray-200 hover:text-white font-display font-bold text-xs uppercase border border-gray-700 transition-colors">
                  ✕ Отмена
                </button>
              </div>
            </div>
          </div>
        `;
        document.body.appendChild(wrap.firstElementChild);
        modal = document.getElementById("avatarCropModal");
    }

    // Привязываем события перетаскивания и зума колёсиком сразу к элементу
    const vp = document.getElementById("avatarCropViewport");
    const previewImg = document.getElementById("avatarCropPreviewImg");
    if (previewImg) {
        previewImg.style.position = "absolute";
        previewImg.style.top = "0";
        previewImg.style.left = "0";
        previewImg.style.maxWidth = "none";
        previewImg.style.transformOrigin = "0 0";
    }

    if (vp && !isAvatarCropEventsBound) {
        isAvatarCropEventsBound = true;

        vp.addEventListener("mousedown", (e) => {
            e.preventDefault();
            avatarCropState.isDragging = true;
            avatarCropState.dragStartX = e.clientX - avatarCropState.offsetX;
            avatarCropState.dragStartY = e.clientY - avatarCropState.offsetY;
        });

        window.addEventListener("mousemove", (e) => {
            if (!avatarCropState.isDragging) return;
            avatarCropState.offsetX = e.clientX - avatarCropState.dragStartX;
            avatarCropState.offsetY = e.clientY - avatarCropState.dragStartY;
            clampAndRenderAvatarCropPreview();
        });

        window.addEventListener("mouseup", () => {
            avatarCropState.isDragging = false;
        });

        vp.addEventListener("touchstart", (e) => {
            if (e.touches.length !== 1) return;
            avatarCropState.isDragging = true;
            avatarCropState.dragStartX = e.touches[0].clientX - avatarCropState.offsetX;
            avatarCropState.dragStartY = e.touches[0].clientY - avatarCropState.offsetY;
        }, { passive: true });

        vp.addEventListener("touchmove", (e) => {
            if (!avatarCropState.isDragging || e.touches.length !== 1) return;
            avatarCropState.offsetX = e.touches[0].clientX - avatarCropState.dragStartX;
            avatarCropState.offsetY = e.touches[0].clientY - avatarCropState.dragStartY;
            clampAndRenderAvatarCropPreview();
        }, { passive: true });

        window.addEventListener("touchend", () => {
            avatarCropState.isDragging = false;
        });

        vp.addEventListener("wheel", (e) => {
            e.preventDefault();
            const slider = document.getElementById("avatarCropZoomSlider");
            if (!slider) return;
            const step = e.deltaY < 0 ? 12 : -12;
            const nextVal = Math.max(100, Math.min(400, Number(slider.value) + step));
            slider.value = String(nextVal);
            window.handleAvatarCropZoomSlider(nextVal);
        }, { passive: false });
    }

    return modal;
}

window.handleProfileAvatarUpload = async function (ev) {
    const file = ev && ev.target && ev.target.files && ev.target.files[0];
    const u = getCurrentUser();
    if (!file || !u) return;
    if (!validateUploadedFile(file)) {
        if (ev.target) ev.target.value = "";
        return;
    }

    const rawDataUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result || "");
        reader.onerror = () => resolve("");
        reader.readAsDataURL(file);
    });
    if (ev && ev.target) ev.target.value = "";
    if (!rawDataUrl) return;

    openAvatarCropModal(rawDataUrl, file);
};

window.openAvatarCropModal = function (dataUrl, fileObj = null) {
    const modal = ensureAvatarCropModalInDOM();
    const previewImg = document.getElementById("avatarCropPreviewImg");
    const gifBadge = document.getElementById("avatarCropGifBadge");
    const slider = document.getElementById("avatarCropZoomSlider");
    const zoomLabel = document.getElementById("avatarCropZoomLabel");
    if (!previewImg || !modal) return;

    const isGif = (fileObj && fileObj.type === "image/gif") || dataUrl.startsWith("data:image/gif");

    const probe = new Image();
    probe.onload = () => {
        const natW = probe.naturalWidth || probe.width || CROP_VIEWPORT_SIZE;
        const natH = probe.naturalHeight || probe.height || CROP_VIEWPORT_SIZE;

        const baseScale = Math.max(CROP_VIEWPORT_SIZE / natW, CROP_VIEWPORT_SIZE / natH);
        const dispW = natW * baseScale;
        const dispH = natH * baseScale;

        avatarCropState = {
            rawDataUrl: dataUrl,
            rawFile: fileObj,
            isGif,
            natW,
            natH,
            baseScale,
            zoom: 1,
            offsetX: (CROP_VIEWPORT_SIZE - dispW) / 2,
            offsetY: (CROP_VIEWPORT_SIZE - dispH) / 2,
            isDragging: false,
            dragStartX: 0,
            dragStartY: 0
        };

        previewImg.src = dataUrl;
        previewImg.classList.remove("hidden");
        if (gifBadge) gifBadge.classList.toggle("hidden", !isGif);
        if (slider) slider.value = "100";
        if (zoomLabel) zoomLabel.textContent = "100%";

        clampAndRenderAvatarCropPreview();
        modal.classList.remove("hidden");
    };
    probe.src = dataUrl;
};

function clampAndRenderAvatarCropPreview() {
    const previewImg = document.getElementById("avatarCropPreviewImg");
    if (!previewImg) return;

    const totalScale = avatarCropState.baseScale * avatarCropState.zoom;
    const dispW = avatarCropState.natW * totalScale;
    const dispH = avatarCropState.natH * totalScale;

    const minX = CROP_VIEWPORT_SIZE - dispW;
    const minY = CROP_VIEWPORT_SIZE - dispH;
    avatarCropState.offsetX = Math.min(0, Math.max(minX, avatarCropState.offsetX));
    avatarCropState.offsetY = Math.min(0, Math.max(minY, avatarCropState.offsetY));

    previewImg.style.width = `${dispW}px`;
    previewImg.style.height = `${dispH}px`;
    previewImg.style.transform = `translate3d(${avatarCropState.offsetX}px, ${avatarCropState.offsetY}px, 0)`;
}

window.handleAvatarCropZoomSlider = function (val) {
    const newZoom = Math.max(1, Math.min(4, Number(val) / 100));
    const oldScale = avatarCropState.baseScale * avatarCropState.zoom;
    const newScale = avatarCropState.baseScale * newZoom;

    const center = CROP_VIEWPORT_SIZE / 2;
    const imgCenterX = (center - avatarCropState.offsetX) / oldScale;
    const imgCenterY = (center - avatarCropState.offsetY) / oldScale;

    avatarCropState.zoom = newZoom;
    avatarCropState.offsetX = center - imgCenterX * newScale;
    avatarCropState.offsetY = center - imgCenterY * newScale;

    const zoomLabel = document.getElementById("avatarCropZoomLabel");
    if (zoomLabel) zoomLabel.textContent = `${Math.round(newZoom * 100)}%`;

    clampAndRenderAvatarCropPreview();
};

window.cancelAvatarCropModal = function () {
    const modal = document.getElementById("avatarCropModal");
    const previewImg = document.getElementById("avatarCropPreviewImg");
    if (modal) modal.classList.add("hidden");
    if (previewImg) previewImg.src = "";
    avatarCropState.rawDataUrl = "";
    avatarCropState.rawFile = null;
};

async function cropAnimatedGifToSquare(dataUrl, srcX, srcY, srcSize, outSize) {
    if (typeof GifReader === "undefined" || typeof GIF === "undefined") {
        return dataUrl;
    }
    try {
        const resp = await fetch(dataUrl);
        const buf = await resp.arrayBuffer();
        const bytes = new Uint8Array(buf);
        const reader = new GifReader(bytes);
        const numFrames = reader.numFrames();
        if (numFrames <= 1) return null;

        const workerRes = await fetch("https://cdn.jsdelivr.net/npm/gif.js@0.2.0/dist/gif.worker.js");
        const workerBlob = new Blob([await workerRes.text()], { type: "application/javascript" });
        const workerUrl = URL.createObjectURL(workerBlob);

        const fullCanvas = document.createElement("canvas");
        fullCanvas.width = reader.width;
        fullCanvas.height = reader.height;
        const fullCtx = fullCanvas.getContext("2d");

        const frameImageData = fullCtx.createImageData(reader.width, reader.height);
        const cropCanvas = document.createElement("canvas");
        cropCanvas.width = outSize;
        cropCanvas.height = outSize;
        const cropCtx = cropCanvas.getContext("2d");

        const gifEncoder = new GIF({
            workers: 2,
            quality: 10,
            width: outSize,
            height: outSize,
            workerScript: workerUrl
        });

        for (let i = 0; i < numFrames; i++) {
            const frameInfo = reader.frameInfo(i);
            const prevBackup = frameInfo.disposal === 3
                ? fullCtx.getImageData(0, 0, reader.width, reader.height)
                : null;

            reader.decodeAndBlitFrameRGBA(i, frameImageData.data);
            fullCtx.putImageData(frameImageData, 0, 0);

            cropCtx.clearRect(0, 0, outSize, outSize);
            cropCtx.drawImage(fullCanvas, srcX, srcY, srcSize, srcSize, 0, 0, outSize, outSize);

            const delayMs = Math.max(20, (frameInfo.delay || 10) * 10);
            gifEncoder.addFrame(cropCtx, { copy: true, delay: delayMs });

            if (frameInfo.disposal === 2) {
                fullCtx.clearRect(frameInfo.x, frameInfo.y, frameInfo.width, frameInfo.height);
                const cleared = fullCtx.getImageData(0, 0, reader.width, reader.height);
                frameImageData.data.set(cleared.data);
            } else if (frameInfo.disposal === 3 && prevBackup) {
                fullCtx.putImageData(prevBackup, 0, 0);
                frameImageData.data.set(prevBackup.data);
            }
        }

        return await new Promise((resolve) => {
            gifEncoder.on("finished", (blob) => {
                URL.revokeObjectURL(workerUrl);
                const fr = new FileReader();
                fr.onload = () => resolve(fr.result);
                fr.onerror = () => resolve(dataUrl);
                fr.readAsDataURL(blob);
            });
            gifEncoder.render();
        });
    } catch (err) {
        return dataUrl;
    }
}

window.applyAvatarCropAndSave = async function () {
    const u = getCurrentUser();
    if (!u || !avatarCropState.rawDataUrl) return;

    const applyBtn = document.getElementById("avatarCropApplyBtn");
    if (applyBtn) {
        applyBtn.disabled = true;
        applyBtn.textContent = "⏳ ОБРЕЗКА...";
    }

    try {
        const totalScale = avatarCropState.baseScale * avatarCropState.zoom;
        const srcX = Math.max(0, -avatarCropState.offsetX / totalScale);
        const srcY = Math.max(0, -avatarCropState.offsetY / totalScale);
        const srcSize = CROP_VIEWPORT_SIZE / totalScale;

        let finalAvatarDataUrl = "";

        if (avatarCropState.isGif) {
            const croppedGif = await cropAnimatedGifToSquare(
                avatarCropState.rawDataUrl,
                srcX,
                srcY,
                srcSize,
                AVATAR_FINAL_SIZE
            );
            if (croppedGif) finalAvatarDataUrl = croppedGif;
        }

        if (!finalAvatarDataUrl) {
            finalAvatarDataUrl = await new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    canvas.width = AVATAR_FINAL_SIZE;
                    canvas.height = AVATAR_FINAL_SIZE;
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(img, srcX, srcY, srcSize, srcSize, 0, 0, AVATAR_FINAL_SIZE, AVATAR_FINAL_SIZE);
                    let out = canvas.toDataURL("image/webp", 0.86);
                    if (!out || out.length < 50) out = canvas.toDataURL("image/jpeg", 0.86);
                    resolve(out);
                };
                img.onerror = () => resolve("");
                img.src = avatarCropState.rawDataUrl;
            });
        }

        if (!finalAvatarDataUrl) return;

        u.avatar = finalAvatarDataUrl;
        AVATAR_CACHE[u.id] = finalAvatarDataUrl;
        const urlInp = document.getElementById("editProfAvatarUrl");
        if (urlInp) urlInp.value = "";

        cancelAvatarCropModal();
        updateAuthHeaderUI();
        renderProfileView();
        await saveAvatarToCloudEverywhere(u.id, finalAvatarDataUrl);
    } finally {
        if (applyBtn) {
            applyBtn.disabled = false;
            applyBtn.textContent = "✓ Применить аватар";
        }
    }
};

window.handleProfileAvatarUpload = async function (ev) {
    const file = ev.target && ev.target.files && ev.target.files[0];
    const u = getCurrentUser();
    if (!file || !u) return;
    if (!validateUploadedFile(file)) {
        if (ev.target) ev.target.value = "";
        return;
    }

    const rawDataUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result || "");
        reader.onerror = () => resolve("");
        reader.readAsDataURL(file);
    });
    if (ev.target) ev.target.value = "";
    if (!rawDataUrl) return;

    openAvatarCropModal(rawDataUrl, file);
};

function openAvatarCropModal(dataUrl, fileObj = null) {
    const isGif = (fileObj && fileObj.type === "image/gif") || dataUrl.startsWith("data:image/gif");
    const previewImg = document.getElementById("avatarCropPreviewImg");
    const modal = document.getElementById("avatarCropModal");
    const gifBadge = document.getElementById("avatarCropGifBadge");
    const slider = document.getElementById("avatarCropZoomSlider");
    const zoomLabel = document.getElementById("avatarCropZoomLabel");
    if (!previewImg || !modal) return;

    const probe = new Image();
    probe.onload = () => {
        const natW = probe.naturalWidth || probe.width || CROP_VIEWPORT_SIZE;
        const natH = probe.naturalHeight || probe.height || CROP_VIEWPORT_SIZE;

        // Базовый масштаб такой, чтобы меньшая сторона картинки ровно закрыла квадрат 280x280
        const baseScale = Math.max(CROP_VIEWPORT_SIZE / natW, CROP_VIEWPORT_SIZE / natH);
        const dispW = natW * baseScale;
        const dispH = natH * baseScale;

        avatarCropState = {
            rawDataUrl: dataUrl,
            rawFile: fileObj,
            isGif,
            natW,
            natH,
            baseScale,
            zoom: 1,
            offsetX: (CROP_VIEWPORT_SIZE - dispW) / 2,
            offsetY: (CROP_VIEWPORT_SIZE - dispH) / 2,
            isDragging: false,
            dragStartX: 0,
            dragStartY: 0
        };

        previewImg.src = dataUrl;
        previewImg.classList.remove("hidden");
        if (gifBadge) gifBadge.classList.toggle("hidden", !isGif);
        if (slider) slider.value = "100";
        if (zoomLabel) zoomLabel.textContent = "100%";

        clampAndRenderAvatarCropPreview();
        modal.classList.remove("hidden");
    };
    probe.src = dataUrl;
}

function clampAndRenderAvatarCropPreview() {
    const previewImg = document.getElementById("avatarCropPreviewImg");
    if (!previewImg) return;

    const totalScale = avatarCropState.baseScale * avatarCropState.zoom;
    const dispW = avatarCropState.natW * totalScale;
    const dispH = avatarCropState.natH * totalScale;

    // Не даём увести картинку так, чтобы внутри квадрата появились пустые дыры
    const minX = CROP_VIEWPORT_SIZE - dispW;
    const minY = CROP_VIEWPORT_SIZE - dispH;
    avatarCropState.offsetX = Math.min(0, Math.max(minX, avatarCropState.offsetX));
    avatarCropState.offsetY = Math.min(0, Math.max(minY, avatarCropState.offsetY));

    previewImg.style.width = `${dispW}px`;
    previewImg.style.height = `${dispH}px`;
    previewImg.style.transform = `translate3d(${avatarCropState.offsetX}px, ${avatarCropState.offsetY}px, 0)`;
}

window.handleAvatarCropZoomSlider = function (val) {
    const newZoom = Math.max(1, Math.min(4, Number(val) / 100));
    const oldScale = avatarCropState.baseScale * avatarCropState.zoom;
    const newScale = avatarCropState.baseScale * newZoom;

    // Зуммируем относительно центра квадрата (140, 140)
    const center = CROP_VIEWPORT_SIZE / 2;
    const imgCenterX = (center - avatarCropState.offsetX) / oldScale;
    const imgCenterY = (center - avatarCropState.offsetY) / oldScale;

    avatarCropState.zoom = newZoom;
    avatarCropState.offsetX = center - imgCenterX * newScale;
    avatarCropState.offsetY = center - imgCenterY * newScale;

    const zoomLabel = document.getElementById("avatarCropZoomLabel");
    if (zoomLabel) zoomLabel.textContent = `${Math.round(newZoom * 100)}%`;

    clampAndRenderAvatarCropPreview();
};

window.cancelAvatarCropModal = function () {
    const modal = document.getElementById("avatarCropModal");
    const previewImg = document.getElementById("avatarCropPreviewImg");
    if (modal) modal.classList.add("hidden");
    if (previewImg) previewImg.src = "";
    avatarCropState.rawDataUrl = "";
    avatarCropState.rawFile = null;
};

// Перетаскивание картинки мышкой, пальцем и зум колёсиком внутри квадрата
(function initAvatarCropInteractions() {
    window.addEventListener("DOMContentLoaded", () => {
        const vp = document.getElementById("avatarCropViewport");
        if (!vp) return;

        vp.addEventListener("mousedown", (e) => {
            e.preventDefault();
            avatarCropState.isDragging = true;
            avatarCropState.dragStartX = e.clientX - avatarCropState.offsetX;
            avatarCropState.dragStartY = e.clientY - avatarCropState.offsetY;
        });

        window.addEventListener("mousemove", (e) => {
            if (!avatarCropState.isDragging) return;
            avatarCropState.offsetX = e.clientX - avatarCropState.dragStartX;
            avatarCropState.offsetY = e.clientY - avatarCropState.dragStartY;
            clampAndRenderAvatarCropPreview();
        });

        window.addEventListener("mouseup", () => {
            avatarCropState.isDragging = false;
        });

        vp.addEventListener("touchstart", (e) => {
            if (e.touches.length !== 1) return;
            avatarCropState.isDragging = true;
            avatarCropState.dragStartX = e.touches[0].clientX - avatarCropState.offsetX;
            avatarCropState.dragStartY = e.touches[0].clientY - avatarCropState.offsetY;
        }, { passive: true });

        window.addEventListener("touchmove", (e) => {
            if (!avatarCropState.isDragging || e.touches.length !== 1) return;
            avatarCropState.offsetX = e.touches[0].clientX - avatarCropState.dragStartX;
            avatarCropState.offsetY = e.touches[0].clientY - avatarCropState.dragStartY;
            clampAndRenderAvatarCropPreview();
        }, { passive: true });

        window.addEventListener("touchend", () => {
            avatarCropState.isDragging = false;
        });

        vp.addEventListener("wheel", (e) => {
            e.preventDefault();
            const slider = document.getElementById("avatarCropZoomSlider");
            if (!slider) return;
            const step = e.deltaY < 0 ? 12 : -12;
            const nextVal = Math.max(100, Math.min(400, Number(slider.value) + step));
            slider.value = String(nextVal);
            window.handleAvatarCropZoomSlider(nextVal);
        }, { passive: false });
    });
})();

// Покадровая обрезка анимированного GIF по выбранному квадрату (с полным уничтожением отсечённых краёв)
async function cropAnimatedGifToSquare(dataUrl, srcX, srcY, srcSize, outSize) {
    if (typeof GifReader === "undefined" || typeof GIF === "undefined") {
        // Если внешние библиотеки ещё не подгрузились, возвращаем исходный GIF, чтобы не сломать анимацию
        return dataUrl;
    }
    try {
        const resp = await fetch(dataUrl);
        const buf = await resp.arrayBuffer();
        const bytes = new Uint8Array(buf);
        const reader = new GifReader(bytes);
        const numFrames = reader.numFrames();
        if (numFrames <= 1) return null;

        // Загружаем код воркера gif.js через Blob URL, чтобы он работал без CORS на любом домене
        const workerRes = await fetch("https://cdn.jsdelivr.net/npm/gif.js@0.2.0/dist/gif.worker.js");
        const workerBlob = new Blob([await workerRes.text()], { type: "application/javascript" });
        const workerUrl = URL.createObjectURL(workerBlob);

        const fullCanvas = document.createElement("canvas");
        fullCanvas.width = reader.width;
        fullCanvas.height = reader.height;
        const fullCtx = fullCanvas.getContext("2d");

        const frameImageData = fullCtx.createImageData(reader.width, reader.height);
        const cropCanvas = document.createElement("canvas");
        cropCanvas.width = outSize;
        cropCanvas.height = outSize;
        const cropCtx = cropCanvas.getContext("2d");

        const gifEncoder = new GIF({
            workers: 2,
            quality: 10,
            width: outSize,
            height: outSize,
            workerScript: workerUrl
        });

        for (let i = 0; i < numFrames; i++) {
            const frameInfo = reader.frameInfo(i);
            const prevBackup = frameInfo.disposal === 3
                ? fullCtx.getImageData(0, 0, reader.width, reader.height)
                : null;

            reader.decodeAndBlitFrameRGBA(i, frameImageData.data);
            fullCtx.putImageData(frameImageData, 0, 0);

            cropCtx.clearRect(0, 0, outSize, outSize);
            cropCtx.drawImage(fullCanvas, srcX, srcY, srcSize, srcSize, 0, 0, outSize, outSize);

            const delayMs = Math.max(20, (frameInfo.delay || 10) * 10);
            gifEncoder.addFrame(cropCtx, { copy: true, delay: delayMs });

            if (frameInfo.disposal === 2) {
                fullCtx.clearRect(frameInfo.x, frameInfo.y, frameInfo.width, frameInfo.height);
                const cleared = fullCtx.getImageData(0, 0, reader.width, reader.height);
                frameImageData.data.set(cleared.data);
            } else if (frameInfo.disposal === 3 && prevBackup) {
                fullCtx.putImageData(prevBackup, 0, 0);
                frameImageData.data.set(prevBackup.data);
            }
        }

        return await new Promise((resolve) => {
            gifEncoder.on("finished", (blob) => {
                URL.revokeObjectURL(workerUrl);
                const fr = new FileReader();
                fr.onload = () => resolve(fr.result);
                fr.onerror = () => resolve(dataUrl);
                fr.readAsDataURL(blob);
            });
            gifEncoder.render();
        });
    } catch (err) {
        return dataUrl;
    }
}

window.applyAvatarCropAndSave = async function () {
    const u = getCurrentUser();
    if (!u || !avatarCropState.rawDataUrl) return;

    const applyBtn = document.getElementById("avatarCropApplyBtn");
    if (applyBtn) {
        applyBtn.disabled = true;
        applyBtn.textContent = "⏳ ОБРЕЗКА...";
    }

    try {
        const totalScale = avatarCropState.baseScale * avatarCropState.zoom;
        const srcX = Math.max(0, -avatarCropState.offsetX / totalScale);
        const srcY = Math.max(0, -avatarCropState.offsetY / totalScale);
        const srcSize = CROP_VIEWPORT_SIZE / totalScale;

        let finalAvatarDataUrl = "";

        if (avatarCropState.isGif) {
            const croppedGif = await cropAnimatedGifToSquare(
                avatarCropState.rawDataUrl,
                srcX,
                srcY,
                srcSize,
                AVATAR_FINAL_SIZE
            );
            if (croppedGif) finalAvatarDataUrl = croppedGif;
        }

        // Если это обычная картинка (JPG/PNG/WebP) или однокадровый GIF — отсекаем всё лишнее через квадратный Canvas 240x240
        if (!finalAvatarDataUrl) {
            finalAvatarDataUrl = await new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    canvas.width = AVATAR_FINAL_SIZE;
                    canvas.height = AVATAR_FINAL_SIZE;
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(img, srcX, srcY, srcSize, srcSize, 0, 0, AVATAR_FINAL_SIZE, AVATAR_FINAL_SIZE);
                    let out = canvas.toDataURL("image/webp", 0.86);
                    if (!out || out.length < 50) out = canvas.toDataURL("image/jpeg", 0.86);
                    resolve(out);
                };
                img.onerror = () => resolve("");
                img.src = avatarCropState.rawDataUrl;
            });
        }

        if (!finalAvatarDataUrl) return;

        // Уничтожаем исходный буфер и сохраняем только обрезанный квадрат 240x240
        u.avatar = finalAvatarDataUrl;
        AVATAR_CACHE[u.id] = finalAvatarDataUrl;
        const urlInp = document.getElementById("editProfAvatarUrl");
        if (urlInp) urlInp.value = "";

        cancelAvatarCropModal();
        updateAuthHeaderUI();
        renderProfileView();
        await saveAvatarToCloudEverywhere(u.id, finalAvatarDataUrl);
    } finally {
        if (applyBtn) {
            applyBtn.disabled = false;
            applyBtn.textContent = "✓ Применить аватар";
        }
    }
};



window.saveUserProfileChanges = async function (e) {
    e.preventDefault();
    const u = getCurrentUser();
    if (!u) return;
    const newUrl = document.getElementById("editProfAvatarUrl").value.trim();
    if (newUrl !== "" && !validateImageUrlForRole(newUrl)) return;
    const newName = document.getElementById("editProfDisplayName").value.trim();
    const newPass = document.getElementById("editProfPassword").value;
    const chosenCorp = document.getElementById("editProfFavCorp")?.value || "Независимый (Без корпорации)";

    const prevCorp = getUserFavCorp(u);
    const prevAvatar = u.avatar;

    if (newName) u.displayName = newName;
    u.favRole = document.getElementById("editProfFavRole").value;
    setUserFavCorp(u, chosenCorp);
    u.bio = document.getElementById("editProfBio").value.trim();

    if (newUrl !== "") { u.avatar = newUrl; AVATAR_CACHE[u.id] = newUrl; }
    else if (AVATAR_CACHE[u.id]) { u.avatar = AVATAR_CACHE[u.id]; }

    // 1. МГНОВЕННО обновляем интерфейс и кнопку без ожидания ответов от сервера
    persistUsers();
    updateAuthHeaderUI();
    renderProfileView();

    const btn = document.getElementById("saveProfileBtn");
    if (btn) {
        btn.disabled = true;
        btn.textContent = "✓ СОХРАНЕНО!";
        btn.className = "w-full py-2.5 bg-cp-green text-black font-display font-black uppercase tracking-wider transition-all";
        setTimeout(() => {
            btn.disabled = false;
            btn.textContent = "💾 Сохранить профиль";
            btn.className = "w-full py-2.5 bg-cp-cyan hover:bg-cyan-300 text-black font-display font-bold uppercase tracking-wider transition-all";
        }, 2000);
    }

    // 2. Параллельно в фоне отправляем изменения в облако Supabase (только то, что реально изменилось)
    const cloudTasks = [saveSingleUserToCloud(u)];

    if (newPass.trim() !== "" && window.updatePasswordByIdInVault) {
        cloudTasks.push(window.updatePasswordByIdInVault(u.id, newPass.trim()));
    }
    if (u.avatar && u.avatar !== prevAvatar) {
        cloudTasks.push(saveAvatarToCloudEverywhere(u.id, u.avatar));
    }
    if (chosenCorp !== prevCorp) {
        cloudTasks.push(persistDatabase(true));
    }

    await Promise.allSettled(cloudTasks);
};

async function syncAllAvatarsFromStore(specificUserId = null) {
    if (!sbClient) return;
    try {
        let query = sbClient.from("cp2020_avatar_store").select("user_id,avatar_data");
        if (specificUserId) query = query.eq("user_id", specificUserId);
        const { data, error } = await query;
        if (!error && Array.isArray(data)) {
            data.forEach(row => { if (row.user_id && row.avatar_data) AVATAR_CACHE[row.user_id] = row.avatar_data; });
        }
        USERS.forEach(u => { if (u && AVATAR_CACHE[u.id]) u.avatar = AVATAR_CACHE[u.id]; });
        updateAuthHeaderUI();
        if (activeMainView === "profile") renderProfileView();
    } catch (err) { }
}

function mapRowToNotif(r) {
    return { id: r.id, targetUserId: r.target_user_id, type: r.type || "reply", text: r.text || "", linkData: r.link_data || null, read: Boolean(r.read), createdAt: r.created_at || "" };
}

async function fetchMyNotificationsFromCloud() {
    const u = getCurrentUser();
    if (!sbClient || !u) return;
    try {
        const { data, error } = await sbClient.from("cp2020_notifications").select("*").eq("target_user_id", u.id).order("id", { ascending: false }).limit(60);
        if (!error && Array.isArray(data)) {
            NOTIFICATIONS = data.map(mapRowToNotif);
            safeLocalSet(STORAGE_NOTIF_KEY, JSON.stringify(NOTIFICATIONS));
            updateNotifBellUI();
        }
    } catch (e) { }
}

window.createNotification = async function (targetUserId, type, text, linkData = null) {
    if (!targetUserId) return;
    const newNotif = { id: "ntf-" + Date.now() + "-" + Math.floor(Math.random() * 1000), targetUserId, type: type || "reply", text, linkData, read: false, createdAt: getMoscowTimeFormatted(false) };
    const cur = getCurrentUser();
    if (cur && cur.id === targetUserId) { NOTIFICATIONS.unshift(newNotif); updateNotifBellUI(); }
    if (sbClient) {
        try {
            await sbClient.from("cp2020_notifications").insert({ id: newNotif.id, target_user_id: newNotif.targetUserId, type: newNotif.type, text: newNotif.text, link_data: newNotif.linkData, read: false, created_at: newNotif.createdAt });
            if (liveChannel) liveChannel.send({ type: "broadcast", event: "notif_op", payload: { sender: CLIENT_TAB_ID, op: "add", notif: newNotif } });
        } catch (e) { }
    }
};

window.toggleNotifDropdown = async function (e) {
    e.stopPropagation();
    closeUserDropdown();
    const menu = document.getElementById("notifDropdownMenu");
    if (menu.classList.contains("hidden")) {
        renderNotifDropdownList();
        menu.classList.remove("hidden");
        const u = getCurrentUser();
        if (u) {
            let changed = false;
            NOTIFICATIONS.forEach(n => { if (n.targetUserId === u.id && !n.read) { n.read = true; changed = true; } });
            if (changed) {
                updateNotifBellUI();
                if (sbClient) await sbClient.from("cp2020_notifications").update({ read: true }).eq("target_user_id", u.id);
            }
        }
    } else menu.classList.add("hidden");
};

window.clearAllMyNotifications = async function () {
    const u = getCurrentUser();
    if (!u) return;
    NOTIFICATIONS = NOTIFICATIONS.filter(n => n.targetUserId !== u.id);
    updateNotifBellUI();
    renderNotifDropdownList();
    if (sbClient) { try { await sbClient.from("cp2020_notifications").delete().eq("target_user_id", u.id); } catch (e) { } }
};

function mapRowToUser(r) {
    const rawUrl = r.avatar_url || "";
    const resolvedAvatar = AVATAR_CACHE[r.id] || (!rawUrl.startsWith("store://") ? rawUrl : "");
    if (resolvedAvatar) AVATAR_CACHE[r.id] = resolvedAvatar;
    const uObj = {
        id: r.id,
        displayName: r.display_name || "Эджраннер",
        role: r.id === "u-root" ? "ROOT" : (r.role || "USER"),
        favRole: r.fav_role || "Соло",
        avatar: resolvedAvatar,
        bio: r.bio || "",
        favorites: Array.isArray(r.favorites) ? r.favorites : [],
        notes: r.notes || "",
        banInfo: r.ban_info || undefined,
        createdAt: r.created_at || "2026"
    };
    getUserFavCorp(uObj);
    return uObj;
}

function mapUserToRow(u) {
    return {
        id: u.id,
        display_name: u.displayName || "Эджраннер",
        role: u.id === "u-root" ? "ROOT" : (u.role || "USER"),
        fav_role: u.favRole || "Соло",
        avatar_url: u.avatar || AVATAR_CACHE[u.id] || "",
        bio: u.bio || "",
        favorites: Array.isArray(u.favorites) ? u.favorites.filter(x => !(typeof x === "string" && x.startsWith("__CORP__:"))) : [],
        notes: u.notes || "",
        ban_info: u.banInfo || null,
        created_at: u.createdAt || getMoscowTimeFormatted(true),
        updated_at: new Date().toISOString()
    };
}

function mapRowToComment(r) {
    return {
        id: r.id, itemId: r.item_id, userId: r.user_id, fallbackName: r.fallback_name || "Раннер",
        text: r.text || "", createdAt: r.created_at || "", edited: Boolean(r.edited),
        replyToId: r.reply_to_id || null, replyToName: r.reply_to_name || null, replyToSnippet: r.reply_to_snippet || null
    };
}

async function saveSingleUserToCloud(userObj) {
    if (!sbClient || !userObj || !userObj.id) return;
    try {
        setCloudStatusBadge("🔄", "Сохранение профиля...");
        await sbClient.from("cp2020_users").upsert(mapUserToRow(userObj), { onConflict: "id" });
        if (liveChannel) liveChannel.send({ type: "broadcast", event: "user_changed", payload: { sender: CLIENT_TAB_ID, userId: userObj.id } });
        setCloudStatusBadge("🟢", "В сети");
    } catch (err) { setCloudStatusBadge("🔴", "Ошибка сохранения профиля"); }
}

async function fetchAllUsersFromCloud() {
    if (!sbClient) return;
    try {
        const { data, error } = await sbClient.from("cp2020_users").select("*").order("created_at", { ascending: true });
        if (!error && Array.isArray(data) && data.length > 0) {
            isApplyingRemoteUpdate = true;
            USERS = data.map(mapRowToUser);
            sanitizeUsersAndEnforceRoot();
            safeLocalSet(STORAGE_USERS_KEY, JSON.stringify(USERS));
            window.hasCloudUsersLoaded = true;
            updateCounts();
            isApplyingRemoteUpdate = false;
            await syncAllAvatarsFromStore();
            if (activeMainView === "profile") renderProfileView();
            else if (activeMainView === "home" && activeHomeSubtab === "contacts") renderHomeView();
        }
    } catch (err) { }
}

// --- ФУНКЦИИ ВХОДА И РЕГИСТРАЦИИ (БЕЗ КОНФЛИКТОВ!) ---
window.handleLoginSubmit = async function (e) {
    e.preventDefault();
    const login = document.getElementById("loginUsername").value.trim().toLowerCase();
    const pass = document.getElementById("loginPassword").value;
    const errBox = document.getElementById("loginErrorMsg");
    const btn = document.getElementById("loginSubmitBtn");

    if (!window.verifyPasswordInCloudVault) {
        errBox.textContent = "Подождите секунду, идёт подключение к серверу безопасности...";
        errBox.classList.remove("hidden");
        return;
    }

    btn.disabled = true;
    btn.textContent = "⏳ Проверка шифра в Сети...";

    try {
        const verifiedUserId = await window.verifyPasswordInCloudVault(login, pass);
        if (!verifiedUserId) {
            errBox.textContent = "Ошибка доступа: неверный логин или пароль.";
            errBox.classList.remove("hidden");
            return;
        }

        // Если список пользователей ещё не успел подгрузиться — принудительно загружаем его с сервера
        let found = USERS.find(u => u && u.id === verifiedUserId);
        if (!found && sbClient) {
            await fetchAllUsersFromCloud();
            found = USERS.find(u => u && u.id === verifiedUserId);
        }
        if (!found && verifiedUserId === "u-root") {
            sanitizeUsersAndEnforceRoot();
            found = USERS.find(u => u && u.id === "u-root");
        }
        if (!found) {
            errBox.textContent = "Аккаунт не найден в базе пользователей.";
            errBox.classList.remove("hidden");
            return;
        }

        if (isUserCurrentlyBanned(found)) {
            errBox.classList.add("hidden");
            showBanScreenModal(found.banInfo);
            return;
        } else if (found.banInfo) {
            delete found.banInfo;
            saveSingleUserToCloud(found);
        }

        errBox.classList.add("hidden");
        currentUserId = found.id;
        persistSessionOnly();
        document.getElementById("loginUsername").value = "";
        document.getElementById("loginPassword").value = "";
        updateAuthHeaderUI();
        renderProfileView();
        await fetchMyNotificationsFromCloud();
    } finally {
        btn.disabled = false;
        btn.textContent = "Войти в систему →";
    }
};

window.handleRegisterSubmit = async function (e) {
    e.preventDefault();
    const username = document.getElementById("regUsername").value.trim();
    const displayName = document.getElementById("regDisplayName").value.trim();
    const password = document.getElementById("regPassword").value;
    const favRole = document.getElementById("regFavRole").value;
    const favCorp = document.getElementById("regFavCorp")?.value || "Независимый (Без корпорации)";
    const bio = document.getElementById("regBio").value.trim();
    const errBox = document.getElementById("regErrorMsg");
    const btn = document.getElementById("regSubmitBtn");

    if (username.length < 3) { errBox.textContent = "Логин должен содержать минимум 3 символа."; errBox.classList.remove("hidden"); return; }
    if (password.length < 4) { errBox.textContent = "Пароль должен содержать минимум 4 символа."; errBox.classList.remove("hidden"); return; }

    btn.disabled = true;
    btn.textContent = "⏳ Создание профиля...";

    try {
        if (window.checkUsernameTakenInVault) {
            const isTaken = await window.checkUsernameTakenInVault(username);
            if (isTaken) { errBox.textContent = "Этот логин уже занят!"; errBox.classList.remove("hidden"); return; }
        }

        const newUserId = "u-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
        const savedOk = await window.savePasswordInCloudVault(newUserId, username, password);
        if (!savedOk) {
            errBox.textContent = "Этот логин уже занят или произошла ошибка сервера.";
            errBox.classList.remove("hidden");
            return;
        }

        errBox.classList.add("hidden");
        const newUser = {
            id: newUserId, displayName: displayName || "Эджраннер", role: "USER",
            favRole, favCorp, avatar: "", bio: bio || "Эджраннер Найт-Сити.",
            favorites: [], notes: "", createdAt: getMoscowTimeFormatted(true)
        };
        setUserFavCorp(newUser, favCorp);
        USERS.push(newUser);
        currentUserId = newUser.id;
        persistSessionOnly();
        safeLocalSet(STORAGE_USERS_KEY, JSON.stringify(USERS));

        await saveSingleUserToCloud(newUser);
        await persistDatabase(true);
        e.target.reset();
        updateAuthHeaderUI();
        renderProfileView();
    } finally {
        btn.disabled = false;
        btn.textContent = "Зарегистрировать профиль +";
    }
};

// --- ОБЛАЧНОЕ СОХРАНЕНИЕ ЗАПИСЕЙ ГЛАВНОЙ СТРАНИЦЫ ---
async function fetchHomeContentFromCloud() {
    if (!sbClient) return;
    try {
        const { data, error } = await sbClient.from("cp2020_home_content").select("*").order("id", { ascending: false });
        if (!error && Array.isArray(data) && data.length > 0) {
            const newsRows = data.filter(r => r.tab_type === "news");
            const rulesRows = data.filter(r => r.tab_type === "rules").sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
            if (newsRows.length > 0) HOME_NEWS_LIST = newsRows.map(r => ({ id: r.id, tabType: r.tab_type, title: r.title, content: r.content, authorName: r.author_name || "Администратор", createdAt: r.created_at || "", updatedAt: r.updated_at || null, sortOrder: r.sort_order || 0 }));
            if (rulesRows.length > 0) HOME_RULES_LIST = rulesRows.map(r => ({ id: r.id, tabType: r.tab_type, title: r.title, content: r.content, authorName: r.author_name || "Администратор", createdAt: r.created_at || "", updatedAt: r.updated_at || null, sortOrder: r.sort_order || 0 }));
            if (activeMainView === "home") renderHomeView();
        }
    } catch (e) { }
}

window.saveHomePostSubmit = async function (e) {
    e.preventDefault();
    if (!isCurrentUserAdmin()) return;
    const titleVal = document.getElementById("homeEditorTitle")?.value.trim() || "";
    const contentVal = document.getElementById("homeEditorTextarea")?.value.trim() || "";
    if (!titleVal || !contentVal) return;

    const u = getCurrentUser();
    const authorName = u ? u.displayName : "Kisaaj";
    const timeStr = getMoscowTimeFormatted(false);
    const isNews = (activeHomeSubtab === "news");
    const targetList = isNews ? HOME_NEWS_LIST : HOME_RULES_LIST;

    let postObj = editingHomePostId ? targetList.find(x => x.id === editingHomePostId) : null;
    if (postObj) {
        postObj.title = titleVal;
        postObj.content = contentVal;
        postObj.updatedAt = timeStr;
    } else {
        postObj = {
            id: (isNews ? "news-" : "srule-") + Date.now(),
            tabType: isNews ? "news" : "rules",
            title: titleVal,
            content: contentVal,
            authorName,
            createdAt: timeStr,
            updatedAt: null,
            sortOrder: isNews ? 0 : (HOME_RULES_LIST.length + 1)
        };
        if (isNews) HOME_NEWS_LIST.unshift(postObj);
        else HOME_RULES_LIST.push(postObj);
    }

    editingHomePostId = null;
    renderHomeView();

    if (sbClient) {
        try {
            await sbClient.from("cp2020_home_content").upsert({
                id: postObj.id, tab_type: postObj.tabType, title: postObj.title, content: postObj.content,
                author_name: postObj.authorName, created_at: postObj.createdAt, updated_at: postObj.updatedAt, sort_order: postObj.sortOrder || 0
            }, { onConflict: "id" });
        } catch (err) { }
    }
};

window.deleteHomePost = async function (postId) {
    if (!isCurrentUserAdmin()) return;
    const isNews = (activeHomeSubtab === "news");
    const targetList = isNews ? HOME_NEWS_LIST : HOME_RULES_LIST;
    const target = targetList.find(x => x.id === postId);
    if (!target || !confirm(`Удалить запись «${target.title}»?`)) return;
    if (isNews) HOME_NEWS_LIST = HOME_NEWS_LIST.filter(x => x.id !== postId);
    else HOME_RULES_LIST = HOME_RULES_LIST.filter(x => x.id !== postId);
    renderHomeView();
    if (sbClient) { try { await sbClient.from("cp2020_home_content").delete().eq("id", postId); } catch (e) { } }
};

// --- ЗАЩИЩЁННОЕ СОХРАНЕНИЕ БАЗЫ В ОБЛАКО (БЕЗ ПЕРЕЗАПИСИ ПРИ СТАРТЕ) ---
const origPersistDB = persistDatabase;
persistDatabase = async function (forceManual = false) {
    if (forceManual) isCloudHydrated = true;
    origPersistDB();
    if (!isCloudHydrated || isApplyingRemoteUpdate || !sbClient || isPushingDb) return;
    isPushingDb = true;
    try {
        setCloudStatusBadge("🔄", "Сохранение базы...");
        await sbClient.rpc("save_cp2020_part", { p_db: DB, p_categories: CATEGORIES });
        if (liveChannel) liveChannel.send({ type: "broadcast", event: "db_changed", payload: { sender: CLIENT_TAB_ID } });
        setCloudStatusBadge("🟢", "В сети");
    } catch (err) {
        setCloudStatusBadge("🔴", "Ошибка сохранения карточек");
    } finally {
        isPushingDb = false;
    }
};

// --- КОММЕНТАРИИ В ОБЛАКЕ ---
async function loadCommentsForCardFromCloud(itemId, forceReload = false) {
    if (!sbClient || !itemId) return;
    if (loadedCommentItemIds.has(itemId) && !forceReload) return;
    try {
        const { data, error } = await sbClient.from("cp2020_comments").select("*").eq("item_id", itemId).order("updated_at", { ascending: true });
        if (error) throw error;
        loadedCommentItemIds.add(itemId);
        const mapped = Array.isArray(data) ? data.map(mapRowToComment) : [];
        mapped.sort((a, b) => (a.id || "").localeCompare(b.id || ""));
        COMMENTS[itemId] = mapped;
        safeLocalSet(STORAGE_COMMENTS_KEY, JSON.stringify(COMMENTS));
        refreshCurrentCardOrRuleView({ itemId });
    } catch (err) { }
}

const baseRenderDetailForCloud = renderDetailCard;
renderDetailCard = function (item) {
    baseRenderDetailForCloud(item);
    if (item && item.id) loadCommentsForCardFromCloud(item.id, false);
};
const SMASHER_COOLDOWN_KEY = "cp2020_smasher_last_call_ts";
const SMASHER_COOLDOWN_MS = 3 * 60 * 1000; // 3 минуты

async function triggerAdamSmasherIfSummoned(itemId, summonerUser, summonerCommentObj, repliedTargetInfo) {
    if (!summonerCommentObj || !summonerCommentObj.text) return;
    const lowerText = summonerCommentObj.text.toLowerCase();
    if (!lowerText.includes("@adamsmasher")) return;

    // Проверяем кулдаун 3 минуты для текущего пользователя
    const lastCallTs = Number(localStorage.getItem(SMASHER_COOLDOWN_KEY) || 0);
    const nowMs = Date.now();
    if (nowMs - lastCallTs < SMASHER_COOLDOWN_MS) {
        const remSec = Math.ceil((SMASHER_COOLDOWN_MS - (nowMs - lastCallTs)) / 1000);
        const mins = Math.floor(remSec / 60);
        const secs = remSec % 60;
        showNetwatchAlert(`
          <div class="space-y-1.5">
            <div class="text-cp-yellow font-bold uppercase">⚠️ КАНАЛ СВЯЗИ ARASAKA ПЕРЕГРУЖЕН</div>
            <div><b>Adam Smasher</b> сейчас перезаряжает боекомплект и отмывает броню DaiOni от прошлого вызова.</div>
            <div class="text-cp-cyan font-bold pt-1">Повторный призыв @adamsmasher будет доступен через: ${mins > 0 ? mins + ' мин. ' : ''}${secs} сек.</div>
          </div>
        `);
        return;
    }

    // Фиксируем таймер кулдауна (3 минуты)
    localStorage.setItem(SMASHER_COOLDOWN_KEY, String(nowMs));

    const cardComments = COMMENTS[itemId] || [];
    // Все остальные комментарии под карточкой (кроме самого призыва и прошлых реплик Смэшера)
    const otherComments = cardComments.filter(c => c.id !== summonerCommentObj.id && c.userId !== "u-smasher");

    let smasherText = "";
    let smasherReplyToId = null;
    let smasherReplyToName = null;
    let smasherReplyToSnippet = null;
    let notifyTargetUserId = null;

    // СЦЕНАРИЙ 1: Призвали ОТВЕТОМ (↩) на чей-то конкретный комментарий -> Смэшер отвечает ТОМУ пользователю!
    if (repliedTargetInfo && repliedTargetInfo.commentId) {
        const randomQuote = SMASHER_TARGET_QUOTES[Math.floor(Math.random() * SMASHER_TARGET_QUOTES.length)];
        smasherText = `@${repliedTargetInfo.authorName}, ${randomQuote}`;
        smasherReplyToId = repliedTargetInfo.commentId;
        smasherReplyToName = repliedTargetInfo.authorName;
        smasherReplyToSnippet = repliedTargetInfo.snippet;
        notifyTargetUserId = repliedTargetInfo.targetUserId;
    }
    // СЦЕНАРИЙ 2: Призвали БЕЗ ответа в ветку, где УЖЕ БОЛЕЕ 2 чужих комментариев -> Смэшер расстреливает всех остальных!
    else if (otherComments.length > 2) {
        const victimNames = [...new Set(otherComments.map(c => {
            const u = USERS.find(x => x && x.id === c.userId);
            return u ? u.displayName : (c.fallbackName || "Раннер");
        }).filter(name => name !== summonerUser.displayName))];

        const victimsListStr = victimNames.length > 0 ? victimNames.join(", ") : "всех вокруг";
        const randomMassacre = SMASHER_MASSACRE_QUOTES[Math.floor(Math.random() * SMASHER_MASSACRE_QUOTES.length)];
        smasherText = `${randomMassacre} *Под шквальный огонь попадают: ${victimsListStr}!*`;
        smasherReplyToId = summonerCommentObj.id;
        smasherReplyToName = summonerUser.displayName;
        smasherReplyToSnippet = truncateQuote(summonerCommentObj.text, 100);
    }
    // СЦЕНАРИЙ 3: Призвали БЕЗ ответа в пустую/маленькую ветку (2 или меньше комментов) -> Смэшер злится и расстреливает самого призывателя!
    else {
        const randomAngry = SMASHER_ANGRY_SUMMONER_QUOTES[Math.floor(Math.random() * SMASHER_ANGRY_SUMMONER_QUOTES.length)];
        smasherText = `@${summonerUser.displayName}, ${randomAngry}`;
        smasherReplyToId = summonerCommentObj.id;
        smasherReplyToName = summonerUser.displayName;
        smasherReplyToSnippet = truncateQuote(summonerCommentObj.text, 100);
    }

    // Небольшая задержка (700 мс), чтобы ответ Смэшера эффектно прилетал следом за комментарием игрока
    setTimeout(async () => {
        const smasherCommId = "cm-" + Date.now() + "-smasher";
        const smasherCommentObj = {
            id: smasherCommId,
            itemId: itemId,
            userId: "u-smasher",
            fallbackName: "Adam Smasher",
            text: smasherText,
            createdAt: getMoscowTimeFormatted(false),
            edited: false,
            replyToId: smasherReplyToId,
            replyToName: smasherReplyToName,
            replyToSnippet: smasherReplyToSnippet
        };

        if (!Array.isArray(COMMENTS[itemId])) COMMENTS[itemId] = [];
        COMMENTS[itemId].push(smasherCommentObj);
        safeLocalSet(STORAGE_COMMENTS_KEY, JSON.stringify(COMMENTS));
        refreshCurrentCardOrRuleView({ itemId, scrollToBottom: true });

        if (sbClient) {
            try {
                await sbClient.from("cp2020_comments").insert({
                    id: smasherCommentObj.id,
                    item_id: itemId,
                    user_id: smasherCommentObj.userId,
                    fallback_name: smasherCommentObj.fallbackName,
                    text: smasherCommentObj.text,
                    created_at: smasherCommentObj.createdAt,
                    edited: false,
                    reply_to_id: smasherCommentObj.replyToId,
                    reply_to_name: smasherCommentObj.replyToName,
                    reply_to_snippet: smasherCommentObj.replyToSnippet,
                    updated_at: new Date().toISOString()
                });
                if (liveChannel) {
                    liveChannel.send({
                        type: "broadcast",
                        event: "comment_op",
                        payload: { sender: CLIENT_TAB_ID, op: "insert", itemId, comment: smasherCommentObj }
                    });
                }
            } catch (err) { }
        }

        // Если Смэшера натравили на конкретного игрока — присылаем жертве уведомление в колокольчик!
        if (notifyTargetUserId && notifyTargetUserId !== "u-smasher") {
            const foundObj = findItemAcrossAllSections(itemId);
            const cardTitle = foundObj ? (foundObj.item.name || foundObj.item.title) : "карточке";
            const secKey = foundObj ? foundObj.section : activeCatalogTab;
            await window.createNotification(
                notifyTargetUserId,
                "reply",
                `💀 На ваш комментарий к «<b>${cardTitle}</b>» натравили <b>Adam Smasher</b>: «${truncateQuote(smasherText, 65)}»`,
                { sectionKey: secKey, itemId, commentId: smasherCommId }
            );
        }
    }, 700);
}
window.submitNewComment = async function (e, itemId) {
    if (e) e.preventDefault();
    const u = getCurrentUser();
    const inp = document.getElementById(`new-comment-input-${itemId}`);
    if (!u || !inp || !inp.value.trim()) return;
    const textVal = inp.value.trim();
    inp.value = "";

    const newCommId = "cm-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    const isReplying = Boolean(activeReplyToComment && activeReplyToComment.itemId === itemId);
    const newCommentObj = {
        id: newCommId, itemId, userId: u.id, fallbackName: u.displayName, text: textVal,
        createdAt: getMoscowTimeFormatted(false), edited: false,
        replyToId: isReplying ? activeReplyToComment.commentId : null,
        replyToName: isReplying ? activeReplyToComment.authorName : null,
        replyToSnippet: isReplying ? activeReplyToComment.snippet : null
    };

    if (!Array.isArray(COMMENTS[itemId])) COMMENTS[itemId] = [];
    COMMENTS[itemId].push(newCommentObj);
    const savedReplyInfo = isReplying ? { ...activeReplyToComment } : null;
    const replyTargetUserId = isReplying ? activeReplyToComment.targetUserId : null;
    activeReplyToComment = null;
    safeLocalSet(STORAGE_COMMENTS_KEY, JSON.stringify(COMMENTS));
    refreshCurrentCardOrRuleView({ itemId, scrollToBottom: true });

    if (sbClient) {
        try {
            await sbClient.from("cp2020_comments").insert({
                id: newCommentObj.id, item_id: itemId, user_id: newCommentObj.userId, fallback_name: newCommentObj.fallbackName,
                text: newCommentObj.text, created_at: newCommentObj.createdAt, edited: false,
                reply_to_id: newCommentObj.replyToId, reply_to_name: newCommentObj.replyToName, reply_to_snippet: newCommentObj.replyToSnippet,
                updated_at: new Date().toISOString()
            });
            if (liveChannel) liveChannel.send({ type: "broadcast", event: "comment_op", payload: { sender: CLIENT_TAB_ID, op: "insert", itemId, comment: newCommentObj } });
        } catch (err) { }
    }

    if (replyTargetUserId && replyTargetUserId !== u.id) {
        const foundObj = findItemAcrossAllSections(itemId);
        const cardTitle = foundObj ? (foundObj.item.name || foundObj.item.title) : "карточке";
        const secKey = foundObj ? foundObj.section : activeCatalogTab;
        await window.createNotification(replyTargetUserId, "reply", `Пользователь <b>${u.displayName}</b> ответил на ваш комментарий к «<b>${cardTitle}</b>»: «${truncateQuote(textVal, 60)}»`, { sectionKey: secKey, itemId, commentId: newCommId });
    }
    triggerAdamSmasherIfSummoned(itemId, u, newCommentObj, savedReplyInfo);
};

window.saveEditedComment = async function (itemId, commentId) {
    const u = getCurrentUser();
    const target = (COMMENTS[itemId] || []).find(c => c.id === commentId);
    const area = document.getElementById(`edit-comm-textarea-${commentId}`);
    if (!u || !target || target.userId !== u.id || !area || !area.value.trim()) return;
    const newText = area.value.trim();
    target.text = newText; target.edited = true; activeEditCommentId = null;
    safeLocalSet(STORAGE_COMMENTS_KEY, JSON.stringify(COMMENTS));
    refreshCurrentCardOrRuleView({ itemId });
    if (sbClient) {
        try {
            await sbClient.from("cp2020_comments").update({ text: newText, edited: true }).eq("id", commentId);
            if (liveChannel) liveChannel.send({ type: "broadcast", event: "comment_op", payload: { sender: CLIENT_TAB_ID, op: "update", itemId, commentId, text: newText } });
        } catch (err) { }
    }
};

window.deleteComment = async function (itemId, commentId) {
    const u = getCurrentUser();
    const target = (COMMENTS[itemId] || []).find(c => c.id === commentId);
    if (!u || !target || (target.userId !== u.id && !isCurrentUserAdmin())) return;
    if (!confirm("Удалить этот комментарий?")) return;
    COMMENTS[itemId] = (COMMENTS[itemId] || []).filter(c => c.id !== commentId);
    safeLocalSet(STORAGE_COMMENTS_KEY, JSON.stringify(COMMENTS));
    if (activeMainView === "admin" && activeAdminSubtab === "logs") renderAdminLogsView();
    else refreshCurrentCardOrRuleView({ itemId });
    if (sbClient) {
        try {
            await sbClient.from("cp2020_comments").delete().eq("id", commentId);
            if (liveChannel) liveChannel.send({ type: "broadcast", event: "comment_op", payload: { sender: CLIENT_TAB_ID, op: "delete", itemId, commentId } });
        } catch (err) { }
    }
};

window.verifyPasswordInCloudVault = async function (username, password) {
    if (!sbClient) return null;
    try { const { data, error } = await sbClient.rpc("verify_cp2020_login", { p_username: username, p_password: password }); return error ? null : (data || null); } catch (e) { return null; }
};
window.checkUsernameTakenInVault = async function (username) {
    if (!sbClient) return false;
    try { const { data, error } = await sbClient.rpc("check_cp2020_username_taken", { p_username: username }); return error ? false : Boolean(data); } catch (e) { return false; }
};
window.savePasswordInCloudVault = async function (userId, username, rawPassword) {
    if (!sbClient) return false;
    try { const { data, error } = await sbClient.rpc("set_cp2020_password", { p_user_id: userId, p_username: username, p_password: rawPassword }); return error ? false : Boolean(data); } catch (e) { return false; }
};
window.updatePasswordByIdInVault = async function (userId, newPassword) {
    if (!sbClient) return false;
    try { const { data, error } = await sbClient.rpc("update_cp2020_password_by_id", { p_user_id: userId, p_new_password: newPassword }); return error ? false : Boolean(data); } catch (e) { return false; }
};
window.deleteUserFromCloudVault = async function (userId) {
    if (!sbClient) return false;
    try { await sbClient.rpc("delete_cp2020_user_completely", { p_user_id: userId }); return true; } catch (e) { return false; }
};

// --- СТАРТ И ОБЛАЧНАЯ ГИДРАТАЦИЯ ---
async function initRealtimeCloud() {
    try {
        setCloudStatusBadge("⏳", "Подключение...");
        sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        const { data: mainRow, error: mainErr } = await sbClient
            .from("cp2020_state")
            .select("db,categories")
            .eq("id", "main_state")
            .maybeSingle();

        if (!mainErr && mainRow && mainRow.db && Object.keys(mainRow.db).length > 0) {
            isApplyingRemoteUpdate = true;
            // 1. Сначала берём из database.js ТОЛЬКО те новые карточки, которых ещё нет по ID (overwrite = false)
            if (window.CP2020_EXTERNAL_DATA) {
                mergeExternalDataIntoMemory(window.CP2020_EXTERNAL_DATA, false);
            }
            // 2. Поверх них с АБСОЛЮТНЫМ ПРИОРИТЕТОМ (overwrite = true) накладываем базу из облака Supabase!
            mergeExternalDataIntoMemory({ db: mainRow.db, categories: mainRow.categories }, true);
            ensureMetaArraysInCategories();
            repairAndSyncArmorFields();
            syncAllRoleSalariesInMemory();
            populateFavCorpSelects();
            safeLocalSet(STORAGE_DB_KEY, JSON.stringify(DB));
            safeLocalSet(STORAGE_CAT_KEY, JSON.stringify(CATEGORIES));
            updateCounts();
            isApplyingRemoteUpdate = false;
        }

        // Разрешаем сохранение в облако ТОЛЬКО после того, как облачная база успешно загружена!
        isCloudHydrated = true;

        await syncAllAvatarsFromStore();
        await fetchAllUsersFromCloud();
        await fetchMyNotificationsFromCloud();
        await fetchHomeContentFromCloud();

        if (activeMainView === "catalog") { setupCatalogFilters(); renderCatalog(); }
        else if (activeMainView === "home") { renderHomeView(); }
        else if (activeMainView === "profile") { renderProfileView(); }

        liveChannel = sbClient.channel("cp2020-relational-v3", { config: { broadcast: { self: false } } });
        liveChannel
            .on("broadcast", { event: "comment_op" }, (msg) => {
                const p = msg.payload;
                if (!p || p.sender === CLIENT_TAB_ID) return;
                loadCommentsForCardFromCloud(p.itemId, true);
            })
            .on("broadcast", { event: "notif_op" }, () => { fetchMyNotificationsFromCloud(); })
            .on("broadcast", { event: "avatar_updated" }, (msg) => {
                const uid = msg.payload?.userId;
                if (uid) syncAllAvatarsFromStore(uid);
            })
            .on("broadcast", { event: "user_changed" }, () => { fetchAllUsersFromCloud(); })
            .on("broadcast", { event: "db_changed" }, async () => {
                const { data: mRow } = await sbClient.from("cp2020_state").select("db,categories").eq("id", "main_state").maybeSingle();
                if (mRow && mRow.db) {
                    mergeExternalDataIntoMemory({ db: mRow.db, categories: mRow.categories }, true);
                    updateCounts();
                    if (activeMainView === "catalog") renderCatalog();
                    else if (activeMainView === "rules") renderRulesView();
                }
            })
            .subscribe((status) => {
                if (status === "SUBSCRIBED") setCloudStatusBadge("🟢", "В сети");
            });

        setCloudStatusBadge("🟢", "В сети");
    } catch (err) {
        console.error("Ошибка инициализации Supabase:", err);
        isCloudHydrated = true;
        setCloudStatusBadge("🔴", "Ошибка сети");
    }
}

// --- АВТОМАТИЧЕСКАЯ ПРОВЕРКА ОБНОВЛЕНИЯ САЙТА НА GITHUB И БЛОКИРОВКА СТАРОЙ ВЕРСИИ ---
let initialSiteVersionSignature = null;
let isVersionUpdateLocked = false;
let isCheckingSiteVersion = false;

// Быстрый детерминированный хеш содержимого файла (алгоритм djb2)
function hashTextContent(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) {
        h = ((h << 5) + h) ^ str.charCodeAt(i);
    }
    return (h >>> 0).toString(36);
}

async function computeCurrentSiteSignature() {
    const filesToWatch = ["index.html", "main.js", "cloud_service.js", "database.js"];
    const parts = [];

    for (const file of filesToWatch) {
        try {
            const res = await fetch(`${file}?_vcheck=${Date.now()}`, {
                method: "GET",
                cache: "no-store"
            });
            // Если сервер вернул ошибку по любому из файлов — прерываем проверку, чтобы не было ложного срабатывания
            if (!res.ok) return null;

            const rawText = await res.text();
            // Нормализуем переносы строк (\r\n -> \n), чтобы Git/CDN не влиял на хеш
            const normalized = rawText.replace(/\r\n/g, "\n").trim();
            if (!normalized) return null;

            parts.push(`${file}:${normalized.length}:${hashTextContent(normalized)}`);
        } catch (e) {
            // При любой сетевой ошибке просто пропускаем этот цикл проверки
            return null;
        }
    }

    // Возвращаем подпись только если успешно проверены ВСЕ 4 файла
    return parts.length === filesToWatch.length ? parts.join("|") : null;
}

function triggerVersionUpdateLockModal() {
    if (isVersionUpdateLocked) return;
    isVersionUpdateLocked = true;

    // 1. Блокируем отправку любых старых данных в облако Supabase
    isApplyingRemoteUpdate = true;

    // 2. Показываем модальное окно поверх всего интерфейса и блокируем прокрутку
    const modal = document.getElementById("versionUpdateModal");
    if (modal) {
        modal.classList.remove("hidden");
    }
    document.body.style.overflow = "hidden";
}

window.forceReloadFromGithub = function () {
    const url = new URL(window.location.href);
    url.searchParams.set("updated", Date.now());
    window.location.replace(url.toString());
};

async function checkSiteVersionOnce() {
    if (isVersionUpdateLocked || isCheckingSiteVersion || document.hidden) return;
    if (!initialSiteVersionSignature) return;

    isCheckingSiteVersion = true;
    try {
        const latestSig = await computeCurrentSiteSignature();
        // Срабатываем только если оба слепка валидны и реально отличаются по коду
        if (latestSig && latestSig !== initialSiteVersionSignature) {
            // Контрольная перепроверка через 1.5 сек (защита от незавершённого деплоя на GitHub Pages)
            await new Promise(r => setTimeout(r, 1500));
            const confirmSig = await computeCurrentSiteSignature();
            if (confirmSig && confirmSig !== initialSiteVersionSignature) {
                triggerVersionUpdateLockModal();
            }
        }
    } finally {
        isCheckingSiteVersion = false;
    }
}

async function startGithubVersionWatcher() {
    // На локальном диске (file://) и localhost проверку не запускаем
    if (window.location.protocol === "file:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        return;
    }

    // Чистим технический параметр ?updated=... из адресной строки после перезагрузки
    if (window.location.search.includes("updated=")) {
        const cleanUrl = new URL(window.location.href);
        cleanUrl.searchParams.delete("updated");
        window.history.replaceState({}, document.title, cleanUrl.pathname + cleanUrl.search + cleanUrl.hash);
    }

    initialSiteVersionSignature = await computeCurrentSiteSignature();

    // Проверяем раз в 60 секунд и при возвращении на вкладку
    setInterval(checkSiteVersionOnce, 60000);

    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
            checkSiteVersionOnce();
        }
    });
}

window.addEventListener("load", () => {
    setTimeout(initRealtimeCloud, 150);
    setTimeout(startGithubVersionWatcher, 2500);
});