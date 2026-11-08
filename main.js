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
        { k: "name", l: "Название оружия", ph: "Sternmeyer M-95A4" },
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
        { k: "name", l: "Название брони", ph: "Arasaka Combat Armor" },
        { k: "category", l: "Категория брони", isCat: true, ph: "Мягкая броня" },
        { k: "os", l: "ОС (Останавливающая способность)", ph: "18", stat: "ОС (Броня)", c: "text-cp-cyan" },
        { k: "zu", l: "ЗУ (Значение утяжеления)", ph: "-1", stat: "ЗУ (Утяжеление)", c: "text-cp-yellow" },
        { k: "cost", l: "Стоимость", ph: "200 eb", stat: "Стоимость", c: "text-cp-green" },
        { k: "covers", l: "Зона защиты", ph: "Торс, Руки", stat: "Зона защиты", span: 3 },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" }
    ],
    gear: [
        { k: "name", l: "Название снаряжения", ph: "Техсканнер" },
        { k: "category", l: "Раздел снаряжения", isCat: true, ph: "Инструменты и Ремонт" },
        { k: "weight", l: "Вес / Ноша", ph: "0.5 кг", stat: "Вес / Ноша" },
        { k: "effect", l: "Игровой эффект / Бонус", ph: "+2 к ТЕХ", stat: "Игровой эффект", c: "text-cp-cyan" },
        { k: "cost", l: "Стоимость", ph: "300 eb", stat: "Стоимость", c: "text-cp-green" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" }
    ],
    services: [
        { k: "name", l: "Название услуги / расхода", ph: "Аккаунт Trauma Team" },
        { k: "category", l: "Категория услуги", isCat: true, ph: "Жильё" },
        { k: "cost", l: "Тариф / Стоимость", ph: "500 eb", stat: "Тариф / Стоимость", c: "text-cp-green", span: 2 },
        { k: "unit", l: "Расчётная единица", ph: "в месяц", stat: "Расчётная единица", span: 1 },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" }
    ],
    cyberware: [
        { k: "name", l: "Название киберимпланта", ph: "Сердце Pacesetter 2000" },
        { k: "category", l: "Раздел кибернетики", isCat: true, ph: "Импланты" },
        { k: "pch", l: "ПЧ (Потеря Человечности)", ph: "2d6", stat: "ПЧ (Человечность)", c: "text-cp-red" },
        { k: "surg", l: "Код Хирургии (Н, М, С, КР)", ph: "М", stat: "Код Хирургии", c: "text-cp-yellow" },
        { k: "cost", l: "Стоимость", ph: "1,000 eb", stat: "Стоимость", c: "text-cp-green" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" }
    ],
    borging: [
        { k: "name", l: "Название модели боргирования", ph: "IEC Dragoon" },
        { k: "borgType", l: "Тип боргирования", ph: "Полное боргирование", stat: "Тип", c: "text-cp-cyan" },
        { k: "manufacturer", l: "Производитель", ph: "IEC / Arasaka / Militech", stat: "Производитель", c: "text-cp-yellow" },
        { k: "hc", l: "ПЧ (Потеря Человечности)", ph: "16d6+4", stat: "ПЧ (Человечность)", c: "text-cp-red" },
        { k: "cost", l: "Стоимость боргирования", ph: "127,000 eb", stat: "Стоимость", c: "text-cp-green", span: 2 },
        { k: "category", l: "Категория", isCat: true, ph: "Полное боргирование (Full Body Conversion)" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "Chr2 / SOF2", stat: "Источник" }
    ],
    acpa: [
        { k: "name", l: "Название модели ACPA (рус. / англ.)", ph: "Arasaka «DaiOni» / Militech Commando" },
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
        { k: "name", l: "Название модели транспорта", ph: "AV-4 Aerodyne" },
        { k: "category", l: "Тип транспорта", isCat: true, ph: "Аэродайн (AV)", stat: "Тип транспорта", c: "text-cp-cyan" },
        { k: "topSpeed", l: "Макс. скорость (км/ч)", ph: "560 км/ч", stat: "Макс. скорость", c: "text-cp-yellow" },
        { k: "accDec", l: "УСК/ТОРМ (Ускорение / Торможение)", ph: "50 / 50", stat: "УСК/ТОРМ" },
        { k: "maneuver", l: "Манёвренность", ph: "+0", stat: "Манёвренность", c: "text-cp-green" },
        { k: "crew", l: "Экипаж", ph: "1–2", stat: "Экипаж" },
        { k: "passengers", l: "Пассажиры", ph: "6", stat: "Пассажиры" },
        { k: "range", l: "Дистанция (запас хода)", ph: "800 км", stat: "Дистанция", c: "text-cp-cyan" },
        { k: "cargo", l: "Груз (грузоподъёмность в кг)", ph: "1300 кг", stat: "Груз" },
        { k: "sdp", l: "ОСТ (Очки Структуры)", ph: "100", stat: "ОСТ (Структура)", c: "text-cp-red" },
        { k: "os", l: "ОС (Броня = ОС / 10 с округлением вниз)", ph: "40", stat: "ОС (Броня)", c: "text-cp-yellow" },
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
        { k: "name", l: "Имя / Прозвище на улицах", ph: "Джонни Сильверхенд" },
        { k: "category", l: "Роль персонажа", isCat: true, ph: "Рокербой", stat: "Роль", c: "text-cp-yellow" },
        { k: "reputation", l: "Репутация (от 0 до 10)", ph: "10", stat: "Репутация", c: "text-cp-cyan" },
        { k: "book", l: "Источник", isBook: true, ph: "CP20", stat: "Источник", c: "text-cp-green" }
    ],
    net_program: [
        { k: "name", l: "Название программы (рус.)", ph: "Адская Стрела (Hellbolt)" },
        { k: "origName", l: "Оригинальное название (англ.)", ph: "Hellbolt" },
        { k: "category", l: "Категория программы", isCat: true, ph: "Анти-Личностные" },
        { k: "strength", l: "Сила программы (СИЛ)", ph: "4", stat: "Сила программы (СИЛ)", c: "text-cp-red" },
        { k: "mu", l: "Объём памяти — ЕП (MU)", ph: "2", stat: "Объём памяти — ЕП (MU)", c: "text-cp-cyan" },
        { k: "cost", l: "Стоимость", ph: "6,750 eb", stat: "Стоимость", c: "text-cp-green" },
        { k: "book", l: "Книга-источник", isBook: true, ph: "CP20" }
    ],
    net_deck: [
        { k: "name", l: "Название модели кибердеки", ph: "SGI Tech Elysia" },
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
    return `${num} (Броня: ${Math.floor(num / 10)})`;
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
    const freeTextFields = ["desc", "abilityDesc", "content", "summary", "specialEquipment", "charSkills", "ammoCasing"];

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

function renderCardActionButtons(sectionKey, itemId) {
    const fav = isItemFavorited(itemId);
    const favBtn = `<button type="button" onclick="toggleFavoriteItem('${itemId}')" class="px-2.5 py-1 border text-xs font-bold transition-colors ${fav ? 'bg-cp-yellow text-black border-cp-yellow' : 'bg-cp-bg text-gray-300 border-gray-700 hover:border-cp-yellow'}">${fav ? '★ В избранном' : '☆ В избранное'}</button>`;
    if (!isCurrentUserAdmin()) return `<div class="flex items-center gap-1.5 shrink-0">${favBtn}</div>`;

    const targetObj = (DB[sectionKey] || []).find(i => i.id === itemId);
    const isAddedChecked = Boolean(targetObj && targetObj.isUser);
    const isNamedChecked = Boolean(targetObj && targetObj.isNamed);

    return `
        <div class="flex flex-col items-end gap-1.5 shrink-0">
          <div class="flex items-center gap-1.5 flex-wrap justify-end">
            ${favBtn}
            <button type="button" onclick="startEditItem('${sectionKey}', '${itemId}')" class="px-2.5 py-1 bg-cp-cyan/15 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/50 text-xs font-bold">✏️ Ред.</button>
            <button type="button" onclick="deleteItem('${sectionKey}', '${itemId}')" class="px-2.5 py-1 bg-cp-red/15 hover:bg-cp-red text-cp-red hover:text-white border border-cp-red/50 text-xs font-bold">🗑️</button>
          </div>
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
        extraLabel.textContent = "Бронированность";
        extraSelect.innerHTML = `<option value="ALL">Без сортировки ОС</option><option value="SORT_OS_ASC">🔼 По возрастанию ОС</option><option value="SORT_OS_DESC">🔽 По убыванию ОС</option>`;
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
        legend.innerHTML = `<span><b class="text-cp-cyan">УСК/ТОРМ</b> = Ускорение и Торможение</span><span><b class="text-cp-cyan">ОСТ</b> = Очки Структуры (ХП)</span><span><b class="text-cp-cyan">ОС (Броня)</b> = ОС / 10</span>`;
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
// НАВИГАЦИЯ ПО САЙТУ И ГЛАВНАЯ СТРАНИЦА (4 ВКЛАДКИ БЕЗ СЧЁТЧИКОВ)
// =========================================================================


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
}

// --- ЛОГИКА ГЛАВНОЙ СТРАНИЦЫ ---
function switchHomeSubtab(subtab) {
    activeHomeSubtab = subtab || "news";
    editingHomePostId = null;
    editingContactUserId = null;
    renderHomeView();
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

// Автоматическое превращение голых URL (http/https) в кликабельные ссылки (не трогает уже готовые теги <a> и атрибуты)
function formatRichTextWithLinks(rawText) {
    if (rawText === undefined || rawText === null) return "";
    const str = String(rawText);
    if (str.trim() === "" || str.trim() === "—") return str;

    // Разбиваем строку по существующим HTML-тегам <a ...>...</a> и прочим тегам, чтобы не ломать их атрибуты href/src
    const parts = str.split(/(<a\b[^>]*>[\s\S]*?<\/a>|<[^>]+>)/gi);
    return parts.map(part => {
        if (part.startsWith("<")) return part;
        return part.replace(/(https?:\/\/[^\s<>"']+)/gi, (url) => {
            // Убираем случайную точку, запятую или скобку в самом конце ссылки
            const cleanUrl = url.replace(/[.,;!?)]+$/, "");
            const trailing = url.slice(cleanUrl.length);
            return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="text-cp-cyan hover:text-cp-yellow underline underline-offset-2 font-bold transition-colors">${cleanUrl}</a>${trailing}`;
        });
    }).join("");
}

