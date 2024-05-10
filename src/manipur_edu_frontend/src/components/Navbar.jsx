// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import StudentProfileDropdown from "./student/StudentProfileDropdown";
// import InstituteProfileDropdown from "./institute/InstituteProfileDropdown";
// import InstituteNotifDropdown from "./institute/InstituteNotifDropdown";
// import StudentNotifDropdown from "./student/StudentNotifDropdown";
// import { useAuth } from "../utils/useAuthClient";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   profileOpenCloseDropDown,
//   notificationOpenCloseDropDown,
// } from "../../Redux/Action/index";

// const Navbar = () => {
//   let dispatch = useDispatch();

//   const dropdownRef = useRef(null);
//   const profileButtonRef = useRef(null);
//   const notificationButtonRef = useRef(null);

//   let isDropDownOpen = useSelector(
//     (state) => state.profileOpenCloseDropDownReducer
//   );
//   let isNotificationDropDownOpen = useSelector(
//     (state) => state.notificationOpenCloseDropDownReducer
//   );
//   console.log("isDropDownOpen", isDropDownOpen);

//   const [scrolled, setScrolled] = useState(false);
//   const { actor, isAuthenticated, userType } = useAuth();

//   console.log(userType);
//   console.log("isAuthenticated", isAuthenticated);
//   const [isLoggedIn, setIsLoggedIn] = React.useState(isAuthenticated);

//   React.useEffect(() => {
//     setIsLoggedIn(isAuthenticated);
//   }, [isAuthenticated]);

//   React.useEffect(() => {
//     const checkLogin = async () => {
//       if (userType) {
//         const loggedIn = await actor.login(userType);
//         setIsLoggedIn(loggedIn);
//       }
//     };

//     checkLogin();
//   }, [userType, actor]);

//   // Handle the scroll event
//   const handleScroll = () => {
//     const offset = window.scrollY;
//     if (offset > 0) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   // Handle drop down events
// const handleDropDown = () => {
//   dispatch(profileOpenCloseDropDown(!isDropDownOpen));
// };

//   // Handle notification drop down events
//   const handleNotificationDropDown = () => {
//     dispatch(notificationOpenCloseDropDown(!isNotificationDropDownOpen));
//   };

