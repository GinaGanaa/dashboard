import {
  DashboardIcon,
  ProductIcon,
  FavoritesIcon,
  InboxIcon,
  OrdersIcon,
  StockIcon,
  Pricing,
  Calendar,
  Todo,
  Contact,
  Invoice,
  Elements,
  Team,
  Table,
  Settings,
  Logout,
} from "./icons";
import { SideBarButton } from "./SideBarButton";
import { useState } from "react";

//array of objects containing {name,href,icon}

// const mappedMenu = array.map((menu) => (
//   <li className="flex">
//     {menu.img}
//     <div>
//       <Link href={menu.href}>
//         <p>{menu.name}</p>
//       </Link>
//     </div>
//   </li>
// ));

export const SideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  const sideMenus = [
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

  return (
    <div>
      <div className="flex text-[20px] justify-center p-[24px] font-bold">
        <p className="text-[#4880FF]">Dash</p>
        <p className="text-[#202224]">Stack</p>
      </div>
      <div className="flex border-slate-200 min-h-[100vh] w-[240px] justify-center">
        <ul>
          {sideMenus.map((item) => (
            <SideBarButton
              item={item}
              setSelectedMenu={setSelectedMenu}
              selectedMenu={selectedMenu}
            />
          ))}
        </ul>
      </div>
      <div className="w-[240px] h-[1px] bg-[#E0E0E0]">Pages</div>
    </div>
  );
};