// Список эмодзи для быстрой вставки в новости и описания карточек
const CP_EMOJI_LIST = [
    "⚡", "🔥", "💀", "🦾", "🦿", "🧠", "🔫", "🛡️", "⚔️", "💣",
    "💉", "💊", "🧬", "💻", "🌐", "📡", "🔒", "🔓", "⚠️", "🚨",
    "🏢", "🚗", "🚁", "💰", "💎", "🎲", "🎯", "⭐", "👑", "✅",
    "❌", "📌", "📋", "🔧", "⚙️", "🕶️", "🎭", "🎸", "🍺", "❤️"
];

// Универсальная вставка тега в любое текстовое поле (по его ID)
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

// Совместимость со старым вызовом
function insertHomeFormatTag(openTag, closeTag) {
    insertRichFormatTag("homeEditorTextarea", openTag, closeTag);
}

// Вставка оформленной гиперссылки (спрашивает URL и текст ссылки)
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

// Открытие/закрытие палитры эмодзи над конкретным текстовым полем
function toggleRichEmojiPicker(textareaId) {
    const picker = document.getElementById("emoji-picker-" + textareaId);
    if (!picker) return;
    picker.classList.toggle("hidden");
}

// Вставка выбранного эмодзи на место курсора
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

// Генератор готовой панели инструментов форматирования для любого textarea по его ID
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
            <button type="button" onclick="insertRichHyperlink('${textareaId}')" class="px-2.5 py-0.5 bg-cp-cyan/15 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/50 text-[11px] font-bold transition-colors" title="Вставить оформленную гиперссылку">🔗 Ссылка</button>
            <button type="button" onclick="toggleRichEmojiPicker('${textareaId}')" class="px-2.5 py-0.5 bg-cp-yellow/15 hover:bg-cp-yellow text-cp-yellow hover:text-black border border-cp-yellow/50 text-[11px] font-bold transition-colors" title="Открыть панель эмодзи">😀 Эмодзи</button>
          </div>
          <div id="emoji-picker-${textareaId}" class="hidden bg-cp-panel border border-cp-yellow/60 p-2 grid grid-cols-10 gap-1 shadow-lg">
            ${emojiButtons}
          </div>
        </div>
      `;
}

function startEditHomePost(postId) {
    if (!isCurrentUserAdmin()) return;
    editingHomePostId = postId;
    renderHomeView();
}
function cancelEditHomePost() {
    editingHomePostId = null;
    renderHomeView();
}

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
    const postToEdit = editingHomePostId ? postsList.find(p => p.id === editingHomePostId) : null;

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

//
//S_RENDERHANDLER
//

// =========================================================================
// НАВИГАЦИЯ ПО САЙТУ И ГЛАВНАЯ СТРАНИЦА (4 ВКЛАДКИ БЕЗ СЧЁТЧИКОВ)
// =========================================================================


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
}

// --- ЛОГИКА ГЛАВНОЙ СТРАНИЦЫ ---
function switchHomeSubtab(subtab) {
    activeHomeSubtab = subtab || "news";
    editingHomePostId = null;
    editingContactUserId = null;
    renderHomeView();
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

// Автоматическое превращение голых URL (http/https) в кликабельные ссылки (не трогает уже готовые теги <a> и атрибуты)
function formatRichTextWithLinks(rawText) {
    if (rawText === undefined || rawText === null) return "";
    const str = String(rawText);
    if (str.trim() === "" || str.trim() === "—") return str;

    // Разбиваем строку по существующим HTML-тегам <a ...>...</a> и прочим тегам, чтобы не ломать их атрибуты href/src
    const parts = str.split(/(<a\b[^>]*>[\s\S]*?<\/a>|<[^>]+>)/gi);
    return parts.map(part => {
        if (part.startsWith("<")) return part;
        return part.replace(/(https?:\/\/[^\s<>"']+)/gi, (url) => {
            // Убираем случайную точку, запятую или скобку в самом конце ссылки
            const cleanUrl = url.replace(/[.,;!?)]+$/, "");
            const trailing = url.slice(cleanUrl.length);
            return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="text-cp-cyan hover:text-cp-yellow underline underline-offset-2 font-bold transition-colors">${cleanUrl}</a>${trailing}`;
        });
    }).join("");
}


