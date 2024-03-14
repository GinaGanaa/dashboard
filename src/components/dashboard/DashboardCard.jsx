import { DownIcon, UpIcon } from "../icons";

export const DashboardCard = ({ info }) => {
  const { title, numbers, imgUrl, percent, since, upDown } = info;
  return (
    <li className=" bg-white min-w-[222px] rounded-[14px] p-[16px] ">
      <div className="flex justify-between">
        <div>
          <div>
            <p className="text-[16px] text-[#202224]">{title}</p>
          </div>
          <div>
            <p className="text-[28px] pt-[16px]">{numbers}</p>
          </div>
        </div>
        <div>
          <img src={imgUrl} alt="" />
        </div>
      </div>
      <div className="flex pt-[25px] gap-[8px] ">
        <div>{upDown == "up" ? <UpIcon /> : <DownIcon />}</div>
        <div className="flex">
          <p> {percent}</p>
          <p className="">{since}</p>
        </div>
      </div>
    </li>
  );
};
