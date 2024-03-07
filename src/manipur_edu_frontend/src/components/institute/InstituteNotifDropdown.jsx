import React from "react";

const InstituteNotifDropdown = ({ open }) => {
  if (!open) return null;
  return (
    <div className="flex flex-col  absolute top-[5.75rem] right-[10.5%]  w-[294px] p-4 bg-[#B8D8FF] rounded-xl before:absolute before:top-[-0.5rem] before:right-[2.25rem] before:w-[25px] before:h-[25px] before:bg-[#B8D8FF] before:rotate-45 ">
      <ul>
        <li className="flex pb-4 pt-2 border-b border-[white] ">
          <img className="w-[30px] h-[30px]" src='/student.svg' alt="" />
          <p className="text-[#00227A] text-base font-[400] font-[Segoe UI] leading-[20px] pl-2">
            Scholarship has been uploaded.
          </p>
        </li>
        <li className="flex  py-4 border-b border-[white] ">
          <img className="w-[30px] h-[30px]" src='/student.svg' alt="" />
          <p className="text-[#00227A] text-base font-[400] font-[Segoe UI] leading-[20px] pl-2">
            New verification request from student_id.
          </p>
        </li>
        <li className="flex  py-4 border-b border-[white] ">
          <img className="w-[30px] h-[30px]" src='/student.svg' alt="" />
          <p className="text-[#00227A] text-base font-[400] font-[Segoe UI] leading-[20px] pl-2">
            student_id has applied for “x” scholarship.
          </p>
        </li>
        <li className="flex pt-4 pb-2  ">
          <img className="w-[30px] h-[30px]" src='/student.svg' alt="" />
          <p className="text-[#00227A] text-base font-[400] font-[Segoe UI] leading-[20px] pl-2 pt-[3px]">
            Certificate Issued
          </p>
        </li>
      </ul>
    </div>
  );
};
export default InstituteNotifDropdown;
