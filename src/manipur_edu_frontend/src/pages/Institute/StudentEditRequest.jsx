// import React from "react";
// // import img from "../../assets/student.png";
// import { Outlet, useNavigate } from "react-router-dom";
// // import VerifyEditDetails from "../../components/institute pages/VerifyEditDetails";

// const StudentEditRequest = () => {
//   const entries = [
//     {
//       name: "Student 1",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Verified",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 2",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Verified",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 3",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Verified",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 4",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Verified",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 1",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Pending",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 2",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Pending",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 3",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Pending",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 4",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Pending",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 1",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Rejected",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 2",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Rejected",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 3",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Rejected",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 4",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Rejected",
//       details: "Click to View/Verify",
//     },
//   ];

//   return (
//     <div className="w-full self-center">
//       <div className="  grid grid-cols-5 py-[15px]  mt-[27px] rounded-md bg-[#D9EBFF] font-[600]  font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
//         <div className="flex justify-center">NAME</div>
//         <div className="flex justify-center">STUDENT ID</div>
//         <div className="flex justify-center">ROLL NUMBER</div>
//         <div className="flex justify-center">STATUS</div>
//         <div className="flex justify-center">STUDENT DETAILS</div>
//       </div>
//       {entries.map((entry, index) => (
//         <Card key={index} entry={entry} />
//       ))}

//       <div className="  flex flex-row-reverse pt-[50px] pb-[100px]">
//         Page 1 of 100
//       </div>
//     </div>
//   );
// };

// export default StudentEditRequest;
// const Card = ({ entry }) => {
//   return (
//     <div className=" grid grid-cols-5 mt-4 h-[48px] rounded-[5px]  bg-[#EEF6FF] pt-[7px]">
//       <div className=" flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
//         <div className="flex rounded-[5px]">
//           <img className="w-[33px] h-[33px] " src="student.png" alt="" />
//           <p className="pt-[6px] pl-[13px]">{entry.name}</p>
//         </div>
//       </div>
//       <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
//         {entry.id}
//       </p>
//       <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
//         {entry.rollnum}
//       </p>
//       <p
//         className={`flex justify-center font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]`}
//         style={{
//           color:
//             entry.status === "Verified"
//               ? "#13BC24"
//               : entry.status === "Pending"
//               ? "#C3A846"
//               : "#B26868",
//         }}
//       >
//         {entry.status}
//       </p>

//       <button className="pt-[7px] font-[700] underline flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] ">
//         {entry.details}
//       </button>
//     </div>
//   );
// };

// // ----------------------------
// import React from "react";
// // import img from "../../assets/student.png";
// import { Outlet, useNavigate } from "react-router-dom";
// // import VerifyEditDetails from "../../components/institute pages/VerifyEditDetails";
// import { useAuth } from "../../utils/useAuthClient";
// // import { useDispatch, useSelector } from "react-redux";


// const StudentEditRequest = () => {

//   const { actor } = useAuth();

//   // let isDropDownOpen = useSelector(
//   //   (state) => state.profileOpenCloseDropDownReducer
//   // );

//   let data = actor.get_all_students_edit_req([])
//   console.log( "is data needed" , data)


//  async function getData () {
//   let data = await actor.get_all_students_edit_req([])
//   console.log( "is data needed" ,data)

//   getUpdated(data) ; 
//  }

//  async function getUpdated(data) {
//   console.log("passed data is " , data) ; 
//     data.map( async function(element){
//     let updated =   await actor.get_student_profile_updated(element)
//     console.log("value of updated data is ", element)

//     let student = await actor.get_student_details(element) ; 
//     console.log("student detials  is " , student) ; 
//   })
//  }
//  getData() ; 


//   const entries = [
//     {
//       name: "Student 1",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Verified",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 2",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Verified",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 3",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Verified",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 4",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Verified",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 1",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Pending",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 2",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Pending",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 3",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Pending",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 4",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Pending",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 1",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Rejected",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 2",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Rejected",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 3",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Rejected",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Student 4",
//       id: "STU-12345",
//       rollnum: "RN-123",
//       status: "Rejected",
//       details: "Click to View/Verify",
//     },
//   ];


//   return (
//     <div className="w-full self-center">
//       <div className="  grid grid-cols-5 py-[15px]  mt-[27px] rounded-md bg-[#D9EBFF] font-[600]  font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
//         <div className="flex justify-center">NAME</div>
//         <div className="flex justify-center">STUDENT ID</div>
//         <div className="flex justify-center">ROLL NUMBER</div>
//         <div className="flex justify-center">STATUS</div>
//         <div className="flex justify-center">STUDENT DETAILS</div>
//       </div>
//       {entries.map((entry, index) => (
//         <Card key={index} entry={entry} />
//       ))}

