import React from "react";
import { Link } from "../../../../../node_modules/react-router-dom/dist/index";

const Status = ({ open, onClose, Field }) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="fixed items-center top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EEF6FF] h-[30vh] w-[30%] rounded-xl">
        <div className="flex flex-col justify-center items-center pt-[50px] ">
          <p className="text-[#00227A] text-[15px] font-[Segoe UI] font-[600] leading-[20px]">
           {Field}
          </p>
          <div className="flex justify-center  pt-[40px]">
           
           <Link to={'/'}> <button
              onClick={onClose}
              className="w-[92px] bg-[#0041E9]  rounded-[5px]  py-[10px]   text-[white] font-[Segoe UI] font-[400] text-[15px] leading-[20px]"
            >
              close
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Status;
