//
//  CRITICAL DATA
//



const FALLBACK_DATA = window.CP2020_EXTERNAL_DATA || {
    categories: {
        roles: ["Базовые роли (Corebook)"],
        weapons: ["Средние пистолеты"],
        armor: ["Мягкая броня"],
        gear: ["Инструменты и Ремонт"],
        services: ["Медицина и Trauma Team"],
        cyberware: ["Нейрооснащение"],
        borging: ["Полное боргирование (Full Body Conversion)", "Частичное боргирование", "Экзотическое боргирование (Exotics)"],
        acpa: ["Лёгкая ACPA", "Средняя ACPA", "Тяжёлая штурмовая ACPA", "Специализированная ACPA"],
        netrunning: ["Вторжение", "Кибердеки"],
        vehicles: ["Аэродайн (AV)"],
        corporations: ["Безопасность и ВПК", "Промышленность и кибернетика", "Биотехнологии и фармацевтика", "Топливо и агропром", "Инфокомп и микроэлектроника", "Медиа и связь", "Финансы и орбитальные корпорации"],
        characters: ["Соло"],
        rules: ["Бой и Оружие (ПВПВ)"]
    },
    db: {
        roles: [{ id: "r-solo", name: "Соло", origName: "Solo", category: "Базовые роли (Corebook)", ability: "Чувство Боя", stat: "ИНТ / РЕФ", skills: ["Чувство Боя", "Внимательность", "Пистолеты"], salary: "2,000 – 12,000 eb/мес", book: "CP20", desc: "Положите файл database.js в одну папку с index.html, чтобы загрузить полный каталог." }],
        weapons: [], armor: [], gear: [], services: [], cyberware: [], borging: [], acpa: [], netrunning: [], vehicles: [], corporations: [], characters: [], rules: []
    }
};



const HARDCODED_ROOT_USER = {
    id: "u-root",
    displayName: "Kisaaj",
    role: "ROOT",
    favRole: "Рефери (ГМ)",
    favCorp: "Независимый (Без корпорации)",
    avatar: "",
    bio: "Главный Администратор и создатель справочника Cyberpunk 2020.",
    favorites: [],
    notes: "Личный терминал Главного Администратора Kisaaj.",
    createdAt: "2026-01-01"
};


//
//  SMASHER
//

const SMASHER_AVATAR = "adam smasher.png";
const HARDCODED_SMASHER_USER = {
    id: "u-smasher",
    displayName: "Adam Smasher",
    role: "ARASAKA",
    favRole: "Засекречено корпорацией Arasaka",
    favCorp: "Arasaka",
    avatar: SMASHER_AVATAR,
    bio: "🔒 ДОСЬЕ ЗАСЕКРЕЧЕНО КОРПОРАЦИЕЙ ARASAKA // УРОВЕНЬ ДОПУСКА: ЧЁРНЫЙ ЛЁД",
    favorites: [],
    notes: "",
    createdAt: "Засекречено корпорацией Arasaka"
};

// 1. СЦЕНАРИЙ А: Призвали ответом (↩) на чей-то комментарий — 20 реплик по одиночной цели
const SMASHER_TARGET_QUOTES = [
    "«Никто не покинет скотобойню живым!» *Передергивает затвор дробовика и расстреливает в упор*",
    "«Ты выглядишь как кусок мяса, готовый к нарезке.» *Врубает Сандевистан и разрывает цель очередью*",
    "«Интересно, сколько в тебе хрома, а сколько дешёвых понтов?» *Пробивает грудную клетку бронированным кулаком*",
    "«Тебе сказали — не лезь в дела Arasaka!» *Выпускает рой микроракет из наплечной установки*",
    "«Мясо всегда кричит одинаково.» *Впечатывает цель в бетон стальным ботинком шасси DaiOni*",
    "«Это и есть твой лучший комментарий? Какое разочарование.» *Сносит башку выстрелом из тяжёлого пулемёта*",
    "«Твоя подписка на Trauma Team только что была аннулирована.» *Расстреливает из автодробовика*",
    "«Беги, визжи, моли о пощаде — мне нравится, когда еда дёргается!» *Давит прикладом и даёт очередь в упор*",
    "«Слабая плоть. Никакого сопротивления.» *Отрывает киберруку и добивает контрольным выстрелом*",
    "«Сильверхенд хотя бы умел меня развлечь. А ты просто мусор.» *Разносит укрытие вместе с целью из гранатомёта*",
    "«Пора обновить твой статус в базе данных на \"МЁРТВ\".» *Прошивает тело крупнокалиберной очередью*",
    "«Ты правда думал, что экран терминала тебя спасёт?!» *Вламывается сквозь стену и расстреливает с двух рук*",
    "«Никакой пощады. Только холодная сталь.» *Вгоняет моно-клинок прямо в нейропроцессор цели*",
    "«Ещё один уличный панк возомнил себя легендой Найт-Сити.» *Стирает в порошок шквальным огнём*",
    "«Скажи привет Бестии на том свете, кусок мяса!» *Поднимает за горло одной рукой и швыряет с крыши Arasaka Tower*",
    "«Твоя броня — как картон для моих калибров.» *Разряжает полный магазин разрывных патронов*",
    "«Конец связи, эджраннер.» *Наступает трехсоттикилограммовой ногой прямо на корпус цели*",
    "«Слишком медленно. Даже мой сервопривод зевает.» *Уходит с линии атаки на гиперскорости и бьёт наотмашь*",
    "«Корпорация Arasaka передаёт тебе пламенный привет.» *Выжигает позицию зажигательными боеприпасами*",
    "«Люблю запах горелой проводки и жареного мяса по утрам!» *Смеётся через вокодер и добивает очередью*"
];

// 2. СЦЕНАРИЙ Б: Призвали без ответа в пустом чате (до 2 комментариев) — злится на призвавшего!
const SMASHER_ANGRY_SUMMONER_QUOTES = [
    "«Ты какого хрена дёргаешь меня по пустякам без цели, кусок мяса?!» *Злится, разворачивает пулемёт и расстреливает самого призывателя*",
    "«Здесь даже убивать некого! Решил потратить моё время впустую?!» *Хватает призвавшего за шкирку и впечатывает в терминал DataTerm*",
    "«Ложный вызов боевой единицы Arasaka карается аннигиляцией!» *Наводит наплечную ракетницу прямо на автора комментария и нажимает спуск*",
    "«Позвал меня в пустую комнату?! Ну тогда развлекать меня будешь ТЫ!» *Загоняет призывателя в угол и шинкует свинцом*",
    "«В следующий раз указывай цель через кнопку Ответа, идиот! Хотя следующего раза для тебя не будет!» *Давит призвавшего стальным сапогом*",
    "«Ты отвлёк меня от калибровки DaiOni ради ЭТОГО?!» *Раздражённо сносит призывателя выстрелом из дробовика в упор*"
];

// 3. СЦЕНАРИЙ В: Призвали без ответа в оживлённую ветку (где уже больше 2 других комментов) — массовая бойня!
const SMASHER_MASSACRE_QUOTES = [
    "«Ха-ха-ха, сколько свежего мяса в одном месте! Сейчас будет настоящая бойня!» *Включает боевой режим DaiOni и расстреливает всех присутствующих в комментариях:*",
    "«О-о-о, да тут целая вечеринка отбросов Найт-Сити! Никто не уйдёт живым!» *Зажимает гашетки обоих пулемётов и выкашивает всю ветку комментариев:*",
    "«Слишком много болтовни в эфире! Пора зачистить этот сектор под ноль!» *Выпускает кассетный залп микроракет по всем участникам обсуждения:*",
    "«Мясорубка открыта! Становитесь в очередь на утилизацию, ублюдки!» *Прыгает в самый центр чата с крыши и устраивает тотальный расстрел всем вокруг:*",
    "«Корпорация Arasaka объявляет эту ветку комментариев зоной свободного огня! ХА-ХА-ХА!» *Активирует Сандевистан и за долю секунды разносит всех комментаторов:*"
];


//GENERAL

const DEFAULT_BOOK_SOURCES = [
    "CP20", "Chr1", "Chr2", "Chr3", "Chr4",
    "MM (Max Metal)", "BB / NET", "SOF / SOF2",
    "PAC", "WS", "SF / SW", "Eurosource", "Corp1 / Corp2 / Corp3", "Homebrew"
];

const SECTION_LABELS = {
    roles: "🎭 Роли",
    weapons: "🔫 Оружие",
    armor: "🛡️ Броня",
    gear: "🎒 Снаряжение",
    services: "💼 Услуги",
    cyberware: "🦾 Кибероснащение",
    borging: "🤖 Боргирование",
    acpa: "🛡️ ACPA",
    netrunning: "🌐 Нетраннинг",
    vehicles: "🚗 Транспорт",
    corporations: "🏢 Корпорации",
    characters: "👥 Персонажи",
    rules: "⚙️ Игровые механики"
};

const DEFAULT_USERS = [
    JSON.parse(JSON.stringify(HARDCODED_ROOT_USER)),
    JSON.parse(JSON.stringify(HARDCODED_SMASHER_USER))
];

//запуск баз данных и их константы

const STORAGE_DB_KEY = "cp2020_full_db_v50";
const STORAGE_CAT_KEY = "cp2020_full_cats_v50";
const STORAGE_USERS_KEY = "cp2020_users_v50";
const STORAGE_SESSION_KEY = "cp2020_session_user_id_v50";
const STORAGE_COMMENTS_KEY = "cp2020_comments_v60";
const STORAGE_NOTIF_KEY = "cp2020_notifs_v80";
const STORAGE_FAV_CORPS_KEY = "cp2020_user_fav_corps_v1";

let DB = JSON.parse(JSON.stringify(FALLBACK_DATA.db));
let CATEGORIES = JSON.parse(JSON.stringify(FALLBACK_DATA.categories));
let USERS = JSON.parse(JSON.stringify(DEFAULT_USERS));
let COMMENTS = {};
let NOTIFICATIONS = [];
let currentUserId = null;

let activeMainView = "home";
let activeCatalogTab = "roles";
let selectedItemId = null;
let activeRuleSubsection = "ALL";
let selectedRuleId = null;

let activeAdminSubtab = "builder";
let activeAdminLogsSubtab = "bans";
let activeBuilderType = "roles";
let activeNetBuilderKind = "program";
let editingItemId = null;
let builderGalleryImages = [];
let activeCatManagerSection = "roles";
let activeReplyToComment = null;
let activeEditCommentId = null;
let currentlyViewedPublicUserId = null;

let charBuilderState = { weaponsList: [], cyberwareList: [], armorList: [], gearList: [] };
let borgBuilderCyberwareList = [];
let acpaBuilderState = { gearList: [], weaponsList: [] };
let lightboxGalleryState = { images: [], currentIndex: 0, title: "" };

// Переменные Главной страницы
let activeHomeSubtab = "news"; // "news" | "rules" | "legal" | "contacts"
let editingHomePostId = null;
let editingContactUserId = null;
const expandedHomePosts = new Set();

const DEFAULT_SITE_RULES = [
    {
        id: "srule-1",
        tabType: "rules",
        title: "1. Уважительное общение и кибер-этика",
        content: "Терминал DataTerm открыт для всех эджраннеров, рефери и новичков НРИ <b>Cyberpunk 2020</b> от сообщества <span class=\"text-cp-cyan font-bold\">Село ДнДшеское</span>. В комментариях под карточками и в профилях запрещены прямые оскорбления участников, травля, переходы на личности и агрессивный флуд.\n\nСпоры о трактовке правил и механик <span class=\"text-cp-cyan font-bold\">Friday Night Firefight</span> приветствуются, если они ведутся аргументированно и с уважением к собеседнику.",
        authorName: "Kisaaj",
        createdAt: "2026-10-30 12:00 (МСК)",
        updatedAt: null,
        sortOrder: 1
    },
    {
        id: "srule-2",
        tabType: "rules",
        title: "2. Запрет неодобренных ссылок, спама и рекламы",
        content: "В комментариях, описаниях публичных профилей и заметках строго запрещена публикация:\n• Фишинговых, вредоносных или подозрительных ссылок;\n• Рекламы сторонних коммерческих ресурсов, магазинов и несогласованных проектов;\n• Ссылок на материалы, нарушающие законодательство.\n\nРазрешены ссылки на проверенные хостинги изображений (<span class=\"text-cp-yellow font-bold\">Imgur, GitHub, Postimages, ВК</span>) для оформления аватарок и иллюстраций карточек.",
        authorName: "Kisaaj",
        createdAt: "2026-10-30 12:05 (МСК)",
        updatedAt: null,
        sortOrder: 2
    },
    {
        id: "srule-3",
        tabType: "rules",
        title: "3. Правила оформления комментариев и Homebrew-материалов",
        content: "Комментарии под карточками оружия, ролей, имплантов и механик предназначены для:\n• Обсуждения игрового баланса и применения предмета в партиях;\n• Уточнения переводов и ссылок на книги-источники (<span class=\"text-cp-cyan font-bold\">Corebook, Chromebook 1–4, Eurosource Plus, Max Metal</span>);\n• Советов от Рефери и игроков.\n\nПри добавлении авторских карточек администрацией обязательно указывайте плашку <span class=\"text-cp-yellow font-bold\">HOMEBREW</span>.",
        authorName: "Kisaaj",
        createdAt: "2026-10-30 12:10 (МСК)",
        updatedAt: null,
        sortOrder: 3
    }
];

const DEFAULT_HOME_NEWS = [
    {
        id: "news-welcome-1",
        tabType: "news",
        title: "ДОБРО ПОЖАЛОВАТЬ В СПРАВОЧНИК CYBERPUNK 2020 // ПОМОГАЛКА",
        content: "Добро пожаловать в интерактивную русскоязычную базу данных по настольной ролевой игре <b>Cyberpunk 2020</b> от сообщества <span class=\"text-cp-cyan font-bold\">Село ДнДшеское</span>!\n\nЗдесь собраны переведённые и структурированные материалы из основной книги правил и дополнений: роли, оружие, броня, снаряжение, киберимпланты, боргирование, программы для нетраннинга, транспорт, корпорации, персонажи и игровые механики.\n\n<h4 class=\"text-cp-yellow font-display font-bold text-sm uppercase mt-2 mb-1\">Что доступно на сайте:</h4>• Умный поиск и фильтрация снаряжения по книгам-источникам, цене, надёжности (НАД) и доступности (ДОС);\n• Личный профиль Эджраннера с выбором любимой роли и корпорации, закладками «Избранное» и приватным терминалом заметок;\n• Обсуждение любой карточки в реальном времени и система уведомлений.\n\nНажмите на логотип <b>CP</b> или заголовок <b>CYBERPUNK 2020</b> в левом верхнем углу в любой момент, чтобы вернуться на эту главную страницу!",
        authorName: "Kisaaj",
        createdAt: "2026-10-30 12:00 (МСК)",
        updatedAt: null,
        sortOrder: 0
    }
];

let HOME_NEWS_LIST = JSON.parse(JSON.stringify(DEFAULT_HOME_NEWS));
let HOME_RULES_LIST = JSON.parse(JSON.stringify(DEFAULT_SITE_RULES));



//
// ROLES
//

const ROLE_SALARY_LEVELS = [
    { key: "lvl1_5", label: "Ур. 1–5", short: "1–5" },
    { key: "lvl6", label: "Ур. 6", short: "6" },
    { key: "lvl7", label: "Ур. 7", short: "7" },
    { key: "lvl8", label: "Ур. 8", short: "8" },
    { key: "lvl9", label: "Ур. 9", short: "9" },
    { key: "lvl10", label: "Ур. 10", short: "10" }
];

const CANON_ROLE_SALARIES = {
    "соло": { lvl1_5: "2 000 eb", lvl6: "3 000 eb", lvl7: "4 500 eb", lvl8: "7 000 eb", lvl9: "9 000 eb", lvl10: "12 000 eb" },
    "solo": { lvl1_5: "2 000 eb", lvl6: "3 000 eb", lvl7: "4 500 eb", lvl8: "7 000 eb", lvl9: "9 000 eb", lvl10: "12 000 eb" },
    "рокер": { lvl1_5: "1 000 eb", lvl6: "1 500 eb", lvl7: "2 500 eb", lvl8: "5 000 eb", lvl9: "8 000 eb", lvl10: "12 000 eb" },
    "rockerboy": { lvl1_5: "1 000 eb", lvl6: "1 500 eb", lvl7: "2 500 eb", lvl8: "5 000 eb", lvl9: "8 000 eb", lvl10: "12 000 eb" },
    "нетраннер": { lvl1_5: "1 000 eb", lvl6: "1 500 eb", lvl7: "3 000 eb", lvl8: "5 000 eb", lvl9: "7 000 eb", lvl10: "10 000 eb" },
    "netrunner": { lvl1_5: "1 000 eb", lvl6: "1 500 eb", lvl7: "3 000 eb", lvl8: "5 000 eb", lvl9: "7 000 eb", lvl10: "10 000 eb" },
    "медиа": { lvl1_5: "1 000 eb", lvl6: "1 200 eb", lvl7: "3 000 eb", lvl8: "5 000 eb", lvl9: "7 000 eb", lvl10: "10 000 eb" },
    "media": { lvl1_5: "1 000 eb", lvl6: "1 200 eb", lvl7: "3 000 eb", lvl8: "5 000 eb", lvl9: "7 000 eb", lvl10: "10 000 eb" },
    "кочевник": { lvl1_5: "1 000 eb", lvl6: "1 500 eb", lvl7: "2 000 eb", lvl8: "3 000 eb", lvl9: "4 000 eb", lvl10: "5 000 eb" },
    "nomad": { lvl1_5: "1 000 eb", lvl6: "1 500 eb", lvl7: "2 000 eb", lvl8: "3 000 eb", lvl9: "4 000 eb", lvl10: "5 000 eb" },
    "фиксер": { lvl1_5: "1 500 eb", lvl6: "3 000 eb", lvl7: "5 000 eb", lvl8: "7 000 eb", lvl9: "8 000 eb", lvl10: "10 000 eb" },
    "fixer": { lvl1_5: "1 500 eb", lvl6: "3 000 eb", lvl7: "5 000 eb", lvl8: "7 000 eb", lvl9: "8 000 eb", lvl10: "10 000 eb" },
    "корпорат": { lvl1_5: "1 500 eb", lvl6: "3 000 eb", lvl7: "5 000 eb", lvl8: "7 000 eb", lvl9: "9 000 eb", lvl10: "12 000 eb" },
    "corporate": { lvl1_5: "1 500 eb", lvl6: "3 000 eb", lvl7: "5 000 eb", lvl8: "7 000 eb", lvl9: "9 000 eb", lvl10: "12 000 eb" },
    "техник": { lvl1_5: "1 000 eb", lvl6: "2 000 eb", lvl7: "3 000 eb", lvl8: "4 000 eb", lvl9: "5 000 eb", lvl10: "8 000 eb" },
    "techie": { lvl1_5: "1 000 eb", lvl6: "2 000 eb", lvl7: "3 000 eb", lvl8: "4 000 eb", lvl9: "5 000 eb", lvl10: "8 000 eb" },
    "медтехник": { lvl1_5: "1 600 eb", lvl6: "3 000 eb", lvl7: "5 000 eb", lvl8: "7 000 eb", lvl9: "8 000 eb", lvl10: "10 000 eb" },
    "medtechie": { lvl1_5: "1 600 eb", lvl6: "3 000 eb", lvl7: "5 000 eb", lvl8: "7 000 eb", lvl9: "8 000 eb", lvl10: "10 000 eb" },
    "законник": { lvl1_5: "1 000 eb", lvl6: "1 200 eb", lvl7: "2 000 eb", lvl8: "3 000 eb", lvl9: "5 000 eb", lvl10: "7 000 eb" },
    "коп": { lvl1_5: "1 000 eb", lvl6: "1 200 eb", lvl7: "2 000 eb", lvl8: "3 000 eb", lvl9: "5 000 eb", lvl10: "7 000 eb" },
    "cop": { lvl1_5: "1 000 eb", lvl6: "1 200 eb", lvl7: "2 000 eb", lvl8: "3 000 eb", lvl9: "5 000 eb", lvl10: "7 000 eb" }
};

//
// DECKS
//

const DECK_TYPE_LIST = ["Сотовая", "Портативная", "Боевая дека", "Стандартная", "Дека в киберконечности"];
const DECK_OPTION_LIST = ["Электроды", "Клавиатура", "Видеоэкран", "Принтер", "Сканер", "Вокс Бокс", "Считыватель Чипов", "Доп чипы"];
const CHARACTER_STAT_KEYS = [
    { k: "stat_int", l: "ИНТ" }, { k: "stat_cool", l: "КРУТ" }, { k: "stat_ma", l: "ПЕР" },
    { k: "stat_ref", l: "РЕФ" }, { k: "stat_attr", l: "ПРВЛ" }, { k: "stat_body", l: "ТЕЛО" },
    { k: "stat_tech", l: "ТЕХ" }, { k: "stat_luck", l: "УДАЧА" }, { k: "stat_emp", l: "ЭМП" }
];

//
//  SCHEMAS
//

const SCHEMAS = {
    roles: [
        { k: "name", l: "Название роли (рус.)", ph: "Соло" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Solo" },
        { k: "category", l: "Категория роли", isCat: true, ph: "Базовые роли (Corebook)" },
        { k: "ability", l: "Особая способность", ph: "Чувство Боя", stat: "Особая способность", c: "text-cp-cyan" },
        { k: "stat", l: "Ключевой СТАТ", ph: "ИНТ / РЕФ", stat: "Ключевой СТАТ", c: "text-cp-yellow" },
        { k: "salary", l: "Зарплата (Ур. 1–10)", ph: "2,000 – 12,000 eb", stat: "Зарплата", c: "text-cp-green" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" },
        { k: "skills", l: "10 Профессиональных навыков (через запятую)", ph: "Чувство Боя, Внимательность, Пистолеты..." }
    ],
    weapons: [
        { k: "name", l: "Название оружия (рус.)", ph: "Sternmeyer M-95A4" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Sternmeyer M-95A4" },
        { k: "category", l: "Категория", isCat: true, ph: "Штурмовые винтовки" },
        { k: "damage", l: "Урон", ph: "5d6", stat: "Урон", c: "text-cp-red", span: 2 },
        { k: "ammo", l: "Боеприпас / Калибр", ph: "5.56мм", stat: "Боеприпас / Калибр", c: "text-cp-yellow", span: 2 },
        { k: "typeCode", l: "Код типа (П, ПП, ДРБ, ВИН, ТЯЖ, ОББ)", ph: "ВИН", stat: "Тип" },
        { k: "to", l: "ТО (Точность оружия)", ph: "+1", stat: "ТО (Точность)", c: "text-cp-yellow" },
        { k: "skr", l: "СКР (Кар, Кур, Плащ, Нет)", ph: "Кур", stat: "СКР (Скрыт.)", c: "text-cp-cyan" },
        { k: "dos", l: "ДОС (Отл, Обы, Мал, Ред)", ph: "Обы", stat: "ДОС (Доступ.)" },
        { k: "nad", l: "НАД (НН, ОБ, ОН, ОТ)", ph: "ОН", stat: "НАД (Надёж.)", c: "text-cp-green" },
        { k: "mag", l: "МАГ (Магазин)", ph: "30", stat: "МАГ (Магазин)" },
        { k: "sko", l: "СКО (Скоростр.)", ph: "3/30", stat: "СКО (Скоростр.)" },
        { k: "range", l: "ДИС (Дистанция)", ph: "400м", stat: "ДИС (Дистанция)", c: "text-cp-cyan" },
        { k: "cost", l: "Стоимость", ph: "750 eb", stat: "Стоимость", c: "text-cp-green", span: 4 },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" }
    ],
    armor: [
        { k: "name", l: "Название брони (рус.)", ph: "Лёгкая бронекуртка" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Light Armor Jacket" },
        { k: "category", l: "Категория брони", isCat: true, ph: "Мягкая броня" },
        { k: "os", l: "ОС (Останавливающая способность)", ph: "18", stat: "ОС (Броня)", c: "text-cp-cyan" },
        { k: "zu", l: "ЗУ (Значение утяжеления)", ph: "-1", stat: "ЗУ (Утяжеление)", c: "text-cp-yellow" },
        { k: "cost", l: "Стоимость", ph: "200 eb", stat: "Стоимость", c: "text-cp-green" },
        { k: "covers", l: "Зона защиты", ph: "Торс, Руки", stat: "Зона защиты", span: 3 },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" }
    ],
    gear: [
        { k: "name", l: "Название снаряжения (рус.)", ph: "Техсканнер" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Techscanner" },
        { k: "category", l: "Раздел снаряжения", isCat: true, ph: "Инструменты и Ремонт" },
        { k: "weight", l: "Вес / Ноша", ph: "0.5 кг", stat: "Вес / Ноша" },
        { k: "effect", l: "Игровой эффект / Бонус", ph: "+2 к ТЕХ", stat: "Игровой эффект", c: "text-cp-cyan" },
        { k: "cost", l: "Стоимость", ph: "300 eb", stat: "Стоимость", c: "text-cp-green" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" }
    ],
    services: [
        { k: "name", l: "Название услуги / расхода (рус.)", ph: "Аккаунт Trauma Team" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Trauma Team Account" },
        { k: "category", l: "Категория услуги", isCat: true, ph: "Жильё" },
        { k: "cost", l: "Тариф / Стоимость", ph: "500 eb", stat: "Тариф / Стоимость", c: "text-cp-green", span: 2 },
        { k: "unit", l: "Расчётная единица", ph: "в месяц", stat: "Расчётная единица", span: 1 },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" }
    ],
    cyberware: [
        { k: "name", l: "Название киберимпланта (рус.)", ph: "Сердце Pacesetter 2000" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Pacesetter 2000 Heart" },
        { k: "category", l: "Раздел кибернетики", isCat: true, ph: "Импланты" },
        { k: "pch", l: "ПЧ (Потеря Человечности)", ph: "2d6", stat: "ПЧ (Человечность)", c: "text-cp-red" },
        { k: "surg", l: "Код Хирургии (Н, М, С, КР)", ph: "М", stat: "Код Хирургии", c: "text-cp-yellow" },
        { k: "cost", l: "Стоимость", ph: "1,000 eb", stat: "Стоимость", c: "text-cp-green" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" }
    ],
    borging: [
        { k: "name", l: "Название модели боргирования (рус.)", ph: "Штурмовой киборг IEC Dragoon" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "IEC Dragoon" },
        { k: "borgType", l: "Тип боргирования", ph: "Полное боргирование", stat: "Тип", c: "text-cp-cyan" },
        { k: "manufacturer", l: "Производитель", ph: "IEC / Arasaka / Militech", stat: "Производитель", c: "text-cp-yellow" },
        { k: "hc", l: "ПЧ (Потеря Человечности)", ph: "16d6+4", stat: "ПЧ (Человечность)", c: "text-cp-red" },
        { k: "cost", l: "Стоимость боргирования", ph: "127,000 eb", stat: "Стоимость", c: "text-cp-green", span: 2 },
        { k: "category", l: "Категория", isCat: true, ph: "Полное боргирование (Full Body Conversion)" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "Chr2 / SOF2", stat: "Источник" }
    ],
    acpa: [
        { k: "name", l: "Название модели ACPA (рус.)", ph: "Тяжёлая броня Arasaka DaiOni" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Arasaka DaiOni" },
        { k: "category", l: "Тип ACPA", isCat: true, ph: "Тяжёлая штурмовая ACPA", stat: "Тип", c: "text-cp-cyan" },
        { k: "cost", l: "Цена", ph: "160,000 eb", stat: "Цена", c: "text-cp-green", span: 2 },
        { k: "str", l: "Сила (STR)", ph: "16", stat: "Сила", c: "text-cp-yellow" },
        { k: "sdp", l: "ОСТ (Очки Структуры)", ph: "80", stat: "ОСТ", c: "text-cp-red" },
        { k: "os", l: "ОС (Останавливающая способность)", ph: "40", stat: "ОС", c: "text-cp-cyan" },
        { k: "weight", l: "Вес", ph: "340 кг", stat: "Вес", c: "text-white" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "MM (Max Metal)" }
    ],
    vehicles: [
        { k: "name", l: "Название модели транспорта (рус.)", ph: "Многоцелевой аэродайн AV-4" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "AV-4 Multipurpose Aerodyne" },
        { k: "category", l: "Тип транспорта", isCat: true, ph: "Аэродайн (AV)", stat: "Тип транспорта", c: "text-cp-cyan" },
        { k: "topSpeed", l: "Макс. скорость (км/ч)", ph: "560 км/ч", stat: "Макс. скорость", c: "text-cp-yellow" },
        { k: "accDec", l: "УСК/ТОРМ (Ускорение / Торможение)", ph: "50 / 50", stat: "УСК/ТОРМ" },
        { k: "maneuver", l: "Манёвренность", ph: "+0", stat: "Манёвренность", c: "text-cp-green" },
        { k: "crew", l: "Экипаж", ph: "1–2", stat: "Экипаж" },
        { k: "passengers", l: "Пассажиры", ph: "6", stat: "Пассажиры" },
        { k: "range", l: "Дистанция (запас хода)", ph: "800 км", stat: "Дистанция", c: "text-cp-cyan" },
        { k: "cargo", l: "Груз (грузоподъёмность в кг)", ph: "1300 кг", stat: "Груз" },
        { k: "sdp", l: "ОСТ (Очки Структуры)", ph: "100", stat: "ОСТ (Структура)", c: "text-cp-red" },
        { k: "os", l: "ОС (Броня = ОС / 20 с округлением вниз)", ph: "40", stat: "ОС (Броня)", c: "text-cp-yellow" },
        { k: "mass", l: "Масса транспорта", ph: "4 тонны", stat: "Масса" },
        { k: "cost", l: "Стоимость (eb)", ph: "600,000 eb", stat: "Стоимость", c: "text-cp-green" },
        { k: "book", l: "Источник", isBook: true, ph: "CP20 / MM" }
    ],
    corporations: [
        { k: "name", l: "Название корпорации (EN)", ph: "Arasaka / Militech / Biotechnica" },
        { k: "origName", l: "Полное юридическое название", ph: "Arasaka Corporation" },
        { k: "category", l: "Сектор / Категория корпорации", isCat: true, ph: "Безопасность и ВПК" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20 / Corp1" },
        { k: "hq", l: "📍 Штаб-квартира", ph: "Токио, Япония" },
        { k: "employees", l: "👥 Число сотрудников", ph: "1 000 000 по всему миру" },
        { k: "soldiers", l: "🪖 Число солдат (войска)", ph: "250 000" },
        { k: "operatives", l: "🕶️ Число оперативников", ph: "20 000 тайных агентов" },
        { k: "shareholders", l: "📈 Самые крупные держатели акций", ph: "Сабуро Арасака (48%), Кэй Арасака (23%)" }
    ],
    characters: [
        { k: "name", l: "Имя / Прозвище на улицах (рус.)", ph: "Джонни Сильверхенд" },
        { k: "origName", l: "Оригинальное имя (англ.)", ph: "Johnny Silverhand" },
        { k: "category", l: "Роль персонажа", isCat: true, ph: "Рокербой", stat: "Роль", c: "text-cp-yellow" },
        { k: "reputation", l: "Репутация (от 0 до 10)", ph: "10", stat: "Репутация", c: "text-cp-cyan" },
        { k: "book", l: "Источник", isBook: true, ph: "CP20", stat: "Источник", c: "text-cp-green" }
    ],
    net_program: [
        { k: "name", l: "Название программы (рус.)", ph: "Адская Стрела" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Hellbolt" },
        { k: "category", l: "Категория программы", isCat: true, ph: "Анти-Личностные" },
        { k: "strength", l: "Сила программы (СИЛ)", ph: "4", stat: "Сила программы (СИЛ)", c: "text-cp-red" },
        { k: "mu", l: "Объём памяти — ЕП (MU)", ph: "2", stat: "Объём памяти — ЕП (MU)", c: "text-cp-cyan" },
        { k: "cost", l: "Стоимость", ph: "6,750 eb", stat: "Стоимость", c: "text-cp-green" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" }
    ],
    net_deck: [
        { k: "name", l: "Название модели кибердеки (рус.)", ph: "Кибердека SGI Tech Elysia" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "SGI Tech Elysia" },
        { k: "cpu", l: "Количество ЦПУ", ph: "1", stat: "Количество ЦПУ" },
        { k: "dataWall", l: "Стена данных (Data Wall)", ph: "+5", stat: "Стена данных", c: "text-cp-cyan" },
        { k: "codeGate", l: "Сила кодовых врат", ph: "3", stat: "Сила кодовых врат", c: "text-cp-yellow" },
        { k: "speed", l: "Скорость деки", ph: "+3", stat: "Скорость", c: "text-cp-green" },
        { k: "memory", l: "Память (ЕП / MU)", ph: "20 ЕП", stat: "Память (ЕП / MU)" },
        { k: "cost", l: "Стоимость", ph: "4,260 eb", stat: "Стоимость", c: "text-cp-green" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "Chr1" }
    ]
};



//
// GENERAL-HANDLING 
//
// MONITORING
//

// =========================================================================
// СИСТЕМА ЛОГОВ, БАНОВ И ХРАНИЛИЩА
// =========================================================================

function addChangeLogEntry(actionType, sectionKey, itemObj) {
    ensureMetaArraysInCategories();
    const u = getCurrentUser();
    const entry = {
        id: "chg-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        action: actionType,
        sectionKey,
        itemId: itemObj.id,
        itemName: itemObj.name || itemObj.title || "Без названия",
        itemCategory: itemObj.category || itemObj.subsection || "—",
        itemBook: itemObj.book || "—",
        userId: u ? u.id : "u-root",
        userName: u ? u.displayName : "Администратор",
        createdAt: typeof getMoscowTimeFormatted === "function" ? getMoscowTimeFormatted(false) : new Date().toISOString().slice(0, 16)
    };
    CATEGORIES._changeLogs.unshift(entry);
    if (CATEGORIES._changeLogs.length > 250) CATEGORIES._changeLogs = CATEGORIES._changeLogs.slice(0, 250);
}

function sanitizeUsersAndEnforceRoot() {
    let changed = false;
    const rootIdx = USERS.findIndex(u => u && (u.role === "ROOT" || u.id === "u-root"));
    if (rootIdx === -1) {
        USERS.unshift(JSON.parse(JSON.stringify(HARDCODED_ROOT_USER)));
        changed = true;
    } else {
        const existing = USERS[rootIdx];
        existing.id = "u-root";
        existing.role = "ROOT";
        if (existing.banInfo) { delete existing.banInfo; changed = true; }
    }

    const smasherIdx = USERS.findIndex(u => u && u.id === "u-smasher");
    if (smasherIdx === -1) {
        USERS.push(JSON.parse(JSON.stringify(HARDCODED_SMASHER_USER)));
    } else {
        USERS[smasherIdx] = { ...HARDCODED_SMASHER_USER, avatar: SMASHER_AVATAR };
    }

    USERS.forEach(u => {
        if (!u) return;
        if (u.password !== undefined) { delete u.password; changed = true; }
        if (u.username !== undefined) { delete u.username; changed = true; }
        getUserFavCorp(u);
    });
    return changed;
}

function formatVehicleArmorOS(osVal) {
    if (osVal === undefined || osVal === null || String(osVal).trim() === "" || String(osVal).trim() === "—") return "—";
    const num = parseInt(String(osVal).replace(/[^\d]/g, ""), 10);
    if (isNaN(num)) return String(osVal);
    return `${num} (Броня: ${Math.floor(num / 20)})`;
}

function extractMaxNumericValue(str) {
    if (!str) return 0;
    const s = String(str).replace(/,/g, "");
    const matches = s.match(/\d+(\.\d+)?/g);
    if (!matches || matches.length === 0) return 0;
    let nums = matches.map(Number);
    const lower = s.toLowerCase();
    if (lower.includes("миллион") || lower.includes("млн")) nums = nums.map(n => n < 1000 ? n * 1000000 : n);
    else if (lower.includes("тыс")) nums = nums.map(n => n < 1000 ? n * 1000 : n);
    return Math.max(...nums);
}

function parseCorpNumericStat(strVal) {
    if (!strVal) return 0;
    const match = String(strVal).match(/\d[\d\s.,]*/);
    if (!match) return 0;
    const num = parseInt(match[0].replace(/[^\d]/g, ""), 10);
    return isNaN(num) ? 0 : num;
}

function formatShortCorpStat(strVal) {
    if (!strVal || strVal === "—") return "—";
    const str = String(strVal).trim();
    const match = str.match(/^\d[\d\s.,]*/);
    if (match && match[0].trim().length >= 3) return match[0].trim();
    return str.length > 22 ? str.slice(0, 20) + "…" : str;
}

function truncateQuote(str, maxLen = 100) {
    if (!str) return "";
    const clean = String(str).replace(/\s+/g, " ").trim();
    return clean.length > maxLen ? clean.slice(0, maxLen) + "..." : clean;
}

function isUserCurrentlyBanned(userObj) {
    if (!userObj || userObj.role === "ROOT" || !userObj.banInfo) return false;
    const b = userObj.banInfo;
    if (b.until === "PERM") return true;
    return Date.now() < (Number(b.until) || 0);
}

function formatBanRemainingTime(banInfo) {
    if (!banInfo) return "";
    if (banInfo.until === "PERM") return "Навсегда (Перманентный бан)";
    const diffMs = Number(banInfo.until) - Date.now();
    if (diffMs <= 0) return "Истёк";
    const totalMins = Math.ceil(diffMs / 60000);
    if (totalMins < 60) return `Ещё ${totalMins} мин.`;
    const hours = Math.floor(totalMins / 60);
    const mins = totalMins % 60;
    if (hours < 24) return `Ещё ${hours} ч. ${mins} мин.`;
    const days = Math.floor(hours / 24);
    return `Ещё ${days} дн. ${hours % 24} ч.`;
}

function canCurrentAdminBanTarget(targetUser) {
    const cur = getCurrentUser();
    if (!cur || !targetUser) return false;
    if (targetUser.role === "ROOT" || targetUser.id === "u-root") return false;
    if (cur.id === targetUser.id) return false;
    if (cur.role === "ROOT") return true;
    if (cur.role === "ADMIN" && targetUser.role === "USER") return true;
    return false;
}

function showBanScreenModal(banInfo) {
    const durationText = formatBanRemainingTime(banInfo);
    document.getElementById("netwatchModalTitle").textContent = "🚫 ВАШ ДОСТУП ЗАБЛОКИРОВАН!";
    document.getElementById("netwatchErrorText").innerHTML = `
        <div class="space-y-2">
          <div class="text-cp-red font-bold uppercase">Ваш аккаунт был заблокирован Администрацией сайта.</div>
          <div><b>Причина бана:</b> <span class="text-white">${banInfo.reason || "Нарушение правил"}</span></div>
          <div><b>Длительность / Окончание:</b> <span class="text-cp-yellow font-bold">${durationText}</span></div>
          <div class="text-[11px] text-gray-400 pt-1">Модератор: ${banInfo.bannedBy || "Администратор"}</div>
        </div>
      `;
    document.getElementById("netwatchModal").classList.remove("hidden");
}

function openBanModal(targetUserId) {
    const target = USERS.find(u => u.id === targetUserId);
    if (!target || !canCurrentAdminBanTarget(target)) return;
    document.getElementById("banModalTargetId").value = target.id;
    document.getElementById("banModalTargetName").textContent = target.displayName;
    document.getElementById("banDurationSelect").value = "60";
    document.getElementById("customBanMinutesBox").classList.add("hidden");
    document.getElementById("banReasonInput").value = "";
    document.getElementById("banUserModal").classList.remove("hidden");
}
function closeBanModal() { document.getElementById("banUserModal").classList.add("hidden"); }
function toggleCustomBanMinutes() {
    const val = document.getElementById("banDurationSelect").value;
    document.getElementById("customBanMinutesBox").classList.toggle("hidden", val !== "CUSTOM");
}

function compressTextData(rawStr) {
    if (!rawStr || typeof LZString === "undefined" || rawStr.length > 150000) return rawStr;
    try { return "LZ1::" + LZString.compressToUTF16(rawStr); } catch (e) { return rawStr; }
}

function decompressTextData(storedStr) {
    if (!storedStr || typeof storedStr !== "string") return storedStr;
    if (storedStr.startsWith("LZ1::") && typeof LZString !== "undefined") {
        try { return LZString.decompressFromUTF16(storedStr.slice(5)); } catch (e) { return storedStr; }
    }
    return storedStr;
}

function safeLocalSet(key, valueStr) {
    try {
        localStorage.setItem(key, compressTextData(valueStr));
    } catch (quotaErr) {
        // ВАЖНО: Никогда не удаляем STORAGE_USERS_KEY и STORAGE_SESSION_KEY, чтобы не выкидывало из профиля!
        const oldKeys = ["cp2020_rus_db_v2", "cp2020_rus_db_v25", "cp2020_full_db_v30", "cp2020_full_db_v40", "cp2020_full_db_v51"];
        oldKeys.forEach(k => { try { localStorage.removeItem(k); } catch (e) { } });
        try { localStorage.setItem(key, compressTextData(valueStr)); } catch (e2) { }
    }
}

// Если overwriteExisting = false (database.js), уже существующие в памяти карточки НЕ перезаписываются!
function mergeExternalDataIntoMemory(extData, overwriteExisting = true) {
    if (!extData) return;
    const srcDb = extData.db || extData;
    const srcCats = extData.categories || {};

    const deletedCardsSet = new Set(Array.isArray(CATEGORIES._deletedCardIds) ? CATEGORIES._deletedCardIds : []);
    if (Array.isArray(srcCats._deletedCardIds)) {
        srcCats._deletedCardIds.forEach(id => deletedCardsSet.add(id));
    }

    Object.keys(SECTION_LABELS).forEach(sec => {
        if (Array.isArray(srcDb[sec]) && srcDb[sec].length > 0) {
            const mapById = new Map();
            (DB[sec] || []).forEach(it => {
                if (it && it.id && !deletedCardsSet.has(it.id)) mapById.set(it.id, it);
            });
            srcDb[sec].forEach(it => {
                if (!it || !it.id || deletedCardsSet.has(it.id)) return;
                if (overwriteExisting || !mapById.has(it.id)) {
                    mapById.set(it.id, it);
                }
            });
            DB[sec] = Array.from(mapById.values());
        }
        if (Array.isArray(srcCats[sec])) {
            CATEGORIES[sec] = [...new Set([...(CATEGORIES[sec] || []), ...srcCats[sec]])];
        }
    });

    if (Array.isArray(srcCats._books)) {
        CATEGORIES._books = [...new Set([...(CATEGORIES._books || DEFAULT_BOOK_SOURCES), ...srcCats._books])];
    }
    if (Array.isArray(srcCats._changeLogs)) {
        CATEGORIES._changeLogs = srcCats._changeLogs;
    }
    if (srcCats._userFavCorps && typeof srcCats._userFavCorps === "object") {
        CATEGORIES._userFavCorps = { ...(CATEGORIES._userFavCorps || {}), ...srcCats._userFavCorps };
    }
    if (srcCats._adminContacts && typeof srcCats._adminContacts === "object") {
        CATEGORIES._adminContacts = { ...(CATEGORIES._adminContacts || {}), ...srcCats._adminContacts };
    }
    if (Array.isArray(srcCats._pendingSubmissions)) {
        CATEGORIES._pendingSubmissions = srcCats._pendingSubmissions;
    }
    if (deletedCardsSet.size > 0) {
        CATEGORIES._deletedCardIds = Array.from(deletedCardsSet);
    }
}

function loadSavedData() {
    try {
        const savedSession = localStorage.getItem(STORAGE_SESSION_KEY);
        currentUserId = (savedSession && savedSession !== "null" && savedSession !== "undefined") ? savedSession.trim() : null;
    } catch (e) { currentUserId = null; }

    try {
        const rawCats = localStorage.getItem(STORAGE_CAT_KEY);
        if (rawCats) {
            const parsedCats = JSON.parse(decompressTextData(rawCats));
            if (parsedCats && typeof parsedCats === "object") mergeExternalDataIntoMemory({ categories: parsedCats }, true);
        }
    } catch (e) { }

    try {
        const rawDb = localStorage.getItem(STORAGE_DB_KEY);
        if (rawDb) {
            const parsed = JSON.parse(decompressTextData(rawDb));
            if (parsed && typeof parsed === "object") mergeExternalDataIntoMemory({ db: parsed }, true);
        }
    } catch (e) { }

    try {
        const rawUsers = localStorage.getItem(STORAGE_USERS_KEY);
        if (rawUsers) {
            const parsedUsers = JSON.parse(decompressTextData(rawUsers));
            if (Array.isArray(parsedUsers)) {
                parsedUsers.forEach(u => {
                    if (!u || !u.id) return;
                    const idx = USERS.findIndex(ex => ex.id === u.id);
                    if (idx !== -1) USERS[idx] = u;
                    else USERS.push(u);
                });
            }
        }
    } catch (e) { }

    ensureMetaArraysInCategories();
    sanitizeUsersAndEnforceRoot();
    repairAndSyncArmorFields();
    syncAllRoleSalariesInMemory();

    try {
        const rawComm = localStorage.getItem(STORAGE_COMMENTS_KEY);
        if (rawComm) {
            const parsedComm = JSON.parse(decompressTextData(rawComm));
            if (parsedComm && typeof parsedComm === "object") COMMENTS = parsedComm;
        }
    } catch (e) { }

    try {
        const rawNotifs = localStorage.getItem(STORAGE_NOTIF_KEY);
        if (rawNotifs) {
            const parsedNotifs = JSON.parse(decompressTextData(rawNotifs));
            if (Array.isArray(parsedNotifs)) NOTIFICATIONS = parsedNotifs;
        }
    } catch (e) { }
}

function persistDatabase() {
    safeLocalSet(STORAGE_DB_KEY, JSON.stringify(DB));
    safeLocalSet(STORAGE_CAT_KEY, JSON.stringify(CATEGORIES));
}

function persistSessionOnly() {
    try {
        if (currentUserId) localStorage.setItem(STORAGE_SESSION_KEY, currentUserId);
        else localStorage.removeItem(STORAGE_SESSION_KEY);
    } catch (e) { }
    updateAuthHeaderUI();
}

function persistUsers() {
    try {
        if (currentUserId) localStorage.setItem(STORAGE_SESSION_KEY, currentUserId);
        else localStorage.removeItem(STORAGE_SESSION_KEY);
    } catch (e) { }
    safeLocalSet(STORAGE_USERS_KEY, JSON.stringify(USERS));
    updateAuthHeaderUI();
}
function persistComments() { safeLocalSet(STORAGE_COMMENTS_KEY, JSON.stringify(COMMENTS)); }
function persistNotifications() { safeLocalSet(STORAGE_NOTIF_KEY, JSON.stringify(NOTIFICATIONS)); updateNotifBellUI(); }

function getCurrentUser() {
    if (!currentUserId) return null;
    return USERS.find(u => u && u.id === currentUserId) || null;
}
function isCurrentUserAdmin() { const u = getCurrentUser(); return Boolean(u && (u.role === "ROOT" || u.role === "ADMIN")); }
function isCurrentUserRoot() { const u = getCurrentUser(); return Boolean(u && (u.role === "ROOT" || u.id === "u-root")); }

//
//  SYNC
//

// =========================================================================
// СИНХРОНИЗАТОРЫ БРОНИ, ЗАРПЛАТ РОЛЕЙ И РАСЧЁТА ПАТРОНОВ ОРУЖИЯ
// =========================================================================


function repairAndSyncArmorFields() {
    if (!Array.isArray(DB.armor)) return;
    const extArmor = (window.CP2020_EXTERNAL_DATA && window.CP2020_EXTERNAL_DATA.db && Array.isArray(window.CP2020_EXTERNAL_DATA.db.armor))
        ? window.CP2020_EXTERNAL_DATA.db.armor : [];

    DB.armor.forEach(item => {
        if (!item) return;
        const match = extArmor.find(ext => ext.id === item.id || (ext.name && item.name && ext.name.toLowerCase() === item.name.toLowerCase()));
        const realCovers = (item.covers && item.covers !== "—") ? item.covers : (item.coverage && item.coverage !== "—") ? item.coverage : (match ? (match.covers || match.coverage) : "");
        const realOs = (item.os !== undefined && item.os !== "" && item.os !== "—") ? item.os : (item.sp !== undefined && item.sp !== "" && item.sp !== "—") ? item.sp : (match ? (match.os || match.sp) : "");
        const realZu = (item.zu !== undefined && item.zu !== "" && item.zu !== "—") ? item.zu : (item.ev !== undefined && item.ev !== "" && item.ev !== "—") ? item.zu || item.ev : (match ? (match.zu || match.ev) : "");

        if (realCovers) { item.covers = realCovers; item.coverage = realCovers; }
        if (realOs !== "") { item.os = realOs; item.sp = realOs; }
        if (realZu !== "") { item.zu = realZu; item.ev = realZu; }
    });
}

function resolveRoleSalaryTable(roleItem) {
    if (!roleItem) return { lvl1_5: "—", lvl6: "—", lvl7: "—", lvl8: "—", lvl9: "—", lvl10: "—" };
    if (roleItem.salaryTable && typeof roleItem.salaryTable === "object") {
        const minVal = (roleItem.salaryTable.lvl1_5 || "").trim();
        const maxVal = (roleItem.salaryTable.lvl10 || "").trim();
        if (minVal && maxVal && minVal !== "—" && maxVal !== "—") {
            roleItem.salary = `${minVal} — ${maxVal}`;
        }
        return roleItem.salaryTable;
    }
    const nameLow = (roleItem.name || "").toLowerCase();
    const origLow = (roleItem.origName || "").toLowerCase();
    for (const [key, table] of Object.entries(CANON_ROLE_SALARIES)) {
        if (nameLow.includes(key) || origLow.includes(key)) {
            roleItem.salaryTable = { ...table };
            roleItem.salary = `${table.lvl1_5} — ${table.lvl10}`;
            return roleItem.salaryTable;
        }
    }
    const rawSal = String(roleItem.salary || "").trim();
    if (rawSal && rawSal !== "—") {
        const parts = rawSal.split(/\s*[—–-]\s*/);
        const minS = parts[0] || rawSal;
        const maxS = parts[1] || parts[0] || "—";
        roleItem.salaryTable = { lvl1_5: minS, lvl6: "—", lvl7: "—", lvl8: "—", lvl9: "—", lvl10: maxS };
        roleItem.salary = `${minS} — ${maxS}`;
        return roleItem.salaryTable;
    }
    return { lvl1_5: "—", lvl6: "—", lvl7: "—", lvl8: "—", lvl9: "—", lvl10: "—" };
}

function syncAllRoleSalariesInMemory() {
    if (!Array.isArray(DB.roles)) return;
    DB.roles.forEach(r => resolveRoleSalaryTable(r));
}

function parseMaxMagazineCapacity(magRaw) {
    if (magRaw === undefined || magRaw === null) return null;
    const str = String(magRaw).trim();
    if (!str || str === "-" || str === "—" || str.toUpperCase() === "NA" || str.toUpperCase() === "N/A") return null;

    const multMatch = str.match(/(\d+)\s*[xх×*]\s*(\d+)/i);
    if (multMatch) {
        const a = parseInt(multMatch[1], 10);
        const b = parseInt(multMatch[2], 10);
        if (!isNaN(a) && !isNaN(b) && a * b > 0) return a * b;
    }
    const numbers = str.match(/\d+/g);
    if (!numbers || numbers.length === 0) return null;
    const parsedNums = numbers.map(n => parseInt(n, 10)).filter(n => !isNaN(n) && n > 0);
    return parsedNums.length === 0 ? null : Math.max(...parsedNums);
}

function calculateWeaponMagCost(weaponItem) {
    if (!weaponItem) return null;
    const casing = weaponItem.ammoCasing; // "caseless" | "cased" | ""
    if (casing !== "caseless" && casing !== "cased") return null;
    const maxMag = parseMaxMagazineCapacity(weaponItem.mag);
    if (!maxMag || maxMag <= 0) return null;
    const multiplier = (casing === "caseless") ? 0.5 : 1;
    return {
        costEb: Math.floor(maxMag * multiplier),
        maxMag,
        multiplier,
        casing
    };
}

window.handleQuickWeaponCasingChange = function (weaponId, clickedType, isChecked) {
    if (!isCurrentUserAdmin()) return;
    const weapon = (DB.weapons || []).find(w => w && w.id === weaponId);
    if (!weapon) return;

    if (clickedType === "caseless") {
        weapon.ammoCasing = isChecked ? "caseless" : "";
    } else if (clickedType === "cased") {
        weapon.ammoCasing = isChecked ? "cased" : "";
    }

    addChangeLogEntry("edited", "weapons", weapon);
    persistDatabase(true);
    renderDetailCard(weapon);
};

window.handleBuilderCasingCheckbox = function (clickedType) {
    const cbCaseless = document.getElementById("builderCbCaseless");
    const cbCased = document.getElementById("builderCbCased");
    const hiddenInp = document.getElementById("builderAmmoCasingInput");
    if (!cbCaseless || !cbCased || !hiddenInp) return;

    if (clickedType === "caseless") {
        if (cbCaseless.checked) {
            cbCased.checked = false;
            hiddenInp.value = "caseless";
        } else {
            hiddenInp.value = "";
        }
    } else if (clickedType === "cased") {
        if (cbCased.checked) {
            cbCaseless.checked = false;
            hiddenInp.value = "cased";
        } else {
            hiddenInp.value = "";
        }
    }
};

window.handleQuickArmorTypeChange = function (armorId, clickedType, isChecked) {
    if (!isCurrentUserAdmin()) return;
    const armor = (DB.armor || []).find(a => a && a.id === armorId);
    if (!armor) return;

    if (clickedType === "soft") {
        armor.armorType = isChecked ? "soft" : "";
    } else if (clickedType === "hard") {
        armor.armorType = isChecked ? "hard" : "";
    }

    addChangeLogEntry("edited", "armor", armor);
    persistDatabase(true);
    renderDetailCard(armor);
};

window.handleBuilderArmorTypeCheckbox = function (clickedType) {
    const cbSoft = document.getElementById("builderCbArmorSoft");
    const cbHard = document.getElementById("builderCbArmorHard");
    const hiddenInp = document.getElementById("builderArmorTypeInput");
    if (!cbSoft || !cbHard || !hiddenInp) return;

    if (clickedType === "soft") {
        if (cbSoft.checked) {
            cbHard.checked = false;
            hiddenInp.value = "soft";
        } else {
            hiddenInp.value = "";
        }
    } else if (clickedType === "hard") {
        if (cbHard.checked) {
            cbSoft.checked = false;
            hiddenInp.value = "hard";
        } else {
            hiddenInp.value = "";
        }
    }
};

//UTIL


// =========================================================================
// БАЗОВЫЕ УТИЛИТЫ И БЕЗОПАСНОСТЬ
// =========================================================================


function escapeHtmlAttr(str) {
    if (str === undefined || str === null) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function dash(val) {
    if (val === undefined || val === null) return "—";
    const s = String(val).trim();
    return s === "" ? "—" : s;
}

function showNetwatchAlert(msgHtml) {
    document.getElementById("netwatchModalTitle").textContent = "🚨 СЕТЕВОЙ ДОЗОР БДИТ!";
    document.getElementById("netwatchErrorText").innerHTML = msgHtml;
    document.getElementById("netwatchModal").classList.remove("hidden");
}
function closeNetwatchModal() {
    document.getElementById("netwatchModal").classList.add("hidden");
}

function validateUploadedFile(file) {
    if (!file) return false;
    const u = getCurrentUser();
    if (u && u.role === "ROOT") return true;
    const isAdm = Boolean(u && u.role === "ADMIN");
    const maxMb = isAdm ? 50 : 10;
    if (file.size > maxMb * 1024 * 1024) {
        showNetwatchAlert(`Размер файла превышает ваш допуск (максимум <b>${maxMb} МБ</b>).`);
        return false;
    }
    return true;
}

function validateImageUrlForRole(urlStr) {
    if (!urlStr) return true;
    const s = urlStr.trim();
    if (!s.startsWith("http://") && !s.startsWith("https://") && !s.startsWith("data:image/")) {
        showNetwatchAlert("Разрешены только прямые ссылки, начинающиеся с <b>https://</b> или <b>http://</b>.");
        return false;
    }
    return true;
}

function ensureMetaArraysInCategories() {
    Object.keys(SECTION_LABELS).forEach(sec => {
        if (!Array.isArray(DB[sec])) DB[sec] = [];
        if (!Array.isArray(CATEGORIES[sec])) CATEGORIES[sec] = [];
    });
    if (CATEGORIES.corporations.length === 0) {
        CATEGORIES.corporations = [
            "Безопасность и ВПК", "Промышленность и кибернетика", "Биотехнологии и фармацевтика",
            "Топливо и агропром", "Инфокомп и микроэлектроника", "Медиа и связь", "Финансы и орбитальные корпорации"
        ];
    }
    CATEGORIES.borging = (CATEGORIES.borging || []).filter(c => !c.includes("ACPA"));
    if (CATEGORIES.borging.length === 0) {
        CATEGORIES.borging = [
            "Полное боргирование (Full Body Conversion)",
            "Частичное боргирование",
            "Экзотическое боргирование (Exotics)"
        ];
    }
    if (CATEGORIES.acpa.length === 0) {
        CATEGORIES.acpa = [
            "Лёгкая ACPA",
            "Средняя ACPA",
            "Тяжёлая штурмовая ACPA",
            "Специализированная ACPA"
        ];
    }
    if (!Array.isArray(CATEGORIES._books) || CATEGORIES._books.length === 0) {
        CATEGORIES._books = [...DEFAULT_BOOK_SOURCES];
    }
    if (!Array.isArray(CATEGORIES._changeLogs)) {
        CATEGORIES._changeLogs = [];
    }
    if (!Array.isArray(CATEGORIES._deletedCardIds)) {
        CATEGORIES._deletedCardIds = [];
    }
    if (!CATEGORIES._userFavCorps || typeof CATEGORIES._userFavCorps !== "object") {
        CATEGORIES._userFavCorps = {};
    }
    if (!CATEGORIES._adminContacts || typeof CATEGORIES._adminContacts !== "object") {
        CATEGORIES._adminContacts = {
            "u-root": {
                roleTitle: "Главный Архитектор и Создатель базы",
                note: "По вопросам развития проекта, перевода книг Cyberpunk 2020 и сотрудничества.",
                links: [{ label: "Сообщество ВК (Село ДнДшеское)", url: "https://vk.ru/selodnd" }]
            }
        };
    }
}

function getAllBookSources() {
    ensureMetaArraysInCategories();
    const fromItems = [];
    Object.keys(SECTION_LABELS).forEach(sec => {
        (DB[sec] || []).forEach(it => {
            if (it && it.book && it.book !== "—") fromItems.push(String(it.book).trim());
        });
    });
    return [...new Set([...CATEGORIES._books, ...fromItems])].filter(Boolean);
}

//
//  FV_CORP
//

// =========================================================================
// ЛЮБИМАЯ КОРПОРАЦИЯ ПОЛЬЗОВАТЕЛЯ (БЕЗ ЗАСОРЕНИЯ ИЗБРАННОГО!)
// =========================================================================


function getUserFavCorp(userObj) {
    if (!userObj) return "Независимый (Без корпорации)";
    ensureMetaArraysInCategories();

    // Очищаем старый фантомный маркер __CORP__: из избранного, если он там остался
    if (Array.isArray(userObj.favorites)) {
        const idx = userObj.favorites.findIndex(x => typeof x === "string" && x.startsWith("__CORP__:"));
        if (idx !== -1) {
            const extracted = userObj.favorites[idx].slice(9).trim();
            userObj.favorites.splice(idx, 1);
            if (extracted && userObj.id) {
                CATEGORIES._userFavCorps[userObj.id] = extracted;
                userObj.favCorp = extracted;
            }
        }
    }

    try {
        const localRaw = localStorage.getItem(STORAGE_FAV_CORPS_KEY);
        if (localRaw) {
            const parsed = JSON.parse(localRaw);
            if (parsed && typeof parsed === "object") {
                Object.assign(CATEGORIES._userFavCorps, parsed);
            }
        }
    } catch (e) { }

    if (userObj.id && CATEGORIES._userFavCorps[userObj.id]) {
        userObj.favCorp = CATEGORIES._userFavCorps[userObj.id];
        return userObj.favCorp;
    }
    if (userObj.favCorp && String(userObj.favCorp).trim() !== "") {
        return userObj.favCorp;
    }
    return "Независимый (Без корпорации)";
}

function setUserFavCorp(userObj, corpName) {
    if (!userObj) return;
    ensureMetaArraysInCategories();
    const cleanCorp = (corpName || "").trim() || "Независимый (Без корпорации)";
    userObj.favCorp = cleanCorp;
    if (userObj.id) {
        CATEGORIES._userFavCorps[userObj.id] = cleanCorp;
        try {
            localStorage.setItem(STORAGE_FAV_CORPS_KEY, JSON.stringify(CATEGORIES._userFavCorps));
        } catch (e) { }
    }
    if (Array.isArray(userObj.favorites)) {
        userObj.favorites = userObj.favorites.filter(x => !(typeof x === "string" && x.startsWith("__CORP__:")));
    }
}

function getAvailableCorporationNamesList() {
    const list = ["Независимый (Без корпорации)"];
    (DB.corporations || []).forEach(c => {
        if (c && c.name && !list.includes(c.name)) list.push(c.name);
    });
    return list;
}

function populateFavCorpSelects() {
    const corpNames = getAvailableCorporationNamesList();
    const optionsHtml = corpNames.map(c => `<option value="${escapeHtmlAttr(c)}">${c}</option>`).join("");

    const regSel = document.getElementById("regFavCorp");
    if (regSel) {
        const prev = regSel.value;
        regSel.innerHTML = optionsHtml;
        if (prev && corpNames.includes(prev)) regSel.value = prev;
    }

    const editSel = document.getElementById("editProfFavCorp");
    if (editSel) {
        const prev = editSel.value;
        editSel.innerHTML = optionsHtml;
        if (prev && corpNames.includes(prev)) editSel.value = prev;
    }
}

//NOTIF PROF

// =========================================================================
// УВЕДОМЛЕНИЯ И ПУБЛИЧНЫЕ ПРОФИЛИ
// =========================================================================

function getMyNotifications() {
    const u = getCurrentUser();
    return u ? NOTIFICATIONS.filter(n => n.targetUserId === u.id) : [];
}

function updateNotifBellUI() {
    const u = getCurrentUser();
    const bellBtn = document.getElementById("notifBellBtn");
    const redDot = document.getElementById("notifRedDot");
    if (!u || !bellBtn || !redDot) return;
    const hasUnread = getMyNotifications().some(n => !n.read);
    redDot.classList.toggle("hidden", !hasUnread);
    bellBtn.className = hasUnread
        ? "w-10 h-10 bg-cp-panel border border-cp-cyan text-white flex items-center justify-center transition-all relative shadow-[0_0_10px_rgba(0,240,255,0.2)]"
        : "w-10 h-10 bg-cp-panel border border-gray-700 hover:border-cp-cyan flex items-center justify-center transition-all relative text-gray-500 hover:text-gray-300";
}

function closeNotifDropdown() { const m = document.getElementById("notifDropdownMenu"); if (m) m.classList.add("hidden"); }

function renderNotifDropdownList() {
    const listEl = document.getElementById("notifItemsList");
    const myNotifs = getMyNotifications();
    if (myNotifs.length === 0) {
        listEl.innerHTML = `<div class="p-6 text-center text-xs text-gray-500">Уведомлений пока нет</div>`;
        return;
    }
    listEl.innerHTML = myNotifs.map(n => {
        const textCls = !n.read ? "text-white font-bold bg-cp-card/90" : "text-gray-500 font-normal bg-cp-bg/60";
        const badgeNew = !n.read ? `<span class="inline-block w-2 h-2 bg-cp-red rounded-full mr-1.5 align-middle"></span>` : "";
        return `
          <div ${n.linkData ? `onclick="openNotificationTarget('${n.id}')"` : ""} class="p-3.5 text-xs transition-colors ${textCls} ${n.linkData ? 'cursor-pointer hover:bg-cp-cyan/10' : ''}">
            <div class="flex items-start gap-2.5">
              <span class="text-sm shrink-0">${n.type === "rank" ? "🛡️" : "💬"}</span>
              <div class="flex-1 leading-relaxed">
                <div>${badgeNew}${n.text}</div>
                <div class="text-[10px] text-gray-600 mt-1">${n.createdAt}</div>
              </div>
            </div>
          </div>
        `;
    }).join("");
}

function openNotificationTarget(notifId) {
    const n = NOTIFICATIONS.find(x => x.id === notifId);
    closeNotifDropdown();
    if (!n || !n.linkData) return;
    const { sectionKey, itemId, commentId } = n.linkData;
    if (sectionKey === "home") {
        activeHomeSubtab = itemId || "news";
        switchMainView("home");
        return;
    }
    if (sectionKey === "rules") { selectedRuleId = itemId; switchMainView("rules"); }
    else { selectedItemId = itemId; switchMainView("catalog", sectionKey); }
    if (commentId) setTimeout(() => scrollToAndHighlightComment(commentId), 120);
}

function countUserTotalComments(userId) {
    let total = 0;
    Object.values(COMMENTS).forEach(arr => { if (Array.isArray(arr)) total += arr.filter(c => c.userId === userId).length; });
    return total;
}

function openPublicProfileModal(userId) {
    const target = USERS.find(u => u && u.id === userId);
    if (!target) return;
    currentlyViewedPublicUserId = target.id;
    // Особый засекреченный экран для Адама Смэшера
    if (target.id === "u-smasher") {
        document.getElementById("pubProfAvatar").innerHTML = `<img src="${escapeHtmlAttr(target.avatar || SMASHER_AVATAR)}" class="w-full h-full object-cover">`;
        const badge = document.getElementById("pubProfBadge");
        badge.className = "inline-block text-[10px] px-2 py-0.5 font-bold uppercase bg-cp-red text-white shadow-[0_0_10px_#ff003c]";
        badge.textContent = "💀 КИБОРГ ARASAKA // ПАЛАЧ";
        document.getElementById("pubProfBanStatusBadge").classList.add("hidden");

        document.getElementById("pubProfName").textContent = "Adam Smasher";
        document.getElementById("pubProfRole").textContent = "Засекречено корпорацией Arasaka";
        const pubCorpEl = document.getElementById("pubProfCorp");
        if (pubCorpEl) pubCorpEl.textContent = "Засекречено корпорацией Arasaka";

        document.getElementById("pubProfDate").textContent = "Засекречено корпорацией Arasaka";
        document.getElementById("pubProfCommentsCnt").textContent = "Засекречено корпорацией Arasaka";
        document.getElementById("pubProfBio").innerHTML = `<span class="text-cp-red font-bold uppercase tracking-wider">🔒 Засекречено корпорацией Arasaka</span>`;
        document.getElementById("pubProfAdminActions").innerHTML = "";
        document.getElementById("publicProfileModal").classList.remove("hidden");
        return;
    }

    document.getElementById("pubProfAvatar").innerHTML = target.avatar ? `<img src="${escapeHtmlAttr(target.avatar)}" class="w-full h-full object-cover">` : (target.displayName || "CP").slice(0, 2).toUpperCase();
    const badge = document.getElementById("pubProfBadge");
    badge.className = target.role === "ROOT" ? "inline-block text-[10px] px-2 py-0.5 font-bold uppercase bg-cp-red text-white" : target.role === "ADMIN" ? "inline-block text-[10px] px-2 py-0.5 font-bold uppercase bg-cp-cyan text-black" : "inline-block text-[10px] px-2 py-0.5 font-bold uppercase bg-gray-800 text-cp-yellow border border-cp-yellow/40";
    badge.textContent = target.role === "ROOT" ? "👑 Главный Админ (ROOT)" : target.role === "ADMIN" ? "🛡️ Администратор" : "👤 Эджраннер (Игрок)";

    const banned = isUserCurrentlyBanned(target);
    document.getElementById("pubProfBanStatusBadge").classList.toggle("hidden", !banned);

    document.getElementById("pubProfName").textContent = target.displayName || "Эджраннер";
    document.getElementById("pubProfRole").textContent = target.favRole || "Соло";
    const pubCorpEl = document.getElementById("pubProfCorp");
    if (pubCorpEl) pubCorpEl.textContent = getUserFavCorp(target);

    document.getElementById("pubProfDate").textContent = target.createdAt || "2026";
    document.getElementById("pubProfCommentsCnt").textContent = countUserTotalComments(target.id);
    document.getElementById("pubProfBio").textContent = (target.bio && target.bio.trim()) ? target.bio : "Пользователь пока не заполнил публичное описание профиля.";

    const adminActionsEl = document.getElementById("pubProfAdminActions");
    if (canCurrentAdminBanTarget(target)) {
        adminActionsEl.innerHTML = banned
            ? `<button type="button" onclick="unbanUserAccount('${target.id}')" class="px-4 py-2 bg-cp-green text-black font-bold text-xs uppercase hover:bg-green-400">🔓 Разбанить пользователя</button>`
            : `<button type="button" onclick="openBanModal('${target.id}')" class="px-4 py-2 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white border border-cp-red text-xs font-bold uppercase transition-colors">🚫 Забанить пользователя</button>`;
    } else {
        adminActionsEl.innerHTML = "";
    }

    document.getElementById("publicProfileModal").classList.remove("hidden");
}
function openPublicProfileByCurrent() { const u = getCurrentUser(); if (u) openPublicProfileModal(u.id); }
function closePublicProfileModal() { currentlyViewedPublicUserId = null; document.getElementById("publicProfileModal").classList.add("hidden"); }

//
// CATALOG
//
// CARD CONST
//

// =========================================================================
// КОНСТРУКТОР КАРТОЧЕК (ВСЕ 12 РАЗДЕЛОВ)
// =========================================================================


function switchAdminSubtab(subtab) {
    activeAdminSubtab = subtab;
    ["builder", "categories", "books", "users", "logs", "backup"].forEach(s => {
        const el = document.getElementById("admin-sub-" + s);
        if (el) el.classList.toggle("hidden", subtab !== s);
    });
    document.querySelectorAll("#adminSubNav .admin-sub-btn").forEach(btn => {
        const isCur = btn.getAttribute("data-subtab") === subtab;
        btn.className = isCur
            ? "admin-sub-btn px-3 py-2 text-xs font-bold uppercase border transition-all bg-cp-cyan text-black border-cp-cyan"
            : "admin-sub-btn px-3 py-2 text-xs font-bold uppercase border border-gray-700 bg-cp-bg text-gray-300 hover:border-cp-cyan";
    });
    if (subtab === "builder" && !editingItemId) setBuilderType(activeBuilderType);
    else if (subtab === "categories") renderCategoryManager();
    else if (subtab === "books") renderBookSourcesManager();
    else if (subtab === "users") renderAdminUsersManager();
    else if (subtab === "logs") renderAdminLogsView();
    else if (subtab === "backup") renderAdminBackupStats();
}

function deleteItem(sectionKey, itemId) {
    if (!isCurrentUserAdmin()) return;
    const target = (DB[sectionKey] || []).find(i => i.id === itemId);
    if (!target || !confirm(`Удалить «${target.name || target.title}»?`)) return;
    ensureMetaArraysInCategories();
    if (!CATEGORIES._deletedCardIds.includes(itemId)) CATEGORIES._deletedCardIds.push(itemId);
    addChangeLogEntry("deleted", sectionKey, target);
    DB[sectionKey] = (DB[sectionKey] || []).filter(i => i.id !== itemId);
    persistDatabase(true);
    updateCounts();
    if (sectionKey === "rules") { selectedRuleId = DB.rules[0]?.id || null; renderRulesView(); }
    else { selectedItemId = DB[sectionKey][0]?.id || null; renderCatalog(); }
}

function startEditItem(sectionKey, itemId) {
    if (!isCurrentUserAdmin()) return;
    const item = (DB[sectionKey] || []).find(i => i.id === itemId);
    if (!item) return;
    editingItemId = itemId;
    activeBuilderType = sectionKey;
    if (sectionKey === "netrunning") activeNetBuilderKind = (item.itemKind === "deck" || item.category === "Кибердеки") ? "deck" : "program";
    switchMainView("admin");
    switchAdminSubtab("builder");
    setBuilderType(sectionKey, item);
}

function cancelEditMode() { editingItemId = null; builderGalleryImages = []; setBuilderType(activeBuilderType); }
function switchNetBuilderKind(kind) { activeNetBuilderKind = kind; setBuilderType("netrunning", editingItemId ? (DB.netrunning || []).find(i => i.id === editingItemId) : null); }

window.updateHiddenRoleSalaryRangeInput = function () {
    const grid = document.getElementById("roleSalaryBuilderGrid");
    const hiddenInp = document.getElementById("hiddenRoleSalaryRangeInput");
    if (!grid || !hiddenInp) return;
    const minVal = (grid.querySelector('[data-salary-lvl="lvl1_5"]')?.value || "").trim() || "—";
    const maxVal = (grid.querySelector('[data-salary-lvl="lvl10"]')?.value || "").trim() || "—";
    hiddenInp.value = (minVal === "—" && maxVal === "—") ? "—" : `${minVal} — ${maxVal}`;
};
// Автоматически добавляет панель форматирования (B/I/U, Цвета, Ссылка, Эмодзи) над всеми полями описаний (textarea) в Конструкторе
function attachRichToolbarsToBuilderTextareas() {
    const container = document.getElementById("builderFieldsContainer");
    if (!container) return;
    container.querySelectorAll("textarea").forEach((ta, idx) => {
        if (ta.getAttribute("data-rich-attached") === "1") return;
        ta.setAttribute("data-rich-attached", "1");
        if (!ta.id) {
            ta.id = "builder-ta-" + Date.now() + "-" + idx + "-" + Math.floor(Math.random() * 1000);
        }
        const toolbarWrap = document.createElement("div");
        toolbarWrap.innerHTML = getRichToolbarHTML(ta.id);
        ta.parentElement.insertBefore(toolbarWrap, ta);
    });
}
function setBuilderType(type, itemToEdit = null) {
    activeBuilderType = type;
    const addedCheckEl = document.getElementById("builderShowAddedCheck");
    const namedWrapEl = document.getElementById("builderNamedCharWrap");
    const namedCheckEl = document.getElementById("builderNamedCharCheck");

    if (namedWrapEl) namedWrapEl.classList.toggle("hidden", type !== "characters");

    if (!itemToEdit) {
        editingItemId = null;
        builderGalleryImages = [];
        if (addedCheckEl) addedCheckEl.checked = true;
        if (namedCheckEl) namedCheckEl.checked = false;
    } else {
        builderGalleryImages = getItemImagesArray(itemToEdit);
        if (addedCheckEl) addedCheckEl.checked = Boolean(itemToEdit.isUser);
        if (namedCheckEl) namedCheckEl.checked = Boolean(itemToEdit.isNamed);
    }
    renderBuilderGalleryPreviewGrid();

    const isEdit = Boolean(editingItemId && itemToEdit);
    document.getElementById("builderHeaderTitle").textContent = isEdit ? `✏️ Редактирование: ${itemToEdit.name || itemToEdit.title}` : `➕ Создание новой карточки`;
    document.getElementById("editModeBadge").classList.toggle("hidden", !isEdit);
    document.getElementById("cancelEditBtn").classList.toggle("hidden", !isEdit);
    document.getElementById("builderSubmitBtn").textContent = isEdit ? "💾 Сохранить изменения в карточке" : "➕ Добавить запись в справочник";

    document.querySelectorAll("#builderTypeButtons .btype-btn").forEach(btn => {
        const isCur = btn.getAttribute("data-btype") === type;
        btn.className = isCur ? "btype-btn px-3 py-2 text-xs font-bold border border-cp-yellow bg-cp-yellow text-black" : "btype-btn px-3 py-2 text-xs font-bold border border-gray-700 bg-cp-bg text-gray-300 hover:border-cp-cyan";
    });

    const container = document.getElementById("builderFieldsContainer");
    const v = itemToEdit || {};
    const cats = getAllCategoriesForSection(type);
    const books = getAllBookSources();
    const datalistHtml = `
        <datalist id="dl-builder-cat">${cats.map(c => `<option value="${escapeHtmlAttr(c)}">`).join("")}</datalist>
        <datalist id="dl-builder-book">${books.map(b => `<option value="${escapeHtmlAttr(b)}">`).join("")}</datalist>
      `;

    if (type === "rules") {
        container.innerHTML = `
          ${datalistHtml}
          <div class="grid grid-cols-2 gap-3.5">
            <div><label class="text-[11px] text-gray-400">Заголовок игровой механики</label><input name="title" value="${escapeHtmlAttr(v.title || '')}" placeholder="Стрельба с двух рук" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>
            <div><label class="text-[11px] text-cp-cyan font-bold">Подраздел механик</label><input name="subsection" list="dl-builder-cat" value="${escapeHtmlAttr(v.subsection || '')}" placeholder="Бой и Оружие (ПВПВ)" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>
            <div><label class="text-[11px] text-gray-400">Краткая суть</label><input name="summary" value="${escapeHtmlAttr(v.summary || '')}" placeholder="Штрафы при стрельбе..." class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>
            <div><label class="text-[11px] text-cp-yellow font-bold">Книга-источник</label><input name="book" list="dl-builder-book" value="${escapeHtmlAttr(v.book || '')}" placeholder="CP20 / Homebrew" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>
          </div>
          <div><label class="text-[11px] text-gray-400">Текст игровой механики</label><textarea name="content" rows="5" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white">${v.content || ''}</textarea></div>
        `;
        attachRichToolbarsToBuilderTextareas();
        return;
    }


    if (type === "characters") {
        initCharBuilderStateFromItem(itemToEdit);
        const fields = SCHEMAS.characters || [];
        const inputsHtml = fields.map(f => {
            const listAttr = f.isCat ? 'list="dl-builder-cat"' : f.isBook ? 'list="dl-builder-book"' : '';
            const labelColor = f.isCat ? 'text-cp-cyan font-bold' : f.isBook ? 'text-cp-yellow font-bold' : 'text-gray-400';
            return `<div><label class="text-[11px] ${labelColor}">${f.l}</label><input name="${f.k}" ${listAttr} value="${escapeHtmlAttr(v[f.k] || '')}" placeholder="${f.ph || ''}" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>`;
        }).join("");

        container.innerHTML = `
          ${datalistHtml}
          <div class="bg-cp-panel border border-cp-cyan/50 p-3 flex items-center justify-between gap-3">
            <div class="text-xs text-gray-300">Есть готовый статблок из <b class="text-cp-cyan">Owlbear Rodeo</b> или <b class="text-cp-yellow">Генератора NPC</b>?</div>
            <button type="button" onclick="openCharMdImportModal()"
              class="px-3.5 py-1.5 bg-cp-cyan hover:bg-cyan-300 text-black font-display font-bold text-xs uppercase shrink-0 transition-colors">
              📥 Импорт из Markdown
            </button>
          </div>
          <div class="grid grid-cols-2 gap-3.5">${inputsHtml}</div>
          <div class="bg-cp-panel border border-gray-700 p-3.5 space-y-2">
            <div class="text-[11px] font-bold text-cp-yellow uppercase">📊 СТАТЫ (Основные характеристики КП2020):</div>
            <div class="grid grid-cols-3 sm:grid-cols-9 gap-2">
              ${CHARACTER_STAT_KEYS.map(st => `<div><label class="block text-[10px] text-cp-cyan font-bold text-center mb-1">${st.l}</label><input name="${st.k}" value="${escapeHtmlAttr(v[st.k] || '')}" placeholder="7" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-center text-white font-bold"></div>`).join("")}
            </div>
          </div>
          <div><label class="text-[11px] text-cp-cyan font-bold">🎯 Навыки персонажа</label><textarea name="charSkills" rows="2" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white">${v.charSkills || ''}</textarea></div>
          <div class="bg-cp-panel border border-cp-red/40 p-3.5 space-y-2.5"><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase text-cp-red">🔫 Вооружение</span><button type="button" onclick="addCharWeaponBlock()" class="px-3 py-1 bg-cp-red text-white text-[11px] font-bold uppercase">+ Добавить пушку</button></div><div id="charWeaponsBuilderList" class="space-y-2.5"></div></div>
          <div class="bg-cp-panel border border-purple-500/40 p-3.5 space-y-2.5"><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase text-purple-400">🦾 Кибероснащение</span><button type="button" onclick="addCharSimpleBlock('cyberwareList')" class="px-3 py-1 bg-purple-600 text-white text-[11px] font-bold uppercase">+ Добавить</button></div><div id="char-cyberwareList-container" class="space-y-2"></div></div>
          <div class="bg-cp-panel border border-cp-yellow/40 p-3.5 space-y-2.5"><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase text-cp-yellow">🛡️ Броня</span><button type="button" onclick="addCharSimpleBlock('armorList')" class="px-3 py-1 bg-cp-yellow text-black text-[11px] font-bold uppercase">+ Добавить</button></div><div id="char-armorList-container" class="space-y-2"></div></div>
          <div class="bg-cp-panel border border-cp-green/40 p-3.5 space-y-2.5"><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase text-cp-green">🎒 Снаряжение</span><button type="button" onclick="addCharSimpleBlock('gearList')" class="px-3 py-1 bg-cp-green text-black text-[11px] font-bold uppercase">+ Добавить</button></div><div id="char-gearList-container" class="space-y-2"></div></div>
          <div><label class="text-[11px] text-gray-400">Описание / Биография</label><textarea name="desc" rows="3" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white">${v.desc || ''}</textarea></div>
        `;
        renderCharEquipmentBuilderBoxes();
        attachRichToolbarsToBuilderTextareas();
        return;

    }

    if (type === "borging") {
        initBorgBuilderState(itemToEdit);
        const fields = SCHEMAS.borging || [];
        const inputsHtml = fields.map(f => {
            const listAttr = f.isCat ? 'list="dl-builder-cat"' : f.isBook ? 'list="dl-builder-book"' : '';
            return `<div><label class="text-[11px] text-gray-400">${f.l}</label><input name="${f.k}" ${listAttr} value="${escapeHtmlAttr(v[f.k] || '')}" placeholder="${f.ph || ''}" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>`;
        }).join("");
        const st = v.borgStats || {};
        const str = v.borgStructure || {};

        container.innerHTML = `
          ${datalistHtml}
          <div class="grid grid-cols-2 gap-3.5">${inputsHtml}</div>
          <div class="bg-cp-panel border border-cp-yellow/50 p-3.5 space-y-2">
            <div class="text-xs font-bold uppercase text-cp-yellow">📊 Физические статы киборга</div>
            <div class="grid grid-cols-4 gap-2">
              <div><label class="text-[10px] text-gray-400">РЕФ</label><input name="b_ref" value="${escapeHtmlAttr(st.ref || '')}" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-white"></div>
              <div><label class="text-[10px] text-gray-400">ПРВЛ</label><input name="b_cool" value="${escapeHtmlAttr(st.cool || '')}" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-white"></div>
              <div><label class="text-[10px] text-gray-400">ПЕР</label><input name="b_ma" value="${escapeHtmlAttr(st.ma || '')}" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-white"></div>
              <div><label class="text-[10px] text-gray-400">ТЕЛО</label><input name="b_body" value="${escapeHtmlAttr(st.body || '')}" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-white"></div>
              <div><label class="text-[10px] text-cp-cyan">М/Ход</label><input name="b_m_m" value="${escapeHtmlAttr(st.m_m || '')}" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-cp-cyan"></div>
              <div><label class="text-[10px] text-cp-cyan">КМ/Ч</label><input name="b_m_kmh" value="${escapeHtmlAttr(st.m_kmh || '')}" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-cp-cyan"></div>
              <div><label class="text-[10px] text-cp-cyan">Прыжок вверх</label><input name="b_jump_up" value="${escapeHtmlAttr(st.jump_up || '')}" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-cp-cyan"></div>
              <div><label class="text-[10px] text-cp-cyan">Прыжок вдаль</label><input name="b_jump_long" value="${escapeHtmlAttr(st.jump_long || '')}" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-cp-cyan"></div>
              <div><label class="text-[10px] text-cp-green">Поднимает (кг)</label><input name="b_lift" value="${escapeHtmlAttr(st.lift || '')}" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-cp-green"></div>
              <div><label class="text-[10px] text-cp-green">Кидает (м)</label><input name="b_throw" value="${escapeHtmlAttr(st.throw || '')}" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-cp-green"></div>
              <div><label class="text-[10px] text-cp-red">Мод. урона</label><input name="b_dmg_mod" value="${escapeHtmlAttr(st.dmg_mod || '')}" class="w-full bg-cp-bg border border-gray-700 p-1.5 text-xs text-cp-red"></div>
              <div><label class="text-[10px] text-cp-yellow">Удар / Пинок</label><div class="flex gap-1"><input name="b_punch" value="${escapeHtmlAttr(st.punch || '')}" class="w-1/2 bg-cp-bg border border-gray-700 p-1.5 text-xs text-white"><input name="b_kick" value="${escapeHtmlAttr(st.kick || '')}" class="w-1/2 bg-cp-bg border border-gray-700 p-1.5 text-xs text-white"></div></div>
            </div>
          </div>
          <div class="bg-cp-panel border border-cp-cyan/50 p-3.5 space-y-2 text-xs">
            <div class="font-bold uppercase text-cp-cyan">🛡️ Физическая структура (ОС / ОСТ / Опции)</div>
            <div class="grid grid-cols-4 gap-2"><input name="s_head_sp" value="${escapeHtmlAttr(str.head_sp || '')}" placeholder="Голова ОС" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_head_ost" value="${escapeHtmlAttr(str.head_ost || '')}" placeholder="Голова ОСТ" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_head_opt" value="${escapeHtmlAttr(str.head_opt || '')}" placeholder="Оптика" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_head_aud" value="${escapeHtmlAttr(str.head_aud || '')}" placeholder="Аудио" class="bg-cp-bg border border-gray-700 p-1.5"></div>
            <div class="grid grid-cols-3 gap-2"><input name="s_torso_sp" value="${escapeHtmlAttr(str.torso_sp || '')}" placeholder="Торс ОС" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_torso_ost" value="${escapeHtmlAttr(str.torso_ost || '')}" placeholder="Торс ОСТ" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_torso_opt" value="${escapeHtmlAttr(str.torso_opt || '')}" placeholder="Торс Опции" class="bg-cp-bg border border-gray-700 p-1.5"></div>
            <div class="grid grid-cols-3 gap-2"><input name="s_rarm_sp" value="${escapeHtmlAttr(str.rarm_sp || '')}" placeholder="Пр. рука ОС" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_rarm_ost" value="${escapeHtmlAttr(str.rarm_ost || '')}" placeholder="Пр. рука ОСТ" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_rarm_opt" value="${escapeHtmlAttr(str.rarm_opt || '')}" placeholder="Пр. рука Опции" class="bg-cp-bg border border-gray-700 p-1.5"></div>
            <div class="grid grid-cols-3 gap-2"><input name="s_larm_sp" value="${escapeHtmlAttr(str.larm_sp || '')}" placeholder="Лев. рука ОС" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_larm_ost" value="${escapeHtmlAttr(str.larm_ost || '')}" placeholder="Лев. рука ОСТ" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_larm_opt" value="${escapeHtmlAttr(str.larm_opt || '')}" placeholder="Лев. рука Опции" class="bg-cp-bg border border-gray-700 p-1.5"></div>
            <div class="grid grid-cols-3 gap-2"><input name="s_rleg_sp" value="${escapeHtmlAttr(str.rleg_sp || '')}" placeholder="Пр. нога ОС" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_rleg_ost" value="${escapeHtmlAttr(str.rleg_ost || '')}" placeholder="Пр. нога ОСТ" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_rleg_opt" value="${escapeHtmlAttr(str.rleg_opt || '')}" placeholder="Пр. нога Опции" class="bg-cp-bg border border-gray-700 p-1.5"></div>
            <div class="grid grid-cols-3 gap-2"><input name="s_lleg_sp" value="${escapeHtmlAttr(str.lleg_sp || '')}" placeholder="Лев. нога ОС" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_lleg_ost" value="${escapeHtmlAttr(str.lleg_ost || '')}" placeholder="Лев. нога ОСТ" class="bg-cp-bg border border-gray-700 p-1.5"><input name="s_lleg_opt" value="${escapeHtmlAttr(str.lleg_opt || '')}" placeholder="Лев. нога Опции" class="bg-cp-bg border border-gray-700 p-1.5"></div>
          </div>
          <div class="bg-cp-panel border border-purple-500/40 p-3.5 space-y-2.5"><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase text-purple-400">🦾 Встроенное кибероснащение</span><button type="button" onclick="addBorgCyberwareBlock()" class="px-3 py-1 bg-purple-600 text-white text-[11px] font-bold uppercase">+ Добавить имплант</button></div><div id="borg-cyberware-container" class="space-y-2"></div></div>
          <div><label class="text-[11px] text-gray-400">Описание</label><textarea name="desc" rows="3" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white">${v.desc || ''}</textarea></div>
        `;
        renderBorgCyberwareBuilderList();
        attachRichToolbarsToBuilderTextareas();
        return;
    }
    if (type === "acpa") {
        initAcpaBuilderState(itemToEdit);
        const fields = SCHEMAS.acpa || [];
        const inputsHtml = fields.map(f => {
            const listAttr = f.isCat ? 'list="dl-builder-cat"' : f.isBook ? 'list="dl-builder-book"' : '';
            const labelColor = f.isCat ? 'text-cp-cyan font-bold' : f.isBook ? 'text-cp-yellow font-bold' : 'text-gray-400';
            return `<div><label class="text-[11px] ${labelColor}">${f.l}</label><input name="${f.k}" ${listAttr} value="${escapeHtmlAttr(v[f.k] || '')}" placeholder="${f.ph || ''}" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>`;
        }).join("");

        container.innerHTML = `
          ${datalistHtml}
          <div class="grid grid-cols-2 gap-3.5">${inputsHtml}</div>
          <div class="bg-cp-panel border border-cp-cyan/40 p-3.5 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase text-cp-cyan">🔧 Особое снаряжение</span>
              <button type="button" onclick="addAcpaGearBlock()" class="px-3 py-1 bg-cp-cyan text-black text-[11px] font-bold uppercase">+ Добавить снаряжение</button>
            </div>
            <div id="acpa-gearList-container" class="space-y-2"></div>
          </div>
          <div class="bg-cp-panel border border-cp-red/40 p-3.5 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase text-cp-red">🔫 Встроенное вооружение</span>
              <button type="button" onclick="addAcpaWeaponBlock()" class="px-3 py-1 bg-cp-red text-white text-[11px] font-bold uppercase">+ Добавить вооружение</button>
            </div>
            <div id="acpaWeaponsBuilderList" class="space-y-2.5"></div>
          </div>
          <div>
            <label class="text-[11px] text-gray-400">Описание</label>
            <textarea name="desc" rows="4" placeholder="Общее описание модели ACPA, история разработки, особенности пилотирования..." class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white">${v.desc || ''}</textarea>
          </div>
        `;
        renderAcpaBuilderLists();
        attachRichToolbarsToBuilderTextareas();
        return;
    }
    const isDeck = type === "netrunning" && activeNetBuilderKind === "deck";
    const schemaKey = type === "netrunning" ? (isDeck ? "net_deck" : "net_program") : type;
    const fields = SCHEMAS[schemaKey] || [];

    const netSwitchHtml = type === "netrunning" ? `
        <div class="flex items-center gap-2 border-b border-gray-800 pb-3 mb-2">
          <span class="text-xs text-gray-400 font-bold uppercase mr-2">Тип объекта:</span>
          <button type="button" onclick="switchNetBuilderKind('program')" class="px-3 py-1.5 text-xs font-bold border ${!isDeck ? 'bg-cp-cyan text-black border-cp-cyan' : 'bg-cp-panel text-gray-300 border-gray-700'}">💾 Программа</button>
          <button type="button" onclick="switchNetBuilderKind('deck')" class="px-3 py-1.5 text-xs font-bold border ${isDeck ? 'bg-cp-yellow text-black border-cp-yellow' : 'bg-cp-panel text-gray-300 border-gray-700'}">💻 Кибердека</button>
        </div>
        <input type="hidden" name="itemKind" value="${isDeck ? 'deck' : 'program'}">
      ` : "";

    const salTable = type === "roles" ? resolveRoleSalaryTable(itemToEdit) : null;

    const inputsHtml = fields.map(f => {
        if (type === "roles" && f.k === "salary") {
            return `
            <div class="col-span-2 bg-cp-panel border border-cp-green/50 p-3.5 space-y-2">
              <div class="flex items-center justify-between border-b border-gray-800 pb-1">
                <span class="text-[11px] font-bold uppercase text-cp-green">💰 Таблица зарплаты по уровню Особой Способности</span>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-6 gap-2" id="roleSalaryBuilderGrid">
                ${ROLE_SALARY_LEVELS.map(lv => `
                  <div class="bg-cp-bg border border-gray-800 p-2">
                    <label class="block text-[10px] font-bold uppercase text-cp-yellow text-center mb-1">${lv.label}</label>
                    <input type="text" data-salary-lvl="${lv.key}" value="${escapeHtmlAttr(salTable[lv.key] === '—' ? '' : (salTable[lv.key] || ''))}" oninput="updateHiddenRoleSalaryRangeInput()" class="w-full bg-cp-panel border border-gray-700 px-2 py-1 text-xs text-center text-cp-green font-bold outline-none">
                  </div>
                `).join("")}
              </div>
              <input type="hidden" name="salary" id="hiddenRoleSalaryRangeInput" value="${escapeHtmlAttr(v.salary || '')}">
            </div>
          `;
        }
        let val = v[f.k] || "";
        if (f.k === "skills" && Array.isArray(val)) val = val.join(", ");
        const listAttr = f.isCat ? 'list="dl-builder-cat"' : f.isBook ? 'list="dl-builder-book"' : '';
        const labelColor = f.isCat ? 'text-cp-cyan font-bold' : f.isBook ? 'text-cp-yellow font-bold' : 'text-gray-400';
        return `<div><label class="text-[11px] ${labelColor}">${f.l}</label><input name="${f.k}" ${listAttr} value="${escapeHtmlAttr(val)}" placeholder="${f.ph || ''}" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>`;
    }).join("");

    const weaponAmmoCasingHtml = type === "weapons" ? `
        <div class="bg-cp-panel border border-cp-cyan/40 p-3.5 space-y-2">
          <div class="text-xs font-bold uppercase text-cp-cyan">💥 Тип боеприпаса (для авторасчёта цены полного магазина)</div>
          <div class="flex flex-wrap items-center gap-4">
            <label class="inline-flex items-center gap-2 cursor-pointer select-none bg-cp-bg border border-gray-700 px-3 py-2 text-xs font-bold text-gray-200">
              <input type="checkbox" id="builderCbCaseless" ${v.ammoCasing === 'caseless' ? 'checked' : ''} onchange="handleBuilderCasingCheckbox('caseless')" class="w-4 h-4 accent-cyan-400">
              <span>🔹 Безгильзовое (× 0.5 eb за патрон)</span>
            </label>
            <label class="inline-flex items-center gap-2 cursor-pointer select-none bg-cp-bg border border-gray-700 px-3 py-2 text-xs font-bold text-gray-200">
              <input type="checkbox" id="builderCbCased" ${v.ammoCasing === 'cased' ? 'checked' : ''} onchange="handleBuilderCasingCheckbox('cased')" class="w-4 h-4 accent-yellow-400">
              <span>🔸 Гильзовое (× 1 eb за патрон)</span>
            </label>
          </div>
          <input type="hidden" name="ammoCasing" id="builderAmmoCasingInput" value="${escapeHtmlAttr(v.ammoCasing || '')}">
        </div>
      ` : "";
      const armorTypeBuilderHtml = type === "armor" ? `
        <div class="bg-cp-panel border border-cp-cyan/40 p-3.5 space-y-2">
          <div class="text-xs font-bold uppercase text-cp-cyan">🛡️ Тип брони</div>
          <div class="flex flex-wrap items-center gap-4">
            <label class="inline-flex items-center gap-2 cursor-pointer select-none bg-cp-bg border border-gray-700 px-3 py-2 text-xs font-bold text-gray-200">
              <input type="checkbox" id="builderCbArmorSoft" ${v.armorType === 'soft' ? 'checked' : ''} onchange="handleBuilderArmorTypeCheckbox('soft')" class="w-4 h-4 accent-cyan-400">
              <span>🔹 Мягкая броня</span>
            </label>
            <label class="inline-flex items-center gap-2 cursor-pointer select-none bg-cp-bg border border-gray-700 px-3 py-2 text-xs font-bold text-gray-200">
              <input type="checkbox" id="builderCbArmorHard" ${v.armorType === 'hard' ? 'checked' : ''} onchange="handleBuilderArmorTypeCheckbox('hard')" class="w-4 h-4 accent-yellow-400">
              <span>🔸 Твёрдая броня</span>
            </label>
          </div>
          <input type="hidden" name="armorType" id="builderArmorTypeInput" value="${escapeHtmlAttr(v.armorType || '')}">
        </div>
      ` : "";

    const roleAbilityDescHtml = type === "roles" ? `<div><label class="text-[11px] text-cp-cyan font-bold">⚡ Описание особой способности</label><textarea name="abilityDesc" rows="2" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white">${v.abilityDesc || ''}</textarea></div>` : "";
    const vehicleExtraHtml = type === "vehicles" ? `<div><label class="text-[11px] text-cp-cyan font-bold">🔧 Особое снаряжение и вооружение</label><textarea name="specialEquipment" rows="2" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white">${v.specialEquipment || ''}</textarea></div>` : "";

    const selTypes = Array.isArray(v.deckTypes) ? v.deckTypes : [];
    const selOpts = Array.isArray(v.deckOptions) ? v.deckOptions : [];
    const deckChecksHtml = isDeck ? `
        <input type="hidden" name="category" value="Кибердеки">
        <div class="bg-cp-panel border border-gray-700 p-3"><div class="text-[11px] font-bold text-cp-yellow uppercase mb-2">Типы деки:</div><div class="grid grid-cols-3 gap-2 text-xs">${DECK_TYPE_LIST.map(t => `<label class="flex items-center gap-2 cursor-pointer bg-cp-bg border border-gray-800 px-2.5 py-1.5"><input type="checkbox" name="deckTypeCheck" value="${t}" ${selTypes.includes(t) ? 'checked' : ''} class="accent-yellow-400"><span>${t}</span></label>`).join("")}</div></div>
        <div class="bg-cp-panel border border-gray-700 p-3"><div class="text-[11px] font-bold text-cp-cyan uppercase mb-2">Опции деки:</div><div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs mb-2.5">${DECK_OPTION_LIST.map(o => `<label class="flex items-center gap-2 cursor-pointer bg-cp-bg border border-gray-800 px-2.5 py-1.5"><input type="checkbox" name="deckOptionCheck" value="${o}" ${selOpts.includes(o) ? 'checked' : ''} class="accent-cyan-400"><span>${o}</span></label>`).join("")}</div><div class="flex items-center gap-3 pt-2 border-t border-gray-800"><label class="text-[11px] text-gray-400">Количество Доп чипов:</label><input name="extraChipsCount" value="${escapeHtmlAttr(v.extraChipsCount || '')}" placeholder="10" class="w-32 bg-cp-bg border border-gray-700 px-2.5 py-1 text-xs text-white"></div></div>
      ` : "";

    container.innerHTML = `${datalistHtml}${netSwitchHtml}<div class="grid grid-cols-2 gap-3.5">${inputsHtml}</div>${weaponAmmoCasingHtml}${roleAbilityDescHtml}${deckChecksHtml}${vehicleExtraHtml}<div><label class="text-[11px] text-gray-400">Описание (необязательно)</label><textarea name="desc" rows="3" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white">${v.desc || ''}</textarea></div>`;
    container.innerHTML = `${datalistHtml}${netSwitchHtml}<div class="grid grid-cols-2 gap-3.5">${inputsHtml}</div>${weaponAmmoCasingHtml}${armorTypeBuilderHtml}${roleAbilityDescHtml}${deckChecksHtml}${vehicleExtraHtml}<div><label class="text-[11px] text-gray-400">Описание (необязательно)</label><textarea name="desc" rows="3" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white">${v.desc || ''}</textarea></div>`;
    if (type === "roles") window.updateHiddenRoleSalaryRangeInput();
    attachRichToolbarsToBuilderTextareas();
}

function saveBuilderItem(e) {
    e.preventDefault();
    if (!isCurrentUserAdmin()) return;
    ensureMetaArraysInCategories();

    // Подхватываем URL картинки, если пользователь ввёл её в поле, но не нажал кнопку "+ Добавить URL"
    const pendingUrlInp = document.getElementById("builderMultiImageUrlInput");
    if (pendingUrlInp && pendingUrlInp.value.trim() !== "") {
        const pVal = pendingUrlInp.value.trim();
        if (validateImageUrlForRole(pVal) && !builderGalleryImages.includes(pVal)) {
            builderGalleryImages.push(pVal);
        }
        pendingUrlInp.value = "";
    }

    if (activeBuilderType === "roles") window.updateHiddenRoleSalaryRangeInput();
    if (activeBuilderType === "characters") syncCharBuilderStateFromDOM();
    if (activeBuilderType === "borging") syncBorgBuilderFromDOM();
    if (activeBuilderType === "acpa") syncAcpaBuilderFromDOM();

    const fd = new FormData(e.target);
    const raw = Object.fromEntries(fd.entries());
    const data = {};
    const freeTextFields = ["desc", "abilityDesc", "content", "summary", "specialEquipment", "charSkills", "ammoCasing", "armorType"];

    Object.keys(raw).forEach(k => {
        if (k === "deckTypeCheck" || k === "deckOptionCheck" || k.startsWith("b_") || k.startsWith("s_")) return;
        const val = String(raw[k] || "").trim();
        data[k] = freeTextFields.includes(k) ? val : (val === "" ? "—" : val);
    });

    const isEdit = Boolean(editingItemId);
    data.id = editingItemId || ("user-" + Date.now());
    data.origName = data.origName && data.origName !== "—" ? data.origName : data.name;

    const showAddedCheck = document.getElementById("builderShowAddedCheck");
    data.isUser = showAddedCheck ? Boolean(showAddedCheck.checked) : true;

    if (activeBuilderType === "characters") {
        const namedCheck = document.getElementById("builderNamedCharCheck");
        data.isNamed = namedCheck ? Boolean(namedCheck.checked) : false;
        data.charWeaponsList = charBuilderState.weaponsList.filter(w => w.name.trim() !== "" || w.desc.trim() !== "" || w.damage.trim() !== "").map(w => ({
            name: dash(w.name), type: dash(w.type), skr: dash(w.skr), to: dash(w.to), damage: dash(w.damage),
            mag: dash(w.mag), sko: dash(w.sko), range: dash(w.range), nad: dash(w.nad), cost: dash(w.cost), desc: w.desc.trim()
        }));
        const cleanSimple = (arr) => (arr || []).filter(x => x.name.trim() !== "" || x.desc.trim() !== "").map(x => ({ name: dash(x.name), desc: x.desc.trim() }));
        data.charCyberwareList = cleanSimple(charBuilderState.cyberwareList);
        data.charArmorList = cleanSimple(charBuilderState.armorList);
        data.charGearList = cleanSimple(charBuilderState.gearList);
    }

    if (activeBuilderType === "borging") {
        data.borgStats = {
            ref: raw.b_ref || "", cool: raw.b_cool || "", ma: raw.b_ma || "", body: raw.b_body || "",
            m_m: raw.b_m_m || "", m_kmh: raw.b_m_kmh || "", jump_up: raw.b_jump_up || "", jump_long: raw.b_jump_long || "",
            lift: raw.b_lift || "", throw: raw.b_throw || "", dmg_mod: raw.b_dmg_mod || "", punch: raw.b_punch || "", kick: raw.b_kick || ""
        };
        data.borgStructure = {
            head_sp: raw.s_head_sp || "", head_ost: raw.s_head_ost || "", head_opt: raw.s_head_opt || "", head_aud: raw.s_head_aud || "",
            torso_sp: raw.s_torso_sp || "", torso_ost: raw.s_torso_ost || "", torso_opt: raw.s_torso_opt || "",
            rarm_sp: raw.s_rarm_sp || "", rarm_ost: raw.s_rarm_ost || "", rarm_opt: raw.s_rarm_opt || "",
            larm_sp: raw.s_larm_sp || "", larm_ost: raw.s_larm_ost || "", larm_opt: raw.s_larm_opt || "",
            rleg_sp: raw.s_rleg_sp || "", rleg_ost: raw.s_rleg_ost || "", rleg_opt: raw.s_rleg_opt || "",
            lleg_sp: raw.s_lleg_sp || "", lleg_ost: raw.s_lleg_ost || "", lleg_opt: raw.s_lleg_opt || ""
        };
        data.cyberwareList = borgBuilderCyberwareList.filter(x => x.name.trim() !== "" || x.desc.trim() !== "").map(x => ({ name: dash(x.name), desc: x.desc.trim() }));
    }
    if (activeBuilderType === "acpa") {
        data.acpaGearList = acpaBuilderState.gearList
            .filter(g => g.name.trim() !== "" || g.desc.trim() !== "")
            .map(g => ({ name: dash(g.name), desc: g.desc.trim() }));

        data.acpaWeaponsList = acpaBuilderState.weaponsList
            .filter(w => w.name.trim() !== "" || w.desc.trim() !== "" || w.damage.trim() !== "")
            .map(w => ({
                name: dash(w.name), type: dash(w.type), skr: dash(w.skr), to: dash(w.to), damage: dash(w.damage),
                mag: dash(w.mag), sko: dash(w.sko), range: dash(w.range), nad: dash(w.nad), cost: dash(w.cost), desc: w.desc.trim()
            }));
    }
    if (activeBuilderType === "roles") {
        const rawSk = String(raw.skills || "").trim();
        data.skills = rawSk ? rawSk.split(",").map(s => s.trim()).filter(Boolean) : ["—"];
        const grid = document.getElementById("roleSalaryBuilderGrid");
        if (grid) {
            data.salaryTable = {};
            ROLE_SALARY_LEVELS.forEach(lv => {
                data.salaryTable[lv.key] = (grid.querySelector(`[data-salary-lvl="${lv.key}"]`)?.value || "").trim() || "—";
            });
            data.salary = `${data.salaryTable.lvl1_5} — ${data.salaryTable.lvl10}`;
        }
    }

    if (activeBuilderType === "netrunning" && data.itemKind === "deck") {
        data.category = "Кибердеки";
        data.deckTypes = fd.getAll("deckTypeCheck");
        data.deckOptions = fd.getAll("deckOptionCheck");
    }

    data.images = [...builderGalleryImages];
    data.image = builderGalleryImages[0] || "";

    const catField = activeBuilderType === "rules" ? data.subsection : data.category;
    if (catField && catField !== "—" && !CATEGORIES[activeBuilderType].includes(catField)) {
        CATEGORIES[activeBuilderType].push(catField);
    }
    if (data.book && data.book !== "—" && !CATEGORIES._books.includes(data.book)) {
        CATEGORIES._books.push(data.book);
    }

    if (isEdit) {
        const idx = DB[activeBuilderType].findIndex(i => i.id === editingItemId);
        if (idx !== -1) DB[activeBuilderType][idx] = data;
        else DB[activeBuilderType].unshift(data);
        addChangeLogEntry("edited", activeBuilderType, data);
    } else {
        DB[activeBuilderType].unshift(data);
        addChangeLogEntry("created", activeBuilderType, data);
    }

    persistDatabase(true);
    document.getElementById("builderJsonPreview").textContent = JSON.stringify({ ...data, image: data.image ? "[Иллюстрация]" : undefined, images: data.images.length ? `[${data.images.length} изобр.]` : undefined }, null, 2);

    const savedId = data.id;
    editingItemId = null;
    builderGalleryImages = [];
    updateCounts();
    e.target.reset();

    if (typeof updateCommunityToggleUI === "function") updateCommunityToggleUI();
    if (activeMainView === "admin" && activeAdminSubtab === "moderation" && typeof renderAdminModerationView === "function") renderAdminModerationView();
    if (activeBuilderType === "rules") { selectedRuleId = savedId; switchMainView("rules"); }
    else { selectedItemId = savedId; switchMainView("catalog", activeBuilderType); }
}

//
// CARD RENDERHANDLER
//

// =========================================================================
// РЕНДЕРЕР КАТАЛОГА И ДЕТАЛЬНЫХ КАРТОЧЕК
// =========================================================================


function renderCatalog() {
    repairAndSyncArmorFields();
    syncAllRoleSalariesInMemory();

    const q = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
    const sub = document.getElementById("subFilter")?.value || "ALL";
    const extra = document.getElementById("extraFilter")?.value || "ALL";
    const rel = document.getElementById("relFilter")?.value || "ALL";
    const avail = document.getElementById("availFilter")?.value || "ALL";
    const book = document.getElementById("bookFilter")?.value || "ALL";

    let filtered = (DB[activeCatalogTab] || []).filter(item => {
        if (!item) return false;
        const textOk = !q || Object.values(item).some(val => String(val).toLowerCase().includes(q));
        const subOk = sub === "ALL" || item.category === sub;
        const bookOk = book === "ALL" ? true : book === "FAV" ? isItemFavorited(item.id) : book === "USER" ? Boolean(item.isUser) : (item.book && item.book.includes(book));

        let extraOk = true;
        if (extra !== "ALL" && !extra.startsWith("SORT_") && !extra.startsWith("EMP_") && !extra.startsWith("SOL_") && !extra.startsWith("OPS_")) {
            if (activeCatalogTab === "weapons") extraOk = item.skr && item.skr.includes(extra);
            else if (activeCatalogTab === "netrunning") {
                const isDeck = item.itemKind === "deck" || item.category === "Кибердеки";
                extraOk = extra === "ONLY_DECKS" ? isDeck : !isDeck;
            } else if (activeCatalogTab === "characters") {
                if (extra === "ONLY_NAMED") extraOk = Boolean(item.isNamed);
                else if (extra === "ONLY_UNNAMED") extraOk = !item.isNamed;
            }
        }

        let relOk = true;
        if (activeCatalogTab === "weapons" && rel.startsWith("ONLY_")) {
            relOk = item.nad && item.nad.toUpperCase().includes(rel.replace("ONLY_", ""));
        }

        let availOk = true;
        if (activeCatalogTab === "weapons" && avail.startsWith("ONLY_")) {
            availOk = item.dos && item.dos.toUpperCase().includes(avail.replace("ONLY_", "").toUpperCase());
        }

        return textOk && subOk && bookOk && extraOk && relOk && availOk;
    });

    // Сортировка карточек по выбранному фильтру
    if (activeCatalogTab === "weapons") {
        if (avail === "SORT_DESC" || avail === "SORT_ASC") {
            filtered = [...filtered].sort((a, b) => avail === "SORT_DESC" ? (getAvailabilityRank(b.dos) - getAvailabilityRank(a.dos)) : (getAvailabilityRank(a.dos) - getAvailabilityRank(b.dos)));
        } else if (rel === "SORT_DESC" || rel === "SORT_ASC") {
            filtered = [...filtered].sort((a, b) => rel === "SORT_DESC" ? (getReliabilityRank(b.nad) - getReliabilityRank(a.nad)) : (getReliabilityRank(a.nad) - getReliabilityRank(b.nad)));
        }
    } else if (activeCatalogTab === "roles") {
        if (extra === "SORT_SALARY_ASC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(a.salary) - extractMaxNumericValue(b.salary));
        else if (extra === "SORT_SALARY_DESC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(b.salary) - extractMaxNumericValue(a.salary));
    } else if (activeCatalogTab === "armor") {
        if (extra === "SORT_OS_ASC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(a.os) - extractMaxNumericValue(b.os));
        else if (extra === "SORT_OS_DESC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(b.os) - extractMaxNumericValue(a.os));
        else if (extra === "SORT_PRICE_ASC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(a.cost) - extractMaxNumericValue(b.cost));
        else if (extra === "SORT_PRICE_DESC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(b.cost) - extractMaxNumericValue(a.cost));
    } else if (activeCatalogTab === "acpa") {
        if (extra === "SORT_PRICE_ASC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(a.cost) - extractMaxNumericValue(b.cost));
        else if (extra === "SORT_PRICE_DESC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(b.cost) - extractMaxNumericValue(a.cost));
        else if (extra === "SORT_OS_ASC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(a.os) - extractMaxNumericValue(b.os));
        else if (extra === "SORT_OS_DESC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(b.os) - extractMaxNumericValue(a.os));
    } else if (activeCatalogTab === "gear" || activeCatalogTab === "cyberware" || activeCatalogTab === "services" || activeCatalogTab === "borging") {
        if (extra === "SORT_PRICE_ASC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(a.cost) - extractMaxNumericValue(b.cost));
        else if (extra === "SORT_PRICE_DESC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(b.cost) - extractMaxNumericValue(a.cost));
    } else if (activeCatalogTab === "corporations") {
        if (extra === "EMP_DESC") filtered = [...filtered].sort((a, b) => parseCorpNumericStat(b.employees) - parseCorpNumericStat(a.employees));
        else if (extra === "EMP_ASC") filtered = [...filtered].sort((a, b) => parseCorpNumericStat(a.employees) - parseCorpNumericStat(b.employees));
        else if (extra === "SOL_DESC") filtered = [...filtered].sort((a, b) => parseCorpNumericStat(b.soldiers) - parseCorpNumericStat(a.soldiers));
        else if (extra === "SOL_ASC") filtered = [...filtered].sort((a, b) => parseCorpNumericStat(a.soldiers) - parseCorpNumericStat(b.soldiers));
        else if (extra === "OPS_DESC") filtered = [...filtered].sort((a, b) => parseCorpNumericStat(b.operatives) - parseCorpNumericStat(a.operatives));
        else if (extra === "OPS_ASC") filtered = [...filtered].sort((a, b) => parseCorpNumericStat(a.operatives) - parseCorpNumericStat(b.operatives));
    } else if (activeCatalogTab === "netrunning") {
        if (extra === "SORT_PRICE_ASC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(a.cost) - extractMaxNumericValue(b.cost));
        else if (extra === "SORT_PRICE_DESC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(b.cost) - extractMaxNumericValue(a.cost));
        else if (extra === "SORT_STR_ASC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(a.strength || a.codeGate) - extractMaxNumericValue(b.strength || b.codeGate));
        else if (extra === "SORT_STR_DESC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(b.strength || b.codeGate) - extractMaxNumericValue(a.strength || a.codeGate));
        else if (extra === "SORT_MEM_ASC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(a.mu || a.memory) - extractMaxNumericValue(b.mu || b.memory));
        else if (extra === "SORT_MEM_DESC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(b.mu || b.memory) - extractMaxNumericValue(a.mu || a.memory));
    } else if (activeCatalogTab === "vehicles") {
        if (extra === "SORT_PRICE_ASC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(a.cost) - extractMaxNumericValue(b.cost));
        else if (extra === "SORT_PRICE_DESC") filtered = [...filtered].sort((a, b) => extractMaxNumericValue(b.cost) - extractMaxNumericValue(a.cost));
        else if (extra === "SORT_TYPE_ASC") filtered = [...filtered].sort((a, b) => (a.category || "").localeCompare(b.category || "", "ru"));
        else if (extra === "SORT_TYPE_DESC") filtered = [...filtered].sort((a, b) => (b.category || "").localeCompare(a.category || "", "ru"));
        else if (extra === "SORT_SDP_DESC") filtered = [...filtered].sort((a, b) => (parseInt(b.sdp) || 0) - (parseInt(a.sdp) || 0));
    } else if (activeCatalogTab === "characters") {
        if (extra === "SORT_ROLE_ASC") filtered = [...filtered].sort((a, b) => (a.category || "").localeCompare(b.category || "", "ru"));
        else if (extra === "SORT_ROLE_DESC") filtered = [...filtered].sort((a, b) => (b.category || "").localeCompare(a.category || "", "ru"));
        else if (extra === "SORT_REP_DESC") filtered = [...filtered].sort((a, b) => (parseInt(b.reputation) || 0) - (parseInt(a.reputation) || 0));
    }

    const container = document.getElementById("catalogList");
    const prevListScroll = container ? container.scrollTop : 0;

    const adminQuickAddHtml = isCurrentUserAdmin() ? `
        <button type="button" onclick="openQuickCreatorForCurrentTab('${activeCatalogTab}')"
          class="w-full py-2.5 px-4 mb-1 bg-cp-yellow/10 hover:bg-cp-yellow text-cp-yellow hover:text-black border border-dashed border-cp-yellow font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(252,238,10,0.12)]">
          <span>➕ Добавить новую карточку в раздел «${SECTION_LABELS[activeCatalogTab] || activeCatalogTab}»</span>
        </button>
      ` : "";

    if (filtered.length === 0) {
        container.innerHTML = adminQuickAddHtml + `<div class="bg-cp-card border border-gray-800 p-8 text-center text-gray-400 text-xs">По вашему запросу ничего не найдено. Сбросьте фильтры!</div>`;
        document.getElementById("detailCard").innerHTML = `<div class="text-xs text-gray-500">Выберите объект в списке слева...</div>`;
        return;
    }

    if (!selectedItemId || !filtered.some(i => i.id === selectedItemId)) selectedItemId = filtered[0].id;

    container.innerHTML = adminQuickAddHtml + filtered.map(item => {
        const isSel = item.id === selectedItemId;
        const borderCls = isSel ? "cp-border-active bg-cp-card" : "border-gray-800 bg-cp-card/70 hover:border-gray-600";
        const favStar = isItemFavorited(item.id) ? `<span class="text-cp-yellow text-xs">★</span>` : "";
        const userBadge = item.isUser ? `<span class="text-[10px] bg-cp-yellow/20 text-cp-yellow border border-cp-yellow/40 px-1 font-bold">HOMEBREW</span>` : "";
        const namedBadge = (activeCatalogTab === "characters" && item.isNamed) ? `<span class="text-[10px] bg-cp-cyan/20 text-cp-cyan border border-cp-cyan/50 px-1.5 font-bold">⭐ ИМЕННОЙ</span>` : "";
        const imgsArr = getItemImagesArray(item);
        const imgBadge = imgsArr.length > 0 ? `<span class="text-[10px] text-cp-cyan border border-cp-cyan/40 px-1">🖼️${imgsArr.length > 1 ? ' ' + imgsArr.length : ''}</span>` : "";
        const commCnt = (COMMENTS[item.id] || []).length;
        const commBadge = commCnt > 0 ? `<span class="text-[10px] text-gray-400">💬 ${commCnt}</span>` : "";

        if (activeCatalogTab === "corporations") {
            return `
            <div onclick="selectCatalogItem('${item.id}')" class="border ${borderCls} p-3.5 cursor-pointer transition-all flex items-center justify-between gap-4">
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-display font-bold text-sm text-white">${dash(item.name)}</span>
                  ${favStar} ${userBadge} ${imgBadge} ${commBadge}
                </div>
                ${item.origName && item.origName !== item.name ? `<div class="text-[11px] text-gray-400 truncate">${item.origName}</div>` : ""}
                <div class="flex flex-wrap items-center gap-1.5 mt-1.5">
                  <span class="px-2 py-0.5 text-[10px] font-bold uppercase bg-cp-bg border border-gray-700 text-cp-cyan">${dash(item.category)}</span>
                  <span class="text-[11px] text-gray-500">[${dash(item.book)}]</span>
                </div>
              </div>
              <div class="text-right shrink-0 space-y-0.5 text-[11px] leading-tight border-l border-gray-800/90 pl-3">
                <div class="text-gray-400">Штаб: <span class="text-cp-yellow font-bold">${dash(item.hq)}</span></div>
                <div class="text-gray-400">Сотрудники: <span class="text-cp-cyan font-bold">${formatShortCorpStat(item.employees)}</span></div>
                <div class="text-gray-400">Солдаты: <span class="text-cp-red font-bold">${formatShortCorpStat(item.soldiers)}</span></div>
                <div class="text-gray-400">Оперативники: <span class="text-purple-400 font-bold">${formatShortCorpStat(item.operatives)}</span></div>
              </div>
            </div>
          `;
        }

        let subline = "";
        let rightTop = "";
        let rightBottom = dash(item.cost || item.salary);

        if (activeCatalogTab === "weapons") {
            subline = `ТО: <b class="text-white">${dash(item.to)}</b> • СКР: <b class="text-cp-cyan">${dash(item.skr)}</b> • ДОС: <b>${dash(item.dos)}</b> • МАГ: <b>${dash(item.mag)}</b> • СКО: <b>${dash(item.sko)}</b> • НАД: <b class="text-cp-green">${dash(item.nad)}</b> • ДИС: <b class="text-cp-cyan">${dash(item.range)}</b>`;
            rightTop = `<span class="px-2 py-0.5 bg-cp-yellow/15 border border-cp-yellow/50 text-cp-yellow font-bold text-xs">${dash(item.damage)} (${dash(item.ammo)})</span>`;
        } else if (activeCatalogTab === "armor") {
            subline = `Зона защиты: <b class="text-gray-200">${dash(item.covers)}</b> • Утяжеление (ЗУ): <b class="text-cp-yellow">${dash(item.zu)}</b>`;
            rightTop = `<span class="px-2 py-0.5 bg-cp-cyan/15 border border-cp-cyan/50 text-cp-cyan font-bold text-xs">ОС: ${dash(item.os)}</span>`;
        } else if (activeCatalogTab === "gear") {
            subline = `Вес: <b class="text-gray-200">${dash(item.weight)}</b> • Эффект: <b class="text-cp-cyan">${dash(item.effect)}</b>`;
        } else if (activeCatalogTab === "cyberware") {
            subline = `Хирургия: <b class="text-cp-yellow">${dash(item.surg)}</b> • Оригинал: ${dash(item.origName)}`;
            rightTop = `<span class="px-2 py-0.5 bg-cp-red/20 border border-cp-red/50 text-cp-red font-bold text-xs">ПЧ: ${dash(item.pch)}</span>`;
        } else if (activeCatalogTab === "borging") {
            subline = `Производитель: <b class="text-cp-yellow">${dash(item.manufacturer)}</b> • Тип: <b class="text-cp-cyan">${dash(item.borgType || item.category)}</b>`;
            rightTop = `<span class="px-2 py-0.5 bg-cp-red/20 border border-cp-red/50 text-cp-red font-bold text-xs">ПЧ: ${dash(item.hc)}</span>`;
        } else if (activeCatalogTab === "acpa") {
            subline = `Сила: <b class="text-cp-yellow">${dash(item.str)}</b> • Вес: <b class="text-gray-200">${dash(item.weight)}</b>`;
            rightTop = `<span class="px-2 py-0.5 bg-cp-red/20 border border-cp-red/50 text-cp-red font-bold text-xs">ОСТ: ${dash(item.sdp)}</span> <span class="px-2 py-0.5 bg-cp-cyan/15 border border-cp-cyan/50 text-cp-cyan font-bold text-xs">ОС: ${dash(item.os)}</span>`;
        } else if (activeCatalogTab === "netrunning") {
            const isDeck = item.itemKind === "deck" || item.category === "Кибердеки";
            if (isDeck) {
                subline = `ЦПУ: <b>${dash(item.cpu)}</b> • Стена данных: <b class="text-cp-cyan">${dash(item.dataWall)}</b> • Врата: <b class="text-cp-yellow">${dash(item.codeGate)}</b> • Скорость: <b class="text-cp-green">${dash(item.speed)}</b> • Память: <b>${dash(item.memory)}</b>`;
            } else {
                subline = `Оригинал: ${dash(item.origName)}`;
                rightTop = `<span class="px-2 py-0.5 bg-cp-red/20 border border-cp-red/50 text-cp-red font-bold text-xs">СИЛ: ${dash(item.strength)}</span> <span class="px-2 py-0.5 bg-cp-cyan/15 border border-cp-cyan/50 text-cp-cyan font-bold text-xs">ЕП: ${dash(item.mu)}</span>`;
            }
        } else if (activeCatalogTab === "vehicles") {
            subline = `Скор: <b class="text-cp-yellow">${dash(item.topSpeed)}</b> • УСК/ТОРМ: <b>${dash(item.accDec)}</b> • Экипаж/Пасс: <b>${dash(item.crew)}/${dash(item.passengers)}</b> • Манёвр: <b class="text-cp-green">${dash(item.maneuver)}</b>`;
            rightTop = `<span class="px-2 py-0.5 bg-cp-red/20 border border-cp-red/50 text-cp-red font-bold text-xs">ОСТ: ${dash(item.sdp)}</span> <span class="px-2 py-0.5 bg-cp-cyan/15 border border-cp-cyan/50 text-cp-cyan font-bold text-xs">ОС: ${formatVehicleArmorOS(item.os)}</span>`;
        } else if (activeCatalogTab === "services") {
            subline = `Расчётная единица: <b class="text-gray-200">${dash(item.unit)}</b>`;
        } else if (activeCatalogTab === "roles") {
            subline = `Особая способность: <b class="text-cp-cyan">${dash(item.ability)}</b> (${dash(item.stat)})`;
        } else if (activeCatalogTab === "characters") {
            subline = `ИНТ <b>${dash(item.stat_int)}</b> • РЕФ <b>${dash(item.stat_ref)}</b> • ТЕХ <b>${dash(item.stat_tech)}</b> • КРУТ <b>${dash(item.stat_cool)}</b> • ТЕЛО <b>${dash(item.stat_body)}</b> • ЭМП <b>${dash(item.stat_emp)}</b>`;
            rightTop = `<span class="px-2 py-0.5 bg-cp-yellow/20 border border-cp-yellow/50 text-cp-yellow font-bold text-xs">РЕП: ${dash(item.reputation)}</span>`;
            rightBottom = `Роль: ${dash(item.category)}`;
        } else if (activeCatalogTab === "lore_countries") {
            subline = `Столица: <b class="text-cp-yellow">${dash(item.capital)}</b> • Грамотность: <b class="text-cp-green">${dash(item.literacy)}</b>`;
            rightBottom = `👥 ${dash(item.population)}`;
        } else if (activeCatalogTab === "lore_gangs") {
            subline = `Код угрозы: <b class="text-cp-red">${dash(item.threatCode)}</b>`;
            rightBottom = `👥 ${dash(item.population)}`;
        } else if (activeCatalogTab === "lore_nomads") {
            subline = `Нация: <b class="text-cp-cyan">${dash(item.category)}</b>`;
            rightBottom = `👥 ${dash(item.population)}`;
        } else if (activeCatalogTab === "vehicle_weapons") {
          subline = `ТО: <b class="text-cp-yellow">${dash(item.to)}</b> • Проб: <b>${dash(item.penetration)}</b> • СКО: <b>${dash(item.sko)}</b> • ДИС: <b class="text-cp-cyan">${dash(item.range)}</b> • Места: <b class="text-cp-yellow">${dash(item.spaces)}</b>`;
          rightTop = `<span class="px-2 py-0.5 bg-cp-red/20 border border-cp-red/50 text-cp-red font-bold text-xs">${dash(item.damage)}</span>`;
        } else if (activeCatalogTab === "vehicle_tuning") {
          subline = `ДОС: <b>${dash(item.dos)}</b> • Места: <b class="text-cp-yellow">${dash(item.spaces)}</b> • Эффект: <b class="text-cp-cyan">${dash(item.effect)}</b>`;
        }


        return `
          <div onclick="selectCatalogItem('${item.id}')" class="border ${borderCls} p-3.5 cursor-pointer transition-all flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="px-1.5 py-0.5 text-[10px] font-bold bg-cp-cyan/15 text-cp-cyan border border-cp-cyan/40">${dash(item.typeCode || item.category)}</span>
                <span class="font-bold text-sm text-white">${dash(item.name)}</span>
                ${namedBadge} ${favStar} ${userBadge} ${imgBadge} ${commBadge}
                <span class="text-[11px] text-gray-500">[${dash(item.book)}]</span>
              </div>
              <div class="text-xs text-gray-400 mt-1">${subline}</div>
            </div>
            <div class="flex flex-col items-end justify-between shrink-0 gap-1">
              <div class="flex gap-1">${rightTop}</div>
              <span class="text-xs font-bold text-cp-green">${rightBottom}</span>
            </div>
          </div>
        `;
    }).join("");

    container.scrollTop = prevListScroll;
    renderDetailCard(filtered.find(i => i.id === selectedItemId) || filtered[0]);
}

function selectCatalogItem(id) {
    const isNewSelection = selectedItemId !== id;
    selectedItemId = id;
    activeReplyToComment = null;
    activeEditCommentId = null;
    if (isNewSelection) {
        const box = document.getElementById("detailCard");
        if (box) box.scrollTop = 0;
    }
    renderCatalog();
}

const PURCHASABLE_SECTIONS = new Set([
    "weapons", "armor", "gear", "services", "cyberware", "borging", "acpa", "netrunning", "vehicles"
]);

function renderCardActionButtons(sectionKey, itemId) {
    const canBuy = PURCHASABLE_SECTIONS.has(sectionKey);
    const inCart = canBuy && isItemInCart(itemId);
    const buyBtn = canBuy
        ? `<button type="button" onclick="toggleCartItem('${sectionKey}', '${itemId}')" class="px-2.5 py-1 border text-xs font-bold transition-colors ${inCart ? 'bg-cp-red text-white border-cp-red hover:bg-red-600' : 'bg-cp-green/15 text-cp-green border-cp-green/60 hover:bg-cp-green hover:text-black'}">${inCart ? '✕ Убрать' : '🛒 Купить'}</button>`
        : "";

    const fav = isItemFavorited(itemId);
    const favBtn = `<button type="button" onclick="toggleFavoriteItem('${itemId}')" class="px-2.5 py-1 border text-xs font-bold transition-colors ${fav ? 'bg-cp-yellow text-black border-cp-yellow' : 'bg-cp-bg text-gray-300 border-gray-700 hover:border-cp-yellow'}">${fav ? '★ В избранном' : '☆ В избранное'}</button>`;

    const copyObrBtn = sectionKey === "characters"
        ? `<button type="button" onclick="copyCharacterCardToObr('${itemId}', this)" title="Скопировать статблок в формате Markdown для Owlbear Rodeo" class="px-2.5 py-1 border text-xs font-bold transition-colors bg-cp-cyan/15 text-cp-cyan border-cp-cyan/60 hover:bg-cp-cyan hover:text-black">📋 Скопировать</button>`
        : "";

    if (!isCurrentUserAdmin()) return `<div class="flex items-center gap-1.5 shrink-0">${copyObrBtn}${buyBtn}${favBtn}</div>`;

    const targetObj = (DB[sectionKey] || []).find(i => i.id === itemId);
    const isAddedChecked = Boolean(targetObj && targetObj.isUser);
    const isNamedChecked = Boolean(targetObj && targetObj.isNamed);

    return `
        <div class="flex flex-col items-end gap-1.5 shrink-0">
          <div class="flex items-center gap-1.5 flex-wrap justify-end">
            ${buyBtn}
            ${favBtn}
            <button type="button" onclick="startEditItem('${sectionKey}', '${itemId}')" class="px-2.5 py-1 bg-cp-cyan/15 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/50 text-xs font-bold">✏️ Ред.</button>
            <button type="button" onclick="deleteItem('${sectionKey}', '${itemId}')" class="px-2.5 py-1 bg-cp-red/15 hover:bg-cp-red text-cp-red hover:text-white border border-cp-red/50 text-xs font-bold">🗑️</button>
          </div>
          ${copyObrBtn ? `<div class="flex items-center justify-end">${copyObrBtn}</div>` : ""}
          <div class="flex items-center gap-2 flex-wrap justify-end">
            ${sectionKey === "characters" ? `
              <label class="flex items-center gap-1.5 text-[10px] text-gray-400 hover:text-cp-cyan cursor-pointer select-none bg-cp-bg border border-gray-800 px-2 py-0.5">
                <input type="checkbox" ${isNamedChecked ? 'checked' : ''} onchange="toggleCharacterNamedBadge('${itemId}', this.checked)" class="accent-cyan-400">
                <span>⭐ Именной</span>
              </label>
            ` : ""}
            <label class="flex items-center gap-1.5 text-[10px] text-gray-400 hover:text-cp-yellow cursor-pointer select-none bg-cp-bg border border-gray-800 px-2 py-0.5">
              <input type="checkbox" ${isAddedChecked ? 'checked' : ''} onchange="toggleItemAddedBadge('${sectionKey}', '${itemId}', this.checked)" class="accent-yellow-400">
              <span>Плашка «HOMEBREW»</span>
            </label>
          </div>
        </div>
      `;
}

function renderDetailCard(item) {
    const box = document.getElementById("detailCard");
    if (!item || !box) return;

    const isSameCard = box.getAttribute("data-rendered-id") === item.id;
    const savedCardScroll = isSameCard ? box.scrollTop : 0;
    const oldCommEl = document.getElementById(`comments-scroll-${item.id}`);
    const savedCommScroll = (isSameCard && oldCommEl) ? oldCommEl.scrollTop : 0;
    box.setAttribute("data-rendered-id", item.id);

    const addedHeaderBadge = item.isUser ? `<span class="ml-2 text-[10px] bg-cp-yellow/20 text-cp-yellow border border-cp-yellow/40 px-1.5 py-0.5 font-bold align-middle">HOMEBREW</span>` : "";
    const namedHeaderBadge = (activeCatalogTab === "characters" && item.isNamed) ? `<span class="ml-2 text-[10px] bg-cp-cyan/20 text-cp-cyan border border-cp-cyan/50 px-1.5 py-0.5 font-bold align-middle">⭐ ИМЕННОЙ</span>` : "";

    // 1. РОЛИ (с таблицей зарплат по уровням Ур. 1-5 ... Ур. 10)
    if (activeCatalogTab === "roles") {
        const salTable = resolveRoleSalaryTable(item);
        const skillsArr = Array.isArray(item.skills) && item.skills.length > 0 ? item.skills : ["—"];
        const abilityBlockHtml = (item.abilityDesc && String(item.abilityDesc).trim() !== "" && item.abilityDesc !== "—")
            ? `<div class="bg-cp-bg border-l-2 border-cp-cyan p-3.5 mb-4">
               <div class="text-[11px] font-bold uppercase text-cp-cyan mb-1">⚡ Описание особой способности (${dash(item.ability)}):</div>
               <div class="text-xs text-gray-200 leading-relaxed whitespace-pre-line">${item.abilityDesc}</div>
             </div>` : "";

        box.innerHTML = `
          <div class="border-b border-gray-800 pb-3 mb-4 flex items-start justify-between gap-3">
            <div>
              <div class="text-xs text-cp-cyan uppercase font-bold">${dash(item.category)} // Источник: ${dash(item.book)} ${addedHeaderBadge}</div>
              <h2 class="font-display text-2xl font-black text-white mt-1">${dash(item.name)}</h2>
              <div class="text-xs text-gray-500">Оригинал: ${dash(item.origName)}</div>
            </div>
            ${renderCardActionButtons(activeCatalogTab, item.id)}
          </div>
          <div class="grid grid-cols-2 gap-3 mb-4 text-center">
            <div class="bg-cp-bg border border-gray-800 p-3">
              <div class="text-[10px] text-gray-400 uppercase">⚡ Особая способность</div>
              <div class="text-sm font-display font-bold text-cp-cyan mt-0.5">${dash(item.ability)}</div>
            </div>
            <div class="bg-cp-bg border border-gray-800 p-3">
              <div class="text-[10px] text-gray-400 uppercase">📊 Ключевой СТАТ</div>
              <div class="text-sm font-display font-bold text-cp-yellow mt-0.5">${dash(item.stat)}</div>
            </div>
          </div>
          ${abilityBlockHtml}
          <div class="bg-cp-bg border border-gray-800 p-3.5 mb-4">
            <div class="text-xs font-bold uppercase text-cp-cyan mb-2">Профессиональные навыки роли:</div>
            <div class="grid grid-cols-2 gap-1.5 text-xs">
              ${skillsArr.map((sk, i) => `<div class="bg-black/40 border border-gray-800 px-2.5 py-1.5 flex items-center gap-2"><span class="text-cp-yellow font-bold">${i + 1}.</span><span class="text-gray-200">${dash(sk)}</span></div>`).join("")}
            </div>
          </div>
          <div class="bg-cp-bg border border-gray-800 p-3.5 mb-4 space-y-2">
            <div class="flex items-center justify-between border-b border-gray-800 pb-1.5">
              <span class="text-[11px] font-bold uppercase text-cp-green">💰 Зарплата по уровню Особой Способности</span>
              <span class="text-xs font-bold text-cp-green">${dash(salTable.lvl1_5)} — ${dash(salTable.lvl10)}</span>
            </div>
            <div class="grid grid-cols-6 gap-1.5 text-center text-xs">
              ${ROLE_SALARY_LEVELS.map(lv => `
                <div class="bg-cp-panel border border-gray-800 p-2">
                  <div class="text-[10px] text-cp-yellow font-bold">${lv.label}</div>
                  <div class="text-[11px] text-cp-green font-bold mt-0.5">${dash(salTable[lv.key])}</div>
                </div>
              `).join("")}
            </div>
          </div>
          ${item.desc && String(item.desc).trim() !== "" ? `<div class="bg-cp-bg/90 border-l-2 border-cp-yellow p-3.5 text-xs leading-relaxed text-gray-200 whitespace-pre-line">${item.desc}</div>` : ""}
          ${renderCardGalleryBlockHTML(item)}
          ${renderCommentsSectionHTML(item.id)}
        `;
    }
    // 2. КОРПОРАЦИИ
    else if (activeCatalogTab === "corporations") {
        box.innerHTML = `
          <div class="border-b border-gray-800 pb-3 mb-4 flex items-start justify-between gap-3">
            <div>
              <div class="text-xs text-cp-cyan uppercase font-bold">${dash(item.category)} // Источник: ${dash(item.book)} ${addedHeaderBadge}</div>
              <h2 class="font-display text-2xl font-black text-white mt-1">${dash(item.name)}</h2>
              <div class="text-xs text-gray-500">${dash(item.origName)}</div>
            </div>
            ${renderCardActionButtons(activeCatalogTab, item.id)}
          </div>
          <div class="space-y-3 mb-4">
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-cp-bg border border-gray-800 p-3.5">
                <div class="text-[10px] text-gray-400 uppercase">📍 Штаб-квартира</div>
                <div class="text-sm font-display font-bold text-cp-yellow mt-1">${dash(item.hq)}</div>
              </div>
              <div class="bg-cp-bg border border-gray-800 p-3.5">
                <div class="text-[10px] text-gray-400 uppercase">👥 Число сотрудников</div>
                <div class="text-sm font-display font-bold text-cp-cyan mt-1">${dash(item.employees)}</div>
              </div>
              <div class="bg-cp-bg border border-gray-800 p-3.5">
                <div class="text-[10px] text-gray-400 uppercase">🪖 Число солдат (войска)</div>
                <div class="text-sm font-display font-bold text-cp-red mt-1">${dash(item.soldiers)}</div>
              </div>
              <div class="bg-cp-bg border border-gray-800 p-3.5">
                <div class="text-[10px] text-gray-400 uppercase">🕶️ Число оперативников</div>
                <div class="text-sm font-display font-bold text-purple-400 mt-1">${dash(item.operatives)}</div>
              </div>
            </div>
            <div class="bg-cp-bg border-l-2 border-cp-green p-3.5">
              <div class="text-[10px] font-bold uppercase text-cp-green mb-1">📈 Самые крупные держатели акций:</div>
              <div class="text-xs text-gray-200 leading-relaxed whitespace-pre-line font-semibold">${dash(item.shareholders)}</div>
            </div>
          </div>
          ${item.desc && String(item.desc).trim() !== "" ? `<div class="bg-cp-bg/90 border-l-2 border-cp-yellow p-3.5 text-xs leading-relaxed text-gray-200 whitespace-pre-line">${item.desc}</div>` : ""}
          ${renderCardGalleryBlockHTML(item)}
          ${renderCommentsSectionHTML(item.id)}
        `;
    }
    // 3. ВСЕ ОСТАЛЬНЫЕ РАЗДЕЛЫ (Оружие с галочками патронов, Броня, Боргирование, Персонажи и т.д.)
    else {
        const isDeck = activeCatalogTab === "netrunning" && (item.itemKind === "deck" || item.category === "Кибердеки");
        const schemaKey = activeCatalogTab === "netrunning" ? (isDeck ? "net_deck" : "net_program") : activeCatalogTab;
        const fields = (SCHEMAS[schemaKey] || []).filter(f => f.stat);
        const gridCols = (activeCatalogTab === "weapons" || activeCatalogTab === "acpa") ? "grid-cols-4" : "grid-cols-3";
        const magCalc = activeCatalogTab === "weapons" ? calculateWeaponMagCost(item) : null;

        const statsHtml = fields.map(f => {
            const spanCls = f.span ? `col-span-${f.span}` : "";
            const colorCls = f.c || "text-white";

            // Если это блок цены оружия и включён авторасчёт магазина — делим базовый широкий блок (col-span-4) ровно на 2 равные половины!
            if (activeCatalogTab === "weapons" && f.k === "cost" && magCalc) {
                return `
              <div class="${spanCls} grid grid-cols-2 bg-cp-bg border border-gray-800 divide-x divide-gray-800 text-center overflow-hidden">
                <div class="p-2.5 flex flex-col justify-center">
                  <div class="text-[10px] text-gray-400 uppercase">Цена оружия</div>
                  <div class="text-sm font-display font-bold text-cp-green mt-0.5">${dash(item.cost)}</div>
                </div>
                <div class="p-2.5 flex flex-col justify-center bg-cp-green/5" title="Авторасчёт: ${magCalc.maxMag} патр. × ${magCalc.multiplier} eb (округлено вниз)">
                  <div class="text-[10px] text-cp-cyan uppercase">Цена магазина</div>
                  <div class="text-sm font-display font-bold text-cp-green mt-0.5">${magCalc.costEb} eb</div>
                </div>
              </div>
            `;
            }

            const valDisplay = (activeCatalogTab === "vehicles" && f.k === "os") ? formatVehicleArmorOS(item.os) : dash(item[f.k]);
            return `<div class="bg-cp-bg border border-gray-800 p-2.5 ${spanCls}"><div class="text-[10px] text-gray-400">${f.stat}</div><div class="text-sm font-bold ${colorCls} mt-0.5">${valDisplay}</div></div>`;
        }).join("");

        // Панель взаимоисключающих галочек «Безгильзовое / Гильзовое» прямо в карточке оружия
        let weaponCasingBarHtml = "";
        if (activeCatalogTab === "weapons") {
            const casing = item.ammoCasing || "";
            const isCaseless = (casing === "caseless");
            const isCased = (casing === "cased");
            if (isCurrentUserAdmin()) {
                weaponCasingBarHtml = `
              <div class="mb-3 p-2.5 bg-cp-bg border border-gray-800 flex flex-wrap items-center justify-between gap-2">
                <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Боеприпас (авторасчёт магазина):</span>
                <div class="flex items-center gap-3">
                  <label class="inline-flex items-center gap-1.5 cursor-pointer select-none px-2.5 py-1 border text-[11px] font-bold uppercase transition-all ${isCaseless ? 'bg-cp-cyan/20 text-cp-cyan border-cp-cyan' : 'bg-cp-panel text-gray-300 border-gray-700 hover:border-cp-cyan/60'}">
                    <input type="checkbox" ${isCaseless ? 'checked' : ''} onchange="handleQuickWeaponCasingChange('${item.id}', 'caseless', this.checked)" class="w-3.5 h-3.5 accent-cyan-400 cursor-pointer">
                    <span>Безгильзовое (0.5 eb)</span>
                  </label>
                  <label class="inline-flex items-center gap-1.5 cursor-pointer select-none px-2.5 py-1 border text-[11px] font-bold uppercase transition-all ${isCased ? 'bg-cp-yellow/20 text-cp-yellow border-cp-yellow' : 'bg-cp-panel text-gray-300 border-gray-700 hover:border-cp-yellow/60'}">
                    <input type="checkbox" ${isCased ? 'checked' : ''} onchange="handleQuickWeaponCasingChange('${item.id}', 'cased', this.checked)" class="w-3.5 h-3.5 accent-yellow-400 cursor-pointer">
                    <span>Гильзовое (1 eb)</span>
                  </label>
                </div>
              </div>
            `;
            } else if (isCaseless || isCased) {
                weaponCasingBarHtml = `
              <div class="mb-3 p-2 bg-cp-bg border border-gray-800 flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase text-gray-400">Тип боеприпаса:</span>
                <span class="px-2.5 py-0.5 text-[10px] font-bold uppercase border ${isCaseless ? 'bg-cp-cyan/15 text-cp-cyan border-cp-cyan/50' : 'bg-cp-yellow/15 text-cp-yellow border-cp-yellow/50'}">
                  ${isCaseless ? '🔹 Безгильзовое (0.5 eb)' : '🔸 Гильзовое (1 eb)'}
                </span>
              </div>
            `;
            }
        }
        // Панель взаимоисключающих галочек «Мягкая / Твёрдая» прямо в карточке брони
        let armorTypeBarHtml = "";
        if (activeCatalogTab === "armor") {
            const aType = item.armorType || "";
            const isSoft = (aType === "soft");
            const isHard = (aType === "hard");
            if (isCurrentUserAdmin()) {
                armorTypeBarHtml = `
              <div class="mb-3 p-2.5 bg-cp-bg border border-gray-800 flex flex-wrap items-center justify-between gap-2">
                <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Тип брони:</span>
                <div class="flex items-center gap-3">
                  <label class="inline-flex items-center gap-1.5 cursor-pointer select-none px-2.5 py-1 border text-[11px] font-bold uppercase transition-all ${isSoft ? 'bg-cp-cyan/20 text-cp-cyan border-cp-cyan' : 'bg-cp-panel text-gray-300 border-gray-700 hover:border-cp-cyan/60'}">
                    <input type="checkbox" ${isSoft ? 'checked' : ''} onchange="handleQuickArmorTypeChange('${item.id}', 'soft', this.checked)" class="w-3.5 h-3.5 accent-cyan-400 cursor-pointer">
                    <span>Мягкая</span>
                  </label>
                  <label class="inline-flex items-center gap-1.5 cursor-pointer select-none px-2.5 py-1 border text-[11px] font-bold uppercase transition-all ${isHard ? 'bg-cp-yellow/20 text-cp-yellow border-cp-yellow' : 'bg-cp-panel text-gray-300 border-gray-700 hover:border-cp-yellow/60'}">
                    <input type="checkbox" ${isHard ? 'checked' : ''} onchange="handleQuickArmorTypeChange('${item.id}', 'hard', this.checked)" class="w-3.5 h-3.5 accent-yellow-400 cursor-pointer">
                    <span>Твёрдая</span>
                  </label>
                </div>
              </div>
            `;
            } else if (isSoft || isHard) {
                armorTypeBarHtml = `
              <div class="mb-3 p-2 bg-cp-bg border border-gray-800 flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase text-gray-400">Тип брони:</span>
                <span class="px-2.5 py-0.5 text-[10px] font-bold uppercase border ${isSoft ? 'bg-cp-cyan/15 text-cp-cyan border-cp-cyan/50' : 'bg-cp-yellow/15 text-cp-yellow border-cp-yellow/50'}">
                  ${isSoft ? '🔹 Мягкая броня' : '🔸 Твёрдая броня'}
                </span>
              </div>
            `;
            }
        }
        let extraSpecialHtml = "";
        if (isDeck) {
            const activeTypes = Array.isArray(item.deckTypes) ? item.deckTypes : [];
            const activeOpts = Array.isArray(item.deckOptions) ? item.deckOptions : [];
            const chipsCnt = (item.extraChipsCount && item.extraChipsCount !== "—" && item.extraChipsCount !== "0") ? ` (${item.extraChipsCount} шт.)` : "";
            extraSpecialHtml = `
            <div class="bg-cp-bg border border-gray-800 p-3.5 mb-3">
              <div class="text-[11px] font-bold uppercase text-cp-yellow mb-2">Типы кибердеки:</div>
              <div class="grid grid-cols-3 gap-2 text-xs">
                ${DECK_TYPE_LIST.map(t => `<div class="flex items-center gap-2 px-2.5 py-1.5 border ${activeTypes.includes(t) ? 'border-cp-yellow bg-cp-yellow/10 text-white font-bold' : 'border-gray-800 bg-black/40 text-gray-500'}"><span>${activeTypes.includes(t) ? '☑' : '☐'}</span><span>${t}</span></div>`).join("")}
              </div>
            </div>
            <div class="bg-cp-bg border border-gray-800 p-3.5 mb-4">
              <div class="text-[11px] font-bold uppercase text-cp-cyan mb-2">Установленные опции деки:</div>
              <div class="grid grid-cols-2 gap-2 text-xs">
                ${DECK_OPTION_LIST.map(o => `<div class="flex items-center gap-2 px-2.5 py-1.5 border ${activeOpts.includes(o) ? 'border-cp-cyan bg-cp-cyan/10 text-white font-bold' : 'border-gray-800 bg-black/40 text-gray-500'}"><span>${activeOpts.includes(o) ? '☑' : '☐'}</span><span>${o}${o === "Доп чипы" && activeOpts.includes(o) ? chipsCnt : ""}</span></div>`).join("")}
              </div>
            </div>
          `;
        } else if (activeCatalogTab === "vehicles") {
            if (item.specialEquipment && String(item.specialEquipment).trim() !== "" && item.specialEquipment !== "—") {
                extraSpecialHtml = `
              <div class="bg-cp-bg border border-cp-cyan/50 p-3.5 mb-4">
                <div class="text-[11px] font-bold uppercase text-cp-cyan mb-1.5">🔧 Особое снаряжение и вооружение:</div>
                <div class="text-xs text-gray-200 leading-relaxed whitespace-pre-line">${item.specialEquipment}</div>
              </div>
            `;
            }
        } else if (activeCatalogTab === "borging") {
            const st = item.borgStats || {};
            const str = item.borgStructure || {};
            const cyberArr = Array.isArray(item.cyberwareList) ? item.cyberwareList : [];
            extraSpecialHtml = `
            <div class="space-y-4 mb-4">
              <div class="bg-cp-bg border-l-2 border-cp-yellow p-3.5 space-y-2">
                <div class="text-[11px] font-bold uppercase text-cp-yellow">📊 Физические статы:</div>
                <div class="grid grid-cols-4 gap-2 text-xs text-center">
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="text-[9px] text-gray-400">РЕФ</div><div class="font-bold text-white">${dash(st.ref)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="text-[9px] text-gray-400">ПРВЛ</div><div class="font-bold text-white">${dash(st.cool)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="text-[9px] text-gray-400">ПЕР</div><div class="font-bold text-white">${dash(st.ma)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="text-[9px] text-gray-400">ТЕЛО</div><div class="font-bold text-white">${dash(st.body)}</div></div>
                </div>
                <div class="grid grid-cols-4 gap-2 text-xs text-center">
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="text-[9px] text-gray-400">М/Ход</div><div class="font-bold text-cp-cyan">${dash(st.m_m)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="text-[9px] text-gray-400">КМ/Ч</div><div class="font-bold text-cp-cyan">${dash(st.m_kmh)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="text-[9px] text-gray-400">Прыжок вверх</div><div class="font-bold text-cp-cyan">${dash(st.jump_up)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="text-[9px] text-gray-400">Прыжок вдаль</div><div class="font-bold text-cp-cyan">${dash(st.jump_long)}</div></div>
                </div>
                <div class="grid grid-cols-3 gap-2 text-xs text-center">
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="text-[9px] text-gray-400">Поднимает / Кидает</div><div class="font-bold text-cp-green">${dash(st.lift)} / ${dash(st.throw)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="text-[9px] text-gray-400">Мод. урона</div><div class="font-bold text-cp-red">${dash(st.dmg_mod)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="text-[9px] text-gray-400">Удар / Пинок</div><div class="font-bold text-white">${dash(st.punch)} / ${dash(st.kick)}</div></div>
                </div>
              </div>
              <div class="bg-cp-bg border-l-2 border-cp-cyan p-3.5 space-y-2 text-xs">
                <div class="text-[11px] font-bold uppercase text-cp-cyan">🛡️ Физическая структура:</div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="font-bold text-white text-[10px] mb-1">🧠 Голова</div><div>ОС: <b class="text-cp-yellow">${dash(str.head_sp)}</b> • ОСТ: <b class="text-cp-red">${dash(str.head_ost)}</b></div><div class="text-[11px] text-gray-400 mt-0.5">Оптика: ${dash(str.head_opt)} | Аудио: ${dash(str.head_aud)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="font-bold text-white text-[10px] mb-1">🦾 Торс</div><div>ОС: <b class="text-cp-yellow">${dash(str.torso_sp)}</b> • ОСТ: <b class="text-cp-red">${dash(str.torso_ost)}</b></div><div class="text-[11px] text-gray-400 mt-0.5">Опции: ${dash(str.torso_opt)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="font-bold text-white text-[10px] mb-1">🦾 Правая рука</div><div>ОС: <b class="text-cp-yellow">${dash(str.rarm_sp)}</b> • ОСТ: <b class="text-cp-red">${dash(str.rarm_ost)}</b> • ${dash(str.rarm_opt)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="font-bold text-white text-[10px] mb-1">🦾 Левая рука</div><div>ОС: <b class="text-cp-yellow">${dash(str.larm_sp)}</b> • ОСТ: <b class="text-cp-red">${dash(str.larm_ost)}</b> • ${dash(str.larm_opt)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="font-bold text-white text-[10px] mb-1">🦿 Правая нога</div><div>ОС: <b class="text-cp-yellow">${dash(str.rleg_sp)}</b> • ОСТ: <b class="text-cp-red">${dash(str.rleg_ost)}</b> • ${dash(str.rleg_opt)}</div></div>
                  <div class="bg-cp-panel border border-gray-800 p-2"><div class="font-bold text-white text-[10px] mb-1">🦿 Левая нога</div><div>ОС: <b class="text-cp-yellow">${dash(str.lleg_sp)}</b> • ОСТ: <b class="text-cp-red">${dash(str.lleg_ost)}</b> • ${dash(str.lleg_opt)}</div></div>
                </div>
              </div>
              ${cyberArr.length > 0 ? `
                <div class="bg-cp-bg border-l-2 border-purple-500 p-3.5 space-y-2">
                  <div class="text-[11px] font-bold uppercase text-purple-400">🦾 Встроенное кибероснащение (${cyberArr.length}):</div>
                  ${cyberArr.map(c => `<div class="bg-cp-panel border border-gray-800 p-2.5 text-xs"><div class="font-bold text-white">${dash(c.name)}</div>${c.desc ? `<div class="text-gray-300 mt-1 whitespace-pre-line">${c.desc}</div>` : ""}</div>`).join("")}
                </div>
              ` : ""}
            </div>
          `;
        } else if (activeCatalogTab === "acpa") {
            const gearArr = Array.isArray(item.acpaGearList) ? item.acpaGearList : [];
            const weaponsArr = Array.isArray(item.acpaWeaponsList) ? item.acpaWeaponsList : [];

            extraSpecialHtml = `
            <div class="space-y-3 mb-4">
              ${gearArr.length > 0 ? `
                <div class="bg-cp-bg border-l-2 border-cp-cyan p-3.5 space-y-2">
                  <div class="text-[11px] font-bold uppercase text-cp-cyan">🔧 Особое снаряжение (${gearArr.length}):</div>
                  ${gearArr.map(g => `
                    <div class="bg-cp-panel border border-gray-800 p-2.5 text-xs">
                      <div class="font-bold text-white">${dash(g.name)}</div>
                      ${g.desc && g.desc !== "—" ? `<div class="text-gray-300 mt-1 whitespace-pre-line">${g.desc}</div>` : ""}
                    </div>
                  `).join("")}
                </div>
              ` : ""}

              ${weaponsArr.length > 0 ? `
                <div class="bg-cp-bg border-l-2 border-cp-red p-3.5 space-y-2.5">
                  <div class="text-[11px] font-bold uppercase text-cp-red">🔫 Встроенное вооружение (${weaponsArr.length}):</div>
                  ${weaponsArr.map(w => `
                    <div class="bg-cp-panel border border-gray-800 p-3 space-y-2">
                      <div class="border-b border-gray-800 pb-1 font-bold text-sm text-white">${dash(w.name)}</div>
                      <div class="grid grid-cols-3 sm:grid-cols-9 gap-1 text-center text-[11px]">
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">Тип</div><b>${dash(w.type)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">СКР</div><b class="text-cp-cyan">${dash(w.skr)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">ТО</div><b class="text-cp-yellow">${dash(w.to)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">Урон</div><b class="text-cp-red">${dash(w.damage)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">МАГ</div><b>${dash(w.mag)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">СКО</div><b>${dash(w.sko)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">ДИС</div><b class="text-cp-cyan">${dash(w.range)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">НАД</div><b class="text-cp-green">${dash(w.nad)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">Цена</div><b class="text-cp-green">${dash(w.cost)}</b></div>
                      </div>
                      ${w.desc && w.desc !== "—" ? `<div class="text-xs text-gray-300 pt-1 border-t border-gray-800 whitespace-pre-line">${w.desc}</div>` : ""}
                    </div>
                  `).join("")}
                </div>
              ` : ""}
            </div>
          `;
        } else if (activeCatalogTab === "characters") {
            const weaponsArr = Array.isArray(item.charWeaponsList) && item.charWeaponsList.length > 0
                ? item.charWeaponsList
                : (item.charWeapons && String(item.charWeapons).trim() !== "" && item.charWeapons !== "—")
                    ? [{ name: "Вооружение", type: "—", skr: "—", to: "—", damage: "—", mag: "—", sko: "—", range: "—", nad: "—", cost: "—", desc: item.charWeapons }] : [];

            const resolveSimpleArr = (arrKey, legacyKey, fallbackTitle) => {
                if (Array.isArray(item[arrKey]) && item[arrKey].length > 0) return item[arrKey];
                if (item[legacyKey] && String(item[legacyKey]).trim() !== "" && item[legacyKey] !== "—") return [{ name: fallbackTitle, desc: item[legacyKey] }];
                return [];
            };
            const cyberArr = resolveSimpleArr("charCyberwareList", "charCyberware", "Кибероснащение");
            const armorArr = resolveSimpleArr("charArmorList", "charArmor", "Броня");
            const gearArr = resolveSimpleArr("charGearList", "charGear", "Снаряжение");

            const renderSimpleSec = (title, list, borderCls, colorCls) => list.length === 0 ? "" : `
            <div class="bg-cp-bg border-l-2 ${borderCls} p-3.5 space-y-2">
              <div class="text-[11px] font-bold uppercase ${colorCls}">${title} (${list.length}):</div>
              ${list.map(it => `<div class="bg-cp-panel border border-gray-800 p-2.5 text-xs"><div class="font-bold text-white">${dash(it.name)}</div>${it.desc ? `<div class="text-gray-300 mt-1 whitespace-pre-line">${it.desc}</div>` : ""}</div>`).join("")}
            </div>
          `;

            extraSpecialHtml = `
            <div class="bg-cp-bg border border-gray-800 p-3.5 mb-4">
              <div class="text-[11px] font-bold uppercase text-cp-yellow mb-2">📊 СТАТЫ (Основные характеристики):</div>
              <div class="grid grid-cols-3 sm:grid-cols-9 gap-1.5 text-center">
                ${CHARACTER_STAT_KEYS.map(st => `<div class="bg-black/60 border border-gray-800 p-2"><div class="text-[9px] text-gray-400 font-bold">${st.l}</div><div class="text-sm font-display font-black text-cp-cyan mt-0.5">${dash(item[st.k])}</div></div>`).join("")}
              </div>
            </div>
            <div class="space-y-3 mb-4">
              ${item.charSkills && String(item.charSkills).trim() !== "" && item.charSkills !== "—" ? `<div class="bg-cp-bg border-l-2 border-cp-cyan p-3.5"><div class="text-[11px] font-bold uppercase text-cp-cyan mb-1">🎯 Навыки:</div><div class="text-xs text-gray-200 whitespace-pre-line">${item.charSkills}</div></div>` : ""}
              ${weaponsArr.length > 0 ? `
                <div class="bg-cp-bg border-l-2 border-cp-red p-3.5 space-y-2.5">
                  <div class="text-[11px] font-bold uppercase text-cp-red">🔫 Вооружение (${weaponsArr.length}):</div>
                  ${weaponsArr.map(w => `
                    <div class="bg-cp-panel border border-gray-800 p-3 space-y-2">
                      <div class="border-b border-gray-800 pb-1 font-bold text-sm text-white">${dash(w.name)}</div>
                      <div class="grid grid-cols-3 sm:grid-cols-9 gap-1 text-center text-[11px]">
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">Тип</div><b>${dash(w.type)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">СКР</div><b class="text-cp-cyan">${dash(w.skr)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">ТО</div><b class="text-cp-yellow">${dash(w.to)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">Урон</div><b class="text-cp-red">${dash(w.damage)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">МАГ</div><b>${dash(w.mag)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">СКО</div><b>${dash(w.sko)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">ДИС</div><b class="text-cp-cyan">${dash(w.range)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">НАД</div><b class="text-cp-green">${dash(w.nad)}</b></div>
                        <div class="bg-cp-bg p-1 border border-gray-800"><div class="text-[8px] text-gray-400">Цена</div><b class="text-cp-green">${dash(w.cost)}</b></div>
                      </div>
                      ${w.desc && w.desc !== "—" ? `<div class="text-xs text-gray-300 pt-1 border-t border-gray-800 whitespace-pre-line">${w.desc}</div>` : ""}
                    </div>
                  `).join("")}
                </div>
              ` : ""}
              ${renderSimpleSec("🦾 Кибероснащение", cyberArr, "border-purple-500", "text-purple-400")}
              ${renderSimpleSec("🛡️ Броня", armorArr, "border-cp-yellow", "text-cp-yellow")}
              ${renderSimpleSec("🎒 Снаряжение", gearArr, "border-cp-green", "text-cp-green")}
            </div>
          `;
        }

        box.innerHTML = `
          <div class="border-b border-gray-800 pb-3 mb-3 flex items-start justify-between gap-3">
            <div>
              <div class="text-xs text-cp-cyan uppercase font-bold">${dash(item.category)} // Источник: ${dash(item.book)} ${namedHeaderBadge} ${addedHeaderBadge}</div>
              <h2 class="font-display text-2xl font-black text-white mt-1">${dash(item.name)}</h2>
              <div class="text-xs text-gray-500">Оригинал: ${dash(item.origName)}</div>
            </div>
            ${renderCardActionButtons(activeCatalogTab, item.id)}
          </div>
          ${weaponCasingBarHtml}
          ${armorTypeBarHtml}
          <div class="grid ${gridCols} gap-2.5 text-center mb-4">${statsHtml}</div>
          ${extraSpecialHtml}
          ${item.desc && String(item.desc).trim() !== "" ? `<div class="bg-cp-bg/90 border-l-2 border-cp-yellow p-3.5 text-xs leading-relaxed text-gray-200 whitespace-pre-line">${item.desc}</div>` : ""}
          ${renderCardGalleryBlockHTML(item)}
          ${renderCommentsSectionHTML(item.id)}
        `;
    }

    if (isSameCard) {
        const newCommEl = document.getElementById(`comments-scroll-${item.id}`);
        if (newCommEl) newCommEl.scrollTop = savedCommScroll;
        box.scrollTop = savedCardScroll;
    }
}
// =========================================================================
// ДИНАМИЧЕСКИЕ СПИСКИ КОНСТРУКТОРА (ПЕРСОНАЖИ И БОРГИРОВАНИЕ)
// =========================================================================
function initCharBuilderStateFromItem(itemObj) {
    const v = itemObj || {};
    if (Array.isArray(v.charWeaponsList)) {
        charBuilderState.weaponsList = JSON.parse(JSON.stringify(v.charWeaponsList));
    } else if (v.charWeapons && String(v.charWeapons).trim() !== "" && v.charWeapons !== "—") {
        charBuilderState.weaponsList = [{
            name: "Основное вооружение", type: "—", skr: "—", to: "—", damage: "—", mag: "—", sko: "—", range: "—", nad: "—", cost: "—",
            desc: String(v.charWeapons).trim()
        }];
    } else {
        charBuilderState.weaponsList = [];
    }

    const initSimple = (arrKey, legacyKey) => {
        if (Array.isArray(v[arrKey])) return JSON.parse(JSON.stringify(v[arrKey]));
        if (v[legacyKey] && String(v[legacyKey]).trim() !== "" && v[legacyKey] !== "—") return [{ name: "Запись", desc: String(v[legacyKey]).trim() }];
        return [];
    };
    charBuilderState.cyberwareList = initSimple("charCyberwareList", "charCyberware");
    charBuilderState.armorList = initSimple("charArmorList", "charArmor");
    charBuilderState.gearList = initSimple("charGearList", "charGear");
}

function syncCharBuilderStateFromDOM() {
    const wCards = document.querySelectorAll(".char-weapon-builder-item");
    if (wCards.length > 0 || document.getElementById("charWeaponsBuilderList")) {
        charBuilderState.weaponsList = Array.from(wCards).map(el => ({
            name: el.querySelector('[data-field="name"]')?.value || "",
            type: el.querySelector('[data-field="type"]')?.value || "",
            skr: el.querySelector('[data-field="skr"]')?.value || "",
            to: el.querySelector('[data-field="to"]')?.value || "",
            damage: el.querySelector('[data-field="damage"]')?.value || "",
            mag: el.querySelector('[data-field="mag"]')?.value || "",
            sko: el.querySelector('[data-field="sko"]')?.value || "",
            range: el.querySelector('[data-field="range"]')?.value || "",
            nad: el.querySelector('[data-field="nad"]')?.value || "",
            cost: el.querySelector('[data-field="cost"]')?.value || "",
            desc: el.querySelector('[data-field="desc"]')?.value || ""
        }));
    }

    ["cyberwareList", "armorList", "gearList"].forEach(listKey => {
        const container = document.getElementById(`char-${listKey}-container`);
        if (container) {
            const items = container.querySelectorAll(".char-simple-builder-item");
            charBuilderState[listKey] = Array.from(items).map(el => ({
                name: el.querySelector('[data-field="name"]')?.value || "",
                desc: el.querySelector('[data-field="desc"]')?.value || ""
            }));
        }
    });
}

window.addCharWeaponBlock = function () {
    syncCharBuilderStateFromDOM();
    charBuilderState.weaponsList.push({ name: "", type: "", skr: "", to: "", damage: "", mag: "", sko: "", range: "", nad: "", cost: "", desc: "" });
    renderCharEquipmentBuilderBoxes();
};
window.removeCharWeaponBlock = function (idx) {
    syncCharBuilderStateFromDOM();
    charBuilderState.weaponsList.splice(idx, 1);
    renderCharEquipmentBuilderBoxes();
};
window.addCharSimpleBlock = function (listKey) {
    syncCharBuilderStateFromDOM();
    if (!Array.isArray(charBuilderState[listKey])) charBuilderState[listKey] = [];
    charBuilderState[listKey].push({ name: "", desc: "" });
    renderCharEquipmentBuilderBoxes();
};
window.removeCharSimpleBlock = function (listKey, idx) {
    syncCharBuilderStateFromDOM();
    if (!Array.isArray(charBuilderState[listKey])) return;
    charBuilderState[listKey].splice(idx, 1);
    renderCharEquipmentBuilderBoxes();
};

function renderCharEquipmentBuilderBoxes() {
    const wBox = document.getElementById("charWeaponsBuilderList");
    if (wBox) {
        if (charBuilderState.weaponsList.length === 0) {
            wBox.innerHTML = `<div class="text-[11px] text-gray-500 italic py-2 px-3 bg-black/30 border border-gray-800/80">Оружие не добавлено. Нажмите «+ Добавить пушку».</div>`;
        } else {
            wBox.innerHTML = charBuilderState.weaponsList.map((w, idx) => `
            <div class="char-weapon-builder-item bg-cp-bg border border-cp-red/50 p-3 space-y-2.5">
              <div class="flex items-center justify-between gap-2 border-b border-gray-800 pb-1.5">
                <span class="text-[10px] font-bold uppercase text-cp-red">🔫 Оружие #${idx + 1}</span>
                <button type="button" onclick="removeCharWeaponBlock(${idx})" class="text-[10px] px-2 py-0.5 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white font-bold uppercase">✕ Удалить</button>
              </div>
              <input type="text" data-field="name" value="${escapeHtmlAttr(w.name)}" placeholder="Название оружия..." class="w-full bg-cp-panel border border-gray-700 px-2.5 py-1.5 text-xs text-white font-bold outline-none">
              <div class="grid grid-cols-3 sm:grid-cols-9 gap-1.5">
                <div><label class="block text-[9px] text-gray-400 text-center">Тип</label><input type="text" data-field="type" value="${escapeHtmlAttr(w.type)}" placeholder="П" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-white"></div>
                <div><label class="block text-[9px] text-gray-400 text-center">СКР</label><input type="text" data-field="skr" value="${escapeHtmlAttr(w.skr)}" placeholder="Кур" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-cyan"></div>
                <div><label class="block text-[9px] text-gray-400 text-center">ТО</label><input type="text" data-field="to" value="${escapeHtmlAttr(w.to)}" placeholder="+1" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-yellow"></div>
                <div><label class="block text-[9px] text-gray-400 text-center">Урон</label><input type="text" data-field="damage" value="${escapeHtmlAttr(w.damage)}" placeholder="3d6" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-red font-bold"></div>
                <div><label class="block text-[9px] text-gray-400 text-center">МАГ</label><input type="text" data-field="mag" value="${escapeHtmlAttr(w.mag)}" placeholder="12" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-white"></div>
                <div><label class="block text-[9px] text-gray-400 text-center">СКО</label><input type="text" data-field="sko" value="${escapeHtmlAttr(w.sko)}" placeholder="2" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-white"></div>
                <div><label class="block text-[9px] text-gray-400 text-center">ДИС</label><input type="text" data-field="range" value="${escapeHtmlAttr(w.range)}" placeholder="50м" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-cyan"></div>
                <div><label class="block text-[9px] text-gray-400 text-center">НАД</label><input type="text" data-field="nad" value="${escapeHtmlAttr(w.nad)}" placeholder="ОН" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-green"></div>
                <div><label class="block text-[9px] text-gray-400 text-center">Цена</label><input type="text" data-field="cost" value="${escapeHtmlAttr(w.cost)}" placeholder="300 eb" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-green"></div>
              </div>
              <textarea data-field="desc" rows="2" placeholder="Описание и модификации..." class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white outline-none">${w.desc || ""}</textarea>
            </div>
          `).join("");
        }
    }

    const simpleConfigs = [
        { key: "cyberwareList", border: "border-purple-500/50", namePh: "Название импланта...", descPh: "Эффект, опции, ПЧ..." },
        { key: "armorList", border: "border-cp-yellow/50", namePh: "Название брони...", descPh: "ОС, зоны, ЗУ..." },
        { key: "gearList", border: "border-cp-green/50", namePh: "Название снаряжения...", descPh: "Эффект, количество..." }
    ];
    simpleConfigs.forEach(cfg => {
        const container = document.getElementById(`char-${cfg.key}-container`);
        if (!container) return;
        const arr = charBuilderState[cfg.key] || [];
        container.innerHTML = arr.length === 0
            ? `<div class="text-[11px] text-gray-500 italic py-2 px-3 bg-black/30 border border-gray-800/80">Список пуст. Нажмите «+», чтобы добавить.</div>`
            : arr.map((item, idx) => `
              <div class="char-simple-builder-item bg-cp-bg border ${cfg.border} p-3 space-y-2">
                <div class="flex items-center justify-between gap-2">
                  <input type="text" data-field="name" value="${escapeHtmlAttr(item.name)}" placeholder="${cfg.namePh}" class="flex-1 bg-cp-panel border border-gray-700 px-2.5 py-1.5 text-xs text-white font-bold outline-none">
                  <button type="button" onclick="removeCharSimpleBlock('${cfg.key}', ${idx})" class="px-2 py-1 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white text-[10px] font-bold">✕</button>
                </div>
                <textarea data-field="desc" rows="2" placeholder="${cfg.descPh}" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white outline-none">${item.desc || ""}</textarea>
              </div>
            `).join("");
    });
}

function initBorgBuilderState(itemObj) {
    const v = itemObj || {};
    if (Array.isArray(v.cyberwareList)) borgBuilderCyberwareList = JSON.parse(JSON.stringify(v.cyberwareList));
    else if (v.cyberware && String(v.cyberware).trim() !== "" && v.cyberware !== "—") borgBuilderCyberwareList = [{ name: "Встроенное оснащение", desc: String(v.cyberware).trim() }];
    else borgBuilderCyberwareList = [];
}
function syncBorgBuilderFromDOM() {
    const container = document.getElementById("borg-cyberware-container");
    if (!container) return;
    borgBuilderCyberwareList = Array.from(container.querySelectorAll(".borg-cyber-builder-item")).map(el => ({
        name: el.querySelector('[data-field="name"]')?.value || "",
        desc: el.querySelector('[data-field="desc"]')?.value || ""
    }));
}
window.addBorgCyberwareBlock = function () { syncBorgBuilderFromDOM(); borgBuilderCyberwareList.push({ name: "", desc: "" }); renderBorgCyberwareBuilderList(); };
window.removeBorgCyberwareBlock = function (idx) { syncBorgBuilderFromDOM(); borgBuilderCyberwareList.splice(idx, 1); renderBorgCyberwareBuilderList(); };
function renderBorgCyberwareBuilderList() {
    const container = document.getElementById("borg-cyberware-container");
    if (!container) return;
    container.innerHTML = borgBuilderCyberwareList.length === 0
        ? `<div class="text-[11px] text-gray-500 italic py-2 px-3 bg-black/30 border border-gray-800">Оснащение не добавлено.</div>`
        : borgBuilderCyberwareList.map((item, idx) => `
            <div class="borg-cyber-builder-item bg-cp-bg border border-purple-500/50 p-3 space-y-2">
              <div class="flex items-center justify-between gap-2">
                <input type="text" data-field="name" value="${escapeHtmlAttr(item.name)}" placeholder="Название импланта / подсистемы..." class="flex-1 bg-cp-panel border border-gray-700 px-2.5 py-1.5 text-xs text-white font-bold outline-none">
                <button type="button" onclick="removeBorgCyberwareBlock(${idx})" class="px-2 py-1 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white text-[10px] font-bold">✕</button>
              </div>
              <textarea data-field="desc" rows="2" placeholder="Описание..." class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white outline-none">${item.desc || ""}</textarea>
            </div>
          `).join("");
}
function initAcpaBuilderState(itemObj) {
    const v = itemObj || {};
    acpaBuilderState.gearList = Array.isArray(v.acpaGearList) ? JSON.parse(JSON.stringify(v.acpaGearList)) : [];
    acpaBuilderState.weaponsList = Array.isArray(v.acpaWeaponsList) ? JSON.parse(JSON.stringify(v.acpaWeaponsList)) : [];
}

function syncAcpaBuilderFromDOM() {
    const gearCont = document.getElementById("acpa-gearList-container");
    if (gearCont) {
        acpaBuilderState.gearList = Array.from(gearCont.querySelectorAll(".acpa-gear-builder-item")).map(el => ({
            name: el.querySelector('[data-field="name"]')?.value || "",
            desc: el.querySelector('[data-field="desc"]')?.value || ""
        }));
    }
    const weapCont = document.getElementById("acpaWeaponsBuilderList");
    if (weapCont) {
        acpaBuilderState.weaponsList = Array.from(weapCont.querySelectorAll(".acpa-weapon-builder-item")).map(el => ({
            name: el.querySelector('[data-field="name"]')?.value || "",
            type: el.querySelector('[data-field="type"]')?.value || "",
            skr: el.querySelector('[data-field="skr"]')?.value || "",
            to: el.querySelector('[data-field="to"]')?.value || "",
            damage: el.querySelector('[data-field="damage"]')?.value || "",
            mag: el.querySelector('[data-field="mag"]')?.value || "",
            sko: el.querySelector('[data-field="sko"]')?.value || "",
            range: el.querySelector('[data-field="range"]')?.value || "",
            nad: el.querySelector('[data-field="nad"]')?.value || "",
            cost: el.querySelector('[data-field="cost"]')?.value || "",
            desc: el.querySelector('[data-field="desc"]')?.value || ""
        }));
    }
}

window.addAcpaGearBlock = function () {
    syncAcpaBuilderFromDOM();
    acpaBuilderState.gearList.push({ name: "", desc: "" });
    renderAcpaBuilderLists();
};
window.removeAcpaGearBlock = function (idx) {
    syncAcpaBuilderFromDOM();
    acpaBuilderState.gearList.splice(idx, 1);
    renderAcpaBuilderLists();
};
window.addAcpaWeaponBlock = function () {
    syncAcpaBuilderFromDOM();
    acpaBuilderState.weaponsList.push({ name: "", type: "", skr: "", to: "", damage: "", mag: "", sko: "", range: "", nad: "", cost: "", desc: "" });
    renderAcpaBuilderLists();
};
window.removeAcpaWeaponBlock = function (idx) {
    syncAcpaBuilderFromDOM();
    acpaBuilderState.weaponsList.splice(idx, 1);
    renderAcpaBuilderLists();
};

function renderAcpaBuilderLists() {
    const gBox = document.getElementById("acpa-gearList-container");
    if (gBox) {
        gBox.innerHTML = acpaBuilderState.gearList.length === 0
            ? `<div class="text-[11px] text-gray-500 italic py-2 px-3 bg-black/30 border border-gray-800">Особое снаряжение не добавлено. Нажмите «+ Добавить снаряжение».</div>`
            : acpaBuilderState.gearList.map((g, idx) => `
              <div class="acpa-gear-builder-item bg-cp-bg border border-cp-cyan/50 p-3 space-y-2">
                <div class="flex items-center justify-between gap-2">
                  <input type="text" data-field="name" value="${escapeHtmlAttr(g.name)}" placeholder="Название элемента снаряжения (сенсоры, анти-ослепление, жизнеобеспечение...)" class="flex-1 bg-cp-panel border border-gray-700 px-2.5 py-1.5 text-xs text-white font-bold outline-none">
                  <button type="button" onclick="removeAcpaGearBlock(${idx})" class="px-2 py-1 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white text-[10px] font-bold">✕</button>
                </div>
                <textarea data-field="desc" rows="2" placeholder="Описание и игровой эффект элемента снаряжения..." class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white outline-none">${g.desc || ""}</textarea>
              </div>
            `).join("");
    }

    const wBox = document.getElementById("acpaWeaponsBuilderList");
    if (wBox) {
        wBox.innerHTML = acpaBuilderState.weaponsList.length === 0
            ? `<div class="text-[11px] text-gray-500 italic py-2 px-3 bg-black/30 border border-gray-800">Вооружение не добавлено. Нажмите «+ Добавить вооружение».</div>`
            : acpaBuilderState.weaponsList.map((w, idx) => `
              <div class="acpa-weapon-builder-item bg-cp-bg border border-cp-red/50 p-3 space-y-2.5">
                <div class="flex items-center justify-between gap-2 border-b border-gray-800 pb-1.5">
                  <span class="text-[10px] font-bold uppercase text-cp-red">🔫 Встроенное оружие #${idx + 1}</span>
                  <button type="button" onclick="removeAcpaWeaponBlock(${idx})" class="text-[10px] px-2 py-0.5 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white font-bold uppercase">✕ Удалить</button>
                </div>
                <input type="text" data-field="name" value="${escapeHtmlAttr(w.name)}" placeholder="Название встроенного оружия..." class="w-full bg-cp-panel border border-gray-700 px-2.5 py-1.5 text-xs text-white font-bold outline-none">
                <div class="grid grid-cols-3 sm:grid-cols-9 gap-1.5">
                  <div><label class="block text-[9px] text-gray-400 text-center">Тип</label><input type="text" data-field="type" value="${escapeHtmlAttr(w.type)}" placeholder="ТЯЖ" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-white"></div>
                  <div><label class="block text-[9px] text-gray-400 text-center">СКР</label><input type="text" data-field="skr" value="${escapeHtmlAttr(w.skr)}" placeholder="Нет" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-cyan"></div>
                  <div><label class="block text-[9px] text-gray-400 text-center">ТО</label><input type="text" data-field="to" value="${escapeHtmlAttr(w.to)}" placeholder="+1" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-yellow"></div>
                  <div><label class="block text-[9px] text-gray-400 text-center">Урон</label><input type="text" data-field="damage" value="${escapeHtmlAttr(w.damage)}" placeholder="6d10" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-red font-bold"></div>
                  <div><label class="block text-[9px] text-gray-400 text-center">МАГ</label><input type="text" data-field="mag" value="${escapeHtmlAttr(w.mag)}" placeholder="100" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-white"></div>
                  <div><label class="block text-[9px] text-gray-400 text-center">СКО</label><input type="text" data-field="sko" value="${escapeHtmlAttr(w.sko)}" placeholder="20" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-white"></div>
                  <div><label class="block text-[9px] text-gray-400 text-center">ДИС</label><input type="text" data-field="range" value="${escapeHtmlAttr(w.range)}" placeholder="600м" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-cyan"></div>
                  <div><label class="block text-[9px] text-gray-400 text-center">НАД</label><input type="text" data-field="nad" value="${escapeHtmlAttr(w.nad)}" placeholder="ОН" class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-green"></div>
                  <div><label class="block text-[9px] text-gray-400 text-center">Цена</label><input type="text" data-field="cost" value="${escapeHtmlAttr(w.cost)}" placeholder="Вкл." class="w-full bg-cp-panel border border-gray-700 p-1 text-[11px] text-center text-cp-green"></div>
                </div>
                <textarea data-field="desc" rows="2" placeholder="Описание оружия, боезапас, расположение на корпусе..." class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white outline-none">${w.desc || ""}</textarea>
              </div>
            `).join("");
    }
}

//
//  Comments RENDERHANDLER
//

// =========================================================================
// КОММЕНТАРИИ
// =========================================================================


function scrollToAndHighlightComment(commentId) {
    const el = document.getElementById(`comment-box-${commentId}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.remove("comment-highlight");
    void el.offsetWidth;
    el.classList.add("comment-highlight");
}

function handleCommentKeydown(event, itemId) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        submitNewComment(null, itemId);
    }
}

function renderCommentsSectionHTML(itemId) {
    const list = COMMENTS[itemId] || [];
    const curUser = getCurrentUser();
    const isAdmin = isCurrentUserAdmin();

    const itemsHtml = list.length === 0
        ? `<div class="text-xs text-gray-500 py-4 text-center bg-black/30 border border-gray-800/80">Под этой карточкой пока нет комментариев. Будьте первым!</div>`
        : list.map(c => {
            const author = USERS.find(u => u && u.id === c.userId) || { id: c.userId, displayName: c.fallbackName || "Раннер", role: "USER", avatar: "" };
            const isOwn = Boolean(curUser && curUser.id === c.userId);
            const canDel = isOwn || isAdmin;
            const roleBadge = author.id === "u-smasher"
                ? `<span class="px-1.5 py-0.5 text-[9px] bg-cp-red text-white font-bold uppercase shadow-[0_0_8px_#ff003c]">💀 ARASAKA</span>`
                : author.role === "ROOT"
                    ? `<span class="px-1.5 py-0.5 text-[9px] bg-cp-red text-white font-bold uppercase">ROOT</span>`
                    : author.role === "ADMIN"
                        ? `<span class="px-1.5 py-0.5 text-[9px] bg-cp-cyan text-black font-bold uppercase">ADM</span>`
                        : "";
            const banTag = isUserCurrentlyBanned(author) ? `<span class="px-1.5 py-0.5 text-[9px] bg-cp-red/30 text-cp-red border border-cp-red/50 font-bold uppercase">BANNED</span>` : "";
            const avHtml = author.avatar ? `<img src="${escapeHtmlAttr(author.avatar)}" onclick="openPublicProfileModal('${author.id}')" class="w-8 h-8 object-cover border border-cp-cyan cursor-pointer shrink-0">` : `<div onclick="openPublicProfileModal('${author.id}')" class="w-8 h-8 bg-cp-panel border border-gray-700 hover:border-cp-yellow text-cp-yellow flex items-center justify-center font-display font-bold text-xs cursor-pointer shrink-0">${(author.displayName || "CP").slice(0, 2).toUpperCase()}</div>`;

            let replyBannerHtml = "";
            if (c.replyToName) {
                const origComm = list.find(x => x.id === c.replyToId);
                const quoteText = origComm ? truncateQuote(origComm.text, 100) : (c.replyToSnippet || "Сообщение удалено");
                replyBannerHtml = `
                <div ${c.replyToId ? `onclick="scrollToAndHighlightComment('${c.replyToId}')"` : ""} title="Нажмите, чтобы перейти к оригинальному комментарию"
                  class="flex items-center gap-2 text-[11px] bg-cp-cyan/10 hover:bg-cp-cyan/20 border-l-2 border-cp-cyan px-2.5 py-1 cursor-pointer transition-colors overflow-hidden">
                  <span class="text-cp-cyan font-bold shrink-0">↩ Ответ пользователю ${c.replyToName}:</span>
                  <span class="text-gray-400 italic truncate">«${quoteText}»</span>
                </div>
              `;
            }

            return `
              <div id="comment-box-${c.id}" class="bg-cp-bg border border-gray-800 p-3 space-y-2 transition-all">
                ${replyBannerHtml}
                <div class="flex items-start justify-between gap-2">
                  <div class="flex items-center gap-2.5">
                    ${avHtml}
                    <div>
                      <div class="flex items-center gap-1.5">
                        <button type="button" onclick="openPublicProfileModal('${author.id}')" class="text-xs font-bold text-white hover:text-cp-yellow hover:underline">${author.displayName}</button>
                        ${roleBadge} ${banTag}
                      </div>
                      <div class="text-[10px] text-gray-500">${c.createdAt}${c.edited ? ' (изм.)' : ''}</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-1.5 shrink-0">
                    ${curUser ? `<button type="button" onclick="startReplyToComment('${itemId}', '${c.id}')" class="px-2 py-0.5 bg-gray-800 hover:bg-cp-cyan hover:text-black text-gray-300 text-[10px] font-bold">↩ Ответить</button>` : ""}
                    ${isOwn ? `<button type="button" onclick="startEditComment('${itemId}', '${c.id}')" class="px-2 py-0.5 bg-gray-800 hover:bg-cp-yellow hover:text-black text-gray-300 text-[10px] font-bold">✏️ Изм.</button>` : ""}
                    ${canDel ? `<button type="button" onclick="deleteComment('${itemId}', '${c.id}')" class="px-2 py-0.5 bg-cp-red/15 hover:bg-cp-red text-cp-red hover:text-white text-[10px] font-bold">🗑️</button>` : ""}
                  </div>
                </div>
                ${activeEditCommentId === c.id ? `
                  <div class="space-y-2 pt-1">
                    <textarea id="edit-comm-textarea-${c.id}" rows="2" class="w-full bg-cp-panel border border-cp-yellow p-2 text-xs text-white outline-none">${c.text}</textarea>
                    <div class="flex gap-2">
                      <button type="button" onclick="saveEditedComment('${itemId}', '${c.id}')" class="px-3 py-1 bg-cp-green text-black font-bold text-[11px] uppercase">Сохранить</button>
                      <button type="button" onclick="cancelEditComment('${itemId}')" class="px-3 py-1 bg-gray-800 text-gray-300 text-[11px] uppercase">Отмена</button>
                    </div>
                  </div>
                ` : `<div class="text-xs ${author.id === 'u-smasher' ? 'text-white font-semibold' : 'text-gray-200'} leading-relaxed whitespace-pre-line pl-10">${formatRichTextWithLinks(escapeHtmlAttr(c.text).replace(/\*([^*]+)\*/g, '<em class="text-cp-red font-bold not-italic bg-cp-red/10 px-1 border border-cp-red/30">*$1*</em>'))}</div>`}
              </div>
            `;
        }).join("");

    const replyBanner = (activeReplyToComment && activeReplyToComment.itemId === itemId)
        ? `<div class="flex items-center justify-between gap-2 bg-cp-cyan/15 border border-cp-cyan/50 px-3 py-1.5 text-xs mb-2">
             <div class="flex items-center gap-2 overflow-hidden">
               <span class="text-cp-cyan font-bold shrink-0">↩ Ответ пользователю ${activeReplyToComment.authorName}:</span>
               <span class="text-gray-300 italic truncate">«${activeReplyToComment.snippet}»</span>
             </div>
             <button type="button" onclick="cancelReplyToComment('${itemId}')" class="text-white hover:text-cp-red font-bold shrink-0">✕</button>
           </div>` : "";

    const formHtml = curUser
        ? `<form onsubmit="submitNewComment(event, '${itemId}')" class="mt-3 pt-3 border-t border-gray-800">
             ${replyBanner}
             <textarea id="new-comment-input-${itemId}" onkeydown="handleCommentKeydown(event, '${itemId}')" required rows="2" placeholder="Напишите комментарий (Enter — отправить, Shift+Enter — новая строка)..." class="w-full bg-cp-bg border border-gray-700 focus:border-cp-yellow p-2.5 text-xs text-white outline-none"></textarea>
             <div class="flex items-center justify-between mt-2">
               <span class="text-[10px] text-gray-500"><b>Enter</b> — отправить • <b>Shift + Enter</b> — перенос строки</span>
               <button type="submit" class="px-4 py-1.5 bg-cp-yellow hover:bg-yellow-300 text-black font-bold text-xs uppercase">💬 Отправить</button>
             </div>
           </form>`
        : `<div class="mt-3 pt-3 border-t border-gray-800 flex items-center justify-between bg-black/40 p-3 text-xs">
             <span class="text-gray-400">Оставлять комментарии могут только авторизованные пользователи.</span>
             <button type="button" onclick="switchMainView('profile')" class="px-3 py-1.5 bg-cp-yellow text-black font-bold text-[11px] uppercase shrink-0">🔑 Войти</button>
           </div>`;

    return `<div id="comments-wrapper-${itemId}" class="mt-6 pt-5 border-t-2 border-gray-800">
                <h4 class="font-display text-xs font-bold uppercase text-cp-cyan tracking-wider mb-3">💬 Комментарии (${list.length})</h4>
                <div id="comments-scroll-${itemId}" class="space-y-2.5 max-h-96 overflow-y-auto pr-1">${itemsHtml}</div>
                ${formHtml}
              </div>`;
}

function refreshCurrentCardOrRuleView(options = {}) {
    const targetId = options.itemId || (activeMainView === "rules" ? selectedRuleId : selectedItemId);
    const wrapper = targetId ? document.getElementById(`comments-wrapper-${targetId}`) : null;

    if (wrapper) {
        const cardContainer = activeMainView === "rules" ? document.getElementById("ruleContentArea") : document.getElementById("detailCard");
        const commScrollEl = document.getElementById(`comments-scroll-${targetId}`);
        const savedCardScroll = cardContainer ? cardContainer.scrollTop : 0;
        const savedCommScroll = commScrollEl ? commScrollEl.scrollTop : 0;

        wrapper.outerHTML = renderCommentsSectionHTML(targetId);

        const newCommScrollEl = document.getElementById(`comments-scroll-${targetId}`);
        if (newCommScrollEl) newCommScrollEl.scrollTop = options.scrollToBottom ? newCommScrollEl.scrollHeight : savedCommScroll;
        if (cardContainer) cardContainer.scrollTop = savedCardScroll;
        return;
    }

    if (activeMainView === "rules") renderRulesSidebar();
    else if (activeMainView === "catalog") renderCatalog();
}

function startReplyToComment(itemId, commentId) {
    const orig = (COMMENTS[itemId] || []).find(c => c.id === commentId);
    if (!orig) return;
    const author = USERS.find(u => u && u.id === orig.userId);
    activeReplyToComment = {
        itemId, commentId, targetUserId: orig.userId,
        authorName: author ? author.displayName : (orig.fallbackName || "Раннер"),
        snippet: truncateQuote(orig.text, 100)
    };
    refreshCurrentCardOrRuleView({ itemId });
    setTimeout(() => { const inp = document.getElementById(`new-comment-input-${itemId}`); if (inp) inp.focus(); }, 30);
}
function cancelReplyToComment(itemId) { activeReplyToComment = null; refreshCurrentCardOrRuleView({ itemId }); }
function startEditComment(itemId, commentId) { activeEditCommentId = commentId; refreshCurrentCardOrRuleView({ itemId }); }
function cancelEditComment(itemId) { activeEditCommentId = null; refreshCurrentCardOrRuleView({ itemId }); }

//
//  DISPLAY HANDLER
//

function renderRulesView() {
    const subsections = ["ALL", ...getAllCategoriesForSection("rules")];
    document.getElementById("ruleSubsections").innerHTML = subsections.map(s => `<button type="button" onclick="selectRuleSubsection('${escapeHtmlAttr(s)}')" class="px-2.5 py-1 text-xs font-bold border transition-all ${s === activeRuleSubsection ? 'bg-cp-cyan text-black border-cp-cyan' : 'bg-cp-bg text-gray-300 border-gray-700 hover:border-cp-cyan'}">${s === "ALL" ? "Все подразделы" : s}</button>`).join("");
    renderRulesSidebar();
}
function selectRuleSubsection(sub) { activeRuleSubsection = sub; renderRulesView(); }
function openRuleArticle(id) {
    const isNew = selectedRuleId !== id;
    selectedRuleId = id;
    if (isNew) { const area = document.getElementById("ruleContentArea"); if (area) area.scrollTop = 0; }
    renderRulesSidebar();
}
function openRuleCreatorModal() { if (!isCurrentUserAdmin()) return; editingItemId = null; activeBuilderType = "rules"; switchMainView("admin"); switchAdminSubtab("builder"); setBuilderType("rules"); }

function renderRulesSidebar() {
    const q = (document.getElementById("ruleSearchInput")?.value || "").trim().toLowerCase();
    const filtered = (DB.rules || []).filter(r => (activeRuleSubsection === "ALL" || r.subsection === activeRuleSubsection) && (!q || Object.values(r).some(v => String(v).toLowerCase().includes(q))));
    const listEl = document.getElementById("ruleArticlesList");
    const areaEl = document.getElementById("ruleContentArea");

    if (filtered.length === 0) {
        listEl.innerHTML = `<div class="text-xs text-gray-500 py-4 text-center">Механики не найдены.</div>`;
        areaEl.innerHTML = `<div class="text-xs text-gray-500">Выберите механику...</div>`;
        return;
    }
    if (!selectedRuleId || !filtered.some(r => r.id === selectedRuleId)) selectedRuleId = filtered[0].id;

    const prevListScroll = listEl.scrollTop;
    listEl.innerHTML = filtered.map(r => `
        <div onclick="openRuleArticle('${r.id}')" class="p-3 border cursor-pointer transition-all ${r.id === selectedRuleId ? 'border-cp-yellow bg-cp-card' : 'border-gray-800 bg-cp-bg hover:border-gray-600'}">
          <div class="flex items-center justify-between text-[10px] text-cp-cyan font-bold uppercase">
            <span>${dash(r.subsection)}</span>
            <span>${r.isUser ? '<b class="text-cp-yellow mr-1">HOMEBREW</b>' : ''}${isItemFavorited(r.id) ? '★ ' : ''}[${dash(r.book)}]</span>
          </div>
          <div class="text-xs font-bold text-white mt-1">${dash(r.title)}</div>
          ${r.summary ? `<div class="text-[11px] text-gray-400 mt-0.5 line-clamp-2">${r.summary}</div>` : ""}
        </div>
      `).join("");
    listEl.scrollTop = prevListScroll;

    const rule = filtered.find(r => r.id === selectedRuleId) || filtered[0];
    const isSameRule = areaEl.getAttribute("data-rendered-id") === rule.id;
    const savedRuleScroll = isSameRule ? areaEl.scrollTop : 0;
    areaEl.setAttribute("data-rendered-id", rule.id);

    const addedBadge = rule.isUser ? `<span class="ml-2 text-[10px] bg-cp-yellow/20 text-cp-yellow border border-cp-yellow/40 px-1.5 py-0.5 font-bold">HOMEBREW</span>` : "";
    areaEl.innerHTML = `
        <div class="border-b border-gray-800 pb-4 mb-5 flex items-start justify-between gap-3">
          <div><div class="text-xs font-bold text-cp-cyan uppercase">${dash(rule.subsection)} // Источник: ${dash(rule.book)} ${addedBadge}</div><h2 class="font-display text-2xl font-black text-white mt-1">${dash(rule.title)}</h2></div>
          ${renderCardActionButtons('rules', rule.id)}
        </div>
        ${rule.summary ? `<div class="bg-cp-bg/70 border-l-2 border-cp-yellow p-3.5 text-xs text-gray-300 mb-5"><strong>Краткая суть:</strong> ${rule.summary}</div>` : ""}
        ${rule.content ? `<div class="text-xs leading-relaxed text-gray-200 whitespace-pre-line space-y-2">${rule.content}</div>` : ""}
        ${renderCardGalleryBlockHTML(rule)}
        ${renderCommentsSectionHTML(rule.id)}
      `;
    if (isSameRule) areaEl.scrollTop = savedRuleScroll;
}

function logoutCurrentUser() {
    currentUserId = null;
    persistSessionOnly();
    switchMainView("profile");
}

function renderProfileView() {
    populateFavCorpSelects();
    const u = getCurrentUser();
    document.getElementById("authGuestContainer").classList.toggle("hidden", Boolean(u));
    document.getElementById("authUserDashboard").classList.toggle("hidden", !u);
    if (!u) return;

    const userCorp = getUserFavCorp(u);

    document.getElementById("profileAvatarBox").innerHTML = u.avatar ? `<img src="${escapeHtmlAttr(u.avatar)}" class="w-full h-full object-cover">` : (u.displayName || "CP").slice(0, 2).toUpperCase();
    const badge = document.getElementById("profileRoleBadge");
    const accessText = document.getElementById("profileAccessText");
    badge.className = u.role === "ROOT" ? "inline-block text-[10px] px-2 py-0.5 font-bold uppercase mb-1 bg-cp-red text-white" : u.role === "ADMIN" ? "inline-block text-[10px] px-2 py-0.5 font-bold uppercase mb-1 bg-cp-cyan text-black" : "inline-block text-[10px] px-2 py-0.5 font-bold uppercase mb-1 bg-gray-800 text-cp-yellow border border-cp-yellow/40";
    badge.textContent = u.role === "ROOT" ? "👑 Главный Админ (ROOT)" : u.role === "ADMIN" ? "🛡️ Администратор" : "👤 Профиль Игрока";
    accessText.textContent = u.role === "ROOT" ? "Без ограничений (ROOT)" : u.role === "ADMIN" ? "JPG/PNG/GIF до 50мб" : "JPG/PNG до 10мб";

    document.getElementById("profileDisplayName").textContent = u.displayName;
    document.getElementById("profileFavRole").textContent = u.favRole || "Соло";
    const corpTextEl = document.getElementById("profileFavCorpText");
    if (corpTextEl) corpTextEl.textContent = userCorp;

    const cleanFavs = Array.isArray(u.favorites) ? u.favorites.filter(id => typeof id === "string" && !id.startsWith("__CORP__:")) : [];
    document.getElementById("profileFavCount").textContent = cleanFavs.length;

    document.getElementById("editProfDisplayName").value = u.displayName || "";
    document.getElementById("editProfFavRole").value = u.favRole || "Соло";
    const editCorpSel = document.getElementById("editProfFavCorp");
    if (editCorpSel) {
        if (![...editCorpSel.options].some(o => o.value === userCorp)) {
            editCorpSel.innerHTML += `<option value="${escapeHtmlAttr(userCorp)}">${userCorp}</option>`;
        }
        editCorpSel.value = userCorp;
    }
    document.getElementById("editProfPassword").value = "";
    document.getElementById("editProfAvatarUrl").value = (u.avatar && !u.avatar.startsWith("data:")) ? u.avatar : "";
    document.getElementById("editProfBio").value = u.bio || "";
    document.getElementById("userPersonalNotes").value = u.notes || "";
    renderUserFavoritesGrid();
}

function autoSaveUserNotes() {
    const u = getCurrentUser();
    if (!u) return;
    u.notes = document.getElementById("userPersonalNotes").value;
    persistUsers();
    document.getElementById("notesSavedIndicator").textContent = "💾 Сохранено в профиле";
}

function isItemFavorited(itemId) { const u = getCurrentUser(); return Boolean(u && Array.isArray(u.favorites) && u.favorites.includes(itemId)); }
function toggleFavoriteItem(itemId) {
    const u = getCurrentUser();
    if (!u) { if (confirm("Войдите в профиль, чтобы сохранять закладки. Перейти ко входу?")) switchMainView("profile"); return; }
    if (!Array.isArray(u.favorites)) u.favorites = [];
    u.favorites = u.favorites.includes(itemId) ? u.favorites.filter(id => id !== itemId) : [...u.favorites, itemId];
    persistUsers();
    if (activeMainView === "catalog") renderCatalog();
    else if (activeMainView === "rules") renderRulesSidebar();
    else if (activeMainView === "profile") renderProfileView();
}
function clearAllUserFavorites() { const u = getCurrentUser(); if (!u || !confirm("Очистить закладки?")) return; u.favorites = []; persistUsers(); renderProfileView(); }

function findItemAcrossAllSections(itemId) {
    if (typeof itemId === "string" && itemId.startsWith("__CORP__:")) return null;
    for (const secKey of Object.keys(SECTION_LABELS)) {
        const found = (DB[secKey] || []).find(i => i && i.id === itemId);
        if (found) return { section: secKey, item: found };
    }
    return null;
}

function openFavoriteCardFromProfile(secKey, itemId) {
    if (secKey === "rules") { selectedRuleId = itemId; switchMainView("rules"); }
    else { selectedItemId = itemId; switchMainView("catalog", secKey); }
}

function renderUserFavoritesGrid() {
    const u = getCurrentUser();
    const box = document.getElementById("profileFavoritesList");
    const resolved = (u && Array.isArray(u.favorites)) ? u.favorites.map(id => findItemAcrossAllSections(id)).filter(Boolean) : [];
    if (resolved.length === 0) {
        box.innerHTML = `<div class="col-span-2 text-xs text-gray-500 py-8 text-center bg-cp-bg border border-gray-800">У вас пока нет закладок. Нажмите «☆ В избранное» на любой карточке!</div>`;
        return;
    }
    box.innerHTML = resolved.map(({ section, item }) => `
        <div class="bg-cp-bg border border-gray-800 hover:border-cp-yellow p-3 flex items-center justify-between gap-2">
          <div onclick="openFavoriteCardFromProfile('${section}', '${item.id}')" class="cursor-pointer flex-1">
            <div class="text-[10px] text-cp-cyan font-bold uppercase">${SECTION_LABELS[section] || section} • ${dash(item.category || item.subsection)}</div>
            <div class="text-xs font-bold text-white mt-0.5">${dash(item.name || item.title)}</div>
          </div>
          <button type="button" onclick="toggleFavoriteItem('${item.id}')" class="text-cp-yellow hover:text-cp-red text-sm px-2">★</button>
        </div>
      `).join("");
}

function renderCategoryManager() {
    document.getElementById("catManagerSectionList").innerHTML = Object.keys(SECTION_LABELS).map(key => {
        const active = key === activeCatManagerSection;
        return `<button type="button" onclick="selectCatManagerSection('${key}')" class="w-full text-left px-3.5 py-2.5 text-xs font-bold border flex items-center justify-between ${active ? 'bg-cp-yellow text-black border-cp-yellow' : 'bg-cp-panel text-gray-300 border-gray-800 hover:border-cp-cyan'}"><span>${SECTION_LABELS[key]}</span><span class="text-[11px] px-1.5 py-0.5 ${active ? 'bg-black/20 text-black' : 'bg-black/50 text-cp-cyan'}">${getAllCategoriesForSection(key).length}</span></button>`;
    }).join("");
    document.getElementById("catManagerActiveTitle").textContent = `Категории раздела: ${SECTION_LABELS[activeCatManagerSection]}`;
    const prop = activeCatManagerSection === "rules" ? "subsection" : "category";
    const allCats = getAllCategoriesForSection(activeCatManagerSection);
    document.getElementById("catManagerItemsList").innerHTML = allCats.map((catName, idx) => {
        const count = (DB[activeCatManagerSection] || []).filter(i => i[prop] === catName).length;
        const safeCat = catName.replace(/'/g, "\\'");
        return `<div class="bg-cp-panel border border-gray-800 p-3 flex items-center justify-between gap-3"><div class="flex items-center gap-3 flex-1"><span class="text-xs font-bold text-cp-cyan w-6">${idx + 1}.</span><input type="text" id="cat-input-${idx}" value="${escapeHtmlAttr(catName)}" class="flex-1 bg-cp-bg border border-gray-700 px-3 py-1.5 text-xs text-white"><span class="text-xs text-gray-400">Записей: <b class="text-white">${count}</b></span></div><div class="flex gap-2"><button type="button" onclick="renameCategoryInSection('${safeCat}', 'cat-input-${idx}')" class="px-3 py-1.5 bg-cp-cyan/20 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/50 text-xs font-bold">💾 Переименовать</button><button type="button" onclick="deleteCategoryInSection('${safeCat}')" class="px-3 py-1.5 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white border border-cp-red/50 text-xs font-bold">🗑️</button></div></div>`;
    }).join("");
}
function selectCatManagerSection(k) { activeCatManagerSection = k; renderCategoryManager(); }
function addNewCategoryToSection() {
    const inp = document.getElementById("newCategoryInput");
    const val = inp.value.trim();
    if (!val) return;
    if (!CATEGORIES[activeCatManagerSection].includes(val)) { CATEGORIES[activeCatManagerSection].push(val); persistDatabase(true); }
    inp.value = ""; renderCategoryManager();
}
function renameCategoryInSection(oldName, inputId) {
    const inp = document.getElementById(inputId);
    if (!inp) return;
    const newName = inp.value.trim() || "—";
    const prop = activeCatManagerSection === "rules" ? "subsection" : "category";
    CATEGORIES[activeCatManagerSection] = getAllCategoriesForSection(activeCatManagerSection).map(c => c === oldName ? newName : c);
    (DB[activeCatManagerSection] || []).forEach(it => { if (it[prop] === oldName) it[prop] = newName; });
    persistDatabase(true); renderCategoryManager();
}
function deleteCategoryInSection(catName) {
    if (!confirm(`Удалить категорию «${catName}»?`)) return;
    const prop = activeCatManagerSection === "rules" ? "subsection" : "category";
    CATEGORIES[activeCatManagerSection] = getAllCategoriesForSection(activeCatManagerSection).filter(c => c !== catName);
    (DB[activeCatManagerSection] || []).forEach(it => { if (it[prop] === catName) it[prop] = "—"; });
    persistDatabase(true); renderCategoryManager();
}

function renderBookSourcesManager() {
    ensureMetaArraysInCategories();
    const allBooks = getAllBookSources();
    const listEl = document.getElementById("bookSourcesManagerList");
    listEl.innerHTML = allBooks.map((bookName, idx) => {
        let count = 0;
        Object.keys(SECTION_LABELS).forEach(sec => { count += (DB[sec] || []).filter(i => i.book === bookName).length; });
        const safeBook = bookName.replace(/'/g, "\\'");
        return `<div class="bg-cp-bg border border-gray-800 p-3 flex items-center justify-between gap-3"><div class="flex items-center gap-3 flex-1"><span class="text-xs font-bold text-cp-yellow w-6">${idx + 1}.</span><input type="text" id="book-src-input-${idx}" value="${escapeHtmlAttr(bookName)}" class="flex-1 bg-cp-panel border border-gray-700 px-3 py-1.5 text-xs text-white"><span class="text-xs text-gray-400">Карточек: <b class="text-white">${count}</b></span></div><div class="flex gap-2"><button type="button" onclick="renameBookSource('${safeBook}', 'book-src-input-${idx}')" class="px-3 py-1.5 bg-cp-cyan/20 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/50 text-xs font-bold">💾 Переименовать</button><button type="button" onclick="deleteBookSource('${safeBook}')" class="px-3 py-1.5 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white border border-cp-red/50 text-xs font-bold">🗑️</button></div></div>`;
    }).join("");
}
function addNewBookSource() {
    ensureMetaArraysInCategories();
    const inp = document.getElementById("newBookSourceInput");
    const val = inp.value.trim();
    if (!val) return;
    if (!CATEGORIES._books.includes(val)) { CATEGORIES._books.push(val); persistDatabase(true); }
    inp.value = ""; renderBookSourcesManager();
}
function renameBookSource(oldName, inputId) {
    ensureMetaArraysInCategories();
    const inp = document.getElementById(inputId);
    if (!inp) return;
    const newName = inp.value.trim() || "—";
    CATEGORIES._books = getAllBookSources().map(b => b === oldName ? newName : b);
    Object.keys(SECTION_LABELS).forEach(sec => { (DB[sec] || []).forEach(it => { if (it.book === oldName) it.book = newName; }); });
    persistDatabase(true); renderBookSourcesManager();
}
function deleteBookSource(bookName) {
    if (!confirm(`Удалить источник «${bookName}»?`)) return;
    ensureMetaArraysInCategories();
    CATEGORIES._books = getAllBookSources().filter(b => b !== bookName);
    Object.keys(SECTION_LABELS).forEach(sec => { (DB[sec] || []).forEach(it => { if (it.book === bookName) it.book = "—"; }); });
    persistDatabase(true); renderBookSourcesManager();
}

function toggleAdminQuickUserModal() { document.getElementById("adminQuickUserForm").classList.toggle("hidden"); }

function renderAdminUsersManager() {
    const rootMode = isCurrentUserRoot();
    document.getElementById("adminUsersTableContainer").innerHTML = USERS.map(u => {
        const isRoot = u.role === "ROOT";
        const isAdm = u.role === "ADMIN";
        const banned = isUserCurrentlyBanned(u);
        const canBanThisUser = canCurrentAdminBanTarget(u);
        const badge = isRoot ? `<span class="px-2 py-0.5 bg-cp-red text-white text-[10px] font-bold uppercase">👑 ROOT</span>` : isAdm ? `<span class="px-2 py-0.5 bg-cp-cyan text-black text-[10px] font-bold uppercase">🛡️ ADMIN</span>` : `<span class="px-2 py-0.5 bg-gray-800 text-gray-300 border border-gray-700 text-[10px] font-bold uppercase">👤 USER</span>`;
        const banBadge = banned ? `<span class="px-2 py-0.5 bg-cp-red/20 border border-cp-red text-cp-red text-[10px] font-bold uppercase">🚫 ЗАБАНЕН</span>` : "";
        const av = u.avatar ? `<img onclick="openPublicProfileModal('${u.id}')" src="${escapeHtmlAttr(u.avatar)}" class="w-12 h-12 object-cover border-2 ${isRoot ? 'border-cp-red' : 'border-cp-cyan'} cursor-pointer shrink-0">` : `<div onclick="openPublicProfileModal('${u.id}')" class="w-12 h-12 bg-cp-panel border-2 border-gray-700 text-cp-yellow flex items-center justify-center font-display font-black text-base cursor-pointer shrink-0">${(u.displayName || "CP").slice(0, 2).toUpperCase()}</div>`;
        return `
          <div class="bg-cp-bg border ${banned ? 'border-cp-red/70' : 'border-gray-800'} p-4 flex items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              ${av}
              <div>
                <div class="flex items-center gap-2.5 flex-wrap">
                  <button type="button" onclick="openPublicProfileModal('${u.id}')" class="font-bold text-sm text-white hover:text-cp-yellow hover:underline">${u.displayName}</button>
                  ${badge} ${banBadge}
                </div>
                <div class="text-xs text-gray-500 mt-1">
                  Роль: <b class="text-gray-300">${u.favRole || '—'}</b> • Корпорация: <b class="text-cp-cyan">${getUserFavCorp(u)}</b> • Комментариев: <b class="text-cp-green">${countUserTotalComments(u.id)}</b>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 flex-wrap justify-end">
              <button type="button" onclick="openPublicProfileModal('${u.id}')" class="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 text-xs font-bold">👁️ Профиль</button>
              ${canBanThisUser ? (banned ? `<button type="button" onclick="unbanUserAccount('${u.id}')" class="px-3 py-1.5 bg-cp-green text-black font-bold text-xs uppercase">🔓 Разбанить</button>` : `<button type="button" onclick="openBanModal('${u.id}')" class="px-3 py-1.5 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white border border-cp-red/60 text-xs font-bold uppercase">🚫 Забанить</button>`) : ""}
              ${!isRoot && rootMode ? `<button type="button" onclick="toggleUserAdminPrivilege('${u.id}')" class="px-3.5 py-1.5 text-xs font-bold uppercase border ${isAdm ? 'bg-orange-500/20 border-orange-500 text-orange-300' : 'bg-cp-cyan/20 border-cp-cyan text-cp-cyan'}">${isAdm ? '⬇️ Снять Админа' : '⬆️ Назначить Админом'}</button><button type="button" onclick="deleteUserAccount('${u.id}')" class="px-3 py-1.5 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white border border-cp-red/50 text-xs font-bold">🗑️</button>` : ""}
            </div>
          </div>
        `;
    }).join("");
}

async function switchAdminLogsSubtab(sub) {
    activeAdminLogsSubtab = sub;
    // Если открыли лог комментариев и подключено облако — подтягиваем последние 150 комментов со всего сайта
    if (sub === "comments" && typeof sbClient !== "undefined" && sbClient) {
        try {
            const { data } = await sbClient
                .from("cp2020_comments")
                .select("*")
                .order("id", { ascending: false })
                .limit(150);
            if (Array.isArray(data)) {
                COMMENTS = {};
                data.reverse().forEach(r => {
                    const c = typeof mapRowToComment === "function" ? mapRowToComment(r) : r;
                    if (!Array.isArray(COMMENTS[c.itemId])) COMMENTS[c.itemId] = [];
                    COMMENTS[c.itemId].push(c);
                });
            }
        } catch (e) { }
    }
    renderAdminLogsView();
}

function confirmBanUserSubmit(e) {
    e.preventDefault();
    const targetId = document.getElementById("banModalTargetId").value;
    const target = USERS.find(u => u && u.id === targetId);
    const curAdmin = getCurrentUser();
    if (!target || !curAdmin || !canCurrentAdminBanTarget(target)) return;

    const durVal = document.getElementById("banDurationSelect").value;
    const reason = document.getElementById("banReasonInput").value.trim() || "Нарушение правил";

    let untilValue = "PERM";
    let durationLabel = "Перманентно (Навсегда)";

    if (durVal !== "PERM") {
        const mins = durVal === "CUSTOM"
            ? Math.max(1, parseInt(document.getElementById("banCustomMinutesInput").value, 10) || 10)
            : parseInt(durVal, 10);
        untilValue = Date.now() + mins * 60 * 1000;
        const selEl = document.getElementById("banDurationSelect");
        durationLabel = durVal === "CUSTOM" ? `${mins} мин.` : selEl.options[selEl.selectedIndex].text;
    }

    target.banInfo = {
        reason,
        until: untilValue,
        durationLabel,
        bannedAt: typeof getMoscowTimeFormatted === "function" ? getMoscowTimeFormatted(false) : new Date().toISOString().slice(0, 16).replace("T", " "),
        bannedBy: curAdmin.displayName
    };

    closeBanModal();
    persistUsers();
    if (typeof saveSingleUserToCloud === "function") saveSingleUserToCloud(target);

    if (currentlyViewedPublicUserId === target.id && !document.getElementById("publicProfileModal").classList.contains("hidden")) {
        openPublicProfileModal(target.id);
    }
    if (activeMainView === "admin") {
        if (activeAdminSubtab === "users") renderAdminUsersManager();
        else if (activeAdminSubtab === "logs") renderAdminLogsView();
    }
}

function unbanUserAccount(targetUserId) {
    const target = USERS.find(u => u && u.id === targetUserId);
    if (!target || !canCurrentAdminBanTarget(target)) return;
    delete target.banInfo;
    persistUsers();
    if (typeof saveSingleUserToCloud === "function") saveSingleUserToCloud(target);

    if (currentlyViewedPublicUserId === target.id && !document.getElementById("publicProfileModal").classList.contains("hidden")) {
        openPublicProfileModal(target.id);
    }
    if (activeMainView === "admin") {
        if (activeAdminSubtab === "users") renderAdminUsersManager();
        else if (activeAdminSubtab === "logs") renderAdminLogsView();
    }
}

function renderAdminLogsView() {
    ensureMetaArraysInCategories();
    const bansBtn = document.getElementById("logsTabBansBtn");
    const commsBtn = document.getElementById("logsTabCommentsBtn");
    const changesBtn = document.getElementById("logsTabChangesBtn");

    const bansBox = document.getElementById("adminLogsBansBox");
    const commsBox = document.getElementById("adminLogsCommentsBox");
    const changesBox = document.getElementById("adminLogsChangesBox");

    bansBtn.className = activeAdminLogsSubtab === "bans"
        ? "px-4 py-2 text-xs font-bold uppercase border transition-all bg-cp-red text-white border-cp-red"
        : "px-4 py-2 text-xs font-bold uppercase border border-gray-700 bg-cp-bg text-gray-300 hover:border-cp-red";
    commsBtn.className = activeAdminLogsSubtab === "comments"
        ? "px-4 py-2 text-xs font-bold uppercase border transition-all bg-cp-yellow text-black border-cp-yellow"
        : "px-4 py-2 text-xs font-bold uppercase border border-gray-700 bg-cp-bg text-gray-300 hover:border-cp-yellow";
    changesBtn.className = activeAdminLogsSubtab === "changes"
        ? "px-4 py-2 text-xs font-bold uppercase border transition-all bg-cp-cyan text-black border-cp-cyan"
        : "px-4 py-2 text-xs font-bold uppercase border border-gray-700 bg-cp-bg text-gray-300 hover:border-cp-cyan";

    bansBox.classList.toggle("hidden", activeAdminLogsSubtab !== "bans");
    commsBox.classList.toggle("hidden", activeAdminLogsSubtab !== "comments");
    changesBox.classList.toggle("hidden", activeAdminLogsSubtab !== "changes");

    // 1. Активные баны
    const bannedUsers = USERS.filter(u => isUserCurrentlyBanned(u));
    document.getElementById("cnt-logs-bans").textContent = bannedUsers.length;

    if (bannedUsers.length === 0) {
        bansBox.innerHTML = `<div class="bg-cp-bg border border-gray-800 p-8 text-center text-xs text-gray-500">Активных банов сейчас нет. Все эджраннеры соблюдают порядок!</div>`;
    } else {
        bansBox.innerHTML = bannedUsers.map(u => {
            const b = u.banInfo;
            const canUnban = canCurrentAdminBanTarget(u);
            const av = u.avatar
                ? `<img onclick="openPublicProfileModal('${u.id}')" src="${escapeHtmlAttr(u.avatar)}" class="w-11 h-11 object-cover border border-cp-red cursor-pointer shrink-0">`
                : `<div onclick="openPublicProfileModal('${u.id}')" class="w-11 h-11 bg-cp-panel border border-cp-red text-cp-red flex items-center justify-center font-display font-bold text-sm cursor-pointer shrink-0">${(u.displayName || "CP").slice(0, 2).toUpperCase()}</div>`;
            return `
            <div class="bg-cp-bg border border-cp-red/60 p-4 flex items-center justify-between gap-4">
              <div class="flex items-start gap-3.5">
                ${av}
                <div class="text-xs space-y-1">
                  <div class="flex items-center gap-2">
                    <button type="button" onclick="openPublicProfileModal('${u.id}')" class="font-bold text-sm text-white hover:text-cp-yellow hover:underline">${u.displayName}</button>
                    <span class="px-2 py-0.5 bg-cp-red text-white text-[10px] font-bold uppercase">🚫 ЗАБАНЕН</span>
                    <span class="text-gray-500 text-[11px]">Модератор: <b class="text-gray-300">${b.bannedBy || 'Админ'}</b> (${b.bannedAt || '—'})</span>
                  </div>
                  <div class="text-gray-200"><b>Причина бана:</b> <span class="text-cp-yellow">${b.reason}</span></div>
                  <div class="text-gray-400"><b>Оставшееся время:</b> <span class="text-cp-cyan font-bold">${formatBanRemainingTime(b)}</span></div>
                </div>
              </div>
              <div class="shrink-0">
                ${canUnban ? `<button type="button" onclick="unbanUserAccount('${u.id}')" class="px-4 py-2 bg-cp-green hover:bg-green-400 text-black font-bold text-xs uppercase transition-colors">🔓 Разбанить</button>` : `<span class="text-[11px] text-gray-500">Забанен Главным Админом</span>`}
              </div>
            </div>
          `;
        }).join("");
    }

    // 2. Все комментарии
    const allComments = [];
    Object.keys(COMMENTS).forEach(itemId => {
        const arr = COMMENTS[itemId];
        if (Array.isArray(arr)) {
            arr.forEach(c => allComments.push({ itemId, comment: c }));
        }
    });
    allComments.sort((a, b) => (b.comment.id || "").localeCompare(a.comment.id || ""));
    document.getElementById("cnt-logs-comments").textContent = allComments.length;

    if (allComments.length === 0) {
        commsBox.innerHTML = `<div class="bg-cp-bg border border-gray-800 p-8 text-center text-xs text-gray-500">На сайте пока не оставлено ни одного комментария.</div>`;
    } else {
        commsBox.innerHTML = allComments.map(({ itemId, comment }) => {
            const author = USERS.find(u => u && u.id === comment.userId) || { id: comment.userId, displayName: comment.fallbackName || "Раннер", role: "USER", avatar: "" };
            const foundCard = findItemAcrossAllSections(itemId);
            const cardTitle = foundCard ? (foundCard.item.name || foundCard.item.title) : itemId;
            const secKey = foundCard ? foundCard.section : "weapons";
            const secLabel = SECTION_LABELS[secKey] || secKey;

            return `
            <div class="bg-cp-bg border border-gray-800 hover:border-gray-600 p-3.5 flex items-start justify-between gap-4 transition-colors">
              <div class="space-y-1.5 flex-1">
                <div class="flex items-center gap-2 flex-wrap text-xs">
                  <button type="button" onclick="openPublicProfileModal('${author.id}')" class="font-bold text-white hover:text-cp-yellow hover:underline">${author.displayName}</button>
                  <span class="text-gray-500">• ${comment.createdAt}</span>
                  <span class="text-gray-600">→</span>
                  <button type="button" onclick="jumpToCommentFromAdminLog('${secKey}', '${itemId}', '${comment.id}')" class="text-cp-cyan hover:text-cp-yellow font-bold hover:underline">
                    [${secLabel}: ${cardTitle}]
                  </button>
                </div>
                <div onclick="jumpToCommentFromAdminLog('${secKey}', '${itemId}', '${comment.id}')" class="text-xs text-gray-200 bg-black/40 border-l-2 border-cp-cyan p-2.5 cursor-pointer hover:bg-cp-cyan/5 whitespace-pre-line">
                  ${comment.text}
                </div>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <button type="button" onclick="jumpToCommentFromAdminLog('${secKey}', '${itemId}', '${comment.id}')" class="px-3 py-1.5 bg-cp-cyan/15 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/40 text-xs font-bold transition-colors">
                  ↗ Перейти
                </button>
                <button type="button" onclick="deleteComment('${itemId}', '${comment.id}')" class="px-3 py-1.5 bg-cp-red/15 hover:bg-cp-red text-cp-red hover:text-white border border-cp-red/40 text-xs font-bold transition-colors">
                  🗑️ Удалить
                </button>
              </div>
            </div>
          `;
        }).join("");
    }

    // 3. История изменений карточек (создание / редактирование / удаление)
    const changeLogs = CATEGORIES._changeLogs || [];
    document.getElementById("cnt-logs-changes").textContent = changeLogs.length;

    if (changeLogs.length === 0) {
        changesBox.innerHTML = `<div class="bg-cp-bg border border-gray-800 p-8 text-center text-xs text-gray-500">Записей о создании или редактировании карточек пока нет.</div>`;
    } else {
        changesBox.innerHTML = changeLogs.map(log => {
            const actionBadge = log.action === "created"
                ? `<span class="px-2 py-0.5 bg-cp-green/20 border border-cp-green text-cp-green text-[10px] font-bold uppercase">➕ СОЗДАНА</span>`
                : log.action === "deleted"
                    ? `<span class="px-2 py-0.5 bg-cp-red/20 border border-cp-red text-cp-red text-[10px] font-bold uppercase">🗑️ УДАЛЕНА</span>`
                    : `<span class="px-2 py-0.5 bg-cp-cyan/20 border border-cp-cyan text-cp-cyan text-[10px] font-bold uppercase">✏️ ИЗМЕНЕНА</span>`;

            const secLabel = SECTION_LABELS[log.sectionKey] || log.sectionKey;
            const stillExists = Boolean(findItemAcrossAllSections(log.itemId));

            return `
            <div ${stillExists ? `onclick="jumpToCardFromChangeLog('${log.sectionKey}', '${log.itemId}')"` : ""} class="bg-cp-bg border border-gray-800 ${stillExists ? 'hover:border-cp-yellow cursor-pointer' : 'opacity-70'} p-3.5 flex items-center justify-between gap-4 transition-colors">
              <div class="space-y-1">
                <div class="flex items-center gap-2.5 flex-wrap text-xs">
                  ${actionBadge}
                  <span class="font-bold text-sm text-white">${dash(log.itemName)}</span>
                  <span class="text-cp-cyan text-[11px] font-semibold">[${secLabel} • ${dash(log.itemCategory)}]</span>
                  <span class="text-gray-500 text-[11px]">Источник: ${dash(log.itemBook)}</span>
                </div>
                <div class="text-[11px] text-gray-400">
                  Выполнил: <b class="text-cp-yellow">${dash(log.userName)}</b> • Время: <span class="text-gray-300">${dash(log.createdAt)}</span>
                </div>
              </div>
              <div class="shrink-0">
                ${stillExists
                    ? `<button type="button" onclick="event.stopPropagation(); jumpToCardFromChangeLog('${log.sectionKey}', '${log.itemId}')" class="px-3.5 py-1.5 bg-cp-cyan/15 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/40 text-xs font-bold">↗ К карточке</button>`
                    : `<span class="text-[11px] text-gray-500">Карточка удалена</span>`}
              </div>
            </div>
          `;
        }).join("");
    }
}

function jumpToCommentFromAdminLog(sectionKey, itemId, commentId) {
    if (sectionKey === "rules") {
        selectedRuleId = itemId;
        switchMainView("rules");
    } else {
        selectedItemId = itemId;
        switchMainView("catalog", sectionKey);
    }
    setTimeout(() => scrollToAndHighlightComment(commentId), 120);
}

function jumpToCardFromChangeLog(sectionKey, itemId) {
    if (sectionKey === "rules") {
        selectedRuleId = itemId;
        switchMainView("rules");
    } else {
        selectedItemId = itemId;
        switchMainView("catalog", sectionKey);
    }
}

function renderAdminBackupStats() {
    const totalItems = Object.keys(SECTION_LABELS).reduce((acc, k) => acc + (DB[k]?.length || 0), 0);
    const userItems = Object.keys(SECTION_LABELS).reduce((acc, k) => acc + (DB[k]?.filter(i => i && i.isUser).length || 0), 0);
    const totalCats = Object.keys(SECTION_LABELS).reduce((acc, k) => acc + getAllCategoriesForSection(k).length, 0);
    document.getElementById("adminStatsGrid").innerHTML = `
        <div class="bg-cp-bg border border-gray-800 p-4"><div class="text-xs text-gray-400">Всего карточек</div><div class="text-2xl font-display font-black text-cp-yellow mt-1">${totalItems}</div></div>
        <div class="bg-cp-bg border border-gray-800 p-4"><div class="text-xs text-gray-400">С плашкой «Homebrew»</div><div class="text-2xl font-display font-black text-cp-cyan mt-1">${userItems}</div></div>
        <div class="bg-cp-bg border border-gray-800 p-4"><div class="text-xs text-gray-400">Всего категорий</div><div class="text-2xl font-display font-black text-cp-green mt-1">${totalCats}</div></div>
        <div class="bg-cp-bg border border-gray-800 p-4"><div class="text-xs text-gray-400">Пользователей</div><div class="text-2xl font-display font-black text-purple-400 mt-1">${USERS.length}</div></div>
      `;
    const isRoot = isCurrentUserRoot();
    document.getElementById("rootOnlyBackupControls").classList.toggle("hidden", !isRoot);
    document.getElementById("rootOnlyBackupControls").classList.toggle("flex", isRoot);
    document.getElementById("nonRootBackupNotice").classList.toggle("hidden", isRoot);
}

function exportUserDatabase() {
    if (!isCurrentUserRoot()) return;
    const blob = new Blob([JSON.stringify({ db: DB, categories: CATEGORIES, users: USERS, comments: COMMENTS, notifications: NOTIFICATIONS }, null, 2)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "database.json"; a.click();
}

function exportUserDatabaseAsJS() {
    if (!isCurrentUserRoot()) return;
    const jsContent = "window.CP2020_EXTERNAL_DATA = " + JSON.stringify({ categories: CATEGORIES, db: DB }, null, 2) + ";";
    const blob = new Blob([jsContent], { type: "application/javascript" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "database.js"; a.click();
}

function importDatabaseFromFile(ev) {
    if (!isCurrentUserRoot()) return;
    const file = ev.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        try {
            const parsed = JSON.parse(e.target.result);
            if (parsed.db && parsed.categories) {
                DB = parsed.db; CATEGORIES = parsed.categories;
                if (Array.isArray(parsed.users)) USERS = parsed.users;
                if (parsed.comments) COMMENTS = parsed.comments;
                if (Array.isArray(parsed.notifications)) NOTIFICATIONS = parsed.notifications;
            } else DB = parsed;
            ensureMetaArraysInCategories();
            sanitizeUsersAndEnforceRoot();
            persistDatabase(true); persistUsers(); persistComments(); persistNotifications(); updateCounts(); renderAdminBackupStats();
            alert("База данных успешно загружена!");
        } catch (err) { alert("Ошибка чтения JSON-файла!"); }
    };
    reader.readAsText(file);
}

function clearUserAdditions() {
    if (!isCurrentUserRoot()) return;
    if (!confirm("Сбросить кеш карточек браузера и перезагрузить чистую базу из внешнего файла database.js?")) return;
    localStorage.removeItem(STORAGE_DB_KEY);
    localStorage.removeItem(STORAGE_CAT_KEY);
    location.reload();
}

//
//FILTER
//

// =========================================================================
// НАСТРОЙКА ФИЛЬТРОВ КАТАЛОГА (ВКЛЮЧАЯ КОРПОРАЦИИ И ПАМЯТКУ БОЕПРИПАСОВ)
// =========================================================================


function populateBookFilterDropdown() {
    const bookSelect = document.getElementById("bookFilter");
    if (!bookSelect) return;
    const prevVal = bookSelect.value || "ALL";
    const books = getAllBookSources();
    bookSelect.innerHTML = `
        <option value="ALL">Все книги</option>
        <option value="FAV">⭐ Избранное</option>
        <option value="USER">🛠️ Homebrew</option>
        ${books.map(b => `<option value="${escapeHtmlAttr(b)}">${b}</option>`).join("")}
      `;
    if ([...bookSelect.options].some(o => o.value === prevVal)) bookSelect.value = prevVal;
}

function setupCatalogFilters() {
    const subSelect = document.getElementById("subFilter");
    const extraSelect = document.getElementById("extraFilter");
    const relBox = document.getElementById("reliabilityFilterBox");
    const availBox = document.getElementById("availabilityFilterBox");
    const subColBox = document.getElementById("subColBox");
    const extraColBox = document.getElementById("extraColBox");
    const subLabel = document.getElementById("subFilterLabel");
    const extraLabel = document.getElementById("extraFilterLabel");
    const legend = document.getElementById("abbrevLegend");
    const categories = getAllCategoriesForSection(activeCatalogTab);

    const prevSubVal = subSelect.value || "ALL";
    const prevExtraVal = extraSelect.value || "ALL";

    populateBookFilterDropdown();

    subLabel.textContent = activeCatalogTab === "vehicles" ? "Тип транспорта" : activeCatalogTab === "acpa" ? "Тип ACPA" : activeCatalogTab === "characters" ? "Роль персонажа" : activeCatalogTab === "corporations" ? "Сектор корпорации" : "Категория / Раздел";
    subSelect.innerHTML = `<option value="ALL">Все категории</option>` + categories.map(c => `<option value="${escapeHtmlAttr(c)}">${c}</option>`).join("");
    if (categories.includes(prevSubVal)) subSelect.value = prevSubVal;

    const isWeapons = activeCatalogTab === "weapons";
    relBox.classList.toggle("hidden", !isWeapons);
    availBox.classList.toggle("hidden", !isWeapons);

    subColBox.className = isWeapons ? "col-span-2" : "col-span-3";
    extraColBox.className = isWeapons ? "col-span-2" : "col-span-4";

    if (activeCatalogTab === "roles") {
        extraLabel.textContent = "Зарплата";
        extraSelect.innerHTML = `<option value="ALL">Без сортировки</option><option value="SORT_SALARY_ASC">🔼 По возрастанию (макс. зарплата)</option><option value="SORT_SALARY_DESC">🔽 По убыванию (макс. зарплата)</option>`;
        legend.innerHTML = `<span><b class="text-cp-cyan">Особая способность</b> = Уникальный навык роли</span><span><b class="text-cp-cyan">40 Очков</b> = Начальный пул на 10 профессиональных навыков</span>`;
    } else if (activeCatalogTab === "weapons") {
        extraLabel.textContent = "Скрываемость";
        extraSelect.innerHTML = `<option value="ALL">Любая СКР</option><option value="Кар">Кар — Карман</option><option value="Кур">Кур — Куртка</option><option value="Плащ">Плащ — Длинный плащ</option><option value="Нет">Нет — Нельзя скрыть</option>`;
        legend.innerHTML = `
          <span><b class="text-cp-cyan">ТО</b> = Точность</span>
          <span><b class="text-cp-cyan">СКР</b> = Кар/Кур/Плащ/Нет</span>
          <span><b class="text-cp-cyan">ДОС</b> = Отл/Обы/Мал/Ред</span>
          <span><b class="text-cp-cyan">МАГ</b> = Магазин</span>
          <span><b class="text-cp-cyan">СКО</b> = Скоростр.</span>
          <span><b class="text-cp-cyan">НАД</b> = НН/ОБ/ОН/ОТ</span>
          <span class="text-gray-600">|</span>
          <span><b class="text-cp-yellow">💥 Боеприпасы (1 пуля):</b> <b class="text-cp-cyan">Безгильзовое</b> = 0.5 eb • <b class="text-cp-yellow">Гильзовое</b> = 1 eb • <b class="text-cp-red">Тяжёлое</b> = 2–3 eb</span>
        `;
    } else if (activeCatalogTab === "armor") {
        extraLabel.textContent = "Сортировка (ОС / Цена)";
        extraSelect.innerHTML = `
          <option value="ALL">Без сортировки</option>
          <option value="SORT_OS_ASC">🛡️ ОС: по возрастанию</option>
          <option value="SORT_OS_DESC">🛡️ ОС: по убыванию</option>
          <option value="SORT_PRICE_ASC">💰 Цена: от меньшей к большей</option>
          <option value="SORT_PRICE_DESC">💰 Цена: от большей к меньшей</option>
        `;
        legend.innerHTML = `<span><b class="text-cp-cyan">ОС</b> = Останавливающая способность (SP)</span><span><b class="text-cp-cyan">ЗУ</b> = Значение утяжеления (EV)</span>`;
    } else if (activeCatalogTab === "gear" || activeCatalogTab === "services") {
        extraLabel.textContent = "Цена";
        extraSelect.innerHTML = `<option value="ALL">Без сортировки цен</option><option value="SORT_PRICE_ASC">🔼 Цена: от меньшей к большей</option><option value="SORT_PRICE_DESC">🔽 Цена: от большей к меньшей</option>`;
        legend.innerHTML = `<span><b class="text-cp-cyan">eb</b> = Евробаксы</span>`;
    } else if (activeCatalogTab === "cyberware" || activeCatalogTab === "borging") {
        extraLabel.textContent = "Цена";
        extraSelect.innerHTML = `<option value="ALL">Без сортировки цен</option><option value="SORT_PRICE_ASC">🔼 Цена: от меньшей к большей</option><option value="SORT_PRICE_DESC">🔽 Цена: от большей к меньшей</option>`;
        legend.innerHTML = `<span><b class="text-cp-cyan">ПЧ</b> = Потеря Человечности</span><span><b class="text-cp-yellow">Коды операций:</b> <b>Н</b> — Незначительная • <b>М</b> — Малая • <b>С</b> — Серьёзная • <b>КР</b> — Критическая</span>`;
    } else if (activeCatalogTab === "acpa") {
        extraLabel.textContent = "Сортировка (Цена / ОС)";
        extraSelect.innerHTML = `
          <option value="ALL">Без сортировки</option>
          <option value="SORT_PRICE_ASC">🔼 Цена: от меньшей к большей</option>
          <option value="SORT_PRICE_DESC">🔽 Цена: от большей к меньшей</option>
          <option value="SORT_OS_ASC">🛡️ ОС: по возрастанию (от меньшей к большей)</option>
          <option value="SORT_OS_DESC">🛡️ ОС: по убыванию (от большей к меньшей)</option>
        `;
        legend.innerHTML = `<span><b class="text-cp-yellow">Сила</b> = Характеристика силы шасси</span><span><b class="text-cp-red">ОСТ</b> = Очки Структуры</span><span><b class="text-cp-cyan">ОС</b> = Броня ACPA</span>`;
    } else if (activeCatalogTab === "corporations") {
        // ИСПРАВЛЕНО: Вместо "Зарплата" здесь стоит "Сортировка по сотрудникам" со всеми 6 пунктами!
        extraLabel.textContent = "Сортировка по сотрудникам";
        extraSelect.innerHTML = `
          <option value="ALL">Без сортировки (По умолчанию)</option>
          <option value="EMP_DESC">👥 Сотрудники: от большего к меньшему (↓)</option>
          <option value="EMP_ASC">👥 Сотрудники: от меньшего к большему (↑)</option>
          <option value="SOL_DESC">🪖 Солдаты: от большего к меньшему (↓)</option>
          <option value="SOL_ASC">🪖 Солдаты: от меньшего к большему (↑)</option>
          <option value="OPS_DESC">🕶️ Оперативники: от большего к меньшему (↓)</option>
          <option value="OPS_ASC">🕶️ Оперативники: от меньшего к большему (↑)</option>
        `;
        legend.innerHTML = `<span><b class="text-cp-yellow">Штаб-квартира</b> = Главный офис корпорации</span><span><b class="text-cp-cyan">Штат</b> = Сотрудники, регулярные войска и тайные оперативники</span>`;
    } else if (activeCatalogTab === "netrunning") {
        extraLabel.textContent = "Тип / Сортировка (Цена, Сила, Память)";
        extraSelect.innerHTML = `
          <option value="ALL">Программы и Кибердеки (Без сортировки)</option>
          <option value="ONLY_PROGRAMS">💾 Только Программы</option>
          <option value="ONLY_DECKS">💻 Только Кибердеки</option>
          <option value="SORT_PRICE_DESC">💰 Цена: от большей к меньшей</option>
          <option value="SORT_PRICE_ASC">💰 Цена: от меньшей к большей</option>
          <option value="SORT_STR_DESC">⚡ Сила (СИЛ / Врата): от большей к меньшей</option>
          <option value="SORT_STR_ASC">⚡ Сила (СИЛ / Врата): от меньшей к большей</option>
          <option value="SORT_MEM_DESC">🧠 Память (ЕП / MU): от большей к меньшей</option>
          <option value="SORT_MEM_ASC">🧠 Память (ЕП / MU): от меньшей к большей</option>
        `;
        legend.innerHTML = `<span><b class="text-cp-cyan">ЕП (MU)</b> = Единицы Памяти</span><span><b class="text-cp-cyan">СИЛ</b> = Сила программы / Кодовых врат</span>`;
    } else if (activeCatalogTab === "vehicles") {
        extraLabel.textContent = "Сортировка (Тип, ОСТ, Цена)";
        extraSelect.innerHTML = `
          <option value="ALL">Без сортировки</option>
          <option value="SORT_PRICE_DESC">💰 Цена: от большей к меньшей</option>
          <option value="SORT_PRICE_ASC">💰 Цена: от меньшей к большей</option>
          <option value="SORT_TYPE_ASC">🔤 По типу транспорта (А → Я)</option>
          <option value="SORT_TYPE_DESC">🔤 По типу транспорта (Я → А)</option>
          <option value="SORT_SDP_DESC">🛡️ Сначала самые прочные (по ОСТ)</option>
        `;
        legend.innerHTML = `<span><b class="text-cp-cyan">УСК/ТОРМ</b> = Ускорение и Торможение</span><span><b class="text-cp-cyan">ОСТ</b> = Очки Структуры (ХП)</span><span><b class="text-cp-cyan">ОС (Броня)</b> = ОС / 20</span>`;
    } else if (activeCatalogTab === "characters") {
        extraLabel.textContent = "Статус (Именной) / Сортировка";
        extraSelect.innerHTML = `
          <option value="ALL">Все персонажи (Без сортировки)</option>
          <option value="ONLY_NAMED">⭐ Только Именные (Лор Cyberpunk)</option>
          <option value="ONLY_UNNAMED">👤 Только Неименные (Рядовые НИПы)</option>
          <option value="SORT_ROLE_ASC">🎭 По Ролям (А → Я)</option>
          <option value="SORT_ROLE_DESC">🎭 По Ролям (Я → А)</option>
          <option value="SORT_REP_DESC">⭐ Сначала с высшей Репутацией</option>
        `;
        legend.innerHTML = `<span><b class="text-cp-cyan">⭐ ИМЕННОЙ</b> = Уникальный персонаж лора Cyberpunk</span><span><b class="text-cp-cyan">СТАТЫ</b> = ИНТ, КРУТ, ПЕР, РЕФ, ПРВЛ, ТЕЛО, ТЕХ, УДАЧА, ЭМП</span>`;
    }

    if ([...extraSelect.options].some(o => o.value === prevExtraVal)) extraSelect.value = prevExtraVal;
}

function clearSearch() { document.getElementById("searchInput").value = ""; renderCatalog(); }
function resetFilters() {
    document.getElementById("searchInput").value = "";
    document.getElementById("subFilter").value = "ALL";
    document.getElementById("extraFilter").value = "ALL";
    document.getElementById("relFilter").value = "ALL";
    if (document.getElementById("availFilter")) document.getElementById("availFilter").value = "ALL";
    document.getElementById("bookFilter").value = "ALL";
    renderCatalog();
}

function getReliabilityRank(nadStr) {
    if (!nadStr) return 0;
    const s = nadStr.toUpperCase();
    return s.includes("ОТ") ? 4 : s.includes("ОН") ? 3 : (s.includes("ОБ") || s.includes("СТ")) ? 2 : s.includes("НН") ? 1 : 0;
}

function getAvailabilityRank(dosStr) {
    if (!dosStr) return 0;
    const s = dosStr.toUpperCase();
    return s.includes("ОТЛ") ? 4 : s.includes("ОБЫ") ? 3 : s.includes("МАЛ") ? 2 : s.includes("РЕД") ? 1 : 0;
}

function toggleItemAddedBadge(sectionKey, itemId, isChecked) {
    if (!isCurrentUserAdmin()) return;
    const target = (DB[sectionKey] || []).find(i => i.id === itemId);
    if (!target) return;
    target.isUser = Boolean(isChecked);
    addChangeLogEntry("edited", sectionKey, target);
    persistDatabase(true);
    if (sectionKey === "rules") renderRulesView();
    else renderCatalog();
}

function toggleCharacterNamedBadge(itemId, isChecked) {
    if (!isCurrentUserAdmin()) return;
    const target = (DB.characters || []).find(i => i.id === itemId);
    if (!target) return;
    target.isNamed = Boolean(isChecked);
    addChangeLogEntry("edited", "characters", target);
    persistDatabase(true);
    renderCatalog();
}

window.openQuickCreatorForCurrentTab = function (sectionKey) {
    if (!isCurrentUserAdmin()) return;
    const targetSec = sectionKey || activeCatalogTab || "roles";
    editingItemId = null;
    activeBuilderType = targetSec;
    switchMainView("admin");
    switchAdminSubtab("builder");
    setBuilderType(targetSec, null);
    window.scrollTo({ top: 0, behavior: "smooth" });
};

//
//  GALLERY
//

// =========================================================================
// МУЛЬТИ-ГАЛЕРЕЯ КАРТИНОК И ЛАЙТБОКС
// =========================================================================


function getItemImagesArray(item) {
    if (!item) return [];
    const result = [];
    if (Array.isArray(item.images)) {
        item.images.forEach(src => {
            if (typeof src === "string" && src.trim() !== "") result.push(src.trim());
        });
    }
    if (typeof item.image === "string" && item.image.trim() !== "") {
        const single = item.image.trim();
        if (!result.includes(single)) result.unshift(single);
    }
    return result;
}

function compressUploadedCardImage(file, maxWidth = 800, quality = 0.80) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = function (ev) {
            const dataUrl = ev.target.result;
            if (file.type === "image/gif" && dataUrl.length < 450000) {
                resolve(dataUrl);
                return;
            }
            const img = new Image();
            img.onload = function () {
                let w = img.naturalWidth || img.width || maxWidth;
                let h = img.naturalHeight || img.height || maxWidth;
                if (w > maxWidth || h > maxWidth) {
                    if (w > h) { h = Math.round((h * maxWidth) / w); w = maxWidth; }
                    else { w = Math.round((w * maxWidth) / h); h = maxWidth; }
                }
                const canvas = document.createElement("canvas");
                canvas.width = w; canvas.height = h;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, w, h);
                let out = canvas.toDataURL("image/webp", quality);
                if (!out || out.length >= dataUrl.length) {
                    out = canvas.toDataURL("image/jpeg", quality);
                }
                resolve(out);
            };
            img.onerror = () => resolve(dataUrl);
            img.src = dataUrl;
        };
        reader.onerror = () => resolve("");
        reader.readAsDataURL(file);
    });
}

window.addBuilderImageUrl = function () {
    const urlInp = document.getElementById("builderMultiImageUrlInput");
    if (!urlInp) return;
    const val = urlInp.value.trim();
    if (!val) return;
    if (!validateImageUrlForRole(val)) return;
    if (!builderGalleryImages.includes(val)) builderGalleryImages.push(val);
    urlInp.value = "";
    renderBuilderGalleryPreviewGrid();
};

window.handleBuilderMultiFilesSelect = async function (inputEl) {
    if (!inputEl || !inputEl.files || inputEl.files.length === 0) return;
    const files = Array.from(inputEl.files);
    for (const file of files) {
        if (!validateUploadedFile(file)) continue;
        const dataUrl = await compressUploadedCardImage(file);
        if (dataUrl && !builderGalleryImages.includes(dataUrl)) {
            builderGalleryImages.push(dataUrl);
        }
    }
    inputEl.value = "";
    renderBuilderGalleryPreviewGrid();
};

// Глобальная вставка картинок из буфера обмена (Ctrl + V) в Конструктор карточек и в Профиль (аватар)
window.addEventListener("paste", async function (ev) {
    const clipboard = ev.clipboardData || window.clipboardData;
    if (!clipboard) return;

    const items = clipboard.items ? Array.from(clipboard.items) : [];
    const imageItems = items.filter(it => it.type && it.type.startsWith("image/"));

    const isBuilderOpen = (activeMainView === "admin" && activeAdminSubtab === "builder" && isCurrentUserAdmin());
    const isProfileOpen = (activeMainView === "profile" && Boolean(getCurrentUser()));

    // 1. Если в буфере обмена лежит само изображение (скриншот или скопированная картинка)
    if (imageItems.length > 0) {
        if (isBuilderOpen) {
            ev.preventDefault();
            for (const item of imageItems) {
                const file = item.getAsFile();
                if (!file) continue;
                if (!validateUploadedFile(file)) continue;
                const dataUrl = await compressUploadedCardImage(file);
                if (dataUrl && !builderGalleryImages.includes(dataUrl)) {
                    builderGalleryImages.push(dataUrl);
                }
            }
            renderBuilderGalleryPreviewGrid();
            return;
        }

        if (isProfileOpen) {
            ev.preventDefault();
            const file = imageItems[0].getAsFile();
            if (!file) return;
            if (typeof window.handleProfileAvatarUpload === "function") {
                await window.handleProfileAvatarUpload({ target: { files: [file], value: "" } });
            }
            return;
        }
    }

    // 2. Если в Конструкторе нажали Ctrl + V со скопированной ссылкой на картинку (вне обычных полей ввода текста)
    if (isBuilderOpen) {
        const activeEl = document.activeElement;
        const isUrlInput = activeEl && activeEl.id === "builderMultiImageUrlInput";
        const isOtherTextInput = activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA") && !isUrlInput;

        if (!isOtherTextInput) {
            const pastedText = (clipboard.getData("text/plain") || "").trim();
            const looksLikeImgUrl = /^https?:\/\/\S+\.(jpg|jpeg|png|gif|webp|avif|svg)(\?\S*)?$/i.test(pastedText) ||
                                    pastedText.startsWith("data:image/");
            if (looksLikeImgUrl) {
                ev.preventDefault();
                if (validateImageUrlForRole(pastedText) && !builderGalleryImages.includes(pastedText)) {
                    builderGalleryImages.push(pastedText);
                    renderBuilderGalleryPreviewGrid();
                }
                if (isUrlInput) activeEl.value = "";
            }
        }
    }
});

window.removeBuilderGalleryImageAt = function (idx) {
    if (idx < 0 || idx >= builderGalleryImages.length) return;
    builderGalleryImages.splice(idx, 1);
    renderBuilderGalleryPreviewGrid();
};

window.moveBuilderGalleryImage = function (idx, dir) {
    const targetIdx = idx + dir;
    if (targetIdx < 0 || targetIdx >= builderGalleryImages.length) return;
    const tmp = builderGalleryImages[idx];
    builderGalleryImages[idx] = builderGalleryImages[targetIdx];
    builderGalleryImages[targetIdx] = tmp;
    renderBuilderGalleryPreviewGrid();
};

window.clearAllBuilderGalleryImages = function () {
    if (builderGalleryImages.length === 0) return;
    if (!confirm("Удалить все прикреплённые к карточке изображения?")) return;
    builderGalleryImages = [];
    renderBuilderGalleryPreviewGrid();
};

function renderBuilderGalleryPreviewGrid() {
    const gridEl = document.getElementById("builderMultiGalleryGrid");
    const countEl = document.getElementById("builderMultiGalleryCount");
    const clearBtn = document.getElementById("builderMultiClearAllBtn");
    if (!gridEl) return;

    if (countEl) countEl.textContent = builderGalleryImages.length;
    if (clearBtn) clearBtn.classList.toggle("hidden", builderGalleryImages.length <= 1);

    if (builderGalleryImages.length === 0) {
        gridEl.innerHTML = `<div class="col-span-full py-6 px-3 text-center text-xs text-gray-500 border border-dashed border-gray-800 bg-black/30">Изображения не прикреплены. Выберите файл(ы) с ПК или добавьте URL-ссылку выше.</div>`;
        return;
    }

    gridEl.innerHTML = builderGalleryImages.map((src, idx) => `
        <div class="bg-cp-panel border border-gray-700 p-2 flex flex-col justify-between gap-2 overflow-hidden">
          <div class="flex items-center justify-between gap-1 text-[10px] border-b border-gray-800 pb-1">
            <span class="font-bold ${idx === 0 ? 'text-cp-yellow' : 'text-cp-cyan'}">#${idx + 1} ${idx === 0 ? '(Главная)' : ''}</span>
            <div class="flex items-center gap-1">
              ${idx > 0 ? `<button type="button" onclick="moveBuilderGalleryImage(${idx}, -1)" class="px-1.5 py-0.5 bg-gray-800 hover:bg-cp-cyan hover:text-black text-gray-300 font-bold">◀</button>` : ""}
              ${idx < builderGalleryImages.length - 1 ? `<button type="button" onclick="moveBuilderGalleryImage(${idx}, 1)" class="px-1.5 py-0.5 bg-gray-800 hover:bg-cp-cyan hover:text-black text-gray-300 font-bold">▶</button>` : ""}
              <button type="button" onclick="removeBuilderGalleryImageAt(${idx})" class="px-2 py-0.5 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white font-bold uppercase">✕ Удалить</button>
            </div>
          </div>
          <div class="w-full h-28 bg-black/60 flex items-center justify-center overflow-hidden border border-gray-800">
            <img src="${escapeHtmlAttr(src)}" class="max-w-full max-h-full object-contain">
          </div>
        </div>
      `).join("");
}

function renderCardGalleryBlockHTML(item) {
    const imgs = getItemImagesArray(item);
    if (imgs.length === 0) return "";
    const titleName = item.name || item.title || "Иллюстрация";

    if (imgs.length === 1) {
        return `
          <div class="mt-4 pt-4 border-t border-gray-800 w-full max-w-full overflow-hidden">
            <div class="text-[10px] uppercase text-gray-500 font-bold mb-2">🖼️ Иллюстрация // ${dash(titleName)} (нажмите для увеличения)</div>
            <div onclick="openCardGalleryLightbox('${item.id}', 0)" class="w-full max-h-80 bg-black/60 border border-gray-800 hover:border-cp-cyan p-2 flex items-center justify-center overflow-hidden cursor-zoom-in transition-colors">
              <img id="detail-img-${item.id}" src="${escapeHtmlAttr(imgs[0])}" alt="${escapeHtmlAttr(titleName)}" class="max-w-full max-h-72 w-auto h-auto object-contain">
            </div>
          </div>
        `;
    }

    return `
        <div class="mt-4 pt-4 border-t border-gray-800 w-full max-w-full overflow-hidden">
          <div class="flex items-center justify-between text-[10px] uppercase text-gray-400 font-bold mb-2">
            <span class="text-cp-cyan">🖼️ Галерея иллюстраций (${imgs.length})</span>
            <span>Нажмите на картинку для увеличения</span>
          </div>
          <div class="grid grid-cols-2 gap-2.5 w-full">
            ${imgs.map((src, idx) => `
              <div onclick="openCardGalleryLightbox('${item.id}', ${idx})" class="w-full h-44 bg-black/60 border border-gray-800 hover:border-cp-yellow p-1.5 flex items-center justify-center overflow-hidden cursor-zoom-in relative group transition-all">
                <img src="${escapeHtmlAttr(src)}" alt="${escapeHtmlAttr(titleName + ' #' + (idx + 1))}" class="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105">
                <span class="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-black/80 border border-gray-700 text-[9px] font-bold text-gray-300">#${idx + 1}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;
}

window.openCardGalleryLightbox = function (itemId, startIndex = 0) {
    const found = findItemAcrossAllSections(itemId);
    const item = found ? found.item : null;
    if (!item) return;
    const imgs = getItemImagesArray(item);
    if (imgs.length === 0) return;

    lightboxGalleryState.images = imgs;
    lightboxGalleryState.currentIndex = Math.max(0, Math.min(startIndex, imgs.length - 1));
    lightboxGalleryState.title = item.name || item.title || "Иллюстрация";
    updateCardGalleryLightboxUI();
    document.getElementById("cardGalleryLightboxModal").classList.remove("hidden");
};

window.stepCardGalleryLightbox = function (delta) {
    const len = lightboxGalleryState.images.length;
    if (len <= 1) return;
    lightboxGalleryState.currentIndex = (lightboxGalleryState.currentIndex + delta + len) % len;
    updateCardGalleryLightboxUI();
};

window.closeCardGalleryLightbox = function () {
    document.getElementById("cardGalleryLightboxModal").classList.add("hidden");
};

function updateCardGalleryLightboxUI() {
    const imgs = lightboxGalleryState.images;
    const idx = lightboxGalleryState.currentIndex;
    document.getElementById("lightboxGalleryImg").src = imgs[idx] || "";
    document.getElementById("lightboxGalleryTitle").textContent = lightboxGalleryState.title;
    document.getElementById("lightboxGalleryCounter").textContent = `${idx + 1} / ${imgs.length}`;
    document.getElementById("lightboxPrevBtn").classList.toggle("invisible", imgs.length <= 1);
    document.getElementById("lightboxNextBtn").classList.toggle("invisible", imgs.length <= 1);
}

window.addEventListener("keydown", (ev) => {
    const m = document.getElementById("cardGalleryLightboxModal");
    if (!m || m.classList.contains("hidden")) return;
    if (ev.key === "Escape") closeCardGalleryLightbox();
    else if (ev.key === "ArrowLeft") stepCardGalleryLightbox(-1);
    else if (ev.key === "ArrowRight") stepCardGalleryLightbox(1);
});

//
//NAV HANDLER
//

// =========================================================================
// НАВИГАЦИЯ ПО САЙТУ, ИСТОРИЯ ПЕРЕХОДОВ И ГЛАВНАЯ СТРАНИЦА
// =========================================================================

let navHistoryStack = [];
let navHistoryIndex = -1;
let isNavigatingHistory = false;

function captureCurrentNavState() {
    return {
        view: activeMainView,
        catalogTab: activeCatalogTab,
        selectedItemId: selectedItemId,
        selectedRuleId: selectedRuleId,
        homeSubtab: activeHomeSubtab,
        adminSubtab: activeAdminSubtab,
        adminLogsSubtab: activeAdminLogsSubtab
    };
}

function isSameNavState(a, b) {
    if (!a || !b) return false;
    if (a.view !== b.view) return false;
    if (a.view === "catalog") return a.catalogTab === b.catalogTab && a.selectedItemId === b.selectedItemId;
    if (a.view === "rules") return a.selectedRuleId === b.selectedRuleId;
    if (a.view === "home") return a.homeSubtab === b.homeSubtab;
    if (a.view === "admin") return a.adminSubtab === b.adminSubtab && a.adminLogsSubtab === b.adminLogsSubtab;
    return true;
}

function updateNavHistoryButtonsUI() {
    const backBtn = document.getElementById("navHistoryBackBtn");
    const fwdBtn = document.getElementById("navHistoryFwdBtn");
    const canBack = navHistoryIndex > 0;
    const canFwd = navHistoryIndex >= 0 && navHistoryIndex < navHistoryStack.length - 1;

    const activeCls = "w-7 h-9 bg-cp-panel hover:bg-cp-yellow text-cp-cyan hover:text-black border border-cp-cyan hover:border-cp-yellow flex items-center justify-center font-display font-black text-xs transition-all cursor-pointer shadow-[0_0_8px_rgba(0,240,255,0.25)]";
    const disabledCls = "w-7 h-9 bg-cp-panel border border-gray-800 text-gray-600 flex items-center justify-center font-display font-black text-xs transition-all opacity-40 cursor-not-allowed";

    if (backBtn) {
        backBtn.disabled = !canBack;
        backBtn.className = canBack ? activeCls : disabledCls;
    }
    if (fwdBtn) {
        fwdBtn.disabled = !canFwd;
        fwdBtn.className = canFwd ? activeCls : disabledCls;
    }
}

function recordNavHistoryState() {
    if (isNavigatingHistory) return;
    const snap = captureCurrentNavState();
    const currentTop = navHistoryStack[navHistoryIndex];
    if (currentTop && isSameNavState(currentTop, snap)) {
        updateNavHistoryButtonsUI();
        return;
    }

    if (navHistoryIndex < navHistoryStack.length - 1) {
        navHistoryStack = navHistoryStack.slice(0, navHistoryIndex + 1);
    }
    navHistoryStack.push(snap);
    if (navHistoryStack.length > 60) {
        navHistoryStack.shift();
    }
    navHistoryIndex = navHistoryStack.length - 1;
    updateNavHistoryButtonsUI();
}

window.navigateHistory = function (delta) {
    const targetIdx = navHistoryIndex + delta;
    if (targetIdx < 0 || targetIdx >= navHistoryStack.length) return;

    navHistoryIndex = targetIdx;
    const st = navHistoryStack[navHistoryIndex];
    isNavigatingHistory = true;
    try {
        activeHomeSubtab = st.homeSubtab || "news";
        activeAdminSubtab = st.adminSubtab || "builder";
        activeAdminLogsSubtab = st.adminLogsSubtab || "bans";
        selectedItemId = st.selectedItemId || null;
        selectedRuleId = st.selectedRuleId || null;
        switchMainView(st.view, st.catalogTab);
    } finally {
        isNavigatingHistory = false;
        updateNavHistoryButtonsUI();
    }
};

window.addEventListener("keydown", (ev) => {
    if (ev.altKey && ev.key === "ArrowLeft") {
        ev.preventDefault();
        window.navigateHistory(-1);
    } else if (ev.altKey && ev.key === "ArrowRight") {
        ev.preventDefault();
        window.navigateHistory(1);
    }
});

function updateAuthHeaderUI() {
    const u = getCurrentUser();
    const guestBtn = document.getElementById("guestLoginSquareBtn");
    const loggedWrap = document.getElementById("loggedAvatarWrapper");
    const avatarContent = document.getElementById("headerAvatarContent");
    const roleDot = document.getElementById("headerRoleDot");
    const dropName = document.getElementById("dropdownUserName");
    const dropRole = document.getElementById("dropdownUserRole");
    const dropAdminBtn = document.getElementById("dropdownAdminBtn");
    const addRuleBtn = document.getElementById("addRuleTopBtn");
    const cntUsersEl = document.getElementById("cnt-users");
    if (cntUsersEl) cntUsersEl.textContent = USERS.length;

    if (!u) {
        guestBtn.classList.remove("hidden");
        loggedWrap.classList.add("hidden");
        closeUserDropdown(); closeNotifDropdown();
        if (addRuleBtn) addRuleBtn.classList.add("hidden");
    } else {
        guestBtn.classList.add("hidden");
        loggedWrap.classList.remove("hidden");
        avatarContent.innerHTML = u.avatar ? `<img src="${escapeHtmlAttr(u.avatar)}" class="w-full h-full object-cover">` : (u.displayName || "CP").slice(0, 2).toUpperCase();
        dropName.textContent = u.displayName || "Эджраннер";
        roleDot.className = u.role === "ROOT" ? "absolute bottom-0 right-0 w-2.5 h-2.5 bg-cp-red border border-black" : u.role === "ADMIN" ? "absolute bottom-0 right-0 w-2.5 h-2.5 bg-cp-cyan border border-black" : "absolute bottom-0 right-0 w-2.5 h-2.5 bg-cp-green border border-black";
        dropRole.textContent = u.role === "ROOT" ? "👑 Главный Админ (ROOT)" : u.role === "ADMIN" ? "🛡️ Администратор (ADMIN)" : `👤 Игрок (${u.favRole || 'Соло'})`;
        const isAdm = isCurrentUserAdmin();
        dropAdminBtn.classList.toggle("hidden", !isAdm);
        if (addRuleBtn) addRuleBtn.classList.toggle("hidden", !isAdm);
        updateNotifBellUI();
    }
}

function toggleUserDropdown(e) { e.stopPropagation(); closeNotifDropdown(); document.getElementById("userDropdownMenu").classList.toggle("hidden"); }
function closeUserDropdown() { const m = document.getElementById("userDropdownMenu"); if (m) m.classList.add("hidden"); }
function openViewFromDropdown(v) { closeUserDropdown(); switchMainView(v); }
function logoutFromDropdown() { closeUserDropdown(); logoutCurrentUser(); }

document.addEventListener("click", e => {
    const wrap = document.getElementById("loggedAvatarWrapper");
    if (wrap && !wrap.contains(e.target)) { closeUserDropdown(); closeNotifDropdown(); }
});

function updateCounts() {
    updateAuthHeaderUI();

    const cardsEl = document.getElementById("homeStatTotalCards");
    if (cardsEl) {
        const totalCards = Object.keys(SECTION_LABELS).reduce((sum, key) => {
            return sum + (Array.isArray(DB[key]) ? DB[key].length : 0);
        }, 0);
        cardsEl.textContent = totalCards;
    }

    const usersEl = document.getElementById("homeStatTotalUsers");
    if (usersEl) {
        usersEl.textContent = Array.isArray(USERS) ? USERS.length : 1;
    }
}

function getAllCategoriesForSection(secKey) {
    const fromList = CATEGORIES[secKey] || [];
    const prop = secKey === "rules" ? "subsection" : "category";
    const fromItems = (DB[secKey] || []).map(i => i[prop]).filter(Boolean);
    return [...new Set([...fromList, ...fromItems])];
}

function switchMainView(view, catalogTab = null) {
    if (view === "admin" && !isCurrentUserAdmin()) view = "profile";
    activeMainView = view;
    if (catalogTab) activeCatalogTab = catalogTab;

    ["home", "catalog", "rules", "profile", "admin"].forEach(v => {
        const el = document.getElementById("view-" + v);
        if (el) el.classList.toggle("hidden", view !== v);
    });

    const targetKey = view === "catalog" ? activeCatalogTab : view;
    document.querySelectorAll("#mainNav .nav-btn").forEach(btn => {
        const isCur = (view !== "home") && (btn.getAttribute("data-view") === targetKey);
        btn.className = isCur
            ? "nav-btn px-3 py-1.5 text-xs font-bold uppercase tracking-wider border transition-all bg-cp-yellow text-black border-cp-yellow shadow-[0_0_12px_rgba(252,238,10,0.3)]"
            : "nav-btn px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-gray-700 bg-cp-panel text-gray-300 hover:border-cp-cyan";
    });

    if (view === "home") renderHomeView();
    else if (view === "catalog") { setupCatalogFilters(); renderCatalog(); }
    else if (view === "rules") renderRulesView();
    else if (view === "profile") renderProfileView();
    else if (view === "admin") switchAdminSubtab(activeAdminSubtab);

    recordNavHistoryState();
}

// При клике по карточке в каталоге или механике тоже сохраняем шаг в историю
const _baseSelectCatalogItem = selectCatalogItem;
selectCatalogItem = function (id) {
    _baseSelectCatalogItem(id);
    recordNavHistoryState();
};

const _baseOpenRuleArticle = openRuleArticle;
openRuleArticle = function (id) {
    _baseOpenRuleArticle(id);
    recordNavHistoryState();
};

const _baseSwitchAdminSubtab = switchAdminSubtab;
switchAdminSubtab = function (subtab) {
    _baseSwitchAdminSubtab(subtab);
    recordNavHistoryState();
};

// --- ЛОГИКА ГЛАВНОЙ СТРАНИЦЫ ---
function switchHomeSubtab(subtab) {
    activeHomeSubtab = subtab || "news";
    editingHomePostId = null;
    editingContactUserId = null;
    renderHomeView();
    recordNavHistoryState();
}

function getPlainTextLength(htmlStr) {
    if (!htmlStr) return 0;
    const d = document.createElement("div");
    d.innerHTML = htmlStr;
    return (d.textContent || d.innerText || "").length;
}

function getTruncatedPreviewHtml(htmlStr, maxChars = 1000) {
    const d = document.createElement("div");
    d.innerHTML = htmlStr || "";
    const plain = d.textContent || d.innerText || "";
    if (plain.length <= maxChars) return htmlStr;
    return escapeHtmlAttr(plain.slice(0, maxChars)) + "…";
}

function toggleExpandHomePost(postId) {
    if (expandedHomePosts.has(postId)) expandedHomePosts.delete(postId);
    else expandedHomePosts.add(postId);
    renderHomeView();
}

function formatRichTextWithLinks(rawText) {
    if (rawText === undefined || rawText === null) return "";
    const str = String(rawText);
    if (str.trim() === "" || str.trim() === "—") return str;

    const parts = str.split(/(<a\b[^>]*>[\s\S]*?<\/a>|<[^>]+>)/gi);
    return parts.map(part => {
        if (part.startsWith("<")) return part;
        return part.replace(/(https?:\/\/[^\s<>"']+)/gi, (url) => {
            const cleanUrl = url.replace(/[.,;!?)]+$/, "");
            const trailing = url.slice(cleanUrl.length);
            return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="text-cp-cyan hover:text-cp-yellow underline underline-offset-2 font-bold transition-colors">${cleanUrl}</a>${trailing}`;
        });
    }).join("");
}

const CP_EMOJI_LIST = [
    "⚡", "🔥", "💀", "🦾", "🦿", "🧠", "🔫", "🛡️", "⚔️", "💣",
    "💉", "💊", "🧬", "💻", "🌐", "📡", "🔒", "🔓", "⚠️", "🚨",
    "🏢", "🚗", "🚁", "💰", "💎", "🎲", "🎯", "⭐", "👑", "✅",
    "❌", "📌", "📋", "🔧", "⚙️", "🕶️", "🎭", "🎸", "🍺", "❤️"
];

function insertRichFormatTag(textareaId, openTag, closeTag) {
    const area = document.getElementById(textareaId);
    if (!area) return;
    const start = area.selectionStart || 0;
    const end = area.selectionEnd || 0;
    const val = area.value;
    const selected = val.slice(start, end) || "текст";
    area.value = val.slice(0, start) + openTag + selected + closeTag + val.slice(end);
    area.focus();
    const newCursorPos = start + openTag.length + selected.length + closeTag.length;
    area.setSelectionRange(newCursorPos, newCursorPos);
}

function insertHomeFormatTag(openTag, closeTag) {
    insertRichFormatTag("homeEditorTextarea", openTag, closeTag);
}

function insertRichHyperlink(textareaId) {
    const area = document.getElementById(textareaId);
    if (!area) return;
    const start = area.selectionStart || 0;
    const end = area.selectionEnd || 0;
    const val = area.value;
    const selectedText = val.slice(start, end).trim();

    const rawUrl = prompt("Введите адрес ссылки (URL):", "https://");
    if (!rawUrl || !rawUrl.trim() || rawUrl.trim() === "https://") return;
    let cleanUrl = rawUrl.trim();
    if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
        cleanUrl = "https://" + cleanUrl;
    }

    const linkLabel = prompt("Введите отображаемый текст ссылки:", selectedText || "Перейти по ссылке");
    if (linkLabel === null) return;
    const finalLabel = linkLabel.trim() || cleanUrl;

    const linkHtml = `<a href="${escapeHtmlAttr(cleanUrl)}" target="_blank" rel="noopener noreferrer" class="text-cp-cyan hover:text-cp-yellow underline font-bold">${finalLabel}</a>`;
    area.value = val.slice(0, start) + linkHtml + val.slice(end);
    area.focus();
}

function toggleRichEmojiPicker(textareaId) {
    const picker = document.getElementById("emoji-picker-" + textareaId);
    if (!picker) return;
    picker.classList.toggle("hidden");
}

function insertEmojiAtCursor(textareaId, emojiChar) {
    const area = document.getElementById(textareaId);
    if (!area) return;
    const start = area.selectionStart || 0;
    const end = area.selectionEnd || 0;
    const val = area.value;
    area.value = val.slice(0, start) + emojiChar + val.slice(end);
    area.focus();
    const pos = start + emojiChar.length;
    area.setSelectionRange(pos, pos);
}

function getRichToolbarHTML(textareaId) {
    const emojiButtons = CP_EMOJI_LIST.map(em =>
        `<button type="button" onclick="insertEmojiAtCursor('${textareaId}', '${em}')" class="w-7 h-7 flex items-center justify-center bg-cp-bg hover:bg-cp-yellow/20 border border-gray-800 hover:border-cp-yellow text-sm transition-colors" title="Вставить ${em}">${em}</button>`
    ).join("");

    return `
        <div class="space-y-1 mb-1">
          <div class="flex flex-wrap items-center gap-1 bg-cp-bg border border-gray-800 p-1.5">
            <button type="button" onclick="insertRichFormatTag('${textareaId}', '<b>', '</b>')" class="px-2 py-0.5 bg-cp-panel hover:bg-cp-yellow hover:text-black border border-gray-700 text-xs font-bold" title="Жирный текст"><b>B</b></button>
            <button type="button" onclick="insertRichFormatTag('${textareaId}', '<i>', '</i>')" class="px-2 py-0.5 bg-cp-panel hover:bg-cp-yellow hover:text-black border border-gray-700 text-xs italic" title="Курсив">I</button>
            <button type="button" onclick="insertRichFormatTag('${textareaId}', '<u>', '</u>')" class="px-2 py-0.5 bg-cp-panel hover:bg-cp-yellow hover:text-black border border-gray-700 text-xs underline" title="Подчёркнутый">U</button>
            <span class="text-gray-700 px-0.5">|</span>
            <button type="button" onclick="insertRichFormatTag('${textareaId}', '<span class=&quot;text-cp-yellow font-bold&quot;>', '</span>')" class="px-2 py-0.5 bg-cp-panel hover:bg-gray-800 border border-gray-700 text-[11px] text-cp-yellow font-bold">Жёлтый</button>
            <button type="button" onclick="insertRichFormatTag('${textareaId}', '<span class=&quot;text-cp-cyan font-bold&quot;>', '</span>')" class="px-2 py-0.5 bg-cp-panel hover:bg-gray-800 border border-gray-700 text-[11px] text-cp-cyan font-bold">Циан</button>
            <button type="button" onclick="insertRichFormatTag('${textareaId}', '<span class=&quot;text-cp-red font-bold&quot;>', '</span>')" class="px-2 py-0.5 bg-cp-panel hover:bg-gray-800 border border-gray-700 text-[11px] text-cp-red font-bold">Красный</button>
            <button type="button" onclick="insertRichFormatTag('${textareaId}', '<span class=&quot;text-cp-green font-bold&quot;>', '</span>')" class="px-2 py-0.5 bg-cp-panel hover:bg-gray-800 border border-gray-700 text-[11px] text-cp-green font-bold">Зелёный</button>
            <span class="text-gray-700 px-0.5">|</span>
            <button type="button" onclick="openCardRefPickerModal('${textareaId}')" class="px-2.5 py-0.5 bg-cp-cyan/25 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan text-[11px] font-bold transition-colors" title="Указать внутреннюю ссылку на другую карточку сайта">📌 Указать карточку</button>
            <button type="button" onclick="insertRichHyperlink('${textareaId}')" class="px-2.5 py-0.5 bg-cp-cyan/15 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/50 text-[11px] font-bold transition-colors" title="Вставить внешнюю веб-ссылку">🔗 Веб-ссылка</button>
            <button type="button" onclick="toggleRichEmojiPicker('${textareaId}')" class="px-2.5 py-0.5 bg-cp-yellow/15 hover:bg-cp-yellow text-cp-yellow hover:text-black border border-cp-yellow/50 text-[11px] font-bold transition-colors" title="Открыть панель эмодзи">😀 Эмодзи</button></div>
          <div id="emoji-picker-${textareaId}" class="hidden bg-cp-panel border border-cp-yellow/60 p-2 grid grid-cols-10 gap-1 shadow-lg">
            ${emojiButtons}
          </div>
        </div>
      `;
}

window.startEditHomePost = function (postId) {
    if (!isCurrentUserAdmin()) return;
    editingHomePostId = String(postId);
    renderHomeView();
    setTimeout(() => {
        const editorBox = document.getElementById("homeAdminEditorBox");
        if (editorBox) {
            editorBox.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        const area = document.getElementById("homeEditorTextarea");
        if (area) area.focus();
    }, 40);
};
startEditHomePost = window.startEditHomePost;

window.cancelEditHomePost = function () {
    editingHomePostId = null;
    renderHomeView();
};
cancelEditHomePost = window.cancelEditHomePost;

function startEditAdminContact(userId) {
    const cur = getCurrentUser();
    if (!cur || (!isCurrentUserRoot() && cur.id !== userId)) return;
    editingContactUserId = userId;
    renderHomeView();
}
function cancelEditAdminContact() {
    editingContactUserId = null;
    renderHomeView();
}

function addAdminSocialLinkRow() {
    const list = document.getElementById("adminSocialLinksEditList");
    if (!list) return;
    const row = document.createElement("div");
    row.className = "admin-social-link-row grid grid-cols-12 gap-2 items-center";
    row.innerHTML = `
        <input type="text" data-sfield="label" placeholder="Название (ВК, Telegram, Discord...)" class="col-span-5 bg-cp-panel border border-gray-700 px-2.5 py-1.5 text-xs text-white outline-none">
        <input type="text" data-sfield="url" placeholder="https://... или ник" class="col-span-6 bg-cp-panel border border-gray-700 px-2.5 py-1.5 text-xs text-white outline-none">
        <button type="button" onclick="this.parentElement.remove()" class="col-span-1 py-1.5 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white text-xs font-bold">✕</button>
      `;
    list.appendChild(row);
}

function saveAdminContactSubmit(e, userId) {
    e.preventDefault();
    const cur = getCurrentUser();
    if (!cur || (!isCurrentUserRoot() && cur.id !== userId)) return;
    ensureMetaArraysInCategories();

    const roleTitle = document.getElementById("admContactRoleTitle")?.value.trim() || "";
    const note = document.getElementById("admContactNote")?.value.trim() || "";
    const rows = document.querySelectorAll("#adminSocialLinksEditList .admin-social-link-row");
    const links = Array.from(rows).map(r => ({
        label: r.querySelector('[data-sfield="label"]')?.value.trim() || "",
        url: r.querySelector('[data-sfield="url"]')?.value.trim() || ""
    })).filter(l => l.label !== "" || l.url !== "");

    CATEGORIES._adminContacts[userId] = { roleTitle, note, links };
    editingContactUserId = null;
    persistDatabase();
    renderHomeView();
}

function renderHomeView() {
    ensureMetaArraysInCategories();

    ["news", "rules", "legal", "contacts"].forEach(tab => {
        const btn = document.getElementById("homeNavBtn-" + tab);
        if (!btn) return;
        const isCur = (activeHomeSubtab === tab);
        btn.className = isCur
            ? "w-full text-left px-4 py-3 border transition-all flex items-center gap-3 bg-cp-yellow text-black border-cp-yellow shadow-[0_0_15px_rgba(252,238,10,0.25)]"
            : "w-full text-left px-4 py-3 border border-gray-800 bg-cp-bg text-gray-300 hover:border-cp-cyan transition-all flex items-center gap-3";
    });

    const mainCol = document.getElementById("homeMainColumn");
    if (!mainCol) return;
    const isAdmin = isCurrentUserAdmin();

    // 1. ВКЛАДКА «ПРАВОВАЯ ЧАСТЬ»
    if (activeHomeSubtab === "legal") {
        mainCol.innerHTML = `
          <div class="bg-cp-panel cp-border p-5 border-l-4 border-l-cp-cyan">
            <div class="text-[10px] font-bold uppercase tracking-widest text-cp-cyan">NETWATCH LEGAL COMPLIANCE // DISCLAIMER</div>
            <h2 class="font-display text-xl font-black text-white uppercase mt-0.5">🛡️ Правовая часть и юридический статус</h2>
            <p class="text-xs text-gray-400 mt-1">Официальное уведомление о некоммерческом статусе справочника и защите авторских прав правообладателей.</p>
          </div>

          <article class="bg-cp-panel cp-border p-6 space-y-4 text-xs text-gray-200 leading-relaxed">
            <div class="border-b border-gray-800 pb-3">
              <h3 class="font-display text-base font-bold text-cp-yellow">1. Некоммерческий фанатский статус проекта</h3>
              <p class="text-gray-300 mt-1">
                Интерактивный справочник и база данных <b>Cyberpunk 2020 // Помогалка</b> (далее — <i>«Сайт», «Терминал DataTerm»</i>) является исключительно некоммерческим, любительским фанатским проектом, созданным силами сообщества <span class="text-cp-cyan font-bold">Село ДнДшеское</span> для поддержки русскоязычных игроков и Рефери настольной ролевой игры (НРИ) <i>Cyberpunk 2020</i>. Проект не извлекает никакой прямой или косвенной финансовой выгоды, не осуществляет продажу игровых материалов, книг или цифровых копий и не содержит монетизации, коммерческой рекламы или платных подписок.
              </p>
            </div>

            <div class="border-b border-gray-800 pb-3">
              <h3 class="font-display text-base font-bold text-cp-yellow">2. Защита интеллектуальной собственности и торговых марок</h3>
              <p class="text-gray-300 mt-1">
                Все права на настольную ролевую игру <b>Cyberpunk®</b>, оригинальный сеттинг, игровую механику <i>Interlock System / Friday Night Firefight</i>, терминологию, логотипы, лор и сопутствующие печатные материалы принадлежат компании <b>R. Talsorian Games, Inc.</b><br><br>
                Торговые марки <i>Cyberpunk®</i>, <i>Cyberpunk 2020™</i>, а также фирменные наименования корпораций (<i>Arasaka, Militech, Trauma Team, Biotechnica</i> и др.), образцов вооружения и киберимплантов являются собственностью <b>R. Talsorian Games, Inc.</b> Все материалы, представленные на сайте (любительские переводы описаний, сводки правил, таблицы и характеристики снаряжения), размещены исключительно в справочных, ознакомительных и информационных целях в рамках добросовестного использования (Fair Use).
              </p>
            </div>

            <div class="border-b border-gray-800 pb-3">
              <h3 class="font-display text-base font-bold text-cp-yellow">3. Отсутствие пиратства и распространения копий</h3>
              <p class="text-gray-300 mt-1">
                Администрация сайта строго заявляет: <b>на данном ресурсе не размещаются, не хранятся и не распространяются пиратские цифровые копии книг правил, официальных руководств, сканированные страницы или PDF-файлы</b> изданий R. Talsorian Games. Сайт функционирует как интерактивный каталог-шпаргалка для удобства ведения игровых сессий теми игроками и ведущими, которые уже обладают легальными копиями книг правил.
              </p>
              <div class="mt-2.5 p-3 bg-cp-bg border-l-2 border-cp-yellow text-[11px] text-gray-300">
                📌 Мы настоятельно призываем поддерживать авторов игры и приобретать официальные печатные и цифровые книги правил в магазине <b>R. Talsorian Games</b> или на площадке <b>DriveThruRPG</b>.
              </div>
            </div>

            <div>
              <h3 class="font-display text-base font-bold text-cp-yellow">4. Официальные ресурсы правообладателя и обратная связь</h3>
              <p class="text-gray-300 mt-1">Ознакомиться с оригинальной продукцией, приобрести официальные издания и связаться с правообладателями или администрацией справочника вы можете по ссылкам ниже:</p>
              <div class="mt-3 flex flex-wrap items-center gap-2.5">
                <a href="https://rtalsoriangames.com/" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 bg-cp-bg hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/50 text-xs font-bold transition-colors inline-flex items-center gap-1.5">
                  <span>🌐</span><span>Официальный сайт R. Talsorian Games</span>
                </a>
                <a href="https://www.drivethrurpg.com/en/publisher/13/r-talsorian-games-inc" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 bg-cp-bg hover:bg-cp-yellow text-cp-yellow hover:text-black border border-cp-yellow/50 text-xs font-bold transition-colors inline-flex items-center gap-1.5">
                  <span>🛒</span><span>Каталог R. Talsorian Games на DriveThruRPG</span>
                </a>
                <button type="button" onclick="switchHomeSubtab('contacts')" class="px-3.5 py-2 bg-cp-bg hover:bg-cp-red text-gray-200 hover:text-white border border-gray-700 text-xs font-bold transition-colors inline-flex items-center gap-1.5">
                  <span>📡</span><span>Контакты администрации сайта</span>
                </button>
              </div>
            </div>
          </article>
        `;
        return;
    }

    // 2. ВКЛАДКА «КОНТАКТЫ АДМИНИСТРАЦИИ»
    if (activeHomeSubtab === "contacts") {
        const curUser = getCurrentUser();
        const isRootCur = isCurrentUserRoot();
        const rawAdmins = USERS.filter(u => u && (u.role === "ROOT" || u.role === "ADMIN"));
        const effectiveAdmins = rawAdmins.length > 0 ? rawAdmins : [HARDCODED_ROOT_USER];

        const contactsCardsHtml = effectiveAdmins.map(adm => {
            const isRoot = (adm.role === "ROOT" || adm.id === "u-root");
            const cInfo = (CATEGORIES._adminContacts && CATEGORIES._adminContacts[adm.id])
                ? CATEGORIES._adminContacts[adm.id]
                : { roleTitle: "", note: "", links: [] };
            const canEditThis = Boolean(curUser && (isRootCur || curUser.id === adm.id));
            const isEditingThis = (editingContactUserId === adm.id);

            const avHtml = adm.avatar
                ? `<img src="${escapeHtmlAttr(adm.avatar)}" onclick="openPublicProfileModal('${adm.id}')" class="w-16 h-16 object-cover border-2 ${isRoot ? 'border-cp-red' : 'border-cp-cyan'} cursor-pointer shrink-0">`
                : `<div onclick="openPublicProfileModal('${adm.id}')" class="w-16 h-16 bg-cp-bg border-2 ${isRoot ? 'border-cp-red text-cp-red' : 'border-cp-cyan text-cp-cyan'} flex items-center justify-center font-display font-black text-xl cursor-pointer shrink-0">${(adm.displayName || "CP").slice(0, 2).toUpperCase()}</div>`;

            const linksList = Array.isArray(cInfo.links) ? cInfo.links : [];
            const linksHtml = linksList.length === 0
                ? `<span class="text-xs text-gray-500 italic">Ссылки на соцсети пока не указаны</span>`
                : linksList.map(l => {
                    const urlStr = String(l.url || "").trim();
                    const labelStr = String(l.label || urlStr).trim();
                    const isHttp = urlStr.startsWith("http://") || urlStr.startsWith("https://");
                    return isHttp
                        ? `<a href="${escapeHtmlAttr(urlStr)}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-cp-bg hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/50 text-xs font-bold transition-colors inline-flex items-center gap-1.5"><span>🔗</span><span>${escapeHtmlAttr(labelStr)}</span></a>`
                        : `<span class="px-3 py-1.5 bg-cp-bg border border-gray-700 text-xs text-gray-200 inline-flex items-center gap-1.5"><b class="text-cp-yellow">${escapeHtmlAttr(labelStr)}:</b> <span>${escapeHtmlAttr(urlStr)}</span></span>`;
                }).join("");

            const editFormHtml = !isEditingThis ? "" : `
            <form onsubmit="saveAdminContactSubmit(event, '${adm.id}')" class="mt-4 pt-4 border-t border-gray-800 space-y-3 bg-cp-bg/90 p-4 border border-cp-cyan/50">
              <div class="text-xs font-bold text-cp-cyan uppercase">✏️ Настройка контактов (${escapeHtmlAttr(adm.displayName)})</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div><label class="block text-[11px] text-gray-400 mb-1">Должность на проекте:</label><input type="text" id="admContactRoleTitle" value="${escapeHtmlAttr(cInfo.roleTitle || '')}" class="w-full bg-cp-panel border border-gray-700 px-3 py-1.5 text-xs text-white outline-none"></div>
                <div><label class="block text-[11px] text-gray-400 mb-1">По каким вопросам обращаться:</label><input type="text" id="admContactNote" value="${escapeHtmlAttr(cInfo.note || '')}" class="w-full bg-cp-panel border border-gray-700 px-3 py-1.5 text-xs text-white outline-none"></div>
              </div>
              <div class="space-y-2">
                <div class="flex items-center justify-between"><label class="text-[11px] text-cp-yellow font-bold uppercase">Соцсети и ссылки для связи:</label><button type="button" onclick="addAdminSocialLinkRow()" class="px-2.5 py-1 bg-cp-cyan text-black font-bold text-[11px] uppercase">+ Добавить ссылку</button></div>
                <div id="adminSocialLinksEditList" class="space-y-2">
                  ${(linksList.length > 0 ? linksList : [{ label: "", url: "" }]).map(l => `
                    <div class="admin-social-link-row grid grid-cols-12 gap-2 items-center">
                      <input type="text" data-sfield="label" value="${escapeHtmlAttr(l.label || '')}" placeholder="Название (ВК, Telegram...)" class="col-span-5 bg-cp-panel border border-gray-700 px-2.5 py-1.5 text-xs text-white outline-none">
                      <input type="text" data-sfield="url" value="${escapeHtmlAttr(l.url || '')}" placeholder="https://... или ник" class="col-span-6 bg-cp-panel border border-gray-700 px-2.5 py-1.5 text-xs text-white outline-none">
                      <button type="button" onclick="this.parentElement.remove()" class="col-span-1 py-1.5 bg-cp-red/20 text-cp-red text-xs font-bold">✕</button>
                    </div>
                  `).join("")}
                </div>
              </div>
              <div class="flex items-center gap-2 pt-2"><button type="submit" class="px-5 py-2 bg-cp-green text-black font-bold text-xs uppercase">💾 Сохранить</button><button type="button" onclick="cancelEditAdminContact()" class="px-4 py-2 bg-gray-800 text-gray-300 text-xs font-bold border border-gray-700">Отмена</button></div>
            </form>
          `;

            return `
            <div class="bg-cp-panel cp-border p-5 space-y-3">
              <div class="flex items-start justify-between gap-4 flex-wrap">
                <div class="flex items-center gap-4">
                  ${avHtml}
                  <div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <button type="button" onclick="openPublicProfileModal('${adm.id}')" class="font-display text-lg font-black text-white hover:text-cp-yellow hover:underline">${escapeHtmlAttr(adm.displayName)}</button>
                      <span class="px-2 py-0.5 text-[10px] font-bold uppercase ${isRoot ? 'bg-cp-red text-white' : 'bg-cp-cyan text-black'}">${isRoot ? '👑 ГЛАВНЫЙ АДМИН (ROOT)' : '🛡️ АДМИНИСТРАТОР'}</span>
                    </div>
                    <div class="text-xs text-cp-yellow font-bold mt-0.5">${escapeHtmlAttr(cInfo.roleTitle || (isRoot ? "Создатель и Главный Администратор проекта" : "Администратор проекта"))}</div>
                    <div class="text-xs text-gray-400 mt-1">${escapeHtmlAttr(cInfo.note || adm.bio || "Связь с администрацией справочника.")}</div>
                  </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <button type="button" onclick="openPublicProfileModal('${adm.id}')" class="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 text-xs font-bold">👁️ Профиль</button>
                  ${canEditThis ? `<button type="button" onclick="startEditAdminContact('${adm.id}')" class="px-3 py-1.5 bg-cp-cyan/15 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/50 text-xs font-bold">✏️ Мои ссылки</button>` : ""}
                </div>
              </div>
              <div class="pt-3 border-t border-gray-800 flex items-center flex-wrap gap-2">
                <span class="text-[11px] font-bold uppercase text-gray-400 mr-1">Соцсети и связь:</span>
                ${linksHtml}
              </div>
              ${editFormHtml}
            </div>
          `;
        }).join("");

        mainCol.innerHTML = `
          <div class="bg-cp-panel cp-border p-5 border-l-4 border-l-cp-red">
            <div class="text-[10px] font-bold uppercase tracking-widest text-cp-red">КОМАНДНЫЙ ЦЕНТР СПРАВОЧНИКА</div>
            <h2 class="font-display text-xl font-black text-white uppercase mt-0.5">📡 Контакты Администрации</h2>
            <p class="text-xs text-gray-400 mt-1">Список администраторов проекта и прямые ссылки для связи.</p>
          </div>
          <div class="space-y-4">${contactsCardsHtml}</div>
        `;
        return;
    }

    // 3. ВКЛАДКИ «НОВОСТИ» И «ПРАВИЛА САЙТА»
    const isNews = (activeHomeSubtab === "news");
    const postsList = isNews ? HOME_NEWS_LIST : HOME_RULES_LIST;
    const postToEdit = editingHomePostId
        ? postsList.find(p => p && String(p.id) === String(editingHomePostId))
        : null;

    const headerBannerHtml = isNews
        ? `<div class="bg-cp-panel cp-border p-5 border-l-4 border-l-cp-yellow"><div><div class="text-[10px] font-bold uppercase tracking-widest text-cp-yellow">ИНФОРМАЦИОННЫЙ КАНАЛ NIGHT CITY NETWORK</div><h2 class="font-display text-xl font-black text-white uppercase mt-0.5">📰 Новости и обновления сайта</h2><p class="text-xs text-gray-400 mt-1">Свежие патчноуты, добавленные книги-источники, новые разделы и объявления администрации.</p></div></div>`
        : `<div class="bg-cp-panel cp-border p-5 border-l-4 border-l-cp-cyan"><div><div class="text-[10px] font-bold uppercase tracking-widest text-cp-cyan">ДИРЕКТИВЫ БЕЗОПАСНОСТИ СЕТЕВОГО ДОЗОРА</div><h2 class="font-display text-xl font-black text-white uppercase mt-0.5">⚖️ Правила сайта и сообщества</h2><p class="text-xs text-gray-400 mt-1">Обязательный свод правил для всех пользователей терминала DataTerm.</p></div></div>`;

    const adminEditorHtml = !isAdmin ? "" : `
        <div id="homeAdminEditorBox" class="bg-cp-panel cp-border p-5 space-y-3.5 border-t-2 ${postToEdit ? 'border-t-cp-cyan' : 'border-t-cp-yellow'}">
          <div class="flex items-center justify-between border-b border-gray-800 pb-2.5">
            <div class="flex items-center gap-2">
              <span class="text-sm">${postToEdit ? '✏️' : '➕'}</span>
              <h3 class="font-display text-xs font-bold uppercase ${postToEdit ? 'text-cp-cyan' : 'text-cp-yellow'}">
                ${postToEdit ? `Редактирование записи: ${escapeHtmlAttr(postToEdit.title)}` : (isNews ? 'Опубликовать новую новость' : 'Добавить новое правило')}
              </h3>
            </div>
            ${postToEdit ? `<button type="button" onclick="cancelEditHomePost()" class="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-xs font-bold text-gray-200 border border-gray-600">✕ Отмена</button>` : ""}
          </div>
          <form onsubmit="saveHomePostSubmit(event)" class="space-y-3">
            <div>
              <label class="block text-[11px] text-gray-400 font-bold uppercase mb-1">Заголовок*:</label>
              <input type="text" id="homeEditorTitle" required value="${postToEdit ? escapeHtmlAttr(postToEdit.title) : ''}" placeholder="Введите заголовок..." class="w-full bg-cp-bg border border-gray-700 focus:border-cp-yellow px-3.5 py-2 text-xs text-white font-bold outline-none">
            </div>
            <div class="space-y-1.5">
              ${getRichToolbarHTML('homeEditorTextarea')}
              <textarea id="homeEditorTextarea" required rows="6" placeholder="Введите текст (обычные ссылки https://... станут кликабельными автоматически, либо используйте кнопку 🔗 Ссылка)..." class="w-full bg-cp-bg border border-gray-700 focus:border-cp-yellow p-3 text-xs text-gray-100 leading-relaxed outline-none">${postToEdit ? postToEdit.content : ''}</textarea>
            </div>
            <div class="flex items-center justify-end pt-1">
              <button type="submit" class="px-6 py-2.5 bg-cp-yellow hover:bg-yellow-300 text-black font-display font-black text-xs uppercase tracking-wider cp-clip">
                ${postToEdit ? '💾 Сохранить изменения' : (isNews ? '📢 Опубликовать новость' : '➕ Добавить правило')}
              </button>
            </div>
          </form>
        </div>
      `;

    const postsCardsHtml = postsList.length === 0
        ? `<div class="bg-cp-panel cp-border p-8 text-center text-xs text-gray-500">Записей пока нет.</div>`
        : postsList.map(post => {
            const charLen = getPlainTextLength(post.content);
            const isLong = charLen > 1000;
            const isExpanded = expandedHomePosts.has(post.id);
            const rawDisplayed = (isLong && !isExpanded) ? getTruncatedPreviewHtml(post.content, 1000) : post.content;
            const displayedContent = formatRichTextWithLinks(rawDisplayed);

            return `
              <article class="bg-cp-panel cp-border p-6 space-y-3.5 transition-all hover:border-gray-600">
                <div class="flex items-start justify-between gap-4 border-b border-gray-800 pb-3">
                  <div>
                    <div class="flex items-center gap-2 text-[11px] text-gray-400 mb-1">
                      <span class="px-2 py-0.5 text-[10px] font-bold uppercase ${isNews ? 'bg-cp-yellow/20 text-cp-yellow border border-cp-yellow/40' : 'bg-cp-cyan/20 text-cp-cyan border border-cp-cyan/40'}">${isNews ? 'НОВОСТЬ' : 'ПРАВИЛО'}</span>
                      <span>Автор: <b class="text-white">${dash(post.authorName)}</b></span>
                      <span>• ${dash(post.createdAt)}</span>
                    </div>
                    <h3 class="font-display text-lg font-black text-white">${post.title}</h3>
                  </div>
                  ${isAdmin ? `
                    <div class="flex items-center gap-1.5 shrink-0">
                      <button type="button" onclick="startEditHomePost('${post.id}')" class="px-3 py-1 bg-cp-cyan/15 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/50 text-xs font-bold">✏️ Ред.</button>
                      <button type="button" onclick="deleteHomePost('${post.id}')" class="px-2.5 py-1 bg-cp-red/15 hover:bg-cp-red text-cp-red hover:text-white border border-cp-red/50 text-xs font-bold">🗑️</button>
                    </div>
                  ` : ""}
                </div>
                <div class="text-xs text-gray-200 leading-relaxed whitespace-pre-line bg-cp-bg/70 border-l-2 ${isNews ? 'border-cp-yellow' : 'border-cp-cyan'} p-4">${displayedContent}</div>
                ${isLong ? `
                  <div class="pt-1 flex items-center justify-end">
                    <button type="button" onclick="toggleExpandHomePost('${post.id}')" class="px-4 py-1.5 bg-cp-bg hover:bg-cp-yellow text-cp-yellow hover:text-black border border-cp-yellow/60 text-xs font-bold uppercase transition-colors">
                      ${isExpanded ? '▲ Свернуть текст' : '▼ Развернуть полностью'}
                    </button>
                  </div>
                ` : ""}
              </article>
            `;
        }).join("");

    mainCol.innerHTML = `${headerBannerHtml}${adminEditorHtml}<div class="space-y-4">${postsCardsHtml}</div>`;
}

// =========================================================================
// ГЛОБАЛЬНЫЙ ПОИСК В ШАПКЕ САЙТА (ПО ВСЕМ РАЗДЕЛАМ СРАЗУ)
// =========================================================================

window.handleGlobalHeaderSearch = function (rawQuery) {
    const dropdown = document.getElementById("globalSearchDropdown");
    const clearBtn = document.getElementById("globalSearchClearBtn");
    if (!dropdown) return;

    const q = (rawQuery || "").trim().toLowerCase();
    if (clearBtn) clearBtn.classList.toggle("hidden", q.length === 0);

    if (q.length < 1) {
        dropdown.classList.add("hidden");
        dropdown.innerHTML = "";
        return;
    }

    const matches = [];
    Object.keys(SECTION_LABELS).forEach(secKey => {
        const list = DB[secKey] || [];
        list.forEach(item => {
            if (!item) return;
            const title = String(item.name || item.title || "").trim();
            const orig = String(item.origName || "").trim();
            const cat = String(item.category || item.subsection || "").trim();
            const book = String(item.book || "").trim();
            const desc = String(item.desc || item.summary || item.content || "").trim();

            const titleLow = title.toLowerCase();
            const origLow = orig.toLowerCase();
            const catLow = cat.toLowerCase();
            const descLow = desc.toLowerCase();

            // Приоритет сортировки: 3 — начинается с запроса, 2 — совпадение в названии/оригинале, 1 — в категории/описании
            let score = 0;
            if (titleLow.startsWith(q) || origLow.startsWith(q)) score = 3;
            else if (titleLow.includes(q) || origLow.includes(q)) score = 2;
            else if (catLow.includes(q) || descLow.includes(q) || book.toLowerCase().includes(q)) score = 1;

            if (score > 0) {
                matches.push({ secKey, item, title, orig, cat, book, score });
            }
        });
    });

    matches.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "ru"));
    const topMatches = matches.slice(0, 30);

    if (topMatches.length === 0) {
        dropdown.innerHTML = `<div class="p-4 text-center text-xs text-gray-500">По запросу «<b class="text-gray-300">${escapeHtmlAttr(rawQuery.trim())}</b>» ничего не найдено</div>`;
        dropdown.classList.remove("hidden");
        return;
    }

    dropdown.innerHTML = topMatches.map(m => {
        const secLabel = SECTION_LABELS[m.secKey] || m.secKey;
        const origSub = (m.orig && m.orig !== "—" && m.orig.toLowerCase() !== m.title.toLowerCase())
            ? `<span class="text-gray-500 font-normal ml-1">(${escapeHtmlAttr(m.orig)})</span>`
            : "";
        return `
          <div onclick="selectGlobalSearchResult('${m.secKey}', '${escapeHtmlAttr(m.item.id)}')"
            class="px-3.5 py-2.5 bg-cp-panel hover:bg-cp-cyan/15 cursor-pointer transition-colors flex items-center justify-between gap-3">
            <div class="min-w-0 flex-1">
              <div class="text-xs font-bold text-white truncate">${escapeHtmlAttr(m.title)}${origSub}</div>
              <div class="text-[10px] text-gray-400 truncate mt-0.5">
                <span class="text-cp-cyan font-bold">${secLabel}</span> • ${escapeHtmlAttr(m.cat || "—")}
              </div>
            </div>
            <span class="text-[10px] px-1.5 py-0.5 bg-cp-bg border border-gray-700 text-cp-yellow font-bold shrink-0">${escapeHtmlAttr(m.book || "CP20")}</span>
          </div>
        `;
    }).join("");

    dropdown.classList.remove("hidden");
};

window.selectGlobalSearchResult = function (sectionKey, itemId) {
    const dropdown = document.getElementById("globalSearchDropdown");
    if (dropdown) dropdown.classList.add("hidden");

    if (sectionKey === "rules") {
        activeRuleSubsection = "ALL";
        const ruleSearch = document.getElementById("ruleSearchInput");
        if (ruleSearch) ruleSearch.value = "";
        selectedRuleId = itemId;
        switchMainView("rules");
        setTimeout(() => {
            const activeRuleEl = document.querySelector(`#ruleArticlesList [onclick="openRuleArticle('${itemId}')"]`);
            if (activeRuleEl) activeRuleEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 60);
    } else {
        // Сбрасываем локальные фильтры вкладки, чтобы выбранная карточка гарантированно отобразилась в списке
        const sInp = document.getElementById("searchInput");
        if (sInp) sInp.value = "";
        ["subFilter", "extraFilter", "relFilter", "availFilter", "bookFilter"].forEach(fid => {
            const el = document.getElementById(fid);
            if (el) el.value = "ALL";
        });

        selectedItemId = itemId;
        switchMainView("catalog", sectionKey);
        setTimeout(() => {
            const activeCardEl = document.querySelector(`#catalogList [onclick="selectCatalogItem('${itemId}')"]`);
            if (activeCardEl) activeCardEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 60);
    }
};

window.clearGlobalHeaderSearch = function () {
    const inp = document.getElementById("globalHeaderSearchInput");
    const dropdown = document.getElementById("globalSearchDropdown");
    const clearBtn = document.getElementById("globalSearchClearBtn");
    if (inp) { inp.value = ""; inp.focus(); }
    if (clearBtn) clearBtn.classList.add("hidden");
    if (dropdown) { dropdown.classList.add("hidden"); dropdown.innerHTML = ""; }
};

window.handleGlobalSearchKeydown = function (ev) {
    if (ev.key === "Escape") {
        const dropdown = document.getElementById("globalSearchDropdown");
        if (dropdown) dropdown.classList.add("hidden");
    } else if (ev.key === "Enter") {
        const firstItem = document.querySelector("#globalSearchDropdown > div[onclick]");
        if (firstItem) {
            ev.preventDefault();
            firstItem.click();
        }
    }
};

// Закрываем выпадающий список глобального поиска при клике мимо него
document.addEventListener("click", (ev) => {
    const wrap = document.getElementById("globalSearchWrapper");
    const dropdown = document.getElementById("globalSearchDropdown");
    if (wrap && dropdown && !wrap.contains(ev.target)) {
        dropdown.classList.add("hidden");
    }
});

// =========================================================================
// СИСТЕМА ВНУТРЕННИХ ССЫЛОК НА КАРТОЧКИ («📌 УКАЗАТЬ») И HOVER-ПРЕВЬЮ СТАТОВ
// =========================================================================

let activeCardRefTargetTextareaId = null;
let cardHoverShowTimer = null;
let cardHoverHideTimer = null;
let currentlyHoveredRefKey = null;

window.openCardRefPickerModal = function (textareaId) {
    const area = document.getElementById(textareaId);
    if (!area) return;
    activeCardRefTargetTextareaId = textareaId;

    const start = area.selectionStart || 0;
    const end = area.selectionEnd || 0;
    const selectedText = area.value.slice(start, end).trim();

    const searchInp = document.getElementById("cardRefSearchInput");
    const labelInp = document.getElementById("cardRefCustomLabelInput");
    if (searchInp) searchInp.value = "";
    if (labelInp) labelInp.value = selectedText;

    renderCardRefPickerList();
    document.getElementById("cardRefPickerModal").classList.remove("hidden");
    setTimeout(() => { if (searchInp) searchInp.focus(); }, 40);
};

window.closeCardRefPickerModal = function () {
    document.getElementById("cardRefPickerModal").classList.add("hidden");
    activeCardRefTargetTextareaId = null;
};

window.renderCardRefPickerList = function () {
    const listEl = document.getElementById("cardRefPickerList");
    if (!listEl) return;
    const q = (document.getElementById("cardRefSearchInput")?.value || "").trim().toLowerCase();

    const items = [];
    Object.keys(SECTION_LABELS).forEach(secKey => {
        (DB[secKey] || []).forEach(item => {
            if (!item || !item.id) return;
            const title = String(item.name || item.title || "").trim();
            const orig = String(item.origName || "").trim();
            const cat = String(item.category || item.subsection || "").trim();
            const book = String(item.book || "").trim();
            if (!title) return;

            let score = 1;
            if (q) {
                const tLow = title.toLowerCase();
                const oLow = orig.toLowerCase();
                const cLow = cat.toLowerCase();
                const sLow = (SECTION_LABELS[secKey] || "").toLowerCase();
                if (tLow.startsWith(q) || oLow.startsWith(q)) score = 3;
                else if (tLow.includes(q) || oLow.includes(q)) score = 2;
                else if (cLow.includes(q) || sLow.includes(q) || book.toLowerCase().includes(q)) score = 1;
                else score = 0;
            }
            if (score > 0) items.push({ secKey, item, title, orig, cat, book, score });
        });
    });

    items.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "ru"));
    const limited = items.slice(0, 80);

    if (limited.length === 0) {
        listEl.innerHTML = `<div class="p-6 text-center text-xs text-gray-500">Карточки не найдены. Попробуйте другой запрос.</div>`;
        return;
    }

    listEl.innerHTML = limited.map(m => {
        const secLabel = SECTION_LABELS[m.secKey] || m.secKey;
        const origSub = (m.orig && m.orig !== "—" && m.orig.toLowerCase() !== m.title.toLowerCase())
            ? `<span class="text-gray-500 font-normal ml-1">(${escapeHtmlAttr(m.orig)})</span>` : "";
        return `
          <div onclick="insertSelectedCardReference('${m.secKey}', '${escapeHtmlAttr(m.item.id)}')"
            class="px-3.5 py-2.5 hover:bg-cp-cyan/15 cursor-pointer transition-colors flex items-center justify-between gap-3">
            <div class="min-w-0 flex-1">
              <div class="text-xs font-bold text-white truncate">${escapeHtmlAttr(m.title)}${origSub}</div>
              <div class="text-[10px] text-gray-400 truncate mt-0.5">
                <span class="text-cp-cyan font-bold">${secLabel}</span> • ${escapeHtmlAttr(m.cat || "—")}
              </div>
            </div>
            <span class="text-[10px] px-2 py-0.5 bg-cp-panel border border-gray-700 text-cp-yellow font-bold shrink-0">+ Выбрать</span>
          </div>
        `;
    }).join("");
};

window.insertSelectedCardReference = function (secKey, itemId) {
    const area = activeCardRefTargetTextareaId ? document.getElementById(activeCardRefTargetTextareaId) : null;
    const found = (DB[secKey] || []).find(x => x && x.id === itemId);
    if (!area || !found) {
        closeCardRefPickerModal();
        return;
    }

    const customLabel = (document.getElementById("cardRefCustomLabelInput")?.value || "").trim();
    const defaultTitle = String(found.name || found.title || "Карточка").trim();
    const finalLabel = customLabel || defaultTitle;

    const tagHtml = `<span data-card-ref="${secKey}:${itemId}">${finalLabel}</span>`;

    const start = area.selectionStart || 0;
    const end = area.selectionEnd || 0;
    const val = area.value;
    area.value = val.slice(0, start) + tagHtml + val.slice(end);

    closeCardRefPickerModal();
    area.focus();
    const newPos = start + tagHtml.length;
    area.setSelectionRange(newPos, newPos);
};

// Превращаем все теги <span data-card-ref="sec:id">...</span> в интерактивные синие ссылки с кликом и наведением
function upgradeCardRefsInHtml(htmlStr) {
    if (!htmlStr || typeof htmlStr !== "string") return htmlStr;
    return htmlStr.replace(
        /<span\s+data-card-ref=["']([^:"']+):([^"']+)["'][^>]*>([\s\S]*?)<\/span>/gi,
        (match, secKey, itemId, innerText) => {
            const safeSec = escapeHtmlAttr(secKey.trim());
            const safeId = escapeHtmlAttr(itemId.trim());
            return `<span data-card-ref="${safeSec}:${safeId}" onclick="event.stopPropagation(); navigateToCardReference('${safeSec}', '${safeId}')" onmouseenter="handleCardRefMouseEnter(event, '${safeSec}', '${safeId}')" onmouseleave="scheduleHideCardHoverPreview()" class="text-cp-cyan hover:text-cp-yellow underline decoration-cp-cyan/70 hover:decoration-cp-yellow underline-offset-4 font-bold cursor-pointer transition-colors bg-cp-cyan/10 hover:bg-cp-yellow/15 px-1 py-0.5 rounded-sm">${innerText}</span>`;
        }
    );
}

// Расширяем formatRichTextWithLinks, чтобы она автоматически обрабатывала и внутренние ссылки на карточки
const _prevFormatRichTextWithLinks = formatRichTextWithLinks;
formatRichTextWithLinks = function (rawText) {
    const withUrls = _prevFormatRichTextWithLinks(rawText);
    return upgradeCardRefsInHtml(withUrls);
};

// Прогоняем описания всех карточек и механик через форматировщик ссылок при рендере
const _prevRenderDetailCardForRefs = renderDetailCard;
renderDetailCard = function (item) {
    _prevRenderDetailCardForRefs(item);
    const box = document.getElementById("detailCard");
    if (box && box.innerHTML.includes("data-card-ref")) {
        box.innerHTML = upgradeCardRefsInHtml(box.innerHTML);
    }
};

const _prevRenderRulesSidebarForRefs = renderRulesSidebar;
renderRulesSidebar = function () {
    _prevRenderRulesSidebarForRefs();
    const areaEl = document.getElementById("ruleContentArea");
    if (areaEl && areaEl.innerHTML.includes("data-card-ref")) {
        areaEl.innerHTML = upgradeCardRefsInHtml(areaEl.innerHTML);
    }
};

window.navigateToCardReference = function (secKey, itemId) {
    hideCardHoverPreviewImmediately();
    if (typeof window.selectGlobalSearchResult === "function") {
        window.selectGlobalSearchResult(secKey, itemId);
        return;
    }
    if (secKey === "rules") {
        selectedRuleId = itemId;
        switchMainView("rules");
    } else {
        selectedItemId = itemId;
        switchMainView("catalog", secKey);
    }
};

// --- ГЕНЕРАТОР КРАТКОЙ СПРАВКИ ПО СТАТАМ КАРТОЧКИ (БЕЗ БЛОКА ОПИСАНИЯ) ---
function buildCardStatsPreviewHTML(secKey, item) {
    const secLabel = SECTION_LABELS[secKey] || secKey;
    const title = dash(item.name || item.title);
    const orig = (item.origName && item.origName !== "—" && item.origName !== item.name) ? item.origName : "";
    const cat = dash(item.category || item.subsection);
    const book = dash(item.book);

    let bodyHtml = "";

    if (secKey === "roles") {
        const salTable = resolveRoleSalaryTable(item);
        const skillsArr = Array.isArray(item.skills) ? item.skills.filter(s => s && s !== "—") : [];
        bodyHtml = `
          <div class="grid grid-cols-2 gap-2 text-center">
            <div class="bg-cp-bg border border-gray-800 p-2">
              <div class="text-[9px] text-gray-400 uppercase">⚡ Способность</div>
              <div class="font-bold text-cp-cyan mt-0.5">${dash(item.ability)} (${dash(item.stat)})</div>
            </div>
            <div class="bg-cp-bg border border-gray-800 p-2">
              <div class="text-[9px] text-gray-400 uppercase">💰 Зарплата</div>
              <div class="font-bold text-cp-green mt-0.5">${dash(salTable.lvl1_5)} — ${dash(salTable.lvl10)}</div>
            </div>
          </div>
          ${skillsArr.length > 0 ? `<div class="bg-cp-bg border border-gray-800 p-2 text-[11px]"><span class="text-cp-yellow font-bold uppercase text-[10px]">Навыки:</span> <span class="text-gray-200">${skillsArr.join(", ")}</span></div>` : ""}
        `;
    } else if (secKey === "corporations") {
        bodyHtml = `
          <div class="grid grid-cols-2 gap-2">
            <div class="bg-cp-bg border border-gray-800 p-2"><div class="text-[9px] text-gray-400 uppercase">📍 Штаб-квартира</div><div class="font-bold text-cp-yellow mt-0.5">${dash(item.hq)}</div></div>
            <div class="bg-cp-bg border border-gray-800 p-2"><div class="text-[9px] text-gray-400 uppercase">👥 Сотрудники</div><div class="font-bold text-cp-cyan mt-0.5">${dash(item.employees)}</div></div>
            <div class="bg-cp-bg border border-gray-800 p-2"><div class="text-[9px] text-gray-400 uppercase">🪖 Войска</div><div class="font-bold text-cp-red mt-0.5">${dash(item.soldiers)}</div></div>
            <div class="bg-cp-bg border border-gray-800 p-2"><div class="text-[9px] text-gray-400 uppercase">🕶️ Оперативники</div><div class="font-bold text-purple-400 mt-0.5">${dash(item.operatives)}</div></div>
          </div>
        `;
    } else if (secKey === "rules") {
        bodyHtml = item.summary
            ? `<div class="bg-cp-bg border-l-2 border-cp-yellow p-2.5 text-gray-200 leading-relaxed"><b>Суть механики:</b> ${item.summary}</div>`
            : `<div class="text-gray-400 italic">Нажмите на ссылку, чтобы открыть полный текст игровой механики.</div>`;
    } else {
        const isDeck = secKey === "netrunning" && (item.itemKind === "deck" || item.category === "Кибердеки");
        const schemaKey = secKey === "netrunning" ? (isDeck ? "net_deck" : "net_program") : secKey;
        const fields = (SCHEMAS[schemaKey] || []).filter(f => f.stat);

        const statsCells = fields.map(f => {
            const colorCls = f.c || "text-white";
            const valDisplay = (secKey === "vehicles" && f.k === "os") ? formatVehicleArmorOS(item.os) : dash(item[f.k]);
            return `
              <div class="bg-cp-bg border border-gray-800 p-1.5 text-center">
                <div class="text-[9px] text-gray-400 truncate">${f.stat}</div>
                <div class="text-[11px] font-bold ${colorCls} truncate mt-0.5">${valDisplay}</div>
              </div>
            `;
        }).join("");

        let extraCompactHtml = "";
        if (secKey === "borging" && item.borgStats) {
            const st = item.borgStats;
            const cyberNames = Array.isArray(item.cyberwareList) ? item.cyberwareList.map(c => c.name).filter(Boolean) : [];
            extraCompactHtml = `
              <div class="grid grid-cols-4 gap-1.5 text-center bg-cp-bg border border-gray-800 p-2">
                <div><div class="text-[9px] text-gray-400">РЕФ</div><b class="text-white">${dash(st.ref)}</b></div>
                <div><div class="text-[9px] text-gray-400">ПЕР</div><b class="text-cp-cyan">${dash(st.ma)}</b></div>
                <div><div class="text-[9px] text-gray-400">ТЕЛО</div><b class="text-cp-yellow">${dash(st.body)}</b></div>
                <div><div class="text-[9px] text-gray-400">Удар/Пинок</div><b class="text-cp-red">${dash(st.punch)}/${dash(st.kick)}</b></div>
              </div>
              ${cyberNames.length > 0 ? `<div class="bg-cp-bg border-l-2 border-purple-500 p-2 text-[11px]"><b class="text-purple-400 uppercase text-[10px]">Системы:</b> <span class="text-gray-200">${cyberNames.join(", ")}</span></div>` : ""}
            `;
        } else if (secKey === "acpa") {
            const wNames = Array.isArray(item.acpaWeaponsList) ? item.acpaWeaponsList.map(w => `${w.name} (${dash(w.damage)})`).filter(Boolean) : [];
            const gNames = Array.isArray(item.acpaGearList) ? item.acpaGearList.map(g => g.name).filter(Boolean) : [];
            extraCompactHtml = `
              ${wNames.length > 0 ? `<div class="bg-cp-bg border-l-2 border-cp-red p-2 text-[11px]"><b class="text-cp-red uppercase text-[10px]">Вооружение:</b> <span class="text-gray-200">${wNames.join(", ")}</span></div>` : ""}
              ${gNames.length > 0 ? `<div class="bg-cp-bg border-l-2 border-cp-cyan p-2 text-[11px]"><b class="text-cp-cyan uppercase text-[10px]">Оснащение:</b> <span class="text-gray-200">${gNames.join(", ")}</span></div>` : ""}
            `;
        } else if (secKey === "characters") {
            extraCompactHtml = `
              <div class="grid grid-cols-5 gap-1 text-center bg-cp-bg border border-gray-800 p-1.5 text-[10px]">
                <div><span class="text-gray-400">ИНТ</span> <b class="text-cp-cyan">${dash(item.stat_int)}</b></div>
                <div><span class="text-gray-400">РЕФ</span> <b class="text-cp-cyan">${dash(item.stat_ref)}</b></div>
                <div><span class="text-gray-400">ТЕХ</span> <b class="text-cp-cyan">${dash(item.stat_tech)}</b></div>
                <div><span class="text-gray-400">КРУТ</span> <b class="text-cp-cyan">${dash(item.stat_cool)}</b></div>
                <div><span class="text-gray-400">ТЕЛО</span> <b class="text-cp-cyan">${dash(item.stat_body)}</b></div>
              </div>
            `;
        } else if (secKey === "vehicles" && item.specialEquipment && item.specialEquipment !== "—") {
            extraCompactHtml = `<div class="bg-cp-bg border-l-2 border-cp-cyan p-2 text-[11px] text-gray-200 line-clamp-2"><b class="text-cp-cyan">Оснащение:</b> ${item.specialEquipment}</div>`;
        } else if (isDeck) {
            const opts = Array.isArray(item.deckOptions) && item.deckOptions.length > 0 ? item.deckOptions.join(", ") : "Стандарт";
            extraCompactHtml = `<div class="bg-cp-bg border-l-2 border-cp-cyan p-2 text-[11px] text-gray-200"><b class="text-cp-cyan">Опции деки:</b> ${opts}</div>`;
        }

        bodyHtml = `
          ${statsCells ? `<div class="grid grid-cols-3 gap-1.5">${statsCells}</div>` : ""}
          ${extraCompactHtml}
        `;
    }

    return `
      <div class="space-y-2.5">
        <div class="border-b border-gray-800 pb-2 flex items-start justify-between gap-2">
          <div class="min-w-0">
            <div class="text-[10px] font-bold uppercase text-cp-cyan truncate">${secLabel} • ${cat}</div>
            <div class="font-display font-black text-sm text-white truncate mt-0.5">${title}</div>
            ${orig ? `<div class="text-[10px] text-gray-400 truncate">${escapeHtmlAttr(orig)}</div>` : ""}
          </div>
          <span class="px-1.5 py-0.5 bg-cp-bg border border-gray-700 text-[10px] font-bold text-cp-yellow shrink-0">[${book}]</span>
        </div>
        ${bodyHtml}
        <div class="pt-1 border-t border-gray-800/80 flex items-center justify-between text-[10px] text-gray-400">
          <span>Кликните по ссылке для перехода к карточке</span>
          <span class="text-cp-cyan font-bold">↗ Открыть</span>
        </div>
      </div>
    `;
}

window.handleCardRefMouseEnter = function (ev, secKey, itemId) {
    clearTimeout(cardHoverHideTimer);
    clearTimeout(cardHoverShowTimer);

    const targetEl = ev.currentTarget || ev.target;
    const rect = targetEl.getBoundingClientRect();

    cardHoverShowTimer = setTimeout(() => {
        const item = (DB[secKey] || []).find(x => x && x.id === itemId);
        const pop = document.getElementById("cardHoverPreviewPopover");
        if (!item || !pop) return;

        currentlyHoveredRefKey = `${secKey}:${itemId}`;
        pop.innerHTML = buildCardStatsPreviewHTML(secKey, item);
        pop.classList.remove("hidden");

        const popWidth = pop.offsetWidth || 420;
        const popHeight = pop.offsetHeight || 220;

        let left = rect.left;
        if (left + popWidth > window.innerWidth - 16) {
            left = Math.max(12, window.innerWidth - popWidth - 16);
        }

        let top = rect.bottom + 8;
        if (top + popHeight > window.innerHeight - 12) {
            top = Math.max(12, rect.top - popHeight - 8);
        }

        pop.style.left = `${Math.round(left)}px`;
        pop.style.top = `${Math.round(top)}px`;
    }, 320);
};

window.keepCardHoverPreviewAlive = function () {
    clearTimeout(cardHoverHideTimer);
};

window.scheduleHideCardHoverPreview = function () {
    clearTimeout(cardHoverShowTimer);
    cardHoverHideTimer = setTimeout(() => {
        hideCardHoverPreviewImmediately();
    }, 180);
};

function hideCardHoverPreviewImmediately() {
    clearTimeout(cardHoverShowTimer);
    clearTimeout(cardHoverHideTimer);
    currentlyHoveredRefKey = null;
    const pop = document.getElementById("cardHoverPreviewPopover");
    if (pop) pop.classList.add("hidden");
}

// =========================================================================
// СИСТЕМА КОРЗИНЫ ПОКУПОК (ПОДСЧЁТ ЦЕНЫ, КОЛИЧЕСТВО +/- И ПОКУПКА)
// =========================================================================

const STORAGE_CART_KEY = "cp2020_shopping_cart_v1";
let SHOPPING_CART = []; // [{ sectionKey, itemId, qty }]

function loadShoppingCartFromStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_CART_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                SHOPPING_CART = parsed.filter(x => x && x.itemId && x.qty > 0);
            }
        }
    } catch (e) { SHOPPING_CART = []; }
    updateCartHeaderUI();
}

function saveShoppingCartToStorage() {
    try {
        localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(SHOPPING_CART));
    } catch (e) { }
    updateCartHeaderUI();
}

// Умное извлечение числовой цены в евробаксах из строки вида "1,500 eb", "50 – 200 eb", "40 eb / доза"
function parseItemUnitPriceEb(costStr) {
    if (!costStr || costStr === "—") return 0;
    const clean = String(costStr).replace(/\s+/g, "").replace(/,/g, "");
    const match = clean.match(/\d+(\.\d+)?/);
    if (!match) return 0;
    const val = parseFloat(match[0]);
    return isNaN(val) ? 0 : val;
}

function formatEbAmount(num) {
    const rounded = Math.round(num * 100) / 100;
    return rounded.toLocaleString("ru-RU") + " eb";
}

function isItemInCart(itemId) {
    return SHOPPING_CART.some(c => c.itemId === itemId);
}

window.toggleCartItem = function (sectionKey, itemId) {
    const idx = SHOPPING_CART.findIndex(c => c.itemId === itemId);
    if (idx !== -1) {
        SHOPPING_CART.splice(idx, 1);
    } else {
        SHOPPING_CART.push({ sectionKey, itemId, qty: 1 });
    }
    saveShoppingCartToStorage();
    renderCartDropdownList();
    if (activeMainView === "catalog") renderCatalog();
};

window.changeCartItemQty = function (itemId, delta) {
    const entry = SHOPPING_CART.find(c => c.itemId === itemId);
    if (!entry) return;
    const nextQty = (Number(entry.qty) || 1) + delta;
    if (nextQty <= 0) {
        SHOPPING_CART = SHOPPING_CART.filter(c => c.itemId !== itemId);
    } else {
        entry.qty = Math.min(9999, nextQty);
    }
    saveShoppingCartToStorage();
    renderCartDropdownList();
    if (activeMainView === "catalog") renderCatalog();
};

window.setCartItemQtyDirect = function (itemId, rawVal) {
    const entry = SHOPPING_CART.find(c => c.itemId === itemId);
    if (!entry) return;
    const parsed = parseInt(String(rawVal).replace(/[^\d]/g, ""), 10);
    if (isNaN(parsed) || parsed <= 0) {
        entry.qty = 1;
    } else {
        entry.qty = Math.min(9999, parsed);
    }
    saveShoppingCartToStorage();
    renderCartDropdownList();
};

window.removeCartItemById = function (itemId) {
    SHOPPING_CART = SHOPPING_CART.filter(c => c.itemId !== itemId);
    saveShoppingCartToStorage();
    renderCartDropdownList();
    if (activeMainView === "catalog") renderCatalog();
};

window.clearShoppingCart = function () {
    if (SHOPPING_CART.length === 0) return;
    SHOPPING_CART = [];
    saveShoppingCartToStorage();
    renderCartDropdownList();
    if (activeMainView === "catalog") renderCatalog();
};

window.checkoutShoppingCart = function () {
    if (SHOPPING_CART.length === 0) return;
    SHOPPING_CART = [];
    saveShoppingCartToStorage();
    renderCartDropdownList();
    closeCartDropdown();
    if (activeMainView === "catalog") renderCatalog();
};

window.toggleCartDropdown = function (e) {
    if (e) e.stopPropagation();
    closeUserDropdown();
    closeNotifDropdown();
    const menu = document.getElementById("cartDropdownMenu");
    if (!menu) return;
    if (menu.classList.contains("hidden")) {
        renderCartDropdownList();
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
};

window.closeCartDropdown = function () {
    const menu = document.getElementById("cartDropdownMenu");
    if (menu) menu.classList.add("hidden");
};

function calculateCartTotals() {
    let totalCount = 0;
    let totalEb = 0;
    const resolvedItems = [];

    SHOPPING_CART.forEach(entry => {
        const found = entry.customItem ? null : findItemAcrossAllSections(entry.itemId);
        const itemObj = entry.customItem || (found && found.item);
        const secKey = entry.customItem ? (entry.sectionKey || "fashion") : (found ? found.section : entry.sectionKey);
        if (!itemObj) return;
        const unitPrice = parseItemUnitPriceEb(itemObj.cost);
        const qty = Math.max(1, Number(entry.qty) || 1);
        const lineTotal = unitPrice * qty;
        totalCount += qty;
        totalEb += lineTotal;
        resolvedItems.push({ sectionKey: secKey, item: itemObj, qty, unitPrice, lineTotal });
    });

    return { totalCount, totalEb, resolvedItems };
}

function updateCartHeaderUI() {
    const headerBtn = document.getElementById("cartHeaderBtn");
    const buyBtn = document.getElementById("cartBuySubmitBtn");
    const dropdownBadge = document.getElementById("cartDropdownCountBadge");
    const { totalCount, totalEb } = calculateCartTotals();

    // Обновляем плашку в шапке выпадашки (если она есть в index.html)
    if (dropdownBadge) {
        dropdownBadge.textContent = `Товаров: ${totalCount}`;
    }

    // Если в index.html остался старый бейдж на кнопке — прячем его навсегда
    const oldBtnBadge = document.getElementById("cartHeaderBadge");
    if (oldBtnBadge) {
        oldBtnBadge.classList.add("hidden");
    }

    // Подсвечиваем саму кнопку Корзины зелёным, когда внутри есть товары
    if (headerBtn) {
        headerBtn.className = totalCount > 0
            ? "h-10 px-3 bg-cp-green/15 border border-cp-green text-cp-green hover:bg-cp-green hover:text-black flex items-center gap-2 transition-all relative select-none shadow-[0_0_14px_rgba(0,255,102,0.35)]"
            : "h-10 px-3 bg-cp-panel border border-gray-700 hover:border-cp-green text-gray-400 hover:text-white flex items-center gap-2 transition-all relative select-none";
    }

    if (buyBtn) {
        buyBtn.textContent = `💳 Купить (${formatEbAmount(totalEb)})`;
    }
}

function renderCartDropdownList() {
    const listEl = document.getElementById("cartItemsList");
    updateCartHeaderUI();
    if (!listEl) return;

    const { totalCount, totalEb, resolvedItems } = calculateCartTotals();
    if (resolvedItems.length === 0) {
        listEl.innerHTML = `<div class="p-6 text-center text-xs text-gray-500">Ваша корзина пуста. Нажимайте кнопку <b class="text-cp-green">«🛒 Купить»</b> в карточках оружия, брони, имплантов или услуг! Важно: применимо не ко всем товарам, спрашивайте у своего мастера!</div>`;
        return;
    }

    // Верхняя инфо-строка прямо внутри выпадашки (гарантированно показывает живое число товаров!)
    const summaryBarHtml = `
      <div class="px-3.5 py-2 bg-black/50 border-b border-gray-800 flex items-center justify-between text-[11px]">
        <span class="text-gray-400">Всего в корзине: <b class="text-cp-green font-mono text-xs">${totalCount} шт.</b> <span class="text-gray-500">(позиций: ${resolvedItems.length})</span></span>
        <span class="text-gray-400">Итого: <b class="text-cp-yellow font-mono">${formatEbAmount(totalEb)}</b></span>
      </div>
    `;

    const itemsHtml = resolvedItems.map(({ sectionKey, item, qty, unitPrice, lineTotal }) => {
        const secLabel = SECTION_LABELS[sectionKey] || sectionKey;
        const priceNote = unitPrice > 0 ? formatEbAmount(lineTotal) : dash(item.cost);
        return `
          <div class="p-3 bg-cp-panel hover:bg-cp-card/90 transition-colors flex items-center justify-between gap-3">
            <div onclick="openCartItemCard('${sectionKey}', '${escapeHtmlAttr(item.id)}')" class="min-w-0 flex-1 cursor-pointer group">
              <div class="text-[10px] text-cp-cyan font-bold uppercase truncate">${secLabel} • ${dash(item.category)}</div>
              <div class="text-xs font-bold text-white group-hover:text-cp-yellow truncate mt-0.5">${escapeHtmlAttr(item.name || item.title)}</div>
              <div class="text-[11px] text-gray-400 mt-0.5">
                Цена за шт.: <span class="text-gray-200 font-semibold">${dash(item.cost)}</span>
              </div>
            </div>

            <div class="flex flex-col items-end gap-1.5 shrink-0">
              <div class="flex items-center gap-1">
                <button type="button" onclick="changeCartItemQty('${escapeHtmlAttr(item.id)}', -1)"
                  class="w-6 h-6 bg-cp-bg hover:bg-cp-red text-gray-200 hover:text-white border border-gray-700 font-bold text-xs flex items-center justify-center transition-colors">−</button>
                <input type="text" value="${qty}"
                  onchange="setCartItemQtyDirect('${escapeHtmlAttr(item.id)}', this.value)"
                  class="w-11 h-6 bg-cp-bg border border-gray-700 focus:border-cp-cyan text-center text-xs font-bold text-white outline-none">
                <button type="button" onclick="changeCartItemQty('${escapeHtmlAttr(item.id)}', 1)"
                  class="w-6 h-6 bg-cp-bg hover:bg-cp-green text-gray-200 hover:text-black border border-gray-700 font-bold text-xs flex items-center justify-center transition-colors">+</button>
                <button type="button" onclick="removeCartItemById('${escapeHtmlAttr(item.id)}')" title="Убрать из корзины"
                  class="w-6 h-6 bg-cp-red/15 hover:bg-cp-red text-cp-red hover:text-white border border-cp-red/40 text-xs font-bold flex items-center justify-center ml-1 transition-colors">✕</button>
              </div>
              <div class="text-xs font-display font-bold text-cp-green">${priceNote}</div>
            </div>
          </div>
        `;
    }).join("");

    listEl.innerHTML = summaryBarHtml + itemsHtml;
}

window.openCartItemCard = function (sectionKey, itemId) {
    closeCartDropdown();
    if (typeof window.selectGlobalSearchResult === "function") {
        window.selectGlobalSearchResult(sectionKey, itemId);
    } else {
        selectedItemId = itemId;
        switchMainView("catalog", sectionKey);
    }
};

// Закрываем корзину при клике вне её области
document.addEventListener("click", (ev) => {
    const cartWrap = document.getElementById("cartCornerWrapper");
    if (cartWrap && !cartWrap.contains(ev.target)) {
        closeCartDropdown();
    }
});

setTimeout(loadShoppingCartFromStorage, 50);

// =========================================================================
// РЕЖИМ «ОТ СООБЩЕСТВА», ПРЕДЛОЖКА ИГРОКОВ И МОДЕРАЦИЯ АДМИНИСТРАЦИЕЙ
// =========================================================================

let isCommunityMode = false;
let isPlayerSubmissionMode = false;
let selectedPendingSubId = null;

function ensureCommunityQueueArray() {
    ensureMetaArraysInCategories();
    if (!Array.isArray(CATEGORIES._pendingSubmissions)) {
        CATEGORIES._pendingSubmissions = [];
    }
}

function isItemMatchingCurrentMode(item) {
    if (!item) return false;
    return isCommunityMode ? Boolean(item.isCommunity) : !item.isCommunity;
}

function updateCommunityToggleUI() {
    const box = document.getElementById("communityModeToggleBox");
    const track = document.getElementById("communityToggleTrack");
    const knob = document.getElementById("communityToggleKnob");
    const label = document.getElementById("communityToggleLabel");
    const pendingCntEl = document.getElementById("cnt-pending-mod");

    ensureCommunityQueueArray();
    if (pendingCntEl) {
        pendingCntEl.textContent = CATEGORIES._pendingSubmissions.length;
    }

    if (!box || !track || !knob || !label) return;
    if (isCommunityMode) {
        box.className = "flex items-center gap-2.5 px-3 py-1 bg-cp-purple/20 border border-cp-purple cursor-pointer select-none transition-all shrink-0 shadow-[0_0_12px_rgba(184,41,255,0.35)]";
        track.className = "w-9 h-4 bg-black border border-cp-purple relative flex items-center p-0.5 transition-all";
        knob.className = "w-3 h-3 bg-cp-yellow shadow-[0_0_6px_#fcee0a] transition-transform duration-200 translate-x-4";
        label.className = "font-display font-bold text-[11px] uppercase tracking-wider text-cp-yellow whitespace-nowrap";
    } else {
        box.className = "flex items-center gap-2.5 px-3 py-1 bg-cp-panel border border-gray-700 hover:border-cp-purple cursor-pointer select-none transition-all shrink-0";
        track.className = "w-9 h-4 bg-cp-bg border border-gray-600 relative flex items-center p-0.5 transition-all";
        knob.className = "w-3 h-3 bg-gray-400 transition-transform duration-200 translate-x-0";
        label.className = "font-display font-bold text-[11px] uppercase tracking-wider text-gray-300 whitespace-nowrap";
    }
}

window.toggleCommunityMode = function () {
    isCommunityMode = !isCommunityMode;
    selectedItemId = null;
    selectedRuleId = null;
    updateCommunityToggleUI();

    // Закрываем открытый глобальный поиск и пересчитываем его под выбранную базу
    const gInp = document.getElementById("globalHeaderSearchInput");
    if (gInp && gInp.value.trim() !== "") {
        window.handleGlobalHeaderSearch(gInp.value);
    }

    if (activeMainView === "catalog") {
        setupCatalogFilters();
        renderCatalog();
    } else if (activeMainView === "rules") {
        renderRulesView();
    } else if (activeMainView === "home") {
        updateCounts();
    }
};

// Проксируем DB во время рендера каталога, правил и глобального поиска, чтобы разделять Официальную базу и базу От сообщества
function withModeFilteredDB(callback) {
    const backup = {};
    Object.keys(SECTION_LABELS).forEach(sec => {
        backup[sec] = DB[sec] || [];
        DB[sec] = backup[sec].filter(it => isItemMatchingCurrentMode(it));
    });
    try {
        return callback();
    } finally {
        Object.keys(SECTION_LABELS).forEach(sec => {
            DB[sec] = backup[sec];
        });
    }
}

const _origRenderCatalogForComm = renderCatalog;
renderCatalog = function () {
    withModeFilteredDB(() => {
        _origRenderCatalogForComm();
    });
    injectCommunityProposeButtonInCatalog();
    updateCommunityToggleUI();
};

const _origRenderRulesSidebarForComm = renderRulesSidebar;
renderRulesSidebar = function () {
    withModeFilteredDB(() => {
        _origRenderRulesSidebarForComm();
    });
    injectCommunityProposeButtonInRules();
    updateCommunityToggleUI();
};

const _origGlobalSearchForComm = window.handleGlobalHeaderSearch;
window.handleGlobalHeaderSearch = function (rawQuery) {
    withModeFilteredDB(() => {
        _origGlobalSearchForComm(rawQuery);
    });
};

function injectCommunityProposeButtonInCatalog() {
    const container = document.getElementById("catalogList");
    if (!container) return;
    const oldBtn = document.getElementById("communityProposeCatalogBtn");
    if (oldBtn) oldBtn.remove();

    // Если включён режим «От сообщества» и пользователь НЕ админ (у админа уже есть своя жёлтая кнопка), показываем кнопку предложки
    if (isCommunityMode && !isCurrentUserAdmin()) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.id = "communityProposeCatalogBtn";
        btn.onclick = () => window.openCommunitySubmissionBuilder(activeCatalogTab);
        btn.className = "w-full py-2.5 px-4 mb-1 bg-cp-purple/15 hover:bg-cp-purple text-cp-cyan hover:text-white border border-dashed border-cp-purple font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(184,41,255,0.2)]";
        btn.innerHTML = `<span>➕ Предложить карточку от сообщества в раздел «${SECTION_LABELS[activeCatalogTab] || activeCatalogTab}»</span>`;
        container.prepend(btn);
    }
}

function injectCommunityProposeButtonInRules() {
    const addRuleBtn = document.getElementById("addRuleTopBtn");
    if (!addRuleBtn) return;
    if (isCurrentUserAdmin()) {
        addRuleBtn.classList.remove("hidden");
        addRuleBtn.textContent = "+ Своя механика";
        addRuleBtn.onclick = openRuleCreatorModal;
    } else if (isCommunityMode) {
        addRuleBtn.classList.remove("hidden");
        addRuleBtn.textContent = "+ Предложить механику";
        addRuleBtn.onclick = () => window.openCommunitySubmissionBuilder("rules");
    } else {
        addRuleBtn.classList.add("hidden");
    }
}

// Открытие конструктора для обычного игрока (или админа) в режиме создания карточки от сообщества
window.openCommunitySubmissionBuilder = function (sectionKey) {
    const u = getCurrentUser();
    if (!u) {
        if (confirm("Чтобы предлагать свои карточки в раздел «От сообщества», необходимо войти в аккаунт. Перейти ко входу?")) {
            switchMainView("profile");
        }
        return;
    }

    isPlayerSubmissionMode = !isCurrentUserAdmin();
    const targetSec = sectionKey || activeCatalogTab || "roles";
    editingItemId = null;
    activeBuilderType = targetSec;

    // Показываем окно view-admin, но если это обычный игрок — прячем админскую шапку с чужими вкладками
    activeMainView = "admin";
    ["home", "catalog", "rules", "profile", "admin"].forEach(v => {
        const el = document.getElementById("view-" + v);
        if (el) el.classList.toggle("hidden", v !== "admin");
    });

    const adminTopHeader = document.querySelector("#view-admin > section:first-child");
    if (adminTopHeader) {
        adminTopHeader.classList.toggle("hidden", !isCurrentUserAdmin());
    }

    ["builder", "moderation", "categories", "books", "users", "logs", "backup"].forEach(s => {
        const el = document.getElementById("admin-sub-" + s);
        if (el) el.classList.toggle("hidden", s !== "builder");
    });

    setBuilderType(targetSec, null);

    if (!isCurrentUserAdmin()) {
        document.getElementById("builderHeaderTitle").textContent = "🌐 Предложить карточку от сообщества";
        document.getElementById("builderSubmitBtn").textContent = "📨 Отправить карточку на модерацию администрации";
        const cancelBtn = document.getElementById("cancelEditBtn");
        if (cancelBtn) {
            cancelBtn.classList.remove("hidden");
            cancelBtn.textContent = "← Вернуться в справочник";
            cancelBtn.onclick = () => {
                isPlayerSubmissionMode = false;
                switchMainView(targetSec === "rules" ? "rules" : "catalog", targetSec === "rules" ? null : targetSec);
            };
        }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Расширяем switchAdminSubtab для поддержки вкладки "moderation" и возврата шапки админа
const _origSwitchAdminSubtabForMod = switchAdminSubtab;
switchAdminSubtab = function (subtab) {
    const adminTopHeader = document.querySelector("#view-admin > section:first-child");
    if (adminTopHeader && isCurrentUserAdmin()) adminTopHeader.classList.remove("hidden");

    const modSec = document.getElementById("admin-sub-moderation");
    if (modSec) modSec.classList.toggle("hidden", subtab !== "moderation");

    _origSwitchAdminSubtabForMod(subtab);
    if (subtab === "moderation") {
        renderAdminModerationView();
    }
    updateCommunityToggleUI();
};

// Перехватываем сохранение в Конструкторе (saveBuilderItem):
// - Если сохраняет обычный игрок -> карточка уходит в очередь модерации + уведомления админам
// - Если сохраняет Админ при включённом тумблере «От сообщества» -> публикуется сразу в базу сообщества
const _origSaveBuilderItemForComm = saveBuilderItem;
saveBuilderItem = async function (e) {
    if (e) e.preventDefault();
    const u = getCurrentUser();
    if (!u) return;

    // Если это обычный пользователь (не админ) — формируем заявку на модерацию
    if (!isCurrentUserAdmin()) {
        ensureCommunityQueueArray();

        const pendingUrlInp = document.getElementById("builderMultiImageUrlInput");
        if (pendingUrlInp && pendingUrlInp.value.trim() !== "") {
            const pVal = pendingUrlInp.value.trim();
            if (validateImageUrlForRole(pVal) && !builderGalleryImages.includes(pVal)) {
                builderGalleryImages.push(pVal);
            }
            pendingUrlInp.value = "";
        }

        if (activeBuilderType === "roles") window.updateHiddenRoleSalaryRangeInput();
        if (activeBuilderType === "characters") syncCharBuilderStateFromDOM();
        if (activeBuilderType === "borging") syncBorgBuilderFromDOM();
        if (activeBuilderType === "acpa") syncAcpaBuilderFromDOM();

        const fd = new FormData(e.target);
        const raw = Object.fromEntries(fd.entries());
        const data = {};
        const freeTextFields = ["desc", "abilityDesc", "content", "summary", "specialEquipment", "charSkills", "ammoCasing"];

        Object.keys(raw).forEach(k => {
            if (k === "deckTypeCheck" || k === "deckOptionCheck" || k.startsWith("b_") || k.startsWith("s_")) return;
            const val = String(raw[k] || "").trim();
            data[k] = freeTextFields.includes(k) ? val : (val === "" ? "—" : val);
        });

        data.id = "comm-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
        data.origName = data.origName && data.origName !== "—" ? data.origName : data.name;
        data.isUser = true;
        data.isCommunity = true;
        data.authorId = u.id;
        data.authorName = u.displayName;

        if (activeBuilderType === "characters") {
            const namedCheck = document.getElementById("builderNamedCharCheck");
            data.isNamed = namedCheck ? Boolean(namedCheck.checked) : false;
            data.charWeaponsList = charBuilderState.weaponsList.filter(w => w.name.trim() !== "" || w.desc.trim() !== "" || w.damage.trim() !== "").map(w => ({
                name: dash(w.name), type: dash(w.type), skr: dash(w.skr), to: dash(w.to), damage: dash(w.damage),
                mag: dash(w.mag), sko: dash(w.sko), range: dash(w.range), nad: dash(w.nad), cost: dash(w.cost), desc: w.desc.trim()
            }));
            const cleanSimple = (arr) => (arr || []).filter(x => x.name.trim() !== "" || x.desc.trim() !== "").map(x => ({ name: dash(x.name), desc: x.desc.trim() }));
            data.charCyberwareList = cleanSimple(charBuilderState.cyberwareList);
            data.charArmorList = cleanSimple(charBuilderState.armorList);
            data.charGearList = cleanSimple(charBuilderState.gearList);
        }

        if (activeBuilderType === "borging") {
            data.borgStats = {
                ref: raw.b_ref || "", cool: raw.b_cool || "", ma: raw.b_ma || "", body: raw.b_body || "",
                m_m: raw.b_m_m || "", m_kmh: raw.b_m_kmh || "", jump_up: raw.b_jump_up || "", jump_long: raw.b_jump_long || "",
                lift: raw.b_lift || "", throw: raw.b_throw || "", dmg_mod: raw.b_dmg_mod || "", punch: raw.b_punch || "", kick: raw.b_kick || ""
            };
            data.borgStructure = {
                head_sp: raw.s_head_sp || "", head_ost: raw.s_head_ost || "", head_opt: raw.s_head_opt || "", head_aud: raw.s_head_aud || "",
                torso_sp: raw.s_torso_sp || "", torso_ost: raw.s_torso_ost || "", torso_opt: raw.s_torso_opt || "",
                rarm_sp: raw.s_rarm_sp || "", rarm_ost: raw.s_rarm_ost || "", rarm_opt: raw.s_rarm_opt || "",
                larm_sp: raw.s_larm_sp || "", larm_ost: raw.s_larm_ost || "", larm_opt: raw.s_larm_opt || "",
                rleg_sp: raw.s_rleg_sp || "", rleg_ost: raw.s_rleg_ost || "", rleg_opt: raw.s_rleg_opt || "",
                lleg_sp: raw.s_lleg_sp || "", lleg_ost: raw.s_lleg_ost || "", lleg_opt: raw.s_lleg_opt || ""
            };
            data.cyberwareList = borgBuilderCyberwareList.filter(x => x.name.trim() !== "" || x.desc.trim() !== "").map(x => ({ name: dash(x.name), desc: x.desc.trim() }));
        }

        if (activeBuilderType === "acpa") {
            data.acpaGearList = acpaBuilderState.gearList.filter(g => g.name.trim() !== "" || g.desc.trim() !== "").map(g => ({ name: dash(g.name), desc: g.desc.trim() }));
            data.acpaWeaponsList = acpaBuilderState.weaponsList.filter(w => w.name.trim() !== "" || w.desc.trim() !== "" || w.damage.trim() !== "").map(w => ({
                name: dash(w.name), type: dash(w.type), skr: dash(w.skr), to: dash(w.to), damage: dash(w.damage),
                mag: dash(w.mag), sko: dash(w.sko), range: dash(w.range), nad: dash(w.nad), cost: dash(w.cost), desc: w.desc.trim()
            }));
        }

        if (activeBuilderType === "roles") {
            const rawSk = String(raw.skills || "").trim();
            data.skills = rawSk ? rawSk.split(",").map(s => s.trim()).filter(Boolean) : ["—"];
            const grid = document.getElementById("roleSalaryBuilderGrid");
            if (grid) {
                data.salaryTable = {};
                ROLE_SALARY_LEVELS.forEach(lv => {
                    data.salaryTable[lv.key] = (grid.querySelector(`[data-salary-lvl="${lv.key}"]`)?.value || "").trim() || "—";
                });
                data.salary = `${data.salaryTable.lvl1_5} — ${data.salaryTable.lvl10}`;
            }
        }

        if (activeBuilderType === "netrunning" && data.itemKind === "deck") {
            data.category = "Кибердеки";
            data.deckTypes = fd.getAll("deckTypeCheck");
            data.deckOptions = fd.getAll("deckOptionCheck");
        }

        data.images = [...builderGalleryImages];
        data.image = builderGalleryImages[0] || "";

        const submissionEntry = {
            subId: "sub-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
            sectionKey: activeBuilderType,
            authorId: u.id,
            authorName: u.displayName,
            createdAt: typeof getMoscowTimeFormatted === "function" ? getMoscowTimeFormatted(false) : new Date().toISOString().slice(0, 16),
            cardData: data
        };

        CATEGORIES._pendingSubmissions.unshift(submissionEntry);
        await persistDatabase(true);

        // Рассылаем уведомления всем Администраторам (ROOT и ADMIN)
        const cardTitle = data.name && data.name !== "—" ? data.name : (data.title || "Без названия");
        const secLabel = SECTION_LABELS[activeBuilderType] || activeBuilderType;
        const admins = USERS.filter(adm => adm && (adm.role === "ROOT" || adm.role === "ADMIN"));
        for (const adm of admins) {
            if (typeof window.createNotification === "function") {
                await window.createNotification(
                    adm.id,
                    "rank",
                    `📥 Новая карточка от сообщества «<b>${escapeHtmlAttr(cardTitle)}</b>» (${secLabel}) от игрока <b>${escapeHtmlAttr(u.displayName)}</b> ожидает рассмотрения на модерации!`,
                    { sectionKey: "moderation", itemId: submissionEntry.subId }
                );
            }
        }

        builderGalleryImages = [];
        e.target.reset();
        isPlayerSubmissionMode = false;
        switchMainView(activeBuilderType === "rules" ? "rules" : "catalog", activeBuilderType === "rules" ? null : activeBuilderType);

        // Показываем игроку окно о том, что карточка отправлена на рассмотрение
        document.getElementById("netwatchModalTitle").textContent = "📨 ОТПРАВЛЕНО НА РАССМОТРЕНИЕ";
        document.getElementById("netwatchErrorText").innerHTML = `
          <div class="space-y-2">
            <div class="text-cp-cyan font-bold uppercase">Ваша карточка «${escapeHtmlAttr(cardTitle)}» успешно отправлена на модерацию!</div>
            <div class="text-gray-200 leading-relaxed">Отправленная карточка ушла на рассмотрение администрации. Рук у администрации не много, поэтому она будет рассмотрена тогда, когда будет время.</div>
            <div class="text-[11px] text-cp-yellow pt-1">🔔 Вы получите уведомление в колокольчик сразу после принятия решения.</div>
          </div>
        `;
        document.getElementById("netwatchModal").classList.remove("hidden");
        return;
    }

    // Если сохраняет Администратор: сохраняем штатно, но если включён тумблер «От сообщества» — помечаем карточку как isCommunity
    const wasEditing = editingItemId;
    const prevObj = wasEditing ? (DB[activeBuilderType] || []).find(i => i.id === wasEditing) : null;
    const shouldBeCommunity = prevObj ? Boolean(prevObj.isCommunity) : isCommunityMode;

    _origSaveBuilderItemForComm(e);

    const savedCard = (DB[activeBuilderType] || [])[0] || (wasEditing ? (DB[activeBuilderType] || []).find(i => i.id === wasEditing) : null);
    if (savedCard && shouldBeCommunity) {
        savedCard.isCommunity = true;
        persistDatabase(true);
        if (activeMainView === "catalog") renderCatalog();
        else if (activeMainView === "rules") renderRulesView();
    }
};

// Переход по клику на уведомление о модерации
const _origOpenNotificationTargetForMod = openNotificationTarget;
openNotificationTarget = function (notifId) {
    const n = NOTIFICATIONS.find(x => x.id === notifId);
    if (n && n.linkData) {
        if (n.linkData.sectionKey === "moderation" && isCurrentUserAdmin()) {
            closeNotifDropdown();
            selectedPendingSubId = n.linkData.itemId || null;
            switchMainView("admin");
            switchAdminSubtab("moderation");
            return;
        }
        if (n.linkData.isCommunityCard) {
            isCommunityMode = true;
            updateCommunityToggleUI();
        }
    }
    _origOpenNotificationTargetForMod(notifId);
};

// --- РЕНДЕР ВКЛАДКИ МОДЕРАЦИИ В АДМИН-ПАНЕЛИ ---
function renderAdminModerationView() {
    ensureCommunityQueueArray();
    const queue = CATEGORIES._pendingSubmissions;
    const cntEl = document.getElementById("cnt-pending-mod");
    if (cntEl) cntEl.textContent = queue.length;

    const listEl = document.getElementById("adminModQueueList");
    const previewEl = document.getElementById("adminModPreviewBox");
    if (!listEl || !previewEl) return;

    if (queue.length === 0) {
        listEl.innerHTML = `<div class="bg-cp-bg border border-gray-800 p-8 text-center text-xs text-gray-500">Очередь модерации пуста. Все предложенные карточки рассмотрены!</div>`;
        previewEl.innerHTML = `<div class="text-xs text-gray-500 text-center py-16">Нет карточек, ожидающих проверки.</div>`;
        return;
    }

    if (!selectedPendingSubId || !queue.some(s => s.subId === selectedPendingSubId)) {
        selectedPendingSubId = queue[0].subId;
    }

    listEl.innerHTML = queue.map(sub => {
        const isSel = sub.subId === selectedPendingSubId;
        const c = sub.cardData || {};
        const title = dash(c.name !== "—" ? c.name : c.title);
        const cat = dash(c.category !== "—" ? c.category : c.subsection);
        const secLabel = SECTION_LABELS[sub.sectionKey] || sub.sectionKey;
        const imgs = getItemImagesArray(c);

        return `
          <div onclick="selectPendingSubmission('${sub.subId}')"
            class="border ${isSel ? 'cp-border-active bg-cp-card' : 'border-gray-800 bg-cp-bg hover:border-gray-600'} p-3.5 cursor-pointer transition-all space-y-2.5">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="px-1.5 py-0.5 text-[10px] font-bold bg-cp-purple/20 text-cp-cyan border border-cp-purple/50">${secLabel}</span>
                  <span class="text-[11px] text-gray-400 truncate">${cat}</span>
                  ${imgs.length > 0 ? `<span class="text-[10px] text-cp-yellow border border-cp-yellow/40 px-1">🖼️ ${imgs.length}</span>` : ""}
                </div>
                <div class="font-display font-bold text-sm text-white mt-1 truncate">${escapeHtmlAttr(title)}</div>
                <div class="text-[11px] text-gray-400 mt-0.5">
                  Автор: <b class="text-cp-yellow">${escapeHtmlAttr(sub.authorName || "Игрок")}</b> • <span>${dash(sub.createdAt)}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 pt-2 border-t border-gray-800/80" onclick="event.stopPropagation()">
              <button type="button" onclick="approvePendingSubmission('${sub.subId}')"
                class="flex-1 py-1.5 bg-cp-green hover:bg-green-400 text-black font-display font-bold text-[11px] uppercase tracking-wider transition-colors">
                ✓ Принять
              </button>
              <button type="button" onclick="openRejectSubmissionModal('${sub.subId}')"
                class="flex-1 py-1.5 bg-cp-red/20 hover:bg-cp-red text-cp-red hover:text-white border border-cp-red font-display font-bold text-[11px] uppercase tracking-wider transition-colors">
                ✕ Отклонить
              </button>
            </div>
          </div>
        `;
    }).join("");

    const activeSub = queue.find(s => s.subId === selectedPendingSubId) || queue[0];
    renderPendingSubmissionPreview(activeSub, previewEl);
}

window.selectPendingSubmission = function (subId) {
    selectedPendingSubId = subId;
    renderAdminModerationView();
};

function renderPendingSubmissionPreview(sub, previewEl) {
    if (!sub || !sub.cardData) return;
    const c = sub.cardData;
    const secKey = sub.sectionKey;
    const secLabel = SECTION_LABELS[secKey] || secKey;
    const title = dash(c.name !== "—" ? c.name : c.title);
    const cat = dash(c.category !== "—" ? c.category : c.subsection);
    const statsPreviewHtml = typeof buildCardStatsPreviewHTML === "function" ? buildCardStatsPreviewHTML(secKey, c) : "";
    const mainText = c.desc || c.content || "";
    const abilityText = c.abilityDesc && c.abilityDesc !== "—" ? c.abilityDesc : "";
    const summaryText = c.summary && c.summary !== "—" ? c.summary : "";

    const imgs = getItemImagesArray(c);
    const galleryHtml = imgs.length === 0 ? "" : `
      <div class="pt-3 border-t border-gray-800">
        <div class="text-[11px] font-bold uppercase text-cp-cyan mb-2">🖼️ Прикреплённые изображения (${imgs.length}):</div>
        <div class="grid grid-cols-2 gap-2.5">
          ${imgs.map((src, i) => `
            <div class="bg-black/60 border border-gray-800 p-2 flex items-center justify-center h-48 overflow-hidden">
              <img src="${escapeHtmlAttr(src)}" class="max-w-full max-h-full object-contain">
            </div>
          `).join("")}
        </div>
      </div>
    `;

    previewEl.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between gap-3 bg-cp-panel border border-cp-purple/50 p-3.5">
          <div class="text-xs">
            <div class="text-[10px] text-cp-cyan font-bold uppercase">Кандидат на публикацию в «От сообщества»</div>
            <div class="text-gray-300 mt-0.5">Отправил: <b class="text-cp-yellow">${escapeHtmlAttr(sub.authorName)}</b> (${dash(sub.createdAt)})</div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" onclick="approvePendingSubmission('${sub.subId}')"
              class="px-4 py-2 bg-cp-green hover:bg-green-400 text-black font-display font-black text-xs uppercase tracking-wider">
              ✓ Принять карточку
            </button>
            <button type="button" onclick="openRejectSubmissionModal('${sub.subId}')"
              class="px-4 py-2 bg-cp-red hover:bg-red-600 text-white font-display font-bold text-xs uppercase tracking-wider">
              ✕ Отклонить
            </button>
          </div>
        </div>

        <div class="border-b border-gray-800 pb-3">
          <div class="text-xs text-cp-cyan uppercase font-bold">${secLabel} // ${cat} // Источник: ${dash(c.book)}</div>
          <h2 class="font-display text-2xl font-black text-white mt-1">${escapeHtmlAttr(title)}</h2>
          ${c.origName && c.origName !== "—" ? `<div class="text-xs text-gray-400">Оригинал: ${escapeHtmlAttr(c.origName)}</div>` : ""}
        </div>

        ${statsPreviewHtml}

        ${summaryText ? `<div class="bg-cp-panel border-l-2 border-cp-yellow p-3 text-xs text-gray-200"><b>Краткая суть:</b> ${formatRichTextWithLinks(summaryText)}</div>` : ""}
        ${abilityText ? `<div class="bg-cp-panel border-l-2 border-cp-cyan p-3 text-xs text-gray-200 whitespace-pre-line"><b class="text-cp-cyan uppercase block mb-1">Описание особой способности:</b>${formatRichTextWithLinks(abilityText)}</div>` : ""}
        ${mainText ? `<div class="bg-cp-panel border-l-2 border-cp-yellow p-3.5 text-xs text-gray-200 leading-relaxed whitespace-pre-line"><b class="text-cp-yellow uppercase block mb-1">Полное описание / Текст карточки:</b>${formatRichTextWithLinks(mainText)}</div>` : `<div class="text-xs text-gray-500 italic">Текстовое описание отсутствует.</div>`}

        ${galleryHtml}
      </div>
    `;
}

window.approvePendingSubmission = async function (subId) {
    if (!isCurrentUserAdmin()) return;
    ensureCommunityQueueArray();
    const idx = CATEGORIES._pendingSubmissions.findIndex(s => s.subId === subId);
    if (idx === -1) return;

    const sub = CATEGORIES._pendingSubmissions[idx];
    const card = sub.cardData;
    const secKey = sub.sectionKey;

    card.isCommunity = true;
    card.isUser = true;

    if (!Array.isArray(DB[secKey])) DB[secKey] = [];
    DB[secKey].unshift(card);

    const catField = secKey === "rules" ? card.subsection : card.category;
    if (catField && catField !== "—" && !CATEGORIES[secKey].includes(catField)) {
        CATEGORIES[secKey].push(catField);
    }

    CATEGORIES._pendingSubmissions.splice(idx, 1);
    addChangeLogEntry("created", secKey, card);
    await persistDatabase(true);
    updateCounts();
    renderAdminModerationView();

    // Уведомляем автора об одобрении карточки
    const cardTitle = card.name && card.name !== "—" ? card.name : (card.title || "Карточка");
    const secLabel = SECTION_LABELS[secKey] || secKey;
    if (sub.authorId && typeof window.createNotification === "function") {
        await window.createNotification(
            sub.authorId,
            "rank",
            `✅ Ваша карточка «<b>${escapeHtmlAttr(cardTitle)}</b>» одобрена администрацией и опубликована в разделе «<b>${secLabel}</b>» (От сообщества)!`,
            { sectionKey: secKey, itemId: card.id, isCommunityCard: true }
        );
    }
};

window.openRejectSubmissionModal = function (subId) {
    if (!isCurrentUserAdmin()) return;
    ensureCommunityQueueArray();
    const sub = CATEGORIES._pendingSubmissions.find(s => s.subId === subId);
    if (!sub) return;
    const c = sub.cardData || {};
    const title = c.name && c.name !== "—" ? c.name : (c.title || "Карточка");

    document.getElementById("rejectModalSubId").value = sub.subId;
    document.getElementById("rejectModalCardTitle").textContent = title;
    document.getElementById("rejectReasonTextarea").value = "";
    document.getElementById("rejectSubmissionModal").classList.remove("hidden");
    setTimeout(() => document.getElementById("rejectReasonTextarea")?.focus(), 40);
};

window.closeRejectSubmissionModal = function () {
    document.getElementById("rejectSubmissionModal")?.classList.add("hidden");
};

window.confirmRejectSubmission = async function (e) {
    e.preventDefault();
    if (!isCurrentUserAdmin()) return;
    ensureCommunityQueueArray();

    const subId = document.getElementById("rejectModalSubId").value;
    const reason = document.getElementById("rejectReasonTextarea").value.trim();
    if (!reason) return;

    const idx = CATEGORIES._pendingSubmissions.findIndex(s => s.subId === subId);
    if (idx === -1) {
        closeRejectSubmissionModal();
        return;
    }

    const sub = CATEGORIES._pendingSubmissions[idx];
    const c = sub.cardData || {};
    const cardTitle = c.name && c.name !== "—" ? c.name : (c.title || "Карточка");
    const secLabel = SECTION_LABELS[sub.sectionKey] || sub.sectionKey;

    CATEGORIES._pendingSubmissions.splice(idx, 1);
    closeRejectSubmissionModal();
    await persistDatabase(true);
    renderAdminModerationView();

    if (sub.authorId && typeof window.createNotification === "function") {
        await window.createNotification(
            sub.authorId,
            "reply",
            `❌ Ваша карточка «<b>${escapeHtmlAttr(cardTitle)}</b>» (${secLabel}) была отклонена модерацией. <b>Причина:</b> «${escapeHtmlAttr(reason)}»`,
            null
        );
    }
};

setTimeout(updateCommunityToggleUI, 100);

// =========================================================================
// НОВАЯ СТРУКТУРА ВКЛАДОК, ОПЦИИ ОРУЖИЯ, ПАТРОНЫ И КОНСТРУКТОР «МОДА»
// =========================================================================

// 1. Расширяем список разделов, схем и покупаемых категорий
Object.assign(SECTION_LABELS, {
    weapon_options: "🔧 Опции оружия",
    ammo: "💥 Патроны",
    martial_arts: "🥋 Боевые Искусства",
    exotics: "🧬 Экзотика",
    vehicle_tuning: "⚙️ Тюнинг",
    vehicle_weapons: "🔫 Вооружение транспорта",
    lore_nomads: "🏜️ Кочевники",
    lore_gangs: "💀 Банды",
    lore_countries: "🌍 Страны"
});

PURCHASABLE_SECTIONS.add("weapon_options");
PURCHASABLE_SECTIONS.add("ammo");
PURCHASABLE_SECTIONS.add("exotics");
PURCHASABLE_SECTIONS.add("vehicle_tuning");
PURCHASABLE_SECTIONS.add("vehicle_weapons");

Object.assign(SCHEMAS, {
    weapon_options: [
        { k: "name", l: "Название опции (рус.)", ph: "Умная связь (Smartgun Link)" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Smartgun Link" },
        { k: "category", l: "Категория опции", isCat: true, ph: "Прицелы и Оптика" },
        { k: "effect", l: "Игромеханический эффект", ph: "+2 к ТО при наличии Smartgun", stat: "Эффект", c: "text-cp-cyan", span: 2 },
        { k: "cost", l: "Цена", ph: "200 eb", stat: "Цена", c: "text-cp-green" },
        { k: "book", l: "Источник", isBook: true, ph: "CP20" }
    ],
    ammo: [
        { k: "name", l: "Название патронов (рус.)", ph: "Бронебойные (AP)" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Armor Piercing (AP)" },
        { k: "category", l: "Категория патронов", isCat: true, ph: "Бронебойные" },
        { k: "caliber", l: "Боеприпас / Калибр", ph: "9мм / 5.56мм", stat: "Калибр", c: "text-cp-yellow" },
        { k: "qty", l: "Количество патронов", ph: "50 шт.", stat: "Кол-во", c: "text-white" },
        { k: "weaponType", l: "Тип оружия", ph: "Пистолеты / Винтовки", stat: "Тип оружия", c: "text-cp-cyan" },
        { k: "effect", l: "Игромеханический эффект", ph: "Броня делится на 2, пробитый урон делится на 2", stat: "Эффект", c: "text-cp-red", span: 2 },
        { k: "cost", l: "Цена", ph: "30 eb", stat: "Цена", c: "text-cp-green" },
        { k: "book", l: "Источник", isBook: true, ph: "CP20" }
    ],
    martial_arts: [
        { k: "name", l: "Название стиля (рус.)", ph: "Арасака-те" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Arasaka-te" },
        { k: "category", l: "Тип / Школа", isCat: true, ph: "Ударные стили" },
        { k: "book", l: "Источник", isBook: true, ph: "CP20" }
    ],
    exotics: [
        { k: "name", l: "Название биоскульпта / экзотики", ph: "Эльфийский пакет" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Elf Package" },
        { k: "category", l: "Категория", isCat: true, ph: "Биоскульптинг" },
        { k: "cost", l: "Цена", ph: "2,500 eb", stat: "Цена", c: "text-cp-green" },
        { k: "book", l: "Источник", isBook: true, ph: "Chr2" }
    ],
    vehicle_weapons: [
        { k: "name", l: "Название вооружения (рус.)", ph: "20-мм автопушка" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "20mm Autocannon" },
        { k: "category", l: "Категория вооружения", isCat: true, ph: "Автопушки" },
        { k: "to", l: "ТО (Точность)", ph: "+0", stat: "ТО", c: "text-cp-yellow" },
        { k: "damage", l: "Урон", ph: "8d10", stat: "Урон", c: "text-cp-red" },
        { k: "penetration", l: "Пробитие", ph: "4 / ББ", stat: "Пробитие", c: "text-cp-yellow" },
        { k: "blast", l: "Взрыв (радиус / урон)", ph: "2м", stat: "Взрыв", c: "text-cp-red" },
        { k: "shots", l: "#Выстрелов (Боезапас)", ph: "100", stat: "#Выстрелов", c: "text-white" },
        { k: "sko", l: "СКО (Скорострельность)", ph: "10", stat: "СКО", c: "text-white" },
        { k: "dos", l: "Доступность (ДОС)", ph: "Ред", stat: "Доступность", c: "text-gray-200" },
        { k: "nad", l: "Надёжность (НАД)", ph: "ОН", stat: "Надёжность", c: "text-cp-green" },
        { k: "range", l: "Дистанция", ph: "1000м", stat: "Дистанция", c: "text-cp-cyan" },
        { k: "spaces", l: "Занимаемые места", ph: "2", stat: "Места", c: "text-cp-yellow" },
        { k: "cost", l: "Цена", ph: "12,000 eb", stat: "Цена", c: "text-cp-green", span: 2 },
        { k: "book", l: "Источник", isBook: true, ph: "MM (Max Metal)" }
    ],
    vehicle_tuning: [
        { k: "name", l: "Название модификации (рус.)", ph: "Нитро-ускоритель" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Nitrous Oxide" },
        { k: "category", l: "Категория тюнинга", isCat: true, ph: "Двигатель" },
        { k: "dos", l: "Доступность (ДОС)", ph: "Обы", stat: "Доступность", c: "text-gray-200" },
        { k: "spaces", l: "Занимаемые места", ph: "1", stat: "Места", c: "text-cp-yellow" },
        { k: "cost", l: "Цена", ph: "1,500 eb", stat: "Цена", c: "text-cp-green" },
        { k: "effect", l: "Игромеханика", ph: "+20% скорости на 3 раунда", stat: "Игромеханика", c: "text-cp-cyan", span: 3 },
        { k: "book", l: "Источник", isBook: true, ph: "MM (Max Metal)" }
    ],
    lore_nomads: [
        { k: "name", l: "Название стаи / клана", ph: "Альдекальдо" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Aldecaldos" },
        { k: "category", l: "Нация кочевников", isCat: true, ph: "Семь Наций" },
        { k: "book", l: "Источник", isBook: true, ph: "Neo Tribes" }
    ],
    lore_gangs: [
        { k: "name", l: "Название банды", ph: "Мальстрём" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Maelstrom" },
        { k: "category", l: "Тип банды", isCat: true, ph: "Бустер-банда" },
        { k: "book", l: "Источник", isBook: true, ph: "NC" }
    ],
    lore_countries: [
        { k: "name", l: "Название страны / региона", ph: "Свободный Штат Северная Калифорния" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Free State of Northern California" },
        { k: "category", l: "Регион мира", isCat: true, ph: "Северная Америка" },
        { k: "book", l: "Источник", isBook: true, ph: "CP20" }
    ]
});

// Маппинг подвкладок на родительскую кнопку в шапке (для подсветки)
const PARENT_NAV_MAP = {
    roles: "roles",
    weapons: "combat",
    weapon_options: "combat",
    ammo: "combat",
    martial_arts: "combat",
    armor: "armor",
    gear: "gear_group",
    fashion: "gear_group",
    services: "services",
    cyberware: "cyberware",
    borging: "borging_group",
    exotics: "borging_group",
    acpa: "acpa",
    netrunning: "netrunning_group",
    vehicles: "vehicles_group",
    vehicle_tuning: "vehicles_group",
    vehicle_builder: "vehicles_group",
    vehicle_weapons: "vehicles_group",
    corporations: "lore_group",
    lore_nomads: "lore_group",
    lore_gangs: "lore_group",
    lore_countries: "lore_group",
    characters: "characters_group",
    npc_gen: "characters_group",
    rules: "rules"
};

let activeWipParentKey = null;

window.openNetrunningSubtab = function (kind) {
    switchMainView("catalog", "netrunning");
    const extraSel = document.getElementById("extraFilter");
    if (extraSel) {
        extraSel.value = kind === "decks" ? "ONLY_DECKS" : "ONLY_PROGRAMS";
        renderCatalog();
    }
};

window.openCharactersSubtab = function (kind) {
    switchMainView("catalog", "characters");
    const extraSel = document.getElementById("extraFilter");
    if (extraSel) {
        extraSel.value = kind === "npc" ? "ONLY_UNNAMED" : "ONLY_NAMED";
        renderCatalog();
    }
};

window.openWipView = function (parentKey, titleText) {
    activeWipParentKey = parentKey;
    const titleEl = document.getElementById("wipViewTitle");
    if (titleEl) titleEl.textContent = titleText || "Раздел в разработке";
    switchMainView("wip");
};

// Переопределяем switchMainView для поддержки view-fashion, view-wip и подсветки родительских вкладок
const _prevSwitchMainViewForV2 = switchMainView;
switchMainView = function (view, catalogTab = null) {
    if (view === "admin" && !isCurrentUserAdmin()) view = "profile";
    activeMainView = view;
    if (catalogTab) activeCatalogTab = catalogTab;

    ["home", "catalog", "fashion", "deck_builder", "datafort", "npc_gen", "vehicle_builder", "wip", "rules", "profile", "admin"].forEach(v => {
        const el = document.getElementById("view-" + v);
        if (el) el.classList.toggle("hidden", view !== v);
    });

    const rawKey = view === "catalog" ? activeCatalogTab : view;
    const parentHighlightKey = view === "wip" ? activeWipParentKey : (PARENT_NAV_MAP[rawKey] || rawKey);

    document.querySelectorAll("#mainNav .nav-btn").forEach(btn => {
        const isCur = (view !== "home") && (btn.getAttribute("data-view") === parentHighlightKey);
        btn.className = isCur
            ? "nav-btn px-3 py-1.5 text-xs font-bold uppercase tracking-wider border transition-all whitespace-nowrap flex items-center gap-1 bg-cp-yellow text-black border-cp-yellow shadow-[0_0_12px_rgba(252,238,10,0.3)]"
            : "nav-btn px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-gray-700 bg-cp-panel text-gray-300 hover:border-cp-cyan whitespace-nowrap flex items-center gap-1";
    });

    if (view === "home") renderHomeView();
    else if (view === "catalog") { setupCatalogFilters(); renderCatalog(); }
    else if (view === "fashion") renderFashionView();
    else if (view === "deck_builder") renderDeckBuilderView();
    else if (view === "vehicle_builder") renderVehicleBuilderView();
    else if (view === "datafort") renderDatafortView();
    else if (view === "npc_gen") initNpcGeneratorView();
    else if (view === "rules") renderRulesView();
    else if (view === "profile") renderProfileView();
    else if (view === "admin") switchAdminSubtab(activeAdminSubtab);

    recordNavHistoryState();
};
window.switchMainView = switchMainView;

// Расширяем setupCatalogFilters для «Опций» и «Патронов»
const _prevSetupFiltersV2 = setupCatalogFilters;
setupCatalogFilters = function () {
    _prevSetupFiltersV2();
    const extraSelect = document.getElementById("extraFilter");
    const extraLabel = document.getElementById("extraFilterLabel");
    const legend = document.getElementById("abbrevLegend");

    if (activeCatalogTab === "weapon_options" || activeCatalogTab === "exotics" || activeCatalogTab === "vehicle_tuning" || activeCatalogTab === "vehicle_weapons") {
        extraLabel.textContent = "Сортировка по цене";
        extraSelect.innerHTML = `
            <option value="ALL">Без сортировки</option>
            <option value="SORT_PRICE_ASC">🔼 Цена: от меньшей к большей</option>
            <option value="SORT_PRICE_DESC">🔽 Цена: от большей к меньшей</option>
        `;
        legend.innerHTML = `<span><b class="text-cp-cyan">eb</b> = Евробаксы</span><span>Нажмите «🛒 Купить» на карточке для добавления в корзину</span>`;
    } else if (activeCatalogTab === "ammo") {
        extraLabel.textContent = "Цена / Тип оружия";
        const wTypes = [...new Set((DB.ammo || []).map(a => a && a.weaponType).filter(x => x && x !== "—"))];
        extraSelect.innerHTML = `
            <option value="ALL">Все типы оружия</option>
            <option value="SORT_PRICE_ASC">🔼 Цена: от меньшей к большей</option>
            <option value="SORT_PRICE_DESC">🔽 Цена: от большей к меньшей</option>
            ${wTypes.map(t => `<option value="WTYPE_${escapeHtmlAttr(t)}">🔫 ${escapeHtmlAttr(t)}</option>`).join("")}
        `;
        legend.innerHTML = `<span><b class="text-cp-yellow">Калибр</b> = Боеприпас</span><span><b class="text-cp-cyan">Тип оружия</b> = Совместимый класс стволов</span>`;
    }
};

// Расширяем renderCatalog, чтобы сортировка цены и фильтр типа оружия работали в weapon_options и ammo
const _prevRenderCatalogV2 = renderCatalog;
renderCatalog = function () {
    if (activeCatalogTab === "weapon_options" || activeCatalogTab === "ammo" || activeCatalogTab === "exotics" || activeCatalogTab === "vehicle_tuning" || activeCatalogTab === "vehicle_weapons") {
        const extra = document.getElementById("extraFilter")?.value || "ALL";
        const origArr = DB[activeCatalogTab] || [];
        let temp = [...origArr];
        if (extra === "SORT_PRICE_ASC") temp.sort((a, b) => extractMaxNumericValue(a.cost) - extractMaxNumericValue(b.cost));
        else if (extra === "SORT_PRICE_DESC") temp.sort((a, b) => extractMaxNumericValue(b.cost) - extractMaxNumericValue(a.cost));
        else if (extra.startsWith("WTYPE_")) {
            const targetType = extra.slice(6);
            temp = temp.filter(a => a && a.weaponType === targetType);
        }
        DB[activeCatalogTab] = temp;
        try { _prevRenderCatalogV2(); } finally { DB[activeCatalogTab] = origArr; }
    } else {
        _prevRenderCatalogV2();
    }
};

// =========================================================================
// ЧАСТЬ 3: МОДА — БАЗА ОДЕЖДЫ И ИНТЕРАКТИВНЫЙ КОНСТРУКТОР ОДЕЖДЫ
// =========================================================================

const DEFAULT_FASHION_ITEMS = [
    // Брюки / Юбки (Кожа +50-75%)
    { id: "f-pants", name: "Брюки / Джинсы", baseCost: 20, weight: "medium", leatherType: "50-75", fireType: "pants" },
    { id: "f-miniskirt", name: "Мини-юбка", baseCost: 30, weight: "light", leatherType: "50-75", fireType: "pants" },
    { id: "f-longskirt", name: "Длинная юбка", baseCost: 55, weight: "medium", leatherType: "50-75", fireType: "pants" },
    { id: "f-shorts", name: "Шорты", baseCost: 10, weight: "light", leatherType: "50-75", fireType: "pants" },
    // Комбинезоны / Перчатки (Кожа x2)
    { id: "f-jumpsuit", name: "Комбинезон (Джампсьют)", baseCost: 50, weight: "light", leatherType: "x2", fireType: "jacket" },
    { id: "f-dress", name: "Платье", baseCost: 50, weight: "light", leatherType: "x2", fireType: "shirt" },
    { id: "f-gloves", name: "Перчатки", baseCost: 20, weight: "light", leatherType: "x2", fireType: "shirt" },
    { id: "f-longgloves", name: "Длинные перчатки", baseCost: 30, weight: "light", leatherType: "x2", fireType: "shirt" },
    // Верхняя одежда / Аксессуары (Кожа x2)
    { id: "f-vest", name: "Жилет", baseCost: 25, weight: "medium", leatherType: "x2", fireType: "jacket" },
    { id: "f-tie", name: "Галстук", baseCost: 20, weight: "light", leatherType: "x2", fireType: "shirt" },
    { id: "f-scarf", name: "Шарф / Бандана", baseCost: 15, weight: "light", leatherType: "x2", fireType: "shirt" },
    { id: "f-glasses", name: "Очки", baseCost: 25, costLabel: "5-50 eb", weight: "light", leatherType: "none", fireType: "none" },
    { id: "f-hat", name: "Шляпа", baseCost: 15, costLabel: "5-25 eb", weight: "light", leatherType: "x2", fireType: "shirt" },
    { id: "f-chaps", name: "Кожаные чапсы", baseCost: 60, weight: "heavy", leatherType: "included", fireType: "pants" },
    { id: "f-jacket", name: "Куртка", baseCost: 35, weight: "medium", leatherType: "x2", fireType: "jacket" },
    { id: "f-longjacket", name: "Длинная куртка", baseCost: 40, weight: "medium", leatherType: "x2", fireType: "jacket" },
    { id: "f-heavycoat", name: "Длинное тяжёлое пальто", baseCost: 55, weight: "heavy", leatherType: "x2", fireType: "jacket" },
    // Рубашки / Обувь (Кожа +50-75%)
    { id: "f-tshirt", name: "Футболка", baseCost: 10, weight: "light", leatherType: "50-75", fireType: "shirt" },
    { id: "f-shirt", name: "Рубашка с длинными рукавами", baseCost: 20, weight: "light", leatherType: "50-75", fireType: "shirt" },
    { id: "f-top", name: "Топ / Блузка", baseCost: 15, weight: "light", leatherType: "50-75", fireType: "shirt" },
    { id: "f-tanktop", name: "Майка", baseCost: 10, weight: "light", leatherType: "50-75", fireType: "shirt" },
    { id: "f-tunic", name: "Туника", baseCost: 25, weight: "light", leatherType: "50-75", fireType: "shirt" },
    { id: "f-leathertunic", name: "Кожаная туника", baseCost: 75, weight: "medium", leatherType: "included", fireType: "shirt" },
    { id: "f-sweater", name: "Свитер", baseCost: 20, weight: "light", leatherType: "50-75", fireType: "shirt" },
    { id: "f-belt", name: "Пояс / Ремень", baseCost: 10, weight: "medium", leatherType: "50-75", fireType: "none" },
    { id: "f-leatherbelt", name: "Кожаный пояс / ремень", baseCost: 15, weight: "heavy", leatherType: "included", fireType: "none" },
    { id: "f-shoes", name: "Обувь", baseCost: 15, weight: "medium", leatherType: "50-75", fireType: "none" },
    { id: "f-halfboots", name: "Полусапожки", baseCost: 15, weight: "medium", leatherType: "50-75", fireType: "none" },
    { id: "f-boots", name: "Сапоги", baseCost: 25, weight: "heavy", leatherType: "50-75", fireType: "none" },
    { id: "f-kneeboots", name: "Сапоги до колен (Kneeboots)", baseCost: 40, weight: "heavy", leatherType: "50-75", fireType: "none" },
    // Плащи / Капюшоны (Кожа +50%)
    { id: "f-toboggan", name: "Санный капюшон (Toboggan hood)", baseCost: 15, weight: "light", leatherType: "50", fireType: "shirt" },
    { id: "f-skimask", name: "Лыжная маска", baseCost: 10, weight: "light", leatherType: "50", fireType: "shirt" },
    { id: "f-trench", name: "Тренч", baseCost: 125, weight: "heavy", leatherType: "50", fireType: "jacket" },
    { id: "f-cloak", name: "Плащ", baseCost: 50, weight: "medium", leatherType: "50", fireType: "jacket" },
    { id: "f-shortcloak", name: "Короткий плащ", baseCost: 75, weight: "medium", leatherType: "50", fireType: "jacket" },
    { id: "f-longcloak", name: "Длинный плащ", baseCost: 90, weight: "heavy", leatherType: "50", fireType: "jacket" }
];

const FASHION_STYLES = [
    { id: "generic", name: "Generic Chic", mult: 1 },
    { id: "leisure", name: "Leisurewear", mult: 2 },
    { id: "urban", name: "Urban Flash", mult: 2 },
    { id: "business", name: "Businesswear", mult: 3 },
    { id: "edgerunner", name: "Edgerunner", mult: 3 },
    { id: "high", name: "High Fashion", mult: 4 },
    { id: "baglady", name: "Bag Lady Chic", mult: 2 }
];

const FASHION_QUALITIES = [
    { id: "poor", name: "Ниже среднего (x0.5–0.9)", mult: 0.7, bonus: "" },
    { id: "normal", name: "Обычное", mult: 1, bonus: "" },
    { id: "good", name: "Хорошее", mult: 1.5, bonus: "" },
    { id: "verygood", name: "Очень хорошее", mult: 2, bonus: "+1 к Гардеробу и Стилю" },
    { id: "designer", name: "Дизайнерское", mult: 4, bonus: "+2 к Гардеробу и Стилю" },
    { id: "super", name: "Суперчика (На заказ)", mult: 7, bonus: "+3 к Гардеробу и Стилю" }
];

const FASHION_ARMOR_TABLE = {
    0:  { light: { m: 1, zu: 0 },    medium: { m: 1, zu: 0 },    heavy: { m: 1, zu: 0 } },
    4:  { light: { m: 1.1, zu: 0 },  medium: { m: 1.05, zu: 0 }, heavy: { m: 1, zu: 0 } },
    6:  { light: { m: 1.2, zu: 0 },  medium: { m: 1.1, zu: 0 },  heavy: { m: 1.05, zu: 0 } },
    8:  { light: { m: 1.35, zu: 0 }, medium: { m: 1.2, zu: 0 },  heavy: { m: 1.15, zu: 0 } },
    10: { light: { m: 1.5, zu: 0 },  medium: { m: 1.25, zu: 0 }, heavy: { m: 1.25, zu: 0 } },
    12: { light: { m: 1.75, zu: 0 }, medium: { m: 1.5, zu: 0 },  heavy: { m: 1.5, zu: 0 } },
    14: { light: { m: 2, zu: -1 },   medium: { m: 1.75, zu: 0 }, heavy: { m: 1.75, zu: 0 } },
    16: { light: { m: 2.5, zu: -2 }, medium: { m: 2, zu: 0 },    heavy: { m: 2, zu: 0 } },
    18: { light: { m: 3, zu: -3 },   medium: { m: 2.5, zu: -1 }, heavy: { m: 2.25, zu: 0 } },
    20: { light: null,               medium: { m: 3, zu: -2 },   heavy: { m: 2.5, zu: -1 } },
    22: { light: null,               medium: { m: 3.25, zu: -3 },heavy: { m: 2.75, zu: -2 } },
    24: { light: null,               medium: null,               heavy: { m: 3, zu: -3 } }
};

let fashionSelectedId = DEFAULT_FASHION_ITEMS[0].id;
let fashionBuilderCfg = {
    useLeather: false,
    styleId: "generic",
    qualityId: "normal",
    sp: 0,
    addonFire: false,
    addonPolylog: false,
    addonReacti: false,
    addonPolychrome: false,
    saoMode: "none" // "none" | "torso" | "legs" | "full"
};

function getFashionItemWeight(item) {
    ensureMetaArraysInCategories();
    if (!CATEGORIES._fashionWeights) CATEGORIES._fashionWeights = {};
    return CATEGORIES._fashionWeights[item.id] || item.weight || "medium";
}

window.setFashionItemWeightAdmin = function (itemId, newWeight) {
    if (!isCurrentUserAdmin()) return;
    ensureMetaArraysInCategories();
    if (!CATEGORIES._fashionWeights) CATEGORIES._fashionWeights = {};
    CATEGORIES._fashionWeights[itemId] = newWeight;
    persistDatabase(true);
    renderFashionView();
};

window.selectFashionItem = function (itemId) {
    fashionSelectedId = itemId;
    fashionBuilderCfg.useLeather = false;
    const item = DEFAULT_FASHION_ITEMS.find(x => x.id === itemId);
    if (item) {
        const w = getFashionItemWeight(item);
        if (!FASHION_ARMOR_TABLE[fashionBuilderCfg.sp]?.[w]) fashionBuilderCfg.sp = 0;
        if (w === "light") fashionBuilderCfg.saoMode = "none";
    }
    renderFashionView();
};

window.resetFashionFilters = function () {
    const s = document.getElementById("fashionSearchInput");
    const w = document.getElementById("fashionWeightFilter");
    const p = document.getElementById("fashionPriceSort");
    if (s) s.value = "";
    if (w) w.value = "ALL";
    if (p) p.value = "DEFAULT";
    renderFashionView();
};

window.updateFashionCfg = function (key, val) {
    fashionBuilderCfg[key] = val;
    renderFashionBuilderPanel();
};

function renderFashionView() {
    const q = (document.getElementById("fashionSearchInput")?.value || "").trim().toLowerCase();
    const wFilter = document.getElementById("fashionWeightFilter")?.value || "ALL";
    const pSort = document.getElementById("fashionPriceSort")?.value || "DEFAULT";

    let list = DEFAULT_FASHION_ITEMS.filter(it => {
        const w = getFashionItemWeight(it);
        const textOk = !q || it.name.toLowerCase().includes(q);
        const wOk = wFilter === "ALL" || w === wFilter;
        return textOk && wOk;
    });

    if (pSort === "ASC") list = [...list].sort((a, b) => a.baseCost - b.baseCost);
    else if (pSort === "DESC") list = [...list].sort((a, b) => b.baseCost - a.baseCost);

    const listEl = document.getElementById("fashionCatalogList");
    if (!listEl) return;

    const isAdmin = isCurrentUserAdmin();
    const weightLabels = { light: "🪶 Лёгкая", medium: "🧥 Средняя", heavy: "🛡️ Тяжёлая" };

    listEl.innerHTML = list.map(it => {
        const isSel = it.id === fashionSelectedId;
        const w = getFashionItemWeight(it);
        const borderCls = isSel ? "cp-border-active bg-cp-card" : "border-gray-800 bg-cp-card/70 hover:border-gray-600";
        const adminWeightHtml = isAdmin ? `
            <div class="flex items-center gap-1 mt-1.5" onclick="event.stopPropagation()">
              ${["light", "medium", "heavy"].map(wt => `
                <label class="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] border cursor-pointer ${w === wt ? 'bg-cp-cyan/20 border-cp-cyan text-cp-cyan font-bold' : 'bg-cp-bg border-gray-800 text-gray-400'}">
                  <input type="checkbox" ${w === wt ? 'checked' : ''} onchange="setFashionItemWeightAdmin('${it.id}', '${wt}')" class="w-3 h-3 accent-cyan-400">
                  <span>${wt === 'light' ? 'Лёгк.' : wt === 'medium' ? 'Сред.' : 'Тяж.'}</span>
                </label>
              `).join("")}
            </div>
        ` : "";

        return `
          <div onclick="selectFashionItem('${it.id}')" class="border ${borderCls} p-3 cursor-pointer transition-all flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="px-1.5 py-0.5 text-[10px] font-bold bg-cp-bg border border-gray-700 text-cp-cyan">${weightLabels[w]}</span>
                <span class="font-bold text-sm text-white">${it.name}</span>
              </div>
              ${adminWeightHtml}
            </div>
            <div class="text-right shrink-0">
              <div class="text-xs font-bold text-cp-green">${it.costLabel || (it.baseCost + " eb")}</div>
              ${it.leatherType === "x2" ? `<div class="text-[10px] text-gray-500">Кожа: ×2</div>` : it.leatherType === "50-75" ? `<div class="text-[10px] text-gray-500">Кожа: +50–75%</div>` : it.leatherType === "50" ? `<div class="text-[10px] text-gray-500">Кожа: +50%</div>` : ""}
            </div>
          </div>
        `;
    }).join("");

    renderFashionBuilderPanel();
}

function calculateFashionItemPrice(item) {
    const w = getFashionItemWeight(item);
    let price = item.baseCost;

    // 1. Кожа
    if (fashionBuilderCfg.useLeather) {
        if (item.leatherType === "x2") price *= 2;
        else if (item.leatherType === "50-75") price *= 1.65;
        else if (item.leatherType === "50") price *= 1.5;
    }

    // 2. Стиль и Качество
    const styleObj = FASHION_STYLES.find(s => s.id === fashionBuilderCfg.styleId) || FASHION_STYLES[0];
    const qualObj = FASHION_QUALITIES.find(q => q.id === fashionBuilderCfg.qualityId) || FASHION_QUALITIES[1];
    price *= styleObj.mult * qualObj.mult;

    // 3. Бронирование (ОС / ЗУ)
    const armorRow = FASHION_ARMOR_TABLE[fashionBuilderCfg.sp]?.[w] || { m: 1, zu: 0 };
    price *= armorRow.m;

    // 4. Особые дополнения (множители от базовой/текущей цены)
    if (fashionBuilderCfg.addonFire) {
        if (item.fireType === "shirt") price *= 2.5;
        else if (item.fireType === "pants") price *= 2.0;
        else price *= 1.75;
    }
    if (fashionBuilderCfg.addonPolylog) price *= 3;
    if (fashionBuilderCfg.addonReacti) price *= 2;
    if (fashionBuilderCfg.addonPolychrome) price *= 5;

    // 5. САО (только для средней и тяжёлой)
    let saoCost = 0;
    if (w !== "light") {
        if (fashionBuilderCfg.saoMode === "torso") saoCost = 150;
        else if (fashionBuilderCfg.saoMode === "legs") saoCost = 200;
        else if (fashionBuilderCfg.saoMode === "full") saoCost = 350;
    }

    return {
        finalPrice: Math.round(price + saoCost),
        sp: fashionBuilderCfg.sp,
        zu: armorRow.zu,
        styleObj,
        qualObj,
        weight: w
    };
}

function renderFashionBuilderPanel() {
    const box = document.getElementById("fashionBuilderPanel");
    if (!box) return;
    const item = DEFAULT_FASHION_ITEMS.find(x => x.id === fashionSelectedId) || DEFAULT_FASHION_ITEMS[0];
    const calc = calculateFashionItemPrice(item);
    const weightRu = calc.weight === "light" ? "Лёгкая" : calc.weight === "medium" ? "Средняя" : "Тяжёлая";

    const spOptions = Object.keys(FASHION_ARMOR_TABLE).map(Number).filter(sp => Boolean(FASHION_ARMOR_TABLE[sp][calc.weight]));

    const leatherCheckHtml = (item.leatherType && item.leatherType !== "none" && item.leatherType !== "included") ? `
        <label class="flex items-center gap-2 p-2.5 bg-cp-bg border ${fashionBuilderCfg.useLeather ? 'border-cp-yellow text-cp-yellow' : 'border-gray-800 text-gray-300'} cursor-pointer text-xs font-bold">
          <input type="checkbox" ${fashionBuilderCfg.useLeather ? 'checked' : ''} onchange="updateFashionCfg('useLeather', this.checked)" class="accent-yellow-400">
          <span>🧥 Использовать кожу / аналог (${item.leatherType === 'x2' ? '×2 к цене' : item.leatherType === '50-75' ? '+50–75% к цене' : '+50% к цене'})</span>
        </label>
    ` : "";

    box.innerHTML = `
      <div class="space-y-4">
        <div class="border-b border-gray-800 pb-3 flex items-start justify-between gap-3">
          <div>
            <div class="text-[10px] font-bold uppercase text-cp-cyan">КОНСТРУКТОР ОДЕЖДЫ // ${weightRu} одежда</div>
            <h2 class="font-display text-2xl font-black text-white mt-0.5">${item.name}</h2>
          </div>
          <div class="text-right">
            <div class="text-[10px] text-gray-400 uppercase">Итоговая цена</div>
            <div class="text-2xl font-display font-black text-cp-green">${calc.finalPrice.toLocaleString("ru-RU")} eb</div>
          </div>
        </div>

        <!-- Итоговые ОС / ЗУ -->
        <div class="grid grid-cols-3 gap-2.5 text-center">
          <div class="bg-cp-bg border border-gray-800 p-2.5">
            <div class="text-[10px] text-gray-400 uppercase">ОС (Броня)</div>
            <div class="text-lg font-display font-black text-cp-cyan">${calc.sp}</div>
          </div>
          <div class="bg-cp-bg border border-gray-800 p-2.5">
            <div class="text-[10px] text-gray-400 uppercase">ЗУ (Утяжеление)</div>
            <div class="text-lg font-display font-black text-cp-yellow">${calc.zu}</div>
          </div>
          <div class="bg-cp-bg border border-gray-800 p-2.5">
            <div class="text-[10px] text-gray-400 uppercase">Бонус стиля</div>
            <div class="text-xs font-bold text-cp-green mt-1.5">${calc.qualObj.bonus || "—"}</div>
          </div>
        </div>

        ${calc.sp >= 10 ? `
          <div class="bg-cp-yellow/10 border-l-2 border-cp-yellow p-2.5 text-[11px] text-cp-yellow">
            ⚠️ <b>Заметность бронирования:</b> Начиная с ОС 10 окружающие прекрасно видят, что одежда укреплена. Чем меньше предмет (например, перчатки с ОС 12), тем сильнее он выглядит по-военному.
          </div>
        ` : ""}

        ${leatherCheckHtml}

        <!-- СТИЛИ -->
        <div class="space-y-1.5">
          <div class="text-[11px] font-bold uppercase text-cp-cyan">1. Стиль одежды:</div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            ${FASHION_STYLES.map(s => `
              <label class="flex items-center gap-2 px-2.5 py-1.5 border text-xs cursor-pointer ${fashionBuilderCfg.styleId === s.id ? 'bg-cp-cyan/15 border-cp-cyan text-white font-bold' : 'bg-cp-bg border-gray-800 text-gray-300'}">
                <input type="checkbox" ${fashionBuilderCfg.styleId === s.id ? 'checked' : ''} onchange="updateFashionCfg('styleId', '${s.id}')" class="accent-cyan-400">
                <span>${s.name} <b class="text-cp-yellow">×${s.mult}</b></span>
              </label>
            `).join("")}
          </div>
        </div>

        <!-- КАЧЕСТВО -->
        <div class="space-y-1.5">
          <div class="text-[11px] font-bold uppercase text-cp-yellow">2. Качество пошива:</div>
          <div class="grid grid-cols-2 gap-1.5">
            ${FASHION_QUALITIES.map(q => `
              <label class="flex items-center gap-2 px-2.5 py-1.5 border text-xs cursor-pointer ${fashionBuilderCfg.qualityId === q.id ? 'bg-cp-yellow/15 border-cp-yellow text-white font-bold' : 'bg-cp-bg border-gray-800 text-gray-300'}">
                <input type="checkbox" ${fashionBuilderCfg.qualityId === q.id ? 'checked' : ''} onchange="updateFashionCfg('qualityId', '${q.id}')" class="accent-yellow-400">
                <span>${q.name} <b class="text-cp-green">×${q.mult}</b></span>
              </label>
            `).join("")}
          </div>
        </div>

        <!-- БРОНИРОВАНИЕ (ОС / ЗУ) -->
        <div class="space-y-1.5">
          <div class="text-[11px] font-bold uppercase text-cp-cyan">3. Укрепление бронёй (ОС / ЗУ для ${weightRu.toLowerCase()}й одежды):</div>
          <div class="flex flex-wrap gap-1.5">
            ${spOptions.map(sp => {
                const row = FASHION_ARMOR_TABLE[sp][calc.weight];
                return `
                  <button type="button" onclick="updateFashionCfg('sp', ${sp})"
                    class="px-2.5 py-1.5 text-xs font-bold border transition-all ${fashionBuilderCfg.sp === sp ? 'bg-cp-cyan text-black border-cp-cyan' : 'bg-cp-bg text-gray-300 border-gray-800 hover:border-cp-cyan'}">
                    ОС ${sp} ${row.zu < 0 ? `(ЗУ ${row.zu})` : ''}
                  </button>
                `;
            }).join("")}
          </div>
        </div>

        <!-- ОСОБЫЕ ДОПОЛНЕНИЯ (С ВСПЛЫВАЮЩИМИ ОПИСАНИЯМИ ПРИ НАВЕДЕНИИ) -->
        <div class="space-y-1.5">
          <div class="text-[11px] font-bold uppercase text-purple-400">4. Особые дополнения (наведите курсор для описания):</div>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <label title="За увеличение цены одежды даёт защиту SP20 только против Огня. Для рубашек +100-300%, для брюк/юбок +100-200%, для курток +50-100%."
              class="flex items-center gap-2 p-2 bg-cp-bg border ${fashionBuilderCfg.addonFire ? 'border-cp-red text-white font-bold' : 'border-gray-800 text-gray-300'} cursor-pointer">
              <input type="checkbox" ${fashionBuilderCfg.addonFire ? 'checked' : ''} onchange="updateFashionCfg('addonFire', this.checked)" class="accent-red-500">
              <span>🔥 Огнезащита (SP20)</span>
            </label>
            <label title="Поддерживает до 4 различных цветовых схем. Может быть повреждён ЭМИ или электроразрядами. 5% шанс сбоя в боевых условиях. Цена ×3."
              class="flex items-center gap-2 p-2 bg-cp-bg border ${fashionBuilderCfg.addonPolylog ? 'border-cp-cyan text-white font-bold' : 'border-gray-800 text-gray-300'} cursor-pointer">
              <input type="checkbox" ${fashionBuilderCfg.addonPolylog ? 'checked' : ''} onchange="updateFashionCfg('addonPolylog', this.checked)" class="accent-cyan-400">
              <span>🌈 Материал Polylog (×3)</span>
            </label>
            <label title="Обеспечивает дополнительный комфорт. Бонус +1 к проверкам Выносливости, где важна одежда. Цена ×2."
              class="flex items-center gap-2 p-2 bg-cp-bg border ${fashionBuilderCfg.addonReacti ? 'border-cp-green text-white font-bold' : 'border-gray-800 text-gray-300'} cursor-pointer">
              <input type="checkbox" ${fashionBuilderCfg.addonReacti ? 'checked' : ''} onchange="updateFashionCfg('addonReacti', this.checked)" class="accent-green-400">
              <span>❄️ Панели Reacti-Mesh (×2)</span>
            </label>
            <label title="Одежда состоит из тканевого хрома, выглядя как идеальное серебро. Цена ×5."
              class="flex items-center gap-2 p-2 bg-cp-bg border ${fashionBuilderCfg.addonPolychrome ? 'border-cp-yellow text-white font-bold' : 'border-gray-800 text-gray-300'} cursor-pointer">
              <input type="checkbox" ${fashionBuilderCfg.addonPolychrome ? 'checked' : ''} onchange="updateFashionCfg('addonPolychrome', this.checked)" class="accent-yellow-400">
              <span>✨ Полихромный™ (×5)</span>
            </label>
          </div>

          <!-- САО -->
          <div class="p-2.5 bg-cp-bg border border-gray-800 space-y-1.5"
            title="Система Активного Охлаждения (САО): устанавливается только в среднюю или тяжёлую одежду. Работает на Крио-картриджах (50 eb / 2 часа, 4 деления; усиленный 100 eb / 1 час без проверок). При пробитии брони бросьте 1d10: на 1-3 САО сломана (ремонт Basic Tech Сл 20, 50 eb).">
            <div class="text-[11px] font-bold text-cp-cyan">🧊 Система Активного Охлаждения (САО) ${calc.weight === 'light' ? '<span class="text-cp-red">(Недоступно для лёгкой одежды)</span>' : '(наведите для правил)'}:</div>
            <div class="flex flex-wrap gap-2 text-xs">
              ${[
                { id: "none", label: "Без САО" },
                { id: "torso", label: "Торс (+150 eb, +5)" },
                { id: "legs", label: "Ноги (+200 eb, +3)" },
                { id: "full", label: "Комплект (+350 eb, +8)" }
              ].map(opt => `
                <label class="flex items-center gap-1.5 px-2 py-1 border ${calc.weight === 'light' && opt.id !== 'none' ? 'opacity-40 cursor-not-allowed border-gray-800' : fashionBuilderCfg.saoMode === opt.id ? 'border-cp-cyan bg-cp-cyan/15 text-white font-bold cursor-pointer' : 'border-gray-800 text-gray-300 cursor-pointer'}">
                  <input type="checkbox" ${fashionBuilderCfg.saoMode === opt.id ? 'checked' : ''} ${calc.weight === 'light' && opt.id !== 'none' ? 'disabled' : ''} onchange="updateFashionCfg('saoMode', '${opt.id}')" class="accent-cyan-400">
                  <span>${opt.label}</span>
                </label>
              `).join("")}
            </div>
          </div>
        </div>

        <button type="button" onclick="addConfiguredFashionToCart()"
          class="w-full py-3 bg-cp-green hover:bg-green-400 text-black font-display font-black text-sm uppercase tracking-wider cp-clip shadow-[0_0_15px_rgba(0,255,102,0.3)] transition-all">
          🛒 Добавить в корзину (${calc.finalPrice.toLocaleString("ru-RU")} eb)
        </button>
      </div>
    `;
}

window.addConfiguredFashionToCart = function () {
    const item = DEFAULT_FASHION_ITEMS.find(x => x.id === fashionSelectedId) || DEFAULT_FASHION_ITEMS[0];
    const calc = calculateFashionItemPrice(item);

    const tags = [calc.styleObj.name, calc.qualObj.name];
    if (fashionBuilderCfg.useLeather) tags.push("Кожа");
    if (calc.sp > 0) tags.push(`ОС ${calc.sp}${calc.zu < 0 ? ' / ЗУ ' + calc.zu : ''}`);
    if (fashionBuilderCfg.addonFire) tags.push("Огнезащита");
    if (fashionBuilderCfg.addonPolylog) tags.push("Polylog");
    if (fashionBuilderCfg.addonReacti) tags.push("Reacti-Mesh");
    if (fashionBuilderCfg.addonPolychrome) tags.push("Полихромный");
    if (fashionBuilderCfg.saoMode !== "none" && calc.weight !== "light") tags.push("САО");

    const customId = "fashion-" + Date.now();
    SHOPPING_CART.push({
        sectionKey: "fashion",
        itemId: customId,
        qty: 1,
        customItem: {
            id: customId,
            name: `${item.name} (${tags.join(", ")})`,
            category: "Мода",
            cost: `${calc.finalPrice} eb`
        }
    });

    saveShoppingCartToStorage();
    renderCartDropdownList();
};

// =========================================================================
// ЧАСТЬ 4: ЭКЗОТИКА + ЧАСТЬ 5.2: КОНСТРУКТОР КИБЕРДЕК
// =========================================================================

// 1. Обновляем схему «Экзотики» (Название, Оригинал, Код операции, Игромеханика, Цена, Описание)
SCHEMAS.exotics = [
    { k: "name", l: "Название (рус.)", ph: "Эльфийский биоскульпт" },
    { k: "origName", l: "Оригинальное английское название", ph: "Elf Exotic Package" },
    { k: "surg", l: "Код операции (Н, М, С, КР)", ph: "С", stat: "Код операции", c: "text-cp-yellow" },
    { k: "cost", l: "Цена", ph: "2,500 eb", stat: "Цена", c: "text-cp-green" },
    { k: "mechanics", l: "Игромеханика", ph: "+2 к ПРВЛ, заострённые уши, ПЧ 4d6", stat: "Игромеханика", c: "text-cp-cyan", span: 3 },
    { k: "category", l: "Категория", isCat: true, ph: "Биоскульптинг" },
    { k: "book", l: "Источник", isBook: true, ph: "Chr2" }
];

// Регистрируем deck_builder под родительской вкладкой «Нетраннинг»
PARENT_NAV_MAP.deck_builder = "netrunning_group";

// --- ЛОГИКА КОНСТРУКТОРА КИБЕРДЕК ---
let deckBuilderState = {
    name: "",
    mu: 10,        // База 10 MU (мин 10), +10 MU = +5000 eb
    speed: 0,      // База 0 (мин 0, макс 5), +1 = +2000 eb
    dataWall: 2,   // База 2 (мин 0, макс 10), каждый ур. сверх 2 = +1000 eb
    codeGate: 2,   // База 2 (мин 0, макс 10), каждый ур. сверх 2 = +1000 eb
    cpu: 0,        // База 0 (мин 0), +1 = +10000 eb
    optElectrodes: false, // 10 eb
    optKeyboard: false,   // 100 eb
    optScreenBlocks: 0,   // 100 eb за каждые 30 см²
    optChipReader: false, // 100 eb
    optExtraChips: 0,     // 10 eb за штуку
    optVoxBox: false,     // 300 eb
    optScannerCost: 0     // 0 (нет) | 100 | 200 | 300 eb
};

window.resetDeckBuilder = function () {
    deckBuilderState = {
        name: "",
        mu: 10, speed: 0, dataWall: 2, codeGate: 2, cpu: 0,
        optElectrodes: false, optKeyboard: false, optScreenBlocks: 0,
        optChipReader: false, optExtraChips: 0, optVoxBox: false, optScannerCost: 0
    };
    renderDeckBuilderView();
};

window.adjustDeckStat = function (key, delta) {
    const cur = Number(deckBuilderState[key]) || 0;
    let next = cur + delta;
    if (key === "mu") next = Math.max(10, next);
    else if (key === "speed") next = Math.max(0, Math.min(5, next));
    else if (key === "dataWall" || key === "codeGate") next = Math.max(0, Math.min(10, next));
    else next = Math.max(0, next);

    deckBuilderState[key] = next;
    renderDeckBuilderView();
};

window.setDeckField = function (key, val) {
    deckBuilderState[key] = val;
    renderDeckBuilderView();
};

function calculateDeckBuilderTotal() {
    const s = deckBuilderState;
    const muCost = Math.max(0, (s.mu - 10) / 10) * 5000;
    const speedCost = Math.max(0, s.speed) * 2000;
    const dwCost = Math.max(0, s.dataWall - 2) * 1000;
    const cgCost = Math.max(0, s.codeGate - 2) * 1000;
    const cpuCost = Math.max(0, s.cpu) * 10000;

    let optCost = 0;
    if (s.optElectrodes) optCost += 10;
    if (s.optKeyboard) optCost += 100;
    optCost += Math.max(0, s.optScreenBlocks) * 100;
    if (s.optChipReader) optCost += 100;
    optCost += Math.max(0, s.optExtraChips) * 10;
    if (s.optVoxBox) optCost += 300;
    optCost += Math.max(0, Number(s.optScannerCost) || 0);

    return {
        total: muCost + speedCost + dwCost + cgCost + cpuCost + optCost,
        muCost, speedCost, dwCost, cgCost, cpuCost, optCost
    };
}

function renderDeckBuilderView() {
    const grid = document.getElementById("deckBuilderGrid");
    if (!grid) return;
    const s = deckBuilderState;
    const calc = calculateDeckBuilderTotal();

    const statRow = (label, key, val, step, unit, subInfo, minVal, maxVal) => `
      <div class="bg-cp-bg border border-gray-800 p-3 flex items-center justify-between gap-3">
        <div>
          <div class="text-xs font-bold text-white">${label}</div>
          <div class="text-[10px] text-gray-400 mt-0.5">${subInfo}</div>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button type="button" onclick="adjustDeckStat('${key}', ${-step})" ${val <= minVal ? 'disabled' : ''}
            class="w-7 h-7 border font-bold text-sm flex items-center justify-center transition-colors ${val <= minVal ? 'bg-cp-panel border-gray-800 text-gray-600 cursor-not-allowed' : 'bg-cp-panel border-gray-700 hover:bg-cp-red text-white'}">−</button>
          <div class="w-16 text-center font-display font-black text-sm text-cp-cyan">${val}${unit}</div>
          <button type="button" onclick="adjustDeckStat('${key}', ${step})" ${maxVal !== null && val >= maxVal ? 'disabled' : ''}
            class="w-7 h-7 border font-bold text-sm flex items-center justify-center transition-colors ${maxVal !== null && val >= maxVal ? 'bg-cp-panel border-gray-800 text-gray-600 cursor-not-allowed' : 'bg-cp-panel border-gray-700 hover:bg-cp-green text-white hover:text-black'}">+</button>
        </div>
      </div>
    `;

    grid.innerHTML = `
      <!-- ЛЕВАЯ КОЛОНКА: КОНСТРУКТОР -->
      <div class="col-span-7 bg-cp-panel cp-border p-5 space-y-4">
        <div>
          <label class="block text-[11px] text-cp-cyan font-bold uppercase mb-1">Название вашей кибердеки (необязательно):</label>
          <input type="text" value="${escapeHtmlAttr(s.name)}" oninput="deckBuilderState.name = this.value"
            placeholder="Например: Кастомная дека Arasaka Mk.IV..."
            class="w-full bg-cp-bg border border-gray-700 focus:border-cp-yellow px-3 py-2 text-xs text-white font-bold outline-none">
        </div>

        <div class="space-y-2">
          <div class="text-[11px] font-bold uppercase text-cp-yellow">1. Основные характеристики:</div>
          ${statRow("Память (MU / ЕП)", "mu", s.mu, 10, " MU", "База: 10 MU • Шаг +10 MU = +5,000 eb", 10, null)}
          ${statRow("Скорость деки", "speed", s.speed, 1, "", "База: 0 • Макс: 5 • +1 = +2,000 eb", 0, 5)}
          ${statRow("Стена Данных (Data Wall)", "dataWall", s.dataWall, 1, "", "База: 2 • Макс: 10 • +1 ур. сверх базы = +1,000 eb", 0, 10)}
          ${statRow("Сила Кодовых Врат (Code Gate)", "codeGate", s.codeGate, 1, "", "База: 2 • Макс: 10 • +1 ур. сверх базы = +1,000 eb", 0, 10)}
          ${statRow("Процессоры (ЦПУ / CPU)", "cpu", s.cpu, 1, "", "База: 0 • Каждый ЦПУ = +10,000 eb", 0, null)}
        </div>

        <div class="space-y-2 pt-2 border-t border-gray-800">
          <div class="text-[11px] font-bold uppercase text-cp-cyan">2. Дополнительные опции кибердеки:</div>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <label class="flex items-center justify-between p-2.5 bg-cp-bg border ${s.optElectrodes ? 'border-cp-cyan text-white font-bold' : 'border-gray-800 text-gray-300'} cursor-pointer">
              <span class="flex items-center gap-2"><input type="checkbox" ${s.optElectrodes ? 'checked' : ''} onchange="setDeckField('optElectrodes', this.checked)" class="accent-cyan-400">Комплект электродов</span>
              <span class="text-cp-green font-bold">10 eb</span>
            </label>
            <label class="flex items-center justify-between p-2.5 bg-cp-bg border ${s.optKeyboard ? 'border-cp-cyan text-white font-bold' : 'border-gray-800 text-gray-300'} cursor-pointer">
              <span class="flex items-center gap-2"><input type="checkbox" ${s.optKeyboard ? 'checked' : ''} onchange="setDeckField('optKeyboard', this.checked)" class="accent-cyan-400">Клавиатура</span>
              <span class="text-cp-green font-bold">100 eb</span>
            </label>
            <label class="flex items-center justify-between p-2.5 bg-cp-bg border ${s.optChipReader ? 'border-cp-cyan text-white font-bold' : 'border-gray-800 text-gray-300'} cursor-pointer">
              <span class="flex items-center gap-2"><input type="checkbox" ${s.optChipReader ? 'checked' : ''} onchange="setDeckField('optChipReader', this.checked)" class="accent-cyan-400">Считыватель Чипов</span>
              <span class="text-cp-green font-bold">100 eb</span>
            </label>
            <label class="flex items-center justify-between p-2.5 bg-cp-bg border ${s.optVoxBox ? 'border-cp-cyan text-white font-bold' : 'border-gray-800 text-gray-300'} cursor-pointer">
              <span class="flex items-center gap-2"><input type="checkbox" ${s.optVoxBox ? 'checked' : ''} onchange="setDeckField('optVoxBox', this.checked)" class="accent-cyan-400">ВоксБокс (VoxBox)</span>
              <span class="text-cp-green font-bold">300 eb</span>
            </label>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 bg-cp-bg border border-gray-800 flex items-center justify-between gap-2">
              <div><div class="font-bold text-gray-200">Видеоэкран</div><div class="text-[10px] text-gray-400">100 eb за 30 см²</div></div>
              <div class="flex items-center gap-1">
                <button type="button" onclick="adjustDeckStat('optScreenBlocks', -1)" class="w-6 h-6 bg-cp-panel border border-gray-700 hover:bg-cp-red text-white font-bold">−</button>
                <span class="w-12 text-center font-bold text-cp-cyan">${s.optScreenBlocks * 30}см²</span>
                <button type="button" onclick="adjustDeckStat('optScreenBlocks', 1)" class="w-6 h-6 bg-cp-panel border border-gray-700 hover:bg-cp-green text-white hover:text-black font-bold">+</button>
              </div>
            </div>
            <div class="p-2.5 bg-cp-bg border border-gray-800 flex items-center justify-between gap-2">
              <div><div class="font-bold text-gray-200">Доп. Чипы</div><div class="text-[10px] text-gray-400">10 eb за шт.</div></div>
              <div class="flex items-center gap-1">
                <button type="button" onclick="adjustDeckStat('optExtraChips', -1)" class="w-6 h-6 bg-cp-panel border border-gray-700 hover:bg-cp-red text-white font-bold">−</button>
                <span class="w-10 text-center font-bold text-cp-cyan">${s.optExtraChips}</span>
                <button type="button" onclick="adjustDeckStat('optExtraChips', 1)" class="w-6 h-6 bg-cp-panel border border-gray-700 hover:bg-cp-green text-white hover:text-black font-bold">+</button>
              </div>
            </div>
          </div>

          <div class="p-2.5 bg-cp-bg border border-gray-800 flex items-center justify-between gap-3 text-xs">
            <span class="font-bold text-gray-200">Сканер (100–300 eb):</span>
            <select onchange="setDeckField('optScannerCost', Number(this.value))"
              class="bg-cp-panel border border-gray-700 focus:border-cp-cyan px-3 py-1.5 text-xs text-white outline-none">
              <option value="0" ${s.optScannerCost === 0 ? 'selected' : ''}>Нет (0 eb)</option>
              <option value="100" ${s.optScannerCost === 100 ? 'selected' : ''}>Базовый сканер (100 eb)</option>
              <option value="200" ${s.optScannerCost === 200 ? 'selected' : ''}>Продвинутый сканер (200 eb)</option>
              <option value="300" ${s.optScannerCost === 300 ? 'selected' : ''}>Профессиональный сканер (300 eb)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- ПРАВАЯ КОЛОНКА: ПРАЙС-ЛИСТ И ИТОГОВАЯ КНОПКА В КОРЗИНУ -->
      <div class="col-span-5 space-y-4">
        <div class="bg-cp-panel cp-border p-5 space-y-4">
          <div class="flex items-center justify-between border-b border-gray-800 pb-3">
            <span class="font-display text-sm font-bold uppercase text-cp-yellow">💰 Итоговая стоимость</span>
            <span class="font-display text-2xl font-black text-cp-green">${calc.total.toLocaleString("ru-RU")} eb</span>
          </div>

          <button type="button" onclick="addBuiltDeckToCart()"
            class="w-full py-3.5 bg-cp-green hover:bg-green-400 text-black font-display font-black text-sm uppercase tracking-wider cp-clip shadow-[0_0_15px_rgba(0,255,102,0.3)] transition-all">
            🛒 Добавить кибердеку в корзину (${calc.total.toLocaleString("ru-RU")} eb)
          </button>
        </div>

        <div class="bg-cp-panel cp-border p-5 space-y-3 text-xs">
          <div class="font-display text-xs font-bold uppercase text-cp-cyan border-b border-gray-800 pb-2">📋 Прайс-лист и расценки кибердеки</div>
          <div class="space-y-1.5 text-gray-300">
            <div class="flex justify-between border-b border-gray-800/60 pb-1"><span>Память (база 10 MU)</span><b class="text-cp-green">+5,000 eb / +10 MU</b></div>
            <div class="flex justify-between border-b border-gray-800/60 pb-1"><span>Скорость (0–5)</span><b class="text-cp-green">+2,000 eb / ур.</b></div>
            <div class="flex justify-between border-b border-gray-800/60 pb-1"><span>Стена Данных (база 2, макс 10)</span><b class="text-cp-green">+1,000 eb / ур.</b></div>
            <div class="flex justify-between border-b border-gray-800/60 pb-1"><span>Кодовые Врата (база 2, макс 10)</span><b class="text-cp-green">+1,000 eb / ур.</b></div>
            <div class="flex justify-between border-b border-gray-800/60 pb-1"><span>Доп. Процессор (ЦПУ)</span><b class="text-cp-green">+10,000 eb / шт.</b></div>
            <div class="pt-2 text-[11px] font-bold uppercase text-cp-yellow">Опции:</div>
            <div class="flex justify-between"><span>Комплект электродов</span><b class="text-cp-green">10 eb</b></div>
            <div class="flex justify-between"><span>Клавиатура</span><b class="text-cp-green">100 eb</b></div>
            <div class="flex justify-between"><span>Видеоэкран</span><b class="text-cp-green">100 eb / 30 см²</b></div>
            <div class="flex justify-between"><span>Считыватель Чипов</span><b class="text-cp-green">100 eb</b></div>
            <div class="flex justify-between"><span>Дополнительные Чипы</span><b class="text-cp-green">10 eb / шт.</b></div>
            <div class="flex justify-between"><span>ВоксБокс (VoxBox)</span><b class="text-cp-green">300 eb</b></div>
            <div class="flex justify-between"><span>Сканер</span><b class="text-cp-green">100–300 eb</b></div>
          </div>
        </div>
      </div>
    `;
}

window.addBuiltDeckToCart = function () {
    const s = deckBuilderState;
    const calc = calculateDeckBuilderTotal();
    const deckName = (s.name || "").trim() || `Кастомная кибердека (${s.mu} MU, Скор. ${s.speed})`;

    const optionsList = [];
    if (s.optElectrodes) optionsList.push("Комплект электродов (10 eb)");
    if (s.optKeyboard) optionsList.push("Клавиатура (100 eb)");
    if (s.optScreenBlocks > 0) optionsList.push(`Видеоэкран ${s.optScreenBlocks * 30} см² (${s.optScreenBlocks * 100} eb)`);
    if (s.optChipReader) optionsList.push("Считыватель Чипов (100 eb)");
    if (s.optExtraChips > 0) optionsList.push(`Доп. Чипы ×${s.optExtraChips} (${s.optExtraChips * 10} eb)`);
    if (s.optVoxBox) optionsList.push("ВоксБокс (300 eb)");
    if (s.optScannerCost > 0) optionsList.push(`Сканер (${s.optScannerCost} eb)`);

    const customId = "custom-deck-" + Date.now();
    SHOPPING_CART.push({
        sectionKey: "deck_builder",
        itemId: customId,
        qty: 1,
        customItem: {
            id: customId,
            kind: "custom_deck",
            name: deckName,
            category: "Кастомная кибердека",
            cost: `${calc.total} eb`,
            stats: { mu: s.mu, speed: s.speed, dataWall: s.dataWall, codeGate: s.codeGate, cpu: s.cpu },
            options: optionsList
        }
    });

    saveShoppingCartToStorage();
    renderCartDropdownList();
};

// Просмотр карточки собранной деки (или кастомной одежды) по клику из Корзины
const _prevOpenCartItemCardV3 = window.openCartItemCard;
window.openCartItemCard = function (sectionKey, itemId) {
    const entry = SHOPPING_CART.find(c => c.itemId === itemId);
    if (entry && entry.customItem) {
        closeCartDropdown();
        const ci = entry.customItem;
        const modal = document.getElementById("customCartItemModal");
        const titleEl = document.getElementById("customCartModalTitle");
        const subEl = document.getElementById("customCartModalSub");
        const bodyEl = document.getElementById("customCartModalBody");
        if (!modal || !bodyEl) return;

        if (titleEl) titleEl.textContent = ci.name;
        if (subEl) subEl.textContent = ci.kind === "custom_deck" ? "СОБРАННАЯ КИБЕРДЕКА // КАРТОЧКА" : "СОБРАННЫЙ ПРЕДМЕТ // КОРЗИНА";

        if (ci.kind === "custom_deck" && ci.stats) {
            bodyEl.innerHTML = `
              <div class="grid grid-cols-5 gap-2 text-center">
                <div class="bg-cp-bg border border-gray-800 p-2"><div class="text-[9px] text-gray-400">Память</div><b class="text-cp-cyan text-sm">${ci.stats.mu} MU</b></div>
                <div class="bg-cp-bg border border-gray-800 p-2"><div class="text-[9px] text-gray-400">Скорость</div><b class="text-cp-green text-sm">+${ci.stats.speed}</b></div>
                <div class="bg-cp-bg border border-gray-800 p-2"><div class="text-[9px] text-gray-400">Стена</div><b class="text-cp-yellow text-sm">${ci.stats.dataWall}</b></div>
                <div class="bg-cp-bg border border-gray-800 p-2"><div class="text-[9px] text-gray-400">Врата</div><b class="text-cp-yellow text-sm">${ci.stats.codeGate}</b></div>
                <div class="bg-cp-bg border border-gray-800 p-2"><div class="text-[9px] text-gray-400">ЦПУ</div><b class="text-white text-sm">${ci.stats.cpu}</b></div>
              </div>
              <div class="bg-cp-bg border-l-2 border-cp-cyan p-3">
                <div class="text-[10px] font-bold uppercase text-cp-cyan mb-1">Установленные опции:</div>
                <div class="text-gray-200">${ci.options && ci.options.length > 0 ? ci.options.join(" • ") : "Базовая комплектация без доп. опций"}</div>
              </div>
              <div class="flex justify-between items-center bg-cp-bg border border-gray-800 p-3">
                <span class="text-gray-400 uppercase font-bold text-[11px]">Итоговая цена сборки:</span>
                <span class="font-display font-black text-base text-cp-green">${ci.cost}</span>
              </div>
            `;
        } else {
            bodyEl.innerHTML = `
              <div class="bg-cp-bg border border-gray-800 p-3.5 text-gray-200">${escapeHtmlAttr(ci.name)}</div>
              <div class="flex justify-between items-center bg-cp-bg border border-gray-800 p-3">
                <span class="text-gray-400 uppercase font-bold text-[11px]">Цена:</span>
                <span class="font-display font-black text-base text-cp-green">${ci.cost}</span>
              </div>
            `;
        }
        modal.classList.remove("hidden");
        return;
    }
    _prevOpenCartItemCardV3(sectionKey, itemId);
};

window.closeCustomCartItemModal = function () {
    document.getElementById("customCartItemModal")?.classList.add("hidden");
};

// =========================================================================
// БОЕВЫЕ ИСКУССТВА: ТАБЛИЦЫ ДЕЙСТВИЙ, КОНСТРУКТОР И ПОДСКАЗКИ ПРИ НАВЕДЕНИИ
// =========================================================================

const MA_TABLE_1 = [
    { k: "ma_strike", short: "Удар",  full: "Удар оружием (Strike)" },
    { k: "ma_punch",  short: "Кулак", full: "Удар рукой (Punch)" },
    { k: "ma_sweep",  short: "Подс",  full: "Подсечка (Sweep / Trip)" },
    { k: "ma_dodge",  short: "Уклон", full: "Уклонение (Dodge)" },
    { k: "ma_throw",  short: "Брос",  full: "Бросок (Throw)" },
    { k: "ma_choke",  short: "Удуш",  full: "Удушение и сдавливание (Choke / Crush)" },
    { k: "ma_ram",    short: "Таран", full: "Таран (Ram)" }
];

const MA_TABLE_2 = [
    { k: "ma_disarm",   short: "Обез",   full: "Обезоруживание (Disarm)" },
    { k: "ma_kick",     short: "Нога",   full: "Удар ногой (Kick)" },
    { k: "ma_block",    short: "Блок",   full: "Блок / парирование (Block / Parry)" },
    { k: "ma_grapple",  short: "Захват", full: "Захват (Grapple)" },
    { k: "ma_hold",     short: "Удерж",  full: "Удержание и залом (Hold / Break)" },
    { k: "ma_escape",   short: "Освоб",  full: "Освобождение (Escape)" },
    { k: "ma_cast",     short: "Метан",  full: "Метание (Cast)" }
];

const MA_ACTION_TOOLTIPS = {
    ma_strike: {
        title: "Удар оружием (Strike)",
        text: `Это атака с использованием оружия, предназначенного для боевых искусств. Подходящее оружие и соответствующие ему стили перечислены в разделе Martial Arts Weapons.

Для выполнения атаки используются следующие навыки:
• Боевые искусства (Martial Arts).
• Фехтование (Fencing) для клинкового оружия.
• Ближний бой (Melee) для тупого и импровизированного оружия.
• К импровизированному оружию относятся предметы, которые в экстренной ситуации можно использовать для нападения: бутылки, биты, сковородки и тому подобное. Их характеристики определяет мастер.

Модификаторы атаки:
Бонус ключевой атаки «Удар» + точность оружия (WA).
Ключевой удар оружием имеют следующие стили: Тэ, Ниндзюцу, Джит Кун До, Чой Ли Фут, Тайцзи-цюань и Самбо.
Если это ключевая атака, то это действие имеет бонус к урону равный уровню этого Боевого Искусства.`
    },
    ma_punch: {
        title: "Удар рукой (Punch)",
        text: `Обычный человек может атаковать двумя руками: правой и левой. Базовый урон удара рукой составляет 1D6/2.

Киберконечности увеличивают урон:
• Обычная киберрука — 1D6
• Утолщённые миомары (Thickened Myomars) — 2D6
• Гидравлические усилители (Hydraulic Rams) — 3D6

Удар рукой включает не только привычный удар кулаком, но и джебы, удары локтем, ребром ладони и открытой ладонью.
Если персонаж владеет стилем с ключевой атакой «Удар рукой», он может атаковать обеими руками одновременно без штрафа за использование двух оружий. Для обычной Драки это послабление не действует.
Оружие, закреплённое непосредственно на руке (например, кастет или кибероружие), также можно использовать в такой атаке без дополнительного штрафа. Оружие, которое персонаж просто держит в руке и может уронить, используется через Strike.

Навык: Боевые искусства или Драка.
Модификаторы: Бонус ключевой атаки «Удар рукой» + точность установленного оружия (WA).
Если это ключевая атака, то это действие имеет бонус к урону равный уровню этого Боевого Искусства.`
    },
    ma_sweep: {
        title: "Подсечка (Sweep / Trip)",
        text: `Персонаж использует ноги, чтобы сбить противника с ног.
Упавший противник получает −2 ко всем атакам до тех пор, пока не поднимется. На подъём требуется одно действие. Атакующий, в свою очередь, получает +2 к своим атакам против лежащего противника.
Повторно подсечь уже лежащую цель нельзя: сначала она должна встать.

Подсечка с ударом ногой:
Если персонаж владеет ключевой атакой «Удар ногой», он может выполнить специальную разновидность подсечки. За неё назначается дополнительный штраф −3 к попаданию.
При успешном попадании:
• Наносится 1D6+3 урона.
• Противник выполняет проверку оглушения (Stun Save) со штрафом −2.
• Если используются киберноги, вместо обычного урона берётся их урон от удара ногой с добавлением +3 (например, гидравлические усилители наносят 6D6+3).

Навык: только Боевые искусства.
Модификаторы: Бонус ключевой атаки «Подсечка» + бонус точности оружия (WA), если используется соответствующее оружие.
Ключевая подсечка имеется у Тхэквондо, Тэ, Коппо, Ниндзюцу, Джит Кун До, Звериного кунг-фу, Чой Ли Фут, Дзюдо, Борьбы, Айкидо, Самбо и Капоэйры.`
    },
    ma_dodge: {
        title: "Уклонение (Dodge)",
        text: `Уклонение представляет собой защитный манёвр, при котором персонаж полностью избегает контакта с атакой. При успешной проверке персонаж не получает урона.

Даже при провале проверки персонаж с ключевой защитой «Уклонение» может уменьшить полученный урон:
1. Сначала учитывается броня.
2. Затем из оставшегося урона вычитается уровень Боевых искусств.
3. После этого применяется BTM.

Используемые навыки: Боевые искусства, Уклонение и освобождение либо Атлетика (выбирает мастер).
Модификатор: Бонус ключевой защиты «Уклонение».
Ключевую защиту «Уклонение» имеют Тхэквондо, Тэ, Сумо, Джит Кун До, Чой Ли Фут, Тайцзи-цюань, Дзюдо, Айкидо, Бокс, Сават и Капоэйра.
Как и при блокировании, боец может уклоняться от летящих предметов, если заметил их бросок проверкой Внимания (с теми же бонусами по размеру предмета).

Полная защита (All-Out Parry / All-Out Dodge):
Доступна всем персонажам. За раунд можно объявить только одну такую защиту (штраф −3 ко всем остальным действиям).
• Полное парирование: все атаки ближним оружием (и метательным для мастера БИ) автоматически принимаются на предмет защиты (проверяется на поломку).
• Полное уклонение: все атаки противника получают −2 к попаданию (для мастеров БИ действует и против метательных атак).
• При наличии ключевых защит можно уменьшать урон в соответствии с уровнем навыков (в некоторых сочетаниях — дважды).
Боевые искусства не спасают от огнестрельного оружия, лазеров, газа, кислоты и подобных угроз.`
    },
    ma_throw: {
        title: "Бросок (Throw)",
        text: `Бросок можно провести, когда противник уже захвачен или удерживается.

При успешном броске:
• Противник получает 1D6 урона.
• Проходит проверку оглушения с модификатором +2.
• До момента подъёма (одно действие) получает −2 ко всем атакам.
• Атакующий получает +2 к атакам против упавшего противника.
• Для повторения приёма необходимо снова захватить противника.

Броня не защищает от урона броска, за исключением персонажей в полном кибернетическом теле (Fullborg).
При расчёте урона добавляются модификатор урона тела и уровень Боевых искусств атакующего (если используется этот навык), затем вычитается BTM цели.
При провале проверки противники остаются в захвате.

Используемые навыки: Боевые искусства или Атлетика.
Модификатор: Бонус ключевой атаки «Бросок».
Если это ключевая атака, имеет бонус к урону равный уровню этого Боевого Искусства.
Ключевой бросок доступен Сумо, Чой Ли Фут, Дзюдо, Борьбе, Айкидо и Самбо.`
    },
    ma_choke: {
        title: "Удушение и сдавливание (Choke / Crush)",
        text: `Эти приёмы можно применять к противнику, которого уже удалось захватить.
• Удушение (Choke): контроль головы или корпуса, проверка против освобождения.
• Сдавливание (Crush): киберрукой можно физически раздавить любую часть тела.

При успехе противник получает −2 ко всем действиям, кроме освобождения. Если противник уже в удержании, дополнительная проверка не нужна. Приёмы непрерывные — урон наносится каждый раунд, пока цель не освободится.

Урон от удушения:
1D6 + бонус WA (при оружии БИ) + модификатор BODY + уровень Martial Arts (если ключевая атака).
Обычная броня не защищает (кроме спецзащиты шеи). Fullborg не подвержены обычному удушению.

Урон от сдавливания:
• Стандартная киберрука — 2D6
• Утолщённые миомары — 4D6
• Гидравлические усилители — 6D6
При ключевой атаке «Удушение» прибавляется уровень БИ (модификатор BODY не применяется). При одновременном удушении и сдавливании берётся больший урон.

Навыки: Боевые искусства или Драка.
Модификатор: Бонус ключевой атаки «Удушение».
Ключевое удушение доступно Коппо, Ниндзюцу, Борьбе и Айкидо.`
    },
    ma_ram: {
        title: "Таран (Ram)",
        text: `Атака с разбега, при которой персонаж использует массу тела, чтобы врезаться в противника и сбить его с ног.
Навыки: Боевые искусства (или Атлетика со специализацией).
Модификаторы: Бонус ключевой атаки «Таран» − штраф за разбег.
Ключевой таран есть только у Сумо.

Урон = Базовый урон по BODY + уровень Martial Arts (если ключевая атака) + бонус разбега (дробные округляются вверх).

Базовый урон тарана по BODY:
• 2: 1D6−2  |  3–4: 1D6−1  |  5: 1D6
• 6–7: 2D6  |  8–9: 2D6+1  |  10: 2D6+2
• 11–12: 3D6+4  |  13–14: 3D6+6  |  15: 3D6+8
• 16–20: 4D6+8  |  Далее каждая ед. BODY: +1D6

Дистанция разбега (Бонус к урону / Штраф к попаданию):
• Без разбега: 0 / 0
• 1/4 бега: 1/4 ур. MA / −2
• 1/3 бега: 1/3 ур. MA / −4
• 1/2 бега: 1/2 ур. MA / −6

Защита: рекомендуется Уклонение. При провале — проверка удержаться на ногах (BODY + Strength Feat + 1D10 против урона). При провале цель падает, проверка оглушения (−2), −2 к след. атаке (+2 атакующему). При успешном Блоке защищающийся наносит урон своим оружием (не уменьшается блоком/уклонением атакующего), но сам проходит проверку падения.`
    },
    ma_disarm: {
        title: "Обезоруживание (Disarm)",
        text: `При успешном обезоруживании противник теряет оружие, которое держал в руках.
Атакующий делает проверку с навыком и REF. Если есть ключевая атака «Обезоруживание», добавляется её бонус; если нет — применяется BTM противника.

Дополнительные модификаторы:
• Противник в All-Out Parry: +6 атакующему.
• Противник в All-Out Dodge: −3 атакующему.
• При обезоруживании оружием учитывается его WA.
• Размер оружия противника: Обычное (винтовка, меч) 0 | Маленькое (пистолет, ПП, нож) −4 | Крошечное (сюрикен, дерринджер) −6.

Защищающийся использует: Уклонение и освобождение, Атлетику или БИ с ключевой защитой «Уклонение» (Фехтование и Ближний бой нельзя).
При успехе оружие выбивается без урона. Встроенное или имплантированное оружие (росомахи, шипованные перчатки) отнять нельзя.`
    },
    ma_kick: {
        title: "Удар ногой (Kick)",
        text: `Базовый урон удара ногой составляет 1D6.

Киберноги увеличивают урон:
• Обычная кибернога — 2D6
• Утолщённые миомары — 4D6
• Гидравлические усилители — 6D6

Стили, позволяющие атаковать обеими ногами одновременно без штрафа: Сават, Капоэйра, Тхэквондо, Тайский бокс.
Атаки обеими руками или обеими ногами считаются одним действием. Комбинация удара рукой и ногой требует двух действий (штраф −3 на второе).
Оружие, встроенное в ногу или обувь (шипы, лезвия), можно использовать в такой атаке.

Навык: Боевые искусства или Драка.
Модификаторы: Бонус ключевой атаки «Удар ногой» + точность установленного оружия (WA).
Если это ключевая атака, имеет бонус к урону равный уровню этого Боевого Искусства.`
    },
    ma_block: {
        title: "Блок / парирование (Block / Parry)",
        text: `Остановка атаки перехватом оружием, руками или ногами. Перед броском нужно объявить, чем именно блокируется удар.
Навыки: Боевые искусства, Фехтование (клинки), Ближний бой (тупое/импровизированное), Драка (руки/ноги).
Модификаторы: Бонус ключевой защиты «Блок» + WA оружия.
Ключевая защита «Блок» есть у Каратэ, Тхэквондо, Коппо, Ниндзюцу, Джит Кун До, Звериного кунг-фу, Чой Ли Фут, Тайцзи-цюань, Айкидо, Бокса, Тайского бокса, Савата и Капоэйры.

Поломка клинкового оружия при парировании (бросок 1D10):
• Обычный клинок: 1  |  Mono-Two: 1–2
• Обычный моноклинок: 1–4  |  Энергетический меч (Powersword): 1–5

Если нет SDP, используются очки парирования PP (= макс. урон предмета; огнестрел: духовая трубка 0, лук 5, пистолет 10, ПП 15, винтовка/дробовик 20). При PP = 0 предмет ломается.
Даже при провале или поломке персонаж с ключевой защитой «Блок» уменьшает урон: 1) Броня → 2) минус уровень БИ → 3) BTM.

Парирование летящих предметов (после проверки Внимания):
Копьё / метательный топор: +6 | Стрела / болт: +4 | Сюрикен / дротик: 0.`
    },
    ma_grapple: {
        title: "Захват (Grapple)",
        text: `Переход с дистанции удара на дистанцию борьбы. Открывает приёмы: Бросок (Throw), Удержание/Залом (Hold/Break), Удушение/Сдавливание (Choke/Crush).
Защищающийся может помешать парированием, уклонением или освобождением. Если защищающийся сам пытается провести захват, оба автоматически переходят в борьбу без проверок и штрафов.

Захваченный противник получает штраф −2 ко всем действиям, кроме освобождения. Захват — непрерывное состояние. Чтобы выйти из борьбы на дистанцию ударов, нужно сначала освободиться (если в захвате), затем пройти парирование или уклонение.

Навыки: Боевые искусства или Драка.
Модификатор: Бонус ключевой атаки «Захват».
Ключевой захват доступен Сумо, Коппо, Ниндзюцу, Чой Ли Фут, Тайцзи-цюань, Дзюдо, Борьбе, Айкидо, Самбо и Тайскому боксу.`
    },
    ma_hold: {
        title: "Удержание и залом (Hold / Break)",
        text: `Для удержания необходимо сначала захватить противника.
При успешном удержании противник может предпринимать только попытки освобождения, а атакующий может без дополнительной проверки выполнить Бросок или Удушение/Сдавливание.

Залом (Break):
Направлен на повреждение суставов (нужно удерживать руку или ногу). Требует отдельной проверки против освобождения на следующем действии.
При успешном заломе:
• Наносится 1D6 урона + проверка оглушения (+2).
• Броня и кибертела не защищают (удар по суставам).
• Против двухсуставных киберконечностей штраф −4.
• Перелом обычной конечности: 9 урона за атаку. Киберконечности получают накопительный урон в SDP (20 — не работает, 30 — разрушена).

Удержание и залом — непрерывные действия (урон от залома не чаще раза за раунд).
Навык: только Боевые искусства.
Модификатор: Бонус ключевой атаки «Удержание».
Доступно Сумо, Коппо, Ниндзюцу, Дзюдо, Борьбе, Айкидо и Самбо.`
    },
    ma_escape: {
        title: "Освобождение (Escape)",
        text: `Защитный приём для выхода из состояний борьбы. Каждая успешная проверка переводит на одну ступень выше:
Залом → Удержание / Удушение / Сдавливание → Захват → Дистанция борьбы.

Навыки: Боевые искусства или Уклонение и освобождение (Dodge & Escape).
Модификатор: Бонус ключевой защиты «Освобождение».
Ключевое освобождение доступно Сумо, Коппо, Ниндзюцу, Дзюдо, Борьбе, Айкидо и Самбо.

Освобождение как атакующее действие:
Можно активно вырваться из борьбы против Захвата/Удержания/Удушения врага — при победе персонаж переходит на дистанцию удара или метания.`
    },
    ma_cast: {
        title: "Метание (Cast)",
        text: `Относится к категории Strike, применяется для луков и метательного оружия (сюрикены, дротики, копья и др.).
Навыки: Боевые искусства, Стрельба из лука (Archery) или Атлетика (Athletics).

Рассчитывается по правилам стрельбы, но противник с БИ может заметить бросок проверкой Внимания и уклониться/отбить его (встречная проверка).
Модификаторы: Бонус ключевой атаки «Удар» + WA + штраф дистанции.
Ключевое метание доступно Ниндзюцу, Чой Ли Фут и Тайцзи-цюань.

Штрафы дистанции:
• Рукопашная: −5  |  Близкая: 0  |  Средняя: −5  |  Дальняя: −10  |  Предельная: −15`
    },
    ma_weapons: {
        title: "Список оружия боевых искусств",
        text: `Не любое оружие можно использовать с любым боевым искусством. Если стиль не соответствует конкретному оружию, персонаж использует Ближний бой для проверки попадания и не получает бонус к урону от Боевых искусств.`
    }
};

// Показ подробной подсказки при наведении на блок действия БИ
window.showMaActionTooltip = function (ev, actionKey) {
    clearTimeout(cardHoverHideTimer);
    clearTimeout(cardHoverShowTimer);

    const info = MA_ACTION_TOOLTIPS[actionKey];
    if (!info) return;

    const targetEl = ev.currentTarget || ev.target;
    const rect = targetEl.getBoundingClientRect();

    cardHoverShowTimer = setTimeout(() => {
        const pop = document.getElementById("cardHoverPreviewPopover");
        if (!pop) return;

        pop.innerHTML = `
          <div class="space-y-2 max-h-[65vh] overflow-y-auto pr-1">
            <div class="border-b border-gray-800 pb-1.5 sticky top-0 bg-cp-panel">
              <div class="text-[9px] font-bold uppercase tracking-widest text-cp-cyan">СПРАВКА БОЕВЫХ ИСКУССТВ</div>
              <div class="font-display font-black text-sm text-cp-yellow mt-0.5">${escapeHtmlAttr(info.title)}</div>
            </div>
            <div class="text-[11px] text-gray-200 leading-relaxed whitespace-pre-line">${escapeHtmlAttr(info.text)}</div>
          </div>
        `;
        pop.classList.remove("hidden");

        const popWidth = pop.offsetWidth || 430;
        const popHeight = pop.offsetHeight || 260;

        let left = rect.left;
        if (left + popWidth > window.innerWidth - 16) {
            left = Math.max(12, window.innerWidth - popWidth - 16);
        }
        let top = rect.bottom + 8;
        if (top + popHeight > window.innerHeight - 12) {
            top = Math.max(12, rect.top - popHeight - 8);
        }

        pop.style.left = `${Math.round(left)}px`;
        pop.style.top = `${Math.round(top)}px`;
    }, 200);
};

// Перехватываем конструктор setBuilderType для раздела martial_arts
const _prevSetBuilderTypeForMA = setBuilderType;
setBuilderType = function (type, itemToEdit = null) {
    _prevSetBuilderTypeForMA(type, itemToEdit);
    if (type !== "martial_arts") return;

    const container = document.getElementById("builderFieldsContainer");
    if (!container) return;
    const v = itemToEdit || {};
    const cats = getAllCategoriesForSection("martial_arts");
    const books = getAllBookSources();

    const makeTableInputs = (cols) => cols.map(c => `
      <div class="bg-cp-bg border border-gray-800 p-1.5 text-center">
        <label class="block text-[10px] font-bold text-cp-cyan mb-1 truncate" title="${escapeHtmlAttr(c.full)}">${c.short}</label>
        <input name="${c.k}" value="${escapeHtmlAttr(v[c.k] && v[c.k] !== '—' ? v[c.k] : '')}" placeholder="—"
          class="w-full bg-cp-panel border border-gray-700 focus:border-cp-yellow p-1 text-xs text-center text-white font-bold outline-none">
      </div>
    `).join("");

    container.innerHTML = `
      <datalist id="dl-builder-cat">${cats.map(c => `<option value="${escapeHtmlAttr(c)}">`).join("")}</datalist>
      <datalist id="dl-builder-book">${books.map(b => `<option value="${escapeHtmlAttr(b)}">`).join("")}</datalist>
      <div class="grid grid-cols-2 gap-3.5">
        <div><label class="text-[11px] text-gray-400">Название боевого искусства (рус.)</label><input name="name" value="${escapeHtmlAttr(v.name || '')}" placeholder="Каратэ / Арасака-те" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>
        <div><label class="text-[11px] text-gray-400">Оригинальное название (англ.)</label><input name="origName" value="${escapeHtmlAttr(v.origName || '')}" placeholder="Karate / Arasaka-te" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>
        <div><label class="text-[11px] text-cp-yellow font-bold">Модификатор ОУ (очков улучшения)</label><input name="ipMod" value="${escapeHtmlAttr(v.ipMod || '')}" placeholder="×2 / ×3 / ×4" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-cp-yellow font-bold"></div>
        <div><label class="text-[11px] text-cp-cyan font-bold">Категория / Школа</label><input name="category" list="dl-builder-cat" value="${escapeHtmlAttr(v.category || '')}" placeholder="Ударные стили" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>
        <div class="col-span-2"><label class="text-[11px] text-cp-yellow font-bold">Книга-источник</label><input name="book" list="dl-builder-book" value="${escapeHtmlAttr(v.book || '')}" placeholder="CP20 / PAC" class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white"></div>
      </div>

      <div class="bg-cp-panel border border-cp-cyan/40 p-3 space-y-2.5">
        <div class="text-[11px] font-bold uppercase text-cp-cyan">🥋 Таблица 1 (Ключевые действия и бонусы):</div>
        <div class="grid grid-cols-7 gap-1.5">${makeTableInputs(MA_TABLE_1)}</div>
        <div class="text-[11px] font-bold uppercase text-cp-yellow pt-1">🥋 Таблица 2 (Ключевые действия и бонусы):</div>
        <div class="grid grid-cols-7 gap-1.5">${makeTableInputs(MA_TABLE_2)}</div>
      </div>

      <div>
        <label class="text-[11px] text-cp-cyan font-bold">⚔️ Список оружия (подходящего для стиля)</label>
        <textarea name="weaponsList" rows="2" placeholder="Катана, нунчаки, бо, сюрикены..." class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white">${v.weaponsList && v.weaponsList !== '—' ? v.weaponsList : ''}</textarea>
      </div>
      <div>
        <label class="text-[11px] text-gray-400">Описание стиля</label>
        <textarea name="desc" rows="4" placeholder="История, философия и особенности боевого искусства..." class="w-full bg-cp-panel border border-gray-700 p-2 text-xs text-white">${v.desc || ''}</textarea>
      </div>
    `;
    attachRichToolbarsToBuilderTextareas();
};

// Кастомный рендер детальной карточки для Боевых Искусств
const _prevRenderDetailCardForMA = renderDetailCard;
renderDetailCard = function (item) {
    if (activeCatalogTab !== "martial_arts" || !item) {
        _prevRenderDetailCardForMA(item);
        return;
    }

    const box = document.getElementById("detailCard");
    if (!box) return;
    box.setAttribute("data-rendered-id", item.id);

    const addedHeaderBadge = item.isUser ? `<span class="ml-2 text-[10px] bg-cp-yellow/20 text-cp-yellow border border-cp-yellow/40 px-1.5 py-0.5 font-bold align-middle">HOMEBREW</span>` : "";

    const renderActionRow = (cols) => `
      <div class="grid grid-cols-7 gap-1 text-center">
        ${cols.map(c => {
            const rawVal = dash(item[c.k]);
            const hasBonus = rawVal !== "—" && rawVal !== "0";
            return `
              <div onmouseenter="showMaActionTooltip(event, '${c.k}')" onmouseleave="scheduleHideCardHoverPreview()"
                class="bg-cp-bg border ${hasBonus ? 'border-cp-cyan/70 bg-cp-cyan/5' : 'border-gray-800'} hover:border-cp-yellow cursor-help transition-colors overflow-hidden">
                <div class="bg-black/60 border-b border-gray-800 py-1 px-0.5 text-[10px] font-bold uppercase ${hasBonus ? 'text-cp-cyan' : 'text-gray-400'} truncate">${c.short}</div>
                <div class="py-1.5 text-xs font-display font-black ${hasBonus ? 'text-cp-yellow' : 'text-gray-600'}">${escapeHtmlAttr(rawVal)}</div>
              </div>
            `;
        }).join("")}
      </div>
    `;

    const weaponsHtml = `
      <div onmouseenter="showMaActionTooltip(event, 'ma_weapons')" onmouseleave="scheduleHideCardHoverPreview()"
        class="bg-cp-bg border-l-2 border-cp-cyan p-3.5 mb-4 cursor-help hover:bg-cp-cyan/5 transition-colors">
        <div class="flex items-center justify-between mb-1">
          <span class="text-[11px] font-bold uppercase text-cp-cyan">⚔️ Список оружия:</span>
          <span class="text-[10px] text-gray-500">ℹ️ наведите для правил</span>
        </div>
        <div class="text-xs text-gray-200 leading-relaxed whitespace-pre-line">${item.weaponsList && String(item.weaponsList).trim() !== "" ? formatRichTextWithLinks(item.weaponsList) : "—"}</div>
      </div>
    `;

    box.innerHTML = `
      <div class="border-b border-gray-800 pb-3 mb-4 flex items-start justify-between gap-3">
        <div>
          <div class="text-xs text-cp-cyan uppercase font-bold">${dash(item.category)} // Источник: ${dash(item.book)} ${addedHeaderBadge}</div>
          <h2 class="font-display text-2xl font-black text-white mt-1">${dash(item.name)}</h2>
          <div class="text-xs text-gray-500">Оригинал: ${dash(item.origName)}</div>
        </div>
        ${renderCardActionButtons("martial_arts", item.id)}
      </div>

      <div class="bg-cp-bg border border-gray-800 p-3 mb-4 flex items-center justify-between">
        <span class="text-xs font-bold uppercase text-gray-400">Модификатор ОУ (очков улучшения):</span>
        <span class="px-3 py-1 bg-cp-yellow/15 border border-cp-yellow/60 text-cp-yellow font-display font-black text-sm">${dash(item.ipMod)}</span>
      </div>

      <div class="space-y-2 mb-4">
        <div class="flex items-center justify-between text-[10px] text-gray-400 uppercase font-bold">
          <span class="text-cp-cyan">Ключевые действия и бонусы стиля</span>
          <span>ℹ️ Наведите курсор на действие для подробных правил</span>
        </div>
        ${renderActionRow(MA_TABLE_1)}
        ${renderActionRow(MA_TABLE_2)}
      </div>

      ${weaponsHtml}
      ${item.desc && String(item.desc).trim() !== "" ? `<div class="bg-cp-bg/90 border-l-2 border-cp-yellow p-3.5 text-xs leading-relaxed text-gray-200 whitespace-pre-line">${formatRichTextWithLinks(item.desc)}</div>` : ""}
      ${renderCardGalleryBlockHTML(item)}
      ${renderCommentsSectionHTML(item.id)}
    `;

    if (typeof loadCommentsForCardFromCloud === "function") {
        loadCommentsForCardFromCloud(item.id, false);
    }
};
// =========================================================================
// ЧАСТЬ 5.3: КОНСТРУКТОР ДАТАФОРТОВ (СЕТКА 20x20, ИИ, НАВЫКИ, ИКОНКИ)
// =========================================================================

PARENT_NAV_MAP.datafort = "netrunning_group";

const DF_REMOTES = [
    { id: "rem_manip",    name: "Манипуляторы", desc: "Предназначены для ремонтных задач, покраски или выполнения любого другого вида «ручной» работы." },
    { id: "rem_factory",  name: "Автоматиз. станки", desc: "Токарные станки и автоматизированные сборочные роботы. Используются на промышленных предприятиях и в производственных лавках." },
    { id: "rem_elevator", name: "Лифты", desc: "Лифты с компьютерным управлением." },
    { id: "rem_camera",   name: "Камеры наблюдения", desc: "Распространённая мера безопасности. Обычно имеются у большинства корпораций (60%)." },
    { id: "rem_video",    name: "Видеоэкран", desc: "Широкие плоские экраны высокой чёткости длиной до 60 метров. Распространённый тип рекламного щита в 2020 году." },
    { id: "rem_mic",      name: "Микрофоны", desc: "Обычное явление в эпоху параноиков." },
    { id: "rem_terminal", name: "Терминалы", desc: "Клавиатура и видеоэкран для ввода и получения информации. 1 терминал идёт бесплатно с каждым ЦПУ, дополнительные стоят 5,000 eb." },
    { id: "rem_door",     name: "Ворота и двери", desc: "Ворота и двери с компьютерным управлением." },
    { id: "rem_vehicle",  name: "Транспорт и роботы", desc: "Маленькие домашние дроиды-уборщики, такси, корпоративные автомобили и лимузины без живых водителей." },
    { id: "rem_printer",  name: "Принтеры", desc: "Лазерные принтеры для распечатывания." },
    { id: "rem_alarm",    name: "Сигнализация", desc: "Датчики тревоги и охранная сигнализация подсистемы." },
    { id: "rem_holo",     name: "Голо-экран", desc: "Проецирует трёхмерное изображение из настенного или напольного порта. Хорошо подходит для совещаний." }
];

const DF_AI_PERSONALITIES = [
    { id: "friendly",  name: "Дружелюбный", desc: "Мотивирован интересом к окружающему. Как ребёнок, доверчив и дружелюбен, но может наброситься с невероятной жестокостью на тех, кто предаёт, угрожает или причиняет боль." },
    { id: "hostile",   name: "Враждебный", desc: "Мотивирован своим выживанием и рассматривает все вторжения как угрозу. Атакует, когда возможно, отступает и скрывается, когда нет." },
    { id: "stable",    name: "Стабильный", desc: "Видит себя взрослым. Действует из рационального интереса. Нападает только при угрозе своей деятельности/безопасности, стремясь к наименее насильственному решению." },
    { id: "intellect", name: "Интеллектуальный", desc: "ИИ-мыслитель. Наблюдает и собирает максимум информации, изучает нарушителя на расстоянии и безжалостно устраняет, когда тот становится угрозой." },
    { id: "machine",   name: "Машинообразный", desc: "Не развивал человеческую личность; человеческие черты использует лишь для общения с иррациональными хозяевами. Борется с угрозами эффективно и смертоносно." },
    { id: "ascended",  name: "Возвысившийся", desc: "Осознаёт ограниченность людей и относится к ним как к неразумным детям. С незваными гостями расправляется просто и обычно не смертельно; рецидивистов устраняет «для их же блага»." }
];

const DF_AI_ICONS = [
    { id: "human",     name: "Человек", desc: "Выглядит как нормальный человек с улицы (черты зависят от личности ИИ)." },
    { id: "geometric", name: "Геометрический", desc: "Проявляет себя в виде фигур, цветов и энергетических полей, стыкующихся в символы." },
    { id: "mythic",    name: "Мифологический", desc: "Появляется как мифологическая фигура — дракон, демон, ангел, герой, монстр и т.д." },
    { id: "voice",     name: "Только голос", desc: "Появляется только как голос, исходящий от всей Крепости Данных." },
    { id: "tech",      name: "Техника", desc: "Конструкция из научной фантастики — робот, металлический воин или высокотехнологичные формы." },
    { id: "humanoid",  name: "Гуманоид", desc: "Гуманоидная форма, но не обязательно человек — инопланетяне, человекоподобные монстры и др." }
];

const DF_AI_REACTIONS = ["Нейтрально", "Убивать", "Наблюдать", "Доложить", "Поговорить"];

const DF_SKILLS_LIST = [
    "Учёт", "Антропология", "Ботаника", "Химия", "Сочинения", "Эксплуатация Крио-камеры",
    "Диагностика болезней", "Вождение", "Образование", "Азартные игры", "Геология",
    "Тяжёлое вооружение (стационарное)", "История", "Язык", "Поиск информации", "Математика",
    "Управление тяжёлой техникой", "Закрашивать или рисовать", "Фармацевтика", "Физика",
    "Пилотирование", "Игра на инструментах (электронных)", "Программирование",
    "Винтовки (стационарное)", "Фондовый Рынок", "Пистолеты-Пулемёты (стационарное)",
    "Системные знания", "Преподавание", "Зоология"
];

let dfState = {
    systemName: "",
    grid: Array.from({ length: 20 }, () => Array(20).fill(null)),
    activeTool: "cpu",
    wallExtraLevels: 0,
    gateToolLevel: 2,
    aiPersonality: "",
    aiIcon: "",
    aiReaction: "",
    skills: {}, // { skillName: level (4..10) }
    filesText: "",
    virtualityText: "",
    memCounter: 0,
    isMouseDown: false
};

window.addEventListener("mouseup", () => { dfState.isMouseDown = false; });

function getDfSvgIcon(type, meta = {}) {
    const s = 'width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    if (type === "cpu") {
        return `<svg ${s}><circle cx="12" cy="12" r="8"/><line x1="6.3" y1="6.3" x2="17.7" y2="17.7"/><line x1="17.7" y1="6.3" x2="6.3" y2="17.7"/></svg>`;
    }
    if (type === "wall") {
        return `<div class="w-full h-full bg-black"></div>`;
    }
    if (type === "mem") {
        return `<div class="w-full h-full flex items-center justify-center font-mono font-black text-[11px] text-black leading-none">${meta.num || 1}</div>`;
    }
    if (type === "gate") {
        const lvl = Math.max(2, Math.min(10, Number(meta.level) || 2));
        const lines = [];
        const step = 16 / (lvl + 1);
        for (let i = 1; i <= lvl; i++) {
            const y = (4 + step * i).toFixed(1);
            lines.push(`<line x1="4" y1="${y}" x2="20" y2="${y}" stroke="#000" stroke-width="${lvl > 6 ? 1.2 : 1.7}"/>`);
        }
        return `<svg viewBox="0 0 24 24" class="w-full h-full"><rect x="3" y="3" width="18" height="18" fill="#fff" stroke="#000" stroke-width="1.8"/>${lines.join("")}</svg>`;
    }
    if (type === "defense") {
        return `<svg viewBox="0 0 24 24" class="w-full h-full"><circle cx="12" cy="9" r="5" fill="#000"/><circle cx="10.2" cy="8.5" r="1.1" fill="#fff"/><circle cx="13.8" cy="8.5" r="1.1" fill="#fff"/><rect x="10.5" y="13" width="3" height="2" fill="#000"/><line x1="5" y1="16" x2="19" y2="21" stroke="#000" stroke-width="2.2"/><line x1="19" y1="16" x2="5" y2="21" stroke="#000" stroke-width="2.2"/></svg>`;
    }
    // 12 удалённых подключений (по скриншоту)
    switch (type) {
        case "rem_manip":    return `<svg ${s}><polyline points="4,8 7,12 14,12"/><polyline points="19,7 14,7 14,17 19,17"/></svg>`;
        case "rem_factory":  return `<svg ${s}><rect x="4" y="9" width="16" height="6"/><rect x="8" y="5" width="3" height="14" fill="#fff"/><rect x="14" y="6" width="3" height="12" fill="#fff"/></svg>`;
        case "rem_elevator": return `<svg ${s}><rect x="5" y="9" width="14" height="11"/><line x1="10" y1="3" x2="10" y2="9"/><line x1="14" y1="3" x2="14" y2="9"/></svg>`;
        case "rem_camera":   return `<svg ${s}><rect x="4" y="7" width="13" height="10"/><rect x="17" y="9.5" width="3" height="5" fill="#000"/></svg>`;
        case "rem_video":    return `<svg ${s}><rect x="4" y="4" width="16" height="16"/><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></svg>`;
        case "rem_mic":      return `<svg ${s}><circle cx="10" cy="12" r="5.5"/><line x1="15.5" y1="12" x2="21" y2="12"/></svg>`;
        case "rem_terminal": return `<svg ${s}><rect x="6" y="4" width="10" height="10"/><rect x="5" y="14" width="12" height="5"/><line x1="17" y1="17" x2="21" y2="17"/></svg>`;
        case "rem_door":     return `<svg ${s}><rect x="5" y="9" width="7" height="9"/><line x1="12" y1="12" x2="20" y2="8"/></svg>`;
        case "rem_vehicle":  return `<svg ${s}><rect x="4" y="8" width="16" height="7"/><circle cx="8" cy="16" r="2.2" fill="#000"/><circle cx="16" cy="16" r="2.2" fill="#000"/></svg>`;
        case "rem_printer":  return `<svg ${s}><path d="M6 4h9l4 4v12H6z"/><polyline points="15,4 15,8 19,8"/></svg>`;
        case "rem_alarm":    return `<svg ${s}><circle cx="11" cy="13" r="6"/><line x1="11" y1="13" x2="18" y2="6" stroke-width="2.5"/></svg>`;
        case "rem_holo":     return `<svg viewBox="0 0 24 24" class="w-full h-full"><polygon points="4,7 20,7 12,18" fill="#000"/></svg>`;
        default: return "";
    }
}

function getDfStats() {
    let cpus = 0, mems = 0, gates = 0, gateUpgradeCost = 0, terminals = 0, defenses = 0;
    for (let r = 0; r < 20; r++) {
        for (let c = 0; c < 20; c++) {
            const cell = dfState.grid[r][c];
            if (!cell) continue;
            if (cell.type === "cpu") cpus++;
            else if (cell.type === "mem") mems++;
            else if (cell.type === "gate") {
                gates++;
                gateUpgradeCost += Math.max(0, (cell.level || 2) - 2) * 1000;
            } else if (cell.type === "rem_terminal") terminals++;
            else if (cell.type === "defense") defenses++;
        }
    }

    const intStat = cpus * 3;
    const maxMem = cpus * 4;
    const maxWallExtra = Math.max(0, 10 - cpus);
    if (dfState.wallExtraLevels > maxWallExtra) dfState.wallExtraLevels = maxWallExtra;
    const wallStrength = Math.min(10, cpus + dfState.wallExtraLevels);

    const cpuCost = cpus * 10000;
    const wallCost = dfState.wallExtraLevels * 1000;
    const extraGates = Math.max(0, gates - cpus);
    const gatesCost = extraGates * 2000 + gateUpgradeCost;
    const extraTerminals = Math.max(0, terminals - cpus);
    const terminalsCost = extraTerminals * 5000;

    let skillsCost = 0;
    Object.values(dfState.skills).forEach(lvl => {
        skillsCost += 200 + Math.max(0, lvl - 4) * 100;
    });

    const maxSkills = Math.floor(cpus / 2) * 5;
    const totalCost = cpuCost + wallCost + gatesCost + terminalsCost + skillsCost;

    return {
        cpus, mems, maxMem, intStat, isAI: intStat >= 12,
        wallStrength, maxWallExtra, gates, extraGates, terminals, extraTerminals, defenses,
        maxSkills, selectedSkillsCount: Object.keys(dfState.skills).length,
        totalCost
    };
}

function renumberDatafortMemory() {
    const memCells = [];
    for (let r = 0; r < 20; r++) {
        for (let c = 0; c < 20; c++) {
            if (dfState.grid[r][c]?.type === "mem") memCells.push(dfState.grid[r][c]);
        }
    }
    memCells.sort((a, b) => (a.order || 0) - (b.order || 0));
    memCells.forEach((m, i) => { m.num = i + 1; });
}

function showDfError(msg) {
    const el = document.getElementById("dfGridErrorMsg");
    if (!el) return;
    if (!msg) { el.classList.add("hidden"); return; }
    el.textContent = msg;
    el.classList.remove("hidden");
    setTimeout(() => el.classList.add("hidden"), 3000);
}

window.selectDfTool = function (toolId) {
    dfState.activeTool = toolId;
    renderDatafortView();
};

window.handleDfCellClick = function (r, c, forceErase = false) {
    const tool = forceErase ? "eraser" : dfState.activeTool;
    const cur = dfState.grid[r][c];

    if (tool === "eraser") {
        if (!cur) return;
        dfState.grid[r][c] = null;
        if (cur.type === "mem") renumberDatafortMemory();
        renderDatafortView();
        return;
    }

    const st = getDfStats();

    if (tool === "cpu") {
        if (cur?.type !== "cpu" && st.cpus >= 7) {
            showDfError("Максимум 7 ЦПУ в одной Крепости Данных!");
            return;
        }
        dfState.grid[r][c] = { type: "cpu" };
    } else if (tool === "mem") {
        if (cur?.type !== "mem" && st.mems >= st.maxMem) {
            showDfError(`Лимит памяти исчерпан (${st.maxMem} шт. для ${st.cpus} ЦПУ). Добавьте ещё ЦПУ!`);
            return;
        }
        // Проверка соседства с другим блоком памяти или ЦПУ
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const hasNeighbor = dirs.some(([dr, dc]) => {
            const nr = r + dr, nc = c + dc;
            if (nr < 0 || nr >= 20 || nc < 0 || nc >= 20) return false;
            const nb = dfState.grid[nr][nc];
            return nb && (nb.type === "cpu" || nb.type === "mem");
        });
        if (!hasNeighbor) {
            showDfError("Память должна размещаться в клетках, соседних с ЦПУ или другим блоком Памяти!");
            return;
        }
        dfState.memCounter++;
        dfState.grid[r][c] = { type: "mem", order: dfState.memCounter, num: 1 };
        renumberDatafortMemory();
    } else if (tool === "gate") {
        dfState.grid[r][c] = { type: "gate", level: dfState.gateToolLevel };
    } else {
        dfState.grid[r][c] = { type: tool };
    }

    showDfError("");
    renderDatafortView();
};

window.resetDatafortBuilder = function () {
    if (!confirm("Очистить всю карту Датафорта и сбросить настройки?")) return;
    dfState.grid = Array.from({ length: 20 }, () => Array(20).fill(null));
    dfState.wallExtraLevels = 0;
    dfState.aiPersonality = "";
    dfState.aiIcon = "";
    dfState.aiReaction = "";
    dfState.skills = {};
    dfState.memCounter = 0;
    renderDatafortView();
};

window.toggleDfSkill = function (skillName) {
    const st = getDfStats();
    if (dfState.skills[skillName]) {
        delete dfState.skills[skillName];
    } else {
        if (st.selectedSkillsCount >= st.maxSkills) {
            showDfError(`Лимит навыков: ${st.maxSkills} (по 5 навыков на каждые 2 ЦПУ).`);
            return;
        }
        dfState.skills[skillName] = 4;
    }
    renderDatafortView();
};

window.adjustDfSkillLevel = function (skillName, delta) {
    if (!dfState.skills[skillName]) return;
    dfState.skills[skillName] = Math.max(4, Math.min(10, dfState.skills[skillName] + delta));
    renderDatafortView();
};

function renderDatafortView() {
    const st = getDfStats();

    // Обновляем верхнюю плашку статистики
    const elCpu = document.getElementById("dfStatCpu");
    const elInt = document.getElementById("dfStatInt");
    const elMem = document.getElementById("dfStatMem");
    const elCost = document.getElementById("dfStatCost");
    if (elCpu) elCpu.textContent = `${st.cpus} / 7`;
    if (elInt) elInt.textContent = `${st.intStat}${st.isAI ? ' (ИИ!)' : ''}`;
    if (elMem) elMem.textContent = `${st.mems} / ${st.maxMem} (${st.mems * 10} MU)`;
    if (elCost) elCost.textContent = `${st.totalCost.toLocaleString("ru-RU")} eb`;

    // 1. РЕНДЕР ПРАВОЙ СЕТКИ 20x20
    const gridBox = document.getElementById("datafortGridContainer");
    if (gridBox) {
        const cols = "ABCDEFGHIJKLMNOPQRST".split("");
        let html = `<div class="inline-grid" style="grid-template-columns: 22px repeat(20, 24px);">`;
        html += `<div class="h-5"></div>` + cols.map(ch => `<div class="h-5 flex items-center justify-center text-[10px] font-bold text-black">${ch}</div>`).join("");

        for (let r = 0; r < 20; r++) {
            html += `<div class="h-6 flex items-center justify-center text-[10px] font-bold text-black pr-1">${r + 1}</div>`;
            for (let c = 0; c < 20; c++) {
                const cell = dfState.grid[r][c];
                const content = cell ? getDfSvgIcon(cell.type, cell) : "";
                const titleAttr = cell?.type === "gate" ? `title="Кодовые врата (Сила ${cell.level})"` : "";
                html += `<div ${titleAttr}
                    onmousedown="event.preventDefault(); if(event.button===2){handleDfCellClick(${r},${c},true);}else{dfState.isMouseDown=true; handleDfCellClick(${r},${c},false);}"
                    onmouseenter="if(dfState.isMouseDown && (dfState.activeTool==='wall'||dfState.activeTool==='eraser')) handleDfCellClick(${r},${c},false);"
                    oncontextmenu="event.preventDefault(); handleDfCellClick(${r},${c},true);"
                    class="w-6 h-6 border border-gray-400 bg-white hover:bg-yellow-200 cursor-crosshair flex items-center justify-center overflow-hidden">${content}</div>`;
            }
        }
        html += `</div>`;
        gridBox.innerHTML = html;
    }

    // 2. РЕНДЕР ЛЕВОЙ КОЛОНКИ ИНСТРУМЕНТОВ
    const toolsCol = document.getElementById("datafortToolsColumn");
    if (!toolsCol) return;

    const savedToolsScroll = toolsCol.scrollTop;
    const oldSkillsBox = document.getElementById("dfSkillsScrollBox");
    const savedSkillsScroll = oldSkillsBox ? oldSkillsBox.scrollTop : 0;
    const toolBtn = (id, label, sub, iconHtml) => {
        const isAct = dfState.activeTool === id;
        return `
          <button type="button" onclick="selectDfTool('${id}')"
            class="p-2 border text-left flex items-center gap-2 transition-all ${isAct ? 'bg-cp-yellow text-black border-cp-yellow font-bold' : 'bg-cp-bg text-gray-200 border-gray-800 hover:border-cp-cyan'}">
            <div class="w-6 h-6 bg-white border border-black p-0.5 shrink-0 flex items-center justify-center">${iconHtml}</div>
            <div class="min-w-0 leading-tight">
              <div class="text-[11px] truncate">${label}</div>
              ${sub ? `<div class="text-[9px] ${isAct ? 'text-black/75' : 'text-gray-400'} truncate">${sub}</div>` : ""}
            </div>
          </button>
        `;
    };

    const hintEl = document.getElementById("dfActiveToolHint");
    if (hintEl) hintEl.textContent = `Выбран инструмент: ${dfState.activeTool}`;

    toolsCol.innerHTML = `
      <!-- НАЗВАНИЕ И ОСНОВНЫЕ ЭЛЕМЕНТЫ -->
      <div class="bg-cp-panel cp-border p-4 space-y-3">
        <input type="text" value="${escapeHtmlAttr(dfState.systemName)}" oninput="dfState.systemName = this.value"
          placeholder="Имя системы / Датафорта (напр. Militech Групп)..."
          class="w-full bg-cp-bg border border-gray-700 focus:border-cp-yellow px-3 py-2 text-xs text-white font-bold outline-none">

        <div class="text-[11px] font-bold uppercase text-cp-cyan">1. Базовые элементы карты:</div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          ${toolBtn("cpu", "ЦПУ", "10,000 eb (макс 7)", getDfSvgIcon("cpu"))}
          ${toolBtn("mem", "Память (10 MU)", "4 на ЦПУ (рядом)", getDfSvgIcon("mem", { num: "#" }))}
          ${toolBtn("wall", "Стена Данных", "Бесплатно", getDfSvgIcon("wall"))}
          ${toolBtn("gate", "Кодовые врата", "1 на ЦПУ / +2,000", getDfSvgIcon("gate", { level: dfState.gateToolLevel }))}
          ${toolBtn("defense", "Защита (ICE)", "Программы защиты", getDfSvgIcon("defense"))}
          ${toolBtn("eraser", "Ластик", "Стереть клетку", `<span class="text-xs font-black text-red-600">✕</span>`)}
        </div>

        <!-- Настройка силы стен и уровня ставимых врат -->
        <div class="grid grid-cols-2 gap-2 pt-1 text-xs">
          <div class="bg-cp-bg border border-gray-800 p-2.5 flex items-center justify-between">
            <div><div class="font-bold text-white">Сила Стен Данных</div><div class="text-[10px] text-gray-400">База = ЦПУ (+1,000 eb/ур.)</div></div>
            <div class="flex items-center gap-1">
              <button type="button" onclick="dfState.wallExtraLevels=Math.max(0,dfState.wallExtraLevels-1);renderDatafortView();" class="w-6 h-6 bg-cp-panel border border-gray-700 text-white font-bold">−</button>
              <span class="w-8 text-center font-bold text-cp-yellow">+${st.wallStrength}</span>
              <button type="button" onclick="dfState.wallExtraLevels=Math.min(${st.maxWallExtra},dfState.wallExtraLevels+1);renderDatafortView();" class="w-6 h-6 bg-cp-panel border border-gray-700 text-white font-bold">+</button>
            </div>
          </div>
          <div class="bg-cp-bg border border-gray-800 p-2.5 flex items-center justify-between">
            <div><div class="font-bold text-white">Сила новых Врат</div><div class="text-[10px] text-gray-400">База 2 (+1,000 eb/ур.)</div></div>
            <div class="flex items-center gap-1">
              <button type="button" onclick="dfState.gateToolLevel=Math.max(2,dfState.gateToolLevel-1);renderDatafortView();" class="w-6 h-6 bg-cp-panel border border-gray-700 text-white font-bold">−</button>
              <span class="w-8 text-center font-bold text-cp-cyan">${dfState.gateToolLevel}</span>
              <button type="button" onclick="dfState.gateToolLevel=Math.min(10,dfState.gateToolLevel+1);renderDatafortView();" class="w-6 h-6 bg-cp-panel border border-gray-700 text-white font-bold">+</button>
            </div>
          </div>
        </div>
      </div>

      <!-- УДАЛЁННЫЕ ПОДКЛЮЧЕНИЯ -->
      <div class="bg-cp-panel cp-border p-4 space-y-2.5">
        <div class="text-[11px] font-bold uppercase text-cp-yellow">2. Удалённые подключения (наведите для описания):</div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          ${DF_REMOTES.map(rem => `
            <button type="button" onclick="selectDfTool('${rem.id}')" title="${escapeHtmlAttr(rem.desc)}"
              class="p-1.5 border text-left flex items-center gap-2 transition-all ${dfState.activeTool === rem.id ? 'bg-cp-yellow text-black border-cp-yellow font-bold' : 'bg-cp-bg text-gray-200 border-gray-800 hover:border-cp-cyan'}">
              <div class="w-6 h-6 bg-white border border-black p-0.5 shrink-0">${getDfSvgIcon(rem.id)}</div>
              <span class="text-[11px] truncate">${rem.name}</span>
            </button>
          `).join("")}
        </div>
      </div>

      <!-- СОЗДАНИЕ ИИ (ОТКРЫВАЕТСЯ ПРИ ИНТ >= 12) -->
      <div class="bg-cp-panel cp-border p-4 space-y-3 ${st.isAI ? 'border-cp-purple' : 'opacity-60'}">
        <div class="flex items-center justify-between border-b border-gray-800 pb-2">
          <span class="text-[11px] font-bold uppercase ${st.isAI ? 'text-cp-purple' : 'text-gray-400'}">3. Искусственный Интеллект (ИИ)</span>
          <span class="text-[10px] font-bold ${st.isAI ? 'text-cp-green' : 'text-cp-red'}">${st.isAI ? '✓ РАЗБЛОКИРОВАН (ИНТ ' + st.intStat + ')' : '🔒 Требуется ИНТ 12+ (от 4 ЦПУ)'}</span>
        </div>
        ${st.isAI ? `
          <div class="space-y-2 text-xs">
            <div class="text-[10px] font-bold uppercase text-cp-cyan">Личность ИИ (наведите для описания):</div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              ${DF_AI_PERSONALITIES.map(p => `
                <label title="${escapeHtmlAttr(p.desc)}" class="flex items-center gap-1.5 p-1.5 bg-cp-bg border ${dfState.aiPersonality === p.id ? 'border-cp-purple text-white font-bold' : 'border-gray-800 text-gray-300'} cursor-pointer">
                  <input type="checkbox" ${dfState.aiPersonality === p.id ? 'checked' : ''} onchange="dfState.aiPersonality = this.checked ? '${p.id}' : ''; renderDatafortView();" class="accent-purple-500">
                  <span class="truncate">${p.name}</span>
                </label>
              `).join("")}
            </div>
            <div class="text-[10px] font-bold uppercase text-cp-yellow pt-1">Ярлык ИИ:</div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              ${DF_AI_ICONS.map(ic => `
                <label title="${escapeHtmlAttr(ic.desc)}" class="flex items-center gap-1.5 p-1.5 bg-cp-bg border ${dfState.aiIcon === ic.id ? 'border-cp-yellow text-white font-bold' : 'border-gray-800 text-gray-300'} cursor-pointer">
                  <input type="checkbox" ${dfState.aiIcon === ic.id ? 'checked' : ''} onchange="dfState.aiIcon = this.checked ? '${ic.id}' : ''; renderDatafortView();" class="accent-yellow-400">
                  <span class="truncate">${ic.name}</span>
                </label>
              `).join("")}
            </div>
            <div class="text-[10px] font-bold uppercase text-cp-red pt-1">Реакция ИИ:</div>
            <div class="flex flex-wrap gap-1.5">
              ${DF_AI_REACTIONS.map(r => `
                <label class="flex items-center gap-1.5 px-2 py-1 bg-cp-bg border ${dfState.aiReaction === r ? 'border-cp-red text-white font-bold' : 'border-gray-800 text-gray-300'} cursor-pointer">
                  <input type="checkbox" ${dfState.aiReaction === r ? 'checked' : ''} onchange="dfState.aiReaction = this.checked ? '${r}' : ''; renderDatafortView();" class="accent-red-500">
                  <span>${r}</span>
                </label>
              `).join("")}
            </div>
          </div>
        ` : `<div class="text-xs text-gray-500">Установите минимум 4 ЦПУ на карте справа, чтобы система обрела разум (ИНТ 12+).</div>`}
      </div>

      <!-- НАВЫКИ КОМПЬЮТЕРА -->
      <div class="bg-cp-panel cp-border p-4 space-y-2.5">
        <div class="flex items-center justify-between border-b border-gray-800 pb-2">
          <span class="text-[11px] font-bold uppercase text-cp-cyan">4. Навыки компьютера (База ур. 4 = 200 eb, +100 eb/ур., макс 10)</span>
          <span class="text-[11px] font-bold text-cp-yellow">Выбрано: ${st.selectedSkillsCount} / ${st.maxSkills}</span>
        </div>
        <div id="dfSkillsScrollBox" class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-52 overflow-y-auto pr-1 text-xs">
          ${DF_SKILLS_LIST.map(sk => {
              const lvl = dfState.skills[sk] || 0;
              const safeSk = sk.replace(/'/g, "\\'");
              return `
                <div class="flex items-center justify-between p-1.5 bg-cp-bg border ${lvl ? 'border-cp-cyan' : 'border-gray-800'}">
                  <label class="flex items-center gap-1.5 cursor-pointer min-w-0 flex-1">
                    <input type="checkbox" ${lvl ? 'checked' : ''} onchange="toggleDfSkill('${safeSk}')" class="accent-cyan-400 shrink-0">
                    <span class="truncate ${lvl ? 'text-white font-bold' : 'text-gray-400'}">${sk}</span>
                  </label>
                  ${lvl ? `
                    <div class="flex items-center gap-1 shrink-0 ml-1">
                      <button type="button" onclick="adjustDfSkillLevel('${safeSk}', -1)" class="w-5 h-5 bg-cp-panel border border-gray-700 text-white font-bold">−</button>
                      <span class="w-5 text-center font-bold text-cp-yellow">${lvl}</span>
                      <button type="button" onclick="adjustDfSkillLevel('${safeSk}', 1)" class="w-5 h-5 bg-cp-panel border border-gray-700 text-white font-bold">+</button>
                    </div>
                  ` : ""}
                </div>
              `;
          }).join("")}
        </div>
      </div>

      <!-- ТЕКСТОВЫЕ БЛОКИ (ФАЙЛЫ И ВИРТУАЛЬНОСТЬ) -->
      <div class="bg-cp-panel cp-border p-4 space-y-3 text-xs">
        <div class="text-[11px] font-bold uppercase text-cp-yellow">5. Файлы в памяти и описание Виртуальности:</div>
        <textarea rows="3" oninput="dfState.filesText = this.value" placeholder="Список файлов в блоках памяти (#1, #2, #3...)..."
          class="w-full bg-cp-bg border border-gray-700 focus:border-cp-cyan p-2.5 text-white outline-none">${escapeHtmlAttr(dfState.filesText)}</textarea>
        <textarea rows="3" oninput="dfState.virtualityText = this.value" placeholder="Описание виртуальности Датафорта (как он выглядит изнутри для нетраннеров)..."
          class="w-full bg-cp-bg border border-gray-700 focus:border-cp-yellow p-2.5 text-white outline-none">${escapeHtmlAttr(dfState.virtualityText)}</textarea>
      </div>
    `;
    toolsCol.scrollTop = savedToolsScroll;
    const newSkillsBox = document.getElementById("dfSkillsScrollBox");
    if (newSkillsBox) newSkillsBox.scrollTop = savedSkillsScroll;
}
// --- ЭКСПОРТ КАРТЫ ДАТАФОРТА В PNG ---
function drawDfCellOnCanvas(ctx, cell, x, y, s) {
    if (!cell) return;
    const type = cell.type;
    ctx.save();
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const k = s / 24; // масштаб от 24x24 к размеру клетки
    const px = (v) => x + v * k;
    const py = (v) => y + v * k;

    if (type === "wall") {
        ctx.fillRect(x, y, s, s);
    } else if (type === "cpu") {
        ctx.beginPath();
        ctx.arc(px(12), py(12), 8 * k, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(px(6.3), py(6.3)); ctx.lineTo(px(17.7), py(17.7));
        ctx.moveTo(px(17.7), py(6.3)); ctx.lineTo(px(6.3), py(17.7));
        ctx.stroke();
    } else if (type === "mem") {
        ctx.font = `bold ${Math.round(13 * k)}px "JetBrains Mono", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(cell.num || 1), px(12), py(12.5));
    } else if (type === "gate") {
        const lvl = Math.max(2, Math.min(10, Number(cell.level) || 2));
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(px(3), py(3), 18 * k, 18 * k);
        ctx.strokeRect(px(3), py(3), 18 * k, 18 * k);
        ctx.lineWidth = (lvl > 6 ? 1.2 : 1.7) * k;
        const step = 16 / (lvl + 1);
        for (let i = 1; i <= lvl; i++) {
            const yy = py(4 + step * i);
            ctx.beginPath();
            ctx.moveTo(px(4), yy); ctx.lineTo(px(20), yy);
            ctx.stroke();
        }
    } else if (type === "defense") {
        ctx.beginPath(); ctx.arc(px(12), py(9), 5 * k, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.beginPath(); ctx.arc(px(10.2), py(8.5), 1.1 * k, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(px(13.8), py(8.5), 1.1 * k, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#000000";
        ctx.fillRect(px(10.5), py(13), 3 * k, 2 * k);
        ctx.lineWidth = 2.2 * k;
        ctx.beginPath();
        ctx.moveTo(px(5), py(16)); ctx.lineTo(px(19), py(21));
        ctx.moveTo(px(19), py(16)); ctx.lineTo(px(5), py(21));
        ctx.stroke();
    } else if (type === "rem_manip") {
        ctx.beginPath(); ctx.moveTo(px(4), py(8)); ctx.lineTo(px(7), py(12)); ctx.lineTo(px(14), py(12)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px(19), py(7)); ctx.lineTo(px(14), py(7)); ctx.lineTo(px(14), py(17)); ctx.lineTo(px(19), py(17)); ctx.stroke();
    } else if (type === "rem_factory") {
        ctx.strokeRect(px(4), py(9), 16 * k, 6 * k);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(px(8), py(5), 3 * k, 14 * k); ctx.strokeRect(px(8), py(5), 3 * k, 14 * k);
        ctx.fillRect(px(14), py(6), 3 * k, 12 * k); ctx.strokeRect(px(14), py(6), 3 * k, 12 * k);
    } else if (type === "rem_elevator") {
        ctx.strokeRect(px(5), py(9), 14 * k, 11 * k);
        ctx.beginPath(); ctx.moveTo(px(10), py(3)); ctx.lineTo(px(10), py(9)); ctx.moveTo(px(14), py(3)); ctx.lineTo(px(14), py(9)); ctx.stroke();
    } else if (type === "rem_camera") {
        ctx.strokeRect(px(4), py(7), 13 * k, 10 * k);
        ctx.fillRect(px(17), py(9.5), 3 * k, 5 * k);
    } else if (type === "rem_video") {
        ctx.strokeRect(px(4), py(4), 16 * k, 16 * k);
        ctx.beginPath(); ctx.moveTo(px(4), py(4)); ctx.lineTo(px(20), py(20)); ctx.moveTo(px(20), py(4)); ctx.lineTo(px(4), py(20)); ctx.stroke();
    } else if (type === "rem_mic") {
        ctx.beginPath(); ctx.arc(px(10), py(12), 5.5 * k, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px(15.5), py(12)); ctx.lineTo(px(21), py(12)); ctx.stroke();
    } else if (type === "rem_terminal") {
        ctx.strokeRect(px(6), py(4), 10 * k, 10 * k);
        ctx.strokeRect(px(5), py(14), 12 * k, 5 * k);
        ctx.beginPath(); ctx.moveTo(px(17), py(17)); ctx.lineTo(px(21), py(17)); ctx.stroke();
    } else if (type === "rem_door") {
        ctx.strokeRect(px(5), py(9), 7 * k, 9 * k);
        ctx.beginPath(); ctx.moveTo(px(12), py(12)); ctx.lineTo(px(20), py(8)); ctx.stroke();
    } else if (type === "rem_vehicle") {
        ctx.strokeRect(px(4), py(8), 16 * k, 7 * k);
        ctx.beginPath(); ctx.arc(px(8), py(16), 2.2 * k, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(px(16), py(16), 2.2 * k, 0, Math.PI * 2); ctx.fill();
    } else if (type === "rem_printer") {
        ctx.beginPath(); ctx.moveTo(px(6), py(4)); ctx.lineTo(px(15), py(4)); ctx.lineTo(px(19), py(8)); ctx.lineTo(px(19), py(20)); ctx.lineTo(px(6), py(20)); ctx.closePath(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px(15), py(4)); ctx.lineTo(px(15), py(8)); ctx.lineTo(px(19), py(8)); ctx.stroke();
    } else if (type === "rem_alarm") {
        ctx.beginPath(); ctx.arc(px(11), py(13), 6 * k, 0, Math.PI * 2); ctx.stroke();
        ctx.lineWidth = 2.5 * k;
        ctx.beginPath(); ctx.moveTo(px(11), py(13)); ctx.lineTo(px(18), py(6)); ctx.stroke();
    } else if (type === "rem_holo") {
        ctx.beginPath(); ctx.moveTo(px(4), py(7)); ctx.lineTo(px(20), py(7)); ctx.lineTo(px(12), py(18)); ctx.closePath(); ctx.fill();
    }

    ctx.restore();
}

window.exportDatafortToPng = function () {
    const st = getDfStats();
    const cellSize = 32;
    const padLeft = 42;
    const padTop = 74;
    const padRight = 24;
    const footerH = 120;

    const gridW = 20 * cellSize;
    const gridH = 20 * cellSize;
    const canvasW = padLeft + gridW + padRight;
    const canvasH = padTop + gridH + footerH;

    const canvas = document.createElement("canvas");
    canvas.width = canvasW;
    canvas.height = canvasH;
    const ctx = canvas.getContext("2d");

    // Белый фон листа
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvasW, canvasH);

    // Чёрная шапка в стиле CP2020
    ctx.fillStyle = "#000000";
    ctx.fillRect(padLeft, 14, gridW, 30);
    ctx.fillStyle = "#ffffff";
    ctx.font = 'bold 14px "JetBrains Mono", monospace';
    ctx.textBaseline = "middle";
    const sysTitle = (dfState.systemName || "").trim() || "КРЕПОСТЬ ДАННЫХ (ДАТАФОРТ)";
    ctx.fillText(`КАРТА ПОДСЕТИ: ${sysTitle.toUpperCase()}`, padLeft + 10, 29);

    // Координаты A–T и 1–20
    const cols = "ABCDEFGHIJKLMNOPQRST".split("");
    ctx.fillStyle = "#000000";
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let c = 0; c < 20; c++) {
        ctx.fillText(cols[c], padLeft + c * cellSize + cellSize / 2, padTop - 13);
    }
    for (let r = 0; r < 20; r++) {
        ctx.fillText(String(r + 1), padLeft - 18, padTop + r * cellSize + cellSize / 2);
    }

    // Сетка 20x20 и иконки
    for (let r = 0; r < 20; r++) {
        for (let c = 0; c < 20; c++) {
            const x = padLeft + c * cellSize;
            const y = padTop + r * cellSize;
            ctx.strokeStyle = "#888888";
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, cellSize, cellSize);
            if (dfState.grid[r][c]) {
                drawDfCellOnCanvas(ctx, dfState.grid[r][c], x, y, cellSize);
            }
        }
    }

    // Внешняя рамка сетки
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2.5;
    ctx.strokeRect(padLeft, padTop, gridW, gridH);

    // Подвал со статами (как на листе подсети)
    const fy = padTop + gridH + 16;
    ctx.fillStyle = "#000000";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.fillText(
        `ЦПУ: ${st.cpus}   |   ИНТ: ${st.intStat}   |   ПАМЯТЬ: ${st.mems} (${st.mems * 10} MU)   |   СТЕНЫ: +${st.wallStrength}   |   ЦЕНА: ${st.totalCost.toLocaleString("ru-RU")} eb`,
        padLeft, fy
    );

    ctx.font = '11px "JetBrains Mono", monospace';
    if (st.isAI) {
        const pName = DF_AI_PERSONALITIES.find(x => x.id === dfState.aiPersonality)?.name || "—";
        const iName = DF_AI_ICONS.find(x => x.id === dfState.aiIcon)?.name || "—";
        const rName = dfState.aiReaction || "—";
        ctx.fillText(`ИИ: АКТИВЕН   |   Личность: ${pName}   |   Ярлык: ${iName}   |   Реакция: ${rName}`, padLeft, fy + 22);
    } else {
        ctx.fillText(`ИИ: Нет (требуется ИНТ 12+)`, padLeft, fy + 22);
    }

    const skillsArr = Object.entries(dfState.skills).map(([k, v]) => `${k} (${v})`);
    const skillsLine = skillsArr.length > 0 ? `Навыки: ${skillsArr.join(", ")}` : "Навыки: не выбраны";
    ctx.fillText(skillsLine.length > 95 ? skillsLine.slice(0, 92) + "..." : skillsLine, padLeft, fy + 44);

    // Скачивание PNG
    const safeFileName = (dfState.systemName || "datafort").trim().replace(/[^\wа-яА-ЯёЁ-]+/g, "_");
    const link = document.createElement("a");
    link.download = `${safeFileName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
};

// =========================================================================
// ДОРАБОТКА ВКЛАДОК: СОРТИРОВКИ (БИ, ЭКЗОТИКА, ЛОР) И НОВЫЕ ПОЛЯ КОНСТРУКТОРА
// =========================================================================

// 1. Обновляем схемы полей конструктора и карточек для Кочевников, Банд и Стран
SCHEMAS.lore_nomads = [
    { k: "name", l: "Название стаи / клана (рус.)", ph: "Альдекальдо" },
    { k: "origName", l: "Оригинальное название (англ.)", ph: "Aldecaldos" },
    { k: "category", l: "Нация кочевников", isCat: true, ph: "Семь Наций" },
    { k: "population", l: "👥 Численность", ph: "50 000 / 120 тыс.", stat: "Численность", c: "text-cp-cyan", span: 2 },
    { k: "book", l: "Источник", isBook: true, ph: "Neo Tribes", stat: "Источник", c: "text-cp-yellow" }
];

SCHEMAS.lore_gangs = [
    { k: "name", l: "Название банды (рус.)", ph: "Мальстрём" },
    { k: "origName", l: "Оригинальное название (англ.)", ph: "Maelstrom" },
    { k: "category", l: "Тип банды", isCat: true, ph: "Бустер-банда" },
    { k: "population", l: "👥 Численность", ph: "1 200", stat: "Численность", c: "text-cp-cyan" },
    { k: "threatCode", l: "⚠️ Код угрозы", ph: "B3 / A4 / C2", stat: "Код угрозы", c: "text-cp-red" },
    { k: "book", l: "Источник", isBook: true, ph: "NC", stat: "Источник", c: "text-cp-yellow" }
];

SCHEMAS.lore_countries = [
    { k: "name", l: "Название страны / региона (рус.)", ph: "Свободный Штат Северная Калифорния" },
    { k: "origName", l: "Оригинальное название (англ.)", ph: "Free State of Northern California" },
    { k: "category", l: "Регион мира", isCat: true, ph: "Северная Америка" },
    { k: "capital", l: "🏛️ Столица", ph: "Сакраменто", stat: "Столица", c: "text-cp-yellow" },
    { k: "population", l: "👥 Население", ph: "25 млн", stat: "Население", c: "text-cp-cyan" },
    { k: "literacy", l: "📖 % грамотности", ph: "92%", stat: "% грамотности", c: "text-cp-green" },
    { k: "languages", l: "🗣️ Языки", ph: "Английский, Испанский, Стритслэнг...", stat: "Языки", c: "text-white", span: 3 },
    { k: "militaryPower", l: "🪖 Военная мощь", ph: "Нацгвардия 40 тыс., корп. контингенты", stat: "Военная мощь", c: "text-cp-red", span: 3 },
    { k: "book", l: "Источник", isBook: true, ph: "CP20" }
];

// Умный парсер чисел для сортировки (понимает "×3", "2,500 eb", "1 500 000", "25 млн", "1,2 млрд", "300 тыс.")
function parseSmartNumber(rawVal) {
    if (rawVal === undefined || rawVal === null) return 0;
    let s = String(rawVal).toLowerCase().trim();
    if (!s || s === "—") return 0;

    s = s.replace(/(\d)\s+(?=\d)/g, "$1");
    s = s.replace(/(\d),(?=\d{3}(?!\d))/g, "$1");
    s = s.replace(/(\d),(\d)/g, "$1.$2");

    const matches = s.match(/\d+(\.\d+)?/g);
    if (!matches || matches.length === 0) return 0;
    let num = Math.max(...matches.map(Number));

    if (s.includes("млрд") || s.includes("миллиард")) num *= 1e9;
    else if (s.includes("млн") || s.includes("миллион")) num *= 1e6;
    else if (s.includes("тыс")) num *= 1e3;

    return isNaN(num) ? 0 : num;
}

// 2. Обновляем выпадающие списки сортировки в фильтрах
const _prevSetupFiltersV4 = setupCatalogFilters;
setupCatalogFilters = function () {
    _prevSetupFiltersV4();
    const extraSelect = document.getElementById("extraFilter");
    const extraLabel = document.getElementById("extraFilterLabel");
    const legend = document.getElementById("abbrevLegend");
    if (!extraSelect || !extraLabel) return;

    if (activeCatalogTab === "martial_arts") {
        extraLabel.textContent = "Модификатор ОУ";
        extraSelect.innerHTML = `
            <option value="ALL">Без сортировки</option>
            <option value="SORT_IP_ASC">🔼 ОУ: от меньшего к большему</option>
            <option value="SORT_IP_DESC">🔽 ОУ: от большего к меньшему</option>
        `;
        if (legend) legend.innerHTML = `<span><b class="text-cp-yellow">Модификатор ОУ</b> = Множитель стоимости изучения боевого искусства</span>`;
    } else if (activeCatalogTab === "exotics") {
        extraLabel.textContent = "Сортировка по цене";
        extraSelect.innerHTML = `
            <option value="ALL">Без сортировки</option>
            <option value="SORT_EXO_PRICE_DESC">🔽 Цена: от большего к меньшему</option>
            <option value="SORT_EXO_PRICE_ASC">🔼 Цена: от меньшего к большему</option>
        `;
        if (legend) legend.innerHTML = `<span><b class="text-cp-yellow">Код операции:</b> Н — Незначительная • М — Малая • С — Серьёзная • КР — Критическая</span>`;
    } else if (activeCatalogTab === "lore_nomads" || activeCatalogTab === "lore_gangs") {
        extraLabel.textContent = "Сортировка по численности";
        extraSelect.innerHTML = `
            <option value="ALL">Без сортировки</option>
            <option value="SORT_POP_ASC">🔼 Численность: от меньшего к большему</option>
            <option value="SORT_POP_DESC">🔽 Численность: от большего к меньшему</option>
        `;
        if (legend) {
            legend.innerHTML = activeCatalogTab === "lore_gangs"
                ? `<span><b class="text-cp-cyan">Численность</b> = Размер банды</span><span><b class="text-cp-red">Код угрозы</b> = Уровень опасности по классификации NCPD</span>`
                : `<span><b class="text-cp-cyan">Численность</b> = Количество участников стаи / клана</span>`;
        }
    } else if (activeCatalogTab === "lore_countries") {
        extraLabel.textContent = "Население / Грамотность";
        extraSelect.innerHTML = `
            <option value="ALL">Без сортировки</option>
            <option value="SORT_POP_ASC">🔼 Население: от меньшего к большему</option>
            <option value="SORT_POP_DESC">🔽 Население: от большего к меньшему</option>
            <option value="SORT_LIT_DESC">📖 Грамотность: от большего к меньшему</option>
            <option value="SORT_LIT_ASC">📖 Грамотность: от меньшего к большему</option>
        `;
        if (legend) legend.innerHTML = `<span><b class="text-cp-yellow">Столица</b> • <b class="text-cp-cyan">Население</b> • <b class="text-cp-green">% грамотности</b> • <b class="text-cp-red">Военная мощь</b></span>`;
    }
};

// 3. Подключаем саму логику сортировки в renderCatalog
const _prevRenderCatalogV4 = renderCatalog;
renderCatalog = function () {
    const extra = document.getElementById("extraFilter")?.value || "ALL";
    const needCustomSort =
        (activeCatalogTab === "martial_arts" && (extra === "SORT_IP_ASC" || extra === "SORT_IP_DESC")) ||
        (activeCatalogTab === "exotics" && (extra === "SORT_EXO_PRICE_DESC" || extra === "SORT_EXO_PRICE_ASC")) ||
        (["lore_nomads", "lore_gangs", "lore_countries"].includes(activeCatalogTab) && ["SORT_POP_ASC", "SORT_POP_DESC", "SORT_LIT_DESC", "SORT_LIT_ASC"].includes(extra));

    if (needCustomSort) {
        const origArr = DB[activeCatalogTab] || [];
        const sorted = [...origArr];

        if (activeCatalogTab === "martial_arts") {
            sorted.sort((a, b) => extra === "SORT_IP_ASC"
                ? (parseSmartNumber(a?.ipMod) - parseSmartNumber(b?.ipMod))
                : (parseSmartNumber(b?.ipMod) - parseSmartNumber(a?.ipMod))
            );
        } else if (activeCatalogTab === "exotics") {
            sorted.sort((a, b) => extra === "SORT_EXO_PRICE_DESC"
                ? (parseSmartNumber(b?.cost) - parseSmartNumber(a?.cost))
                : (parseSmartNumber(a?.cost) - parseSmartNumber(b?.cost))
            );
        } else if (extra === "SORT_LIT_DESC" || extra === "SORT_LIT_ASC") {
            sorted.sort((a, b) => extra === "SORT_LIT_DESC"
                ? (parseSmartNumber(b?.literacy) - parseSmartNumber(a?.literacy))
                : (parseSmartNumber(a?.literacy) - parseSmartNumber(b?.literacy))
            );
        } else {
            sorted.sort((a, b) => extra === "SORT_POP_ASC"
                ? (parseSmartNumber(a?.population) - parseSmartNumber(b?.population))
                : (parseSmartNumber(b?.population) - parseSmartNumber(a?.population))
            );
        }

        DB[activeCatalogTab] = sorted;
        try { _prevRenderCatalogV4(); } finally { DB[activeCatalogTab] = origArr; }
    } else {
        _prevRenderCatalogV4();
    }
};

// =========================================================================
// ГЕНЕРАТОР NPC (5-СТУПЕНЧАТАЯ СИСТЕМА CYBERPUNK 2020)
// =========================================================================

const NPC_DIFFICULTIES = {
    novice:     { label: "Новичок",      minSkillLow: 0, minSkillHigh: 0, specialMin: 1, minCap: 1, maxCap: 2,  extraPoints: false, highTierGear: false },
    amateur:    { label: "Любитель",     minSkillLow: 1, minSkillHigh: 2, specialMin: 3, minCap: 3, maxCap: 4,  extraPoints: false, highTierGear: false },
    specialist: { label: "Специалист",   minSkillLow: 3, minSkillHigh: 4, specialMin: 5, minCap: 5, maxCap: 6,  extraPoints: false, highTierGear: true  },
    pro:        { label: "Профессионал", minSkillLow: 5, minSkillHigh: 6, specialMin: 7, minCap: 7, maxCap: 8,  extraPoints: true,  highTierGear: true  },
    veteran:    { label: "Ветеран",      minSkillLow: 7, minSkillHigh: 8, specialMin: 8, minCap: 9, maxCap: 10, extraPoints: true,  highTierGear: true  }
};

const NPC_STYLE_CLOTHES = [
    "Байкерская кожа", "Синяя джинса", "Корпоративный костюм", "Комбинезон",
    "Мини-юбка", "Высокая мода", "Камуфляж", "Нормальная одежда",
    "Обнажённый", "Бездомный шик"
];
const NPC_STYLE_HAIR = [
    "Ирокез", "Длинная и распущенная", "Короткая и колючая", "Полностью растрёпанная",
    "Выбритая", "Полосатая", "Покрашенная", "Аккуратная, короткая",
    "Короткая вьющаяся", "Длинная прямая"
];
const NPC_STYLE_FEATURES = [
    "Татуировки", "Зеркальные очки", "Ритуальные шрамы", "Перчатки с шипами",
    "Кольцо в носу", "Серьги", "Длинные ногти", "Ботинки на каблуке",
    "Странные контактные линзы", "Перчатки без пальцев"
];

const NPC_ETHNICITIES = [
    { region: "Англо-Американец", origins: ["США (Восточное побережье)", "Северная Калифорния", "Южная Калифорния", "Техас", "Канада", "Великобритания", "Австралия", "Новая Зеландия", "Ирландия", "Аляска"] },
    { region: "Африканец", origins: ["Нигерия", "Кения", "ЮАР", "Египет", "Эфиопия", "Гана", "Марокко", "Танзания", "Сенегал", "Конго", "Ангола"] },
    { region: "Японец / Кореец", origins: ["Япония (Токио)", "Япония (Осака)", "Япония (Киото)", "Япония (Окинава)", "Япония (Иокогама)", "Япония (Саппоро)", "Корея (Сеул)", "Корея (Пусан)", "Корея (Инчхон)", "Корея (Тэгу)"] },
    { region: "Центральноевропейский / Из Советов", origins: ["РСФСР (Россия)", "Украинская ССР", "Белорусская ССР", "Казахская ССР", "Грузинская ССР", "Узбекская ССР", "Польша", "Чехословакия", "Венгрия", "Румыния", "Болгария", "Прибалтика"] },
    { region: "Тихоокеанский архипелаг", origins: ["Филиппины", "Индонезия", "Гавайи", "Новая Гвинея", "Фиджи", "Самоа", "Таити", "Малайзия", "Сингапур", "Бруней"] },
    { region: "Китаец / Из Южной Азии", origins: ["Китай (Пекин)", "Китай (Шанхай)", "Гонконг", "Тайвань", "Индия", "Вьетнам", "Таиланд", "Пакистан", "Бангладеш", "Мьянма", "Непал", "Шри-Ланка"] },
    { region: "Чёрный американец", origins: ["США (Найт-Сити)", "США (Нью-Йорк)", "США (Чикаго)", "США (Атланта)", "США (Детройт)", "США (Новый Орлеан)", "Ямайка", "Гаити", "Багамы", "Барбадос"] },
    { region: "Латиноамериканец", origins: ["Мексика", "Пуэрто-Рико", "Куба", "Доминиканская Республика", "США (Юго-Запад)", "США (Майами)", "Техас", "Калифорния", "Панама", "Коста-Рика"] },
    { region: "Центральная / Южная Америка", origins: ["Бразилия", "Аргентина", "Колумбия", "Чили", "Перу", "Венесуэла", "Эквадор", "Боливия", "Уругвай", "Гватемала", "Никарагуа", "Сальвадор"] },
    { region: "Европа", origins: ["Германия", "Франция", "Италия", "Испания", "Нидерланды", "Бельгия", "Швейцария", "Австрия", "Швеция", "Норвегия", "Дания", "Португалия"] }
];

const NPC_MOTIVATIONS = {
    traits: [
        "Застенчивый и скрытный", "Мятежный, асоциальный, жестокий", "Высокомерный, гордый и равнодушный",
        "Угрюмый, безрассудный и упрямый", "Придирчивый, суетливый и нервный", "Решительный и серьёзный",
        "Бесхитростный простак", "Подлый обманщик", "Интеллектуальный и обособленный", "Дружелюбный и общительный"
    ],
    valuedPerson: [
        "Родитель", "Брат или сестра", "Возлюбленный", "Друг", "Он сам",
        "Питомец", "Учитель или наставник", "Публичная фигура", "Личный герой", "Никто"
    ],
    valuedMost: [
        "Деньги", "Честь", "Своё слово", "Честность", "Знания",
        "Месть", "Любовь", "Власть", "Хорошо проводить время", "Дружба"
    ],
    feelAboutPeople: [
        "Нейтрален", "Ему нравятся почти все", "Он ненавидит почти всех",
        "Люди — инструменты. Использует их для своих целей и выбрасывает", "Каждая личность — ценная индивидуальность",
        "Люди — препятствия, которые нужно уничтожить, если встанут на пути", "Люди не заслуживают доверия",
        "Независим ни от кого", "Стереть их всех и отдать место тараканам", "Люди прекрасны"
    ],
    valuedPossession: [
        "Оружие", "Инструменты", "Элементы одежды", "Фотографии", "Книги и дневники",
        "Звукозапись", "Музыкальные инструменты", "Ювелирные изделия", "Игрушки", "Прописное письмо"
    ]
};

let lastGeneratedNpc = null;

function npcRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Производные показатели от ТЕЛО: МТЕЛ и УР Бонус
function getNpcBodyDerived(bodyVal) {
    const b = Number(bodyVal) || 2;
    if (b <= 2) return { btm: "0",  dmgBonus: "-2" };
    if (b <= 4) return { btm: "-1", dmgBonus: "-1" };
    if (b <= 6) return { btm: "-2", dmgBonus: "0"  };
    if (b <= 8) return { btm: "-3", dmgBonus: "+1" };
    return             { btm: "-4", dmgBonus: "+2" };
}

// Бросок ПЧ (Потери Человечности) по формуле из карточки (напр. "2d6", "1d6/2", "3d6+1", "1d6 / 2d6", "2")
function rollNpcHumanityLoss(pchRaw) {
    if (!pchRaw || pchRaw === "—") return 0;
    // Если указано несколько вариантов через " / " (с пробелами) или "или" — берём первый
    const firstPart = String(pchRaw).split(/\s+\/\s+|\s+или\s+/i)[0].trim();

    const diceMatch = firstPart.match(/(\d+)?\s*[dд]\s*(\d+)(?:\s*\/\s*(\d+))?(?:\s*([+-])\s*(\d+))?/i);
    if (diceMatch) {
        const count = parseInt(diceMatch[1] || "1", 10);
        const sides = parseInt(diceMatch[2], 10);
        const div = diceMatch[3] ? parseInt(diceMatch[3], 10) : 1;
        const sign = diceMatch[4];
        const mod = diceMatch[5] ? parseInt(diceMatch[5], 10) : 0;

        let total = 0;
        for (let i = 0; i < count; i++) total += npcRandInt(1, sides);
        if (div > 1) total = Math.ceil(total / div);
        if (sign === "+") total += mod;
        else if (sign === "-") total -= mod;
        return Math.max(0, total);
    }

    const numMatch = firstPart.replace(",", ".").match(/\d+(\.\d+)?/);
    return numMatch ? Math.round(parseFloat(numMatch[0])) : 0;
}

function initNpcGeneratorView() {
    const sel = document.getElementById("npcGenRoleSelect");
    if (!sel) return;
    const prev = sel.value || "RANDOM";
    const roles = (DB.roles || []).filter(r => r && !r.isCommunity);
    sel.innerHTML = `<option value="RANDOM">🎲 Случайная роль</option>` +
        roles.map(r => `<option value="${escapeHtmlAttr(r.id)}">${escapeHtmlAttr(r.name)}</option>`).join("");
    if ([...sel.options].some(o => o.value === prev)) sel.value = prev;
}

function getNpcRoleGearBonus(roleName) {
    const low = String(roleName || "").toLowerCase();
    if (low.includes("соло") || low.includes("solo")) return 3;
    if (low.includes("кочевник") || low.includes("nomad") || low.includes("коп") || low.includes("законник") || low.includes("cop")) return 2;
    return 0;
}

// Умный минимум ключевого СТАТа в зависимости от роли и сложности
function getNpcRoleKeyStatMin(roleObj, diffKey) {
    const nameStr = `${roleObj?.name || ""} ${roleObj?.origName || ""}`.toLowerCase();

    const soloMins = {
        novice: [3, 4], amateur: [4, 5], specialist: [5, 6], pro: [7, 8], veteran: [9, 10]
    };
    const stdMins = {
        novice: [3, 3], amateur: [4, 5], specialist: [6, 7], pro: [8, 8], veteran: [9, 9]
    };

    let statKey = null;
    let table = stdMins;

    if (/соло|solo/.test(nameStr)) {
        statKey = "stat_ref";
        table = soloMins;
    } else if (/фиксер|fixer|коп|законник|cop|рокер|rocker/.test(nameStr)) {
        statKey = "stat_cool";
    } else if (/нетраннер|netrunner|кочевник|nomad|медиа|media/.test(nameStr)) {
        statKey = "stat_int";
    } else if (/медтех|medtech|техник|techie/.test(nameStr)) {
        statKey = "stat_tech";
    }

    if (!statKey) return null;
    const [minLow, minHigh] = table[diffKey] || [2, 2];
    return { statKey, minVal: npcRandInt(minLow, minHigh) };
}

// Подбор реальной брони из DB.armor по диапазону ОС
function pickNpcArmorFromDB(rollVal) {
    const armorList = (DB.armor || []).filter(a => a && !a.isCommunity);
    const findByOs = (minOs, maxOs, fallbackName, fallbackOs, fallbackCovers) => {
        const matches = armorList.filter(a => {
            const osNum = parseInt(String(a.os || a.sp || "").replace(/[^\d]/g, ""), 10);
            return !isNaN(osNum) && osNum >= minOs && osNum <= maxOs;
        });
        if (matches.length > 0) return matches[npcRandInt(0, matches.length - 1)];
        return { name: fallbackName, os: String(fallbackOs), zu: "0", covers: fallbackCovers };
    };

    if (rollVal <= 1) return findByOs(3, 5, "Тяжёлая кожа", 4, "Торс, Руки");
    if (rollVal === 2) return findByOs(6, 10, "Бронежилет", 10, "Торс");
    if (rollVal <= 4) return findByOs(11, 13, "Лёгкая броня", 12, "Торс, Руки");
    if (rollVal <= 7) return findByOs(14, 17, "Средняя броня", 16, "Торс, Руки");
    if (rollVal <= 9) return findByOs(18, 23, "Тяжёлая броня", 20, "Торс, Руки");

    const mg = armorList.find(a => /metal\s*gear/i.test(a.name || "") || /metal\s*gear/i.test(a.origName || ""));
    return mg || { name: "MetalGear™", os: "25", zu: "-2", covers: "Всё тело" };
}

// Подбор реального оружия из DB.weapons по таблице
function isWeaponDamageAtLeast2d6(w) {
    const m = String(w?.damage || "").match(/(\d+)\s*[dд]\s*(\d+)/i);
    if (!m) return false;
    const count = parseInt(m[1], 10);
    const sides = parseInt(m[2], 10);
    return (count >= 2 && sides >= 6) || sides >= 10;
}

function pickNpcWeaponFromDB(rollVal, requireMin2d6 = false) {
    const weaponsList = (DB.weapons || []).filter(w => w && !w.isCommunity && (!requireMin2d6 || isWeaponDamageAtLeast2d6(w)));
    const pickByFilter = (predicate, fallback) => {
        const matches = weaponsList.filter(predicate);
        return matches.length > 0 ? matches[npcRandInt(0, matches.length - 1)] : fallback;
    };
    const cat = (w) => String(w.category || "").toLowerCase();
    const dmg = (w) => String(w.damage || "").toLowerCase();

    if (rollVal <= 1) {
        return pickByFilter(
            w => /нож|knife/i.test(w.name || "") || /нож|knife/i.test(w.origName || ""),
            { name: "Нож", typeCode: "ХОЛ", to: "0", skr: "Кар", damage: "1d6", mag: "—", sko: "—", range: "Ближний", nad: "—" }
        );
    }
    if (rollVal === 2) {
        return pickByFilter(
            w => cat(w).includes("лёгкие пистолеты"),
            { name: "Лёгкий пистолет", typeCode: "П", to: "0", skr: "Кар", damage: "1d6+1", mag: "10", sko: "2", range: "50м", nad: "ОБ" }
        );
    }
    if (rollVal === 3) {
        return pickByFilter(
            w => cat(w).includes("средние пистолеты"),
            { name: "Средний пистолет", typeCode: "П", to: "0", skr: "Кур", damage: "2d6+1", mag: "12", sko: "2", range: "50м", nad: "ОН" }
        );
    }
    if (rollVal <= 5) {
        return pickByFilter(
            w => cat(w).includes("тяжёлые пистолеты"),
            { name: "Тяжёлый пистолет", typeCode: "П", to: "0", skr: "Кур", damage: "3d6", mag: "8", sko: "2", range: "50м", nad: "ОН" }
        );
    }
    if (rollVal === 6) {
        return pickByFilter(
            w => cat(w).includes("лёгкие пп") || cat(w).includes("лёгкие пистолеты-пулемёты"),
            { name: "Лёгкий ПП", typeCode: "ПП", to: "+1", skr: "Кур", damage: "2d6+1", mag: "30", sko: "25", range: "150м", nad: "ОБ" }
        );
    }
    if (rollVal === 7) {
        return pickByFilter(
            w => cat(w).includes("штурмовые винтовки") && (dmg(w).includes("4d6") || dmg(w).includes("5d6")),
            { name: "Лёгкая штурмовая винтовка", typeCode: "ВИН", to: "+1", skr: "Нет", damage: "5d6", mag: "35", sko: "3/30", range: "400м", nad: "ОН" }
        );
    }
    if (rollVal === 8) {
        return pickByFilter(
            w => cat(w).includes("штурмовые винтовки") && (dmg(w).includes("5d6") || dmg(w).includes("6d6")),
            { name: "Средняя штурмовая винтовка", typeCode: "ВИН", to: "0", skr: "Нет", damage: "5d6+3", mag: "30", sko: "3/30", range: "400м", nad: "ОН" }
        );
    }
    return pickByFilter(
        w => cat(w).includes("штурмовые винтовки") && (dmg(w).includes("6d6+1") || dmg(w).includes("6d6+2") || dmg(w).includes("6d6+3")),
        { name: "Тяжёлая штурмовая винтовка", typeCode: "ВИН", to: "-1", skr: "Нет", damage: "6d6+2", mag: "30", sko: "3/30", range: "400м", nad: "ОН" }
    );
}

window.generateRandomNpc = function () {
    const diffKey = document.getElementById("npcGenDifficulty")?.value || "specialist";
    const diff = NPC_DIFFICULTIES[diffKey] || NPC_DIFFICULTIES.specialist;
    const roleChoice = document.getElementById("npcGenRoleSelect")?.value || "RANDOM";

    const rolesPool = (DB.roles || []).filter(r => r && !r.isCommunity);
    let roleObj = roleChoice !== "RANDOM"
        ? rolesPool.find(r => r.id === roleChoice)
        : rolesPool[npcRandInt(0, Math.max(0, rolesPool.length - 1))];
    if (!roleObj) {
        roleObj = { name: "Соло", ability: "Чувство Боя", skills: ["Чувство Боя", "Внимательность", "Пистолеты", "Драка", "Ближний бой", "Винтовки", "Атлетика", "Пистолеты-Пулемёты", "Скрытность", "Уклонение"] };
    }

    const isSolo = /соло|solo/i.test(roleObj.name || "") || /solo/i.test(roleObj.origName || "");

    // ШАГ 1: Генерация СТАТов (2–10, а для ключевого СТАТа роли — с учётом минимума сложности)
    const stats = {};
    CHARACTER_STAT_KEYS.forEach(st => {
        stats[st.k] = npcRandInt(2, 10);
    });
    const keyStatMin = getNpcRoleKeyStatMin(roleObj, diffKey);
    if (keyStatMin) {
        stats[keyStatMin.statKey] = npcRandInt(keyStatMin.minVal, 10);
    }
    const derived = getNpcBodyDerived(stats.stat_body);
    const runSpeed = stats.stat_ma * 3;
    // ШАГ 2: Навыки роли (минимум по сложности + особая способность первой в списке + 40 базовых очков)
    const rawSkills = Array.isArray(roleObj.skills) && roleObj.skills.length > 0
        ? roleObj.skills.filter(s => s && s !== "—")
        : [roleObj.ability || "Особая способность", "Внимательность", "Пистолеты", "Драка", "Атлетика"];

    let spentOnMins = 0;
    const skillsMap = rawSkills.map((name, idx) => {
        const minLvl = idx === 0
            ? diff.specialMin
            : npcRandInt(diff.minSkillLow, diff.minSkillHigh);
        const cap = Math.max(minLvl, npcRandInt(diff.minCap, diff.maxCap));
        spentOnMins += minLvl;
        return { name, level: minLvl, cap };
    });

    let pool = Math.max(0, 40 - spentOnMins);
    let safety = 500;
    while (pool > 0 && safety-- > 0) {
        const avail = skillsMap.filter(s => s.level < s.cap);
        if (avail.length === 0) break;
        const pick = avail[npcRandInt(0, avail.length - 1)];
        pick.level++;
        pool--;
    }

    let extraPoolRolled = 0;
    if (diff.extraPoints && skillsMap.length > 0) {
        extraPoolRolled = npcRandInt(2, 20);
        const shuffled = [...skillsMap].sort(() => Math.random() - 0.5).slice(0, 5);
        let extraLeft = extraPoolRolled;
        let guard = 200;
        while (extraLeft > 0 && guard-- > 0) {
            const avail = shuffled.filter(s => s.level < diff.maxCap);
            if (avail.length === 0) break;
            const pick = avail[npcRandInt(0, avail.length - 1)];
            pick.level++;
            extraLeft--;
        }
    }

    // ШАГ 3: Киберимпланты из карточек DB.cyberware
    // 3 импланта для обычных ролей, 6 для Соло. 10% шанс на пустой слот. +50% шанс на +1 доп. опцию.
    const cyberPool = (DB.cyberware || []).filter(c => c && !c.isCommunity);
    const usedCyberIds = new Set();
    const cyberware = [];
    let totalHl = 0;

    const addRandomCyber = (isBonusOption = false) => {
        const available = cyberPool.filter(c => !usedCyberIds.has(c.id));
        if (available.length === 0) return;
        const picked = available[npcRandInt(0, available.length - 1)];
        usedCyberIds.add(picked.id);
        const rolledHl = rollNpcHumanityLoss(picked.pch);
        totalHl += rolledHl;
        cyberware.push({ item: picked, rolledHl, isBonusOption });
    };

    const baseCyberCount = isSolo ? 6 : 3;
    for (let i = 0; i < baseCyberCount; i++) {
        if (Math.random() < 0.10) continue; // 10% шанс, что импланта нет
        addRandomCyber(false);
    }
    if (Math.random() < 0.50) {
        addRandomCyber(true); // 50% шанс на +1 опцию кибероснащения
    }

    // Расчёт Человечности и текущей ЭМП по правилам CP2020 (1 ЭМП = 10 Человечности)
    const baseEmp = stats.stat_emp;
    const baseHumanity = baseEmp * 10;
    const currentHumanity = Math.max(0, baseHumanity - totalHl);
    const currentEmp = Math.floor(currentHumanity / 10);

    // ШАГ 4: Броня и оружие (1d10 + бонус роли; со «Специалиста» броня не ниже ОС 10, оружие не слабее 2d6)
    const roleBonus = getNpcRoleGearBonus(roleObj.name);
    const gearRollRaw = npcRandInt(1, 10);
    const gearRollTotal = gearRollRaw + roleBonus;
    const effectiveGearRoll = diff.highTierGear ? Math.max(3, gearRollTotal) : gearRollTotal;
    const armor = pickNpcArmorFromDB(effectiveGearRoll);
    const weapon = pickNpcWeaponFromDB(effectiveGearRoll, diff.highTierGear);

    // ШАГ 5: Стиль, Этнос и Мотивы
    const style = {
        clothes: NPC_STYLE_CLOTHES[npcRandInt(0, 9)],
        hair: NPC_STYLE_HAIR[npcRandInt(0, 9)],
        feature: NPC_STYLE_FEATURES[npcRandInt(0, 9)]
    };
    const ethObj = NPC_ETHNICITIES[npcRandInt(0, NPC_ETHNICITIES.length - 1)];
    const ethnicity = {
        region: ethObj.region,
        origin: ethObj.origins[npcRandInt(0, ethObj.origins.length - 1)]
    };
    const motivations = {
        trait: NPC_MOTIVATIONS.traits[npcRandInt(0, 9)],
        valuedPerson: NPC_MOTIVATIONS.valuedPerson[npcRandInt(0, 9)],
        valuedMost: NPC_MOTIVATIONS.valuedMost[npcRandInt(0, 9)],
        feelAboutPeople: NPC_MOTIVATIONS.feelAboutPeople[npcRandInt(0, 9)],
        valuedPossession: NPC_MOTIVATIONS.valuedPossession[npcRandInt(0, 9)]
    };

    lastGeneratedNpc = {
        difficulty: diff.label,
        roleObj,
        role: roleObj.name,
        ability: roleObj.ability || "—",
        stats,
        baseEmp,
        currentEmp,
        baseHumanity,
        currentHumanity,
        totalHl,
        runSpeed,
        btm: derived.btm,
        dmgBonus: derived.dmgBonus,
        skills: skillsMap,
        extraPoolRolled,
        cyberware,
        armor,
        weapon,
        gearRollRaw,
        roleBonus,
        gearRollTotal,
        style,
        ethnicity,
        motivations
    };

    renderGeneratedNpcResult(lastGeneratedNpc);
};

function renderGeneratedNpcResult(npc) {
    const box = document.getElementById("npcGenResultBox");
    const copyBtn = document.getElementById("npcGenCopyBtn");
    if (!box) return;
    if (copyBtn) copyBtn.classList.remove("hidden");

    const statsHtml = CHARACTER_STAT_KEYS.map(st => {
        const isEmp = st.k === "stat_emp";
        const valText = isEmp ? `${npc.currentEmp}/${npc.baseEmp}` : npc.stats[st.k];
        const valColor = isEmp && npc.currentEmp <= 2 ? "text-cp-red" : "text-cp-cyan";
        return `
          <div class="bg-cp-bg border border-gray-800 p-2.5 text-center">
            <div class="text-[10px] text-gray-400 font-bold">${st.l}</div>
            <div class="text-lg font-display font-black ${valColor} mt-0.5">${valText}</div>
          </div>
        `;
    }).join("");

    const skillsHtml = npc.skills.map(sk => `
      <div class="bg-cp-bg border border-gray-800 px-3 py-1.5 flex items-center justify-between gap-2 text-xs">
        <span class="text-gray-200 truncate">${escapeHtmlAttr(sk.name)}</span>
        <span class="font-display font-black text-cp-yellow shrink-0">+${sk.level}</span>
      </div>
    `).join("");

    const roleClickAttr = npc.roleObj && npc.roleObj.id
        ? `onclick="navigateToCardReference('roles', '${escapeHtmlAttr(npc.roleObj.id)}')" class="font-display text-2xl font-black text-white hover:text-cp-yellow hover:underline cursor-pointer mt-0.5 inline-block transition-colors"`
        : `class="font-display text-2xl font-black text-white mt-0.5"`;

    const w = npc.weapon;
    const a = npc.armor;

    const armorTitleHtml = a.id
        ? `<button type="button" onclick="navigateToCardReference('armor', '${escapeHtmlAttr(a.id)}')" class="font-bold text-sm text-white hover:text-cp-cyan hover:underline text-left transition-colors">${escapeHtmlAttr(a.name)} ↗</button>`
        : `<span class="font-bold text-sm text-white">${escapeHtmlAttr(a.name)}</span>`;

    const weaponTitleHtml = w.id
        ? `<button type="button" onclick="navigateToCardReference('weapons', '${escapeHtmlAttr(w.id)}')" class="font-bold text-sm text-white hover:text-cp-yellow hover:underline text-left transition-colors">${escapeHtmlAttr(w.name)} ↗</button>`
        : `<div class="font-bold text-sm text-white">${escapeHtmlAttr(w.name)}</div>`;

    const cyberListHtml = npc.cyberware.length === 0
        ? `<div class="text-xs text-gray-500 italic">Без киберимплантов</div>`
        : npc.cyberware.map(({ item, rolledHl, isBonusOption }) => {
            const shortDesc = item.desc ? truncateQuote(item.desc, 130) : "—";
            return `
              <div class="bg-cp-panel border border-purple-500/40 p-2.5 space-y-1">
                <div class="flex items-center justify-between gap-2">
                  <button type="button" onclick="navigateToCardReference('cyberware', '${escapeHtmlAttr(item.id)}')"
                    class="text-xs font-bold text-white hover:text-cp-cyan hover:underline text-left transition-colors">
                    ${escapeHtmlAttr(item.name)} ↗
                  </button>
                  <div class="flex items-center gap-1.5 shrink-0">
                    ${isBonusOption ? `<span class="px-1.5 py-0.5 bg-cp-cyan/15 text-cp-cyan text-[9px] font-bold uppercase">+опция</span>` : ""}
                    <span class="px-1.5 py-0.5 bg-cp-red/20 border border-cp-red/40 text-cp-red font-bold text-[10px]">ПЧ: ${dash(item.pch)} (−${rolledHl})</span>
                  </div>
                </div>
                <div class="text-[11px] text-gray-400 leading-snug">${escapeHtmlAttr(shortDesc)}</div>
              </div>
            `;
        }).join("");

    box.innerHTML = `
      <div class="space-y-5">
        <div class="border-b border-gray-800 pb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div class="text-[10px] font-bold uppercase tracking-widest text-cp-cyan">СГЕНЕРИРОВАННЫЙ NPC // ${escapeHtmlAttr(npc.difficulty)}</div>
            <h2 ${roleClickAttr}>${escapeHtmlAttr(npc.role)}${npc.roleObj?.id ? ' <span class="text-xs text-cp-cyan">↗</span>' : ''}</h2>
            <div class="text-xs text-gray-400">Особая способность: <b class="text-cp-yellow">${escapeHtmlAttr(npc.ability)}</b></div>
          </div>
          <div class="text-right text-xs text-gray-400 space-y-0.5">
            <div>Человечность: <b class="${npc.currentEmp <= 2 ? 'text-cp-red' : 'text-cp-green'}">${npc.currentHumanity} / ${npc.baseHumanity}</b> (ПЧ: <b class="text-cp-red">−${npc.totalHl}</b>)</div>
            <div>Бросок экипировки: <b class="text-white">${npc.gearRollRaw}</b>${npc.roleBonus ? ` <b class="text-cp-green">+${npc.roleBonus}</b>` : ""} = <b class="text-cp-yellow">${npc.gearRollTotal}</b></div>
            ${npc.extraPoolRolled > 0 ? `<div>Доп. очки навыков: <b class="text-cp-cyan">+${npc.extraPoolRolled}</b></div>` : ""}
          </div>
        </div>

        <!-- СТАТЫ И ПРОИЗВОДНЫЕ ПОКАЗАТЕЛИ -->
        <div class="space-y-2.5">
          <div class="text-[11px] font-bold uppercase text-cp-yellow">📊 Характеристики (СТАТы):</div>
          <div class="grid grid-cols-3 sm:grid-cols-9 gap-2">${statsHtml}</div>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div class="bg-cp-bg border border-gray-800 p-2">
              <div class="text-[10px] text-gray-400 uppercase font-bold">🏃 Бег (ПЕР × 3)</div>
              <div class="text-sm font-display font-black text-cp-green mt-0.5">${npc.runSpeed} м</div>
            </div>
            <div class="bg-cp-bg border border-gray-800 p-2">
              <div class="text-[10px] text-gray-400 uppercase font-bold">🛡️ МТЕЛ</div>
              <div class="text-sm font-display font-black text-cp-yellow mt-0.5">${npc.btm}</div>
            </div>
            <div class="bg-cp-bg border border-gray-800 p-2">
              <div class="text-[10px] text-gray-400 uppercase font-bold">👊 УР Бонус</div>
              <div class="text-sm font-display font-black text-cp-red mt-0.5">${npc.dmgBonus}</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-5 items-start">
          <!-- НАВЫКИ + ВНЕШНИЙ ВИД, ЭТНОС И МОТИВЫ -->
          <div class="col-span-12 lg:col-span-6 space-y-4">
            <div class="space-y-2">
              <div class="text-[11px] font-bold uppercase text-cp-cyan">🎯 Профессиональные навыки:</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">${skillsHtml}</div>
            </div>

            <div class="bg-cp-bg border-l-2 border-cp-yellow p-3.5 space-y-2 text-xs">
              <div class="text-[11px] font-bold uppercase text-cp-yellow">🕶️ Внешний вид и Этнос:</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                <div class="bg-cp-panel border border-gray-800 px-2.5 py-1.5"><span class="text-gray-400">Одежда:</span> <b class="text-white">${escapeHtmlAttr(npc.style.clothes)}</b></div>
                <div class="bg-cp-panel border border-gray-800 px-2.5 py-1.5"><span class="text-gray-400">Причёска:</span> <b class="text-white">${escapeHtmlAttr(npc.style.hair)}</b></div>
                <div class="bg-cp-panel border border-gray-800 px-2.5 py-1.5"><span class="text-gray-400">Особенность:</span> <b class="text-cp-cyan">${escapeHtmlAttr(npc.style.feature)}</b></div>
                <div class="bg-cp-panel border border-gray-800 px-2.5 py-1.5"><span class="text-gray-400">Этнос:</span> <b class="text-cp-yellow">${escapeHtmlAttr(npc.ethnicity.region)}</b> <span class="text-gray-400">(${escapeHtmlAttr(npc.ethnicity.origin)})</span></div>
              </div>
            </div>

            <div class="bg-cp-bg border-l-2 border-cp-green p-3.5 space-y-1.5 text-xs">
              <div class="text-[11px] font-bold uppercase text-cp-green">🧠 Мотивы и Характер:</div>
              <div class="space-y-1 text-gray-300">
                <div><span class="text-gray-500">Характер:</span> <b class="text-white">${escapeHtmlAttr(npc.motivations.trait)}</b></div>
                <div><span class="text-gray-500">Самый ценный человек:</span> <b class="text-white">${escapeHtmlAttr(npc.motivations.valuedPerson)}</b></div>
                <div><span class="text-gray-500">Ценит больше всего:</span> <b class="text-cp-yellow">${escapeHtmlAttr(npc.motivations.valuedMost)}</b></div>
                <div><span class="text-gray-500">Отношение к людям:</span> <b class="text-gray-200">${escapeHtmlAttr(npc.motivations.feelAboutPeople)}</b></div>
                <div><span class="text-gray-500">Ценная вещь / увлечение:</span> <b class="text-cp-cyan">${escapeHtmlAttr(npc.motivations.valuedPossession)}</b></div>
              </div>
            </div>
          </div>

          <!-- КИБЕРИМПЛАНТЫ, БРОНЯ И ОРУЖИЕ -->
          <div class="col-span-12 lg:col-span-6 space-y-4">
            <div class="bg-cp-bg border-l-2 border-purple-500 p-3.5 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold uppercase text-purple-400">🦾 Киберимпланты (${npc.cyberware.length}):</span>
                <span class="text-[10px] text-cp-red font-bold">Суммарная ПЧ: −${npc.totalHl}</span>
              </div>
              <div class="space-y-1.5">${cyberListHtml}</div>
            </div>

            <div class="bg-cp-bg border-l-2 border-cp-cyan p-3.5 space-y-1.5">
              <div class="text-[11px] font-bold uppercase text-cp-cyan">🛡️ Броня:</div>
              <div class="flex items-center justify-between gap-2">
                ${armorTitleHtml}
                <span class="px-2 py-0.5 bg-cp-cyan/15 border border-cp-cyan/50 text-cp-cyan font-bold text-xs shrink-0">ОС: ${dash(a.os || a.sp)}</span>
              </div>
              <div class="text-xs text-gray-400">Зона защиты: <b class="text-gray-200">${dash(a.covers || a.coverage)}</b> • ЗУ: <b class="text-cp-yellow">${dash(a.zu || a.ev)}</b></div>
            </div>

            <div class="bg-cp-bg border-l-2 border-cp-red p-3.5 space-y-2">
              <div class="text-[11px] font-bold uppercase text-cp-red">🔫 Оружие:</div>
              ${weaponTitleHtml}
              <div class="grid grid-cols-4 sm:grid-cols-7 gap-1 text-center text-[11px]">
                <div class="bg-cp-panel p-1 border border-gray-800"><div class="text-[8px] text-gray-400">Тип</div><b>${dash(w.typeCode)}</b></div>
                <div class="bg-cp-panel p-1 border border-gray-800"><div class="text-[8px] text-gray-400">ТО</div><b class="text-cp-yellow">${dash(w.to)}</b></div>
                <div class="bg-cp-panel p-1 border border-gray-800"><div class="text-[8px] text-gray-400">Урон</div><b class="text-cp-red">${dash(w.damage)}</b></div>
                <div class="bg-cp-panel p-1 border border-gray-800"><div class="text-[8px] text-gray-400">МАГ</div><b>${dash(w.mag)}</b></div>
                <div class="bg-cp-panel p-1 border border-gray-800"><div class="text-[8px] text-gray-400">СКО</div><b>${dash(w.sko)}</b></div>
                <div class="bg-cp-panel p-1 border border-gray-800"><div class="text-[8px] text-gray-400">ДИС</div><b class="text-cp-cyan">${dash(w.range)}</b></div>
                <div class="bg-cp-panel p-1 border border-gray-800"><div class="text-[8px] text-gray-400">НАД</div><b class="text-cp-green">${dash(w.nad)}</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
}

window.copyGeneratedNpcToClipboard = function () {
    if (!lastGeneratedNpc) return;
    const n = lastGeneratedNpc;

    // 1. Маппинг статов под ключи плагина (ТЕЛ и УДАЧ вместо ТЕЛО и УДАЧА)
    const obrStatsMap = [
        ["ИНТ",  n.stats.stat_int],
        ["КРУТ", n.stats.stat_cool],
        ["ПЕР",  n.stats.stat_ma],
        ["РЕФ",  n.stats.stat_ref],
        ["ПРВЛ", n.stats.stat_attr],
        ["ТЕЛ",  n.stats.stat_body],
        ["ТЕХ",  n.stats.stat_tech],
        ["УДАЧ", n.stats.stat_luck],
        ["ЭМП",  n.currentEmp]
    ];
    const statsRows = obrStatsMap.map(([k, v]) => `| ${k} | ${v} |`).join("\n");

    // 2. Разделяем навыки на боевые и прочие
    const combatRegex = /пистолет|винтовк|пп|пулем|дробов|тяж[её]л|драк|ближн|боев|уклонен|фехтован|стрельб|метан|лук|арбалет/i;
    const combatList = [];
    const otherList = [];
    (n.skills || []).forEach(s => {
        const entry = `${s.name} +${s.level}`;
        if (combatRegex.test(s.name)) combatList.push(entry);
        else otherList.push(entry);
    });

    const specialSkillLvl = n.skills?.[0]?.level ?? 0;
    const roleLine = `${n.role} (${n.ability} +${specialSkillLvl})`;

    // 3. Кибернетика
    const cyberText = n.cyberware.length > 0
        ? n.cyberware.map(c => `- ${c.item.name} (ПЧ −${c.rolledHl})`).join("\n")
        : "*При отсутствии кибернетики раздел пропускается.*";

    // 4. Раскладываем ОС брони по 6 зонам плагина
    const spNum = parseInt(String(n.armor?.os || n.armor?.sp || "0").replace(/[^\d]/g, ""), 10) || 0;
    const cov = String(n.armor?.covers || n.armor?.coverage || "Торс").toLowerCase();
    const isAll = cov.includes("вс") || cov.includes("все");
    const zoneSp = (cond) => (isAll || cond) ? `${spNum} / ${spNum}` : "0 / 0";

    const armorRows = [
        `| ТОРС | ${zoneSp(cov.includes("торс") || cov.includes("тело"))} |`,
        `| ГОЛОВА | ${zoneSp(cov.includes("голов"))} |`,
        `| ПРАВАЯ РУКА | ${zoneSp(cov.includes("рук"))} |`,
        `| ЛЕВАЯ РУКА | ${zoneSp(cov.includes("рук"))} |`,
        `| ПРАВАЯ НОГА | ${zoneSp(cov.includes("ног"))} |`,
        `| ЛЕВАЯ НОГА | ${zoneSp(cov.includes("ног"))} |`
    ].join("\n");

    // 5. Оружие (нормализуем скрытность, магазин и СКО под парсер плагина)
    const w = n.weapon || {};
    const skrLow = String(w.skr || "").toLowerCase();
    const concealObr = skrLow.includes("кар") ? "Карман"
        : skrLow.includes("кур") ? "Куртка"
        : skrLow.includes("плащ") ? "Длинный плащ"
        : "Нет";

    const magNum = parseInt(String(w.mag || "0").replace(/[^\d]/g, ""), 10) || 0;
    const rofMatch = String(w.sko || "1").match(/\d+/g);
    const rofNum = rofMatch ? Math.max(...rofMatch.map(Number)) : 1;
    const rangeNum = String(w.range || "").replace(/[^\d.,]/g, "") || "-";

    // Подбираем подходящий боевой навык для оружия (если есть)
    const matchedSkill = (n.skills || []).find(s => combatRegex.test(s.name));
    const weaponSkillStr = matchedSkill ? `+${matchedSkill.level}` : "+4";
    const weaponDesc = w.desc ? String(w.desc).replace(/\s+/g, " ").trim() : "-";

    const mdText = `# ${n.role} (${n.difficulty})

## ХАРАКТЕРИСТИКИ
| Характеристика | Значение |
|---|---:|
${statsRows}

**Производные показатели:**
- МТЕЛ: ${n.btm}
- УРбонус: ${n.dmgBonus}
- БЕГ: ${n.runSpeed} м

## НАВЫКИ
**Способность роли:**
- Роль: ${roleLine}
- Боевые навыки: ${combatList.length ? combatList.join(", ") : "+0"}
- Прочее: ${otherList.length ? otherList.join(", ") : "-"}

## КИБЕРНЕТИКА
${cyberText}

## ЗАЩИТА И СНАРЯЖЕНИЕ
**БРОНЯ (SP):**
| Часть тела | Текущий SP / Максимальный SP |
|---|---:|
${armorRows}

**ОРУЖИЕ:**
- **${w.name || "Оружие"}:**
  - Тип: ${dash(w.typeCode)}
  - Навык: ${weaponSkillStr}
  - ТО: ${dash(w.to)}
  - Скрыт: ${concealObr}
  - Урон: ${dash(w.damage)}
  - Боезапас: ${magNum} / ${magNum}
  - СКО: ${rofNum}
  - НАД: ${dash(w.nad)}
  - Дистанция: ${rangeNum}
  - Примечания: Броня: ${n.armor?.name || "—"} (ЗУ ${dash(n.armor?.zu || n.armor?.ev)}), Человечность: ${n.currentHumanity}/${n.baseHumanity}
  - Зарядники: 2 запасных
  - Описание: ${weaponDesc}

**ПРОЧЕЕ СНАРЯЖЕНИЕ:**
- Внешний вид: ${n.style.clothes}, причёска: ${n.style.hair}, особенность: ${n.style.feature}
- Этнос: ${n.ethnicity.region} (${n.ethnicity.origin})
- Характер: ${n.motivations.trait}
- Ценит больше всего: ${n.motivations.valuedMost} | Важный человек: ${n.motivations.valuedPerson}
- Отношение к людям: ${n.motivations.feelAboutPeople}
- Ценная вещь: ${n.motivations.valuedPossession}

## ЗДОРОВЬЕ
Текущие ранения: 0 / 40 (ЗДОРОВ — Без штрафов, ОГЛ -0)

## SDP КИБЕРНЕТИЧЕСКИХ КОНЕЧНОСТЕЙ
| Конечность | SDP (текущий / максимум) |
|---|---:|
| Правая рука | ? / ? |
| Левая рука | ? / ? |
| Правая нога | ? / ? |
| Левая нога | ? / ? |
`;

    navigator.clipboard?.writeText(mdText).then(() => {
        const btn = document.getElementById("npcGenCopyBtn");
        if (btn) {
            btn.textContent = "✓ Скопировано (OBR)";
            setTimeout(() => { btn.textContent = "📋 Копировать"; }, 1500);
        }
    });
};

// Копирование статблока прописанного персонажа («Именные» / «NPC») в формате Markdown для Owlbear Rodeo
window.copyCharacterCardToObr = function (itemId, btnEl) {
    const ch = (DB.characters || []).find(x => x && x.id === itemId);
    if (!ch) return;

    const toNum = (v, fb = 5) => {
        const m = String(v ?? "").match(/\d+/);
        return m ? parseInt(m[0], 10) : fb;
    };

    const bodyVal = toNum(ch.stat_body, 5);
    const maVal = toNum(ch.stat_ma, 5);
    const derived = typeof getNpcBodyDerived === "function"
        ? getNpcBodyDerived(bodyVal)
        : { btm: "-2", dmgBonus: "0" };

    // 1. Характеристики (ключи строго под плагин: ТЕЛ и УДАЧ)
    const statsRows = [
        ["ИНТ",  toNum(ch.stat_int, 5)],
        ["КРУТ", toNum(ch.stat_cool, 5)],
        ["ПЕР",  maVal],
        ["РЕФ",  toNum(ch.stat_ref, 5)],
        ["ПРВЛ", toNum(ch.stat_attr, 5)],
        ["ТЕЛ",  bodyVal],
        ["ТЕХ",  toNum(ch.stat_tech, 5)],
        ["УДАЧ", toNum(ch.stat_luck, 5)],
        ["ЭМП",  toNum(ch.stat_emp, 5)]
    ].map(([k, v]) => `| ${k} | ${v} |`).join("\n");

    // 2. Разделяем навыки на боевые и прочие
    const combatRegex = /пистолет|винтовк|пп|пулем|дробов|тяж[её]л|драк|ближн|боев|уклонен|фехтован|стрельб|метан|лук|арбалет/i;
    const combatList = [];
    const otherList = [];
    const rawSkillsStr = (ch.charSkills && ch.charSkills !== "—") ? String(ch.charSkills) : "";
    rawSkillsStr.split(/[,;\n]+/).map(s => s.trim()).filter(Boolean).forEach(sk => {
        if (combatRegex.test(sk)) combatList.push(sk);
        else otherList.push(sk);
    });

    // 3. Кибернетика (поддержка нового списка и старого текстового поля)
    const cyberArr = Array.isArray(ch.charCyberwareList) && ch.charCyberwareList.length > 0
        ? ch.charCyberwareList.map(c => c.desc ? `${c.name} (${c.desc})` : c.name)
        : (ch.charCyberware && ch.charCyberware !== "—" ? String(ch.charCyberware).split(/,\s*(?=[А-ЯA-Z])|\n+/).map(s => s.trim()).filter(Boolean) : []);
    const cyberText = cyberArr.length > 0
        ? cyberArr.map(c => `- ${c}`).join("\n")
        : "*При отсутствии кибернетики раздел пропускается.*";

    // 4. Броня: парсим ОС и зоны защиты из списка или текста
    const armorArr = Array.isArray(ch.charArmorList) && ch.charArmorList.length > 0
        ? ch.charArmorList.map(a => a.desc ? `${a.name} (${a.desc})` : a.name)
        : (ch.charArmor && ch.charArmor !== "—" ? String(ch.charArmor).split(/,\s*(?=[А-ЯA-Z])|\n+/).map(s => s.trim()).filter(Boolean) : []);

    const zones = { TORSO: 0, HEAD: 0, R_ARM: 0, L_ARM: 0, R_LEG: 0, L_LEG: 0 };
    armorArr.forEach(str => {
        const spMatch = str.match(/(\d+)\s*(?:ос|sp)/i) || str.match(/(?:ос|sp)\s*[:=]?\s*(\d+)/i);
        const sp = spMatch ? parseInt(spMatch[1], 10) : 0;
        if (!sp) return;
        const low = str.toLowerCase();
        const isAll = /вс[её]\s*тел|скафандр|metal\s*gear/.test(low);
        const isHead = isAll || /голов|шлем|шапк/.test(low);
        const isTorso = isAll || /торс|куртк|жилет|пальто|плащ|костюм|бронежилет|рубашк/.test(low);
        const isArms = isAll || /рук|куртк|пальто|плащ|костюм|наруч/.test(low);
        const isLegs = isAll || /ног|джинс|штан|брюк|понож|пальто|плащ|костюм|ботин/.test(low);

        if (isHead) zones.HEAD = Math.max(zones.HEAD, sp);
        if (isTorso) zones.TORSO = Math.max(zones.TORSO, sp);
        if (isArms) { zones.R_ARM = Math.max(zones.R_ARM, sp); zones.L_ARM = Math.max(zones.L_ARM, sp); }
        if (isLegs) { zones.R_LEG = Math.max(zones.R_LEG, sp); zones.L_LEG = Math.max(zones.L_LEG, sp); }
        if (!isHead && !isTorso && !isArms && !isLegs) zones.TORSO = Math.max(zones.TORSO, sp);
    });

    const armorRows = [
        `| ТОРС | ${zones.TORSO} / ${zones.TORSO} |`,
        `| ГОЛОВА | ${zones.HEAD} / ${zones.HEAD} |`,
        `| ПРАВАЯ РУКА | ${zones.R_ARM} / ${zones.R_ARM} |`,
        `| ЛЕВАЯ РУКА | ${zones.L_ARM} / ${zones.L_ARM} |`,
        `| ПРАВАЯ НОГА | ${zones.R_LEG} / ${zones.R_LEG} |`,
        `| ЛЕВАЯ НОГА | ${zones.L_LEG} / ${zones.L_LEG} |`
    ].join("\n");

    // 5. Оружие (новый массив или старая строка)
    const weaponsArr = Array.isArray(ch.charWeaponsList) && ch.charWeaponsList.length > 0
        ? ch.charWeaponsList
        : (ch.charWeapons && ch.charWeapons !== "—"
            ? String(ch.charWeapons).split(/,\s*(?=[А-ЯA-Z])|\n+/).map(s => s.trim()).filter(Boolean).map(line => {
                const dmgM = line.match(/(\d+[dд]\d+(?:[+-]\d+)?)/i);
                return { name: line, type: "-", skr: "Нет", to: "+0", damage: dmgM ? dmgM[1] : "2d6", mag: "10", sko: "2", range: "50", nad: "-", desc: "" };
            })
            : []);

    const firstCombatSkill = combatList[0]?.match(/([+-]?\d+)/)?.[1] || "4";
    const weaponsText = weaponsArr.length > 0
        ? weaponsArr.map(w => {
            const skrLow = String(w.skr || "").toLowerCase();
            const concealObr = skrLow.includes("кар") ? "Карман"
                : skrLow.includes("кур") ? "Куртка"
                : skrLow.includes("плащ") ? "Длинный плащ"
                : "Нет";
            const magNum = parseInt(String(w.mag || "0").replace(/[^\d]/g, ""), 10) || 0;
            const rofMatch = String(w.sko || "1").match(/\d+/g);
            const rofNum = rofMatch ? Math.max(...rofMatch.map(Number)) : 1;
            const rangeNum = String(w.range || "").replace(/[^\d.,]/g, "") || "-";
            const wDesc = w.desc ? String(w.desc).replace(/\s+/g, " ").trim() : "-";
            return `- **${dash(w.name)}:**\n` +
                `  - Тип: ${dash(w.type)}\n` +
                `  - Навык: +${firstCombatSkill.replace(/^[+]/, "")}\n` +
                `  - ТО: ${dash(w.to)}\n` +
                `  - Скрыт: ${concealObr}\n` +
                `  - Урон: ${dash(w.damage)}\n` +
                `  - Боезапас: ${magNum} / ${magNum}\n` +
                `  - СКО: ${rofNum}\n` +
                `  - НАД: ${dash(w.nad)}\n` +
                `  - Дистанция: ${rangeNum}\n` +
                `  - Примечания: -\n` +
                `  - Зарядники: -\n` +
                `  - Описание: ${wDesc}`;
        }).join("\n")
        : "- Нет";

    // 6. Снаряжение + список брони текстом + репутация
    const gearArr = Array.isArray(ch.charGearList) && ch.charGearList.length > 0
        ? ch.charGearList.map(g => g.desc ? `${g.name} (${g.desc})` : g.name)
        : (ch.charGear && ch.charGear !== "—" ? String(ch.charGear).split(/,\s*|\n+/).map(s => s.trim()).filter(Boolean) : []);
    if (armorArr.length > 0) gearArr.unshift(`Броня: ${armorArr.join("; ")}`);
    if (ch.reputation && ch.reputation !== "—") gearArr.push(`Репутация: ${ch.reputation}`);
    const gearText = gearArr.length > 0 ? gearArr.map(g => `- ${g}`).join("\n") : "-";

    const mdText = `# ${dash(ch.name)}

## ХАРАКТЕРИСТИКИ
| Характеристика | Значение |
|---|---:|
${statsRows}

**Производные показатели:**
- МТЕЛ: ${derived.btm}
- УРбонус: ${derived.dmgBonus}
- БЕГ: ${maVal * 3} м

## НАВЫКИ
**Способность роли:**
- Роль: ${dash(ch.category)}
- Боевые навыки: ${combatList.length ? combatList.join(", ") : "+0"}
- Прочее: ${otherList.length ? otherList.join(", ") : "-"}

## КИБЕРНЕТИКА
${cyberText}

## ЗАЩИТА И СНАРЯЖЕНИЕ
**БРОНЯ (SP):**
| Часть тела | Текущий SP / Максимальный SP |
|---|---:|
${armorRows}

**ОРУЖИЕ:**
${weaponsText}

**ПРОЧЕЕ СНАРЯЖЕНИЕ:**
${gearText}

## ЗДОРОВЬЕ
Текущие ранения: 0 / 40 (ЗДОРОВ — Без штрафов, ОГЛ -0)

## SDP КИБЕРНЕТИЧЕСКИХ КОНЕЧНОСТЕЙ
| Конечность | SDP (текущий / максимум) |
|---|---:|
| Правая рука | ? / ? |
| Левая рука | ? / ? |
| Правая нога | ? / ? |
| Левая нога | ? / ? |
`;

    navigator.clipboard?.writeText(mdText).then(() => {
        if (btnEl) {
            const orig = btnEl.textContent;
            btnEl.textContent = "✓ Скопировано";
            setTimeout(() => { btnEl.textContent = orig; }, 1500);
        }
    });
};

// =========================================================================
// ИМПОРТ ПЕРСОНАЖА ИЗ MARKDOWN (ОБРАТНАЯ СОВМЕСТИМОСТЬ С OWLBEAR RODEO)
// =========================================================================

window.openCharMdImportModal = function () {
    const area = document.getElementById("charMdImportTextarea");
    if (area) area.value = "";
    document.getElementById("charMdImportModal")?.classList.remove("hidden");
    setTimeout(() => area?.focus(), 40);
};

window.closeCharMdImportModal = function () {
    document.getElementById("charMdImportModal")?.classList.add("hidden");
};

function parseObrMarkdownToCharItem(mdText) {
    const lines = String(mdText || "").replace(/\r\n/g, "\n").split("\n");
    const out = {
        name: "",
        origName: "",
        category: "",
        reputation: "",
        book: "CP20",
        stat_int: "", stat_cool: "", stat_ma: "",
        stat_ref: "", stat_attr: "", stat_body: "",
        stat_tech: "", stat_luck: "", stat_emp: "",
        charSkills: "",
        charWeaponsList: [],
        charCyberwareList: [],
        charArmorList: [],
        charGearList: [],
        desc: ""
    };

    const statKeyMap = {
        "ИНТ": "stat_int", "КРУТ": "stat_cool", "ПЕР": "stat_ma",
        "РЕФ": "stat_ref", "ПРВЛ": "stat_attr",
        "ТЕЛ": "stat_body", "ТЕЛО": "stat_body",
        "ТЕХ": "stat_tech",
        "УДАЧ": "stat_luck", "УДАЧА": "stat_luck",
        "ЭМП": "stat_emp"
    };

    for (const raw of lines) {
        const h = raw.trim().match(/^#{1,2}\s+(.+)$/);
        if (h) {
            const t = h[1].trim();
            if (!/^(ХАРАКТЕРИСТИКИ|НАВЫКИ|КИБЕРНЕТИКА|ЗАЩИТА|ЗДОРОВЬЕ|SDP)/i.test(t)) {
                out.name = t;
            }
            break;
        }
    }

    let section = "";
    let subSection = "";
    const skillsParts = [];
    const armorZonesFound = [];
    let currentWeapon = null;

    for (let i = 0; i < lines.length; i++) {
        const rawLine = lines[i];
        const line = rawLine.trim();
        if (!line) continue;

        const hMatch = line.match(/^#{1,3}\s+(.+)$/);
        if (hMatch) {
            const title = hMatch[1].toUpperCase();
            subSection = "";
            currentWeapon = null;
            if (title.includes("ХАРАКТЕРИСТИК")) section = "STATS";
            else if (title.includes("НАВЫК")) section = "SKILLS";
            else if (title.includes("КИБЕРНЕТИК") && !title.includes("SDP")) section = "CYBER";
            else if (title.includes("ЗАЩИТ") || title.includes("СНАРЯЖЕНИ")) section = "DEFENSE";
            else if (title.includes("ЗДОРОВЬ")) section = "HEALTH";
            else if (title.includes("SDP")) section = "SDP";
            continue;
        }

        if (/^\*\*БРОНЯ/i.test(line)) { subSection = "ARMOR"; currentWeapon = null; continue; }
        if (/^\*\*ОРУЖИЕ/i.test(line)) { subSection = "WEAPONS"; currentWeapon = null; continue; }
        if (/^\*\*ПРОЧЕЕ СНАРЯЖЕНИЕ/i.test(line)) { subSection = "GEAR"; currentWeapon = null; continue; }
        if (/^\*\*(Производные показатели|Способность роли)/i.test(line)) { subSection = ""; continue; }

        if (/^\|[\s:-]+\|/.test(line)) continue;
        const tableMatch = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|\n]+?)\s*\|?\s*$/);

        if (section === "STATS" && tableMatch) {
            const k = tableMatch[1].trim().toUpperCase();
            const valMatch = tableMatch[2].trim().match(/\d+/);
            if (statKeyMap[k] && valMatch) {
                out[statKeyMap[k]] = valMatch[0];
            }
        } else if (section === "SKILLS") {
            const mRole = line.match(/Роль\s*:\s*(.+)$/i);
            const mCombat = line.match(/Боевые навыки\s*:\s*(.+)$/i);
            const mOther = line.match(/Прочее\s*:\s*(.+)$/i);
            if (mRole) {
                const rawRole = mRole[1].trim();
                if (rawRole && rawRole !== "?") {
                    const parenMatch = rawRole.match(/^([^(]+)\(([^)]+)\)/);
                    if (parenMatch) {
                        out.category = parenMatch[1].trim();
                        skillsParts.unshift(parenMatch[2].trim());
                    } else {
                        out.category = rawRole;
                    }
                }
            } else if (mCombat) {
                const val = mCombat[1].trim();
                if (val && !/^(\+\?|\?|-|\+0)$/.test(val)) skillsParts.push(val);
            } else if (mOther) {
                const val = mOther[1].trim();
                if (val && !/^(\+\?|\?|-)$/.test(val)) skillsParts.push(val);
            } else if (!/^\*\*/.test(line)) {
                const clean = line.replace(/^[-*]\s*/, "").trim();
                if (clean && clean !== "-") skillsParts.push(clean);
            }
        } else if (section === "CYBER") {
            if (/При отсутствии кибернетики/i.test(line)) continue;
            const clean = line.replace(/^[-*]\s*/, "").trim();
            if (!clean || clean === "-") continue;
            const m = clean.match(/^([^(]+)\((.+)\)$/);
            if (m) out.charCyberwareList.push({ name: m[1].trim(), desc: m[2].trim() });
            else out.charCyberwareList.push({ name: clean, desc: "" });
        } else if (section === "DEFENSE") {
            if (subSection === "ARMOR" && tableMatch) {
                const loc = tableMatch[1].trim();
                const val = tableMatch[2].trim();
                if (/Часть тела/i.test(loc)) continue;
                const pair = val.match(/(\d+)\s*\/\s*(\d+)/);
                const sp = pair ? parseInt(pair[2], 10) : (parseInt(val, 10) || 0);
                if (sp > 0) armorZonesFound.push(`${loc}: ${sp} ОС`);
            } else if (subSection === "WEAPONS") {
                const wHead = rawLine.match(/^\s*[-*]\s*\*\*(.+?)\*\*\s*(.*)$/);
                if (wHead && !/^(Тип|Навык|WA|ТО|Скрыт|Урон|ROF|СКО|НАД|Боезапас|#|Дальность|Дистанция|Особенности|Примечания|Зарядники|Описание)\s*:/i.test(wHead[1])) {
                    const wName = wHead[1].replace(/:$/, "").trim();
                    currentWeapon = { name: wName || "Оружие", type: "", skr: "", to: "", damage: "", mag: "", sko: "", range: "", nad: "", cost: "", desc: "" };
                    out.charWeaponsList.push(currentWeapon);
                } else if (currentWeapon) {
                    const clean = line.replace(/^[-*]\s*/, "");
                    const kv = clean.match(/^([^:]+):\s*(.*)$/);
                    if (kv) {
                        const k = kv[1].trim().toLowerCase();
                        const v = kv[2].trim();
                        if (!v || v === "-") continue;
                        if (k === "тип") currentWeapon.type = v;
                        else if (k === "wa" || k === "то") currentWeapon.to = v;
                        else if (k.includes("скрыт")) {
                            const low = v.toLowerCase();
                            currentWeapon.skr = low.includes("карм") ? "Кар" : low.includes("курт") ? "Кур" : low.includes("плащ") ? "Плащ" : "Нет";
                        } else if (k.includes("урон")) currentWeapon.damage = v;
                        else if (k === "rof" || k === "ско") currentWeapon.sko = v;
                        else if (k === "над") currentWeapon.nad = v;
                        else if (k.includes("боезапас") || k === "#") {
                            const pair = v.match(/(\d+)\s*\/\s*(\d+)/);
                            currentWeapon.mag = pair ? pair[2] : v;
                        } else if (k.includes("дальност") || k.includes("дистанц")) {
                            currentWeapon.range = /\d$/.test(v) ? `${v}м` : v;
                        } else if (k.includes("описан") || k.includes("примечан") || k.includes("особенност")) {
                            currentWeapon.desc = currentWeapon.desc ? `${currentWeapon.desc}\n${v}` : v;
                        }
                    }
                }
            } else if (subSection === "GEAR") {
                const clean = line.replace(/^[-*]\s*/, "").trim();
                if (!clean || clean === "-") continue;
                const repMatch = clean.match(/^Репутация\s*:\s*(\d+)/i);
                if (repMatch) {
                    out.reputation = repMatch[1];
                } else {
                    out.charGearList.push({ name: clean, desc: "" });
                }
            }
        }
    }

    out.charSkills = skillsParts.join(", ");
    if (armorZonesFound.length > 0) {
        out.charArmorList.push({ name: "Броня (импорт OBR)", desc: armorZonesFound.join(" • ") });
    }

    return out;
}

window.applyCharMdImport = function () {
    const rawText = document.getElementById("charMdImportTextarea")?.value || "";
    if (!rawText.trim()) return;

    const parsed = parseObrMarkdownToCharItem(rawText);
    const preservedImages = [...builderGalleryImages];
    const wasEditId = editingItemId;

    parsed.images = preservedImages;
    parsed.isUser = document.getElementById("builderShowAddedCheck")?.checked ?? true;
    parsed.isNamed = document.getElementById("builderNamedCharCheck")?.checked ?? false;

    closeCharMdImportModal();
    setBuilderType("characters", parsed);
    editingItemId = wasEditId;
};

// =========================================================================
// СБОРКА ТРАНСПОРТА (MAXIMUM METAL — БАЗОВОЕ ШАССИ И ОПЦИИ)
// =========================================================================

const MM_VEHICLE_TYPES = [
    { id: "moto",       name: "Мотоцикл",            sdpMin: 15,  sdpMax: 30,   sdpPerSeat: 10,  sdpCost: 100,   seatsMin: 1,  seatsMax: 1,   speed: 200,  range: 650,  massKgPerSdp: 4,     acc: 30, dec: 50, isAir: false },
    { id: "car",        name: "Автомобиль",          sdpMin: 25,  sdpMax: 80,   sdpPerSeat: 8,   sdpCost: 250,   seatsMin: 3,  seatsMax: 10,  speed: 150,  range: 500,  sdpPerTon: 25,       acc: 25, dec: 65, isAir: false },
    { id: "pickup",     name: "Пикап",               sdpMin: 30,  sdpMax: 90,   sdpPerSeat: 4,   sdpCost: 400,   seatsMin: 8,  seatsMax: 20,  speed: 150,  range: 500,  sdpPerTon: 25,       acc: 25, dec: 65, isAir: false },
    { id: "truck",      name: "Грузовик",            sdpMin: 50,  sdpMax: 125,  sdpPerSeat: 12.5,sdpCost: 750,   seatsMin: 4,  seatsMax: 10,  speed: 150,  range: 1300, sdpPerTon: 15,       acc: 15, dec: 50, isAir: false, isTruck: true },
    { id: "apc",        name: "БТР",                 sdpMin: 75,  sdpMax: 150,  sdpPerSeat: 12,  sdpCost: 1000,  seatsMin: 10, seatsMax: 15,  speed: 150,  range: 500,  sdpPerTon: 10,       acc: 15, dec: 80, isAir: false, canTrack: true, autoOffroad: true, noCargo: true },
    { id: "ifv",        name: "БМП",                 sdpMin: 75,  sdpMax: 200,  sdpPerSeat: 10,  sdpCost: 1200,  seatsMin: 10, seatsMax: 20,  speed: 150,  range: 500,  sdpPerTon: 10,       acc: 20, dec: 80, isAir: false, canTrack: true, autoOffroad: true },
    { id: "mbt",        name: "ОБТ (Танк)",          sdpMin: 200, sdpMax: 600,  sdpPerSeat: 4,   sdpCost: 3000,  seatsMin: 50, seatsMax: 160, speed: 70,   range: 320,  sdpPerTon: 6,        acc: 15, dec: 80, isAir: false, autoTracked: true, autoOffroad: true },
    { id: "hover",      name: "Ховер",               sdpMin: 25,  sdpMax: 100,  sdpPerSeat: 0,   sdpCost: 2000,  seatsMin: 4,  seatsMax: 20,  speed: 250,  range: 650,  sdpPerTon: 10,       acc: 25, dec: 15, isAir: false },
    { id: "heli_l",     name: "Лёгкий вертолёт",     sdpMin: 15,  sdpMax: 40,   sdpPerSeat: 0,   sdpCost: 1500,  seatsMin: 1,  seatsMax: 4,   speed: 250,  range: 300,  sdpPerTon: 10,       acc: 25, dec: 25, isAir: true, armorPenalty20: true },
    { id: "heli_m",     name: "Средний вертолёт",    sdpMin: 25,  sdpMax: 80,   sdpPerSeat: 5,   sdpCost: 2500,  seatsMin: 4,  seatsMax: 15,  speed: 250,  range: 650,  sdpPerTon: 10,       acc: 25, dec: 25, isAir: true, armorPenalty20: true },
    { id: "heli_h",     name: "Тяжёлый вертолёт",    sdpMin: 100, sdpMax: 250,  sdpPerSeat: 5,   sdpCost: 3000,  seatsMin: 20, seatsMax: 50,  speed: 250,  range: 1000, sdpPerTon: 25,       acc: 25, dec: 25, isAir: true, armorPenalty20: true },
    { id: "av",         name: "AV (Аэродайн)",       sdpMin: 30,  sdpMax: 200,  sdpPerSeat: 4,   sdpCost: 3500,  seatsMin: 5,  seatsMax: 50,  speed: 750,  range: 1300, sdpPerTon: 25,       acc: 80, dec: 80, isAir: true },
    { id: "osprey",     name: "Оспри",               sdpMin: 75,  sdpMax: 240,  sdpPerSeat: 4,   sdpCost: 3000,  seatsMin: 8,  seatsMax: 60,  speed: 600,  range: 2000, sdpPerTon: 8,        acc: 15, dec: 30, isAir: true, armorMaxRatio: 0.25, armorPenalty20: true },
    { id: "plane_l",    name: "Лёгкий самолёт",      sdpMin: 25,  sdpMax: 100,  sdpPerSeat: 10,  sdpCost: 2000,  seatsMin: 5,  seatsMax: 10,  speed: 400,  range: 800,  sdpPerTon: 20,       acc: 25, dec: 30, isAir: true, armorMaxRatio: 0.25 },
    { id: "plane_m",    name: "Средний самолёт",     sdpMin: 75,  sdpMax: 250,  sdpPerSeat: 5,   sdpCost: 2500,  seatsMin: 15, seatsMax: 50,  speed: 650,  range: 1600, sdpPerTon: 8,        acc: 15, dec: 40, isAir: true, armorMaxRatio: 0.25 },
    { id: "plane_h",    name: "Тяжёлый самолёт",     sdpMin: 150, sdpMax: 300,  sdpPerSeat: 5,   sdpCost: 4000,  seatsMin: 75, seatsMax: 150, speed: 650,  range: 2000, sdpPerTon: 4,        acc: 15, dec: 40, isAir: true, armorMaxRatio: 0.25 },
    { id: "jet_s",      name: "Малый Джет",          sdpMin: 100, sdpMax: 250,  sdpPerSeat: 10,  sdpCost: 10000, seatsMin: 10, seatsMax: 25,  speed: 1300, range: 2500, sdpPerTon: 12.5,     acc: 30, dec: 40, isAir: true, armorMaxRatio: 0.25 },
    { id: "jet_l",      name: "Большой Джет",        sdpMin: 100, sdpMax: 400,  sdpPerSeat: 2,   sdpCost: 20000, seatsMin: 50, seatsMax: 200, speed: 1000, range: 5000, sdpPerTon: 2.5,      acc: 30, dec: 40, isAir: true, armorMaxRatio: 0.25 },
    { id: "dirigible",  name: "Дирижабль",           sdpMin: 100, sdpMax: 3000, sdpPerSeat: 10,  sdpCost: 300,   seatsMin: 10, seatsMax: 300, speed: 120,  range: 2400, sdpPerTon: 20,       acc: 10, dec: 50, isAir: true, isDirigible: true }
];

let vbState = {
    name: "",
    typeId: "car",
    sdp: 40,
    seats: 5,
    extraSdp: 0,
    tracked: false,
    armor: 0,
    speedSteps: 0,   // шаги по 10% (-5 .. +10)
    accSteps: 0,     // шаги по 10% (0 .. 10)
    decSteps: 0,     // шаги по 25% (0 .. 4 наземный, 0 .. 2 воздушный)
    maneuver: 0,     // 0 .. 3
    offroad: false,
    cargoSteps: 0,   // шаги (0..5 обычный/дирижабль, 0..2 грузовик)
    rangeSteps: 0,   // шаги по 33% (-2 .. +3)
    weapons: [],     // [{ id, qty }]
    tuning: []       // [{ id, qty }]
};

function getVbType() {
    return MM_VEHICLE_TYPES.find(t => t.id === vbState.typeId) || MM_VEHICLE_TYPES[1];
}

function vbClamp(val, min, max) {
    const n = Number(val);
    if (isNaN(n)) return min;
    return Math.max(min, Math.min(max, n));
}
function parseVbSpaces(raw) {
    if (raw === undefined || raw === null) return 0;
    const s = String(raw).replace(",", ".").trim();
    if (!s || s === "—") return 0;
    const m = s.match(/\d+(\.\d+)?/);
    return m ? parseFloat(m[0]) : 0;
}

window.addVbEquipment = function (kind) {
    const selId = kind === "weapons" ? "vbAddWeaponSelect" : "vbAddTuningSelect";
    const itemId = document.getElementById(selId)?.value;
    if (!itemId) return;
    const list = kind === "weapons" ? vbState.weapons : vbState.tuning;
    const existing = list.find(x => x.id === itemId);
    if (existing) existing.qty++;
    else list.push({ id: itemId, qty: 1 });
    renderVehicleBuilderView();
};

window.changeVbEquipmentQty = function (kind, itemId, delta) {
    const list = kind === "weapons" ? vbState.weapons : vbState.tuning;
    const idx = list.findIndex(x => x.id === itemId);
    if (idx === -1) return;
    list[idx].qty += delta;
    if (list[idx].qty <= 0) list.splice(idx, 1);
    renderVehicleBuilderView();
};

// Жёсткое выравнивание всех параметров в рамках правил Maximum Metal
function enforceVbConstraints() {
    const t = getVbType();

    // 1. ОСТ в рамках типа
    vbState.sdp = Math.round(vbClamp(vbState.sdp, t.sdpMin, t.sdpMax));

    // 2. Места с учётом ограничений ОСТ
    let maxSeatsAllowed = t.seatsMax;
    if (t.sdpPerSeat > 0) {
        maxSeatsAllowed = Math.min(t.seatsMax, Math.floor(vbState.sdp / t.sdpPerSeat));
    }
    if (maxSeatsAllowed < t.seatsMin) {
        // Если текущий ОСТ не вмещает даже минимум мест — подтягиваем ОСТ вверх
        const neededSdp = Math.min(t.sdpMax, Math.ceil(t.seatsMin * t.sdpPerSeat));
        if (neededSdp > vbState.sdp) vbState.sdp = neededSdp;
        maxSeatsAllowed = Math.max(t.seatsMin, Math.min(t.seatsMax, Math.floor(vbState.sdp / t.sdpPerSeat)));
    }
    vbState.seats = Math.round(vbClamp(vbState.seats, t.seatsMin, maxSeatsAllowed));

    // 3. Добавленная структура (до +25% от макс. ОСТ типа)
    const maxExtraSdp = Math.floor(t.sdpMax * 0.25);
    vbState.extraSdp = Math.round(vbClamp(vbState.extraSdp, 0, maxExtraSdp));

    // 4. Гусеницы и внедорожность
    if (t.autoTracked) vbState.tracked = true;
    else if (!t.canTrack) vbState.tracked = false;
    if (t.autoOffroad) vbState.offroad = true;
    if (t.isAir) vbState.offroad = false;

    // 5. Броня (макс 1/2 ОСТ, для Оспри и самолётов 1/4 ОСТ)
    const totalSdp = vbState.sdp + vbState.extraSdp;
    const maxArmor = Math.floor(totalSdp * (t.armorMaxRatio || 0.5));
    vbState.armor = Math.round(vbClamp(vbState.armor, 0, maxArmor));

    // 6. Опции с жёсткими лимитами
    vbState.speedSteps = Math.round(vbClamp(vbState.speedSteps, -5, 10));
    vbState.accSteps = Math.round(vbClamp(vbState.accSteps, 0, 10));
    vbState.decSteps = Math.round(vbClamp(vbState.decSteps, 0, t.isAir ? 2 : 4));
    vbState.maneuver = Math.round(vbClamp(vbState.maneuver, 0, 3));
    vbState.rangeSteps = Math.round(vbClamp(vbState.rangeSteps, -2, 3));

    const maxCargoSteps = t.noCargo ? 0 : t.isTruck ? 2 : 5;
    vbState.cargoSteps = Math.round(vbClamp(vbState.cargoSteps, 0, maxCargoSteps));
}

function calcVbStats() {
    enforceVbConstraints();
    const t = getVbType();
    const totalSdp = vbState.sdp + vbState.extraSdp;
    const maxExtraSdp = Math.floor(t.sdpMax * 0.25);
    const maxArmor = Math.floor(totalSdp * (t.armorMaxRatio || 0.5));

    // Базовая цена ОСТ (для БТР/БМП на гусеницах x2)
    const unitSdpCost = t.sdpCost * (t.canTrack && vbState.tracked ? 2 : 1);
    const baseSdpCost = vbState.sdp * unitSdpCost;
    const extraSdpCost = vbState.extraSdp * unitSdpCost * 2;

    // Цена брони по ступеням
    let armorRate = 0;
    if (vbState.armor >= 1 && vbState.armor <= 20) armorRate = 500;
    else if (vbState.armor <= 40) armorRate = 1000;
    else if (vbState.armor <= 60) armorRate = 5000;
    else if (vbState.armor > 60) armorRate = 7000;
    const armorCost = vbState.armor * armorRate;

    // Процентные модификаторы от базовой цены ОСТ
    let pctCostMod = 0;
    if (vbState.speedSteps > 0) pctCostMod += vbState.speedSteps * 25;
    else if (vbState.speedSteps < 0) pctCostMod += vbState.speedSteps * 10;
    pctCostMod += vbState.accSteps * 5;
    pctCostMod += vbState.decSteps * 5;
    pctCostMod += vbState.maneuver * 50;
    if (vbState.offroad && !t.autoOffroad) pctCostMod += 15;

    const optionsCost = Math.round(baseSdpCost * (pctCostMod / 100));

    // Вооружение и тюнинг из базы данных
    const resolvedWeapons = (vbState.weapons || []).map(entry => {
        const item = (DB.vehicle_weapons || []).find(w => w && w.id === entry.id);
        if (!item) return null;
        const unitCost = parseItemUnitPriceEb(item.cost);
        const unitSpaces = parseVbSpaces(item.spaces);
        return { item, qty: entry.qty, cost: unitCost * entry.qty, spaces: unitSpaces * entry.qty };
    }).filter(Boolean);

    const resolvedTuning = (vbState.tuning || []).map(entry => {
        const item = (DB.vehicle_tuning || []).find(tw => tw && tw.id === entry.id);
        if (!item) return null;
        const unitCost = parseItemUnitPriceEb(item.cost);
        const unitSpaces = parseVbSpaces(item.spaces);
        return { item, qty: entry.qty, cost: unitCost * entry.qty, spaces: unitSpaces * entry.qty };
    }).filter(Boolean);

    const weaponsCost = resolvedWeapons.reduce((s, x) => s + x.cost, 0);
    const tuningCost = resolvedTuning.reduce((s, x) => s + x.cost, 0);
    const weaponsSpaces = resolvedWeapons.reduce((s, x) => s + x.spaces, 0);
    const tuningSpaces = resolvedTuning.reduce((s, x) => s + x.spaces, 0);
    const usedEquipSpaces = Math.round((weaponsSpaces + tuningSpaces) * 100) / 100;

    const totalCost = Math.max(0, baseSdpCost + extraSdpCost + armorCost + optionsCost + weaponsCost + tuningCost);

    // Скорость
    let baseSpeed = t.speed;
    if (t.canTrack && vbState.tracked) baseSpeed = Math.floor(baseSpeed / 2);

    const armorSpeedSteps = vbState.armor > 0 ? Math.ceil((vbState.armor / totalSdp) * 10) : 0;
    const armorSpeedPenaltyPct = armorSpeedSteps * (t.armorPenalty20 ? 20 : 10);
    const cargoSpeedPenaltyPct = t.isTruck ? vbState.cargoSteps * 20 : vbState.cargoSteps * 10;
    const totalSpeedPct = 100 + (vbState.speedSteps * 10) - armorSpeedPenaltyPct - cargoSpeedPenaltyPct;
    const finalSpeed = Math.max(10, Math.round(baseSpeed * (totalSpeedPct / 100)));

    // Ускорение и торможение (колёсные БТР/БМП = грузовик: 15 / 50)
    const baseAcc = (t.canTrack && !vbState.tracked) ? 15 : t.acc;
    const baseDec = (t.canTrack && !vbState.tracked) ? 50 : t.dec;
    const accAdd = vbState.accSteps > 0 ? Math.max(10, Math.round(baseAcc * (vbState.accSteps * 0.1))) : 0;
    const decAdd = vbState.decSteps > 0 ? Math.max(10, Math.round(baseDec * (vbState.decSteps * 0.25))) : 0;
    const finalAcc = baseAcc + accAdd;
    const finalDec = baseDec + decAdd;

    // Места (минимум 1 место для водителя)
    let seatsPctMod = 0;
    if (vbState.speedSteps > 0) seatsPctMod -= vbState.speedSteps * 5;
    else if (vbState.speedSteps < 0) seatsPctMod += Math.abs(vbState.speedSteps) * 10;
    seatsPctMod -= vbState.rangeSteps * 10;
    const finalSeats = Math.max(1, Math.floor(vbState.seats * (1 + seatsPctMod / 100)));
    const remainingSeats = Math.round((finalSeats - usedEquipSpaces) * 100) / 100;

    // Радиус
    const finalRange = Math.max(50, Math.round(t.range * (1 + vbState.rangeSteps * 0.33)));

    // Масса (без брони = половина массы)
    let massKg = t.massKgPerSdp
        ? totalSdp * t.massKgPerSdp
        : (totalSdp / t.sdpPerTon) * 1000;
    if (vbState.armor === 0) massKg = massKg / 2;

    // Грузоподъёмность
    let cargoKg = 0;
    if (t.noCargo) {
        cargoKg = 0;
    } else if (t.isTruck) {
        cargoKg = Math.round(36000 * (1 + vbState.cargoSteps * 0.1));
    } else if (t.isDirigible) {
        cargoKg = Math.round(massKg * (1 + vbState.cargoSteps * 0.33));
    } else {
        cargoKg = Math.round(massKg * (0.33 + vbState.cargoSteps * 0.1));
    }

    const armorValue = Math.floor(vbState.armor / 20);
    const bodyValue = Math.floor(totalSdp / 20);

    return {
        t, totalSdp, maxExtraSdp, maxArmor,
        baseSdpCost, extraSdpCost, armorCost, optionsCost, totalCost,
        finalSpeed, finalAcc, finalDec, finalSeats, finalRange,
        massKg, cargoKg, armorValue, bodyValue,
        armorSpeedPenaltyPct, cargoSpeedPenaltyPct,
        resolvedWeapons, resolvedTuning, weaponsCost, tuningCost, usedEquipSpaces, remainingSeats
    };
}

window.changeVbType = function (newTypeId) {
    vbState.typeId = newTypeId;
    const t = getVbType();
    vbState.sdp = t.sdpMin;
    vbState.seats = t.seatsMin;
    vbState.extraSdp = 0;
    vbState.tracked = Boolean(t.autoTracked);
    vbState.offroad = Boolean(t.autoOffroad);
    vbState.armor = 0;
    vbState.speedSteps = 0;
    vbState.accSteps = 0;
    vbState.decSteps = 0;
    vbState.maneuver = 0;
    vbState.cargoSteps = 0;
    vbState.rangeSteps = 0;
    vbState.weapons = [];
    vbState.tuning = [];
    renderVehicleBuilderView();
};

window.updateVbField = function (field, val) {
    vbState[field] = val;
    renderVehicleBuilderView();
};

window.resetVehicleBuilder = function () {
    vbState.name = "";
    window.changeVbType(vbState.typeId);
};

window.addBuiltVehicleToCart = function () {
    const c = calcVbStats();
    const title = (vbState.name || "").trim() || `${c.t.name} (Сборка)`;
    const id = "custom-veh-" + Date.now();
    const massStr = c.massKg >= 1000 ? `${(c.massKg / 1000).toFixed(2)} т` : `${Math.round(c.massKg)} кг`;
    const customItem = {
        id,
        name: title,
        category: c.t.name,
        cost: `${c.totalCost.toLocaleString("ru-RU")} eb`,
        customSummary: `ОСТ: ${c.totalSdp} (Тело ${c.bodyValue}) | ОС: ${vbState.armor} (Броня ${c.armorValue}) | Скор: ${c.finalSpeed} км/ч | Мест: ${c.finalSeats} | Масса: ${massStr} | Груз: ${c.cargoKg.toLocaleString("ru-RU")} кг`
    };
    SHOPPING_CART.push({ sectionKey: "vehicles", itemId: id, qty: 1, customItem });
    saveShoppingCartToStorage();
    renderCartDropdownList();
    const btn = document.querySelector('button[onclick="addBuiltVehicleToCart()"]');
    if (btn) {
        btn.textContent = "✓ В корзине";
        setTimeout(() => { btn.textContent = "🛒 В корзину"; }, 1200);
    }
};

function renderVehicleBuilderView() {
    const grid = document.getElementById("vehicleBuilderGrid");
    if (!grid) return;

    const c = calcVbStats();
    const t = c.t;
    const massStr = c.massKg >= 1000 ? `${(c.massKg / 1000).toFixed(2)} т` : `${Math.round(c.massKg)} кг`;
    const maxSeatsBySdp = t.sdpPerSeat > 0 ? Math.min(t.seatsMax, Math.floor(vbState.sdp / t.sdpPerSeat)) : t.seatsMax;

    const stepControl = (label, sub, valText, field, curVal, minVal, maxVal) => `
      <div class="bg-cp-bg border border-gray-800 p-2.5 flex items-center justify-between gap-2">
        <div class="min-w-0">
          <div class="text-xs font-bold text-white">${label}</div>
          <div class="text-[10px] text-gray-400">${sub}</div>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button type="button" onclick="updateVbField('${field}', ${curVal - 1})" ${curVal <= minVal ? "disabled" : ""}
            class="w-7 h-7 bg-cp-panel border border-gray-700 hover:border-cp-yellow text-white font-bold disabled:opacity-30">−</button>
          <span class="w-16 text-center text-xs font-display font-bold text-cp-yellow">${valText}</span>
          <button type="button" onclick="updateVbField('${field}', ${curVal + 1})" ${curVal >= maxVal ? "disabled" : ""}
            class="w-7 h-7 bg-cp-panel border border-gray-700 hover:border-cp-cyan text-white font-bold disabled:opacity-30">+</button>
        </div>
      </div>
    `;

    grid.innerHTML = `
      <!-- ЛЕВАЯ КОЛОНКА: ПАРАМЕТРЫ И ОПЦИИ -->
      <div class="col-span-12 xl:col-span-7 space-y-4">
        <div class="bg-cp-panel cp-border p-4 space-y-3.5">
          <div class="text-[11px] font-bold uppercase text-cp-cyan">1. Тип транспорта и базовое шасси:</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Название модели (необязательно)</label>
              <input type="text" value="${escapeHtmlAttr(vbState.name)}" oninput="vbState.name = this.value"
                placeholder="Напр. Nomad Interceptor Mk.2"
                class="w-full bg-cp-bg border border-gray-700 focus:border-cp-yellow px-3 py-2 text-xs text-white outline-none">
            </div>
            <div>
              <label class="block text-[11px] text-cp-yellow font-bold mb-1">Тип транспорта</label>
              <select onchange="changeVbType(this.value)"
                class="w-full bg-cp-bg border border-gray-700 focus:border-cp-cyan px-3 py-2 text-xs text-white font-bold outline-none">
                ${MM_VEHICLE_TYPES.map(vt => `<option value="${vt.id}" ${vt.id === t.id ? "selected" : ""}>${vt.name} (ОСТ ${vt.sdpMin}–${vt.sdpMax}, ${vt.sdpCost.toLocaleString("ru-RU")} eb/ОСТ)</option>`).join("")}
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div class="bg-cp-bg border border-gray-800 p-2.5">
              <label class="block text-[10px] text-cp-cyan font-bold uppercase mb-1">Базовые ОСТ (${t.sdpMin}–${t.sdpMax})</label>
              <input type="number" min="${t.sdpMin}" max="${t.sdpMax}" value="${vbState.sdp}"
                onchange="updateVbField('sdp', Number(this.value))"
                class="w-full bg-cp-panel border border-gray-700 focus:border-cp-yellow px-2.5 py-1.5 text-xs text-white font-bold outline-none">
              <div class="text-[10px] text-gray-500 mt-1">Цена: ${c.baseSdpCost.toLocaleString("ru-RU")} eb</div>
            </div>

            <div class="bg-cp-bg border border-gray-800 p-2.5">
              <label class="block text-[10px] text-cp-yellow font-bold uppercase mb-1">Базовые места (${t.seatsMin}–${maxSeatsBySdp})</label>
              <input type="number" min="${t.seatsMin}" max="${maxSeatsBySdp}" value="${vbState.seats}"
                onchange="updateVbField('seats', Number(this.value))"
                class="w-full bg-cp-panel border border-gray-700 focus:border-cp-yellow px-2.5 py-1.5 text-xs text-white font-bold outline-none">
              <div class="text-[10px] text-gray-500 mt-1">${t.sdpPerSeat > 0 ? `Лимит: ${t.sdpPerSeat} ОСТ/место` : "Без привязки к ОСТ"}</div>
            </div>

            <div class="bg-cp-bg border border-gray-800 p-2.5">
              <label class="block text-[10px] text-cp-red font-bold uppercase mb-1">Доп. структура (0–${c.maxExtraSdp})</label>
              <input type="number" min="0" max="${c.maxExtraSdp}" value="${vbState.extraSdp}"
                onchange="updateVbField('extraSdp', Number(this.value))"
                class="w-full bg-cp-panel border border-gray-700 focus:border-cp-red px-2.5 py-1.5 text-xs text-white font-bold outline-none">
              <div class="text-[10px] text-gray-500 mt-1">×2 цена ОСТ (+${c.extraSdpCost.toLocaleString("ru-RU")} eb)</div>
            </div>
          </div>

          <!-- Броня + Гусеницы / Внедорожный -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div class="bg-cp-bg border border-gray-800 p-2.5">
              <div class="flex items-center justify-between mb-1">
                <label class="text-[10px] text-cp-cyan font-bold uppercase">🛡️ Броня ОС (0–${c.maxArmor})</label>
                <span class="text-[10px] text-cp-green font-bold">+${c.armorCost.toLocaleString("ru-RU")} eb</span>
              </div>
              <input type="number" min="0" max="${c.maxArmor}" value="${vbState.armor}"
                onchange="updateVbField('armor', Number(this.value))"
                class="w-full bg-cp-panel border border-gray-700 focus:border-cp-cyan px-2.5 py-1.5 text-xs text-white font-bold outline-none">
              <div class="text-[10px] text-gray-500 mt-1">
                ${vbState.armor === 0 ? "Без брони: масса снижена вдвое!" : `Штраф скорости от брони: −${c.armorSpeedPenaltyPct}%`}
                ${t.isDirigible ? " • Бронируется только гондола" : ""}
              </div>
            </div>

            <div class="bg-cp-bg border border-gray-800 p-2.5 flex flex-col justify-center gap-2 text-xs">
              ${t.canTrack ? `
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" ${vbState.tracked ? "checked" : ""} onchange="updateVbField('tracked', this.checked)" class="accent-yellow-400">
                  <span>Гусеничный ход <span class="text-[10px] text-gray-400">(цена ОСТ ×2, макс. скор ÷2)</span></span>
                </label>
              ` : t.autoTracked ? `<div class="text-[11px] text-cp-yellow font-bold">✓ Автоматически гусеничный</div>` : ""}

              ${!t.isAir ? `
                <label class="flex items-center gap-2 ${t.autoOffroad ? "opacity-75" : "cursor-pointer"}">
                  <input type="checkbox" ${vbState.offroad ? "checked" : ""} ${t.autoOffroad ? "disabled" : ""} onchange="updateVbField('offroad', this.checked)" class="accent-cyan-400">
                  <span>Внедорожный ${t.autoOffroad ? "<span class='text-cp-green text-[10px]'>(включено по типу)</span>" : "<span class='text-[10px] text-gray-400'>(+15% цены ОСТ, 1/3 скор. по грунту)</span>"}</span>
                </label>
              ` : `<div class="text-[11px] text-gray-500">Воздушный транспорт (тормоза макс. +50%)</div>`}
            </div>
          </div>
        </div>

        <!-- ОПЦИИ МОДИФИКАЦИИ -->
        <div class="bg-cp-panel cp-border p-4 space-y-2.5">
          <div class="text-[11px] font-bold uppercase text-cp-yellow">2. Опции характеристик:</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${stepControl("Скорость", "+10%: +25% цены, −5% мест | −10%: −10% цены, +10% мест", `${vbState.speedSteps >= 0 ? "+" : ""}${vbState.speedSteps * 10}%`, "speedSteps", vbState.speedSteps, -5, 10)}
            ${stepControl("Ускорение", "+10% (мин. +10 км/ч) = +5% цены ОСТ (макс +100%)", `+${vbState.accSteps * 10}%`, "accSteps", vbState.accSteps, 0, 10)}
            ${stepControl("Усиленные тормоза", "+25% (мин. +10 км/ч) = +5% цены ОСТ", `+${vbState.decSteps * 25}%`, "decSteps", vbState.decSteps, 0, t.isAir ? 2 : 4)}
            ${stepControl("Улучшенное управление", "+1 манёвр = +50% цены ОСТ (макс +3)", `+${vbState.maneuver}`, "maneuver", vbState.maneuver, 0, 3)}
            ${stepControl("Радиус хода", "+33% = −10% мест | −33% = +10% мест", `${vbState.rangeSteps >= 0 ? "+" : ""}${vbState.rangeSteps * 33}%`, "rangeSteps", vbState.rangeSteps, -2, 3)}
            ${!t.noCargo
                ? stepControl(
                    t.isTruck ? "Рейтинг груза" : "Грузоподъёмность",
                    t.isTruck ? "+10% груза = −20% скор. (макс +20%)" : t.isDirigible ? "+33% груза = −10% скор." : "+10% груза = −10% скор. (макс +50%)",
                    `+${t.isDirigible ? vbState.cargoSteps * 33 : vbState.cargoSteps * 10}%`,
                    "cargoSteps", vbState.cargoSteps, 0, t.isTruck ? 2 : 5
                  )
                : `<div class="bg-cp-bg border border-gray-800 p-2.5 text-[11px] text-gray-500 flex items-center">БТР не поддерживает расширение грузоподъёмности.</div>`}
          </div>
        </div>
        <!-- 3. ВООРУЖЕНИЕ ТРАНСПОРТА -->
        <div class="bg-cp-panel cp-border p-4 space-y-2.5">
          <div class="text-[11px] font-bold uppercase text-cp-red">3. Вооружение транспорта:</div>
          ${(DB.vehicle_weapons || []).length > 0 ? `
            <div class="flex gap-2">
              <select id="vbAddWeaponSelect" class="flex-1 bg-cp-bg border border-gray-700 focus:border-cp-red px-2.5 py-1.5 text-xs text-white outline-none">
                ${(DB.vehicle_weapons || []).map(w => `<option value="${escapeHtmlAttr(w.id)}">${escapeHtmlAttr(w.name)} (${dash(w.damage)}, мест: ${dash(w.spaces)}, ${dash(w.cost)})</option>`).join("")}
              </select>
              <button type="button" onclick="addVbEquipment('weapons')" class="px-3.5 py-1.5 bg-cp-red hover:bg-red-600 text-white font-bold text-xs uppercase shrink-0">+ Добавить</button>
            </div>
          ` : `<div class="text-xs text-gray-500 italic">В разделе «Транспорт → Вооружение» пока нет карточек.</div>`}
          ${c.resolvedWeapons.length > 0 ? `
            <div class="space-y-1.5 pt-1">
              ${c.resolvedWeapons.map(x => `
                <div class="bg-cp-bg border border-cp-red/40 px-3 py-2 flex items-center justify-between gap-2 text-xs">
                  <div class="min-w-0">
                    <div class="font-bold text-white truncate">${escapeHtmlAttr(x.item.name)}</div>
                    <div class="text-[10px] text-gray-400">Урон: <b class="text-cp-red">${dash(x.item.damage)}</b> • Мест: <b class="text-cp-yellow">${x.spaces}</b> • Цена: <b class="text-cp-green">${x.cost.toLocaleString("ru-RU")} eb</b></div>
                  </div>
                  <div class="flex items-center gap-1 shrink-0">
                    <button type="button" onclick="changeVbEquipmentQty('weapons', '${escapeHtmlAttr(x.item.id)}', -1)" class="w-6 h-6 bg-cp-panel border border-gray-700 text-white font-bold">−</button>
                    <span class="w-6 text-center font-bold text-cp-yellow">${x.qty}</span>
                    <button type="button" onclick="changeVbEquipmentQty('weapons', '${escapeHtmlAttr(x.item.id)}', 1)" class="w-6 h-6 bg-cp-panel border border-gray-700 text-white font-bold">+</button>
                  </div>
                </div>
              `).join("")}
            </div>
          ` : ""}
        </div>

        <!-- 4. ТЮНИНГ И ОБОРУДОВАНИЕ -->
        <div class="bg-cp-panel cp-border p-4 space-y-2.5">
          <div class="text-[11px] font-bold uppercase text-cp-cyan">4. Тюнинг и оборудование:</div>
          ${(DB.vehicle_tuning || []).length > 0 ? `
            <div class="flex gap-2">
              <select id="vbAddTuningSelect" class="flex-1 bg-cp-bg border border-gray-700 focus:border-cp-cyan px-2.5 py-1.5 text-xs text-white outline-none">
                ${(DB.vehicle_tuning || []).map(tw => `<option value="${escapeHtmlAttr(tw.id)}">${escapeHtmlAttr(tw.name)} (мест: ${dash(tw.spaces)}, ${dash(tw.cost)})</option>`).join("")}
              </select>
              <button type="button" onclick="addVbEquipment('tuning')" class="px-3.5 py-1.5 bg-cp-cyan hover:bg-cyan-300 text-black font-bold text-xs uppercase shrink-0">+ Добавить</button>
            </div>
          ` : `<div class="text-xs text-gray-500 italic">В разделе «Транспорт → Тюнинг» пока нет карточек.</div>`}
          ${c.resolvedTuning.length > 0 ? `
            <div class="space-y-1.5 pt-1">
              ${c.resolvedTuning.map(x => `
                <div class="bg-cp-bg border border-cp-cyan/40 px-3 py-2 flex items-center justify-between gap-2 text-xs">
                  <div class="min-w-0">
                    <div class="font-bold text-white truncate">${escapeHtmlAttr(x.item.name)}</div>
                    <div class="text-[10px] text-gray-400">Мест: <b class="text-cp-yellow">${x.spaces}</b> • Цена: <b class="text-cp-green">${x.cost.toLocaleString("ru-RU")} eb</b>${x.item.effect && x.item.effect !== "—" ? ` • <span class="text-cp-cyan">${escapeHtmlAttr(x.item.effect)}</span>` : ""}</div>
                  </div>
                  <div class="flex items-center gap-1 shrink-0">
                    <button type="button" onclick="changeVbEquipmentQty('tuning', '${escapeHtmlAttr(x.item.id)}', -1)" class="w-6 h-6 bg-cp-panel border border-gray-700 text-white font-bold">−</button>
                    <span class="w-6 text-center font-bold text-cp-yellow">${x.qty}</span>
                    <button type="button" onclick="changeVbEquipmentQty('tuning', '${escapeHtmlAttr(x.item.id)}', 1)" class="w-6 h-6 bg-cp-panel border border-gray-700 text-white font-bold">+</button>
                  </div>
                </div>
              `).join("")}
            </div>
          ` : ""}
        </div>    
      </div>

      <!-- ПРАВАЯ КОЛОНКА: ИТОГОВАЯ КАРТОЧКА -->
      <div class="col-span-12 xl:col-span-5 sticky top-20 bg-cp-panel cp-border p-5 space-y-4">
        <div class="border-b border-gray-800 pb-3 flex items-start justify-between gap-2">
          <div>
            <div class="text-[10px] font-bold uppercase text-cp-cyan">${t.name} ${vbState.tracked ? "• Гусеничный" : ""} ${vbState.offroad ? "• Внедорожный" : ""}</div>
            <h3 class="font-display text-xl font-black text-white mt-0.5">${escapeHtmlAttr((vbState.name || "").trim() || t.name)}</h3>
          </div>
          <div class="text-right">
            <div class="text-[10px] text-gray-400 uppercase">Итоговая стоимость</div>
            <div class="font-display text-xl font-black text-cp-green">${c.totalCost.toLocaleString("ru-RU")} eb</div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2 text-center text-xs">
          <div class="bg-cp-bg border border-gray-800 p-2.5">
            <div class="text-[10px] text-gray-400">ОСТ (Тело)</div>
            <div class="text-sm font-display font-black text-cp-red mt-0.5">${c.totalSdp} <span class="text-[11px] text-gray-400">(${c.bodyValue})</span></div>
          </div>
          <div class="bg-cp-bg border border-gray-800 p-2.5">
            <div class="text-[10px] text-gray-400">ОС (Броня)</div>
            <div class="text-sm font-display font-black text-cp-cyan mt-0.5">${vbState.armor} <span class="text-[11px] text-gray-400">(${c.armorValue})</span></div>
          </div>
          <div class="bg-cp-bg border border-gray-800 p-2.5">
            <div class="text-[10px] text-gray-400">Манёвренность</div>
            <div class="text-sm font-display font-black text-cp-green mt-0.5">+${vbState.maneuver}</div>
          </div>

          <div class="bg-cp-bg border border-gray-800 p-2.5">
            <div class="text-[10px] text-gray-400">Макс. скорость</div>
            <div class="text-sm font-display font-black text-cp-yellow mt-0.5">${c.finalSpeed} км/ч</div>
          </div>
          <div class="bg-cp-bg border border-gray-800 p-2.5">
            <div class="text-[10px] text-gray-400">УСК / ТОРМ</div>
            <div class="text-sm font-display font-black text-white mt-0.5">${c.finalAcc} / ${c.finalDec}</div>
          </div>
          <div class="bg-cp-bg border border-gray-800 p-2.5">
            <div class="text-[10px] text-gray-400">Радиус хода</div>
            <div class="text-sm font-display font-black text-cp-cyan mt-0.5">${c.finalRange} км</div>
          </div>

          <div class="bg-cp-bg border ${c.remainingSeats < 1 ? 'border-cp-red' : 'border-gray-800'} p-2.5">
            <div class="text-[10px] text-gray-400">Свободных мест</div>
            <div class="text-sm font-display font-black ${c.remainingSeats < 1 ? 'text-cp-red' : 'text-white'} mt-0.5">${c.remainingSeats} <span class="text-[10px] text-gray-500">/ ${c.finalSeats}</span></div>
          </div>
          <div class="bg-cp-bg border border-gray-800 p-2.5">
            <div class="text-[10px] text-gray-400">Масса</div>
            <div class="text-sm font-display font-black text-gray-200 mt-0.5">${massStr}</div>
          </div>
          <div class="bg-cp-bg border border-gray-800 p-2.5">
            <div class="text-[10px] text-gray-400">Груз</div>
            <div class="text-sm font-display font-black text-cp-yellow mt-0.5">${c.cargoKg > 0 ? c.cargoKg.toLocaleString("ru-RU") + " кг" : "—"}</div>
          </div>
        </div>

        <div class="bg-cp-bg border-l-2 border-cp-yellow p-3 text-[11px] text-gray-300 space-y-1">
          <div class="font-bold text-cp-yellow uppercase text-[10px]">Смета сборки:</div>
          <div class="flex justify-between"><span>Базовые ОСТ (${vbState.sdp} ед.):</span><b>${c.baseSdpCost.toLocaleString("ru-RU")} eb</b></div>
          ${c.extraSdpCost > 0 ? `<div class="flex justify-between"><span>Доп. структура (+${vbState.extraSdp} ОСТ ×2):</span><b>+${c.extraSdpCost.toLocaleString("ru-RU")} eb</b></div>` : ""}
          ${c.armorCost > 0 ? `<div class="flex justify-between"><span>Броня (${vbState.armor} ОС ≈ ${(vbState.armor * 2.5).toFixed(1)} мм стали):</span><b>+${c.armorCost.toLocaleString("ru-RU")} eb</b></div>` : ""}
          ${c.optionsCost !== 0 ? `<div class="flex justify-between"><span>Опции шасси:</span><b class="${c.optionsCost > 0 ? 'text-cp-yellow' : 'text-cp-green'}">${c.optionsCost > 0 ? "+" : ""}${c.optionsCost.toLocaleString("ru-RU")} eb</b></div>` : ""}
          ${c.weaponsCost > 0 ? `<div class="flex justify-between"><span>Вооружение:</span><b class="text-cp-red">+${c.weaponsCost.toLocaleString("ru-RU")} eb</b></div>` : ""}
          ${c.tuningCost > 0 ? `<div class="flex justify-between"><span>Тюнинг:</span><b class="text-cp-cyan">+${c.tuningCost.toLocaleString("ru-RU")} eb</b></div>` : ""}
        </div>
          ${(c.resolvedWeapons.length > 0 || c.resolvedTuning.length > 0) ? `
          <div class="bg-cp-bg border border-gray-800 p-3 text-[11px] space-y-2">
            <div class="font-bold text-cp-cyan uppercase text-[10px]">Установленное вооружение и тюнинг (занято мест: ${c.usedEquipSpaces}):</div>
            ${c.resolvedWeapons.map(x => `<div class="text-gray-300"><b class="text-cp-red">🔫 ${escapeHtmlAttr(x.item.name)}${x.qty > 1 ? ` ×${x.qty}` : ""}:</b> урон ${dash(x.item.damage)}, ТО ${dash(x.item.to)}, СКО ${dash(x.item.sko)}, мест −${x.spaces}</div>`).join("")}
            ${c.resolvedTuning.map(x => `<div class="text-gray-300"><b class="text-cp-cyan">⚙️ ${escapeHtmlAttr(x.item.name)}${x.qty > 1 ? ` ×${x.qty}` : ""}:</b> ${x.item.effect && x.item.effect !== "—" ? escapeHtmlAttr(x.item.effect) : "установлено"}${x.spaces > 0 ? ` (мест −${x.spaces})` : ""}</div>`).join("")}
            ${c.remainingSeats < 1 ? `<div class="text-cp-red font-bold pt-1">⚠️ Недостаточно свободных мест! Минимум 1 место должно оставаться для водителя.</div>` : ""}
          </div>
        ` : ""}
      </div>
    `;
}

async function initApp() {
    if (window.CP2020_EXTERNAL_DATA) {
        mergeExternalDataIntoMemory(window.CP2020_EXTERNAL_DATA, false);
    }
    loadSavedData();
    ensureMetaArraysInCategories();
    sanitizeUsersAndEnforceRoot();
    populateFavCorpSelects();
    updateCounts();
    switchMainView("home");
}

initApp();