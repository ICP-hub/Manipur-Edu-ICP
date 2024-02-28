import React from "react";

const EditResult = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EEF6FF] h-[32.5rem] mt-[50px]  w-[70%] rounded-xl">
      <div className="flex flex-col px-[3.125rem] py-[2.5rem]">
        <p className="text-[#00227A] text-[1.5625rem] font-[Noto Sans] font-[500] leading-[2.125rem]">
          Edit Result
        </p>
        <form action="">
          <div className="flex justify-between pt-[2.375rem]">
            <div className="w-full">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400] "
                for="fname"
              >
                Student name
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[0.3125rem] w-[90%] h-[2.75rem] mt-[0.5rem] pl-[0.625rem]  focus:outline-none "
                type="text"
                id="sname"
                name="sname"
              />
            </div>
            <div className="w-full">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400] "
                for="fname"
              >
                Student id
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[0.3125rem] w-[90%] h-[2.75rem] mt-[0.5rem] pl-[0.625rem]  focus:outline-none "
                type="text"
                id="sid"
                name="sid"
              />
            </div>
            <div className="w-full">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400] "
                for="fname"
              >
                Roll Number
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[0.3125rem] w-[90%] h-[2.75rem] mt-[0.5rem] pl-[0.625rem]  focus:outline-none "
                type="text"
                id="rnum"
                name="rnum"
              />
            </div>
          </div>
          <div className="flex justify-between pt-[1.375rem]">
            <div className="w-full">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400] "
                for="fname"
              >
                Semester
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[0.3125rem] w-[90%] h-[2.75rem] mt-[0.5rem] pl-[0.625rem]  focus:outline-none "
                type="text"
                id="sem"
                name="sem"
              />
            </div>
            <div className="w-full">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400] "
                for="fname"
              >
                Academic Year
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[0.3125rem] w-[90%] h-[2.75rem] mt-[0.5rem] pl-[0.625rem]  focus:outline-none "
                type="text"
                id="acad"
                name="acad"
              />
            </div>
            <div className="w-full">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[1.0625rem] leading-[1.4375rem] font-[400] "
                for="fname"
              >
                Backlog Semester
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[0.3125rem] w-[90%] h-[2.75rem] mt-[0.5rem] pl-[0.625rem]  focus:outline-none "
                type="text"
                id="backsem"
                name="backsem"
              />
            </div>
          </div>
          <p className="text-[#00227A] text-[1.25rem] font-[Noto Sans] font-[400] leading-[1.6875rem] pt-[1.375rem] pb-[0.6875rem]">
            Semester Result
          </p>
          <button className=" py-2 px-14  bg-[white] rounded-[10px] text-[#00227A] border border-[#CCD9FA] font-[Segoe UI] text-[15px] font-[400] leading-[27px]">
            Upload
          </button>
          <div className="flex justify-center  pt-[2.5rem]">
            <button
              onClick={onClose}
              className="w-[7.3125rem] bg-[#0041E9]  rounded-[0.625rem]   h-[3.125rem] mr-[1.5rem]  text-[white] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem]"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="w-[7.3125rem] rounded-[0.625rem] h-[3.125rem]  border border-[#00227A] text-[#00227A] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditResult;
