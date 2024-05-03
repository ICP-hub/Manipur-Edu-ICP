import React, { useState } from "react";
import {
  Link,
  useLocation,
} from "../../../../../node_modules/react-router-dom/dist/index";
import Background from "../../components/BackgroudPage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ViewProfileDetails = () => {
  const location = useLocation();
  // const entry = location.state.entries;
  let entry = useSelector((state) => state.studentDetailsReducer);
  console.log("entry here", entry);
  const navigate  = useNavigate() ; 

  return (
    <Background>
      <div className="bg-[#E5F1FF] min-h-screen flex justify-center px-[4%] lg1:px-[5%] ">
        <div className="w-full  my-[3.125rem] rounded-[0.625rem] bg-white px-[4.125rem] py-[2.625rem] ">
          <div className="flex flex-col">
            <h1 className="font-[Segoe UI] text-[#00227A] text-[1.5625rem] leading-[2.0625rem] font-[600] pb-[2rem]">
              Student Profile
            </h1>
            <div className="flex px-[2.875rem] py-[1.8125rem] border border-[#BED0FF] rounded-[1.25rem] mb-[1.6875rem]">
              <img src="/student.svg" alt="" />
              <div className="flex flex-col justify-center pl-[1.8125rem]">
                <p className="font-[Noto Sans] text-[#00227A] text-[1.5625rem] leading-[2.125rem] font-[400] pb-[0.375rem]">
                  {entry?.[0].first_name?.[0] +
                    " " +
                    entry?.[0].last_name?.[0] ?? "N/A"}
                </p>
                <p className="font-[Noto Sans] text-[#687EB5] text-[0.9375rem] leading-[1.25rem] font-[500]">
                  Student #: 1234567
                </p>
              </div>
            </div>
            <div className="flex flex-col border border-[#BED0FF] rounded-[1.25rem] mb-[1.6875rem]">
              <div className="border-b border-[#BED0FF]">
                <div className="flex justify-between px-[2.875rem] py-[1.1875rem]">
                  <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.5rem] font-[500]">
                    Personal Details
                  </p>
                </div>
              </div>
              <div className="flex flex-col py-[30px] px-[46px] ">
                <div className="flex justify-between">
                  <div className="w-[calc(100%/3)]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Date of Birth
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].date_of_birth?.[0] ?? "N/A"}
                    </p>
                  </div>
                  <div className="w-[calc(100%/3)]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Gender
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].gender?.[0] ?? "N/A"}
                    </p>
                  </div>
                  <div className="w-[calc(100%/3)]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Personal Email
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].personal_email?.[0] ?? "N/A"}
                    </p>
                  </div>
                  <div className="w-[calc(100%/3)]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Phone Number
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].phone_no?.[0] ?? "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between pt-[2rem]">
                  <div className="w-1/2">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text- leading-[1.375rem] font-normal pb-[0.1875rem]">
                      Address
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].address?.[0] ?? "N/A"}
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].state?.[0] + "" + entry?.[0].zip_code?.[0] ??
                        "N/A"}
                    </p>
                  </div>
                  <div className=" w-1/2 flex justify-between ">
                    <div className="w-1/2">
                      <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                        State
                      </p>
                      <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                        {entry?.[0].state?.[0] ?? "N/A"}
                      </p>
                    </div>
                    <div className="w-1/2">
                      <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                        Zip code
                      </p>
                      <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                        {entry?.[0].zip_code?.[0] ?? "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  border border-[#BED0FF] rounded-[20px] mb-[27px]">
              <div className="border-b border-[#BED0FF]">
                <div className="flex justify-between px-[2.875rem] py-[1.1875rem]">
                  <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.5rem] font-[500]">
                    Parent Details
                  </p>
                </div>
              </div>

              <div className="flex flex-col py-[1.875rem] px-[2.875rem] ">
                <div className="flex justify-between ">
                  <div className="w-1/3">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem] ">
                      Mother's Name
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].mother_name?.[0] ?? "N/A"}
                    </p>
                  </div>
                  <div className="w-1/3">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Father's Name
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].father_name?.[0] ?? "N/A"}
                    </p>
                  </div>
                  <div className="w-1/3"></div>
                  <div className="w-1/3"></div>
                </div>
                <div className="flex justify-between pt-[2rem] ">
                  <div className="w-1/2">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text- leading-[1.375rem] font-normal pb-[0.1875rem]">
                      Address
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].address?.[0] ?? "N/A"}
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].state?.[0] + "" + entry?.[0].zip_code?.[0] ??
                        "N/A"}
                    </p>
                  </div>
                  <div className=" w-1/2 flex justify-between ">
                    <div className="w-1/2">
                      <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                        State
                      </p>
                      <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                        {entry?.[0].state?.[0] ?? "N/A"}
                      </p>
                    </div>
                    <div className="w-1/2">
                      <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                        Zip code
                      </p>
                      <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                        {entry?.[0].zip_code?.[0] ?? "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-[#BED0FF] rounded-[1.25rem] mb-[2.9375rem]">
              <div className="border-b border-[#BED0FF]">
                <div className="flex justify-between px-[2.875rem] py-[1.1875rem]">
                  <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.5rem] font-[500]">
                    Institute Details
                  </p>
                </div>
              </div>
              <div className="flex flex-col py-[1.875rem] px-[2.875rem]">
                <div className="flex justify-between pr-[6.25rem]">
                  <div>
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Roll Number
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].roll_no?.[0] ?? "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Institute Name
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].institute_name?.[0] ?? "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Student's Institute Email
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].institute_email?.[0] ?? "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pt-[2rem] pr-[2.6875rem]">
                  <div>
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      CGPA
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].cgpa?.[0] ?? "N/A"}
                    </p>
                  </div>
                  <div className="pr-[6.25rem]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Graduation Year
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].graduation_year?.[0] ?? "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Program
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].program_enrolled?.[0] ?? "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex flex-col rounded-[20px] border border-[#D8E1F8]">
              <div className="flex justify-between border-b border-[#D8E1F8]">
                <p className="px-[46px] py-[19px] text-[#00227A] text-[18px] font-[Noto Sans] font-[500]">
                  KYC Documents
                </p>
                <div className="mr-[39px] py-[19px]">
                  <button className="flex">
                    <svg
                      width="1.25rem"
                      height="1.25rem"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.2768 15.683H3.72232C3.46489 15.683 3.24707 15.9008 3.24707 16.1582C3.24707 16.4156 3.46489 16.6335 3.72232 16.6335H16.2768C16.5342 16.6335 16.752 16.4156 16.752 16.1582C16.752 15.9008 16.5342 15.683 16.2768 15.683ZM3.26687 11.5246L3.24707 13.7622C3.24707 13.881 3.28667 14.0196 3.38568 14.0988C3.48469 14.178 3.60351 14.2374 3.72232 14.2374L5.95994 14.2176C6.07875 14.2176 6.19757 14.1582 6.29658 14.079L13.9797 6.39585C14.158 6.21763 14.158 5.9008 13.9797 5.72258L11.7619 3.50476C11.5837 3.32654 11.2669 3.32654 11.0887 3.50476L9.5441 5.04931L3.40549 11.1879C3.30648 11.2869 3.26687 11.4057 3.26687 11.5246ZM12.9698 6.05921L12.0986 6.9305L10.554 5.38595L11.4253 4.51466L12.9698 6.05921ZM4.21737 11.7226L9.88073 6.05921L11.4253 7.60377L5.76192 13.2671H4.21737V11.7226Z"
                        fill="#00227A"
                      />
                    </svg>

                    <p className="font-[Noto Sans] text-[#00227A] text-[0.9375rem] leading-[1.3125rem] font-[400]">
                      Edit
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex py-[30px] px-[46px] gap-[76px]">
                <div>
                  <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300] pb-[20px]">
                    Aadhaar Card
                  </p>
                  <button className="rounded-[5px] py-[14px] px-[36px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
                    Aadhaar Card
                  </button>
                </div>
                <div>
                  <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300] pb-[20px]">
                    PAN Card
                  </p>
                  <button className="rounded-[5px] py-[14px] px-[50px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
                    PAN Card
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse mt-[27px]">
              <Link to="/personal-detail-edit">
                <button className="px-[2.5rem] py-[1rem] rounded-[0.625rem] text-[white] bg-[#0041E9] ml-[1.5rem]">
                  Edit
                </button>
              </Link>
              {/* <Link to="/profile-result">
                <button className="px-[2.25rem] py-[1rem] border border-[#00227A] text-[#00227A] rounded-[0.625rem]">
                  Back
                </button>
              </Link> */}
              {/* My Changes Want this Back to go back to all regisered students */}
              <Link to="/institute-student">
                <button className="px-[2.25rem] py-[1rem] border border-[#00227A] text-[#00227A] rounded-[0.625rem]" onClick={navigate("/")}>
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default ViewProfileDetails;
