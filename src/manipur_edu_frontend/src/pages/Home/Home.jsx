import React, { useState } from "react";
import { manipur_edu_backend } from "../../../../declarations/manipur_edu_backend/index";
import Login from "../Login/StudInstituteLoginSignup";
import { Null } from "../../../../../node_modules/@dfinity/candid/lib/cjs/idl";
import StudentSignUpForm from "../Reference/Register/StudentSignUpForm";
import Button from "../../components/Button";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import SignUp from "../SignUp/SignUp";

const Home = () => {
  return <SignUp></SignUp>;
};

export default Home;
