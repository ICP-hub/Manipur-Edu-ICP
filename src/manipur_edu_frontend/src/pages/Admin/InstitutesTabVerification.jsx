import React from "react";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import StudentsTab from "../Institute/StudentsTab";
import { useDispatch } from "react-redux";
import { setInstituteId } from "../../../Redux/Action/idAction";

const VerificationButton = ({ onTap, SetTab }) => {
  let entries = useSelector((state) => state.allInstitutesReducer);
  const pendingEntries = entries?.filter(entry => entry?.[1].status?.[0] === "pending");

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
        {pendingEntries?.map((entry, index) => (
          <Card SetTab={SetTab} key={index} entry={entry} onTap={onTap} />
        ))}
      </div>
      <div style={{ position: "absolute", bottom: "20px", right: "30px" }}>
        Page 1 of 100
      </div>
    </div>
  );
};
export default VerificationButton;

const Card = ({ entry, onTap, SetTab }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("entry : ", entry)
  const instituteName = entry?.[1].institute_name?.[0] ?? "N/A";
  const instituteId = entry?.[1].institute_id?.[0].substr(0, 6) ?? "N/A";
  const instituteEmail = entry?.[1].email?.[0] ?? "N/A";
  const verificationStatus = entry?.[1].status?.[0] ?? "N/A";

  const handleClick = () => {

    dispatch(setInstituteId(instituteId));

    navigate("/institute-details-verify", { state: { entry } });
    SetTab("institute-details-verify");

  };

  return (
    <div className="grid grid-cols-5 py-[20px] border-t border-[#D9EBFF]">
      <div className="flex items-center justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
        <div className="flex items-center rounded-[5px] ml-[30px]">
          {" "}
          <div className="w-[37px] h-[37px]">
            {" "}
            <img className="w-full h-full" src="/student.svg" alt="" />{" "}
          </div>
        </div>
        <div className="ml-[10px] flex-grow">
          <p className="pt-[6px] overflow-hidden">{instituteName}</p>
        </div>
      </div>
      <p className="flex justify-center items-center flex-wrap overflow-auto text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {instituteId}
      </p>
      <p className="flex justify-center items-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {instituteEmail}
      </p>
      <p
        className={`flex justify-center items-center font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px] ${verificationStatus === "approved"
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
        className="pt-[7px] font-[700] underline flex justify-center items-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px]"
      >
        {"check"}
      </button>
    </div>
  );
};
