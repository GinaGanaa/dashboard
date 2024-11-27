export default function Page() {
  return (
    <div className="p-[30px]">
      <h2 className="text-[32px] font-medium ]">UI Elements</h2>
      <div className="h-[318px] bg-white mt-[44px] rounded-[14px]">
        <p className="p-[24px] text-[24px] font-medium ">Bar Chart</p>
        <div className="flex justify-between gap-[50px] pl-[50px] pr-[50px]">
          <img src="./elements/verticalBlue.svg" alt="" />
          <img src="./elements/verticalGreen.svg" alt="" />
          <img src="./elements/verticalOrange.svg" alt="" />
          <img src="./elements/verticalPink.svg" alt="" />
        </div>
      </div>
      <div className="h-[318px] bg-white mt-[16px] rounded-[14px] ">
        <p className="p-[24px] text-[24px] font-medium ">Pie Chart</p>
        <div className="flex justify-between pl-[72px] pr-[72px] gap-[130px] items-center">
          <img src="./elements/bluePieChart.svg" alt="" />
          <img src="./elements/pinkPieChart.svg" alt="" />
          <img src="./elements/orangePieChart.svg" alt="" />
          <img src="./elements/blueChart.svg" alt="" />
        </div>
      </div>
      <div className="h-[318px] bg-white mt-[16px] rounded-[14px]">
        <p className="p-[24px] text-[24px] font-medium ">Donut Chart</p>
        <div className="flex justify-between pl-[72px]">
          <img src="./elements/verticalBlue.svg" alt="" />
          <img src="./elements/verticalGreen.svg" alt="" />
          <img src="./elements/verticalOrange.svg" alt="" />
          <img src="./elements/verticalPink.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
