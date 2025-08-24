import React from "react";
import useThemeStore from "../../store/themeStore";
import Navbar from "../../components/Navbar";
import NavLayout from "../../layouts/NavLayout";

const SignupPage = () => {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <NavLayout>
      <main className={`${darkMode ? "dark" : ""}`}>
        <div className="flex flex-row align-center justify-center gap-6 p-2  w-full">
          <div className="flex  align-center">
            <form action="Submit" className="flex flex-col">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <label htmlFor="">First Name</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Last Name</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
            </form>
          </div>
          {/* right pannel  */}
          <div>
            <h1>Right Pannel</h1>
          </div>
        </div>
      </main>
    </NavLayout>
  );
};

export default SignupPage;
