export const site = {
  name: "RENOVO",
  tagline: "Производство корпоративной атрибутики",
  since: 2001,
  phone: "+7 (495) 778-28-27",
  phoneAlt: "+7 977 760-02-00",
  email: "re-novo@mail.ru",
  city: "Москва",
};

export const categories = [
  {
    slug: "papki",
    title: "Папки",
    subtitle: "Адресные · Меню · Чек-буки",
    description:
      "Адресные папки, меню, чек-буки и папки-боксы из натуральной и искусственной кожи, дизайнерского картона, ткани и бумаги.",
    image:
      "/images/renovo/folders.jpg?v=2",
    size: "large" as const,
  },
  {
    slug: "korobki",
    title: "Коробки",
    subtitle: "Подарочная упаковка",
    description:
      "Упаковка для подарочных и фирменных изделий из кожи, дерева, картона — уникальные размеры и формы.",
    image:
      "/images/renovo/boxes.jpg",
    size: "medium" as const,
  },
  {
    slug: "refetro",
    title: "REFETRO",
    subtitle: "Изделия из фетра",
    description:
      "Экологичные изделия для идентификации бизнеса. Прочный, эстетичный материал с приятной текстурой.",
    image:
      "/images/renovo/felt.jpg",
    size: "medium" as const,
    accent: true,
  },
  {
    slug: "kozha",
    title: "Кожа",
    subtitle: "Аксессуары и изделия",
    description:
      "Сумки, картхолдеры, обложки, брелки и любая продукция из натуральной кожи — от простых до премиум.",
    image:
      "/images/renovo/leather.jpg",
    size: "large" as const,
  },
];

export const process = [
  {
    step: "01",
    title: "Материал",
    text: "Натуральная кожа, кожзам, бархат, фетр, переплётные материалы и фурнитура.",
  },
  {
    step: "02",
    title: "Производство",
    text: "Тиснение, шелкография, гравировка, УФ-печать, лазерная резка, вышивка.",
  },
  {
    step: "03",
    title: "Брендирование",
    text: "Ваш логотип, тиснение, эмблема — эксклюзивно под техническое задание.",
  },
];

export const values = [
  {
    title: "Качество",
    text: "Лучшие материалы и многолетний опыт мастеров с 2001 года.",
  },
  {
    title: "Эксклюзивность",
    text: "Каждый заказ — по вашему ТЗ. Любая сложность, ваше тиснение и логотип.",
  },
  {
    title: "Материалы",
    text: "Кожа, кожзам, бархат, фетр, дерево, картон, металлическая фурнитура.",
  },
  {
    title: "Технологии",
    text: "Тиснение, шелкография, гравировка, УФ-печать, термотрансфер, лазер.",
  },
  {
    title: "Сроки",
    text: "Изготовление от одного дня — без компромиссов в качестве.",
  },
];

export const technologies = [
  "Переплёт",
  "Прошивка",
  "Тиснение",
  "Кашировка",
  "Вырубка",
  "Шелкография",
  "Термотрансфер",
  "Гравировка",
  "УФ-печать",
  "Лазерная резка",
];

export const products = [
  {
    slug: "adresnaya-papka-tisnenie",
    name: "Адресная папка с тиснением",
    material: "Эко-кожа",
    category: "papki",
    image: "/images/renovo/folder-embossed.jpg",
  },
  {
    slug: "chek-buk-kozham",
    name: "Чек-бук из кожзама",
    material: "Эко-кожа",
    category: "papki",
    image: "/images/renovo/checkbook-leather.jpg",
  },
  {
    slug: "papka-menu-magnity",
    name: "Папка-меню на магнитах",
    material: "Кожзам",
    category: "papki",
    image: "/images/renovo/folder-paper.jpg",
  },
  {
    slug: "korzina-fetr",
    name: "Корзина из фетра",
    material: "Фетр · REFETRO",
    category: "refetro",
    image: "/images/renovo/felt-basket.jpg",
  },
  {
    slug: "vip-kalendar",
    name: "VIP-календарь",
    material: "Кожа · Бронза",
    category: "kozha",
    image: "/images/renovo/checkbook-black.jpg",
  },
  {
    slug: "kartkholder-kozha",
    name: "Картхолдер из кожи",
    material: "Натуральная кожа",
    category: "kozha",
    image: "/images/renovo/leather.jpg",
  },
  {
    slug: "papka-boks",
    name: "Папка-бокс для документов",
    material: "Кожзам · Картон",
    category: "papki",
    image: "/images/renovo/boxes.jpg",
  },
  {
    slug: "sumka-fetr",
    name: "Сумка из фетра",
    material: "Фетр · REFETRO",
    category: "refetro",
    image: "/images/renovo/felt-bag.jpg",
  },
];

export const delivery = [
  "Самовывоз в Москве",
  "Курьер внутри МКАД",
  "Курьер за МКАД",
  "Почтовые службы по России",
  "Доставка по миру",
];

export const nav = [
  { label: "Каталог", href: "/catalog" },
  { label: "Мастерская", href: "/#craft" },
  { label: "REFETRO", href: "/#refetro" },
  { label: "Контакты", href: "/contact" },
];
