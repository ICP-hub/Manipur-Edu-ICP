import React, { useState } from "react";
import StudentVerificationRequest from "./StudentVerificationRequest";
import StudentRegisteredByInstitute from "./StudentRegisteredByInstitute";
import AllRegisteredStudents from "./AllRegisteredStudents";
import StudentEditRequest from "./StudentEditRequest";
const StudentsTab = () => {
  const [page, setPage] = useState("verification");
  return (
    <div className="w-[85%] self-center  pt-[27px]">
      <div className="flex justify-between">
        <button
          onClick={() => setPage("verification")}
          className={
            page === "verification"
              ? "py-[5px] px-[12px] rounded-[10px] whitespace-nowrap  text-[#687DB2] bg-[#D9EBFF] mr-[16px]"
              : "py-[5px] px-[12px] rounded-[10px] whitespace-nowrap  text-[#687DB2] border border-[#D9EBFF] mr-[16px]"
          }
        >
          Student Verification Requests{" "}
        </button>
        <button
          onClick={() => setPage("studentEditRequest")}
          className={
            page === "studentEditRequest"
              ? "py-[10px] px-[12px] rounded-[10px] whitespace-nowrap text-[#687DB2] bg-[#D9EBFF] mr-[16px]"
              : "py-[10px] px-[12px] rounded-[10px] whitespace-nowrap text-[#687DB2] border border-[#D9EBFF] mr-[16px]"
          }
        >
          Student Edit Request
        </button>
        <button
          onClick={() => setPage("studentRegisteredByInstitute")}
          className={
            page === "studentRegisteredByInstitute"
              ? "py-[10px] px-[12px] rounded-[10px] whitespace-nowrap text-[#687DB2] bg-[#D9EBFF] mr-[16px]"
              : "py-[10px] px-[12px] rounded-[10px] whitespace-nowrap text-[#687DB2] border border-[#D9EBFF] mr-[16px]"
          }
        >
          Student Registered By Institute
        </button>
        <button
          onClick={() => setPage("allstudents")}
          className={
            page === "allstudents"
              ? "py-[10px] px-[12px] rounded-[10px] whitespace-nowrap text-[#687DB2] bg-[#D9EBFF] mr-[16px]"
              : "py-[10px] px-[12px] rounded-[10px] whitespace-nowrap text-[#687DB2] border border-[#D9EBFF] mr-[16px]"
          }
        >
          All Registered Students
        </button>
      </div>
      {page === "verification" && <StudentVerificationRequest />}
      {page === "allstudents" && <AllRegisteredStudents />}
      {page === "studentRegisteredByInstitute" && (
        <StudentRegisteredByInstitute />
      )}
      {page === "studentEditRequest" && <StudentEditRequest />}
    </div>
  );
};
export default StudentsTab;
