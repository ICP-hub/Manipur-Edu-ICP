import React from "react";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import Login from "../../Login/StudInstituteLoginSignup";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    event.preventDefault();
    console.log("in Handle SUbmit ");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1 className="text-center text-2xl font-bold text-blue-800">
              Authenticate as
            </h1>
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              onClick={handleSubmit}
              value="student"
            >
              Student
            </button>
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              onClick={handleSubmit}
              value="institute"
            >
              Institute
            </button>
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              onClick={handleSubmit}
              value="admin"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
