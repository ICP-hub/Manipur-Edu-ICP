import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "../../../../../node_modules/react-router-dom/dist/index";
import FAQ from "../../components/Faq";
import { useAuth } from "../../utils/useAuthClient";
import { useDispatch } from "react-redux";
import {
  getStudentDetails,
  getInstituteDetails,
} from "../../../Redux/Action/index";

function Dashboard() {
  const { actor, userType, authClient } = useAuth();
  const principal_id = authClient.getIdentity().getPrincipal().toString();

  console.log(userType);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const checkLogin = async () => {
      if (userType) {
        const loggedIn = await actor.login(userType);
        setIsLoggedIn(loggedIn);
      }
    };

    checkLogin();
  }, [userType, actor]);

  React.useEffect(() => {
    const fetchInstituteDetails = async () => {
      const response = await actor.get_institute_details([principal_id]);
      console.log("institute response", response);
      const data = {
        instituteId: principal_id,
        details: response,
      };
      console.log("data", data);
      dispatch(getInstituteDetails(data));
    };
    const fetchStudentDetails = async () => {
      const response = await actor.get_student_details(principal_id);
      // const data = {
      //   studentId: principal_id,
      //   details: response
      // };
      console.log("student response", response);
      // console.log("data", data);
      dispatch(getStudentDetails(response));
    };

    if (userType == "student") {
      fetchStudentDetails();
    } else if (userType == "institute") {
      fetchInstituteDetails();
    }
  }, [userType]);

  return (
    <div>
      <div className="overflow-hidden">
        <Navbar />
        <div className="sm1:m-4 mb-0 relative rounded-3xl sm1:bg-gradient-to-r from-[#E5F1FF] to-[#E5F1FF00] ">
          <div className="absolute right-0 -top-[10%] transform translate-x-1/3 w-[80vw] h-[1000px] rounded-full bg-gradient-to-b from-[#cfe5ff] to-[#DCECFF00] sm1:block hidden"></div>

          <div className="relative">
            <div className="sm1:px-[4%] sm1:lg1:px-[5%]">
              <div className="flex bg-[#86ABF3] sm1:bg-inherit">
                <div className="sm1:w-[50%] sm1:pt-[200px] pt-[37px]">
                  {/* mobile-view */}
                  <div className="sm1:hidden block">
                    {/* wrapper */}
                    <div className="flex flex-row items-center mx-6">
                      <h2 className="text-[27px] font-bold mb-4 text-[#00227A]">
                        Welcome to Manipur Edu
                      </h2>
                      <div className="flex justify-center">
                        <div className="h-[221px] w-[180px]">
                          <img src="mainPage.svg" alt="main image" />
                        </div>
                      </div>
                    </div>
                    <img className="relative" src="wave.svg" alt="wave-design" />
                    <h6 className="text-[19.07px] font-[Noto Sans] text-[#13375B] px-6 font-light text-center bg-white">
                      We provide a user-friendly platform for students to
                      conveniently retrieve academic results and certificates
                      and apply for scholarships.
                    </h6>
                    <div className="bg-white pt-4 flex justify-center">
                    {userType === "institute" && isLoggedIn ? (
                      <Link to="/institute-student">
                        <button className="bg-[#00227A] whitespace-nowrap py-2 px-4 text-white rounded-md  text-md">
                          View Scholarship Applications
                        </button>
                      </Link>
                    ) : userType === "student" && isLoggedIn ? (
                      <Link to="/login">
                        <button className="bg-[#00227A] whitespace-nowrap py-2 px-4 text-white rounded-md  text-md">
                          Explore Scholarships
                        </button>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <button className="bg-[#00227A] whitespace-nowrap py-2 px-4 text-white rounded-md text-md">
                          Get started
                        </button>
                      </Link>
                    )}
                    </div>
                  </div>

                  {/* web-view */}
                  <div className="sm1:block hidden">
                    <h2 className="text-6xl font-bold  leading-[79px] mb-4 text-[#00227A]">
                      Welcome to Manipur Edu
                    </h2>
                    <h6 className="leading-[27.24px] text-[#13375B] mb-4 font-semibold">
                      We provide a user-friendly platform for students to
                      conveniently retrieve academic results and certificates
                      and apply for scholarships.
                    </h6>
                    {userType === "institute" && isLoggedIn ? (
                      <Link to="/institute-student">
                        <button className="bg-[#0041E9] whitespace-nowrap py-4 px-8 text-white rounded-xl font-medium text-xl">
                          View Scholarship Applications
                        </button>
                      </Link>
                    ) : userType === "student" && isLoggedIn ? (
                      <Link to="/login">
                        <button className="bg-[#0041E9] whitespace-nowrap py-4 px-8 text-white rounded-xl font-medium text-xl">
                          Explore Scholarships
                        </button>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <button className="bg-[#0041E9] whitespace-nowrap py-4 px-8 text-white rounded-xl font-medium text-xl">
                          Get started
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
                {/* image-web-view */}
                <div className="sm1:block hidden">
                  <div className="w-[50%] sm1:flex justify-center pt-20 [90px]">
                    <div className="w-[80%]">
                      <img src="mainPage.svg" alt="main image" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Cards */}

              <div className="text-center my-7">
                <h2 className="sm1:text-[#13375B] text-[#00227A] sm1:text-[40px] text-[30px] font-bold">
                  What can you do here
                </h2>
                <div className="sm1:grid sm1:grid-cols-1 md:grid-cols-3 gap-4 justify-items-center sm1:mt-16 p-4 flex flex-no-wrap overflow-y-auto items-center no-scrollbar">
                  <Card
                    stepNumber="1"
                    title="Create your profile"
                    description="Let us get to know you with details around your background, interests, and academic performance!"
                  >
                    <div className="hidden sm1:block">
                      <div className="flex top-0 left-0 absolute items-center justify-center w-12 h-12 bg-[#0041E9] rounded-full">
                        <span className="text-3xl font-medium text-white">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="w-[100px] h-[100px] sm1:w-auto sm1:h-auto">
                      <img src="Create.svg" alt="acadmic image" />
                    </div>
                  </Card>
                  <Card
                    stepNumber="2"
                    title="Get academic results and certificates"
                    description="We provide a user-friendly platform for students to retrieve and access their academic results and certificates hassle-free."
                  >
                    <div className="hidden sm1:block">
                      <div className="flex top-0 left-0 absolute items-center justify-center w-12 h-12 bg-[#0041E9] rounded-full">
                        <span className="text-3xl font-medium text-white">
                          2
                        </span>
                      </div>
                    </div>
                    <div className="w-[100px] h-[100px] sm1:h-[164px] sm1:w-[239px]">
                      <img
                        src="acadmic.svg"
                        alt="acadmic image"
                        className="sm1:pb-6"
                      />
                    </div>
                  </Card>
                  <Card
                    stepNumber="3"
                    title="Apply for scholarships"
                    description="Browse and apply for scholarships that match your qualifications and aspirations and keep track of them with ease."
                  >
                    <div className="hidden sm1:block">
                      <div className="flex top-0 left-0 absolute items-center justify-center w-12 h-12 bg-[#0041E9] rounded-full">
                        <span className="text-3xl font-medium text-white">
                          3
                        </span>
                      </div>
                    </div>
                    <div className="w-[100px] h-[100px] sm1:w-auto sm1:h-auto">
                      <img src="scholar.svg" alt="acadmic image" />
                    </div>
                  </Card>
                </div>
              </div>

              {/* scholarships Part */}

              <div>
                <div className="sm1:w-[50%] p-8">
                  <h2 className="sm1:text-[#13375B] text-[#00227A] sm1:text-5xl text-[30px] font-bold">
                    Uncover the right scholarships
                    <span className="sm1:text-[#0041E9] text-[#575EDD] font-medium ">
                      {" "}
                      for you
                    </span>
                  </h2>
                </div>
                <div className="flex p-5 sm1:flex-row flex-col mb-7 sm1:mb-0">
                  <div className="p-10 sm1:w-[50%] flex justify-center w-full">
                    <img
                      src="scholarShip.svg"
                      className="w-fit flex-shrink-0"
                    />
                  </div>
                  {/* steps-web-tablet */}
                  <div className="hidden sm1:block w-[50%]">
                    <div className="flex flex-col justify-evenly">
                      <div className="bg-[#DFEEFF] my-2 rounded-xl ml-2 shadow-sm p-4">
                        <h4 className="text-xl text-[#13375B] font-semibold p-3">
                          Create your profile
                        </h4>
                        <p className="text-lg text-[#00227A] font-normal p-3 pt-0">
                          After signing up, you'll customize your profile by
                          answering a few questions.
                        </p>
                      </div>
                      <div className="bg-[#DFEEFF] my-2 rounded-xl ml-2 shadow-sm p-4">
                        <h4 className="text-xl text-[#13375B] font-semibold p-3">
                          Create your profile
                        </h4>
                        <p className="text-lg text-[#00227A] font-normal p-3 pt-0">
                          After signing up, you'll customize your profile by
                          answering a few questions.
                        </p>
                      </div>
                      <div className="bg-[#DFEEFF] my-2 rounded-xl ml-2 shadow-sm p-4">
                        <h4 className="text-xl text-[#13375B] font-semibold p-3">
                          Create your profile
                        </h4>
                        <p className="text-lg text-[#00227A] font-normal p-3 pt-0">
                          After signing up, you'll customize your profile by
                          answering a few questions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* steps-mobile */}

                  <div class="-my-6 block sm1:hidden mx-6">
                    <div class="relative pl-8 sm:pl-32 py-6 group">
                      <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#7D8FBD] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-6 after:h-6 after:bg-[#7D8FBD] after:border-4 after:box-content after:border-[#7D8FBD] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div class="text-[25px] font-bold text-[#00227A] mt-1">
                          Create your profile
                        </div>
                      </div>

                      <div class="text-[#00227A] text-[16px]">
                        After signing up, you'll customize your profile by
                        answering a few questions.
                      </div>
                    </div>

                    <div class="relative pl-8 sm:pl-32 py-6 group">
                      <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#7D8FBD] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-6 after:h-6 after:bg-[#7D8FBD] after:border-4 after:box-content after:border-[#7D8FBD] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div class="text-[25px] font-bold text-[#00227A] mt-1">
                          Get instant scholarship matches
                        </div>
                      </div>

                      <div class="text-[#00227A] text-[16px]">
                        Using your unique profile, you'll get a list of
                        scholarships you qualify for based upon your strengths,
                        interests, student activities and skills.
                      </div>
                    </div>

                    <div class="relative pl-8 sm:pl-32 py-6 group">
                      <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-6 after:h-6 after:bg-[#7D8FBD] after:border-4 after:box-content after:border-[#7D8FBD] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div class="text-[25px] font-bold text-[#00227A] mt-1">
                          Apply. Get money for college!
                        </div>
                      </div>

                      <div class="text-[#00227A] text-[16px]">
                        Using your unique profile, you'll get a list of
                        scholarships you qualify for based upon your strengths,
                        interests, student activities and skills.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* potential-section */}

            <div className="font-[Noto Sans]">
              <div className="bg-[#D9EAFF] sm1:mt-10 sm1:py-5 sm1:pb-[100px] sm1:px-[4%] lg1:px-[5%] flex flex-col items-center justify-center p-6">
                <h2 className="text-[#13375B] sm1:text-4xl text-[27px] font-bold sm1:pt-8">
                  Unlock Your Potential: Explore Scholarships!
                </h2>
                <p className="text-[#00227A] text-[27px] text-center sm1:text-xl font-normal py-8 hidden sm1:block">
                  Our platform offers access to thousands of carefully-reviewed
                  scholarships matched to you.
                </p>
                <p className="text-[#00227A] text-[16px] font-normal px-auto py-8 block sm1:hidden">
                  Our platform offers 100% free access to thousands of
                  carefully-reviewed scholarships matched to you.
                </p>
                {userType === "institute" && isLoggedIn ? (
                  <Link to="/institute-student">
                    <button className="bg-[#0041E9] rounded-lg py-4 px-9 text-white text-xl font-medium">
                      Post Scholarship
                    </button>
                  </Link>
                ) : userType === "student" && isLoggedIn ? (
                  <button className="bg-[#0041E9] rounded-lg py-4 px-9 text-white text-xl font-medium">
                    View your Scholarship Applications
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="sm1:bg-[#0041E9] bg-[#00227A] rounded-lg py-2 px-5  sm1:py-4 sm:1:px-9 text-white sm1:text-xl sm1:font-medium">
                      <p className="hidden sm1:block">Sign up</p>
                      <p className="block sm1:hidden">
                        View your Scholarship Applications
                      </p>
                    </button>
                  </Link>
                )}
              </div>
              {/* scholarship-criteria section */}
              <div className="sm1:bg-gradient-to-r from-[#E5F1FF00] to-[#E5F1FF]">
                <div className="relative -top-[5.25rem] flex justify-center sm1:bg-[#E5F1FF] sm1:rounded-tr-[6rem] sm1:pt-16">
                  <div className="sm1:bg-[#E5F1FF] w-full mt-10 flex py-5 px-[4%] lg1:px-[5%]">
                    <div className="hidden sm1:block w-[50%]">
                      <img src="critira.svg" alt="image" className="w-full" />
                    </div>
                    <div className="sm1:w-[50%] sm1:bg-[#B8D8FF] text-left pl-[25px] sm1:pl-16 pt-16 whitespace-nowrap shadow-sm sm1:rounded-tr-[6rem]">
                      <h1 className="sm1:text-5xl text-[27px] text-[#13375B] font-bold">
                        How you match
                      </h1>
                      <p className="text-[#00227A] font-semibold text-[20px] sm1:text-xl pt-3">
                        Provider Scholarship Criteria
                      </p>
                      <ul className="text-[#224293] text-[16px] sm1:text-lg font-semibold pt-2">
                        <li className="flex py-2 items-center">
                          <span className="pr-2">
                            <img
                              src="tick.svg"
                              className="w-[16px] h-[16px] sm1:w-auto sm1:h-auto"
                            />
                          </span>
                          GPA
                        </li>
                        <li className="flex py-2 items-center">
                          <span className="pr-2">
                            <img
                              src="tick.svg"
                              className="w-[16px] h-[16px] sm1:w-auto sm1:h-auto"
                            />
                          </span>
                          Major
                        </li>
                        <li className="flex py-2 items-center">
                          <span className="pr-2">
                            <img
                              src="tick.svg"
                              className="w-[16px] h-[16px] sm1:w-auto sm1:h-auto"
                            />
                          </span>
                          Apply year
                        </li>
                        <li className="flex py-2 items-center">
                          <span className="pr-2">
                            <img
                              src="tick.svg"
                              className="w-[16px] h-[16px] sm1:w-auto sm1:h-auto"
                            />
                          </span>
                          College
                        </li>
                        <li className="flex py-2 items-center">
                          <span className="pr-2">
                            <img
                              src="tick.svg"
                              className="w-[16px] h-[16px] sm1:w-auto sm1:h-auto"
                            />
                          </span>
                          Extra-curricular
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="px-[4%] lg1:px-[5%]">
                  <FAQ />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
