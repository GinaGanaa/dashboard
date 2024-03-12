import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { totalDetails, dealsDetails } from "@/utils/constants";
// import {
//   Chart as ChartJs,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Legend,
//   Tooltip,
//   Filter,
// } from "chart.js";

const generateData = () => {
  let dataset = [];
  const sales = [
    "5k",
    "10k",
    "15k",
    "20k",
    "25k",
    "30",
    "35k",
    "40k",
    "45k",
    "50k",
    "55k",
    "60k",
  ];
};
const data = generateData();

export default function Home() {
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
      </div>
      <div className="bg-white w-full h-[420px]  p-[32px] rounded-[14px]">
        <div className="flex justify-between pb-[32px]">
          <p className="text-[24px] font-medium"> Deals Details</p>
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
        <table className="w-full text-left ">
          <thead>
            <tr className="h-[48px] bg-[#F1F4F9] ">
              <th></th>
              <th>Product Name</th>
              <th>Location</th>
              <th>Date-Time</th>
              <th>Piece</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dealsDetails.map((perDetail) => (
              <tr className=" h-[80px] ">
                <td className="w-[36px]">{perDetail.img}</td>
                <td>{perDetail.name}</td>
                <td> {perDetail.location}</td>
                <td> {perDetail.date}</td>
                <td> {perDetail.piece}</td>
                <td> {perDetail.amount}</td>
                <td> {perDetail.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
