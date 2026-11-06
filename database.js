window.CP2020_EXTERNAL_DATA = {
  "categories": {
    "roles": [
      "Базовые роли (Corebook)",
      "Боевые и Спецоперации (Дополнения)",
      "Транспорт, Океан и Улицы (Дополнения)"
    ],
    "weapons": [
      "Средние пистолеты",
      "Лёгкие пистолеты",
      "Тяжёлые пистолеты",
      "Очень тяжёлые пистолеты",
      "Лёгкие ПП",
      "Средние ПП",
      "Тяжёлые ПП",
      "Дробовики",
      "Штурмовые винтовки",
      "Снайперские и Тяжёлые",
      "Ближний бой",
      "Экзотическое оружие"
    ],
    "armor": [
      "Мягкая броня",
      "Твёрдая броня",
      "Бронеодежда (Edgerunner)",
      "Бронеодежда (Businesswear)",
      "Спецкостюмы и Камуфляж",
      "Шлемы и Головные уборы"
    ],
    "gear": [
      "Инструменты и Ремонт",
      "Медицинское снаряжение",
      "Личная электроника и Компьютеры",
      "Разведка и Взлом (B&E)",
      "Выживание и Маскировка",
      "Препараты и Химия"
    ],
    "services": [
      "Медицина и Trauma Team",
      "Наёмники и Спецотряды",
      "Жильё",
      "Образ жизни",
      "Чёрный рынок",
      "Связь"
    ],
    "cyberware": [
      "Нейрооснащение",
      "Нанотехнологии",
      "Импланты",
      "Имплантированное оружие",
      "Кибероптика",
      "Кибераудио",
      "Киберконечности",
      "Линейные рамы и Борги",
      "Биооснащение"
    ],
    "netrunning": [
      "Вторжение",
      "Кибердеки",
      "Расшифровка",
      "Обнаружение/Тревога",
      "Анти-Системный",
      "Уклонение/Скрытность",
      "Защита",
      "Анти-Лёд",
      "Анти-Личностные",
      "Контроллеры",
      "Утилиты",
      "Программы серии Демон"
    ],
    "vehicles": [
      "Аэродайн (AV)",
      "Автомобиль",
      "Мотоцикл",
      "Грузовик",
      "Воздушный",
      "Гражданский самолёт",
      "Гражданский вертолёт",
      "Корабль",
      "Гоночное авто",
      "Танк",
      "Ховеркрафт",
      "Колёсная техника",
      "Боевой аэродайн (AV)",
      "Боевой самолёт",
      "Боевой вертолёт",
      "Оспри и другие ЛА",
      "Шагоходы",
      "Другой транспорт"
    ],
    "characters": [
      "Соло",
      "Рокербой",
      "Нетраннер",
      "Техник",
      "Медтехник",
      "Медиа",
      "Коп",
      "Корпорат",
      "Фиксер",
      "Кочевник (Номад)",
      "Другая роль"
    ],
    "rules": [
      "Бой и Оружие (ПВПВ)",
      "Броня и Снаряжение",
      "Кибернетика и Медицина",
      "Социум и Уличные сделки",
      "Сеть и Нетраннинг",
      "Окружающая среда и Выживание",
      "Закон и Преступления"
    ]
  },
  "db": {
    "roles": [
      {
        "id": "r-solo",
        "name": "Соло",
        "origName": "Solo",
        "category": "Базовые роли (Corebook)",
        "ability": "Чувство Боя",
        "stat": "ИНТ / РЕФ",
        "skills": [
          "Чувство Боя",
          "Внимательность",
          "Пистолеты"
        ],
        "salary": "2,000 – 12,000 eb/мес",
        "book": "CP20",
        "desc": "Положите файл database.js в одну папку с index.html, чтобы загрузить полный каталог."
      },
      {
        "id": "r-rockerboy",
        "name": "Рокербой",
        "origName": "Rockerboy",
        "category": "Базовые роли (Corebook)",
        "ability": "Харизматическое Лидерство",
        "stat": "КРУТ",
        "skills": [
          "Харизматическое Лидерство",
          "Внимательность",
          "Исполнение",
          "Гардероб и Стиль",
          "Сочинение",
          "Драка",
          "Игра на инструментах",
          "Знание улиц",
          "Убеждение и забалтывание",
          "Соблазнение"
        ],
        "salary": "1,000 – 12,000 eb/мес",
        "book": "CP20",
        "desc": "Уличные поэты, бунтари и рок-музыканты 2020-х."
      },
      {
        "id": "r-netrunner",
        "name": "Нетраннер",
        "origName": "Netrunner",
        "category": "Базовые роли (Corebook)",
        "ability": "Интерфейс (Interface)",
        "stat": "ИНТ",
        "skills": [
          "Интерфейс",
          "Внимательность",
          "Базовые технологии",
          "Образование",
          "Системные знания",
          "Кибертехнологии",
          "Создание кибердек",
          "Сочинение",
          "Электроника",
          "Программирование"
        ],
        "salary": "1,000 – 10,000 eb/мес",
        "book": "CP20",
        "desc": "Кибернетические компьютерные операторы, погружающиеся сознанием во всемирную Сеть."
      },
      {
        "id": "r-techie",
        "name": "Техник",
        "origName": "Techie",
        "category": "Базовые роли (Corebook)",
        "ability": "Импровизированный ремонт (Jury Rig)",
        "stat": "ТЕХ",
        "skills": [
          "Импровизированный ремонт",
          "Внимательность",
          "Базовые технологии",
          "Кибертехнологии",
          "Обучение",
          "Образование",
          "Электроника",
          "3 любых навыка ТЕХ"
        ],
        "salary": "1,000 – 8,000 eb/мес",
        "book": "CP20",
        "desc": "Подпольные изобретатели, механики и инженеры."
      },
      {
        "id": "r-medtech",
        "name": "Медтехник",
        "origName": "Medtech",
        "category": "Базовые роли (Corebook)",
        "ability": "Медицинский Техник (Medical Tech)",
        "stat": "ТЕХ",
        "skills": [
          "Медицинский Техник",
          "Внимательность",
          "Базовые технологии",
          "Диагностика болезней",
          "Образование",
          "Работа с крио-камерой",
          "Поиск информации",
          "Фармацевтика",
          "Зоология",
          "Проницательность"
        ],
        "salary": "1,600 – 15,000 eb/мес",
        "book": "CP20",
        "desc": "Уличные хирурги-риппердоки и врачи Trauma Team."
      },
      {
        "id": "r-fixer",
        "name": "Фиксер",
        "origName": "Fixer",
        "category": "Базовые роли (Corebook)",
        "ability": "Уличная сделка (Streetdeal)",
        "stat": "КРУТ",
        "skills": [
          "Уличная сделка",
          "Внимательность",
          "Подделка",
          "Пистолеты",
          "Драка",
          "Ближний бой",
          "Взлом замков",
          "Карманная кража",
          "Запугивание",
          "Убеждение и забалтывание"
        ],
        "salary": "1,500 – 10,000 eb/мес",
        "book": "CP20",
        "desc": "Посредники, организаторы сделок и информационные брокеры."
      }
    ],
    "weapons": [
      {
        "id": "w-budget-c13",
        "name": "BudgetArms C-13",
        "origName": "BudgetArms C-13",
        "category": "Лёгкие пистолеты",
        "typeCode": "П",
        "to": "-1",
        "skr": "Кар",
        "dos": "Отл",
        "damage": "1d6",
        "ammo": "5мм",
        "mag": "8",
        "sko": "2",
        "nad": "ОБ",
        "range": "50м",
        "cost": "75 eb",
        "book": "CP20",
        "desc": "Маломощный безгильзовый пистолет из композитного пластика, используемый как оружие последнего шанса. Легко прячется в кармане."
      },
      {
        "id": "w-dailung-cybermag",
        "name": "Dai Lung Cybermag 15",
        "origName": "Dai Lung Cybermag 15",
        "category": "Лёгкие пистолеты",
        "typeCode": "П",
        "to": "-1",
        "skr": "Кар",
        "dos": "Обы",
        "damage": "1d6+1",
        "ammo": "6мм",
        "mag": "10",
        "sko": "2",
        "nad": "НН",
        "range": "50м",
        "cost": "50 eb",
        "book": "CP20",
        "desc": "Дешёвая гонконгская штамповка из низкосортного полимера."
      },
      {
        "id": "w-fedarms-x22",
        "name": "Federated Arms X-22",
        "origName": "Federated Arms X-22",
        "category": "Лёгкие пистолеты",
        "typeCode": "П",
        "to": "+0",
        "skr": "Кур",
        "dos": "Отл",
        "damage": "1d6+1",
        "ammo": "6мм",
        "mag": "10",
        "sko": "2",
        "nad": "ОБ",
        "range": "50м",
        "cost": "150 eb",
        "book": "CP20",
        "desc": "Вездесущий дешёвый «полимерный однозарядник»."
      },
      {
        "id": "w-towa-12",
        "name": "Towa 12 Police Pistol",
        "origName": "Towa 12 Police Pistol",
        "category": "Лёгкие пистолеты",
        "typeCode": "П",
        "to": "+3",
        "skr": "Кур",
        "dos": "Мал",
        "damage": "1d6+1",
        "ammo": "6мм",
        "mag": "8",
        "sko": "2",
        "nad": "ОН",
        "range": "50м",
        "cost": "450 eb",
        "book": "PAC",
        "desc": "Высокоточный японский полицейский пистолет корпорации Towa Manufacturing. Исключительная сбалансированность даёт бонус ТО +3."
      },
      {
        "id": "w-militech-avenger",
        "name": "MiliTech Arms Avenger",
        "origName": "Militech Arms Avenger",
        "category": "Средние пистолеты",
        "typeCode": "П",
        "to": "+0",
        "skr": "Кур",
        "dos": "Отл",
        "damage": "2d6+1",
        "ammo": "9мм",
        "mag": "10",
        "sko": "2",
        "nad": "ОН",
        "range": "50м",
        "cost": "250 eb",
        "book": "CP20",
        "desc": "Отлично сбалансированный армейский и гражданский пистолет от MiliTech."
      },
      {
        "id": "w-arasaka-wsa",
        "name": "Arasaka WSA",
        "origName": "Arasaka WSA",
        "category": "Средние пистолеты",
        "typeCode": "П",
        "to": "+0",
        "skr": "Кур",
        "dos": "Обы",
        "damage": "2d6+3",
        "ammo": "10мм",
        "mag": "15",
        "sko": "2",
        "nad": "ОН",
        "range": "50м",
        "cost": "400 eb",
        "book": "CB1",
        "desc": "Табельный полуавтоматический пистолет корпоративной охраны и агентов Arasaka. Вместительный магазин на 15 патронов калибра 10мм."
      },
      {
        "id": "w-sternmeyer-35",
        "name": "Sternmeyer Type 35",
        "origName": "Sternmeyer Type 35",
        "category": "Тяжёлые пистолеты",
        "typeCode": "П",
        "to": "+0",
        "skr": "Кур",
        "dos": "Обы",
        "damage": "3d6",
        "ammo": "11мм",
        "mag": "8",
        "sko": "2",
        "nad": "ОН",
        "range": "50м",
        "cost": "400 eb",
        "book": "CP20",
        "desc": "Прочный, безотказный тяжёлый пистолет из Объединённой Германии."
      },
      {
        "id": "w-colt-amt-2000",
        "name": "Colt AMT Model 2000",
        "origName": "Colt AMT Model 2000",
        "category": "Очень тяжёлые пистолеты",
        "typeCode": "П",
        "to": "+0",
        "skr": "Кур",
        "dos": "Обы",
        "damage": "4d6+1",
        "ammo": "12мм",
        "mag": "8",
        "sko": "1",
        "nad": "ОН",
        "range": "50м",
        "cost": "500 eb",
        "book": "CP20",
        "desc": "Стандартное офицерское оружие в армии США."
      },
      {
        "id": "w-malorian-3516",
        "name": "Malorian Arms 3516",
        "origName": "Malorian Arms 3516",
        "category": "Очень тяжёлые пистолеты",
        "typeCode": "П",
        "to": "-1",
        "skr": "Кур",
        "dos": "Ред",
        "damage": "6d6 (ТЕЛО Мин 12)",
        "ammo": "14мм",
        "mag": "6",
        "sko": "1",
        "nad": "ОН",
        "range": "50м",
        "cost": "4,525 eb",
        "book": "Chr1",
        "desc": "Знаменитая карманная гаубица Джонни Сильверхенда из титана и полимеров. Требует киберруку или ТЕЛО 12+."
      },
      {
        "id": "w-arasaka-minami10",
        "name": "Arasaka Minami 10",
        "origName": "Arasaka Minami 10",
        "category": "Средние ПП",
        "typeCode": "ПП",
        "to": "+0",
        "skr": "Кур",
        "dos": "Отл",
        "damage": "2d6+3",
        "ammo": "10мм",
        "mag": "40",
        "sko": "20",
        "nad": "ОН",
        "range": "200м",
        "cost": "500 eb",
        "book": "CP20",
        "desc": "Стандартное оружие оперативников службы безопасности Arasaka по всему миру."
      },
      {
        "id": "w-hk-mpk11",
        "name": "H&K MPK-11",
        "origName": "H&K MPK-11",
        "category": "Тяжёлые ПП",
        "typeCode": "ПП",
        "to": "+0",
        "skr": "Плащ",
        "dos": "Обы",
        "damage": "4d6+1",
        "ammo": "12мм",
        "mag": "30",
        "sko": "20",
        "nad": "ОБ",
        "range": "200м",
        "cost": "700 eb",
        "book": "CP20",
        "desc": "Самый популярный среди Соло тяжёлый ПП под сокрушительный 12мм патрон."
      },
      {
        "id": "w-arasaka-rapid12",
        "name": "Arasaka WCAA Rapid 12",
        "origName": "Arasaka Rapid Assault 12",
        "category": "Дробовики",
        "typeCode": "ДРБ",
        "to": "-1",
        "skr": "Нет",
        "dos": "Обы",
        "damage": "4d6 (ТЕЛО Мин 6)",
        "ammo": "12ga (00)",
        "mag": "20",
        "sko": "2/10",
        "nad": "ОБ",
        "range": "50м",
        "cost": "900 eb",
        "book": "CP20",
        "desc": "Автоматический дробовик высокой мощности с барабанным магазином."
      },
      {
        "id": "w-militech-ronin",
        "name": "MiliTech Ronin Light Assault",
        "origName": "Militech Ronin Light Assault",
        "category": "Штурмовые винтовки",
        "typeCode": "ВИН",
        "to": "+1",
        "skr": "Нет",
        "dos": "Обы",
        "damage": "5d6 (ТЕЛО Мин 5)",
        "ammo": "5.56мм",
        "mag": "35",
        "sko": "3/30",
        "nad": "ОН",
        "range": "400м",
        "cost": "450 eb",
        "book": "CP20",
        "desc": "Лёгкая, точная и безотказная штурмовая винтовка от MiliTech из углепластика."
      },
      {
        "id": "w-fn-ral",
        "name": "FN-RAL Heavy Assault Rifle",
        "origName": "FN-RAL Heavy Assault Rifle",
        "category": "Штурмовые винтовки",
        "typeCode": "ВИН",
        "to": "-1/-2",
        "skr": "Нет/Плащ",
        "dos": "Обы",
        "damage": "6d6+2 (ТЕЛО Мин 7)",
        "ammo": "7.62мм",
        "mag": "30",
        "sko": "3/30",
        "nad": "ОН",
        "range": "400м",
        "cost": "600 eb",
        "book": "CP20",
        "desc": "Стандартное тяжёлое штурмовое оружие НАТО для открытого боя."
      },
      {
        "id": "w-barrett-arasaka-20",
        "name": "Barrett-Arasaka Light 20mm",
        "origName": "Barrett-Arasaka Light 20mm",
        "category": "Снайперские и Тяжёлые",
        "typeCode": "ТЯЖ",
        "to": "+0",
        "skr": "Нет",
        "dos": "Ред",
        "damage": "4d10 ББ (ТЕЛО Мин 4)",
        "ammo": "20/9мм",
        "mag": "10",
        "sko": "1",
        "nad": "ОН",
        "range": "450м",
        "cost": "2,000 eb",
        "book": "CP20",
        "desc": "Фаворит охотников на киберпсихов. Стреляет подкалиберными снарядами из обеднённого урана."
      },
      {
        "id": "w-kendachi-monokatana",
        "name": "Kendachi Monokatana®",
        "origName": "Kendachi Monokatana",
        "category": "Ближний бой",
        "typeCode": "ОББ",
        "to": "+1",
        "skr": "Нет",
        "dos": "Ред",
        "damage": "4d6# (Моноклинок)",
        "ammo": "Нет",
        "mag": "—",
        "sko": "1",
        "nad": "ОН",
        "range": "1м",
        "cost": "600 eb",
        "book": "CP20",
        "desc": "Длинный меч в стиле высокотехнологичной катаны с кристаллическим лезвием толщиной в молекулу."
      }
    ],
    "armor": [
      {
        "id": "a-kevlar-tshirt",
        "name": "Кевларовая футболка / жилет",
        "origName": "Kevlar T-Shirt / Vest",
        "category": "Мягкая броня",
        "covers": "Торс",
        "os": "10",
        "zu": "0",
        "cost": "90 eb",
        "book": "CP20",
        "desc": "Лёгкая кевларовая майка, которую можно незаметно носить под обычной рубашкой."
      },
      {
        "id": "a-light-jacket",
        "name": "Лёгкая броне-куртка",
        "origName": "Light Armor Jacket",
        "category": "Мягкая броня",
        "covers": "Торс, Руки",
        "os": "14",
        "zu": "0",
        "cost": "150 eb",
        "book": "CP20",
        "desc": "Стильная уличная куртка с кевларовой подкладкой (ЗУ 0)."
      },
      {
        "id": "a-med-jacket",
        "name": "Средняя броне-куртка",
        "origName": "Medium Armor Jacket",
        "category": "Мягкая броня",
        "covers": "Торс, Руки",
        "os": "18",
        "zu": "-1",
        "cost": "200 eb",
        "book": "CP20",
        "desc": "Классическая куртка киберпанка с усиленными бронепластинами."
      },
      {
        "id": "a-heavy-jacket",
        "name": "Тяжёлая броне-куртка",
        "origName": "Heavy Armor Jacket",
        "category": "Мягкая броня",
        "covers": "Торс, Руки",
        "os": "20",
        "zu": "-2",
        "cost": "250 eb",
        "book": "CP20",
        "desc": "Массивная куртка с плотными композитными вставками."
      },
      {
        "id": "a-gibson-jeans",
        "name": "Gibson Battlegear Бронированные джинсы",
        "origName": "Gibson Battlegear Armored Jeans",
        "category": "Бронеодежда (Edgerunner)",
        "covers": "Ноги",
        "os": "16",
        "zu": "0",
        "cost": "30 eb",
        "book": "Chr1",
        "desc": "Уличные джинсы с вплетённым баллистическим волокном (16 ОС за 30 eb)."
      },
      {
        "id": "a-takanaka-coat",
        "name": "Takanaka *Корп* Бронированное пальто",
        "origName": "Takanaka 'Exec' Armored Top Coat",
        "category": "Бронеодежда (Businesswear)",
        "covers": "Торс, Руки, Ноги",
        "os": "16",
        "zu": "0",
        "cost": "2,000 eb",
        "book": "Chr1",
        "desc": "Роскошное деловое пальто для руководителей корпораций (16 ОС)."
      },
      {
        "id": "a-metal-gear",
        "name": "Броня MetalGear™",
        "origName": "MetalGear",
        "category": "Твёрдая броня",
        "covers": "Всё тело",
        "os": "25",
        "zu": "-2",
        "cost": "600 eb",
        "book": "CP20",
        "desc": "Полный секционный пластинчатый доспех штурмовых групп и корпоративного спецназа."
      }
    ],
    "gear": [
      {
        "id": "g-tech-scanner",
        "name": "Техсканнер (Базовый / Francesca / Pembroke)",
        "origName": "Techscanner",
        "category": "Инструменты и Ремонт",
        "weight": "0.5 кг",
        "effect": "-3 СЛ ремонта (60%) / +1..+2 ТЕХ",
        "cost": "600 – 1,500 eb",
        "book": "CP20",
        "desc": "Портативный диагностический анализатор неисправностей."
      },
      {
        "id": "g-buchsterhude",
        "name": "Набор инструментов Buchsterhude GmbH",
        "origName": "Buchsterhude Tool Kit",
        "category": "Инструменты и Ремонт",
        "weight": "2 кг",
        "effect": "+1 ТЕХ и +1 ГиС/РЕП",
        "cost": "1,000 – 1,500 eb",
        "book": "Chr3",
        "desc": "Премиальный немецкий набор инструментов для техников."
      },
      {
        "id": "g-med-scanner",
        "name": "Медсканнер",
        "origName": "Medscanner",
        "category": "Медицинское снаряжение",
        "weight": "0.5 кг",
        "effect": "+2 Диагностика болезней",
        "cost": "300 eb",
        "book": "CP20",
        "desc": "Внешний медицинский сканер с датчиками состояния организма."
      },
      {
        "id": "g-cyber-pcx",
        "name": "Миникомпьютер EBM «PCX» / Кибер-PCX",
        "origName": "EBM PCX Minicomp",
        "category": "Личная электроника и Компьютеры",
        "weight": "1 кг",
        "effect": "25 ЕП, ИНТ 2, +1 ИНТ/ТЕХ",
        "cost": "900 – 1,200 eb",
        "book": "Chr1",
        "desc": "Портативный ноутбук с памятью 25 ЕП (MU) и собственной базой ИНТ 2."
      },
      {
        "id": "g-decryptors",
        "name": "Дешифраторы замков (Cardlock / VocDecryptor)",
        "origName": "Code / VocDecryptor",
        "category": "Разведка и Взлом (B&E)",
        "weight": "0.5 кг",
        "effect": "+5 к взлому электронных замков",
        "cost": "500 – 1,000 eb",
        "book": "CP20",
        "desc": "Спецприборы для обхода электронных систем безопасности."
      }
    ],
    "services": [
      {
        "id": "s-trauma-acct",
        "name": "Аккаунт Trauma Team™ (Базовый)",
        "origName": "Trauma Team Account",
        "category": "Медицина и Trauma Team",
        "unit": "в месяц",
        "cost": "500 eb",
        "book": "CP20",
        "desc": "Стандартная подписка на вооружённую медицинскую эвакуацию на аэродайне AV-4."
      },
      {
        "id": "s-lazarus",
        "name": "ЧВК Militech / Lazarus (Солдат или Консультант)",
        "origName": "Lazarus Basic Soldier / Advisor",
        "category": "Наёмники и Спецотряды",
        "unit": "в месяц / в час",
        "cost": "2,500 – 10,000 eb",
        "book": "CB2",
        "desc": "Базовый боец Lazarus стоит 2,500 eb/мес, военный советник — от 3,000 eb/мес до 10,000 eb/час."
      },
      {
        "id": "s-conapt",
        "name": "Аренда квартиры (Конапт / Куб / Спальный куб «Гроб»)",
        "origName": "Conapt / Cube / Coffin",
        "category": "Жильё",
        "unit": "в месяц / за ночь",
        "cost": "40 – 750 eb",
        "book": "CP20",
        "desc": "Спальный куб («Гроб») — 40 eb/ночь. Средний конапт — 300 eb/мес."
      },
      {
        "id": "s-food-lifestyle",
        "name": "Питание (Киббл / Препак / Свежая еда)",
        "origName": "Kibble / Prepack / Fresh Food",
        "category": "Образ жизни",
        "unit": "в неделю",
        "cost": "50 / 150 / 300 eb",
        "book": "CP20",
        "desc": "Сухой корм «Киббл» — 50 eb в неделю; Препак — 150 eb/нед; Свежая еда — 300 eb/нед."
      },
      {
        "id": "s-blackmarket-cred",
        "name": "Услуги Фиксера: Кредчипы и обмен средств",
        "origName": "Black Market Services",
        "category": "Чёрный рынок",
        "unit": "за услугу",
        "cost": "1,000 – 10,000 eb",
        "book": "WS",
        "desc": "Оформление чистого кредчипа (95% надёжность) — 1d10x1000 eb; Дешифровка найденного кредчипа — 25–50% от суммы."
      },
      {
        "id": "s-comm-net",
        "name": "Тарифы сотовой связи, Код доступа к Сети и DataTerm",
        "origName": "Communications & Net Service",
        "category": "Связь",
        "unit": "в месяц",
        "cost": "30 – 100 eb",
        "book": "CP20",
        "desc": "Стандартный телефон — 30 eb/мес; Сотовая связь — 100 eb/мес; Код доступа в Сеть — 30 eb/мес."
      }
    ],
    "cyberware": [
      {
        "id": "c-neural-proc",
        "name": "Нейропроцессор (Базовый)",
        "origName": "Neuralware Processor",
        "category": "Нейрооснащение",
        "surg": "М",
        "pch": "1d6",
        "cost": "1,000 eb",
        "book": "CP20",
        "desc": "Базовый распределительный блок, вживляемый в основание позвоночника."
      },
      {
        "id": "c-kerenzikov",
        "name": "Ускоритель Kerenzikov",
        "origName": "Kerenzikov Boosterware",
        "category": "Нейрооснащение",
        "surg": "Н",
        "pch": "1d6 / 2d6",
        "cost": "500 eb",
        "book": "CP20",
        "desc": "Постоянно активный усилитель рефлексов (+1 или +2 к Инициативе)."
      },
      {
        "id": "c-sandevistan",
        "name": "Ускоритель Sandevistan",
        "origName": "Speedware (Sandevistan)",
        "category": "Нейрооснащение",
        "surg": "Н",
        "pch": "1d6/2",
        "cost": "1,600 eb",
        "book": "CP20",
        "desc": "Боевой ускоритель рефлексов (+3 к Инициативе на 5 ходов после активации)."
      },
      {
        "id": "c-skinweave",
        "name": "Прошивка кожи (Skinweave)",
        "origName": "Skinweave",
        "category": "Нанотехнологии",
        "surg": "Н",
        "pch": "2d6",
        "cost": "2,000 eb",
        "book": "CP20",
        "desc": "Наномашины вплетают синтетические броневолокна в кожу (12 ОС на всё тело)."
      },
      {
        "id": "c-mbl",
        "name": "Кружево мышц и костей",
        "origName": "Muscle and Bone Lace",
        "category": "Нанотехнологии",
        "surg": "Н",
        "pch": "1d6/2",
        "cost": "1,500 eb",
        "book": "CP20",
        "desc": "Нановирусы укрепляют мышцы и кости, навсегда повышая стат ТЕЛО на +2."
      },
      {
        "id": "c-pacesetter",
        "name": "Сердце Pacesetter 2000",
        "origName": "Pacesetter 2000 Heart",
        "category": "Импланты",
        "surg": "С",
        "pch": "1d6",
        "cost": "985 eb",
        "book": "Chr1",
        "desc": "Спортивное киберсердце (+2 ТЕЛО и +2 ПЕР при включении)."
      },
      {
        "id": "c-wolvers",
        "name": "Росомахи (Wolvers)",
        "origName": "Wolvers",
        "category": "Имплантированное оружие",
        "surg": "М",
        "pch": "3d6+1",
        "cost": "600 eb",
        "book": "CP20",
        "desc": "Длинные выдвижные карбогласовые лезвия из костяшек (3d6* бронебойного урона)."
      },
      {
        "id": "c-kiroshi-mono",
        "name": "Kiroshi MonoVision",
        "origName": "Kiroshi MonoVision",
        "category": "Кибероптика",
        "surg": "С",
        "pch": "3d6",
        "cost": "650 eb",
        "book": "Chr4",
        "desc": "Фирменный моно-визор Kiroshi (6 опций, +1 Внимательность)."
      },
      {
        "id": "c-cyberaudio-base",
        "name": "Базовый модуль Кибераудио",
        "origName": "Basic Cyberaudio",
        "category": "Кибераудио",
        "surg": "М",
        "pch": "2d6",
        "cost": "500 eb",
        "book": "CP20",
        "desc": "Имплантируемый слуховой комплекс на 6 аудио-опций."
      },
      {
        "id": "c-cyberarm",
        "name": "Стандартная Киберрука",
        "origName": "Standard Cyberarm",
        "category": "Киберконечности",
        "surg": "КР",
        "pch": "2d6",
        "cost": "3,000 eb",
        "book": "CP20",
        "desc": "Искусственная конечность (20/30 ОСТ, 4 внутренних пространства, 1d6 удар)."
      }
    ],
    "netrunning": [
      {
        "id": "n-prog-hammer",
        "itemKind": "program",
        "name": "Молот (Hammer)",
        "origName": "Hammer",
        "category": "Вторжение",
        "strength": "4",
        "mu": "1",
        "cost": "400 eb",
        "book": "CP20",
        "desc": "Сбивает 2d6 СИЛЫ Стены данных. Поднимает тревогу в радиусе 10 пространств."
      },
      {
        "id": "n-prog-worm",
        "itemKind": "program",
        "name": "Червь (Worm)",
        "origName": "Worm",
        "category": "Вторжение",
        "strength": "2",
        "mu": "5",
        "cost": "660 eb",
        "book": "CP20",
        "desc": "Тихо прогрызает проход в Стене данных за 2 хода без поднятия тревоги."
      },
      {
        "id": "n-prog-codecracker",
        "itemKind": "program",
        "name": "Взломщик кодов (Codecracker)",
        "origName": "Codecracker",
        "category": "Расшифровка",
        "strength": "3",
        "mu": "2",
        "cost": "380 eb",
        "book": "CP20",
        "desc": "Вскрывает Кодовые врата (Code Gates)."
      },
      {
        "id": "n-prog-wizards-book",
        "itemKind": "program",
        "name": "Книга Волшебника (Wizard's Book)",
        "origName": "Wizard's Book",
        "category": "Расшифровка",
        "strength": "4 / 6",
        "mu": "2",
        "cost": "400 eb",
        "book": "CP20",
        "desc": "Открывает Кодовые врата (СИЛ 4) и файловые замки (СИЛ 6)."
      },
      {
        "id": "n-prog-bloodhound",
        "itemKind": "program",
        "name": "Ищейка (Bloodhound)",
        "origName": "Bloodhound",
        "category": "Обнаружение/Тревога",
        "strength": "3",
        "mu": "5",
        "cost": "700 eb",
        "book": "CP20",
        "desc": "Обнаруживает вторжение в систему, отслеживает след раннера и подаёт сигнал тревоги."
      },
      {
        "id": "n-prog-pitbull",
        "itemKind": "program",
        "name": "Питбуль (Pit Bull)",
        "origName": "Pit Bull",
        "category": "Обнаружение/Тревога",
        "strength": "2",
        "mu": "6",
        "cost": "780 eb",
        "book": "CP20",
        "desc": "Обнаруживает нарушителя и принудительно обрывает его соединение."
      },
      {
        "id": "n-prog-deckrash",
        "itemKind": "program",
        "name": "ДекКРАШ (DecKRASH)",
        "origName": "DecKRASH",
        "category": "Анти-Системный",
        "strength": "4",
        "mu": "2",
        "cost": "600 eb",
        "book": "CP20",
        "desc": "Обрушивает кибердеку противника на 1d6 ходов."
      },
      {
        "id": "n-prog-invisibility",
        "itemKind": "program",
        "name": "Невидимость (Invisibility)",
        "origName": "Invisibility",
        "category": "Уклонение/Скрытность",
        "strength": "3",
        "mu": "1",
        "cost": "300 eb",
        "book": "CP20",
        "desc": "Скрывает киберсигнал и иконку нетраннера."
      },
      {
        "id": "n-prog-shield",
        "itemKind": "program",
        "name": "Щит (Shield)",
        "origName": "Shield",
        "category": "Защита",
        "strength": "3",
        "mu": "1",
        "cost": "150 eb",
        "book": "CP20",
        "desc": "Останавливает первую успешную анти-личностную атаку."
      },
      {
        "id": "n-prog-armor",
        "itemKind": "program",
        "name": "Броня (Armor)",
        "origName": "Armor",
        "category": "Защита",
        "strength": "4",
        "mu": "2",
        "cost": "170 eb",
        "book": "CP20",
        "desc": "Снижает урон от любых анти-личностных программ на 3 пункта."
      },
      {
        "id": "n-prog-killer",
        "itemKind": "program",
        "name": "Убийца IV (Killer IV)",
        "origName": "Killer IV",
        "category": "Анти-Лёд",
        "strength": "4",
        "mu": "5",
        "cost": "1,480 eb",
        "book": "CP20",
        "desc": "Мощный вирус-убийца программ, наносящий 1d6 урона СИЛЕ любого ЛЬДА."
      },
      {
        "id": "n-prog-hellbolt",
        "itemKind": "program",
        "name": "Адская Стрела (Hellbolt)",
        "origName": "Hellbolt",
        "category": "Анти-Личностные",
        "strength": "4",
        "mu": "4",
        "cost": "6,750 eb",
        "book": "CP20",
        "desc": "Чёрный ЛЁД: наносит 1d10 урона раннеру через нейроразъёмы."
      },
      {
        "id": "n-prog-viddymaster",
        "itemKind": "program",
        "name": "Видди-Мастер (Viddy Master)",
        "origName": "Viddy Master",
        "category": "Контроллеры",
        "strength": "4",
        "mu": "1",
        "cost": "140 eb",
        "book": "CP20",
        "desc": "Управляет видеоэкранами и голопроекторами в подсети."
      },
      {
        "id": "n-prog-backup",
        "itemKind": "program",
        "name": "Резервная копия (Backup)",
        "origName": "Backup",
        "category": "Утилиты",
        "strength": "4",
        "mu": "1",
        "cost": "140 eb",
        "book": "CP20",
        "desc": "Создаёт резервные копии любых программ на чипах."
      },
      {
        "id": "n-prog-succubus",
        "itemKind": "program",
        "name": "Суккуб II (Succubus II)",
        "origName": "Succubus II",
        "category": "Программы серии Демон",
        "strength": "4",
        "mu": "4",
        "cost": "1,200 eb",
        "book": "CP20",
        "desc": "Демон-компилятор (СИЛ 4), вмещающий до 3 подпрограмм."
      },
      {
        "id": "n-deck-parraline-5750",
        "itemKind": "deck",
        "name": "Zetatech Parraline 5750",
        "origName": "Zetatech Parraline 5750",
        "category": "Кибердеки",
        "cpu": "1",
        "dataWall": "+4",
        "codeGate": "2",
        "speed": "+2",
        "memory": "10 ЕП (до 20 ЕП)",
        "cost": "3,600 eb",
        "book": "CP20",
        "deckTypes": [
          "Стандартная",
          "Портативная"
        ],
        "deckOptions": [
          "Электроды",
          "Клавиатура",
          "Считыватель Чипов"
        ],
        "extraChipsCount": "6",
        "desc": "Одна из самых популярных профессиональных кибердек на рынке от корпорации Zetatech."
      },
      {
        "id": "n-deck-sgi-elysia",
        "itemKind": "deck",
        "name": "SGI Tech Elysia",
        "origName": "SGI Tech Elysia",
        "category": "Кибердеки",
        "cpu": "1",
        "dataWall": "+5",
        "codeGate": "3",
        "speed": "+3",
        "memory": "20 ЕП",
        "cost": "4,260 eb",
        "book": "Chr1",
        "deckTypes": [
          "Стандартная",
          "Портативная"
        ],
        "deckOptions": [
          "Электроды",
          "Видеоэкран",
          "Считыватель Чипов",
          "Доп чипы"
        ],
        "extraChipsCount": "10",
        "desc": "Высокоскоростная рабочая дека элитных раннеров с удвоенной заводской памятью (20 ЕП)."
      }
    ],
    "vehicles": [
      {
        "id": "v-kundalini-tetsuo",
        "name": "Kundalini GSR1200 Tetsuo",
        "origName": "Kundalini GSR1200 Tetsuo",
        "category": "Мотоцикл",
        "topSpeed": "328 км/ч",
        "accDec": "36 / 45",
        "crew": "1",
        "passengers": "0",
        "range": "533 км",
        "cargo": "45 кг",
        "maneuver": "+4",
        "sdp": "34",
        "os": "10",
        "mass": "136 кг",
        "cost": "25,000 eb",
        "book": "Chr4",
        "specialEquipment": "Бортовой компьютер, кибернетический коннектор управления, шины с защитой от проколов, обтекаемый корпус.",
        "desc": "Сверхскоростной спортивный кибербайк премиум-класса с выдающейся манёвренностью (+4) и лёгким заводским бронированием."
      },
      {
        "id": "v-toyo-omega",
        "name": "Toyo-Chrysler Omega",
        "origName": "Toyo-Chrysler Omega",
        "category": "Автомобиль",
        "topSpeed": "145 км/ч",
        "accDec": "15 / 40",
        "crew": "1",
        "passengers": "3",
        "range": "480 км",
        "cargo": "400 кг",
        "maneuver": "+0",
        "sdp": "40",
        "os": "0",
        "mass": "1 тонна",
        "cost": "11,000 eb",
        "book": "CP20",
        "specialEquipment": "Стандартное гражданское радио, кондиционер, двигатель на топливе CHOOH2.",
        "desc": "Массовый бюджетный городской седан, заполняющий улицы Найт-Сити."
      },
      {
        "id": "v-av4-aerodyne",
        "name": "AV-4 Многоцелевой Аэродайн",
        "origName": "AV-4 Multipurpose Aerodyne",
        "category": "Аэродайн (AV)",
        "topSpeed": "560 км/ч",
        "accDec": "50 / 50",
        "crew": "1–2",
        "passengers": "6",
        "range": "640 км",
        "cargo": "1300 кг",
        "maneuver": "+0",
        "sdp": "100",
        "os": "40",
        "mass": "4 тонны",
        "cost": "600,000 eb",
        "book": "CP20 / MM",
        "specialEquipment": "Векторные турбины вертикального взлёта, военная рация, ИК-прожекторы, бронированный десантный отсек, турельные крепления.",
        "desc": "Легендарная «летающая кирпичина» с векторной тягой для городских боевых операций и медицинской эвакуации Trauma Team."
      },
      {
        "id": "v-militech-mt4",
        "name": "Militech MT-4 Основной Боевой Танк",
        "origName": "Militech MT-4 MBT",
        "category": "Танк",
        "topSpeed": "96 км/ч",
        "accDec": "10 / 50",
        "crew": "4",
        "passengers": "0",
        "range": "320 км",
        "cargo": "Нет",
        "maneuver": "+2",
        "sdp": "160",
        "os": "250",
        "mass": "41 тонна",
        "cost": "9,000,000 eb",
        "book": "MM",
        "specialEquipment": "120мм гладкоствольное орудие, спаренный пулемёт 7.62мм, зенитный гатлинг 12.7мм, лазерный дальномер, тепловизор.",
        "desc": "Флагманский основной боевой танк корпорации MiliTech с композитной бронёй на 250 ОС (Броня 25)."
      },
      {
        "id": "v-osprey-v22b",
        "name": "Bell-Boeing V-22B Osprey",
        "origName": "Bell-Boeing V-22B Osprey",
        "category": "Оспри и другие ЛА",
        "topSpeed": "506 км/ч (315 миль/ч)",
        "accDec": "10 / 20",
        "crew": "2",
        "passengers": "20",
        "range": "1900 км",
        "cargo": "9 тонн",
        "maneuver": "+0",
        "sdp": "200",
        "os": "0",
        "mass": "25 тонн",
        "cost": "650,000 eb",
        "book": "MM",
        "specialEquipment": "Поворотные винты (конвертоплан), грузовая аппарель, спутниковая навигация, лебёдка.",
        "desc": "Тяжёлый транспортный конвертоплан, сочетающий вертикальный взлёт вертолёта с высокой крейсерской скоростью турбовинтового самолёта."
      },
      {
        "id": "v-arasaka-daisasori",
        "name": "Arasaka Daisasori Боевой Шагоход",
        "origName": "Arasaka Daisasori Cyberwalk",
        "category": "Шагоходы",
        "topSpeed": "58 км/ч (145 км/ч на колёсах)",
        "accDec": "15 / 15",
        "crew": "2",
        "passengers": "0",
        "range": "320 км",
        "cargo": "Нет",
        "maneuver": "+3",
        "sdp": "80",
        "os": "40",
        "mass": "4 тонны",
        "cost": "680,000 eb",
        "book": "SW",
        "specialEquipment": "4 шагающие опоры с выдвижными колёсами, нейроинтерфейс пилота, спаренные пулемёты и пусковая установка ПТУР.",
        "desc": "Четырёхногий штурмовой шагоход «Большой Скорпион» корпорации Arasaka, способный как карабкаться по городским завалам, так и мчаться по шоссе на колёсных приводах."
      }
    ],
    "characters": [
      {
        "id": "ch-silverhand",
        "name": "Джонни Сильверхенд (Johnny Silverhand)",
        "origName": "Johnny Silverhand",
        "category": "Рокербой",
        "reputation": "10",
        "book": "CP20 / Firestorm",
        "stat_int": "7",
        "stat_cool": "9",
        "stat_ma": "8",
        "stat_ref": "9",
        "stat_attr": "9",
        "stat_body": "7",
        "stat_tech": "6",
        "stat_luck": "8",
        "stat_emp": "6",
        "charSkills": "Харизматическое Лидерство +9, Игра на инструментах (Гитара) +9, Сочинение +8, Исполнение +9, Пистолеты +7, Винтовки +6, Знание улиц +7.",
        "charCyberware": "Хромированная левая киберрука (Superchrome®, гидравлические цилиндры, диктофон), Кибероптика (Защита от ослепления, LowLite™), Нейропроцессор, Коннектор умного оружия.",
        "charArmor": "Кожаная броне-куртка «Samurai» (14 ОС), Бронированные джинсы Gibson (16 ОС).",
        "charWeapons": "Тяжёлый кастомный пистолет Malorian Arms 3516 (14мм, 6d6 урона), боевой нож.",
        "charGear": "Электрогитара, портативная цифровая студия записи, зеркальные очки-авиаторы.",
        "desc": "Легендарный фронтмен хроматик-рок группы «Samurai» и непримиримый враг мегакорпорации Arasaka."
      },
      {
        "id": "ch-blackhand",
        "name": "Морган Блэкхенд (Morgan Blackhand)",
        "origName": "Morgan Blackhand",
        "category": "Соло",
        "reputation": "10",
        "book": "CP20 / SOF / SW",
        "stat_int": "9",
        "stat_cool": "10",
        "stat_ma": "8",
        "stat_ref": "10",
        "stat_attr": "7",
        "stat_body": "9",
        "stat_tech": "8",
        "stat_luck": "9",
        "stat_emp": "6",
        "charSkills": "Чувство Боя +10, Пистолеты +10, Пистолеты-Пулемёты +9, Винтовки +9, Боевые Искусства +9, Ближний бой +9, Скрытность +8, Оружейник +8, Тактика +9.",
        "charCyberware": "Чёрная матовая правая киберрука (встроенный ПП, абордажный крюк), Ускоритель Sandevistan, Прошивка кожи (12 ОС), Кружево мышц и костей (+2 ТЕЛО), Нанохирурги, Кибероптика.",
        "charArmor": "Тяжёлый бронированный плащ-пыльник (18 ОС) и тактический бронежилет MiliTech (20 ОС).",
        "charWeapons": "Умный пистолет-пулемёт H&K MPK-11 (12мм, 4d6+1), тяжёлый пистолет Sternmeyer Type 35, моно-нож Kendachi.",
        "charGear": "Полевой набор взрывчатки C-6, техсканнер, защищённая военная рация MiliTech, наручники-стяжки.",
        "desc": "Эталонный «Соло среди Соло», автор настольного пособия наёмников «Справочник Блэкхенда» и главный полевой оперативник корпорации MiliTech."
      },
      {
        "id": "ch-spider-murphy",
        "name": "Спайдер Мёрфи (Spider Murphy)",
        "origName": "Spider Murphy",
        "category": "Нетраннер",
        "reputation": "10",
        "book": "CP20 / NET / SW",
        "stat_int": "10",
        "stat_cool": "8",
        "stat_ma": "7",
        "stat_ref": "8",
        "stat_attr": "7",
        "stat_body": "6",
        "stat_tech": "10",
        "stat_luck": "8",
        "stat_emp": "7",
        "charSkills": "Интерфейс +10, Программирование +10, Системные знания +10, Создание кибердек +9, Электроника +8, Электронная безопасность +9.",
        "charCyberware": "Нейропроцессор, Интерфейсные разъёмы, Кибермодемный коннектор, Ускоритель Kerenzikov (+1), Кибероптика.",
        "charArmor": "Костюм нетраннера с охлаждением и кевларовыми вставками (12 ОС).",
        "charWeapons": "Кастомная сотовая кибердека (Скорость +5, Стена данных +8, 30 ЕП памяти), пистолет Dai Lung Streetmaster.",
        "charGear": "Полная библиотека уникальных программ и демонов, кабели низкого сопротивления.",
        "desc": "Одна из величайших легенд Сети, ученица и близкий друг Рейча Бартмосса."
      },
      {
        "id": "ch-santiago",
        "name": "Сантьяго (Nomad Santiago)",
        "origName": "Santiago",
        "category": "Кочевник (Номад)",
        "reputation": "9",
        "book": "CP20 / NEO / SW",
        "stat_int": "7",
        "stat_cool": "9",
        "stat_ma": "8",
        "stat_ref": "9",
        "stat_attr": "7",
        "stat_body": "8",
        "stat_tech": "8",
        "stat_luck": "7",
        "stat_emp": "7",
        "charSkills": "Семья +9, Мотоциклы +10, Вождение +9, Винтовки +8, Пистолеты +8, Ближний бой +8, Выживание в дикой местности +9, Базовые технологии +8, Выносливость +8, Внимательность +8.",
        "charCyberware": "Кибероптика с защитой от ослепления и телеоптикой, Нейропроцессор, Коннектор транспорта (+2 к вождению), Коннектор умного оружия.",
        "charArmor": "Байкерская кожаная броне-куртка (14 ОС), кожаные поножи с наколенниками (16 ОС).",
        "charWeapons": "Крупнокалиберный револьвер Colt .45 Peacemaker, штурмовая винтовка FN-RAL, охотничий нож.",
        "charGear": "Кастомный бронированный мотоцикл Kundalini, походный ремнабор, бинокль.",
        "desc": "Харизматичный лидер клана Альдекальдо (Aldecaldos) и надёжный союзник Джонни Сильверхенда и Роуг, способный по одному слову поднять сотни вооружённых кочевников."
      }
    ],
    "rules": [
      {
        "id": "rule-fnff-core",
        "title": "Перестрелка в пятницу вечером (ПВПВ / Базовый бой)",
        "subsection": "Бой и Оружие (ПВПВ)",
        "book": "CP20",
        "summary": "Базовые формулы попадания, дистанций, локаций попаданий 1d10, Модификатора Телосложения (МТЕЛ) и Спасбросков.",
        "content": "В боевой системе «Перестрелка в пятницу вечером» (ПВПВ) каждый боевой раунд длится 3,2 секунды. Формула попадания: 1d10 + РЕФ + Навык оружия + ТО ≥ СЛ дистанции (В упор: 10, Ближняя: 15, Средняя: 20, Дальняя: 25, Экстремальная: 30).\n\nЛокации попадания (1d10): 1 — Голова (урон ×2), 2–4 — Торс, 5 — Правая рука, 6 — Левая рука, 7–8 — Правая нога, 9–10 — Левая нога.\nМТЕЛ: Очень слабый (0), Слабый (-1), Средний (-2), Сильный (-3), Очень сильный (-4), Суперчеловек (-5)."
      },
      {
        "id": "rule-recoil-morale",
        "title": "Отдача (ТЕЛО Мин), Автоогонь и Храбрость под огнём",
        "subsection": "Бой и Оружие (ПВПВ)",
        "book": "BH / LU",
        "summary": "Расчёт минимального ТЕЛА для оружия, стрельба очередями, огневые коридоры, пасущийся огонь и проверки Морали (КРУТ).",
        "content": "Если ТЕЛО стрелка ниже ТЕЛО Мин оружия (разница — Ф-раз), скорострельность падает до 1/2 СКО, а ТО снижается на -2 за каждое очко Ф-раз. Требуется бросок (ТЕЛО + Силовая подготовка + 1d10) против (ТЕЛО Мин × 2), иначе рука получает урон.\nКиберрука считается за ТЕЛО 12 для пистолетов, а Силовой Экзо-Костюм — за ТЕЛО 18."
      },
      {
        "id": "rule-cyberpsychosis",
        "title": "Киберпсихоз, Обслуживание имплантов и Солёная вода",
        "subsection": "Кибернетика и Медицина",
        "book": "CP20 / SOF / Chr3",
        "summary": "Таблица 1d10 форм киберпсихоза при ЭМП ≤ 2, техосмотр раз в 6 месяцев и программы терапии.",
        "content": "При падении Эмпатии до 2 и ниже проявляется киберпсихоз (1d10): 1–3 Слепая ярость к людям; 4 Кататония; 5 Одержимость; 6 Паранойя; 7 Заблуждение (бессмертие/фантазия); 8 Гиперактивность; 9 Фобия; 10 Шизофрения (распад на 1d6 личностей)."
      }
    ]
  }
};
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ ОРУЖИЯ В DATABASE.JS (БЕЗ ПЕРЕЗАПИСИ СУЩЕСТВУЮЩИХ КАРТОЧЕК)
// Пакет №1: Ближний бой, Луки, Арбалеты и Экзотическое оружие (стр. 2–10)    оружие
// ============================================================================
(function appendWeaponsPack1() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.weapons)) extDb.weapons = [];
  if (!Array.isArray(extCats.weapons)) extCats.weapons = [];

  const newWeaponCategories = [
    "Холодное и рукопашное оружие",
    "Луки и арбалеты",
    "Экзотическое оружие"
  ];
  newWeaponCategories.forEach(c => {
    if (!extCats.weapons.includes(c)) extCats.weapons.push(c);
  });

  const PACK_1_ITEMS = [
    // --- ХОЛОДНОЕ И РУКОПАШНОЕ ОРУЖИЕ (MELEE WEAPONS, стр. 2-4) ---
    {
      id: "bsw-mel-club",
      name: "Дубинка (Club)",
      origName: "Club",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Плащ", dos: "Обы",
      damage: "1d6", ammo: "Дробящее", mag: "—", sko: "—", nad: "—", range: "Ближний бой", cost: "Бесплатно", book: "CP20",
      desc: "Стандартное мускульное ударно-дробящее оружие. Получает бонус к урону в ближнем бою от типа Телосложения (ТЕЛО)."
    },
    {
      id: "bsw-mel-knife",
      name: "Нож (Knife)",
      origName: "Knife",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Кар", dos: "Обы",
      damage: "1d6", ammo: "ББ (мягк.)", mag: "—", sko: "—", nad: "—", range: "Ближний / Метание", cost: "1–20 eb", book: "CP20",
      desc: "Стандартный боевой или бытовой нож. Как и всё клинковое оружие, имеет бронебойный эффект (ББ) против мягкой брони. Сбалансирован для метания."
    },
    {
      id: "bsw-mel-sword",
      name: "Меч (Sword)",
      origName: "Sword",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Плащ", dos: "Обы",
      damage: "2d6+2", ammo: "ББ (мягк.)", mag: "—", sko: "—", nad: "—", range: "Ближний бой", cost: "20–200 eb", book: "CP20",
      desc: "Классический стальной меч или катана. Имеет бронебойность (ББ) против мягкой брони и получает бонус к урону от ТЕЛА."
    },
    {
      id: "bsw-mel-axe",
      name: "Топор (Axe)",
      origName: "Axe",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "-1", skr: "Нет", dos: "Обы",
      damage: "2d6+3", ammo: "ББ (мягк.)", mag: "—", sko: "—", nad: "—", range: "Ближний бой", cost: "20 eb", book: "CP20",
      desc: "Тяжёлый рубящий топор. Из-за веса имеет ТО -1, но наносит мощный рубящий урон с бронебойностью (ББ) против мягкой брони."
    },
    {
      id: "bsw-mel-nunchaku",
      name: "Нунчаки / Тонфа (Nunchaku/Tonfa)",
      origName: "Nunchaku/Tonfa",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Плащ", dos: "Обы",
      damage: "3d6 / 2d6", ammo: "Дробящее", mag: "—", sko: "—", nad: "—", range: "Ближний бой", cost: "15 eb", book: "CP20",
      desc: "Восточное ударное оружие: нунчаки наносят 3d6 урона, тонфа — 2d6 урона. Прибавляется бонус урона от ТЕЛА."
    },
    {
      id: "bsw-mel-naginata",
      name: "Нагината (Naginata)",
      origName: "Naginata",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Нет", dos: "Мал",
      damage: "3d6", ammo: "ББ (мягк.)", mag: "—", sko: "—", nad: "—", range: "2м", cost: "100 eb", book: "CP20",
      desc: "Традиционная японская глефа на длинном древке. Дистанция поражения 2 метра, бронебойный эффект (ББ) против мягкой брони."
    },
    {
      id: "bsw-mel-shuriken",
      name: "Сюрикен (Shuriken)",
      origName: "Shuriken",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Кар", dos: "Обы",
      damage: "1d6/3 (+яд)", ammo: "ББ (мягк.)", mag: "—", sko: "—", nad: "—", range: "Метание", cost: "2–3 eb", book: "CP20",
      desc: "Метательные лезвия и звёздочки. Легко прячутся в кармане, часто смазываются ядом или снотворным составом."
    },
    {
      id: "bsw-mel-switchblade",
      name: "Выкидной нож (Switchblade)",
      origName: "Switchblade",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Кар", dos: "Обы",
      damage: "1d6/2", ammo: "ББ (мягк.)", mag: "—", sko: "—", nad: "—", range: "Ближний бой", cost: "15 eb", book: "CP20",
      desc: "Карманный нож с пружинным выбросом клинка. Бронебойный (ББ) против мягкой брони."
    },
    {
      id: "bsw-mel-knuckles",
      name: "Кастет (Brass Knuckles)",
      origName: "Brass Knuckles",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Кар", dos: "Обы",
      damage: "1d6+2", ammo: "Дробящее", mag: "—", sko: "—", nad: "—", range: "Ближний бой", cost: "10 eb", book: "CP20",
      desc: "Металлическая накладка на пальцы для усиления кулачного удара. Получает бонус к урону от ТЕЛА."
    },
    {
      id: "bsw-mel-sledge",
      name: "Кувалда (Sledgehammer)",
      origName: "Sledgehammer",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "-2", skr: "Нет", dos: "Обы",
      damage: "4d6", ammo: "Дробящее", mag: "—", sko: "—", nad: "—", range: "Ближний бой", cost: "20 eb", book: "CP20",
      desc: "Двуручный тяжёлый молот. Штраф к точности -2 компенсируется сокрушительным уроном 4d6."
    },
    {
      id: "bsw-mel-chainsaw",
      name: "Бензопила (Chainsaw)",
      origName: "Chainsaw",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "-3", skr: "Нет", dos: "Обы",
      damage: "4d6*", ammo: "ББ (мягк.)", mag: "—", sko: "—", nad: "—", range: "2м", cost: "80 eb", book: "CP20",
      desc: "Цепная мотопила. Действует как ББ против мягкой брони и разрушает её на 2 единицы ОС за каждое попадание."
    },
    {
      id: "bsw-mel-bayonet",
      name: "Штык-нож / Нож выживания (Bayonet/Survival Knife)",
      origName: "Bayonet/Survival Knife",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Кур", dos: "Обы",
      damage: "1d6 ББ", ammo: "ББ", mag: "—", sko: "—", nad: "—", range: "Ближний бой", cost: "50 eb", book: "NeoTribes",
      desc: "Аналог KCB-70 или штык-ножа M9. Включает точильный камень в ножнах, отвёртку, кусачки для проволоки, компас на навершии, открывалку и пилу на обухе. В водонепроницаемой (до 12 м) полой рукояти спрятаны 3 м лески с 2 крючками, 10 непромокаемых спичек и пакетик оружейного масла. Крепится к любой винтовке или ПП со стандартным приливом под штык."
    },
    {
      id: "bsw-mel-etool",
      name: "Сапёрная лопатка (Entrenching Tool)",
      origName: "Entrenching Tool",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Плащ", dos: "Обы",
      damage: "2d6 ББ", ammo: "ББ (все виды)", mag: "—", sko: "—", nad: "—", range: "Ближний бой", cost: "50 eb", book: "NeoTribes",
      desc: "Складной армейский инструмент из металлических сплавов, сочетающий лопату, топор и пилу (складывается до размеров крупной книги). Благодаря конструкции с киркообразным боем обладает бронебойным эффектом (ББ) даже против жёсткой брони!"
    },
    {
      id: "bsw-mel-excalibur",
      name: "Полицейская дубинка Excalibur Nightstick",
      origName: "Excalibur Nightstick",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Кур", dos: "Мал",
      damage: "2d6+3 / Шок / Газ", ammo: "Тазер (8) / Газ (6)", mag: "8 / 6", sko: "1", nad: "ОБ / ОН", range: "Ближний бой", cost: "80 eb", book: "PAC",
      desc: "Полицейская тонфа XXI века из сверхпрочной промышленной керамики. Помимо мощного удара (2d6+3, НАД: ОН), в боевой конец встроен электрошокер-тазер (8 зарядов, НАД: ОБ, перезарядка от розетки) или скрытый распылитель слезоточивого газа Mace (6 доз, упаковка из 6 баллончиков стоит 5 eb). Спусковой крючок расположен на боковой рукояти."
    },
    {
      id: "bsw-mel-chainknife",
      name: "Цепной нож IMI «ChainKnife»",
      origName: "IMI \"ChainKnife\"",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Кур", dos: "Мал",
      damage: "2d6+1", ammo: "Батарея (2 часа)", mag: "—", sko: "—", nad: "ОТ", range: "Ближний бой", cost: "120 eb", book: "Chr2",
      desc: "Разработан и производится в Израиле, широко применяется агентами Моссада. Ручная боевая микро-цепная пила в форм-факторе ножа выживания с питанием от батареи (2 часа работы). Разгрызает броню как марлю: любая броня считается как 1/2 ОС, а мягкая броня теряет по 2 ОС за каждое попадание!"
    },
    {
      id: "bsw-mel-powersword",
      name: "Энергомеч Kendachi M-33 Powersword",
      origName: "Kendachi M-33 Powersword",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Плащ", dos: "Ред",
      damage: "4d6", ammo: "Вибро-монокристалл", mag: "—", sko: "—", nad: "ОБ", range: "Ближний бой", cost: "860 eb", book: "Chr1",
      desc: "Сочетает мономолекулярный кристаллический клинок Kendachi с виброприводом в рукояти (2000 вибраций в минуту). Мягкая броня считается как 1/4 ОС, жёсткая — как 1/2 ОС. Активируется при обхвате рукояти, но требует 1 боевой раунд на разогрев. Тяжёлый (3 кг) и хрупкий: ломается при критическом промахе и разлетается при парировании на 5 и меньше на 1d10."
    },
    {
      id: "bsw-mel-monotwo",
      name: "Парные моноклинки Kendachi Mono-Two",
      origName: "Kendachi Mono-Two",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "+1", skr: "Кур / Нет", dos: "Мал / Ред",
      damage: "2d6 / 4d6", ammo: "Орбитальный кристалл", mag: "—", sko: "—", nad: "ОТ", range: "Ближний бой", cost: "650 / 700 eb", book: "Chr1",
      desc: "Улучшенная пара моноклинков (короткий 2d6 и длинный 4d6), армированная орбитальным кристаллом: не ломается при критическом промахе, а при парировании раскалывается только на 1–2 на 1d10. За +50 eb в рукоять встраивается лазерная подсветка лезвия (эффект «светового меча» разных цветов)."
    },
    {
      id: "bsw-mel-monokatana",
      name: "Монокатана Kendachi Monokatana®",
      origName: "Kendachi Monokatana",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "+1", skr: "Нет", dos: "Ред",
      damage: "4d6", ammo: "Монокристалл", mag: "—", sko: "—", nad: "ОТ", range: "Ближний бой", cost: "600 eb", book: "CP20",
      desc: "Версия моноклинка длиной с меч. Напоминает высокотехнологичную катану с молочно-полупрозрачным лезвием. Мягкая броня защищает на 1/3 ОС, жёсткая — на 2/3 ОС. Версия в виде нагинаты стоит на 100 eb дороже."
    },
    {
      id: "bsw-mel-monoknife",
      name: "Мононож Kendachi Monoknife®",
      origName: "Kendachi Monoknife",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "+1", skr: "Кар", dos: "Мал",
      damage: "2d6", ammo: "Монокристалл", mag: "—", sko: "—", nad: "ОТ", range: "Ближний бой", cost: "200 eb", book: "CP20",
      desc: "Невероятно острый однокристаллический клинок в японском стиле «танто». Против любого монооружия мягкая броня считается как 1/3 ОС, а жёсткая — как 2/3 ОС."
    },
    {
      id: "bsw-mel-monocane",
      name: "Трость-мономеч Kendachi Monosword Cane",
      origName: "Kendachi Monosword Cane",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "+1", skr: "Плащ", dos: "Мал",
      damage: "3d6", ammo: "Монокристалл", mag: "—", sko: "—", nad: "ОТ", range: "Ближний бой", cost: "255 eb", book: "SOF / SOF2",
      desc: "Прогулочная трость под синтетическое красное дерево со скрытым внутри 55-см моноклинком (освобождается поворотом рукояти влево). Раскалывается при выпадении 4 и меньше на 1d10 при критическом промахе или парировании. Мягкая броня 1/3 ОС, жёсткая 2/3 ОС."
    },
    {
      id: "bsw-mel-monowhip",
      name: "Монокнут Kendachi Monowhip",
      origName: "Kendachi Monowhip",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Кур", dos: "Мал",
      damage: "2d6", ammo: "Мононить (до 4 м)", mag: "—", sko: "—", nad: "ОБ", range: "1–3м", cost: "350 eb", book: "Chr2",
      desc: "Эргономичная рукоять с катушкой мономолекулярной нити и грузиком на конце. Выдвигается до 4 м и сматывается кнопкой. Используется как удавка, резак или хлыст. Наносит 2d6 урона (двойной урон при критическом успехе)."
    },
    {
      id: "bsw-mel-springknife",
      name: "Пружинный нож Mystic Technologies Spring Knife",
      origName: "Mystic Technologies Spring Knife",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Кар", dos: "Обы",
      damage: "1d6", ammo: "Выстреливаемое лезвие", mag: "1", sko: "1", nad: "ОБ", range: "Ближний / 5м", cost: "125 eb", book: "Chr2",
      desc: "Выглядит как обычный нож выживания, но лезвие может выстреливать вперёд за счёт мощной пружины на 5 метров (урон 1d6). Перезарядка занимает 2 раунда."
    },
    {
      id: "bsw-mel-nunblade",
      name: "Нунчаки-клинок Mystic Technologies Nunchaku/Blade",
      origName: "Mystic Technologies Nunchaku/Blade",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Плащ", dos: "Обы",
      damage: "1d6+1 (2d6+1) / 3d6", ammo: "Жезл-трансформер", mag: "—", sko: "—", nad: "ОБ", range: "Ближний бой", cost: "200 eb", book: "SOF / SOF2",
      desc: "60-см жезл с выдвижным 30-см клинком (урон 1d6+1 одной рукой, 2d6+1 двумя руками). Нажатием кнопки разделяется на пару нунчак (нельзя использовать режим нунчак при выдвинутом лезвии)."
    },
    {
      id: "bsw-mel-smartwhip",
      name: "Умный кнут кочевников (Nomad Smartwhip)",
      origName: "Nomad Smartwhip",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Кур", dos: "Обы",
      damage: "1d6+2 + ТЕЛО", ammo: "Миомеры + Нейролинк", mag: "—", sko: "—", nad: "ОБ", range: "1–3м", cost: "600 eb", book: "NeoTribes",
      desc: "Кнут с миомерными волокнами и нейроинтерфейсом. По мысленной команде отдельные участки кнута мгновенно становятся гибкими или твёрдыми как дубина. Требует разъёмов интерфейса и Machine Link."
    },
    {
      id: "bsw-mel-spm1",
      name: "Боевая перчатка SPM-1 Battleglove",
      origName: "SPM-1 Battleglove",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "-2", skr: "Нет", dos: "Мал",
      damage: "3d6 / 2d6", ammo: "3 слота киберруки", mag: "—", sko: "—", nad: "ОТ", range: "Ближний бой", cost: "900 eb", book: "CP20",
      desc: "Крупная боевая рукавица на кисть и предплечье. Наносит 3d6 урона сдавливанием, 2d6 ударом кулака и содержит 3 внутренних слота под любые стандартные опции киберруки."
    },
    {
      id: "bsw-mel-spawnblade",
      name: "Раскрывающийся нож SlamDance Spawnblade",
      origName: "SlamDance, Inc. Spawnblade",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0 / +1", skr: "Кур", dos: "Мал",
      damage: "1d6+ТЕЛО (+1d6+3)", ammo: "Металл с памятью", mag: "—", sko: "—", nad: "ОБ", range: "Ближний / Метание", cost: "450 eb", book: "Chr2",
      desc: "Боевой метательный нож из металла с памятью формы. При попадании, наносящем более 4 очков урона (с бонусом ТЕЛА, до МТ) и пробивающем броню, лезвие веером раскрывается на 50 градусов внутри тела жертвы, нанося ещё 1d6+3 урона мимо брони! Безопасное извлечение требует проверки Медтехники СЛ 20+, иначе жертва получает ещё 1d6/2 урона."
    },
    {
      id: "bsw-mel-machete",
      name: "Мачете / Рабочий тесак (Utility Sword/Machete)",
      origName: "Utility Sword/Machete",
      category: "Холодное и рукопашное оружие",
      typeCode: "ХОЛ", to: "0", skr: "Плащ", dos: "Обы",
      damage: "1d6+3", ammo: "ББ (мягк.)", mag: "—", sko: "—", nad: "—", range: "Ближний бой", cost: "60 eb", book: "NeoTribes",
      desc: "Сельскохозяйственный инструмент и оружие последнего шанса кочевых племён (например, мачете клана Альдекальдо). ББ против мягкой брони."
    },

    // --- ЛУКИ И АРБАЛЕТЫ (ARCHERY BOWS & CROSSBOWS, стр. 4-5) ---
    {
      id: "bsw-bow-arasaka",
      name: "Складной полулук Arasaka Arms Half-Bow",
      origName: "Arasaka Arms Half-Bow",
      category: "Луки и арбалеты",
      typeCode: "ЛУК", to: "-1", skr: "Плащ", dos: "Мал",
      damage: "3d6", ammo: "Стрелы (ББ как нож)", mag: "12", sko: "1", nad: "ОТ", range: "100м", cost: "100 eb", book: "SOF / SOF2",
      desc: "Короткий рекурсивный лук, разбирающийся на две половины. Изготовлен из композитов, не обнаруживаемых сканерами."
    },
    {
      id: "bsw-bow-bearcat",
      name: "Лук Eagletech «Bearcat» Self Bow",
      origName: "Eagletech \"Bearcat\" Self Bow",
      category: "Луки и арбалеты",
      typeCode: "ЛУК", to: "+1", skr: "Нет", dos: "Мал",
      damage: "6d6", ammo: "Стрелы (ББ как нож)", mag: "12", sko: "1", nad: "ОТ", range: "150м", cost: "500 eb", book: "SOF / SOF2",
      desc: "Разборный рекурсивный лук из сверхпрочных композитов с натяжением 60 кг без системы блоков. После 1 раунда удержания натянутой тетивы стрелок обязан проходить проверки Силы (Strength Feat)."
    },
    {
      id: "bsw-bow-tigercat",
      name: "Блочный лук Eagletech «Tigercat»",
      origName: "Eagletech \"Tigercat\" Compound Bow",
      category: "Луки и арбалеты",
      typeCode: "ЛУК", to: "+1", skr: "Нет", dos: "Мал",
      damage: "6d6", ammo: "Стрелы (ББ как нож)", mag: "12", sko: "1", nad: "ОТ", range: "150м", cost: "500 eb", book: "SOF / SOF2",
      desc: "Профессиональный блочный лук с усилием натяжения 60 кг (система полиспастов снижает усилие удержания до 30 кг). Оснащён компьютеризированным прицелом и гиростабилизацией."
    },
    {
      id: "bsw-bow-tomcat",
      name: "Блочный лук Eagletech «Tomcat»",
      origName: "Eagletech \"Tomcat\" Compound Bow",
      category: "Луки и арбалеты",
      typeCode: "ЛУК", to: "0", skr: "Нет", dos: "Обы",
      damage: "4d6", ammo: "Стрелы (ББ как нож)", mag: "12", sko: "1", nad: "ОТ", range: "150м", cost: "150 eb", book: "CP20",
      desc: "Гиростабилизированный блочный лук с натяжением 40 кг (удержание снижено до 20 кг). Бесшумное и смертоносное оружие."
    },
    {
      id: "bsw-bow-wildcat",
      name: "Спортивный лук Eagletech «Wildcat»",
      origName: "Eagletech \"Wildcat\" Sport Bow",
      category: "Луки и арбалеты",
      typeCode: "ЛУК", to: "0", skr: "Нет", dos: "Отл",
      damage: "3d6", ammo: "Стрелы (ББ как нож)", mag: "12", sko: "1", nad: "ОТ", range: "100м", cost: "35 eb", book: "SOF / SOF2",
      desc: "Простой, дешёвый и популярный спортивный рекурсивный лук с усилием натяжения 20 кг."
    },
    {
      id: "bsw-xbow-arbelest",
      name: "Тяжёлый арбалет Eagletech «Arbelest»",
      origName: "Eagletech \"Arbelest\" Crossbow",
      category: "Луки и арбалеты",
      typeCode: "АРБ", to: "0", skr: "Нет", dos: "Мал",
      damage: "5d6", ammo: "Болты (ББ как нож)", mag: "12", sko: "1/2", nad: "ОТ", range: "150м", cost: "500 eb", book: "SOF / SOF2",
      desc: "Арбалет с натяжением 60 кг, взводимый встроенной лебёдкой (СКО 1/2). Персонажи с киберрукой и внутренним укреплением (мышечно-костное плетение, нагрудная бронепластина) могут перезаряжать его вручную, повышая СКО до 1. По габаритам на 50% массивнее штурмовой винтовки."
    },
    {
      id: "bsw-xbow-handbow",
      name: "Пистолетный арбалет Eagletech «Handbow»",
      origName: "Eagletech \"Handbow\" Crossbow",
      category: "Луки и арбалеты",
      typeCode: "АРБ", to: "-1", skr: "Кур", dos: "Отл",
      damage: "1d6+2", ammo: "Мини-болты", mag: "12", sko: "1", nad: "ОТ", range: "25м", cost: "75 eb", book: "SOF / SOF2",
      desc: "Ручной мини-арбалет с натяжением 7 кг. За 300 eb может быть встроен внутрь киберруки с автоматом заряжания (занимает все слоты опций киберруки)."
    },
    {
      id: "bsw-xbow-scorpion",
      name: "Осадный арбалет Eagletech «Scorpion»",
      origName: "Eagletech \"Scorpion\" Crossbow",
      category: "Луки и арбалеты",
      typeCode: "АРБ", to: "0", skr: "Нет", dos: "Мал",
      damage: "7d6", ammo: "Тяжёлые болты", mag: "6", sko: "1/2", nad: "ОТ", range: "200м", cost: "1,500 eb", book: "SOF / SOF2",
      desc: "Гигантский арбалет с натяжением 120 кг и электролебёдкой, размером с 20-мм пушку Barrett-Arasaka! Вручную (СКО 1) его могут взводить только полные киборги или обладатели двух киберрук и укрепления позвоночника. Любая цель при попадании обязана пройти проверку Акробатики 20+, иначе её сбивает с ног."
    },
    {
      id: "bsw-xbow-stryker",
      name: "Спортивный арбалет Eagletech «Stryker»",
      origName: "Eagletech \"Stryker\" Crossbow",
      category: "Луки и арбалеты",
      typeCode: "АРБ", to: "-1", skr: "Нет", dos: "Обы",
      damage: "3d6+3", ammo: "Болты (ББ как нож)", mag: "12", sko: "1", nad: "ОТ", range: "50м", cost: "220 eb", book: "CP20",
      desc: "Спортивно-охотничий арбалет из пластика и биметалла с усилием натяжения 20 кг, взводимый вручную."
    },
    {
      id: "bsw-xbow-nomad",
      name: "Ручной арбалет кочевников (Nomad Hand Crossbow)",
      origName: "Nomad Hand Crossbow",
      category: "Луки и арбалеты",
      typeCode: "АРБ", to: "0", skr: "Нет", dos: "Ред",
      damage: "1d6+1 ББ", ammo: "Бронебойные болты", mag: "1", sko: "1", nad: "ОБ", range: "20м", cost: "100 eb", book: "NeoTribes",
      desc: "Кустарный арбалет кочевников для пробития шин и отвлечения водителей. Бронебойный (ББ), но прошедший через броню урон НЕ делится пополам! Может крепиться ремнями к предплечью со спуском от кольца на пальце."
    },

    // --- ЭКЗОТИЧЕСКОЕ ОРУЖИЕ (EXOTIC WEAPONS, стр. 5-10) ---
    {
      id: "bsw-ex-apex",
      name: "Автономная турель APEX Mobile Point Defense System",
      origName: "APEX Mobile Point Defense System",
      category: "Экзотическое оружие",
      typeCode: "ТЯЖ", to: "Авто", skr: "Нет", dos: "Ред",
      damage: "2d6+4", ammo: "9мм Long Caseless", mag: "400", sko: "40", nad: "ОБ", range: "200м", cost: "10,000 eb", book: "Chr1",
      desc: "Переносная (20 кг) автоматическая защитная турель с 4 датчиками движения (обзор 360°, дальность 200 м) и пультом ДУ (до 1000 м). Автономность батареи 50 часов (ОС 5, ОСТ 20). Шанс попадания: 10% (на 150+ м), 20% (75 м), 30% (35 м), 40% (15 м); при успехе попадает 1d10 пуль."
    },
    {
      id: "bsw-ex-nauseator",
      name: "Ультразвуковой подавитель Arasaka «Nauseator»",
      origName: "Arasaka \"Nauseator\" Riot-Control Device",
      category: "Экзотическое оружие",
      typeCode: "ЭКЗ", to: "0", skr: "Нет", dos: "Мал",
      damage: "Ультразвук (тошнота)", ammo: "Генератор поля", mag: "10", sko: "1", nad: "ОБ", range: "15м (конус 25м)", cost: "1,900 eb", book: "Chr2",
      desc: "Установка подавления беспорядков (0.6x1.7 м), накрывающая конус 15x25 м ультразвуком. Через 2 раунда в зоне все цели проходят проверку ТЕЛА 25+: при успехе -4 ко всем действиям на 1d6 раундов; при провале на 1–3 очка РЕФ и ПЕР падают до 1 на 1d6 раундов; при провале на 4+ — потеря сознания на 1d6 минут. Level Damper и Sound Editing дают иммунитет."
    },
    {
      id: "bsw-ex-restraint",
      name: "Пистолет-ловчий Arasaka Restraint Caster",
      origName: "Arasaka Restraint Caster",
      category: "Экзотическое оружие",
      typeCode: "П", to: "-1", skr: "Кур", dos: "Мал",
      damage: "Захват (15мм полимер)", ammo: "15мм полимерные капсулы", mag: "4", sko: "1", nad: "ОБ", range: "25м", cost: "200 eb", book: "PAC",
      desc: "Крупный пистолет, стреляющий капсулами реактивного полимера. На воздухе полимер превращается в сверхпрочные липкие нити, обездвиживающие цель (чтобы порвать, нужна Очень Сложная проверка ТЕЛА). Растворяется сам через 20±1d10 минут или смывается спреем-растворителем (10 eb)."
    },
    {
      id: "bsw-ex-wxa",
      name: "Компьютеризированная турель Arasaka WXA",
      origName: "Arasaka WXA Computer-Aimed Weapon",
      category: "Экзотическое оружие",
      typeCode: "ТЯЖ", to: "0 (10+1d10)", skr: "Нет", dos: "Ред",
      damage: "6d6+2", ammo: "7.62мм (лента)", mag: "500", sko: "20", nad: "ОТ", range: "400м", cost: "3,000 eb", book: "Corp1",
      desc: "Стационарный 50-кг пулемёт с компьютерным наведением по датчикам тепла и движения в секторе от 10° до 360°. Распознаёт своих по радиомаячкам «свой-чужой» (IFF). Бросок попадания турели: 10 + 1d10. В цену входят пульт монитора и короб на 500 патронов."
    },
    {
      id: "bsw-ex-avante",
      name: "Иглострел Avante P-1135 Needlegun",
      origName: "Avante P-1135 Needlegun",
      category: "Экзотическое оружие",
      typeCode: "П", to: "0", skr: "Кар", dos: "Мал",
      damage: "Наркотик / Яд", ammo: "Иглы с препаратами", mag: "15", sko: "2", nad: "ОБ", range: "40м", cost: "200 eb", book: "CP20",
      desc: "Лёгкий пластиковый пневматический пистолет на сжатом воздухе, стреляющий иглами с препаратами, снотворным или биотоксинами."
    },
    {
      id: "bsw-ex-dynatas",
      name: "Контактный шокер Dynatech Hand Taser",
      origName: "Dynatech Industries Hand Taser",
      category: "Экзотическое оружие",
      typeCode: "ЭКЗ", to: "0", skr: "Кар", dos: "Отл",
      damage: "Шок (Stun -2)", ammo: "Батарея", mag: "12", sko: "1", nad: "ОТ", range: "1м", cost: "50 eb", book: "DS (Deep Space)",
      desc: "Самый распространённый ручной электрошокер на орбите. Требует касания к открытой коже: жертва проходит спасбросок от Шока со штрафом -2, иначе теряет сознание на 1d10 минут (даже при успехе РЕФ и КРУТ делятся пополам на 1d10 минут)."
    },
    {
      id: "bsw-ex-squirt",
      name: "Водомётный пистолет Enertex AKM Power Squirt",
      origName: "Enertex AKM Power Squirt",
      category: "Экзотическое оружие",
      typeCode: "П", to: "-2", skr: "Кур", dos: "Обы",
      damage: "Кислота / Контактный яд", ammo: "Жидкость", mag: "50", sko: "1", nad: "ОТ", range: "10м", cost: "15 eb", book: "CP20",
      desc: "Моторизованный водяной пистолет. Перестаёт быть смешным, когда его заправляют кислотой (сжигает броню) или препаратами в растворителе ДМСО, впитывающимися прямо через кожу."
    },
    {
      id: "bsw-ex-kdragon",
      name: "Ручной огнемёт Kendachi Dragon",
      origName: "Kendachi Dragon",
      category: "Экзотическое оружие",
      typeCode: "ЭКЗ", to: "0", skr: "Кур", dos: "Мал",
      damage: "2d6 (1-й р.) / 1d6 (2-й р.)", ammo: "Пирогель", mag: "4", sko: "1", nad: "ОБ", range: "4м", cost: "660 eb", book: "Chr1",
      desc: "Компактный наручный огнемёт (требует 1 раунд на активацию запала). Выбрасывает 4-метровую струю пламени, нанося 2d6 урона по 2 случайным зонам тела в первый раунд и 1d6 во второй. Защищает только жёсткая броня или мягкая с ОС 15+ (мягкая броня теряет по 2 ОС)."
    },
    {
      id: "bsw-ex-monowire",
      name: "Мононить Kendachi Monowire (ловушка)",
      origName: "Kendachi Monowire",
      category: "Экзотическое оружие",
      typeCode: "ЭКЗ", to: "—", skr: "Кар", dos: "Мал",
      damage: "3d6 (броня x1/3)", ammo: "Мономолекулярная нить", mag: "—", sko: "—", nad: "ОТ", range: "По метражу", cost: "60 eb / метр", book: "Chr2",
      desc: "Мономолекулярная нить со специальными синтетическими шариками-держателями на концах для установки смертоносных растяжек на уровне шеи или лодыжек. Наносит 3d6 режущего урона, броня защищает лишь на 1/3 ОС."
    },
    {
      id: "bsw-ex-sliver",
      name: "Осколочный пистолет Malorian Arms Sliver Gun",
      origName: "Malorian Arms Sliver Gun",
      category: "Экзотическое оружие",
      typeCode: "П", to: "0", skr: "Кур", dos: "Мал",
      damage: "2d6 осколков по 1d6/2", ammo: "Поликерамический блок", mag: "7", sko: "2", nad: "НН", range: "40м", cost: "375 eb", book: "Chr1",
      desc: "Бесшумное оружие ближнего боя (не громче электрической зубной щётки!). Вращающийся маховик срезает с керамического блока рой острых 4-см осколков на скорости 360 м/с: каждое попадание наносит 2d6 осколков по 1d6/2 урона каждый (бронебойность как у ножа). Батареи (7 eb) хватает на 18 минут. Версия для киберруки стоит 550 eb (ПЧ 1d6+2)."
    },
    {
      id: "bsw-ex-lasercannon",
      name: "Боевой лазер Militech Electronics LaserCannon",
      origName: "Militech Electronics LaserCannon",
      category: "Экзотическое оружие",
      typeCode: "ВИН", to: "0", skr: "Нет", dos: "Ред",
      damage: "1d6–5d6", ammo: "Энергоячейка (10 ед.)", mag: "10", sko: "2", nad: "НН", range: "200м", cost: "8,000 eb", book: "CP20",
      desc: "Редкая военная лазерная винтовка Militech. Позволяет регулировать мощность луча от 1d6 до 5d6 за выстрел (расходуя соответствующее число зарядов батареи)."
    },
    {
      id: "bsw-ex-miltaser",
      name: "Дротиковый тазер Militech Electronics Taser",
      origName: "Militech Electronics Taser",
      category: "Экзотическое оружие",
      typeCode: "П", to: "-1", skr: "Кур", dos: "Обы",
      damage: "Шок (Stun)", ammo: "Проводные дротики", mag: "10", sko: "1", nad: "ОБ", range: "10м", cost: "60 eb", book: "CP20",
      desc: "Электрошокер размером с фонарик, выстреливающий пару дротиков на проводах. При попадании в неэкранированную металлическую киберруку имеет 20% шанс закоротить и отключить её."
    },
    {
      id: "bsw-ex-miltaser2",
      name: "Контактный шокер Militech Taser II™",
      origName: "Militech Electronics Taser II",
      category: "Экзотическое оружие",
      typeCode: "ЭКЗ", to: "0", skr: "Кар", dos: "Обы",
      damage: "Шок (Stun -1)", ammo: "Разряд 15 000 В", mag: "4", sko: "2", nad: "ОТ", range: "1м", cost: "100 eb", book: "Chr2",
      desc: "Карманный контактный электрошокер на 15 000 вольт. Цель при касании проходит спасбросок от Шока с дополнительным штрафом -1."
    },
    {
      id: "bsw-ex-mitstaser",
      name: "Тазер безопасности Mitsubishi Taser",
      origName: "Mitsubishi Taser",
      category: "Экзотическое оружие",
      typeCode: "П", to: "0", skr: "Кур", dos: "Мал",
      damage: "Шок (Stun -1)", ammo: "Дротики (пробив. 5 ОС)", mag: "12", sko: "1", nad: "ОБ", range: "5м", cost: "100 eb", book: "DS (Deep Space)",
      desc: "Штатный дротиковый тазер службы безопасности японских орбитальных станций. Дротики пробивают до 5 ОС мягкой брони; цель делает спасбросок от Шока со штрафом -1, иначе вырубается на 2d6 минут."
    },
    {
      id: "bsw-ex-arrowgun",
      name: "Стреломётное ружьё Mystic Technologies Arrow Gun",
      origName: "Mystic Technologies Arrow Gun",
      category: "Экзотическое оружие",
      typeCode: "ВИН", to: "+1", skr: "Кур (Плащ)", dos: "Обы",
      damage: "3d6 (ББ как нож)", ammo: "35-см алюминиевые стрелы", mag: "1", sko: "1", nad: "ОБ", range: "70м", cost: "1,000 eb", book: "SOF / SOF2",
      desc: "Бесшумное ружьё со складным прикладом (с разложенным прикладом СКР: Плащ), стреляющее 35-см стрелами с карбоглассовыми наконечниками. Поставляется в водонепроницаемом кейсе (ОС 10) с 8 стрелами и креплением под прицелы."
    },
    {
      id: "bsw-ex-wombat",
      name: "Пневмопистолет Nelspot «Wombat» Airpistol",
      origName: "Nelspot \"Wombat\" Airpistol",
      category: "Экзотическое оружие",
      typeCode: "П", to: "-1", skr: "Кур", dos: "Обы",
      damage: "Кислота / Газ / Краска", ammo: "Пейнтбольные шарики", mag: "20", sko: "2", nad: "НН", range: "40м", cost: "200 eb", book: "CP20",
      desc: "Адский пейнтбольный пистолет, стреляющий желатиновыми шариками с кислотой, контактным ядом, сонным газом или краской."
    },
    {
      id: "bsw-ex-boomerang",
      name: "Боевой бумеранг кочевников (Nomad Boomerang)",
      origName: "Nomad Boomerang",
      category: "Экзотическое оружие",
      typeCode: "ЭКЗ", to: "-1", skr: "Плащ", dos: "Мал",
      damage: "2d6 + ТЕЛО", ammo: "Метательное", mag: "1", sko: "1", nad: "ОТ", range: "30м", cost: "20 eb", book: "NeoTribes",
      desc: "Тяжёлый невозвращающийся боевой бумеранг с укороченным заточенным плечом для проламывания черепов. При броске получает бонус урона от типа Телосложения (ТЕЛО)."
    },
    {
      id: "bsw-ex-pneubolt",
      name: "Пневматический болтомёт кочевников (Nomad Pneumatic Bolt Gun)",
      origName: "Nomad Pneumatic Bolt Gun",
      category: "Экзотическое оружие",
      typeCode: "ЭКЗ", to: "-1", skr: "Нет", dos: "Ред",
      damage: "3d6 ББ (до 25м)", ammo: "Тяжёлые пневмоболты", mag: "4", sko: "1", nad: "ОБ", range: "25м (макс. 50м)", cost: "350 eb", book: "NeoTribes",
      desc: "Четырёхствольное пневматическое ружьё с вращающимся блоком стволов и баллоном сжатого воздуха в прикладе (хватает на 8 выстрелов). Стреляет крупными бронебойными болтами (ББ без деления прошедшего урона пополам!). На дистанции 25–50 м урон падает до 2d6."
    },
    {
      id: "bsw-ex-sling",
      name: "Праща кочевников (Nomad Sling)",
      origName: "Nomad Sling",
      category: "Экзотическое оружие",
      typeCode: "ЭКЗ", to: "0", skr: "Кар", dos: "Мал",
      damage: "1/2d6 + ТЕЛО", ammo: "Камни / шарики", mag: "1", sko: "1", nad: "ОТ", range: "20м", cost: "10 eb", book: "NeoTribes",
      desc: "Древнейшее бесшумное метательное оружие, использующее обычные камни и получающее бонус урона от ТЕЛА."
    },
    {
      id: "bsw-ex-drugathug",
      name: "Инъектор скрытого ношения Petrochem Drug-A-Thug™",
      origName: "Petrochem Drug-A-Thug",
      category: "Экзотическое оружие",
      typeCode: "ЭКЗ", to: "0", skr: "Кар", dos: "Обы",
      damage: "Инъекция препарата", ammo: "Дозы наркотика/яда", mag: "5", sko: "1", nad: "ОТ", range: "Вплотную", cost: "150 eb", book: "Chr2",
      desc: "Миниатюрный пневмоинъектор размером чуть больше помады или контактного шокера. При касании впрыскивает дозу любого снотворного или парализующего препарата (Сложность проверки ТЕЛА + Сопротивление наркотикам: 25+). Броню не пробивает."
    },
    {
      id: "bsw-ex-beanbag",
      name: "Травматический пневмат Pursuit Security Beanbag Gun",
      origName: "Pursuit Security, Incorporated Beanbag Gun",
      category: "Экзотическое оружие",
      typeCode: "П", to: "-2", skr: "Кур", dos: "Отл",
      damage: "Онемение / Шок", ammo: "Мягкие мешочки (Beanbag)", mag: "1", sko: "1", nad: "ОБ", range: "3м", cost: "100 eb", book: "SOF / SOF2",
      desc: "Компактное устройство, похожее на велосипедный насос, выстреливающее оглушающий мешочек на сжатом воздухе до 3 м. Незащищённая бронёй конечность немеет, если цель не пройдёт Очень Сложную проверку ТЕЛА (25+)."
    },
    {
      id: "bsw-ex-stundart",
      name: "Шоковый пистолет Pursuit Security Stundart Pistol",
      origName: "Pursuit Security, Incorporated Stundart Pistol",
      category: "Экзотическое оружие",
      typeCode: "П", to: "-1", skr: "Кур", dos: "Обы",
      damage: "Шок 70 000 В (Stun -1)", ammo: ".45 LVD шоковые дротики", mag: "2", sko: "2", nad: "ОТ", range: "50м", cost: "109 eb", book: "Chr1",
      desc: "Двуствольный вертикальный пистолет переломной конструкции под низкоскоростные пластиковые патроны .45 калибра с конденсатором на 70 000 вольт. Шипы снаряда пробивают до 5 ОС мягкой брони и мгновенно вырубают цель на срок до 1 часа (спасбросок от Шока -1). При попытке выстрелить боевым патроном .45 с вероятностью 90% разрывается в руке (2d6+1 урона)."
    },
    {
      id: "bsw-ex-webgun",
      name: "Сетемёт Pursuit Security Webgun",
      origName: "Pursuit Security, Incorporated Webgun",
      category: "Экзотическое оружие",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Обы",
      damage: "Сеть (захват цели)", ammo: "Нейлоновая / Тазер / Det-Web", mag: "1", sko: "1", nad: "ОБ", range: "30м", cost: "250 eb", book: "Chr2",
      desc: "Выстреливает паутинообразную нейлоновую сеть с 4 грузилами. Цель должна пройти проверки ТЕЛА 25+ и РЕФ 25+, иначе опутывается (-1/2 РЕФ, ПЕР = 0). За +100 eb доступна карбостальная сеть с электрошокером (режется только моноклинком), а за 450 eb — анти-борговская взрывная сеть FEN DZ-55 Det-Web из детонирующего шнура (наносит 40 ББ урона по КАЖДОЙ локации тела!)."
    },
    {
      id: "bsw-ex-skunker",
      name: "Газовый распылитель Skunker™",
      origName: "Skunker",
      category: "Экзотическое оружие",
      typeCode: "ЭКЗ", to: "-1", skr: "Кар", dos: "Отл",
      damage: "Газ (+зловоние)", ammo: "Газовые дозы", mag: "4", sko: "1", nad: "ОТ", range: "2м", cost: "70 eb", book: "Chr2",
      desc: "Карманный баллончик (15 см в длину) в 6 дизайнерских расцветках на 4 дозы нелетального газа. За доплату 5–10 eb газ смешивается со зловонным химикатом (эффект Stench Bomb)."
    },
    {
      id: "bsw-ex-burst",
      name: "Фонарик-дробовик Streettech «Burst»",
      origName: "Streettech \"Burst\"",
      category: "Экзотическое оружие",
      typeCode: "ДРБ", to: "-1 / -2 / -3", skr: "Кар", dos: "Отл",
      damage: "2d6+1", ammo: "28-й калибр (дробь)", mag: "1", sko: "1", nad: "ОТ", range: "3м", cost: "33 eb", book: "PAC",
      desc: "Однозарядное оружие последнего шанса, замаскированное под маленький карманный фонарик или брелок для ключей (40 eb). Электровоспламенение выстреливает заряд дроби 28 калибра (эффективен только до 3 метров: ТО -1 на 0–1 м, -2 на 1–2 м, -3 на 2–3 м)."
    },
    {
      id: "bsw-ex-micro15",
      name: "СВЧ-излучатель Techtronica 15 Microwaver",
      origName: "Techtronica 15 Microwaver",
      category: "Экзотическое оружие",
      typeCode: "П", to: "0", skr: "Кур", dos: "Мал",
      damage: "1d6 + ЭМИ-эффект", ammo: "Микроволны", mag: "10", sko: "2", nad: "ОТ", range: "20м", cost: "400 eb", book: "CP20",
      desc: "Микроволновый излучатель размером с фонарь для выжигания киберимплантов и электроники."
    },
    {
      id: "bsw-ex-micro20",
      name: "СВЧ-излучатель Techtronica 20 Microwaver",
      origName: "Techtronica 20 Microwaver",
      category: "Экзотическое оружие",
      typeCode: "П", to: "0", skr: "Кур", dos: "Мал",
      damage: "1d6 + ЭМИ-эффект", ammo: "Микроволны", mag: "15", sko: "2", nad: "ОТ", range: "25м", cost: "500 eb", book: "Chr2",
      desc: "Усиленная модификация микроволнового пистолета Techtronica 15 с увеличенным до 15 выстрелов энергоблоком и дальностью 25 метров."
    },
    {
      id: "bsw-ex-blackzap",
      name: "Электроперчатка Techtronica Black-Zap Glove",
      origName: "Techtronica Black-Zap Glove",
      category: "Экзотическое оружие",
      typeCode: "ЭКЗ", to: "0", skr: "Кар", dos: "Обы",
      damage: "Шок (как тазер)", ammo: "Наручный энергоблок", mag: "6", sko: "1", nad: "ОБ", range: "1м", cost: "90 eb", book: "Chr1",
      desc: "Сетчатая перчатка под напряжением с эффектом электрошокера-тазера, запитанная от батареи на предплечье. Срабатывает при ударе кулаком или захвате."
    },
    {
      id: "bsw-ex-pulserifle",
      name: "ЭМИ-винтовка Techtronica M40 «Pulse Rifle»",
      origName: "Techtronica M40 \"Pulse Rifle\"",
      category: "Экзотическое оружие",
      typeCode: "ВИН", to: "0", skr: "Нет", dos: "Ред",
      damage: "ЭМИ-импульс + Шок", ammo: "Жидкометаллические батареи", mag: "6", sko: "1/2", nad: "ОБ", range: "50м", cost: "3,500 eb", book: "Chr2",
      desc: "Короткая импульсная ЭМИ-винтовка. Против людей вызывает потерю сознания (вплотную — спасбросок от Смерти -3, на близкой дистанции — спасбросок от Шока -5). Неэкранированная кибернетика и электроника на близкой дистанции выходит из строя навсегда (экранированная вплотную имеет 50% шанс поломки)."
    },
    {
      id: "bsw-ex-voltpistol",
      name: "Электроразрядный пистолет Techtronica Model 009 Volt Pistol",
      origName: "Techtronica Model 009 Volt Pistol",
      category: "Экзотическое оружие",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Ред",
      damage: "3d6 (электричество)", ammo: "Лазер-ионизатор + разряд", mag: "6", sko: "1", nad: "ОБ", range: "25м", cost: "950 eb", book: "Chr2",
      desc: "Ионизирует воздух маломощным лазером и пускает по каналу искусственную молнию от жидкометаллических конденсаторов. Половина урона — реальная, половина — шоковая; незаземлённая броня не защищает! Попадание в киберконечность отключает её на 1d6+3 десятков секунд (при крите — навсегда)."
    },
    {
      id: "bsw-ex-airhammer",
      name: "Пневмопистолет Tsunami Arms «Airhammer»",
      origName: "Tsunami Arms \"Airhammer\" Air Pistol",
      category: "Экзотическое оружие",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Мал / Ред",
      damage: "1d6+2 / 2d6+2 / Газ (+3 в перегрузке)", ammo: "5.3x19мм спец-дротики", mag: "5 / 7", sko: "2", nad: "ОБ (НН)", range: "50м", cost: "325 / 400 eb", book: "Chr2",
      desc: "Разработан для охраны «Хрустального Дворца». Имеет 3 режима давления воздуха (резервуар на 15 ед.): Target (0.5 ед., пол-урона), Combat (1 ед., обычный урон) и Overload (3 ед., +3 к урону, НАД падает до НН). Стреляет разрывными флешеттами Kendachi (1d6+2), обычными ББ-флешеттами (1d6+2 ББ, мягкая броня x1/4), гелевыми пулями (2d6+2) или газовыми капсулами. Модель Solo (325 eb) имеет магазин на 5 патронов, ЛЦУ и фотокамеру; модель Security (400 eb) — магазин на 7 патронов и смартлинк."
    },
    {
      id: "bsw-ex-ubcap",
      name: "Подствольный лазер / СВЧ Tsunami Arms Underbarrel",
      origName: "Tsunami Arms Underbarrel Capacitor Lasers/Microwavers",
      category: "Экзотическое оружие",
      typeCode: "ВИН / ЭКЗ", to: "+2 (лазер) / 0 (СВЧ)", skr: "—", dos: "Ред / Мал",
      damage: "3d6 (лазер) / 1d6+ЭМИ (СВЧ)", ammo: "Сверхпроводящий конденсатор", mag: "2 / 4", sko: "2", nad: "НН / ОБ", range: "25м / 20м", cost: "950 / 500 eb", book: "Chr2",
      desc: "Подствольные энергетические модули на сверхпроводящих конденсаторах для установки под средние ПП и винтовки. Лазер (950 eb): ТО +2, урон 3d6, 2 заряда, 25 м. Микроволновка (500 eb): ТО 0, урон 1d6+ЭМИ, 4 заряда, 20 м. Поясной энергоблок за 250 eb (4 кг) удваивает боезапас."
    },
    {
      id: "bsw-ex-lance",
      name: "Карманная мини-ракета UrbanTech «Lance»",
      origName: "UrbanTech \"Lance\" Mini-Missile",
      category: "Экзотическое оружие",
      typeCode: "ТЯЖ", to: "+2 (по ИНТ)", skr: "Кар", dos: "Обы",
      damage: "4d6 КС (2d6 в рад. 1м)", ammo: "Самонаводящаяся ракета (HEAT)", mag: "1", sko: "1", nad: "НН", range: "10–300м", cost: "100 eb", book: "SOF / SOF2",
      desc: "Одноразовая персональная мини-ракета в защитном пенале. Для пуска нужно надломить корпус, навести на цель (бросок попадания идёт от ИНТ вместо РЕФ!), нажать кнопку и оттолкнуть ракету от себя — маршевый двигатель включится на безопасном удалении (мин. дистанция 10 м). Кумулятивная БЧ (HEAT): делит броню пополам, прошедший урон НЕ делится! При промахе имеет 50% шанс развернуться и атаковать повторно с ТО 0."
    }
  ];

  // Безопасное добавление: пропускаем карточку, если она уже есть в базе
  PACK_1_ITEMS.forEach(newItem => {
    const exists = extDb.weapons.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase()) ||
      (existing.origName && existing.origName.toLowerCase() === newItem.origName.toLowerCase())
    );
    if (!exists) {
      extDb.weapons.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ ОРУЖИЯ В DATABASE.JS (БЕЗ ПЕРЕЗАПИСИ СУЩЕСТВУЮЩИХ КАРТОЧЕК)
// Пакет №2: Лёгкие, Средние, Тяжёлые и Очень тяжёлые пистолеты (стр. 10–17)
// ============================================================================
(function appendWeaponsPack2() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.weapons)) extDb.weapons = [];
  if (!Array.isArray(extCats.weapons)) extCats.weapons = [];

  const pistolCategories = [
    "Лёгкие пистолеты",
    "Средние пистолеты",
    "Тяжёлые пистолеты",
    "Очень тяжёлые пистолеты"
  ];
  pistolCategories.forEach(c => {
    if (!extCats.weapons.includes(c)) extCats.weapons.push(c);
  });

  const PACK_2_ITEMS = [
    // --- ЛЁГКИЕ ПИСТОЛЕТЫ (LIGHT HANDGUNS, стр. 10) ---
    {
      id: "bsw-lp-astra6",
      name: "Astra Style-6",
      origName: "Astra Style-6",
      category: "Лёгкие пистолеты",
      typeCode: "П", to: "-1", skr: "Кар", dos: "Отл",
      damage: "1d6 (5мм)", ammo: "5мм безгильзовый", mag: "6", sko: "2", nad: "НН", range: "50м", cost: "75 eb", book: "ES+",
      desc: "Повсеместно распространённый (и дешёвый) испанский полимерный пистолет-однодневка, стреляющий 5-мм фрагментирующимися пластиковыми пулями."
    },
    {
      id: "bsw-lp-budgetc13",
      name: "Budget Arms C-13",
      origName: "Budget Arms C-13",
      category: "Лёгкие пистолеты",
      typeCode: "П", to: "-1", skr: "Кар", dos: "Отл",
      damage: "1d6 (5мм)", ammo: "5мм безгильзовый", mag: "8", sko: "2", nad: "ОБ", range: "50м", cost: "75 eb", book: "CP20",
      desc: "Маломощный самозарядный пистолет скрытого ношения, часто используемый как запасное оружие последнего шанса или «дамский пистолет»."
    },
    {
      id: "bsw-lp-dailung15",
      name: "Dai Lung Cybermag 15",
      origName: "Dai Lung Cybermag 15",
      category: "Лёгкие пистолеты",
      typeCode: "П", to: "-1", skr: "Кар", dos: "Обы",
      damage: "1d6+1 (6мм)", ammo: "6мм безгильзовый", mag: "10", sko: "2", nad: "НН", range: "50м", cost: "50 eb", book: "CP20",
      desc: "Дешёвая гонконгская штамповка, которой часто вооружаются мелкие бустеры и уличная шпана."
    },
    {
      id: "bsw-lp-fedimpact",
      name: "Federated Arms Impact",
      origName: "Federated Arms Impact",
      category: "Лёгкие пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Отл",
      damage: "1d6 (.22)", ammo: ".22 безгильзовый", mag: "10", sko: "2", nad: "ОТ", range: "50м", cost: "60 eb", book: "SOF / SOF2",
      desc: "Десятизарядный мелкокалиберный пистолет с высокой точностью и отличной надёжностью."
    },
    {
      id: "bsw-lp-fedx22",
      name: "Federated Arms X-22",
      origName: "Federated Arms X-22",
      category: "Лёгкие пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Отл",
      damage: "1d6+1 (6мм)", ammo: "6мм / .22 безгильзовый", mag: "10", sko: "2", nad: "ОБ", range: "50м", cost: "50–150 eb", book: "CP20",
      desc: "Знаменитый дешёвый пластиковый пистолет «Polymer-one-shot», выпускаемый в 13 модных дизайнерских расцветках. Также встречается в варианте под патрон .22 (урон 1d6, цена 25–50 eb)."
    },
    {
      id: "bsw-lp-fedx38",
      name: "Federated Arms X-38",
      origName: "Federated Arms X-38",
      category: "Лёгкие пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Отл",
      damage: "2d6 (.38)", ammo: ".38 безгильзовый", mag: "10", sko: "2", nad: "ОБ", range: "50м", cost: "35 eb", book: "SOF / SOF2",
      desc: "Недорогой и точный самозарядный пистолет под безгильзовый патрон .38 калибра."
    },
    {
      id: "bsw-lp-towat12",
      name: "Towa Manufacturing Type-12 Police Pistol",
      origName: "Towa Manufacturing Type-12 Police Pistol",
      category: "Лёгкие пистолеты",
      typeCode: "П", to: "+3", skr: "Кур", dos: "Мал",
      damage: "1d6+1 (6мм)", ammo: "6мм", mag: "6", sko: "2", nad: "ОТ", range: "50м", cost: "450 eb", book: "PR (Pacific Rim)",
      desc: "Штатный револьвер женщин-полицейских и старших офицеров полиции Японии. Невероятно точное и безотказное оружие, созданное для остановки и устрашения преступников. Версия со встроенным смартлинком (ТО +5) стоит 810 eb."
    },

    // --- СРЕДНИЕ ПИСТОЛЕТЫ (MEDIUM HANDGUNS, стр. 10-14) ---
    {
      id: "bsw-mp-arasakawsa",
      name: "Arasaka WSA Autopistol",
      origName: "Arasaka WSA Autopistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Обы",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "15", sko: "2", nad: "ОТ", range: "50м", cost: "400 eb", book: "Corp1",
      desc: "Штатный пистолет всех оперативников и солдат корпорации «Арасака», а также руководителей, предпочитающих надёжное личное оружие с хорошей убойной силой."
    },
    {
      id: "bsw-mp-budgetc41",
      name: "BudgetArms C-41",
      origName: "BudgetArms C-41",
      category: "Средние пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Отл",
      damage: "2d6+1 (.41 C)", ammo: ".41 безгильзовый", mag: "10", sko: "3", nad: "ОТ", range: "50м", cost: "600 eb", book: "SOF / SOF2",
      desc: "Десятизарядный крупнокалиберный самозарядный пистолет с повышенной скорострельностью (СКО 3) и высокой надёжностью."
    },
    {
      id: "bsw-mp-laserniner",
      name: "Budget Arms Laser-Niner",
      origName: "Budget Arms Laser-Niner",
      category: "Средние пистолеты",
      typeCode: "П", to: "+1*", skr: "Кур / Плащ", dos: "Мал",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "15 / 35", sko: "3 / 20", nad: "ОБ", range: "50м", cost: "675 eb", book: "Chr1",
      desc: "Качественный автоматический пистолет под 9-мм безгильзовый патрон, созданный по спецификациям служб безопасности. Оснащён встроенным лазерным целеуказателем (уже учтён в ТО +1) и режимом стрельбы отсечкой по 3 патрона или полной очередью (СКО 20). Штатный магазин вмещает 15 патронов, но для штурмовых операций может комплектоваться барабанным магазином-«улиткой» на 35 патронов (снижает скрытность до «Плащ»)."
    },
    {
      id: "bsw-mp-berettam97p",
      name: "Beretta M97P",
      origName: "Beretta M97P",
      category: "Средние пистолеты",
      typeCode: "П", to: "+2*", skr: "Кур", dos: "Мал",
      damage: "2d6+1 (9мм)", ammo: "9мм пластик-гильза", mag: "18", sko: "2", nad: "ОТ", range: "50м", cost: "480 eb", book: "ES+",
      desc: "Новейшее развитие классической 92-й серии Beretta: высокоточный пистолет со встроенным подствольным лазерным прицелом (учтён в ТО +2), широко применяемый в Европе. Использует патроны в пластиковой гильзе."
    },
    {
      id: "bsw-mp-ccmmccm3",
      name: "CCMMC Goaxing Xiuxi CM-3",
      origName: "CCMMC Goaxing Xiuxi CM-3",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Обы",
      damage: "2d6+1 (9мм)", ammo: "9мм", mag: "8", sko: "2", nad: "ОБ", range: "50м", cost: "75 eb (250 YY)", book: "PR (Pacific Rim)",
      desc: "Гражданский пистолет — максимальная огневая мощь, которой может легально владеть гражданское лицо в континентальном Китае. Не продаётся за пределами КНР."
    },
    {
      id: "bsw-mp-coltalpha",
      name: "Colt Alpha-Omega Competition Pistol",
      origName: "Colt Alpha-Omega Competition Pistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "+2", skr: "Кур", dos: "Обы",
      damage: "2d6+2 (.45) / 2d6+3 (10мм)", ammo: ".45 ACP или 10мм безгильз.", mag: "10", sko: "2", nad: "ОТ", range: "50м", cost: "500 eb", book: "Chr1",
      desc: "Вершина вековой эволюции самозарядных пистолетов Colt. Пистолет двойного действия с магазином на 10 патронов (.45 ACP или 10мм безгильзовый на выбор). В базовую заводскую комплектацию входят дульный компенсатор и интерфейс стрелка. За +3900 eb может комплектоваться прицельным комплексом Nikon COT."
    },
    {
      id: "bsw-mp-coltenf10",
      name: "Colt Enforcement 10 Sidearm",
      origName: "Colt Enforcement 10 Sidearm",
      category: "Средние пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Обы",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "14", sko: "2", nad: "ОТ", range: "50м", cost: "550 eb", book: "Corp3",
      desc: "Армейский и полицейский пистолет на массивной рамке из сверхпрочного керамического композита Sortex™. Штатное личное оружие охраны, солдат и флота корпорации Petrochem. Не боится грязи и морской воды. Камуфлированная версия стоит 600 eb, чипованная под смартлинк — +550 eb."
    },
    {
      id: "bsw-mp-streetmaster",
      name: "Dai Lung Streetmaster",
      origName: "Dai Lung Streetmaster",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Отл",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "12", sko: "2", nad: "НН", range: "50м", cost: "200 eb", book: "CP20",
      desc: "Очередная дешёвая поделка от Dai Lung, созданная специально для уличных разборок."
    },
    {
      id: "bsw-mp-fn3spot",
      name: "FN Browning «3-Spot» Machine Pistol",
      origName: "FN Browning \"3-Spot\" Machine Pistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Обы",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "24", sko: "3 (очередь)", nad: "ОБ", range: "50м", cost: "425 eb", book: "UK (Rough Guide)",
      desc: "Автоматический пистолет для европейских правоохранителей. Настроен исключительно на точное подавление огнём: каждое нажатие на спуск выпускает фиксированную отсечку из 3 безгильзовых 10-мм пуль (магазина на 24 патрона хватает на 8 очередей). Состоит на вооружении в Великобритании, Франции, Бельгии и Италии."
    },
    {
      id: "bsw-mp-fedx9",
      name: "Federated Arms X-9mm",
      origName: "Federated Arms X-9mm",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Отл",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "12", sko: "2", nad: "ОБ", range: "50м", cost: "300 eb", book: "CP20",
      desc: "Добротный рабочий пистолет для начинающих Соло, принятый в качестве штатного оружия ополчения штатов в США."
    },
    {
      id: "bsw-mp-fashion9",
      name: "Fashion Gun 9",
      origName: "Fashion Gun 9",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кар", dos: "Отл",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "7", sko: "2", nad: "НН", range: "25м", cost: "35–40 eb", book: "SOF / SOF2",
      desc: "Сверхлёгкий пластиковый пистолет, популярный среди позёров. Если расстрелять весь магазин из 7 патронов подряд за 7 боевых действий, кожух ствола расплавится и стечёт как горячий сыр, навсегда заклинив оружие!"
    },
    {
      id: "bsw-mp-goncz",
      name: "Goncz-Taurus Pistol",
      origName: "Goncz-Taurus Pistol",
      category: "Средние пистолеты",
      typeCode: "П / ПП", to: "0 (-1 авто)", skr: "Кур", dos: "Отл / Обы",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "15 / 30", sko: "2 (2/10 авто)", nad: "ОБ", range: "50м", cost: "200–275 eb (300–400 авто)", book: "Chr1",
      desc: "Штатное офицерское оружие в странах Пан-Америки, прославленное бандой кочевников «Bat People». Производится Taurus Brasilia. Доступен в двух версиях: обычный самозарядный пистолет (200–275 eb, ТО 0, СКО 2) и автоматический пистолет с переводчиком огня (300–400 eb, ТО -1, СКО 2/10, магазины на 15 или 30 патронов)."
    },
    {
      id: "bsw-mp-glock30",
      name: "Glock Thirty Machine Pistol",
      origName: "Glock Thirty Machine Pistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "+2", skr: "Кур (Кар)", dos: "Обы",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "20 / 30", sko: "1 / 3 (отсечка)", nad: "ОТ", range: "50м", cost: "705 eb", book: "Chr1",
      desc: "Модификация знаменитого 10-мм Glock-20 с возможностью стрельбы одиночными или отсечкой по 3 выстрела, газовыми портами-компенсаторами на стволе для отличного контроля отдачи и магазином на 30 патронов (со стандартным магазином на 20 патронов скрытность повышается до «Кар»)."
    },
    {
      id: "bsw-mp-hammerm11",
      name: "Болтерный пистолет Hammer M-11 Bolt Pistol",
      origName: "Hammer M-11 Bolt Pistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "+2", skr: "Кур", dos: "Мал",
      damage: "1d6+2 (9мм болт)", ammo: "9мм бронебойный болт", mag: "10", sko: "2", nad: "ОБ", range: "30м", cost: "320 eb", book: "DS (Deep Space)",
      desc: "Самый популярный космический болтерный пистолет с отличным контролем отдачи. Тяжёлый 9-мм болт обладает экстремальным бронепробитием: броня цели считается как 1/4 ОС, а прошедший урон делится пополам (x1/2)."
    },
    {
      id: "bsw-mp-imigamad",
      name: "IMI Gamad",
      origName: "IMI Gamad",
      category: "Средние пистолеты",
      typeCode: "П", to: "0 (+1 с ЛЦУ)", skr: "Кар", dos: "Отл",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "7 (15)", sko: "2", nad: "ОТ", range: "50м", cost: "575 eb", book: "SOF / SOF2",
      desc: "Короткоствольный 10-мм израильский пистолет скрытого ношения (название переводится как «Карлик»), созданный для агентов Моссада. Поставляется со штатным лазерным прицелом (ТО +1). Доступен удлинённый магазин на 15 патронов за 35 eb (снижает скрытность до «Кур»)."
    },
    {
      id: "bsw-mp-kangtao97",
      name: "Kang Tao Type 97",
      origName: "Kang Tao Type 97",
      category: "Средние пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Отл",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "10", sko: "2", nad: "НН", range: "50м", cost: "35 eb", book: "SOF / SOF2",
      desc: "Дешёвая полимерная копия 9-мм Beretta от корпорации Kang Tao, наводнившая уличные рынки Южной Америки."
    },
    {
      id: "bsw-mp-leroimaxi10",
      name: "LeRoi Maxi-10",
      origName: "LeRoi Maxi-10",
      category: "Средние пистолеты",
      typeCode: "П", to: "-1", skr: "Кур", dos: "Отл",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "10", sko: "2", nad: "НН", range: "50м", cost: "150 eb", book: "ET (Eurotour)",
      desc: "Французский самозарядный пистолет с незаслуженно громкой уличной репутацией, построенной исключительно на его брутальном угловатом дизайне и агрессивном маркетинге."
    },
    {
      id: "bsw-mp-milavenger",
      name: "Militech Arms Avenger",
      origName: "Militech Arms Avenger",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Отл",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "10", sko: "2", nad: "ОТ", range: "50м", cost: "250 eb", book: "CP20",
      desc: "Качественный и безотказный пистолет для профессионалов. С 2005 года является стандартным табельным оружием армии США (в основном у офицеров тыла и военной полиции)."
    },
    {
      id: "bsw-mp-blackwidow",
      name: "Игольчатый пистолет Militech Black Widow Flechette",
      origName: "Militech Black Widow Flechette Pistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Мал",
      damage: "10 флешетт по 1/2d6", ammo: "Кассетный флешеттный (гильз.)", mag: "10", sko: "2", nad: "ОБ", range: "30м", cost: "400 eb", book: "DS (Deep Space)",
      desc: "Разработан по заказу ВВС США для космического спецназа EVATS. Каждый выстрел выпускает пучок из 10 микро-стрелок (разлёт 1 м на средней дистанции, локации определяются как у дробовика). Каждая стрелка наносит 1/2d6 урона (броня считается как 1/2 ОС) плюс действие яда или наркотика."
    },
    {
      id: "bsw-mp-silvershadow",
      name: "Игольчатый пистолет Militech Silver Shadow Flechette",
      origName: "Militech Silver Shadow Flechette Pistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Мал",
      damage: "(1/2d6+2) флешетт по 1d6/3", ammo: "Флешеттный патрон (гильз.)", mag: "8", sko: "2", nad: "ОБ", range: "30м", cost: "300 eb", book: "DS (Deep Space)",
      desc: "Гражданский предок орбитального пистолета Black Widow. Каждый патрон содержит 6 флешетт: при попадании в цель входит (1/2d6)+2 стрелок, каждая из которых наносит 1d6/3 урона (броня считается как 1/2 ОС) плюс нанесённый яд."
    },
    {
      id: "bsw-mp-nomad357auto",
      name: "Самозарядный пистолет кочевников .357 Magnum Autoloader",
      origName: "Nomad .357 Magnum Autoloader",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Обы",
      damage: "2d6+3 (3d6+1 усил.)", ammo: ".357 Magnum (гильзовый)", mag: "8", sko: "2", nad: "ОТ", range: "50м", cost: "300 eb", book: "NeoTribes",
      desc: "Надёжный самозарядный пистолет на базе классического Colt M1911 под гильзовый патрон .357 Magnum. С усиленными патронами («горячей навеской») наносит 3d6+1 урона."
    },
    {
      id: "bsw-mp-nomad357rev",
      name: "Револьвер кочевников .357 Magnum Revolver",
      origName: "Nomad .357 Magnum Revolver",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Обы",
      damage: "2d6+3 (3d6+1 усил.)", ammo: ".357 Magnum (гильзовый)", mag: "6", sko: "2", nad: "ОТ", range: "50м", cost: "250 eb", book: "NeoTribes",
      desc: "Классический револьвер под патрон .357 Magnum (идеален в паре с карабином того же калибра). Заряжается двумя полукруглыми обоймами-клипами по 3 патрона за 1 раунд (без обойм — 3 раунда). С усиленными патронами наносит 3d6+1 урона."
    },
    {
      id: "bsw-mp-starrior4",
      name: "Sci Fi Starrior 4",
      origName: "Sci Fi Starrior 4",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Отл",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "12", sko: "2", nad: "НН", range: "50м", cost: "60 eb", book: "SOF / SOF2",
      desc: "Дешёвый полимерный пистолет, внешне скопированный с реквизитного бластера из древнего фильма XX века «Звёздный Путь Войн» (Star Trek Wars)."
    },
    {
      id: "bsw-mp-tristar",
      name: "Дробовой револьвер Stein & Wasserman «Tri-Star»",
      origName: "Stein & Wasserman \"Tri-Star\" Revolver",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Обы",
      damage: "3x 2d6 (Triplex) / 3d6+1 (пуля)", ammo: ".410 ружейный калибр", mag: "6", sko: "2", nad: "ОБ", range: "50м", cost: "275 eb", book: "Chr2",
      desc: "Крупный револьвер двойного действия под ружейный патрон .410 калибра. Может стрелять мелкой дробью (2d6/1d6+2/1d6) или пулей (3d6+1), но прославился фирменными патронами Triplex с тремя крупными картечинами #000: каждый выстрел считается как очередь из 3 пуль (попадает 1d6/2 картечин, каждая наносит по 2d6 урона в случайную зону!). За 100 eb оснащается фирменным лазерным прицелом, проецирующим точку и круг разлёта картечи."
    },
    {
      id: "bsw-mp-sternp41",
      name: "Sternmeyer P-41 Autoloading Pistol",
      origName: "Sternmeyer P-41 Autoloading Pistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Обы",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "12", sko: "2", nad: "ОТ", range: "50м", cost: "425 eb", book: "Corp1",
      desc: "Более лёгкий и ёмкий пистолет по сравнению с тяжёлым P-35, популярный среди руководителей корпорации IEC."
    },
    {
      id: "bsw-mp-stolbovoyst2",
      name: "Пистолет Столбового (Stolbovoy St-2 Pistol)",
      origName: "Stolbovoy St-2 Pistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Обы (СНГ) / Ред",
      damage: "2d6+3 (10мм)", ammo: "10мм гильзовый", mag: "14", sko: "2", nad: "ОТ (клин только на 1)", range: "50м", cost: "450 eb (850 смарт)", book: "Corp3",
      desc: "Сверхнадёжный советский пистолет с композитным затвором и запатентованным механизмом самоочистки от пыли и грязи. По таблице осечек FNFF оружие «Столбовой» клинит ТОЛЬКО при выпадении 1!"
    },
    {
      id: "bsw-mp-stranger",
      name: "Surprising Stranger",
      origName: "Surprising Stranger",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кар", dos: "Отл",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "4", sko: "2", nad: "ОБ", range: "25м", cost: "15–50 eb", book: "SOF / SOF2",
      desc: "Четырёхствольный карманный пистолет-«пеппербокс» с бесшумным электроспуском. Один из самых надёжных полимерных пистолетов скрытого ношения (перезаряжается с дула по 1 заряду в раунд)."
    },
    {
      id: "bsw-mp-teendreem",
      name: "Teen Dreem",
      origName: "Teen Dreem",
      category: "Средние пистолеты",
      typeCode: "П", to: "-1", skr: "Кур", dos: "Отл",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "10", sko: "2 / 10", nad: "НН", range: "50м", cost: "36 eb", book: "SOF / SOF2",
      desc: "Дешёвый 10-зарядный пластиковый пистолет с режимом автоматического огня. При стрельбе полной очередью имеет 60% шанс расплавиться прямо в руках!"
    },
    {
      id: "bsw-mp-texas351",
      name: "Ракетомётный пистолет Texas Arms Model-351 Gyrojet",
      origName: "Texas Arms Model-351 Gyrojet Pistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Обы / Мал",
      damage: "2d6+1 (9мм Gyro)", ammo: "9мм реактивные ракеты", mag: "8", sko: "2", nad: "НН", range: "50м (150м в вакууме)", cost: "420 eb", book: "DS (Deep Space)",
      desc: "Лёгкий жироджет-пистолет, стреляющий 9-мм мини-ракетами без отдачи. В вакууме дальность стрельбы утраивается (150 м). Штатное оружие лунных гарнизонов (на дистанции менее 5 м ракета ещё не успевает разогнаться)."
    },
    {
      id: "bsw-mp-towat13",
      name: "Towa Manufacturing Type-13 Police Pistol",
      origName: "Towa Manufacturing Type-13 Police Pistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "+2", skr: "Кур", dos: "Мал",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "12", sko: "2", nad: "ОТ", range: "50м", cost: "500 eb (800 смарт)", book: "PR (Pacific Rim)",
      desc: "Штатный пистолет японских патрульных полицейских, созданный для борьбы с иностранными киберпреступниками. Версия со смартлинком даёт суммарно ТО +4 и стоит 800 eb."
    },
    {
      id: "bsw-mp-towat14",
      name: "Towa Manufacturing Type-14 Pistol",
      origName: "Towa Manufacturing Type-14 Pistol",
      category: "Средние пистолеты",
      typeCode: "П", to: "+2", skr: "Кур", dos: "Мал",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "16", sko: "3 / 16", nad: "ОТ", range: "50м", cost: "520 eb (820 смарт)", book: "PR (Pacific Rim)",
      desc: "Штатный автоматический пистолет Сил самообороны Японии (SDF) с режимами отсечки по 3 выстрела и полной очереди (СКО 16). Офицерская версия со смартлинком стоит 820 eb."
    },
    {
      id: "bsw-mp-tsunamiexpress",
      name: "Спортивный пистолет Tsunami Express Racegun",
      origName: "Tsunami Express Racegun",
      category: "Средние пистолеты",
      typeCode: "П", to: "+3", skr: "Плащ", dos: "Мал",
      damage: "2d6+3 (5.2мм ET)", ammo: "5.2мм электротермический", mag: "24", sko: "3", nad: "ОТ", range: "50м", cost: "5,300 eb", book: "SOF / SOF2",
      desc: "Элитный спортивный электротермический пистолет с прицелом Zeiss-Nikon COT, дульным компенсатором, регулируемыми грузиками и деревянной ортопедической рукоятью с упором запястья. Один из самых точных пистолетов в мире (ТО +3, СКО 3, магазин на 24 патрона)."
    },
    {
      id: "bsw-mp-wondernines",
      name: "Семейство 9-мм пистолетов «Wondernines»",
      origName: "Wondernines",
      category: "Средние пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Отл",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "15–20 (14+1d6)", sko: "2", nad: "ОТ", range: "50м", cost: "250–300 eb", book: "SOF / SOF2",
      desc: "Собирательное обозначение качественных 9-мм самозарядных пистолетов XXI века с идентичными характеристиками (магазин 14+1d6 патронов, цена 240 + 1d6x10 eb): Constitution «Bronco», Daewoo DP 17, H&K P-18, IMI Gideon, Militech A226, S&W M2009 и Walther 915."
    },

    // --- ТЯЖЁЛЫЕ ПИСТОЛЕТЫ (HEAVY HANDGUNS, стр. 14-16) ---
    {
      id: "bsw-hp-auto3",
      name: "BudgetArms Auto-3",
      origName: "BudgetArms Auto-3",
      category: "Тяжёлые пистолеты",
      typeCode: "П", to: "-1", skr: "Кур", dos: "Отл",
      damage: "3d6 (11мм)", ammo: "11мм безгильзовый", mag: "8", sko: "2", nad: "НН", range: "50м", cost: "350 eb", book: "CP20",
      desc: "Дешёвый. Мощный. Иногда взрывается. Чего ещё желать? При осечке или критическом промахе с вероятностью 10% взрывается, нанося 2d6 урона руке стрелка."
    },
    {
      id: "bsw-hp-dailungmag",
      name: "Dai Lung Magnum",
      origName: "Dai Lung Magnum",
      category: "Тяжёлые пистолеты",
      typeCode: "П", to: "-1", skr: "Кур", dos: "Отл",
      damage: "3d6+1 (.357 Mag)", ammo: ".357 Magnum", mag: "10", sko: "2", nad: "НН", range: "50м", cost: "60 eb", book: "SOF / SOF2",
      desc: "Грошовая копия «Автомага» для уличных отморозков. При клине или критическом промахе с вероятностью 60% калечит самого стрелка, нанося 2d6+1 урона стреляющей руке!"
    },
    {
      id: "bsw-hp-espinoza",
      name: "Espinoza One Shot",
      origName: "Espinoza One Shot",
      category: "Тяжёлые пистолеты",
      typeCode: "П", to: "-1", skr: "Кур", dos: "Отл",
      damage: "3d6 (.50 Short)", ammo: ".50 Short", mag: "1", sko: "1", nad: "НН", range: "50м", cost: "75 eb", book: "SOF / SOF2",
      desc: "Однозарядный крупнокалиберный пистолет. При осечке или клине с вероятностью 60% взрывается в руке (2d6+1 урона)."
    },
    {
      id: "bsw-hp-malorianflech",
      name: "Тяжёлый флешеттный пистолет Malorian Arms Heavy Flechette",
      origName: "Malorian Arms Heavy Flechette Pistol",
      category: "Тяжёлые пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Обы",
      damage: "1d6+1 (броня x1/4!)", ammo: "4мм вольфрамовый дротик", mag: "25", sko: "2", nad: "ОБ", range: "50м", cost: "595 eb", book: "Chr1",
      desc: "Выстреливает одиночный тяжёлый 4-мм дротик на жидком метательном топливе со скоростью свыше 500 м/с. Обладает двойной бронебойностью: броня цели считается как 1/4 ОС, а прошедший урон НЕ уменьшается! С завода оснащён защитным чипом, заблокированным под владельца."
    },
    {
      id: "bsw-hp-mustangmk2",
      name: "Mustang Arms «Mark II»",
      origName: "Mustang Arms \"Mark II\"",
      category: "Тяжёлые пистолеты",
      typeCode: "П", to: "+1", skr: "Кур / Плащ", dos: "Обы",
      damage: "3d6 (11мм)", ammo: "11мм безгильзовый", mag: "12 / 20", sko: "3", nad: "ОТ*", range: "50м", cost: "425 eb", book: "SOF / SOF2",
      desc: "Высокоточный скорострельный 11-мм пистолет с компенсатором и сменными магазинами на 12 или 20 патронов. Из-за сверхплотной подгонки деталей капризен к грязи: при падении на твёрдую поверхность или отсутствии чистки после 24 выстрелов надёжность падает до ОБ."
    },
    {
      id: "bsw-hp-citygun",
      name: "Кассетный револьвер Nova Model 338 Citygun",
      origName: "Nova Model 338 Citygun",
      category: "Тяжёлые пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Мал",
      damage: "3d6 (.338)", ammo: ".338 Nova (кассеты)", mag: "7", sko: "3", nad: "ОТ", range: "50м", cost: "460 eb", book: "Chr1",
      desc: "Революционный револьвер с барабаном, вынесенным вперёд перед спусковой скобой, и дульным компенсатором (СКО 3). Вместо поштучного заряжания использует сменные одноразовые керамические барабаны-кассеты на 7 патронов .338 Nova (перезарядка за 1 действие, снаряжённая кассета стоит 7 eb)."
    },
    {
      id: "bsw-hp-cityhunter",
      name: "Трунд-револьвер Nova Model 757 Cityhunter",
      origName: "Nova Model 757 Cityhunter",
      category: "Тяжёлые пистолеты",
      typeCode: "П", to: "+2", skr: "Кур", dos: "Мал",
      damage: "3d6 (11мм)", ammo: "11мм треугольные тpунды", mag: "18 (3x6)", sko: "2", nad: "ОБ", range: "50м", cost: "480 eb", book: "BSW (Эксклюзив книги!)",
      desc: "Эксклюзивная разработка книги Blackhand's Street Weapons! Футуристический револьвер с внутренним открытым барабаном под треугольные безгильзовые патроны («trounds») с электровоспламенением и встроенным ЛЦУ. В трубчатом корпусе вокруг ствола размещены сразу 3 очереди по 6 патронов (всего 18 выстрелов): после отстрела 6 патронов передёргивание слайдера подаёт следующие 6 патронов в барабан!"
    },
    {
      id: "bsw-hp-bipower",
      name: "Гибридный пистолет-револьвер S&W Bi-Power Handcannon",
      origName: "Stein & Wasserman Bi-Power Handcannon",
      category: "Тяжёлые пистолеты",
      typeCode: "П", to: "0 (.44) / +1 (.45)", skr: "Кур / Плащ", dos: "Мал",
      damage: "4d6 (.44 Mag) / 2d6+2 (.45 ACP)", ammo: ".44 Magnum + .45 ACP", mag: "6 + 13", sko: "2", nad: "НН", range: "50м", cost: "850 eb", book: "SOF / SOF2",
      desc: "Безумный гибрид, объединяющий в одном корпусе самозарядный пистолет .45 ACP (верхний ствол, магазин на 13 патронов в рукояти) и револьвер .44 Magnum (нижний ствол с 6-зарядным барабаном). Переключение между стволами осуществляется флажком под большой палец. Для стрелков с ТЕЛОМ меньше 8 скрытность снижается до «Плащ»."
    },
    {
      id: "bsw-hp-sternp35",
      name: "Sternmeyer P-35",
      origName: "Sternmeyer P-35",
      category: "Тяжёлые пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Обы",
      damage: "3d6 (11мм)", ammo: "11мм безгильзовый", mag: "8", sko: "2", nad: "ОТ", range: "50м", cost: "400 eb", book: "CP20",
      desc: "Прочный, безотказный немецкий тяжёлый пистолет с отличным останавливающим действием. Штатное оружие охраны многих европейских корпораций и корпорации IEC."
    },
    {
      id: "bsw-hp-raimei",
      name: "Прямоточный пистолет Tsunami Arms «Raimei» Ramjet",
      origName: "Tsunami Arms \"Raimei\" Ramjet pistol",
      category: "Тяжёлые пистолеты",
      typeCode: "П", to: "+2", skr: "Плащ", dos: "Мал",
      damage: "5d6 / 6d6+3 / 7d6 / 7d6+1", ammo: "10мм прямоточный (Ramjet)", mag: "6", sko: "2", nad: "ОТ", range: "100м", cost: "1,100 eb (3,200 с COT)", book: "SOF / SOF2",
      desc: "Пистолет «Раимэй» («Раскат грома») со встроенным смартлинком и защитным чипом, стреляющий 10-мм прямоточными реактивными пулями, которые разгоняются в полёте: урон 5d6 вблизи, 6d6+3 на средней, 7d6 на дальней и 7d6+1 на экстремальной дистанции! Эффект экспансивной пули: ОС брони утраивается (x3), но весь пробивший броню урон удваивается (x2)."
    },

    // --- ОЧЕНЬ ТЯЖЁЛЫЕ ПИСТОЛЕТЫ (VERY HEAVY HANDGUNS, стр. 16-17) ---
    {
      id: "bsw-vhp-454disp",
      name: ".454 Magnum Disposable",
      origName: ".454 Magnum Disposable",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "-2", skr: "Кар", dos: "Ред",
      damage: "4d6+3 (.454)", ammo: ".454 безгильзовый (однораз.)", mag: "2", sko: "1", nad: "ОТ", range: "40м", cost: "100 eb", book: "Interface",
      desc: "Самый смертоносный из одноразовых карманных пистолетов последнего шанса. Выполнен из углепластика с двумя вертикальными стволами и герметичной батареей электровоспламенения (не перезаряжается)."
    },
    {
      id: "bsw-vhp-ameritech",
      name: "Револьвер Ameritech Magnum",
      origName: "Ameritech Magnum",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Ред",
      damage: "4d6+3 (.454)", ammo: ".454 Casull", mag: "5", sko: "2", nad: "ОТ", range: "50м", cost: "1,000 eb", book: "Interface",
      desc: "Престижный тяжёлый револьвер из армированной сталью керамики, сбалансированный для быстрой повторной наводки (СКО 2). Доступен только по спецзаказу."
    },
    {
      id: "bsw-vhp-armalite44",
      name: "Armalite 44",
      origName: "Armalite 44",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Отл",
      damage: "4d6+1 (12мм)", ammo: "12мм безгильзовый", mag: "8", sko: "1", nad: "ОБ", range: "50м", cost: "450 eb", book: "CP20",
      desc: "Крупнокалиберный 12-мм армейский пистолет, разработанный для конкурса ВС США 1998 года."
    },
    {
      id: "bsw-vhp-coltamt",
      name: "Colt AMT Model 2000",
      origName: "Colt AMT Model 2000",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Обы",
      damage: "4d6+1 (12мм)", ammo: "12мм безгильзовый", mag: "8", sko: "1", nad: "ОТ", range: "50м", cost: "500 eb", book: "CP20",
      desc: "Штатный офицерский 12-мм пистолет армии США, отлично зарекомендовавший себя в Центральноамериканских войнах против тяжёлой индивидуальной брони."
    },
    {
      id: "bsw-vhp-camap",
      name: "Мультипатронный револьвер Constitution Arms MAP",
      origName: "Constitution Arms Multi-Ammunition Pistol",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Мал",
      damage: "4d6+1 (и спец. типы 12мм)", ammo: "12мм гильзовые спецпатроны", mag: "5", sko: "1", nad: "ОТ", range: "50м", cost: "525 eb", book: "PAC",
      desc: "Полицейский револьвер с селектором выбора каморы барабана и дисплеем под целиком, позволяющий мгновенно переключаться между боевыми (4d6+1), гипер-пробивными, дротиковыми, кислотными, шоковыми и разрывными (2d6 в радиусе 1 м) 12-мм патронами."
    },
    {
      id: "bsw-vhp-superchief",
      name: "Federated Arms .454 DA «Super Chief»",
      origName: "Federated Arms 454 DA \"Super Chief\"",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Мал",
      damage: "4d6+3 (.454)", ammo: ".454 Casull (гильзовый)", mag: "5", sko: "1", nad: "ОТ", range: "50м", cost: "375 eb", book: "Chr1",
      desc: "Массивный охотничий револьвер двойного действия из нержавеющей стали под мощнейший патрон .454 Casull. Любимое оружие кочевников (мин. ТЕЛО 9 по правилам отдачи)."
    },
    {
      id: "bsw-vhp-malorian3516",
      name: "Malorian Arms 3516",
      origName: "Malorian Arms 3516",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "-1", skr: "Кур", dos: "Ред",
      damage: "6d6 (14мм)", ammo: "14мм безгильзовый", mag: "6", sko: "1", nad: "ОТ", range: "50м", cost: "4,525 eb", book: "Chr1",
      desc: "Самый мощный личный пистолет на рынке, созданный Эраном Малуром по спецзаказу легендарного рокера Джонни Сильверхенда. Рамка из орбитального титана, система компенсации Dyna-porting® и прямая киберблокировка суставов: для стрельбы без травм требует киберруку, разъёмы интерфейса и смартлинк (мин. ТЕЛО 12)."
    },
    {
      id: "bsw-vhp-boomerbuster",
      name: "Militech .477 Boomer Buster",
      origName: "Militech .477 Boomer Buster",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "+1 / -1", skr: "Кур / Плащ", dos: "Мал",
      damage: "5d6 ББ (.477)", ammo: ".477 экспресс-патрон", mag: "4", sko: "1", nad: "ОТ", range: "50м", cost: "450 eb", book: "SOF / SOF2",
      desc: "Четырёхствольный крупнокалиберный пистолет с откидным плечевым упором, созданный для остановки киберпсихов с одного выстрела. Без разложенного упора или киберруки точность падает с +1 до -1."
    },
    {
      id: "bsw-vhp-nomad44rev",
      name: "Револьвер кочевников .44 Magnum Revolver",
      origName: "Nomad .44 Magnum Revolver",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "0", skr: "Кур", dos: "Мал",
      damage: "4d6 (.44)", ammo: ".44 Magnum (гильзовый)", mag: "6", sko: "1", nad: "ОТ", range: "50м", cost: "375 eb", book: "NeoTribes",
      desc: "Классический тяжёлый револьвер на базе рамки Smith & Wesson / Colt под гильзовый патрон .44 Magnum."
    },
    {
      id: "bsw-vhp-novastallone",
      name: "Плазмо-револьвер Nova Arms «Stallone» .357 Plasmatic™",
      origName: "Nova Arms \"Stallone\" .357 Plasmatic Magnum",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Мал",
      damage: "4d6 (.357 ET)", ammo: ".357 Plasmatic электротерм.", mag: "6", sko: "2", nad: "ОТ", range: "60м", cost: "999 eb", book: "SOF / SOF2",
      desc: "Электротермический револьвер Nova Arms с батареей на 10 000 ампер в рукояти, превращающей рабочую жидкость патрона в плазму и удваивающей дульную энергию."
    },
    {
      id: "bsw-vhp-novabronson",
      name: "Плазмо-револьвер Nova Arms «Bronson» .41 Plasmatic™",
      origName: "Nova Arms \"Bronson\" .41 Plasmatic Magnum",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Мал",
      damage: "5d6 (.41 ET)", ammo: ".41 Plasmatic электротерм.", mag: "6", sko: "2", nad: "ОТ", range: "80м", cost: "1,199 eb", book: "SOF / SOF2",
      desc: "Электротермический револьвер калибра .41 Magnum из линейки Plasmatic™, пробивающий тяжёлую броню на дистанции до 80 метров."
    },
    {
      id: "bsw-vhp-novaeastwood",
      name: "Плазмо-револьвер Nova Arms «Eastwood» .44 Plasmatic™",
      origName: "Nova Arms \"Eastwood\" .44 Plasmatic Magnum",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Мал",
      damage: "6d6 (.44 ET)", ammo: ".44 Plasmatic электротерм.", mag: "6", sko: "2", nad: "ОТ", range: "80м", cost: "1,499 eb", book: "SOF / SOF2",
      desc: "Сверхмощный электротермический револьвер .44 Magnum серии Plasmatic™, выдающий урон на уровне крупнокалиберных винтовок (6d6)."
    },
    {
      id: "bsw-vhp-novaarno",
      name: "Плазмо-револьвер Nova Arms «Arno» .454 Plasmatic™",
      origName: "Nova Arms \"Arno\" .454 Plasmatic Magnum",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Мал",
      damage: "6d6+3 (.454 ET)", ammo: ".454 Plasmatic электротерм.", mag: "6", sko: "2", nad: "ОТ", range: "100м", cost: "1,799 eb", book: "SOF / SOF2",
      desc: "Флагман линейки электротермических револьверов Nova Arms под патрон .454 Casull. Наносит колоссальные 6d6+3 урона с прицельной дальностью 100 метров."
    },
    {
      id: "bsw-vhp-spitfire",
      name: "Royal Enfield Spitfire 12mm Battle Pistol",
      origName: "Royal Enfield Ordnance Spitfire 12mm Battle Pistol",
      category: "Очень тяжёлые пистолеты",
      typeCode: "П", to: "+1", skr: "Кур", dos: "Мал",
      damage: "4d6+1 (12мм)", ammo: "12мм безгильзовый", mag: "12", sko: "1 (2 для SAS)", nad: "ОТ", range: "50м", cost: "550 eb (700 смарт)", book: "UK (Rough Guide)",
      desc: "Высокоточный британский армейский 12-мм пистолет с длинным сбалансированным затвором из композитной керамики и магазином повышенной ёмкости на 12 патронов. Модификации для спецназа SAS и SBS позволяют вести стрельбу «двойками» (СКО 2)."
    }
  ];

  PACK_2_ITEMS.forEach(newItem => {
    const exists = extDb.weapons.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase()) ||
      (existing.origName && existing.origName.toLowerCase() === newItem.origName.toLowerCase())
    );
    if (!exists) {
      extDb.weapons.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ ОРУЖИЯ В DATABASE.JS (БЕЗ ПЕРЕЗАПИСИ СУЩЕСТВУЮЩИХ КАРТОЧЕК)
// Пакет №3: Лёгкие, Средние и Тяжёлые ПП (SMGs) + Дробовики (Shotguns) (стр. 17–22)
// ============================================================================
(function appendWeaponsPack3() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.weapons)) extDb.weapons = [];
  if (!Array.isArray(extCats.weapons)) extCats.weapons = [];

  const smgAndShotgunCategories = [
    "Лёгкие пистолеты-пулемёты",
    "Средние пистолеты-пулемёты",
    "Тяжёлые пистолеты-пулемёты",
    "Дробовики"
  ];
  smgAndShotgunCategories.forEach(c => {
    if (!extCats.weapons.includes(c)) extCats.weapons.push(c);
  });

  const PACK_3_ITEMS = [
    // --- ЛЁГКИЕ ПИСТОЛЕТЫ-ПУЛЕМЁТЫ (LIGHT SMGS, стр. 17-18) ---
    {
      id: "bsw-lsmg-techassault1",
      name: "Federated Arms Tech-Assault",
      origName: "Federated Arms Tech-Assault",
      category: "Лёгкие пистолеты-пулемёты",
      typeCode: "ПП", to: "+1", skr: "Кур", dos: "Отл",
      damage: "1d6 (.22)", ammo: ".22 безгильзовый", mag: "30", sko: "10 / 30", nad: "НН", range: "100м", cost: "160 eb", book: "SOF / SOF2",
      desc: "Тридцатизарядный мелкокалиберный пистолет-пулемёт с режимом полного автоогня. При стрельбе длинной очередью имеет 10% шанс расплавиться!"
    },
    {
      id: "bsw-lsmg-techassault2",
      name: "Federated Arms Tech-Assault II",
      origName: "Federated Arms Tech-Assault II",
      category: "Лёгкие пистолеты-пулемёты",
      typeCode: "ПП", to: "+1", skr: "Кур", dos: "Обы",
      damage: "1d6+1 (6мм)", ammo: "6мм безгильзовый", mag: "50", sko: "25", nad: "ОБ", range: "150м", cost: "400 eb", book: "CP20",
      desc: "Обновлённая версия классического Tech-Assault I: увеличенный магазин на 50 патронов, улучшенный автоогонь и больше никакого плавления ствола. Честное слово."
    },
    {
      id: "bsw-lsmg-hkmpk9",
      name: "Heckler & Koch MPK-9",
      origName: "Heckler & Koch MPK-9",
      category: "Лёгкие пистолеты-пулемёты",
      typeCode: "ПП", to: "+1", skr: "Кур", dos: "Обы",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "35", sko: "25", nad: "ОБ", range: "150м", cost: "520 eb", book: "CP20",
      desc: "Лёгкий композитный пистолет-пулемёт с высококачественными прицельными приспособлениями. Рабочая лошадка многих европейских Соло."
    },
    {
      id: "bsw-lsmg-minigat",
      name: "Пятиствольный карабин Militech Mini-Gat",
      origName: "Militech Mini-Gat Machine Carbine",
      category: "Лёгкие пистолеты-пулемёты",
      typeCode: "ПП", to: "0", skr: "Плащ", dos: "Мал",
      damage: "1d6 (.22 / 5мм)", ammo: "5мм (.22) безгильзовый", mag: "120", sko: "40", nad: "ОБ", range: "150м", cost: "695 eb", book: "Chr1",
      desc: "Пятиствольный мини-гатлинг под 5-мм безгильзовый патрон с электровоспламенением от аккумулятора в шнековом магазине. Выплёвывает все 120 патронов менее чем за 5 секунд (СКО 40)!"
    },
    {
      id: "bsw-lsmg-setsukopms",
      name: "Бесшумный ПП Setsuko-Arasaka «PMS»",
      origName: "Setsuko-Arasaka \"PMS\" Sub-Machine Gun",
      category: "Лёгкие пистолеты-пулемёты",
      typeCode: "ПП", to: "+1", skr: "Плащ", dos: "Мал",
      damage: "1d6+2 (7мм)", ammo: "7мм дозвуковой безгильз.", mag: "40", sko: "20", nad: "ОБ", range: "150м", cost: "950 eb (1,150 смарт)", book: "Chr1",
      desc: "Производится дочерним предприятием Arasaka на автоматизированном заводе в Найт-Сити для тайных операций корпоративной безопасности. Стреляет дозвуковыми 7-мм пулями через встроенный глушитель Sonex."
    },
    {
      id: "bsw-lsmg-suranam",
      name: "Микро-ПП Suranam Machine Pistol",
      origName: "Suranam Machine Pistol",
      category: "Лёгкие пистолеты-пулемёты",
      typeCode: "ПП", to: "0", skr: "Кур / Плащ", dos: "Обы",
      damage: "1d6+4 (.177 эксп.)", ammo: ".177 разрывной безгильз.", mag: "25 / 50", sko: "50", nad: "НН", range: "150м", cost: "375 eb", book: "SOF / SOF2",
      desc: "Корейский карбон-пластиковый микро-ПП со складным проволочным прикладом под крошечный разрывной патрон калибра .177. Бешеный темп стрельбы (СКО 50!) приводит к чудовищному перегреву: при клине или критическом промахе с вероятностью 75% сдетонирует весь боезапас в магазине, нанося 2d6 урона руке стрелка (броня делится пополам)!"
    },
    {
      id: "bsw-lsmg-uziminiauto9",
      name: "Uzi Miniauto 9",
      origName: "Uzi Miniauto 9",
      category: "Лёгкие пистолеты-пулемёты",
      typeCode: "ПП", to: "+1", skr: "Кур", dos: "Отл",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "30", sko: "35", nad: "ОТ", range: "150м", cost: "475 eb", book: "CP20",
      desc: "Полностью пластиковый наследник классического Uzi XXI века с роторным электромагазином и регулируемым спуском. Выбор многих охранных Соло."
    },

    // --- СРЕДНИЕ ПИСТОЛЕТЫ-ПУЛЕМЁТЫ (MEDIUM SMGS, стр. 18-20) ---
    {
      id: "bsw-msmg-minami10",
      name: "Arasaka WMA «Minami 10»",
      origName: "Arasaka WMA \"Minami 10\"",
      category: "Средние пистолеты-пулемёты",
      typeCode: "ПП", to: "0", skr: "Кур", dos: "Отл",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "40", sko: "20", nad: "ОТ", range: "200м", cost: "500 eb", book: "CP20",
      desc: "Стандартный пистолет-пулемёт службы безопасности корпорации «Арасака» по всему миру. За доплату в 200 eb выпускается версия со встроенным глушителем (ТО -1, СКР: Плащ)."
    },
    {
      id: "bsw-msmg-beretta1010",
      name: "Beretta 1010 Machine Pistol",
      origName: "Beretta 1010 Machine Pistol",
      category: "Средние пистолеты-пулемёты",
      typeCode: "ПП", to: "-2", skr: "Кур (Кар)", dos: "Обы",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "30 (15)", sko: "15", nad: "ОБ", range: "100м", cost: "475 eb", book: "UK (Rough Guide)",
      desc: "Сверхкомпактный и плоский автоматический пистолет для телохранителей и работы под прикрытием (не оттопыривает дизайнерский пиджак). При установке укороченного магазина на 15 патронов и снятии кожуха ствола скрытность повышается до «Кар» (крупный карман)."
    },
    {
      id: "bsw-msmg-berettam24",
      name: "Beretta M-24 (PM-24S) Advanced SMG",
      origName: "Beretta M-24 Advanced Submachine Gun",
      category: "Средние пистолеты-пулемёты",
      typeCode: "ПП", to: "+2", skr: "Плащ", dos: "Мал",
      damage: "2d6+1 (9мм)", ammo: "9мм безгильзовый", mag: "50", sko: "25", nad: "ОТ", range: "200м", cost: "950 eb (1,250 смарт)", book: "Chr1",
      desc: "Новое табельное оружие Интерпола от Beretta Euroarms. Создан на базе проверенного M-12, оснащён дульным компенсатором отдачи, магазином на 50 патронов и встроенным смартлинком (в версии за 1250 eb)."
    },
    {
      id: "bsw-msmg-hkmp2013",
      name: "Heckler & Koch MP-2013",
      origName: "Heckler & Koch MP-2013",
      category: "Средние пистолеты-пулемёты",
      typeCode: "ПП", to: "+1", skr: "Кур", dos: "Обы",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "35", sko: "32", nad: "ОБ", range: "200м", cost: "450 eb", book: "CP20",
      desc: "Глубокая модернизация классического H&K MP-5K из композитных полимеров со встроенным глушителем."
    },
    {
      id: "bsw-msmg-imigamdaii",
      name: "Штурмовой ПП с гранатомётом IMI «Gamdaii»",
      origName: "IMI \"Gamdaii\"",
      category: "Средние пистолеты-пулемёты",
      typeCode: "ПП + ТЯЖ", to: "+2 (ПП) / 0 (ГП)", skr: "Нет", dos: "Отл",
      damage: "2d6+3 (10мм) / 25мм граната", ammo: "10мм безгильз. + 25мм ГП", mag: "35x2 + 1", sko: "25 / 1", nad: "ОТ / ОБ", range: "200м / 100м", cost: "950 eb", book: "SOF / SOF2",
      desc: "Израильский комплекс для спецподразделений Моссада: 10-мм ПП с двойным питанием (два магазина по 35 патронов с переключателем типа боеприпасов под большой палец) и встроенным однозарядным 25-мм подствольным гранатомётом (или переходником под ружейный патрон 10-го калибра). Особые низкоскоростные 25-мм гранаты IMI не имеют безопасной дистанции взведения и детонируют сразу при ударе!"
    },
    {
      id: "bsw-msmg-maloriansubflech",
      name: "Игольчатый ПП Malorian Arms Sub-Flechette Gun",
      origName: "Malorian Arms Sub-Flechette Gun",
      category: "Средние пистолеты-пулемёты",
      typeCode: "ПП", to: "+2", skr: "Кур", dos: "Обы",
      damage: "1d6 x 1d6 (броня x1/4)", ammo: "10мм кассетный флешеттный", mag: "10 / 30", sko: "3 / 35", nad: "ОТ", range: "200м", cost: "795 eb", book: "Chr1",
      desc: "Флешеттный ПП полу-буллпап компоновки с вращающимся затвором. Каждый 10-мм безгильзовый патрон несёт 6 стальных игл-пенетраторов: при попадании пули бросьте 1d6, чтобы узнать, сколько игл вошло в эту локацию тела. Каждая игла наносит 1d6 урона, при этом броня цели снижается до 1/4 ОС!"
    },
    {
      id: "bsw-msmg-militech10",
      name: "Militech 10 Submachine Gun",
      origName: "Militech 10 Submachine Gun",
      category: "Средние пистолеты-пулемёты",
      typeCode: "ПП", to: "+1", skr: "Кур", dos: "Отл",
      damage: "2d6+3 (10мм) / 2d6+2 (.45)", ammo: "10мм PlasticCase / .45 ACP", mag: "30", sko: "20", nad: "ОБ", range: "200м", cost: "455 eb", book: "Chr1",
      desc: "Лёгкий и точный композитный ПП, выпускаемый в двух калибрах (10мм в пластиковой гильзе или классический .45 ACP) и 8 дизайнерских расцветках (красный, синий, зелёный, чёрный, серебряный, камуфляж, золотой, серый)."
    },
    {
      id: "bsw-msmg-milviper",
      name: "Militech Viper Submachinegun",
      origName: "Militech Viper Submachinegun",
      category: "Средние пистолеты-пулемёты",
      typeCode: "ПП", to: "0 (-1 с глуш.)", skr: "Кур", dos: "Мал",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "40", sko: "30", nad: "ОТ", range: "200м", cost: "600 eb (+150 глуш.)", book: "Corp2",
      desc: "Штатный ПП десантников и спецназа ЧВК «Лазарь» (Lazarus Group). Почти всегда используется со штатным глушителем (+150 eb, снижает ТО на -1)."
    },
    {
      id: "bsw-msmg-mustangars5c",
      name: "Mustang Arms ARS-5C Submachinegun",
      origName: "Mustang Arms ARS-5C Submachinegun",
      category: "Средние пистолеты-пулемёты",
      typeCode: "ПП", to: "+1", skr: "Кур", dos: "Обы",
      damage: "2d6+3 (10мм)", ammo: "10мм безгильзовый", mag: "40", sko: "3 / 40", nad: "ОТ", range: "100м", cost: "600 eb (1,200 смарт)", book: "Corp3",
      desc: "Скорострельный ПП из высокопрочной керамики Sortex™ с режимами одиночного огня, отсечки по 3 выстрела и сокрушительной очереди (СКО 40). Камуфляж — 650 eb, оптика (+2 при прицеливании) — +100 eb, ЛЦУ — +100 eb, глушитель — +50 eb."
    },
    {
      id: "bsw-msmg-sten",
      name: "Самодельный ПП кочевников «Sten»",
      origName: "\"Sten\"",
      category: "Средние пистолеты-пулемёты",
      typeCode: "ПП", to: "-2", skr: "Плащ", dos: "Отл",
      damage: "1d6 / 2d6+1 / 2d6+3 / 4d6+1", ammo: ".22 / 9мм / .357 / 12мм", mag: "30", sko: "3 / 30", nad: "ОБ / НН", range: "50–100м", cost: "~200 eb", book: "NeoTribes",
      desc: "Общее название любых кустарных или переделанных пистолетов-пулемётов кочевников и уличных банд («zipper-guns»). Могут быть расточены под любой доступный патрон от .22 LR (1d6) и 9мм (2d6+1) до .357 Magnum (2d6+3) и 12мм (4d6+1)."
    },
    {
      id: "bsw-msmg-stolbovoysts",
      name: "ПП Столбового (Stolbovoy StS Submachinegun)",
      origName: "Stolbovoy StS Submachinegun",
      category: "Средние пистолеты-пулемёты",
      typeCode: "ПП", to: "-1", skr: "Кур", dos: "Обы (СНГ) / Ред",
      damage: "2d6+3 (10мм)", ammo: "10мм гильзовый", mag: "35", sko: "30", nad: "ОТ (клин только на 1)", range: "100м", cost: "600 eb (1,200 смарт)", book: "Corp3",
      desc: "Неубиваемый советский пистолет-пулемёт с фиксированным или складным прикладом. Как и вся линейка оружия «Столбовой», не боится грязи и при проверке осечки клинит только при выпадении 1."
    },

    // --- ТЯЖЁЛЫЕ ПИСТОЛЕТЫ-ПУЛЕМЁТЫ (HEAVY SMGS, стр. 20) ---
    {
      id: "bsw-hsmg-tuzi7",
      name: "CCMMC Tuzi-7",
      origName: "CCMMC Tuzi-7",
      category: "Тяжёлые пистолеты-пулемёты",
      typeCode: "ПП", to: "-2", skr: "Кур", dos: "Мал",
      damage: "3d6 (11мм)", ammo: "11мм безгильзовый", mag: "30", sko: "15", nad: "ОБ", range: "100м", cost: "125 eb (500 YY)", book: "PR (Pacific Rim)",
      desc: "Тяжёлый армейский пистолет-пулемёт НОАК для боя в замкнутых пространствах, также популярный у китайских уличных банд. Доступен только в Китае."
    },
    {
      id: "bsw-hsmg-cityreaper",
      name: "Штурмовой комплекс Chadran Arms City Reaper",
      origName: "Chadran Arms City Reaper",
      category: "Тяжёлые пистолеты-пулемёты",
      typeCode: "ПП + ДРБ", to: "0 (ПП) / -1 (ДРБ)", skr: "Плащ", dos: "Мал",
      damage: "3d6 (11мм) / 4d6 (12 кал.)", ammo: "11мм безгильз. + 12 кал.", mag: "40 + 10", sko: "20 / 3", nad: "ОТ / ОБ", range: "200м / 50м", cost: "950 eb", book: "Interface",
      desc: "Двуствольный вертикальный штурмовой комплекс городских подразделений корпорации IPC, объединяющий 11-мм тяжёлый пистолет-пулемёт (40 патронов, СКО 20) и подствольный полуавтоматический дробовик 12-го калибра (10 патронов, СКО 3)."
    },
    {
      id: "bsw-hsmg-hkmpk11",
      name: "Heckler & Koch MPK-11",
      origName: "Heckler & Koch MPK-11",
      category: "Тяжёлые пистолеты-пулемёты",
      typeCode: "ПП", to: "0", skr: "Плащ", dos: "Обы",
      damage: "4d6+1 (12мм)", ammo: "12мм безгильзовый", mag: "30", sko: "20", nad: "ОБ", range: "200м", cost: "700 eb", book: "CP20",
      desc: "Пожалуй, самый популярный тяжёлый ПП среди профессиональных Соло. Модульная конструкция позволяет пересобирать его в буллпап, классический ПП или штурмовой карабин, а также устанавливать подствольный гранатомёт."
    },
    {
      id: "bsw-hsmg-hkmpk2020",
      name: "Heckler & Koch MPK-2020 SMG",
      origName: "Heckler & Koch MPK-2020 SMG",
      category: "Тяжёлые пистолеты-пулемёты",
      typeCode: "ПП", to: "+2*", skr: "Плащ", dos: "Мал",
      damage: "4d6+1 (12мм)", ammo: "12мм безгильзовый", mag: "60", sko: "30", nad: "ОБ", range: "200м", cost: "750 eb", book: "UK (Rough Guide)",
      desc: "Наследник MP5 и G3, созданный специально для европейских антитеррористических групп (GSG-9, SAS, GIGN). Оснащён встроенным ЛЦУ или смарт-интерфейсом (ТО +2) и огромным магазином на 60 безгильзовых 12-мм патронов."
    },
    {
      id: "bsw-hsmg-mac14",
      name: "Ingram MAC 14",
      origName: "Ingram MAC 14",
      category: "Тяжёлые пистолеты-пулемёты",
      typeCode: "ПП", to: "-2", skr: "Плащ", dos: "Отл",
      damage: "4d6+1 (12мм)", ammo: "12мм безгильзовый", mag: "40", sko: "10", nad: "ОБ", range: "200м", cost: "650 eb", book: "CP20",
      desc: "Обновлённый MAC-10 с композитным корпусом и цилиндрическим шнековым магазином на 40 крупнокалиберных 12-мм патронов."
    },
    {
      id: "bsw-hsmg-sternsmg21",
      name: "Sternmeyer SMG-21",
      origName: "Sternmeyer SMG-21",
      category: "Тяжёлые пистолеты-пулемёты",
      typeCode: "ПП", to: "-1 (0 одиноч.)", skr: "Плащ", dos: "Отл",
      damage: "3d6 (11мм)", ammo: "11мм безгильзовый", mag: "30", sko: "3 / 15", nad: "ОТ", range: "200м", cost: "500 eb", book: "CP20",
      desc: "Флагман Sternmeyer в антитеррористическом классе, широко применяемый отрядами C-SWAT, Киберпсихопатрулём (PsychoSquad) и охраной IEC. При стрельбе одиночными с закрытого затвора точность повышается с -1 до 0."
    },

    // --- ДРОБОВИКИ (SHOTGUNS, стр. 21-22) ---
    {
      id: "bsw-sht-arasakawcaa",
      name: "Arasaka WCAA «Rapid Assault Shot 12»",
      origName: "Arasaka WCAA \"Rapid Assault Shot 12\"",
      category: "Дробовики",
      typeCode: "ДРБ", to: "-1", skr: "Нет", dos: "Обы",
      damage: "4d6 (12 кал.)", ammo: "12-й калибр (гильзовый)", mag: "20", sko: "2 / 10", nad: "ОБ", range: "50м", cost: "900 eb", book: "CP20",
      desc: "Высокомощный автоматический дробовик корпорации «Арасака», прозванный на улицах «Poser Hoser» («Шланг для позёров»). Ещё одна веская причина обходить «парней в чёрном» стороной."
    },
    {
      id: "bsw-sht-ccmmcqi15",
      name: "CCMMC Qi-15",
      origName: "CCMMC Qi-15",
      category: "Дробовики",
      typeCode: "ДРБ", to: "-2", skr: "Нет", dos: "Мал",
      damage: "4d6 (12 кал.)", ammo: "12-й калибр", mag: "15", sko: "2 / 10", nad: "ОБ", range: "50м", cost: "150 eb (600 YY)", book: "PR (Pacific Rim)",
      desc: "Штурмовой автоматический дробовик НОАК и Общественной безопасности КНР для жёсткого подавления бунтов. Доступен только в Китае."
    },
    {
      id: "bsw-sht-hurricane",
      name: "Constitution Arms Hurricane Assault Weapon",
      origName: "Constitution Arms Hurricane Assault Weapon",
      category: "Дробовики",
      typeCode: "ДРБ", to: "0", skr: "Нет", dos: "Мал",
      damage: "4d6 (12 кал. Магнум)", ammo: "12-й калибр Магнум", mag: "40", sko: "4 / 20", nad: "ОБ", range: "70м", cost: "1,000 eb", book: "PAC",
      desc: "Скорострельный двуствольный автодробовик с попеременно движущимися стволами (для защиты от перегрева), гидропневматическим гасителем отдачи в прикладе и 40-зарядным седловидным барабаном. Излюбленное оружие отрядов Max-Tac против киберпсихов."
    },
    {
      id: "bsw-sht-lastchance",
      name: "Одноразовый ствол Enfield-Ubichi LastChance",
      origName: "Enfield-Ubichi LastChance",
      category: "Дробовики",
      typeCode: "ДРБ", to: "0", skr: "Кур", dos: "Обы",
      damage: "4d6 (12 кал.)", ammo: "12-й калибр (1 выстрел)", mag: "1", sko: "1", nad: "НН", range: "25м", cost: "60 eb", book: "ES+",
      desc: "Опасная и удручающе популярная вариация полимерной «однодневки»: 45-сантиметровая стеклопластиковая трубка с одним патроном 12-го калибра и пружинным бойком. Любимое оружие уличных отбросов и наёмных убийц."
    },
    {
      id: "bsw-sht-franchip16",
      name: "Luigi Franchi P.16",
      origName: "Luigi Franchi P.16",
      category: "Дробовики",
      typeCode: "ДРБ", to: "+1", skr: "Плащ", dos: "Ред",
      damage: "4d6 (12 кал.)", ammo: "12-й калибр", mag: "20", sko: "2 / 10", nad: "ОБ", range: "50м", cost: "980 eb", book: "ES+",
      desc: "Короткий и приземистый европейский автоматический дробовик с высокой точностью (ТО +1), стоящий на вооружении полиции Евротеатра."
    },
    {
      id: "bsw-sht-kingbuck",
      name: "Четырёхствольный дробовик Luigi Franchi «King Buck»",
      origName: "Luigi Franchi \"King Buck\" Multi-Magnum",
      category: "Дробовики",
      typeCode: "ДРБ", to: "-1", skr: "Нет", dos: "Мал",
      damage: "6d6 / 5d6 / 4d6 (10 кал.)", ammo: "10-й калибр Магнум (3\")", mag: "4", sko: "2 / 4 (залп!)", nad: "ОТ", range: "50м", cost: "800 eb", book: "Chr2",
      desc: "Огромный (7 кг) итальянский четырёхствольный дробовик под патрон 10-го калибра Магнум (урон 6d6 вблизи, 5d6 на средней, 4d6 на дальней; также может стрелять 25-мм мини-гранатами Militech!). Позволяет выстрелить из всех 4 стволов одновременно, но без киберруки или ТЕЛА 11+ такой залп наносит самому стрелку 2d6 урона в торс!"
    },
    {
      id: "bsw-sht-warhammer",
      name: "Штурмовой дробовик MetaCorp Warhammer™",
      origName: "MetaCorp Warhammer Assault Shotgun",
      category: "Дробовики",
      typeCode: "ДРБ", to: "-1", skr: "Нет", dos: "Мал",
      damage: "4d6+3 (картечь) / 4d6+2 ББ", ammo: "12-й калибр Магнум", mag: "16", sko: "1 / 3", nad: "ОТ", range: "75м", cost: "700 eb", book: "NeoTribes",
      desc: "Возрождённый корпорацией MetaCorp легендарный Pancor Jackhammer с барабаном на 16 патронов и кераметаллическим стволом (дальность 75 м). Использует картечь Магнум (4d6+3), фугасные выстрелы (4d6 в радиусе 0.5 м) и двухцелевые бронебойные пули (4d6+2 ББ: по броне x1/2, по незащищённой плоти x1.5!)."
    },
    {
      id: "bsw-sht-m12caw",
      name: "Армейский дробовик Military M-12 CAW («Dial-A-Gun»)",
      origName: "Military M-12 Close Assault Weapon",
      category: "Дробовики",
      typeCode: "ДРБ", to: "0", skr: "Нет", dos: "Мал",
      damage: "4d6+ (по типу 12 кал.)", ammo: "12-й калибр Магнум", mag: "20", sko: "3 / 10 (1 при выборе)", nad: "ОТ", range: "50м", cost: "950 eb", book: "HotB",
      desc: "Развитие боевого автодробовика Olin/H&K CAWS с роторным кассетным магазином на 20 патронов и переключателем типа боеприпаса (позволяет выбрать нужный патрон из барабана прямо в бою, снижая СКО до 1 в этот раунд)."
    },
    {
      id: "bsw-sht-bulldog",
      name: "Militech Bulldog Compact Assault Shotgun",
      origName: "Militech Bulldog Compact Assault Shotgun",
      category: "Дробовики",
      typeCode: "ДРБ", to: "0 (+1 пулей)", skr: "Плащ", dos: "Мал",
      damage: "4d6 (картечь) / 4d6+2 ББ (пуля)", ammo: "12-й калибр", mag: "21", sko: "3 / 10", nad: "ОБ", range: "50м", cost: "1,000 eb (+500 смарт)", book: "Corp2",
      desc: "Компактный автодробовик с коробчатым «бананом» на 21 патрон, газовыми компенсаторами отдачи и лазерно-дифракционным прицелом, рисующим на цели красный круг осыпи дроби (или точку с ТО +1 при стрельбе пулей)."
    },
    {
      id: "bsw-sht-crusher",
      name: "Пистолет-дробовик Militech Crusher SSG",
      origName: "Militech Crusher SSG",
      category: "Дробовики",
      typeCode: "ДРБ", to: "-1 (до 12м) / -3 (до 25м)", skr: "Кур", dos: "Обы",
      damage: "3d6 (до 12м) / 1d6+2 (до 25м)", ammo: "20-й калибр (#4)", mag: "6", sko: "2", nad: "ОБ", range: "12 / 25м", cost: "450 eb", book: "Chr1",
      desc: "Бесприкладный штурмовой дробовик пистолетного формата под 20-й калибр с 25-см стволом для зачистки комнат и окопов. На дистанции до 12 м имеет ТО -1 и урон 3d6; от 12 до 25 м — ТО -3 и урон 1d6+2 (далее 25 м неэффективен)."
    },
    {
      id: "bsw-sht-milmpshotgun",
      name: "Militech Military/Police Shotgun",
      origName: "Militech Military/Police Shotgun",
      category: "Дробовики",
      typeCode: "ДРБ", to: "0 (-1 слож.)", skr: "Нет / Плащ", dos: "Обы",
      damage: "4d6 (12 кал.) / 5d6 (10 кал.)", ammo: "12-й или 10-й калибр", mag: "8 (6 для 10 кал.)", sko: "2", nad: "ОБ", range: "50м", cost: "300 eb", book: "Chr1",
      desc: "Газоотводный полуавтоматический дробовик военной полиции со складным прикладом и коробчатым магазином на 8 патронов 12-го калибра (или 6 патронов 10-го калибра с уроном 5d6 без складного приклада)."
    },
    {
      id: "bsw-sht-closecontrol20",
      name: "Mustang Arms Close-Control 20",
      origName: "Mustang Arms Close-Control 20",
      category: "Дробовики",
      typeCode: "ДРБ", to: "-1", skr: "Нет", dos: "Мал",
      damage: "3d6 (20 кал.)", ammo: "20-й калибр (#4)", mag: "15", sko: "2", nad: "ОБ", range: "50м", cost: "350 eb", book: "SOF / SOF2",
      desc: "Лёгкий 66-сантиметровый композитный буллпап-дробовик 20-го калибра с прозрачным пластиковым магазином на 15 патронов, созданный в Найт-Сити для боя внутри зданий."
    },
    {
      id: "bsw-sht-raider",
      name: "Mustang Arms «Raider» Riot Shotgun",
      origName: "Mustang Arms \"Raider\" Riot Shotgun",
      category: "Дробовики",
      typeCode: "ДРБ", to: "0 (-1 со слож. прикл.)", skr: "Плащ / Нет", dos: "Обы",
      damage: "4d6 (12 кал.)", ammo: "12-й калибр", mag: "5 / 9", sko: "2", nad: "ОБ", range: "50м", cost: "400 eb", book: "Corp3",
      desc: "Полуавтоматический дробовик со сменным подствольным трубчатым магазином: можно как дозаряжать по одному патрону снизу, так и целиком менять снаряжённую трубку магазина за считанные секунды!"
    },
    {
      id: "bsw-sht-stakeout10",
      name: "Sternmeyer Stakeout 10",
      origName: "Sternmeyer Stakeout 10",
      category: "Дробовики",
      typeCode: "ДРБ", to: "-2", skr: "Плащ", dos: "Ред",
      damage: "4d6 (12 кал.)", ammo: "12-й калибр", mag: "10", sko: "2", nad: "ОБ", range: "50м", cost: "450 eb", book: "CP20",
      desc: "Лёгкий полицейский дробовик для засад и патрулей, стоящий на вооружении городских департаментов полиции и охраны IEC."
    },
    {
      id: "bsw-sht-ragnarok",
      name: "Электротермический дробовик Tsunami Arms «Ragnarok»",
      origName: "Tsunami Arms \"Ragnarok\" Close Assault Weapon",
      category: "Дробовики",
      typeCode: "ДРБ", to: "0", skr: "Нет", dos: "Ред",
      damage: "6d6 (12 кал. EAE)", ammo: "12-й калибр электротерм.", mag: "40", sko: "2 / 20", nad: "ОБ", range: "70м", cost: "4,500 eb", book: "PR (Pacific Rim)",
      desc: "Абсолютная мясорубка от Tsunami Arms для токийского C-SWAT: сочетает двуствольную схему с гидропневматическим гашением отдачи (как у Hurricane), барабан на 40 патронов и систему электротермического усиления боеприпасов (EAE), разгоняющую каждый выстрел 12-го калибра до 6d6 урона!"
    }
  ];

  PACK_3_ITEMS.forEach(newItem => {
    const exists = extDb.weapons.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase()) ||
      (existing.origName && existing.origName.toLowerCase() === newItem.origName.toLowerCase())
    );
    if (!exists) {
      extDb.weapons.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ ОРУЖИЯ В DATABASE.JS (БЕЗ ПЕРЕЗАПИСИ СУЩЕСТВУЮЩИХ КАРТОЧЕК)
// Пакет №4: Штурмовые, снайперские, прочие винтовки и пулемёты (стр. 27–34)
// ============================================================================
(function appendWeaponsPack4() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.weapons)) extDb.weapons = [];
  if (!Array.isArray(extCats.weapons)) extCats.weapons = [];

  const rifleAndMgCategories = [
    "Штурмовые винтовки",
    "Снайперские винтовки",
    "Прочие винтовки",
    "Пулемёты"
  ];
  rifleAndMgCategories.forEach(c => {
    if (!extCats.weapons.includes(c)) extCats.weapons.push(c);
  });

  const PACK_4_ITEMS = [
    // --- ШТУРМОВЫЕ ВИНТОВКИ (ASSAULT RIFLES, стр. 27-29) ---
    {
      id: "bsw-ar-akr20",
      name: "AKR-20 Medium Assault",
      origName: "AKR-20 Medium Assault",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "0", skr: "Нет", dos: "Обы",
      damage: "5d6 (5.45мм)", ammo: "5.45мм гильзовый", mag: "30", sko: "1 / 30", nad: "ОБ", range: "400м", cost: "500 eb", book: "CP20",
      desc: "Модернизированный пластиковый и карбоновый вариант АКМ, распространённый по всему бывшему Советскому блоку."
    },
    {
      id: "bsw-ar-arasaka",
      name: "Будпап-винтовка Arasaka WAA Bullpup",
      origName: "Arasaka WAA Bullpup Assault Weapon",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Обы",
      damage: "5d6 (5.56мм)", ammo: "5.56мм безгильзовый", mag: "30 (15/5)", sko: "3 / 30", nad: "ОТ", range: "400м", cost: "800 eb", book: "Corp1",
      desc: "Типичная буллпап-винтовка Arasaka со встроенным оптическим прицелом (ТО +1) и заводским смартлинком. Штатное оружие солдат Arasaka."
    },
    {
      id: "bsw-ar-jinhua9",
      name: "CCMMC Jinhua M-9",
      origName: "CCMMC Jinhua M-9",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "0", skr: "Нет", dos: "Мал",
      damage: "6d6+2 (7.62мм)", ammo: "7.62мм безгильзовый", mag: "35", sko: "1 / 25", nad: "ОБ", range: "400м", cost: "125 eb (500 YY)", book: "PR (Pacific Rim)",
      desc: "Штурмовая винтовка НОАК (аналог Militech Ronin, но под более мощный патрон и менее надёжная). Узнаваема по золотому цветку на прикладе. Доступна только в Китае."
    },
    {
      id: "bsw-ar-junglereaper",
      name: "Штурмовой комплекс Chadran Arms Jungle Reaper",
      origName: "Chadran Arms Jungle Reaper",
      category: "Штурмовые винтовки",
      typeCode: "ВИН + ТЯЖ", to: "+1 (вин) / -2 (ГП)", skr: "Нет", dos: "Мал",
      damage: "5d6 (5.56мм) / 25мм граната", ammo: "5.56мм + 25мм гранаты", mag: "60 + 6", sko: "20 / 2", nad: "ОТ / ОБ", range: "400м / 200м", cost: "1,550 eb", book: "Interface",
      desc: "Двуствольный штурмовой комплекс корпоративных войск IPC с магазином на 60 патронов и подствольным 6-зарядным 25-мм гранатомётом."
    },
    {
      id: "bsw-ar-coltm18",
      name: "Colt M-18 Assault Weapon",
      origName: "Colt M-18 Assault Weapon",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Обы",
      damage: "5d6 (5.56мм)", ammo: "5.56мм безгильзовый", mag: "35", sko: "3 / 30", nad: "ОТ", range: "400м", cost: "750 eb", book: "Corp3",
      desc: "Флагманская полноразмерная штурмовая винтовка Colt в матовом керамическом корпусе Sortex™ со встроенным быстросъёмным оптическим прицелом (ТО +1). Камуфляж — 850 eb, смартлинк — +750 eb."
    },
    {
      id: "bsw-ar-darrapoly9",
      name: "Darra-Polytechnic M-9 Assault Rifle",
      origName: "Darra-Polytechnic M-9 Assault Rifle",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "0 (-1)", skr: "Нет", dos: "Отл",
      damage: "4d6+2 (5.5мм HK)", ammo: "5.5мм безгильзовый", mag: "40", sko: "2 / 25", nad: "ОБ", range: "200м", cost: "300 eb", book: "Chr1",
      desc: "Первая штурмовая винтовка Индо-Китайской Конфедерации в традиционном компоновочном исполнении (похожа на АК). Из-за низкой цены и массового экспорта стала повсеместным оружием стран третьего мира. Штатно оснащается половинным оптическим прицелом (1.2x) и складным прикладом."
    },
    {
      id: "bsw-ar-fnral",
      name: "FN-RAL Heavy Assault Rifle",
      origName: "FN-RAL Heavy Assault Rifle",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "-1 (-2 со склад. прикл.)", skr: "Нет", dos: "Обы",
      damage: "6d6+2 (7.62мм)", ammo: "7.62мм безгильзовый", mag: "30", sko: "3 / 30", nad: "ОТ", range: "400м", cost: "600 eb", book: "CP20",
      desc: "Стандартная тяжёлая штурмовая винтовка войск НАТО и ЕС под мощный патрон 7.62мм со складным прикладом."
    },
    {
      id: "bsw-ar-fala15",
      name: "Federated Arms Light Assault 15 (LA-15)",
      origName: "Federated Arms Light Assault 15",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "0* (+1 очер.)", skr: "Нет", dos: "Отл",
      damage: "5d6+3 (7мм)", ammo: "7мм безгильзовый", mag: "30", sko: "3 / 25", nad: "ОТ", range: "400м", cost: "400 eb (700 смарт)", book: "Chr1",
      desc: "Прочная и недорогая буллпап-винтовка Federated Arms с оптическим прицелом. Оптимизирована под стрельбу отсечками по 3 патрона (ТО +1 в этом режиме)."
    },
    {
      id: "bsw-ar-fabarm2012",
      name: "Fábrica de Armes M-2012",
      origName: "Fábrica de Armes M-2012",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "+2", skr: "Нет", dos: "Ред",
      damage: "5d6+3 (6.5мм)", ammo: "6.5x45мм безгильзовый", mag: "30", sko: "1 / 4", nad: "ОТ", range: "400м", cost: "1,400 eb", book: "SOF / SOF2",
      desc: "Аргентинская штурмовая винтовка высокой надёжности со штатным лазерным прицелом-рефлексом Knopfler & König 2x. Легко перестволяется под советский 7.62x39, 7.62 NATO или французский короткий патрон."
    },
    {
      id: "bsw-ar-kalasha80",
      name: "Kalashnikov A-80 Heavy Assault Rifle",
      origName: "Kalashnikov A-80 Heavy Assault Rifle",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "-1", skr: "Нет", dos: "Обы",
      damage: "6d6+2 (7.62мм)", ammo: "7.62мм безгильзовый", mag: "35", sko: "3 / 25", nad: "ОБ", range: "400м", cost: "550 eb", book: "CP20",
      desc: "Очередная советская модернизация с улучшенными прицельными приспособлениями и облегченной композитной конструкцией."
    },
    {
      id: "bsw-ar-mildetachment",
      name: "Militech Dragon Light Assault Weapon",
      origName: "Militech Dragon Light Assault Weapon",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "0", skr: "Нет", dos: "Мал",
      damage: "6d6-1 (6.5мм гибрид)", ammo: "6.5мм гибридный безгильз.", mag: "35", sko: "30", nad: "ОТ", range: "400м", cost: "700 eb", book: "Corp2",
      desc: "Штатная лёгкая буллпап-винтовка парашютистов ЧВК «Лазарь» под гибридный патрон 6.5мм."
    },
    {
      id: "bsw-ar-m31aicw",
      name: "Штурмовой комплекс с гранатомётом Militech M-31a1 AICW",
      origName: "Militech M-31a1 Advanced Infantry Combat Weapon",
      category: "Штурмовые винтовки",
      typeCode: "ВИН + ТЯЖ", to: "+2 (вин) / -1 (ГП)", skr: "Нет", dos: "Ред",
      damage: "4d6 (4.5мм жидк.) / 25мм мини-ГП", ammo: "4.5мм жидк. + 25мм гранаты", mag: "150 + 4", sko: "3 / 30 + 2", nad: "ОБ", range: "400м / 150м", cost: "1,695 eb", book: "Chr1",
      desc: "Передовой штурмовой комплекс армии США с жидким метательным веществом (ЖМВ), смешивающим топливо в камере перед электропуском. Сверху расположен ствол калибра 4.5 мм с огромным магазином на 150 пуль, снизу — насосный 25-мм мини-гранатомёт."
    },
    {
      id: "bsw-ar-miltechmkv",
      name: "Militech Mk IV Assault Weapon (Revised)",
      origName: "Militech Mk IV Assault Weapon (Revised)",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Обы",
      damage: "6d6-1 (6.5мм) / 5d6 (5.56мм)", ammo: "6.5мм гибрид / 5.56мм", mag: "35", sko: "3 / 30", nad: "ОТ", range: "400м", cost: "800 eb", book: "Corp2",
      desc: "Мощная тяжёлая штурмовая винтовка с великолепной системой компенсации отдачи. Стандартное оружие пехоты США и сил «Лазарь». Система быстрой смены ствола в полевых условиях позволяет переделывать винтовку с патрона 6.5 мм на стандартный 5.56 мм. Принимает подствольный гранатомёт M-205."
    },
    {
      id: "bsw-ar-miltechronin",
      name: "Militech Ronin Light Assault (M-20)",
      origName: "Militech Ronin Light Assault",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Обы",
      damage: "5d6 (5.56мм)", ammo: "5.56мм безгильзовый", mag: "35", sko: "3 / 30", nad: "ОТ", range: "400м", cost: "450 eb", book: "CP20",
      desc: "Легендарная штурмовая винтовка M-16 XXI века, бывшая стандартом армии США более двух десятилетий (теперь заменяется на Mk IV, но всё ещё массово служит в Нацгвардии и резерве)."
    },
    {
      id: "bsw-ar-lpa1",
      name: "Штурмовая винтовка с жидким топливом Royal Enfield LPA1",
      origName: "Royal Enfield Ordnance Liquid Propellant Assault Rifle LPA1",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Ред",
      damage: "Перемен. (2d6+1 / 4d6 / 6d6)", ammo: "7.5мм (жидкое топливо)", mag: "2x45 (90)", sko: "1 / 3 / 20", nad: "ОТ", range: "500м", cost: "1,800 eb", book: "UK (Rough Guide)",
      desc: "Британская буллпап-винтовка с двойным шнековым магазином на 90 патронов и регулировкой скорости пули в трёх режимах (Low/2d6+1, Medium/4d6, High/6d6). Жидкое топливо впрыскивается в камеру компьютером на основе данных прицела Marconi SUSAT."
    },
    {
      id: "bsw-ar-m95a4",
      name: "Sternmeyer M-95A4 (CG-13B)",
      origName: "Sternmeyer M-95A4 (CG-13B) Assault Weapon",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Обы",
      damage: "5d6 (5.56мм)", ammo: "5.56мм безгильзовый", mag: "90", sko: "3 / 30", nad: "ОТ", range: "400м", cost: "695–750 eb", book: "SOF / SOF2",
      desc: "Надёжная пластиковая композитная винтовка под 5.56 мм с модульной системой смены прицелов (в базе — 4x оптика) и коробчатыми сменными магазинами."
    },
    {
      id: "bsw-ar-stolbovoyst5",
      name: "Автомат Столбового (Stolbovoy St-5 Assault Rifle)",
      origName: "Stolbovoy St-5 Assault Rifle",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "-1", skr: "Нет", dos: "Обы (СНГ) / Ред",
      damage: "5d6 (5.45мм)", ammo: "5.45мм гильзовый", mag: "30", sko: "1 / 30", nad: "ОТ (клин только на 1)", range: "400м", cost: "900 eb (1,800 смарт)", book: "Corp3",
      desc: "Элитная советская штурмовая буллпап-винтовка, созданная для работы в экстремальных условиях (жара, холод, грязь, песок, коррозия). Солдаты говорят о ней: «Она никогда не ломается!». Клинит только при выпадении 1 на кубике."
    },
    {
      id: "bsw-ar-towatype20",
      name: "Towa Manufacturing Type-20 AICW",
      origName: "Towa Manufacturing Type-20 Advanced Infantry Combat Weapon",
      category: "Штурмовые винтовки",
      typeCode: "ВИН + ТЯЖ", to: "+2 (вин) / 0 (ГП)", skr: "Нет", dos: "Ред",
      damage: "5d6 (5.56мм) / 25мм мини-ГП", ammo: "5.56мм + 25мм гранаты", mag: "100 + 4", sko: "3 / 45", nad: "ОТ", range: "400м / 150м", cost: "4,200 eb", book: "PR (Pacific Rim)",
      desc: "Передовой штурмовой комплекс Сил самообороны Японии (SDF) со встроенным смартлинком (ТО +4), встроенным 25-мм подствольным гранатомётом и сошками."
    },
    {
      id: "bsw-ar-towatype99",
      name: "Towa Manufacturing Type-99 Assault Rifle",
      origName: "Towa Manufacturing Type-99 Assault Rifle",
      category: "Штурмовые винтовки",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Обы",
      damage: "5d6 (5.56мм)", ammo: "5.56мм безгильзовый", mag: "35", sko: "3 / 30", nad: "ОТ", range: "400м", cost: "1,500 eb", book: "PR (Pacific Rim)",
      desc: "Стандартная штурмовая винтовка японской армии с 1999 года. Оснащена смарт-модулем (ТО +3) и сошками."
    },

    // --- СНАЙПЕРСКИЕ ВИНТОВКИ (SNIPER RIFLES, стр. 29-30) ---
    {
      id: "bsw-snp-arasakawssa",
      name: "Снайперская система Arasaka WSSA",
      origName: "Arasaka WSSA Sniper System",
      category: "Снайперские винтовки",
      typeCode: "ВИН", to: "+5 (смарт)", skr: "Нет", dos: "Ред",
      damage: "6d6 (3.5мм Frag-Flechette)", ammo: "3.5мм осколочные флешетты", mag: "40 (шнек)", sko: "2", nad: "ОТ", range: "600м", cost: "2,400 eb", book: "SOF / SOF2",
      desc: "Полуавтоматическая снайперская винтовка с утолщённым стволом, глушителем, пламегасителем и шнековым магазином на 40 саботированных микро-флешетт. Оснащена оптикой Zeiss 12x с ночным видением, дальномером и смартлинком (+2 к Восприятию)."
    },
    {
      id: "bsw-snp-barrettm90",
      name: "Крупнокалиберная снайперская винтовка Barrett M-90",
      origName: "Barrett M-90 Sniper Rifle",
      category: "Снайперские винтовки",
      typeCode: "ВИН", to: "+3", skr: "Нет", dos: "Ред",
      damage: "6d10 (12.7мм BMG / .50)", ammo: ".50 BMG (гильзовый)", mag: "10", sko: "1", nad: "ОТ", range: "1,000м", cost: "1,500 eb (2,500 кибер)", book: "HotB",
      desc: "Одна из тяжелейших снайперских винтовок в мире под патрон .50 BMG. Абсолютно бесполезна без оптического прицела. Киберсвязанная версия стоит 2,500 eb."
    },
    {
      id: "bsw-snp-barrettarasaka20",
      name: "Анти-киборг пушка Barrett-Arasaka Light-20",
      origName: "Barrett-Arasaka Light-20",
      category: "Снайперские винтовки",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Мал / Ред",
      damage: "4d10 (20/9мм APFSDS)", ammo: "20мм APFSDS (уран)", mag: "10", sko: "1", nad: "ОТ", range: "450м", cost: "2,000 eb", book: "CP20",
      desc: "Любимое оружие охотников на киберпсихов («Type-13 Heavy Sniper» в армии Японии). Quas-пушка длиной почти 2 метра, стреляющая подкалиберным урановым снарядом на сверхзвуке. Разрушает броню цели на 2 ОС за каждое попадание."
    },
    {
      id: "bsw-snp-frf6",
      name: "Французская снайперская винтовка FR-F6",
      origName: "FR-F6",
      category: "Снайперские винтовки",
      typeCode: "ВИН", to: "+3", skr: "Нет", dos: "Ред",
      damage: "6d6+2 (7.62мм)", ammo: "7.62мм гильзовый", mag: "10", sko: "2", nad: "ОТ", range: "500м", cost: "1,100 eb", book: "ES+",
      desc: "Современная французская армейская снайперская винтовка с сошками (дает +1 ТО на дальних дистанциях), компьютеризированным лазерным прицелом и глушителем."
    },
    {
      id: "bsw-snp-nomadlong",
      name: "Кочевая «Кентуккийская» 15-мм винтовка (Nomad Long Rifle)",
      origName: "Nomad 15mm \"Long Rifle\"",
      category: "Снайперские винтовки",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Ред",
      damage: "7d10 (15мм BMG)", ammo: "15мм BMG", mag: "9", sko: "1", nad: "ОТ", range: "900м", cost: "3,000 eb", book: "NeoTribes",
      desc: "Огромная противотанковая и снайперская винтовка под патрон 15mm BMG, производимая кланом Альдекальдо. В цену входят 10x оптика с LowLite, дульный тормоз, сошки и электроспуск. Разбирается на 3 части. Для стрельбы с рук требует ТЕЛО 9+."
    },
    {
      id: "bsw-snp-remgyrosniper",
      name: "Реактивная снайперская винтовка Remington Gyro-Sniper",
      origName: "Remington Gyro-Sniper Rifle",
      category: "Снайперские винтовки",
      typeCode: "ВИН", to: "+2", skr: "Нет", dos: "Ред",
      damage: "7d6 API (18мм Gyrojet)", ammo: "18мм реактивные снаряды", mag: "6", sko: "1", nad: "ОТ", range: "600м", cost: "1,000 eb", book: "PAC",
      desc: "Стреляет реактивными гиростабилизированными ракетами с лазерным наведением и баллистическим компьютером (LowLite и ИК встроены). Патроны дороги (400 eb за пачку из 50). На дистанции до 75 м ракета ещё не успевает набрать скорость (урон 3d6+2, ТО 0). Бронебойно-зажигательные (API) снаряды наносят ещё 1d6 пожарного урона в течение 2 раундов сквозь любую броню."
    },
    {
      id: "bsw-snp-towakai",
      name: "Towa Manufacturing Type-00-Kai",
      origName: "Towa Manufacturing Type-00-Kai",
      category: "Снайперские винтовки",
      typeCode: "ВИН", to: "+3", skr: "Нет", dos: "Ред",
      damage: "9d6+3 ББ (7.62мм EAE)", ammo: "7.62мм электротермический", mag: "6", sko: "1", nad: "ОТ", range: "1,200м", cost: "3,000 eb", book: "PR (Pacific Rim)",
      desc: "Модернизированная снайперская винтовка Сил самообороны Японии с электротермическим усилением выстрела (EAE), смартлинком и баллистическим компьютером."
    },

    // --- ПРОЧИЕ ВИНТОВКИ (OTHER RIFLES, стр. 30-31) ---
    {
      id: "bsw-oth-hk77uk",
      name: "Штурмовой карабин Heckler & Koch HK77UK",
      origName: "Heckler & Koch HK77UK",
      category: "Прочие винтовки",
      typeCode: "ВИН", to: "+1", skr: "Кур / Плащ", dos: "Мал",
      damage: "2d6+4 (9mm Long)", ammo: "9mm Long Caseless", mag: "30", sko: "3 / 30", nad: "ОТ", range: "250м", cost: "750 eb", book: "SOF / SOF2",
      desc: "Современный штурмовой карабин с автостабилизаторами и складным прикладом. Поддерживает установку 25-мм подствольника Militech, электронного прицела (+600 eb), глушителя (+200 eb) и магазина-улитки на 45 патронов."
    },
    {
      id: "bsw-oth-hughesrocket",
      name: "Реактивная винтовка Hughes Rocket Rifle",
      origName: "Hughes Rocket Rifle",
      category: "Прочие винтовки",
      typeCode: "ВИН", to: "-1", skr: "Нет", dos: "Ред",
      damage: "3d10 ББ (18мм HEAT)", ammo: "18мм кумулятивные ракеты", mag: "3", sko: "1", nad: "ОТ", range: "500м", cost: "750 eb", book: "Home/Brave",
      desc: "Военный монстр под длинные 18-мм реактивные гранаты с кумулятивной боевой частью (HEAT). Пробивает любую броню (прошедший урон НЕ делится пополам)."
    },
    {
      id: "bsw-oth-m99evaw",
      name: "Космический комплекс M-99 EVAW",
      origName: "M-99 EVAW",
      category: "Прочие винтовки",
      typeCode: "ВИН + ТЯЖ", to: "+5 (смарт) / 0", skr: "Нет", dos: "Ред",
      damage: "6d6 ББ (12мм ракета) / 2d6+1 (25мм HE)", ammo: "12мм самонавод. + 25мм гранаты", mag: "30 + 10", sko: "2 / 1", nad: "ОТ / ОБ", range: "400м (эффект. до 2000м)", cost: "5,000 eb", book: "Deep Space",
      desc: "Табельное оружие космического спецназа ВВС США (EVATS). Тяжёлый двухствольный комплекс с баллоном углекислого газа на поясе для стрельбы в невесомости без отдачи и задымления. Стреляет 12-мм самонаводящимися ракетами (по ИК/радару) и 25-мм фугасами."
    },
    {
      id: "bsw-oth-milborg",
      name: "Кибер-винтовка Militech Cyborg Rifle",
      origName: "Militech Cyborg Rifle",
      category: "Прочие винтовки",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Ред",
      damage: "7d6+3 (.300 Mag)", ammo: ".300 Winchester Magnum", mag: "30", sko: "20", nad: "ОТ", range: "500м", cost: "800 eb", book: "Chr1",
      desc: "Тяжёлая буллпап-винтовка под охотничий патрон .300 Win Mag с гидропневматическим гасителем отдачи, созданная специально для уничтожения боевых киборгов (весит 7.5 кг)."
    },
    {
      id: "bsw-oth-milninja",
      name: "Бесшумный карабин Militech Ninja",
      origName: "Militech Ninja",
      category: "Прочие винтовки",
      typeCode: "ВИН", to: "+1", skr: "Кур", dos: "Мал",
      damage: "1d6 (5мм / .22)", ammo: "5мм безгильзовый", mag: "30", sko: "3 / 30", nad: "ОБ", range: "250м", cost: "650 eb", book: "SOF / SOF2",
      desc: "Штурмовой карабин для спецопераций со встроенным глушителем, пластиковым магазином и электроспуском (соленоид вместо ударника). Невероятно тихий."
    },
    {
      id: "bsw-oth-nomad357carb",
      name: "Автоматический карабин кочевников .357 Magnum",
      origName: "Nomad .357 Magnum Automatic Carbine",
      category: "Прочие винтовки",
      typeCode: "ВИН", to: "0 / +1 (одиноч.)", skr: "Плащ", dos: "Обы",
      damage: "2d6+3 (3d6+1 усил.)", ammo: ".357 Magnum", mag: "30", sko: "2 / 3 (отсечка)", nad: "ОТ", range: "100м", cost: "400 eb", book: "NeoTribes",
      desc: "Карабин кочевников под патрон .357 Magnum с режимами одиночного огня (ТО +1) и отсечки по 3 патрона (полный автомат отсутствует)."
    },
    {
      id: "bsw-oth-nomad357lev",
      name: "Рычажный карабин кочевников .357 Lever-Action",
      origName: "Nomad .357 Magnum Lever-Action Carbine",
      category: "Прочие винтовки",
      typeCode: "ВИН", to: "+2", skr: "Плащ", dos: "Обы",
      damage: "2d6+3 (3d6+1 усил.)", ammo: ".357 Magnum", mag: "9", sko: "2", nad: "ОТ", range: "100м", cost: "300 eb", book: "NeoTribes",
      desc: "Карабин с рычажным взводом (система Винчестера) под патрон .357 Magnum. Отличается высокой точностью (+2) и прекрасным балансом."
    },
    {
      id: "bsw-oth-nomad44lev",
      name: "Рычажная винтовка кочевников .44 Lever-Action",
      origName: "Nomad .44 Magnum Lever-Action Rifle",
      category: "Прочие винтовки",
      typeCode: "ВИН", to: "+1", skr: "Плащ", dos: "Обы",
      damage: "4d6+2 (.44)", ammo: ".44 Magnum", mag: "8", sko: "2", nad: "ОТ", range: "200м", cost: "650 eb", book: "NeoTribes",
      desc: "Более мощная рычажная винтовка под патрон .44 Magnum, излюбленное оружие кочевников-аутрайдеров."
    },
    {
      id: "bsw-oth-nomad762bolt",
      name: "Болтовая винтовка кочевников 7.62mm Bolt-Action",
      origName: "Nomad 7.62mm Bolt-Action Rifle",
      category: "Прочие винтовки",
      typeCode: "ВИН", to: "+2", skr: "Плащ", dos: "Обы",
      damage: "6d6+2 (7.62мм)", ammo: "7.62мм", mag: "6", sko: "1", nad: "ОТ", range: "400м", cost: "500 eb", book: "NeoTribes",
      desc: "Проверенная временем магазинная винтовка с продольно-скользящим затвором (на базе M-70) из современных композитов и керамики."
    },

    // --- ПУЛЕМЁТЫ (MACHINEGUNS, стр. 32-34) ---
    {
      id: "bsw-mg-nomadpersonal",
      name: "Персональный пулемёт кочевников (Nomad Personal Weapon)",
      origName: "Nomad \"Personal Weapon\" Derivatives",
      category: "Пулемёты",
      typeCode: "ПП / ВИН", to: "+1", skr: "Плащ", dos: "Обы",
      damage: "2d6+3 (10мм) / 4d6+1 (12мм)", ammo: "10мм или 12мм", mag: "50", sko: "2 / 3", nad: "ОТ", range: "200м", cost: "500 eb", book: "NeoTribes",
      desc: "Компактный гибрид на базе P90 и Steyr TMP с верхним магазином под углом 90° на 50 патронов. Выпускается под 10 мм (2d6+3) или 12 мм (4d6+1)."
    },
    {
      id: "bsw-mg-polymercannon",
      name: "Одноразовое орудие Polymer One-Shot Cannon",
      origName: "Polymer One-Shot Cannon",
      category: "Пулемёты",
      typeCode: "ВИН", to: "-2", skr: "Плащ", dos: "Мал",
      damage: "4d6+2 (13мм HEP)", ammo: "13мм кумулятивный (1 выстрел)", mag: "1", sko: "1", nad: "НН", range: "100м", cost: "90 eb", book: "Chr2",
      desc: "Дешёвый одноразовый гранатомёт-пушка от Kang Tao под 13-мм фугасный снаряд HEP (половина урона — реальная, половина — шоковая, броня не защищает и теряет 2 уровня ОС). При клине взрывается (10% шанс, 2d6 урона руке)."
    },
    {
      id: "bsw-mg-cyborgassault",
      name: "Штурмовой карабин киборгов Stein & Wasserman Model F",
      origName: "Stein & Wasserman Model F \"Cyborg Assault\" Weapon System",
      category: "Пулемёты",
      typeCode: "ВИН", to: "0", skr: "Плащ", dos: "Ред",
      damage: "Перемен. (HEP 4d6+2 / API 4d6+3 / Acid)", ammo: "13мм гильзовые спецпатроны", mag: "8 (ротор)", sko: "1", nad: "ОТ", range: "100м", cost: "1,650 eb", book: "Chr2",
      desc: "Штурмовой карабин отряда PsychoSquads с 8-зарядным коробчатым магазином с роторной подачей. Селектор позволяет заряжать в магазин патроны разных типов вперемешку и выбирать их в бою: HEP (фугасные бронебойные), API (бронебойно-зажигательные) и кислотные капсулы."
    },
    {
      id: "bsw-mg-ramjetrifle",
      name: "Прямоточная винтовка Tsunami Arms Ramjet Rifle",
      origName: "Tsunami Arms Ramjet Rifle",
      category: "Пулемёты",
      typeCode: "ВИН", to: "+4", skr: "Нет", dos: "Ред",
      damage: "5d6+3 / 6d6+1 / 7d6 / 7d6+3", ammo: "8.5мм реактивные рамджеты", mag: "9", sko: "3", nad: "ОТ", range: "800м", cost: "1,230 eb", book: "Chr2",
      desc: "Полуавтоматическая реактивная винтовка под 8.5-мм пули с прямоточными мини-двигателями. Чем дальше летит пуля, тем сильнее она разгоняется: 5d6+3 вблизи, 6d6+1 на средних, 7d6 на дальних и 7d6+3 на экстремальных дистанциях! Оснащена оптикой 4x с лазерным дальномером и автокоррекцией."
    },
    {
      id: "bsw-mg-cyclone",
      name: "Пулемёт Support Constitution Arms Cyclone",
      origName: "Constitution Arms Cyclone Squad Support Weapon",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "+1", skr: "Нет", dos: "Мал",
      damage: "6d6+2 (7.62мм)", ammo: "7.62мм безгильзовый (барабан)", mag: "100", sko: "35", nad: "ОТ", range: "500м", cost: "1,200 eb", book: "PAC",
      desc: "Ручной пулемёт с барабанным магазином на 100 патронов 7.62 мм и сошками. Создан для отрядов Max-Tac и полиции."
    },
    {
      id: "bsw-mg-deluge",
      name: "Дротиковый пулемёт Constitution Arms Deluge",
      origName: "Constitution Arms Deluge Crowd Control Weapon",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Мал",
      damage: "Снотворный дротик (1–2 ед.)", ammo: "Баллон + сливеры со снотворным", mag: "400", sko: "35", nad: "ОБ", range: "60м", cost: "800 eb", book: "PAC",
      desc: "Полицейский пулемёт для разгона демонстраций, стреляющий микро-дротиками со снотворным с бешеной скорострельностью. Обычно монтируется на броневики и спецтранспорт."
    },
    {
      id: "bsw-mg-doverga1112",
      name: "Переносной пулемёт Dover GA-1112 Autogun",
      origName: "Dover GA-1112 Autogun",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "+1", skr: "Нет", dos: "Ред",
      damage: "4d6+4 (12мм Long)", ammo: "12мм Long Caseless (лента)", mag: "400", sko: "80", nad: "ОТ", range: "400м", cost: "1,110 eb", book: "SOF / SOF2",
      desc: "Двуствольный переносной пулемёт массой 15 кг под 12-мм длинные патроны с нижним магазинным коробом на 400 патронов и встроенным смартлинком. Требует 1 раунд на раскрутку мотора. За 650 eb доступен автомобильный комплект."
    },
    {
      id: "bsw-mg-fnmg6",
      name: "Пулемёт FN MG-6 «One-on-One»",
      origName: "FN MG-6 \"One-on-One\"",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "+1", skr: "Нет", dos: "Обы",
      damage: "5d6 (5.56мм)", ammo: "5.56мм (лента)", mag: "100", sko: "40", nad: "ОТ", range: "450м", cost: "1,800 eb", book: "ES+",
      desc: "Классический бельгийский двухствольный армейский единый пулемёт с ленточным питанием."
    },
    {
      id: "bsw-mg-fabarm2012saw",
      name: "Ручной пулемёт Fábrica de Armes M-2012HB SAW",
      origName: "Fábrica de Armes M-2012HB SAW",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "+2", skr: "Нет", dos: "Ред",
      damage: "5d6+3 (6.5мм)", ammo: "6.5x45мм (короб 100)", mag: "100", sko: "30", nad: "ОТ", range: "450м", cost: "1,600 eb", book: "SOF / SOF2",
      desc: "Армейский пулемёт огневой поддержки с утяжелённым керамическим стволом (длина 31 дюйм), коробом на 100 патронов и прицелом 2x."
    },
    {
      id: "bsw-mg-hkg6",
      name: "Пулемёт Heckler & Koch G-6 Advanced Squad Automatic",
      origName: "Heckler & Koch G-6 Advanced Squad Automatic",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "+1", skr: "Нет", dos: "Ред",
      damage: "5d6 (6мм)", ammo: "6мм безгильзовый (короб)", mag: "100", sko: "30", nad: "ОТ", range: "450м", cost: "2,050 eb", book: "Chr1",
      desc: "Масштабированный на 50% пулемёт на базе винтовки G-11 под 6-мм безгильзовый патрон со стальным сердечником (бронебойный). Имеет полный интерфейс чипа и встроенный оптический прицел 2x с триангуляцией и пассивным ИК."
    },
    {
      id: "bsw-mg-m2a5hb",
      name: "Крупнокалиберный пулемёт M2A5HB Browning .50 cal HMG",
      origName: "M2A5HB Browning .50 cal HMG",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Обы",
      damage: "6d10 (12.7мм / .50)", ammo: ".50 BMG (лента)", mag: "100", sko: "10", nad: "ОТ", range: "600м", cost: "2,000 eb", book: "Home/Brave",
      desc: "Бессмертный «Браунинг .50» в облегчённом исполнении из пласт-керамики и композитов (весит всего 20 кг вместо 36 кг). С экзоскелетом пехотинец может переносить и вести огонь с ходу."
    },
    {
      id: "bsw-mg-m600",
      name: "Единый пулемёт M-600 Medium Machine Gun",
      origName: "M-600 Medium Machine Gun",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "+1", skr: "Нет", dos: "Обы",
      damage: "6d6+2 (7.62мм)", ammo: "7.62мм (пластик. лента)", mag: "100", sko: "20", nad: "ОТ", range: "500м", cost: "1,000 eb", book: "Home/Brave",
      desc: "Модернизированный М-60 с механизмом подачи от MG-42. Использует пластиковые ленты, работающие как тепловой аккумулятор для предотвращения перегрева ствола."
    },
    {
      id: "bsw-mg-milhighpower15",
      name: "Автопушка Militech High Power 15",
      origName: "Militech High Power 15",
      category: "Пулемёты",
      typeCode: "ПП / ТЯЖ", to: "+2", skr: "Нет", dos: "Ред",
      damage: "2d6+4 (9mm Long)", ammo: "9mm Long Caseless", mag: "180 (барабан / рюкзак)", sko: "20 / 60", nad: "ОБ", range: "200м", cost: "1,600 eb", book: "SOF / SOF2",
      desc: "Трёхкамерный трёхствольный скорострельный пулемёт-«мясорубка» с темпом до 5000 выстрелов в минуту (циклический), питающийся из фиксированного барабана или наспинного ранца на 400 патронов."
    },
    {
      id: "bsw-mg-m232saw",
      name: "Пулемёт Militech M-232 SAW",
      origName: "Militech M-232 Squad Assault/Automatic Weapon",
      category: "Пулемёты",
      typeCode: "ВИН / ТЯЖ", to: "0", skr: "Нет", dos: "Обы",
      damage: "5d6 (5.56мм)", ammo: "5.56мм (лента или магазин Mk IV)", mag: "100 / 35", sko: "20", nad: "ОТ", range: "400м", cost: "1,000 eb", book: "Home/Brave",
      desc: "Стандартный лёгкий пулемёт отделения армии США под ленту из короба или стандартные магазины от винтовок Mk IV."
    },
    {
      id: "bsw-mg-renegadesaw",
      name: "Пулемёт Militech Renegade SAW",
      origName: "Militech Renegade Squad Automatic Weapon",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Ред",
      damage: "6d6-1 (6.5мм гибрид)", ammo: "6.5мм гибридный (лента / магазин)", mag: "200 / 35", sko: "20", nad: "ОТ", range: "400м", cost: "1,100 eb", book: "Corp2",
      desc: "Лёгкий пулемёт отряда «Лазарь» под гибридный патрон 6.5 мм, принимающий как рассыпные ленты, так и магазины от штурмовых винтовок Dragon и Mk IV."
    },
    {
      id: "bsw-mg-mil20l",
      name: "Автопушка Militech 20L Autocannon",
      origName: "Militech 20L Autocannon",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Ред",
      damage: "8d10 (20мм)", ammo: "20мм (лента)", mag: "100", sko: "10", nad: "ОТ", range: "500м", cost: "3,000 eb", book: "Home/Brave",
      desc: "Лёгкая станковая 20-мм автопушка на треноге. Исключительно станковое оружие поддержки (одна лента весит 20 кг!)."
    },
    {
      id: "bsw-mg-sternm5a",
      name: "Пулемёт Sternmeyer M-5A Squad Automatic",
      origName: "Sternmeyer M-5A Squad Automatic Weapon",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "-1", skr: "Нет", dos: "Обы",
      damage: "6d6+2 (7.62мм)", ammo: "7.62мм (лента 200)", mag: "200", sko: "20", nad: "ОТ", range: "500м", cost: "1,000 eb", book: "Corp1",
      desc: "Отличный пулемёт с сошками и ленточным питанием под патрон 7.62 мм, состоящий на вооружении войск Arasaka и IEC."
    },
    {
      id: "bsw-mg-towa8",
      name: "Пулемёт Towa Manufacturing Type-8 Medium MG",
      origName: "Towa Manufacturing Type-8 Medium Machine Gun",
      category: "Пулемёты",
      typeCode: "ТЯЖ", to: "+1", skr: "Нет", dos: "Ред",
      damage: "6d6+2 (7.62мм)", ammo: "7.62мм безгильз. (пачка 100)", mag: "100", sko: "35", nad: "ОТ", range: "500м", cost: "2,500 eb", book: "PR (Pacific Rim)",
      desc: "Стандартный пулемёт огневой поддержки Сил самообороны Японии (GSG/GSDF) с ленточным питанием из кассет на 100 патронов (доступен ранцевый короб на 1000 патронов)."
    }
  ];

  PACK_4_ITEMS.forEach(newItem => {
    const exists = extDb.weapons.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase()) ||
      (existing.origName && existing.origName.toLowerCase() === newItem.origName.toLowerCase())
    );
    if (!exists) {
      extDb.weapons.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ ОРУЖИЯ В DATABASE.JS (БЕЗ ПЕРЕЗАПИСИ СУЩЕСТВУЮЩИХ КАРТОЧЕК)
// Пакет №5: Тяжёлое оружие, Оружие киборгов, Гранаты, Мины и Спецпатроны (стр. 34–47)
// ============================================================================
(function appendWeaponsPack5() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.weapons)) extDb.weapons = [];
  if (!Array.isArray(extCats.weapons)) extCats.weapons = [];

  const heavyAndBorgCategories = [
    "Тяжёлое вооружение",
    "Оружие киборгов ('Borg Weapons)",
    "Гранаты, мины и взрывчатка",
    "Боеприпасы и спецпатроны"
  ];
  heavyAndBorgCategories.forEach(c => {
    if (!extCats.weapons.includes(c)) extCats.weapons.push(c);
  });

  const PACK_5_ITEMS = [
    // --- ТЯЖЁЛОЕ ВООРУЖЕНИЕ (HEAVY WEAPONS, стр. 34-37) ---
    {
      id: "bsw-hvy-mortar60",
      name: "60-мм лёгкий миномёт (60mm Light Mortar)",
      origName: "60mm Light Mortar",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Мал",
      damage: "8d10 (радиус 5м)", ammo: "60мм мины (ОФ, дым, фосфор)", mag: "1", sko: "2 (1 в одиночку)", nad: "ОТ", range: "1,000м", cost: "750 eb", book: "HotB",
      desc: "Лёгкий ротный миномёт массой 15 кг (разбирается на трубу и опорную плиту). При обслуживании расчётом из 2 человек выдаёт СКО 2 (в одиночку — 1 выстрел в 2 раунда). Выстрел стоит 50 eb и весит 1 кг."
    },
    {
      id: "bsw-hvy-coltmauser",
      name: "20-мм пушка Colt-Mauser M2X Cannon",
      origName: "Colt-Mauser M2X Cannon",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Ред",
      damage: "8d10 (20мм)", ammo: "20мм гильзовый", mag: "8", sko: "1", nad: "ОБ", range: "600м", cost: "3,050 eb", book: "Chr2",
      desc: "Мощное полуавтоматическое 20-мм орудие для стрельбы с плеча с длинноходным штоком гашения отдачи и штатным 4x оптическим прицелом (весит 23 кг в снаряжённом виде). При каждом выстреле требует проверки ТЕЛА 15+, иначе стрелок получает 1–2 ед. ушибов плеча (при критическом провале оружие роняется)."
    },
    {
      id: "bsw-hvy-commgl",
      name: "Коммерческий гранатомёт (Commercial Grenade Launchers)",
      origName: "Commercial Grenade Launchers",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "0", skr: "Плащ", dos: "Ред",
      damage: "По типу 30–40мм гранаты", ammo: "30мм или 40мм гранаты", mag: "1", sko: "1", nad: "ОБ", range: "225м", cost: "150 eb", book: "CP20",
      desc: "Стандартный однозарядный подствольный гранатомёт, совместимый с любой штурмовой винтовкой (либо используемый отдельно с простым плечевым прикладом)."
    },
    {
      id: "bsw-hvy-f253flame",
      name: "Ранцевый огнемёт Kenshiri-Adachi F-253 Flamethrower",
      origName: "Kenshiri-Adachi F-253 Flamethrower",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "-2", skr: "Нет", dos: "Ред",
      damage: "2d10 (напалм)", ammo: "Сжиженный напалм", mag: "10", sko: "1", nad: "ОБ", range: "50м", cost: "1,500 eb", book: "CP20",
      desc: "Тяжёлый армейский ранцевый огнемёт, выбрасывающий струю жидкого напалма на 50 метров."
    },
    {
      id: "bsw-hvy-law",
      name: "Лёгкий одноразовый гранатомёт LAW (60–70мм)",
      origName: "Light Anti-tank Weapon (LAW)",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "-2", skr: "Плащ", dos: "Мал",
      damage: "4d10 ББ КС (рад. 2м)", ammo: "Кумулятивная ракета (однораз.)", mag: "1", sko: "1", nad: "ОТ", range: "100м", cost: "300 eb", book: "HotB",
      desc: "Одноразовый реактивный противотанковый гранатомёт весом 2 кг. Использует систему холодного пуска сжатым воздухом без реактивной струи сзади — безопасен для стрельбы из закрытых помещений!"
    },
    {
      id: "bsw-hvy-hlaw",
      name: "Тяжёлый одноразовый гранатомёт HLAW (85–105мм)",
      origName: "Heavy Light Anti-tank Weapon (HLAW)",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "-2", skr: "Нет", dos: "Мал",
      damage: "11d10 ББ КС (рад. 4м)", ammo: "Тяжёлая кумулятивная ракета", mag: "1", sko: "1", nad: "ОТ", range: "100м", cost: "800 eb", book: "HotB",
      desc: "Утяжелённая (5 кг) версия одноразового гранатомёта калибра 85–105 мм с холодным пуском (можно стрелять из помещений) и сокрушительной кумулятивной боевой частью на 11d10 ББ урона!"
    },
    {
      id: "bsw-hvy-m32agl",
      name: "Автоматический станковый гранатомёт M-32 AGL",
      origName: "M-32 Automatic Grenade Launcher",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Ред",
      damage: "По типу 40мм гранаты", ammo: "40мм высокоскоростные гранаты", mag: "50", sko: "20", nad: "ОТ", range: "1,600м", cost: "2,500 eb", book: "HotB",
      desc: "Станковый или турельный автоматический гранатомёт, выплёвывающий 40-мм высокоскоростные гранаты очередями до 20 выстрелов в раунд на дальность до 1.6 км (обычными 40-мм гранатами может стрелять только одиночными)."
    },
    {
      id: "bsw-hvy-m205gl",
      name: "Подствольный гранатомёт M-205 Grenade Launcher",
      origName: "M-205 Grenade Launcher",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "+1", skr: "Плащ", dos: "Мал",
      damage: "По типу 40мм гранаты", ammo: "40мм гранаты", mag: "1", sko: "1", nad: "ОТ", range: "200м", cost: "250 eb", book: "HotB",
      desc: "Штатный армейский 40-мм однозарядный гранатомёт из полимеров и композитов (используется как подствольный модуль на винтовках или отдельно)."
    },
    {
      id: "bsw-hvy-m212gl",
      name: "Револьверный гранатомёт M-212 Grenade Launcher",
      origName: "M-212 Grenade Launcher",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "+1", skr: "Нет", dos: "Мал",
      damage: "По типу 40мм гранаты", ammo: "40мм гранаты", mag: "8", sko: "2 (1 при выборе)", nad: "ОТ", range: "200м", cost: "500 eb", book: "HotB",
      desc: "Массивный ручной гранатомёт с 8-зарядным револьверным барабаном. Позволяет выбрать конкретную гранату перед выстрелом (снижает СКО до 1)."
    },
    {
      id: "bsw-hvy-milam3",
      name: "30-мм противотанковое ружьё Militech AM-3 «Anti-Matter Rifle»",
      origName: "Militech AM-3 \"Anti-Matter Rifle\"",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "0 / +1", skr: "Нет", dos: "Ред",
      damage: "9d10 (30мм DPU)", ammo: "30мм активно-реактивный уран", mag: "5", sko: "1", nad: "ОБ", range: "1,600м", cost: "6,000 eb", book: "Chr2",
      desc: "Сверхмощное 30-мм ружьё со снарядами из обеднённого урана с ракетным ускорителем, сокрушающее киборгов, силовую броню и БТРы. Включает смартлинк и прицел 2–10x с ИК и LowLite. Стрельба стоя без линейной рамы «Бета» и выше сбивает стрелка с ног! Из-за разгона ракеты до 160 м урон 1/3 (ТО 0), на 160–800 м урон 1/2 (ТО +1), свыше 800 м — полный урон 9d10."
    },
    {
      id: "bsw-hvy-cowboyu55",
      name: "Штурмовой гранатомёт Militech «Cowboy» U-55",
      origName: "Militech \"Cowboy\" U-55 Grenade Launcher",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Мал",
      damage: "По типу 25мм гранаты", ammo: "25мм гранаты (барабан)", mag: "12", sko: "3 (очередь)", nad: "ОБ", range: "150м", cost: "900 eb", book: "Corp2",
      desc: "Короткий городской барабанный гранатомёт под 25-мм снаряды, способный стрелять одиночными или залпами по 3 гранаты подряд (например, комбинацией из 1 осколочной, 1 контузионной и 1 зажигательной гранаты в одной очереди!)."
    },
    {
      id: "bsw-hvy-hotshot",
      name: "ПТУР Militech Hotshot L-ATGM",
      origName: "Militech Hotshot L-ATGM",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "+2", skr: "Нет", dos: "Мал",
      damage: "12d10 ББ КС (рад. 4м)", ammo: "Управляемая ПТУР (1500 eb)", mag: "1", sko: "1", nad: "ОТ", range: "500м", cost: "2,500 eb", book: "HotB",
      desc: "Лёгкий противотанковый ракетный комплекс с управлением по проводам, тепловизионным/лазерным наведением и холодным пневмопуском без тепловой засветки позиции."
    },
    {
      id: "bsw-hvy-minigl",
      name: "Мини-гранатомёт Militech Mini-Grenade Launcher",
      origName: "Militech Mini-Grenade Launcher",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "-1 (помпа) / 0 (барабан)", skr: "Плащ / Нет", dos: "Обы / Мал",
      damage: "5d6 HEP / 2d6+1 ОФ / 10 кал.", ammo: "25x70мм мини-гранаты / 10 кал.", mag: "4 (помпа) / 16 (барабан)", sko: "2", nad: "ОБ", range: "150м", cost: "255 eb / 475 eb", book: "Chr1",
      desc: "Выпускается в двух вариантах: компактный помповый на 4 гранаты (255 eb, СКР: Плащ, также ставится как подствольник) и барабанный на 16 гранат с селектором выбора типа боеприпаса (475 eb). Оба могут стрелять патронами 10-го ружейного калибра."
    },
    {
      id: "bsw-hvy-rpga",
      name: "РПГ Militech RPG-A Grenade Launcher",
      origName: "Militech RPG-A Grenade Launcher",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "-2", skr: "Нет", dos: "Ред",
      damage: "6d10", ammo: "Надмыльная реактивная граната", mag: "1", sko: "1", nad: "ОТ", range: "750м", cost: "1,500 eb", book: "CP20",
      desc: "Плечевой реактивный противотанковый гранатомёт, массово применявшийся в Центральноамериканских конфликтах."
    },
    {
      id: "bsw-hvy-scorpion16",
      name: "ПЗРК Militech Scorpion 16 Surface-To-Air Missile",
      origName: "Militech Scorpion 16 Surface-To-Air Missile",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "-1", skr: "Нет", dos: "Мал",
      damage: "7d10 (рад. 6м)", ammo: "Зенитная ракета с ИК-ГСН", mag: "1", sko: "1", nad: "ОТ", range: "500м", cost: "1,000 eb", book: "CP20",
      desc: "Третье поколение ПЗРК «Стингер» для уничтожения АВ и вертолётов по принципу «выстрелил и забыл» (тепловое наведение с оптической памятью цели)."
    },
    {
      id: "bsw-hvy-urbanmissile",
      name: "Пусковая установка микроракет Militech Urban Missile Launcher",
      origName: "Militech Urban Missile Launcher",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "+2 (+1 подствол.)", skr: "Плащ", dos: "Мал",
      damage: "4d6 (рад. 2м)", ammo: "Самонаводящиеся микроракеты", mag: "12 (1 подствол.)", sko: "2 (1)", nad: "ОБ", range: "200м", cost: "900 eb (200 подствол.)", book: "Chr2",
      desc: "Плечевая магазинная пусковая установка на 12 тепловых самонаводящихся микроракет (способных огибать углы на 90°). Также доступна однозарядная подствольная версия MicroMissile Pod за 200 eb."
    },
    {
      id: "bsw-hvy-emg85",
      name: "Рельсотрон Rhinemetall EMG-85 Railgun",
      origName: "Rhinemetall EMG-85 Railgun",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "+3", skr: "Нет", dos: "Ред",
      damage: "5d10+10 (ЭББ: броня x1/4!)", ammo: "15г лексановый гиперзвуковой слиток", mag: "5", sko: "1/2", nad: "ОБ", range: "1,500м", cost: "11,370 eb", book: "Chr2",
      desc: "Электромагнитная рельсовая пушка на сверхпроводниках (35 кг), разгоняющая 15-граммовый снаряд до 2400 м/с! Экстра-бронебойный эффект (EAP): любая броня цели делится на 4 (x1/4 ОС), прошедший урон делится пополам. Требует ТЕЛО 11+ с гиро-подвесом или ТЕЛО 12+ без подвеса."
    },
    {
      id: "bsw-hvy-wristracate",
      name: "Наручный ракетомёт Rostovic Wrist Racate",
      origName: "Rostovic Wrist Racate",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Мал",
      damage: "5d6 (30мм ОФ, рад. 3м)", ammo: "30мм мини-ракеты", mag: "6", sko: "3 (или залп)", nad: "ОБ / НН", range: "250м", cost: "380 eb", book: "Chr1",
      desc: "Восточноевропейский вращающийся блок из 6 пусковых труб для 30-мм ракет с холодным пневмопуском, надеваемый поверх киберруки или боевой перчатки Battleglove (для живой руки слишком тяжёл)."
    },
    {
      id: "bsw-hvy-cockerill25",
      name: "25-мм штурмовая пушка Royal Enfield Cockerill",
      origName: "Royal Enfield Ordnance 25mm Cockerill Assault Cannon",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "+1 (-1 от бедра)", skr: "Нет", dos: "Ред",
      damage: "5d10+10 ББ (25мм)", ammo: "25мм активно-реактивные (AP/HEP/APF)", mag: "12", sko: "1", nad: "ОБ", range: "1,500м", cost: "7,400 eb", book: "UK (Rough Guide)",
      desc: "Британское ручное противотранспортное орудие (облегчённая версия 30-мм пушки БРМ Scimitar) на активно-реактивных снарядах. Требует мин. ТЕЛО 6 для переноски (с сошек) и ТЕЛО 8+ для стрельбы с бедра."
    },
    {
      id: "bsw-hvy-towat9gl",
      name: "Револьверный гранатомёт Towa Manufacturing Type-9",
      origName: "Towa Manufacturing Type-9 Grenade Launcher",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Мал",
      damage: "По типу 40мм гранаты", ammo: "40мм гранаты", mag: "8", sko: "2", nad: "ОТ", range: "200м", cost: "750 eb", book: "PR (Pacific Rim)",
      desc: "Японский 8-зарядный гранатомёт с револьверным барабаном, позволяющий свободно выбирать нужный тип гранаты перед выстрелом."
    },
    {
      id: "bsw-hvy-tsunamit17",
      name: "Противоброневое ружьё Tsunami Arms Type-17",
      origName: "Tsunami Arms Type-17 Anti-Armor Rifle",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "+1 (+3 смарт)", skr: "Нет", dos: "Ред",
      damage: "8d10 ББ (20мм AP)", ammo: "20мм бронебойный гильзовый", mag: "12", sko: "1", nad: "ОБ", range: "1,200м", cost: "7,500 eb", book: "PR (Pacific Rim)",
      desc: "Специальное 20-мм орудие Сил самообороны Японии для уничтожения силовой брони (ACPA) и бронетехники. Оснащено сошками, компьютеризированным прицелом и смартлинком. Для стрельбы без сошек и упора требует ТЕЛО 14+."
    },
    {
      id: "bsw-hvy-tsunamit18",
      name: "Автоматический гранатомёт Tsunami Arms Type-18 («Pitching Machine»)",
      origName: "Tsunami Arms Type-18 Automatic Grenade Launcher",
      category: "Тяжёлое вооружение",
      typeCode: "ТЯЖ", to: "-1", skr: "Нет", dos: "Мал",
      damage: "По типу 25мм гранаты", ammo: "25мм гранаты (ранцевый короб)", mag: "30", sko: "10", nad: "ОБ", range: "200м", cost: "2,000 eb", book: "PR (Pacific Rim)",
      desc: "Ручной автоматический гранатомёт в форм-факторе базуки с гиростабилизатором и 25-килограммовым наспинным ранцем на 30 гранат (СКО 10, даёт штраф -1 РЕФ и -1 ПЕР из-за веса)."
    },

    // --- ОРУЖИЕ КИБОРГОВ ('BORG WEAPONS, стр. 37-40) ---
    {
      id: "bsw-borg-pockettsunami",
      name: "Киборг-гранатомёт Arasaka «Pocket Tsunami»",
      origName: "Arasaka \"Pocket Tsunami\" Grenade Launcher",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "ТЯЖ", to: "0 (-2 пистолет)", skr: "Плащ", dos: "Мал",
      damage: "5d6 HE / 5d6 HEP / 3d6+1 ОФ", ammo: "25мм гранаты высокого давления", mag: "6", sko: "1", nad: "ОБ", range: "200м", cost: "1,250 eb", book: "SOF / SOF2",
      desc: "Массивный 8-килограммовый 6-зарядный револьверный гранатомёт высокого давления для полных киборгов (мин. ТЕЛО 11 при двуручном хвате) или «табельный револьвер» для пилотов силовой брони ACPA (мин. ТЕЛО 23 при стрельбе с одной руки!)."
    },
    {
      id: "bsw-borg-arasakarage",
      name: "15-мм штурмовой ПП киборгов Arasaka «Rage»",
      origName: "Arasaka \"Rage\" 15mm Submachinegun",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "ТЯЖ", to: "-1 (-2 авто)", skr: "Плащ", dos: "Мал",
      damage: "4d10+3 ББ (или 3d10 ОФ)", ammo: "15mm Kurz (ББ или фугасный)", mag: "20 (10 / 50)", sko: "1 / 10", nad: "ОТ", range: "100м", cost: "4,500 eb", book: "SOF / SOF2",
      desc: "Чудовищный 15-мм пистолет-пулемёт весом 8 кг для полных киборгов и силовой брони (требует мин. ТЕЛО 15 или раму «Омега»!). Стреляет бронебойными (4d10+3 ББ) или фугасными (3d10 в радиусе 1 м) снарядами 15mm Kurz."
    },
    {
      id: "bsw-borg-biggov",
      name: "14-мм пистолет киборгов Magnum Opus «Big Government»",
      origName: "14mm Handgun - Magnum Opus \"Big Government\"",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "П", to: "0", skr: "Кур", dos: "Мал",
      damage: "6d6 (14мм)", ammo: "14мм безгильзовый", mag: "13", sko: "2", nad: "ОТ", range: "60м", cost: "2,000 eb", book: "SOF / SOF2",
      desc: "Крупнокалиберный 14-мм самозарядный пистолет для боевых киборгов с двухрядным магазином на 13 патронов (требует мин. ТЕЛО 12)."
    },
    {
      id: "bsw-borg-12gapistol",
      name: "Пистолет 12-го калибра для киборгов (12-Gauge «Pistol»)",
      origName: "12-Gauge \"Pistol\"",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "П", to: "-2", skr: "Кур / Плащ", dos: "Мал",
      damage: "4d6 (12 кал.)", ammo: "12-й калибр", mag: "9", sko: "2", nad: "ОБ", range: "30м", cost: "1,000 eb", book: "SOF / SOF2",
      desc: "Самозарядный пистолет под полноценные ружейные патроны 12-го калибра (требует мин. ТЕЛО 12 или киберруку)."
    },
    {
      id: "bsw-borg-556smg",
      name: "5.56-мм «ПП» киборгов (5.56mm Caseless «SMG»)",
      origName: "5.56mm Caseless \"SMG\"",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "ПП", to: "+1", skr: "Плащ / Нет", dos: "Мал",
      damage: "5d6 (5.56мм)", ammo: "5.56мм винтовочный безгильз.", mag: "50", sko: "25", nad: "ОТ", range: "200м", cost: "1,200 eb", book: "SOF / SOF2",
      desc: "Укороченный скорострельный автомат под винтовочный патрон 5.56 мм в габаритах пистолета-пулемёта для киборгов (мин. ТЕЛО 10)."
    },
    {
      id: "bsw-borg-127ar",
      name: "12.7-мм штурмовая винтовка киборгов (12.7mm «Assault Rifle»)",
      origName: "12.7mm \"Assault Rifle\"",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Мал",
      damage: "6d10 (12.7мм)", ammo: "12.7мм (.50 BMG)", mag: "50", sko: "10", nad: "ОТ", range: "400м", cost: "2,000 eb", book: "SOF / SOF2",
      desc: "Автоматическая штурмовая винтовка для полных киборгов под крупнокалиберный пулемётный патрон 12.7 мм с магазином на 50 выстрелов (мин. ТЕЛО 12)."
    },
    {
      id: "bsw-borg-145ar",
      name: "14.5-мм штурмовая винтовка киборгов (14.5mm «Assault Rifle»)",
      origName: "14.5mm \"Assault Rifle\"",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "ВИН", to: "+1", skr: "Нет", dos: "Мал",
      damage: "7d10 (14.5мм)", ammo: "14.5мм КПВТ", mag: "50", sko: "10", nad: "ОТ", range: "400м", cost: "2,500 eb", book: "SOF / SOF2",
      desc: "Тяжёлая штурмовая винтовка боевых киборгов под бронебойный патрон 14.5 мм (мин. ТЕЛО 14)."
    },
    {
      id: "bsw-borg-30mmagl",
      name: "30-мм ручной автогранатомёт киборгов (30mm HiVel Auto-GL)",
      origName: "30mm HiVel Caseless Auto-GL",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "ТЯЖ", to: "0", skr: "Нет", dos: "Мал",
      damage: "По типу 30мм гранаты", ammo: "30мм высокоскоростные гранаты", mag: "25", sko: "15", nad: "ОТ", range: "300м", cost: "2,000 eb", book: "SOF / SOF2",
      desc: "Ручной автоматический 30-мм гранатомёт для полных киборгов (мин. ТЕЛО 12)."
    },
    {
      id: "bsw-borg-hellbringer",
      name: "Револьвер Magnum Opus «Hellbringer» .666 Magnum",
      origName: "Magnum Opus \"Hellbringer\" .666 Magnum Revolver",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "П", to: "+1", skr: "Кур / Плащ", dos: "Мал",
      damage: "7d6+3 (.666 Magnum)", ammo: ".666 Magnum (стальная гильза)", mag: "3", sko: "1", nad: "ОТ", range: "80м", cost: "4,000 eb", book: "SOF / SOF2",
      desc: "Исполинский переломный револьвер из титано-стального сплава. Барабан вмещает всего 3 патрона калибра .666 Magnum, но каждый выстрел бьёт сильнее слонобойного штуцера (7d6+3!). Требует мин. ТЕЛО 15."
    },
    {
      id: "bsw-borg-malorian3600",
      name: "Супер-ПП Malorian 3600 Super-SMG",
      origName: "Malorian 3600 Super-SMG",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "ПП", to: "0 (-1 отсечка)", skr: "Плащ", dos: "Мал",
      damage: "6d6 (14мм)", ammo: "14мм безгильзовый", mag: "20", sko: "1 / 3", nad: "ОТ", range: "150м", cost: "3,000 eb", book: "SOF / SOF2",
      desc: "Масштабированный под 14-мм патрон Сильверхенда штурмовой пистолет-пулемёт с режимом отсечки по 3 выстрела, способный вскрывать броню MetalGear™ в упор. Требует две киберруки или мин. ТЕЛО 11."
    },
    {
      id: "bsw-borg-hyperhammer",
      name: "Реактивный молот SlamDance Hyper-Hammer",
      origName: "SlamDance, Inc. Hyper-Hammer",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "ХОЛ", to: "-2", skr: "Плащ (слож.)", dos: "Ред",
      damage: "9d10 ББ!", ammo: "Ракетное топливо (2 удара)", mag: "2", sko: "1", nad: "ОБ", range: "2м", cost: "2,000 eb", book: "SOF / SOF2",
      desc: "Цельновольфрамовая кувалда для полных киборгов (мин. ТЕЛО 18!) с ракетным ускорителем в бойке, разгоняющим молот до околозвуковой скорости. Наносит 9d10 ББ урона: полностью игнорирует мягкую броню, а жёсткую делит пополам и сносит с неё 1d6+4 единиц ОС за удар!"
    },
    {
      id: "bsw-borg-helix",
      name: "Шестиствольный гатлинг-дробовик Tsunami Arms Helix",
      origName: "Tsunami Arms Helix",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "ДРБ", to: "0", skr: "Нет", dos: "Мал",
      damage: "5d6 (10 кал. #00)", ammo: "10-й калибр (бинарный газ)", mag: "60", sko: "43", nad: "ОТ", range: "60м", cost: "3,000 eb", book: "SOF / SOF2",
      desc: "Шестиствольный гатлинг-дробовик 10-го калибра весом 15 кг на бинарном газовом топливе, выплёвывающий 43 снаряда за один раунд (1300 выстрелов/мин) с характерным металлическим визгом! Требует мин. ТЕЛО 15."
    },
    {
      id: "bsw-borg-claw",
      name: "4-калиберный штурмовой дробовик United Armaments CLAW",
      origName: "United Armaments CLAW",
      category: "Оружие киборгов ('Borg Weapons)",
      typeCode: "ДРБ", to: "+1", skr: "Нет", dos: "Ред",
      damage: "8d6 (картечь) / 9d6+2 (пуля) / 7d10 КС", ammo: "4-й калибр Магнум (23.75мм!)", mag: "28", sko: "14", nad: "ОТ", range: "60м", cost: "1,600 eb", book: "SOF / SOF2",
      desc: "Монструозный 16-килограммовый буллпап-дробовик 4-го утиного калибра (диаметр ствола 23.75 мм!) со сменным подствольным модулем (СВЧ, огнемёт, 25-мм ГП или микроракеты). Картечь наносит 8d6, пуля — 9d6+2, БОПС — 5d10 ББ, кумулятивный снаряд — 7d10 (1/2 ОС). Штатное оружие киборгов C-SWAT полиции Детройта (мин. ТЕЛО 11)."
    },

    // --- ГРАНАТЫ, МИНЫ И ВЗРЫВЧАТКА (GRENADES, MINES & EXPLOSIVES, стр. 39-43) ---
    {
      id: "bsw-exp-handgrenades",
      name: "Армейские ручные гранаты (HE / ПТ / Фосфор / Светошум / Сонар)",
      origName: "Basic Commercial, Corp & Military Grenades",
      category: "Гранаты, мины и взрывчатка",
      typeCode: "ТЯЖ", to: "0", skr: "Кар", dos: "Мал",
      damage: "7d6 ОФ (5м) / 5d10 ББ ПТ / 4d6 фосфор", ammo: "Ручная граната", mag: "1", sko: "1", nad: "ОБ", range: "Бросок", cost: "20–40 eb", book: "CP20",
      desc: "Стандартные гранаты: Осколочно-фугасная (7d6 в радиусе 5 м, 3d6 в 6–10 м), Противотанковая (5d10 ББ КС + 3d6 в 5 м), Белый фосфор (4d6 на 3 раунда в рад. 5 м, сжигает по 2 ОС мягкой брони), Светошумовая (спасбросок Шока -2 и РЕФ 20+ от слепоты) и Акустическая Sonic (40 eb, радиус 6 м)."
    },
    {
      id: "bsw-exp-biotechbomb",
      name: "Полимерная граната-ловушка Biotech-Askari Motion Restraint",
      origName: "Biotech-Askari Motion Restraint Bomb",
      category: "Гранаты, мины и взрывчатка",
      typeCode: "ЭКЗ", to: "0", skr: "Кар", dos: "Мал",
      damage: "Парализующая паутина (рад. 1м)", ammo: "Реактивный полимер", mag: "1", sko: "1", nad: "НН", range: "Бросок", cost: "60 eb", book: "Chr1",
      desc: "Опутывает цель в радиусе 1 м тончайшей полимерной паутиной, которая мгновенно каменеет при любом резком движении (требуется проверка Уклонения 25+ или Силы 30+, либо растворитель за 25 eb)."
    },
    {
      id: "bsw-exp-dutcharmsgpz",
      name: "Мини-граната DutchArms GPz-78",
      origName: "DutchArms GPz-78 Mini-Grenade",
      category: "Гранаты, мины и взрывчатка",
      typeCode: "ТЯЖ", to: "0", skr: "Кар", dos: "Мал",
      damage: "1d6+3 (диам. 3м)", ammo: "Взрывчатка HDX", mag: "1", sko: "1", nad: "ОТ", range: "Бросок", cost: "40 eb", book: "Chr1",
      desc: "Крошечная (3.8 см) ручная граната скрытого ношения с взрывчаткой HDX и зоной поражения 3 метра в диаметре."
    },
    {
      id: "bsw-exp-empgrenade",
      name: "ЭМИ-граната (EMP Grenade)",
      origName: "EMP Grenade",
      category: "Гранаты, мины и взрывчатка",
      typeCode: "ЭКЗ", to: "0", skr: "Кар", dos: "Ред",
      damage: "Отключение кибернетики (диам. 4–10м)", ammo: "Электромагнитный импульс", mag: "1", sko: "1", nad: "ОБ / НН", range: "Бросок", cost: "200–400 eb", book: "Chr1",
      desc: "Срабатывает через 5 секунд после взведения, отключая всю неэкранированную электронику и киберимпланты в диаметре 4–10 м (внутренние импланты перезагружаются через 4 мин, киберконечности — через 10 мин, щепки памяти стираются навсегда)."
    },
    {
      id: "bsw-exp-fendz22",
      name: "Дисковая граната FEN Dz 22 «Saucer Grenade»",
      origName: "FEN Dz 22 \"Saucer Grenades\"",
      category: "Гранаты, мины и взрывчатка",
      typeCode: "ТЯЖ", to: "+2 к Атлетике", skr: "Кар", dos: "Мал",
      damage: "2d6+3 (диам. 15м!)", ammo: "Жидкая взрывчатка + 160 шариков", mag: "1", sko: "1", nad: "ОБ", range: "Бросок", cost: "65 eb", book: "Chr1",
      desc: "Аэродинамическая граната в форме летающей тарелки («Фрисби смерти», даёт +2 к броску Атлетики) с резиновым ободом для рикошета от стен и зоной разлёта 160 стальных шариков диаметром 15 метров!"
    },
    {
      id: "bsw-exp-scattergren",
      name: "ИК-дымовая граната Scatter Grenade",
      origName: "Scatter Grenade",
      category: "Гранаты, мины и взрывчатка",
      typeCode: "ТЯЖ", to: "0", skr: "Кар", dos: "Обы",
      damage: "Блокировка зрения и ИК (рад. 5м)", ammo: "Аэрозоль + тепловые частицы", mag: "1", sko: "1", nad: "ОТ", range: "Бросок", cost: "70 eb", book: "Chr2",
      desc: "Создаёт облако радиусом 5 м на 5 раундов, полностью непроницаемое как для обычного зрения, так и для инфракрасных (IR) и термальных сенсоров."
    },
    {
      id: "bsw-exp-stenchbomb",
      name: "Зловонная бомба (Stench Bomb) и Красящая граната",
      origName: "Stench Bomb / Spraypaint Grenade",
      category: "Гранаты, мины и взрывчатка",
      typeCode: "ЭКЗ", to: "0", skr: "Кар", dos: "Обы",
      damage: "Тошнота (СЛ 25+) / Краска (4м)", ammo: "Химикат / Краска", mag: "1", sko: "1", nad: "ОТ", range: "Бросок", cost: "20 eb", book: "Chr2",
      desc: "Stench Bomb (20 eb) покрывает зону 5x5 м невыносимым смрадом (требуется проверка КРУТ или ТЕЛА 25+ без противогаза/назальных фильтров, иначе бегство). Spraypaint Grenade (20 eb) заливает 4 м яркой краской, ослепляя цель в эпицентре на 1–2 минуты."
    },
    {
      id: "bsw-exp-riflegrenades",
      name: "Надульные винтовочные и пистолетные гранаты (DCR / Militech)",
      origName: "DCR Rifle Grenades / Militech 25mm Pistol Grenades",
      category: "Гранаты, мины и взрывчатка",
      typeCode: "ТЯЖ", to: "-1 (DCR) / -3 (классич.)", skr: "Кар / Нет", dos: "Мал",
      damage: "8d6 ОФ / 8d10 ББ КС / 5d6 HEP", ammo: "Надульная граната с пулеуловителем", mag: "1", sko: "1/2", nad: "ОТ / ОБ", range: "150м (вин.) / 50м (пист.)", cost: "15–100 eb", book: "Chr1",
      desc: "С помощью дульного адаптера (200 eb) любая винтовка или пистолет (от 9мм и выше) может выстреливать надульные гранаты с пулеуловителем: фугасные (8d6 в рад. 5м), кумулятивные ПТ (8d10 ББ КС) или пистолетные 25-мм гранаты (HEP 5d6, осколочные 5d6)."
    },
    {
      id: "bsw-exp-mines",
      name: "Противопехотные и противотанковые мины (AP / AT / Claymore / PDU-3)",
      origName: "Antipersonnel Mine / Antitank Mine / Claymore / Militech PDU-3",
      category: "Гранаты, мины и взрывчатка",
      typeCode: "ТЯЖ", to: "0", skr: "Кар / Кур / Плащ", dos: "Мал",
      damage: "4d10 (ПП) / 6d10 ББ (ПТ) / 2d6+5 (PDU-3)", ammo: "Взрывное устройство", mag: "1", sko: "1", nad: "ОТ / ОБ", range: "Контакт / ИК / Таймер", cost: "150–500 eb", book: "CP20",
      desc: "Включает: Противопехотную мину M25AP (350 eb, 4d10 в рад. 7м), Противотанковую M26AT (400 eb, 6d10 ББ), Направленную мину «Клеймор» (500 eb, 4d10 в конусе 75м) и Периметральную мину с ИК-датчиком Militech PDU-3 (150 eb, 2d6+5 в диам. 5м)."
    },
    {
      id: "bsw-exp-c6detcard",
      name: "Пластит C-6 «Flatfire» и Взрыв-карта FEN Dz 25 «Det Card™»",
      origName: "C-6 \"Flatfire\" Plastic Explosive / FEN Dz 25 \"Det Card\"",
      category: "Гранаты, мины и взрывчатка",
      typeCode: "ТЯЖ", to: "0", skr: "Кар", dos: "Мал",
      damage: "8d10 за кг (C-6) / 1d10 (Det Card)", ammo: "Пластическая взрывчатка", mag: "1", sko: "1", nad: "ОТ / ОБ", range: "Установка", cost: "100 eb/кг (120 eb карта)", book: "Chr1",
      desc: "Пластит C-6 (100 eb/кг) наносит 8d10 урона в базовом радиусе 5 метров. FEN Det Card™ (120 eb) — пластинка пластита, замаскированная под карточку Trauma Team или прессы: переломите её пополам, и через 20 секунд она взорвётся (1d10 урона, идеальна для вскрытия замков)."
    },

    // --- СПЕЦИАЛЬНЫЕ БОЕПРИПАСЫ (SPECIAL AMMO, стр. 43-47) ---
    {
      id: "bsw-ammo-specialbullets",
      name: "Спецпатроны: ББ (AP), Двухцелевые (DP), Зажигательные (API), Экспансивные и Флешетты Kendachi",
      origName: "Special Firearm Ammunition (AP, DP, API, Hollowpoint, Kendachi Frag Flechette)",
      category: "Боеприпасы и спецпатроны",
      typeCode: "ПАТР", to: "—", skr: "Кар", dos: "Обы / Ред",
      damage: "Модификатор урона и пробития", ammo: "Для любого огнестрела", mag: "Коробка 100 шт.", sko: "—", nad: "—", range: "—", cost: "x1.125 – x5 от базовой цены", book: "Chr2",
      desc: "• Бронебойные (AP, цена x3): ОС брони x1/2, прошедший урон x1/2.\n• Бронебойно-зажигательные (API, цена x4): как AP, плюс 1d6 огненного урона в 1-й раунд и 1d6/2 во 2-й раунд при пробитии.\n• Двухцелевые (Dual-Purpose, цена x4): по броне работают как AP (1/2 ОС и 1/2 урона), а по незащищённой цели наносят x1.5 урона!\n• Экспансивные (Hollowpoint, цена x1.125): броня считается x2 ОС, но пробивший урон x1.5.\n• Разрывные флешетты Kendachi (цена x5, Ред): мягкая броня считается как 1/2 ОС, а урон по плоти проходит ПОЛНЫЙ (без деления!)."
    },
    {
      id: "bsw-ammo-shotgunshells",
      name: "Спецпатроны для дробовиков (APFSDS, Термит, Slasher, Stundart, HE, Флешетты)",
      origName: "Special Shotgun & Grenade Ammunition",
      category: "Боеприпасы и спецпатроны",
      typeCode: "ПАТР", to: "—", skr: "Кар", dos: "Мал / Ред",
      damage: "6d6 ББ (БОПС) / 8d6 ББ (Термит) / 4d6 (Мононить)", ammo: "12 / 10 калибр и 25–40мм", mag: "Поштучно / пачки", sko: "—", nad: "—", range: "10–100м", cost: "5–150 eb за выстрел", book: "Chr2",
      desc: "• APFSDS (10 eb/шт): оперённый подкалиберный снаряд, урон 6d6 ББ на дистанции до 25 м.\n• Thermite (30 eb/шт): струя горящего при 3000°C термита, наносит 8d6 ББ урона!\n• UrbanTech Slasher (75 eb ружейный / 150 eb граната): два грузила, растягивающие в полёте 1–3 метра мононити Kendachi и разрезающие цель пополам (4d6 урона, броня x1/3 ОС)!"
    }
  ];

  PACK_5_ITEMS.forEach(newItem => {
    const exists = extDb.weapons.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase()) ||
      (existing.origName && existing.origName.toLowerCase() === newItem.origName.toLowerCase())
    );
    if (!exists) {
      extDb.weapons.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ БРОНИ В DATABASE.JS (БЕЗ ПЕРЕЗАПИСИ СУЩЕСТВУЮЩИХ КАРТОЧЕК)
// Полный свод брони: Corebook, Chromebook 1–4, Protect & Serve, Corpbooks, HotB   броня
// ============================================================================
(function appendArmorPack1() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.armor)) extDb.armor = [];
  if (!Array.isArray(extCats.armor)) extCats.armor = [];

  const armorCategories = [
    "Лёгкая и скрытая броня",
    "Бронекуртки и плащи",
    "Брендовая бронеодежда (Fashionware)",
    "Полицейская и корпоративная броня",
    "Тяжёлая и армейская броня",
    "Шлемы, щиты и модули"
  ];
  armorCategories.forEach(c => {
    if (!extCats.armor.includes(c)) extCats.armor.push(c);
  });

  const ARMOR_PACK_ITEMS = [
    // --- 1. БАЗОВАЯ И ЛЁГКАЯ БРОНЯ (COREBOOK & CHROMEBOOKS) ---
    {
      id: "arm-heavy-leather",
      name: "Толстая кожаная куртка (Heavy Leather Jacket)",
      origName: "Heavy Leather Jacket",
      category: "Лёгкая и скрытая броня",
      coverage: "Торс, Руки",
      sp: "4",
      ev: "0",
      cost: "50 eb",
      book: "CP20",
      desc: "Плотная куртка из натуральной или синтетической дорожной кожи, популярная у байкеров, рокеров и кочевников. Мягкая броня: защищает от порезов, осколков и скользящих ударов, совершенно не сковывая движений."
    },
    {
      id: "arm-heavy-leather-pants",
      name: "Плотные кожаные штаны (Heavy Leather Pants)",
      origName: "Heavy Leather Pants",
      category: "Лёгкая и скрытая броня",
      coverage: "Ноги",
      sp: "4",
      ev: "0",
      cost: "50–100 eb",
      book: "CP20",
      desc: "Тяжёлые мотоциклетные штаны из толстой кожи. Мягкая броня (ОС 4), защищающая ноги от асфальтовой болезни и мелких осколков."
    },
    {
      id: "arm-kevlar-tshirt",
      name: "Кевларовая футболка / майка (Kevlar T-Shirt / Vest)",
      origName: "Kevlar T-Shirt",
      category: "Лёгкая и скрытая броня",
      coverage: "Торс",
      sp: "10",
      ev: "0",
      cost: "90 eb",
      book: "CP20",
      desc: "Тонкая облегающая майка или скрытый жилет из баллистического волокна Kevlar. Мягкая броня. Практически незаметна под любой обычной рубашкой или пиджаком и способна остановить пулю лёгкого пистолета."
    },
    {
      id: "arm-armored-stockings",
      name: "Бронированные чулки / колготки (Duraweave Armored Stockings)",
      origName: "Armored Stockings",
      category: "Лёгкая и скрытая броня",
      coverage: "Ноги",
      sp: "6",
      ev: "0",
      cost: "110 eb",
      book: "Chr2",
      desc: "Эластичные чулки из баллистического микроволокна Duraweave, визуально неотличимые от обычных модельных чулок или колготок. Обеспечивают скрытую мягкую защиту ног (ОС 6) без какого-либо штрафа к подвижности."
    },
    {
      id: "arm-cballistic-mesh",
      name: "Баллистическая сетка C-Ballistic Mesh",
      origName: "C-Ballistic Mesh",
      category: "Лёгкая и скрытая броня",
      coverage: "Торс, Руки, Ноги",
      sp: "15",
      ev: "0",
      cost: "250 eb",
      book: "Interface",
      desc: "Высокотехнологичное облегающее трико из композитной баллистической сетки. Мягкая броня (ОС 15), разработанная для ношения под верхней одеждой или поверх тонкого нательного белья."
    },
    {
      id: "arm-gibson-sneaksuit",
      name: "Стелс-комбинезон Gibson Battlegear «Sneak Suit»",
      origName: "Gibson Battlegear \"Sneak Suit\"",
      category: "Лёгкая и скрытая броня",
      coverage: "Торс, Руки, Ноги, Голова (капюшон)",
      sp: "10",
      ev: "0",
      cost: "560 eb",
      book: "Chr2",
      desc: "Самый популярный тактический стелс-костюм в мире. Чёрный светопоглощающий облегающий комбинезон с капюшоном из материала PhotoCarbon™ и ультралёгкого трёхнитевого плетения (мягкая броня ОС 10). Даёт врагам штраф -4 к проверкам Внимательности/Заметности (Awareness/Notice) при попытке обнаружить владельца в темноте."
    },
    {
      id: "arm-gibson-sneak-vest",
      name: "Стелс-бронежилет Gibson Battlegear «Sneak Suit» Flak Vest",
      origName: "Gibson Battlegear \"Sneak Suit\" Flak Vest",
      category: "Лёгкая и скрытая броня",
      coverage: "Торс",
      sp: "16",
      ev: "1",
      cost: "375 eb",
      book: "Chr2",
      desc: "Дополнительный тактический жилет из светопоглощающего материала PhotoCarbon™, созданный специально для ношения поверх стелс-комбинезона Sneak Suit. Сохраняет маскировочные свойства костюма (-4 к обнаружению в тени)."
    },

    // --- 2. БРОНЕКУРТКИ И ПЛАЩИ (ARMOR JACKETS & COATS) ---
    {
      id: "arm-light-jacket",
      name: "Лёгкая бронекуртка (Light Armor Jacket)",
      origName: "Light Armor Jacket",
      category: "Бронекуртки и плащи",
      coverage: "Торс, Руки",
      sp: "14",
      ev: "0",
      cost: "150 eb",
      book: "CP20",
      desc: "Персональная защита для стильных жителей опасных кварталов. Мягкая кевларовая подкладка вшита внутрь обычной уличной ветровки, джинсовки или бомбера, поэтому со стороны куртка не выглядит как армейская броня и не даёт штрафа ЗУ."
    },
    {
      id: "arm-med-jacket",
      name: "Средняя бронекуртка (Medium Armor Jacket)",
      origName: "Medium Armor Jacket",
      category: "Бронекуртки и плащи",
      coverage: "Торс, Руки",
      sp: "18",
      ev: "1",
      cost: "200 eb",
      book: "CP20",
      desc: "Классический уличный «Арморджек» — стандартная экипировка наёмников-Соло, кочевников и уличных самураев Найт-Сити. Сочетает многослойный кевлар с амортизирующими вставками на плечах и груди (ОС 18, ЗУ 1)."
    },
    {
      id: "arm-heavy-jacket",
      name: "Тяжёлая бронекуртка (Heavy Armor Jacket)",
      origName: "Heavy Armor Jacket",
      category: "Бронекуртки и плащи",
      coverage: "Торс, Руки",
      sp: "20",
      ev: "2",
      cost: "250 eb",
      book: "CP20",
      desc: "Массивная штурмовая куртка с вшитыми композитными пластинами и высоким воротником. Обеспечивает защиту на уровне армейского бронежилета (ОС 20), но заметно сковывает движения (ЗУ 2) и привлекает внимание в корпоративных зонах."
    },
    {
      id: "arm-uniware-trench",
      name: "Бронированный плащ Uniware Armor Trenchcoat",
      origName: "Uniware Armor Trenchcoat",
      category: "Бронекуртки и плащи",
      coverage: "Торс, Руки, Ноги",
      sp: "18",
      ev: "0",
      cost: "300 eb",
      book: "Chr1",
      desc: "Настоящий хит среди эджраннеров от бренда Uniware: длинный стильный плащ-тренчкот из баллистического плетения, прикрывающий сразу торс, руки и ноги с защитой ОС 18 и без штрафа к ЗУ! Идеален для скрытого ношения длинноствольного оружия под полой."
    },
    {
      id: "arm-uniware-jacket",
      name: "Бронекуртка Uniware Armor Jacket",
      origName: "Uniware Armor Jacket",
      category: "Бронекуртки и плащи",
      coverage: "Торс, Руки",
      sp: "14",
      ev: "0",
      cost: "200 eb",
      book: "Chr1",
      desc: "Практичная повседневная куртка из баллистического нейлона от корпорации Uniware. Обеспечивает надёжную защиту торса и рук (ОС 14) и отлично вписывается в городской деловой или уличный стиль."
    },
    {
      id: "arm-plastech-duster",
      name: "Бронированный пыльник Plastech Duster",
      origName: "Plastech Duster",
      category: "Бронекуртки и плащи",
      coverage: "Торс, Руки, Ноги",
      sp: "18",
      ev: "0",
      cost: "350 eb",
      book: "Chr4",
      desc: "Длинный дорожный плащ-пыльник из прорезиненного баллистического полимера Plastech. Защищает всё тело кроме головы (ОС 18), не промокает под кислотными дождями и даёт +1 к проверкам Гардероба и Стиля (Wardrobe & Style)."
    },
    {
      id: "arm-soviet-greatcoat",
      name: "Советская бронированная шинель (Soviet Military Armored Greatcoat)",
      origName: "Soviet Military Armored Greatcoat",
      category: "Бронекуртки и плащи",
      coverage: "Торс, Руки, Ноги",
      sp: "14",
      ev: "1",
      cost: "250 eb",
      book: "Corp3",
      desc: "Тяжёлая двубортная армейская шинель Советских Вооружённых Сил и подразделений «СовНефти» с вшитым баллистическим подбоем и утеплителем. Защищает торс, руки и ноги от пуль и суровых морозов."
    },
    {
      id: "arm-ir-combat-cloak",
      name: "ИК-маскировочный плащ Gibson Battlegear IR Combat Cloak",
      origName: "Gibson Battlegear IR Combat Cloak",
      category: "Бронекуртки и плащи",
      coverage: "Торс, Руки, Ноги",
      sp: "0 (Термомаскировка)",
      ev: "2",
      cost: "450 eb",
      book: "Chr1",
      desc: "Свободный плащ-макинтош весом 2 кг для ночных спецопераций. Поглощает инфракрасное излучение тела и сбрасывает тепло случайными пятнами, разрушая силуэт человека: даёт врагам с тепловизорами и ИК-оптикой штраф -5 к проверкам Заметности (Awareness/Notice)."
    },

    // --- 3. БРЕНДОВАЯ БРОНЕОДЕЖДА (FASHIONWARE, CHROMEBOOK 1–4) ---
    {
      id: "arm-gibson-jeans",
      name: "Бронированные джинсы Gibson Battlegear Jeans",
      origName: "Gibson Battlegear Jeans",
      category: "Брендовая бронеодежда (Fashionware)",
      coverage: "Ноги",
      sp: "16",
      ev: "0",
      cost: "70 eb",
      book: "Chr1",
      desc: "Классические синие или чёрные джинсы с вплетённой кевларовой нитью от знаменитого бренда уличной тактической одежды Gibson Battlegear. Мягкая защита ног ОС 16 без потери подвижности — выбор №1 для любого уличного панка."
    },
    {
      id: "arm-gibson-denim",
      name: "Джинсовая бронекуртка Gibson Battlegear Denim Jacket",
      origName: "Gibson Battlegear Denim Jacket",
      category: "Брендовая бронеодежда (Fashionware)",
      coverage: "Торс, Руки",
      sp: "14",
      ev: "0",
      cost: "150 eb",
      book: "Chr1",
      desc: "Стильная джинсовая куртка с баллистической подкладкой от Gibson Battlegear. Идеально сочетается с бронированными джинсами той же марки."
    },
    {
      id: "arm-gibson-greaves",
      name: "Бронированные поножи Gibson Battlegear Greaves",
      origName: "Gibson Battlegear Greaves",
      category: "Брендовая бронеодежда (Fashionware)",
      coverage: "Ноги",
      sp: "20",
      ev: "0",
      cost: "150 eb",
      book: "Chr4",
      desc: "Ударопрочные накладные щитки-поножи на голени и колени от Gibson Battlegear, обеспечивающие мощную защиту ног (ОС 20)."
    },
    {
      id: "arm-takanaka-cloak",
      name: "Представительский бронеплащ Takanaka Exec Line Opera Cloak",
      origName: "Takanaka Exec Line Armored Opera Cloak",
      category: "Брендовая бронеодежда (Fashionware)",
      coverage: "Торс, Руки",
      sp: "16",
      ev: "0",
      cost: "1,200 eb",
      book: "Chr1",
      desc: "Роскошная вечерняя накидка высшего корпоративного класса от японского дома моды Takanaka. Скрывает внутри тончайшее пуленепробиваемое плетение с защитой ОС 16."
    },
    {
      id: "arm-eji-cloak",
      name: "Световой бронеплащ Eji of Japan Armored Cloak",
      origName: "Eji Armored Cloak with Light Panels",
      category: "Брендовая бронеодежда (Fashionware)",
      coverage: "Торс, Руки, Ноги",
      sp: "14",
      ev: "0",
      cost: "650 eb",
      book: "Chr1",
      desc: "Авангардный плащ японского дизайнера Eji со встроенными программируемыми световыми панелями и мягкой баллистической защитой всего тела (ОС 14)."
    },
    {
      id: "arm-flein-suit",
      name: "Деловой бронекостюм Flein Duraweave Suit",
      origName: "Flein Duraweave Suit",
      category: "Брендовая бронеодежда (Fashionware)",
      coverage: "Торс, Руки, Ноги",
      sp: "10",
      ev: "0",
      cost: "500 eb",
      book: "Chr4",
      desc: "Элегантный деловой костюм строгого кроя из пулестойкой ткани Duraweave. Обеспечивает защиту ОС 10 и даёт бонус +2 к навыку Гардероба и Стиля."
    },
    {
      id: "arm-ruftread-jacket",
      name: "Куртка Ruf Tread Kevlon & Polylog Jacket",
      origName: "Ruf Tread Kevlon & Polylog Jacket",
      category: "Брендовая бронеодежда (Fashionware)",
      coverage: "Торс, Руки",
      sp: "18",
      ev: "1",
      cost: "280 eb",
      book: "Chr4",
      desc: "Прочная внедорожная бронекуртка из комбинированного волокна Kevlon и Polylog, созданная для суровых условий Пустошей и Боевой Зоны."
    },
    {
      id: "arm-ruftread-boots",
      name: "Бронированные ботинки Ruf Tread Boots",
      origName: "Ruf Tread Boots",
      category: "Брендовая бронеодежда (Fashionware)",
      coverage: "Ноги (стопы и голени)",
      sp: "20",
      ev: "0",
      cost: "120 eb",
      book: "Chr4",
      desc: "Тяжёлые армейские и туристические берцы со стальными стаканами и кевларовыми голенищами, дающие защиту ОС 20."
    },
    {
      id: "arm-discovery-taser",
      name: "Шоковая бронеодежда линейки Discovery Line (Taser Clothing)",
      origName: "Discovery Line Armored Jacket / Jumpsuit",
      category: "Брендовая бронеодежда (Fashionware)",
      coverage: "Торс, Руки (и Ноги в комбезе)",
      sp: "6",
      ev: "0",
      cost: "450–650 eb",
      book: "Interface",
      desc: "Одежда для самообороны со вплетённой электрошоковой сеткой (от 3 до 6 зарядов) и лёгким баллистическим подбоем (ОС 6). Любой, кто схватит владельца в рукопашной, получает мощный разряд тока (проверка ТЕЛА со сложностью 25+ от оглушения!)."
    },
    {
      id: "arm-lano-coveralls",
      name: "Бронированный комбинезон «Lano» Coveralls",
      origName: "'Lano' Armored Coveralls",
      category: "Брендовая бронеодежда (Fashionware)",
      coverage: "Торс, Руки, Ноги",
      sp: "14",
      ev: "2",
      cost: "1,600 eb",
      book: "Chr3",
      desc: "Защитный тактический и технический комбинезон полного покрытия из огнеупорного баллистического композита."
    },
    {
      id: "arm-salamander-fire",
      name: "Огнеупорная одежда Savagery «Salamander Line»",
      origName: "Savagery's Salamander Line Fireproof Clothing",
      category: "Брендовая бронеодежда (Fashionware)",
      coverage: "По предмету одежды",
      sp: "20 (только от огня!)",
      ev: "0",
      cost: "110–250 eb",
      book: "Chr1",
      desc: "Линейка негорючих курток, брюк и головных уборов. Не защищает от пуль, но даёт 20 единиц ОС против любого огненного, термитного и плазменного урона."
    },

    // --- 4. ПОЛИЦЕЙСКАЯ И КОРПОРАТИВНАЯ БРОНЯ (PROTECT & SERVE / CORPBOOKS) ---
    {
      id: "arm-flak-vest",
      name: "Армейский бронежилет (Flak Vest)",
      origName: "Flak Vest",
      category: "Полицейская и корпоративная броня",
      coverage: "Торс",
      sp: "20",
      ev: "1",
      cost: "200 eb",
      book: "CP20",
      desc: "Стандартный бронежилет патрульной полиции, корпоративной охраны и армейской пехоты с жёсткими баллистическими пластинами. Надёжно держит очереди из ПП и автоматные пули на излёте."
    },
    {
      id: "arm-flak-pants",
      name: "Бронированные штаны (Flak Pants)",
      origName: "Flak Pants",
      category: "Полицейская и корпоративная броня",
      coverage: "Ноги",
      sp: "20",
      ev: "1",
      cost: "200 eb",
      book: "CP20",
      desc: "Тяжёлые тактические брюки с баллистическими пакетами и наколенниками, используемые бойцами SWAT и корпоративным спецназом в паре с бронежилетом Flak Vest."
    },
    {
      id: "arm-ncpd-patrol",
      name: "Патрульная броня полиции (NCPD Patrol Armor)",
      origName: "Patrol Armor",
      category: "Полицейская и корпоративная броня",
      coverage: "Торс (20), Ноги (18), Руки (15)",
      sp: "20 / 18 / 15",
      ev: "2",
      cost: "900 eb",
      book: "PAC",
      desc: "Стандартный защитный комплект уличного офицера полиции из книги Protect & Serve. Обеспечивает дифференцированную защиту: ОС 20 на торсе, ОС 18 на ногах и ОС 15 на руках. С дополнительными бронепластинами из сплава (Alloy Plates) защита возрастает до ОС 25 (торс) / 23 (ноги) / 20 (руки)."
    },
    {
      id: "arm-ncpd-riot",
      name: "Полицейский комплект подавления бунтов (Police Riot Armor)",
      origName: "Police Riot Armor Ensemble",
      category: "Полицейская и корпоративная броня",
      coverage: "Торс (30), Ноги (18), Руки (15), Стопы (12)",
      sp: "30 (торс) / 18 / 15",
      ev: "3",
      cost: "1,400 eb",
      book: "PAC",
      desc: "Штурмовой комплект полиции для разгона массовых беспорядков в Боевой Зоне: включает сверхтяжёлый жилет (ОС 30), армированные наручи (ОС 15), кевларовые брюки (ОС 18), бронеботинки (ОС 12) и обтекаемый шлем."
    },
    {
      id: "arm-militech-m78",
      name: "Бронекуртка Militech M-78 RPA Jacket",
      origName: "Militech M-78 Revised Personal Armor Jacket",
      category: "Полицейская и корпоративная броня",
      coverage: "Торс, Руки",
      sp: "14",
      ev: "1",
      cost: "300 eb",
      book: "Corp2",
      desc: "Модернизированная форменная бронекуртка корпорации Militech и ЧВК «Лазарь» с карманами под разгрузку и креплениями для рации."
    },
    {
      id: "arm-militech-mirage",
      name: "Камуфляжный жилет Militech M73 «Mirage Gear» Flak Vest",
      origName: "M73 \"Mirage Gear\" Environmental Assimilation System Flak Vest",
      category: "Полицейская и корпоративная броня",
      coverage: "Торс",
      sp: "18",
      ev: "1",
      cost: "850 eb",
      book: "Corp2",
      desc: "Высокотехнологичный бронежилет спецназа Militech с активным хамелеоновым покрытием «Мираж», подстраивающим цвет и рисунок камуфляжа под окружающую местность."
    },
    {
      id: "arm-netrunner-suit",
      name: "Боевой нейрокостюм Net-Runner™ Cybermodem Utility Suit",
      origName: "Net-Runner Cybermodem Utility Suit",
      category: "Полицейская и корпоративная броня",
      coverage: "Торс, Руки, Ноги",
      sp: "12",
      ev: "0",
      cost: "6,300 eb (с кибердекой!)",
      book: "Chr1",
      desc: "Многослойный кевларовый комбинезон (ОС 12, доступен вариант со стелс-тканью Sneaksuit) для боевых нетраннеров-штурмовиков. В воротник, наручи и пояс уже встроена полноценная портативная кибердека (Память 20 MU, Скорость +2, Стены данных +4), биомонитор, широкополосная рация и оптоволоконная разводка (общий вес 3.25 кг)."
    },
    {
      id: "arm-medical-armor",
      name: "Полевой бронескафандр медика (Medical Armor / Trauma Suit)",
      origName: "Medical Armor",
      category: "Полицейская и корпоративная броня",
      coverage: "Всё тело",
      sp: "20",
      ev: "3",
      cost: "3,400 eb",
      book: "HotB",
      desc: "Тяжёлый бронированный костюм полевого хирурга и боевых эвакуационных групп со встроенными медицинскими сенсорами, стерилизаторами и диагностическим компьютером. Защищает всё тело на ОС 20 и даёт бонус +2 ко всем проверкам Медтехники и Первой помощи!"
    },

    // --- 5. ТЯЖЁЛАЯ И АРМЕЙСКАЯ БРОНЯ (HEAVY & MILITARY ARMOR) ---
    {
      id: "arm-doorgunner-vest",
      name: "Жилет бортстрелка (Door Gunner's Vest)",
      origName: "Door Gunner's Vest",
      category: "Тяжёлая и армейская броня",
      coverage: "Торс",
      sp: "25",
      ev: "3",
      cost: "250 eb",
      book: "CP20",
      desc: "Сверхтяжёлый керамико-металлический панцирь, созданный для защиты бортстрелков АВ-4 и вертолётов от крупнокалиберного огня с земли. Даёт сокрушительную защиту торса (ОС 25, жёсткая броня), но сильно сковывает подвижность (ЗУ 3)."
    },
    {
      id: "arm-metalgear",
      name: "Секционная броня MetalGear™",
      origName: "MetalGear",
      category: "Тяжёлая и армейская броня",
      coverage: "Все зоны (Голова, Торс, Руки, Ноги)",
      sp: "25",
      ev: "2",
      cost: "600 eb",
      book: "CP20",
      desc: "Легендарная модульная жёсткая броня из ламинированных углеродно-бериллиевых волокон на пластиковой основе. Состоит из 4 секций-створок (шлем, кираса, наручи и поножи), полностью закрывающих всё тело с ОС 25 при общем весе всего 2.2 кг! Снижает электрический урон на 50%. Появление в MetalGear™ на городских улицах мгновенно привлекает внимание полиции и Max-Tac."
    },
    {
      id: "arm-mil-assault",
      name: "Армейская штурмовая броня (Military Assault Armor)",
      origName: "Military Assault Armor",
      category: "Тяжёлая и армейская броня",
      coverage: "Все зоны (Голова, Торс, Руки, Ноги)",
      sp: "28",
      ev: "2",
      cost: "2,000 eb",
      book: "HotB",
      desc: "Полноценный герметичный штурмовой бронекостюм регулярной армии США из книги Home of the Brave. Обеспечивает защиту ОС 28 по всему телу, включает полную защиту от радиационного, химического и бактериологического оружия (NBC), встроенный противогаз, военную рацию и баллон с воздухом."
    },
    {
      id: "arm-ema1-softshell",
      name: "Экзо-бронекостюм EMA-1 SoftShell",
      origName: "EMA-1 SoftShell",
      category: "Тяжёлая и армейская броня",
      coverage: "Все зоны",
      sp: "25",
      ev: "0",
      cost: "8,500 eb",
      book: "FS (Shockwave)",
      desc: "Сверхсовременный штурмовой бронекостюм Четвёртой Корпоративной войны со встроенным моторизованным экзо-каркасом (автономность батареи 48 часов), который полностью компенсирует вес брони (ОС 25 при ЗУ 0!) и усиливает физические возможности бойца."
    },
    {
      id: "arm-blackjack-stealth",
      name: "Диверсионный бронескафандр Blackjack Stealth Armor",
      origName: "Blackjack Stealth Armor",
      category: "Тяжёлая и армейская броня",
      coverage: "Все зоны (герметичный)",
      sp: "16",
      ev: "2",
      cost: "10,000 eb",
      book: "FS (Shockwave)",
      desc: "Элитный диверсионный костюм спецназа Четвёртой Корпоративной войны: даёт +3 к навыку Скрытности (Stealth), на 90% невидим для радаров, имеет 4-часовую замкнутую систему жизнеобеспечения и встроенный в шлем оптический комплекс (Low-Lite, защита от вспышек Anti-Dazzle, прицел Targeting Scope и инфо-строка Times Square Plus)."
    },

    // --- 6. ШЛЕМЫ, ЩИТЫ И БРОНЕМОДУЛИ (HELMETS, SHIELDS & INSERTS) ---
    {
      id: "arm-steel-helmet",
      name: "Стальной шлем (Steel Helmet)",
      origName: "Steel Helmet",
      category: "Шлемы, щиты и модули",
      coverage: "Голова",
      sp: "14",
      ev: "0",
      cost: "20 eb",
      book: "CP20",
      desc: "Базовый армейский стальной или композитный шлем без забрала. Доступная и надёжная жёсткая защита головы (ОС 14) для большинства уличных перестрелок."
    },
    {
      id: "arm-nylon-helmet",
      name: "Кевларовый / Нейлоновый шлем (Nylon Helmet)",
      origName: "Nylon Helmet",
      category: "Шлемы, щиты и модули",
      coverage: "Голова",
      sp: "20",
      ev: "0",
      cost: "100 eb",
      book: "CP20",
      desc: "Современный армейский и тактический шлем из баллистического нейлона и кевлара, обеспечивающий высокую защиту головы (ОС 20)."
    },
    {
      id: "arm-m88-helmet",
      name: "Тактический шлем Militech M-88 Revised Combat Helmet",
      origName: "M-88 Revised Combat Helmet",
      category: "Шлемы, щиты и модули",
      coverage: "Голова (20) / Лицо (15)",
      sp: "20 (15 забрало)",
      ev: "0",
      cost: "5,000 eb",
      book: "Corp2",
      desc: "Высокотехнологичный пехотный шлем со встроенным тактическим компьютером, инерциальной системой навигации, связью и бронированным лицевым забралом (ОС 20 череп, ОС 15 лицо, ОСТ 10)."
    },
    {
      id: "arm-headgear-cyber",
      name: "Шлем-кибердека Microtech HEADGEAR™",
      origName: "Microtech HEADGEAR Cybermodem Helmet",
      category: "Шлемы, щиты и модули",
      coverage: "Голова",
      sp: "16",
      ev: "0",
      cost: "4,100 eb",
      book: "Chr1",
      desc: "Ударопрочный мотоциклетный шлем (ОС 16) со встроенным проекционным HUD-дисплеем на визоре, радиосвязью и полноценной портативной кибердекой внутри корпуса (Память 10 MU, Скорость +2, Стены данных +2)."
    },
    {
      id: "arm-gianni-helmet",
      name: "Гермошлем «Gianni» со смарт-очками ('Gianni' Helmet)",
      origName: "'Gianni' Helmet",
      category: "Шлемы, щиты и модули",
      coverage: "Голова",
      sp: "20",
      ev: "0",
      cost: "800 eb",
      book: "Chr3",
      desc: "Закрытый итальянский шлем с полной защитой головы (ОС 20), встроенными фильтрами (+10 к сопротивлению газам) и интегрированными смарт-очками (Smartgoggles). Базовая версия без смарт-очков («Guercio» Helmet) стоит 600 eb."
    },
    {
      id: "arm-bearskin-hat",
      name: "Бронированная меховая шапка (Armored Bearskin Hat)",
      origName: "Armored Bearskin Hat",
      category: "Шлемы, щиты и модули",
      coverage: "Голова",
      sp: "10",
      ev: "0",
      cost: "75 eb",
      book: "Corp3",
      desc: "Тёплая зимняя шапка-ушанка с вшитым внутрь кевларовым куполом (ОС 10). Позволяет защитить голову от пистолетных пуль, не привлекая внимания ношением боевого шлема."
    },
    {
      id: "arm-riot-shield",
      name: "Полицейский штурмовой щит со стробоскопом (Police Issue Riot Shield)",
      origName: "Police Issue Riot Shield",
      category: "Шлемы, щиты и модули",
      coverage: "Прикрываемые зоны за щитом",
      sp: "15",
      ev: "1",
      cost: "150 eb (250 со стробоскопом)",
      book: "PAC",
      desc: "Прозрачный поликарбонатный тактический щит полиции (ОС 15). Модификация с ослепляющим фронтальным стробоскопом заставляет противника проходить проверку РЕФ и ТЕЛА от временного ослепления."
    },
    {
      id: "arm-inserts-plates",
      name: "Броневставки и накладные пластины (Armor Inserts / Full Plates)",
      origName: "Armor Inserts / Full Plates",
      category: "Шлемы, щиты и модули",
      coverage: "1 выбранная зона тела",
      sp: "+5 (до макс. 20) / 20–25",
      ev: "0 / +1",
      cost: "40–100 eb",
      book: "FS (Shockwave)",
      desc: "Жёсткие керамические броневставки (40 eb за 1 зону: повышают ОС мягкой брони на +5 вплоть до максимума ОС 20) или полноценные внешние накладные бронепластины Full Plates (60 eb за ОС 20 или 100 eb за ОС 25 на одну зону, добавляют +1 ЗУ)."
    }
  ];

  ARMOR_PACK_ITEMS.forEach(newItem => {
    const exists = extDb.armor.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase()) ||
      (existing.origName && existing.origName.toLowerCase() === newItem.origName.toLowerCase())
    );
    if (!exists) {
      extDb.armor.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ КОРПОРАЦИЙ В DATABASE.JS (БЕЗ ПЕРЕЗАПИСИ СУЩЕСТВУЮЩИХ КАРТОЧЕК)
// Мегакорпорации Cyberpunk 2020 (Corebook + Corporation Report Vol. 1, 2, 3)     корпорации
// ============================================================================
(function appendCorporationsPack1() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.corporations)) extDb.corporations = [];
  if (!Array.isArray(extCats.corporations)) extCats.corporations = [];

  const corpCategories = [
    "Безопасность и ВПК",
    "Промышленность и кибернетика",
    "Биотехнологии и фармацевтика",
    "Топливо и агропром",
    "Инфокомп и микроэлектроника",
    "Медиа и связь",
    "Финансы и орбитальные корпорации"
  ];
  corpCategories.forEach(c => {
    if (!extCats.corporations.includes(c)) extCats.corporations.push(c);
  });

  const CORPORATIONS_PACK = [
    {
      id: "corp-arasaka",
      name: "Arasaka",
      origName: "Arasaka Corporation",
      category: "Безопасность и ВПК",
      book: "Corp1",
      hq: "Токио, Япония",
      employees: "1 000 000 по всему миру",
      soldiers: "250 000 (охранные и ударные части)",
      operatives: "20 000 тайных агентов и Соло",
      shareholders: "Сабуро Арасака (48%), Кэй Арасака (23%), Ханако Арасака (9%), прочие (20%)",
      desc: "Могущественная японская семейная дзайбацу, специализирующаяся на корпоративной безопасности, банковском деле, разведке и производстве высокотехнологичного вооружения. Основана Сасаем Арасакой в 1915 году и превращена его сыном Сабуро Арасакой в глобальную сверхдержаву после Второй мировой войны.\n\n«Парни в чёрном» из охранного подразделения Arasaka охраняют важнейшие объекты по всему миру, а собственная армия и разведывательная сеть корпорации позволяют Сабуро Арасаке диктовать условия правительствам целых государств."
    },
    {
      id: "corp-militech",
      name: "Militech",
      origName: "Militech Arms International",
      category: "Безопасность и ВПК",
      book: "Corp2",
      hq: "Вашингтон (округ Колумбия), США",
      employees: "647 000 по всему миру",
      soldiers: "150 000 регулярных бойцов",
      operatives: "12 000 полевых оперативников",
      shareholders: "Генерал Дональд Ланди (9%), Антонио Лучесси (8%), Пентагон и военные фонды США (32%)",
      desc: "Крупнейший в мире производитель оружия, бронетехники, боевых киберимплантов и военного снаряжения, тесно сросшийся с правительством и армией США. Основан итальянским оружейным конструктором Антонио Лучесси и возглавляется бывшим генералом морской пехоты США Дональдом Ланди.\n\nГлавный и непримиримый соперник корпорации «Арасака» в борьбе за мировой рынок вооружений и военных контрактов."
    },
    {
      id: "corp-lazarus",
      name: "Lazarus Military Group",
      origName: "Lazarus Military Group",
      category: "Безопасность и ВПК",
      book: "Corp2",
      hq: "Александрия, Вирджиния, США",
      employees: "842 000 (включая резервный пул)",
      soldiers: "650 000 профессиональных наёмников",
      operatives: "15 000 разведчиков и спецагентов",
      shareholders: "Генерал Ричард Стаут (31%), Милитех (14%), инвестиционные фонды Уолл-стрит",
      desc: "Крупнейшая частная военная компания (ЧВК) на планете, созданная бывшим генералом армии США Ричардом Стаутом. В отличие от «Арасаки», которая продаёт стационарную охрану объектов, «Лазарь» сдаёт в аренду целые танковые дивизии, авиационные крылья и воздушно-десантные полки для ведения полномасштабных войн. Находится в тесном стратегическом альянсе с корпорацией Militech."
    },
    {
      id: "corp-iec",
      name: "МInternational Electric Corporation / IEC",
      origName: "International Electric Corporation (IEC)",
      category: "Промышленность и кибернетика",
      book: "Corp1",
      hq: "Вена, Австрия (ЕЭС)",
      employees: "1 612 000 по всему миру",
      soldiers: "35 000 бойцов службы безопасности",
      operatives: "6 500 корпоративных оперативников",
      shareholders: "Эрих Хоэнхайм (11%), Гюнтер Штайнер (8%), европейские банковские консорциумы",
      desc: "Гигантский европейский промышленный конгломерат, производящий буквально всё: от бытовых тостеров, электростанций и танков до популярных линейных рам («Сигма», «Бета», «Омега») и полных кибернетических тел («Альфа» и «Драгун»). Скупив десятки разорившихся заводов в 1990-х, IEC стала фундаментом тяжёлой индустрии Евросоюза."
    },
    {
      id: "corp-biotechnica",
      name: "Biotechnica",
      origName: "Biotechnica",
      category: "Биотехнологии и фармацевтика",
      book: "CP20",
      hq: "Рим, Италия",
      employees: "36 000 учёных и специалистов",
      soldiers: "6 000 охранников лабораторий",
      operatives: "700 агентов био-разведки",
      shareholders: "Николо Лоджа (38%), Лоренцо Лауренти (17%), Совет директоров (26%)",
      desc: "Небольшая по численности персонала, но баснословно богатая итальянская биоинженерная корпорация, спасшая мир от энергетического краха. Именно главный генетик Biotechnica Николо Лоджа создал штамм пшеницы Triticum Megasuavis, из которой производится биотопливо CHOOH2 (ЧУХ-2). Лицензии на выращивание этой пшеницы приносят корпорации миллиарды евродолларов ежегодно, позволяя вести секретные разработки в области клонирования и искусственной жизни."
    },
    {
      id: "corp-petrochem",
      name: "Petrochem",
      origName: "Petrochemical Associates International",
      category: "Топливо и агропром",
      book: "Corp3",
      hq: "Даллас, Техас, США",
      employees: "420 000 по всему миру",
      soldiers: "50 000 бойцов вооружённой охраны",
      operatives: "5 000 оперативников",
      shareholders: "Эллен Трентон (51%), Ангус Янгблад (30%), прочие акционеры (19%)",
      desc: "Крупнейший в мире производитель моторного биотоплива CHOOH2 и владелец миллионов гектаров пахотных земель на территории США. Также контролирует уцелевшие нефтяные месторождения Техаса, производя пластмассы и синтетику. Внутри корпорации идёт скрытая борьба за власть между главой компании Эллен Трентон и амбициозным вице-президентом Ангусом Янгбладом."
    },
    {
      id: "corp-sovoil",
      name: "SovOil / СМРП",
      origName: "Soviet World Oil Industries (SovOil)",
      category: "Топливо и агропром",
      book: "Corp3",
      hq: "Москва, СССР (СНГ)",
      employees: "750 000 работников",
      soldiers: "150 000 (собственная армия, флот и авиация)",
      operatives: "8 000 агентов внешней разведки (бывш. КГБ)",
      shareholders: "Анатолий Новиков и Совет управляющих (42%), трудовые коллективы (35%), Правительство СССР (15%)",
      desc: "Бывший государственный нефтегазовый монополист СССР, который после модернизации и перехода на биотопливо CHOOH2 в 2000-х годах объявил о своей полной финансовой и военной независимости от Кремля. Сегодня «СовНефть» под руководством председателя Анатолия Новикова — это фактическая теневая власть на территории бывшего Советского Союза и главный конкурент корпорации Petrochem в борьбе за шельфовые месторождения."
    },
    {
      id: "corp-zetatech",
      name: "Zetatech",
      origName: "Zetatech",
      category: "Инфокомп и микроэлектроника",
      book: "CP20",
      hq: "Купертино, Калифорния, США",
      employees: "12 000 инженеров и сотрудников",
      soldiers: "3 500 бойцов безопасности",
      operatives: "800 сетевых и полевых агентов",
      shareholders: "Алан Затучный (34%), семья Бартмосс и венчурные инвесторы (28%)",
      desc: "Ведущая калифорнийская корпорация в сфере разработки микропроцессоров, нейропроцессоров, кибердек, софта для нетраннинга и робототехники. Находится в состоянии затяжной «теневой войны» со своим главным конкурентом — техасской корпорацией Microtech."
    },
    {
      id: "corp-microtech",
      name: "Microtech",
      origName: "Microtech",
      category: "Инфокомп и микроэлектроника",
      book: "CP20",
      hq: "Хьюстон, Техас, США",
      employees: "18 000 сотрудников",
      soldiers: "4 200 бойцов охраны",
      operatives: "950 оперативников и корпоративных нетраннеров",
      shareholders: "Саймон Мастерс (29%), совет директоров Хьюстона (33%)",
      desc: "Крупнейший производитель мейнфреймов, рабочих станций, портативных кибермодемов (включая знаменитые шлемы-деки HEADGEAR™) и боевых программ для Сети. Ведёт постоянный промышленный шпионаж против корпорации Zetatech."
    },
    {
      id: "corp-ebm",
      name: "Euro Business Machines / EBM",
      origName: "Euro Business Machines Corporation (EBM)",
      category: "Инфокомп и микроэлектроника",
      book: "CP20",
      hq: "Гамбург / Франкфурт, Германия",
      employees: "1 100 000 по всему миру",
      soldiers: "80 000 корпоративных солдат",
      operatives: "10 000 тайных оперативников",
      shareholders: "Ульфверк ГмбХ (26%), Банк Франкфурта (18%), немецкие промышленные династии",
      desc: "Одна из самых богатых и влиятельных мегакорпораций планеты, контролирующая львиную долю европейского рынка компьютеров, электроники и финансов. Настолько могущественна, что в прошлом устраивала вооружённую блокаду целых городов с применением наёмной авиации и бронетехники для защиты своих патентов."
    },
    {
      id: "corp-trauma",
      name: "Trauma Team",
      origName: "Trauma Team International",
      category: "Биотехнологии и фармацевтика",
      book: "CP20",
      hq: "Сиэтл, Вашингтон, США",
      employees: "95 000 медиков, пилотов и техников",
      soldiers: "32 000 тяжело вооружённых бортовых стрелков-Соло",
      operatives: "1 500 инспекторов безопасности",
      shareholders: "Карисса Саймон (22%), медицинские страховые синдикаты Северной Америки (45%)",
      desc: "Главная служба вооружённой экстренной медицинской эвакуации в мире киберпанка. Бригады Trauma Team на бронированных летающих машинах AV-4 прибывают по сигналу биомонитора клиента в любую точку Боевой Зоны за 3–7 минут, сметая шквальным огнём любого, кто стоит между ними и оплатившим страховку пациентом."
    },
    {
      id: "corp-orbitalair",
      name: "Orbital Air",
      origName: "Orbital Air",
      category: "Финансы и орбитальные корпорации",
      book: "CP20",
      hq: "Найроби, Кения / Орбитальный комплекс «Хрустальный Дворец»",
      employees: "210 000 на Земле и орбите",
      soldiers: "25 000 бойцов космической и наземной пехоты",
      operatives: "3 000 агентов безопасности",
      shareholders: "Кенийский аэрокосмический консорциум (31%), Европейское космическое агентство (24%)",
      desc: "Монополист коммерческих суборбитальных перелётов и грузоперевозок между Землёй, орбитальными станциями и лунными колониями (космодром Килиманджаро). Имеет собственные элитные подразделения орбитального спецназа."
    },
    {
      id: "corp-network54",
      name: "Network News 54",
      origName: "Network News 54 (NN54)",
      category: "Медиа и связь",
      book: "CP20",
      hq: "Нью-Йорк / Найт-Сити, США",
      employees: "48 000 журналистов, медиа и техников",
      soldiers: "8 500 бойцов охраны телецентров",
      operatives: "4 000 полевых репортёров и информаторов",
      shareholders: "Мишель Дрейфус (36%), медиа-холдинг Global Communications (29%)",
      desc: "Крупнейшая медиа-империя США, контролирующая 62% всех телеканалов, новостных лент и развлекательных шоу. Ударные репортажные группы Network 54 на собственных боевых вертолётах нередко прибывают на место перестрелки раньше полиции, чтобы первыми снять эксклюзивный материал в прямом эфире."
    },
    {
      id: "corp-dms",
      name: "Diverse Media Systems / DMS",
      origName: "Diverse Media Systems (DMS)",
      category: "Медиа и связь",
      book: "CP20",
      hq: "Лос-Анджелес, Калифорния, США",
      employees: "42 000 сотрудников",
      soldiers: "7 000 охранников студий",
      operatives: "3 200 агентов влияния и охотников за талантами",
      shareholders: "Генриетта Кิง (33%), корпорация Sony-Matsushita (21%)",
      desc: "Главный конкурент Network 54 на медиарынке и мировой лидер по производству записей брейнданса (Braindance), музыкальных лейблов и виртуальных развлечений. Известна жёсткими контрактами, превращающими начинающих Рокеров и актёров в собственность корпорации."
    },
    {
      id: "corp-maf",
      name: "Merrill, Asukaga & Finch",
      origName: "Merrill, Asukaga & Finch (MA&F)",
      category: "Финансы и орбитальные корпорации",
      book: "CP20",
      hq: "Нью-Йорк, США / Токио, Япония",
      employees: "64 000 финансистов и аналитиков",
      soldiers: "9 000 элитных телохранителей и охраны хранилищ",
      operatives: "2 500 финансовых детективов и корпоративных ликвидаторов",
      shareholders: "Партнёры совета директоров Уолл-стрит и Токио (72%)",
      desc: "Самая влиятельная инвестиционная, брокерская и консалтинговая корпорация мира. Управляет триллионными активами, организует враждебные поглощения компаний и финансирует теневые операции других мегакорпораций."
    },
    {
      id: "corp-kendachi",
      name: "Kendachi",
      origName: "Kendachi Corporation",
      category: "Промышленность и кибернетика",
      book: "Chr1",
      hq: "Осака, Япония (и орбитальная лаборатория L-5)",
      employees: "28 000 сотрудников",
      soldiers: "4 500 самураев службы безопасности",
      operatives: "900 промышленных шпионов и ниндзя",
      shareholders: "Семья Кендачи (54%), Орбитальный кристаллографический синдикат (22%)",
      desc: "Японский монополист в области выращивания орбитальных монокристаллов в условиях невесомости. Производитель легендарных мономолекулярных клинков (Monokatana, Monoknife, Mono-Two), монокнутов, мононити и разрывных флешетт."
    },
    {
      id: "corp-tsunami",
      name: "Tsunami Arms",
      origName: "Tsunami Defense Systems",
      category: "Безопасность и ВПК",
      book: "PR (Pacific Rim)",
      hq: "Осака / Токио, Япония",
      employees: "9 500 конструкторов и оружейников",
      soldiers: "2 200 бойцов элитной охраны полигонов",
      operatives: "450 полевых испытателей-Соло",
      shareholders: "Закрытый совет ведущих оружейных конструкторов Японии (85%)",
      desc: "Секретное японское конструкторское бюро под девизом «Лучше лучших» (Better than the Best). В отличие от массового конвейера Militech или Arasaka, Tsunami Arms создаёт штучное сверхтехнологичное оружие будущего: прямоточные реактивные винтовки и пистолеты (Ramjet), электротермические дробовики «Ragnarok» и шестиствольные пушки киборгов «Helix»."
    }
  ];

  CORPORATIONS_PACK.forEach(newItem => {
    const exists = extDb.corporations.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase()) ||
      (existing.origName && existing.origName.toLowerCase() === newItem.origName.toLowerCase())
    );
    if (!exists) {
      extDb.corporations.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ СНАРЯЖЕНИЯ В DATABASE.JS (РАЗДЕЛЬНЫЕ КАРТОЧКИ МОДЕЛЕЙ)     снаряжение
// Пакет №1: Инструменты, Медицина, Электроника/Компьютеры, Разведка и Взлом
// ============================================================================
(function appendGearPack1() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.gear)) extDb.gear = [];
  if (!Array.isArray(extCats.gear)) extCats.gear = [];

  const gearCategories = [
    "Инструменты и Ремонт",
    "Медицинское снаряжение",
    "Личная электроника и Компьютеры",
    "Разведка и Взлом (B&E)",
    "Оптика и Наблюдение",
    "Связь и Коммуникации",
    "Безопасность и Защита",
    "Выживание и Маскировка",
    "Препараты и Химия",
    "Музыка, Медиа и Развлечения"
  ];
  gearCategories.forEach(c => {
    if (!extCats.gear.includes(c)) extCats.gear.push(c);
  });

  // Удаляем старые «склеенные» карточки из базового шаблона, чтобы заменить их раздельными моделями
  const combinedLegacyIds = ["g-tech-scanner", "g-buchsterhude", "g-cyber-pcx", "g-decryptors"];
  extDb.gear = extDb.gear.filter(item => item && !combinedLegacyIds.includes(item.id));

  const GEAR_PACK_1 = [
    // =========================================================================
    // 1. ИНСТРУМЕНТЫ И РЕМОНТ (TOOLS & HARDWARE)
    // =========================================================================
    {
      id: "g-tool-techscanner-base",
      name: "Техсканнер (Базовый)",
      origName: "Techscanner (Basic)",
      category: "Инструменты и Ремонт",
      weight: "0.5 кг",
      effect: "-3 СЛ ремонта (при броске ≤ 60%)",
      cost: "600 eb",
      book: "CP20",
      desc: "Портативный диагностический микрокомпьютер с набором щупов, датчиков и разъёмов для подключения к автомобилям, оружию, бытовой электронике и киберимплантам. При успешном диагностическом анализе (вероятность 60%) выявляет точную причину поломки и снижает Сложность (СЛ) последующего броска ремонта на -3."
    },
    {
      id: "g-tool-techscanner-francesca",
      name: "Техсканнер «Francesca» (ИИ-ассистент)",
      origName: "\"Francesca\" Techscanner",
      category: "Инструменты и Ремонт",
      weight: "0.5 кг",
      effect: "+2 к ТЕХ при ремонте (ИНТ 3)",
      cost: "1,200 eb",
      book: "Chr2",
      desc: "Продвинутый диагностический техсканнер со встроенным экспертным микро-ИИ (ИНТ 3) и приятным синтезированным женским голосом с лёгким итальянским акцентом. «Франческа» не просто ищет поломки, но и вслух подсказывает технику порядок разборки, подаёт схемы на экран и даёт прямой бонус +2 к навыкам ТЕХ при диагностике и ремонте."
    },
    {
      id: "g-tool-techscanner-pembroke",
      name: "Техсканнер Pembroke Scanmaster",
      origName: "Pembroke Scanmaster Techscanner",
      category: "Инструменты и Ремонт",
      weight: "0.6 кг",
      effect: "-4 СЛ ремонта (при броске ≤ 75%) / +1 ТЕХ",
      cost: "1,500 eb",
      book: "Chr3",
      desc: "Профессиональный британский мультисистемный анализатор высшего класса от корпорации Pembroke. Оснащён расширенной базой технических чертежей большинства корпоративных образцов техники и кибернетики, повышая шанс успешной автоматической диагностики до 75% и снижая СЛ ремонта на -4."
    },
    {
      id: "g-tool-techkit-basic",
      name: "Набор инструментов Техника (Базовый)",
      origName: "Tech Tool Kit (Basic)",
      category: "Инструменты и Ремонт",
      weight: "2 кг",
      effect: "Позволяет проводить полевой ремонт без штрафа",
      cost: "100 eb",
      book: "CP20",
      desc: "Компактный чемоданчик (10×16 дюймов) со смешанным набором ручных и миниатюрных электрических отвёрток, ключей, паяльника, мультиметра и крепежа. Необходимый минимум для проверок Базовых технологий и ремонта в полевых условиях."
    },
    {
      id: "g-tool-electronics-kit",
      name: "Набор для работы с электроникой",
      origName: "Electronics Toolkit",
      category: "Инструменты и Ремонт",
      weight: "1 кг",
      effect: "Необходим для тонкого ремонта микросхем и кибердек",
      cost: "100 eb",
      book: "CP20",
      desc: "Специализированный кейс для электронщиков и нетраннеров: микропаяльная станция, логический пробник, антистатический браслет, вакуумный экстрактор чипов, пинцеты и тестер оптических волокон."
    },
    {
      id: "g-tool-buchsterhude-std",
      name: "Набор инструментов Buchsterhude GmbH (Стандартный)",
      origName: "Buchsterhude GmbH Standard Tool Kit",
      category: "Инструменты и Ремонт",
      weight: "2 кг",
      effect: "+1 к навыкам ТЕХ",
      cost: "1,000 eb",
      book: "Chr3",
      desc: "Высокоточный немецкий набор инструментов из ванадиево-титанового сплава с лазерной калибровкой от концерна Buchsterhude GmbH. Идеальная эргономика и встроенные сервоприводы дают технику постоянный бонус +1 ко всем проверкам ремонта и сборки."
    },
    {
      id: "g-tool-buchsterhude-pro",
      name: "Мастерский/Делюкс набор инструментов Buchsterhude GmbH",
      origName: "Buchsterhude GmbH Master/Deluxe Tool Kit",
      category: "Инструменты и Ремонт",
      weight: "3 кг",
      effect: "+1 к ТЕХ и +1 к Репутации среди Техников",
      cost: "1,500 eb",
      book: "Chr3",
      desc: "Элитный представительский кейс инструментов ручной доводки Buchsterhude GmbH в ударопрочном карбоновом кофре с биометрическим замком. Даёт +1 к проверкам ТЕХ, а само обладание этим набором вызывает уважение у любого механика (+1 к Репутации и Гардеробу/Стилю в профессиональной среде)."
    },
    {
      id: "g-tool-btorch",
      name: "Мини-резак (Газоплазменная горелка)",
      origName: "Mini-Torch (B-Torch)",
      category: "Инструменты и Ремонт",
      weight: "0.5 кг",
      effect: "Прожигает металл (2d6 урона в ход, игнор 1/2 брони)",
      cost: "40 eb",
      book: "CP20",
      desc: "Одноразовый или перезаправляемый высокотемпературный химико-кислородный резак размером с баллончик лака для волос. Способен перерезать дверные петли, замки, арматуру и стальные листы. Заряда хватает на 10 минут непрерывного горения."
    },
    {
      id: "g-tool-thermite-lance",
      name: "Термитное копьё",
      origName: "Thermite Lance",
      category: "Инструменты и Ремонт",
      weight: "1.5 кг",
      effect: "Прожигает 15 ОС бронированной стали за 1 ход (6d6 урона)",
      cost: "150 eb",
      book: "Chr2",
      desc: "Магниево-термитная трубка одноразового действия для экстренного вскрытия банковских сейфов, гермодверей, замков и бронекорпусов. Развивает температуру свыше 3000°C и работает даже под водой. Горит в течение 4 боевых раундов."
    },
    {
      id: "g-tool-fusion-torch",
      name: "Плазменный резак кочевников",
      origName: "Fusion Torch",
      category: "Инструменты и Ремонт",
      weight: "4 кг",
      effect: "4d10 урона по конструкциям в упор (луч 0.5 м)",
      cost: "350 eb",
      book: "NeoTribes",
      desc: "Тяжёлый промышленный электроплазменный сварочный аппарат и резак с ранцевым аккумулятором (хватает на 20 минут работы). Используется кочевниками для разделки бронетехники и быстрой приварки бронелистов."
    },
    {
      id: "g-tool-weaponsmith-kit",
      name: "Полевой набор оружейника",
      origName: "Field Weaponsmith Kit",
      category: "Инструменты и Ремонт",
      weight: "2.5 кг",
      effect: "+1 к навыку Оружейник (Weaponsmith)",
      cost: "250 eb",
      book: "SOF / SOF2",
      desc: "Специализированный набор инструментов для чистки, пристрелки, расточки стволов и ремонта стрелкового оружия: включает лазерный коллиматор холодной пристрелки, выколотки, динамометрические ключи, калибры, запасные пружины и синтетическую оружейную смазку."
    },
    {
      id: "g-tool-superglue",
      name: "Промышленный цианоакрилат «Суперклей»",
      origName: "Industrial Superglue Spray",
      category: "Инструменты и Ремонт",
      weight: "0.2 кг",
      effect: "Схватывание за 1 раунд (проверка ТЕЛА СЛ 20 для отрыва)",
      cost: "15 eb",
      book: "Chr2",
      desc: "Аэрозольный баллон со сверхпрочным двухкомпонентным полимерным клеем мгновенного отверждения. Используется техниками для экстренной фиксации деталей, а диверсантами — для блокировки дверных замков, клавиш терминалов и приклеивания предметов."
    },

    // =========================================================================
    // 2. МЕДИЦИНСКОЕ СНАРЯЖЕНИЕ (MEDICAL GEAR)
    // =========================================================================
    {
      id: "g-med-firstaid",
      name: "Аптечка первой помощи",
      origName: "First Aid Kit",
      category: "Медицинское снаряжение",
      weight: "0.5 кг",
      effect: "Необходима для навыка Первая помощь без штрафа",
      cost: "10 eb",
      book: "CP20",
      desc: "Стандартная бытовая или автомобильная аптечка: стерильные бинты, антисептические салфетки, кровоостанавливающий жгут, пластыри, ножницы и базовые обезболивающие таблетки."
    },
    {
      id: "g-med-medkit",
      name: "Сумка парамедика / Хирургический набор Медтехника",
      origName: "Medtech Bag / Surgical Kit",
      category: "Медицинское снаряжение",
      weight: "2 кг",
      effect: "+2 к Первой помощи / Позволяет проводить полевую хирургию",
      cost: "50 eb",
      book: "CP20",
      desc: "Полноценная укладка полевого врача и риппердока: скальпели, зажимы, лазерный коагулятор сосудов, хирургический степлер, расширители ран, комплекты для переливания плазмы и местная анестезия. Без этого набора проверки Медтехники получают штраф от -2 до -4."
    },
    {
      id: "g-med-medscanner",
      name: "Медсканнер (Базовый)",
      origName: "Medscanner",
      category: "Медицинское снаряжение",
      weight: "0.5 кг",
      effect: "+2 к Первой помощи и Диагностике болезней",
      cost: "300 eb",
      book: "CP20",
      desc: "Ручной медицинский сканер с выносным контактным зондом и датчиками пульса, артериального давления, температуры, дыхания и биоэлектрической активности мозга. Выводит полную картину травм и токсинов на ЖК-дисплей, давая бонус +2 к проверкам Первой помощи и Диагностики."
    },
    {
      id: "g-med-traumascanner",
      name: "Голосовой медсканнер «Dr. Bob»",
      origName: "\"Dr. Bob\" Automated Medscanner",
      category: "Медицинское снаряжение",
      weight: "1 кг",
      effect: "Встроенный навык Первая помощь +6 и Диагностика +4",
      cost: "950 eb",
      book: "Chr2",
      desc: "Автоматизированный диагностический комплекс для наёмников, у которых в команде нет собственного Медтехника. Оснащён успокаивающим голосовым синтезатором и пошагово выводит на экран инструкции, куда именно наложить жгут или вколоть стимулятор (позволяет любому пользователю применять базу навыка Первая помощь на уровне 6)."
    },
    {
      id: "g-med-airhypo",
      name: "Пневмоинъектор «Аэйрогипо»",
      origName: "Airhypo",
      category: "Медицинское снаряжение",
      weight: "0.1 кг",
      effect: "Мгновенное введение 1 дозы препарата сквозь одежду (до 4 ОС)",
      cost: "100 eb",
      book: "CP20",
      desc: "Безыгольный медицинский шприц-пистолет («Вуш-пушка»), впрыскивающий жидкий препарат под давлением сжатого воздуха тончайшей струёй прямо сквозь кожу и лёгкую одежду (пробивает до 4 ОС мягкой ткани). Перезаряжается сменными ампулами-картриджами."
    },
    {
      id: "g-med-dermal-stapler",
      name: "Кожный степлер",
      origName: "Dermal Stapler",
      category: "Медицинское снаряжение",
      weight: "0.2 кг",
      effect: "Мгновенно закрывает кровоточащую рану (+1 к стабилизации)",
      cost: "1,000 eb",
      book: "CP20",
      desc: "Автоматический медицинский пистолет-степлер, стягивающий края рваных и пулевых ранений саморассасывающимися биополимерными скобами с одновременной обработкой антисептиком. Позволяет стабилизировать тяжелораненого пациента за 1 действие."
    },
    {
      id: "g-med-spray-skin",
      name: "Кожный спрей",
      origName: "Spray Skin",
      category: "Медицинское снаряжение",
      weight: "0.2 кг",
      effect: "Стерильно герметизирует раны и ожоги (10 применений)",
      cost: "50 eb",
      book: "CP20",
      desc: "Аэрозольный баллончик с дышащим эластичным пластико-гелем, обогащённым антибиотиками. Распыляется прямо поверх ссадин, порезов и ожогов, мгновенно останавливая капиллярное кровотечение и заменяя бинты. Одного баллона хватает на 10 использований."
    },
    {
      id: "g-med-slappatch",
      name: "Трансдермальный пластырь",
      origName: "Slap Patch",
      category: "Медицинское снаряжение",
      weight: "0.01 кг",
      effect: "Безопасное введение 1 дозы лекарства через кожу",
      cost: "5 eb (без цены препарата)",
      book: "CP20",
      desc: "Липкий медицинский пластырь с микропорами и растворителем ДМСО, который клеится на шею или предплечье и мгновенно доставляет заправленный в него препарат (стимулятор, антидот или обезболивающее) в кровоток."
    },
    {
      id: "g-med-cryobag",
      name: "Криомешок",
      origName: "Cryobag",
      category: "Медицинское снаряжение",
      weight: "2.5 кг",
      effect: "Удерживает раненого в стазисе до 6 часов (Спасбросок от Смерти +4)",
      cost: "2,000 eb",
      book: "CP20",
      desc: "Одноразовый теплоизолированный спасательный мешок в человеческий рост со встроенным химико-фреоновым охладителем и кардиостимулятором. За считанные секунды погружает умирающего в гипотермический анабиоз, останавливая потерю крови и давая время довезти его до операционной или криокамеры."
    },
    {
      id: "g-med-cryotank",
      name: "Стационарная Криокамера",
      origName: "Cryotank",
      category: "Медицинское снаряжение",
      weight: "200 кг",
      effect: "Полный медицинский стазис и жизнеобеспечение на неограниченный срок",
      cost: "100,000 eb",
      book: "CP20",
      desc: "Полноразмерная госпитальная холодильная капсула с системой искусственного кровообращения, оксигенации и компьютерного мониторинга. Способна поддерживать жизнь пациента в состоянии клинической смерти сколь угодно долго. Требует навыка «Работа с криокамерой» (Cryotank Operation)."
    },
    {
      id: "g-med-home-hospital",
      name: "Автоматическая койка жизнеобеспечения LifeSaver «Home Hospital»",
      origName: "LifeSaver \"Home Hospital\" Bed",
      category: "Медицинское снаряжение",
      weight: "85 кг",
      effect: "Удваивает скорость лечения (1.5–2 ед. в день), Спасброски +2",
      cost: "7,500 eb",
      book: "Chr2",
      desc: "Роскошная закрытая медицинская капсула-кровать для подпольных клиник и квартир богатых Соло. Автоматически вводит физраствор, антибиотики и обезболивающие, фильтрует кровь и круглосуточно следит за пульсом пациента."
    },

    // =========================================================================
    // 3. ЛИЧНАЯ ЭЛЕКТРОНИКА И КОМПЬЮТЕРЫ (PERSONAL ELECTRONICS & COMPUTERS)
    // =========================================================================
    {
      id: "g-elec-ebm-pcx",
      name: "Миникомпьютер EBM «PCX» (Базовый ноутбук)",
      origName: "EBM \"PCX\" Minicomp",
      category: "Личная электроника и Компьютеры",
      weight: "1 кг",
      effect: "Память 25 ЕП (MU), ИНТ 2, слот на 4 чипа",
      cost: "900 eb",
      book: "Chr1",
      desc: "Классический защищённый портативный ноутбук от мегакорпорации Euro Business Machines. Оснащён откидным плоским цветным экраном, собственной базой данных (ИНТ 2), 25 единицами памяти (ЕП) и 4 слотами под чипы. Не предназначен для прямого погружения в Сеть (нетраннинга), но идеален для работы с базами данных, программирования и запуска прикладного софта (+1 к Поиску информации при наличии баз)."
    },
    {
      id: "g-elec-ebm-cyberpcx",
      name: "Миникомпьютер EBM «Cyber-PCX» (С нейроинтерфейсом)",
      origName: "EBM \"Cyber-PCX\" Minicomp",
      category: "Личная электроника и Компьютеры",
      weight: "1 кг",
      effect: "25 ЕП, ИНТ 2, прямое подключение через разъёмы интерфейса (+1 ИНТ/ТЕХ)",
      cost: "1,200 eb",
      book: "Chr1",
      desc: "Модификация ноутбука EBM PCX со встроенным кибернетическим интерфейсным кабелем. Позволяет владельцу с разъёмами интерфейса (Interface Plugs) управлять компьютером и вводить текст со скоростью мысли без использования клавиатуры, давая бонус +1 к проверкам Программирования и системного анализа."
    },
    {
      id: "g-elec-pocket-comp",
      name: "Карманный компьютер",
      origName: "Pocket Computer",
      category: "Личная электроника и Компьютеры",
      weight: "0.2 кг",
      effect: "Память 5 ЕП, калькулятор, блокнот и записная книжка",
      cost: "100 eb",
      book: "CP20",
      desc: "Простой программируемый карманный КПК размером с бумажник с монохромным экраном, буквенно-цифровой клавиатурой и 1 слотом для чтения инфо-чипов. Незаменимая вещь для Фиксеров и Корпоратов."
    },
    {
      id: "g-elec-dataterm-port",
      name: "Переносной терминал DataTerm™",
      origName: "Portable DataTerm Unit",
      category: "Личная электроника и Компьютеры",
      weight: "3 кг",
      effect: "Беспроводной доступ к городской сети DataTerm из любой точки",
      cost: "800 eb",
      book: "Chr1",
      desc: "Мобильная версия уличного информационного терминала DataTerm в прочном пластиковом кейсе со встроенным сотовым модемом, экраном и термопринтером для распечатки карт, сводок новостей и биржевых котировок."
    },
    {
      id: "g-elec-chipreader",
      name: "Карманный считыватель чипов",
      origName: "Pocket Chip Reader",
      category: "Личная электроника и Компьютеры",
      weight: "0.15 кг",
      effect: "Позволяет читать любые чипы памяти без гнезда чипов в голове",
      cost: "150 eb",
      book: "Chr1",
      desc: "Устройство размером с пачку сигарет с небольшим ЖК-экраном и аудиовыходом для наушников. Позволяет просматривать содержимое информационных чипов (MRAM/APTR), не рискуя подхватить вредоносный вирус или Чёрный Лёд через прямое подключение в собственный нейропроцессор!"
    },
    {
      id: "g-elec-credchip-std",
      name: "Кредчип (Стандартный)",
      origName: "Standard Credchip",
      category: "Личная электроника и Компьютеры",
      weight: "0.02 кг",
      effect: "Хранение и бесконтактная оплата в евробаксах (защита по отпечатку/ПИН)",
      cost: "10 eb (или бесплатно при открытии счёта)",
      book: "CP20",
      desc: "Стандартный платёжный чип-карта со встроенным микродисплеем остатка баланса и контактной площадкой для сканирования отпечатка большого пальца владельца. Используется для всех легальных расчётов в 2020 году."
    },
    {
      id: "g-elec-digital-recorder",
      name: "Цифровой аудио-диктофон",
      origName: "Digital Audio Recorder",
      category: "Личная электроника и Компьютеры",
      weight: "0.1 кг",
      effect: "Запись до 4 часов звука на сменный микро-чип",
      cost: "300 eb",
      book: "CP20",
      desc: "Миниатюрный твердотельный диктофон размером с зажигалку. Записывает кристально чистый звук на стандартные чипы памяти и имеет функцию голосовой активации."
    },
    {
      id: "g-elec-vidcam-pocket",
      name: "Карманная цифровая видеокамера",
      origName: "Pocket Digital Vidcam",
      category: "Личная электроника и Компьютеры",
      weight: "0.4 кг",
      effect: "Запись до 2 часов видео и звука высокой чёткости на чип",
      cost: "800 eb",
      book: "CP20",
      desc: "Плоская цифровая камкордер-камера с 4-кратным оптическим зумом и автофокусом. Рабочий инструмент журналистов-Медиа, частных детективов и шантажистов."
    },
    {
      id: "g-elec-braindance-player",
      name: "Портативный плеер брейнданса",
      origName: "Portable Braindance Feeder / Player",
      category: "Личная электроника и Компьютеры",
      weight: "0.5 кг",
      effect: "Воспроизведение чипов брейнданса через электроды или разъёмы",
      cost: "1,000 eb",
      book: "CP20",
      desc: "Персональная дека воспроизведения записей брейнданса (BD) с комплектом накладных височных электродов (тродов) для людей без киберразъёмов. Позволяет переживать записанные эмоции, воспоминания и ощущения других людей."
    },

    // =========================================================================
    // 4. РАЗВЕДКА И ВЗЛОМ (B&E / SURVEILLANCE & SECURITY INTRUSION)
    // =========================================================================
    {
      id: "g-bne-lockpick-set",
      name: "Набор механических отмычек",
      origName: "Mechanical Lockpick Set",
      category: "Разведка и Взлом (B&E)",
      weight: "0.2 кг",
      effect: "Необходим для вскрытия механических замков (Взлом замков без штрафа)",
      cost: "20 eb",
      book: "CP20",
      desc: "Кожаный чехол с набором стальных отмычек, натяжителей, экстракторов сломанных ключей и отмычкой-пистолетом для быстрого вскрытия традиционных штифтовых и сувальдных замков."
    },
    {
      id: "g-bne-cardlock-decryptor",
      name: "Дешифратор магнитных и чиповых замков",
      origName: "Cardlock Decryptor",
      category: "Разведка и Взлом (B&E)",
      weight: "0.4 кг",
      effect: "+5 к базовому ТЕХ при взломе карточных и кодовых замков",
      cost: "500 eb",
      book: "CP20",
      desc: "Специальный хакерский прибор с плоским зондом-эмулятором карты, который вставляется в щель электронного дверного замка (Cardlock). Перебирает коды доступа и прибавляет +5 к сумме (ИНТ или ТЕХ + Электронная безопасность + 1d10) против Сложности замка."
    },
    {
      id: "g-bne-vocdecryptor",
      name: "Дешифратор голосовых замков",
      origName: "VocDecryptor",
      category: "Разведка и Взлом (B&E)",
      weight: "0.5 кг",
      effect: "+5 при взломе голосовых биометрических замков (Vocolock)",
      cost: "1,000 eb",
      book: "CP20",
      desc: "Высокотехнологичный акустический синтезатор-анализатор, позволяющий обойти биометрические голосовые замки (Vocolocks). При наличии хотя бы короткой записи голоса владельца модулирует тембр и обертоны, давая бонус +5 к проверке взлома."
    },
    {
      id: "g-bne-keen-decryptor",
      name: "Универсальный взломщик замков Keen «Skeleton Key»",
      origName: "Keen \"Skeleton Key\" Universal Decryptor",
      category: "Разведка и Взлом (B&E)",
      weight: "0.6 кг",
      effect: "+6 к Электронной безопасности против любых карточных и цифровых замков",
      cost: "1,600 eb",
      book: "Chr2",
      desc: "Нелегальный профессиональный дешифратор с собственным криптопроцессором и набором переходников под оптические, магнитные и индукционные считыватели корпоративных дверей."
    },
    {
      id: "g-bne-jammer-transmitter",
      name: "Постановщик радиопомех / Глушилка",
      origName: "Radio / Cellular Jammer",
      category: "Разведка и Взлом (B&E)",
      weight: "1.5 кг",
      effect: "Глушит рации, сотовые и радиодетонаторы в радиусе 300 м (СЛ 20)",
      cost: "500 eb",
      book: "CP20",
      desc: "Портативный широкополосный генератор белого шума в дипломате или подсумке. Блокирует обычную радиосвязь, сотовые телефоны, радиомаячки и дистанционные взрыватели в радиусе до 300 метров (защищённые военные станции с ППРЧ пробивают помехи при проверке Системных знаний СЛ 20)."
    },
    {
      id: "g-bne-bug-detector",
      name: "Детектор «жучков» и скрытых камер",
      origName: "Bug Detector / Analyzer",
      category: "Разведка и Взлом (B&E)",
      weight: "0.3 кг",
      effect: "Обнаруживает радиомикрофоны в радиусе 5 м с вероятностью 80%",
      cost: "200 eb",
      book: "CP20",
      desc: "Сканер электромагнитного поля и радиочастот с вибросигналом и светодиодной шкалой приближения. Позволяет быстро проверить комнату, одежду или автомобиль на наличие передающих радиомаячков и прослушивающих устройств."
    },
    {
      id: "g-bne-microbug",
      name: "Микро-радиожучок",
      origName: "Micro-Bug / Tracking Button",
      category: "Разведка и Взлом (B&E)",
      weight: "0.01 кг",
      effect: "Дальность передачи звука или сигнала слежения — до 1 км (7 суток)",
      cost: "50 eb",
      book: "CP20",
      desc: "Крошечный подслушивающий передатчик или радиомаячок слежения размером со спичечную головку на липкой основе. Приёмник сигнала с наушником входит в стоимость комплекта."
    },
    {
      id: "g-bne-line-tap",
      name: "Устройство перехвата проводных линий",
      origName: "Data / Phone Line Tap",
      category: "Разведка и Взлом (B&E)",
      weight: "0.3 кг",
      effect: "Бесконтактное считывание трафика с телефонного или сетевого кабеля",
      cost: "200 eb",
      book: "CP20",
      desc: "Индукционная клипса-перехватчик, которая защёлкивается поверх изоляции телефонного или оптоволоконного кабеля без его разрезания (не вызывает срабатывания датчиков обрыва линии) и транслирует перехваченные переговоры на ресивер."
    },
    {
      id: "g-bne-shotgun-mic",
      name: "Направленный параболический микрофон",
      origName: "Directional / Shotgun Microphone",
      category: "Разведка и Взлом (B&E)",
      weight: "1 кг",
      effect: "Позволяет слушать шёпот на дистанции до 100 м (сквозь окна — до 30 м)",
      cost: "300 eb",
      book: "Chr1",
      desc: "Узконаправленный микрофон с лазерным считывателем вибраций оконных стёкол и фильтрацией уличного шума. Позволяет подслушивать разговоры внутри здания с крыши соседнего дома."
    },
    {
      id: "g-bne-fibercam",
      name: "Оптоволоконный зонд-эндоскоп «Змеиный глаз»",
      origName: "Fiberoptic \"Snake\" Camera",
      category: "Разведка и Взлом (B&E)",
      weight: "0.5 кг",
      effect: "Позволяет заглянуть под дверь или за угол без риска попасть под огонь",
      cost: "200 eb",
      book: "PAC",
      desc: "Гибкий полутораметровый управляемый оптоволоконный кабель диаметром 4 мм с ИК-подсветкой и выводом картинки на наручный экран или в смарт-очки. Незаменим для осмотра комнаты через замочную скважину или щель под дверью перед штурмом."
    },
    {
      id: "g-bne-grapnel-gun",
      name: "Пневматический гарпун-кошка с лебёдкой",
      origName: "Compressed Air Grapnel Launcher & Winch",
      category: "Разведка и Взлом (B&E)",
      weight: "2 кг",
      effect: "Выстреливает трос на 40 м, лебёдка поднимает до 150 кг (10 м/раунд)",
      cost: "250 eb",
      book: "Chr1",
      desc: "Пистолет на сжатом газе со складной титановой кошкой (или магнитным захватом), катушкой из 40 метров кевларового шнура (выдерживает до 300 кг) и встроенным электромотором для быстрого подъёма на крыши зданий."
    },
    {
      id: "g-bne-stripwire-binder",
      name: "Полимерные наручники-стяжки",
      origName: "Stripwire Binders / Plasti-Cuffs",
      category: "Разведка и Взлом (B&E)",
      weight: "0.05 кг",
      effect: "Прочность на разрыв — проверка ТЕЛА СЛ 25 (СЛ 30 для армированных)",
      cost: "5 eb (упаковка 10 шт.)",
      book: "PAC",
      desc: "Одноразовые полицейские и наёмнические стяжки из армированного кевларом пластика. Невозможно разорвать обычными человеческими руками без режущего инструмента или киберконечностей."
    },

    // =========================================================================
    // 5. ОПТИКА, НАБЛЮДЕНИЕ И СВЯЗЬ (OPTICS & COMMUNICATIONS)
    // =========================================================================
    {
      id: "g-opt-goggles-smart",
      name: "Умные очки",
      origName: "Smartgoggles",
      category: "Оптика и Наблюдение",
      weight: "0.3 кг",
      effect: "Смартлинк (+2 к стрельбе) + 3 слота под оптические опции без потери ПЧ!",
      cost: "200 eb (база без опций)",
      book: "CP20",
      desc: "Внешние защитные очки-визор с проекционным дисплеем для тех, кто не хочет вырезать себе живые глаза ради кибероптики. Позволяют установить интерфейс «умного оружия» (Smartgun Link) и до 3 любых опций кибероптики (ИК, LowLite, телеоптика, защита от ослепления) по обычной цене и без малейшей потери Человечности (ПЧ 0)!"
    },
    {
      id: "g-opt-binocs-std",
      name: "Бинокль",
      origName: "Binoculars",
      category: "Оптика и Наблюдение",
      weight: "0.5 кг",
      effect: "Увеличение 8× (+2 к Внимательности на большой дистанции)",
      cost: "20 eb",
      book: "CP20",
      desc: "Простой ударопрочный оптический бинокль в обрезиненном корпусе с восьмикратным приближением."
    },
    {
      id: "g-opt-binocs-electro",
      name: "Цифровой бинокль с дальномером и ИК",
      origName: "Electro-Binoculars (Rangefinder / IR / LowLite)",
      category: "Оптика и Наблюдение",
      weight: "0.8 кг",
      effect: "Зум до 20×, ночное видение LowLite, ИК-режим, лазерный дальномер и фотокамера",
      cost: "350 eb",
      book: "Chr1",
      desc: "Многофункциональный военный бинокль со стабилизацией изображения, встроенным режимом усиления света (LowLite), тепловизионным каналом, цифровым компасом, лазерным дальномером (точность до 0.5 м на 2 км) и слотом для записи снимков на чип."
    },
    {
      id: "g-opt-light-glasses",
      name: "Очки ночного видения",
      origName: "Light Amplification Goggles (Starlight)",
      category: "Оптика и Наблюдение",
      weight: "0.6 кг",
      effect: "Убирают штрафы за темноту при наличии хотя бы света звёзд",
      cost: "250 eb",
      book: "CP20",
      desc: "Классический прибор ночного видения на оголовье, многократно усиливающий слабый отражённый свет луны, звёзд или далёких неоновых вывесок. Без установленной защиты от вспышек (Anti-Dazzle) владельца можно ослепить светошумовой гранатой или лучом фонаря."
    },
    {
      id: "g-opt-ir-goggles",
      name: "Инфракрасные / Тепловизионные очки",
      origName: "Infrared (IR) Goggles",
      category: "Оптика и Наблюдение",
      weight: "0.6 кг",
      effect: "Видят тепловые силуэты в полной темноте и сквозь обычный дым",
      cost: "250 eb",
      book: "CP20",
      desc: "Внешние очки, улавливающие инфракрасное (тепловое) излучение живых существ, работающих двигателей и недавно стрелявшего оружия даже в кромешной тьме."
    },
    {
      id: "g-comm-mastoid-comm",
      name: "Субвокальная рация",
      origName: "Mastoid Commo Transceiver",
      category: "Связь и Коммуникации",
      weight: "0.05 кг",
      effect: "Скрытая радиосвязь по костной проводимости на дальность до 5 км",
      cost: "100 eb",
      book: "CP20",
      desc: "Крошечный приёмопередатчик телесного цвета, который приклеивается медицинским клеем на кожу за ухом (на сосцевидный отросток черепа) и на гортань. Передаёт звук прямо во внутреннее ухо через вибрацию кости и считывает беззвучный шёпот со связок — позволяет общаться с командой в полной тишине."
    },
    {
      id: "g-comm-pocket-comm",
      name: "Тактическая портативная рация",
      origName: "Pocket Commo",
      category: "Связь и Коммуникации",
      weight: "0.3 кг",
      effect: "Многоканальная УКВ-связь на дальность до 16 км (10 миль)",
      cost: "50 eb",
      book: "CP20",
      desc: "Компактная армейская и уличная рация с гарнитурой. За дополнительные 100 eb оснащается модулем цифрового скремблирования речи (СЛ перехвата 20)."
    },
    {
      id: "g-comm-cellphone",
      name: "Сотовый телефон",
      origName: "Cellular Phone",
      category: "Связь и Коммуникации",
      weight: "0.2 кг",
      effect: "Городская и междугородняя связь в зоне покрытия сотовых вышек",
      cost: "400 eb (+100 eb/мес тариф)",
      book: "CP20",
      desc: "Компактный складной сотовый телефон в ударопрочном корпусе. Работает везде, где есть покрытие городских ретрансляторов."
    },
    {
      id: "g-comm-mini-cell",
      name: "Мини сотовый телефон",
      origName: "Mini-Cell Phone",
      category: "Связь и Коммуникации",
      weight: "0.05 кг",
      effect: "Сотовый телефон размером с зажигалку или пудреницу (СКР: Карман)",
      cost: "800 eb",
      book: "Chr1",
      desc: "Миниатюрный телефон премиум-класса с беспроводным микро-наушником и голосовым набором номера."
    }
  ];

  GEAR_PACK_1.forEach(newItem => {
    const exists = extDb.gear.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase())
    );
    if (!exists) {
      extDb.gear.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ СНАРЯЖЕНИЯ В DATABASE.JS (РАЗДЕЛЬНЫЕ КАРТОЧКИ МОДЕЛЕЙ)
// Пакет №2: Выживание, Безопасность, Химия/Препараты и Медиа/Музыка
// ============================================================================
(function appendGearPack2() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.gear)) extDb.gear = [];
  if (!Array.isArray(extCats.gear)) extCats.gear = [];

  const extraGearCategories = [
    "Выживание и Маскировка",
    "Безопасность и Защита",
    "Препараты и Химия",
    "Музыка, Медиа и Развлечения"
  ];
  extraGearCategories.forEach(c => {
    if (!extCats.gear.includes(c)) extCats.gear.push(c);
  });

  const GEAR_PACK_2 = [
    // =========================================================================
    // 1. ВЫЖИВАНИЕ И МАСКИРОВКА (SURVIVAL & CAMOUFLAGE)
    // =========================================================================
    {
      id: "g-surv-tent-1",
      name: "Лёгкая штормовая палатка",
      origName: "Light Tactical Tent",
      category: "Выживание и Маскировка",
      weight: "2 кг",
      effect: "Защита от дождя и ветра для 2 человек",
      cost: "75 eb",
      book: "CP20",
      desc: "Компактная двухместная палатка из углеродного волокна и мембранной ткани с самораскладывающимся каркасом. Сворачивается до размеров туристического спальника."
    },
    {
      id: "g-surv-survival-pack",
      name: "Полевой ранец выживания",
      origName: "Wilderness Survival Pack",
      category: "Выживание и Маскировка",
      weight: "5 кг",
      effect: "Включает пайки, фильтр для воды, котелок и аварийный запас на 3 дня",
      cost: "150 eb",
      book: "CP20",
      desc: "Укомплектованный армейский рюкзак для автономного выживания в Пустошах или радиоактивной зоне. Содержит химические грелки, таблетки для обеззараживания воды, компактный фильтр обратного осмоса и суточный рацион питания."
    },
    {
      id: "g-surv-water-filter",
      name: "Портативный фильтр для воды",
      origName: "Personal Water Purifier Straw",
      category: "Выживание и Маскировка",
      weight: "0.2 кг",
      effect: "Очищает до 1000 литров грязной воды от бактерий и химикатов",
      cost: "35 eb",
      book: "CP20",
      desc: "Многоступенчатая угольно-мембранная трубка-фильтр. Позволяет безопасно пить воду из луж, лунных кратеров или рек Найт-Сити."
    },
    {
      id: "g-surv-chem-light",
      name: "Химический свет / ХИС",
      origName: "Chemical Light Stick",
      category: "Выживание и Маскировка",
      weight: "0.05 кг",
      effect: "Мягкое освещение зоны в течение 8 часов (упаковка из 5 шт.)",
      cost: "10 eb",
      book: "CP20",
      desc: "Одноразовые герметичные пластиковые палочки, дающие яркое свечение при сгибании (доступны зелёный, красный, синий и инфракрасный спектры)."
    },
    {
      id: "g-surv-flare-gun",
      name: "Сигнальный пистолет",
      origName: "Signal Flare Gun",
      category: "Выживание и Маскировка",
      weight: "0.6 кг",
      effect: "Освещение территории или вызов помощи на дистанции до 300 м",
      cost: "45 eb",
      book: "CP20",
      desc: "Пистолет со сменными фальшфейерами и сигнальными ракетами красного и белого цвета (в комплекте 5 ракет)."
    },
    {
      id: "g-surv-camo-paint",
      name: "Маскировочный грим и краска для лица",
      origName: "Camouflage Face Paint Kit",
      category: "Выживание и Маскировка",
      weight: "0.1 кг",
      effect: "+2 к Скрытности (Stealth) в лесу или руинах",
      cost: "15 eb",
      book: "CP20",
      desc: "Набор матовых тюбиков с несмываемой армейской краской для разбивания контуров лица и маскировки под окружение."
    },
    {
      id: "g-surv-ghillie",
      name: "Маскировочный костюм «Гилли»",
      origName: "Ghillie Suit / Sniper Camo",
      category: "Выживание и Маскировка",
      weight: "2.5 кг",
      effect: "+3 к Скрытности при засаде в укрытии или растительности",
      cost: "120 eb",
      book: "SOF / SOF2",
      desc: "Накидка с лоскутами мешковины и синтетической листвы для снайперов и разведки."
    },
    {
      id: "g-surv-rad-badge",
      name: "Индикатор радиации / Счётчик Гейгера",
      origName: "Geiger Counter / Rad Badge",
      category: "Выживание и Маскировка",
      weight: "0.2 кг",
      effect: "Определяет уровень радиационного заражения местности",
      cost: "150 eb",
      book: "CP20",
      desc: "Карманный измеритель ионизирующего излучения со звуковой трещоткой и ЖК-шкалой в бэкерелях."
    },
    {
      id: "g-surv-gasmask-mil",
      name: "Армейский противогаз",
      origName: "Military NBC Gas Mask",
      category: "Выживание и Маскировка",
      weight: "0.8 кг",
      effect: "+15 к сопротивлению ядовитым газам и слезоточивым аэрозолям",
      cost: "75 eb",
      book: "CP20",
      desc: "Полнолицевой респиратор с панорамным стеклом и сменными угольно-химическими фильтрами (NBC-фильтр)."
    },

    // =========================================================================
    // 2. БЕЗОПАСНОСТЬ И ЗАЩИТА (SECURITY & PERSONAL PROTECTION)
    // =========================================================================
    {
      id: "g-sec-biomonitor",
      name: "Биомонитор",
      origName: "Biomonitor (Wrist / Implant)",
      category: "Безопасность и Защита",
      weight: "0.1 кг",
      effect: "Контроль пульса и ранений / Автоматический маяк для Trauma Team",
      cost: "100 eb",
      book: "CP20",
      desc: "Наручный браслет или подкожный чип, постоянно отслеживающий жизненные показатели организма. При критическом ранении или остановке сердца автоматически транслирует зашифрованный сигнал бедствия в страховую компанию (например, Trauma Team)."
    },
    {
      id: "g-sec-handcuffs-steel",
      name: "Стальные наручники",
      origName: "Standard Steel Handcuffs",
      category: "Безопасность и Защита",
      weight: "0.3 кг",
      effect: "Фиксация рук за спиной (прочность на разрыв: проверка ТЕЛА СЛ 25)",
      cost: "25 eb",
      book: "CP20",
      desc: "Классические никелированные стальные браслеты с двойным замком от самовскрытия. В комплекте 2 ключа."
    },
    {
      id: "g-sec-keypad-safe",
      name: "Электронный сейф с кодовым замком",
      origName: "Electronic Keypad Wall Safe",
      category: "Безопасность и Защита",
      weight: "15 кг",
      effect: "ОС 25, ОСТ 50 для сейфа (защита ценностей дома)",
      cost: "400 eb",
      book: "CP20",
      desc: "Компактный несгораемый сейф для монтажа в стену или пол. Оснащен цифровой клавиатурой и блокировкой при трёх неверных вводах кода."
    },
    {
      id: "g-sec-door-reinforce",
      name: "Комплект усиления двери",
      origName: "Heavy Door Reinforcement Kit",
      category: "Безопасность и Защита",
      weight: "10 кг",
      effect: "+15 к Сложности взлома или выбивания двери",
      cost: "150 eb",
      book: "CP20",
      desc: "Стальные накладные пластины на косяки, ригели повышенной прочности и бронированная накладка на замок."
    },
    {
      id: "g-sec-motion-detector",
      name: "Датчик движения",
      origName: "Perimeter Motion Detector",
      category: "Безопасность и Защита",
      weight: "0.5 кг",
      effect: "Контроль зоны до 20 м (звуковой сигнал при появлении чужих)",
      cost: "250 eb",
      book: "CP20",
      desc: "Инфракрасный или радиоволновой датчик движения для охраны периметра квартиры или убежища."
    },
    {
      id: "g-sec-smoke-grenade-trap",
      name: "Ловушка растяжка",
      origName: "Tripwire Alarm / Trap Rigging",
      category: "Безопасность и Защита",
      weight: "0.4 кг",
      effect: "Срабатывает при задевании растяжки (сигнализация или срыв гранаты)",
      cost: "50 eb",
      book: "CP20",
      desc: "Универсальная пружинная чека с катушкой тонкой стальной лески (до 10 метров) для установки растяжек на дверях и оконных проемах."
    },

    // =========================================================================
    // 3. ПРЕПАРАТЫ, УЛИЧНАЯ ХИМИЯ И НАРКОТИКИ (DRUGS & CHEMICALS)
    // =========================================================================
    {
      id: "g-drug-speedheal",
      name: "Медикамент «Speedheal» (Спидхил)",
      origName: "Speedheal™ Medical Stimulant",
      category: "Препараты и Химия",
      weight: "0.05 кг",
      effect: "Ускоряет естественное лечение ран в 3 раза на 24 часа",
      cost: "150 eb",
      book: "CP20",
      desc: "Элитный госпитальный гормональный препарат на основе синтетических эндорфинов и регенеративных пептидов. Позволяет организму восстанавливать по 2–3 пункта ОСТ в сутки вместо обычного отдыха."
    },
    {
      id: "g-drug-synthcoke",
      name: "Синт-кок",
      origName: "Synth-Coke (Street Drug)",
      category: "Препараты и Химия",
      weight: "0.01 кг",
      effect: "+1 РЕФ, +1 КРУТ на 2 часа (потом штраф -2)",
      cost: "50 eb / доза",
      book: "CP20",
      desc: "Популярный уличный стимулятор. Даёт прилив энергии и уверенности, но по окончании действия вызывает синдром отмены и усталость."
    },
    {
      id: "g-drug-black-lotus",
      name: "Наркотик «Чёрный Лотус»",
      origName: "Black Lotus",
      category: "Препараты и Химия",
      weight: "0.01 кг",
      effect: "+2 ИНТ, ускорение реакций в Сети для нетраннеров на 1 час",
      cost: "300 eb / доза",
      book: "CP20",
      desc: "Элитный дизайнерский наркотик из корпоративных лабораторий. Любимое топливо элитных нетраннеров для глубокого погружения в ICANN-сети."
    },
    {
      id: "g-drug-stim-pack",
      name: "Боевой стимулятор «Баттл-Стим»",
      origName: "BattleStim Combat Stim",
      category: "Препараты и Химия",
      weight: "0.05 кг",
      effect: "Игнорирует любые штрафы от ранений и шока на 30 минут",
      cost: "100 eb",
      book: "CP20",
      desc: "Мощный коктейль из адреналина, норадреналина и эндогенных блокаторов боли. Позволяет бойцу с тяжёлыми ранениями продолжать бой, однако по окончании действия наступает тяжёлый нокаут."
    },
    {
      id: "g-drug-anti-toxin",
      name: "Универсальный антидот",
      origName: "Universal Antidote / Toxin Binder",
      category: "Препараты и Химия",
      weight: "0.05 кг",
      effect: "+10 к спасброску против любых ядов и токсинов при введении в течение 1 мин",
      cost: "80 eb",
      book: "CP20",
      desc: "Инъекционный нейтрализатор широкого спектра действия, связывающий токсины и яды в крови."
    },
    {
      id: "g-drug-synth-blood",
      name: "Пакет искусственной крови",
      origName: "Synth-Blood Volume Expander",
      category: "Препараты и Химия",
      weight: "0.5 кг",
      effect: "Восстанавливает нормальное давление при сильной кровопотере",
      cost: "50 eb",
      book: "CP20",
      desc: "Пакет универсальной кровезаменяющей жидкости, спасающий раненого от геморрагического шока."
    },

    // =========================================================================
    // 4. МУЗЫКА, МЕДИА И РАЗВЛЕЧЕНИЯ (MUSIC, MEDIA & ENTERTAINMENT)
    // =========================================================================
    {
      id: "g-ent-synthesizer",
      name: "Портативный цифровой синтезатор",
      origName: "Portable Digital Synthesizer",
      category: "Музыка, Медиа и Развлечения",
      weight: "3 кг",
      effect: "Инструмент для Рокербоев и музыкантов (встроенные стили и секвенсор)",
      cost: "400 eb",
      book: "CP20",
      desc: "Профессиональная музыкальная станция со складной клавиатурой, пэдами и автоаккомпанементом. Любимый инструмент уличных музыкантов."
    },
    {
      id: "g-ent-holo-projector",
      name: "Карманный голографический проектор",
      origName: "Pocket Holographic Projector",
      category: "Музыка, Медиа и Развлечения",
      weight: "0.4 кг",
      effect: "Проекция 3D-голограмм и схем в воздухе (диаметр до 3 м)",
      cost: "500 eb",
      book: "Chr1",
      desc: "Устройство для демонстрации презентаций, схем взлома или рекламных аватаров в виде объёмной голограммы."
    },
    {
      id: "g-ent-smoke-machine",
      name: "Мини-генератор сценического дыма",
      origName: "Portable Stage Fogger",
      category: "Музыка, Медиа и Развлечения",
      weight: "2.5 кг",
      effect: "Создает плотное дымовое шоу или тактическую дымовуху (на 20 мин)",
      cost: "120 eb",
      book: "Chr2",
      desc: "Генератор безопасного глицеринового дыма для концертов Рокербоев или организации прикрытия в перестрелке."
    },
    {
      id: "g-ent-deck-cards",
      name: "Колода кибер-карт / Таро",
      origName: "Cyber-Deck Playing Cards",
      category: "Музыка, Медиа и Развлечения",
      weight: "0.1 кг",
      effect: "Интерактивные голографические карты для покера или гадания",
      cost: "25 eb",
      book: "CP20",
      desc: "Колода карт со встроенными микрочипами: при сдаче карты проецируют миниатюрные голографические значки и автоматически ведут подсчёт очков."
    }
  ];

  GEAR_PACK_2.forEach(newItem => {
    const exists = extDb.gear.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase())
    );
    if (!exists) {
      extDb.gear.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ СНАРЯЖЕНИЯ В DATABASE.JS (РАЗДЕЛЬНЫЕ КАРТОЧКИ МОДЕЛЕЙ)
// Пакет №3: Оружейные обвесы, Полевое снаряжение, Спецсредства и Медпрепараты
// ============================================================================
(function appendGearPack3() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.gear)) extDb.gear = [];
  if (!Array.isArray(extCats.gear)) extCats.gear = [];

  const pack3Categories = [
    "Оружейные аксессуары и Прицелы",
    "Инструменты и Ремонт",
    "Медицинское снаряжение",
    "Личная электроника и Компьютеры",
    "Разведка и Взлом (B&E)",
    "Оптика и Наблюдение",
    "Связь и Коммуникации",
    "Безопасность и Защита",
    "Выживание и Маскировка",
    "Препараты и Химия",
    "Музыка, Медиа и Развлечения"
  ];
  pack3Categories.forEach(c => {
    if (!extCats.gear.includes(c)) extCats.gear.push(c);
  });

  const GEAR_PACK_3 = [
    // =========================================================================
    // 1. ОРУЖЕЙНЫЕ АКСЕССУАРЫ И ПРИЦЕЛЫ (WEAPON ACCESSORIES & SIGHTS)
    // =========================================================================
    {
      id: "g-wacc-lasersight",
      name: "Лазерный целеуказатель",
      origName: "Laser Sight",
      category: "Оружейные аксессуары и Прицелы",
      weight: "0.1 кг",
      effect: "+1 к ТО оружия (видимый красный луч)",
      cost: "100 eb",
      book: "CP20",
      desc: "Компактный диодный лазерный прицел, устанавливаемый под ствол или на ствольную коробку любого стрелкового оружия. Проецирует яркую красную точку на цель, повышая Точность оружия (ТО) на +1. В дыму, тумане или пыли луч может выдать позицию стрелка."
    },
    {
      id: "g-wacc-uv-lasersight",
      name: "Ультрафиолетовый лазерный прицел",
      origName: "UV Laser Sight",
      category: "Оружейные аксессуары и Прицелы",
      weight: "0.1 кг",
      effect: "+1 к ТО оружия (луч виден только с УФ-оптикой)",
      cost: "150 eb",
      book: "Chr1",
      desc: "Тактический лазерный целеуказатель, работающий в невидимом для человеческого глаза ультрафиолетовом спектре. Даёт бонус +1 к ТО стрелку с кибероптикой или очками с УФ-фильтром, не демаскируя его позицию перед обычными противниками."
    },
    {
      id: "g-wacc-sniperscope",
      name: "Оптический снайперский прицел",
      origName: "Sniperscope",
      category: "Оружейные аксессуары и Прицелы",
      weight: "0.6 кг",
      effect: "+2 к стрельбе на Дальней и Экстремальной дистанции (при прицеливании)",
      cost: "150 eb",
      book: "CP20",
      desc: "Телескопический винтовочный прицел переменной кратности с баллистической сеткой. При затрате минимум 1 раунда на прицеливание даёт дополнительный бонус +2 к попаданию на дальней и экстремальной дистанции. Имеет 2 внутренних слота для установки оптических опций (например, LowLite или Термооптики)."
    },
    {
      id: "g-wacc-zeiss-nikon-cot",
      name: "Компьютеризированный прицел Zeiss-Nikon",
      origName: "Zeiss-Nikon Computerized Optical Telesight",
      category: "Оружейные аксессуары и Прицелы",
      weight: "1 кг",
      effect: "+1 ТО на всех дистанциях и +1 за каждый раунд прицеливания (до +3)",
      cost: "3,900 eb",
      book: "Chr1",
      desc: "Вершина снайперской оптики от консорциума Zeiss-Nikon. Объединяет лазерный дальномер, датчик бокового ветра, термометр, усиление света LowLite и баллистический вычислитель, автоматически смещающий прицельную марку с учётом упреждения."
    },
    {
      id: "g-wacc-silencer",
      name: "Глушитель / Саундмодератор",
      origName: "Silencer / Sound Suppressor",
      category: "Оружейные аксессуары и Прицелы",
      weight: "0.3 кг",
      effect: "Гасит звук выстрела и вспышку (-1 к ТО, СЛ обнаружения на слух 20–25)",
      cost: "100 eb",
      book: "CP20",
      desc: "Многокамерный надульный глушитель для пистолетов, ПП и штурмовых винтовок. Снижает точность оружия на -1 и ухудшает скрытность на одну категорию, но гасит дульное пламя и снижает грохот выстрела до тихого хлопка (при использовании дозвуковых патронов проверка Внимательности СЛ 25)."
    },
    {
      id: "g-wacc-smartgun-mod",
      name: "Комплект модификации «Умного оружия»",
      origName: "Smartgun Modification Kit",
      category: "Оружейные аксессуары и Прицелы",
      weight: "0.2 кг",
      effect: "Превращает обычное оружие в Smartgun (+2 к ТО при подключении)",
      cost: "2× цена базового оружия",
      book: "CP20",
      desc: "Набор оптоволоконных датчиков, сервоприводов спуска и микропроцессорного блока с кабелем (или радиомодулем) для подключения к нейроразъёмам стрелка или очкам Smartgoggles. Даёт бонус +2 к Точности оружия."
    },
    {
      id: "g-wacc-gyromount",
      name: "Гиростабилизирующий штатив для тяжёлого оружия",
      origName: "Gyro-Stabilized Weapon Mount",
      category: "Оружейные аксессуары и Прицелы",
      weight: "3.5 кг",
      effect: "Убирает штраф за стрельбу на ходу и снижает ТЕЛО Мин оружия на -2",
      cost: "350 eb",
      book: "CP20",
      desc: "Поясной и нагрудный экзо-корсет с шарнирной механической рукой («стедикамом») и гироскопами для удержания пулемётов, автопушек и тяжёлых винтовок. Компенсирует вес и отдачу оружия при стрельбе от бедра."
    },
    {
      id: "g-wacc-bipod",
      name: "Складные сошки",
      origName: "Folding Bipod",
      category: "Оружейные аксессуары и Прицелы",
      weight: "0.4 кг",
      effect: "+1 к ТО на Средней/Дальней дистанции при стрельбе с упора или лёжа",
      cost: "50 eb",
      book: "BSW",
      desc: "Лёгкие титано-композитные сошки для винтовок и ручных пулемётов. Установка или складывание занимает 1 действие; при стрельбе с твёрдой опоры устраняют раскачивание ствола и снижают требования к отдаче."
    },
    {
      id: "g-wacc-speedholster",
      name: "Скоростная кобура",
      origName: "Speedholster",
      category: "Оружейные аксессуары и Прицелы",
      weight: "0.2 кг",
      effect: "+1 к Инициативе в раунде быстрого выхватывания пистолета",
      cost: "100 eb",
      book: "CP20",
      desc: "Открытая спортивно-боевая кобура из низкофрикционного тефлонового полимера с магнитным фиксатором под конкретную модель пистолета. Позволяет мгновенно выхватить оружие одним движением (+1 к броску Инициативы при внезапном начале боя), но снижает скрытность пистолета на 1 ступень."
    },
    {
      id: "g-wacc-hidden-holster",
      name: "Кобура скрытого ношения",
      origName: "Hidden / Concealment Holster",
      origName: "Hidden Holster",
      category: "Оружейные аксессуары и Прицелы",
      weight: "0.15 кг",
      effect: "+2 к Скрытности оружия при обыске (штраф -1 к Инициативе выхватывания)",
      cost: "65 eb",
      book: "PAC",
      desc: "Анатомическая подмышечная, поясная или лодыжечная кобура из мягкой синтетической замши, плотно прижимающая пистолет к телу и маскирующая его очертания под одеждой."
    },
    {
      id: "g-wacc-cyberlock",
      name: "Биометрический блокиратор оружия",
      origName: "Biometric Weapon Security Lock",
      category: "Оружейные аксессуары и Прицелы",
      weight: "0.05 кг",
      effect: "Блокирует спуск (или бьёт током 1d6), если оружие взял чужак",
      cost: "150 eb",
      book: "Chr1",
      desc: "Датчик отпечатков ладони или кодового сигнала со смартлинка, встраиваемый в пистолетную рукоять. Если оружие попытается выстрелить человек, не внесённый в память (до 4 владельцев), боёк блокируется, а в ладонь угонщика может подаваться электрошоковый разряд."
    },

    // =========================================================================
    // 2. РАЗВЕДКА, ВЗЛОМ И СПЕЦСРЕДСТВА (B&E / SURVEILLANCE)
    // =========================================================================
    {
      id: "g-bne-scrambler",
      name: "Крипто-скремблер связи",
      origName: "Communications Scrambler",
      category: "Разведка и Взлом (B&E)",
      weight: "0.2 кг",
      effect: "Шифрует переговоры по рации или телефону (СЛ дешифровки 20–25)",
      cost: "500 eb",
      book: "CP20",
      desc: "Цифровой модуль шифрования речевого и модемного трафика, подключаемый к любой рации, сотовому телефону или кибердеке. Без парного ключа-дешифратора перехватчик услышит в эфире лишь цифровой визг."
    },
    {
      id: "g-bne-code-det",
      name: "Термографический считыватель кнопочной панели",
      origName: "Thermographic Keypad Reader",
      category: "Разведка и Взлом (B&E)",
      weight: "0.2 кг",
      effect: "+4 к взлому кнопочных кодовых панелей в течение 15 минут после ввода",
      cost: "350 eb",
      book: "Chr2",
      desc: "Микро-тепловизор с ультрафиолетовым анализатором жировых следов пальцев. Наводится на цифровую панель замка и по остаточному теплу клавиш определяет, какие именно цифры и в каком порядке нажимал последний вошедший сотрудник."
    },
    {
      id: "g-bne-fingerprint-spoof",
      name: "Набор для копирования отпечатков пальцев",
      origName: "Fingerprint Spoofing Kit",
      category: "Разведка и Взлом (B&E)",
      weight: "0.4 кг",
      effect: "Создание латексных накладок с чужими отпечатками (Подделка СЛ 20)",
      cost: "450 eb",
      book: "Chr2",
      desc: "Лабораторный мини-набор шпиона: ультрафиолетовый порошок, лазерный сканер папиллярного узора и мини-вулканизатор жидкого био-силикона. Позволяет снять отпечаток пальца с бокала или дверной ручки и за 10 минут отлить тончайшую перчатку-накладку для обхода биометрических сканеров."
    },
    {
      id: "g-bne-glass-cutter",
      name: "Бесшумный вакуумный стеклорез",
      origName: "Silent Vacuum Glass Cutter",
      category: "Разведка и Взлом (B&E)",
      weight: "0.3 кг",
      effect: "Бесшумное вырезание отверстий в окнах без осыпания осколков",
      cost: "60 eb",
      book: "CP20",
      desc: "Мощная вакуумная присоска с циркульным карбидно-алмазным резцом и звукопоглощающим гелем. Позволяет вырезать ровный круг в витрине или окне и аккуратно вынуть стекло наружу, не вызвав срабатывания акустических датчиков разбития стекла."
    },
    {
      id: "g-bne-chaff-disp",
      name: "Аэрозоль для обнаружения лазерных лучей сигнализации",
      origName: "IR / Laser Beam Detection Spray",
      category: "Разведка и Взлом (B&E)",
      weight: "0.15 кг",
      effect: "Делает видимыми ИК-лучи охранных систем в радиусе 3 м (10 пшиков)",
      cost: "25 eb",
      book: "Chr2",
      desc: "Баллончик со специальной взвесью микрочастиц, не оседающей в воздухе и не перекрывающей сам луч (в отличие от сигаретного дыма, который может вызвать тревогу). Подсвечивает невидимые инфракрасные лазерные сетки в коридорах."
    },
    {
      id: "g-bne-tracking-scanner",
      name: "Пеленгатор радиомаячков",
      origName: "Homing Tracer Receiver",
      category: "Разведка и Взлом (B&E)",
      weight: "0.3 кг",
      effect: "Отслеживает направление и дистанцию до маячка в радиусе 5 км",
      cost: "200 eb",
      book: "CP20",
      desc: "Карманный приёмник с круговым радарным экраном и цифровой настройкой частоты. Позволяет вести скрытое преследование помеченного радиожучком автомобиля или человека через плотный городской трафик."
    },

    // =========================================================================
    // 3. ВЫЖИВАНИЕ, ПОЛЕВОЕ И КОЧЕВОЕ СНАРЯЖЕНИЕ (SURVIVAL & NOMAD GEAR)
    // =========================================================================
    {
      id: "g-surv-sleeping-bag",
      name: "Термоспальник",
      origName: "All-Weather Sleeping Bag",
      category: "Выживание и Маскировка",
      weight: "1 кг",
      effect: "Комфортный сон при температуре от -30°C до +40°C",
      cost: "25 eb",
      book: "CP20",
      desc: "Сверхлёгкий спальный мешок из металлизированного синтетического волокна с влагозащитным верхом, сжимающийся в компрессионном мешке до размеров литровой фляги."
    },
    {
      id: "g-surv-heated-suit",
      name: "Термокостюм с электроподогревом",
      origName: "Electrically Heated Thermal Suit",
      category: "Выживание и Маскировка",
      weight: "1.5 кг",
      effect: "Полная защита от экстремального холода до -60°C (заряд на 24 ч)",
      cost: "200 eb",
      book: "Corp3",
      desc: "Утеплённый поддоспешник или верхний комбинезон полярников «СовНефти» и высокогорных кочевников с вплетёнными углеродными нагревательными нитями и термостатом."
    },
    {
      id: "g-surv-rebreather",
      name: "Компактный акваланг замкнутого цикла",
      origName: "Mini-Rebreather / Gill Pack",
      category: "Выживание и Маскировка",
      weight: "1 кг",
      effect: "До 60 минут дыхания под водой или в бескислородной среде без пузырей",
      cost: "180 eb",
      book: "Chr3",
      desc: "Нагрудный или поясной химический регенератор дыхательной смеси с загубником и маской. Поглощает выдыхаемый углекислый газ и выделяет чистый кислород, не выпуская демаскирующих пузырьков воздуха на поверхность воды."
    },
    {
      id: "g-surv-rope-nylon",
      name: "Альпинистский кевларовый трос",
      origName: "Braided Kevlar Climbing Rope (50m)",
      category: "Выживание и Маскировка",
      weight: "1.5 кг",
      effect: "Бухта 50 метров, выдерживает нагрузку до 1200 кг",
      cost: "30 eb",
      book: "CP20",
      desc: "Тонкий (6 мм), но невероятно прочный и огнестойкий трос в чёрной оплётке с парой титановых карабинов."
    },
    {
      id: "g-surv-ration-pack",
      name: "Армейский сухой паёк",
      origName: "Self-Heating MRE Ration Pack",
      category: "Выживание и Маскировка",
      weight: "0.4 кг",
      effect: "Полноценный калорийный обед на 1 сутки (срок хранения 10 лет)",
      cost: "10 eb",
      book: "HotB",
      desc: "Герметичный фольгированный пакет с порцией синтетического мяса, злаковым батончиком, витаминным напитком и беспламенным химическим нагревателем (достаточно потянуть за чеку, и через 3 минуты еда становится горячей)."
    },
    {
      id: "g-surv-flashlight-heavy",
      name: "Ударопрочный галогеновый фонарь",
      origName: "Heavy-Duty Halogen Flashlight",
      category: "Выживание и Маскировка",
      weight: "0.5 кг",
      effect: "Луч света на 60 метров (может использоваться как дубинка 1d6)",
      cost: "20 eb",
      book: "CP20",
      desc: "Классический длинный полицейский фонарь в корпусе из авиационного алюминия с фокусируемой линзой. В экстренной ситуации отлично служит в качестве кастета или дубинки."
    },
    {
      id: "g-surv-glow-flare",
      name: "Осветительная парашютная ракета",
      origName: "Parachute Illumination Flare",
      category: "Выживание и Маскировка",
      weight: "0.2 кг",
      effect: "Освещает радиус 100 м как днём в течение 5 раундов (сбивает ПНВ)",
      cost: "15 eb",
      book: "HotB",
      desc: "Ручная реактивная ракета в алюминиевом тубусе: взмывает на высоту 80 метров и плавно опускается на мини-парашюте, заливая поле боя ослепительным магниевым светом и временно засвечивая незащищённые приборы ночного видения."
    },

    // =========================================================================
    // 4. БЕЗОПАСНОСТЬ, ЗАЩИТА И АНТИШПИОНАЖ (SECURITY & COUNTERMEASURES)
    // =========================================================================
    {
      id: "g-sec-briefcase-armored",
      name: "Бронированный дипломат атташе",
      origName: "Armored Executive Attache Case",
      category: "Безопасность и Защита",
      weight: "2.5 кг",
      effect: "ОС 20 (может служить щитом), биометрический замок СЛ 25 и сирена",
      cost: "450 eb",
      book: "Chr1",
      desc: "Представительский кейс из кевлара и бронестали для перевозки секретных чипов, наличных евробаксов и образцов корпоративных разработок. Включает замок по отпечатку пальца, датчик взлома с пиропатроном для уничтожения документов (по желанию) и выдвижной стальной тросик для пристёгивания к запястью."
    },
    {
      id: "g-sec-white-noise",
      name: "Генератор акустического «белого шума»",
      origName: "Acoustic White Noise Generator",
      category: "Безопасность и Защита",
      weight: "0.4 кг",
      effect: "Защита разговора от лазерных и направленных микрофонов в радиусе 4 м",
      cost: "350 eb",
      book: "Chr1",
      desc: "Небольшая шайба, которая ставится на стол переговоров или крепится к оконному стеклу. Создаёт неслышимую для человека ультразвуковую и вибрационную помеху, делающую невозможной запись разговора на диктофоны, радиожучки и лазерные микрофоны."
    },
    {
      id: "g-sec-sniff-detector",
      name: "Газоанализатор взрывчатки и токсинов",
      origName: "Chemical / Explosives Sniffer",
      category: "Безопасность и Защита",
      weight: "0.6 кг",
      effect: "Обнаруживает пары пластита, пороха, ядов и наркотиков (85% точность)",
      cost: "650 eb",
      book: "PAC",
      desc: "Портативный спектрометр («Электронный нос»), втягивающий воздух через щуп и за 1 раунд определяющий наличие молекул взрывчатых веществ (C-6, HDX), боевых газов или наркотиков в багаже, посылке или за закрытой дверью."
    },
    {
      id: "g-sec-weapon-scanner",
      name: "Ручной сканер кибероснащения и оружия",
      origName: "Handheld Weapon & Cyberware Scanner",
      category: "Безопасность и Защита",
      weight: "0.4 кг",
      effect: "Находит металл, керамику высокой плотности и энергоячейки (до 1 м)",
      cost: "250 eb",
      book: "PAC",
      desc: "Штатный досмотровый сканер вышибал ночных клубов и корпоративной охраны на входе. Реагирует не только на сталь, но и на плотную оружейную керамику и аккумуляторы электровоспламенения."
    },
    {
      id: "g-sec-personal-alarm",
      name: "Персональная сирена-маяк «Паник-кнопка»",
      origName: "Personal Panic Alarm & Strobe",
      category: "Безопасность и Защита",
      weight: "0.05 кг",
      effect: "Звуковой удар 130 дБ + стробоскоп + вызов полиции NCPD",
      cost: "35 eb",
      book: "PAC",
      desc: "Брелок самообороны для гражданских жителей корпоративных пригородов. При выдёргивании чеки включает оглушающую сирену, яркие вспышки и передаёт GPS-координаты владельца на ближайший полицейский канал."
    },

    // =========================================================================
    // 5. МЕДИЦИНСКИЕ И БОЕВЫЕ ПРЕПАРАТЫ (PHARMACEUTICALS & STREET DRUGS)
    // =========================================================================
    {
      id: "g-drug-staminol",
      name: "Препарат выносливости «Staminol»",
      origName: "Staminol Endurance Booster",
      category: "Препараты и Химия",
      weight: "0.02 кг",
      effect: "+2 к проверкам Выносливости и Атлетики, снимает усталость на 6 часов",
      cost: "40 eb / доза",
      book: "CP20",
      desc: "Легальный армейский и спортивный метаболический стимулятор, насыщающий ткани кислородом и расщепляющий молочную кислоту в мышцах. Позволяет совершать многокилометровые марш-броски без сна."
    },
    {
      id: "g-drug-endorphine",
      name: "Анальгетик-блокатор боли «Endorphin»",
      origName: "Endorphin Pain Suppressor",
      category: "Препараты и Химия",
      weight: "0.02 кг",
      effect: "+3 к Спасброскам от Шока (Stun) и уменьшение штрафа от ранений на 1d6 часов",
      cost: "75 eb / доза",
      book: "CP20",
      desc: "Чистый синтетический эндорфин для аптечек парамедиков и Соло. Отключает болевые рецепторы при тяжёлых переломах и ожогах, не вызывая помутнения сознания."
    },
    {
      id: "g-drug-blue-glass",
      name: "Галлюциноген «Синее стекло»",
      origName: "Blue Glass",
      category: "Препараты и Химия",
      weight: "0.01 кг",
      effect: "Приступ эйфории и синестезии: цель видит цветные миражи (-3 РЕФ и ИНТ)",
      cost: "100 eb / доза",
      book: "CP20",
      desc: "Опасный нейротоксичный галлюциноген, кристаллизующийся в виде синей пыли. Нередко применяется диверсантами в качестве боевого аэрозоля или контактного яда для дезориентации охраны: жертва застывает на месте, любуясь переливами света."
    },
    {
      id: "g-drug-boost",
      name: "Ноотропный ускоритель мозга «Boost»",
      origName: "Boost™ Intelligence Enhancer",
      category: "Препараты и Химия",
      weight: "0.02 кг",
      effect: "+1 к ИНТ на 1d6 часов (высокий риск привыкания и выгорания синапсов)",
      cost: "100 eb / доза",
      book: "CP20",
      desc: "Мощный нейростимулятор, разгоняющий скорость мышления и анализа данных. Популярен среди корпоративных аналитиков, техников и нетраннеров перед сложными взломами."
    },
    {
      id: "g-drug-dorph",
      name: "Уличный боевой наркотик «Дорф»",
      origName: "'Dorph (Street Endorphin)",
      category: "Препараты и Химия",
      weight: "0.02 кг",
      effect: "Игнорирует боль (+2 к Спасброскам Шока), но снижает КРУТ и ЭМП на -1d6",
      cost: "25 eb / доза",
      book: "CP20",
      desc: "Грязный подпольный аналог медицинских эндорфинов, популярный среди банд бустеров (отсюда жаргонное словечко «дорфхед»). Вызывает неконтролируемую агрессию и потерю эмпатии на время действия."
    },
    {
      id: "g-drug-black-lace",
      name: "Боевой психостимулятор «Чёрное кружево»",
      origName: "Black Lace",
      category: "Препараты и Химия",
      weight: "0.02 кг",
      effect: "+2 КРУТ, полный иммунитет к Шоку/Боли, но временная потеря 2d6 Человечности!",
      cost: "650 eb / доза",
      book: "CP20",
      desc: "Экстремальный боевой наркотик, разработанный для превращения штурмовиков в безжалостных берсерков. Даёт абсолютную нечувствительность к боли и страху, но на время действия сдвигает психику бойца прямо к грани киберпсихоза."
    },
    {
      id: "g-drug-slumber",
      name: "Контактное снотворное «Slumber» (с растворителем ДМСО)",
      origName: "Slumber Knockout Drug (DMSO)",
      category: "Препараты и Химия",
      weight: "0.05 кг",
      effect: "Мгновенный сон на 1d6 часов при проверке ТЕЛА меньше СЛ 20",
      cost: "50 eb / доза",
      book: "CP20",
      desc: "Быстродействующий усыпляющий препарат для заправки в дротиковые пистолеты, иглострелы, пейнтбольные шарики или воздушные инъекторы Airhypo. В смеси с диметилсульфоксидом (ДМСО) мгновенно впитывается даже при попадании на открытую кожу."
    },
    {
      id: "g-drug-biotoxin",
      name: "Синтетический нейро-биотоксин",
      origName: "Synthetic Biotoxin / Nerve Poison",
      category: "Препараты и Химия",
      weight: "0.05 кг",
      effect: "Наносит 4d6 (или 8d6 для концентрированного) прямого урона мимо брони!",
      cost: "200 eb / доза",
      book: "CP20",
      desc: "Смертельный синтетический яд для смазывания холодного оружия, стрел, сюрикенов или заправки в иглострелы. При попадании в кровоток жертва обязана пройти Спасбросок от Смерти (при успехе получает половину урона)."
    },

    // =========================================================================
    // 6. МУЗЫКА, МЕДИА И ОБРАЗ ЖИЗНИ (MUSIC, MEDIA & LIFESTYLE GEAR)
    // =========================================================================
    {
      id: "g-ent-electric-guitar",
      name: "Электрогитара с беспроводным усилителем",
      origName: "Electric Guitar & Wireless Amp Pack",
      category: "Музыка, Медиа и Развлечения",
      weight: "3.5 кг",
      effect: "Основной инструмент Рокербоя (+1 к Игре на инструментах для кастомных моделей)",
      cost: "300 eb",
      book: "CP20",
      desc: "Классическая шестиструнная или безголовая карбоновая электрогитара со встроенным цифровым процессором эффектов и радиопередатчиком на поясной или сценический комбик."
    },
    {
      id: "g-ent-pocket-amp",
      name: "Поясной мощный аудио-усилитель и колонка",
      origName: "Belt-Clip Mini-Amp & Speaker",
      category: "Музыка, Медиа и Развлечения",
      weight: "1 кг",
      effect: "Позволяет устроить уличный рок-концерт в любой точке города",
      cost: "100 eb",
      book: "CP20",
      desc: "Компактный аккумуляторный усилитель с неодимовыми динамиками высокой мощности, цепляемый прямо на ремень."
    },
    {
      id: "g-ent-digital-studio",
      name: "Портативная дека звукозаписи и видеомонтажа",
      origName: "Portable Digital Recording & Editing Deck",
      category: "Музыка, Медиа и Развлечения",
      weight: "4 кг",
      effect: "+2 к Сочинению и монтажу репортажей или альбомов в полевых условиях",
      cost: "1,200 eb",
      book: "Chr2",
      desc: "Многодорожечный цифровой пульт в бронированном кейсе для Рокербоев и полевых журналистов-Медиа. Позволяет сводить музыкальные треки, очищать перехваченные аудиозаписи от шумов и монтировать видеосюжеты прямо в фургоне перед отправкой в эфир."
    }
  ];

  GEAR_PACK_3.forEach(newItem => {
    const exists = extDb.gear.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase())
    );
    if (!exists) {
      extDb.gear.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ БОРГИРОВАНИЯ В DATABASE.JS (РАЗДЕЛЬНЫЕ КАРТОЧКИ МОДЕЛЕЙ)
// Пакет №1: Полное боргирование (Full Body Conversions) из Chromebook 2
// ============================================================================
(function appendBorgingPack1() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.borging)) extDb.borging = [];
  if (!Array.isArray(extCats.borging)) extCats.borging = [];

  const borgCategories = [
    "Полное боргирование (Full Body Conversion)",
    "Боевые и штурмовые киборги",
    "Специализированные и рабочие киборги",
    "Частичное боргирование",
    "Экзотическое боргирование (Exotics)"
  ];
  borgCategories.forEach(c => {
    if (!extCats.borging.includes(c)) extCats.borging.push(c);
  });

  const BORGING_PACK_1 = [
    // =========================================================================
    // 1. БАЗОВЫЕ И ГРАЖДАНСКИЕ МОДЕЛИ ПОЛНОГО БОРГИРОВАНИЯ
    // =========================================================================
    {
      id: "borg-iec-alpha",
      name: "Кибертело IEC Alpha Class",
      origName: "IEC Alpha Class Full Body Replacement",
      borgType: "Полное боргирование (Базовое шасси)",
      manufacturer: "IEC",
      hc: "16d6",
      cost: "45,000 eb",
      category: "Полное боргирование (Full Body Conversion)",
      book: "Chr2",
      borgStats: {
        ref: "10", cool: "5", ma: "12", body: "12",
        m_m: "36", m_kmh: "43", jump_up: "3", jump_long: "9",
        lift: "480", throw: "120", dmg_mod: "+4", punch: "1d6+4", kick: "2d6+4"
      },
      borgStructure: {
        head_sp: "20", head_ost: "25", head_opt: "4 слота на глаз", head_aud: "4 слота",
        torso_sp: "20", torso_ost: "35", torso_opt: "Биокапсула, 2 свободных слота",
        rarm_sp: "20", rarm_ost: "20", rarm_opt: "4 слота киберруки",
        larm_sp: "20", larm_ost: "20", larm_opt: "4 слота киберруки",
        rleg_sp: "20", rleg_ost: "25", rleg_opt: "3 слота киберноги",
        lleg_sp: "20", lleg_ost: "25", lleg_opt: "3 слота киберноги"
      },
      cyberwareList: [
        { name: "Биокапсула жизнеобеспечения (Biopod)", desc: "Бронированный контейнер для мозга и ЦНС, позволяющий переносить сознание между разными корпусами." },
        { name: "Базовая сенсорная система", desc: "Стандартная кибероптика (по 4 слота в каждом глазу) и кибераудио (4 слота)." },
        { name: "Нейропроцессор и разъёмы интерфейса", desc: "Встроенный базовый нейропроцессор с интерфейсными коннекторами в запястьях." }
      ],
      desc: "Базовая рабочая лошадка среди полных киборгов от корпорации IEC. Напоминает металлического гуманоида (за доплату может быть покрыт синтетической кожей Realskinn™) и служит универсальной основой как для гражданских лиц, переживших катастрофу, так и для уличных Соло, желающих собрать кастомного боевого киборга под себя."
    },
    {
      id: "borg-dynalar-gemini",
      name: "Полный киборг-двойник человека Dynalar Gemini",
      origName: "Dynalar Technologies \"Gemini\"",
      borgType: "Полное боргирование (Скрытое / Инфильтратор)",
      manufacturer: "Dynalar Technologies",
      hc: "14d6",
      cost: "64,500 eb",
      category: "Полное боргирование (Full Body Conversion)",
      book: "Chr2",
      borgStats: {
        ref: "11", cool: "10 (настраивается)", ma: "10", body: "11",
        m_m: "30", m_kmh: "36", jump_up: "2.5", jump_long: "7.5",
        lift: "440", throw: "110", dmg_mod: "+3", punch: "1d6+3", kick: "2d6+3"
      },
      borgStructure: {
        head_sp: "15", head_ost: "25", head_opt: "По 4 слота", head_aud: "3 слота",
        torso_sp: "15", torso_ost: "35", torso_opt: "Имитация дыхания, сердцебиения и тепла",
        rarm_sp: "15", rarm_ost: "20", rarm_opt: "2 свободных слота",
        larm_sp: "15", larm_ost: "20", larm_opt: "2 свободных слота",
        rleg_sp: "15", rleg_ost: "25", rleg_opt: "2 свободных слота",
        lleg_sp: "15", lleg_ost: "25", lleg_opt: "2 свободных слота"
      },
      cyberwareList: [
        { name: "Покрытие Realskinn™ и терморегуляция", desc: "Полная имитация живой человеческой кожи, температуры тела 36.6°C, потоотделения, пульса и дыхания (СЛ 25 для отличия от живого человека без техсканнера)." },
        { name: "Анатомический скульптуринг", desc: "Позволяет придать киборгу абсолютно любую внешность (ПРВЛ до 10) при сборке шасси." },
        { name: "Сенсорная сеть осязания и вкуса", desc: "Снижает потерю человечности (14d6 вместо 16d6) за счёт сохранения привычных человеческих ощущений." }
      ],
      desc: "Шедевр маскировочной кибернетики от Dynalar Technologies. Создан для богатых клиентов, политиков, медиа-звёзд и корпоративных шпионов, которые не хотят выглядеть как шагающий тостер из хрома. Внешне, на ощупь и даже на инфракрасных сканерах «Джемини» неотличим от обычного человека из плоти и крови."
    },

    // =========================================================================
    // 2. БОЕВЫЕ И ШТУРМОВЫЕ КИБОРГИ (COMBAT & MILITARY CYBORGS)
    // =========================================================================
    {
      id: "borg-iec-dragoon",
      name: "Штурмовой военный киборг IEC Dragoon",
      origName: "IEC \"Dragoon\" Military Cyborg",
      borgType: "Полное боргирование (Тяжёлый штурмовой)",
      manufacturer: "IEC",
      hc: "32d6 (с поведенческим чипом — 16d6)",
      cost: "127,000 eb",
      category: "Боевые и штурмовые киборги",
      book: "Chr2",
      borgStats: {
        ref: "15", cool: "3", ma: "16", body: "18",
        m_m: "48", m_kmh: "58", jump_up: "4.5", jump_long: "14",
        lift: "720", throw: "180", dmg_mod: "+6", punch: "2d6+6", kick: "3d6+6"
      },
      borgStructure: {
        head_sp: "30", head_ost: "35", head_opt: "Прицел, ИК, LowLite, Anti-Dazzle, Times Square", head_aud: "Рация, пеленгатор, защита слуха, усилитель",
        torso_sp: "40", torso_ost: "50", torso_opt: "Накладная динамическая броня, ЭМИ-экранирование",
        rarm_sp: "30", rarm_ost: "30", rarm_opt: "Смартлинк, быстросъёмный оружейный узел",
        larm_sp: "30", larm_ost: "30", larm_opt: "Выдвижной высокочастотный клинок, щит",
        rleg_sp: "30", rleg_ost: "35", rleg_opt: "Гидравлические прыжковые ускорители",
        lleg_sp: "30", lleg_ost: "35", lleg_opt: "Магнитные захваты стоп, стабилизаторы отдачи"
      },
      cyberwareList: [
        { name: "Боевой ускоритель рефлексов Kerenzikov (+2)", desc: "Обеспечивает постоянный бонус +2 к Инициативе при базовом РЕФ 15." },
        { name: "Полное ЭМИ-экранирование (Shielding)", desc: "Защищает все внутренние системы шасси от микроволнового и электромагнитного оружия." },
        { name: "Чип подавления личности и эмоций", desc: "На время боевой операции искусственно блокирует эмоции и привязанности, удерживая киборга от срыва в киберпсихоз, но превращая его в холодную машину убийства." },
        { name: "Система жизнеобеспечения замкнутого цикла", desc: "Запас кислорода и фильтров на 8 часов боя в вакууме, под водой или в зоне химического заражения." }
      ],
      desc: "Вершина военной кибернетики 2020 года и самый смертоносный серийный боевой киборг на планете. Двухметровый бронированный гигант весом свыше 300 кг, способный бежать со скоростью автомобиля, разрывать пехоту голыми руками и вести огонь из станковых пулемётов на бегу. Из-за запредельной потери человечности (32d6) пилоты «Драгуна» вне боя содержатся в спокойных гражданских телах Gemini, а перед высадкой их биокапсулу переставляют в боевое шасси со специальным чипом эмоционального подавления."
    },
    {
      id: "borg-militech-enforcer",
      name: "Полицейский киборг подавления Militech Enforcer",
      origName: "Militech \"Enforcer\" Police Cyborg",
      borgType: "Полное боргирование (Полицейский / C-SWAT)",
      manufacturer: "Militech",
      hc: "18d6",
      cost: "65,000 eb",
      category: "Боевые и штурмовые киборги",
      book: "Chr2",
      borgStats: {
        ref: "12", cool: "4", ma: "12", body: "15",
        m_m: "36", m_kmh: "43", jump_up: "3", jump_long: "9",
        lift: "600", throw: "150", dmg_mod: "+6", punch: "1d6+6", kick: "2d6+6"
      },
      borgStructure: {
        head_sp: "25", head_ost: "30", head_opt: "Прицел, Anti-Dazzle, LowLite, Видеокамера", head_aud: "Полицейская рация, усилитель слуха, демпфер",
        torso_sp: "25", torso_ost: "40", torso_opt: "Сирена, проблесковые маячки, громкоговоритель",
        rarm_sp: "25", rarm_ost: "25", rarm_opt: "Смартлинк, встроенный дробовик 12 кал. (8 патр.)",
        larm_sp: "25", larm_ost: "25", larm_opt: "Встроенный гранатомёт слезоточивого газа и тазер",
        rleg_sp: "25", rleg_ost: "30", rleg_opt: "Кобура под тяжёлое табельное оружие в бедре",
        lleg_sp: "25", lleg_ost: "30", lleg_opt: "Отсек под наручники-стяжки и спецсредства"
      },
      cyberwareList: [
        { name: "Бортовой полицейский видеорегистратор", desc: "Непрерывно записывает все действия киборга для отчётности перед судом и отделом внутренних расследований." },
        { name: "Встроенный комплекс нелетального подавления", desc: "Электрошокер в левой ладони, распылитель слезоточивого газа и ослепляющий стробоскоп на груди." },
        { name: "Штурмовой дробовик в правой руке", desc: "Полуавтоматический дробовик 12-го калибра на 8 патронов (картечь, бронебойные пули или резиновые травматические заряды)." }
      ],
      desc: "Штатный киборг полицейских спецподразделений C-SWAT и отрядов охотников на киберпсихов (Max-Tac / PsychoSquad). Окрашен в чёрно-белые цвета патрульной полиции с синими проблесковыми маячками на наплечниках. В отличие от армейского «Драгуна», спроектирован так, чтобы офицер мог нести постоянную службу в городских условиях и брать опасных преступников живыми."
    },
    {
      id: "borg-arasaka-spyder",
      name: "Разведывательно-диверсионный киборг Arasaka Spyder",
      origName: "Arasaka \"Spyder\" Reconnaissance Cyborg",
      borgType: "Полное боргирование (Стелс и шпионаж)",
      manufacturer: "Arasaka / IEC",
      hc: "19d6",
      cost: "85,200 eb",
      category: "Боевые и штурмовые киборги",
      book: "Chr2",
      borgStats: {
        ref: "13", cool: "3", ma: "14", body: "11",
        m_m: "42", m_kmh: "50", jump_up: "4", jump_long: "12",
        lift: "440", throw: "110", dmg_mod: "+3", punch: "1d6+3", kick: "2d6+3"
      },
      borgStructure: {
        head_sp: "15", head_ost: "25", head_opt: "4 глаза: ИК, УФ, LowLite, зум, микрооптика", head_aud: "Усилитель слуха, направленный микрофон, сканер",
        torso_sp: "18", torso_ost: "35", torso_opt: "Стелс-покрытие PhotoCarbon™ (-4 к обнаружению)",
        rarm_sp: "15", rarm_ost: "20", rarm_opt: "Микро-манипуляторы взлома, моноклинок",
        larm_sp: "15", larm_ost: "20", larm_opt: "Гарпун-лебёдка с мононитью (50 м)",
        rleg_sp: "15", rleg_ost: "25", rleg_opt: "Вакуумно-молекулярные присоски для лазания по стенам",
        lleg_sp: "15", lleg_ost: "25", lleg_opt: "Бесшумные амортизаторы шага (+3 к Скрытности)"
      },
      cyberwareList: [
        { name: "Стелс-обшивка PhotoCarbon™ и термоизоляция", desc: "Поглощает свет, радиоволны и внутреннее тепло корпуса, давая противникам штраф -4 к обнаружению в темноте и через ИК-оптику." },
        { name: "Гекконовые захваты конечностей", desc: "Позволяют киборгу свободно ползать по вертикальным стеклянным стенам небоскрёбов и потолкам со скоростью 10 м за ход." },
        { name: "Многоспектральная головная турель", desc: "Четыре независимых оптических сенсора на лицевой панели, обеспечивающих круговой обзор и съёмку." }
      ],
      desc: "Ночной кошмар корпоративных служб безопасности. Облегчённый поджарый киборг-диверсант угольно-чёрного цвета с четырьмя красными оптическими линзами на лицевой маске, созданный для проникновения на верхние этажи небоскрёбов, похищения данных и бесшумной ликвидации целей."
    },
    {
      id: "borg-rostovic-berserker",
      name: "Штурмовой киборг прорыва Rostović Berserker",
      origName: "Rostovic \"Berserker\" Assault Cyborg",
      borgType: "Полное боргирование (Бюджетный штурмовик)",
      manufacturer: "Rostović",
      hc: "22d6",
      cost: "52,000 eb",
      category: "Боевые и штурмовые киборги",
      book: "Chr2",
      borgStats: {
        ref: "10", cool: "2", ma: "10", body: "15",
        m_m: "30", m_kmh: "36", jump_up: "2", jump_long: "6",
        lift: "600", throw: "150", dmg_mod: "+6", punch: "2d6+6", kick: "3d6+6"
      },
      borgStructure: {
        head_sp: "25", head_ost: "30", head_opt: "Базовая оптика с защитой от вспышек", head_aud: "Базовое аудио с военной рацией",
        torso_sp: "30", torso_ost: "45", torso_opt: "Литая бронесталь, инъектор боевых стимуляторов",
        rarm_sp: "25", rarm_ost: "30", rarm_opt: "Тяжёлый пулемёт 7.62мм или 12.7мм (жесткая сцепка)",
        larm_sp: "25", rarm_ost: "30", larm_opt: "Гидравлическая клешня-таран (3d6+6 ББ)",
        rleg_sp: "25", rleg_ost: "35", rleg_opt: "Утяжелённые приводы повышенной проходимости",
        lleg_sp: "25", lleg_ost: "35", lleg_opt: "Выдвижные грунтозацепы для стрельбы очередями"
      },
      cyberwareList: [
        { name: "Грубая советская/восточноевропейская сборка", desc: "Неприхотливая и дешёвая в ремонте конструкция из литой брони, но шумная и лишённая изящества западных аналогов." },
        { name: "Боевой инъектор адреналина", desc: "При входе в бой заливает биокапсулу стимуляторами (+1 РЕФ на 10 раундов)." }
      ],
      desc: "Топорный, громыхающий и пугающе дешёвый восточноевропейский штурмовой киборг от компании Rostović. Там, где западные корпорации используют дорогую микроэлектронику, Rostović ставит толстую литую сталь и грубую гидравлику. Из-за высокой потери человечности и плохой экранировки нейрошумов пилоты «Берсерка» отличаются крайней нестабильностью психики."
    },

    // =========================================================================
    // 3. СПЕЦИАЛИЗИРОВАННЫЕ, СПАСАТЕЛЬНЫЕ И ПРОМЫШЛЕННЫЕ КИБОРГИ
    // =========================================================================
    {
      id: "borg-iec-samson",
      name: "Тяжёлый промышленно-грузовой киборг IEC Samson",
      origName: "IEC \"Samson\" Heavy Industrial Cyborg",
      borgType: "Полное боргирование (Тяжёлый рабочий)",
      manufacturer: "IEC",
      hc: "16d6",
      cost: "55,000 eb",
      category: "Специализированные и рабочие киборги",
      book: "Chr2",
      borgStats: {
        ref: "8", cool: "4", ma: "8", body: "18",
        m_m: "24", m_kmh: "29", jump_up: "1.5", jump_long: "4",
        lift: "1000", throw: "150", dmg_mod: "+7", punch: "3d6+7 (клешни)", kick: "3d6+7"
      },
      borgStructure: {
        head_sp: "25", head_ost: "30", head_opt: "Защитные шторки, спектр сварки, прожекторы", head_aud: "Защита слуха Level Damper, пром-рация",
        torso_sp: "30", torso_ost: "50", torso_opt: "Каркас безопасности, противовес, лебёдка (2 тонны)",
        rarm_sp: "25", rarm_ost: "35", rarm_opt: "Гидравлическая грузовая клешня (сжатие 4d6+7)",
        larm_sp: "25", larm_ost: "35", larm_opt: "Встроенный плазменный резак и отбойный молоток",
        rleg_sp: "25", rleg_ost: "40", rleg_opt: "Усиленные домкратные опоры",
        lleg_sp: "25", lleg_ost: "40", lleg_opt: "Магнитные подошвы для работы на стальных балках"
      },
      cyberwareList: [
        { name: "Сверхмощная промышленная гидравлика", desc: "Позволяет поднимать грузы весом до 1 тонны (1000 кг) и растаскивать обломки зданий или бронетехники." },
        { name: "Встроенный сварочно-режущий комплекс", desc: "Плазменный резак (4d10 урона в упор) и пневмоинструмент в левом манипуляторе." }
      ],
      desc: "Массивный ярко-жёлтый промышленный киборг-погрузчик, созданный для работы на стройках небоскрёбов, в шахтах, доках и металлургических цехах. Несмотря на низкую скорость и неповоротливость (РЕФ 8), невероятная прочность корпуса (ОС 30) и способность поднять легковой автомобиль делают «Самсона» грозным противником в ближнем бою, особенно в руках банд докеров или кочевников."
    },
    {
      id: "borg-iec-broom",
      name: "Пожарно-спасательный киборг IEC Firefighter (Broom)",
      origName: "IEC \"Firefighter\" / Hazard Rescue Cyborg",
      borgType: "Полное боргирование (Спасательный / РХБЗ)",
      manufacturer: "IEC",
      hc: "17d6",
      cost: "68,000 eb",
      category: "Специализированные и рабочие киборги",
      book: "Chr2",
      borgStats: {
        ref: "10", cool: "5", ma: "10", body: "15",
        m_m: "30", m_kmh: "36", jump_up: "2.5", jump_long: "7",
        lift: "600", throw: "140", dmg_mod: "+6", punch: "2d6+6", kick: "2d6+6"
      },
      borgStructure: {
        head_sp: "25", head_ost: "30", head_opt: "Термооптика, УЗИ-сонар сквозь дым, Anti-Dazzle", head_aud: "Пеленгатор криков под завалами, рация",
        torso_sp: "30", torso_ost: "45", torso_opt: "Термощит (игнор до 30 ед. огня), баллон с О2 для пострадавших",
        rarm_sp: "25", rarm_ost: "30", rarm_opt: "Гидравлические спасательные челюсти «Челюсти жизни» (4d6 ББ)",
        larm_sp: "25", larm_ost: "30", larm_opt: "Пеногенератор пожаротушения и лазерный резак",
        rleg_sp: "25", rleg_ost: "35", rleg_opt: "Кислото- и жаростойкие опоры",
        lleg_sp: "25", lleg_ost: "35", lleg_opt: "Выдвижной трос с лебёдкой (100 м)"
      },
      cyberwareList: [
        { name: "Абляционная термо- и рад-защита", desc: "Корпус выдерживает открытое пламя, кислотные выбросы и жесткую радиацию в эпицентре аварий реакторов." },
        { name: "Спасательный медблок", desc: "Встроенный медсканнер, дефибриллятор и кислородная маска для откачки спасённых гражданских прямо в огне." }
      ],
      desc: "Специализированное шасси городских пожарных департаментов, спасательных служб и команд ликвидации техногенных катастроф. Способен войти в горящий химический завод или разгерметизированный отсек, разжать гидравлической клешнёй искореженный аэродайн и вынести раненых на себе."
    },
    {
      id: "borg-iec-aquarius",
      name: "Глубоководный киборг IEC Aquarius",
      origName: "IEC \"Aquarius\" Sub-Oceanic Cyborg",
      borgType: "Полное боргирование (Подводный / Океанический)",
      manufacturer: "IEC",
      hc: "18d6",
      cost: "72,500 eb",
      category: "Специализированные и рабочие киборги",
      book: "Chr2 / Chr3",
      borgStats: {
        ref: "11", cool: "4", ma: "10 (суша) / 18 (вода)", body: "14",
        m_m: "30 / 54 (вода)", m_kmh: "36 / 65 (в воде)", jump_up: "2", jump_long: "6",
        lift: "560", throw: "120", dmg_mod: "+5", punch: "1d6+5", kick: "2d6+5"
      },
      borgStructure: {
        head_sp: "25", head_ost: "30", head_opt: "LowLite, УФ, прожекторы, эхолот-сонар (500 м)", head_aud: "Гидроакустический пеленгатор и модем",
        torso_sp: "28", torso_ost: "45", torso_opt: "Барокамера глубины до 1500 м, водомётные турбины",
        rarm_sp: "25", rarm_ost: "25", rarm_opt: "Встроенное гарпунное ружьё и подводный резак",
        larm_sp: "25", larm_ost: "25", larm_opt: "Сменные плавниковые стабилизаторы",
        rleg_sp: "25", rleg_ost: "30", rleg_opt: "Поворотные сопла водомётов",
        lleg_sp: "25", lleg_ost: "30", lleg_opt: "Балластные цистерны плавучести"
      },
      cyberwareList: [
        { name: "Глубоководный титановый корпус", desc: "Полная защита от коррозии в солёной воде и колоссального давления океанских глубин (до 1.5 км)." },
        { name: "Водомётный движитель", desc: "Позволяет развивать под водой скорость торпедного катера (до 65 км/ч)." }
      ],
      desc: "Разработан для обслуживания подводных буровых платформ Petrochem и SovOil, океанических ферм и боевых пловцов. Оснащён обтекаемым корпусом с мощными водомётными турбинами и гидролокатором."
    },
    {
      id: "borg-orbital-wingman",
      name: "Космический орбитальный киборг Orbital Air Wingman",
      origName: "Orbital Air \"Wingman\" Zero-G Cyborg",
      borgType: "Полное боргирование (Космический / Невесомость)",
      manufacturer: "Orbital Air / IEC",
      hc: "19d6",
      cost: "92,000 eb",
      category: "Специализированные и рабочие киборги",
      book: "Chr2 / DS",
      borgStats: {
        ref: "12", cool: "4", ma: "8 (Земля) / 20 (маневр. двигатели)", body: "13",
        m_m: "24 (Земля)", m_kmh: "29 (Земля)", jump_up: "2", jump_long: "6",
        lift: "520", throw: "130", dmg_mod: "+5", punch: "1d6+5", kick: "2d6+5"
      },
      borgStructure: {
        head_sp: "20", head_ost: "25", head_opt: "Радар, телеоптика, защита от солнечной вспышки", head_aud: "Космическая лазерная и УКВ-связь",
        torso_sp: "25", torso_ost: "40", torso_opt: "Маневровый реактивный ранец, радиационный щит",
        rarm_sp: "20", rarm_ost: "25", rarm_opt: "Встроенный ремонтный манипулятор и захват",
        larm_sp: "20", larm_ost: "25", larm_opt: "Гироскопический стабилизатор вращения",
        rleg_sp: "20", rleg_ost: "25", rleg_opt: "Вторая пара хватательных кистей вместо стоп!",
        lleg_sp: "20", lleg_ost: "25", lleg_opt: "Вторая пара хватательных кистей и магнитные захваты"
      },
      cyberwareList: [
        { name: "Четырёхрукая компоновка для невесомости", desc: "Нижние конечности заканчиваются полноценными хватательными кистями, позволяя киборгу удерживаться за обшивку станции и работать двумя парами рук одновременно." },
        { name: "Встроенный микродвигательный комплекс", desc: "Позволяет свободно маневрировать в открытом космосе (дает бонус +3 к навыку Zero-G Maneuver)." }
      ],
      desc: "Специализированное шасси для строителей орбитальных станций («Хрустальный Дворец») и абордажных команд космофлота Orbital Air. Защищено золотистой противорадиационной фольгой и оснащено четырьмя всенаправленными конечностями-манипуляторами."
    },
    {
      id: "borg-raven-eclipse",
      name: "Корпоративный киборг-телохранитель Raven Microcybernetics Eclipse",
      origName: "Raven Microcybernetics \"Eclipse\" Executive Bodyguard",
      borgType: "Полное боргирование (Элитный телохранитель)",
      manufacturer: "Raven Microcybernetics",
      hc: "17d6",
      cost: "98,000 eb",
      category: "Боевые и штурмовые киборги",
      book: "Chr2",
      borgStats: {
        ref: "13", cool: "7", ma: "13", body: "13",
        m_m: "39", m_kmh: "47", jump_up: "3.5", jump_long: "10",
        lift: "520", throw: "130", dmg_mod: "+5", punch: "1d6+5", kick: "2d6+5"
      },
      borgStructure: {
        head_sp: "22", head_ost: "30", head_opt: "Термограф, анализатор угроз, прицел, Anti-Dazzle", head_aud: "Скремблированная связь, детектор выстрелов",
        torso_sp: "25", torso_ost: "40", torso_opt: "Элегантный чёрный хром, выдвижной бронещит для VIP",
        rarm_sp: "22", rarm_ost: "25", rarm_opt: "Смартлинк, скрытый 10-мм ПП в предплечье",
        larm_sp: "22", larm_ost: "25", larm_opt: "Выдвижной кевларово-титановый щит (ОС 25)",
        rleg_sp: "22", rleg_ost: "30", rleg_opt: "Ускорители рывка для перехвата линии огня",
        lleg_sp: "22", lleg_ost: "30", lleg_opt: "Отсек под аптечку и реаниматор для VIP-персоны"
      },
      cyberwareList: [
        { name: "Представительский дизайн Superchrome®", desc: "Изящный матово-чёрный с золотом скульптурированный корпус, уместно смотрящийся на светских приёмах и заседаниях совета директоров (+2 к Гардеробу и Стилю)." },
        { name: "Протокол живого щита", desc: "Ускоритель рефлексов Sandevistan (+3 к Инициативе) и выдвижной ростовой щит в левой руке для мгновенного укрытия охраняемого лица от снайперского огня." }
      ],
      desc: "Если армейский «Драгун» выглядит как ходячий танк, который не пустят ни в один приличный ресторан Корпоративной Плазы, то «Эклипс» от Raven Microcybernetics — это произведение высокого кибер-искусства. Стройный, стремительный и смертоносный киборг-телохранитель в зеркально-чёрном панцире, созданный для защиты топ-менеджеров мегакорпораций."
    }
  ];

  BORGING_PACK_1.forEach(newItem => {
    const exists = extDb.borging.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase()) ||
      (existing.origName && existing.origName.toLowerCase() === newItem.origName.toLowerCase())
    );
    if (!exists) {
      extDb.borging.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ БОРГИРОВАНИЯ В DATABASE.JS (РАЗДЕЛЬНЫЕ КАРТОЧКИ МОДЕЛЕЙ)
// Пакет №2: Спец-киборги (Wiseman, Sheol, Grasshopper) и Экзоты (Exotics)
// ============================================================================
(function appendBorgingPack2() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.borging)) extDb.borging = [];
  if (!Array.isArray(extCats.borging)) extCats.borging = [];

  const borgCategories2 = [
    "Полное боргирование (Full Body Conversion)",
    "Боевые и штурмовые киборги",
    "Специализированные и рабочие киборги",
    "Частичное боргирование",
    "Экзотическое боргирование (Exotics)"
  ];
  borgCategories2.forEach(c => {
    if (!extCats.borging.includes(c)) extCats.borging.push(c);
  });

  const BORGING_PACK_2 = [
    // =========================================================================
    // 1. СПЕЦИАЛИЗИРОВАННЫЕ И ВОЕННЫЕ ПОЛНЫЕ КИБОРГИ (CHROMEBOOK 2–3 / SOF 2)
    // =========================================================================
    {
      id: "borg-raven-wiseman",
      name: "Сетевой киборг-нетраннер Raven Microcybernetics Wiseman",
      origName: "Raven Microcybernetics \"Wiseman\"",
      borgType: "Полное боргирование (Нетраннинг и Инфовойна)",
      manufacturer: "Raven Microcybernetics",
      hc: "16d6",
      cost: "92,000 eb",
      category: "Специализированные и рабочие киборги",
      book: "Chr2",
      borgStats: {
        ref: "10 (в Сети +3)", cool: "5", ma: "10", body: "10",
        m_m: "30", m_kmh: "36", jump_up: "2.5", jump_long: "7.5",
        lift: "400", throw: "100", dmg_mod: "+3", punch: "1d6+3", kick: "2d6+3"
      },
      borgStructure: {
        head_sp: "20", head_ost: "30", head_opt: "Экран данных, ИК, микрооптика", head_aud: "Сетевой модем, радиосканер, защита слуха",
        torso_sp: "22", torso_ost: "40", torso_opt: "2 встроенные кибердеки, крио-охлаждение биокапсулы",
        rarm_sp: "18", rarm_ost: "20", rarm_opt: "Катушка оптоволокна (10 м), универсальный дешифратор",
        larm_sp: "18", larm_ost: "20", larm_opt: "Микро-инструменты электронщика, слот на 10 чипов",
        rleg_sp: "20", rleg_ost: "25", rleg_opt: "Резервный аккумулятор (72 часа автономной работы в Сети)",
        lleg_sp: "20", lleg_ost: "25", lleg_opt: "Экранированный сейф-накопитель данных (100 ЕП)"
      },
      cyberwareList: [
        { name: "Сдвоенный кибермодемный комплекс", desc: "Две высокоскоростные сотовые кибердеки в грудном отсеке (Скорость +4, Стена данных +6, Память 40 ЕП) с системой автоматического переключения при атаке Чёрного ЛЬДА." },
        { name: "Криогенная защита биокапсулы", desc: "Жидкостное охлаждение мозга снижает любой физический урон от программ типа Hellbolt и Firestarter на 50% и даёт +2 к проверкам против электрошока." },
        { name: "Нейро-сопроцессор параллельного потока", desc: "Позволяет нетраннеру одновременно находиться в виртуальной Сети и контролировать своё физическое тело в реальном мире со штрафом всего -2." }
      ],
      desc: "Мечта любого корпоративного нетраннера и кошмар системных администраторов. Шасси «Уайзмен» от Raven Microcybernetics превращает человека в ходячий сетевой мейнфрейм. Благодаря прямому подключению биокапсулы к сдвоенной кибердеке и жидкостному охлаждению нервной системы, пилот «Уайзмена» практически неуязвим для обычных анти-личностных программ."
    },
    {
      id: "borg-zetatech-grasshopper",
      name: "Лёгкий разведывательно-прыжковый киборг Zetatech Grasshopper",
      origName: "Zetatech \"Grasshopper\" Recon Cyborg",
      borgType: "Полное боргирование (Аэромобильный разведчик)",
      manufacturer: "Zetatech",
      hc: "17d6",
      cost: "68,500 eb",
      category: "Боевые и штурмовые киборги",
      book: "Chr2 / SOF2",
      borgStats: {
        ref: "13", cool: "4", ma: "16", body: "11",
        m_m: "48", m_kmh: "58", jump_up: "12!", jump_long: "25!",
        lift: "440", throw: "110", dmg_mod: "+3", punch: "1d6+3", kick: "3d6+5 (в прыжке)"
      },
      borgStructure: {
        head_sp: "18", head_ost: "25", head_opt: "Телеоптика 20×, дальномер, LowLite, прицел", head_aud: "Лазерный микрофон, пеленгатор, рация",
        torso_sp: "20", torso_ost: "35", torso_opt: "Облегчённый композитный каркас, гиростабилизатор",
        rarm_sp: "16", rarm_ost: "20", rarm_opt: "Смартлинк, демпфер отдачи для стрельбы в воздухе",
        larm_sp: "16", larm_ost: "20", larm_opt: "Гарпунная пушка-кошка (50 м)",
        rleg_sp: "22", rleg_ost: "35", rleg_opt: "Обратносуставная пневмо-катапульта",
        lleg_sp: "22", lleg_ost: "35", lleg_opt: "Обратносуставная пневмо-катапульта и амортизатор падения"
      },
      cyberwareList: [
        { name: "Кузнечиковые ноги с пневмо-аккумуляторами", desc: "Позволяют совершать вертикальные прыжки на высоту до 12 метров (4 этажа!) и горизонтальные прыжки до 25 метров, а также безопасно спрыгивать с высоты до 40 метров без урона." },
        { name: "Гироскопический комплекс прицеливания", desc: "Убирает штраф за стрельбу в прыжке и на высокой скорости." }
      ],
      desc: "Высокомобильный киборг-разведчик и снайпер с характерными «кузнечиковыми» ногами обратного сгиба от корпорации Zetatech. Способен одним прыжком запрыгивать на крыши трёхэтажных зданий или перепрыгивать через городские магистрали, меняя снайперскую позицию быстрее, чем противник успеет навести миномёты."
    },
    {
      id: "borg-iec-sheol",
      name: "Радиационно-реакторный киборг IEC Sheol",
      origName: "IEC \"Sheol\" High-Hazard Cyborg",
      borgType: "Полное боргирование (Экстремальная среда / Ядерный)",
      manufacturer: "IEC",
      hc: "20d6",
      cost: "88,000 eb",
      category: "Специализированные и рабочие киборги",
      book: "Chr2",
      borgStats: {
        ref: "9", cool: "3", ma: "9", body: "16",
        m_m: "27", m_kmh: "32", jump_up: "1.5", jump_long: "4.5",
        lift: "640", throw: "150", dmg_mod: "+6", punch: "2d6+6", kick: "3d6+6"
      },
      borgStructure: {
        head_sp: "30", head_ost: "35", head_opt: "Свинцово-кварцевые линзы, спектр радиации, ИК", head_aud: "Счётчик Гейгера, защищённая связь",
        torso_sp: "35", torso_ost: "50", torso_opt: "Свинцово-керамический панцирь, замкнутое охлаждение (24 ч)",
        rarm_sp: "30", rarm_ost: "35", rarm_opt: "Тяжёлый манипулятор для работы с топливными стержнями",
        larm_sp: "30", larm_ost: "35", larm_opt: "Дезактивационный распылитель и резак",
        rleg_sp: "30", rleg_ost: "40", rleg_opt: "Кислотоупорные и жаропрочные траки-стопы",
        lleg_sp: "30", lleg_ost: "40", lleg_opt: "Магнитно-гравитационные якоря"
      },
      cyberwareList: [
        { name: "Абсолютный радиационный и термический щит", desc: "Полный иммунитет к смертельным дозам радиации, боевым отравляющим веществам, кислотам и температурам до 1500°C." },
        { name: "Экранирование от ЭМИ", desc: "Двойная клетка Фарадея защищает биокапсулу и приводы от ядерного электромагнитного импульса." }
      ],
      desc: "Сверхтяжёлый герметичный киборг в свинцово-керамическом панцире, созданный для работы внутри активных зон ядерных реакторов, в кратерах вулканов и на токсичных свалках. Из-за колоссальной брони (ОС 35 на торсе) и невосприимчивости к огню, газу и ЭМИ нередко выкупается на чёрном рынке бандами и наёмниками для превращения в неуязвимого штурмового тарана."
    },
    {
      id: "borg-iec-copernicus",
      name: "Аэрокосмический киборг-пилот IEC Copernicus",
      origName: "IEC \"Copernicus\" Aerospace Pilot Cyborg",
      borgType: "Полное боргирование (Пилот-перехватчик / Космос)",
      manufacturer: "IEC / ESA",
      hc: "17d6",
      cost: "81,000 eb",
      category: "Специализированные и рабочие киборги",
      book: "DS / Chr2",
      borgStats: {
        ref: "14", cool: "5", ma: "10", body: "12",
        m_m: "30", m_kmh: "36", jump_up: "2.5", jump_long: "7.5",
        lift: "480", throw: "120", dmg_mod: "+4", punch: "1d6+4", kick: "2d6+4"
      },
      borgStructure: {
        head_sp: "20", head_ost: "25", head_opt: "Панорамный 360° радарный интерфейс, телеоптика", head_aud: "Многоканальная авиационная связь",
        torso_sp: "22", torso_ost: "35", torso_opt: "Противоперегрузочный подвес биокапсулы (до 25 G!)",
        rarm_sp: "20", rarm_ost: "20", rarm_opt: "Прямой бортовой нейроконнектор управления ЛА (+3 к Пилотированию)",
        larm_sp: "20", larm_ost: "20", larm_opt: "Дублирующий коннектор вооружения и навигации",
        rleg_sp: "20", rleg_ost: "25", rleg_opt: "Магнитные фиксаторы к кокпиту",
        lleg_sp: "20", lleg_ost: "25", lleg_opt: "Аварийный маневровый двигатель катапультирования"
      },
      cyberwareList: [
        { name: "Гидравлический демпфер перегрузок (25 G)", desc: "Поскольку у киборга нет живого тела и крови, отливающей от мозга, он способен выдерживать запредельные манёвры с перегрузкой до 25 G, которые мгновенно убили бы живого пилота!" },
        { name: "Прямой интерфейс слияния с машиной", desc: "Даёт бонус +3 ко всем проверкам Пилотирования самолётов, аэродайнов и орбитальных перехватчиков." }
      ],
      desc: "Создан для пилотов суборбитальных истребителей и штурмовых аэродайнов. Подключённый напрямую в бортовую сеть перехватчика, пилот «Коперника» ощущает корпус самолёта как собственное тело и закладывает виражи, недоступные для человеческой физиологии."
    },
    {
      id: "borg-militech-commando",
      name: "Армейский десантный киборг Militech Commando",
      origName: "Militech \"Commando\" Tactical Cyborg",
      borgType: "Полное боргирование (Военный спецназ)",
      manufacturer: "Militech",
      hc: "21d6",
      cost: "96,000 eb",
      category: "Боевые и штурмовые киборги",
      book: "SOF2 / Corp2",
      borgStats: {
        ref: "14", cool: "4", ma: "14", body: "16",
        m_m: "42", m_kmh: "50", jump_up: "3.5", jump_long: "11",
        lift: "640", throw: "160", dmg_mod: "+6", punch: "2d6+6", kick: "3d6+6"
      },
      borgStructure: {
        head_sp: "28", head_ost: "35", head_opt: "Тактический HUD, ИК, LowLite, прицел, дальномер", head_aud: "Спутниковая связь, пеленгатор выстрелов, демпфер",
        torso_sp: "32", torso_ost: "45", torso_opt: "Камуфляж Mirage Gear™, парашютный модуль десантирования",
        rarm_sp: "28", rarm_ost: "30", rarm_opt: "Смартлинк, встроенный 25-мм мини-гранатомёт (4 выстр.)",
        larm_sp: "28", larm_ost: "30", larm_opt: "Выдвижное мономолекулярное мачете (3d6+6 ББ)",
        rleg_sp: "28", rleg_ost: "35", rleg_opt: "Бесшумные приводы и амортизаторы десантирования",
        lleg_sp: "28", lleg_ost: "35", lleg_opt: "Контейнер под 4 кг пластита C-6 и боезапас"
      },
      cyberwareList: [
        { name: "Активный камуфляж Militech Mirage™", desc: "Хамелеоновое покрытие брони автоматически подстраивается под рельеф местности (+3 к Скрытности)." },
        { name: "Ускоритель рефлексов Sandevistan (+3)", desc: "Даёт +3 к Инициативе на 5 ходов после активации." }
      ],
      desc: "Ответ корпорации Militech на европейский «Драгун». Если «Драгун» — это неповоротливый штурмовой танк для лобового прорыва, то «Коммандо» создан для длительных автономных рейдов в глубоком тылу врага, диверсий и воздушного десантирования без парашюта с малых высот."
    },

    // =========================================================================
    // 2. ЧАСТИЧНОЕ БОРГИРОВАНИЕ И БОЕВЫЕ ПАКЕТЫ ПЕРЕОБОРУДОВАНИЯ
    // =========================================================================
    {
      id: "borg-part-linear-omega",
      name: "Вживлённая линейная рама IEC Omega",
      origName: "Implanted Linear Frame Omega",
      borgType: "Частичное боргирование (Внутренний экзо-каркас)",
      manufacturer: "IEC",
      hc: "6d6",
      cost: "18,000 eb",
      category: "Частичное боргирование",
      book: "Chr2",
      borgStats: {
        ref: "По персонажу", cool: "По персонажу", ma: "По персонажу", body: "16",
        m_m: "По ПЕР", m_kmh: "По ПЕР", jump_up: "По ПЕР", jump_long: "По ПЕР",
        lift: "640", throw: "160", dmg_mod: "+6", punch: "1d6+6", kick: "2d6+6"
      },
      borgStructure: {
        head_sp: "—", head_ost: "По телу", head_opt: "—", head_aud: "—",
        torso_sp: "Внутренний каркас", torso_ost: "40", torso_opt: "Требует кружево мышц и костей и 2 киберруки",
        rarm_sp: "По руке", rarm_ost: "По руке", rarm_opt: "Усиленные плечевые шарниры",
        larm_sp: "По руке", larm_ost: "По руке", larm_opt: "Усиленные плечевые шарниры",
        rleg_sp: "По ноге", rleg_ost: "По ноге", rleg_opt: "Титановое укрепление таза и бёдер",
        lleg_sp: "По ноге", lleg_ost: "По ноге", lleg_opt: "Титановое укрепление таза и бёдер"
      },
      cyberwareList: [
        { name: "Сверхтяжёлый титаново-миомерный скелет", desc: "Повышает показатель ТЕЛА персонажа до 16 (бонус урона в ближнем бою +6, грузоподъёмность 640 кг), позволяя стрелять с рук из пулемётов и оружия киборгов." }
      ],
      desc: "Последняя ступень перед полным отказом от человеческого тела. Массивный внутренний титановый каркас с пучками синтетических миомеров, вживляемый прямо поверх костей и позвоночника. Делает фигуру человека неестественно широкой и бугристой, но наделяет его чудовищной физической мощью киборга (ТЕЛО 16)."
    },
    {
      id: "borg-part-medusa",
      name: "Многорукий монтажный торс IEC Medusa",
      origName: "IEC \"Medusa\" Multi-Arm Torso Conversion",
      borgType: "Частичное боргирование (Четырёхрукий торс)",
      manufacturer: "IEC",
      hc: "8d6",
      cost: "15,500 eb",
      category: "Частичное боргирование",
      book: "Chr2",
      borgStats: {
        ref: "По персонажу", cool: "-2 ПРВЛ", ma: "По персонажу", body: "+2 к ТЕЛУ",
        m_m: "По ПЕР", m_kmh: "По ПЕР", jump_up: "По ПЕР", jump_long: "По ПЕР",
        lift: "+150 кг", throw: "По ТЕЛУ", dmg_mod: "По ТЕЛУ", punch: "До 4 атак в ход", kick: "По ТЕЛУ"
      },
      borgStructure: {
        head_sp: "—", head_ost: "По телу", head_opt: "—", head_aud: "—",
        torso_sp: "20", torso_ost: "40", torso_opt: "Расширенная грудная клетка с 4 плечевыми узлами",
        rarm_sp: "20", rarm_ost: "30", rarm_opt: "Верхняя и нижняя правые киберруки",
        larm_sp: "20", larm_ost: "30", larm_opt: "Верхняя и нижняя левые киберруки",
        rleg_sp: "—", rleg_ost: "По телу", rleg_opt: "—",
        lleg_sp: "—", lleg_ost: "По телу", lleg_opt: "—"
      },
      cyberwareList: [
        { name: "Нейрокоординатор второй пары конечностей", desc: "Позволяет управлять четырьмя киберруками одновременно без штрафа за действия неведущей рукой (можно держать двуручную штурмовую винтовку и одновременно перезаряжать её или фехтовать двумя клинками)." }
      ],
      desc: "Радикальная замена верхней половины туловища на бронированный кибернетический торс с четырьмя полноценными киберруками. Первоначально создавалась для техников и космических монтажников, но быстро полюбилась уличным самураям и телохранителям."
    },

    // =========================================================================
    // 3. ЭКЗОТИЧЕСКОЕ БОРГИРОВАНИЕ И БИОСКУЛЬПТУРИНГ (EXOTICS, CHROMEBOOK 2)
    // =========================================================================
    {
      id: "borg-exo-feline",
      name: "Экзотический био-пакет «Кошачьи» (Пантера / Тигр / Рысь)",
      origName: "Biotechnica Feline Exotic Package (Cat / Tiger / Panther)",
      borgType: "Экзотическое боргирование (Звероподобный биоскульпт)",
      manufacturer: "Biotechnica / Bodyshoppe",
      hc: "6d6 (с полной перестройкой суставов)",
      cost: "18,500 eb",
      category: "Экзотическое боргирование (Exotics)",
      book: "Chr2",
      borgStats: {
        ref: "+1 к РЕФ", cool: "+1 к ПРВЛ", ma: "+2 к ПЕР", body: "+1 к ТЕЛУ",
        m_m: "+6 м", m_kmh: "+7 км/ч", jump_up: "+1.5 м", jump_long: "+3 м",
        lift: "По ТЕЛУ", throw: "По ТЕЛУ", dmg_mod: "Когти и клыки", punch: "2d6 ББ (когти)", kick: "2d6+2 ББ"
      },
      borgStructure: {
        head_sp: "8 (шкура)", head_ost: "По телу", head_opt: "Кошачьи зрачки (LowLite)", head_aud: "Подвижные уши (+2 к Слуху)",
        torso_sp: "8 (шкура)", torso_ost: "По телу", torso_opt: "Густой мех (тигровый, леопардовый или чёрный) + хвост",
        rarm_sp: "8", rarm_ost: "По телу", rarm_opt: "Втяжные карбогласовые когти (2d6 ББ)",
        larm_sp: "8", larm_ost: "По телу", larm_opt: "Втяжные карбогласовые когти (2d6 ББ)",
        rleg_sp: "8", rleg_ost: "По телу", rleg_opt: "Пальцеходящие лапы (+2 к Прыжкам и Скрытности)",
        lleg_sp: "8", lleg_ost: "По телу", lleg_opt: "Пальцеходящие лапы (+2 к Прыжкам и Скрытности)"
      },
      cyberwareList: [
        { name: "Натуральный био-мех с подкожной прошивкой", desc: "Генетически выращенный шёрстный покров с вплетённым слоем Skinweave (даёт базовую защиту ОС 8 по всему телу)." },
        { name: "Управляемый балансировочный хвост", desc: "Полноценный гибкий хвост, подключённый к спинному мозгу (+2 к проверкам Атлетики и Равновесия)." },
        { name: "Хищная сенсорика и феромоны", desc: "Ночное зрение LowLite, усиленный слух и железы синтетических феромонов (+1 к Соблазнению)." }
      ],
      desc: "Самое популярное направление экзотического биоскульптуринга от Biotechnica. Полная перестройка внешности, скелета стоп и кожного покрова, превращающая человека в грациозного антропоморфного хищника из семейства кошачьих. Сочетает экзотическую красоту высокой моды Найт-Сити со смертоносными природными рефлексами, бесшумной поступью и втяжными когтями."
    },
    {
      id: "borg-exo-lupine",
      name: "Экзотический био-пакет «Волчьи» (Волк / Шакал / Цербер)",
      origName: "Biotechnica Lupine / Canine Exotic Package (Wolf / Hound)",
      borgType: "Экзотическое боргирование (Охотник-следопыт)",
      manufacturer: "Biotechnica",
      hc: "7d6",
      cost: "21,000 eb",
      category: "Экзотическое боргирование (Exotics)",
      book: "Chr2",
      borgStats: {
        ref: "+1 к РЕФ", cool: "+1 к Запугиванию", ma: "+2 к ПЕР", body: "+2 к ТЕЛУ",
        m_m: "+6 м", m_kmh: "+7 км/ч", jump_up: "+1 м", jump_long: "+2.5 м",
        lift: "+80 кг", throw: "По ТЕЛУ", dmg_mod: "+1", punch: "1d6+2 ББ (когти)", kick: "3d6 ББ (укус челюстей!)"
      },
      borgStructure: {
        head_sp: "10 (шкура)", head_ost: "По телу", head_opt: "LowLite и датчик движения", head_aud: "Ультразвуковой слух и обонятельный бустер (+4 к Выслеживанию)",
        torso_sp: "10 (шкура)", torso_ost: "По телу", torso_opt: "Уплотнённая волчья шкура (ОС 10), кружево мышц",
        rarm_sp: "10", rarm_ost: "По телу", rarm_opt: "Когтистые лапы",
        larm_sp: "10", larm_ost: "По телу", larm_opt: "Когтистые лапы",
        rleg_sp: "10", rleg_ost: "По телу", rleg_opt: "Усиленные сухожилия для долгого бега",
        lleg_sp: "10", lleg_ost: "По телу", lleg_opt: "Усиленные сухожилия (+3 к Выносливости)"
      },
      cyberwareList: [
        { name: "Ольфакторный бустер (Сверх-обоняние)", desc: "Удлиненные челюсти с био-рецепторами позволяют брать след человека по запаху спустя сутки и распознавать эмоции (страх, ложь, адреналин) или взрывчатку (+4 к Выслеживанию и Внимательности)." },
        { name: "Усиленные челюсти с карбогласовыми клыками", desc: "В ближнем бою позволяют нанести сокрушительный бронебойный укус на 3d6 ББ урона." }
      ],
      desc: "Боевой и охотничий пакет экзотической модификации тела, превращающий человека в прямоходящего волка-оборотня. Пользуется огромным спросом среди следопытов, охотников за головами, кочевников и банд зоо-морфов. Даёт непревзойдённое чутьё и выносливость."
    },
    {
      id: "borg-exo-reptilian",
      name: "Экзотический био-пакет «Рептилия / Дракон» (Ящер / Кобра)",
      origName: "Reptilian / Saurian Exotic Package (Dragon / Viper)",
      borgType: "Экзотическое боргирование (Чешуйчатый хищник)",
      manufacturer: "Biotechnica / Ripperdocs",
      hc: "9d6",
      cost: "26,500 eb",
      category: "Экзотическое боргирование (Exotics)",
      book: "Chr2",
      borgStats: {
        ref: "По персонажу", cool: "+2 к Запугиванию", ma: "По персонажу", body: "+2 к ТЕЛУ",
        m_m: "По ПЕР", m_kmh: "По ПЕР", jump_up: "По ПЕР", jump_long: "По ПЕР",
        lift: "+80 кг", throw: "По ТЕЛУ", dmg_mod: "+2", punch: "2d6 ББ (когти)", kick: "2d6+3 (удар хвостом!)"
      },
      borgStructure: {
        head_sp: "16 (чешуя)", head_ost: "По телу", head_opt: "Терморецепторы (ИК-зрение), мигательная перепонка", head_aud: "Скрытые ушные мембраны",
        torso_sp: "16 (чешуя)", torso_ost: "По телу", torso_opt: "Кератиново-арамидная чешуя (ОС 16) и боевой хвост",
        rarm_sp: "16", rarm_ost: "По телу", rarm_opt: "Серповидные когти",
        larm_sp: "16", larm_ost: "По телу", larm_opt: "Серповидные когти",
        rleg_sp: "16", rleg_ost: "По телу", rleg_opt: "Чешуйчатые лапы",
        lleg_sp: "16", lleg_ost: "По телу", lleg_opt: "Чешуйчатые лапы"
      },
      cyberwareList: [
        { name: "Бронированная субдермальная чешуя (ОС 16)", desc: "Ороговевшие пластины с вплетённым кевларом покрывают всё тело, обеспечивая природную броню ОС 16 и снижая урон от огня пополам." },
        { name: "Ядовитые клыки и железы", desc: "Позволяют при укусе (или плевке на 2 м) поразить жертву нейротоксином или паралитическим ядом (Спасбросок от Смерти/Шока)." },
        { name: "Тяжёлый мускулистый хвост", desc: "Даёт дополнительную атаку в ближнем бою (сбивание с ног или удар на 2d6+3)." }
      ],
      desc: "Устрашающий пакет глубокой био-кибернетической трансформации. Кожа заменяется переливающейся роговой чешуёй с подкожным бронированием, глаза получают вертикальные змеиные зрачки и природное тепловидение, а в челюсти вживляются ядовитые железы."
    },
    {
      id: "borg-exo-mythic-elf",
      name: "Экзотический био-пакет «Высший Эльф / Фейри» (Mythic Line)",
      origName: "Biotechnica \"Mythic\" Elven / Sidhe Biosculpt Package",
      borgType: "Экзотическое боргирование (Элитный эстетический)",
      manufacturer: "Biotechnica",
      hc: "2d6 (высокая биосовместимость)",
      cost: "12,000 eb",
      category: "Экзотическое боргирование (Exotics)",
      book: "Chr2",
      borgStats: {
        ref: "+1 к РЕФ", cool: "ПРВЛ повышается до 10!", ma: "+1 к ПЕР", body: "По персонажу",
        m_m: "+3 м", m_kmh: "+4 км/ч", jump_up: "По ПЕР", jump_long: "По ПЕР",
        lift: "По ТЕЛУ", throw: "По ТЕЛУ", dmg_mod: "По ТЕЛУ", punch: "По ТЕЛУ", kick: "По ТЕЛУ"
      },
      borgStructure: {
        head_sp: "12 (Skinweave)", head_ost: "По телу", head_opt: "Светящаяся радужка Color Shift, LowLite", head_aud: "Заострённые уши с усилителем слуха",
        torso_sp: "12 (Skinweave)", torso_ost: "По телу", torso_opt: "Безупречная кожа с нано-прошивкой ОС 12",
        rarm_sp: "12", rarm_ost: "По телу", rarm_opt: "Утончённая пластика кистей (+1 к Ловкости рук)",
        larm_sp: "12", larm_ost: "По телу", larm_opt: "Утончённая пластика кистей",
        rleg_sp: "12", rleg_ost: "По телу", rleg_opt: "Удлинённые пропорции ног",
        lleg_sp: "12", lleg_ost: "По телу", lleg_opt: "Удлинённые пропорции ног"
      },
      cyberwareList: [
        { name: "Скульптуринг неземной красоты (ПРВЛ 10)", desc: "Поднимает характеристику Привлекательности (ATTR) до максимального значения 10, даёт +2 к Соблазнению и Гардеробу/Стилю." },
        { name: "Вокальный модулятор и феромоны", desc: "Придаёт голосу завораживающие мелодичные обертоны (+2 к Исполнению и Убеждению)." }
      ],
      desc: "Мягкий и аристократичный пакет биоскульптуринга, чрезвычайно популярный среди корпоративной элиты, медиа-идолов, Рокербоев и участников закрытых ролевых клубов Найт-Сити. Придаёт владельцу утончённые черты классических фэнтезийных эльфов (заострённые уши, миндалевидные сияющие глаза, безупречную кожу со скрытой прошивкой Skinweave) при минимальной потере Человечности."
    },
    {
      id: "borg-exo-gargoyle",
      name: "Экзотический био-пакет «Гаргулья / Демон» (Ночной охотник)",
      origName: "Gargoyle / Demon Heavy Exotic Conversion",
      borgType: "Экзотическое боргирование (Боевой био-киборг)",
      manufacturer: "Подпольные клиники / Ripperdocs",
      hc: "12d6",
      cost: "34,000 eb",
      category: "Экзотическое боргирование (Exotics)",
      book: "Chr2",
      borgStats: {
        ref: "+1 к РЕФ", cool: "+4 к Запугиванию", ma: "+1 к ПЕР", body: "13 (с рамой Сигма)",
        m_m: "По ПЕР", m_kmh: "По ПЕР", jump_up: "+2 м (с крыльями)", jump_long: "Планирование до 40 м!",
        lift: "520", throw: "130", dmg_mod: "+5", punch: "2d6+5 ББ (когти)", kick: "3d6+5 ББ"
      },
      borgStructure: {
        head_sp: "18", head_ost: "30", head_opt: "Красные ИК-глаза, эхолокация", head_aud: "Радар-сонар летучей мыши",
        torso_sp: "20", torso_ost: "35", torso_opt: "Подкожная броня, миомерные крылья-планеры на спине",
        rarm_sp: "18", rarm_ost: "25", rarm_opt: "Когти «Потрошители» (Rippers)",
        larm_sp: "18", larm_ost: "25", larm_opt: "Когти «Потрошители» (Rippers)",
        rleg_sp: "18", rleg_ost: "25", rleg_opt: "Хватательные когтистые лапы",
        lleg_sp: "18", lleg_ost: "25", lleg_opt: "Хватательные когтистые лапы"
      },
      cyberwareList: [
        { name: "Складные перепончатые крылья-планеры", desc: "Карбоново-миомерные крылья за спиной позволяют бесшумно планировать с крыш небоскрёбов (горизонтальная дальность в 3 раза больше высоты прыжка) и гасить скорость при приземлении." },
        { name: "Каменно-серая бронекожа и рога", desc: "Сочетание подкожной брони и ороговевшего эпидермиса даёт ОС 18–20 и позволяет наносить таранный удар головой на 2d6+5 ББ." }
      ],
      desc: "Тяжёлая гибридная модификация на стыке биоскульптуринга и боевой кибернетики. Включает вживление линейной рамы «Сигма», подкожного панциря пепельно-каменного цвета, рогов, клыков и функциональных перепончатых крыльев для планирования с высоток Найт-Сити."
    }
  ];

  BORGING_PACK_2.forEach(newItem => {
    const exists = extDb.borging.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase()) ||
      (existing.origName && existing.origName.toLowerCase() === newItem.origName.toLowerCase())
    );
    if (!exists) {
      extDb.borging.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ УСЛУГ В DATABASE.JS (РАЗДЕЛЬНЫЕ КАРТОЧКИ ТАРИФОВ И УСЛУГ)
// Полный свод: Медицина, Жильё, Питание, Связь, Транспорт, Наёмники и Чёрный рынок
// ============================================================================
(function appendServicesPack1() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.services)) extDb.services = [];
  if (!Array.isArray(extCats.services)) extCats.services = [];

  const serviceCategories = [
    "Медицина и Trauma Team",
    "Жильё",
    "Образ жизни",
    "Связь",
    "Транспорт и Логистика",
    "Наёмники и Спецотряды",
    "Чёрный рынок",
    "Развлечения и Досуг"
  ];
  serviceCategories.forEach(c => {
    if (!extCats.services.includes(c)) extCats.services.push(c);
  });

  // Удаляем старые склеенные карточки услуг из базового шаблона, чтобы заменить их раздельными
  const legacyServiceIds = [
    "s-trauma-acct",
    "s-lazarus",
    "s-conapt",
    "s-food-lifestyle",
    "s-blackmarket-cred",
    "s-comm-net"
  ];
  extDb.services = extDb.services.filter(item => item && !legacyServiceIds.includes(item.id));

  const SERVICES_PACK_1 = [
    // =========================================================================
    // 1. МЕДИЦИНА И TRAUMA TEAM (MEDICAL & TRAUMA TEAM)
    // =========================================================================
    {
      id: "srv-med-trauma-std",
      name: "Полный полис Trauma Team: Стандартный тариф",
      origName: "Trauma Team Full Body Policy (Standard)",
      category: "Медицина и Trauma Team",
      cost: "500 eb",
      unit: "в месяц (или 5,500 eb в год)",
      book: "CP20",
      desc: "Базовая медицинская страховка вооружённой эвакуации от корпорации Trauma Team International. Включает пластиковую карту-передатчик (при переломе карты пополам или по сигналу биомонитора вызывается штурмовая бригада на AV-4). Время прибытия — до 7 минут. Клиент оплачивает отдельно расход боеприпасов бригады, топливо (100 eb за милю полёта) и повреждённое в бою оборудование."
    },
    {
      id: "srv-med-trauma-exec",
      name: "Корпоративный VIP-полис Trauma Team: Приоритетный тариф",
      origName: "Trauma Team Executive Priority Account",
      category: "Медицина и Trauma Team",
      cost: "1,500 eb",
      unit: "в месяц (или 16,500 eb в год)",
      book: "CP20 / NC",
      desc: "Элитное обслуживание для топ-менеджеров корпораций и богатых Соло. Гарантированное время прибытия бронированного аэродайна AV-4 — 3–4 минуты в любой точке города. Все расходы на потраченные бригадой боеприпасы, реанимацию на борту и содержание в частной корпоративной клинике включены в стоимость полиса."
    },
    {
      id: "srv-med-hospital-day",
      name: "Госпитализация: Общая больничная палата",
      origName: "Hospital Care (Standard Ward)",
      category: "Медицина и Trauma Team",
      cost: "300 eb",
      unit: "в сутки",
      book: "CP20",
      desc: "Суточное пребывание в стандартном стационаре городской больницы под наблюдением медперсонала с капельницами и базовыми медикаментами."
    },
    {
      id: "srv-med-icu-day",
      name: "Госпитализация: Палата интенсивной терапии и реанимации",
      origName: "Intensive Care Unit (ICU)",
      category: "Медицина и Trauma Team",
      cost: "1,000 eb",
      unit: "в сутки",
      book: "CP20",
      desc: "Содержание тяжелораненого или прооперированного пациента в отделении реанимации с подключением к аппаратам искусственного жизнеобеспечения и ускоренной регенерацией."
    },
    {
      id: "srv-med-surg-minor",
      name: "Хирургическая операция: Незначительная (Код Н)",
      origName: "Minor Surgery (Code N / Negligible)",
      category: "Медицина и Trauma Team",
      cost: "500 eb",
      unit: "за операцию",
      book: "CP20",
      desc: "Амбулаторная процедура в клинике или медицинском молле (Bodyshoppe): установка гнезда чипов, базовой прошивки кожи, контрацептивного импланта или извлечение пули из мягких тканей."
    },
    {
      id: "srv-med-surg-small",
      name: "Хирургическая операция: Малая (Код М)",
      origName: "Minor-Medium Surgery (Code M)",
      category: "Медицина и Trauma Team",
      cost: "1,500 eb",
      unit: "за операцию",
      book: "CP20",
      desc: "Полноценная хирургическая операция под анестезией: вживление базового нейропроцессора, модуля кибераудио, выдвижных когтей или сшивание повреждённых сосудов."
    },
    {
      id: "srv-med-surg-major",
      name: "Хирургическая операция: Серьёзная (Код С)",
      origName: "Major Surgery (Code MA)",
      category: "Медицина и Trauma Team",
      cost: "2,500 eb",
      unit: "за операцию",
      book: "CP20",
      desc: "Сложное полостное или нейрохирургическое вмешательство: замена глаз на кибероптику, имплантация искусственного сердца или подкожной брони."
    },
    {
      id: "srv-med-surg-crit",
      name: "Хирургическая операция: Критическая (Код КР)",
      origName: "Critical Surgery (Code CR)",
      category: "Медицина и Trauma Team",
      cost: "3,500 eb",
      unit: "за операцию",
      book: "CP20",
      desc: "Тяжёлая реконструктивная операция высокой сложности: ампутация и подключение киберконечностей, вживление линейных рам или пересадка внутренних органов."
    },
    {
      id: "srv-med-ripperdoc",
      name: "Услуги уличного риппердока (Подпольная хирургия)",
      origName: "Street Ripperdoc Surgery",
      category: "Медицина и Trauma Team",
      cost: "50% от цены легальной клиники",
      unit: "за операцию",
      book: "CP20 / WS",
      desc: "Установка нелегального военного хрома, снятие серийных номеров с имплантов и зашивание пулевых ранений без уведомления полиции NCPD. Дешевле официальных клиник вдвое, но в случае провала броска Медтехники возможны осложнения или заражение."
    },
    {
      id: "srv-med-bodybank-limb",
      name: "Покупка клонированной конечности или органа в Банке Тел",
      origName: "Body Bank Replacement Limb / Organ",
      category: "Медицина и Trauma Team",
      cost: "500 – 2,000 eb",
      unit: "за орган или конечность",
      book: "CP20",
      desc: "Приобретение органической руки, ноги, глаза или внутреннего органа (выращенного в чане или выкупленного у доноров) для приживления взамен утраченного без потери Человечности."
    },
    {
      id: "srv-med-clone-vat",
      name: "Выращивание полного запасного клона тела на заказ",
      origName: "Custom Full-Body Clone Growth & Storage",
      category: "Медицина и Trauma Team",
      cost: "50,000 eb (+1,000 eb/мес хранение)",
      unit: "за клон",
      book: "Chr2 / CP20",
      desc: "Выращивание генетически идентичного безмозглого тела-дубликата из образца тканей клиента в био-чанах корпорации Biotechnica. Используется как идеальный банк донорских органов без риска отторжения или для обратного переноса мозга из кибертела."
    },
    {
      id: "srv-med-psychotherapy",
      name: "Курс киберпсихотерапии и восстановления Эмпатии",
      origName: "Cyberpsychosis Therapy & Empathy Recovery",
      category: "Медицина и Trauma Team",
      cost: "1,000 – 5,000 eb",
      unit: "за неделю терапии",
      book: "CP20 / Chr2",
      desc: "Реабилитационный курс с применением медикаментозной коррекции, брейнданс-сеансов и настройки нейропроцессора. Позволяет снизить полученную Потерю Человечности (ПЧ) от установленных имплантов и вернуть утраченные пункты Эмпатии."
    },
    {
      id: "srv-med-biosculpt-face",
      name: "Косметический биоскульптуринг и смена лица",
      origName: "Cosmetic Biosculpting / Facechange",
      category: "Медицина и Trauma Team",
      cost: "500 – 3,000 eb",
      unit: "за +1 ПРВЛ или смену внешности",
      book: "CP20 / Chr2",
      desc: "Пластическая коррекция черт лица, тона кожи, разреза глаз и формы тела в салоне Bodyshoppe. Позволяет повысить характеристику Привлекательности (ПРВЛ) на +1 за сеанс или полностью изменить внешность для ухода от розыска."
    },

    // =========================================================================
    // 2. ЖИЛЬЁ И НЕДВИЖИМОСТЬ (HOUSING & ACCOMMODATIONS)
    // =========================================================================
    {
      id: "srv-house-coffin",
      name: "Спальная капсула «Гроб» в капсульном отеле",
      origName: "Sleeping Cube / \"Coffin\"",
      category: "Жильё",
      cost: "20 – 40 eb",
      unit: "за ночь",
      book: "CP20",
      desc: "Пластиковый бокс размером 2×1×1 метра в дешёвом придорожном или привокзальном комплексе. Внутри только поролоновый матрас, вентиляционная решётка, розетка и маленький телеэкран на потолке."
    },
    {
      id: "srv-house-hotel-std",
      name: "Гостиничный номер: Стандартный мотель или отель",
      origName: "Standard Hotel / Motel Room",
      category: "Жильё",
      cost: "100 eb",
      unit: "за ночь",
      book: "CP20",
      desc: "Чистый однокомнатный номер в городском отеле среднего класса с душем, кроватью, терминалом DataTerm и базовой охраной на входе."
    },
    {
      id: "srv-house-hotel-lux",
      name: "Гостиничный номер: Люкс / Пентхаус в Корпоративной зоне",
      origName: "Luxury Hotel Suite / Penthouse",
      category: "Жильё",
      cost: "300 – 1,000 eb",
      unit: "за ночь",
      book: "CP20",
      desc: "Роскошные апартаменты в охраняемом отеле высшего класса с пуленепробиваемыми панорамными окнами, вооружённым консьержем, посадочной площадкой для аэродайнов на крыше и защитой от прослушки."
    },
    {
      id: "srv-house-cube-combat",
      name: "Аренда жилого куба в Боевой Зоне",
      origName: "Combat Zone Cube Apartment",
      category: "Жильё",
      cost: "200 eb",
      unit: "в месяц (коммуналка +100 eb)",
      book: "CP20",
      desc: "Тесная бетонная комнатушка 3×4 метра в перенаселённом мегаздании на окраине или в Боевой Зоне. Перебои с водой и электричеством, тонкие стены и стрельба под окнами каждую ночь, но никто не спрашивает паспорт."
    },
    {
      id: "srv-house-apt-mod",
      name: "Аренда двухкомнатной квартиры в Городской зоне",
      origName: "Moderate City Apartment (per room)",
      category: "Жильё",
      cost: "400 eb",
      unit: "в месяц (из расчёта 200 eb за комнату)",
      book: "CP20",
      desc: "Обычная городская квартира в относительно спокойном рабочем или торговом квартале с кодовым замком в подъезде и подземной парковкой."
    },
    {
      id: "srv-house-conapt-corp",
      name: "Аренда охраняемого Конапта в Корпоративном секторе",
      origName: "Corporate Conapt (Executive Zone)",
      category: "Жильё",
      cost: "750 – 1,500 eb",
      unit: "в месяц (из расчёта 300+ eb за комнату)",
      book: "CP20",
      desc: "Престижная квартира в закрытом корпоративном жилом комплексе с круглосуточным постом вооружённой охраны, камерами наблюдения, биометрическим пропуском и климат-контролем."
    },
    {
      id: "srv-house-beaverville",
      name: "Аренда коттеджа в охраняемом пригороде «Бивервилль»",
      origName: "Suburban \"Beaverville\" House Rental",
      category: "Жильё",
      cost: "2,500 eb",
      unit: "в месяц",
      book: "NC",
      desc: "Двухэтажный семейный дом с синтетическим зелёным газоном и гаражом за бетонным периметром корпоративного пригорода, патрулируемого частной полицией и дронами."
    },
    {
      id: "srv-house-utilities",
      name: "Коммунальные платежи (Электричество, вода, фильтрация воздуха)",
      origName: "Monthly Utilities",
      category: "Жильё",
      cost: "100 eb",
      unit: "в месяц",
      book: "CP20",
      desc: "Обязательный ежемесячный счёт за подачу электроэнергии, технической воды и работу оконных воздушных фильтров от кислотного смога."
    },

    // =========================================================================
    // 3. ПИТАНИЕ И ОБРАЗ ЖИЗНИ (FOOD & LIFESTYLE)
    // =========================================================================
    {
      id: "srv-food-kibble",
      name: "Рацион питания: Корм «Киббл» на неделю",
      origName: "Kibble Diet (1 Week)",
      category: "Образ жизни",
      cost: "50 eb",
      unit: "в неделю (200 eb в месяц)",
      book: "CP20",
      desc: "Самая дешёвая основа выживания бедняков Найт-Сити: сухие гранулированные подушечки из соевого белка, водорослей и витаминных добавок, по виду и вкусу напоминающие собачий корм (доступны вкусы «Сыр», «Бекон» и «Курица»)."
    },
    {
      id: "srv-food-generic-prepack",
      name: "Рацион питания: Стандартные препаки на неделю",
      origName: "Generic Prepack Food (1 Week)",
      category: "Образ жизни",
      cost: "150 eb",
      unit: "в неделю (600 eb в месяц)",
      book: "CP20",
      desc: "Готовые замороженные или вакуумированные обеды в пластиковых лотках из синтетического мяса (скоп), соевой лапши и текстурированных овощей для разогрева в микроволновке."
    },
    {
      id: "srv-food-good-prepack",
      name: "Рацион питания: Качественные ресторанные препаки",
      origName: "Good Prepack / Bistro Meals (1 Week)",
      category: "Образ жизни",
      cost: "200 eb",
      unit: "в неделю (800 eb в месяц)",
      book: "CP20",
      desc: "Сбалансированное питание корпоративного среднего класса: качественно приготовленный ванильный скоп, гидропонная зелень, настоящие специи и синтетическое вино."
    },
    {
      id: "srv-food-fresh",
      name: "Рацион питания: Натуральная свежая еда",
      origName: "Fresh / Real Food (1 Week)",
      category: "Образ жизни",
      cost: "300 eb",
      unit: "в неделю (1,200 eb в месяц)",
      book: "CP20",
      desc: "Предмет роскоши в 2020 году: настоящее фермерское мясо, свежая океаническая рыба, натуральные фрукты, зерновой кофе и чистая родниковая вода."
    },
    {
      id: "srv-food-restaurant-dinner",
      name: "Ужин в хорошем ресторане (На одного человека)",
      origName: "Fine Restaurant Meal",
      category: "Образ жизни",
      cost: "50 – 200 eb",
      unit: "за визит",
      book: "CP20",
      desc: "Полноценный вечерний ужин с обслуживанием, живой музыкой и охраной в престижном заведении центра города."
    },
    {
      id: "srv-food-bar-drink",
      name: "Порция алкоголя или синт-пива в уличном баре",
      origName: "Bar Drink / Smash / Synth-Beer",
      category: "Образ жизни",
      cost: "3 – 10 eb",
      unit: "за стакан / банку",
      book: "CP20",
      desc: "Банка пенного алкогольного напитка «Smash», кружка синтетического лагера или шот дешёвого синтетического виски в клубе для наёмников."
    },

    // =========================================================================
    // 4. СВЯЗЬ, ИНФОРМАЦИЯ И СЕТЬ (COMMUNICATIONS & NET)
    // =========================================================================
    {
      id: "srv-comm-landline",
      name: "Абонентская плата за проводной видеотелефон",
      origName: "Standard Cred-Phone / Vidphone Line",
      category: "Связь",
      cost: "30 eb",
      unit: "в месяц",
      book: "CP20",
      desc: "Домашняя или офисная линия городской телефонной и видеосвязи."
    },
    {
      id: "srv-comm-cellular",
      name: "Тариф мобильной сотовой связи",
      origName: "Cellular Phone Service Plan",
      category: "Связь",
      cost: "100 eb",
      unit: "в месяц",
      book: "CP20",
      desc: "Ежемесячное обслуживание сотового телефона или встроенного в кибераудио сотового импланта с безлимитными звонками в пределах мегаполиса."
    },
    {
      id: "srv-comm-net-access",
      name: "Легальный аккаунт доступа к матрице Сети",
      origName: "Legal NET Access Account",
      category: "Связь",
      cost: "30 eb",
      unit: "в месяц (+ поминутная оплата LDL)",
      book: "CP20",
      desc: "Официальный пользовательский идентификатор для легального входа в городскую информационную сеть, отправки электронной почты и посещения открытых виртуальных моллов."
    },
    {
      id: "srv-comm-dataterm-news",
      name: "Информационная сводка и распечатка с терминала DataTerm",
      origName: "DataTerm Newsfax / Map Printout",
      category: "Связь",
      cost: "1 – 5 eb",
      unit: "за запрос / лист",
      book: "CP20",
      desc: "Получение свежей газетной сводки (Newsfax), подробной карты района, расписания транспорта или справочной информации из открытых баз данных через уличный терминал DataTerm."
    },
    {
      id: "srv-comm-DHL-courier",
      name: "Экспресс-доставка посылки курьерской службой DHL / Федерал",
      origName: "Express Courier Delivery (City / International)",
      category: "Связь",
      cost: "20 – 150 eb",
      unit: "за отправление",
      book: "CP20",
      desc: "Быстрая доставка документов или малогабаритного груза по городу за 2 часа (20 eb) или межконтинентальная доставка суборбитальным бортом за 24 часа (150 eb)."
    },

    // =========================================================================
    // 5. ТРАНСПОРТ, ТАКСИ И ЛОГИСТИКА (TRANSPORT & LOGISTICS)
    // =========================================================================
    {
      id: "srv-trans-ncart",
      name: "Проезд на метро и монорельсе NCART",
      origName: "NCART Subway / Maglev Ride",
      category: "Транспорт и Логистика",
      cost: "2 eb (или 50 eb проездной на месяц)",
      unit: "за поездку",
      book: "NC",
      desc: "Поездка в вагоне городской подземки или подвесного монорельса Найт-Сити. Дешево и быстро, но в ночные часы в вагонах нередко орудуют банды."
    },
    {
      id: "srv-trans-cab-std",
      name: "Городское такси (Обычный таксомотор)",
      origName: "Standard City Taxi Fare",
      category: "Транспорт и Логистика",
      cost: "3 eb",
      unit: "за милю (плюс 5 eb посадка)",
      book: "CP20 / NC",
      desc: "Поездка в стандартном городском такси с пуленепробиваемой перегородкой между водителем и пассажирским сиденьем. Обычные таксисты отказываются въезжать в Боевую Зону."
    },
    {
      id: "srv-trans-combat-cab",
      name: "Бронированное такси Red Cab (Выезд в Боевую Зону)",
      origName: "Red Cab / Combat Cabb Armored Taxi",
      category: "Транспорт и Логистика",
      cost: "10 eb",
      unit: "за милю (в Боевой Зоне — 25 eb/миля)",
      book: "NC",
      desc: "Тяжелобронированное такси с пулемётной турелью на крыше и водителем-ветераном. Единственная служба такси, соглашающаяся забирать пассажиров прямо из-под обстрела в Боевой Зоне."
    },
    {
      id: "srv-trans-av-taxi",
      name: "Аэротакси (Чартерный перелёт на аэродайне AV-4)",
      origName: "AV-Taxi Executive Charter",
      category: "Транспорт и Логистика",
      cost: "100 – 250 eb",
      unit: "за перелёт по городу",
      book: "NC",
      desc: "Быстрый и безопасный перелёт над городскими пробками и уличными бандами с крыши одного небоскрёба на другой на пассажирском аэродайне."
    },
    {
      id: "srv-trans-chooh2",
      name: "Заправка топливом CHOOH2 (ЧУХ-2)",
      origName: "CHOOH2 Fuel (1 Gallon / Liter)",
      category: "Транспорт и Логистика",
      cost: "1d6/3 + 1 eb (в среднем 2–3 eb)",
      unit: "за галлон (3.8 литра)",
      book: "CP20",
      desc: "Синтетическое спиртовое биотопливо для всех автомобилей, мотоциклов и генераторов. Из-за спекуляций корпораций Petrochem и SovOil цены на заправках меняются почти ежедневно."
    },
    {
      id: "srv-trans-car-rental",
      name: "Прокат гражданского автомобиля",
      origName: "Standard Car Rental",
      category: "Транспорт и Логистика",
      cost: "60 – 120 eb",
      unit: "в сутки (плюс залог на кредчипе)",
      book: "CP20",
      desc: "Аренда неприметного городского седана или фургона без водителя."
    },
    {
      id: "srv-trans-orbital-shuttle",
      name: "Билет на орбитальный шаттл компании Orbital Air",
      origName: "Orbital Air Passenger Shuttle Ticket (LEO)",
      category: "Транспорт и Логистика",
      cost: "5,000 eb",
      unit: "в один конец (Земля — Низкая орбита)",
      book: "DS / CP20",
      desc: "Пассажирский перелёт из космопорта на борт орбитального комплекса «Хрустальный Дворец» или транзитной станции."
    },

    // =========================================================================
    // 6. НАЁМНИКИ, ОХРАНА И СПЕЦОТРЯДЫ (MERCENARIES & SECURITY)
    // =========================================================================
    {
      id: "srv-merc-street-gang",
      name: "Наём уличной банды бустеров (Для массовки или налёта)",
      origName: "Hire Street Gang Boosters (per member)",
      category: "Наёмники и Спецотряды",
      cost: "50 – 100 eb",
      unit: "в сутки на бойца",
      book: "WS",
      desc: "Привлечение рядовых уличных панков для отвлекающего манёвра, погрома, охраны склада или запугивания конкурентов. Дешево, шумно и крайне ненадёжно при появлении серьёзного противника."
    },
    {
      id: "srv-merc-bodyguard-std",
      name: "Наём личного телохранителя или охранника (Соло среднего уровня)",
      origName: "Professional Bodyguard / Solo Hire",
      category: "Наёмники и Спецотряды",
      cost: "200 – 500 eb",
      unit: "в сутки",
      book: "SOF / WS",
      desc: "Контракт с профессиональным лицензированным телохранителем или уличным Соло (Чувство Боя 4–6) для сопровождения на сделке или охраны объекта."
    },
    {
      id: "srv-merc-arasaka-guard",
      name: "Контракт стационарной охраны объекта корпорацией Arasaka",
      origName: "Arasaka Facility Security Contract (per guard)",
      category: "Наёмники и Спецотряды",
      cost: "3,000 eb",
      unit: "в месяц за 1 бойца Arasaka",
      book: "Corp1",
      desc: "Официальный наём экипированных охранников Arasaka в фирменной броне с ПП Minami 10 для круглосуточной защиты офиса, лаборатории или особняка."
    },
    {
      id: "srv-merc-lazarus-grunt",
      name: "Контракт ЧВК Lazarus: Пехотинец регулярных частей",
      origName: "Lazarus Military Group Basic Soldier",
      category: "Наёмники и Спецотряды",
      cost: "2,500 eb",
      unit: "в месяц",
      book: "Corp2",
      desc: "Аренда обученного пехотинца со штатной штурмовой винтовкой и бронёй от частной военной компании Lazarus для участия в локальных боевых действиях."
    },
    {
      id: "srv-merc-lazarus-advisor",
      name: "Контракт ЧВК Lazarus: Военный советник или офицер спецназа",
      origName: "Lazarus Military Advisor / SpecOps Operative",
      category: "Наёмники и Спецотряды",
      cost: "5,000 – 10,000 eb",
      unit: "в месяц (или от 500 eb в час при разовой акции)",
      book: "Corp2",
      desc: "Привлечение ветерана спецопераций ЧВК Lazarus для планирования штурма, обучения личной гвардии или ликвидации особо опасной цели."
    },
    {
      id: "srv-merc-netrunner-freelance",
      name: "Услуги наёмного Нетраннера (Взлом системы или поиск данных)",
      origName: "Freelance Netrunner Run",
      category: "Наёмники и Спецотряды",
      cost: "500 – 5,000 eb",
      unit: "за сетевой рейд (в зависимости от сложности крепости данных)",
      book: "WS / NET",
      desc: "Оплата удалённого взлома корпоративной базы данных, отключения камер и турелей здания перед штурмом или стирания криминального досье."
    },

    // =========================================================================
    // 7. ЧЁРНЫЙ РЫНОК И УСЛУГИ ФИКСЕРОВ (BLACK MARKET & FIXER SERVICES)
    // =========================================================================
    {
      id: "srv-blk-fake-id-low",
      name: "Фальшивое удостоверение личности: Уличный уровень (SIN / Права)",
      origName: "Fake ID / Credchip (Street Grade)",
      category: "Чёрный рынок",
      cost: "300 – 500 eb",
      unit: "за комплект документов",
      book: "WS",
      desc: "Поддельная идентификационная карта и водительские права, способные пройти поверхностную визуальную проверку патрульного или вышибалы (надёжность 65%, вскрывается при глубоком запросе в базу NCPD)."
    },
    {
      id: "srv-blk-fake-id-high",
      name: "Чистый «Легендированный» паспорт и Кредчип (Высшее качество)",
      origName: "High-Grade Registered Fake Identity & Credchip",
      category: "Чёрный рынок",
      cost: "2,000 – 10,000 eb",
      unit: "за полную новую личность",
      book: "WS",
      desc: "Новая личность, проведённая хакерами Фиксера напрямую через государственные, налоговые и банковские реестры (надёжность 95%). Включает чистый привязанный кредчип, кредитную историю и биометрическую прописку."
    },
    {
      id: "srv-blk-cred-launder",
      name: "Обналичивание и взлом краденого кредчипа",
      origName: "Stolen Credchip Cracking & Laundering",
      category: "Чёрный рынок",
      cost: "25% – 50% от суммы на чипе",
      unit: "комиссия Фиксера и Нетраннера",
      book: "WS",
      desc: "Снятие биометрической блокировки с трофейного кредчипа и отмывание денег через цепочку подставных офшорных счетов."
    },
    {
      id: "srv-blk-chop-shop",
      name: "Перебивка номеров и перекраска угнанного транспорта",
      origName: "Vehicle Chop-Shop Re-Tagging & Respray",
      category: "Чёрный рынок",
      cost: "10% – 20% от стоимости машины",
      unit: "за транспортное средство",
      book: "WS / NeoTribes",
      desc: "Полная замена радиомаячков, перепрошивка бортового транспондера, перебивка VIN-кодов рамы и перекраска угнанного автомобиля или аэродайна в подпольном гараже."
    },
    {
      id: "srv-blk-safehouse",
      name: "Аренда конспиративной квартиры «Дно» (Safehouse)",
      origName: "Fixer Safehouse Rental",
      category: "Чёрный рынок",
      cost: "150 – 400 eb",
      unit: "в сутки",
      book: "WS",
      desc: "Тщательно скрытое убежище без регистрации жильцов с запасом патронов, медикаментов, экранированными от пеленгации стенами и запасным выходом через канализацию или соседний квартал."
    },
    {
      id: "srv-blk-info-broker",
      name: "Покупка досье и разведданных у Информационного брокера",
      origName: "Information Broker Dossier / Floorplans",
      category: "Чёрный рынок",
      cost: "100 – 2,500 eb",
      unit: "за пакет информации",
      book: "WS",
      desc: "Приобретение поэтажных планов охраняемого здания, графика смены караулов, маршрута кортежа корпората или компромата на нужного чиновника."
    },
    {
      id: "srv-blk-disposal",
      name: "Услуги «Чистильщиков» (Утилизация улик и тел)",
      origName: "Crime Scene Cleanup & Body Disposal",
      category: "Чёрный рынок",
      cost: "500 eb",
      unit: "за 1 тело / зачистку помещения",
      book: "WS",
      desc: "Вызов ночной бригады для бесследного удаления тел (через крематории или подпольные Банки Тел), смыва следов крови, гильз и ДНК с места перестрелки до приезда полиции."
    },

    // =========================================================================
    // 8. РАЗВЛЕЧЕНИЯ И ДОСУГ (ENTERTAINMENT & RECREATION)
    // =========================================================================
    {
      id: "srv-ent-braindance-arcade",
      name: "Сеанс в салоне Брейнданса (Braindance Arcade)",
      origName: "Braindance Arcade Session",
      category: "Развлечения и Досуг",
      cost: "10 – 50 eb",
      unit: "за час погружения",
      book: "CP20",
      desc: "Аренда кресла в общественном брейнданс-салоне для просмотра остросюжетных боевиков, эротических или приключенческих записей от первого лица."
    },
    {
      id: "srv-ent-nightclub-vip",
      name: "Входной билет в элитный ночной клуб или концерт Рокербоя",
      origName: "Nightclub Cover Charge / Concert Ticket",
      category: "Развлечения и Досуг",
      cost: "20 – 100 eb",
      unit: "за вход",
      book: "CP20 / NC",
      desc: "Проход через фейсконтроль в модные заведения Найт-Сити («Атлантис», «Послежизнь», «Тотентанц» и др.), где заключаются главные теневые сделки между Фиксерами и наёмниками."
    }
  ];

  SERVICES_PACK_1.forEach(newItem => {
    const exists = extDb.services.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase())
    );
    if (!exists) {
      extDb.services.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ УСЛУГ В DATABASE.JS (РАЗДЕЛЬНЫЕ КАРТОЧКИ ТАРИФОВ И УСЛУГ)
// Пакет №2: Закон и взятки, Техобслуживание, Кочевники, Медиа и Финансы
// ============================================================================
(function appendServicesPack2() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.services)) extDb.services = [];
  if (!Array.isArray(extCats.services)) extCats.services = [];

  const serviceCategories2 = [
    "Медицина и Trauma Team",
    "Жильё",
    "Образ жизни",
    "Связь",
    "Транспорт и Логистика",
    "Наёмники и Спецотряды",
    "Чёрный рынок",
    "Юридические услуги и Закон",
    "Техническое обслуживание и Ремонт",
    "Развлечения и Досуг"
  ];
  serviceCategories2.forEach(c => {
    if (!extCats.services.includes(c)) extCats.services.push(c);
  });

  const SERVICES_PACK_2 = [
    // =========================================================================
    // 1. МЕДИЦИНА, ИМПЛАНТАЦИЯ И РЕАБИЛИТАЦИЯ (ДОПОЛНЕНИЯ CHROMEBOOK & EURO)
    // =========================================================================
    {
      id: "srv-med-trauma-taxi",
      name: "Разовый вызов эвакуации Trauma Team без подписки",
      origName: "Trauma Team Single Extraction Fee",
      category: "Медицина и Trauma Team",
      cost: "1,000 eb (+100 eb за минуту боя)",
      unit: "за вызов",
      book: "CP20",
      desc: "Экстренный вызов борта AV-4 для человека без оформленного ежемесячного полиса (или по просьбе третьего лица с гарантией оплаты на кредчипе). Базовая подача борта стоит 1,000 eb, плюс поминутная тарификация огневого контакта, потраченные боеприпасы и стоимость реанимации."
    },
    {
      id: "srv-med-cyber-tuneup",
      name: "Плановое техобслуживание киберимплантов в клинике",
      origName: "Biannual Cyberware Maintenance & Calibration",
      category: "Медицина и Trauma Team",
      cost: "200 – 500 eb",
      unit: "раз в 6 месяцев",
      book: "Chr2 / SOF",
      desc: "Профилактическая чистка контактов, замена смазки сервоприводов, обновление прошивки нейропроцессора и проверка изоляции миомеров. Предотвращает случайные сбои имплантов в бою и снижает риск отторжения."
    },
    {
      id: "srv-med-fbc-swap",
      name: "Перестановка биокапсулы полного киборга в другое шасси",
      origName: "Full-Body Cyborg Biopod Chassis Transfer",
      category: "Медицина и Trauma Team",
      cost: "1,000 eb",
      unit: "за процедуру (занимает 2 часа)",
      book: "Chr2",
      desc: "Технико-медицинская операция в специализированном центре IEC или Militech по извлечению мозговой биокапсулы (Biopod) из боевого корпуса (например, Dragoon или Enforcer) и подключению её в гражданское тело Gemini."
    },
    {
      id: "srv-med-scandinavian-clinic",
      name: "Элитная киберпсихотерапия в клинике Скандинавии",
      origName: "Scandinavian Cyberpsychosis Rehabilitation Clinic",
      category: "Медицина и Trauma Team",
      cost: "10,000 eb",
      unit: "за месячный курс",
      book: "ES+ / Chr2",
      desc: "Лучшие в мире закрытые реабилитационные санатории Швеции и Норвегии для граничащих с киберпсихозом Соло и корпоратов. Позволяют восстановить до 2 пунктов утраченной Эмпатии в месяц под наблюдением ведущих нейропсихологов Европы."
    },
    {
      id: "srv-med-detox",
      name: "Наркологическая детоксикация и снятие зависимости",
      origName: "Addiction Detox & Flush Therapy",
      category: "Медицина и Trauma Team",
      cost: "1,200 eb",
      unit: "за 3-дневный курс",
      book: "CP20 / WS",
      desc: "Полная аппаратная очистка крови (гемосорбция) и блокировка нейрорецепторов зависимости от синтетических наркотиков (Synth-Coke, Black Lace, Dorph). Снимает физическую ломку за 72 часа."
    },
    {
      id: "srv-med-nanite-regen",
      name: "Сеанс ускоренной регенерации медицинскими нанитами",
      origName: "Medical Nanite Tissue Reconstruction",
      category: "Медицина и Trauma Team",
      cost: "1,500 eb",
      unit: "за инъекцию курса",
      book: "Chr2",
      desc: "Введение одноразовой колонии программируемых хирургических микророботов, которые в течение 48 часов сшивают микроразрывы тканей и сосудов изнутри, восстанавливая дополнительно по +2 ОСТ в сутки."
    },

    // =========================================================================
    // 2. ЮРИДИЧЕСКИЕ УСЛУГИ, ПОЛИЦИЯ И ЗАКОН (PROTECT & SERVE / WILDSIDE)
    // =========================================================================
    {
      id: "srv-law-street-lawyer",
      name: "Услуги уличного адвоката по уголовным делам",
      origName: "Street Criminal Defense Attorney",
      category: "Юридические услуги и Закон",
      cost: "150 eb",
      unit: "в час (или от 1,000 eb за дело)",
      book: "PAC / WS",
      desc: "Прожжённый юрист Найт-Сити, знающий все лазейки в муниципальном кодексе и нужных людей в суде. Поможет выйти под залог, развалить дело за недостатком улик или переквалифицировать вооружённый налёт в «превышение самообороны»."
    },
    {
      id: "srv-law-corp-firm",
      name: "Представительство элитной корпоративной юридической фирмы",
      origName: "Corporate Law Firm Retainer",
      category: "Юридические услуги и Закон",
      cost: "500 – 1,500 eb",
      unit: "в час (абонентский договор от 5,000 eb/мес)",
      book: "WS / Corp1",
      desc: "Команда высокооплачиваемых корпоративных «акул права», способная заморозить ордер на арест, оформить дипломатический или корпоративный иммунитет и засудить департамент полиции за неправомерное задержание клиента."
    },
    {
      id: "srv-law-gun-permit-ccw",
      name: "Официальная лицензия на скрытое ношение оружия",
      origName: "Concealed Carry Weapon Permit (CCW)",
      category: "Юридические услуги и Закон",
      cost: "150 eb",
      unit: "в год (требует чистой анкеты в NCPD)",
      book: "PAC",
      desc: "Легальное разрешение муниципального департамента полиции на скрытое ношение пистолетов в черте города (не распространяется на автоматическое оружие, гранатомёты и бронебойные боеприпасы)."
    },
    {
      id: "srv-law-class3-permit",
      name: "Спецразрешение на автоматическое и тяжёлое вооружение (Класс III)",
      origName: "Class III Heavy / Automatic Weapons License",
      category: "Юридические услуги и Закон",
      cost: "1,000 eb",
      unit: "в год",
      book: "PAC",
      desc: "Государственная лицензия для сотрудников ЧВК, инкассаторов и лицензированных телохранителей, дающая право легально носить в городе пистолеты-пулемёты и штурмовые винтовки."
    },
    {
      id: "srv-law-pi-license",
      name: "Лицензия частного детектива или охранного агента",
      origName: "Private Investigator / Security Operative License",
      category: "Юридические услуги и Закон",
      cost: "350 eb",
      unit: "в год",
      book: "PAC",
      desc: "Официальное удостоверение частного сыщика, позволяющее легально вести наружное наблюдение, запрашивать базовые выписки из городских архивов и проходить за полицейское оцепление с разрешения дежурного детектива."
    },
    {
      id: "srv-law-bail-bonds",
      name: "Услуги поручителя по судебному залогу",
      origName: "Bail Bondsman Service",
      category: "Юридические услуги и Закон",
      cost: "10% от суммы назначенного судом залога",
      unit: "невозвратная комиссия поручителя",
      book: "PAC / WS",
      desc: "Агентство вносит полную сумму залога за арестованного эджраннера в казну суда за комиссию в 10%, позволяя выйти из камеры предварительного заключения на свободу до суда (при попытке сбежать из города поручитель нанимает охотников за головами)."
    },
    {
      id: "srv-law-bribe-patrol",
      name: "Взятка уличному патрульному (Закрыть глаза на мелкое нарушение)",
      origName: "Beat Cop Street Bribe",
      category: "Юридические услуги и Закон",
      cost: "50 – 200 eb",
      unit: "на месте",
      book: "PAC / WS",
      desc: "Негласный «штраф на месте» наличными или переводом на анонимный чип, позволяющий избежать обыска машины, проверки документов или ареста за незаконный ствол под курткой (требуется проверка Уличной сделки или Убеждения)."
    },
    {
      id: "srv-law-bribe-detective",
      name: "Подкуп следствия: Потеря улик или закрытие уголовного дела",
      origName: "Police Detective / Evidence Room Bribe",
      category: "Юридические услуги и Закон",
      cost: "2,000 – 10,000 eb",
      unit: "за эпизод (зависит от тяжести статьи)",
      book: "PAC / WS",
      desc: "Коррупционная сделка через Фиксера с нечистым на руку детективом NCPD или техником криминалистической лаборатории: изъятый на месте перестрелки пистолет или гильзы «случайно портятся», а свидетели путаются в показаниях."
    },
    {
      id: "srv-law-ncpd-wipe",
      name: "Полная очистка криминального досье в базе данных NCPD",
      origName: "NCPD Criminal Record Expungement / Wipe",
      category: "Юридические услуги и Закон",
      cost: "5,000 – 15,000 eb",
      unit: "за досье",
      book: "WS / PAC",
      desc: "Удаление информации о розыске, отпечатках пальцев, сетчатке и судимостях из центрального мейнфрейма городской полиции силами инсайдера или элитного нетраннера."
    },

    // =========================================================================
    // 3. ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ, ОРУЖЕЙНИКИ И ГАРАЖИ (TECH & GARAGES)
    // =========================================================================
    {
      id: "srv-tech-mechanic-hour",
      name: "Работа квалифицированного Техника или Автомеханика",
      origName: "Certified Techie / Mechanic Labor Rate",
      category: "Техническое обслуживание и Ремонт",
      cost: "50 – 100 eb",
      unit: "в час (плюс стоимость запчастей)",
      book: "CP20 / MM",
      desc: "Почасовая ставка наёмного специалиста в мастерской за ремонт повреждённого транспорта (восстановление ОСТ корпуса), починку снаряжения или сборку электроники."
    },
    {
      id: "srv-tech-weaponsmith-mod",
      name: "Услуги Оружейника: Кастомная доводка и повышение точности оружия",
      origName: "Custom Weaponsmith Accurizing (+1 WA)",
      category: "Техническое обслуживание и Ремонт",
      cost: "50% – 100% от базовой цены оружия",
      unit: "за единицу оружия",
      book: "BSW / SOF",
      desc: "Ручная полировка ударно-спускового механизма, вывешивание ствола, подгонка зазоров и балансировка оружия под руку конкретного стрелка в оружейной мастерской."
    },
    {
      id: "srv-tech-armor-repair",
      name: "Ремонт и восстановление повреждённой брони в мастерской",
      origName: "Professional Armor Restoration Service",
      category: "Техническое обслуживание и Ремонт",
      cost: "10% от цены брони за каждые 2 восстановленных ОС",
      unit: "за предмет брони",
      book: "CP20 / FS",
      desc: "Замена пробитых кевларовых пакетов, заваривание трещин в композитных пластинах MetalGear и восстановление заводского показателя Останавливающей Способности (ОС)."
    },
    {
      id: "srv-tech-garage-box",
      name: "Аренда закрытого гаражного бокса с подъёмником и инструментом",
      origName: "Private Workshop / Garage Bay Rental",
      category: "Техническое обслуживание и Ремонт",
      cost: "350 eb",
      unit: "в месяц (или 30 eb в сутки)",
      book: "MM / NC",
      desc: "Собственный бокс в промышленной зоне с гидравлическим подъёмником, сварочным аппаратом и верстаком для скрытного хранения и модернизации боевого транспорта."
    },
    {
      id: "srv-tech-storage-locker",
      name: "Аренда анонимного бронированного сейфа-ячейки на складе",
      origName: "Anonymous Secure Storage Locker",
      category: "Техническое обслуживание и Ремонт",
      cost: "100 eb",
      unit: "в месяц",
      book: "WS",
      desc: "Контейнер или оружейная ячейка с цифровым кодовым замком на круглосуточно охраняемом терминале без камер внутри бокса. Идеальное место для хранения гранатомётов, взрывчатки и «горячего» снаряжения между миссиями."
    },
    {
      id: "srv-tech-av-hangar",
      name: "Аренда посадочного слота и ангара для аэродайна",
      origName: "Aerodyne (AV) Rooftop Pad & Hangar Space",
      category: "Техническое обслуживание и Ремонт",
      cost: "800 eb",
      unit: "в месяц",
      book: "MM / NC",
      desc: "Охраняемая стоянка с заправкой авиационным CHOOH2 и предполетным техосмотром турбин для владельцев личных аэродайнов и вертолётов."
    },

    // =========================================================================
    // 4. ТРАНСПОРТ, КОЧЕВНИКИ И КОНТРАБАНДА (NEOTRIBES & EUROSOURCE)
    // =========================================================================
    {
      id: "srv-trans-nomad-convoy",
      name: "Место в вооружённом караване Кочевников между городами",
      origName: "Nomad Armed Convoy Passage",
      category: "Транспорт и Логистика",
      cost: "150 – 300 eb",
      unit: "за маршрут (плюс отработка в дозоре)",
      book: "NeoTribes",
      desc: "Самый надёжный способ пересечь опасные междугородние трассы и Пустоши без проверок на корпоративных и федеральных блокпостах. Кочевники обеспечивают огневое прикрытие колонны и провозят пассажиров по глухим обходным дорогам."
    },
    {
      id: "srv-trans-smuggle-border",
      name: "Нелегальный провоз человека или груза через границу штата/страны",
      origName: "Contraband / Border Smuggling Run",
      category: "Транспорт и Логистика",
      cost: "500 – 3,000 eb",
      unit: "за человека или ящик груза",
      book: "NeoTribes / WS",
      desc: "Услуга контрабандистов (кланы кочевников, морские пираты или пилоты низколетящих грузовиков) по скрытной переброске разыскиваемых лиц или запрещённого военного снаряжения в обход таможни."
    },
    {
      id: "srv-trans-suborbital-flight",
      name: "Суборбитальный межконтинентальный авиаперелёт (Нью-Йорк — Токио)",
      origName: "Sub-Orbital Commercial Flight",
      category: "Транспорт и Логистика",
      cost: "1,200 eb (бизнес-класс — 2,500 eb)",
      unit: "в один конец",
      book: "CP20 / ES+",
      desc: "Сверхзвуковой перелёт по баллистической траектории на границе космоса. Позволяет добраться из Северной Америки в Европу или Японию менее чем за 2 часа (требует прохождения жёсткого таможенного и оружейного сканирования)."
    },
    {
      id: "srv-trans-dirigible",
      name: "Каюта на трансатлантическом грузопассажирском дирижабле",
      origName: "Transatlantic Cargo Airship Cabin",
      category: "Транспорт и Логистика",
      cost: "350 eb",
      unit: "в один конец (3–4 суток в пути)",
      book: "ES+",
      desc: "Неторопливый, дешёвый и относительно спокойный способ перебраться через океан вместе с крупногабаритным багажом или мотоциклом при минимальном досмотре."
    },
    {
      id: "srv-trans-euro-tgv",
      name: "Билет на скоростной бронепоезд на магнитной подушке (Евротур / Маглев)",
      origName: "High-Speed Maglev / Euro-TGV Ticket",
      category: "Транспорт и Логистика",
      cost: "120 – 250 eb",
      unit: "за межгородской переезд",
      book: "ES+",
      desc: "Комфортабельное путешествие между мегаполисами со скоростью 450 км/ч в герметичном бронированном составе с вагоном-рестораном и охраной."
    },

    // =========================================================================
    // 5. НАЁМНИКИ, СПЕЦСПЕЦИАЛИСТЫ И ТЕНЕВЫЕ ОПЕРАЦИИ (WILDSIDE / SOF)
    // =========================================================================
    {
      id: "srv-merc-solo-elite",
      name: "Контракт элитного Соло-ветерана (Высокий ранг)",
      origName: "Top-Tier Veteran Solo Contract",
      category: "Наёмники и Спецотряды",
      cost: "1,000 – 2,500 eb",
      unit: "в сутки (плюс боевые премиальные)",
      book: "SOF / WS",
      desc: "Привлечение прославленного профессионала с Чувством Боя 8–9, полным комплектом военного хрома, ускорителем Sandevistan и собственным арсеналом для выполнения самоубийственных миссий."
    },
    {
      id: "srv-merc-hitman",
      name: "Заказная ликвидация цели («Мокрое дело»)",
      origName: "Professional Assassination Contract",
      category: "Наёмники и Спецотряды",
      cost: "5,000 – 50,000+ eb",
      unit: "за подтверждённую цель",
      book: "WS / SOF",
      desc: "Закрытый контракт через высокоуровневого Фиксера на устранение конкретного человека: от рядового стукача или лидера уличной банды (5,000 eb) до охраняемого топ-менеджера мегакорпорации или политика (от 50,000 eb и выше)."
    },
    {
      id: "srv-merc-private-eye",
      name: "Наём частного сыщика (Слежка, поиск пропавших и сбор улик)",
      origName: "Private Detective Investigation",
      category: "Наёмники и Спецотряды",
      cost: "200 eb",
      unit: "в сутки (плюс накладные расходы)",
      book: "PAC / WS",
      desc: "Скрытое наружное наблюдение за объектом, фотофиксация встреч, пробив телефонных звонков и розыск скрывающихся должников в городских трущобах."
    },
    {
      id: "srv-merc-getaway-driver",
      name: "Наём профессионального водителя или пилота на отход",
      origName: "Wheelman / Getaway Pilot Hire",
      category: "Наёмники и Спецотряды",
      cost: "300 – 800 eb",
      unit: "за операцию (или 10% доли от куша)",
      book: "NeoTribes / WS",
      desc: "Опытный водитель-кочевник или пилот со своим форсированным автомобилем/аэродайном и нейроконнектором управления, который будет ждать команду у чёрного хода с заведённым мотором и оторвётся от любой полицейской погони."
    },
    {
      id: "srv-merc-medtech-standby",
      name: "Дежурство полевого Медтехника на операции",
      origName: "Field Medtech On-Call Retainer",
      category: "Наёмники и Спецотряды",
      cost: "300 – 600 eb",
      unit: "за выезд (плюс расходуемые препараты)",
      book: "WS",
      desc: "Подпольный хирург с полным набором инструментов, дефибриллятором и криомешком, дежурящий в фургоне отхода или на конспиративной квартире для немедленной откачки раненых бойцов группы."
    },

    // =========================================================================
    // 6. ЧЁРНЫЙ РЫНОК, ПОДДЕЛКИ И МЕДИА-ОПЕРАЦИИ (WILDSIDE / LIVE & DIRECT)
    // =========================================================================
    {
      id: "srv-blk-corp-pass",
      name: "Поддельный пропуск-бейдж сотрудника мегакорпорации",
      origName: "Forged Corporate Security Passbadge",
      category: "Чёрный рынок",
      cost: "500 – 2,500 eb",
      unit: "за пропуск (зависит от уровня допуска)",
      book: "WS",
      desc: "Клонированная магнитно-оптическая карта сотрудника с голограммой для прохода через турникеты первых этажей корпоративного здания (работает до первой смены суточных ключей безопасности)."
    },
    {
      id: "srv-blk-fence-fee",
      name: "Сбыт краденого имущества и трофейного оружия через Скупщика",
      origName: "Fixer Fencing Stolen Goods",
      category: "Чёрный рынок",
      cost: "Игрок получает от 30% до 60% рыночной цены",
      unit: "процент от стоимости товара",
      book: "WS",
      desc: "Быстрая продажа снятого с врагов оружия, брони, техники или угнанных машин без лишних вопросов. Итоговый процент зависит от броска Уличной сделки (Streetdeal) и «горячести» товара."
    },
    {
      id: "srv-blk-dna-spoof",
      name: "Био-маскировка ДНК и папиллярного узора на 24 часа",
      origName: "Temporary DNA & Fingerprint Masking Treatment",
      category: "Чёрный рынок",
      cost: "800 eb",
      unit: "за процедуру перед миссией",
      book: "Chr2 / WS",
      desc: "Нанесение полимерного микрослоя на подушечки пальцев и обработка кожи и волос нейтрализатором слущивания эпителия + спреем с чужим синтетическим генетическим маркером, сбивающим с толку полицейских криминалистов."
    },
    {
      id: "srv-blk-media-leak",
      name: "Заказной слив компромата или информационный вброс через Медиа",
      origName: "Media Scandal Leak / PR Hit-Piece",
      category: "Чёрный рынок",
      cost: "1,000 – 10,000 eb",
      unit: "за репортаж в прайм-тайм",
      book: "LD (Live & Direct)",
      desc: "Организация громкого разоблачительного сюжета по городским телеканалам и лентам новостей для обрушения акций корпоративного отдела, дискредитации чиновника или отвлечения общественного внимания."
    },
    {
      id: "srv-blk-witness-reloc",
      name: "Полная эвакуация из города и программа «Стирания следов»",
      origName: "Underground Witness / Edgerunner Relocation Package",
      category: "Чёрный рынок",
      cost: "15,000 – 30,000 eb",
      unit: "за человека («под ключ»)",
      book: "WS",
      desc: "Крайняя мера для эджраннера, перешедшего дорогу мегакорпорации: включает инсценировку гибели в морге, пластическую операцию по смене лица, полный пакет новых документов и тайный вывоз с караваном кочевников в другой регион."
    },

    // =========================================================================
    // 7. ОБРАЗ ЖИЗНИ, СТИЛЬ И ДОСУГ (LIFESTYLE & ENTERTAINMENT)
    // =========================================================================
    {
      id: "srv-ent-style-salon",
      name: "Имидж-студия и стилист высокого класса",
      origName: "High-Fashion Stylist & Grooming Salon",
      category: "Образ жизни",
      cost: "100 – 300 eb",
      unit: "за визит (+1 к Гардеробу и Стилю на вечер)",
      book: "Chr4",
      desc: "Профессиональная укладка светящихся волос (Techhair), макияж со светоотражающим гримом и подбор образа перед важным корпоративным раутом или концертом, дающий временный бонус +1 к проверкам Привлекательности и Стиля."
    },
    {
      id: "srv-ent-shooting-range",
      name: "Аренда стрелковой галереи и тактического полигона",
      origName: "Tactical Shooting Range Membership",
      category: "Развлечения и Досуг",
      cost: "25 eb в час (или 150 eb абонемент на месяц)",
      unit: "за посещение (патроны отдельно)",
      book: "BSW",
      desc: "Легальный подземный тир с голографическими движущимися мишенями, где можно пристрелять новое оружие, настроить смартлинк и протестировать оптику без привлечения полиции."
    },
    {
      id: "srv-ent-combat-pit",
      name: "Вход и тотализатор на подпольных гладиаторских боях киборгов",
      origName: "Underground Pit-Fighting Arena Entry",
      category: "Развлечения и Досуг",
      cost: "50 eb (вход) / ставки от 100 eb",
      unit: "за вечер",
      book: "NC / WS",
      desc: "Доступ в закрытый тотализатор Боевой Зоны, где проходят жестокие поединки без правил между уличными бойцами, киборгами и экзотами. Участники боёв могут заработать от 500 до 5,000 eb за победу на ринге."
    },
    {
      id: "srv-ent-orbital-resort",
      name: "Недельный тур на орбитальный курорт «Хрустальный Дворец»",
      origName: "Crystal Palace Orbital Resort Vacation (1 Week)",
      category: "Развлечения и Досуг",
      cost: "15,000 eb",
      unit: "за неделю (включая шаттл и казино)",
      book: "DS / CP20",
      desc: "Вершина роскоши мира Cyberpunk 2020: неделя отдыха в невесомости и искусственной гравитации на элитной космической станции в точке Лагранжа L-1 с лучшими ресторанами, казино и полной безопасностью от уличной грязи."
    }
  ];

  SERVICES_PACK_2.forEach(newItem => {
    const exists = extDb.services.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase())
    );
    if (!exists) {
      extDb.services.push(newItem);
    }
  });
})();
// ============================================================================
// ДОПОЛНЕНИЕ БАЗЫ КИБЕРОСНАЩЕНИЯ В DATABASE.JS (РАЗДЕЛЬНЫЕ КАРТОЧКИ МОДЕЛЕЙ)
// Пакет №1: Нейропроцессоры, Рефлексы, Оптика, Аудио, Оружие и Конечности (Corebook)
// ============================================================================
(function appendCyberwarePack1() {
  if (!window.CP2020_EXTERNAL_DATA) return;
  const extDb = window.CP2020_EXTERNAL_DATA.db;
  const extCats = window.CP2020_EXTERNAL_DATA.categories;
  if (!Array.isArray(extDb.cyberware)) extDb.cyberware = [];
  if (!Array.isArray(extCats.cyberware)) extCats.cyberware = [];

  const cyberCategories = [
    "Нейрооснащение",
    "Импланты",
    "Имплантированное оружие",
    "Кибероптика",
    "Кибераудио",
    "Киберконечности",
    "Линейные рамы и Борги",
    "Биооснащение",
    "Нанотехнологии"
  ];
  cyberCategories.forEach(c => {
    if (!extCats.cyberware.includes(c)) extCats.cyberware.push(c);
  });

  // Удаляем старые обобщённые карточки из базового шаблона, если они там были
  const legacyCyberIds = ["c-neural-proc", "c-kerenzikov", "c-sandevistan", "c-skinweave", "c-mbl", "c-pacesetter", "c-wolvers", "c-kiroshi-mono", "c-cyberaudio-base", "c-cyberarm"];
  extDb.cyberware = extDb.cyberware.filter(item => item && !legacyCyberIds.includes(item.id));

  const CYBERWARE_PACK_1 = [
    // =========================================================================
    // 1. НЕЙРООСНАЩЕНИЕ И ПРОЦЕССОРЫ (NEURALWARE)
    // =========================================================================
    {
      id: "cyb-neur-processor",
      name: "Нейропроцессор (Базовый)",
      origName: "Neuralware Processor Base",
      category: "Нейрооснащение",
      surg: "М",
      pch: "1d6",
      cost: "1,000 eb",
      book: "CP20",
      desc: "Обязательный фундамент для любой кибернетики. Представляет собой кремниево-биопластиковый чип, вживляемый в основание черепа и стволовую часть мозга. Служит центральным нервным шлюзом для подключения чип-ключей, процессоров навыков, интерфейсных кабелей и систем управления оружием."
    },
    {
      id: "cyb-neur-plugs",
      name: "Интерфейсные разъемы в запястьях",
      origName: "Interface Plugs",
      category: "Нейрооснащение",
      surg: "Н",
      pch: "1d6/2",
      cost: "250 eb",
      book: "CP20",
      desc: "Пара убирающихся или открытых оптоволоконных кабелей в кончиках пальцев или запястьях, выходящих из нейропроцессора. Позволяют напрямую подключаться к терминалам, автомобилям, оружию и кибердекам для управления силой мысли."
    },
    {
      id: "cyb-neur-chipreader",
      name: "Гнездо инфо-чипов (Chip Reader)",
      origName: "Chip Reader / Memory Stack",
      category: "Нейрооснащение",
      surg: "Н",
      pch: "1d6/2",
      cost: "500 eb",
      book: "CP20",
      desc: "Слот расширения памяти за ухом для установки чипов знаний (SkillChips) или чипов памяти (Memory chips, вместимость до 10 ЕП данных на чип)."
    },
    {
      id: "cyb-neur-skillchip",
      name: "Процессор навыков (Skillchip Player)",
      origName: "Skillchip Player Socket",
      category: "Нейрооснащение",
      surg: "Н",
      pch: "1d6",
      cost: "500 eb (+ цена чипа навыка)",
      book: "CP20",
      desc: "Дополнительный нейропроцессорный модуль, позволяющий мгновенно загружать в мозг профессиональные навыки с чипов (от языков и пилотирования до боевых искусств)."
    },
    {
      id: "cyb-neur-kerenzikov-1",
      name: "Ускоритель рефлексов Керензиков (Уровень +1)",
      origName: "Kerenzikov Boosterware (+1 Initiative)",
      category: "Нейрооснащение",
      surg: "Н",
      pch: "1d6",
      cost: "500 eb",
      book: "CP20",
      desc: "Постоянно активный нейромодуль, ускоряющий синаптическую проводимость и дающий постоянный бонус +1 к Инициативе в любом бою."
    },
    {
      id: "cyb-neur-kerenzikov-2",
      name: "Ускоритель рефлексов Керензиков (Уровень +2)",
      origName: "Kerenzikov Boosterware (+2 Initiative)",
      category: "Нейрооснащение",
      surg: "Н",
      pch: "2d6",
      cost: "2,000 eb",
      book: "CP20",
      desc: "Продвинутая модификация постоянного ускорителя рефлексов, поднимающая Инициативу владельца на +2."
    },
    {
      id: "cyb-neur-sandevistan",
      name: "Боевой ускоритель рефлексов Сандевистан",
      origName: "Sandevistan Speedware",
      category: "Нейрооснащение",
      surg: "Н",
      pch: "1d6/2",
      cost: "1,600 eb",
      book: "CP20",
      desc: "В отличие от постоянно работающего Керензикова, Сандевистан активируется по мысленной команде и даёт мощный рывок +3 к Инициативе ровно на 5 боевых ходов (после чего требует 1 час на перезарядку конденсаторов)."
    },
    {
      id: "cyb-neur-tactical",
      name: "Тактический процессор (Tactical Computer)",
      origName: "Tactical Computer / Coprocessor",
      category: "Нейрооснащение",
      surg: "С",
      pch: "2d6",
      cost: "1,000 eb",
      book: "Chr1",
      desc: "Вспомогательный копроцессор в черепной коробке, обрабатывающий данные с кибероптики и смарт-оружия. Дает +1 ко всем проверкам Тактики и стрельбы на дальней дистанции."
    },

    // =========================================================================
    // 2. БИООСНАЩЕНИЕ И НАНОТЕХНОЛОГИИ (BIOWARE & NANOTECH)
    // =========================================================================
    {
      id: "cyb-bio-skinweave",
      name: "Прошивка кожи (Skinweave)",
      origName: "Skinweave Dermal Plating",
      category: "Нанотехнологии",
      surg: "Н",
      pch: "2d6",
      cost: "2,000 eb",
      book: "CP20",
      desc: "Нанохирурги вводят в дерму эластичные броневолокна из углеродных нанотрубок. Обеспечивает мягкую защиту ОС 12 на всё тело, не оставляя видимых шрамов и не мешая одежде."
    },
    {
      id: "cyb-bio-muscle-lace",
      name: "Кружево мышц и костей (Muscle & Bone Lace)",
      origName: "Muscle and Bone Lace",
      category: "Нанотехнологии",
      surg: "Н",
      pch: "1d6/2",
      cost: "1,500 eb",
      book: "CP20",
      desc: "Специальный вирусный ретровирусный пакет, укрепляющий костную ткань и оплетающий миомером мышечные волокна. Навсегда повышает характеристику ТЕЛО на +2 (включая рост грузоподъёмности и бонуса рукопашного урона)."
    },
    {
      id: "cyb-bio-ref-boost",
      name: "Био-ускоритель нервной проводимости",
      origName: "Bioplastic Neural Conduit Boost",
      category: "Биооснащение",
      surg: "М",
      pch: "1d6",
      cost: "3,000 eb",
      book: "Chr1",
      desc: "Замена стандартных нервных волокон на искусственные биопластиковые проводники с серебряным напылением. Увеличивает скорость прохождения импульсов от мышц к мозгу."
    },
    {
      id: "cyb-bio-pacesetter",
      name: "Кибернетическое сердце (Pacesetter 2000)",
      origName: "Pacesetter 2000 Cybernetic Heart",
      category: "Биооснащение",
      surg: "С",
      pch: "1d6",
      cost: "985 eb",
      book: "Chr1",
      desc: "Усиленное титано-полимерное сердце с электронасосом. Дает +2 к ТЕЛУ при проверках на выносливость и усталость, а также защищает от сердечных приступов и ядов."
    },
    {
      id: "cyb-bio-gills",
      name: "Внутренние жабры (Sub-Lung / Gills)",
      origName: "Sub-Lung / Gill Implant",
      category: "Биооснащение",
      surg: "С",
      pch: "2d6",
      cost: "1,200 eb",
      book: "Chr1",
      desc: "Фильтрационный модуль в трахее, извлекающий растворённый в воде кислород. Позволяет находиться под водой до 4 часов без акваланга."
    },
    {
      id: "cyb-bio-toxin-filter",
      name: "Био-фильтр крови и печени",
      origName: "Synthetic Blood Filter / Detox Unit",
      category: "Биооснащение",
      surg: "М",
      pch: "1d6",
      cost: "800 eb",
      book: "CP20",
      desc: "Многоуровневый фильтр в кровеносной системе, дающий +5 к любым спасброскам против ядов, алкоголя, наркотиков и угарного газа."
    },

    // =========================================================================
    // 3. КИБЕРОПТИКА (CYBEREYES)
    // =========================================================================
    {
      id: "cyb-eye-base-single",
      name: "Базовый кибернетический глаз (Одиночный)",
      origName: "Single Cyberoptic Unit",
      category: "Кибероптика",
      surg: "М",
      pch: "1d6",
      cost: "350 eb",
      book: "CP20",
      desc: "Один искусственный глазной протез со встроенным цветным дисплеем и 4 свободными слотами под оптические опции."
    },
    {
      id: "cyb-eye-base-pair",
      name: "Пара кибериглазов (С комплектом)",
      origName: "Cyberoptic Pair (2 Eyes + Processor)",
      category: "Кибероптика",
      surg: "М",
      pch: "2d6",
      cost: "500 eb",
      book: "CP20",
      desc: "Два кибернетических глаза с общим процессором обработки видеосигнала и 4 слотами опций на каждый глаз (всего 8 слотов)."
    },
    {
      id: "cyb-eye-anti-dazzle",
      name: "Оптика: Защита от вспышек (Anti-Dazzle)",
      origName: "Cyberoptic Anti-Dazzle Option",
      category: "Кибероптика",
      surg: "Н",
      pch: "0.5",
      cost: "100 eb",
      book: "CP20",
      desc: "Автоматический светофильтр, мгновенно гасящий ослепление от светошумовых гранат, сварки, прожекторов и лазерных лучей."
    },
    {
      id: "cyb-eye-lowlite",
      name: "Оптика: Усилитель света (Low-Lite™)",
      origName: "Cyberoptic Low-Lite / Nightvision",
      category: "Кибероптика",
      surg: "Н",
      pch: "1",
      cost: "200 eb",
      book: "CP20",
      desc: "Инфракрасный и электронный усилитель остаточного света, позволяющий видеть в темноте при свете звёзд или луны так же чётко, как днём."
    },
    {
      id: "cyb-eye-thermo",
      name: "Оптика: Тепловизор / Термограф (Thermograph)",
      origName: "Cyberoptic Thermographic Option",
      category: "Кибероптика",
      surg: "Н",
      pch: "1",
      cost: "300 eb",
      book: "CP20",
      desc: "Отображает тепловое излучение живых существ, работающих моторов и скрытых в стенах труб сквозь дым и темноту."
    },
    {
      id: "cyb-eye-telephoto",
      name: "Оптика: Телеобъектив / Зум (Teleoptics)",
      origName: "Cyberoptic Teleoptics Zoom",
      category: "Кибероптика",
      surg: "Н",
      pch: "1",
      cost: "200 eb",
      book: "CP20",
      desc: "Оптический зум с 5x и 10x приближением и функцией автофокуса на дальних дистанциях."
    },
    {
      id: "cyb-eye-targeting",
      name: "Оптика: Прицельный комплекс (Targeting Scope)",
      origName: "Cyberoptic Targeting Scope",
      category: "Кибероптика",
      surg: "Н",
      pch: "1",
      cost: "400 eb",
      book: "CP20",
      desc: "Баллистический калькулятор и перекрестие прицела прямо на сетке глаза. Дает +1 к Точности оружия (ТО) при прицельной стрельбе."
    },
    {
      id: "cyb-eye-timesquare",
      name: "Оптика: Инфо-строка «Times Square»",
      origName: "Cyberoptic Times Square Marquee Reader",
      category: "Кибероптика",
      surg: "Н",
      pch: "0.5",
      cost: "100 eb",
      book: "CP20",
      desc: "Проецирует бегущую текстовую строку, биржевые котировки, входящие сообщения с чипов или субтитры разговоров прямо в поле зрения."
    },
    {
      id: "cyb-eye-recording",
      name: "Оптика: Встроенная видеокамера (Recording Unit)",
      origName: "Cyberoptic Recording Unit (Vidcam)",
      category: "Кибероптика",
      surg: "Н",
      pch: "1",
      cost: "250 eb",
      book: "CP20",
      desc: "Запись всего, что видит владелец, на чип памяти в глазу (до 4 часов видео в высоком разрешении)."
    },

    // =========================================================================
    // 4. КИБЕРАУДИО (CYBERAUDIO)
    // =========================================================================
    {
      id: "cyb-aud-base",
      name: "Базовый модуль кибераудио",
      origName: "Basic Cyberaudio Suite",
      category: "Кибераудио",
      surg: "М",
      pch: "2d6",
      cost: "500 eb",
      book: "CP20",
      desc: "Внутренний аудиопроцессор в черепе с парой искусственных внутренних ушей и 6 свободными слотами под слуховые опции."
    },
    {
      id: "cyb-aud-amplified",
      name: "Аудио: Усилитель слуха (Amplified Hearing)",
      origName: "Cyberaudio Amplified Hearing",
      category: "Кибераудио",
      surg: "Н",
      pch: "1",
      cost: "200 eb",
      book: "CP20",
      desc: "Позволяет отчётливо слышать тихий шёпот и шорохи за стеной или на расстоянии до 100 метров (+3 к Внимательности на слух)."
    },
    {
      id: "cyb-aud-sound-editor",
      name: "Аудио: Звуковой редактор (Sound Editor)",
      origName: "Cyberaudio Sound Editor",
      category: "Кибераудио",
      surg: "Н",
      pch: "1",
      cost: "300 eb",
      book: "CP20",
      desc: "Фильтрация фоновых шумов (эхо, крики толпы, шум моторов) для выделения голоса конкретного человека или разговора."
    },
    {
      id: "cyb-aud-level-damper",
      name: "Аудио: Гаситель громких звуков (Level Damper)",
      origName: "Cyberaudio Level Damper",
      category: "Кибераудио",
      surg: "Н",
      pch: "1",
      cost: "150 eb",
      book: "CP20",
      desc: "Мгновенно приглушает взрывы, выстрелы и крики, защищая слух от оглушения и светошумовых гранат."
    },
    {
      id: "cyb-aud-radio-link",
      name: "Аудио: Встроенная рация (Radio Communicator)",
      origName: "Cyberaudio Radio Link Transceiver",
      category: "Кибераудио",
      surg: "Н",
      pch: "0.5",
      cost: "100 eb",
      book: "CP20",
      desc: "Широкополосная рация прямо в голове с голосовым управлением и выходом на ушные динамики."
    },
    {
      id: "cyb-aud-voice-box",
      name: "Аудио: Голосовой модулятор (Voice Stress Analyzer / Vocal Synthesizer)",
      origName: "Cyberaudio Voice Synthesizer / Modulator",
      category: "Кибераудио",
      surg: "Н",
      pch: "1",
      cost: "150 eb",
      book: "CP20",
      desc: "Позволяет подделывать чужие голоса, говорить на любых языках через чипы или полностью убирать дрожь в голосе при допросе."
    },

    // =========================================================================
    // 5. ИМПЛАНТИРОВАННОЕ ОРУЖИЕ И ОПАСНЫЙ ХРОМ (IMPLANTED WEAPONS)
    // =========================================================================
    {
      id: "cyb-weap-wolvers",
      name: "Росомахи (Wolvers)",
      origName: "Wolvers (Knuckle Blades)",
      category: "Имплантированное оружие",
      surg: "М",
      pch: "3d6+1",
      cost: "600 eb",
      book: "CP20",
      desc: "Тройные карбогласовые лезвия, выстреливаемые из костяшек пальцев по щелчку кисти. Наносят 3d6 бронебойного урона в ближнем бою."
    },
    {
      id: "cyb-weap-rippers",
      name: "Потрошители (Rippers)",
      origName: "Rippers (Advanced Hand Blades)",
      category: "Имплантированное оружие",
      surg: "М",
      pch: "2d6",
      cost: "300 eb",
      book: "CP20",
      desc: "Одиночные широкие лезвия в основаниях ладоней для стремительных режущих ударов (урон 2d6 ББ)."
    },
    {
      id: "cyb-weap-scratchers",
      name: "Царапатели (Scratchers)",
      origName: "Scratchers (Reinforced Nails)",
      category: "Имплантированное оружие",
      surg: "Н",
      pch: "1d6",
      cost: "100 eb",
      book: "CP20",
      desc: "Укреплённые алмазным напылением ногти, наносящие 1d6+1 урон в рукопашной и позволяющие карабкаться по деревянным и кирпичным стенам."
    },
    {
      id: "cyb-weap-nanoclear-blade",
      name: "Встроенный моноклинок в предплечье (Subdermal Monoblade)",
      origName: "Subdermal Forearm Monoknife / Blade",
      category: "Имплантированное оружие",
      surg: "С",
      pch: "3d6",
      cost: "650 eb",
      book: "CP20",
      desc: "Выдвижное мономолекулярное лезвие под кожей предплечья (урон 4d6, броня против него работает на 1/3 ОС)."
    },
    {
      id: "cyb-weap-pop-up-smg",
      name: "Выдвижной пистолет-пулемёт в предплечье (Pop-Up SMG)",
      origName: "Pop-Up / Subdermal Weapon Mount (SMG)",
      category: "Имплантированное оружие",
      surg: "С",
      pch: "2d6",
      cost: "500 eb (+ цена оружия)",
      book: "CP20",
      desc: "Скрытый подкожный отсек в руке, по команде раскладывающийся в мини-ПП (например, Arasaka Minami 10 или Uziminiauto) с подачей патронов из запястья."
    },
    {
      id: "cyb-weap-microwave-emitter",
      name: "Встроенный микроволновый излучатель в ладони",
      origName: "Palm Microwave Emitter",
      category: "Имплантированное оружие",
      surg: "М",
      pch: "2d6",
      cost: "450 eb",
      book: "CP20",
      desc: "Излучатель в центре ладони, выжигающий электронику и микросхемы при рукопашном касании (урон 1d6 + ЭМИ-сбой)."
    },

    // =========================================================================
    // 6. КИБЕРКОНЕЧНОСТИ (CYBERLIMBS)
    // =========================================================================
    {
      id: "cyb-limb-standard-arm",
      name: "Стандартная киберрука (Standard Cyberarm)",
      origName: "Standard Cyberarm",
      category: "Киберконечности",
      surg: "КР",
      pch: "2d6",
      cost: "3,000 eb",
      book: "CP20",
      desc: "Протез руки из углепластика и титана. Имеет прочность 20/30 ОСТ, ОС 20, 1d6 рукопашный удар и 4 внутренних отсека под опции (оружие, инструменты, скрытые карманы)."
    },
    {
      id: "cyb-limb-heavy-arm",
      name: "Усиленная боевая киберрука (Heavy Cyberarm)",
      origName: "Heavy / Combat Cyberarm",
      category: "Киберконечности",
      surg: "КР",
      pch: "3d6",
      cost: "4,500 eb",
      book: "CP20",
      desc: "Армейская бронированная рука с утолщённой гидравликой. Прочность 35/45 ОСТ, ОС 25, бонус рукопашного удара 2d6 и 4 отсека опций."
    },
    {
      id: "cyb-limb-standard-leg",
      name: "Стандартная кибернога (Standard Cyberleg)",
      origName: "Standard Cyberleg",
      category: "Киберконечности",
      surg: "КР",
      pch: "2d6",
      cost: "2,000 eb",
      book: "CP20",
      desc: "Протез ноги с гидравлическими амортизаторами. Прочность 25/35 ОСТ, ОС 20, 3 внутренних отсека (гироскопы, скрытое оружие, кобура)."
    },
    {
      id: "cyb-limb-hydraulic-leg",
      name: "Прыжковая кибернога (Hydraulic / Leap Leg)",
      origName: "Hydraulic Jump / Leap Cyberleg",
      category: "Киберконечности",
      surg: "КР",
      pch: "3d6",
      cost: "3,500 eb",
      book: "CP20",
      desc: "Модифицированная нога с пружинными аккумуляторами, увеличивающая высоту прыжка в 3 раза и дающая мощный удар ногой (2d6+2)."
    },
    {
      id: "cyb-limb-webbed-foot",
      name: "Плавательная киберстопа (Swim Foot / Fin)",
      origName: "Cybernetic Webbed Foot / Swim Fin",
      category: "Киберконечности",
      surg: "Н",
      pch: "1",
      cost: "400 eb",
      book: "Chr1",
      desc: "Раскладывающиеся плавательные перепонки или гидро-ласты на киберстопу, удваивающие скорость плавания под водой."
    }
  ];

  CYBERWARE_PACK_1.forEach(newItem => {
    const exists = extDb.cyberware.some(existing =>
      existing.id === newItem.id ||
      (existing.name && existing.name.toLowerCase() === newItem.name.toLowerCase())
    );
    if (!exists) {
      extDb.cyberware.push(newItem);
    }
  });
})();