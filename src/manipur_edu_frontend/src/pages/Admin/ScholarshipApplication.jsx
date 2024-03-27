import React from "react";

const ScholarshipApplication = ({ onBack }) => {
  return (
    <div className="px-[63px] py-[25px] flex flex-col gap-[25px]">
      <div className="flex justify-between ">
        <div className="font-[600] font-[Segoe UI] text-4xl text-[#2D6BE4]">
          Scholarship Application
        </div>
        <div className="flex gap-[44px]">
          <div className="flex gap-[23px]">
            <button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2379 23.3503C18.8229 23.3503 23.3505 18.8227 23.3505 13.2376C23.3505 7.65258 18.8229 3.125 13.2379 3.125C7.65282 3.125 3.12524 7.65258 3.12524 13.2376C3.12524 18.8227 7.65282 23.3503 13.2379 23.3503Z"
                  stroke="#00227A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.2703 20.7949L24.2348 24.7493"
                  stroke="#00227A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.25 9C20.25 7.20979 19.5388 5.4929 18.273 4.22703C17.0071 2.96116 15.2902 2.25 13.5 2.25C11.7098 2.25 9.9929 2.96116 8.72703 4.22703C7.46116 5.4929 6.75 7.20979 6.75 9C6.75 16.875 3.375 19.125 3.375 19.125H23.625C23.625 19.125 20.25 16.875 20.25 9Z"
                  stroke="#00227A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.4462 23.625C15.2484 23.966 14.9645 24.249 14.623 24.4457C14.2814 24.6425 13.8941 24.746 13.5 24.746C13.1058 24.746 12.7185 24.6425 12.377 24.4457C12.0354 24.249 11.7515 23.966 11.5537 23.625"
                  stroke="#00227A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center">
            <div className="pr-[12px]">
              <p className="font-[600] font-[Segoe UI] text-[18px] text-[#00227A] leading-[27px] flex flex-row-reverse">
                Name
              </p>
              <p className="font-[400] font-[Segoe UI] text-[18px] text-[#8CA3C3] leading-[27px]">
                123456789
              </p>
            </div>
            <img className="w-[67px] h-[55px] pl-[12px]" src='/student.svg' alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[50px]">
        <div className="flex px-[2.875rem] py-[1.8125rem] border border-[#BED0FF] rounded-[1.25rem] mb-[1.6875rem]">
          <img className="w-[100px] h-[100px]" src='/student.svg' alt="" />
          <div className="flex flex-col justify-center pl-[1.8125rem]">
            <p className="font-[Noto Sans] text-[#00227A] text-[1.5625rem] leading-[2.125rem] font-[400] pb-[0.375rem]">
              Name
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
                  11-11-2000
                </p>
              </div>
              <div className="w-[calc(100%/3)]">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Gender
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  Female
                </p>
              </div>
              <div className="w-[calc(100%/3)]">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Personal Email
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  email@email.com
                </p>
              </div>
              <div className="w-[calc(100%/3)]">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Phone Number
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  1234567890
                </p>
              </div>
            </div>

            <div className="flex justify-between pt-[2rem]">
              <div className="w-1/2">
                <p className="font-[Noto Sans] text-[#8CA3C3] text- leading-[1.375rem] font-normal pb-[0.1875rem]">
                  Address
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  QW3G+VJM, Naoriya Pakhanglakpa, Imphal,
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  Manipur 795003
                </p>
              </div>
              <div className=" w-1/2 flex justify-between ">
                <div className="w-1/2">
                  <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                    State
                  </p>
                  <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                    Manipur
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                    Zip code
                  </p>
                  <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                    123456
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
                  Mother's Name
                </p>
              </div>
              <div className="w-1/3">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Father's Name
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  Father's Name
                </p>
              </div>
              <div className="w-1/3">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Personal Email
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  email@email.com
                </p>
              </div>
              <div className="w-1/3">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Phone Number
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  1234567890
                </p>
              </div>
            </div>
            <div className="flex justify-between pt-[2rem] ">
              <div className="w-1/2">
                <p className="font-[Noto Sans] text-[#8CA3C3] text- leading-[1.375rem] font-normal pb-[0.1875rem]">
                  Address
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  QW3G+VJM, Naoriya Pakhanglakpa, Imphal,
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  Manipur 795003
                </p>
              </div>
              <div className=" w-1/2 flex justify-between ">
                <div className="w-1/2">
                  <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                    State
                  </p>
                  <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                    Manipur
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                    Zip code
                  </p>
                  <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                    123456
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#BED0FF] rounded-[1.25rem] mb-[27px]">
          <div className="border-b border-[#BED0FF]">
            <div className="flex justify-between px-[2.875rem] py-[1.1875rem]">
              <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.5rem] font-[500]">
                Institute Details
              </p>
            </div>
          </div>
          <div className="flex flex-col py-[1.875rem] px-[2.875rem] ">
            <div className="flex justify-between pr-[6.25rem]">
              <div>
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Roll Number
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  RN-123
                </p>
              </div>
              <div>
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Institute Name
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  Manipur Institute of Technology
                </p>
              </div>
              <div>
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Student's Institute Email
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  email@email.com
                </p>
              </div>
            </div>
            <div className="flex justify-between pt-[2rem] pr-[2.6875rem]">
              <div>
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  CGPA
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  8.4
                </p>
              </div>
              <div className="pr-[6.25rem]">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Graduation Year
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  2024
                </p>
              </div>
              <div>
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Program
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  Btech in Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
         <div className="  flex flex-col rounded-[1.25rem] border border-[#BED0FF] mb-[27px]">
                <div className="flex justify-between border-b border-[#D8E1F8]">
                  <p className="px-[46px] py-[19px] text-[#00227A] text-[18px] font-[Noto Sans] font-[500]">
                    KYC Documents
                </p>
                <div className="mr-[39px]">
                <button className="flex mt-[10px]">
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
                <div className="py-[30px] px-[46px] flex gap-[76px]">
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
        <div className="flex flex-col border border-[#BED0FF] rounded-[1.25rem] mb-[27px]">
          <div className="border-b border-[#BED0FF]">
            <div className="flex justify-between px-[2.875rem] py-[1.1875rem]">
              <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.5rem] font-[500]">
                Scholarship Details
              </p>
            </div>
          </div>
          <div className="flex flex-col py-[1.875rem] px-[2.875rem]">
            <div className="flex justify-between pr-[6.25rem]">
              <div>
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Scholarship Name
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  Manipur Edu Scholarship
                </p>
              </div>
              <div>
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Offered By
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  Manipur Edu
                </p>
              </div>
              <div>
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Scholarship Worth
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  ₹ 50,000
                </p>
              </div>
            </div>
            <div className="flex pt-[2rem] pr-[2.6875rem]">
              <div className="w-[45.5%]">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Deadline
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  Jan 31, 2024
                </p>
              </div>
              <div className="pr-[6.25rem]">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Eligibility
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  College and Undergraduate Students
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#BED0FF] rounded-[1.25rem] mb-[2.9375rem]">
          <div className="border-b border-[#BED0FF]">
            <div className="flex justify-between px-[2.875rem] py-[1.1875rem]">
              <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.5rem] font-[500]">
                Why student is interested in the Scholarship?
              </p>
            </div>
          </div>
          <div className="flex flex-col py-[1.875rem] px-[2.875rem] ">
            <textarea
              className="focus:outline-none"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-[16px] mb-[50px]">
          <button
            onClick={onBack}
            className="px-[2.5rem] py-[1rem] bg-[#0041E9]  text-[white] rounded-[0.625rem]"
          >
            Approve Scholarship
          </button>
          <button
            onClick={onBack}
            className="px-[2.5rem] py-[1rem] bg-[#DF0C0C] text-[white] rounded-[0.625rem]"
          >
            Reject Scholarship
          </button>
          <button
            onClick={onBack}
            className="px-[2.5rem] py-[1rem] border border-[#00227A] text-[#00227A] rounded-[0.625rem]"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipApplication;
