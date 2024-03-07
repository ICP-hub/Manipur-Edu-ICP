import React from "react";

const Footer = () => {
  return (
    <div className=" w-full  flex justify-center pb-[50px] bg-[#DFEEFF] px-[4%] lg1:px-[5%]">
      <div className="flex flex-col justify-between  w-[80%]">
        <div className="mt-[38px]  flex items-center border-b border-[#00227A] ">
          <p className="pb-37px text-[#0041E9] text-[28px] font-[700] leading-[31px] font-[Fraunces]">
            Manipur Edu
          </p>
        </div>
        <div className="mt-[37px]  flex justify-between items-center ">
          <p className="w-[55%] text-[#849BD7]">
            © 2023 Manipur Edu, Inc. All rights reserved.
          </p>
          <button className="w-[15%] text-[#849BD7]">Scholarship Rules</button>
          <button className="w-[15%] text-[#849BD7]">Terms of service</button>
          <button className="w-[15%] text-[#849BD7]">Privacy Policy</button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