//   // Handle close drop down events when user clicks outside of the drop down
//   // useEffect(() => {
//   //   function handleClickOutside(event) {
//   //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//   //       dispatch(notificationOpenCloseDropDown(false));
//   //       dispatch(profileOpenCloseDropDown(false));
//   //     }
//   //   }
//   //   // Bind the event listener
//   //   document.addEventListener("mousedown", handleClickOutside);
//   //   return () => {
//   //     // Unbind the event listener on cleanup
//   //     document.removeEventListener("mousedown", handleClickOutside);
//   //   };
//   // }, [dropdownRef]);
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         dropdownRef.current &&
//         profileButtonRef.current &&
//         notificationButtonRef.current &&
//         !dropdownRef.current.contains(event.target) &&
//         !profileButtonRef.current.contains(event.target) &&
//         !notificationButtonRef.current.contains(event.target)
//       ) {
//         dispatch(notificationOpenCloseDropDown(false));
//         dispatch(profileOpenCloseDropDown(false));
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef, profileButtonRef, notificationButtonRef]);
//   // Add scroll event listener
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 ${
//         scrolled ? "navbar-glass" : "bg-transparent"
//       }`}
//     >
//       <div
//         className={`flex items-center justify-between ${
//           scrolled ? "mt-2" : "h-32"
//         } px-[4%] lg1:px-[5%]`}
//       >
//         <div className="w-[50%]">
//           <Link to="/">
//             <h2 className="font-[Philosopher] text-[#0041E9] font-bold text-[28px] px-3 py-2">
//               Manipur Edu
//             </h2>
//           </Link>
//         </div>
//         <div className="w-[50%] ">
//           <ul className="flex font-[Noto Sans] items-center text-lg float-right list-none">
//             <li className="mr-4">
//               <Link
//                 to="/"
//                 className="text-[#0041E9] hover:underline hover:bg-opacity-30 font-medium px-4 py-2 rounded"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="mr-4">
//               <Link className="text-[#0041E9] hover:underline hover:bg-opacity-30 font-medium px-4 py-2 rounded">
//                 Scholarships
//               </Link>
//             </li>
//             <li className="mr-4">
//               <Link
//                 to="/certificates"
//                 className="text-[#0041E9] hover:underline hover:bg-opacity-30 font-medium px-4 py-2 rounded"
//               >
//                 Certifications
//               </Link>
//             </li>
//             <li ref={dropdownRef} className="mr-4">
//               {userType === "institute" && isLoggedIn ? (
//                 <div className="flex ">
//                   <button
//                     onClick={() => handleNotificationDropDown()}
//                     // className="mr-4 mb-7 "
//                     class="mr-4 mb-4 flex items-center mt-4"
//                   >
//                     <svg
//                       width="27"
//                       height="27"
//                       viewBox="0 0 27 27"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M20.25 9C20.25 7.20979 19.5388 5.4929 18.273 4.22703C17.0071 2.96116 15.2902 2.25 13.5 2.25C11.7098 2.25 9.9929 2.96116 8.72703 4.22703C7.46116 5.4929 6.75 7.20979 6.75 9C6.75 16.875 3.375 19.125 3.375 19.125H23.625C23.625 19.125 20.25 16.875 20.25 9Z"
//                         stroke="#00227A"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M15.4462 23.625C15.2484 23.966 14.9645 24.249 14.623 24.4457C14.2814 24.6425 13.8941 24.746 13.5 24.746C13.1058 24.746 12.7185 24.6425 12.377 24.4457C12.0354 24.249 11.7515 23.966 11.5537 23.625"
//                         stroke="#00227A"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                   <InstituteNotifDropdown open={isNotificationDropDownOpen} />
//                   <li className="mr-4">
//                     <button onClick={() => handleDropDown()}>
//                       <img className="w-14 h-14 " src="/student.svg" alt="" />
//                     </button>
//                   </li>
//                   <InstituteProfileDropdown open={isDropDownOpen} />
//                 </div>
//               ) : userType === "student" && isLoggedIn ? (
//                 <div className="flex">
//                   <div className="self-center">
//                     <button
//                       onClick={() => handleNotificationDropDown()}
//                       className="mr-4"
//                     >
//                       <svg
//                         width="27"
//                         height="27"
//                         viewBox="0 0 27 27"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M20.25 9C20.25 7.20979 19.5388 5.4929 18.273 4.22703C17.0071 2.96116 15.2902 2.25 13.5 2.25C11.7098 2.25 9.9929 2.96116 8.72703 4.22703C7.46116 5.4929 6.75 7.20979 6.75 9C6.75 16.875 3.375 19.125 3.375 19.125H23.625C23.625 19.125 20.25 16.875 20.25 9Z"
//                           stroke="#00227A"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M15.4462 23.625C15.2484 23.966 14.9645 24.249 14.623 24.4457C14.2814 24.6425 13.8941 24.746 13.5 24.746C13.1058 24.746 12.7185 24.6425 12.377 24.4457C12.0354 24.249 11.7515 23.966 11.5537 23.625"
//                           stroke="#00227A"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </button>
//                     <StudentNotifDropdown open={isNotificationDropDownOpen} />
//                   </div>
//                   <li className="mr-4">
//                     <button onClick={() => handleDropDown()}>
//                       <img className="w-14 h-14 " src="/student.svg" alt="" />
//                     </button>
//                   </li>
//                   <StudentProfileDropdown open={isDropDownOpen} />
//                 </div>
//               ) : (
//                 <Link
//                   to="/login"
//                   className="text-white bg-[#0041E9] rounded-3xl px-3 whitespace-nowrap py-1"
//                 >
//                   <button>Sign up</button>
//                 </Link>
//               )}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import StudentProfileDropdown from "./student/StudentProfileDropdown";
import InstituteProfileDropdown from "./institute/InstituteProfileDropdown";
import InstituteNotifDropdown from "./institute/InstituteNotifDropdown";
import StudentNotifDropdown from "./student/StudentNotifDropdown";
import { useAuth } from "../utils/useAuthClient";
import { useDispatch, useSelector } from "react-redux";
import {
  profileOpenCloseDropDown,
  notificationOpenCloseDropDown,
} from "../../Redux/Action/index";

const Navbar = () => {
  let dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const profileButtonRef = useRef(null);
  const notificationButtonRef = useRef(null);

  let isDropDownOpen = useSelector(
    (state) => state.profileOpenCloseDropDownReducer
  );
  let isNotificationDropDownOpen = useSelector(
    (state) => state.notificationOpenCloseDropDownReducer
  );
  console.log("isDropDownOpen", isDropDownOpen);

  const [hamburgerMenu, setHamburgerMenu] = useState("hidden");
  const [navbarMenu, setNavbarMenu] = useState("block");
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

  const handleProfileDropDown = () => {
    dispatch(notificationOpenCloseDropDown(false));
    dispatch(profileOpenCloseDropDown(!isDropDownOpen));
  };

  // Handle opening/closing notification dropdown
  const handleNotificationDropDown = () => {
    dispatch(profileOpenCloseDropDown(false));
    dispatch(notificationOpenCloseDropDown(!isNotificationDropDownOpen));
  };

  // Handle close drop down events when user clicks outside of the drop down
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       dispatch(notificationOpenCloseDropDown(false));
  //       dispatch(profileOpenCloseDropDown(false));
  //     }
  //   }
  //   // Bind the event listener
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on cleanup
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [dropdownRef]);
  useEffect(() => {
    function handleClickOutside(event) {
      const isOutsideDropdown =
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !profileButtonRef.current.contains(event.target) &&
        !notificationButtonRef.current.contains(event.target);

      if (isOutsideDropdown) {
        dispatch(notificationOpenCloseDropDown(false));
        dispatch(profileOpenCloseDropDown(false));
      }
    }

    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        profileButtonRef.current &&
        notificationButtonRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !profileButtonRef.current.contains(event.target) &&
        !notificationButtonRef.current.contains(event.target)
      ) {
        dispatch(notificationOpenCloseDropDown(false));
        dispatch(profileOpenCloseDropDown(false));
      }
    }

    function HamburgerMenuHandler() {
      if (Hamburger === "hidden") {
        setHamburger("w-full bg-[#86ABF3]");
      } else {
        setHamburger("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, profileButtonRef, notificationButtonRef]);
  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const HamburgerMenuOpenHandler = () => {
    setHamburgerMenu("block");
    setNavbarMenu("hidden");
  };

  const HamburgerMenuCloseHandler = () => {
    setHamburgerMenu("hidden");
    setNavbarMenu("block");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 ${navbarMenu} bg-[#86ABF3] ${
          scrolled ? "navbar-glass" : "sm:bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between h-[54px] ${
            scrolled ? "mt-2" : "sm1:h-32"
          } px-[4%] lg1:px-[5%]`}
        >
          <div className="w-[50%]">
            <Link to="/">
              <h2 className="font-[Philosopher] text-[#00227A] sm1:text-[#0041E9] font-bold text-[22px] sm1:text-[28px] px-3 py-2">
                Manipur Edu
              </h2>
            </Link>
          </div>
          <div className="w-[50%] ">
            <ul className="flex font-[Noto Sans] items-center text-lg float-right list-none">
              <li className="mr-4">
                <Link
                  to="/"
                  className="text-[#0041E9] hidden sm1:block hover:underline hover:bg-opacity-30 font-medium px-4 py-2 rounded"
                >
                  Home
                </Link>
              </li>
              <li className="mr-4">
                <Link className="text-[#0041E9] hidden sm1:block hover:underline hover:bg-opacity-30 font-medium px-4 py-2 rounded">
                  Scholarships
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  to="/certificates"
                  className="text-[#0041E9] hidden sm1:block hover:underline hover:bg-opacity-30 font-medium px-4 py-2 rounded"
                >
                  Certifications
                </Link>
              </li>
              <li ref={dropdownRef} className="mr-4">
                {userType === "institute" && isLoggedIn ? (
                  <div className="flex ">
                    <button
                      onClick={() => handleNotificationDropDown()}
                      ref={notificationButtonRef}
                      class="mr-4 mb-4 flex items-center mt-4"
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
                      <button
                        onClick={handleProfileDropDown}
                        ref={profileButtonRef}
                      >
                        <img className="w-14 h-14 " src="/student.svg" alt="" />
                      </button>
                    </li>
                    <InstituteProfileDropdown open={isDropDownOpen} />
                  </div>
                ) : userType === "student" && isLoggedIn ? (
                  <div className="flex">
                    <div className="self-center">
                      <button
                        onClick={handleNotificationDropDown}
                        ref={notificationButtonRef}
                        className="mr-4"
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
                      <StudentNotifDropdown open={isNotificationDropDownOpen} />
                    </div>
                    <li className="mr-4">
                      <button
                        onClick={() => handleProfileDropDown()}
                        ref={profileButtonRef}
                      >
                        <img className="w-14 h-14 " src="/student.svg" alt="" />
                      </button>
                    </li>
                    <StudentProfileDropdown open={isDropDownOpen} />
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="text-white bg-[#0041E9] hidden sm1:block rounded-3xl px-3 whitespace-nowrap py-1"
                  >
                    <button>Sign up</button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
          {/* hamburger-icon-with-notification */}
          <div
            className="sm1:hidden h-[20px] w-[20px] mr-2"
            onClick={HamburgerMenuOpenHandler}
          >
            <img src="bell.svg" alt="notification" />
          </div>
          <div className="sm1:hidden" onClick={HamburgerMenuOpenHandler}>
            <img src="Menu.svg" alt="hamburger-menu" />
          </div>
        </div>
      </nav>

      {/* hamburger-menu */}
      <div
        className={`bg-[#86ABF3] p-6 w-[75%] h-screen absolute top-0 ${hamburgerMenu} sm1:hidden z-10 h-auto flex flex-col justify-between shadow-md`}
      >
        {/* wrapper-menu */}
        <div>
          <div className="flex flex-row justify-between items-center w-full mb-[76px] mt-[45px] ml-2">
            {/* menu-header */}
            <div>
              <a href="/" className="text-white text-[24px] font-[Philosopher]">
                Manipur Edu
              </a>
            </div>
            <div onClick={HamburgerMenuCloseHandler}>
              <img
                src="Close.svg"
                alt="hamburger-close"
                className="w-[20px] h-[20px] mr-2"
              />
            </div>
          </div>
          {/* menu */}
          <div className="text-white w-full flex justify-center">
            <ul>
              <li className="flex flex-row items-center gap-2 mb-6">
                <img src="Home.svg" alt="Home" className="w-[30px] h-[30px]" />
                <a className="text-[18px]">Home</a>
              </li>
              <li className="flex flex-row items-center gap-2 mb-6">
                <img
                  src="Graduation.svg"
                  alt="Graduation"
                  className="w-[30px] h-[30px]"
                />
                <a className="text-[18px]">Scholarships</a>
              </li>
              <li className="flex flex-row items-center gap-2 mb-6">
                <img
                  src="Certificate.svg"
                  alt="Certificates"
                  className="w-[30px] h-[30px]"
                />
                <a className="text-[18px]">Certificates</a>
              </li>
              <li className="flex flex-row items-center gap-2 mb-6">
                <img
                  src="Student Reading.svg"
                  alt="Results"
                  className="w-[30px] h-[30px]"
                />
                <a className="text-[18px]">Results</a>
              </li>
              <li className="flex flex-row items-center gap-2 mb-6">
                <img
                  src="Form.svg"
                  alt="Scholarship"
                  className="w-[30px] h-[30px]"
                />
                <a className="text-[18px]">Scholarship Applications</a>
              </li>
              <li className="flex flex-row items-center gap-2 mb-6">
                <img
                  src="profile.svg"
                  alt="Profile"
                  className="w-[30px] h-[30px]"
                />
                <a className="text-[18px]">Profile</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <a className="text-white text-[18px] mb-[80px] flex flex-row gap-2 ml-2">
            <img
              src="log out.svg"
              alt="log-out"
              className="w-[30px] h-[30px]"
            />
            Log Out
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
