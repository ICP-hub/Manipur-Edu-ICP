import React from "react";
import NoDataComponent from "./NoData";

const ScholarshipTab = () => {
  const entries = [
    {
      name: "Student 1",
      id: "STU-12345",
      status: "Approved",
    },
    {
      name: "Student 2",
      id: "STU-12345",
      status: "Approved",
    },
    {
      name: "Student 3",
      id: "STU-12345",
      status: "Approved",
    },
    {
      name: "Student 4",
      id: "STU-12345",
      status: "Approved",
    },
    {
      name: "Student 1",
      id: "STU-12345",
      status: "Approved",
    },
    {
      name: "Student 2",
      id: "STU-12345",
      status: "Processing",
    },
    {
      name: "Student 3",
      id: "STU-12345",
      status: "Processing",
    },
    {
      name: "Student 4",
      id: "STU-12345",
      status: "Processing",
    },
    {
      name: "Student 1",
      id: "STU-12345",
      status: "Processing",
    },
    {
      name: "Student 2",
      id: "STU-12345",
      status: "Rejected",
    },
    {
      name: "Student 3",
      id: "STU-12345",
      status: "Rejected",
    },
    {
      name: "Student 4",
      id: "STU-12345",
      status: "Rejected",
    },
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
    <div className="w-[85%] self-center  pt-[27px]">
      <div className="grid grid-cols-5  py-[15px] mt-[27px] rounded-md bg-[#D9EBFF] font-[600] font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
        <div className="flex justify-center col-span-1">NAME</div>
        <div className="flex justify-center col-span-1">STUDENT ID</div>
        <div className="flex justify-center col-span-1">STATUS</div>
        <div className="flex justify-center col-span-1">
          SCHOLARSHIP DETAILS
        </div>
        <div className="flex justify-center col-span-1">
          STUDENT APPLICATION
        </div>

        {/* Adjust width as needed */}
      </div>
      {entries.map((entry, index) => (
        <Card key={index} entry={entry} />
      ))}

      <div className="  flex flex-row-reverse pt-[50px] pb-[100px]">
        <p>Page 1 of 100</p>
      </div>
    </div>
  );
};

export default ScholarshipTab;

const Card = ({ entry }) => {
  return (
    <div className="grid grid-cols-5 mt-4 h-[3rem] rounded-[0.3125rem] bg-[#EEF6FF] pt-[0.4375rem]">
      <div className="flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] rounded-[0.3125rem]">
        <div className="flex rounded-[0.3125rem]">
          <img
            className="w-[2.0625rem] h-[2.0625rem]"
            src="student.png"
            alt=""
          />
          <p className="pt-[0.375rem] pl-[0.8125rem]">{entry.name}</p>
        </div>
      </div>
      <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] pt-[0.375rem]">
        {entry.id}
      </p>
      <p
        className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] pt-[0.375rem]"
        style={{
          color:
            entry.status === "Approved"
              ? "#13BC24"
              : entry.status === "Processing"
              ? "#C3A846"
              : "#B26868",
        }}
      >
        {entry.status}
      </p>
      <button className="pt-[0.4375rem] font-[700] underline flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem]">
        Manipur Edu Scholarship
      </button>
      <button
        className="pt-2 ml-10 flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] text-sm leading-5"
        style={{
          width: "110px",
          height: "38px",
          backgroundColor: "#355389",
          borderRadius: "8px",
          color: "#FFFFFF",
          cursor: "pointer",
          border: "none",
        }}
      >
        View/Approve
      </button>
    </div>
  );
};
