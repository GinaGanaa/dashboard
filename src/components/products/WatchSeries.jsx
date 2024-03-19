export const WatchSeries = () => {
  return (
    <div className="bg-white  rounded-[14px]">
      <div>
        <div className="flex absolute p-[14px] ">
          <img src="./products/leftArrow.svg" alt="" />
          <img src="./products/rightArrow.svg" alt="" />
        </div>
        <img
          className="rounded-[14px] w-[361px]"
          src="./products/appleWatch.png"
        />
      </div>
      <div className="p-[24px]">
        <div className="flex justify-between">
          <div>
            <p className="text-[18px] font-medium">Apple Watch Series 4</p>
            <p className="text-[#4880FF]">$120.00</p>
          </div>
          <button>
            <img src="./products/heart.svg" alt="" />
          </button>
        </div>
        <button className="bg-[#E2EAF8] w-[126px] h-[38px] rounded-[12px]">
          Edit Product
        </button>
      </div>
    </div>
  );
};
