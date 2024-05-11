import React, { useState } from "react";
import { Link } from "../../../../../node_modules/react-router-dom/dist/index";
import { useAuth } from "../../utils/useAuthClient";
import Status from "../../components/student/status";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
const StudentPersonalDetailsEdit = ({ next, formData, updateFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { actor } = useAuth();
  const [status, setStatus] = React.useState(false);
  const [Field, setField] = React.useState("");
  const navigate = useNavigate();

  console.log('formData in pd aadhar is : ', formData.aadhar_no[0]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ ...formData, [name]: value });
    console.log("Saving data:", formData);
  };

  const onSubmit = async (entry) => {
    console.log("entry from handleSave is : ", entry);
    try {
      const newData = {
        student_id: [formData.student_id[0]],
        first_name: [entry.first_name ? entry.first_name : formData.first_name[0]],
        last_name: [entry.last_name ? entry.last_name : formData.last_name[0]],
        date_of_birth: [entry.date_of_birth ? entry.date_of_birth : formData.date_of_birth[0]],
        personal_email: [entry.personal_email ? entry.personal_email : formData.personal_email[0]],
        gender: [entry.gender ? entry.gender : formData.gender[0]],
        address: [entry.address ? entry.address : formData.address[0]],
        city: [entry.city ? entry.city : formData.city[0]],
        state: [entry.state ? entry.state : formData.state[0]],
        zip_code: [Number(entry.zip_code ? entry.zip_code : formData.zip_code[0])],
        institute_name: [entry.institute_name ? entry.institute_name : formData.institute_name[0]],
        roll_no: [entry.roll_no ? entry.roll_no : formData.roll_no[0]],
        student_institute_email: [entry.student_institute_email ? entry.student_institute_email : formData.student_institute_email[0]],
        phone_no: [entry.phone_no ? entry.phone_no : formData.phone_no[0]],
        cgpa: [entry.cgpa ? entry.cgpa : formData.cgpa[0]],
        graduation_year: [entry.graduation_year ? entry.graduation_year : formData.graduation_year[0]],
        program_enrolled: [entry.program_enrolled ? entry.program_enrolled : formData.program_enrolled[0]],
        public_key: [entry.public_key ? entry.public_key : formData.public_key[0]],
        aadhar_no: [entry.aadhar_no ? entry.aadhar_no : formData.aadhar_no[0]],
        mother_name: [entry.mother_name ? entry.mother_name : formData.mother_name[0]],
        father_name: [entry.father_name ? entry.father_name : formData.father_name[0]],
        certificates: [entry.certificates ? entry.certificates : formData.certificates[0]],
        result: [entry.result ? entry.result : formData.result[0]],
        status: [formData.status[0]],
        kyc: []


      };
      console.log("newData data is ", newData);
      const editStatusResponse = await actor.edit_student_profile(newData);

      console.log("API Response:", editStatusResponse);
      const notify = () => toast.success('Edit requested successfully.');
      notify();
      navigate("/profile-result");
    } catch (error) {
      console.error("Error while saving data:", error);
      const notify = () => toast.error('Invalid Input.');
      notify();
    }
  }



  return (
    <div className="border-l border-[#D8E1F8] ml-[55px] flex flex-col justify-between pl-[47px] w-full pt-[45px] pr-[45px] ">
      <div className="pb-[45px]">
        <p className="text-[Segoe UI] text-[#00227A] text-[24px] leading-[32px] font-[400]">
          Personal Details
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              id="first_name"
              name="first_name"
              // value={formData.first_name || ''} 
              defaultValue={formData.first_name[0]}
              {...register("first_name")}
            // onChange={handleInputChange}
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
              defaultValue={formData.last_name[0]}
              {...register("last_name")}
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
              id="date_of_birth"
              name="date_of_birth"
              // value={formData.date_of_birth || ''} 
              // onChange={handleInputChange}
              defaultValue={formData.date_of_birth[0]}
              {...register("date_of_birth")}
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
              // value={formData.gender || ''} 
              // onChange={handleInputChange}
              defaultValue={formData.gender[0]}
              {...register("gender")}
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
              id="personal_email"
              name="personal_email"
              // value={formData.personal_email || ''}
              // onChange={handleInputChange}
              defaultValue={formData.personal_email[0]}
              {...register("personal_email")}
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
              id="phone_no"
              name="phone_no"
              // value={formData.phone_no || ''} 
              // onChange={handleInputChange}

              defaultValue={formData.phone_no[0]}
              {...register("phone_no")}
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
              //       value={formData.address ||''}
              // onChange={handleInputChange}
              defaultValue={formData.address[0]}
              {...register("address")}
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
              // value={formData.state || ''}
              // onChange={handleInputChange}
              defaultValue={formData.state[0]}
              {...register("state")}
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
              id="zip_code"
              name="zip_code"
              // value={formData.zip_code || ''}
              // onChange={handleInputChange}
              defaultValue={formData.zip_code[0]}
              // {...register("zip_code", )}
              {...register("zip_code", {

                pattern: {
                  value: /^\d{6}(?:[-\s]\d{4})?$/, // Regular expression for validating zip code format
                  message: "Invalid zip code format",
                },
              })}
            // defaultValue={formData.zip_code[0]}
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
            // value={formData.aadhar_no || ''}
            // onChange={handleInputChange}
            defaultValue={formData.aadhar_no[0]}
            {...register("aadhar_no")}
          />
        </div>
        <div className="flex flex-row-reverse pr-[30px] pt-[45px] pb-[105px] text-[18px]">
          <button type="submit" className="border py-[16px] px-[56px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]"
          >
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



