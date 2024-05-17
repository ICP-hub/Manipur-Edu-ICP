
import React from "react";
import { Link } from "react-router-dom";

const Status = ({ open, onClose, Field }) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 bg-gray-900 opacity-80 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-[#E7F4FF] rounded-xl max-w-[30%] w-full pb-8">
          <div className="flex flex-col justify-center items-center pt-[50px]">
            <p className="text-[#00227A] text-[15px] font-[Segoe UI] font-[600] leading-[20px]">
              {Field}
            </p>
            <div className="flex justify-center pt-[40px]">
              <Link to={"/"}>
                <button
                  onClick={onClose}
                  className="w-[92px] bg-[#0041E9] rounded-[5px] py-[10px] text-[white] font-[Segoe UI] font-[400] text-[15px] leading-[20px]"
                >
                  Close
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Status;
