import React, { useState } from "react";
import StudentVerificationRequest from "./StudentVerificationRequest";
import StudentRegisteredByInstitute from "./StudentRegisteredByInstitute";
import AllRegisteredStudents from "./AllRegisteredStudents";
import StudentEditRequest from "./StudentEditRequest";
const StudentsTab = ({ entries }) => {
  const [page, setPage] = useState("verification");
  return (
   <div className="w-[85%] self-center pt-[27px]">
      <div className="flex justify-between">
        <div>
          <button
            onClick={() => setPage("verification")}
            className={
              page === "verification"
                ? "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] bg-[#D9EBFF] mr-[16px]"
                : "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] border border-[#D9EBFF] mr-[16px]"
            }
          >
            Student Verification Requests
          </button>{" "}
        </div>
        {/* <div>
          <button
            onClick={() => setPage("registeredbyinstitute")}
            className={
              page === "registeredbyinstitute"
                ? "py-[10px] px-[29px] rounded-[10px] text-[#687DB2] bg-[#D9EBFF] mr-[16px]"
                : "py-[10px] px-[29px] rounded-[10px] text-[#687DB2] border border-[#D9EBFF] mr-[16px]"
            }
          >
            Students Registered by Institute
          </button>
        </div> */}
        <div>
          <button
            onClick={() => setPage("allstudents")}
            className={
              page === "allstudents"
                ? "py-[10px] px-[29px] rounded-[10px] text-[#687DB2] bg-[#D9EBFF] mr-[16px]"
                : "py-[10px] px-[29px] rounded-[10px] text-[#687DB2] border border-[#D9EBFF] mr-[16px]"
            }
          >
            All Registered Students
          </button>
        </div>
        <div>
          <button
            onClick={() => setPage("editrequest")}
            className={
              page === "editrequest"
                ? "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] bg-[#D9EBFF] "
                : "py-[10px] px-[22px] rounded-[10px] text-[#687DB2] border border-[#D9EBFF] "
            }
          >
            Student Edit Requests{" "}
          </button>
        </div>
      </div>
           {page === "verification" && <StudentVerificationRequest entries={entries} />}
      {/* {page === "registeredbyinstitute" && <StudentRegisteredByInstitute  entries={entries} />} */}
      {page === "allstudents" && <AllRegisteredStudents entries={entries} />}
        {page === "editrequest" && <StudentEditRequest  />}
        
    </div>
  );
};
export default StudentsTab;
