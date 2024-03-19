export const OrderItem = ({ dealOrder }) => {
  return (
    <tr className=" h-[80px] ">
      <td className="w-[36px]">
        <img src={dealOrder.img} />
      </td>
      <td>{dealOrder.name}</td>
      <td> {dealOrder.location}</td>
      <td> {dealOrder.date}</td>
      <td> {dealOrder.piece}</td>
      <td> {dealOrder.amount}</td>
      <td> {dealOrder.status}</td>
    </tr>
  );
};
