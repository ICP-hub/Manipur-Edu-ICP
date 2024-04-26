import React, { useState } from "react";
import { Link } from "../../../../../node_modules/react-router-dom/dist/index";
import { useAuth } from "../../utils/useAuthClient";
import Status from "../../components/student/status";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



import { useForm } from "react-hook-form";

const StudentPersonalDetailsEdit = ({ next , formData, updateFormData }) => {
  // const { register, handleSubmit, setValue } = useForm();
  const { actor } = useAuth();
  const [status, setStatus] = React.useState(false);
  const [Field, setField] = React.useState("");
  const navigate  = useNavigate() ; 

  console.log('formData',formData);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ ...formData, [name]: value });
    console.log("Saving data:", formData);
  };

 
  
  const handleSave = async () => {
    // Assuming formData contains the Uint8Array for kyc
    const preparedData = {
        ...formData,
        kyc: Array.from(formData.kyc) // Convert Uint8Array to an array of numbers
    };

    console.log("Prepared Data for API:", preparedData);

    try {
      const newData={
    student_id :  preparedData.student_id,
    first_name : [preparedData.first_name],
    last_name: preparedData.last_name,
    date_of_birth: preparedData.date_of_birth,
    personal_email: preparedData.personal_email,
    gender: preparedData.gender,
    address: preparedData.address,
    city: preparedData.city,
    state: preparedData.state,
    zip_code: preparedData.zip_code,
    institute_name: preparedData.institute_name,
    roll_no: preparedData.roll_no,
    student_institute_email: preparedData.student_institute_email,
    phone_no: preparedData.phone_no,
    cgpa: preparedData.cgpa,
    graduation_year: preparedData.graduation_year,
    program_enrolled: preparedData.program_enrolled,
    public_key: preparedData.public_key,
    aadhar_no: preparedData.aadhar_no,
    mother_name: preparedData.mother_name,
    father_name: preparedData.father_name,
    certificates: preparedData.certificates,
    result: preparedData.result,
    status: preparedData.status,
    kyc: preparedData.kyc,
      }
      console.log("newData data is " , newData)
        // const editStatusResponse = await actor.edit_student_profile(preparedData);
        const editStatusResponse = await actor.edit_student_profile(newData);

        console.log("API Response:", editStatusResponse);
        const notify = () => toast.success('Edit requested successfully.');
        notify() ; 
        navigate("/profile-result") ;
    } catch (error) {
        console.error("Error while saving data:", error);
        const notify = () => toast.error('Invalid Input.');
        notify() ; 
    }
};


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
              name="first_name" 
              value={formData.first_name || ''} 
              onChange={handleInputChange}
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
              name="last_name" 
              value={formData.last_name || ''} 
              onChange={handleInputChange}
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
              type="text"
              id="dob"
              name="date_of_birth" 
              value={formData.date_of_birth || ''} 
              onChange={handleInputChange}
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
              value={formData.gender || ''} 
              onChange={handleInputChange}
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
              name="personal_email"
              value={formData.personal_email || ''}
              onChange={handleInputChange}
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
              name="phone_no"
              value={formData.phone_no || ''} 
              onChange={handleInputChange}
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
              value={formData.address ||''}
        onChange={handleInputChange}
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
              value={formData.state || ''} 
              onChange={handleInputChange}
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
              name="zip_code"
              value={formData.zip_code || ''} 
              onChange={handleInputChange}
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
            name="aadhar_no"
            value={formData.aadhar_no || ''} 
              onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-row-reverse pr-[30px] pt-[45px] pb-[105px] text-[18px]">
          <button type="button" className="border py-[16px] px-[56px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]"
          onClick={handleSave}>
            Save
            {/* what will this save button do  */}
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
      <div className="">
        <Status open={status} Field={Field} onClose={() => setStatus(false)} />
      </div>
    </div>
  );
};
export default StudentPersonalDetailsEdit;