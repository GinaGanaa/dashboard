import { SideBarButton } from "./SideBarButton";
import { useState } from "react";
import { topSideMenus, midSideMenus } from "@/utils/constants";

export const SideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  return (
    <div>
      <div className="flex text-[20px] justify-center p-[24px] font-bold">
        <p className="text-[#4880FF]">Dash</p>
        <p className="text-[#202224]">Stack</p>
      </div>
      <div className="flex border-slate-200 w-[240px] justify-center">
        <ul>
          {topSideMenus.map((item) => (
            <SideBarButton
              item={item}
              setSelectedMenu={setSelectedMenu}
              selectedMenu={selectedMenu}
            />
          ))}
        </ul>
      </div>
      <div className="w-[240px] border-[#E0E0E0] border-t-[1px] flex flex-col justify-center">
        <p className="pl-[40px] ">Pages</p>
        <ul>
          {midSideMenus.map((item) => (
            <SideBarButton
              item={item}
              setSelectedMenu={setSelectedMenu}
              selectedMenu={selectedMenu}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
