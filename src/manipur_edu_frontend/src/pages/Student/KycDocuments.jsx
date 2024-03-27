import React from "react";

const KycDocuments = ({ prev }) => {
  return (
    <div className="border-l border-[#D8E1F8] ml-[55px] flex flex-col justify-between pl-[47px] w-full pt-[45px] pr-[45px] ">
      <div className="pb-[45px]">
        <p className="text-[Segoe UI] text-[#00227A] text-[24px] leading-[32px] font-[400]">
          KYC Documents
        </p>
      </div>
      <div className="flex flex-col gap-[27px]">
        <div>
          <p className="text-[#00227A] text-[16px] font-[500] text-[Noto Sans] pb-[6px]">
            Aadhaar Card
          </p>
          <button className="rounded-[5px] py-[14px] px-[80px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
            Upload
          </button>
        </div>
        <div>
          <p className="text-[#00227A] text-[16px] font-[500] text-[Noto Sans] pb-[6px]">
            PAN Card
          </p>
          <button className="rounded-[5px] py-[14px] px-[80px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
            Upload
          </button>
        </div>
      </div>

      <div className="flex flex-row-reverse pr-[30px] pt-[45px] pb-[105px] text-[18px] ">
        <button className="border py-[16px] px-[55px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]">
          Save
        </button>

        <button
          onClick={prev}
          className="border py-[16px] px-[41px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]"
        >
          Previous
        </button>
        <button className="border border-[#00227A] py-[16px] px-[48px] rounded-[10px] text-[#00227A]">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default KycDocuments;
