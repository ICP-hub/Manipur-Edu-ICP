import React from "react";
import { useSelector } from 'react-redux';

import { Link, useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";

const ParentDetailsEdit = ({ next, prev  , formData, updateFormData }) => {
const navigate = useNavigate();

let entry = useSelector(
  (state) => state.studentDetailsReducer
);

console.log(entry) ; 
  return (
    <div className="border-l border-[#D8E1F8] ml-[55px] flex flex-col justify-between pl-[47px] w-full pt-[45px] pr-[45px] ">
      <div className="pb-[45px]">
        <p className="text-[Segoe UI] text-[#00227A] text-[24px] leading-[32px] font-[400]">
          Parents Details
          {/* {entry?.[0]?.first_name?.[0] + " " + entry?.[0]?.last_name?.[0] ?? "N/A"} */}

        </p>
      </div>
      <form action="">
        <div className="flex justify-between">
          <div className="w-full ">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400] "
              for="fname"
            >
              Mother's name
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="text"
              id="mname"
              name="mname"
              value={formData.mother_name || ''} 
            />
          </div>
          <div className="w-full">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="lname"
            >
              Father's name
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="text"
              id="fname"
              name="fname"
              value={formData.father_name || ''} 
            />
          </div>
          <div className="w-full">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="lname"
            >
{/*  phone_no*/}
              Phone Number
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="tel"
              id="pnum"
              name="pnum"
              value={formData.phone_no || ''} 
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full pt-[27px]">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="fname"
            >
              Email
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="text"
              id="email"
              name="email"
              value={formData.personal_email || ''} 
            />
          </div>
          <div className="w-full pt-[27px]">
            <label
              className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
              for="lname"
            >
              Address
            </label>
            <br />
            <input
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
              type="text"
              id="address"
              name="address"
              value={formData.address || ''} 
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
            />
          </div>
        </div>

        <div className="flex flex-row-reverse pr-[30px] pt-[45px] pb-[105px] text-[18px]">
          <button onClick={()=> {navigate('/profile-result')}} className="border  py-[16px] px-[56px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]">
            Save
          </button>
          <button
            onClick={next}
            className="border  py-[16px] px-[55px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]"
          >
            Next
          </button>
          <button
            onClick={prev}
            className="border  py-[16px] px-[41px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]"
          >
            Previous
          </button>
          <Link to="/view-profileDetail">
          <button className="border border-[#00227A] py-[16px] px-[48px] rounded-[10px] text-[#00227A]">
            Cancel
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ParentDetailsEdit;
