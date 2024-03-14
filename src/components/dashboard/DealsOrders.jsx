import { OrderItem } from "./OrderItem";

export const DealsOrders = ({ months, dealOrders }) => {
  return (
    <div className="bg-white w-full h-[420px]  p-[32px] rounded-[14px]">
      <div className="flex justify-between pb-[32px]">
        <p className="text-[24px] font-medium"> Deals Details</p>
        <select className="border-[#D5D5D5] border-[0.6px] text-[12px] w-[104px] h-[28px] text-[#2B3034] rounded-[4px] pl-[17px] ">
          {months.map((month) => (
            <option>{month}</option>
          ))}
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
          {dealOrders.map((dealOrder) => (
            <OrderItem dealOrder={dealOrder} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
