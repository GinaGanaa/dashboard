import { InboxSideBar } from "@/components/inbox/InboxSideBar";

export const InboxLayout = ({ children }) => {
  return (
    <div className="flex items-center gap-[21px]">
      <InboxSideBar />
      {children}
    </div>
  );
};
