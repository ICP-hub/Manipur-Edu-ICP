import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" w-full  flex justify-center pb-[50px] bg-[#DFEEFF] sm1:px-[4%] lg1:px-[5%]">
      <div className="flex flex-col justify-between mx-6 sm1:auto sm1:w-[80%]">
      <button className="w-auto text-left text-[#849BD7] sm1:hidden block mt-[38px]">Scholarship Rules</button>
          <button className="w-auto text-left text-[#849BD7] sm1:hidden block">Terms of service</button>
          <button className="w-auto text-left text-[#849BD7] sm1:hidden block">Privacy Policy</button>
        <div className="mt-[38px]  flex items-center border-b border-[#00227A] ">
          <p className="pb-37px text-[#00227A] sm1:text-[#0041E9] text-[28px] font-[700] leading-[31px] font-[Fraunces]">
            Manipur Edu
          </p>
        </div>
        <div className="mt-[37px]  flex justify-between items-center ">
          <p className="w-full sm1:w-[55%] text-[#849BD7]">
            © {currentYear} Manipur Edu, Inc. All rights reserved.
          </p>
          <button className="w-[15%] text-[#849BD7] hidden sm1:block">Scholarship Rules</button>
          <button className="w-[15%] text-[#849BD7] hidden sm1:block">Terms of service</button>
          <button className="w-[15%] text-[#849BD7] hidden sm1:block">Privacy Policy</button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
