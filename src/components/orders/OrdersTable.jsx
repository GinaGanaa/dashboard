export const OrdersTable = (props) => {
  const { name, number, date, type, status, address } = props;
  return (
    <tr className="h-[75px] bg-white text-center">
      <td>0000{number + 1}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{date}</td>
      <td>{type}</td>
      <td>{status}</td>
    </tr>
  );
};
