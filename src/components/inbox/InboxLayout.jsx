import { InboxSideBar } from "@/components/inbox/InboxSideBar";

export const InboxLayout = ({ children }) => {
  return (
    <div className="flex">
      <InboxSideBar />
      {children}
    </div>
  );
};
