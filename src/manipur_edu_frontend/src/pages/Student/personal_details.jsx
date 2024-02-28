import React, { useState } from "react";
import { Link } from "../../../../../node_modules/react-router-dom/dist/index";

const StudentPersonalDetailsEdit = ({ next }) => {
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
              name="fname"
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
              name="lname"
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
              type="date"
              id="dob"
              name="dob"
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
              name="email"
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
              name="phonenum"
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
              name="code"
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
            name="aadhaar"
          />
        </div>
        <div className="flex flex-row-reverse pr-[30px] pt-[45px] pb-[105px] text-[18px]">
          <button className="border py-[16px] px-[56px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]">
            Save
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
    </div>
  );
};
export default StudentPersonalDetailsEdit;
