import Link from "next/link";

export const InboxBarButton = ({ item, selectedMenu, setSelectedMenu }) => {
  return (
    <li
      style={{
        background: selectedMenu == item.name ? "#d2defc" : "white",
      }}
      onClick={() => setSelectedMenu(item.name)}
      className="pointer flex justify-between bg-blue-600 h-[43px] w-[238px] rounded-md items-center gap-4  p-[15px]"
    >
      <div className="flex gap-[12px]">
        <img src={item.img} alt="" />
        <div>
          <Link href={item.href}>
            <p
              style={{
                color: selectedMenu == item.name ? "#4880FF" : "#202224",
              }}
            >
              <div className="text-[14px]">{item.name}</div>
            </p>
          </Link>
        </div>
      </div>
      <div className="text-[#202224] text-[14px]">{item.mail}</div>
    </li>
  );
};
