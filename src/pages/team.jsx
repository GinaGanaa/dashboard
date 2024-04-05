export default function Page() {
  return (
    <div className="p-[30px]">
      <h2 className="text-[#202224] text-[32px] font-medium pb-[37px] pt-[8px]">
        Add Team Member
      </h2>
      <div className="h-[744px] w-full bg-white rounded-[14px]">
        <div className="p-[60px]">
          <div className=" flex flex-col items-center pb-[40px]">
            <img className="w-[80px]" src="/team/camera.svg" alt="" />
            <button className="text-[14px] text-[#4379EE] pt-[5px]">
              Upload Photo
            </button>
          </div>
          <div className=" flex flex-col items-center">
            <div className="flex gap-[60px] pb-[60px]">
              <div>
                <p className="pb-[11px]">First Name</p>
                <input
                  className="text-[14px] min-w-[360px] h-[52px] bg-[#F5F6FA] rounded-[5px] pl-[16px]"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <p className="pb-[11px]">Last Name</p>
                <input
                  className="text-[14px] w-[360px] h-[52px] bg-[#F5F6FA] rounded-[5px] pl-[16px]"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="flex gap-[60px] pb-[60px]">
              <div>
                <p className="pb-[11px]">Your email</p>
                <input
                  className="text-[14px] w-[360px] h-[52px] bg-[#F5F6FA] rounded-[5px] pl-[16px]"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <p className="pb-[11px]">Phone Number</p>
                <input
                  className="text-[14px] w-[360px] h-[52px] bg-[#F5F6FA] rounded-[5px] pl-[16px]"
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="flex gap-[60px]">
              <div>
                <p className="pb-[11px]">Position</p>
                <input
                  className="text-[14px] w-[360px] h-[52px] bg-[#F5F6FA] rounded-[5px] pl-[16px]"
                  type="text"
                  placeholder="CEO"
                />
              </div>
              <div>
                <p className="pb-[11px]">Gender</p>
                <select
                  className="w-[177px] h-[52px] bg-[#F5F6FA] text-[#A6A6A6] rounded-[5px] pl-[16px] pr-[16px]"
                  name=""
                  id=""
                >
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="pt-[60px] flex flex-col items-center">
            <button className="bg-[#4880FF] opacity-[0.9] text-white text-[18px] w-[274px] h-[56px] rounded-[12px] ">
              Add now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
