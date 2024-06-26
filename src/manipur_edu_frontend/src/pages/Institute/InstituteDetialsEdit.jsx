import React, { useState } from "react";
import { useLocation } from "../../../../../node_modules/react-router-dom/dist/index";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAuth } from "../../utils/useAuthClient";
import Status from "../../components/student/status";
const InstituteDetailsEditInstitutePage = () => {
  const { actor, authClient } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [modelStatus, setModelStatus] = React.useState(false);
  const [Field, setField] = React.useState("");
  let data = useSelector((state) => state.instituteDetailsReducer);
  console.log(data);
  console.log(data.studentId);
  console.log(data.details);
  console.log(data.details[0]);
  console.log(data.details[0].status[0]);

  const onSubmit = async (entry) => {
    console.log(entry);

    const newentry = {
      institute_id: [data.details[0].institute_id[0]],
      public_key: [data.details[0].public_key[0]],
      zip_code: [Number(entry.zip_code)],
      city: [entry.city],
      email: [entry.email ? entry.email : data.details[0].email[0]],
      state: [entry.state ? entry.state : data.details[0].state[0]],
      institute_name: [
        entry.institute_name
          ? entry.institute_name
          : data.details[0].institute_name[0],
      ],
      address: [entry.address ? entry.address : data.details[0].address[0]],
      phone_no: [entry.phone_no ? entry.phone_no : data.details[0].phone_no[0]],
      website: [entry.website ? entry.website : data.details[0].website[0]],
      coed_status: [
        entry.coed_status ? entry.coed_status : data.details[0].coed_status[0],
      ],
      approval_authority: [
        entry.approvalAuthority
          ? entry.approvalAuthority
          : data.details[0].approval_authority[0],
      ],
      institute_size: [
        entry.instituteSize
          ? entry.institute_size
          : data.details[0].institute_size[0],
      ],
      institute_type: [
        entry.institute_type
          ? entry.institute_type
          : data.details[0].institute_type[0],
      ],
      status: [entry.status ? entry.status : data.details[0].status[0]],
    };
    console.log("new entry -", newentry);
    const register_institute = await actor.edit_institute_profile(newentry);
    console.log("backend fn", register_institute);
    console.log("Submitted requested");
    setField("Wait for your request to get approved");
    setModelStatus(true);
  };

  return (
    <div className="bg-[#E5F1FF] min-h-screen flex justify-center px-[4%] lg1:px-[5%] ">
      <div className="">
        <Status
          open={modelStatus}
          Field={Field}
          onClose={() => setModelStatus(false)}
        />
      </div>
      <div className="w-full my-[3.125rem] rounded-[0.625rem] bg-white px-[4.125rem] py-[2.625rem]">
        <div className="flex flex-col ">
          <div className="flex px-[2.875rem] py-[1.8125rem] border-b border-[#BED0FF]  mb-[1.6875rem]">
            <img src="/student.svg" alt="" />
            <div className="flex flex-col justify-center pl-[1.8125rem]">
              <p className="font-[Noto Sans] text-[#00227A] text-[1.5625rem] leading-[2.125rem] font-[400] pb-[0.375rem]">
                Institute Name {data.details[0].institute_name[0]}
              </p>
              <p className="font-[Noto Sans] text-[#687EB5] text-[0.9375rem] leading-[1.25rem] font-[500] pb-[14px]">
                Institute-id: {data.details[0].institute_id[0].substr(0, 6)}
              </p>
              <button className=" w-[125px] px-[12px] py-[7px] text-[#687EB5] border border-[#687EB5] rounded-md font-[Noto Sans] font-[500] text-sm ">
                Upload Photo
              </button>
            </div>
          </div>

          <div className="flex flex-col  mb-[1.6875rem]">
            <div className="flex justify-between px-[2.875rem] pt-[1.1875rem] pb-[45px]">
              <p className="font-[Noto Sans] text-[#00227A] text-[1.125rem] leading-[1.5rem] font-[500]">
                Institute Details
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="institute_name">
                    Institute Name <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border `}
                    type="text"
                    id="institute_name"
                    name="institute_name"
                    {...register("institute_name")}
                    defaultValue={data.details[0].institute_name[0]}
                  />
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="institute_type">
                    Institute Type <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <select
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border`}
                    id="institute_type"
                    name="institute_type"
                    {...register("institute_type")}
                    defaultValue={data.details[0].institute_type[0]}
                  >
                    <option value="" disabled selected hidden></option>
                    <option
                      value="Public"
                      className="bg-[#E5EBFF] shadow-md text-[#00227A] font-normal text-center"
                    >
                      Public
                    </option>
                    <option
                      value="Private"
                      className="bg-[#E5EBFF] shadow-md text-[#00227A] font-normal text-center"
                    >
                      Private
                    </option>
                  </select>
                </div>
                <div className="w-full pr-1 mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="institute_size">
                    Institute Size <span className="text-[#FF0606]">*</span>
                  </label>
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border`}
                    type="text"
                    id="institute_size"
                    name="institute_size"
                    {...register("institute_size")}
                    defaultValue={data.details[0].institute_size[0]}
                  />
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="address">
                    Address 1<span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.address
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="text"
                    id="address"
                    name="address"
                    {...register("address")}
                    defaultValue={data.details[0].address[0]}
                  />
                  {/* {errors && errors.address && (
                 <span className="text-[#FF0606]">This field is required</span>
               )} */}
                </div>
              </div>
              <div className="flex justify-between mt-[10px] dxl:mt-[15px] ">
                <div className="w-full pr-1">
                  <label className="text-[#00227A]" htmlFor="city">
                    City <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.city
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="text"
                    id="city"
                    name="city"
                    {...register("city")}
                    defaultValue={data.details[0].city[0]}
                  />
                  {/* {errors && errors.city && (
                   <span className="text-[#FF0606]">This field is required</span>
                 )} */}
                </div>
                <div className="w-full pl-1 pr-1">
                  <label className="text-[#00227A]" htmlFor="state">
                    State <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.state
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="text"
                    id="state"
                    name="state"
                    {...register("state")}
                    defaultValue={data.details[0].state[0]}
                  />
                </div>
                <div className="w-full pl-1">
                  <label className="text-[#00227A]" htmlFor="zip_code">
                    Pin Code <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.zip_code
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="text"
                    id="zip_code"
                    name="zip_code"
                    {...register("zip_code", {
                      pattern: {
                        value: /^\d{6}(?:[-\s]\d{4})?$/,
                        message: "Invalid pin code format",
                      },
                    })}
                    defaultValue={data.details[0].zip_code[0]}
                  />
                </div>
              </div>
              <div className="mt-[20px] dxl:mt-[30px]">
                <button
                  className="w-full h-[40px] dxl:h-[45px] text-white text-[20px] bg-[#646ED6] rounded-[10px]"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstituteDetailsEditInstitutePage;
