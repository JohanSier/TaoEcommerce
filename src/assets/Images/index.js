import categ_streetKings from "./categories-images/categ_streetKings.avif";
import categ_tees from "./categories-images/categ_tees.avif";
import categ_jerseys from "./categories-images/categ_jerseys.avif";
import categ_shorts from "./categories-images/categ_shorts.avif";
import categ_sneakers from "./categories-images/categ_sneakers.avif";
import categ_accessories from "./categories-images/categ_accesories.avif";

import backpack_1 from "./Backpack/Backpack_1.jpg";
import backpack_2 from "./Backpack/Backpack_2.jpg";
import backpack_3 from "./Backpack/Backpack_3.jpg";
import backpack_4 from "./Backpack/Backpack_4.jpg";

import bape_shorts_1 from "./Bape_Shorts/Bape_Shorts_1.webp";
import bape_shorts_2 from "./Bape_Shorts/Bape_Shorts_2.webp";
import bape_shorts_3 from "./Bape_Shorts/Bape_Shorts_3.webp";
import bape_shorts_4 from "./Bape_Shorts/Bape_Shorts_4.webp";
import bape_shorts_5 from "./Bape_Shorts/Bape_Shorts_5.webp";
import bape_shorts_6 from "./Bape_Shorts/Bape_Shorts_6.webp";

import bape_tee_1 from "./Bape_Tee/Bape_Tee_1.webp";
import bape_tee_2 from "./Bape_Tee/Bape_Tee_2.webp";
import bape_tee_3 from "./Bape_Tee/Bape_Tee_3.webp";
import bape_tee_4 from "./Bape_Tee/Bape_Tee_4.webp";
import bape_tee_5 from "./Bape_Tee/Bape_Tee_5.webp";
import bape_tee_6 from "./Bape_Tee/Bape_Tee_6.webp";
import bape_tee_7 from "./Bape_Tee/Bape_Tee_7.webp";
import bape_tee_8 from "./Bape_Tee/Bape_Tee_8.jpg";

import bape_tweed_shorts_1 from "./Bape_Tweed_Hem_Shorts/Bape_Tweed_Hem_Shorts_1.webp";
import bape_tweed_shorts_2 from "./Bape_Tweed_Hem_Shorts/Bape_Tweed_Hem_Shorts_2.webp";
import bape_tweed_shorts_3 from "./Bape_Tweed_Hem_Shorts/Bape_Tweed_Hem_Shorts_3.webp";
import bape_tweed_shorts_4 from "./Bape_Tweed_Hem_Shorts/Bape_Tweed_Hem_Shorts_4.webp";
import bape_tweed_shorts_5 from "./Bape_Tweed_Hem_Shorts/Bape_Tweed_Hem_Shorts_5.webp";
import bape_tweed_shorts_6 from "./Bape_Tweed_Hem_Shorts/Bape_Tweed_Hem_Shorts_6.webp";

import bape_black_tshirt_1 from "./Bape_Black_Tshirt/Bape_Black_Tshirt_1.webp";
import bape_black_tshirt_2 from "./Bape_Black_Tshirt/Bape_Black_Tshirt_2.webp";
import bape_black_tshirt_3 from "./Bape_Black_Tshirt/Bape_Black_Tshirt_3.webp";
import bape_black_tshirt_4 from "./Bape_Black_Tshirt/Bape_Black_Tshirt_4.webp";
import bape_black_tshirt_5 from "./Bape_Black_Tshirt/Bape_Black_Tshirt_5.webp";

import wade_sweatshirt_1 from "./Wade_Sweatshirt/Wade_Sweatshirt_1.webp";
import wade_sweatshirt_2 from "./Wade_Sweatshirt/Wade_Sweatshirt_2.webp";
import wade_sweatshirt_3 from "./Wade_Sweatshirt/Wade_Sweatshirt_3.jpg";
import wade_sweatshirt_4 from "./Wade_Sweatshirt/Wade_Sweatshirt_4.jpg";
import wade_sweatshirt_5 from "./Wade_Sweatshirt/Wade_Sweatshirt_5.webp";
import wade_sweatshirt_6 from "./Wade_Sweatshirt/Wade_Sweatshirt_6.jpg";
import wade_sweatshirt_7 from "./Wade_Sweatshirt/Wade_Sweatshirt_7.jpg";

const categories = [
  {
    id: 1,
    title: "Street Kings",
    src: categ_streetKings,
    link: "/products/street-kings",
  },
  { id: 2, title: "Tees", src: categ_tees, link: "/products/tees" },
  { id: 3, title: "Jerseys", src: categ_jerseys, link: "/products/jerseys" },
  { id: 4, title: "Shorts", src: categ_shorts, link: "/products/shorts" },
  { id: 5, title: "Sneakers", src: categ_sneakers, link: "/products/sneakers" },
  {
    id: 6,
    title: "Accessories",
    src: categ_accessories,
    link: "/products/accessories",
  },
];

