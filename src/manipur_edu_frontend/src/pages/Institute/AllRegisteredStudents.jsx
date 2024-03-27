import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import VerifyEditDeleteDropdown from "./VerifyEditDeleteDropdown";
const AllRegisteredStudents = ({ entries }) => {

  console.log(entries);
  return (
    <div className="w-full self-center">
      <div className="grid grid-cols-[repeat(5,1fr)_3.125rem] py-[0.9375rem] mt-[1.6875rem] rounded-md bg-[#D9EBFF] font-[600] font-[Segoe UI] text-[0.9375rem] text-[#00227A] leading-[1.25rem]">
        <div className="flex justify-center">NAME</div>
        <div className="flex justify-center">STUDENT ID</div>
        <div className="flex justify-center">EMAIL</div>
        <div className="flex justify-center">PHONE NUMBER</div>
        <div className="flex justify-center">ROLL NUMBER</div>
      </div>
      {entries &&
        entries.map(({ studentId, details }, index) => (
          <Card key={index} entry={details} studentPrincipalId={studentId} /> // Directly pass each entry
        ))}
      <div className="flex flex-row-reverse pt-[3.125rem] pb-[6.25rem]">
        <p>Page 1 of 100</p>
      </div>
    </div>
  );
};
export default AllRegisteredStudents;

const Card = ({ studentPrincipalId, entry }) => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const handleButtonClick = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };
  const [toggle, SetDropDown] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        SetDropDown(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [menuRef]);
  const studentName =
    entry?.[0].first_name?.[0] + " " + entry?.[0].last_name?.[0] ?? "N/A";
  const studentId = entry?.[0].student_id?.[0].substr(0, 6) ?? "N/A";
  const rollNo = entry?.[0].roll_no?.[0] ?? "N/A";
  const verificationStatus = entry?.[0].status?.[0] ?? "N/A";
  const email = entry?.[0].personal_email?.[0] ?? "N/A";
  const phoneNo = entry?.[0].phone_no?.[0] ?? "N/A";
  return (
    <div className=" grid grid-cols-[repeat(5,1fr)_50px] mt-4 h-[48px] rounded-[5px]  bg-[#EEF6FF] pt-[7px]">
      <div className="flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] rounded-[0.3125rem]">
        <div className="flex rounded-[0.3125rem]">
          <img
            className="w-[2.0625rem] h-[2.0625rem]"
            src="/student.svg"
            alt=""
          />
          <p className="pt-[0.375rem] pl-[0.8125rem]">{studentName}</p>
        </div>
      </div>
      <p className="flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] pt-[0.375rem]">
        {studentId}
      </p>
      <p className="flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] pt-[0.375rem]">
        {email}
      </p>
      <p className="flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] pt-[0.375rem]">
        {phoneNo}
      </p>
      <p className="flex justify-around pb-[0.375rem] items-center text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem]">
        {rollNo}
      </p>

      <button
        className=" mb-[8px] "
        ref={menuRef}
        onClick={(e) => {
          SetDropDown(!toggle);
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_654_3254)">
            <path
              d="M15 16.4062C15.7767 16.4062 16.4062 15.7767 16.4062 15C16.4062 14.2233 15.7767 13.5938 15 13.5938C14.2233 13.5938 13.5938 14.2233 13.5938 15C13.5938 15.7767 14.2233 16.4062 15 16.4062Z"
              fill="#00227A"
            />
            <path
              d="M22.5 16.4062C23.2767 16.4062 23.9062 15.7767 23.9062 15C23.9062 14.2233 23.2767 13.5938 22.5 13.5938C21.7233 13.5938 21.0938 14.2233 21.0938 15C21.0938 15.7767 21.7233 16.4062 22.5 16.4062Z"
              fill="#00227A"
            />
            <path
              d="M7.5 16.4062C8.27665 16.4062 8.90625 15.7767 8.90625 15C8.90625 14.2233 8.27665 13.5938 7.5 13.5938C6.72335 13.5938 6.09375 14.2233 6.09375 15C6.09375 15.7767 6.72335 16.4062 7.5 16.4062Z"
              fill="#00227A"
            />
          </g>
          <defs>
            <clipPath id="clip0_654_3254">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <VerifyEditDeleteDropdown
        open={toggle}
        onClose={() => SetDropDown(false)}
        entries
      />
    </div>
  );
};
