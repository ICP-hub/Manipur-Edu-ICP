import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import loadingimg from "../../../assets/loading.gif"
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useAuth } from "../../utils/useAuthClient";
import { handleFileEncrypt, generateAesKeyBase64 } from "../../utils/helper";
import { Func } from "../../../../../node_modules/@dfinity/candid/lib/cjs/idl";
const Overlay = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    zIndex: 1000, // Ensures it covers other content
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <img src={loadingimg} alt="Loading..." style={{ width: '100px', height: '100px' }} />
  </div>
);

const KycDocuments = ({ prev, formData }) => {
  const { actor } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const [aadharFileName, setAadharFileName] = useState("Upload ");

  const aadharUpload = () => {
    
  };
  const [fileName, setFileName] = useState("");


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("file is change " , file)

    if (file) {
      const validExtensions = ['image/png', 'image/jpeg', 'image/svg+xml'];
      if (validExtensions.includes(file.type)) {
        setFileName(file.name);
        setFile(file)
        console.log("file " , file)
      } else {
        alert("Invalid file type. Please upload an image file (.png, .jpeg, .svg).");
      }
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

  function uuidToNat32(uuid) {
    const crc32 = require('crc-32'); // npm install crc-32
    return crc32.str(uuid) >>> 0; // Use unsigned right shift to ensure a positive number
  }

  const onSubmit = async (entry) => {
    // setIsLoading(true); // Start loading
    // console.log(" now file is in submit fun is ", file)
    // console.log("formData is ", formData);
    // const { iv, encryptedFile, aesKey } = await handleFileEncrypt(entry.aadhar_upload, entry.public_key);
    // console.log("aesKey in student profile rturnded id  ", aesKey)
    // console.log("iv in signup student is ", iv)
    // console.log("encryptedFile is ", encryptedFile)
    // try {
    //   const newData = {
    //     student_id: [formData.student_id[0]],
    //     first_name: [entry.first_name ? entry.first_name : formData.first_name[0]],
    //     last_name: [entry.last_name ? entry.last_name : formData.last_name[0]],
    //     date_of_birth: [entry.date_of_birth ? entry.date_of_birth : formData.date_of_birth[0]],
    //     personal_email: [entry.personal_email ? entry.personal_email : formData.personal_email[0]],
    //     gender: [entry.gender ? entry.gender : formData.gender[0]],
    //     address: [entry.address ? entry.address : formData.address[0]],
    //     city: [entry.city ? entry.city : formData.city[0]],
    //     state: [entry.state ? entry.state : formData.state[0]],
    //     zip_code: [entry.zip_code ? entry.zip_code : formData.zip_code[0]],
    //     institute_name: [entry.institute_name ? entry.institute_name : formData.institute_name[0]],
    //     roll_no: [entry.roll_no ? entry.roll_no : formData.roll_no[0]],
    //     student_institute_email: [entry.student_institute_email ? entry.student_institute_email : formData.student_institute_email[0]],
    //     phone_no: [entry.phone_no ? entry.phone_no : formData.phone_no[0]],
    //     cgpa: [entry.cgpa ? entry.cgpa : formData.cgpa[0]],
    //     graduation_year: [entry.graduation_year ? entry.graduation_year : formData.graduation_year[0]],
    //     program_enrolled: [entry.program_enrolled ? entry.program_enrolled : formData.program_enrolled],
    //     public_key: [entry.public_key[0] ? entry.public_key[0] : formData.public_key],
    //     aadhar_no: [entry.aadhar_no ? entry.aadhar_no : formData.aadhar_no[0]],
    //     mother_name: [entry.mother_name ? entry.mother_name : formData.mother_name[0]],
    //     father_name: [entry.father_name ? entry.father_name : formData.father_name[0]],
    //     certificates: [entry.certificates ? entry.certificates : formData.certificates[0]],
    //     result: [entry.result ? entry.result : formData.result[0]],
    //     status: [entry.status ? entry.status : formData.status[0]],
    //     kyc: [Array.from(formData.kyc)]
    //   }
    //   console.log("newData data is ", newData)
    //   const editStatusResponse = await actor.edit_student_profile(newData);

    //   console.log("API Response:", editStatusResponse);
    //   const notify = () => toast.success('Edit requested successfully.');
    //   notify();
    //   navigate("/profile-result");
    // } catch (error) {
    //   console.error("Error while saving data:", error);
    //   const notify = () => toast.error('Invalid Input.');
    //   notify();
    // } finally {
    //   setIsLoading(false); // End loading
    // }

    console.log("file is " , file)
  }
  return (
    <div className="border-l border-[#D8E1F8] ml-[55px] flex flex-col justify-between pl-[47px] w-full pt-[45px] pr-[45px] ">
      {isLoading && <Overlay />}
      <div className="pb-[45px]">
        <p className="text-[Segoe UI] text-[#00227A] text-[24px] leading-[32px] font-[400]">
          KYC Documents
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-[27px]">
          <div>
            <p className="text-[#00227A] text-[16px] font-[500] text-[Noto Sans] pb-[6px]">
              Upload Your Kyc Document
            </p>
            {/* <button
              type="button"
              onClick={aadharUpload}
              className="rounded-[5px] py-[14px] px-[80px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
              {aadharFileName}
            </button> */} 
            <input
                    // className={`w-full h-[40px] dxl:h-[45px] rounded-[10px] p-1 border ${errors.aadhar_upload
                    //   ? "border-[#FF0606] focus:outline-[#FF0606]"
                    //   : "border-[#ACBFFD] focus:outline-[#ACBFFD]"
                    //   }`}
              className="rounded-[5px] py-[14px] px-[80px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]"
                  placeholder={fileName}
                    type="file"
                    id="aadhar_upload"
                    name="aadhar_upload"
                    accept="image/png, image/jpeg, image/svg+xml"
                    onChange={handleFileChange}
                    {...register("aadhar_upload")}

                  />
          </div>

        </div>

        <div className="flex flex-row-reverse pr-[30px] pt-[45px] pb-[105px] text-[18px] ">
          <button type="submit" className="border py-[16px] px-[55px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]">
            Save
          </button>

          <button
            onClick={prev}
            className="border py-[16px] px-[41px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]"
          >
            Previous
          </button>
          <button className="border border-[#00227A] py-[16px] px-[48px] rounded-[10px] text-[#00227A]">
            Cancel
          </button>
        </div>
      </form>

    </div>
  );
};
export default KycDocuments;