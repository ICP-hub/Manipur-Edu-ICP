import React from "react";
import SignUpPage from "../../components/student/SignUpPage";

const OtpInputCard = ({ handleOtpChange, handleVerifyOtp, otpValue }) => {
  return (
    <SignUpPage>
      {/* Branding Section */}
      

      {/* OTP Input Card */}
      <div className="w-full max-w-md mx-auto">
        <div className="shadow-sm rounded-lg overflow-hidden">
          <div className="bg-white p-6">
          <h2 className="text-center text-[#00227A] text-2xl font-semibold mb-4 text-nowrap">
          Verify API
            </h2>
            <h5 className="text-center text-[#00227A] text-l font-semibold mb-4">
              Enter OTP sent to your registered mobile number
            </h5>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 py-2 bg-gray-200 text-[#00227A]">
                <i className="bi bi-phone" />
              </span>
              <input
                type="text"
                className="flex-1 py-2 px-3 focus:outline-none placeholder-[#00227A] text-gray-900"
                placeholder="######"
                aria-label="Otp"
                aria-describedby="basic-addon1"
                onChange={handleOtpChange}
                autoComplete="one-time-code"
                value={otpValue} // Autofill OTP
                
              />
            </div>
            <button
              className="w-full mt-4 py-3 bg-[#646ED6] text-white rounded-lg hover:bg-blue-700 transition duration-200"
              onClick={handleVerifyOtp}
            >
              <i className="bi bi-shield-check mr-2" /> VERIFY OTP
            </button>
          </div>
        </div>
      </div>
    </SignUpPage>
  );
};

export default OtpInputCard;
