const navLinks = [
  {
    route: "/",
    label: "Home",
    isAuth: false,
  },
  {
    route: "/about",
    label: "About",
    isAuth: false,
  },
  {
    route: "/products",
    label: "Products",
    isAuth: false,
  },
  {
    route: "/news",
    label: "News",
    isAuth: true,
    subMenu: [
      {
        route: "/technology",
        label: "Technology",
      },
      {
        route: "/sports",
        label: "Sports",
      },
      {
        route: "/entertainment",
        label: "Entertainment",
      },
    ],
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