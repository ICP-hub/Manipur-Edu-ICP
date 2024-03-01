import React, { useState } from "react";
import { useAuth } from "../../utils/useAuthClient";
import Background from "../../components/BackgroudPage";
import { Link, useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";


const ViewInstituteDetailsInstitutePage = () => {
  const [data, setData] = useState([]);

  const { actor, authClient,identity,principal } = useAuth();
  console.log("identity", identity);
  console.log("principal", principal);
  React.useEffect(() => {

    const getData = async () => {
      const principal_id = authClient.getIdentity().getPrincipal().toString();

      const result = await actor.get_institute_details([principal_id]);
      console.log("result", result);
      const combinedResult = {
        studentId: principal_id,
        details: result
      };
      console.log(combinedResult);
      setData(combinedResult);

    }

    getData();

  }, [])

  const navigate = useNavigate();

  const handleClick = () => {
    if (data) {
      console.log(data);
      navigate("/institute_detail_edit", { state: { data } });
    }
  };




  return (
    <Background>
      <div className="relative flex justify-center pt-[100px] px-[4%] lg1:px-[5%] ">
        <div className="w-full my-[3.125rem] rounded-[0.625rem] bg-white px-[4.125rem] py-[2.625rem]">
          <div className="flex flex-col ">
            <h1 className="font-[Segoe UI] text-[#00227A] text-[1.5625rem] leading-[2.0625rem] font-[600] pb-[2rem]">
              Institute Profile
            </h1>
            <div className="flex px-[2.875rem] py-[1.8125rem] border border-[#BED0FF] rounded-[1.25rem] mb-[1.6875rem]">
              <img src='/student.svg' alt="" />
              <div className="flex flex-col justify-center pl-[1.8125rem]">
                <p className="font-[Noto Sans] text-[#00227A] text-[1.5625rem] leading-[2.125rem] font-[400] pb-[0.375rem]">
              {data?.details?.[0]?.institute_name?.[0]}
                </p>
                <p className="font-[Noto Sans] text-[#687EB5] text-[0.9375rem] leading-[1.25rem] font-[500]">
                  Institute-id: 1234567
                </p>
              </div>
            </div>

            <div className="flex flex-col border border-[#BED0FF] rounded-[1.25rem] mb-[1.6875rem]">
              <div className="border-b border-[#BED0FF]">
                <div className="flex justify-between px-[2.875rem] py-[1.1875rem]">
                  <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.5rem] font-[500]">
                    Institute Details
                  </p>
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

                  </button>
                </div>
              </div>
              <div className="flex flex-col py-[1.875rem] px-[2.875rem]">
                <div className="flex justify-between">
                  <div className="w-[33.333333333333336%]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Institute Type
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {data?.details?.[0]?.institute_type?.[0]}
                    </p>
                  </div>
                  <div className="w-[33.333333333333336%]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Institute Size
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {data?.details?.[0]?.institute_size?.[0]}
                    </p>
                  </div>
                  <div className="w-[33.333333333333336%]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Email
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {data?.details?.[0]?.email?.[0]}
                    </p>
                  </div>
                  <div className="w-[33.333333333333336%]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                      Phone Number
                    </p>
                    <p className="font-[Noto Sans] text-[#00237a] text-[1.125rem] leading-[1.53125rem] font-[400]">
                      {data?.details?.[0]?.phone_no?.[0]}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pt-[2rem]">
                  <div className="w-[50%]">
                    <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-normal pb-[0.1875rem]">
                      Address
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                     {data?.details?.[0]?.address?.[0]}
                    </p>
                    <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                    {data?.details?.[0]?.state?.[0] + " " + data?.details?.[0]?.zip_code?.[0]}
                    </p>
                  </div>
                  <div className="w-[50%] flex justify-between">
                    <div className="w-[50%]">
                      <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                        State
                      </p>
                      <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                       {data?.details?.[0]?.state?.[0]}
                      </p>
                    </div>
                    <div className="w-[50%]">
                      <p className="font-[Noto Sans] text-[#8CA3C3] text-[1rem] leading-[1.375rem] font-[300] pb-[0.1875rem]">
                        Zip code
                      </p>
                      <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.53125rem] font-[400]">
                       {data?.details?.[0]?.zip_code?.[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse pt-[1.25rem] pb-[1.875rem]">
              <button className="px-[2.75rem] py-[1rem] bg-[#0041E9]   rounded-[0.625rem] text-[white]"
                onClick={handleClick}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};
export default ViewInstituteDetailsInstitutePage;
