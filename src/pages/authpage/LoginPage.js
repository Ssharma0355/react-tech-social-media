import React from 'react'
import NavLayout from '../../layouts/NavLayout';
import useThemeStore from "../../store/themeStore";
import { Link } from 'react-router-dom';
import CaruselSection from '../landingpage/Section1/CaruselSection';

const LoginPage = () => {
  const darkMode = useThemeStore((state) => state.darkMode);

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
            <form action="Submit" className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 w-full">
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <input
                  className="p-1 rounded-[8px]"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Password</label>
                <input
                  className="p-1 rounded-[8px]"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <button className="w-full bg-gray-200 rounded-[8px] p-1">
                Signup with email
              </button>
            </form>
            <div>
              <p>
                You already have account?{" "}
                <Link to={"/signup"} className="text-[#4CAF50] font-bold">
                  Signup
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
}

export default LoginPage
