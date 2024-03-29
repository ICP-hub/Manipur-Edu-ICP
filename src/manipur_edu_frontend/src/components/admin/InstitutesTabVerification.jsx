import React from "react";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import { useSelector } from "react-redux";
const VerificationButton = ({ onTap }) => {
  let entries = useSelector((state) => state.allInstitutesReducer);

  return (
    <div>
      <div className="border rounded-[10px] border-[#D9EBFF]">
        <div className="  grid grid-cols-5 py-[20px]   font-[600]  font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
          <div className="flex justify-center">INSTITUTE NAME</div>
          <div className="flex justify-center">INSTITUTE ID</div>
          <div className="flex justify-center">EMAIL</div>
          <div className="flex justify-center">STATUS</div>
          <div className="flex justify-center">INSTITUTE DETAILS</div>
        </div>
        {entries?.map((entry, index) => (
          <Card key={index} entry={entry} onTap={onTap} />
        ))}
      </div>
      <div className="flex flex-row-reverse pt-[10px] ">Page 1 of 100</div>
    </div>
  );
};
export default VerificationButton;

const Card = ({ entry, onTap }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/institute-details-verify", { state: { entry } });
  };
  const instituteName = entry?.[1].institute_name?.[0] ?? "N/A";
  const instituteId = entry?.[1].institute_id?.[0].substr(0, 6) ?? "N/A";
  const instituteEmail = entry?.[1].email?.[0] ?? "N/A";
  const verificationStatus = entry?.[1].status?.[0] ?? "N/A";
  return (
    <div className=" grid grid-cols-5 py-[20px] border-t border-[#D9EBFF]">
      <div className=" flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
        <div className="flex rounded-[5px]">
          <img className="w-[33px] h-[33px] " src="/student.svg" alt="" />
          <p className="pt-[6px] pl-[13px]">{instituteName}</p>
        </div>
      </div>
      <p className="flex justify-center flex-wrap overflow-auto text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {instituteId}
      </p>
      <p className="flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {instituteEmail}
      </p>
      <p
        className={`flex justify-center font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px] ${
          verificationStatus === "approved"
            ? "text-[#13BC24]"
            : verificationStatus === "pending"
            ? "text-[#C3A846]"
            : verificationStatus === "rejected"
            ? "text-[#B26868]"
            : "text-[#687DB2]"
        }`}
      >
        {verificationStatus}
      </p>

      <button
        onClick={handleClick}
        className="pt-[7px] font-[700] underline flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] "
      >
        {"check"}
      </button>
    </div>
  );
};
