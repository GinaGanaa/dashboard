import { orderLists } from "@/utils/orders/lists";
import { OrdersTable } from "@/components/orders/OrdersTable";

export default function Page() {
  return (
    <div className="p-[30px] ">
      <h2 className="text-[32px] font-medium pb-[23px]">Order Lists</h2>
      <div className="flex flex-col gap-[24px]">
        <table className="w-[80%] text-center">
          <tr className="flex text-[14px] bg-[#F9F9FB] h-[70px] justify-between items-center pl-[24px] pr-[43px]">
            <td>Filter by</td>
            <td>Date</td>
            <button>
              <img src="/orderList/dropDown.svg" alt="" />
            </button>
            <td>Order Type</td>
            <button>
              <img src="/orderList/dropDown.svg" alt="" />
            </button>
            <td>Order Status</td>
            <button>
              <img src="/orderList/dropDown.svg" alt="" />
            </button>
            <div className="flex justify-center">
              <img src="/orderList/resetFilter.svg" alt="" />
              <td className="text-[#EA0234]">Reset Filter</td>
            </div>
          </tr>
        </table>
        <table className="w-full">
          <thead>
            <tr className="text-[14px] bg-[#F9F9FB] h-[49px]">
              <th>ID</th>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>DATE</th>
              <th>TYPE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orderLists.map((order, index) => {
              return (
                <OrdersTable
                  name={order.name}
                  address={order.address}
                  date={order.date}
                  type={order.type}
                  status={order.status}
                  key={index}
                  number={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
