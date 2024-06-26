import React from "react";

const ApproveProfileModal = ({ open, onClose, handleClick }) => {
  if (!open) return null;
  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EEF6FF] h-[30vh]  w-[30%] rounded-xl px-2">
      <div className="flex flex-col justify-center items-center pt-[50px] ">
        <p className="text-[#00227A] text-[15px] font-[Segoe UI] font-[600] leading-[20px]">
          Are you sure you want to approve these updated details?
        </p>
        <div className="flex justify-center  pt-[40px]">
          <button
            onClick={handleClick}
            className="w-[92px] bg-[#0041E9]  rounded-[5px]  py-[10px] mr-[13px]  text-[white] font-[Segoe UI] font-[400] text-[15px] leading-[20px]"
          >
            Approve
          </button>
          <button
            onClick={onClose}
            className="w-[92px] rounded-[5px] py-[10px]  border border-[#00227A] text-[#00227A] font-[Segoe UI] font-[400] text-[15px] leading-[20px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default ApproveProfileModal;