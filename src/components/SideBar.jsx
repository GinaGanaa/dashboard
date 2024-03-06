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
      img: <ProductIcon isActive={selectedMenu == "Products"} />,
    },
    {
      name: "Favorites",
      href: "/favorites",
      img: <FavoritesIcon isActive={selectedMenu == "Favorites"} />,
    },
    {
      name: "Inbox",
      href: "/inbox",
      img: <InboxIcon isActive={selectedMenu == "Inbox"} />,
    },
    {
      name: "Order Lists",
      href: "/orders",
      img: <OrdersIcon isActive={selectedMenu == "Order Lists"} />,
    },
    {
      name: "Product Stock",
      href: "/stocks",
      img: <StockIcon isActive={selectedMenu == "Product Stock"} />,
    },
    {
      name: "Pricing",
      href: "/pricing",
      img: <Pricing isActive={selectedMenu == "Pricing"} />,
    },
    {
      name: "Calendar",
      href: "/calendar",
      img: <Calendar isActive={selectedMenu == "Calendar"} />,
    },
    {
      name: "To-Do",
      href: "/to-do",
      img: <Todo isActive={selectedMenu == "To-Do"} />,
    },
    {
      name: "Contact",
      href: "contact",
      img: <Contact isActive={selectedMenu == "Contact"} />,
    },
    {
      name: "Invoice",
      href: "/invoice",
      img: <Invoice isActive={selectedMenu == "Invoice"} />,
    },
    {
      name: "Ui Elements",
      href: "/element",
      img: <Elements isActive={selectedMenu == "Ui Elements"} />,
    },
    {
      name: "Team",
      href: "/team",
      img: <Team isActive={selectedMenu == "Team"} />,
    },
    {
      name: "Table",
      href: "/table",
      img: <Table isActive={selectedMenu == "Table"} />,
    },
    {
      name: "Settings",
      href: "/setting",
      img: <Settings isActive={selectedMenu == "Settings"} />,
    },
    {
      name: "Logout",
      href: "/logout",
      img: <Logout isActive={selectedMenu == "Logout"} />,
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
