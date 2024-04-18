import React from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";

const InstituteDetailsEdit = ({ prev ,formData , updateFormData }) => {
  return (
    <div className="px-[4%] lg1:px-[5%] flex flex-col justify-between w-full ">
      <div className="w-full my-[3.125rem] rounded-[0.625rem] bg-white px-[4.125rem] py-[2.625rem]">
        <div className="pb-[45px]">
          <p className="text-[Segoe UI] text-[#00227A] text-[24px] leading-[32px] font-[400]">
            Institute Details
          </p>
        </div>
        <form action="">
          <div className="flex justify-between">
            <div className="w-full ">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400] "
                for="fname"
              >
                {/* roll_no */}
                Roll number
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="text"
                id="rnumber"
                name="rollnumber"
              value={formData.roll_no || ''} 

              />
            </div>
            <div className="w-full">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
                for="lname"
              >
                {/* institute_name */}
                Institute name
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="text"
                id="name"
                name="institutename"
              value={formData.institute_name || ''} 
              />
            </div>
            <div className="w-full">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
                for="lname"
              >
                {/* student_institute_email */}

                Student's Institute E-mail
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="text"
                id="email"
                name="email"
              value={formData.student_institute_email || ''} 

              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-full pt-[27px]">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
                for="fname"
              >
                CGPA
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="text"
                id="fname"
                name="fname"
              value={formData.cgpa || ''} 

              />
            </div>
            <div className="w-full pt-[27px]">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
                for="lname"
              >
                Graduation Year
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="year"
                id="gradyear"
                name="gradyear"
              value={formData.graduation_year || ''} 

              />
            </div>
            <div className="w-full pt-[27px]">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
                for="lname"
              >
                {/* program_enrolled */}
                Program
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="text"
                id="program"
                name="program"
              value={formData.program_enrolled || ''} 
              />
            </div>
          </div>

          <div className="flex flex-row-reverse pr-[30px] pt-[45px] pb-[105px] text-[18px] ">
            <Link to="/profile-result">
              <button className="border py-[16px] px-[55px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]">
                Save
              </button>
            </Link>
            <Link to="/profile-result">
              <button className="border border-[#00227A] py-[16px] px-[48px] rounded-[10px] text-[#00227A]">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstituteDetailsEdit;
