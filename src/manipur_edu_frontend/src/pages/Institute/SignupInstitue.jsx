import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SignUpPage from "../../components/student/SignUpPage"; // Import SignUp Page ui
import { useAuth } from "../../utils/useAuthClient";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";

import { useQuery } from "react-query";
import { ICountry, IState, City, State, Country } from "country-state-city";
import Status from "../../components/student/status";
import { getKeysForInstitute, generateAesKeyBase64 } from "../../utils/helper";
import Loader from "../../loader/Loader";

const SignupInstitute = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [modelStatus, setModelStatus] = React.useState(false);
  const [Field, setField] = React.useState("");
  // Set City and state
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedState, setSelectedState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState(""); // Reset state selection on country change
  };
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };
  const [step, setStep] = useState(0);
  const { actor } = useAuth();
  const navigate = useNavigate();

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
    setStep((prevStep) => prevStep + 1);
    if (step === 1) {
      // window.location.href = '/login';
      // Replace "/success" with the route you want to redirect to

      const newData = {
        institute_id: [""],
        public_key: [key],
        zip_code: [Number(data.zip_code)],
        city: [data.city],
        email: [data.email],
        state: [data.state],
        institute_name: [data.institute_name],
        address: [data.address],
        phone_no: [data.phone_no],
        website: [data.website],
        coed_status: [data.coedStatus],
        approval_authority: [data.approvalAuthority],
        institute_size: [Number(data.instituteSize)],
        institute_type: [data.institute_type],
        status: ["pending"],
      };
      setIsLoading(true);
      const register_institute = await actor.register_institute(newData);

      console.log(register_institute);
      // const addedPrivateKey = await actor.add_private_key(keyPair.privateKey);
      // console.log(addedPrivateKey);
      console.log("Submitted Successfully");
      // await navigate("/");
      setIsLoading(false);
      setField("Wait for your request to get approved");
      setModelStatus(true);
      console.log("Submitted Successfully");
    }
  };

  return (



    <SignUpPage>
      {isLoading && <Loader></Loader>}

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
              Sign up: Institute Details
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="institute_name">
                    Institute Name <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${errors.institute_name
                      ? "border-[#FF0606] focus:outline-[#FF0606]"
                      : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                    type="text"
                    id="institute_name"
                    name="institute_name"
                    {...register("institute_name", {
                      required: "This field is required",
                    })}
                  />
                  {errors && errors.institute_name && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="institute_type">
                    Institute Type <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <select
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${errors.institute_type
                      ? "border-[#FF0606] focus:outline-[#FF0606]"
                      : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                    id="institute_type"
                    name="institute_type"
                    {...register("institute_type", {
                      required: "This field is required",
                    })}
                  >
                    <option value="" disabled selected hidden></option>
                    <option
                      value="Public"
                      className="bg-[#E5EBFF] shadow-md text-[#00227A] font-normal"
                    >
                      Public
                    </option>
                    <option
                      value="Private"
                      className="bg-[#E5EBFF] shadow-md text-[#00227A] font-normal"
                    >
                      Private
                    </option>
                  </select>
                  {errors && errors.institute_type && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="w-full pr-1 mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="instituteSize">
                    Institute Size <span className="text-[#FF0606]">*</span>
                  </label>
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${errors.instituteSize
                      ? "border-[#FF0606] focus:outline-[#FF0606]"
                      : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                    type="text"
                    id="instituteSize"
                    name="instituteSize"
                    {...register("instituteSize", {
                      required: "Institute size is required",
                      pattern: {
                        value: /^[1-9]\d*$/,
                        message: "Please enter a valid positive integer",
                      },
                    })}
                  />
                  {errors.instituteSize && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="address">
                    Address 1<span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${errors.address
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
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-[10px] dxl:mt-[15px] ">
                <div className="w-full pl-1 pr-1">
                  <label className="text-[#00227A]" htmlFor="state">
                    State <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <select
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${errors.state
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
                    {State.getStatesOfCountry(selectedCountry).map((state) => (
                      <option key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  {errors && errors.state && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="w-full pr-1">
                  <label className="text-[#00227A]" htmlFor="city">
                    City <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <select
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${errors.city
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
                    {City.getCitiesOfState(selectedCountry, selectedState).map(
                      (city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      )
                    )}
                  </select>
                  {errors && errors.city && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="w-full pl-1">
                  <label className="text-[#00227A]" htmlFor="zip_code">
                    Zip code <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${errors.zip_code
                      ? "border-[#FF0606] focus:outline-[#FF0606]"
                      : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                    type="text"
                    id="zip_code"
                    name="zip_code"
                    {...register("zip_code", {
                      required: "This field is required",
                      pattern: {
                        value: /^\d{6}(?:[-\s]\d{4})?$/, // Regular expression for validating zip code format
                        message: "Invalid zip code format",
                      },
                    })}
                  />
                  {errors && errors.zip_code && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-[20px] dxl:mt-[30px]">
                <button
                  className="w-full h-[40px] dxl:h-[45px] text-white text-[20px] bg-[#646ED6] rounded-[10px]"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 1 && (
          <div className="flex flex-col justify-center items-center px-[2%] m-auto w-fit md:px-[15%]">
            <div className="text-[#00227A] text-3xl font-[500] pb-8">
              Sign up: Institute Details
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="flex flex-col">
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="email">
                    Email-id <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] lowercase px-1 border ${errors.email
                      ? "border-[#ff0606] focus:outline-[#ff0606]"
                      : "border-[#acbffd] focus:outline-[#acbffd]"
                      }`}
                    type="email"
                    id="email"
                    name="email"
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors && errors.email && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="phone_no">
                    Phone Number <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${errors.phone_no
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
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="website">
                    Institute Website URL{" "}
                    <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <input
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${errors.website
                      ? "border-[#FF0606] focus:outline-[#FF0606]"
                      : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                    type="text"
                    id="website"
                    name="website"
                    {...register("website", {
                      required: "This field is required",
                      pattern: {
                        value: /^(ftp|http|https):\/\/[^ "]+$/, // Regular expression for validating URL format
                        message: "Invalid URL format",
                      },
                    })}
                  />
                  {errors && errors.website && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="approvalAuthority">
                    Select course approval authority{" "}
                    <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <select
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${errors.approvalAuthority
                      ? "border-[#FF0606] focus:outline-[#FF0606]"
                      : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                    id="approvalAuthority"
                    name="approvalAuthority"
                    {...register("approvalAuthority", {
                      required: "This field is required",
                    })}
                  >
                    <option value="" disabled selected hidden></option>
                    <option
                      value="UGC/AICTE/MoE"
                      className="bg-[#E5EBFF] shadow-md text-[#00227A] font-normal"
                    >
                      Courses approved by UGC/AICTE/MoE
                    </option>
                    <option
                      value="MHA"
                      className="bg-[#E5EBFF] shadow-md text-[#00227A] font-normal"
                    >
                      Courses approved by MHA
                    </option>
                    <option
                      value="Others"
                      className="bg-[#E5EBFF] shadow-md text-[#00227A] font-normal"
                    >
                      Others
                    </option>
                  </select>
                  {errors && errors.approvalAuthority && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-[10px] dxl:mt-[15px]">
                  <label className="text-[#00227A]" htmlFor="coedStatus">
                    Co-Ed Status <span className="text-[#FF0606]">*</span>
                  </label>
                  <br />
                  <select
                    className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] px-1 border ${errors.coedStatus
                      ? "border-[#FF0606] focus:outline-[#FF0606]"
                      : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                      }`}
                    id="coedStatus"
                    name="coedStatus"
                    {...register("coedStatus", {
                      required: "This field is required",
                    })}
                  >
                    <option value="" disabled selected hidden></option>
                    <option
                      value="Women"
                      className="bg-[#E5EBFF] shadow-md text-[#00227A] font-normal"
                    >
                      Women
                    </option>
                    <option
                      value="Men"
                      className="bg-[#E5EBFF] shadow-md text-[#00227A] font-normal"
                    >
                      Men
                    </option>
                    <option
                      value="Co-Ed"
                      className="bg-[#E5EBFF] shadow-md text-[#00227A] font-normal"
                    >
                      Co-Ed
                    </option>
                  </select>
                  {errors && errors.coedStatus && (
                    <span className="absolute grid text-xs text-[#FF0606]">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-[20px] dxl:mt-[30px]">
                <button
                  className="w-full h-[40px] dxl:h-[45px] text-white text-[20px] bg-[#646ED6] rounded-[10px]"
                  type="submit"

                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        )}
      </>
    </SignUpPage>

  );
};

export default SignupInstitute;