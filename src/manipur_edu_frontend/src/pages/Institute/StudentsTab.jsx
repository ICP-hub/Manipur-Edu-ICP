import React, { useState } from "react";
import StudentVerificationRequest from "./StudentVerificationRequest";
import StudentRegisteredByInstitute from "./StudentRegisteredByInstitute";
import AllRegisteredStudents from "./AllRegisteredStudents";
import StudentEditRequest from "./StudentEditRequest";
const StudentsTab = () => {
  const [page, setPage] = useState("verification");
  return (
    <div className="w-[85%] self-center  pt-[27px]">
      <button
        onClick={() => setPage("verification")}
        className={
          page === "verification"
            ? "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] bg-[#D9EBFF] mr-[16px]"
            : "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] border border-[#D9EBFF] mr-[16px]"
        }
      >
        Student Verification Requests{" "}
      </button>
      <button
        onClick={() => setPage("allstudents")}
        className={
          page === "allstudents"
            ? "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] bg-[#D9EBFF] mr-[16px]"
            : "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] border border-[#D9EBFF] mr-[16px]"
        }
      >
        All Registered Students
      </button>
      <button
        onClick={() => setPage("studentRegisteredByInstitute")}
        className={
          page === "allstudents"
            ? "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] bg-[#D9EBFF] mr-[16px]"
            : "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] border border-[#D9EBFF] mr-[16px]"
        }
      >
           StudentRegisteredByInstitute
      </button>

      {/* StudentRegisteredByInstitute */}

      {page === "verification" && <StudentVerificationRequest  />}
      {page === "allstudents" && <AllRegisteredStudents />}
      {page === "studentRegisteredByInstitute" && <StudentRegisteredByInstitute />}

    </div>
  );
};
export default StudentsTab;



