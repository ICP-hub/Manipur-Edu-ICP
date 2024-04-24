import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../utils/useAuthClient";

const StudentEditRequestRejectApproval = () => {
  const { actor } = useAuth();
  const [student, setStudent] = useState(null);
  const[studentUpdatedData , setStudentUpdatedData] = useState(null) ; 
  const studentId = useSelector((state) => state.studentId.studentPrincipalId);
  // const someData = useSelector((state) => state.studentId.approve_student_profile_update)

  // async function someData() {
  //   const data = await actor.get_student_profile_updated(studentId) ; 
  //   console.log("data is : " , data) ; 
  // }
  // someData() ; 

  console.log("Component rendered with studentId:", studentId);
  useEffect(() => {
    async function getData() {
      console.log("sid is : ",studentId)

      const data = await actor.get_student_profile_updated(studentId) ; 
      console.log("data is : " , data) ; 
      setStudentUpdatedData(data[0]) ; 


      const response = await actor.get_student_details(studentId);
      console.log("Fetched student data:", response);
      setStudent(response[0]); // Assuming response is an array with the student object at the first index

      

    }
    getData();
  }, [actor, studentId]); // Dependency array to prevent unnecessary re-renders

  if (!student) {
    return <div>Loading...</div>; // Or any other loading state
  }

  async function handleApprove() {
    const data = await actor.approve_student_profile_update(studentId) ; 
    // console.log("data is : " , data) ; 
    console.log("Profile updated.")
    
  }


  return (
    // <Background>
    <div className="px-[63px] py-[25px] flex flex-col gap-[25px] m-[60px] mt-[50px] bg-white">
      <div className="flex justify-between ">
        <div className="font-[600] font-[Segoe UI] text-4xl text-[#2D6BE4]">
           Student Profile 
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
                {/* Name */}
                {student.first_name} {student.last_name}
              </p>
              <p className="font-[400] font-[Segoe UI] text-[18px] text-[#8CA3C3] leading-[27px]">
              {student.roll_no}
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
      <div className="w-full flex gap-[48px]">
        <div className="w-[50%] flex flex-col gap-[27px]">
          <div className="text-[#8CA3C3] text-[20px] font-[400] text-[Segoe UI]">
            Previous
          </div>


          <div className="px-[46px] py-[28px] flex items-center gap-[29px] rounded-[20px] border border-[#D8E1F8]">
            <img className="w-[100px] h-[100px]" src="student.jpg" alt="" />
            <div className="gap-[6px]">
              <p className="text-[#00227A] text-[25px] font-[Noto Sans] font-[400]">
              {student.first_name} {student.last_name}
              </p>
              <p className="text-[#687EB5] text-[15px] font-[Noto Sans] font-[500]">
              {student.roll_no}
              </p>
            </div>
          </div>
          <div className="  flex flex-col rounded-[20px] border border-[#D8E1F8]">
            <div className="border-b border-[#D8E1F8]">
              <p className="px-[46px] py-[19px] text-[#00227A] text-[18px] font-[Noto Sans] font-[500]">
                Student Personal Details
              </p>
            </div>
            <div className="py-[30px] px-[46px] flex flex-col gap-[17px]">
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  DOB
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {/* 12-3-2003 */}
                  {student.date_of_birth}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Gender
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                {student.gender}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Personal Email
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {student.personal_email}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Phone Number
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {student.phone_no}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Personal Email
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {student.personal_email}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Address
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {student.address}<br />{student.city} {student.zip_code}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  State
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {student.state}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Zip Code
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                 {student.zip_code}
                </p>
              </div>
            </div>
          </div>
          <div className="  flex flex-col rounded-[20px] border border-[#D8E1F8]">
            <div className="border-b border-[#D8E1F8]">
              <p className="px-[46px] py-[19px] text-[#00227A] text-[18px] font-[Noto Sans] font-[500]">
                Parents Details
              </p>
            </div>
            <div className="py-[30px] px-[46px] flex flex-col gap-[17px]">
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Mother Name
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {student.mother_name}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Father Name
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {student.father_name}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Personal Email
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  email@email.com
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Phone Number
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {student.phone_no}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Personal Email
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  email@email.com
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Address
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {student.address} <br /> {student.city} {student.zip_code}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  State
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {student.city}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Zip Code
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {student.zip_code}
                </p>
              </div>
            </div>
          </div>
          <div className="  flex flex-col rounded-[20px] border border-[#D8E1F8]">
            <div className="flex justify-between border-b border-[#D8E1F8]">
              <p className="px-[46px] py-[19px] text-[#00227A] text-[18px] font-[Noto Sans] font-[500]">
                KYC Documents
              </p>
              <div className="mr-[39px]">
                <button className="flex">
                  <svg
                    width="1.25rem"
                    height="1.25rem"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2768 15.683H3.72232C3.46489 15.683 3.24707 15.9008 3.24707 16.1582C3.24707 16.4156 3.46489 16.6335 3.72232 16.6335H16.2768C16.5342 16.6335 16.752 16.4156 16.752 16.1582C16.752 15.9008 16.5342 15.683 16.2768 15.683ZM3.26687 11.5246L3.24707 13.7622C3.24707 13.881 3.28667 14.0196 3.38568 14.0988C3.48469 14.178 3.60351 14.2374 3.72232 14.2374L5.95994 14.2176C6.07875 14.2176 6.19757 14.1582 6.29658 14.079L13.9797 6.39585C14.158 6.21763 14.158 5.9008 13.9797 5.72258L11.7619 3.50476C11.5837 3.32654 11.2669 3.32654 11.0887 3.50476L9.5441 5.04931L3.40549 11.1879C3.30648 11.2869 3.26687 11.4057 3.26687 11.5246ZM12.9698 6.05921L12.0986 6.9305L10.554 5.38595L11.4253 4.51466L12.9698 6.05921ZM4.21737 11.7226L9.88073 6.05921L11.4253 7.60377L5.76192 13.2671H4.21737V11.7226Z"
                      fill="#00227A"
                    />
                  </svg>

                  <p className="font-[Noto Sans] text-[#00227A] text-[0.9375rem] leading-[1.3125rem] font-[400]">
                    Edit
                  </p>
                </button>
              </div>
            </div>
            <div className="flex py-[20px] px-[36px] gap-[56px]">
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300] pb-[20px]">
                  Aadhaar Card
                </p>
                <button className="rounded-[5px] py-[14px] px-[36px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
                  Aadhaar Card
                </button>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300] pb-[20px]">
                  PAN Card
                </p>
                <button className="rounded-[5px] py-[14px] px-[50px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
                  PAN Card
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] flex flex-col gap-[27px]">
          <div className="text-[#8CA3C3] text-[20px] font-[400] text-[Segoe UI]">
            Edited by Institute
          </div>
          <div className="px-[46px] py-[28px] flex items-center gap-[29px] rounded-[20px] border border-[#D8E1F8]">
            <img className="w-[100px] h-[100px]" src="student.jpg" alt="" />
            <div className="gap-[6px]">
              <p className="text-[#00227A] text-[25px] font-[Noto Sans] font-[400]">
              {studentUpdatedData.first_name} {studentUpdatedData.last_name}
              </p>
              <p className="text-[#687EB5] text-[15px] font-[Noto Sans] font-[500]">
                Student #: {studentUpdatedData.roll_no}
              </p>
            </div>
          </div>
          <div className="  flex flex-col rounded-[20px] border border-[#D8E1F8]">
            <div className="border-b border-[#D8E1F8]">
              <p className="px-[46px] py-[19px] text-[#00227A] text-[18px] font-[Noto Sans] font-[500]">
                Student Personal Details
              </p>
            </div>
            <div className="py-[30px] px-[46px] flex flex-col gap-[17px]">
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  DOB
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.date_of_birth}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Gender
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.gender}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Personal Email
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.personal_email}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Phone Number
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                 {studentUpdatedData.phone_no}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Personal Email
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.personal_email}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Address
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.address}, <br />  {studentUpdatedData.city} {studentUpdatedData.zip_code}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  State
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.state}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Zip Code
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.zip_code}
                </p>
              </div>
            </div>
          </div>
          <div className="  flex flex-col rounded-[20px] border border-[#D8E1F8]">
            <div className="border-b border-[#D8E1F8]">
              <p className="px-[46px] py-[19px] text-[#00227A] text-[18px] font-[Noto Sans] font-[500]">
                Parents Details
              </p>
            </div>
            <div className="py-[30px] px-[46px] flex flex-col gap-[17px]">
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Mother Name
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.mother_name}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Father Name
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.father_name}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Personal Email
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                 {studentUpdatedData.personal_email}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Phone Number
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.phone_no}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Personal Email
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.personal_email}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Address
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.address}, <br /> {studentUpdatedData.city} {studentUpdatedData.zip_code}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  State
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.state}
                </p>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300]">
                  Zip Code
                </p>
                <p className="text-[#00227A] text-[18px] font-[Noto Sans] font-[400]">
                  {studentUpdatedData.zip_code}
                </p>
              </div>
            </div>
          </div>
          <div className="  flex flex-col rounded-[20px] border border-[#D8E1F8]">
            <div className="flex justify-between border-b border-[#D8E1F8]">
              <p className="px-[46px] py-[19px] text-[#00227A] text-[18px] font-[Noto Sans] font-[500]">
                KYC Documents
              </p>
              <div className="mr-[39px]">
                <button className="flex">
                  <svg
                    width="1.25rem"
                    height="1.25rem"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2768 15.683H3.72232C3.46489 15.683 3.24707 15.9008 3.24707 16.1582C3.24707 16.4156 3.46489 16.6335 3.72232 16.6335H16.2768C16.5342 16.6335 16.752 16.4156 16.752 16.1582C16.752 15.9008 16.5342 15.683 16.2768 15.683ZM3.26687 11.5246L3.24707 13.7622C3.24707 13.881 3.28667 14.0196 3.38568 14.0988C3.48469 14.178 3.60351 14.2374 3.72232 14.2374L5.95994 14.2176C6.07875 14.2176 6.19757 14.1582 6.29658 14.079L13.9797 6.39585C14.158 6.21763 14.158 5.9008 13.9797 5.72258L11.7619 3.50476C11.5837 3.32654 11.2669 3.32654 11.0887 3.50476L9.5441 5.04931L3.40549 11.1879C3.30648 11.2869 3.26687 11.4057 3.26687 11.5246ZM12.9698 6.05921L12.0986 6.9305L10.554 5.38595L11.4253 4.51466L12.9698 6.05921ZM4.21737 11.7226L9.88073 6.05921L11.4253 7.60377L5.76192 13.2671H4.21737V11.7226Z"
                      fill="#00227A"
                    />
                  </svg>

                  <p className="font-[Noto Sans] text-[#00227A] text-[0.9375rem] leading-[1.3125rem] font-[400]">
                    Edit
                  </p>
                </button>
              </div>
            </div>
            <div className="flex py-[20px] px-[36px] gap-[56px]">
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300] pb-[20px]">
                  Aadhaar Card
                </p>
                <button className="rounded-[5px] py-[14px] px-[36px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
                  Aadhaar Card
                </button>
              </div>
              <div>
                <p className="text-[#8CA3C3] text-[16px] font-[Noto Sans] font-[300] pb-[20px]">
                  PAN Card
                </p>
                <button className="rounded-[5px] py-[14px] px-[50px] border border-[#00227A] text-[#00227A] text-[16px] font-[500] text-[Noto Sans]">
                  PAN Card
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-[16px] mb-[50px]">
            <div>
              <button className="bg-[#0041E9] text-[white] py-[13px] px-[34px] rounded-[10px] text-[18px] font-[400]" onClick={handleApprove}>
                Approve
              </button>
            </div>
            <div>
              <button className="bg-[#DF0C0C] text-[white] py-[13px] px-[45px] rounded-[10px] text-[18px] font-[400]">
                Reject
              </button>
            </div>
            <div>
              <button
                // onClick={onBack}
                className="border border-[#00227A] text-[#00227A] py-[13px] px-[50px] rounded-[10px] text-[18px] font-[400]"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Background>
  );
};
export default StudentEditRequestRejectApproval;
