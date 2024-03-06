import Link from "next/link";
import { useState } from "react";

export const SideBarButton = ({ selectedMenu, item, setSelectedMenu }) => {
  console.log(item);
  return (
    <li
      style={{ background: selectedMenu == item.name ? "blue" : "white" }}
      onClick={() => setSelectedMenu(item.name)}
      className="pointer flex bg-blue-600 h-[50px] w-[180px] rounded-md items-center gap-4 pl-5  "
    >
      <img src={item.img} alt="" />
      <div>
        <Link href={item.href}>
          <p style={{ color: selectedMenu == item.name ? "white" : "#202224" }}>
            {item.name}
          </p>
        </Link>
      </div>
    </li>
  );
};
