import { faker } from "@faker-js/faker";

export const cardInfos = [
  {
    title: "Total User",
    numbers: "40,689",
    imgUrl: "./dashboard/usericon.png",
    upDown: "up",
    percent: "8.5%",
    since: "Up from yesterday",
  },
  {
    title: "Total Order",
    numbers: "10293",
    imgUrl: "./dashboard/orderIcon.png",
    upDown: "up",
    percent: "1.3%",
    since: "Up from past week",
  },
  {
    title: "Total Sales",
    numbers: "$89,000",
    imgUrl: "./dashboard/salesIcon.png",
    upDown: "down",
    percent: "4.3%",
    since: "Down from yesterday",
  },
  {
    title: "Total Pending",
    numbers: "2040",
    imgUrl: "./dashboard/pendingIcon.png",
    upDown: "up",
    percent: "1.8%",
    since: "Up from yesterday",
  },
];

export const dealOrders = [
  {
    img: "./dashboard/watch.png",
    name: "Apple watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2019 - 12.53PM",
    piece: "423",
    amount: "$34,295",
    status: "delivered",
  },
  {
    img: "./dashboard/watch.png",
    name: "Macbook",
    location: "8369 Dulles intl",
    date: "11.23.2021 - 12.53PM",
    piece: "233",
    amount: "$67,295",
    status: "delivered",
  },
  {
    img: "./dashboard/watch.png",
    name: "Airpod",
    location: "578 Arlington blvd",
    date: "12.09.2019 - 12.53PM",
    piece: "383",
    amount: "$24,025",
    status: "delivered",
  },
];

export const months = ["January", "February", "Martch"];

export const topSideMenus = [
  {
    name: "Dashboard",
    href: "/",
    img: "./sideBar/dashboardicon.svg",
  },
  {
    name: "Products",
    href: "/products",
    img: "./sideBar/producticon.svg",
  },
  {
    name: "Favorites",
    href: "/favorites",
    img: "./sideBar/favoritesicon.svg",
  },
  {
    name: "Inbox",
    href: "/inbox",
    img: "./sideBar/inboxicon.svg",
  },
  {
    name: "Order Lists",
    href: "/orders",
    img: "./sideBar/ordersicon.svg",
  },
  {
    name: "Product Stock",
    href: "/stocks",
    img: "./sideBar/stockicon.svg",
  },
];

export const midSideMenus = [
  {
    name: "Pricing",
    href: "/pricing",
    img: "./sideBar/pricingicon.svg",
  },
  {
    name: "Calendar",
    href: "/calendar",
    img: "./sideBar/calendar.svg",
  },
  {
    name: "To-Do",
    href: "/to-do",
    img: "./sideBar/todoicon.svg",
  },
  {
    name: "Contact",
    href: "contact",
    img: "./sideBar/contacticon.svg",
  },
  {
    name: "Invoice",
    href: "/invoice",
    img: "./sideBar/invoiceicon.svg",
  },
  {
    name: "Ui Elements",
    href: "/element",
    img: "./sideBar/elementicon.svg",
  },
  {
    name: "Team",
    href: "/team",
    img: "./sideBar/teamicon.svg",
  },
  {
    name: "Table",
    href: "/table",
    img: "./sideBar/tableicon.svg",
  },
  {
    name: "Settings",
    href: "/setting",
    img: "./sideBar/settingsicon.svg",
  },
  {
    name: "Logout",
    href: "/logout",
    img: "./sideBar/logouticon.svg",
  },
];
export const favorites = [
  {
    imgUrl: "./favorites/whiteWatch.png",
    productName: "Apple Watch Series 4",
    price: 120,
    rating: 4,
    isFavorated: true,
  },
  {
    imgUrl: "./favorites/whiteWatch.png",
    productName: "Air-Max-270",
    price: "$60.00",
    rating: 3,
    isFavorated: false,
  },
  {
    imgUrl: "./favorites/whiteWatch.png",
    productName: "Minimal Chair Tool",
    price: "$24.59",
    rating: 4,
    isFavorated: false,
  },
  {
    imgUrl: "./favorites/whiteWatch.png",
    productName: "Amazfit Vip",
    price: "$60.00",
    rating: 2,
    isFavorated: false,
  },
  {
    imgUrl: "./favorites/whiteWatch.png",
    productName: "Gumbo Mouse",
    price: "$60.00",
    rating: 2,
    isFavorated: false,
  },
  {
    imgUrl: "./favorites/whiteWatch.png",
    productName: "Camera Tripod",
    price: "$60.00",
    rating: 5,
    isFavorated: false,
  },
];
