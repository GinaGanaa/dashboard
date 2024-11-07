export const Contact = ({ contact }) => {
  const { agentName, imgUrl, email } = contact;
  return (
    <div className="bg-white rounded-[18px] w-[360px] h-[414px] border border-gray-300 shadow-lg overflow-hidden">
      <div className="w-full h-[240px]">
        <img className="object-cover w-full h-full" src={imgUrl} alt="" />
      </div>
      <div className="text-center items-center space-y-2 mt-4 px-4">
        <p className="text-[16px] font-medium">{agentName}</p>
        <p className="text-[14px] text-gray-500">{email}</p>
        <div className="flex justify-center mt-4">
          <button className="flex items-center gap-[13px] border border-gray-400 w-[137px] h-[49px] rounded-[6px] justify-center mt-[21px]">
            <img src="/contact/message.svg" alt="Message icon" />
            <p className="text-[14px] text-[#767676]">Message</p>
          </button>
        </div>
      </div>
    </div>
  );

  //   return (
  //     <div className="bg-white rounded-[18px] w-[360px] h-[414px]">
  //       <div className="">
  //         <img className="object-fill" src={imgUrl} alt="" layout="fill" />
  //       </div>
  //       <div className="text-center items-center">
  //         <p className="text-[16px] font-medium">{agentName} </p>
  //         <p className="text-[14px] opacity-60">{email}</p>
  //         <div className="flex justify-center">
  //           <button className="flex items-center gap-[13px] border border-gray-400 w-[137px] h-[49px] rounded-[6px] justify-center">
  //             <img src="/contact/message.svg" alt="" />
  //             <p className="text-[14px] text-[#767676]"> Message</p>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
};
