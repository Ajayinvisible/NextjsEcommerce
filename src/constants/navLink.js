const navLink = [
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
    isAuth: false,
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
    route: "/track",
    label: "Tack Order",
    isAuth: true,
  },
  {
    route: "/contact",
    label: "Contact",
    isAuth: false,
  },
];
export default navLink;