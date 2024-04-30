// import React ,  { useRef , useState} from "react";

// const KycDocuments = ({ prev }) => {

//   const aadharInputRef = useRef(null);
//   const panInputRef = useRef(null);


//   const [aadharFileName, setAadharFileName] = useState("Upload ");
//   const [panFileName, setPanFileName] = useState("Upload ");


//   function aadharUpload() {
//     aadharInputRef.current.click(); // Programmatically trigger the file input click
//   }
//   function panUpload() {
//     panInputRef.current.click();
//   }

//   function handleAadharFile(event) {
//     const file = event.target.files[0];
//     if (file) {
//         setAadharFileName(file.name);
//     }
//     console.log("Aadhar card uploaded: ", file.name);
//     // Add further file handling here
//   }

//   function handlePanFile(event) {
//     const file = event.target.files[0];
//     if (file) {
//         setPanFileName(file.name);
//     }
//   }


//   return (
//     <div className="border-l border-[#D8E1F8] ml-[55px] flex flex-col justify-between pl-[47px] w-full pt-[45px] pr-[45px] ">
//       <div className="pb-[45px]">
//         <p className="text-[Segoe UI] text-[#00227A] text-[24px] leading-[32px] font-[400]">
//           KYC Documents
//         </p>
//       </div>
//       <div className="flex flex-col gap-[27px]">
//         <div>
//           <p className="text-[#00227A] text-[16px] font-[500] text-[Noto Sans] pb-[6px]">
//             Aadhaar Card
//           </p>
//           <button onClick={aadharUpload} 
//           className="rounded-[5px] py-[14px] px-[80px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
//            {aadharFileName}
//           </button>
//           <input type="file" ref={aadharInputRef} style={{ display: 'none' }}  accept="image/png, image/jpeg, image/svg+xml"  onChange={handleAadharFile} />
//         </div>
//         <div>
//           <p className="text-[#00227A] text-[16px] font-[500] text-[Noto Sans] pb-[6px]">
//             PAN Card
//           </p>
//           <button onClick={panUpload}  className="rounded-[5px] py-[14px] px-[80px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
//           {panFileName}
//           </button>
//           <input type="file" ref={panInputRef}  style={{ display: 'none' }}   accept="image/png, image/jpeg, image/svg+xml"  onChange={handlePanFile} />
//         </div>
//       </div>

//       <div className="flex flex-row-reverse pr-[30px] pt-[45px] pb-[105px] text-[18px] ">
//         <button className="border py-[16px] px-[55px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]">
//           Save
//         </button>

//         <button
//           onClick={prev}
//           className="border py-[16px] px-[41px] bg-[#0041E9] rounded-[10px] text-[white] ml-[18px]"
//         >
//           Previous
//         </button>
//         <button className="border border-[#00227A] py-[16px] px-[48px] rounded-[10px] text-[#00227A]">
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default KycDocuments;




import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import loadingimg from "../../../assets/loading.gif"

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


const KycDocuments = ({ prev , formData }) => {
  const [isLoading, setIsLoading] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const aadharInputRef = useRef(null);
  const panInputRef = useRef(null);


  const [aadharFileName, setAadharFileName] = useState("Upload ");
  const [panFileName, setPanFileName] = useState("Upload ");


  function aadharUpload() {
    aadharInputRef.current.click(); // Programmatically trigger the file input click
  }
  function panUpload() {
    panInputRef.current.click();
  }

  function handleAadharFile(event) {
    const file = event.target.files[0];
    if (file) {
      setAadharFileName(file.name);
    }
    console.log("Aadhar card uploaded: ", file.name);
    // Add further file handling here
  }

  function handlePanFile(event) {
    const file = event.target.files[0];
    if (file) {
      setPanFileName(file.name);
    }
  }

  const onSubmit = async (entry) => {

    setIsLoading(true); // Start loading
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
        zip_code: [entry.zip_code ? entry.zip_code : formData.zip_code[0]],
        institute_name: [entry.institute_name ? entry.institute_name : formData.institute_name[0]],
        roll_no: [entry.roll_no ? entry.roll_no : formData.roll_no[0]],
        student_institute_email: [entry.student_institute_email ? entry.student_institute_email : formData.student_institute_email[0]],
        phone_no: [entry.phone_no ? entry.phone_no : formData.phone_no[0]],
        cgpa: [entry.cgpa ? entry.cgpa : formData.cgpa[0]],
        graduation_year: [entry.graduation_year ? entry.graduation_year : formData.graduation_year[0]],
        program_enrolled: [entry.program_enrolled ? entry.program_enrolled : formData.program_enrolled],
        public_key: [entry.public_key[0] ? entry.public_key[0] : formData.public_key],
        aadhar_no: [entry.aadhar_no ? entry.aadhar_no : formData.aadhar_no[0]],
        mother_name: [entry.mother_name ? entry.mother_name : formData.mother_name[0]],
        father_name: [entry.father_name ? entry.father_name : formData.father_name[0]],
        certificates: [entry.certificates ? entry.certificates : formData.certificates[0]],
        result: [entry.result ? entry.result : formData.result[0]],
        status: [entry.status ? entry.status : formData.status[0]],
        kyc: [Array.from(formData.kyc)]
      }

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
    }finally {
      setIsLoading(false); // End loading
  }


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
              Aadhaar Card
            </p>
            <button onClick={aadharUpload}
              className="rounded-[5px] py-[14px] px-[80px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
              {aadharFileName}
            </button>
            <input type="file" ref={aadharInputRef} style={{ display: 'none' }} accept="image/png, image/jpeg, image/svg+xml" onChange={handleAadharFile} />
          </div>
          <div>
            <p className="text-[#00227A] text-[16px] font-[500] text-[Noto Sans] pb-[6px]">
              PAN Card
            </p>
            <button onClick={panUpload} className="rounded-[5px] py-[14px] px-[80px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
              {panFileName}
            </button>
            <input type="file" ref={panInputRef} style={{ display: 'none' }} accept="image/png, image/jpeg, image/svg+xml" onChange={handlePanFile} />
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

