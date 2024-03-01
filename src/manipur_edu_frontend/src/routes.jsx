import React from "react";
import Login from "./pages/Login/stud_institute_login_signup";
import StudentSignUpForm from "./pages/Student/student_personal_details";
import InstituteSignUpForm from "./pages/Institute/signup_Institue";
import StudentProfile from "./pages/Reference/Profile/StudentProfile";
import Dashboard from "./pages/Before/Dashborad";
import AllRegisteredStudents from "./pages/Institute/all_registered_students";
import StudentResultScholarship from "./pages/Institute/student_result_scholarship";
import VerifyRejectStudentProfile from "./pages/Institute/verify_student_profile_details";
import Certifications from "./pages/Before/certifications";
import ProfileResult from "./pages/Student/ProfileResults";
import StudentDetailsEdit from "./pages/Student/student_details_edit";
import ViewProfileDetails from "./pages/Student/view_profile_details";
import ViewInstituteDetailsInstitutePage from "./pages/Institute/view_institute_details";
import InstituteDetailsEditInstitutePage from "./pages/Institute/institute_detials_edit";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import InstituteDetails from "./pages/Admin/instituteDetails";
import RegisteredStudents from "./pages/Admin/registered_students";
import appConstants from "../Constants/appConstants";

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
    path: "/institute-detail",
    component: <ViewInstituteDetailsInstitutePage />,
    allowedUser: [appConstants.INSTITUTE, appConstants.ADMIN],
  },
  {
    path: "/institute_detail_edit",
    component: <InstituteDetailsEditInstitutePage />,
    allowedUser: [appConstants.INSTITUTE, appConstants.ADMIN],
  },
  {
    path: "/institute-student/result",
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
    allowedUser: [appConstants.INSTITUTE, appConstants.ADMIN],
  },
  {
    path: "/profile-result",
    component: <ProfileResult />,
    allowedUser: [
      appConstants.STUDENT,
      appConstants.ADMIN,
      appConstants.INSTITUTE,
    ],
  },
  {
    path: "/personal-detail-edit",
    component: <StudentDetailsEdit />,
    allowedUser: [appConstants.STUDENT],
  },
  {
    path: "/view-profileDetail",
    component: <ViewProfileDetails />,
    allowedUser: [
      appConstants.STUDENT,
      appConstants.ADMIN,
      appConstants.INSTITUTE,
    ],
  },
  {
    path: "/verify",
    component: <VerifyRejectStudentProfile />,
    allowedUser: [appConstants.ADMIN, appConstants.INSTITUTE],
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
  {
    path: "/student-profile",
    component: <StudentProfile />,
    allowedUser: [
      appConstants.STUDENT,
      appConstants.ADMIN,
      appConstants.INSTITUTE,
    ],
  },
  {
    path: "/registered-students",
    component: <AllRegisteredStudents />,
    allowedUser: [appConstants.ADMIN, appConstants.INSTITUTE],
  },
  {
    path: "/institute-details-verify",
    component: <InstituteDetails />,
    allowedUser: [appConstants.ADMIN],
  },
  {
    path: "/register-students-details",
    component: <RegisteredStudents />,
    allowedUser: [appConstants.ADMIN, appConstants.INSTITUTE],
  },
  {
    path: "/dsa",
    component: <AdminDashboard />,
    allowedUser: [appConstants.ADMIN],
  },
];

export default routes;
