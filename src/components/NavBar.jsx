import { useState } from "react";
import { NavBarIcon, ChevronIcon, BellIcon } from "./icons";

export const NavBar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div className="bg-white flex h-[70px] items-center justify-between w-full ">
      <div className="w-[366px] flex gap-[25px] items-center pl-[31px]">
        <NavBarIcon />
        <div className="flex items-center  bg-search-icon bg-[center_left_1rem] bg-no-repeat bg-posic h-[38px] w-[388px] text-[14px] pl-[45px] border-[1px] border-[#D5D5D5] rounded-[19px]">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none"
          />
        </div>
      </div>
      <div className="w-[405px] flex items-center justify-between pr-[31px]">
        <BellIcon />
        <img className="rounded-[15%]" src="./dashboard/flag.png" alt="" />

        <select name="" id="">
          <option value="">English</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <img className="rounded-[50%]" src="./dashboard/profile.png" alt="" />
        <div>
          <p>Moni Roy</p>
          <p>Admin</p>
        </div>
        <div onClick={toggleDropDown} className="relative">
          <ChevronIcon />
          {showDropDown && (
            <div className="absolute top-5 cursor-pointer z-1000 rounded right-0 w-[100px] h-[200px] bg-red-900">
              <p className="text-white">Hello</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
