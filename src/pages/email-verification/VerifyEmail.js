import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


const VerifyEmail = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("")



    const verfyEmail =()=>{
        navigate("/onboarding")

    }
  return (
    <main className="flex flex-col justify-center px-12 py-16">
      <div className="flex flex-col gap-2 text-center  border-[1px] border-[#333] px-12 py-8">
        <p>Email have sent to your registered email id</p>
        <div>
          <input type="text" maxLength={5} value={otp} onChange={(e)=>{setOtp(e.target.value)}} className='p-2 w-full' />
        </div>

        <button className="p-2 bg-black text-yellow-50" onClick={verfyEmail}>
          Verify
        </button>
      </div>
    </main>
  );
}

export default VerifyEmail
