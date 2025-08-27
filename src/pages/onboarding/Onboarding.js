import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


const Onboarding = () => {
    const navigate = useNavigate();

       const [userInfo, setUserInfo] = useState({
         firstName: "",
         lastName: "",
         email: "",
         password: "",
       });

       const handleChange = (e) => {
         const { name, value } = e.target;
         setUserInfo((prev) => ({
           ...prev,
           [name]: value,
         }));
       };

       const handleSubmit = (e) => {
         e.preventDefault();
         const { firstName, lastName, email, password } = userInfo;

         if (firstName && lastName && email && password) {
           // ✅ All fields filled
           navigate("/onboarding");
         } else {
           alert("Please fill all required fields.");
         }
       };
  return (
    <main className="flex flex-col justify-center p-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">First Name</label>
            <input
              className="p-1 rounded-[8px]"
              type="text"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Last Name</label>
            <input
              className="p-1 rounded-[8px]"
              type="text"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            className="p-1 rounded-[8px]"
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="w-full bg-gray-200 rounded-[8px] p-1">
          Next Step
        </button>
      </form>

      <h1>Step1 Onboarding</h1>
    </main>
  );
}

export default Onboarding
