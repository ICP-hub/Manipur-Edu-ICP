import React from "react";

const Card = ({ stepNumber, title, description, children }) => {
  return (
    <div className="max-w-xs bg-[#DAEBFF] rounded-[50px] border border-gray-200 shadow-md">
      <div className="relative flex flex-col items-center p-4">
        <div className="w-[80%]">{children}</div>
        <div className="flex flex-col justify-between h-full">
          <div className="pt-4">
            <h3 className="mt-2 text-xl font-medium text-[#13375B]">
              {title}
            </h3>
            <p className="mt-1 text-base text-[#00227A]">
              {description}
            </p>
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
