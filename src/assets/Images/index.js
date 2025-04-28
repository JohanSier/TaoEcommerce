const categories = [
  {
    id: 1,
    title: "Street Kings",
    cloudinaryValue: "categ_streetKings_r92uft.avif",
    link: "/products/street-kings",
  },
  { id: 2, title: "Tees", cloudinaryValue: "categ_tees_hwpuy6.avif", link: "/products/tees" },
  { id: 3, title: "Jerseys", cloudinaryValue: "categ_jerseys_yddj49.avif", link: "/products/jerseys" },
  { id: 4, title: "Shorts", cloudinaryValue: "categ_shorts_cdax8u.avif", link: "/products/shorts" },
  { id: 5, title: "Sneakers", cloudinaryValue: "categ_sneakers_cqedii.avif", link: "/products/sneakers" },
  {
    id: 6,
    title: "Accessories",
    cloudinaryValue: "categ_accesories_ah3zhy.avif",
    link: "/products/accessories",
  }
];

const products = [
  {
    id: 1,
    categories: [
      { id: 2, name: "Tees" },
      { id: 1, name: "Street Kings" }
    ],
    name: "Urban Insignia Tee",
    description:
      "A sleek black t-shirt with unique patches celebrating street basketball culture.",
    price: 44.99,
    cloudinaryValues: [
      "Bape_Black_Tshirt_1_uvza9e.webp",
      "Bape_Black_Tshirt_2_fxy05z.webp",
      "Bape_Black_Tshirt_3_zysszy.webp",
      "Bape_Black_Tshirt_4_jruhud.webp",
      "Bape_Black_Tshirt_5_qyhnnz.webp",
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
    categories: [
      { id: 4, name: "Shorts" },
      { id: 1, name: "Street Kings" }
    ],
    name: "Night Camo Shorts",
    description:
      "Stylish black camo shorts perfect for both on and off the court.",
    price: 54.99,
    cloudinaryValues: [
      "Bape_Shorts_1_nu6myj.webp",
      "Bape_Shorts_2_jmmz9l.webp",
      "Bape_Shorts_3_qqehzh.webp",
      "Bape_Shorts_4_h2qxti.webp",
      "Bape_Shorts_5_z5bsno.webp",
      "Bape_Shorts_6_i6macj.webp",
    ],
    availableSizes: ["XS", "S", "M", "L", "XL",],
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
    categories: [
      { id: 1, name: "Street Kings" }
    ],
    name: "King's Court Sweater",
    description:
      "A premium, vintage-washed long-sleeve sweater for those cooler street game nights.",
    price: 69.99,
    cloudinaryValues: [
      "Wade_Sweatshirt_1_xe4ypv.webp",
      "Wade_Sweatshirt_2_lmzth8.webp",
      "Wade_Sweatshirt_3_aoebvm.jpg",
      "Wade_Sweatshirt_4_nielzg.webp",
      "Wade_Sweatshirt_5_cygsya.webp",
      "Wade_Sweatshirt_6_e1mhwv.jpg",
      "Wade_Sweatshirt_7_azxpvr.webp",
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
    categories: [
      { id: 2, name: "Tees" },
      { id: 1, name: "Street Kings" }
    ],
    name: "Stellar Play Tee",
    description:
      "A deep navy t-shirt with star-inspired designs for standout street style.",
    price: 47.99,
    cloudinaryValues: [
      "Bape_Tee_1_bv5ugm.webp",
      "Bape_Tee_2_tnfu1l.webp",
      "Bape_Tee_3_o4lcuz.webp",
      "Bape_Tee_4_dgmz0d.webp",
      "Bape_Tee_5_amrxbx.webp",
      "Bape_Tee_6_awwwlc.webp",
      "Bape_Tee_7_hw4el5.webp",
      "Bape_Tee_8_myb6w5.webp",
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
    categories: [
      { id: 4, name: "Shorts" },
      { id: 1, name: "Street Kings" }
    ],
    name: "Shadowline Shorts",
    description:
      "Minimalist black shorts with subtle detailing for effortless style.",
    price: 49.99,
    cloudinaryValues: [
      "Bape_Tweed_Hem_Shorts_1_bwdtgq.webp",
      "Bape_Tweed_Hem_Shorts_2_mspmtb.webp",
      "Bape_Tweed_Hem_Shorts_3_kqgcea.webp",
      "Bape_Tweed_Hem_Shorts_4_jpt2jc.webp",
      "Bape_Tweed_Hem_Shorts_5_tkzsf7.webp",
      "Bape_Tweed_Hem_Shorts_6_vjgxzr.webp",
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
    categories: [
      { id: 6, name: "Accessories" },
      { id: 1, name: "Street Kings" }
    ],
    name: "Ascend Backpack",
    description:
      "A durable and stylish black backpack with iconic accents, ready to carry your game essentials.",
    price: 84.99,
    cloudinaryValues: ["Backpack_1_iojo3t.webp", "Backpack_2_i6stfu.webp", "Backpack_3_i7rggp.webp", "Backpack_4_me1izt.webp"],
    availableSizes: ["One Size"],
  },
  {
    id: 7,
    categories: [
      { id: 5, name: "Sneakers" }
    ],
    name: "Way of Wade 11",
    description: "The Way of Wade 11 is a high-performance basketball shoe engineered for players who demand speed and stability. Featuring innovative BOOM cushioning technology and breathable mesh upper, it delivers the perfect balance of comfort and on-court performance. The reinforced support system and enhanced traction pattern ensure confident movements during intense gameplay.",
    price: 159.99,
    cloudinaryValues: [
      "WOW_11_1_o1g8q2.webp",
      "WOW_11_2_wpcqgh.webp",
      "WOW_11_3_lxatva.webp",
      "WOW_11_4_okajrj.webp",
      "WOW_11_5_j9ijvm.webp",
      "WOW_11_6_wmvo1f.webp",
      "WOW_11_7_jyqw2f.webp"
    ],
    availableSizes: ["7", "8", "8.5", "9", "9.5", "10", "12", "13"],
    measuresIn: {
      "7": { footLength: 9.625 },
      "7.5": { footLength: 9.75 },
      "8": { footLength: 9.875 },
      "8.5": { footLength: 10 },
      "9": { footLength: 10.125 },
      "9.5": { footLength: 10.25 },
      "10": { footLength: 10.5 },
      "10.5": { footLength: 10.625 },
      "11": { footLength: 10.75 },
      "11.5": { footLength: 10.875 },
      "12": { footLength: 11 },
      "13": { footLength: 11.5 }
    },
    measuresCm: {}
  },
  {
    id: 8,
    categories: [
      { id: 5, name: "Sneakers" }
    ],
    name: "Way of Wade 808",
    description: "The Way of Wade 808 combines cutting-edge design with superior functionality. Built with dynamic support technology and responsive cushioning, these shoes deliver exceptional court feel and agility. The lightweight construction and strategic ventilation ensure maximum comfort during intense play.",
    price: 149.99,
    cloudinaryValues: [
      "WOW_808_1_nwge49.webp",
      "WOW_808_2_gklw6i.webp",
      "WOW_808_3_grfwzt.webp",
      "WOW_808_4_mkz5yv.webp",
      "WOW_808_5_pfagoq.webp",
      "WOW_808_6_dyytl6.webp",
      "WOW_808_7_xyrckg.webp"
    ],
    availableSizes: ["8.5", "9", "9.5", "10", "11", "11.5", "12", "13"],
    measuresIn: {
      "7": { footLength: 9.625 },
      "7.5": { footLength: 9.75 },
      "8": { footLength: 9.875 },
      "8.5": { footLength: 10 },
      "9": { footLength: 10.125 },
      "9.5": { footLength: 10.25 },
      "10": { footLength: 10.5 },
      "10.5": { footLength: 10.625 },
      "11": { footLength: 10.75 },
      "11.5": { footLength: 10.875 },
      "12": { footLength: 11 },
      "13": { footLength: 11.5 }
    },
    measuresCm: {}
  },
  {
    id: 9,
    categories: [
      { id: 5, name: "Sneakers" }
    ],
    name: "Way of Wade Flash",
    description: "Experience lightning-quick responsiveness with the Way of Wade Flash. These performance basketball shoes feature advanced energy return technology and a specialized traction pattern for explosive movements. The adaptive fit system and reinforced stability features make them ideal for dynamic players.",
    price: 139.99,
    cloudinaryValues: [
      "WOW_Flash_1_gy7tsy.webp",
      "WOW_Flash_2_vseyj9.webp",
      "WOW_Flash_3_jdosmg.webp",
      "WOW_Flash_4_n687ak.webp",
      "WOW_Flash_5_cnlpvu.webp",
      "WOW_Flash_6_i1amem.webp",
      "WOW_Flash_7_hagqi7.webp"
    ],
    availableSizes: ["10", "10.5", "11", "11.5", "12"],
    measuresIn: {
      "7": { footLength: 9.625 },
      "7.5": { footLength: 9.75 },
      "8": { footLength: 9.875 },
      "8.5": { footLength: 10 },
      "9": { footLength: 10.125 },
      "9.5": { footLength: 10.25 },
      "10": { footLength: 10.5 },
      "10.5": { footLength: 10.625 },
      "11": { footLength: 10.75 },
      "11.5": { footLength: 10.875 },
      "12": { footLength: 11 },
      "13": { footLength: 11.5 }
    },
    measuresCm: {}
  },
  {
    id: 10,
    categories: [
      { id: 5, name: "Sneakers" }
    ],
    name: "Way of Wade Shadow",
    description: "The Way of Wade Shadow sets a new standard for stealth and style on the court. Featuring a sleek design with premium materials, these shoes offer enhanced lateral support and impact protection. The innovative cushioning system and breathable construction ensure sustained comfort throughout your game.",
    price: 144.99,
    cloudinaryValues: [
      "WOW_Shadow_1_paf8k3.webp",
      "WOW_Shadow_2_efxfzm.webp",
      "WOW_Shadow_3_wwxz6d.webp",
      "WOW_Shadow_4_kdrizd.webp",
      "WOW_Shadow_5_e73lgk.webp",
      "WOW_Shadow_6_tlbo6f.webp"
    ],
    availableSizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"],
    measuresIn: {
      "7": { footLength: 9.625 },
      "7.5": { footLength: 9.75 },
      "8": { footLength: 9.875 },
      "8.5": { footLength: 10 },
      "9": { footLength: 10.125 },
      "9.5": { footLength: 10.25 },
      "10": { footLength: 10.5 },
      "10.5": { footLength: 10.625 },
      "11": { footLength: 10.75 },
      "11.5": { footLength: 10.875 },
      "12": { footLength: 11 },
      "13": { footLength: 11.5 }
    },
    measuresCm: {}
  },
  {
    id: 11,
    categories: [
      {
        id: 5, name: "Sneakers"
      }
    ],
    
    name: "Way of Wade Slides",
    description: "Perfect for pre and post-game comfort, the Way of Wade Slides offer premium recovery support. The ergonomic footbed and soft cushioning provide ultimate relaxation, while the durable construction ensures lasting quality. Featuring a sleek design with signature WOW details for style and comfort.",
    price: 49.99,
    cloudinaryValues: [
      "WOW_Slides_1_r3jcaa.webp",
      "WOW_Slides_2_tvrcio.webp",
      "WOW_Slides_3_demtsl.webp",
      "WOW_Slides_4_lxtnhi.webp",
      "WOW_Slides_5_bl6bgj.webp",
      "WOW_Slides_6_hp6g0j.webp",
      "WOW_Slides_7_ud6c28.webp"
    ],
    availableSizes: ["7", "8", "9", "10", "11", "12", "13"],
    measuresIn: {
      "7": { footLength: 9.625 },
      "8": { footLength: 9.875 },
      "9": { footLength: 10.125 },
      "10": { footLength: 10.5 },
      "11": { footLength: 10.75 },
      "12": { footLength: 11 },
      "13": { footLength: 11.5 }
    },
    measuresCm: {}
  },
  {
    id: 12,
    categories: [
      { id: 5, name: "Sneakers" }
    ],
    name: "Way of Wade All City Red",
    description: "The Way of Wade All City Red edition brings bold style to the court with its vibrant colorway. Engineered for performance and durability, these shoes feature responsive cushioning and a supportive fit. The premium materials and striking design make them a standout choice for players who want to make a statement.",
    price: 129.99,
    cloudinaryValues: [
      "WAC_Red_1_fqlxts.webp",
      "WAC_Red_2_ssqljw.webp",
      "WAC_Red_3_mmxys3.webp",
      "WAC_Red_4_zuagbo.webp",
      "WAC_Red_5_srpu3z.webp",
      "WAC_Red_6_urfb7n.webp",
      "WAC_Red_7_j22ldg.webp"
    ],
    availableSizes: ["7", "7.5", "8", "8.5", "11.5", "12", "13"],
    measuresIn: {
      "7": { footLength: 9.625 },
      "7.5": { footLength: 9.75 },
      "8": { footLength: 9.875 },
      "8.5": { footLength: 10 },
      "9": { footLength: 10.125 },
      "9.5": { footLength: 10.25 },
      "10": { footLength: 10.5 },
      "10.5": { footLength: 10.625 },
      "11": { footLength: 10.75 },
      "11.5": { footLength: 10.875 },
      "12": { footLength: 11 },
      "13": { footLength: 11.5 }
    },
    measuresCm: {}
  },
  {
    id: 13,
    categories: [
      { id: 5, name: "Sneakers" }
    ],
    name: "Way of Wade All City Veterans",
    description: "The Way of Wade All City Veterans edition pays tribute to the game's heritage with its classic design and premium materials. Built for comfort and performance, these shoes feature advanced cushioning technology and a supportive fit. The timeless design and quality construction make them a perfect choice for players who appreciate tradition and performance.",
    price: 134.99,
    cloudinaryValues: [
      "WAC_Veterans_1_nocvzc.webp",
      "WAC_Veterans_2_roulrr.webp",
      "WAC_Veterans_3_c4gpqk.webp",
      "WAC_Veterans_4_tyivuu.webp",
      "WAC_Veterans_5_pth28a.webp",
      "WAC_Veterans_6_ifdl12.webp",
      "WAC_Veterans_7_fuzwi4.webp"
    ],
    availableSizes: ["7", "7.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"],
    measuresIn: {
      "7": { footLength: 9.625 },
      "7.5": { footLength: 9.75 },
      "8": { footLength: 9.875 },
      "8.5": { footLength: 10 },
      "9": { footLength: 10.125 },
      "9.5": { footLength: 10.25 },
      "10": { footLength: 10.5 },
      "10.5": { footLength: 10.625 },
      "11": { footLength: 10.75 },
      "11.5": { footLength: 10.875 },
      "12": { footLength: 11 },
      "13": { footLength: 11.5 }
    },
    measuresCm: {}
  },
  {
    id: 14,
    categories: [
      { id: 5, name: "Sneakers" }
    ],
    name: "Way of Wade All City",
    description: "The Way of Wade All City combines street style with court performance. Featuring a sleek design and responsive cushioning, these shoes deliver exceptional comfort and support. The durable construction and modern aesthetic make them perfect for both on-court performance and off-court style.",
    price: 124.99,
    cloudinaryValues: [
      "WOW_ALL_CITY_1_fnrpbv.webp",
      "WOW_ALL_CITY_2_sp7gb0.webp",
      "WOW_ALL_CITY_3_u00xw5.webp",
      "WOW_ALL_CITY_4_zticuq.webp",
      "WOW_ALL_CITY_5_aeg4nk.webp",
      "WOW_ALL_CITY_6_kkrpsy.webp",
      "WOW_ALL_CITY_7_gxuuph.webp"
    ],
    availableSizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "13"],
    measuresIn: {
      "7": { footLength: 9.625 },
      "7.5": { footLength: 9.75 },
      "8": { footLength: 9.875 },
      "8.5": { footLength: 10 },
      "9": { footLength: 10.125 },
      "9.5": { footLength: 10.25 },
      "10": { footLength: 10.5 },
      "10.5": { footLength: 10.625 },
      "11": { footLength: 10.75 },
      "11.5": { footLength: 10.875 },
      "12": { footLength: 11 },
      "13": { footLength: 11.5 }
    },
    measuresCm: {}
  },
  {
    id: 15,
    categories: [
      { id: 5, name: "Sneakers" }
    ],
    name: "Way of Wade Overtown",
    description: "The Way of Wade Overtown edition brings Miami's vibrant culture to the court. Featuring a unique design inspired by the city's energy, these shoes offer superior comfort and performance. The premium materials and innovative technology make them a perfect choice for players who want to stand out while maintaining top-tier performance.",
    price: 139.99,
    cloudinaryValues: [
      "WOW_Overtown_1_uax7oj.webp",
      "WOW_Overtown_2_wxe4tt.webp",
      "WOW_Overtown_3_qobnep.webp",
      "WOW_Overtown_4_dgza9f.webp",
      "WOW_Overtown_5_vvzxqj.webp",
      "WOW_Overtown_6_lwkdhj.webp",
      "WOW_Overtown_7_al0wmj.webp"
    ],
    availableSizes: ["7", "7.5", "8", "8.5","10.5", "11", "11.5", "12"],
    measuresIn: {
      "7": { footLength: 9.625 },
      "7.5": { footLength: 9.75 },
      "8": { footLength: 9.875 },
      "8.5": { footLength: 10 },
      "9": { footLength: 10.125 },
      "9.5": { footLength: 10.25 },
      "10": { footLength: 10.5 },
      "10.5": { footLength: 10.625 },
      "11": { footLength: 10.75 },
      "11.5": { footLength: 10.875 },
      "12": { footLength: 11 },
      "13": { footLength: 11.5 }
    },
    measuresCm: {}
  },
  {
    id: 16,
    categories: [
      { id: 5, name: "Sneakers" }
    ],
    name: "Way of Wade 808 4 Ultra",
    description: "The Way of Wade 808 4 Ultra takes performance to the next level with its advanced technology and premium construction. Featuring enhanced cushioning and support, these shoes deliver exceptional comfort and responsiveness. The sleek design and innovative features make them a top choice for players seeking maximum performance and style.",
    price: 149.99,
    cloudinaryValues: [
      "Wade_808_4_Ultra_dgeulq.webp",
      "Wade_808_4_Ultra_2_csi6h9.webp",
      "Wade_808_4_Ultra_3_xfu8fg.webp",
      "Wade_808_4_Ultra_4_yffdjp.webp",
      "Wade_808_4_Ultra_5_aibmqx.webp",
      "Wade_808_4_Ultra_6_nha2cl.webp",
      "Wade_808_4_Ultra_7_cosx2i.webp"
    ],
    availableSizes: ["7", "7.5", "8", "11", "11.5", "12", "13"],
    measuresIn: {
      "7": { footLength: 9.625 },
      "7.5": { footLength: 9.75 },
      "8": { footLength: 9.875 },
      "8.5": { footLength: 10 },
      "9": { footLength: 10.125 },
      "9.5": { footLength: 10.25 },
      "10": { footLength: 10.5 },
      "10.5": { footLength: 10.625 },
      "11": { footLength: 10.75 },
      "11.5": { footLength: 10.875 },
      "12": { footLength: 11 },
      "13": { footLength: 11.5 }
    },
    measuresCm: {}
  },
  {
    id: 17,
    categories: [
      { id: 2, name: "Tees" }
    ],
    name: "Among Roses Wolves Tee",
    description: "A unique blend of street style and basketball culture, featuring a striking wolf design among roses. Perfect for those who want to make a statement both on and off the court.",
    price: 49.99,
    cloudinaryValues: [
      "Among_Roses_Wolves_1_xqab2y.webp",
      "Among_Roses_Wolves_2_mw7kvt.webp",
      "Among_Roses_Wolves_3_yuehin.webp",
      "Among_Roses_Wolves_4_lfv3oa.webp",
      "Among_Roses_Wolves_5_ikggry.webp",
      "Among_Roses_Wolves_6_ql6nfl.webp"
    ],
    availableSizes: ["S", "M", "L", "XL"],
    measuresIn: {
      S: { chestWidth: 18.5, sleeveLength: 7.5, itemLength: 27 },
      M: { chestWidth: 20, sleeveLength: 8, itemLength: 28 },
      L: { chestWidth: 21.5, sleeveLength: 8.5, itemLength: 29 },
      XL: { chestWidth: 23, sleeveLength: 9, itemLength: 30 },
      "2XL": { chestWidth: 24.5, sleeveLength: 9.5, itemLength: 31 }
    },
    measuresCm: {}
  },
  {
    id: 18,
    categories: [
      { id: 2, name: "Tees" }
    ],
    name: "Demon Slayer Wolves Tee",
    description: "A bold design inspired by street basketball culture, featuring a demon slayer wolf motif. This tee combines urban style with basketball heritage.",
    price: 54.99,
    cloudinaryValues: [
      "DemonSlayer_Wolves_1_twnaqk.webp",
      "DemonSlayer_Wolves_2_ttlmc8.webp",
      "DemonSlayer_Wolves_3_lu7lsz.webp",
      "DemonSlayer_Wolves_4_hiusoo.webp",
      "DemonSlayer_Wolves_5_klkjpg.webp",
      "DemonSlayer_Wolves_6_rf8gvv.webp",
      "DemonSlayer_Wolves_7_z5uws1.webp"
    ],
    availableSizes: ["M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 18.5, sleeveLength: 7.5, itemLength: 27 },
      M: { chestWidth: 20, sleeveLength: 8, itemLength: 28 },
      L: { chestWidth: 21.5, sleeveLength: 8.5, itemLength: 29 },
      XL: { chestWidth: 23, sleeveLength: 9, itemLength: 30 },
      "2XL": { chestWidth: 24.5, sleeveLength: 9.5, itemLength: 31 }
    },
    measuresCm: {}
  },
  {
    id: 19,
    categories: [
      { id: 2, name: "Tees" }
    ],
    name: "Malbon Basketball Tee",
    description: "A premium quality tee featuring the iconic Malbon basketball design. Perfect for those who appreciate both street style and basketball culture.",
    price: 59.99,
    cloudinaryValues: [
      "Malbon_1_t6mhfp.webp",
      "Malbon_2_afrvsf.webp",
      "Malbon_3_fc8rzd.webp",
      "Malbon_4_v3lwum.webp",
      "Malbon_5_sg8e32.webp"
    ],
    availableSizes: ["S", "M", "L", "XL"],
    measuresIn: {
      S: { chestWidth: 18.5, sleeveLength: 7.5, itemLength: 27 },
      M: { chestWidth: 20, sleeveLength: 8, itemLength: 28 },
      L: { chestWidth: 21.5, sleeveLength: 8.5, itemLength: 29 },
      XL: { chestWidth: 23, sleeveLength: 9, itemLength: 30 }
    },
    measuresCm: {}
  },
  {
    id: 20,
    categories: [
      { id: 2, name: "Tees" }
    ],
    name: "Wolves Angel Tee",
    description: "A celestial-inspired design featuring a wolf angel motif. This tee combines street style with a touch of mysticism, perfect for those who want to stand out.",
    price: 49.99,
    cloudinaryValues: [
      "Wolves_Angel_1_yfixba.webp",
      "Wolves_Angel_2_xsajbp.webp",
      "Wolves_Angel_3_kaemeq.webp",
      "Wolves_Angel_4_dxspgy.webp",
      "Wolves_Angel_5_ugjkvj.webp",
      "Wolves_Angel_6_rpgsbl.webp",
      "Wolves_Angel_7_wpik2g.webp",
      "Wolves_Angel_8_nku33c.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 18.5, sleeveLength: 7.5, itemLength: 27 },
      M: { chestWidth: 20, sleeveLength: 8, itemLength: 28 },
      L: { chestWidth: 21.5, sleeveLength: 8.5, itemLength: 29 },
      XL: { chestWidth: 23, sleeveLength: 9, itemLength: 30 },
      "2XL": { chestWidth: 24.5, sleeveLength: 9.5, itemLength: 31 }
    },
    measuresCm: {}
  },
  {
    id: 21,
    categories: [
      { id: 2, name: "Tees" }
    ],
    name: "Wolves Gatubela Tee",
    description: "A unique fusion of street style and comic book culture, featuring a wolf in a catwoman-inspired design. Perfect for those who want to make a bold statement.",
    price: 54.99,
    cloudinaryValues: [
      "Wolves_Gatubela_1_xi75mv.webp",
      "Wolves_Gatubela_2_pnmprw.webp",
      "Wolves_Gatubela_3_sblzyz.webp",
      "Wolves_Gatubela_4_m4luoz.webp",
      "Wolves_Gatubela_5_qfdluh.webp",
      "Wolves_Gatubela_6_eyhnf0.webp",
      "Wolves_Gatubela_7_cxhq08.webp"
    ],
    availableSizes: ["S", "M", "L", "XL"],
    measuresIn: {
      S: { chestWidth: 18.5, sleeveLength: 7.5, itemLength: 27 },
      M: { chestWidth: 20, sleeveLength: 8, itemLength: 28 },
      L: { chestWidth: 21.5, sleeveLength: 8.5, itemLength: 29 },
      XL: { chestWidth: 23, sleeveLength: 9, itemLength: 30 },
      "2XL": { chestWidth: 24.5, sleeveLength: 9.5, itemLength: 31 }
    },
    measuresCm: {}
  },
  {
    id: 22,
    categories: [
      { id: 2, name: "Tees" }
    ],
    name: "Wolves Spiderman Tee",
    description: "A creative blend of street style and superhero culture, featuring a wolf in a Spiderman-inspired design. Perfect for those who want to showcase their unique style.",
    price: 54.99,
    cloudinaryValues: [
      "Wolves_Spiderman_1_ltuh4z.webp",
      "Wolves_Spiderman_2_jqhhgi.webp",
      "Wolves_Spiderman_3_bdjxmu.webp",
      "Wolves_Spiderman_4_qu4cla.webp",
      "Wolves_Spiderman_5_k3l5p2.webp",
      "Wolves_Spiderman_6_lg729u.webp",
      "Wolves_Spiderman_7_r0sh6n.webp",
      "Wolves_Spiderman_8_fd8th7.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 18.5, sleeveLength: 7.5, itemLength: 27 },
      M: { chestWidth: 20, sleeveLength: 8, itemLength: 28 },
      L: { chestWidth: 21.5, sleeveLength: 8.5, itemLength: 29 },
      XL: { chestWidth: 23, sleeveLength: 9, itemLength: 30 },
      "2XL": { chestWidth: 24.5, sleeveLength: 9.5, itemLength: 31 }
    },
    measuresCm: {}
  },
  {
    id: 23,
    categories: [
      { id: 2, name: "Tees" }
    ],
    name: "Bucketsquad Ball Tee",
    description: "A basketball-inspired design featuring the iconic Bucketsquad logo. Perfect for those who want to show their love for the game in style.",
    price: 44.99,
    cloudinaryValues: [
      "Bucketsquad_Ball_1_npswqs.webp",
      "Bucketsquad_Ball_2_ggqcxw.webp",
      "Bucketsquad_Ball_3_m3n1ad.webp",
      "Bucketsquad_Ball_4_mya0jv.webp",
      "Bucketsquad_Ball_5_jglsvy.webp"
    ],
    availableSizes: ["S", "M", "L", "XL"],
    measuresIn: {
      S: { chestWidth: 18.5, sleeveLength: 7.5, itemLength: 27 },
      M: { chestWidth: 20, sleeveLength: 8, itemLength: 28 },
      L: { chestWidth: 21.5, sleeveLength: 8.5, itemLength: 29 },
      XL: { chestWidth: 23, sleeveLength: 9, itemLength: 30 }
    },
    measuresCm: {}
  },
  {
    id: 24,
    categories: [
      { id: 2, name: "Tees" }
    ],
    name: "Undefeated Supernova Tee",
    description: "A premium quality tee featuring the iconic Undefeated Supernova design. Perfect for those who want to showcase their street style with a touch of basketball culture.",
    price: 59.99,
    cloudinaryValues: [
      "Undefeated_Supernova_1_wcj6sy.webp",
      "Undefeated_Supernova_2_vvlyxk.webp",
      "Undefeated_Supernova_3_euef3s.webp",
      "Undefeated_Supernova_4_vktfuv.webp"
    ],
    availableSizes: ["S", "M", "L", "XL"],
    measuresIn: {
      S: { chestWidth: 18.5, sleeveLength: 7.5, itemLength: 27 },
      M: { chestWidth: 20, sleeveLength: 8, itemLength: 28 },
      L: { chestWidth: 21.5, sleeveLength: 8.5, itemLength: 29 },
      XL: { chestWidth: 23, sleeveLength: 9, itemLength: 30 }
    },
    measuresCm: {}
  }
];

// Add new jersey products
const newJerseys = [
  {
    id: 25,
    categories: [
      { id: 3, name: "Jerseys" }
    ],
    name: "North Carolina Vintage Jersey",
    description: "Classic North Carolina basketball jersey featuring vintage styling and premium materials. Perfect for fans of college basketball history.",
    price: 89.99,
    cloudinaryValues: [
      "North_Carolina_Vintage_1_eyjpzu.jpg",
      "North_Carolina_Vintage_2_xmbiu0.jpg",
      "North_Carolina_Vintage_3_bxmkjk.jpg",
      "North_Carolina_Vintage_4_cnwwjv.jpg",
      "North_Carolina_Vintage_5_b4aro6.jpg"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 20, length: 29 },
      M: { chestWidth: 22, length: 30 },
      L: { chestWidth: 24, length: 31 },
      XL: { chestWidth: 26, length: 32 },
      "2XL": { chestWidth: 28, length: 33 }
    },
    measuresCm: {}
  },
  {
    id: 26,
    categories: [
      { id: 3, name: "Jerseys" }
    ],
    name: "Charlotte Hornets Classic Jersey",
    description: "Authentic Charlotte Hornets jersey featuring the iconic teal colorway and classic design elements.",
    price: 94.99,
    cloudinaryValues: [
      "Hornets_1_nzklmv.webp",
      "Hornets_2_sfoosh.webp",
      "Hornets_3_mhpt3k.webp",
      "Hornets_4_qzja3b.webp",
      "Hornets_5_cz460c.webp"
    ],
    availableSizes: ["S", "M", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 20, length: 29 },
      M: { chestWidth: 22, length: 30 },
      L: { chestWidth: 24, length: 31 },
      XL: { chestWidth: 26, length: 32 },
      "2XL": { chestWidth: 28, length: 33 }
    },
    measuresCm: {}
  },
  {
    id: 27,
    categories: [
      { id: 3, name: "Jerseys" }
    ],
    name: "Memphis Grizzlies Vintage Jersey",
    description: "Retro-styled Memphis Grizzlies jersey celebrating the team's rich history and iconic design.",
    price: 89.99,
    cloudinaryValues: [
      "Memphis_1_rnzxwo.webp",
      "Memphis_2_czikno.webp",
      "Memphis_3_kraun5.webp",
      "Memphis_4_sdj1bj.webp",
      "Memphis_5_o2ec7n.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 20, length: 29 },
      M: { chestWidth: 22, length: 30 },
      L: { chestWidth: 24, length: 31 },
      XL: { chestWidth: 26, length: 32 },
      "2XL": { chestWidth: 28, length: 33 }
    },
    measuresCm: {}
  },
  {
    id: 28,
    categories: [
      { id: 3, name: "Jerseys" }
    ],
    name: "North Carolina Modern Jersey",
    description: "Contemporary take on the classic North Carolina basketball jersey, featuring modern materials and fit.",
    price: 99.99,
    cloudinaryValues: [
      "Carolina_1_oudvmt.webp",
      "Carolina_2_btlwgb.webp",
      "Carolina_3_mhagnf.webp",
      "Carolina_4_towmqz.webp",
      "Carolina_5_ksbocc.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 20, length: 29 },
      M: { chestWidth: 22, length: 30 },
      L: { chestWidth: 24, length: 31 },
      XL: { chestWidth: 26, length: 32 },
      "2XL": { chestWidth: 28, length: 33 }
    },
    measuresCm: {}
  },
  {
    id: 29,
    categories: [
      { id: 3, name: "Jerseys" }
    ],
    name: "Orlando Magic Classic Jersey",
    description: "Authentic Orlando Magic jersey featuring the team's signature design and premium quality construction.",
    price: 94.99,
    cloudinaryValues: [
      "Orlando_1_skdqkd.webp",
      "Orlando_2_kqssmg.webp",
      "Orlando_3_oubtrp.webp",
      "Orlando_4_fhtigd.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 20, length: 29 },
      M: { chestWidth: 22, length: 30 },
      L: { chestWidth: 24, length: 31 },
      XL: { chestWidth: 26, length: 32 },
      "2XL": { chestWidth: 28, length: 33 }
    },
    measuresCm: {}
  },
  {
    id: 30,
    categories: [
      { id: 3, name: "Jerseys" }
    ],
    name: "Toronto Raptors Purple Jersey",
    description: "Iconic Toronto Raptors purple jersey featuring classic team design and premium materials.",
    price: 99.99,
    cloudinaryValues: [
      "Raptors_1_ieleh6.webp",
      "Raptors_2_mkeqbe.webp",
      "Raptors_3_qny6dz.webp",
      "Raptors_4_d1egoh.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 20, length: 29 },
      M: { chestWidth: 22, length: 30 },
      L: { chestWidth: 24, length: 31 },
      XL: { chestWidth: 26, length: 32 },
      "2XL": { chestWidth: 28, length: 33 }
    },
    measuresCm: {}
  },
  {
    id: 31,
    categories: [
      { id: 3, name: "Jerseys" }
    ],
    name: "Toronto Raptors White Jersey",
    description: "Clean and modern Toronto Raptors white jersey, perfect for any basketball enthusiast.",
    price: 94.99,
    cloudinaryValues: [
      "Raptors_White_1_gze4qp.webp",
      "Raptors_White_2_ryc9yq.webp",
      "Raptors_White_3_xd0aor.webp",
      "Raptors_White_4_gbtgnj.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 20, length: 29 },
      M: { chestWidth: 22, length: 30 },
      L: { chestWidth: 24, length: 31 },
      XL: { chestWidth: 26, length: 32 },
      "2XL": { chestWidth: 28, length: 33 }
    },
    measuresCm: {}
  },
  {
    id: 32,
    categories: [
      { id: 3, name: "Jerseys" }
    ],
    name: "Miami Heat Rose Edition Jersey",
    description: "Limited edition Miami Heat jersey featuring unique rose design elements and premium construction.",
    price: 109.99,
    cloudinaryValues: [
      "Heat_1_abtjvj.webp",
      "Heat_2_jvdwsc.webp",
      "Heat_3_bxbvob.webp",
      "Heat_4_hyz2ur.jpg",
      "Heat_5_hof134.jpg"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 20, length: 29 },
      M: { chestWidth: 22, length: 30 },
      L: { chestWidth: 24, length: 31 },
      XL: { chestWidth: 26, length: 32 },
      "2XL": { chestWidth: 28, length: 33 }
    },
    measuresCm: {}
  },
  {
    id: 33,
    categories: [
      { id: 3, name: "Jerseys" }
    ],
    name: "Lakers White Edition Jersey",
    description: "Clean and elegant Lakers white edition jersey, featuring premium materials and classic team design.",
    price: 99.99,
    cloudinaryValues: [
      "Lakers_White_1_gmvj8y.webp",
      "Lakers_White_2_rzdq10.webp",
      "Lakers_White_3_tu6wfb.webp",
      "Lakers_White_4_crmvoq.webp",
      "Lakers_White_5_yuhpaz.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 20, length: 29 },
      M: { chestWidth: 22, length: 30 },
      L: { chestWidth: 24, length: 31 },
      XL: { chestWidth: 26, length: 32 },
      "2XL": { chestWidth: 28, length: 33 }
    },
    measuresCm: {}
  },
  {
    id: 34,
    categories: [
      { id: 3, name: "Jerseys" }
    ],
    name: "Minnesota Timberwolves Vintage Jersey",
    description: "Classic Timberwolves jersey featuring vintage team design and high-quality construction.",
    price: 94.99,
    cloudinaryValues: [
      "Wolves_Vintage_1_txnrcr.webp",
      "Wolves_Vintage_2_uvdkub.webp",
      "Wolves_Vintage_3_ozifss.webp",
      "Wolves_Vintage_4_li8ynk.webp",
      "Wolves_Vintage_5_r4mfa2.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { chestWidth: 20, length: 29 },
      M: { chestWidth: 22, length: 30 },
      L: { chestWidth: 24, length: 31 },
      XL: { chestWidth: 26, length: 32 },
      "2XL": { chestWidth: 28, length: 33 }
    },
    measuresCm: {}
  }
];

