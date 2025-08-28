import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill("")); // 6-digit OTP
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to next input if value entered
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      navigate("/onboarding");
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-2xl px-10 py-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold">Verify Your Email</h1>
        <p className="text-gray-600 text-center">
          We have sent a 6-digit code to your registered email. Enter it below
          to continue.
        </p>

        {/* OTP Inputs */}
        <div className="flex gap-3 justify-center mt-4">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 border border-gray-400 rounded-lg text-center text-lg focus:border-black outline-none"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={!isOtpComplete}
          className={`w-full mt-6 py-2 rounded-lg transition 
            ${
              isOtpComplete
                ? "bg-[#4CAF50] text-[#F6F6F6] hover:bg-[#316f33]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Verify
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Didn’t receive the OTP?{" "}
          <button className="text-blue-600 hover:underline">Resend</button>
        </p>
      </div>
    </main>
  );
};

export default VerifyEmail;