const products = [
  {
    id: 1,
    categoryId: 2,
    name: "Urban Insignia Tee",
    description:
      "A sleek black t-shirt with unique patches celebrating street basketball culture.",
    price: 44.99,
    images: [
      bape_black_tshirt_1,
      bape_black_tshirt_2,
      bape_black_tshirt_3,
      bape_black_tshirt_4,
      bape_black_tshirt_5,
    ],
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL"],
    measuresIn: {
      XS: { chestWidth: 17.5, sleeveLength: 7, itemLength: 26 },
      S: { chestWidth: 18.5, sleeveLength: 7.5, itemLength: 27 },
      M: { chestWidth: 19.5, sleeveLength: 8, itemLength: 28 },
      L: { chestWidth: 21, sleeveLength: 8.5, itemLength: 29 },
      XL: { chestWidth: 22.5, sleeveLength: 9, itemLength: 30 },
      "2XL": { chestWidth: 24, sleeveLength: 9.5, itemLength: 31 },
    },
    measuresCm: {},
  },
  {
    id: 2,
    categoryId: 4,
    name: "Night Camo Shorts",
    description:
      "Stylish black camo shorts perfect for both on and off the court.",
    price: 54.99,
    images: [
      bape_shorts_1,
      bape_shorts_2,
      bape_shorts_3,
      bape_shorts_4,
      bape_shorts_5,
      bape_shorts_6,
    ],
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL"],
    measuresIn: {
      XS: { waistWidth: 13.5, hipWidth: 19, itemLength: 17 },
      S: { waistWidth: 14.5, hipWidth: 20, itemLength: 18 },
      M: { waistWidth: 15.5, hipWidth: 21, itemLength: 19 },
      L: { waistWidth: 16.5, hipWidth: 22, itemLength: 20 },
      XL: { waistWidth: 17.5, hipWidth: 23, itemLength: 21 },
      "2XL": { waistWidth: 18.5, hipWidth: 24, itemLength: 22 },
    },
    measuresCm: {},
  },
  {
    id: 3,
    categoryId: 1,
    name: "King’s Court Sweater",
    description:
      "A premium, vintage-washed long-sleeve sweater for those cooler street game nights.",
    price: 69.99,
    images: [
      wade_sweatshirt_1,
      wade_sweatshirt_2,
      wade_sweatshirt_3,
      wade_sweatshirt_4,
      wade_sweatshirt_5,
      wade_sweatshirt_6,
      wade_sweatshirt_7,
    ],
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL"],
    measuresIn: {
      XS: { chestWidth: 18, sleeveLength: 23, itemLength: 25 },
      S: { chestWidth: 19, sleeveLength: 24, itemLength: 26 },
      M: { chestWidth: 20, sleeveLength: 25, itemLength: 27 },
      L: { chestWidth: 21.5, sleeveLength: 26, itemLength: 28 },
      XL: { chestWidth: 23, sleeveLength: 27, itemLength: 29 },
      "2XL": { chestWidth: 24.5, sleeveLength: 28, itemLength: 30 },
    },
    measuresCm: {},
  },
  {
    id: 4,
    categoryId: 2,
    name: "Stellar Play Tee",
    description:
      "A deep navy t-shirt with star-inspired designs for standout street style.",
    price: 47.99,
    images: [
      bape_tee_1,
      bape_tee_2,
      bape_tee_3,
      bape_tee_4,
      bape_tee_5,
      bape_tee_6,
      bape_tee_7,
      bape_tee_8,
    ],
    availableSizes: ["M", "L", "XL", "2XL"],
    measuresIn: {
      M: { chestWidth: 19.5, sleeveLength: 8, itemLength: 28 },
      L: { chestWidth: 21, sleeveLength: 8.5, itemLength: 29 },
      XL: { chestWidth: 22.5, sleeveLength: 9, itemLength: 30 },
      "2XL": { chestWidth: 24, sleeveLength: 9.5, itemLength: 31 },
    },
    measuresCm: {},
  },
  {
    id: 5,
    categoryId: 4,
    name: "Shadowline Shorts",
    description:
      "Minimalist black shorts with subtle detailing for effortless style.",
    price: 49.99,
    images: [
      bape_tweed_shorts_1,
      bape_tweed_shorts_2,
      bape_tweed_shorts_3,
      bape_tweed_shorts_4,
      bape_tweed_shorts_5,
      bape_tweed_shorts_6,
    ],
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL"],
    measuresIn: {
      XS: { waistWidth: 13.5, hipWidth: 19, itemLength: 17 },
      S: { waistWidth: 14.5, hipWidth: 20, itemLength: 18 },
      M: { waistWidth: 15.5, hipWidth: 21, itemLength: 19 },
      L: { waistWidth: 16.5, hipWidth: 22, itemLength: 20 },
      XL: { waistWidth: 17.5, hipWidth: 23, itemLength: 21 },
      "2XL": { waistWidth: 18.5, hipWidth: 24, itemLength: 22 },
    },
    measuresCm: {},
  },
  {
    id: 6,
    categoryId: 6,
    name: "Ascend Backpack",
    description:
      "A durable and stylish black backpack with iconic accents, ready to carry your game essentials.",
    price: 84.99,
    images: [backpack_1, backpack_2, backpack_3, backpack_4],
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
];

function inchesToCm(inches) {
  return +(inches * 2.54).toFixed(2);
}


products.forEach(product => {
  product.measuresCm = {};
  for (const size in product.measuresIn) {
    product.measuresCm[size] = {};
    for (const key in product.measuresIn[size]) {
      product.measuresCm[size][key] = inchesToCm(product.measuresIn[size][key]);
    }
  }
});

export { categories, products };
