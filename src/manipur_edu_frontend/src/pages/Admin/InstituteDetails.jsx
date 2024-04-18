import React, { useState } from "react";
import VerifyModal from "../../components/VerifyModal";
import RejectModal from "../../components/RejectModal";
import { useAuth } from "../../utils/useAuthClient";
import { useSelector } from "react-redux";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";

const InstituteDetails = ({ onBack }) => {
  const [openModalReject, setOpenModalReject] = useState(false);
  const [openModalVerify, setOpenModalVerify] = useState(false);
  const { actor } = useAuth();
  console.log(actor);
  const navigate = useNavigate();
  // let entry = useSelector((state) => state.allInstitutesReducer);
  let entries = useSelector((state) => state.allInstitutesReducer);
  let entry = entries[0];
  console.log("institute details page ", entry);
  console.log(entry[0]);
  const verifyInstitute = async () => {
    const result = await actor.verify_institute(entry[0]);
    setOpenModalVerify(false);
    console.log(result);
    navigate("/dsa");
  };
  const handleclickBack = () => {
    navigate("/dsa");
  };
  const rejectInstitute = async () => {
    const rejected = await actor.reject_institute(entry[0]);
    setOpenModalReject(false);
    console.log(rejected);
    navigate("/dsa");
  };

  return (
    <div className="py-[25px] px-[63px]">
      <div className="flex flex-col ">
        <div className="flex justify-between ">
          <div className="font-[600] font-[Segoe UI] text-4xl text-[#2D6BE4]">
            Institute Details
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
              <img
                className="w-[67px] h-[55px] pl-[12px]"
                src="/student.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex px-[2.875rem] py-[0.5rem] border border-[#BED0FF] rounded-[1.25rem] mb-[1.6875rem] mt-[50px]">
          <img className="w-[100px] h-[100px]" src="/student.svg" alt="" />
          <div className="flex flex-col justify-center pl-[1.8125rem]">
            <p className="font-[Noto Sans] text-[#00227A] text-[1.5625rem] leading-[2.125rem] font-[400] pb-[0.375rem]">
              {/* {entry?.[1].institute_name?.[0] || "N/A"} */}
              {entry?.[1].institute_name || "N/A"}
            </p>
            <p className="font-[Noto Sans] text-[#687EB5] text-[0.9375rem] leading-[1.25rem] font-[500]">
              Institute-id: 1234567
            </p>
          </div>
        </div>

        <div className="flex flex-col border border-[#BED0FF] rounded-[1.25rem] mb-[1.6875rem] ">
          <div className="border-b border-[#BED0FF]">
            <div className="flex justify-between px-[2.875rem] py-[1rem]">
              <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.5rem] font-[500]">
                Institute Details
              </p>
            </div>
          </div>
          <div className="flex flex-col py-[1rem] px-[2.875rem]">
            <div className="flex justify-between">
              <div className="w-[33.333333333333336%]">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Institute Type
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  {entry?.[1].institute_type?.[0] || "N/A"}
                </p>
              </div>
              <div className="w-[33.333333333333336%]">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Institute Size
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  {entry?.[1].institute_size?.[0] || "N/A"}
                </p>
              </div>
              <div className="w-[33.333333333333336%]">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Email
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  {entry?.[1].email?.[0] || "N/A"}
                </p>
              </div>
              <div className="w-[33.333333333333336%]">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                  Phone Number
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  {entry?.[1].phone_no?.[0] || "N/A"}
                </p>
              </div>
            </div>
            <div className="flex justify-between pt-[2rem]">
              <div className="w-[50%]">
                <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-normal pb-[0.1875rem]">
                  Address
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  {entry?.[1].address?.[0] || "N/A"}
                </p>
                <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                  {entry?.[1].state?.[0] + " " + entry?.[1].zip_code?.[0] ||
                    "N/A"}
                </p>
              </div>
              <div className="w-[50%] flex justify-between">
                <div className="w-[50%]">
                  <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                    State
                  </p>
                  <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                    {entry?.[1].state?.[0] || "N/A"}
                  </p>
                </div>
                <div className="w-[50%]">
                  <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                    Zip code
                  </p>
                  <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                    {entry?.[1].zip_code?.[0] || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <VerifyModal
            open={openModalVerify}
            // ref={verifyinstitute}
            onClose={() => setOpenModalVerify(false)}
            handleClick={verifyInstitute}
          />
          <RejectModal
            open={openModalReject}
            onClose={() => setOpenModalReject(false)}
            handleClick={rejectInstitute}
          />
        </div>
        <div className="flex flex-row-reverse pt-[0.5rem] pb-[1.875rem] gap-[18px]">
          {entry?.[1].status?.[0] === "pending" && (
            <>
              <button
                onClick={() => setOpenModalVerify(true)}
                className="px-[2.75rem] py-[1rem]  text-[white] rounded-[0.625rem] bg-[#0041E9]"
              >
                Verify Institute
              </button>
              <button
                onClick={() => setOpenModalReject(true)}
                className="px-[2.75rem] py-[1rem]  text-[white] rounded-[0.625rem] bg-[#DF0C0C]"
              >
                Reject
              </button>
            </>
          )}
          <button
            onClick={onBack}
            className="px-[2.75rem] py-[1rem] border border-[#00227A] text-[#00227A] rounded-[0.625rem]"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default InstituteDetails;