// Añadir nuevos productos de accesorios
const newAccessories = [
  {
    id: 35,
    categories: [{ id: 6, name: "Accessories" }],
    name: "Big Backpack",
    description: "A spacious and durable backpack, perfect for carrying all your basketball equipment and personal accessories.",
    price: 89.99,
    cloudinaryValues: [
      "Big_Backpack_1_jriiom.webp",
      "Big_Backpack_2_wa5inj.webp",
      "Big_Backpack_3_nf0hqz.webp",
      "Big_Backpack_4_alkkqj.webp",
      "Big_Backpack_5_pntgzn.webp",
      "Big_Backpack_6_dthwxf.webp",
      "Big_Backpack_7_kvwtki.webp",
      "Big_Backpack_8_y7rfmf.webp"
    ],
    availableSizes: ["One Size"],
    measuresIn: {
      "One Size": {
        height: 18,
        width: 12,
        depth: 8
      }
    },
    measuresCm: {}
  },
  {
    id: 36,
    categories: [{ id: 6, name: "Accessories" }],
    name: "Tech Backpack",
    description: "Modern backpack with special compartment for electronic devices and basketball accessories.",
    price: 99.99,
    cloudinaryValues: [
      "Tech_Backpack_1_px3mtz.webp",
      "Tech_Backpack_2_gxeodz.webp",
      "Tech_Backpack_3_vie20r.webp",
      "Tech_Backpack_4_ibixug.webp",
      "Tech_Backpack_5_fqlgbr.webp",
      "Tech_Backpack_6_uywmhi.webp",
      "Tech_Backpack_7_pokejt.webp",
      "Tech_Backpack_8_tcrqdm.webp"
    ],
    availableSizes: ["One Size"],
    measuresIn: {
      "One Size": {
        height: 17,
        width: 11,
        depth: 7
      }
    },
    measuresCm: {}
  },
  {
    id: 37,
    categories: [{ id: 6, name: "Accessories" }],
    name: "Basketball Hoop",
    description: "The remarkable Beast Portable Basketball Hoop – a system that stands as the epitome of portability within its size class. Offering the unwavering stability reminiscent of an in-ground hoop, the ingenious design incorporates a mobile advantage through its wheeled base. Prepare to experience authentic rebounds akin to the professional court, courtesy of the expansive 60\" glass backboard.",
    price: 999.99,
    cloudinaryValues: [
      "Hoop_1_hzkaqb.webp",
      "Hoop_2_reswjf.webp",
      "Hoop_3_cngaea.webp",
      "Hoop_4_g8nlyr.webp"
    ],
    availableSizes: ["One Size"],
    measuresIn: {
      "One Size": {
        length: 1.5,
        width: 1
      }
    },
    measuresCm: {}
  },
  {
    id: 38,
    categories: [{ id: 6, name: "Accessories" }],
    name: "Basketball Chain Necklace",
    description: "Chain with basketball pendant, ideal to complement your urban style.",
    price: 44.99,
    cloudinaryValues: [
      "Necklace_1_skjv4l.webp",
      "Necklace_2_o6kj9s.webp",
      "Necklace_3_lcbmyv.webp",
      "Necklace_4_sroto8.webp",
      "Necklace_5_otcwpe.webp",
      "Necklace_6_krpeuk.webp"
    ],
    availableSizes: ["One Size"],
    measuresIn: {
      "One Size": {
        length: 2,
        width: 1.2
      }
    },
    measuresCm: {}
  },
  {
    id: 39,
    categories: [{ id: 6, name: "Accessories" }],
    name: "Miami Heat Shaker",
    description: "Official Miami Heat shaker, perfect for showing your support for the team.",
    price: 24.99,
    cloudinaryValues: [
      "Heats_Shaker_1_ei3seq.webp",
      "Heats_Shaker_2_scbg0r.webp",
      "Heats_Shaker_3_e3yxuc.webp",
      "Heats_Shaker_4_rywact.webp",
      "Heats_Shaker_5_rba87p.webp",
      "Heats_Shaker_6_pafasc.webp",
      "Heats_Shaker_7_gwa5qa.webp"
    ],
    availableSizes: ["One Size"],
    measuresIn: {
      "One Size": {
        height: 8,
        diameter: 3
      }
    },
    measuresCm: {}
  },
  {
    id: 40,
    categories: [{ id: 6, name: "Accessories" }],
    name: "Drawstring Bag",
    description: "Lightweight and practical drawstring bag, ideal for carrying your basketball accessories.",
    price: 29.99,
    cloudinaryValues: [
      "Drawstring_1_uvvxcp.webp",
      "Drawstring_2_fihs5l.webp",
      "Drawstring_3_vzujey.webp",
      "Drawstring_4_s0cfvh.webp",
      "Drawstring_5_ofv9uj.webp",
      "Drawstring_6_g7kbg2.webp"
    ],
    availableSizes: ["One Size"],
    measuresIn: {
      "One Size": {
        height: 15,
        width: 12
      }
    },
    measuresCm: {}
  },
  {
    id: 41,
    categories: [{ id: 6, name: "Accessories" }],
    name: "Chicago Bulls Shaker",
    description: "Official Chicago Bulls shaker, perfect for team fans.",
    price: 24.99,
    cloudinaryValues: [
      "Bulls_Shaker_1_jiysb7.webp",
      "Bulls_Shaker_2_lvptca.webp",
      "Bulls_Shaker_3_rokhgr.webp",
      "Bulls_Shaker_4_ydd3hd.webp",
      "Bulls_Shaker_5_j6iw4s.webp",
      "Bulls_Shaker_6_itolxh.webp",
      "Bulls_Shaker_7_jdjup1.webp"
    ],
    availableSizes: ["One Size"],
    measuresIn: {
      "One Size": {
        height: 8,
        diameter: 3
      }
    },
    measuresCm: {}
  }
];

