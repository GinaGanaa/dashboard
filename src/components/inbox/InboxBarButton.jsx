import Link from "next/link";

export const InboxBarButton = ({ item, selectedMenu, isActive }) => {
  console.log(isActive);
  console.log(item.href);
  return (
    <li
      className={`pointer flex justify-between h-[43px] w-[238px] rounded-md items-center gap-4  p-[15px] bg-[${
        isActive ? "#4880FF" : "white"
      }] bg-opacity-[0.13]`}
    >
      <div className="flex gap-[12px]">
        <img src={item.img} alt="" />
        <div>
          <Link
            href={item.href}
            className={isActive ? "text-[#4880FF]" : "text-[#202224]"}
          >
            {item.name}
          </Link>
        </div>
      </div>
      <div className="text-[#202224] text-[14px]">{item.mail}</div>
    </li>
  );
};
