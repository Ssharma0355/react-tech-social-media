import React from 'react'
import { Link, useNavigate } from "react-router-dom";


const VerifyEmail = () => {
    const navigate = useNavigate();

    const verfyEmail =()=>{
        navigate("/onboarding")

    }
  return (
    <div>
      otp and step to onboarding
      <button className='p-2 bg-black text-yellow-50' onClick={verfyEmail}>Verify</button>
    </div>
  )
}

export default VerifyEmail
