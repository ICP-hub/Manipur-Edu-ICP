import React from "react";

const VerifyEditDeleteDropdown = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="relative flex flex-col bg-[#D9EBFF] w-[150px] rounded-[10px]  left-[475%]  "
    >
      <div className="flex justify-center border-b border-[white]">
        <button className="text-[#687DB2] py-[10px]">View Details</button>
      </div>
      <div className="flex justify-center border-b border-[white]">
        <button className="text-[#687DB2] py-[10px]">Edit</button>
      </div>
      <div className="flex justify-center border-b border-[white]">
        <button className="text-[#687DB2] py-[10px]">Delete</button>
      </div>
    </div>
  );
};

export default VerifyEditDeleteDropdown;