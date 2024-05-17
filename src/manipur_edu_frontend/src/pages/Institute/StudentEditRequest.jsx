import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuthClient";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStudentPrincipalId } from "../../../Redux/Action/studentIdAction";
import NoDataComponent from "./NoData";
const StudentEditRequest = () => {
  const { actor } = useAuth();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await actor.get_all_students_edit_req([]);
        console.log("Initial data fetched:", data);
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, [actor]);


  return (
    <div className="w-full self-center">
      <div className="grid grid-cols-5 py-[15px] mt-[27px] rounded-md bg-[#D9EBFF] font-[600] font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
        <div className="flex justify-center">NAME</div>
        <div className="flex justify-center">STUDENT ID</div>
        <div className="flex justify-center">ROLL NUMBER</div>
        <div className="flex justify-center">STATUS</div>
        <div className="flex justify-center">DETAILS</div>
      </div>
      {students.length > 0 ? (
        students.map((student, index) => (
          <Card key={index} student={student[1]} studentId={student[0]} />
        ))
      ) : (
        <NoDataComponent
          message="No Edit Requests yet!"
          imageSrc="NoData.png"
        />
      )}
      <div className="flex flex-row-reverse pt-[50px] pb-[100px]">
        Page 1 of 100
      </div>
    </div>
  );
};
const Card = ({ student, studentId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleVerify = () => {
    dispatch(setStudentPrincipalId(studentId));
    navigate("/verify-edit-detials");
  };

  return (
    <div className="grid grid-cols-5 mt-4 h-[48px] rounded-[5px] bg-[#EEF6FF] pt-[7px]">
      <div className="flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
        <div className="flex rounded-[5px]">
          <img className="w-[33px] h-[33px]" src="student.png" alt="" />
          <p className="pt-[6px] pl-[13px]">
            {student.first_name[0] + " " + student.last_name[0]}
          </p>
        </div>
      </div>
      <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {studentId.slice(0, 6)}
      </p>
      <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {student.roll_no[0]}
      </p>
      <p className={`flex justify-center font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]`}
        //  style={{ color: student.status[0] === "approved" ? "#13BC24" : "#B26868" }}>
         style={{ color: student.status[0] != "approved" ? "#13BC24" : "#B26868" }}>


        {/* {student.status[0]} */}
        {"pending"}
      </p>
      <button
        className="bg-blue-500 text-white font-segoe-ui text-11 rounded-lg ml-10"
        style={{
          backgroundColor: "#355389",
          height: "40px",
          width: "110px",
        }}
      >
        {"View/Verify"}
      </button>
    </div>
  );
};

export default StudentEditRequest;
