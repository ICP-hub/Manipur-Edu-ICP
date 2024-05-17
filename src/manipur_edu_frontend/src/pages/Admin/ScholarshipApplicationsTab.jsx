import React from "react";
import NoDataComponent from "../Institute/NoData";
const ScholarshipApplicationsTab = ({ onTap }) => {
  const entries = [
    // {
    //   id: "STU-12345",
    //   email: "email@email.com",
    //   status: "Approved",
    //   scholarship_detail: "Manipur Scholarship",
    //   view_approve: "Click to View/Approve",
    // },
    // {
    //   id: "STU-12345",
    //   email: "email@email.com",
    //   status: "Rejected",
    //   scholarship_detail: "Manipur Scholarship",
    //   view_approve: "Click to View/Approve",
    // },
    // {
    //   id: "STU-12345",
    //   email: "email@email.com",
    //   status: "Approved",
    //   scholarship_detail: "Manipur Scholarship",
    //   view_approve: "Click to View/Approve",
    // },
    // {
    //   id: "STU-12345",
    //   email: "email@email.com",
    //   status: "Pending",
    //   scholarship_detail: "Manipur Scholarship",
    //   view_approve: "Click to View/Approve",
    // },
  ];
  if (!entries || entries.length === 0) {
    return (
      <NoDataComponent
        message={"No Scholarship Applications yet!"}
        imageSrc="NoScholarship.png"
      ></NoDataComponent>
    );
  }
  return (
    <div>
      <div className="border rounded-[10px] border-[#D9EBFF]">
        {/* change in responsive */}
        <div className="grid grid-cols-5 py-[20px]   font-[600]  font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
          <div className="flex justify-center">STUDENT ID</div>
          <div className="flex justify-center">EMAIL</div>
          <div className="flex justify-center">STATUS</div>
          <div className="flex justify-center">SCHOLARSHIP DETAILS</div>
          <div className="flex justify-center">STUDENT APPLICATION</div>
        </div>
        {entries.map((entry, index) => (
          <Card key={index} entry={entry} onTap={onTap} />
        ))}
      </div>
      <div className="flex flex-row-reverse pt-[10px] ">Page 1 of 100</div>
    </div>
  );
};

export default ScholarshipApplicationsTab;

const Card = ({ entry, onTap }) => {
  return (
    <div className=" grid grid-cols-5 py-[20px] border-t border-[#D9EBFF]">
      <div className=" flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
        <div className="flex rounded-[5px]">
          <p className="pt-[6px] ">{entry.id}</p>
        </div>
      </div>
      <p className="flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {entry.email}
      </p>
      <p
        className="flex justify-center   font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]"
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
      <p
        className={`pt-[7px] font-[700] underline flex justify-center  text-[#687DB2] font-[Segoe UI]  text-[15px] leading-[20px]`}
      >
        {entry.scholarship_detail}
      </p>
      <button
        className="bg-blue-500 text-white font-segoe-ui text-11 rounded-lg h-9 w-30 ml-10"
        onClick={onTap}
        style={{ backgroundColor: "#355389" }}
      >
        {"View/Approve"}
      </button>
    </div>
  );
};
