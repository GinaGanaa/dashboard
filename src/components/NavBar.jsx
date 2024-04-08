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
            <div className="absolute cursor-pointer rounded right-0 w-[200px] h-[170px] bg-[#4880FF] flex flex-col items-center gap-[30px] pt-[15px]">
              <img
                className="rounded-[50%] w-[70px] bg-white"
                src="/dashboard/profile.png"
                alt=""
              />

              <div className="flex gap-[50px] text-[14px] bg-white w-[200px] h-[60px] items-center justify-center">
                <button className="rounded-[5px] w-[60px] bg-[#F5F6FA] h-[35px]">
                  Profile
                </button>
                <button className="bg-[#F5F6FA] rounded-[5px] w-[70px] h-[35px]">
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
