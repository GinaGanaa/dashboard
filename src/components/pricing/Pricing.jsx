export const Pricing = ({ pricing }) => {
  const {
    quality,
    pay,
    price,
    setup,
    limit,
    userConnection,
    analytics,
    apiAccess,
    plugins,
    contentManage,
    button,
    freeTrial,
  } = pricing;
  return (
    <div>
      <div className="w-[350px] h-[848px] bg-white  rounded-[24px] text-center pt-[40px]">
        <p className="font-medium text-[22px]">{quality}</p>
        <p className="text-[16px] opacity-80">{pay}</p>
        <p className="text-[46px] font-semibold text-[#4880FF]">{price}</p>

        <button className="w-[180px] h-[60px] border-[#4880FF] border-2 rounded-[30px] text-[#4880FF]">
          {button}
        </button>
        <p className=" underline underline-offset-2 text-lg">{freeTrial}</p>
      </div>
    </div>
  );
};
