import React from "react";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import { useSelector } from "react-redux";

const AllRegisteredInstitutes = ({ onView, onEdit, onStudent, SetTab }) => {
  let entries = useSelector((state) => state.allInstitutesReducer);
  return (
    <div>
      <div className="border rounded-[10px] border-[#D9EBFF]">
        <div className="  grid grid-cols-[repeat(4,1fr)_100px] py-[15px]   font-[600]  font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
          <div className="flex justify-center">INSTITUTE NAME</div>
          <div className="flex justify-center">INSTITUTE ID</div>
          <div className="flex justify-center">EMAIL</div>
          <div className="flex justify-center">REGISTERED STUDENTS</div>
        </div>
        {entries?.map((entry, index) => (
          <Card
            SetTab={SetTab}
            key={index}
            entry={entry}
            onView={onView}
            onEdit={onEdit}
            onStudent={onStudent}
          />
        ))}
      </div>
      <div style={{ position: "absolute", bottom: "20px", right: "30px" }}>
        Page 1 of 100
      </div>
    </div>
  );
};
export default AllRegisteredInstitutes;
const Card = ({ entry, onView, onEdit, onStudent, SetTab }) => {
  console.log(entry);
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/register-students-details", { state: { entry } });
    
    // click to view 
    navigate("/institute-details-admin", { state: { entry } });
    SetTab("register-students-details");
  };

  const handleView = () => {
    navigate("/institute-details-admin", { state: { entry } });
  };
  const instituteName = entry?.[1].institute_name?.[0] ?? "N/A";
  const instituteId = entry?.[1].institute_id?.[0].substr(0, 6) ?? "N/A";
  const instituteEmail = entry?.[1].email?.[0] ?? "N/A";
  return (
    <div className="grid grid-cols-[repeat(4,1fr)_100px] py-[15px] border-t border-[#D9EBFF]">
      <div className="flex items-center justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
        <div className="flex items-center rounded-[5px] ml-[25px]">
          {" "}
          <div className="w-[37px] h-[37px] flex-shrink-0">
            {" "}
            <img className="w-full h-full" src="/student.svg" alt="" />{" "}
          </div>
          <div className="w-[150px] flex-shrink-0">
            {" "}
            <p className="pt-[6px] pl-[13px] overflow-hidden">
              {instituteName}
            </p>{" "}
          </div>
        </div>
      </div>
      <p className="flex justify-center items-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {instituteId}
      </p>
      <p className="flex justify-center items-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {instituteEmail}
      </p>
      <button
        onClick={handleClick}
        className="pt-[7px] font-[700] underline flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px]"
      >
        Click to View
      </button>
      <div className="flex gap-[8px]">
        <button onClick={handleView}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99961 14.7992C5.73601 14.7992 3.59961 10.5336 3.59961 9.99922C3.59961 9.46482 5.73601 5.19922 9.99961 5.19922C14.2632 5.19922 16.3996 9.46482 16.3996 9.99922C16.3996 10.5336 14.2632 14.7992 9.99961 14.7992ZM4.40541 9.99922C4.55461 10.4922 6.39921 13.9992 9.99961 13.9992C13.6 13.9992 15.4446 10.4922 15.5938 9.99922C15.4446 9.50622 13.6 5.99922 9.99961 5.99922C6.39921 5.99922 4.55461 9.50622 4.40541 9.99922ZM9.99961 12.7992C8.45581 12.7992 7.19961 11.5432 7.19961 9.99922C7.19961 8.45522 8.45581 7.19922 9.99961 7.19922C11.5434 7.19922 12.7996 8.45522 12.7996 9.99922C12.7996 11.5432 11.5434 12.7992 9.99961 12.7992ZM9.99961 7.99922C8.89681 7.99922 7.99961 8.89642 7.99961 9.99922C7.99961 11.102 8.89681 11.9992 9.99961 11.9992C11.1024 11.9992 11.9996 11.102 11.9996 9.99922C11.9996 8.89642 11.1024 7.99922 9.99961 7.99922Z"
              fill="#00227A"
            />
          </svg>
        </button>
        <button onClick={onEdit}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2768 15.683H3.72232C3.46489 15.683 3.24707 15.9008 3.24707 16.1582C3.24707 16.4156 3.46489 16.6335 3.72232 16.6335H16.2768C16.5342 16.6335 16.752 16.4156 16.752 16.1582C16.752 15.9008 16.5342 15.683 16.2768 15.683ZM3.26687 11.5246L3.24707 13.7622C3.24707 13.881 3.28667 14.0196 3.38568 14.0988C3.48469 14.178 3.60351 14.2374 3.72232 14.2374L5.95994 14.2176C6.07875 14.2176 6.19757 14.1582 6.29658 14.079L13.9797 6.39585C14.158 6.21763 14.158 5.9008 13.9797 5.72258L11.7619 3.50476C11.5837 3.32654 11.2669 3.32654 11.0887 3.50476L9.5441 5.04931L3.40549 11.1879C3.30648 11.2869 3.26687 11.4057 3.26687 11.5246ZM12.9698 6.05921L12.0986 6.9305L10.554 5.38595L11.4253 4.51466L12.9698 6.05921ZM4.21737 11.7226L9.88073 6.05921L11.4253 7.60377L5.76192 13.2671H4.21737V11.7226Z"
              fill="#00227A"
            />
          </svg>
        </button>
        <button>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.66602 5V13.3333C3.66602 13.5985 3.77137 13.8529 3.95891 14.0404C4.14645 14.228 4.4008 14.3333 4.66602 14.3333H11.9993C12.2646 14.3333 12.5189 14.228 12.7065 14.0404C12.894 13.8529 12.9993 13.5985 12.9993 13.3333V5H3.66602Z"
              stroke="#00227A"
            />
            <path
              d="M5.66602 6.94065V12.394M8.33268 6.94065V12.394M10.9993 6.94065V12.394M5.99935 2.88932V2.16332C5.99935 1.70532 6.41735 1.33398 6.93268 1.33398H9.73268C10.248 1.33398 10.666 1.70532 10.666 2.16332V2.88998"
              stroke="#00227A"
              strokeLinecap="round"
            />
            <path
              d="M13.333 3H3.33301C2.78072 3 2.33301 3.44772 2.33301 4C2.33301 4.55228 2.78072 5 3.33301 5H13.333C13.8853 5 14.333 4.55228 14.333 4C14.333 3.44772 13.8853 3 13.333 3Z"
              stroke="#00227A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
