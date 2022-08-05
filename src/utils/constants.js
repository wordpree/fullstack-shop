import best1 from "../assets/best_1.svg";
import best2 from "../assets/best_2.svg";
import trend1 from "../assets/basket.svg";
import trend2 from "../assets/soapbar.svg";
import blog1 from "../assets/blog_1.png";
import blog2 from "../assets/blog_2.png";
import blog3 from "../assets/blog_3.png";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Shop",
    to: "/shop",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const banner = {
  title: ["Pear", <br />, "Kiwi & Mint"],
  content:
    "They say that home is where the heart is. Perhaps that’s why a feeling of loss is so apparent when you are far from the ones you love.",
  btn: "show now",
};

const collection = {
  title: ["Improve your well-being", <br />, "with Aromatherapy"],
  content:
    "Diffusing can be exactly what you need to add purpose and focus to your daily tasks. We've got tons of fun diffuser blends, with scents to suit every mood, day and situation.",
  btn: "Explore the Collection",
  titleFont: "50px",
  lineHeight: "53.95px",
};

const bseller = {
  title: ["Bestsellers"],
  content: "",
  btn: "shop all",
  titleFont: "50px",
  lineHeight: "48.95px",
  color: "#5F6C37",
};

const trend = {
  title: ["Trends"],
  content: "",
  btn: "shop all",
  titleFont: "50px",
  lineHeight: "48.95px",
  color: "#5F6C37",
};

const sliderSeller = [
  {
    title: "Aroma Diffuser",
    desc: "Original product comes in three styles of color, usb charger.",
    price: "$ 20",
    img: best1,
  },
  {
    title: "Lux Aroma Diffuser",
    desc: "Beautiful decorative object, perfumes the space with your favorite fragrance.",
    price: "$ 15",
    img: best2,
  },
  {
    title: "Neque, quisquam est",
    desc: "Vestibulum interdum leo sit amet felis tincidunt pulvinar.",
    price: "$ 18",
    img: best2,
  },
  {
    title: " Ipsum, adipisci velit",
    desc: "Donec sagittis ipsum nec magna rhoncus. Mauris accumsan imperdiet tincidunt.",
    price: "$ 31",
    img: best1,
  },
];

const sliderTrend = [
  {
    title: "Basket INNER BEAUTY",
    desc: "Luminescent Nutritive Serum, Rose Petal Hydrosol Mist  and Nourish Mud Cleanser.",
    price: "$ 64,95",
    img: trend1,
  },
  {
    title: "Uplift Handcrafted Soap Bar",
    desc: "Is a peaceful and balancing bar topped with calendula, dried rose petals and lavender.",
    price: "$ 15,12",
    img: trend2,
  },
  {
    title: "Neque, quisquam est",
    desc: "Vestibulum interdum leo sit amet felis tincidunt pulvinar.",
    price: "$ 18",
    img: trend2,
  },
  {
    title: " Ipsum, adipisci velit",
    desc: "Donec sagittis ipsum nec magna rhoncus. Mauris accumsan imperdiet tincidunt.",
    price: "$ 31",
    img: trend1,
  },
];

const blog = [
  {
    title: "How to create your own essential oil diffuser blends",
    desc: "As you begin creating your own diffuser blends, it’s important to keep a few ...",
    img: blog1,
  },
  {
    title: "7 easy oil-infused Mother’s Day gift ideas",
    desc: "Celebrate the mom in your life with these simple, handcrafted, heartfelt gifts!",
    img: blog2,
  },
  {
    title: "Geranium Bourbon: Fresh, floral, sweet",
    desc: "Fill your space with a fresh, uplifting aroma reminiscent of a greenhouse in full ...",
    img: blog3,
  },
];

const siteList = [
  {
    title: "Customer Support",
    list: [
      { label: "Shipping", link: "/shipping" },
      { label: "Free Returns", link: "#" },
      { label: "Track Your Order", link: "#" },
      { label: "Gift Cards", link: "#" },
    ],
  },
  {
    title: "About Us",
    list: [
      { label: "Our Values", link: "#" },
      { label: "Sustainability", link: "#" },
      { label: "Brand Ambassadors", link: "#" },
      { label: "Fitness Professionals", link: "#" },
    ],
  },
  {
    title: "Customer Service",
    list: [
      { label: "Help", link: "#" },
      { label: "Leader Support", link: "#" },
      { label: "Pleasant Grove Product Center", link: "#" },
      { label: "Recall—Important Safety Information", link: "#" },
    ],
  },
];

