import React from "react";

const EditInstituteDetails = ({ onBack }) => {
  return (
    <div className="py-[25px] px-[63px]">
      <div className="flex flex-col ">
        <div className="flex justify-between ">
          <div className="font-[600] font-[Segoe UI] text-4xl text-[#2D6BE4]">
            Enter Institute Details
          </div>
          <div className="flex gap-[44px]">
            <div className="flex gap-[23px]">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2379 23.3503C18.8229 23.3503 23.3505 18.8227 23.3505 13.2376C23.3505 7.65258 18.8229 3.125 13.2379 3.125C7.65282 3.125 3.12524 7.65258 3.12524 13.2376C3.12524 18.8227 7.65282 23.3503 13.2379 23.3503Z"
                    stroke="#00227A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.2703 20.7949L24.2348 24.7493"
                    stroke="#00227A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 9C20.25 7.20979 19.5388 5.4929 18.273 4.22703C17.0071 2.96116 15.2902 2.25 13.5 2.25C11.7098 2.25 9.9929 2.96116 8.72703 4.22703C7.46116 5.4929 6.75 7.20979 6.75 9C6.75 16.875 3.375 19.125 3.375 19.125H23.625C23.625 19.125 20.25 16.875 20.25 9Z"
                    stroke="#00227A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4462 23.625C15.2484 23.966 14.9645 24.249 14.623 24.4457C14.2814 24.6425 13.8941 24.746 13.5 24.746C13.1058 24.746 12.7185 24.6425 12.377 24.4457C12.0354 24.249 11.7515 23.966 11.5537 23.625"
                    stroke="#00227A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-center">
              <div className="pr-[12px]">
                <p className="font-[600] font-[Segoe UI] text-[18px] text-[#00227A] leading-[27px] flex flex-row-reverse">
                  Name
                </p>
                <p className="font-[400] font-[Segoe UI] text-[18px] text-[#8CA3C3] leading-[27px]">
                  123456789
                </p>
              </div>
              <img
                className="w-[67px] h-[55px] pl-[12px]"
                src="/student.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#D8E1F8] rounded-[20px] mt-[30px] xl:mt-[50px] ">
          <div className="flex px-[2.875rem] py-[1rem] border-b border-[#BED0FF] mb-[1rem] xl:mb-[1.6875rem]">
            <img className="w-[100px] h-[100px]" src="/student.svg" alt="" />
            <div className="flex flex-col justify-center pl-[1.8125rem]">
              <p className="font-[Noto Sans] text-[#00227A] text-[1.5625rem] leading-[2.125rem] font-[400] pb-[0.375rem]">
                Institute Name
              </p>
              <p className="font-[Noto Sans] text-[#687EB5] text-[0.9375rem] leading-[1.25rem] font-[500] pb-[14px]">
                Institute-id: 1234567
              </p>
              <button className=" w-[125px] px-[12px] py-[7px] text-[#687EB5] border border-[#687EB5] rounded-md font-[Noto Sans] font-[500] text-sm ">
                Upload Photo
              </button>
            </div>
          </div>

          <div className="flex flex-col mb-[1rem] xl:mb-[1.6875rem]">
            <div className="flex justify-between px-[2.875rem]  xl:pt-[0.25rem] pb-[15x] xl:pb-[20px]">
              <p className="font-[Noto Sans] text-[#00227A] text-[24px] leading-[1.5rem] font-[400]">
                Institute Details
              </p>
            </div>
            <form action="">
              <div class="flex justify-between pl-[3.4375rem] pr-[1.5625rem] pb-[20px]">
                <div class="w-full">
                  <label
                    class="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400]"
                    for="lname"
                  >
                    Institute name
                  </label>
                  <br />
                  <input
                    class="border border-[#CCD9FA] rounded-[0.625rem] w-[90%] h-[3.5rem] mt-[0.5rem] pl-[0.625rem] focus:outline-none "
                    type="text"
                    id="iname"
                    name="iname"
                  />
                </div>
                <div class="w-full">
                  <label
                    class="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400]"
                    for="lname"
                  >
                    Institute id
                  </label>
                  <br />
                  <input
                    class="border border-[#CCD9FA] rounded-[0.625rem] w-[90%] h-[3.5rem] mt-[0.5rem] pl-[0.625rem] focus:outline-none "
                    type="text"
                    id="iid"
                    name="iid"
                  />
                </div>
                <div class="w-full">
                  <label
                    class="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400]"
                    for="lname"
                  >
                    Institute type
                  </label>
                  <br />
                  <input
                    class="border border-[#CCD9FA] rounded-[0.625rem] w-[90%] h-[3.5rem] mt-[0.5rem] pl-[0.625rem] focus:outline-none "
                    type="text"
                    id="itype"
                    name="itype"
                  />
                </div>
              </div>
              <div class="flex justify-between pl-[3.4375rem] pr-[1.5625rem] pb-[20px]">
                <div class="w-full">
                  <label
                    class="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400]"
                    for="lname"
                  >
                    Institute size
                  </label>
                  <br />
                  <input
                    class="border border-[#CCD9FA] rounded-[0.625rem] w-[90%] h-[3.5rem] mt-[0.5rem] pl-[0.625rem] focus:outline-none "
                    type="text"
                    id="isize"
                    name="isize"
                  />
                </div>
                <div class="w-full">
                  <label
                    class="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400]"
                    for="lname"
                  >
                    Email
                  </label>
                  <br />
                  <input
                    class="border border-[#CCD9FA] rounded-[0.625rem] w-[90%] h-[3.5rem] mt-[0.5rem] pl-[0.625rem] focus:outline-none "
                    type="text"
                    id="email"
                    name="email"
                  />
                </div>
                <div class="w-full">
                  <label
                    class="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400]"
                    for="lname"
                  >
                    Phone Number
                  </label>
                  <br />
                  <input
                    class="border border-[#CCD9FA] rounded-[0.625rem] w-[90%] h-[3.5rem] mt-[0.5rem] pl-[0.625rem] focus:outline-none "
                    type="text"
                    id="num"
                    name="num"
                  />
                </div>
              </div>
              <div class="flex justify-between pl-[3.4375rem] pr-[1.5625rem] pb-[20px]">
                <div class="w-full">
                  <label
                    class="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400]"
                    for="lname"
                  >
                    Address
                  </label>
                  <br />
                  <input
                    class="border border-[#CCD9FA] rounded-[0.625rem] w-[90%] h-[3.5rem] mt-[0.5rem] pl-[0.625rem] focus:outline-none "
                    type="text"
                    id="address"
                    name="address"
                  />
                </div>
                <div class="w-full">
                  <label
                    class="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400]"
                    for="lname"
                  >
                    State
                  </label>
                  <br />
                  <input
                    class="border border-[#CCD9FA] rounded-[0.625rem] w-[90%] h-[3.5rem] mt-[0.5rem] pl-[0.625rem] focus:outline-none "
                    type="text"
                    id="address"
                    name="address"
                  />
                </div>
                <div class="w-full">
                  <label
                    class="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400]"
                    for="lname"
                  >
                    Pin Code
                  </label>
                  <br />
                  <input
                    class="border border-[#CCD9FA] rounded-[0.625rem] w-[90%] h-[3.5rem] mt-[0.5rem] pl-[0.625rem] focus:outline-none "
                    type="text"
                    id="zipcode"
                    name="zipcode"
                  />
                </div>
              </div>
              <div class="flex flex-row-reverse pr-[1.875rem] pb-[0.5rem] text-[1.125rem] pl-[3.75rem]">
                <button class="border py-[0.75rem] px-[3rem] bg-[#0041E9] rounded-[0.625rem] text-[white] ml-[1.125rem]">
                  Save
                </button>
                <button
                  onClick={onBack}
                  class="border border-[#00227A] py-[0.75rem] px-[2.5rem] rounded-[0.625rem] text-[#00227A]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditInstituteDetails;
