import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { cardInfos, dealOrders, months } from "@/utils/constants";
import { DealsOrders } from "@/components/dashboard/DealsOrders";
import { SalesDetails } from "@/components/dashboard/SalesDetails";

export default function Home() {
  return (
    <div className="p-[31px] flex flex-col gap-[30px] ">
      <h2 className=" w-[161px] h-[44px] text-[32px] font-medium">Dashboard</h2>
      <div>
        <ul className="flex gap-[10px] justify-between max-w-[1100px]">
          {cardInfos.map((info) => (
            <DashboardCard info={info} />
          ))}
        </ul>
      </div>
      {/* <SalesDetails /> */}
      <DealsOrders months={months} dealOrders={dealOrders} />
    </div>
  );
}
