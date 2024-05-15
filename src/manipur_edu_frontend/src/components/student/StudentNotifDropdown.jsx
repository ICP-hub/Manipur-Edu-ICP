import React from "react";

const StudentNotifDropdown = ({ open }) => {
  if (!open) return null;
  return (
    <div className="flex flex-col  absolute top-[5.75rem] right-[10.5%]  w-[290px] p-4 bg-[#B8D8FF] rounded-xl before:absolute before:top-[-0.5rem] before:right-[1.25rem] before:w-[25px] before:h-[25px] before:bg-[#B8D8FF] before:rotate-45 before: before: before: before: before: before:">
      <ul>
        <li className="flex justify-between pb-4 pt-2 border-b border-[white] ">
          <img className="w-[30px] h-[30px]" src='/student.svg' alt="" />
          <p
            className="text-[#00227A] text-base font-[400] font-[Segoe UI]
            leading-[20px] pl-2"
          >
            {" "}
            Your scholarship has been approved.
          </p>
        </li>
        <li className="flex  py-4 border-b border-[white] ">
          <img className="w-[30px] h-[30px]" src='/student.svg' alt="" />
          <p className="text-[#00227A] text-base font-[400] font-[Segoe UI] leading-[20px] pl-2">
            Your scholarship has been rejected.
          </p>
        </li>
        <li className="flex  py-4 border-b border-[white] ">
          <img className="w-[30px] h-[30px]" src='/student.svg' alt="" />
          <p className="text-[#00227A] text-base font-[400] font-[Segoe UI] leading-[20px] pl-2">
            Your results have been uploaded.
          </p>
        </li>
        <li className="flex  py-4 border-b border-[white] ">
          <img className="w-[30px] h-[30px]" src='/student.svg' alt="" />
          <p className="text-[#00227A] text-base font-[400] font-[Segoe UI] leading-[20px] pl-2">
            Your Document have been uploaded.
          </p>
        </li>
        <li className="flex pt-4 pb-2  ">
          <img className="w-[30px] h-[30px]" src='/student.svg' alt="" />
          <p className="text-[#00227A] text-base font-[400] font-[Segoe UI] leading-[20px] pl-2">
            New scholarship has been uploaded. Check now!
          </p>
        </li>
      </ul>
    </div>
  );
};
export default StudentNotifDropdown;
