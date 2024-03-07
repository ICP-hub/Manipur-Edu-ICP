import React from "react";

function SignUpPage({ children }) {
  return (
    <div className="flex flex-wrap h-screen bg-[#ACBFFD]">
      <div className=" w-full">
        <div className="flex h-screen">
          <div className="flex flex-col justify-center md:w-1/2 w-full">
            <div className="text-3xl font-bold mb-2 font-[Philosopher] text-[#0041E9] flex justify-center pb-10">Manipur Edu</div>
            <div className="border-b-2 border-[#33286F] flex justify-center w-full">
              <img
                className="h-full object-fill px-[120px] relative -bottom-1"
                src="SignupPageGirl.png"
                alt="Sign up illustration"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-10 flex justify-center items-center bg-white relative overflow-hidden">
            <div className="absolute w-28 h-28 rounded-full bg-[#ACBFFD] -right-14 -top-14"></div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
