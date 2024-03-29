import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "../../../../../node_modules/react-router-dom/dist/index";
import FAQ from "../../components/Faq";
import { useAuth } from "../../utils/useAuthClient";
import { useDispatch } from "react-redux";
import { getStudentDetails, getInstituteDetails } from "../../../Redux/Action/index";

function Dashboard() {

  const { actor, userType } = useAuth();

  console.log(userType)
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
      console.log('institute response', response);
      const data = {
        instituteId: principal_id,
        details: response
      };
      console.log("data", data);
      dispatch(getInstituteDetails(data));

    }
    const fetchStudentDetails = async () => {

      const response = await actor.get_student_details(principal_id);
      // const data = {
      //   studentId: principal_id,
      //   details: response
      // };
      console.log('student response', response);
      // console.log("data", data);
      dispatch(getStudentDetails(response));
    };

    if (userType == 'student') {
      fetchStudentDetails();

    }
    else if (userType == 'institute') {
      fetchInstituteDetails();
    }

  }, [userType])




  return (
    <div>
      <div className="overflow-hidden">
        <Navbar />
        <div className="m-4 mb-0 relative rounded-3xl bg-gradient-to-r from-[#E5F1FF] to-[#E5F1FF00] ">
          <div className="absolute right-0 -top-[10%] transform translate-x-1/3 w-[80vw] h-[1000px] rounded-full bg-gradient-to-b from-[#cfe5ff] to-[#DCECFF00]"></div>

          <div className="relative">
            <div className=" px-[4%] lg1:px-[5%]">
              <div className="flex">
                <div className="w-[50%] pt-[200px]">
                  <div>
                    <h2 className="text-6xl font-bold  leading-[79px] mb-4 text-[#00227A]">
                      Welcome to Manipur Edu
                    </h2>
                    <h6 className="leading-[27.24px] text-[#13375B] mb-4 font-semibold">
                      We provide a user-friendly platform for students to
                      conveniently retrieve academic results and certificates
                      and apply for scholarships.
                    </h6>
                    {userType === "institute" && isLoggedIn ? (
                      <Link to="/login">
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
                <div className="w-[50%] flex justify-center pt-20 [90px]">
                  <div className="w-[80%]">
                    <img src="mainPage.svg" alt="main image" />
                  </div>
                </div>
              </div>

              {/* Information Cards */}

              <div className="text-center my-7">
                <h2 className="text-[#13375B] text-[40px] font-bold">
                  What can you do here
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-16 p-4">
                  <Card
                    stepNumber="1"
                    title="Create your profile"
                    description="Let us get to know you with details around your background, interests, and academic performance!"
                  >
                    <div className="flex top-0 left-0 absolute items-center justify-center w-12 h-12 bg-[#0041E9] rounded-full">
                      <span className="text-3xl font-medium text-white">1</span>
                    </div>
                    <div>
                      <img src="Create.svg" alt="acadmic image" />
                    </div>
                  </Card>
                  <Card
                    stepNumber="2"
                    title="Get academic results and certificates"
                    description="We provide a user-friendly platform for students to retrieve and access their academic results and certificates hassle-free."
                  >
                    <div className="flex top-0 left-0 absolute items-center justify-center w-12 h-12 bg-[#0041E9] rounded-full">
                      <span className="text-3xl font-medium text-white">2</span>
                    </div>
                    <div>
                      <img className="h-[164px] w-[239px]" src="acadmic.svg" alt="acadmic image" />
                    </div>
                  </Card>
                  <Card
                    stepNumber="3"
                    title="Apply for scholarships"
                    description="Browse and apply for scholarships that match your qualifications and aspirations and keep track of them with ease."
                  >
                    <div className="flex top-0 left-0 absolute items-center justify-center w-12 h-12 bg-[#0041E9] rounded-full">
                      <span className="text-3xl font-medium text-white">3</span>
                    </div>
                    <div>
                      <img src="scholar.svg" alt="acadmic image" />
                    </div>
                  </Card>
                </div>
              </div>

              {/* scholarships Part */}

              <div>
                <div className="w-[50%] p-8">
                  <h2 className="text-[#13375B] text-5xl font-bold">
                    Uncover the right scholarships
                    <span className="text-[#0041E9] font-medium"> for you</span>
                  </h2>
                </div>
                <div className="flex p-5">
                  <div className="p-10 w-[50%] flex justify-center">
                    <img
                      src="scholarShip.svg"
                      className="w-fit flex-shrink-0"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly w-[50%]">
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
              </div>
            </div>

            <div>
              <div className="bg-[#D9EAFF] mt-10 py-5 pb-[100px] px-[4%] lg1:px-[5%]">
                <h2 className="text-[#13375B] text-4xl font-bold pt-8">
                  Unlock Your Potential: Explore Scholarships!
                </h2>
                <p className="text-[#00227A] text-xl font-normal py-8">
                  Our platform offers access to thousands of carefully-reviewed
                  scholarships matched to you.
                </p>
                {userType === "institute" && isLoggedIn ? (
                  <button className="bg-[#0041E9] rounded-lg py-4 px-9 text-white text-xl font-medium">
                    Post Scholarship
                  </button>
                ) : userType === "student" && isLoggedIn ? (
                  <button className="bg-[#0041E9] rounded-lg py-4 px-9 text-white text-xl font-medium">
                    View your Scholarship Applications
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="bg-[#0041E9] rounded-lg py-4 px-9 text-white text-xl font-medium">
                      Sign up
                    </button>
                  </Link>
                )}
              </div>
              <div className="bg-gradient-to-r from-[#E5F1FF00] to-[#E5F1FF]">
                <div className="relative -top-[5.25rem] flex justify-center bg-[#E5F1FF] rounded-tr-[6rem] pt-16">
                  <div className="bg-[#E5F1FF] w-full mt-10 flex py-5 px-[4%] lg1:px-[5%]">
                    <div className="w-[50%]">
                      <img src="critira.svg" alt="image" className="w-full" />
                    </div>
                    <div className="w-[50%] bg-[#B8D8FF] text-left pl-16 pt-16 whitespace-nowrap shadow-sm rounded-tr-[6rem]">
                      <h1 className="text-5xl text-[#13375B] font-bold">
                        How you match
                      </h1>
                      <p className="text-[#00227A] font-semibold text-xl pt-3">
                        Provider Scholarship Criteria
                      </p>
                      <ul className="text-[#224293] text-lg font-semibold pt-2">
                        <li className="flex py-2">
                          <span className="pr-2">
                            <img src="tick.svg" />
                          </span>
                          GPA
                        </li>
                        <li className="flex py-2">
                          <span className="pr-2">
                            <img src="tick.svg" />
                          </span>
                          Major
                        </li>
                        <li className="flex py-2">
                          <span className="pr-2">
                            <img src="tick.svg" />
                          </span>
                          Apply year
                        </li>
                        <li className="flex py-2">
                          <span className="pr-2">
                            <img src="tick.svg" />
                          </span>
                          College
                        </li>
                        <li className="flex py-2">
                          <span className="pr-2">
                            <img src="tick.svg" />
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
