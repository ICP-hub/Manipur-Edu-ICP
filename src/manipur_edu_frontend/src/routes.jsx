import React from "react";
import Login from "./pages/Login/StudInstituteLoginSignup";
import StudentSignUpForm from "./pages/Student/StudentPersonalDetails";
import InstituteSignUpForm from "./pages/Institute/SignupInstitue";
import StudentProfile from "./pages/Reference/Profile/StudentProfile";
import Dashboard from "./pages/Before/Dashborad";
import AllRegisteredStudents from "./pages/Institute/AllRegisteredStudents";
import StudentResultScholarship from "./pages/Institute/StudentResultScholarship";
import VerifyRejectStudentProfile from "./pages/Institute/VerifyStudentProfileDetails";
import Certifications from "./pages/Before/Certifications";
import ProfileResult from "./pages/Student/ProfileResults";
import StudentDetailsEdit from "./pages/Student/StudentDetailsEdit";
import ViewProfileDetails from "./pages/Student/ViewProfileDetails";
import ViewInstituteDetailsInstitutePage from "./pages/Institute/ViewInstituteDetails";
import ViewInstituteDetailsAdminPage from "./pages/Admin/ViewInstituteDetails";
import InstituteDetailsEditInstitutePage from "./pages/Institute/InstituteDetialsEdit";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import InstituteDetails from "./pages/Admin/InstituteDetails";
import RegisteredStudents from "./pages/Admin/RegisteredStudents";
import appConstants from "../Constants/appConstants";
import ErrorPage from "../error/ErrorPage";
import RejectModal from "./components/RejectModal";
import StudentEditRequestRejectApproval from "./pages/Student/StudentEditRequestRejectApproval";
import ScholarshipPostedAdmin from "./components/admin/ScholarshipPostedAdmin";
import InstituteEditRequestRejectApprove from "./pages/Institute/InstituteEditRequestRejectApproval";
import EditInstituteProfile from "./pages/Admin/EditInstituteDetails"
import ScholarshipTab from "./pages/Institute/ScholarshipTab";
import AadhaarInputCard from "./pages/Login/AdharUi";
import OtpInputCard from "./pages/Login/Otp";

// All Routes according to usertype
const routes = [
  {
    path: "/",
    component: <Dashboard />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/certificates",
    component: <Certifications />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.ADMIN,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/login",
    component: <Login />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/aadhar",
    component: <AadhaarInputCard />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.ADMIN,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
    
  },
  {
    path: "/otp",
    component: <OtpInputCard />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.ADMIN,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
    
  },
  {
    path: "/instituteEditRequest",
    component: <InstituteDetails />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },

  {
    path: "/institute-detail",
    component: <ViewInstituteDetailsInstitutePage />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.ADMIN,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/institute-details-admin",
    component: <ViewInstituteDetailsAdminPage />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.ADMIN,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/institute_detail_edit",
    component: <InstituteDetailsEditInstitutePage />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.ADMIN,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/institute_edit",
    component: <EditInstituteProfile />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.ADMIN,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },



  // EditInstituteProfile
  {
    path: "/institute-student/result",
    component: <StudentResultScholarship />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.ADMIN,
      appConstants.UNKNOWN,
    ],
  },
  // {
  //   path: "/institute-student",
  //   component: <ScholarshipTab />,
  //   allowedUser: [
  //     appConstants.INSTITUTE,
  //     appConstants.STUDENT,
  //     appConstants.ADMIN,
  //     appConstants.UNKNOWN,
  //   ],
  // },
  //mychanges
  //scholarship-institute
  {
    path: "/institute-student/scholarship",
    component: <StudentResultScholarship />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.ADMIN,
    ],
  },

  {
    path: "/institute-student/",
    component: <StudentResultScholarship />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.ADMIN,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/profile-result",
    component: <ProfileResult />,
    allowedUser: [
      appConstants.STUDENT,
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/personal-detail-edit",
    component: <StudentDetailsEdit />,
    allowedUser: [
      appConstants.STUDENT,
      appConstants.INSTITUTE,
      appConstants.UNKNOWN,
      appConstants.ADMIN,
    ],
  },
  {
    path: "/view-profileDetail",
    component: <ViewProfileDetails />,
    allowedUser: [
      appConstants.STUDENT,
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/verify",
    component: <VerifyRejectStudentProfile />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/verify-edit-detials",
    component: <StudentEditRequestRejectApproval/>,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/register-student",
    component: <StudentSignUpForm />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/register-institute",
    component: <InstituteSignUpForm />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  // Priyachanges
  {
    path: "/instituteEditRequest",
    component: <InstituteDetails />,
    // component: <ViewProfileDetails />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/InstituteEditRequestRejectApprove/",
    component: <InstituteEditRequestRejectApprove />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/EditDetails",
    component: <StudentDetailsEdit />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.ADMIN,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/ViewDetails",
    component: <ViewProfileDetails />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.ADMIN,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/institute-details-check",
    component: <InstituteDetails />,
    allowedUser: [
      appConstants.INSTITUTE,
      appConstants.ADMIN,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  // {
  //   path: "/DeleteDetails",
  //   component: <RejectModal />,
  //   allowedUser: [
  //     appConstants.INSTITUTE,
  //     appConstants.ADMIN,
  //     appConstants.STUDENT,
  //     appConstants.UNKNOWN,
  //   ],
  // },
  {
    path: "/student-profile",
    component: <StudentProfile />,
    allowedUser: [
      appConstants.STUDENT,
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/registered-students",
    component: <AllRegisteredStudents />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/institute-details-verify",
    component: <InstituteDetails  />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },

  //mychanges
  {
    path: "/register-students-details",
    component: <RegisteredStudents />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },

  {
    path: "/dsa",
    component: <AdminDashboard />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
  {
    path: "/adminScholarships",
    component: <ScholarshipPostedAdmin />,
    allowedUser: [
      appConstants.ADMIN,
      appConstants.INSTITUTE,
      appConstants.STUDENT,
      appConstants.UNKNOWN,
    ],
  },
];

export default routes;
