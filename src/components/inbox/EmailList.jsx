export const EmailList = (props) => {
  const { sender, label, title, date, isStared, isSelected, email } = props;
  return (
    <tr className="h-[61px]">
      <td>
        <img className="min-w-[16px] h-[16px]" src="/inbox/checkBox.svg" />
      </td>
      <td className="pl-[24px] ">
        {isStared ? (
          <img className="min-w-[16px]" src={"/inbox/yellowStar.svg"} />
        ) : (
          <img src={"/inbox/whiteStar.svg"} />
        )}
      </td>
      <td className="text-[#202224] text-[14px] font-medium pl-[30px]">
        {sender}
      </td>
      <td className="text-[12px]">
        <p style={{ color: label == email.label ? "#00B69B" : "" }}></p>
        {label}
      </td>
      <td className="text-[14px]">{title}</td>
      <td className="text-[14px]">{date}</td>
    </tr>
  );
};
