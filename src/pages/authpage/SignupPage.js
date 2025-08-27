import React, { useState } from "react";
import useThemeStore from "../../store/themeStore";
import NavLayout from "../../layouts/NavLayout";
import CaruselSection from "../landingpage/Section1/CaruselSection";
import { Link, useNavigate } from "react-router-dom";


const SignupPage = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
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
    <NavLayout>
      <main className={`${darkMode ? "dark" : ""}`}>
        <div className="flex flex-row justify-center align-center justify-center gap-6 px-12 py-8 w-full">
          <div className="flex flex-col align-center w-full p-4 gap-8">
            <div className="flex align-center justify-center">
              <button className="w-full bg-gray-200 rounded-[8px] p-1">
                Signup with Google
              </button>
            </div>
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
              <div className="flex flex-col gap-1">
                <label htmlFor="">Password</label>
                <input
                  className="p-1 rounded-[8px]"
                  type="password"
                  name="password"
                  value={userInfo.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-200 rounded-[8px] p-1"
              >
                Signup with email
              </button>
            </form>
            <div>
              <p>
                You already have account?{" "}
                <Link to={"/login"} className="text-[#4CAF50] font-bold">
                  Login
                </Link>
              </p>
            </div>
          </div>
          {/* right pannel  */}
          <CaruselSection />
        </div>
      </main>
    </NavLayout>
  );
};

export default SignupPage;
