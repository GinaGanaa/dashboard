import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";

export function Layout({ children }) {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="w-full  bg-slate-100">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
