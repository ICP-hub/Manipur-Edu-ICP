import React from "react";

function SignUpPage({ children }) {
  return (
    <div className="w-[100vw] flex flex-wrap justify-center items-stretch">
      <div className="sm:flex-col lg1:flex-row flex flex-col w-full max-w-screen-xl xl:mx-auto max-h-[1063px] sm:bg-[#ACBFFD]">
        <div className="flex flex-col justify-center lg1:w-1/2">
          {/* left section */}
          <div className="text-2xl lg1:text-3xl px-5 pt-5 font-bold mb-2 font-[Philosopher] text-[#0041E9] flex lg1:justify-center pb-10">
            Manipur Edu
          </div>
          <div className="lg1:border-b-2 border-[#33286F] flex justify-center w-full">
            <img
              className="h-full object-fill md2:px-[120px] px-[60px] relative -bottom-1"
              srcSet="SignupPageGirl.png"
              alt="Sign up illustration web"
            />
          </div>
        </div>

        {/* right section */}
        <div className="lg1:w-1/2 h-[100vh] p-10 flex justify-center items-center bg-white relative w-full max-w-screen-xl xl:mx-auto max-h-[1063px]">
          <div className="lg1:absolute dxs:hidden lg1:w-28 lg1:h-28 lg1:rounded-full lg1:bg-[#ACBFFD] -right-14 -top-14"></div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