// Añadir los nuevos accesorios al array de productos
products.push(...newAccessories);

// Añadir los nuevos jerseys al array de productos
products.push(...newJerseys);

// Añadir nuevos productos de balones
const newBalls = [
  {
    id: 42,
    categories: [{ id: 6, name: "Accessories" }],
    name: "Bucket Tidal Basketball",
    description: "Official basketball with wave design, perfect for playing on any surface.",
    price: 49.99,
    cloudinaryValues: [
      "Bucket_Tidal_1_mbtnia.webp",
      "Bucket_Tidal_2_afv3ra.webp",
      "Bucket_Tidal_3_dovkgo.webp",
      "Bucket_Tidal_4_tmebep.webp"
    ],
    availableSizes: [7, 8, 9],
  },
  {
    id: 43,
    categories: [{ id: 6, name: "Accessories" }],
    name: "Bucket Blossom Basketball",
    description: "Official basketball with floral design, ideal for players looking for a unique style.",
    price: 54.99,
    cloudinaryValues: [
      "Bucket_Blossom_1_x0ati6.webp",
      "Bucket_Blossom_2_r2eqgf.webp",
      "Bucket_Blossom_3_iuj7lf.webp",
      "Bucket_Blossom_4_r2jsm3.webp",
      "Bucket_Blossom_5_aweeim.webp"
    ],
    availableSizes: [8, 9],
  }
];

