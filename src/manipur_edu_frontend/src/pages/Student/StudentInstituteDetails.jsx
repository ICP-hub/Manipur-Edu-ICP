import React from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "../../utils/useAuthClient";
import { useNavigate } from 'react-router-dom';
const InstituteDetailsEdit = ({ prev ,formData , updateFormData }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actor } = useAuth();
  
  const navigate = useNavigate() ; 
  

  
  const onSubmit = async (entry) => {
    console.log("entry from handleSave is : " , entry); 
    

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
        cgpa: [parseFloat(entry.cgpa ? entry.cgpa : formData.cgpa[0])],
        graduation_year: [Number(entry.graduation_year ? entry.graduation_year : formData.graduation_year[0])],
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
      console.log("newData data is ", newData)
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
  };
  return (
    <div className="px-[4%] lg1:px-[5%] flex flex-col justify-between w-full ">
      <div className="w-full my-[3.125rem] rounded-[0.625rem] bg-white px-[4.125rem] py-[2.625rem]">
        <div className="pb-[45px]">
          <p className="text-[Segoe UI] text-[#00227A] text-[24px] leading-[32px] font-[400]">
            Institute Details
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            <div className="w-full ">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400] "
                for="fname"
              >
                {/* roll_no */}
                Roll number
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="text"
                id="rnumber"
                name="rollnumber"
                defaultValue={formData.roll_no[0]}
                {...register("roll_no")}

              />
            </div>
            <div className="w-full">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
                for="lname"
              >
                {/* institute_name */}
                Institute name
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="text"
                id="institute_name"
                name="institute_name"
              // value={formData.institute_name || ''} 
              defaultValue={formData.institute_name[0]}
              {...register("institute_name")}
              />
            </div>
            <div className="w-full">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
                for="lname"
              >
                {/* student_institute_email */}

                Student's Institute E-mail
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="text"
                id="student_institute_email"
                name="student_institute_email"
              defaultValue={formData.student_institute_email[0]}
              {...register("student_institute_email")}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-full pt-[27px]">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
                for="fname"
              >
                CGPA
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="text"
                id="cgpa"
                name="cgpa"
              // value={formData.cgpa || ''} 
              defaultValue={formData.cgpa[0]}
              {...register("cgpa")}
              />
            </div>
            <div className="w-full pt-[27px]">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
                for="lname"
              >
                Graduation Year
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="year"
                id="graduation_year"
                name="graduation_year"
              // value={formData.graduation_year || ''} 
              defaultValue={formData.graduation_year[0]}
              {...register("graduation_year")}

              />
            </div>
            <div className="w-full pt-[27px]">
              <label
                className="text-[Noto Sans] text-[#00227A] text-[17px] leading-[23px] font-[400]"
                for="lname"
              >
                {/* program_enrolled */}
                Program
              </label>
              <br />
              <input
                className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none "
                type="text"
                id="program_enrolled"
                name="program_enrolled"
              // value={formData.program_enrolled || ''} 
              defaultValue={formData.graduation_year[0]}
              {...register("program_enrolled")}
              />
            </div>
          </div>

          <div className="flex flex-row-reverse pr-[30px] pt-[45px] pb-[105px] text-[18px] ">
            {/* <Link to="/profile-result"> */}
              <button type="submit" className="border py-[16px] px-[55px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]">
                Save
              </button>
            {/* </Link> */}
            {/* <Link to="/profile-result"> */}
              <button className="border border-[#00227A] py-[16px] px-[48px] rounded-[10px] text-[#00227A]">
                Cancel
              </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstituteDetailsEdit;
