import React from "react";
import Button from "./Buttons";

const SignupStudentsLogin = () => {


  return (
    <div className="flex justify-between ">
      <div
        className="w-[40%] min-h-screen flex flex-col"
        style={{ backgroundColor: "rgba(172, 191, 253, 1)" }}
      >
        <div
          className=" text-[28px] font-[700] pt-[40px] pl-[120px]"
          style={{
            fontFamily: "Philosopher",
            lineHeight: "31px",
            letterSpacing: "0em",
            color: "rgba(0, 65, 233, 1)",
          }}
        >
          Manipur Edu
        </div>
        <div>
          <div className="h-[482px]">
            <img className="w-full object-contain" src="signup_page_girl.png" alt="Image 1" />
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col w-[820px]">
        <div className="flex justify-end h-[62px]">
          <div className="h-[120px] w-[120px] pl-[60px]">
            <img src="Ellipse8.png" alt="Image 2" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            style={{
              color: "rgba(0, 34, 122, 1)",
              fontFamily: "Noto Sans",
              fontSize: "35px",
              fontWeight: "500",
              lineHeight: "48px",
              letterSpacing: "0em",
            }}
          >
            Sign up: Login Details
          </div>
          <div className="w-[476px] mt-[25px] ">
            <form>
              <div className="flex flex-col">
                <div>
                  <label style={{ color: "rgba(0, 34, 122, 1)" }} for="fname">
                    Username
                  </label>
                  <br />
                  <input
                    className="w-[476px] h-[45px] rounded-[10px] "
                    type="text"
                    id="Username"
                    name="Username"
                    style={{
                      border: "1px solid rgba(172, 191, 253, 1)",
                    }}
                  />
                </div>
                <div className="mt-[15px]">
                  <label style={{ color: "rgba(0, 34, 122, 1)" }} for="fname">
                    E-mail
                  </label>
                  <br />
                  <input
                    className="w-[476px] h-[45px] rounded-[10px] "
                    type="text"
                    id="E-mail"
                    name="E-mail"
                    style={{
                      border: "1px solid rgba(172, 191, 253, 1)",
                    }}
                  />
                </div>
                <div className="mt-[15px]">
                  <label style={{ color: "rgba(0, 34, 122, 1)" }} for="fname">
                    Phone Number
                  </label>
                  <br />
                  <input
                    className="w-[476px] h-[45px] rounded-[10px] "
                    type="text"
                    id="phone"
                    name="phone"
                    style={{
                      border: "1px solid rgba(172, 191, 253, 1)",
                    }}
                  />
                </div>
                <div className="mt-[15px]">
                  <label style={{ color: "rgba(0, 34, 122, 1)" }} for="fname">
                    Password
                  </label>
                  <br />
                  <input
                    className="w-[476px] h-[45px] rounded-[10px] "
                    type="text"
                    id="password"
                    name="password"
                    style={{
                      border: "1px solid rgba(172, 191, 253, 1)",
                    }}
                  />
                </div>
                <div className="mt-[15px]">
                  <label style={{ color: "rgba(0, 34, 122, 1)" }} for="fname">
                    Confirm Password
                  </label>
                  <br />
                  <input
                    className="w-[476px] h-[45px] rounded-[10px] "
                    type="text"
                    id="passwordconfirm"
                    name="passwordconfirm"
                    style={{
                      border: "1px solid rgba(172, 191, 253, 1)",
                    }}
                  />
                </div>
              </div>
              <div className="mt-[30px]">
                <button
                  className="w-full h-[45px] text-white text-[20px]"
                  style={{
                    backgroundColor: "rgba(100, 110, 214, 1)",
                    borderRadius: "10px",
                  }} /*onClick={handleLogin}*/
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupStudentsLogin;
