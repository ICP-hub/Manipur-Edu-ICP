import React from "react";
import { Link, useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import { useAuth } from "../../utils/useAuthClient";

const StudentProfileDropdown = ({ open }) => {

  const navigate = useNavigate();

  const { logout } = useAuth();
  const handleLogout = async () => {
    let auth = await logout();
    console.log(auth);
    navigate('/');
  }

  if (!open) return null;
  return (
    <div className="flex flex-col  absolute top-[5.5rem] right-[6.75%] w-[15rem] p-4 bg-[#B8D8FF] rounded-xl before:absolute before:top-[-0.5rem] before:right-[1.25rem] before:w-[25px] before:h-[25px] before:bg-[#B8D8FF] before:rotate-45 before: before: before: before: before: before:">
      <ul>
        <li className="flex justify-center pb-4 pt-2  ">
          <Link to="/profile-result">
            <button className="text-[#00227A] text-base font-[400] font-[Noto Sans] leading-6">
              Results
            </button>
          </Link>
        </li>
        <li className="flex justify-center py-4  text-[#00227A] text-base font-[400] font-[Noto Sans] leading-6">
          <Link to="/">
            <button className="text-[#00227A] text-base font-[400] font-[Noto Sans] leading-6">
              Scholarship Applications
            </button>
          </Link>
        </li>
        <li className="flex justify-center pt-4 pb-2 text-[#00227A] text-base font-[400] font-[Noto Sans] leading-6 ">
          <Link to="/">
            <button onClick={handleLogout} className="text-[#00227A] text-base font-[400] font-[Noto Sans] leading-6">
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default StudentProfileDropdown;