//       <div className="  flex flex-row-reverse pt-[50px] pb-[100px]">
//         Page 1 of 100
//       </div>
//     </div>
//   );
// };

// export default StudentEditRequest;
// const Card = ({ entry }) => {
//   return (
//     <div className=" grid grid-cols-5 mt-4 h-[48px] rounded-[5px]  bg-[#EEF6FF] pt-[7px]">
//       <div className=" flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
//         <div className="flex rounded-[5px]">
//           <img className="w-[33px] h-[33px] " src="student.png" alt="" />
//           <p className="pt-[6px] pl-[13px]">{entry.name}</p>
//         </div>
//       </div>
//       <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
//         {entry.id}
//       </p>
//       <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
//         {entry.rollnum}
//       </p>
//       <p
//         className={`flex justify-center font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]`}
//         style={{
//           color:
//             entry.status === "Verified"
//               ? "#13BC24"
//               : entry.status === "Pending"
//               ? "#C3A846"
//               : "#B26868",
//         }}
//       >
//         {entry.status}
//       </p>

//       <button className="pt-[7px] font-[700] underline flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] ">
//         {entry.details}
//       </button>
//       {/* verify edit details page link krna h sent by shivansh sir on whatsapp*/}
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuthClient";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";

import { useDispatch , useSelector} from 'react-redux';
import { setStudentPrincipalId } from "../../../Redux/Action/studentIdAction";


const StudentEditRequest = () => {
  const { actor } = useAuth();
  const [students, setStudents] = useState([]);


  let allStudentsWithPids = useSelector(
    (state) => state.allStudentsReducer
  );
  console.log("allStudentsWithPids are : " , allStudentsWithPids); 


  useEffect(() => {
    const getData = async () => {
      try {
        let data = await actor.get_all_students_edit_req([]);
        console.log("Initial data fetched:", data);
        getUpdated(data);
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
      }
    };

    const getUpdated = async (data) => {
      try {
        const updates = await Promise.all(data.map(async (element) => {
          const updated = await actor.get_student_profile_updated(element);
          console.log("Updated data for element:", element, updated);
          return await actor.get_student_details(element);
        }));
        console.log("All student details:", updates);
        setStudents(updates.flat());  // Assuming each call returns an array of details
      } catch (error) {
        console.error("Failed to update data:", error);
      }
    };

    getData();
  }, []);  // Empty dependency array to ensure this runs only once


  
  return (
    <div className="w-full self-center">
      <div className="grid grid-cols-5 py-[15px] mt-[27px] rounded-md bg-[#D9EBFF] font-[600] font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
        <div className="flex justify-center">NAME</div>
        <div className="flex justify-center">STUDENT ID</div>
        <div className="flex justify-center">ROLL NUMBER</div>
        <div className="flex justify-center">STATUS</div>
        <div className="flex justify-center">STUDENT DETAILS</div>
      </div>
      {students.length > 0 ? (
        students.map((student, index) => (
          <Card key={index} entry={student} />
        ))
      ) : (
        <p>No data available</p>
      )}
      <div className="flex flex-row-reverse pt-[50px] pb-[100px]">
        Page 1 of 100
      </div>
    </div>
  );
};

const Card = ({ entry }) => {
  const studentId =  entry.student_id[0];
  
  const navigate = useNavigate();
  const dispatch = useDispatch() ; 

  function handleVerify(studentId) {
    console.log("studentId is : ",  entry.student_id[0])
    dispatch(setStudentPrincipalId( entry.student_id[0]));
    console.log("dispatch successfull")
    navigate('/verify-edit-detials');
  }

  return (
    <div className="grid grid-cols-5 mt-4 h-[48px] rounded-[5px] bg-[#EEF6FF] pt-[7px]">
      <div className="flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
        <div className="flex rounded-[5px]">
          <img className="w-[33px] h-[33px]" src="student.png" alt="" />
          <p className="pt-[6px] pl-[13px]">{entry.first_name + ' ' + entry.last_name}</p>
        </div>
      </div>
      <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {studentId.slice(0,6)}
      </p>
      <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {entry.roll_no}
      </p>
      <p className={`flex justify-center font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]`}
         style={{ color: entry.status === "approved" ? "#13BC24" : "#B26868" }}>
        {entry.status}
      </p>
      <button className="pt-[7px] font-[700] underline flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px]  " onClick={handleVerify}>
        Click to View/Verify
      </button>
    </div>
  );
};

export default StudentEditRequest;
