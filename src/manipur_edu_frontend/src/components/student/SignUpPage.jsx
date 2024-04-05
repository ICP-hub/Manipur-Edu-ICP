import React from "react";

function SignUpPage({ children }) {
  return (
    <div className="flex flex-wrap h-screen md2:bg-[#ACBFFD]">
      <div className=" w-full">
        <div className="sm:flex-col md2:flex-row flex flex-col h-screen">
          <div className="flex flex-col justify-center md2:w-1/2 w-full h-screen">
            <div className="text-2xl md2:text-3xl px-5 pt-10 font-bold mb-2 font-[Philosopher] text-[#0041E9] flex md2:justify-center pb-10">
              Manipur Edu
            </div>
            <div className="border-b-2 border-[#33286F] flex justify-center w-full">
              <img
                className="h-full object-fill md2:px-[120px] px-[60px] relative -bottom-1"
                src="SignupPageGirl.png"
                alt="Sign up illustration"
              />
            </div>
          </div>
          <div className="w-full md2:w-1/2 h-screen p-10 flex justify-center items-center bg-white relative">
            <div className="md2:absolute dxs:hidden md2:w-28 md2:h-28 md2:rounded-full md2:bg-[#ACBFFD] -right-14 -top-14"></div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
