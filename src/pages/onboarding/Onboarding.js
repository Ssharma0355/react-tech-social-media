import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


const Onboarding = () => {
    const navigate = useNavigate();

    const forCandidate = () => {
        navigate("/hiring-onboarding")
    }
    const forConnection =() =>{
        navigate("/candidate-onboarding");

    }


  return (
    <main className="flex flex-col justify-center p-5">
      <h1>Step1 Onboarding</h1>
      <button onClick={forCandidate}>Looking for Hiring ?</button>
      <button onClick={forConnection}>Looking for Connection and Job?</button>
    </main>
  );
}

export default Onboarding