const products = [
  {
    name: "Lorem ipsum",
    price: 59.99,
    cate: ["Essential oils", "Aromatherapy"],
    color: ["#FF7E7E", "#7E7EFF"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?fruit",
    id: 1,
  },
  {
    name: "Maecenas auctor",
    price: 69.99,
    cate: ["Diffusers"],
    color: ["#FFDB7E", "#7E7EFF"],
    freeShipping: true,
    image: "https://source.unsplash.com/random/600×348/?nature",
    id: 2,
  },
  {
    name: "Nulla vitae ",
    price: 29.99,
    cate: ["Natural cosmetics", "Soap"],
    color: ["#7EFF7E"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?veg",
    id: 3,
  },
  {
    name: "Quisque",
    price: 119.99,
    cate: ["Basket INNER BEAUTY"],
    color: ["#FF7E7E", "#667876"],
    freeShipping: true,
    image: "https://source.unsplash.com/random/600×348/?cat",
    id: 4,
  },
  {
    name: "Curabitur posuere",
    price: 79.99,
    cate: ["Essential oils", "Aromatherapy", "Mint Soap"],
    color: ["#FF7E7E"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?cosmetics",
    id: 5,
  },
  {
    name: "Lorem ipsum",
    price: 49.99,
    cate: ["Aromatherapy", "Basket INNER BEAUTY"],
    color: ["#FFDB7E"],
    freeShipping: true,
    image: "https://source.unsplash.com/random/600×348/?sunset",
    id: 6,
  },
  {
    name: "In auctor orci ",
    price: 49.99,
    cate: ["Natural cosmetics", "Mint Soap"],
    color: ["#667876"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?ocean",
    id: 7,
  },
  {
    name: "Nunc nec",
    price: 99.99,
    cate: ["Aromatherapy", "Natural cosmetics"],
    color: ["#FF7E7E", "#7E7EFF"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?hiking",
    id: 8,
  },
  {
    name: "Sed eget",
    price: 19.99,
    cate: ["Natural cosmetics", "Mint Soap", "Basket INNER BEAUTY"],
    color: ["#7E7EFF"],
    freeShipping: true,
    image: "https://source.unsplash.com/random/600×348/?cloud",
    id: 9,
  },
  {
    name: "Donec luctus",
    price: 129.88,
    cate: ["Essential oils", "Aromatherapy", "Natural cosmetics", "Mint Soap"],
    color: ["#FF7E7E", "#667876"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?raining",
    id: 10,
  },
  {
    name: "Phasellus ut",
    price: 219.99,
    cate: ["Mint Soap"],
    color: ["#667876"],
    freeShipping: true,
    image: "https://source.unsplash.com/random/600×348/?boat",
    id: 11,
  },
  {
    name: "Proin consequat ",
    price: 48.99,
    cate: ["Basket INNER BEAUTY"],
    color: ["#7E7EFF", "#667876"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?work",
    id: 12,
  },
  {
    name: "Sed et tortor",
    price: 59.99,
    cate: ["Essential oils"],
    color: ["#7E7EFF"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?freight",
    id: 13,
  },
  {
    name: "Aliquam dictum",
    price: 109.99,
    cate: ["Natural cosmetics", "Mint Soap", "Basket INNER BEAUTY"],
    color: ["#7E7EFF"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?jogging",
    id: 14,
  },
  {
    name: "Phasellus varius",
    price: 28.99,
    cate: ["Natural cosmetics", "Mint Soap"],
    color: ["#FF7E7E"],
    freeShipping: true,
    image: "https://source.unsplash.com/random/600×348/?oil",
    id: 15,
  },
  {
    name: "Etiam fermentum",
    price: 139.99,
    cate: ["Essential oils", "Mint Soap"],
    color: ["#FF7E7E", "#667876"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?cloth",
    id: 16,
  },
  {
    name: "Integer eget",
    price: 109.19,
    cate: ["Aromatherapy"],
    color: ["#FF7E7E", "#667876"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?desk",
    id: 17,
  },
  {
    name: "Pellentesque quis",
    price: 189.99,
    cate: ["Natural cosmetics", "Essential oils"],
    color: ["#FF7E7E"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?mac",
    id: 18,
  },
  {
    name: "Fusce eu ligula",
    price: 179.99,
    cate: ["Aromatherapy", "Mint Soap"],
    color: ["#7E7EFF", "#FF7E7E"],
    freeShipping: true,
    image: "https://source.unsplash.com/random/600×348/?swimming",
    id: 19,
  },
  {
    name: "Vivamus consequat",
    price: 41.99,
    cate: ["Natural cosmetics", "Basket INNER BEAUTY"],
    color: ["#7E7EFF", "#FF7E7E"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?bird",
    id: 20,
  },
  {
    name: "Duis posuere",
    price: 51.99,
    cate: ["Natural cosmetics", "Mint Soap", "Basket INNER BEAUTY"],
    color: ["#FF7E7E"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?sunny",
    id: 21,
  },
  {
    name: "Morbi at nisi",
    price: 127.99,
    cate: ["Natural cosmetics"],
    color: ["#667876"],
    freeShipping: true,
    image: "https://source.unsplash.com/random/600×348/?city",
    id: 22,
  },
  {
    name: "Morbi interdum",
    price: 60.99,
    cate: ["Basket INNER BEAUTY"],
    color: ["#7E7EFF"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?idea",
    id: 23,
  },
  {
    name: "Maecenas id",
    price: 115.99,
    cate: ["Natural cosmetics", "Mint Soap"],
    color: ["#667876"],
    freeShipping: false,
    image: "https://source.unsplash.com/random/600×348/?bike",
    id: 24,
  },
];
export {
  links,
  banner,
  collection,
  bseller,
  sliderSeller,
  trend,
  sliderTrend,
  blog,
  siteList,
  products,
};
