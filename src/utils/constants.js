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
export {
  links,
  banner,
  collection,
  bseller,
  sliderSeller,
  trend,
  sliderTrend,
  blog,
};
