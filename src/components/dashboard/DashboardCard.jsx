import { DownIcon, UpIcon } from "../icons";

export const DashboardCard = ({
  header,
  numbers,
  img,
  upDown,
  percent,
  since,
}) => {
  return (
    <li className=" bg-white w-[262px] h-[161px] rounded-[14px] p-[16px]">
      <div className="flex justify-between">
        <div>
          <div>
            <p className="text-[16px] text-[#202224]">{header}</p>
          </div>
          <div>
            <p className="text-[28px] pt-[16px]">{numbers}</p>
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="flex pt-[25px] gap-[8px] ">
        <div>{upDown == "up" ? <UpIcon /> : <DownIcon />}</div>
        <div className="flex">
          <p> {percent}</p>
          <p>{since}</p>
        </div>
      </div>
    </li>
  );
};
