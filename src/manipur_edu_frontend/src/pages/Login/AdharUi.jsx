import React, { useState } from "react";
import SignUpPage from "../../components/student/SignUpPage";

const AadhaarInputCard = ({ handleAadhaarChange, handleOtpRequest }) => {
  const [isOtpLoading, setIsOtpLoading] = useState(false);

  const handleSendOtpClick = async () => {
    setIsOtpLoading(true);
    // Simulate OTP sending delay
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
    await handleOtpRequest(); // Call the OTP request handler
    setIsOtpLoading(false);
  };

  return (
    <SignUpPage>
      {/* Branding Section */}
      

      {/* Aadhaar Input Card */}
      <div className="w-full max-w-md mx-auto">
        <div className="shadow-sm rounded-lg overflow-hidden">
          <div className="bg-white p-6">
          <h2 className="text-center text-[#00227A] text-2xl font-semibold mb-4 text-nowrap">
          Verify API
            </h2>
         <h5 className="text-center text-[#00227A] text-l font-semibold mb-4 text-nowrap">
              Enter Your Aadhaar Card Number
            </h5>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 py-2 bg-gray-200 text-[#00227A]">
                <i className="bi bi-fingerprint" />
              </span>
              <input
                type="text"
                className="flex-1 py-2 px-3 focus:outline-none  placeholder-[#00227A] text-gray-900"
                placeholder="Enter your 12-digit Aadhaar No"
                aria-label="AadhaarNumber"
                aria-describedby="basic-addon1"
                onChange={handleAadhaarChange}
              />
            </div>
            {!isOtpLoading ? (
              <button
                className="w-full mt-4 py-3 bg-[#646ED6] text-white rounded-lg hover:bg-[#303aa2] transition duration-200"
                onClick={handleSendOtpClick}
              >
                <i className="bi bi-send mr-2" /> SEND OTP
              </button>
            ) : (
              <button
                className="w-full mt-4 py-3 bg-red-600 text-white rounded-lg"
                disabled
              >
                <div className="flex justify-center items-center">
                  <div
                    className="spinner-border spinner-border-sm mr-2"
                    role="status"
                  />
                  SENDING OTP...
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </SignUpPage>
  );
};

export default AadhaarInputCard;
