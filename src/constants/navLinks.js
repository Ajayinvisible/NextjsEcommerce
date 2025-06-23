import { HOME_ROUTE, PRODUCTS_ROUTE } from "./routes";

const navLinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
    isAuth: false,
  },
  {
    route: "/about",
    label: "About",
    isAuth: false,
  },
  {
    route: PRODUCTS_ROUTE,
    label: "Products",
    isAuth: false,
  },
  {
    route: "/contact",
    label: "Contact",
    isAuth: false,
  },
  {
    route: "/cart",
    label: "Cart",
    isAuth: true,
  },
  // {
  //   route: "/placeorder",
  //   label: "Place Order",
  //   isAuth: true,
  // },
  // {
  //   route: "/track",
  //   label: "Tack Order",
  //   isAuth: true,
  // },
  // {
  //   route: "/privacy",
  //   label: "Privacy Policy",
  //   isAuth: true,
  // },
  // {
  //   route: "/terms",
  //   label: "Terms & Conditions",
  //   isAuth: true,
  // },
];
export default navLinks;