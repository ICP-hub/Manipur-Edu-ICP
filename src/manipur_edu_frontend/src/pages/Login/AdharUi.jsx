import React, { useState, useEffect } from 'react';
import { Ed25519KeyIdentity } from '@dfinity/identity';
import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory as backend_idl, canisterId as backend_id } from '../../../../declarations/manipur_edu_backend'; // Adjust the path as needed
import SignUpPage from '../../components/student/SignUpPage';

const AadhaarVerification = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [otpValue, setOtpValue] = useState('');
  const [isOtpLoading, setIsOtpLoading] = useState(false);
  const [publicKey, setPublicKey] = useState([]);
  const [principalId, setPrincipalId] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [showOtpScreen, setShowOtpScreen] = useState(false); // State to control screen visibility

  const hardcodedOtp = '123456'; // Hardcoded OTP for demonstration

  const handleAadhaarChange = (e) => {
    setAadhaarNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtpValue(e.target.value);
  };

  const handleSendOtpClick = () => {
    setIsOtpLoading(true);
    console.log('OTP requested for Aadhaar number:', aadhaarNumber);

    // Simulate a delay to represent OTP processing
    setTimeout(() => {
      // Show alert with hardcoded OTP value
      alert(`Your OTP is: ${hardcodedOtp}`);
      
      // Transition to OTP screen after alert is dismissed
      setOtpValue(hardcodedOtp); // Autofill OTP field with hardcoded OTP
      setShowOtpScreen(true); // Show OTP screen
      setIsOtpLoading(false); // Hide loading state
      console.log('OTP screen should now be visible');
    }, 2000);
  };

  const handleVerifyOtp = () => {
    console.log('OTP entered:', otpValue);
    if (otpValue === hardcodedOtp) {
      setIsVerified(true); // OTP is correct for demonstration
    } else {
      alert('Invalid OTP. Please try again.');
    }
    setShowOtpScreen(false); 
  };

  useEffect(() => {
    if (isVerified) {
      const generateIdentityAndAuthenticate = async () => {
        try {
          const fixedNumber = process.env.REACT_APP_FIXED_NUMBER;
          const encoder = new TextEncoder();
          const combinedString = `${aadhaarNumber}-${fixedNumber}`;
          const combinedBuffer = encoder.encode(combinedString);
          const hashBuffer = await crypto.subtle.digest('SHA-256', combinedBuffer);

          let seed = new Uint8Array(hashBuffer);
          if (seed.length > 32) seed = seed.slice(0, 32);
          else if (seed.length < 32) seed = new Uint8Array([...seed, ...new Uint8Array(32 - seed.length)]);

          const encryptedSeed = await encryptSeed(seed);
          const decryptedSeed = await decryptSeed(encryptedSeed);

          const identity = Ed25519KeyIdentity.generate(decryptedSeed);
          const principal = identity.getPrincipal();

          const publicKey = identity.getPublicKey().toDer();
          const publicKeyArray = Array.from(publicKey);

          sessionStorage.setItem('principalId', principal.toText());
          setPublicKey(publicKeyArray);
          setPrincipalId(principal.toText());

          await authenticateAndCallBackend(identity);
        } catch (error) {
          console.error('Error generating identity or authenticating:', error);
          setResponseMessage(`Error: ${error.message}`);
        }
      };

      const encryptSeed = async (seed) => {
        const key = await window.crypto.subtle.generateKey(
          { name: 'AES-GCM', length: 256 },
          true,
          ['encrypt', 'decrypt']
        );
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        const encryptedSeed = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, seed);

        return {
          key: await window.crypto.subtle.exportKey('jwk', key),
          iv: Array.from(iv),
          data: Array.from(new Uint8Array(encryptedSeed)),
        };
      };

      const decryptSeed = async (encryptedSeed) => {
        const key = await window.crypto.subtle.importKey(
          'jwk',
          encryptedSeed.key,
          { name: 'AES-GCM', length: 256 },
          true,
          ['decrypt']
        );
        const iv = new Uint8Array(encryptedSeed.iv);
        const decryptedSeed = await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, new Uint8Array(encryptedSeed.data));

        return new Uint8Array(decryptedSeed);
      };

      const authenticateAndCallBackend = async (identity) => {
        try {
          const agent = new HttpAgent({ identity });

          if (process.env.NODE_ENV === 'development') await agent.fetchRootKey();

          const backendActor = Actor.createActor(backend_idl, { agent, canisterId: backend_id });
          const response = await backendActor.greet();
          console.log('Greet response:', response);

          setResponseMessage(`Authenticated call successful: ${response}`);
        } catch (error) {
          console.error('Error calling greet function:', error);
          setResponseMessage(`Error calling greet function: ${error.message}`);
        }
      };

      generateIdentityAndAuthenticate();
    }
  }, [aadhaarNumber, isVerified]);

  const Uint8ArrayToCommaSeparated = (uint8Array) => uint8Array.join(', ');

  return (
    <SignUpPage>
      {!isVerified && !showOtpScreen ? (
        <div className="w-full max-w-md mx-auto">
          <div className="shadow-sm rounded-lg overflow-hidden">
            <div className="bg-white p-6">
              <h2 className="text-center text-[#00227A] text-2xl font-semibold mb-4">Verify API</h2>
              <h5 className="text-center text-[#00227A] text-l font-semibold mb-4">Enter Your Aadhaar Card Number</h5>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <span className="px-3 py-2 bg-gray-200 text-[#00227A]">
                  <i className="bi bi-fingerprint" />
                </span>
                <input
                  type="text"
                  className="flex-1 py-2 px-3 focus:outline-none placeholder-[#00227A] text-gray-900"
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
                <button className="w-full mt-4 py-3 bg-red-600 text-white rounded-lg" disabled>
                  <div className="flex justify-center items-center">
                    <div className="spinner-border spinner-border-sm mr-2" role="status" />
                    SENDING OTP...
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : showOtpScreen ? (
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
      ) : null}
      {responseMessage && <div className="mt-4 text-center text-[#00227A]">{responseMessage}</div>}
      {isVerified &&!showOtpScreen && (
        <div className="mt-4 text-center text-green-600">
          <h4>Verification successful!</h4>
          <p>Public Key: {Uint8ArrayToCommaSeparated(publicKey)}</p>
          <p>Principal ID: {principalId}</p>
        </div>
      )}
    </SignUpPage>
  );
};

export default AadhaarVerification;
