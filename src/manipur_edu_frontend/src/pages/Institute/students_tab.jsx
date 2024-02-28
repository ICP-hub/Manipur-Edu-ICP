import React, { useState } from "react";
import StudentVerificationRequest from "./student_verification_request";
import StudentRegisteredByInstitute from "./student_registered_by_institute";
import AllRegisteredStudents from "./all_registered_students";
const StudentsTab = ({entries}) => {
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
      {/* <button
        onClick={() => setPage("registeredbyinstitute")}
        className={
          page === "registeredbyinstitute"
            ? "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] bg-[#D9EBFF] mr-[16px]"
            : "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] border border-[#D9EBFF] mr-[16px]"
        }
      >
        Students Registered by Institute
      </button> */}
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

      {page === "verification" && <StudentVerificationRequest  entries={entries}/>}
      {/* {page === "registeredbyinstitute" && <StudentRegisteredByInstitute  entries={entries} />} */}
      {page === "allstudents" && <AllRegisteredStudents entries={entries} />}
    </div>
  );
};
export default StudentsTab;
