import { InboxLayout } from "@/components/inbox/InboxLayout";

export default function Page() {
  return (
    <div className="p-[30px]">
      <h2 className="text-[32px] font-medium pb-[23px]">Inbox</h2>
      <InboxLayout>
        <div className="w-full">
          <div className="flex gap-[21px]">
            <div className="h-[840px] bg-white rounded-[14px] w-full">
              <div className="p-[24px]">
                <input
                  className=" rounded-[20px] pl-[45px] bg-[#F5F6FA] min-w-[332px] h-[40px] text-[14px] bg-[center_left_1rem] focus:outline-none bg-search-icon bg-no-repeat"
                  type="text"
                  placeholder="Search mail"
                />
              </div>
            </div>
          </div>
        </div>
      </InboxLayout>
    </div>
  );
}
