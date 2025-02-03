import categ_streetKings from "./categories-images/categ_streetKings.avif";
import categ_tees from "./categories-images/categ_tees.avif";
import categ_jerseys from "./categories-images/categ_jerseys.avif";
import categ_shorts from "./categories-images/categ_shorts.avif";
import categ_sneakers from "./categories-images/categ_sneakers.avif";
import categ_accesories from "./categories-images/categ_accesories.avif";

import backpack from "./product-images/Backpack.webp";
import bape_shorts from "./product-images/Bape_Shorts.webp";
import bape_stellar_tee from "./product-images/Bape_Tee.webp";
import bape_tweed_shorts from "./product-images/Bape_Tweed_Hem_Shorts.webp";
import bape_black_tee from "./product-images/Bape_Black_Tee.webp";
import wade_sweatshirt from "./product-images/Wade_Sweatshirt.webp";

import backpack_hover from "./hover-images/Backpack_hover.webp";
import bape_shorts_hover from "./hover-images/Bape_Shorts_hover.webp";
import bape_stellar_tee_hover from "./hover-images/Bape_Tee_hover.webp";
import bape_tweed_shorts_hover from "./hover-images/Bape_Tweed_Hem_Shorts_hover.webp";
import bape_black_tee_hover from "./hover-images/Bape_Black_Tee_hover.webp";
import wade_sweatshirt_hover from "./hover-images/Wade_Sweatshirt_hover.webp";


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
    imageSrc: bape_black_tee,
    link: "/products",
    hoverImage: bape_black_tee_hover
  },
  {
    id: 2,
    categoryId: 1,
    name: "Night Camo Shorts",
    description:
      "Stylish black camo shorts perfect for both on and off the court.",
    price: 54.99,
    imageSrc: bape_shorts,
    link: "/products",
    hoverImage: bape_shorts_hover
  },
  {
    id: 3,
    categoryId: 1,
    name: "King’s Court Sweater",
    description:
      " A premium, vintage-washed long-sleeve sweater for those cooler street game nights.",
    price: 69.99,
    imageSrc: wade_sweatshirt,
    link: "/products",
    hoverImage: wade_sweatshirt_hover
  },
  {
    id: 4,
    categoryId: 1,
    name: "Stellar Play Tee",
    description:
      "A deep navy t-shirt with star-inspired designs for standout street style.",
    price: 47.99,
    imageSrc: bape_stellar_tee,
    link: "/products",
    hoverImage: bape_stellar_tee_hover
  },
  {
    id: 5,
    categoryId: 1,
    name: "Shadowline Shorts",
    description:
      "Minimalist black shorts with subtle detailing for effortless style.",
    price: 49.99,
    imageSrc: bape_tweed_shorts,
    link: "/products",
    hoverImage: bape_tweed_shorts_hover
  },
  {
    id: 6,
    categoryId: 1,
    name: "Ascend Backpack",
    description:
      "A durable and stylish black backpack with iconic accents, ready to carry your game essentials.",
    price: 84.99,
    imageSrc: backpack,
    link: "/products",
    hoverImage: backpack_hover
  },
];

export { categories, products };
