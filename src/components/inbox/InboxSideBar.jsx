import { inboxSideMenus } from "@/utils/constants";
import { InboxBarButton } from "./InboxBarButton";
import { useState } from "react";
import { label } from "@/utils/constants";
import { useRouter } from "next/router";

export const InboxSideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Inbox");
  const { route } = useRouter();
  console.log(route);
  return (
    <div className="min-w-[286px] h-[840px] bg-white rounded-[14px] p-[24px]">
      <button className="w-[248px] h-[43px] bg-[#4880FF] text-white rounded-[10px] text-[14px]">
        + Compose
      </button>
      <p className="font-medium pt-[24px] pb-[16px]">My Email</p>
      {inboxSideMenus.map((item) => {
        return (
          <InboxBarButton
            item={item}
            selectedMenu={selectedMenu}
            isActive={route == item.href}
          />
        );
      })}
      <p className="font-medium pt-[24px] pb-[16px]">Label</p>
      <div className="pl-[16px]">
        <div className="flex gap-[13px] pb-[24px]">
          <img src="/inbox/primaryIcon.svg" alt="" />
          <p>Primary</p>
        </div>
        <div className="flex gap-[13px] pb-[24px]">
          <img src="/inbox/socialIcon.svg" alt="" />
          <p>Social</p>
        </div>
        <div className="flex gap-[13px] pb-[24px]">
          <img src="/inbox/workIcon.svg" alt="" />
          <p>Work</p>
        </div>
        <div className="flex gap-[13px] pb-[31px]">
          <img src="/inbox/friendsIcon.svg" alt="" />
          <p>Friends</p>
        </div>
        <button className="text-[#202224] text-opacity-[0.5]">
          + Create New Label
        </button>
      </div>
    </div>
  );
};
