import React, { useState } from "react";
import StudentPersonalDetailsEdit from "./PersonalDetails";
import ParentDetailsEdit from "./ParentsDetails";
import InstituteDetailsEdit from "./StudentInstituteDetails";
import KycDocuments from "./KycDocuments";
import { useAuth } from "../../utils/useAuthClient";
import { useSelector } from 'react-redux';
import Status from "../../components/student/status";

const StudentDetailsEdit = () => {
  const [page, setPage] = useState("personal");

  let entry = useSelector(
    (state) => state.studentDetailsReducer
  );
  console.log('entry',entry);
  console.log('entry update', entry[0]);
  const [formData, setFormData] = useState(entry[0]);
  console.log('initialformdata', formData)
  const updateFormData = (newData) => {
    setFormData(newData);
  };

  // const ins = useSelector((state) => state.intituteId);
  // console.log(ins, "is the data in ins ")
  // let allStuds  = useSelector((state) => state.allStudentsReducer) ; 
  // console.log("is the data in allStuds  " , allStuds)


  return (
    <div className="bg-[#E5F1FF] min-h-screen flex justify-center px-[4%] lg1:px-[5%] ">
      <div className="w-full  my-[50px] rounded-[10px] bg-white">
        <div className="flex mt-[45px] ml-[45px] mr-[45px] border-b border-[#D8E1F8] ">
          <div>
            <img className="pl-[60px] pb-[35px]" src='/student.svg' />
          </div>
          <div className="pl-[30px]">
            <p className="text-[Noto Sans] text-[#00227A] text-[26px] leading-[35px] font-[500] pb-[6px]">
              {/* Name */}
              {entry?.[0]?.first_name?.[0] + " " + entry?.[0]?.last_name?.[0] ?? "N/A"}

            </p>
            <p className="text-[Noto Sans] text-[#687EB5] text-[15px] leading-[20px] font-[500] pb-[14px]">
              Student #: 1234567
            </p>
            <button className=" px-[18px] py-[7px] text-[Noto Sans] text-[#687EB5] text-[14px] leading-[19px] font-[500] border border-[#687EB5] rounded-[5px]">
              Upload Photo
            </button>
          </div>
        </div>
        <div className="flex ml-[45px]">
          <div className="flex flex-col pt-[45px] whitespace-nowrap">
            <button
              onClick={() => setPage("personal")}
              className={
                page === "personal"
                  ? "text-[Segoe UI] text-[#00227A] text-[20px] leading-[27px] font-[600] w-[145px] ml-[4px]"
                  : " text-[Segoe UI] text-[#687EB5] text-[20px] leading-[27px] font-[400] w-[145px]"
              }
            >
              Personal Details
            </button>
            <button
              onClick={() => setPage("parents")}
              className={
                page === "parents"
                  ? "mt-[30px] text-[Segoe UI] text-[#00227A] text-[20px] leading-[27px] font-[600] w-[145px] ml-[4px] pr-[10px]"
                  : "mt-[30px] text-[Segoe UI] text-[#687EB5] text-[20px] leading-[27px] font-[400] w-[145px] pr-[10px]"
              }
            >
              Parents Details
            </button>
            <button
              onClick={() => setPage("institute")}
              className={
                page === "institute"
                  ? "mt-[30px] text-[Segoe UI] text-[#00227A] text-[20px] leading-[27px] font-[600] w-[145px] ml-[4px] pr-[2px]"
                  : "mt-[30px] text-[Segoe UI] text-[#687EB5] text-[20px] leading-[27px] font-[400] w-[145px] pr-[3px]"
              }
            >
              Institute Details
            </button>
            <button
              onClick={() => setPage("kyc")}
              className={
                page === "kyc"
                  ? "mt-[30px] text-[Segoe UI] text-[#00227A] text-[19px] leading-[27px] font-[500] w-[145px] ml-[4px] pr-[2px]"
                  : "mt-[30px] text-[Segoe UI] text-[#687EB5] text-[20px] leading-[27px] font-[400] w-[145px] pr-[3px]"
              }
            >
              KYC Documents
            </button>
          </div>
          {page === "personal" && (
            <StudentPersonalDetailsEdit next={() => setPage("parents")} formData={formData} updateFormData={updateFormData} 
            // handleSave={handleSave}
            />
          )}
          {page === "parents" && (
            <ParentDetailsEdit next={() => setPage("institute")} prev={() => setPage("personal")} formData={formData} updateFormData={updateFormData}/>
          )}
          {page === "institute" && (
            <InstituteDetailsEdit prev={() => setPage("parents")} formData={formData} updateFormData={updateFormData}/>
          )}
          {page === "kyc" && <KycDocuments prev={() => setPage("institute")} />}
        </div>
      </div>
      {/* <div className="">
        <Status open={status} Field={Field} onClose={() => setStatus(false)} />
      </div> */}
    </div>
  );
};

export default StudentDetailsEdit;
