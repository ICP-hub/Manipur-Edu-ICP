import React from "react";
import { useAuth } from "../../utils/useAuthClient";
import { manipur_edu_backend } from "../../../../declarations/manipur_edu_backend/index";
import Button from "../../components/Button";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import SignUpPage from "../../components/student/SignUpPage";
import Status from "../../components/student/status";

const Login = () => {
  const { actor, login, principal, authClient, identity, userType } = useAuth();
  const navigate = useNavigate();

  const [status, setStatus] = React.useState(false);
  const [Field, setField] = React.useState("");

  const handleLogin = async (event) => {
    let auth = await login();
    console.log("authClient", auth);
    console.log("actor", actor);
    const principal_id = authClient.getIdentity().getPrincipal().toString();
    console.log(principal_id);

    console.log("real authClient", authClient);
    const is_already_registered = await actor.is_user_already_registered();

    const newUserType = event.target.value;
    console.log(newUserType);

    console.log(userType);

    if (newUserType == "student") {
      const student_status = await actor.student_application_status(
        principal_id
      );
      console.log(student_status[0]);
      if (student_status[0] == "pending") {
        setField("Wait for your request to get approved");
        setStatus(true);
        console.log("wait for your request to get approved");
      } else if (student_status[0] == "approved") {
        console.log("your Sign up request has been approved");
        navigate("/");
      } else if (student_status[0] === "rejected") {
        setStatus(true);
        setField("your profile has been rejected. You cant login");
        // Use the Field variable as needed
        console.log("your profile has been rejected. You can't login");
      } else {
        if (is_already_registered) {
          setField("You have already registered");
          setStatus(true);
        } else {
          setField("Student Details not found");
          setStatus(true);
          console.log("student details not found");
          navigate("/register-student");
        }
      }
      console.log(student_status);
    } else if (newUserType == "institute") {
      const institute_status = await actor.institute_application_status(
        principal_id
      );

      console.log(institute_status);

      if (institute_status[0] == "pending") {
        setStatus(true);
        setField("Wait for your request to get approved");
        console.log("wait for your request to get approved");
      } else if (institute_status[0] == "approved") {
        console.log("your Sign up request has been approved");
        navigate("/");
      } else if (institute_status[0] === "rejected") {
        setStatus(true);
        setField("your profile has been rejected. You cant login");
        // Use the Field variable as needed
        console.log("your profile has been rejected. You can't login");
      } else {
        if (is_already_registered) {
          setField("You have already registered");
          setStatus(true);
        } else {
          setField("institute Details not found");
          setStatus(true);
          console.log("institute details not found");
          navigate("/register-institute");
        }
      }

      console.log(institute_status);
    } else if (newUserType == "admin") {
      navigate("/dsa");
    } else {
      setStatus(true);
      setField("You are not authorized");
    }
  };

  return (
    <SignUpPage>
      <div className="flex flex-col items-center justify-center w-full">
        <div className=" text-[#00227A] text-2xl md2:text-4xl font-medium p ">
          Log in/Sign up as
        </div>
        <div className="mt-[48px] w-full flex flex-col  items-center gap-4 px-10">
          <button
            className="sm:w-1/2 w-full h-14 text-white text-xl rounded-xl bg-[#646ED6]"
            value="student"
            onClick={handleLogin}
          >
            Student
          </button>

          <button
            className="sm:w-1/2 w-full h-14 text-white text-xl rounded-xl bg-[#646ED6]"
            value="institute"
            onClick={handleLogin}
          >
            Institute
          </button>
          <button
            className="sm:w-1/2 w-full h-14 text-white text-xl rounded-xl bg-[#646ED6]"
            value="admin"
            onClick={handleLogin}
          >
            Admin
          </button>
        </div>
      </div>
      <div className="">
        <Status open={status} Field={Field} onClose={() => setStatus(false)} />
      </div>
    </SignUpPage>
  );
};

export default Login;