// Универсальная вставка тега в любое текстовое поле (по его ID)
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

// Совместимость со старым вызовом
function insertHomeFormatTag(openTag, closeTag) {
    insertRichFormatTag("homeEditorTextarea", openTag, closeTag);
}

// Вставка оформленной гиперссылки (спрашивает URL и текст ссылки)
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

// Открытие/закрытие палитры эмодзи над конкретным текстовым полем
function toggleRichEmojiPicker(textareaId) {
    const picker = document.getElementById("emoji-picker-" + textareaId);
    if (!picker) return;
    picker.classList.toggle("hidden");
}

// Вставка выбранного эмодзи на место курсора
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

// Генератор готовой панели инструментов форматирования для любого textarea по его ID
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
            <button type="button" onclick="insertRichHyperlink('${textareaId}')" class="px-2.5 py-0.5 bg-cp-cyan/15 hover:bg-cp-cyan text-cp-cyan hover:text-black border border-cp-cyan/50 text-[11px] font-bold transition-colors" title="Вставить оформленную гиперссылку">🔗 Ссылка</button>
            <button type="button" onclick="toggleRichEmojiPicker('${textareaId}')" class="px-2.5 py-0.5 bg-cp-yellow/15 hover:bg-cp-yellow text-cp-yellow hover:text-black border border-cp-yellow/50 text-[11px] font-bold transition-colors" title="Открыть панель эмодзи">😀 Эмодзи</button>
          </div>
          <div id="emoji-picker-${textareaId}" class="hidden bg-cp-panel border border-cp-yellow/60 p-2 grid grid-cols-10 gap-1 shadow-lg">
            ${emojiButtons}
          </div>
        </div>
      `;
}

function startEditHomePost(postId) {
    if (!isCurrentUserAdmin()) return;
    editingHomePostId = postId;
    renderHomeView();
}
function cancelEditHomePost() {
    editingHomePostId = null;
    renderHomeView();
}

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
    const postToEdit = editingHomePostId ? postsList.find(p => p.id === editingHomePostId) : null;

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