// Añadir los nuevos balones al array de productos
products.push(...newBalls);
// Añadir nuevos productos de shorts
const newShorts = [
  {
    id: 44,
    categories: [{ id: 4, name: "Shorts" }],
    name: "Ballislife Shorts",
    description: "Classic basketball shorts featuring the iconic Ballislife design. Perfect for both on and off the court.",
    price: 49.99,
    cloudinaryValues: [
      "Ballislife_Shorts_1_rygmcf.webp",
      "Ballislife_Shorts_2_bcpv24.webp",
      "Ballislife_Shorts_3_cgamxd.webp",
      "Ballislife_Shorts_4_ujbnxt.webp",
      "Ballislife_Shorts_5_mifqyo.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { waistWidth: 14.5, hipWidth: 20, itemLength: 18 },
      M: { waistWidth: 15.5, hipWidth: 21, itemLength: 19 },
      L: { waistWidth: 16.5, hipWidth: 22, itemLength: 20 },
      XL: { waistWidth: 17.5, hipWidth: 23, itemLength: 21 },
      "2XL": { waistWidth: 18.5, hipWidth: 24, itemLength: 22 }
    },
    measuresCm: {}
  },
  {
    id: 45,
    categories: [{ id: 4, name: "Shorts" }],
    name: "Compression Shorts",
    description: "High-performance compression shorts designed for maximum comfort and mobility during intense basketball games.",
    price: 39.99,
    cloudinaryValues: [
      "Compression_Shorts_1_vovzrr.webp",
      "Compression_Shorts_2_kr8kt7.webp",
      "Compression_Shorts_3_y70fm1.webp",
      "Compression_Shorts_4_doea8t.webp"
    ],
    availableSizes: ["S", "M", "L", "XL"],
    measuresIn: {
      S: { waistWidth: 14.5, hipWidth: 20, itemLength: 17 },
      M: { waistWidth: 15.5, hipWidth: 21, itemLength: 18 },
      L: { waistWidth: 16.5, hipWidth: 22, itemLength: 19 },
      XL: { waistWidth: 17.5, hipWidth: 23, itemLength: 20 }
    },
    measuresCm: {}
  },
  {
    id: 46,
    categories: [{ id: 4, name: "Shorts" }],
    name: "Fire Temu Shorts",
    description: "Bold and stylish basketball shorts featuring a fiery design pattern, perfect for making a statement on the court.",
    price: 44.99,
    cloudinaryValues: [
      "Fire_Temu_Shorts_1_dywzj1.webp",
      "Fire_Temu_Shorts_2_ujqaoq.webp",
      "Fire_Temu_Shorts_3_kd9urz.webp",
      "Fire_Temu_Shorts_4_fljpun.webp",
      "Fire_Temu_Shorts_5_jnbdlm.webp",
      "Fire_Temu_Shorts_6_l8uzh2.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { waistWidth: 14.5, hipWidth: 20, itemLength: 18 },
      M: { waistWidth: 15.5, hipWidth: 21, itemLength: 19 },
      L: { waistWidth: 16.5, hipWidth: 22, itemLength: 20 },
      XL: { waistWidth: 17.5, hipWidth: 23, itemLength: 21 },
      "2XL": { waistWidth: 18.5, hipWidth: 24, itemLength: 22 }
    },
    measuresCm: {}
  },
  {
    id: 47,
    categories: [{ id: 4, name: "Shorts" }],
    name: "Green Temu Shorts",
    description: "Vibrant green basketball shorts with modern design elements, offering both style and comfort for your game.",
    price: 44.99,
    cloudinaryValues: [
      "Green_Temu_Shorts_1_efnc2n.webp",
      "Green_Temu_Shorts_2_ac5rvr.webp",
      "Green_Temu_Shorts_3_bdscp4.webp",
      "Green_Temu_Shorts_4_jarkzn.webp",
      "Green_Temu_Shorts_5_feooud.webp",
      "Green_Temu_Shorts_6_dlinqf.webp",
      "Green_Temu_Shorts_7_cwbukl.webp",
      "Green_Temu_Shorts_8_gf8a35.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { waistWidth: 14.5, hipWidth: 20, itemLength: 18 },
      M: { waistWidth: 15.5, hipWidth: 21, itemLength: 19 },
      L: { waistWidth: 16.5, hipWidth: 22, itemLength: 20 },
      XL: { waistWidth: 17.5, hipWidth: 23, itemLength: 21 },
      "2XL": { waistWidth: 18.5, hipWidth: 24, itemLength: 22 }
    },
    measuresCm: {}
  },
  {
    id: 48,
    categories: [{ id: 4, name: "Shorts" }],
    name: "Green Fire Temu Shorts",
    description: "Unique basketball shorts combining green and fire elements for a distinctive look on the court.",
    price: 44.99,
    cloudinaryValues: [
      "Green_Fire_Temu_Shorts_1_uwstsx.webp",
      "Green_Fire_Temu_Shorts_2_x8swsq.webp",
      "Green_Fire_Temu_Shorts_3_wupk7h.webp",
      "Green_Fire_Temu_Shorts_4_zr7o6e.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { waistWidth: 14.5, hipWidth: 20, itemLength: 18 },
      M: { waistWidth: 15.5, hipWidth: 21, itemLength: 19 },
      L: { waistWidth: 16.5, hipWidth: 22, itemLength: 20 },
      XL: { waistWidth: 17.5, hipWidth: 23, itemLength: 21 },
      "2XL": { waistWidth: 18.5, hipWidth: 24, itemLength: 22 }
    },
    measuresCm: {}
  },
  {
    id: 49,
    categories: [{ id: 4, name: "Shorts" }],
    name: "Point3 Basketball Shorts",
    description: "Premium basketball shorts from Point3, designed for optimal performance and comfort during intense games.",
    price: 54.99,
    cloudinaryValues: [
      "Point3_Shorts_1_vfqmbl.webp",
      "Point3_Shorts_2_woyvyi.webp",
      "Point3_Shorts_3_mesb6c.webp",
      "Point3_Shorts_4_qsuzwq.webp",
      "Point3_Shorts_5_atidxn.webp",
      "Point3_Shorts_6_fcnaxb.webp",
      "Point3_Shorts_7_kntamg.webp",
      "Point3_Shorts_8_nrcqtu.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { waistWidth: 14.5, hipWidth: 20, itemLength: 18 },
      M: { waistWidth: 15.5, hipWidth: 21, itemLength: 19 },
      L: { waistWidth: 16.5, hipWidth: 22, itemLength: 20 },
      XL: { waistWidth: 17.5, hipWidth: 23, itemLength: 21 },
      "2XL": { waistWidth: 18.5, hipWidth: 24, itemLength: 22 }
    },
    measuresCm: {}
  },
  {
    id: 50,
    categories: [{ id: 4, name: "Shorts" }],
    name: "Snake Pattern Shorts",
    description: "Basketball shorts featuring a unique snake pattern design, perfect for players who want to stand out on the court.",
    price: 49.99,
    cloudinaryValues: [
      "Snake_Short_1_ntyj1d.webp",
      "Snake_Short_2_cb4znq.webp",
      "Snake_Short_3_b5j8tg.webp",
      "Snake_Short_4_zzjjbr.webp",
      "Snake_Short_5_q1c6vr.webp",
      "Snake_Short_6_zopp0a.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { waistWidth: 14.5, hipWidth: 20, itemLength: 18 },
      M: { waistWidth: 15.5, hipWidth: 21, itemLength: 19 },
      L: { waistWidth: 16.5, hipWidth: 22, itemLength: 20 },
      XL: { waistWidth: 17.5, hipWidth: 23, itemLength: 21 },
      "2XL": { waistWidth: 18.5, hipWidth: 24, itemLength: 22 }
    },
    measuresCm: {}
  },
  {
    id: 51,
    categories: [{ id: 4, name: "Shorts" }],
    name: "Christmas Edition Shorts",
    description: "Special edition basketball shorts with festive Christmas design, perfect for holiday season games.",
    price: 49.99,
    cloudinaryValues: [
      "Xmas_Short_1_c8nyw1.jpg",
      "Xmas_Short_2_szub04.webp",
      "Xmas_Short_3_ked7iy.jpg",
      "Xmas_Short_4_jkqz5l.jpg",
      "Xmas_Short_5_aszva2.webp"
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    measuresIn: {
      S: { waistWidth: 14.5, hipWidth: 20, itemLength: 18 },
      M: { waistWidth: 15.5, hipWidth: 21, itemLength: 19 },
      L: { waistWidth: 16.5, hipWidth: 22, itemLength: 20 },
      XL: { waistWidth: 17.5, hipWidth: 23, itemLength: 21 },
      "2XL": { waistWidth: 18.5, hipWidth: 24, itemLength: 22 }
    },
    measuresCm: {}
  }
];

// Añadir los nuevos shorts al array de productos
products.push(...newShorts);

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
