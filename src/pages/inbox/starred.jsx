"use client";
import { InboxLayout } from "@/components/inbox/InboxLayout";
import dayjs from "dayjs";

const Page = () => {
  return (
    <div className="p-[30px]">
      <h2 className="text-[32px] font-medium pb-[23px]">Inbox</h2>
      <InboxLayout>
        <div className="flex gap-[21px] w-full">
          <div className="h-[840px] bg-white rounded-[14px] w-full">
            <div className="p-[24px]">
              <input
                className=" rounded-[20px] pl-[45px] bg-[#F5F6FA] w-[332px] h-[40px] text-[14px] bg-[center_left_1rem] focus:outline-none bg-search-icon bg-no-repeat"
                type="text"
                placeholder="Search mail"
              />
              <div className="pt-[42px]"></div>
            </div>
          </div>
        </div>
      </InboxLayout>
    </div>
  );
};

export default Page;

{
  /* <p>{dayjs("2024-03-27T13:56:29.888Z").format("HH:mm")}</p> */
}
