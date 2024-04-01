import React, { useState } from "react";
import { Link } from "../../../../../node_modules/react-router-dom/dist/index";
import { useAuth } from "../../utils/useAuthClient";
import Status from "../../components/student/status";
const StudentPersonalDetailsEdit = ({ next, formData, updateFormData }) => {
  const { actor } = useAuth();
  const [status, setStatus] = React.useState(false);
  const [Field, setField] = React.useState("");
  console.log('formData',formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ ...formData, [name]: value });
    console.log("Saving data:", formData);
  };
  const handleSave = () => {
    // const editStatusResponse = actor.edit_student_profile(formData);
    // console.log("Saving data:", formData);
    setField('hh');
    setStatus(true);
    // Reset currentPage if needed
  };
  return (
    <div className="border-l border-[#D8E1F8] ml-[55px] flex flex-col justify-between pl-[47px] w-full pt-[45px] pr-[45px] ">
      <div className="pb-[45px]">
        <p className="text-[Segoe UI] text-[#00227A] text-[24px] leading-[32px] font-[400]">
          Personal Details 
        </p>
      </div>
      <form action="">
        <div className="flex justify-between">
          <div className="w-full ">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400] "
              for="fname"
              
            >
              First name
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px]  focus:outline-none "
              type="text"
              id="fname"
              name="first_name" 
              value={formData.first_name || ''} 
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="lname"
            >
              Last name
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="text"
              id="lname"
              name="last_name" 
              value={formData.last_name || ''} 
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="lname"
            >
              Date of Birth
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] px-[10px] focus:outline-none "
              type="text"
              id="dob"
              name="date_of_birth" 
              value={formData.date_of_birth || ''} 
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full pt-[27px]">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="fname"
            >
              Gender
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="text"
              id="gender"
              name="gender"
              value={formData.gender || ''} 
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full pt-[27px]">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="lname"
            >
              Personal Email
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="text"
              id="email"
              name="personal_email"
              value={formData.personal_email || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full pt-[27px]">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="lname"
            >
              Phone Number
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="text"
              id="phonenum"
              name="phone_no"
              value={formData.phone_no || ''} 
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full pt-[27px]">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="fname"
            >
              Address
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="text"
              id="address"
              name="address"
              value={formData.address ||''}
        onChange={handleInputChange}
            />
          </div>
          <div className="w-full pt-[27px]">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="lname"
            >
              State
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="text"
              id="state"
              name="state"
              value={formData.state || ''} 
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full pt-[27px]">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="lname"
            >
              Zip Code
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="text"
              id="code"
              name="zip_code"
              value={formData.zip_code || ''} 
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full pt-[27px]">
          <label
            className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
            for="lname"
          >
            Adhaar Number
          </label>
          <br />
          <input
            className="border border-[#CCD9FA] rounded-[10px] w-[97%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
            type="text"
            id="aadhaar"
            name="aadhar_no"
            value={formData.aadhar_no || ''} 
              onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-row-reverse pr-[30px] pt-[45px] pb-[105px] text-[18px]">
          <button type="button" className="border py-[16px] px-[56px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]"
          onClick={handleSave}>
            Save
            {/* what will this save button do  */}
          </button>
          <button
            onClick={next}
            className="border py-[16px] px-[55px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]"
          >
            Next
          </button>
          <Link to="/view-profileDetail">
            <button className="border border-[#00227A] py-[16px] px-[48px] rounded-[10px] text-[#00227A]">
              Cancel
            </button>
          </Link>
        </div>
      </form>
      <div className="">
        <Status open={status} Field={Field} onClose={() => setStatus(false)} />
      </div>
    </div>
  );
};
export default StudentPersonalDetailsEdit;
