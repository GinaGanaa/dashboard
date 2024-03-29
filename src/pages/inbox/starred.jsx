"use client";
import { InboxLayout } from "@/components/inbox/InboxLayout";
import dayjs from "dayjs";

const Page = () => {
  return (
    <InboxLayout>
      <div>
        Hello from inbox star
        <p>{dayjs("2024-03-27T13:56:29.888Z").format("HH:mm")}</p>
      </div>
    </InboxLayout>
  );
};

export default Page;
