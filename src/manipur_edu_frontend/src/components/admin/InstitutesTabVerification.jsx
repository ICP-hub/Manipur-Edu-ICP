import React from "react";

const VerificationButton = ({ onTap }) => {
  const entries = [
    {
      name: "Institute 1",
      id: "INS-12345",
      email: "email@email.com",
      status: "Approved",
      details: "Click to View/Verify",
    },
    {
      name: "Institute 2",
      id: "INS-12345",
      email: "email@email.com",
      status: "Approved",
      details: "Click to View/Verify",
    },

    {
      name: "Institute 4",
      id: "INS-12345",
      email: "email@email.com",
      status: "Pending",
      details: "Click to View/Verify",
    },
    {
      name: "Institute 1",
      id: "INS-12345",
      email: "email@email.com",
      status: "Rejected",
      details: "Click to View/Verify",
    },
  ];
  return (
    <div>
      <div className="border rounded-[10px] border-[#D9EBFF]">
        <div className="  grid grid-cols-5 py-[20px]   font-[600]  font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
          <div className="flex justify-center">INSTITUTE NAME</div>
          <div className="flex justify-center">INSTITUTE ID</div>
          <div className="flex justify-center">EMAIL</div>
          <div className="flex justify-center">STATUS</div>
          <div className="flex justify-center ">INSTITUTE DETAILS</div>
        </div>

        {entries.map((entry, index) => (
          <Card key={index} entry={entry} onTap={onTap} />
        ))}
      </div>
      <div className="flex flex-row-reverse pt-[10px] ">Page 1 of 100</div>
    </div>
  );
};
export default VerificationButton;

const Card = ({ entry, onTap }) => {
  return (
    <div className=" grid grid-cols-5 py-[20px] border-t border-[#D9EBFF]">
      <div className=" flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
        <div className="flex rounded-[5px]">
          <img className="w-[33px] h-[33px] " src="student.jpg" alt="" />
          <p className="pt-[6px] pl-[13px]">{entry.name}</p>
        </div>
      </div>
      <p className="flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {entry.id}
      </p>
      <p className="flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {entry.email}
      </p>
      <p
        className={`flex justify-center font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]`}
        style={{
          color:
            entry.status === "Approved"
              ? "#13BC24"
              : entry.status === "Pending"
              ? "#C3A846"
              : "#B26868",
        }}
      >
        {entry.status}
      </p>

      <button
        onClick={onTap}
        className="pt-[7px] font-[700] underline flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] "
      >
        {entry.details}
      </button>
    </div>
  );
};
