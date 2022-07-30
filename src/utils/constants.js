import best1 from "../assets/best_1.svg";
import best2 from "../assets/best_2.svg";

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

export { links, banner, collection, bseller, sliderSeller };
