import React, { useState, useEffect }  from "react";

import { MdDarkMode } from "react-icons/md";

import { IoNotificationsOutline } from "react-icons/io5";

import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="flex flex-col">
      <div className="card shadow-lg border-2 bg-white h-full w-full dark:bg-gray-900 text-black dark:text-white">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center p-5">
          <div>
            <div class="w-full max-w-lg mx-auto px-4">
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  placeholder="Search..."
                  style={{ backgroundColor: "#EAEDF1" }}
                  class="md:w-48 xl:w-full lg:w-full pl-12 pr-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200 text-gray-700"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-10 md:gap-5 md:mr-0 xl:mr-10  lg:mr-10">
            <div onClick={() => setDarkMode(!darkMode)}>
              <MdDarkMode size={24} style={{ cursor: "pointer" }} />
            </div>
            <div >
              <IoNotificationsOutline size={24} style={{ cursor: "pointer" }} />
            </div>
            <div>
              <IoSettingsOutline size={24} style={{ cursor: "pointer" }} />
            </div>
            <div>
              <CgProfile size={24} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
