import React from "react";
const LogoutModal = ({ open, onClose, handleClick }) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
        <div className="bg-[#EEF6FF] rounded-xl z-50 min-w-[40%] max-w-[70%] p-8">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#00227A] text-[15px] font-[Segoe UI] font-[600] leading-[20px] text-center">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-center pt-6">
              <button
                onClick={handleClick}
                className="w-[92px] bg-[#0041E9] rounded-[5px] py-[10px] text-[white] font-[Segoe UI] font-[400] text-[15px] leading-[20px] mr-[13px]"
              >
                Logout
              </button>
              <button
                onClick={onClose}
                className="w-[92px] rounded-[5px] py-[10px] border border-[#00227A] text-[#00227A] font-[Segoe UI] font-[400] text-[15px] leading-[20px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LogoutModal;
