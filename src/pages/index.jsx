import { DealsDetails } from "@/components/DealsDetails";
import { UpIcon, DownIcon } from "@/components/icons";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { totalDetails } from "@/utils/constants";

export default function Home() {
  const dealsDetails = [
    {
      img: <img src="./watch.png" alt="" />,
      name: "Apple watch",
      location: "6096 Marjolaine Landing",
      date: "12.09.2019 - 12.53PM",
      piece: "423",
      amount: "$34,295",
      status: "delivered",
    },
    {
      img: (
        <img
          src="https://www.pngitem.com/pimgs/m/78-780701_macbook-pro-png-transparent-png.png"
          alt=""
        />
      ),
      name: "Macbook",
      location: "6096 Marjolaine Landing",
      date: "11.23.2021 - 12.53PM",
      piece: "233",
      amount: "$67,295",
      status: "delivered",
    },
    {
      img: (
        <img
          src="https://www.apple.com/newsroom/images/live-action/wwdc-2023/standard/airpods/Apple-AirPods-Pro-2nd-gen-hero-230605.jpg.news_app_ed.jpg"
          alt=""
        />
      ),
      name: "Airpod",
      location: "6096 Marjolaine Landing",
      date: "12.09.2019 - 12.53PM",
      piece: "423",
      amount: "$34,295",
      status: "delivered",
    },
  ];

  return (
    <div className="p-[31px] flex flex-col gap-[30px] ">
      <h2 className=" w-[161px] h-[44px] text-[32px] font-medium">Dashboard</h2>
      <div>
        <ul className="flex gap-[30px] justify-between">
          {totalDetails.map((perTotal) => (
            <DashboardCard
              header={perTotal.header}
              numbers={perTotal.numbers}
              img={perTotal.img}
              upDown={perTotal.upDown}
              percent={perTotal.percent}
              since={perTotal.since}
            />
          ))}
        </ul>
      </div>
      <div className="bg-white w-full h-[444px] rounded-[14px]">
        <p className="text-[24px] p-[32px]"> Sales Details</p>
        <img src="./sideBar/dashboardicon.svg" alt="" />
      </div>
      <div className="bg-white w-full h-[420px] rounded-[14px] p-[32px]">
        <div className="flex justify-between">
          <p className="text-[24px] "> Deals Details</p>
          <select
            className="border-[#D5D5D5] border-[0.6px] text-[12px] w-[104px] h-[28px] text-[#2B3034] rounded-[4px] pl-[17px] "
            name=""
            id=""
          >
            <option value="">January</option>
            <option value="">February</option>
            <option value="">March</option>
            <option value="">April</option>
            <option value="">May</option>
            <option value="">June</option>
            <option value="">July</option>
            <option value="">August</option>
            <option value="">September</option>
            <option value="">October</option>
            <option value="">November</option>
            <option value="">December</option>
          </select>
        </div>

        <div className="pt-[35px]">
          <div className="flex justify-between h-[48px] bg-[#F1F4F9] items-center pl-[24px] pr-[62px] rounded-[12px]">
            <p>Product Name</p>
            <p>Location</p>
            <p>Date-time</p>
            <p>Piece</p>
            <p>Amount</p>
            <p>Status</p>
          </div>
        </div>
        <div>
          {dealsDetails.map((perDetail) => (
            <li className="flex h-[80px] items-center justify-between pl-[24px] pr-[60px] gap-[16px]">
              <div className="flex gap-[16px]">
                <div className="w-[36px]">{perDetail.img}</div>
                <div> {perDetail.name}</div>
              </div>
              <div> {perDetail.location}</div>
              <div> {perDetail.date}</div>
              <div> {perDetail.piece}</div>
              <div> {perDetail.amount}</div>
              <div> {perDetail.status}</div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
