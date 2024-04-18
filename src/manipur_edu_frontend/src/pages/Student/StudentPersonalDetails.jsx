import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SignUpPage from "../../components/student/SignUpPage"; // Import SignUp Page ui
import { useAuth } from "../../utils/useAuthClient";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import { ICountry, IState, City, State, Country } from "country-state-city";
import Loader from "../../loader/Loader";
import "../../../assets/main.css";
import { MdUpload } from "react-icons/md";
import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  generateAesKeyBase64,
  handleFileEncrypt,
  handleFileEncryption,
} from "../../utils/helper";
import Status from "../../components/student/status";

const SignupStudents = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { actor } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [modelStatus, setModelStatus] = React.useState(false);
  const [Field, setField] = React.useState("");
  // Set City and state
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedState, setSelectedState] = useState("");
  const [isRendering, setIsRendering] = React.useState(false);
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState(""); // Reset state selection on country change
  };
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const fetchInstitutesList = async () => {
    const response = await actor.get_institutes_name_and_public_key();
    return response;
  };
  // handle previous button
  const handlePrevious = () => {
    navigate("/login"); // Navigate to the signup component
  };
  const handlePrevious1 = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const {
    data: instituteList,
    isLoading,
    error,
  } = useQuery("institutes", fetchInstitutesList);

  if (error) {
    console.log(error);
  }

  if (!isLoading && !error) {
    instituteList.map((item, index) => {
      console.log(item);
      console.log(item.name);
      console.log(item.public_key);
    });
  }

  function findObjectByName(name) {
    return instituteList.find((obj) => obj.name == name);
  }

  //  input type==-Files
  const [fileName, setFileName] = useState("");

  // Function to call when a file is selected
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };
  const {
    data: key,
    isLoading: isLoadingkey,
    error: errorkey,
  } = useQuery("key", generateAesKeyBase64);

  if (!isLoadingkey && !errorkey) {
    console.log(key);
    console.log("base64String", key);
  }

  const onSubmit = async (data) => {
    console.log(data);
    console.log(data.aadhar_upload);

    setStep((prevStep) => prevStep + 1);
    if (step === 2) {
      setIsRendering(true);
      // window.location.href = '/login';
      // Replace "/success" with the route you want to redirect to
      console.log("control reached");

      const obj = findObjectByName(data.institute_name);
      console.log(obj);

      const encryptedFile = await handleFileEncrypt(
        data.aadhar_upload,
        obj.public_key
      );
      console.log("encryptedFile", encryptedFile);
      console.log(data);
      const newData = {
        student_id: [""],
        result: [[""]],
        certificates: [[""]],
        public_key: [key],
        mother_name: [data.mother_name],
        zip_code: [Number(data.zip_code)],
        cgpa: [Number(data.cgpa)],
        city: [data.city],
        roll_no: [data.roll_no],
        student_institute_email: [data.student_institute_email] || [""],
        program_enrolled: [data.program_enrolled],
        personal_email: [data.personal_email],
        state: [data.state],
        institute_name: [data.institute_name],
        graduation_year: [Number(data.graduation_year)],
        aadhar_no: [data.aadhar_no],
        address: [data.address],
        gender: [data.gender],
        first_name: [data.first_name],
        last_name: [data.last_name],
        date_of_birth: [data.date_of_birth],
        phone_no: [data.phone_no],
        father_name: [data.father_name],
        status: ["pending"],
        kyc: encryptedFile,
      };

      const register_student = await actor.register_user(newData);
      console.log(register_student);
      // const addPrivateKey = await actor.
      setIsRendering(false);
      console.log("Submitted Successfully");
      setField("Wait for your request to get approved");
      await setModelStatus(true);
      // await navigate("/");
    }
  };
  return (
    <SignUpPage>
      {isRendering && <Loader></Loader>}
      <div className="">
        <Status
          open={modelStatus}
          Field={Field}
          onClose={() => setModelStatus(false)}
        />
      </div>
      <>
        {step === 0 && (
          <div className="flex flex-col justify-center items-center px-[2%] m-auto w-fit md:px-[15%]">
            <div className="text-[#00227A] text-3xl font-[500] pb-8">
              Sign up: Personal Details
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between">
                <div className="w-full pr-1">
                  <label className="text-[#00227A]" htmlFor="first_name">
                    First name <span className="text-[#FF0606]">*</span>
                  </label>
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.first_name
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="text"
                    id="first_name"
                    name="first_name"
                    {...register("first_name", {
                      required: "This field is required",
                    })}
                  />
                  {errors && errors.first_name && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      Please enter your first name.
                    </span>
                  )}
                </div>
                <div className="w-full pl-1">
                  <label htmlFor="last_name" className="text-[#00227A]">
                    Last name <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.last_name
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="text"
                    id="last_name"
                    name="last_name"
                    {...register("last_name", {
                      required: "This field is required",
                    })}
                  />
                  {errors && errors.last_name && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      Please enter your last name.
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-[10px] dxl:mt-[15px]">
                <label className="text-[#00227A]" htmlFor="father_name">
                  Father Name <span className="text-[#FF0606]">*</span>
                </label>
                <br />
                <input
                  className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                    errors.father_name
                      ? "border-[#FF0606] focus:outline-[#FF0606]"
                      : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                  }`}
                  type="text"
                  id="father_name"
                  name="father_name"
                  {...register("father_name", {
                    required: "This field is required",
                  })}
                />
                {errors && errors.father_name && (
                  <span className="absolute grid text-xs text-[#FF0606]">
                    Please enter your father's name.
                  </span>
                )}
              </div>
              <div className="mt-[10px] dxl:mt-[15px]">
                <label className="text-[#00227A]" htmlFor="mother_name">
                  Mother Name <span className="text-[#FF0606]">*</span>
                </label>
                <br />
                <input
                  className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                    errors.mother_name
                      ? "border-[#FF0606] focus:outline-[#FF0606]"
                      : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                  }`}
                  type="text"
                  id="mother_name"
                  name="mother_name"
                  {...register("mother_name", {
                    required: "This field is required",
                  })}
                />
                {errors && errors.mother_name && (
                  <span className="absolute grid text-xs text-[#FF0606]">
                    Please enter your mother's name.
                  </span>
                )}
              </div>
              <div className="flex justify-between mt-[10px] dxl:mt-[15px] relative">
                <div className="grow pr-2">
                  <label className="text-[#00227A]" htmlFor="date_of_birth">
                    Date of Birth <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`Date w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.date_of_birth
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="date"
                    id="date_of_birth"
                    max="2009-12-31"
                    name="date_of_birth"
                    {...register("date_of_birth", {
                      required: "This field is required",
                    })}
                  />
                  {errors && errors.date_of_birth && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      Please enter your date of birth.
                    </span>
                  )}
                </div>
                <div className="pt-[22px]">
                  <div
                    className="w-full h-[43px] rounded-[10px] px-1 p-1 focus:outline-[#ACBFFD] border-[#ACBFFD] border cursor-pointer"
                    onClick={toggleDatePicker}
                  >
                    <img src="/calander.svg" alt="calendar" />
                  </div>
                </div>
                {/* {showDatePicker && (
                  <div className="absolute top-full left-0 mt-2">
                    <input type="date" />
                  </div>
                )} */}
              </div>

              <div className="mt-[10px] dxl:mt-[15px]">
                <label className="text-[#00227A]" htmlFor="gender">
                  Gender <span className="text-[#FF0606]">*</span>
                </label>
                <br />
                <select
                  className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                    errors.gender
                      ? "border-[#FF0606] focus:outline-[#FF0606]"
                      : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                  }`}
                  id="gender"
                  name="gender"
                  {...register("gender", {
                    required: "This field is required",
                  })}
                >
                  <option value="">Select Gender</option>{" "}
                  {/* Provides a default prompt to select, can be used for validation to ensure a choice is made */}
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {/* Conditional rendering for displaying errors */}
                {errors && errors.gender && (
                  <span className="absolute grid text-xs text-[#FF0606]">
                    Please select your gender.
                  </span>
                )}
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-[20px] dxl:mt-[30px] flex">
                  {/* previous button */}
                  <button
                    className="flex-1 mr-[10px] w-[40%] h-[40px] dxl:h-[45px] text-white text-[20px] bg-[#646ED6] rounded-[10px]"
                    type="button"
                    onClick={handlePrevious}
                  >
                    Previous
                  </button>
                  <button
                    className="flex-1 ml-[10px] w-[40%] h-[40px] dxl:h-[45px] text-white text-[20px] bg-[#646ED6] rounded-[10px]"
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="flex flex-col justify-center items-center px-[2%] m-auto w-fit md:px-[15%]">
            <div className="text-[#00227A] text-3xl font-[500] pb-4">
              Sign up: Contact/Address
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="personal_email">
                    Email-id <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] lowercase px-1 border ${
                      errors.personal_email
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="email"
                    id="personal_email"
                    name="personal_email"
                    {...register("personal_email", {
                      required: "This field is required",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors && errors.personal_email && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      Please enter your personal email address.
                    </span>
                  )}
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="phone_no">
                    Phone Number <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.phone_no
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="tel"
                    id="phone_no"
                    name="phone_no"
                    {...register("phone_no", {
                      required: "This field is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Phone Number must be 10 digits",
                      },
                    })}
                  />
                  {errors && errors.phone_no && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      Please enter your phone number.
                    </span>
                  )}
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="aadhar_no">
                    Aadhar Number <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[45px] dxl:h-[45px] rounded-[10px] p-1 border ${
                      errors.aadhar_upload
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="text"
                    id="aadhar_no"
                    name="aadhar_no"
                    {...register("aadhar_no", {
                      required: "This field is required",
                      pattern: {
                        value: /^\d{12}$/,
                        message: "Aadhar Number must be exactly 12 digits",
                      },
                    })}
                  />
                  {errors && errors.aadhar_no && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      Please enter your Aadhar number.
                    </span>
                  )}
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="address">
                    Address 1 <span className="text-[#FF0606]">*</span>
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
                    {...register("address", {
                      required: "This field is required",
                    })}
                  />
                  {errors && errors.address && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      Please provide your address.
                    </span>
                  )}
                </div>
                <div className="flex justify-between mt-[10px] dxl:mt-[15px] ">
                  <div className="w-full pl-1 pr-1">
                    <label className="text-[#00227A]" htmlFor="state">
                      State <span className="text-[#FF0606]">*</span>
                    </label>
                    <br />
                    <select
                      className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                        errors.state && !selectedState
                          ? "border-[#FF0606] focus:outline-[#FF0606]"
                          : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                      id="state"
                      name="state"
                      {...register("state", {
                        required: "This field is required",
                      })}
                      onChange={handleStateChange}
                      value={selectedState}
                      disabled={!selectedCountry}
                    >
                      <option value="">Select State</option>
                      {State.getStatesOfCountry(selectedCountry).map(
                        (state) => (
                          <option key={state.isoCode} value={state.isoCode}>
                            {state.name}
                          </option>
                        )
                      )}
                    </select>
                    {errors && errors.state && !selectedState && (
                      <span className="absolute grid text-xs text-[#FF0606]">
                        Please select state.
                      </span>
                    )}
                  </div>
                  <div className="w-full pr-1">
                    <label className="text-[#00227A]" htmlFor="city">
                      City <span className="text-[#FF0606]">*</span>
                    </label>
                    <br />
                    <select
                      className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                        errors.city
                          ? "border-[#FF0606] focus:outline-[#FF0606]"
                          : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                      id="city"
                      name="city"
                      {...register("city", {
                        required: "This field is required",
                      })}
                      disabled={!selectedState}
                    >
                      <option value="">Select City</option>
                      {City.getCitiesOfState(
                        selectedCountry,
                        selectedState
                      ).map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                    {errors && errors.city && (
                      <span className="absolute grid text-xs text-[#FF0606]">
                        Please enter city.
                      </span>
                    )}
                  </div>
                  <div className="w-full pl-1">
                    <label className="text-[#00227A]" htmlFor="zipcode">
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
                        required: "This field is required",
                        pattern: {
                          value: /^\d{6}(?:[-\s]\d{4})?$/, // Regular expression for validating zip_code code format
                          message: "Invalid zip code format",
                        },
                      })}
                    />
                    {errors && errors.zip_code && (
                      <span className="absolute grid text-xs text-[#FF0606]">
                        Please enter zip code.
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="aadhar_upload">
                    Upload KYC Documents{" "}
                    <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  {/* <input
                    className={`w-1/2 h-[45px] dxl:h-[45px] rounded-[10px] p-1 border ${
                      errors.aadhar_upload
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="file"
                    id="kyc_upload"
                    name="kyc_upload"
                    onChange={handleFileChange}
                    {...register("kyc_upload", {
                      required: "This field is required",
                    })}
                  />
                  <MdUpload /> */}
                  <div className="w-1/2 relative flex items-center">
                    {/* <label for="file-input">No file chosen</label> */}
                    <input
                      className={`h-[45px] dxl:h-[45px] rounded-[10px] p-1 border ${
                        errors.aadhar_upload
                          ? "border-[#FF0606] focus:outline-[#FF0606]"
                          : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                      type="file"
                      id="kyc_upload"
                      name="kyc_upload"
                      onChange={handleFileChange}
                      {...register("kyc_upload", {
                        required: "This field is required",
                      })}
                    />
                    <div
                      style={{
                        backgroundColor: "#acbffd",
                        border: "1px solid #acbffd",
                        borderRadius: "0.375rem",
                      }}
                    >
                      <MdUpload
                        className="absolute top-0 mt-1 mr-1"
                        size={28}
                      />
                    </div>
                  </div>

                  {errors && errors.kyc && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      Please upload your document.
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-[20px] dxl:mt-[30px] flex">
                <button
                  className="flex-1 mr-[10px] w-[40%] h-[40px] dxl:h-[45px] text-white text-[20px] bg-[#646ED6] rounded-[10px]"
                  type="button"
                  onClick={handlePrevious1}
                >
                  Previous
                </button>
                <button
                  className="flex-1 ml-[10px] w-[40%] h-[40px] dxl:h-[45px] text-white text-[20px] bg-[#646ED6] rounded-[10px]"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col justify-center items-center px-[2%] m-auto w-fit md:px-[15%]">
            <div className="text-[#00227A] text-3xl font-[500] pb-8">
              Sign up: Institute Details
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="institute_name">
                    Institute Name <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <select
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.institute_name
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    id="institute_name"
                    name="institute_name"
                    {...register("institute_name", {
                      required: "This field is required",
                    })}
                  >
                    <option value="" disabled selected hidden></option>
                    {!isLoading &&
                      !error &&
                      instituteList?.map((institute, i) => (
                        <option
                          key={i}
                          value={institute.name}
                          className="bg-[#E5EBFF] shadow-md text-[#00227A] font-normal "
                        >
                          {institute.name}
                        </option>
                      ))}
                  </select>
                  {errors && errors.institute_name && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      Please enter the name of the institute.
                    </span>
                  )}
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="roll_no">
                    Roll Number <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.roll_no
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="text"
                    id="roll_no"
                    name="roll_no"
                    {...register("roll_no", {
                      required: "This field is required",
                    })}
                  />
                  {errors && errors.roll_no && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      Please enter your roll number.
                    </span>
                  )}
                </div>
                <div className="flex justify-between mt-[10px] dxl:mt-[15px]">
                  <div className="w-full pr-1">
                    <label className="text-[#00227A]" htmlFor="cgpa">
                      Current CGPA <span className="text-[#FF0606]">*</span>
                    </label>
                    <input
                      className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                        errors.cgpa
                          ? "border-[#FF0606] focus:outline-[#FF0606]"
                          : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                      type="text"
                      id="cgpa"
                      name="cgpa"
                      {...register("cgpa", {
                        required: "CGPA is required",
                        pattern: {
                          value: /^(10(\.0{1,11})?|[0-9](\.\d{1,11})?)$/, // Regular expression for validating CGPA format
                          message: "Invalid CGPA format",
                        },
                      })}
                    />
                    {errors && errors.cgpa && (
                      <span className="absolute grid text-xs text-[#FF0606]">
                        Please enter your CGPA.
                      </span>
                    )}
                  </div>
                  <div className="w-full pl-1">
                    <label htmlFor="graduation_year" className="text-[#00227A]">
                      Graduation Year <span className="text-[#FF0606]">*</span>
                    </label>
                    <br />
                    <input
                      className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                        errors.graduation_year
                          ? "border-[#FF0606] focus:outline-[#FF0606]"
                          : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                      type="text"
                      id="graduation_year"
                      name="graduation_year"
                      {...register("graduation_year", {
                        required: "This field is required",
                        max: {
                          value: 2028,
                          message:
                            "Graduation year cannot be greater than 2028",
                        },
                      })}
                    />
                    {errors && errors.graduation_year && (
                      <span className="absolute grid text-xs text-[#FF0606]">
                        Please specify your graduation year.
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="program_enrolled">
                    Program enrolled into{" "}
                    <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.program_enrolled
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="text"
                    id="program_enrolled"
                    name="program_enrolled"
                    {...register("program_enrolled", {
                      required: "This field is required",
                    })}
                  />
                  {errors && errors.enroll && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      Please enter your enrollment number.
                    </span>
                  )}
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label
                    className="text-[#00227A]"
                    htmlFor="student_institute_email"
                  >
                    Institute Email-id{" "}
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${
                      errors.student_institute_email
                        ? "border-[#FF0606] focus:outline-[#FF0606]"
                        : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    }`}
                    type="email"
                    id="student_institute_email"
                    name="student_institute_email"
                    {...register("student_institute_email")}
                  />
                </div>
                {errors && errors.student_institute_email && (
                  <span className="absolute grid text-xs text-[#FF0606]">
                    Please enter your student institute email.
                  </span>
                )}
              </div>
              <div className="mt-[20px] dxl:mt-[30px] flex">
                {/* previous button */}
                <button
                  className="flex-1 mr-[10px] w-[40%] h-[40px] dxl:h-[45px] text-white text-[20px] bg-[#646ED6] rounded-[10px]"
                  type="button"
                  onClick={handlePrevious1}
                >
                  Previous
                </button>
                <button
                  className="flex-1 ml-[10px] w-[40%] h-[40px] dxl:h-[45px] text-white text-[20px] bg-[#646ED6] rounded-[10px]"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        )}
      </>
    </SignUpPage>
  );
};

export default SignupStudents;
