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

async function compressImageForStorage(dataUrl, maxDim = 240, quality = 0.82) {
    if (!dataUrl || !dataUrl.startsWith("data:image/")) return dataUrl;
    if (dataUrl.startsWith("data:image/gif") && dataUrl.length < 350000) return dataUrl;
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

window.handleProfileAvatarUpload = async function (ev) {
    const file = ev.target.files && ev.target.files[0];
    const u = getCurrentUser();
    if (!file || !u) return;
    if (!validateUploadedFile(file)) { ev.target.value = ""; return; }
    const rawDataUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = () => resolve("");
        reader.readAsDataURL(file);
    });
    if (!rawDataUrl) return;
    const optimizedAvatar = await compressImageForStorage(rawDataUrl, 240, 0.82);
    u.avatar = optimizedAvatar;
    AVATAR_CACHE[u.id] = optimizedAvatar;
    const urlInp = document.getElementById("editProfAvatarUrl");
    if (urlInp) urlInp.value = "";
    updateAuthHeaderUI();
    renderProfileView();
    await saveAvatarToCloudEverywhere(u.id, optimizedAvatar);
    ev.target.value = "";
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

    if (newName) u.displayName = newName;
    u.favRole = document.getElementById("editProfFavRole").value;
    setUserFavCorp(u, chosenCorp);
    u.bio = document.getElementById("editProfBio").value.trim();

    if (newUrl !== "") { u.avatar = newUrl; AVATAR_CACHE[u.id] = newUrl; }
    else if (AVATAR_CACHE[u.id]) { u.avatar = AVATAR_CACHE[u.id]; }

    if (newPass.trim() !== "" && window.updatePasswordByIdInVault) {
        await window.updatePasswordByIdInVault(u.id, newPass.trim());
    }

    updateAuthHeaderUI();
    renderProfileView();
    await saveSingleUserToCloud(u);
    await persistDatabase(true);
    if (u.avatar) await saveAvatarToCloudEverywhere(u.id, u.avatar);

    const btn = document.getElementById("saveProfileBtn");
    if (btn) {
        btn.disabled = true; btn.textContent = "✓ СОХРАНЕНО!";
        btn.className = "w-full py-2.5 bg-cp-green text-black font-display font-black uppercase tracking-wider";
        setTimeout(() => {
            btn.disabled = false; btn.textContent = "💾 Сохранить профиль";
            btn.className = "w-full py-2.5 bg-cp-cyan hover:bg-cyan-300 text-black font-display font-bold uppercase tracking-wider transition-all";
        }, 2000);
    }
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

window.addEventListener("load", () => {
    setTimeout(initRealtimeCloud, 150);
});
