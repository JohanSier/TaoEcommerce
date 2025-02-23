import categ_streetKings from "./categories-images/categ_streetKings.avif";
import categ_tees from "./categories-images/categ_tees.avif";
import categ_jerseys from "./categories-images/categ_jerseys.avif";
import categ_shorts from "./categories-images/categ_shorts.avif";
import categ_sneakers from "./categories-images/categ_sneakers.avif";
import categ_accesories from "./categories-images/categ_accesories.avif";

import backpack_1 from "./Backpack/Backpack_1.webp"
import backpack_2 from "./Backpack/Backpack_2.webp";
import backpack_3 from "./Backpack/Backpack_3.webp";
import backpack_4 from "./Backpack/Backpack_4.webp";
import backpack_5 from "./Backpack/Backpack_5.webp";


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
  { id: 1, title: "Street Kings", src: categ_streetKings, link: "/products" },
  { id: 2, title: "Tees", src: categ_tees, link: "/products" },
  { id: 3, title: "Jerseys", src: categ_jerseys, link: "/products" },
  { id: 4, title: "Shorts", src: categ_shorts, link: "/products" },
  { id: 5, title: "Sneakers", src: categ_sneakers, link: "/products" },
  { id: 6, title: "Accessories", src: categ_accesories, link: "/products" },
];

const products = [
  {
    id: 1,
    categoryId: 1,
    name: "Urban Insignia Tee",
    description:
      "A sleek black t-shirt with unique patches celebrating street basketball culture.",
    price: 44.99,
    images: [bape_black_tshirt_1, bape_black_tshirt_2, bape_black_tshirt_3, bape_black_tshirt_4, bape_black_tshirt_5],
    link: "/products",
    availableSizes: ["XS", "S", "M", "2XL"]
  },
  {
    id: 2,
    categoryId: 1,
    name: "Night Camo Shorts",
    description:
      "Stylish black camo shorts perfect for both on and off the court.",
    price: 54.99,
    images: [bape_shorts_1, bape_shorts_2, bape_shorts_3, bape_shorts_4, bape_shorts_5, bape_shorts_6],
    link: "/products",
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL"]
  },
  {
    id: 3,
    categoryId: 1,
    name: "King’s Court Sweater",
    description:
      " A premium, vintage-washed long-sleeve sweater for those cooler street game nights.",
    price: 69.99,
    images: [wade_sweatshirt_1, wade_sweatshirt_2, wade_sweatshirt_3, wade_sweatshirt_4, wade_sweatshirt_5, wade_sweatshirt_6, wade_sweatshirt_7],
    link: "/products",
    availableSizes: ["XS", "S", "M", "2XL"]
  },
  {
    id: 4,
    categoryId: 1,
    name: "Stellar Play Tee",
    description:
      "A deep navy t-shirt with star-inspired designs for standout street style.",
    price: 47.99,
    images: [bape_tee_1, bape_tee_2, bape_tee_3, bape_tee_4, bape_tee_5, bape_tee_6, bape_tee_7, bape_tee_8],
    link: "/products",
    availableSizes: ["M", "L", "XL", "2XL"]
  },
  {
    id: 5,
    categoryId: 1,
    name: "Shadowline Shorts",
    description:
      "Minimalist black shorts with subtle detailing for effortless style.",
    price: 49.99,
    images: [bape_tweed_shorts_1, bape_tweed_shorts_2, bape_tweed_shorts_3, bape_tweed_shorts_4, bape_tweed_shorts_5, bape_tweed_shorts_6],
    link: "/products",
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL"]
  },
  {
    id: 6,
    categoryId: 1,
    name: "Ascend Backpack",
    description:
      "A durable and stylish black backpack with iconic accents, ready to carry your game essentials.",
    price: 84.99,
    images: [backpack_1, backpack_2, backpack_3, backpack_4, backpack_5],
    link: "/products",
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL"]
  }
];

export { categories, products };
