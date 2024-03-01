import React,{useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth, AuthProvider } from "./utils/useAuthClient";
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

function App() {

  const { reloadLogin } = useAuth();

  useEffect(() => {
    reloadLogin();
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>} />
          <Route path="/certificates" element={<Certifications></Certifications>} />
          <Route path="/login" element={<Login />} />
          <Route path="/institute-detail" element={<ViewInstituteDetailsInstitutePage />} />
          <Route path="/institute_detail_edit" element={<InstituteDetailsEditInstitutePage />} />
          <Route path="/institute-student/result" element={<StudentResultScholarship />} />
          <Route path="/institute-student/" element={<StudentResultScholarship />} />
          <Route path="/profile-result" element={<ProfileResult />} />
          <Route path="/personal-detail-edit" element={<StudentDetailsEdit />} />
          <Route path="/view-profileDetail" element={<ViewProfileDetails />} />
          <Route path="/verify" element={<VerifyRejectStudentProfile />} />
          <Route path="/register-student" element={<StudentSignUpForm></StudentSignUpForm>} />
          <Route path="/register-institute" element={<InstituteSignUpForm></InstituteSignUpForm>} />
          <Route path="/student-profile" element={<StudentProfile></StudentProfile>} />
          <Route path="/registered-students" element={<AllRegisteredStudents></AllRegisteredStudents>} />
          <Route path="/institute-details-verify" element={<InstituteDetails> </InstituteDetails>} />

<Route path="/register-students-details" element={<RegisteredStudents> </RegisteredStudents>} />
          <Route path="/dsa" element={<AdminDashboard></AdminDashboard>} />
        </Routes>
      </Router>
    </div>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
