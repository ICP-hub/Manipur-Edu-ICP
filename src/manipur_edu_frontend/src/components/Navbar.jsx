import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import StudentProfileDropdown from "./student/Student_profile_dropdown";
import InstituteProfileDropdown from "./institute/Institute_profile_dropdown";
import InstituteNotifDropdown from "./institute/Institute_notif_dropdown";
import StudentNotifDropdown from "./student/Student_notif_dropdown";
import { useAuth } from "../utils/useAuthClient";
import { useDispatch, useSelector } from "react-redux";
import { profileOpenCloseDropDown,notificationOpenCloseDropDown } from "../../Redux/Action/index";

const Navbar = () => {
  let dispatch = useDispatch();
  const dropdownRef = useRef(null);
  let isDropDownOpen = useSelector(
    (state) => state.profileOpenCloseDropDownReducer
  );
  let isNotificationDropDownOpen = useSelector(
    (state) => state.notificationOpenCloseDropDownReducer
  );
  console.log("isDropDownOpen", isDropDownOpen);

  const [scrolled, setScrolled] = useState(false);
  const { actor, isAuthenticated, userType } = useAuth();

  console.log(userType);
  console.log("isAuthenticated", isAuthenticated);
  const [isLoggedIn, setIsLoggedIn] = React.useState(isAuthenticated);

  React.useEffect(() => {
    setIsLoggedIn(isAuthenticated);
  }, [isAuthenticated]);

  React.useEffect(() => {
    const checkLogin = async () => {
      if (userType) {
        const loggedIn = await actor.login(userType);
        setIsLoggedIn(loggedIn);
      }
    };

    checkLogin();
  }, [userType, actor]);

  // Handle the scroll event
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Handle drop down events
  const handleDropDown = () => {
    dispatch(profileOpenCloseDropDown(!isDropDownOpen));
  };

  // Handle notification drop down events
  const handleNotificationDropDown = () => {
    dispatch(notificationOpenCloseDropDown(!isNotificationDropDownOpen));
  };

  // Handle close drop down events when user clicks outside of the drop down
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(notificationOpenCloseDropDown(false));
        dispatch(profileOpenCloseDropDown(false));
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "navbar-glass" : "bg-transparent"
      }`}
    >
      <div
        className={`flex items-center justify-between ${
          scrolled ? "mt-2" : "h-32"
        } px-[4%] lg1:px-[5%]`}
      >
        <div className="w-[50%]">
          <Link to="/">
            <h2 className="font-[Philosopher] text-[#0041E9] font-bold text-[28px] px-3 py-2">
              Manipur Edu
            </h2>
          </Link>
        </div>
        <div className="w-[50%] ">
          <ul className="flex font-[Noto Sans] items-center text-lg float-right list-none">
            <li className="mr-4">
              <Link
                to="/"
                className="text-[#0041E9] hover:underline hover:bg-opacity-30 font-medium px-4 py-2 rounded"
              >
                Home
              </Link>
            </li>
            <li className="mr-4">
              <Link className="text-[#0041E9] hover:underline hover:bg-opacity-30 font-medium px-4 py-2 rounded">
                Scholarships
              </Link>
            </li>
            <li className="mr-4">
              <Link
                to="/certificates"
                className="text-[#0041E9] hover:underline hover:bg-opacity-30 font-medium px-4 py-2 rounded"
              >
                Certifications
              </Link>
            </li>
            <li ref={dropdownRef} className="mr-4">
              {userType === "institute" && isLoggedIn ? (
                <div className="flex">
                  <button
                    onClick={() => handleNotificationDropDown()}
                    className="mr-4 mb-7"
                  >
                    <svg
                      width="27"
                      height="27"
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
                  <InstituteNotifDropdown open={isNotificationDropDownOpen} />
                  <li className="mr-4">
                    <button onClick={() => handleDropDown()}>
                      <img className="w-14 h-14 " src="/student.svg" alt="" />
                    </button>
                  </li>
                  <InstituteProfileDropdown open={isDropDownOpen} />
                </div>
              ) : userType === "student" && isLoggedIn ? (
                <div className="flex">
                  <div className="self-center">
                    <button onClick={() => handleNotificationDropDown()} className="mr-4">
                      <svg
                        width="27"
                        height="27"
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
                    <StudentNotifDropdown open={isNotificationDropDownOpen} />
                  </div>
                  <li className="mr-4">
                    <button onClick={() => handleDropDown()}>
                      <img className="w-14 h-14 " src="/student.svg" alt="" />
                    </button>
                  </li>
                  <StudentProfileDropdown open={isDropDownOpen} />
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-white bg-[#0041E9] rounded-3xl px-3 whitespace-nowrap py-1"
                >
                  <button>Sign up</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
