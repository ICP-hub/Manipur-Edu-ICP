import React, { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import ScholarshipTab from "./ScholarshipTab";
import ScholarshipApplication from "./ScholarshipApplication";
import InstitutesTab from "./InstitutesTab";
import ScholarshipDetails from "./ScholarshipDetails";
import Calendar from "react-calendar";
import { useSelector } from "react-redux";
import { useAuth } from "../../utils/useAuthClient";
import "react-calendar/dist/Calendar.css";
import "../../../assets/main.css";

const DashboardTab = () => {
  const [scholarshipPosted, setScholarshipPosted] = useState(0);
  const [view, setView] = useState("default");
  const isXlScreen = useMediaQuery("(min-width: 1440px)");
  const [value, onChange] = useState(new Date());
  const scholarships = useSelector((state) => state.allScholarshipsReducer);
  let entries = useSelector((state) => state.allInstitutesReducer) || [];
  let studentEntries = useSelector((state) => state.studentDetailsReducer);
  console.log("enteries is  : " , entries)
  console.log("entries size" , entries?.length )

  console.log(studentEntries)
  let registeredStudent = studentEntries.length;
  // if(registeredStudent > 1000) registeredStudent = registeredStudent/1000  + "K" ; 
  // let entries;

  const { actor, authClient } = useAuth();
  const getEntries = async () => {
    const allScholarships = await actor.get_all_scholarship();
    console.log("allScholarship are below s", allScholarships);
    console.log("allScholarship are below s", allScholarships.length);

    setScholarshipPosted(allScholarships.length)
  }
  getEntries();



  // if (isXlScreen) {
  //   entries = [
  //     {
  //       name: "Student 1",
  //       status: "New",
  //     },
  //     {
  //       name: "Student 1",
  //       status: "Rejected",
  //     },
  //   ];
  // } else {
  //   entries = [
  //     {
  //       name: "Student 1",
  //       status: "New",
  //     },
  //     {
  //       name: "Student 1",
  //       status: "Approved",
  //     },
  //     {
  //       name: "Student 1",
  //       status: "Rejected",
  //     },
  //   ];
  // }
  return (
    <div>
      {view === "allScholarshipApplications" ? (
        <ScholarshipTab />
      ) : view === "scholarshipApplicaton" ? (
        <ScholarshipApplication onBack={() => setView("default")} />
      ) : view === "allVerificationRequest" ? (
        <InstitutesTab />
      ) : view === "viewScholarship" ? (
        <ScholarshipDetails />
      ) : (
        <div className="flex">
          <div className=" w-[100%] lg1:w-[72%]  flex flex-col">
            <div className="dxs:hidden md:flex justify-between px-14 pt-[25px]">
              <p className="font-[600] font-[Segoe UI] text-4xl text-[#2D6BE4]">
                Dashboard
              </p>
              <div className="flex gap-[23px] pt-[5px] ">
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
            </div>
            <div className="md:hidden flex flex-col mt-[110px] px-9">
              <p className="font-[400] text-[17px] text-[#687EB5]">
                Hello, Name!
              </p>
              <p className="text-[#00227A] font-[600] text-[26px] leading-[35px] mt-[10px]">
                There are 6 new <br /> Applications today
              </p>
            </div>
            <div className="flex justify-between pt-10 px-9 ">
              <div className="rounded-[20px] bg-[#E7F4FF] flex w-[48%] md2:w-[30%] h-[131px] p-[10px] ">
                <div className="font-[400] font-[Mukta] text-[#00227A] text-[40px] dxl:text-5xl flex items-center pr-[10px] ">
                  {entries?.length}
                </div>
                <div className="font-[350] font-[Segoe UI] text-[#00227A] text-[13px] xxs1:text-lg flex flex-col justify-center ">
                  <p>
                    Institutes <br /> Registered{" "}
                  </p>
                </div>
              </div>
              <div className="rounded-[20px] bg-[#F3E7FF] flex w-[48%] md2:w-[30%] h-[131px] p-[10px]">
                <div className="font-[400] font-[Mukta] text-[#00227A] text-[40px] dxl:text-5xl  flex items-center pr-[10px] ">
                  {registeredStudent}
                </div>
                <div className="font-[350] font-[Segoe UI] text-[#00227A] text-[13px] xxs1:text-lg flex items-center ">
                  Students <br /> Registered
                </div>
              </div>
              <div className="dxs:hidden rounded-[20px] bg-[#FFEAE7] md2:flex w-[30%] h-[131px] p-[10px]">
                <div className="font-[400] font-[Mukta] text-[#00227A] text-[40px] dxl:text-5xl flex items-center pr-[10px] ">
                  {/* 80 */}
                  {scholarshipPosted}
                </div>
                <div className="font-[350] font-[Segoe UI] text-[#00227A] text-[13px] xxs1:text-lg flex items-center ">
                  Scholarships <br /> Posted
                </div>
              </div>
            </div>
            <div className="md2:hidden flex justify-between pt-5 px-9 ">
              <div className="rounded-[20px] bg-[#F3E7FF] flex w-[48%]  h-[131px] p-[10px]">
                <div className="font-[400] font-[Mukta] text-[#00227A] text-[40px] dxl:text-5xl  flex items-center pr-[10px] ">
                  15K
                </div>
                <div className="font-[350] font-[Segoe UI] text-[#00227A] text-[13px] xxs1:text-lg flex items-center ">
                  Students <br /> Registered
                </div>
              </div>
              <div className="rounded-[20px] bg-[#FFEAE7] flex w-[48%] h-[131px] p-[10px]">
                <div className="font-[400] font-[Mukta] text-[#00227A] text-[40px] dxl:text-5xl flex items-center pr-[10px] ">
                  80
                </div>
                <div className="font-[350] font-[Segoe UI] text-[#00227A] text-[13px] xxs1:text-lg flex items-center ">
                  Scholarships <br /> Posted
                </div>
              </div>
            </div>
            <div className=" md:hidden">
              <div className="flex justify-between pr-[36px] pt-[25px]">
                <p className="font-[Segoe UI] font-[600] text-xl text-[#2D6BE4] px-9 pb-[21px]">
                  New Scholarship Applications
                </p>
                <div className="pt-[8px]">
                  <button
                    onClick={() => setView("allScholarshipApplications")}
                    className="text-[#2D6BE4] text-[15px] leading-[20px] font-[Segoe UI] font-[400] "
                  >
                    View All 1
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-[14px] px-[36px] pb-[28px]">
                {entries.map((entry, index) => (
                  <Card key={index} entry={entry} setView={setView} />
                ))}
              </div>
            </div>
            {/* <div className="flex flex-col">
              <p className="font-[Segoe UI] font-[600] text-xl text-[#2D6BE4] px-9 pt-[20px] pb-[21px]">
                Ongoing Scholarships
              </p>
              <div className="  md1:flex md1:justify-between px-9">
                <div className="flex rounded-[10px]  mb-[20px] dxs:w-full sm1:w-[80%] md1:mb-[0px] md1:w-[48%]">
                  <div className="w-[35%] bg-[#86ABF3] rounded-tl-[10px] rounded-bl-[10px]">
                    <img src="scholarship.jpg" class="w-48 h-38 mt-8"></img>
                  </div>
                  <div className="w-[65%] bg-[#E7F4FF] p-[13px] rounded-tr-[10px] rounded-br-[10px]">
                    <p className="font-[Segoe UI] font-[600] text-[16px] text-[#00227A] leading-[21px] pb-[10px]">
                      Scholarship Name
                    </p>
                    <p className="font-[Segoe UI] font-[400] text-[13px] text-[#4E6DBB] leading-[17px] pb-[5px]">
                      Offered by: Manipur Edu
                    </p>
                    <p className="font-[Segoe UI] font-[400] text-[13px] text-[#4E6DBB] leading-[17px] pb-[16px]">
                      Total Students Registered: 200
                    </p>
                    <div className="flex flex-row-reverse">
                      <button
                        onClick={() => setView("viewScholarship")}
                        className="bg-[#89C1FF] text-[#00227A] text-[13px] rounded-[5px] px-[22px] py-[5px]"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex rounded-[10px]  mb-[20px] dxs:w-full sm1:w-[80%] md1:mb-[0px] md1:w-[48%]">
                  <div className="w-[35%] bg-[#86ABF3] rounded-tl-[10px] rounded-bl-[10px]">
                    <img src="scholarship.jpg" class="w-48 h-38 mt-8"></img>
                  </div>
                  <div className="w-[65%] bg-[#E7F4FF] p-[13px] rounded-tr-[10px] rounded-br-[10px]">
                    <p className="font-[Segoe UI] font-[600] text-[16px] text-[#00227A] leading-[21px] pb-[10px]">
                      Scholarship Name
                    </p>
                    <p className="font-[Segoe UI] font-[400] text-[13px] text-[#4E6DBB] leading-[17px] pb-[5px]">
                      Offered by: Manipur Edu
                    </p>
                    <p className="font-[Segoe UI] font-[400] text-[13px] text-[#4E6DBB] leading-[17px] pb-[16px]">
                      Total Students Registered: 200
                    </p>
                    <div className="flex flex-row-reverse">
                      <button
                        onClick={() => setView("viewScholarship")}
                        className="bg-[#89C1FF] text-[#00227A] text-[13px] rounded-[5px] px-[22px] py-[5px]"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}





            <div className="flex flex-col">
              <p className="font-[Segoe UI] font-[600] text-xl text-[#2D6BE4] px-9 pt-[20px] pb-[21px]">
                Ongoing Scholarships
              </p>
              <div className="md1:flex md1:justify-between px-9">
                {scholarships && scholarships.map((scholarship, index) => (
                  <div key={index} className="flex rounded-[10px] mb-[20px] dxs:w-full sm1:w-[80%] md1:mb-[0px] md1:w-[48%]">
                    <div className="w-[35%] bg-[#86ABF3] rounded-tl-[10px] rounded-bl-[10px]">
                      {/* <img src={scholarship.image} className="w-48 h-38 mt-8" alt="scholarship" /> */}
                      <img src="scholarship.jpg" class="w-48 h-38 mt-8" ></img>
                    </div>
                    <div className="w-[65%] bg-[#E7F4FF] p-[13px] rounded-tr-[10px] rounded-br-[10px]">
                      <p className="font-[Segoe UI] font-[600] text-[16px] text-[#00227A] leading-[21px] pb-[10px]">
                        {scholarship?.[1].name ?? 'N/A'}
                      </p>
                      <p className="font-[Segoe UI] font-[400] text-[13px] text-[#4E6DBB] leading-[17px] pb-[5px]">
                        Offered by: {scholarship?.[1].institute ?? 'N/A'}
                      </p>
                      <p className="font-[Segoe UI] font-[400] text-[13px] text-[#4E6DBB] leading-[17px] pb-[16px]">
                        Total Students Registered: {scholarship?.[1].students ?? 'N/A'}
                      </p>
                      <div className="flex flex-row-reverse">
                        <button
                          onClick={() => setView("viewScholarship")}
                          className="bg-[#89C1FF] text-[#00227A] text-[13px] rounded-[5px] px-[22px] py-[5px]"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
















            <div className="dxs:hidden md:block">
              <div className="flex justify-between pr-[36px] pt-[25px]">
                <p className="font-[Segoe UI] font-[600] text-xl text-[#2D6BE4] px-9 pb-[21px]">
                  New Scholarship Applications
                </p>
                <div className="pt-[8px]">
                  <button
                    onClick={() => setView("allScholarshipApplications")}
                    className="text-[#2D6BE4] text-[15px] leading-[20px] font-[Segoe UI] font-[400] "
                  >
                    View All 2
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-[14px] px-[36px] pb-[28px]">
                {entries.map((entry, index) => (
                  <Card key={index} entry={entry} setView={setView} />
                ))}
              </div>
            </div>
            <div className="px-[38px] lg1:hidden flex flex-col">
              <div className="flex justify-between">
                <p className="text-[#2D6BE4] text-[18px] font-[Segoe UI] font-[600]">
                  Verification Requests
                </p>
                <button
                  onClick={() => setView("allVerificationRequest")}
                  className="text-[#2D6BE4] text-[12px] leading-[20px] font-[Segoe UI] font-[400] pt-[2px] "
                >
                  View All 3
                </button>
              </div>
              <div className="py-[39px]  flex flex-col gap-[29px]">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      className="w-[50px] h-[50px]"
                      src="student.jpg"
                      alt=""
                    />
                    <div className="pl-[27px]">
                      <p className="text-[#00227A] text-[15px] font-[Segoe UI] font-[600] leading-[24px]">
                        Name
                      </p>
                      <p className="text-[#8CA3C3] text-[15px] font-[Segoe UI] font-[400] leading-[24px]">
                        Institute
                      </p>
                    </div>
                  </div>
                  <div className="pt-[12px]">
                    <button>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="5" cy="5" r="5" fill="#6392EE" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      className="w-[50px] h-[50px]"
                      src="student.jpg"
                      alt=""
                    />
                    <div className="pl-[27px]">
                      <p className="text-[#00227A] text-[15px] font-[Segoe UI] font-[600] leading-[24px]">
                        Name
                      </p>
                      <p className="text-[#8CA3C3] text-[15px] font-[Segoe UI] font-[400] leading-[24px]">
                        Institute
                      </p>
                    </div>
                  </div>
                  <div className="pt-[12px]">
                    <button>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="5" cy="5" r="5" fill="#6392EE" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      className="w-[50px] h-[50px]"
                      src="student.jpg"
                      alt=""
                    />
                    <div className="pl-[27px]">
                      <p className="text-[#00227A] text-[15px] font-[Segoe UI] font-[600] leading-[24px]">
                        Name
                      </p>
                      <p className="text-[#8CA3C3] text-[15px] font-[Segoe UI] font-[400] leading-[24px]">
                        Institute
                      </p>
                    </div>
                  </div>
                  <div className="pt-[12px]">
                    <button>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="5" cy="5" r="5" fill="#6392EE" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F3F6FF] dxs:hidden lg1:w-[28%] rounded-tr-[20px] rounded-br-[20px] lg1:flex flex-col justify-between">
            <div className="pt-[25px] flex flex-col px-2 py-4 pb-[5px]">
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
              <p className="text-[#2D6BE4] text-[18px] font-[Segoe UI] font-[600] flex pt-[38px] px-[5px]">
                My Schedule
              </p>
              <div className="calendar-wrapper">
                <div>
                  <Calendar
                    className="calendar-container rounded-lg"
                    style={{
                      border: "1px solid black",
                    }}
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </div>
            </div>
            <div className="px-[15px] flex flex-col">
              <div className="flex justify-between">
                <p className="text-[#2D6BE4] text-[15px] font-[Segoe UI] font-[600]">
                  Verification Requests
                </p>
                <button
                  onClick={() => setView("allVerificationRequest")}
                  className="text-[#2D6BE4] text-[12px] leading-[20px] font-[Segoe UI] font-[400] pt-[2px] "
                >
                  View All 4
                </button>
              </div>
              <div className="py-[39px] flex flex-col gap-[29px]">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      className="w-[50px] h-[50px]"
                      src="student.jpg"
                      alt=""
                    />
                    <div className="pl-[27px]">
                      <p className="text-[#00227A] text-[15px] font-[Segoe UI] font-[600] leading-[24px]">
                        Name
                      </p>
                      <p className="text-[#8CA3C3] text-[15px] font-[Segoe UI] font-[400] leading-[24px]">
                        Institute
                      </p>
                    </div>
                  </div>
                  <div className="pt-[12px]">
                    <button>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="5" cy="5" r="5" fill="#6392EE" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      className="w-[50px] h-[50px]"
                      src="student.jpg"
                      alt=""
                    />
                    <div className="pl-[27px]">
                      <p className="text-[#00227A] text-[15px] font-[Segoe UI] font-[600] leading-[24px]">
                        Name
                      </p>
                      <p className="text-[#8CA3C3] text-[15px] font-[Segoe UI] font-[400] leading-[24px]">
                        Institute
                      </p>
                    </div>
                  </div>
                  <div className="pt-[12px]">
                    <button>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="5" cy="5" r="5" fill="#6392EE" />
                      </svg>
                    </button>
                  </div>
                </div> */}
                {/* <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      className="w-[50px] h-[50px]"
                      src="student.jpg"
                      alt=""
                    />
                    <div className="pl-[27px]">
                      <p className="text-[#00227A] text-[15px] font-[Segoe UI] font-[600] leading-[24px]">
                        Name
                      </p>
                      <p className="text-[#8CA3C3] text-[15px] font-[Segoe UI] font-[400] leading-[24px]">
                        Institute
                      </p>
                    </div>
                  </div>
                  <div className="pt-[12px]">
                    <button>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="5" cy="5" r="5" fill="#6392EE" />
                      </svg>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DashboardTab;

const Card = ({ entry, setView }) => {
  return (
    <div className="rounded-[10px] px-[29px] bg-[#E7F4FF] flex justify-between py-[5px]">
      <div className="flex items-center">
        <img className="w-[40px] h-[40px]" src="student.jpg" alt="" />
        <p className="font-[Segoe UI] font-[400] text-[15px] text-[#00227A] leading-[20px] pl-[14px]">
          {entry.name}
        </p>
        <p
          className={`rounded-[30px] ml-[10px] py-[4px] px-[9px] font-[Segoe UI] font-[400] text-[10px] 
    ${entry.status === "New" ? "bg-[#97C9F7] text-[#0069CB]" : ""} 
    ${entry.status === "Pending" ? " bg-[#F7D697] text-[#D27825]" : ""} 
    ${entry.status === "Approved" ? "bg-[#BFE988] text-[#548E0A]" : ""} 
    ${entry.status === "Rejected" ? "bg-[#F797C5] text-[#C90161]" : ""}`}
        >
          {entry.status}
        </p>
      </div>
      <div className="flex items-center">
        {" "}
        <button onClick={() => setView("scholarshipApplicaton")}>
          <svg
            width="8"
            height="15"
            viewBox="0 0 8 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1080_2154)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.266071 14.7814C0.560617 15.0739 1.03698 15.0739 1.3308 14.7814L7.55843 8.58338C7.69784 8.44676 7.80884 8.28233 7.88469 8.10008C7.96054 7.91783 7.99965 7.72158 7.99965 7.52326C7.99965 7.32493 7.96054 7.12868 7.88469 6.94643C7.80884 6.76419 7.69784 6.59975 7.55843 6.46313L1.28571 0.219382C1.14335 0.0798422 0.954821 0.00141186 0.758418 1.88767e-05C0.562016 -0.00137411 0.372462 0.0743747 0.228253 0.211882C0.156814 0.279787 0.0996541 0.362093 0.0603118 0.453703C0.0209695 0.545314 0.000282825 0.644278 -0.000467132 0.744468C-0.00121709 0.844657 0.0179856 0.943939 0.0559519 1.03616C0.0939181 1.12839 0.14984 1.2116 0.220253 1.28063L5.96134 6.99338C6.0311 7.0617 6.08665 7.14394 6.12461 7.2351C6.16257 7.32625 6.18215 7.42442 6.18215 7.52363C6.18215 7.62284 6.16257 7.72101 6.12461 7.81217C6.08665 7.90333 6.0311 7.98557 5.96134 8.05388L0.266071 13.7216C0.196333 13.7899 0.140797 13.8721 0.102847 13.9632C0.0648958 14.0542 0.0453243 14.1524 0.0453243 14.2515C0.0453243 14.3507 0.0648958 14.4488 0.102847 14.5399C0.140797 14.631 0.196333 14.7131 0.266071 14.7814Z"
                fill="#00227A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1080_2154">
                <rect width="8" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};
