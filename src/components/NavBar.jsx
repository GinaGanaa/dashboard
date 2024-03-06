import { NavBarIcon, ChevronIcon, BellIcon } from "./icons";

export const NavBar = () => {
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
        <img src="./flag.png" alt="" />

        <select name="" id="">
          <option value="">English</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <img className="rounded-[50%]" src="./profile.png" alt="" />
        <div>
          <p>Moni Roy</p>
          <p>Admin</p>
        </div>
        <ChevronIcon />
      </div>
    </div>
  );
};
