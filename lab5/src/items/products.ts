import { Category } from "./categories";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    url: string;
    imgURL: string;
    link: string;
    category: Category;
    likes: number;
  };

export const products: Product[] = [
  {
    id: 1,
    name: "Смартфон Apple iPhone 15 Pro Max 256Gb ",
    price: 620908,
    description: "256Gb черный",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000&m=7080000&sr=1&ref=shared_link",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hdf/hc7/83559837007902.jpg?format=gallery-medium",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Телефон"},
    likes: 0
  },
  {
    id: 2,
    name: "Смартфон Apple iPhone 13 128Gb Midnight",
    price: 294354,
    description: "128Gb Midnight черный",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000&sr=2&ref=shared_link",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Телефон"},
    likes: 0
  },
  {
    id: 7,
    name: "Смартфон Apple iPhone 11 128Gb Slim Box",
    price: 247652,
    description: "черный",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000&sr=11&ref=shared_link0",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Телефон"},
    likes: 43
  },
  {
    id: 8,
    name: "Смартфон Apple iPhone 14 128Gb",
    price: 320650,
    description: "128Gb starlight",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h9f/h49/64481569832990.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-starlight-106363144/?c=750000000&sr=7&ref=shared_link",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Телефон"},
    likes: 0
  },
  {
    id: 9,
    name: "Смартфон Apple iPhone 15 Pro Max 256Gb",
    price: 620830,
    description: "256Gb черный",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hdf/hc7/83559837007902.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000&sr=15&ref=shared_link",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Телефон"},
    likes: 0
  },
  {
    id: 10,
    name: "Смартфон Apple iPhone 15 Pro 256Gb",
    price: 572078,
    description: "256Gb серый",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hae/h00/83559620739102.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000&sr=17&ref=shared_link",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Телефон"},
    likes: 0
  },
  {
    id: 11,
    name: "Сумка кросс-боди LUCCI 386233",
    price: 11990,
    description: "кросс-боди",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hac/h43/84669479551006.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/sumka-kross-bodi-lucci-386233-iskusstvennaja-kozha-chernyi-109779999/?c=750000000&m=16372174&sr=4&ref=shared_link",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Сумки"},
    likes: 0
  },
  {
    id: 12,
    name: "Барсетка Bond 888-152",
    price: 54500,
    description: "барсетка",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h23/h0f/84000742178846.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/barsetka-bond-888-152-natural-naja-kozha-chernyi-113511651/?c=750000000&m=Gzk&sr=6&ref=shared_link",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Сумки"},
    likes: 0
  },
  {
    id: 13,
    name: "Барсетка Bond 888-152",
    price: 25800,
    description: "сумка тоут",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hc7/hfe/84709038489630.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/sumka-tout-990117-natural-naja-zamsha-korichnevyi-115303788/?c=750000000&m=497008&sr=11&ref=shared_link",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Сумки"},
    likes: 0
  },
  {
    id: 14,
    name: "Сумка тоут Huiweitu LU848",
    price: 1500,
    description: "сумка тоут",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h3d/haa/68988341616670.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/sumka-tout-huiweitu-lu848-iskusstvennaja-kozha-chernyi-108889318/?c=750000000&sr=25&ref=shared_link",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Сумки"},
    likes: 0
  },
  {
    id: 15,
    name: "Комплект BAG Z3176",
    price: 29800,
    description: "комплект",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h72/h5f/69252844978206.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/komplekt-bag-z3176-iskusstvennaja-kozha-chernyi-108995653/?c=750000000&sr=67&ref=shared_link",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Сумки"},
    likes: 0
  },
  {
    id: 16,
    name: "Your.kzt kzt178 белый 42-44",
    price: 6997,
    description: "блузка",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h51/h12/83821072056350.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/your-kzt-kzt178-belyi-42-44-108134895/?c=750000000&sr=22&ref=shared_link",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Одeжда"},
    likes: 0
  },
  {
    id: 17,
    name: "875068 черный Универсальный",
    price: 8346,
    description: "повседневное платье",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h21/he2/84459292131358.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/875068-chernyi-universal-nyi-114357723/?c=750000000&sr=4&ref=shared_link",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Одeжда"},
    likes: 0
  },
  {
    id: 18,
    name: "Повседневные брюки PDWR 22001535",
    price: 9900,
    description: "повседневные брюки",
    rating: 5,
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hf3/hb7/80492122603550.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/povsednevnye-brjuki-pdwr-22001535-chernyi-s-102933736/?c=750000000&sr=33&ref=shared_link",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Одeжда"},
    likes: 0
  },
  {
    id: 19,
    name: "Норковая черный универсальный",
    price: 32992,
    description: "",
    rating: 5,
    url: "https://kaspi.kz/shop/p/norkovaja-chernyi-universal-nyi-114211400/?c=750000000&sr=15&ref=shared_link",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hdf/h2a/84404869365790.jpg?format=gallery-medium",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Одeжда"},
    likes: 0
  },
  {
    id: 20,
    name: "Бомбер Boni A144 серый Универсальный",
    price: 14796,
    description: "",
    rating: 5,
    url: "https://kaspi.kz/shop/p/bomber-boni-a144-seryi-universal-nyi-113495911/?c=750000000&sr=25&ref=shared_link",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h3d/h5d/83994359463966.jpg?format=gallery-medium",
    link: "https://t.me/c/2123912270/3",
    category: {name: "Одeжда"},
    likes: 0
  },
  {  id: 21,
    name: "Смарт-часы Apple Watch SE 2 Gen (2022) 40 мм starlight-бежевый",  price: 133201,
    description: "поддержка платформ: iOS\n" +
      "материал корпуса: алюминий\n" +
      "цвет корпуса: starlight\n" +
      "форма корпуса: прямоугольная\n" +
      "интерфейсы: Bluetooth, ,Wi-Fi, ,NFC\n" +
      "технология экрана: OLED\n" +
      "объем встроенной памяти: 32 Гб",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-watch-se-2-gen-2022-40-mm-starlight-bezhevyi-106362759/?c=750000000",  imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h9d/hf8/64534203301918.jpg?format=gallery-medium",
    link: "https://t.me/angularwebdev2023/3",
    category: { name: "Часы" },
    likes: 0,
  },
  {  id: 22,
    name: "Смарт-часы Huawei Watch GT 4 41 мм золотистый",
    price: 21898,
    description: "поддержка платформ: Android, iOS\n" +
      "материал корпуса: нерж. сталь\n" +
      "цвет корпуса: золотистый\n" +
      "форма корпуса: круглая\n" +
      "интерфейсы: Bluetooth\n" +
      "технология экрана: AMOLED\n" +
      "время работы: до 5 дней",
    rating: 5,
    url: "https://kaspi.kz/shop/p/huawei-watch-gt-4-41-mm-zolotistyi-113400057/?c=750000000",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h07/he9/83879550779422.jpg?format=gallery-medium",
    link: "https://t.me/angularwebdev2023/10",
    category: { name: "Часы" },
    likes: 0
  },
  {  id: 23,
    name: "Смарт-часы Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46 мм черный-черный",
    price: 59674,
    description: "поддержка платформ: Android\n" +
      "материал корпуса: алюминий\n" +
      "цвет корпуса: черный\n" +
      "форма корпуса: круглая\n" +
      "интерфейсы: Bluetooth, ,NFC",
    rating: 5,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h47/64342261268510.jpg?format=gallery-medium",  link: "https://t.me/angularwebdev2023/9",
    category: { name: "Часы" },
    likes: 0
  },
  {  id: 24,
    name: "Смарт-часы Smart Baby Watch Z6 GPS зеленый",
    price: 4344,
    description: "поддержка платформ: Android, ,iOS\n" +
      "материал корпуса: пластик\n" +
      "цвет корпуса: зеленый\n" +
      "форма корпуса: многогранная\n" +
      "интерфейсы: USB\n" +
      "технология экрана: AMOLED",
    rating: 5,
    url: "https://kaspi.kz/shop/p/smart-baby-watch-z6-gps-zelenyi-101910569/?c=750000000",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h88/h10/64165178507294.jpg?format=gallery-medium",
    link: "https://t.me/angularwebdev2023/14",
    category: { name: "Часы" },
    likes: 0
  },
  {  id: 25,
    name: "Amazfit Bip U Pro",
    price: 25368,
    description: "Безрамочный дизайн часов Amazfit Bip U Pro оборудованы экраном AMOLED с диагональю 1.43 дюйма и разрешением 320x302 пикселя, обеспечивающим превосходное визуальное отображение, благодаря которому все входящие звонки, сообщения и напоминания становятся предельно четкими.",  rating: 5,
    url: "https://kaspi.kz/shop/p/amazfit-bip-u-pro-chernyi-100914321/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h68/33549396967454/amazfit-bip-u-pro-cernyj-100914321-1-Container.jpg",
    link: "https://t.me/angularwebdev2023/17",
    category: { name: "Часы" },
    likes: 0
  }
]
