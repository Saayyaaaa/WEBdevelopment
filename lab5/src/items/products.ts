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
    imgURL: "https://resoures.cdn-kaspi.kz/img/m/p/hdf/hc7/83559837007902.jpg?format=gallery-large",
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
    category: {name: "Одeжка"},
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
    category: {name: "Одежда"},
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
    category: {name: "Одежда"},
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
    category: {name: "Одежда"},
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
    category: {name: "Одежда"},
    likes: 0
  }
  ]
