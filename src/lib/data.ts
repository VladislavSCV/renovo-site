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
      "https://images.unsplash.com/photo-1586281380349-632531db7e4f?w=1200&q=80",
    size: "large" as const,
  },
  {
    slug: "korobki",
    title: "Коробки",
    subtitle: "Подарочная упаковка",
    description:
      "Упаковка для подарочных и фирменных изделий из кожи, дерева, картона — уникальные размеры и формы.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&q=80",
    size: "medium" as const,
  },
  {
    slug: "refetro",
    title: "REFETRO",
    subtitle: "Изделия из фетра",
    description:
      "Экологичные изделия для идентификации бизнеса. Прочный, эстетичный материал с приятной текстурой.",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80",
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
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7e4f?w=800&q=80",
  },
  {
    slug: "chek-buk-kozham",
    name: "Чек-бук из кожзама",
    material: "Эко-кожа",
    category: "papki",
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
  },
  {
    slug: "papka-menu-magnity",
    name: "Папка-меню на магнитах",
    material: "Кожзам",
    category: "papki",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
  },
  {
    slug: "korzina-fetr",
    name: "Корзина из фетра",
    material: "Фетр · REFETRO",
    category: "refetro",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
  },
  {
    slug: "vip-kalendar",
    name: "VIP-календарь",
    material: "Кожа · Бронза",
    category: "kozha",
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=80",
  },
  {
    slug: "kartkholder-kozha",
    name: "Картхолдер из кожи",
    material: "Натуральная кожа",
    category: "kozha",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
  },
  {
    slug: "papka-boks",
    name: "Папка-бокс для документов",
    material: "Кожзам · Картон",
    category: "papki",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
  },
  {
    slug: "sumka-fetr",
    name: "Сумка из фетра",
    material: "Фетр · REFETRO",
    category: "refetro",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739299?w=800&q=80",
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
