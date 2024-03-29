import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import {useSelector} from "react-redux";
const ViewProfileDetails = () => {

  let entry = useSelector(
    (state) => state.studentDetailsReducer
  );
  console.log("entry here", entry);

  return (
    <>
      <div className="bg-[#E5F1FF] min-h-screen flex justify-center px-[4%] lg1:px-[5%] ">
        <div className="w-full  my-[3.125rem] rounded-[0.625rem] bg-white px-[4.125rem] py-[2.625rem] ">
          <div className="flex flex-col">
            <h1 className="font-[Segoe UI] text-[#00227A] text-[1.5625rem] leading-[2.0625rem] font-[600] pb-[2rem]">
              Student Profile
            </h1>
            <div className="flex px-[2.875rem] py-[1.8125rem] border border-[#BED0FF] rounded-[1.25rem] mb-[1.6875rem]">
              <img src='/student.svg' alt="" />
              <div className="flex flex-col justify-center pl-[1.8125rem]">
                <p className="font-[Noto Sans] text-[#00227A] text-[1.5625rem] leading-[2.125rem] font-[400] pb-[0.375rem]">
                  {entry?.[0].first_name?.[0] + " " + entry?.[0].last_name?.[0] ?? 'N/A'}
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
                      {entry?.[0].date_of_birth?.[0] ?? 'N/A'}
                    </p>
                  </div>
                  <div className="w-[calc(100%/3)]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Gender
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].gender?.[0] ?? 'N/A'}
                    </p>
                  </div>
                  <div className="w-[calc(100%/3)]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Personal Email
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].personal_email?.[0] ?? 'N/A'}
                    </p>
                  </div>
                  <div className="w-[calc(100%/3)]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Phone Number
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].phone_no?.[0] ?? 'N/A'}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between pt-[2rem]">
                  <div className="w-1/2">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text- leading-[1.375rem] font-normal pb-[0.1875rem]">
                      Address
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].address?.[0] ?? 'N/A'}
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].state?.[0] + "" + entry?.[0].zip_code?.[0] ?? 'N/A'}
                    </p>
                  </div>
                  <div className=" w-1/2 flex justify-between ">
                    <div className="w-1/2">
                      <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                        State
                      </p>
                      <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                        {entry?.[0].state?.[0] ?? 'N/A'}
                      </p>
                    </div>
                    <div className="w-1/2">
                      <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                        Zip code
                      </p>
                      <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                        {entry?.[0].zip_code?.[0] ?? 'N/A'}
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
                      {entry?.[0].mother_name?.[0] ?? 'N/A'}
                    </p>
                  </div>
                  <div className="w-1/3">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Father's Name
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].father_name?.[0] ?? 'N/A'}
                    </p>
                  </div>
                  <div className="w-1/3">
                  </div>
                  <div className="w-1/3">
                  </div>
                </div>
                <div className="flex justify-between pt-[2rem] ">
                  <div className="w-1/2">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text- leading-[1.375rem] font-normal pb-[0.1875rem]">
                      Address
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].address?.[0] ?? 'N/A'}
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].state?.[0] + "" + entry?.[0].zip_code?.[0] ?? 'N/A'}
                    </p>
                  </div>
                  <div className=" w-1/2 flex justify-between ">
                    <div className="w-1/2">
                      <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                        State
                      </p>
                      <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                        {entry?.[0].state?.[0] ?? 'N/A'}
                      </p>
                    </div>
                    <div className="w-1/2">
                      <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                        Zip code
                      </p>
                      <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                        {entry?.[0].zip_code?.[0] ?? 'N/A'}
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
                      {entry?.[0].roll_no?.[0] ?? 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Institute Name
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].institute_name?.[0] ?? 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Student's Institute Email
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].institute_email?.[0] ?? 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pt-[2rem] pr-[2.6875rem]">
                  <div>
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      CGPA
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].cgpa?.[0] ?? 'N/A'}
                    </p>
                  </div>
                  <div className="pr-[6.25rem]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Graduation Year
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].graduation_year?.[0] ?? 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Program
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {entry?.[0].program_enrolled?.[0] ?? 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse">
              <Link to="/personal-detail-edit">
                <button className="px-[2.5rem] py-[1rem] rounded-[0.625rem] text-[white] bg-[#0041E9] ml-[1.5rem]">
                  Edit
                </button>
              </Link>
              <Link to="/profile-result">
                <button className="px-[2.25rem] py-[1rem] border border-[#00227A] text-[#00227A] rounded-[0.625rem]">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}




export default ViewProfileDetails;
