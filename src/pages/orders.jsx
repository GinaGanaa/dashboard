export default function Page() {
  return (
    <div className="p-[30px] ">
      <h2 className="text-[32px] font-medium">Order Lists</h2>
      <div className="flex flex-col gap-[24px]">
        <table className="w-[80%] ">
          <tr className="text-[14px] bg-[#F9F9FB] h-[70px]">
            <td>Filter by</td>
            <td>Date</td>
            <td>Order Type</td>
            <td>Order Status</td>
            <td className="text-[#EA0234]">Reset Filter</td>
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
        </table>
      </div>
    </div>
  );
}
