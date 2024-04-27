// import React from "react";
// const StudentRegisteredByInstitute = ({ }) => {


//   const entries = [
//     {
//       name: "Student 1",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//     {
//       name: "Student 2",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//     {
//       name: "Student 3",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//     {
//       name: "Student 4",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//     {
//       name: "Student 1",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//     {
//       name: "Student 2",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//     {
//       name: "Student 3",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//     {
//       name: "Student 4",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//     {
//       name: "Student 1",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//     {
//       name: "Student 2",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//     {
//       name: "Student 3",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//     {
//       name: "Student 4",
//       id: "STU-12345",
//       email: "email@email.com",
//       phone_number: "1234567890",
//       rollnum: "RN-123",
//     },
//   ];

//   return (
//     <div className="w-full self-center">
//       <div className="grid grid-cols-[repeat(5,1fr)_50px]  py-[15px] mt-[27px] rounded-md bg-[#D9EBFF] font-[600] font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
//         <div className="flex justify-center col-span-1">NAME</div>
//         <div className="flex justify-center col-span-1">STUDENT ID</div>
//         <div className="flex justify-center col-span-1">EMAIL</div>
//         <div className="flex justify-center col-span-1">PHONE NUMBER</div>
//         <div className="flex justify-center col-span-1">ROLL NUMBER</div>

//         {/* Adjust width as needed */}
//       </div>
//       {entries.map((entry, index) => (
//         <Card key={index} entry={entry} />
//       ))}

//       <div className="  flex justify-between pt-[50px] pb-[100px]">
//         <button className="text-[white] rounded-[10px] bg-[#0041E9] px-[34px] py-[16px]">
//           Register New Student
//         </button>
//         <p>Page 1 of 100</p>
//       </div>
//     </div>
//   );
// };
// export default StudentRegisteredByInstitute;

// const Card = ({ entry }) => {
//   return (
//     <div className=" grid grid-cols-[repeat(5,1fr)_50px] mt-4 h-[48px] rounded-[5px]  bg-[#EEF6FF] pt-[7px]">
//       <div className=" flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
//         <div className="flex rounded-[5px]">
//           <img className="w-[33px] h-[33px] " src="/student.svg" alt="" />
//           <p className="pt-[6px] pl-[13px]">
//             {entry.first_name} {entry.last_name}
//           </p>
//         </div>
//       </div>
//       <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
//         {entry.student_id.substr(0, 6)}
//       </p>
//       <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
//         {entry.personal_email}
//       </p>
//       <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px] ">
//         {entry.phone_no}
//       </p>
//       <p className="flex justify-center pb-[6px] items-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] ">
//         {entry.roll_no}
//       </p>
//       <button className=" mb-[8px] ">
//         <svg
//           width="30"
//           height="30"
//           viewBox="0 0 30 30"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g clipPath="url(#clip0_654_3254)">
//             <path
//               d="M15 16.4062C15.7767 16.4062 16.4062 15.7767 16.4062 15C16.4062 14.2233 15.7767 13.5938 15 13.5938C14.2233 13.5938 13.5938 14.2233 13.5938 15C13.5938 15.7767 14.2233 16.4062 15 16.4062Z"
//               fill="#00227A"
//             />
//             <path
//               d="M22.5 16.4062C23.2767 16.4062 23.9062 15.7767 23.9062 15C23.9062 14.2233 23.2767 13.5938 22.5 13.5938C21.7233 13.5938 21.0938 14.2233 21.0938 15C21.0938 15.7767 21.7233 16.4062 22.5 16.4062Z"
//               fill="#00227A"
//             />
//             <path
//               d="M7.5 16.4062C8.27665 16.4062 8.90625 15.7767 8.90625 15C8.90625 14.2233 8.27665 13.5938 7.5 13.5938C6.72335 13.5938 6.09375 14.2233 6.09375 15C6.09375 15.7767 6.72335 16.4062 7.5 16.4062Z"
//               fill="#00227A"
//             />
//           </g>
//           <defs>
//             <clipPath id="clip0_654_3254">
//               <rect width="30" height="30" fill="white" />
//             </clipPath>
//           </defs>
//         </svg>
//       </button>
//     </div>
//   );
// };

import React from "react";

const StudentRegisteredByInstitute = () => {
  const entries = [
    { first_name: "Student", last_name: "1", student_id: "STU-12345", personal_email: "email@email.com", phone_no: "1234567890", roll_no: "RN-123" },
    { first_name: "Student", last_name: "2", student_id: "STU-67890", personal_email: "email2@email.com", phone_no: "1234567891", roll_no: "RN-456" },
    { first_name: "Student", last_name: "3", student_id: "STU-13579", personal_email: "email3@email.com", phone_no: "1234567892", roll_no: "RN-789" },
    { first_name: "Student", last_name: "4", student_id: "STU-24680", personal_email: "email4@email.com", phone_no: "1234567893", roll_no: "RN-012" }
  ];

  return (
    <div className="w-full self-center">
      <div className="grid grid-cols-5 py-4 mt-7 rounded-md bg-blue-100 font-semibold text-blue-800 text-lg leading-6">
        <div className="flex justify-center">NAME</div>
        <div className="flex justify-center">STUDENT ID</div>
        <div className="flex justify-center">EMAIL</div>
        <div className="flex justify-center">PHONE NUMBER</div>
        <div className="flex justify-center">ROLL NUMBER</div>
      </div>
      {entries.map((entry, index) => (
        <Card key={index} entry={entry} />
      ))}

      <div className="flex justify-between pt-12 pb-24">
        <button className="text-white rounded-lg bg-blue-500 px-8 py-4">
          Register New Student
        </button>
        <p>Page 1 of 1</p>
      </div>
    </div>
  );
};

const Card = ({ entry }) => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-4 h-12 rounded-lg bg-blue-200 p-2">
      <div className="flex items-center justify-center">{entry.first_name} {entry.last_name}</div>
      <div className="flex items-center justify-center">{entry.student_id.substr(0, 6)}</div>
      <div className="flex items-center justify-center">{entry.personal_email}</div>
      <div className="flex items-center justify-center">{entry.phone_no}</div>
      <div className="flex items-center justify-center">{entry.roll_no}</div>
    </div>
  );
};

export default StudentRegisteredByInstitute;
