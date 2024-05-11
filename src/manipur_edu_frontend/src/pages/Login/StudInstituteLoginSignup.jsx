import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setClickedId } from "../../../Redux/Action/WalletActions";

import { useAuth } from "../../utils/useAuthClient";
import { manipur_edu_backend } from "../../../../declarations/manipur_edu_backend/index";
import Button from "../../components/Button";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import SignUpPage from "../../components/student/SignUpPage";
import Status from "../../components/student/status";
import { walletModalSvg } from "../../utils/Data/SvgData";
import Modal from "./Modal";

import { toggleBoolVar } from "../../../Redux/Action/toggleActions";

const Login = () => {
  let entry = useSelector((state) => state.studentDetailsReducer);

  const { boolVar1, boolVar2, boolVar3 } = useSelector((state) => state.bools);
  const dispatch = useDispatch();
  const [chossed, setChoosed] = useState("");

  const handleToggle = (varName) => {
    dispatch(toggleBoolVar(varName));
  };

  const [modalOpen, setModalOpen] = useState(false);

  const { actor, login, principal, authClient, identity, userType } = useAuth();
  const navigate = useNavigate();

  const [status, setStatus] = React.useState(false);
  const [Field, setField] = React.useState("");

  const handleLogin = async (event) => {
    setModalOpen(true);
  };

  const executeLoginBlock = async (event) => {
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
    let isvalue = true;
    if (isvalue === true) {
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
          if (chossed === "stud") {
            navigate("/register-student");
          } else if (chossed === "inst") {
            navigate("/register-institute");
          } else {
            navigate("/dsa");
          }
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
  const handleClick = (id) => {
    console.log("Clicked ID:", id);
    // val = id ;
    setModalOpen(false);
    // dispatch(setClickedId(id));
    dispatch(setClickedId(id));
    executeLoginBlock(event);
  };

  return (
    <div className="">
      <SignUpPage>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <ul className="my-4 space-y-3 cursor-pointer">
            {walletModalSvg.map((wallet, index) => (
              <div key={index} onClick={() => handleClick(wallet.id)}>
                {wallet.content}
              </div>
            ))}
          </ul>
        </Modal>

        <div className="flex flex-col items-center justify-center w-full">
          <div className=" text-[#00227A] text-2xl md2:text-4xl font-medium p ">
            Authenticate as
          </div>
          <div className="mt-[48px] w-full flex flex-col  items-center gap-4 px-10">
            <button
              className="sm:w-1/2 w-full h-14 text-white text-xl rounded-xl bg-[#646ED6]"
              value="student"
              onClick={() => {
                handleLogin();
                setChoosed("stud");
              }}
            >
              Student
            </button>

            <button
              className="sm:w-1/2 w-full h-14 text-white text-xl rounded-xl bg-[#646ED6]"
              value="institute"
              // onClick={handleLogin}
              onClick={() => {
                handleLogin();
                setChoosed("inst");
              }}
            >
              Institute
            </button>
            <button
              className="sm:w-1/2 w-full h-14 text-white text-xl rounded-xl bg-[#646ED6]"
              value="admin"
              onClick={() => {
                handleLogin();
                setChoosed("admin");
              }}
            >
              Admin
            </button>
          </div>
        </div>
        <div className="">
          <Status
            open={status}
            Field={Field}
            onClose={() => setStatus(false)}
          />
        </div>
      </SignUpPage>
    </div>
  );
};

export default Login;
