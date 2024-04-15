import React, { useState } from "react";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import StudentDetails from "../../pages/Admin/StudentDetails";
//mychanges
import { useAuth } from "../../utils/useAuthClient";
import Loader from "../../loader/Loader";

const StudentsTab = () => {
  const [view, setView] = useState("default");
  const onView = () => setView("studentdetails");
  //mychanges
  const { actor } = useAuth();
  const [entries, setEntries] = useState([]);
  const getStudents = async () => {
    const studentIdsResponse = await actor.get_students_withdetails();
    console.log("studentIdsResponse", studentIdsResponse);
    setEntries(studentIdsResponse);
  };
  const {
    data: result,
    isLoading: isLoadingEntries,
    error: errorEntries,
  } = useQuery("dataEntries", getStudents);
  if (!isLoadingEntries && !errorEntries) {
    console.log("entries", entries);
  }

  // let entries = useSelector((state) => state.allStudentsReducer)
  // console.log('entries: ',entries)
  // const entries = [
  //   {
  //     name: "Student Name",
  //     id: "STU-12345",
  //     email: "email@email.com",
  //     roll_num: "RN-123",
  //   },
  //   {
  //     name: "Student Name",
  //     id: "STU-12345",
  //     email: "email@email.com",
  //     roll_num: "RN-123",
  //   },

  //   {
  //     name: "Student Name",
  //     id: "STU-12345",
  //     email: "email@email.com",
  //     roll_num: "RN-123",
  //   },

  //   {
  //     name: "Student Name",
  //     id: "STU-12345",
  //     email: "email@email.com",
  //     roll_num: "RN-123",
  //   },
  //   {
  //     name: "Student Name",
  //     id: "STU-12345",
  //     email: "email@email.com",
  //     roll_num: "RN-123",
  //   },
  //   {
  //     name: "Student Name",
  //     id: "STU-12345",
  //     email: "email@email.com",
  //     roll_num: "RN-123",
  //   },
  // ];
  return (
    <div>
      {isLoadingEntries && <Loader></Loader>}
      {view === "studentdetails" ? (
        <StudentDetails onBack={() => setView("default")} />
      ) : (
        <div className="py-[25px] px-[63px]">
          <div className="flex flex-col ">
            <div className="flex justify-between ">
              <div className="font-[600] font-[Segoe UI] text-4xl text-[#2D6BE4]">
                Students
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.2703 20.7949L24.2348 24.7493"
                        stroke="#00227A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.4462 23.625C15.2484 23.966 14.9645 24.249 14.623 24.4457C14.2814 24.6425 13.8941 24.746 13.5 24.746C13.1058 24.746 12.7185 24.6425 12.377 24.4457C12.0354 24.249 11.7515 23.966 11.5537 23.625"
                        stroke="#00227A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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

            <div className="bg-white  flex mt-[60px] ">
              <div className="w-[70%]  flex "></div>
              <div className="w-[15%] border-r border-[#BED0FF]  flex justify-between">
                <svg
                  className="mt-[7px] ml-[7px]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66667 4.1666H4.62083C4.72234 4.74601 5.0249 5.27107 5.4753 5.64943C5.9257 6.02779 6.4951 6.23521 7.08333 6.23521C7.67157 6.23521 8.24096 6.02779 8.69137 5.64943C9.14177 5.27107 9.44433 4.74601 9.54583 4.1666H18.3333C18.4438 4.1666 18.5498 4.1227 18.628 4.04456C18.7061 3.96642 18.75 3.86044 18.75 3.74993C18.75 3.63942 18.7061 3.53344 18.628 3.4553C18.5498 3.37716 18.4438 3.33326 18.3333 3.33326H9.54583C9.44433 2.75385 9.14177 2.22879 8.69137 1.85043C8.24096 1.47207 7.67157 1.26465 7.08333 1.26465C6.4951 1.26465 5.9257 1.47207 5.4753 1.85043C5.0249 2.22879 4.72234 2.75385 4.62083 3.33326H1.66667C1.55616 3.33326 1.45018 3.37716 1.37204 3.4553C1.2939 3.53344 1.25 3.63942 1.25 3.74993C1.25 3.86044 1.2939 3.96642 1.37204 4.04456C1.45018 4.1227 1.55616 4.1666 1.66667 4.1666ZM7.08333 2.08326C7.41297 2.08326 7.7352 2.18101 8.00928 2.36415C8.28337 2.54728 8.49699 2.80758 8.62313 3.11212C8.74928 3.41667 8.78228 3.75178 8.71798 4.07508C8.65367 4.39838 8.49493 4.69535 8.26184 4.92844C8.02876 5.16153 7.73179 5.32026 7.40848 5.38457C7.08518 5.44888 6.75007 5.41587 6.44553 5.28973C6.14098 5.16358 5.88069 4.94996 5.69755 4.67588C5.51441 4.4018 5.41667 4.07956 5.41667 3.74993C5.41667 3.3079 5.59226 2.88398 5.90482 2.57142C6.21738 2.25886 6.64131 2.08326 7.08333 2.08326ZM18.3333 9.58326H15.3792C15.2777 9.00385 14.9751 8.47879 14.5247 8.10043C14.0743 7.72207 13.5049 7.51465 12.9167 7.51465C12.3284 7.51465 11.759 7.72207 11.3086 8.10043C10.8582 8.47879 10.5557 9.00385 10.4542 9.58326H1.66667C1.55616 9.58326 1.45018 9.62716 1.37204 9.7053C1.2939 9.78344 1.25 9.88942 1.25 9.99993C1.25 10.1104 1.2939 10.2164 1.37204 10.2946C1.45018 10.3727 1.55616 10.4166 1.66667 10.4166H10.4542C10.5557 10.996 10.8582 11.5211 11.3086 11.8994C11.759 12.2778 12.3284 12.4852 12.9167 12.4852C13.5049 12.4852 14.0743 12.2778 14.5247 11.8994C14.9751 11.5211 15.2777 10.996 15.3792 10.4166H18.3333C18.4438 10.4166 18.5498 10.3727 18.628 10.2946C18.7061 10.2164 18.75 10.1104 18.75 9.99993C18.75 9.88942 18.7061 9.78344 18.628 9.7053C18.5498 9.62716 18.4438 9.58326 18.3333 9.58326ZM12.9167 11.6666C12.587 11.6666 12.2648 11.5688 11.9907 11.3857C11.7166 11.2026 11.503 10.9423 11.3769 10.6377C11.2507 10.3332 11.2177 9.99808 11.282 9.67478C11.3463 9.35148 11.5051 9.05451 11.7382 8.82142C11.9712 8.58833 12.2682 8.4296 12.5915 8.36529C12.9148 8.30098 13.2499 8.33398 13.5545 8.46013C13.859 8.58628 14.1193 8.7999 14.3024 9.07398C14.4856 9.34806 14.5833 9.67029 14.5833 9.99993C14.5833 10.442 14.4077 10.8659 14.0952 11.1784C13.7826 11.491 13.3587 11.6666 12.9167 11.6666ZM18.3333 15.8333H9.54583C9.44433 15.2539 9.14177 14.7288 8.69137 14.3504C8.24096 13.9721 7.67157 13.7646 7.08333 13.7646C6.4951 13.7646 5.9257 13.9721 5.4753 14.3504C5.0249 14.7288 4.72234 15.2539 4.62083 15.8333H1.66667C1.55616 15.8333 1.45018 15.8772 1.37204 15.9553C1.2939 16.0334 1.25 16.1394 1.25 16.2499C1.25 16.3604 1.2939 16.4664 1.37204 16.5446C1.45018 16.6227 1.55616 16.6666 1.66667 16.6666H4.62083C4.72234 17.246 5.0249 17.7711 5.4753 18.1494C5.9257 18.5278 6.4951 18.7352 7.08333 18.7352C7.67157 18.7352 8.24096 18.5278 8.69137 18.1494C9.14177 17.7711 9.44433 17.246 9.54583 16.6666H18.3333C18.4438 16.6666 18.5498 16.6227 18.628 16.5446C18.7061 16.4664 18.75 16.3604 18.75 16.2499C18.75 16.1394 18.7061 16.0334 18.628 15.9553C18.5498 15.8772 18.4438 15.8333 18.3333 15.8333ZM7.08333 17.9166C6.7537 17.9166 6.43147 17.8188 6.15738 17.6357C5.8833 17.4526 5.66968 17.1923 5.54353 16.8877C5.41739 16.5832 5.38438 16.2481 5.44869 15.9248C5.513 15.6015 5.67173 15.3045 5.90482 15.0714C6.13791 14.8383 6.43488 14.6796 6.75818 14.6153C7.08148 14.551 7.41659 14.584 7.72114 14.7101C8.02568 14.8363 8.28598 15.0499 8.46912 15.324C8.65225 15.5981 8.75 15.9203 8.75 16.2499C8.75 16.692 8.5744 17.1159 8.26184 17.4284C7.94928 17.741 7.52536 17.9166 7.08333 17.9166Z"
                    fill="#687DB2"
                  />
                </svg>{" "}
                <p
                  style={{ color: "rgba(104, 125, 178, 1)" }}
                  className="pt-[5px] pr-[30px]"
                >
                  Filter
                </p>
                <button>
                  <svg
                    className="mt-7px"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.14844 10.3125L7.92969 9.53125L12.5 14.1406L17.0703 9.53125L17.8516 10.3125L12.5 15.6641L7.14844 10.3125Z"
                      fill="#687DB2"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-[15%] flex ">
                <svg
                  className="mt-[7px] ml-[10px]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.80577 17.2966C13.9428 17.2966 17.2966 13.9428 17.2966 9.80577C17.2966 5.6687 13.9428 2.31494 9.80577 2.31494C5.6687 2.31494 2.31494 5.6687 2.31494 9.80577C2.31494 13.9428 5.6687 17.2966 9.80577 17.2966Z"
                    stroke="#687DB2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.0151 15.4043L17.9518 18.3335"
                    stroke="#687DB2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <input
                  className="pt-[5px] pl-[5px] pb-[5px] w-full ml-[7px] focus:outline-none"
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="border rounded-[10px] border-[#D9EBFF]">
              <div className="  grid grid-cols-[repeat(4,1fr)_45px] py-[15px]   font-[600]  font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
                <div className="flex justify-center">STUDENT NAME</div>
                <div className="flex justify-center">STUDENT ID</div>
                <div className="flex justify-center">ROLL NUMBER</div>
                <div className="flex justify-center">EMAIL</div>
              </div>
              {Array.isArray(entries) &&
                entries.map((entry, index) => (
                  <Card key={index} entry={entry} onView={onView} />
                ))}
              {/* {entries.map((entry, index) => (
                <Card key={index} entry={entry} onView={onView} />
              ))} */}
            </div>
            <div className="flex flex-row-reverse pt-[220px] ">
              Page 1 of 100
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default StudentsTab;
const Card = ({ entry, onView }) => {
  const studentName =
    entry?.[1].first_name?.[0] + " " + entry?.[1].last_name?.[0] ?? "N/A";
  const studentId = entry?.[1].student_id?.[0].substr(0, 6) ?? "N/A";
  const rollNo = entry?.[1].roll_no?.[0] ?? "N/A";

  const email = entry?.[1].personal_email?.[0] ?? "N/A";
  return (
    <div className=" grid grid-cols-[repeat(4,1fr)_45px] py-[15px] border-t border-[#D9EBFF]">
      <div className=" flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
        <div className="flex rounded-[5px]">
          <img className="w-[33px] h-[33px] " src="student.jpg" alt="" />
          <p className="pt-[6px] pl-[13px]">{studentName}</p>
        </div>
      </div>
      <p className="flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {studentId}
      </p>
      <p className="flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {rollNo}
      </p>
      <p className="flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px] ">
        {email}
      </p>
      <div className="flex gap-[8px]">
        <button onClick={onView}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99961 14.7992C5.73601 14.7992 3.59961 10.5336 3.59961 9.99922C3.59961 9.46482 5.73601 5.19922 9.99961 5.19922C14.2632 5.19922 16.3996 9.46482 16.3996 9.99922C16.3996 10.5336 14.2632 14.7992 9.99961 14.7992ZM4.40541 9.99922C4.55461 10.4922 6.39921 13.9992 9.99961 13.9992C13.6 13.9992 15.4446 10.4922 15.5938 9.99922C15.4446 9.50622 13.6 5.99922 9.99961 5.99922C6.39921 5.99922 4.55461 9.50622 4.40541 9.99922ZM9.99961 12.7992C8.45581 12.7992 7.19961 11.5432 7.19961 9.99922C7.19961 8.45522 8.45581 7.19922 9.99961 7.19922C11.5434 7.19922 12.7996 8.45522 12.7996 9.99922C12.7996 11.5432 11.5434 12.7992 9.99961 12.7992ZM9.99961 7.99922C8.89681 7.99922 7.99961 8.89642 7.99961 9.99922C7.99961 11.102 8.89681 11.9992 9.99961 11.9992C11.1024 11.9992 11.9996 11.102 11.9996 9.99922C11.9996 8.89642 11.1024 7.99922 9.99961 7.99922Z"
              fill="#00227A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
