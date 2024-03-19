export const FreeDelivery = () => {
  return (
    <div>
      <h1 className="font-medium text-[32px] pb-[23px]">Products</h1>
      <div className="flex bg-blue-500 h-[330px] min-w-[600px] rounded-[12px] items-center justify-between p-[24px]">
        <button>
          <img src="./products/leftArrow.svg" alt="" />
        </button>
        <div>
          <p className="text-white">September 12-22</p>
          <p className="text-white text-[37px] font-bold w-[413px]">
            Enjoy free home delivery in this summer
          </p>
          <p className="text-white opacity-80 pb-[30px] pt-[8px]">
            Designer Dresses - Pick from trendy Designer Dress.
          </p>
          <button className="bg-orange-400 w-[156px] h-[44px] text-white rounded-[10px] ">
            Get Started
          </button>
        </div>
        <button>
          <img src="./products/rightArrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
