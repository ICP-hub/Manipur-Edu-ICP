import React from "react";

const Card = ({ stepNumber, title, description, children }) => {
  return (
    <div className="sm1:max-w-xs bg-[#DAEBFF] sm1:rounded-[50px] rounded-[30px] sm1:border border-gray-200 sm1:shadow-md sm1:block">
      <div className="relative flex sm1:flex-col flex-row items-center p-4 gap-4">
        <div className="sm1:w-[80%] mb-8">{children}</div>
        <div className="flex flex-col justify-between h-full">
          <div className="sm1:pt-4">
            <h3 className="mt-2 sm1:text-xl text-md font-medium text-[#13375B] text-left sm1:text-center">
              {title}
            </h3>
            <p className="mt-1 sm1:text-base text-md text-[#00227A] text-left sm1:text-center">
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
