import React from "react";

function SignUpPage({ children }) {
  return (
    <div className="flex flex-wrap h-screen sm:bg-[#ACBFFD] ">
      <div className=" w-full">
        <div className="sm:flex-col lg1:flex-row flex flex-col h-screen">
          <div className="flex flex-col justify-center lg1:w-1/2 w-full h-screen">
            <div className="text-2xl lg1:text-3xl px-5 pt-5 font-bold mb-2 font-[Philosopher] text-[#0041E9] flex lg1:justify-center pb-10">
              Manipur Edu
            </div>
            <div className="lg1:border-b-2 border-[#33286F] flex justify-center w-full">
              <img
                className="h-full object-fill md2:px-[120px] px-[60px] relative -bottom-1"
                src="SignupPageGirl.png"
                alt="Sign up illustration"
              />
            </div>
          </div>
          <div className="w-full lg1:w-1/2 h-screen p-10 flex justify-center items-center bg-white relative">
            <div className="lg1:absolute dxs:hidden lg1:w-28 lg1:h-28 lg1:rounded-full lg1:bg-[#ACBFFD] -right-14 -top-14"></div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
