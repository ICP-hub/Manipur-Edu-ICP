import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../utils/useAuthClient";
import { useQuery } from "react-query";
import Loader from "../../loader/Loader";
import ApproveProfileModal from "../../components/ApproveProfileModel";
const InstituteEditRequestRejectApprove = ({ onBack }) => {
  const { actor, authClient } = useAuth();
  const [update, setUpdate] = useState([]);
  const [openModalApprove, setOpenModalApprove] = useState(false);
  const entry = useSelector((state) => state.instituteDetailsReducer);
  console.log("previous entries", entry);
  const institute_principal = entry[0];
  const getUpdates = async () => {
    try {
      console.log("gv");
      const instituteUpdates = await actor.get_institute_profile_updated(
        institute_principal
      );
      console.log("instituteUpdates", instituteUpdates);
      setUpdate(instituteUpdates);
      console.log("update", update);
    } catch (error) {
      console.error("Error fetching updates:", error);
    }
  };

  const {
    data: result,
    isLoading: isLoadingEntries,
    error: errorEntries,
  } = useQuery("dataEntries", getUpdates);
  console.log("result", result);
  console.log("update", update);
  const instituteName1 = update[0]?.institute_name;
  console.log("city", instituteName1);
  const instituteName = update.institute_name;
  console.log("institute name", instituteName);
  useEffect(() => {
    console.log("update", update);
    console.log("update[0]", update[0]);
  }, [update]);
  const handleApprove = async () => {
    const result = await actor.approve_institute_profile_update(
      institute_principal
    );
    setOpenModalApprove(false);
    console.log(result);
    onBack();
  };
  return (
    <div className="px-[63px] py-[25px] flex flex-col gap-[25px]">
      <div className="flex justify-between ">
        <div className="font-[600] font-[Segoe UI] text-4xl text-[#2D6BE4]">
          Institute Edit Request
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.2703 20.7949L24.2348 24.7493"
                  stroke="#00227A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.4462 23.625C15.2484 23.966 14.9645 24.249 14.623 24.4457C14.2814 24.6425 13.8941 24.746 13.5 24.746C13.1058 24.746 12.7185 24.6425 12.377 24.4457C12.0354 24.249 11.7515 23.966 11.5537 23.625"
                  stroke="#00227A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
            {/* <img className="w-[67px] h-[55px] pl-[12px]" src={img} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="w-full flex gap-[48px]">
        <div className="w-[50%] flex flex-col gap-[27px]">
          <div className="text-[#8CA3C3] text-[20px] font-[400] text-[Segoe UI]">
            Previous
          </div>
          <div className="px-[46px] py-[28px] flex items-center gap-[29px] rounded-[20px] border border-[#D8E1F8]">
            {/* <img className="w-[100px] h-[100px]" src={img} alt="" /> */}
            <div className="gap-[6px]">
              <p className="text-[#00227A] text-[25px] font-[Noto Sans] font-[400]">
                {entry?.[1].institute_name ?? "N/A"}
              </p>
              <p className="text-[#687EB5] text-[15px] font-[Noto Sans] font-[500]">
                Institute #: 1234567
              </p>
            </div>
          </div>
          <div className="  flex flex-col rounded-[20px] border border-[#D8E1F8]">
            <div className="border-b border-[#D8E1F8]">
              <p className="px-[46px] py-[19px] text-[#00227A] text-[18px] font-[Noto Sans] font-[500]">
                Institute Details
              </p>
            </div>
            <div className="py-[30px] px-[46px] flex flex-col gap-[17px]">
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Institute Name
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {entry?.[1].institute_name ?? "N/A"}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Institute-id
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {entry?.[1].institute_id?.[0].substr(0, 6) ?? "N/A"}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Institute Type
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {entry?.[1].institute_type?.[0] || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Institute Size
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {entry?.[1].institute_size?.[0] || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Email
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {entry?.[1].email?.[0] || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Phone Number
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {entry?.[1].phone_no?.[0] || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Address
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {entry?.[1].address?.[0] || "N/A"} <br />{" "}
                  {entry?.[1].state?.[0]} <br /> {entry?.[1].zip_code?.[0]}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  State
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {entry?.[1].state?.[0] || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Pin Code
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {entry?.[1].zip_code?.[0] || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-[27px]">
          <div className="text-[#8CA3C3] text-[20px] font-[400] text-[Segoe UI]">
            Edited by Institute
          </div>
          <div className="px-[46px] py-[28px] flex items-center gap-[29px] rounded-[20px] border border-[#D8E1F8]">
            {/* <img className="w-[100px] h-[100px]" src={img} alt="" /> */}
            <div className="gap-[6px]">
              <p className="text-[#00227A] text-[25px] font-[Noto Sans] font-[400]">
                {update[0]?.institute_name}
              </p>
              <p className="text-[#687EB5] text-[15px] font-[Noto Sans] font-[500]">
                Institute #: 1234567
              </p>
            </div>
          </div>
          <div className="  flex flex-col rounded-[20px] border border-[#D8E1F8]">
            <div className="border-b border-[#D8E1F8]">
              <p className="px-[46px] py-[19px] text-[#00227A] text-[18px] font-[Noto Sans] font-[500]">
                Institute Details
              </p>
            </div>
            <div className="py-[30px] px-[46px] flex flex-col gap-[17px]">
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Institute Name
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {update[0]?.institute_name}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Institute-id
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {entry?.[1].institute_id?.[0].substr(0, 6) ?? "N/A"}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Institute Type
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {update[0]?.institute_type}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Institute Size
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {update[0]?.institute_size}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Email
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {update[0]?.email}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Phone Number
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {update[0]?.phone_no}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Address
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {update[0]?.address} <br /> {update[0]?.state} <br />{" "}
                  {update[0]?.zip_code}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  State
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {update[0]?.state}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Pin Code
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {update[0]?.zip_code}
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <ApproveProfileModal
              open={openModalApprove}
              // ref={verifyinstitute}
              onClose={() => setOpenModalApprove(false)}
              handleClick={handleApprove}
            />
            {/* <RejectModal
            open={openModalReject}
            onClose={() => setOpenModalReject(false)}
            handleClick={rejectInstitute}
          /> */}
          </div>
          <div className="flex flex-row-reverse gap-[16px] mb-[50px]">
            <div>
              <button
                className="bg-[#0041E9] text-[white] py-[13px] px-[34px] rounded-[10px] text-[18px] font-[400]"
                onClick={() => setOpenModalApprove(true)}
              >
                Approve
              </button>
            </div>
            <div>
              <button className="bg-[#DF0C0C] text-[white] py-[13px] px-[45px] rounded-[10px] text-[18px] font-[400]">
                Reject
              </button>
            </div>
            <div>
              <button
                onClick={onBack}
                className="border border-[#00227A] text-[#00227A] py-[13px] px-[50px] rounded-[10px] text-[18px] font-[400]"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteEditRequestRejectApprove;
