import React from "react";

const NoDataComponent = ({ message, imageSrc }) => {
  return (
    <div className="flex flex-col items-center w-full h-[700px]">
      <img
        src={imageSrc}
        alt="No Data"
        className="w-[450px] h-[450px] pt-[40px]"
      />
      <p className="mt-[10px] text-center text-[16px] text-[#032068] font-semibold">
        {message}
      </p>
    </div>
  );
};

export default NoDataComponent;
