import React from "react";
import useThemeStore from "../../store/themeStore";
import NavLayout from "../../layouts/NavLayout";
import CaruselSection from "../landingpage/Section1/CaruselSection";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore"; // ✅ import store
import toast from "react-hot-toast";


const SignupPage = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const navigate = useNavigate();
  const { userInfo, setUserInfo, signup } = useAuthStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ [name]: value }); // ✅ update store
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const { firstName, lastName, email, password } = userInfo;

  if (firstName && lastName && email && password) {
    const result = await signup();
    if (result.success) {
      toast.success(result.data.message);
      navigate("/verify-email");
    } else {
     toast.error(result.error);
    }
  } else {
    alert("Please fill all required fields.");
  }
};

  // ✅ Check if all fields are filled
  const isFormComplete = Object.values(userInfo).every(
    (val) => val.trim() !== ""
  );

  return (
    <NavLayout>
      <main
        className={`${darkMode ? "dark" : ""} h-[90vh] md:min-h-screen flex items-center`}
      >
      
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-8 w-full max-w-6xl mx-auto">
          {/* Left Panel - Form */}
          <div className="flex flex-col w-full md:w-1/2 p-6 bg-white rounded-xl shadow-md gap-6">
            <div className="flex justify-center">
              <button className="w-full bg-gray-200 rounded-lg py-2 font-medium hover:bg-gray-300 transition">
                Signup with Google
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label>First Name</label>
                  <input
                    className="p-2 rounded-lg border border-gray-300 w-full"
                    type="text"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label>Last Name</label>
                  <input
                    className="p-2 rounded-lg border border-gray-300 w-full"
                    type="text"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label>Email</label>
                <input
                  className="p-2 rounded-lg border border-gray-300 w-full"
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Password</label>
                <input
                  className="p-2 rounded-lg border border-gray-300 w-full"
                  type="password"
                  name="password"
                  value={userInfo.password}
                  onChange={handleChange}
                />
              </div>

              {/* ✅ Disabled until all fields filled */}
              <button
                type="submit"
                disabled={!isFormComplete}
                className={`w-full mt-6 py-2 rounded-lg transition font-semibold
                  ${
                    isFormComplete
                      ? "bg-[#4CAF50] text-white hover:bg-[#388E3C]"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                Signup with Email
              </button>
            </form>

            <div className="text-center">
              <p>
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#4CAF50] font-bold">
                  Login
                </Link>
              </p>
            </div>
          </div>

          {/* Right Panel - Carousel */}
          <div className="hidden md:flex md:w-1/2 justify-center">
            <CaruselSection />
          </div>
        </div>
      </main>
    </NavLayout>
  );
};

export default SignupPage;
