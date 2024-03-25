import { inboxSideMenus } from "@/utils/constants";
import { InboxBarButton } from "./InboxBarButton";
import { useState } from "react";
import { label } from "@/utils/constants";

export const InboxSideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Inbox");
  return (
    <div className="min-w-[286px] h-[840px] bg-white rounded-[14px] p-[24px]">
      <button className="w-[248px] h-[43px] bg-[#4880FF] text-white rounded-[10px] text-[14px]">
        + Compose
      </button>
      <p className="font-medium pt-[24px] pb-[16px]">My Email</p>
      {inboxSideMenus.map((item) => (
        <InboxBarButton
          item={item}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      ))}
      <p className="font-medium pt-[24px] pb-[16px]">Label</p>
      {label.map((label) => (
        <InboxBarButton label={label} />
      ))}
    </div>
  );
};
