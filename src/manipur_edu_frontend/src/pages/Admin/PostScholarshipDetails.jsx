import React, { useState } from "react";
import { useAuth } from "../../utils/useAuthClient";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast.success('Scholarship Posted Approved.');


const PostScholarshipDetails = ({ onBack }) => {

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actor } = useAuth();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };






  // const onSubmit = async (data) => {
  //   alert("Scholarship Posted SuccessFully !")
  //   navigate("/dsa");
  //   // setIsRendering(true);
  //   console.log(data);
  //   const newScholarship = {
  //       scholarship_id:[""],
  //       name: data.name,
  //       description: data.description,
  //       amount: data.amount,
  //       date: data.date,
  //       deadline: data.deadline,
  //       education: data.education,
  //       institute: "",
  //       gender:data.gender,
  //       status: "pending",
  //       offerby:"",
  //       applicants: [],
  //   };
  //   console.log("newScholarship", newScholarship);
  //   const create_scholarship = await actor.create_scholarship(newScholarship);
  //   console.log("result of backend", create_scholarship);
  //   // setIsRendering(false);
  //   console.log("Submitted Successfully");
  // };


  // const onSubmit = async (data) => {
  //   console.log(data);

  //   const newScholarship = {
  //     scholarship_id: [""],
  //     name: data.name,
  //     description: data.description,
  //     amount: data.amount,
  //     date: data.date,
  //     deadline: data.deadline,
  //     education: data.education,
  //     institute: "",
  //     gender: data.gender,
  //     status: "pending",
  //     offerby: "",
  //     applicants: [],
  //   };

  //   console.log("newScholarship", newScholarship);
  //   const create_scholarship = await actor.create_scholarship(newScholarship);
  //   console.log("result of backend", create_scholarship);

  //   // Open modal on success
  // };
  const onSubmit = async (data) => {
    console.log(data);
    const loadingToast = toast.loading('Scholarship is getting posted...');


    // Check for empty fields
    const requiredFields = ['name', 'description', 'amount', 'date', 'deadline', 'education', 'gender'];
    const emptyFields = requiredFields.filter(field => !data[field]);

    if (emptyFields.length > 0) {
        // If there are empty required fields, alert the user
        // alert(`The following fields are empty: ${emptyFields.join(', ')}`);
        toast.dismiss(loadingToast);
        toast.error(`The following fields are empty: ${emptyFields.join(', ')}`);
        return; // Stop the submission process
    }

    const newScholarship = {
        scholarship_id: [""],
        name: data.name,
        description: data.description,
        amount: data.amount,
        date: data.date,
        deadline: data.deadline,
        education: data.education,
        institute: "",
        gender: data.gender,
        status: "pending",
        offerby: "",
        applicants: [],
    };

    console.log("newScholarship", newScholarship);
    
    try {
        const create_scholarship = await actor.create_scholarship(newScholarship);
        console.log("result of backend", create_scholarship);
        // alert("Done"); // Alert 'Done' on successful creation
        toast.dismiss(loadingToast);
        // const scPosted = () => toast.success(`Scholarship Posted successfully`);
        toast.success('Scholarship Posted successfully');
        // scPosted() ; 
        onBack() ; 
        // navigate("/")



    } catch (error) {
        console.error("Failed to create scholarship", error);
        // alert("Failed to create scholarship"); // Alert failure message
        toast.dismiss(loadingToast);
        toast.error("Failed to create scholarship");
        // const scNotPosted = () => toast.error("Failed to create scholarship");
        // scNotPosted() ; 
    }

    // Open modal on success (you might want to place this inside the try block after successful creation)
};


  return (
    <div className="px-[63px] py-[25px] flex flex-col gap-[25px]">

      <div className="flex justify-between ">
        <div className="font-[600] font-[Segoe UI] text-4xl text-[#2D6BE4]">
          Enter Scholarship Details
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
            <img
              className="w-[67px] h-[55px] pl-[12px]"
              src="student.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[17px]">
        <div className="flex flex-col gap-[30px]">
          <div className="w-[50%] relative">
            <label
              className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] "
              htmlFor=""
            >
              Title
            </label>{" "}
            <br />
            <input
              className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
              type="text"
              name="name"
              {...register("name", { required: "This field is required" })}
            />
            {errors && errors.name && (
              <span className="absolute grid text-xs text-[#FF0606]">
                Please enter scholarship title.
              </span>
            )}
          </div>
          <div className="w-full relative">
            <label
              className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] "
              htmlFor=""
            >
              Description
            </label>{" "}
            <br />
            <input
              className="w-full h-[110px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
              type="text"
              name="description"
              {...register("description", {
                required: "This field is required",
              })}
            />
             {errors && errors.description && (
              <span className="absolute grid text-xs text-[#FF0606]">
                Please enter scholarship description.
              </span>
              
            )}
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div className="w-[50%] flex relative justify-between">
            <div className="grow pr-2">
              <label className="text-[#00227A]" htmlFor="date_of_birth">
                Date of Birth
              </label>
              <br />
              <div className="relative">
                <input
                  className={`Date w-full h-[56px] dxl:h-[45px] border rounded-[10px] px-1 border-[#ACBFFD] focus:outline-[#ACBFFD]  ${errors.date
                    ? "border-[#FF0606] focus:outline-[#FF0606]"
                    : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                  type="date"
                  id="date"
                  //   max="2009-12-31"                  
                  name="date"
                  {...register("date", {
                    required: "This field is required",
                  })}
                />

                <img
                  src={"Calender.png"}
                  alt="calendar"
                  className="absolute top-0 right-0 mt-[10px] mr-[10px] cursor-pointer"
                //   onClick={toggleDatePicker}
                />
              </div>

              {errors && errors.date && (
                <span className="absolute grid text-xs text-[#FF0606]">
                  Please enter date.
                </span>
              )}
            </div>

            {/* Date Picker */}
            {showDatePicker && (
              <div className="absolute top-full left-0 mt-2">
                {/* Add your date picker component here */}
                {/* This could be a custom date picker component or an inline date input */}
                <input
                  type="date"
                  className="bg-white border border-gray-300 rounded p-1"
                />
              </div>
            )}
          </div>

          <div className="w-[50%] flex relative justify-between">
            <div className="grow pr-2">
              <label className="text-[#00227A]">Deadline</label>
              <br />
              <div className="relative">
                <input
                  className={`Date w-full h-[56px] dxl:h-[45px] border rounded-[10px] px-1 border-[#ACBFFD] focus:outline-[#ACBFFD]  ${errors.deadline
                    ? "border-[#FF0606] focus:outline-[#FF0606]"
                    : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                  type="date"
                  id="deadline"
                  name="deadline"
                  {...register("deadline", {
                    required: "This field is required",
                  })}
                />

                <img
                  src={"Calender.png"}
                  alt="calendar"
                  className="absolute top-0 right-0 mt-[10px] mr-[10px] cursor-pointer"
                //   onClick={toggleDatePicker}
                />
              </div>

              {errors && errors.deadline && (
                <span className="absolute grid text-xs text-[#FF0606]">
                  Please enter deadline.
                </span>
              )}
            </div>
            {/* Date Picker */}
            {showDatePicker && (
              <div className="absolute top-full left-0 mt-2">
                <input
                  type="date"
                  className="bg-white border border-gray-300 rounded p-1"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div className="w-[50%] relative ">
            <label
              className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A]"
              htmlFor=""
            >
              Scholarship Worth
            </label>{" "}
            <br />
            <input
              className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
              type="number"
              name="amount"
              {...register("amount", { required: "This field is required" })}
            ></input>
            {errors && errors.amount && (
              <span className="absolute grid text-xs text-[#FF0606]">
                Please enter scholarship title.
              </span>
            )}
          </div>
        </div>
        <h1 className="text-[20px] text-[Noto Sans] font-[500] text-[#00227A]">
          Eligibility Criteria
        </h1>
        <div className="flex gap-[30px]">
          <div className="w-[50%] relative ">
            <label
              className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A]"
              htmlFor=""
            >
              Education Level
            </label>{" "}
            <br />
            <input
              className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
              type="text"
              name="education"
              {...register("education", { required: "This field is required", })}
            ></input>
            {errors && errors.education && (
              <span className="absolute grid text-xs text-[#FF0606]">
                Please enter your highest education level.
              </span>
            )}
            
          </div>
          <div className="w-[50%] relative">
            <label
              className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A]"
              htmlFor="gender"
            >
              Gender
            </label> <br />
            <select
              className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
              id="gender"
              name="gender"
              {...register("gender", { required: "This field is required" })}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors && errors.gender && (
              <span className="absolute grid text-xs text-[#FF0606]">
                Please select your gender.
              </span>
            )}
          </div>

        </div>
      </div>
      <div className="flex flex-col gap-[17px]">

        <p className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A]">
          Upload Header
        </p>
        <div>
          <button className="border border-[#CCD9FA] rounded-[10px] px-[21px] py-[12px] text-[15px] text-[Segoe UI] font-[400] text-[#00227A]">
            Upload Photo
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[14px] text-[Source Sans Pro] font-[400] ">
          By proceeding you acknowledge and agree to our{" "}
          <span className="text-[#346DC2] font-[700]">Privacy Policy</span> and{" "}
        </p>{" "}
        <p className="pb-[32px] text-[14px] text-[Source Sans Pro] font-[400]">
          {" "}
          <span className="text-[#346DC2] font-[700]">Terms of Use</span> and
          <span className="text-[#346DC2] font-[700]">
            Scholarship Rules.
          </span>{" "}
        </p>
        <div className="flex gap-[22px]">
          <button
            onClick={onBack}
            className="text-[#00227A] font-[500] border border-[#00227A] rounded-[10px] px-[35px] py-[14px]"
          >
            Cancel
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              className="text-[white] font-[500] bg-[#0041E9] rounded-[10px] px-[40px] py-[14px]"
              type="submit">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostScholarshipDetails;

