import React, { useState } from "react";
import { Link } from "../../../../../node_modules/react-router-dom/dist/index";
import { useAuth } from "../../utils/useAuthClient";
import Status from "../../components/student/status";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import loadingimg from "../../../assets/loading.gif";

const Overlay = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
      zIndex: 1000, // Ensures it covers other content
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      src={loadingimg}
      alt="Loading..."
      style={{ width: "100px", height: "100px" }}
    />
  </div>
);

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
  const [isLoading, setIsLoading] = useState(false);

  console.log("formData in pd aadhar is : ", formData.aadhar_no[0]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ ...formData, [name]: value });
    console.log("Saving data:", formData);
  };

  function handleCancel() {
    console.log("hancle clicked");
    navigate("/");
  }

  const onSubmit = async (entry) => {
    setIsLoading(true); // Start loading
    setIsLoading(true); // Start loading
    console.log("entry from handleSave is : ", entry);
    // const loadingToast = toast.loading('Your request is getting created...');

    try {
      const newData = {
        student_id: [formData.student_id[0]],
        first_name: [
          entry.first_name ? entry.first_name : formData.first_name[0],
        ],
        last_name: [entry.last_name ? entry.last_name : formData.last_name[0]],
        date_of_birth: [
          entry.date_of_birth ? entry.date_of_birth : formData.date_of_birth[0],
        ],
        personal_email: [
          entry.personal_email
            ? entry.personal_email
            : formData.personal_email[0],
        ],
        gender: [entry.gender ? entry.gender : formData.gender[0]],
        address: [entry.address ? entry.address : formData.address[0]],
        city: [entry.city ? entry.city : formData.city[0]],
        state: [entry.state ? entry.state : formData.state[0]],
        zip_code: [
          Number(entry.zip_code ? entry.zip_code : formData.zip_code[0]),
        ],
        institute_name: [
          entry.institute_name
            ? entry.institute_name
            : formData.institute_name[0],
        ],
        roll_no: [entry.roll_no ? entry.roll_no : formData.roll_no[0]],
        student_institute_email: [
          entry.student_institute_email
            ? entry.student_institute_email
            : formData.student_institute_email[0],
        ],
        phone_no: [entry.phone_no ? entry.phone_no : formData.phone_no[0]],
        cgpa: [entry.cgpa ? entry.cgpa : formData.cgpa[0]],
        graduation_year: [
          entry.graduation_year
            ? entry.graduation_year
            : formData.graduation_year[0],
        ],
        program_enrolled: [
          entry.program_enrolled
            ? entry.program_enrolled
            : formData.program_enrolled[0],
        ],
        public_key: [
          entry.public_key ? entry.public_key : formData.public_key[0],
        ],
        aadhar_no: [entry.aadhar_no ? entry.aadhar_no : formData.aadhar_no[0]],
        mother_name: [
          entry.mother_name ? entry.mother_name : formData.mother_name[0],
        ],
        father_name: [
          entry.father_name ? entry.father_name : formData.father_name[0],
        ],
        certificates: [
          entry.certificates ? entry.certificates : formData.certificates[0],
        ],
        result: [entry.result ? entry.result : formData.result[0]],
        status: [formData.status[0]],
        kyc: [formData.kyc[0]]


      };
      console.log("newData data is ", newData);
      const editStatusResponse = await actor.edit_student_profile(newData);
      console.log("API Response:", editStatusResponse);
      if (editStatusResponse === "you already have a pending request") {
        // toast.dismiss(loadingToast)
        toast.error('You already have a pending request');
      } else {
        // toast.dismiss(loadingToast)
        toast.success('Edit requested successfully.');
        navigate("/");
      }

    } catch (error) {
      console.error("Error while saving data:", error);
      toast.error('Invalid Input.');
    }finally {
      setIsLoading(false); // End loading
  }

  }



  return (
    <div className="border-l border-[#D8E1F8] ml-[55px] flex flex-col justify-between pl-[47px] w-full pt-[45px] pr-[45px] ">
          {isLoading && <Overlay />}
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
              // value={formData.last_name || ''}
              // onChange={handleInputChange}
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
              htmlFor="gender" 
            >
              Gender
            </label>
            <br />
            <select
              className="border border-[#CCD9FA] rounded-[10px] w-[90%] h-[56px] mt-[8px] pl-[10px] focus:outline-none"
              id="gender"
              name="gender"
              defaultValue={formData.gender || ''}
              {...register("gender")}
            >
              <option value="">Select Gender</option>  // Added for a default non-selectable item
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>
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
              Pin Code
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
                  value: /^\d{6}(?:[-\s]\d{4})?$/, 
                  message: "Invalid pin code format",
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
          <button
            type="submit"
            className="border py-[16px] px-[56px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]"
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
            <button
              className="border border-[#00227A] py-[16px] px-[48px] rounded-[10px] text-[#00227A]"
              onClick={handleCancel}
            >
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
