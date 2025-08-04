import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { RiDashboard2Line } from "react-icons/ri";
import { MdOutlineDomainAdd } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdOutlineHomeWork } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import Logo from "../Assests/E-logo.jpg"
function Stickynavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const users = [
    {
      id: 1,
      items: "Total Items",
    },
    {
      id: 2,
      items: "Add Items",
    },
  ];

  const pages = [
    {
      id: 1,
      items: "Welcome",
    },
    {
      id: 2,
      items: "FAQ'S",
    },
    {
      id: 3,
      items: "Comming soon",
    },
    {
      id: 4,
      items: "404 Error",
    },

  ];

  const Auth=[
     {
          id:1,
          items:'New Admin',
     },
     {
          id:2,
          items:'Total Admins',
     },

  ]

  

  return (
    <div className="maindiv">
      {/* // Mobile Responsive// */}

      <div className="">
        <div className=" bg-gray-900">
          <div className="flex md:hidden flex-row justify-between p-5">
             <img src={Logo} alt="Logo" className="w-32 h-10"/>
            <div className=" flex  md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md "
                aria-controls="mobile-menu"
                aria-expanded="false"
                style={{ backgroundColor: "white" }}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="block md:hidden flex flex-col " id="mobile-menu">
              <div className="">
                 <div className="md:w-64 h-dvh sticky top-0 bg-gray-900 p-3  overflow-y-auto   text-gray-300 ">

          <ul className=" ">
            {/* Dashboards */}
            <div class="p-2 text-xl">Menu</div>
            <li>
              <div
                onClick={() => toggleMenu("Dashboards")}
                className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <div className="flex flex-row justify-center gap-2 items-center">
                  <RiDashboard2Line size={20} />
                  <span className="text-base">Dashboards</span>
                </div>
                {/* <svg className={`w-4 h-4 transition-transform ${openMenu === "Dashboards" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg> */}
              </div>
            </li>

            {/* Added Items */}
            <li>
              <div
                onClick={() => toggleMenu("Added Items")}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                  openMenu === "Added Items" 
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                <div className="flex flex-row gap-2 items-center">
                  <MdOutlineDomainAdd size={20} />
                  <span class="text-base">Added Items</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openMenu === "Added Items" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Submenu */}

              {openMenu === "Added Items" && (
                <ul className="ml-9 mt-1 space-y-2 text-gray-400">
                  {users.map((users) => (
                    <li className="hover:text-white cursor-pointer">
                      {users.items}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Customers */}
            <li>
              <div
                onClick={() => toggleMenu("Customers")}
                className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <div className="flex flex-row gap-2 items-center">
                  <RiContactsBook3Line size={20} />
                  <span className="text-base">Customers</span>
                </div>
              </div>
            </li>

            {/* Orders */}
            <li>
              <div
                onClick={() => toggleMenu("Customers")}
                className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <div className="flex flex-row gap-2 items-center">
                  <MdOutlineHomeWork size={20} />
                  <span className="text-base">Orders</span>
                </div>
              </div>
            </li>

            {/* Transcation */}
            <li>
              <div
                onClick={() => toggleMenu("Customers")}
                className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <div className="flex flex-row gap-2 items-center">
                  <MdPayment size={20} />
                  <span className="text-base">Transactions</span>
                </div>
              </div>
            </li>
          </ul>

          <div className="p-2 flex flex-col text-base mt-5">
               <div>CUSTOM</div>

                  {/* Pages */}
                  <ul>
            <li>
              <div
                onClick={() => toggleMenu("Pages")}
                className={`flex items-center justify-between p-2 mt-3 rounded-lg cursor-pointer ${
                  openMenu === "Pages"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                <div className="flex flex-row gap-2 items-center">
                  <MdOutlineDomainAdd size={20} />
                  <span class="text-base">Pages</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openMenu === "Pages" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Submenu */}

              {openMenu === "Pages" && (
                <ul className="ml-9 mt-2 space-y-2 text-gray-400">
                  {pages.map((pages) => (
                    <li className="hover:text-white cursor-pointer">
                      {pages.items}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            </ul>

                     {/* Authentication */}
                  <ul>
            <li>
              <div
                onClick={() => toggleMenu("Authentication")}
                className={`flex items-center justify-between p-2 mt-3 rounded-lg cursor-pointer ${
                  openMenu === "Authentication"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                <div className="flex flex-row gap-2 items-center">
                  <AiFillLock size={20} />
                  <span class="text-base"> Authentication</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openMenu === "Authentication" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Submenu */}

              {openMenu === "Authentication" && (
                <ul className="ml-9  space-y-3 text-gray-400">
                  {Auth.map((Auth) => (
                    <li className="hover:text-white cursor-pointer">
                      {Auth.items}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            </ul>

          </div>
        </div>
              </div>
            </div>
          )}
        </Transition>
      </div>

      {/* //Main Responsive// */}
      <div className=" md:block md:flex flex flex-col md:flex-row relative ">
        <div className="md:w-64 md:h-screen sticky top-0  bg-gray-900 p-3 text-gray-300 hidden md:block dark:bg-white text-white dark:text-black">
          <div className="text-white text-xl mt-3">
               <img src={Logo} alt="Logo" className="md:w-48 md:h-12 xl:w-72 lg:w-72 xl:w-72 h-12"/>
          </div>

          <ul className=" mt-3">
            {/* Dashboards */}
            <div class="p-2 text-xl">Menu</div>
            <li>
              <div
                onClick={() => toggleMenu("Dashboards")}
                className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <div className="flex flex-row justify-center gap-2 items-center">
                  <RiDashboard2Line size={20} />
                  <span className="text-base">Dashboards</span>
                </div>
                {/* <svg className={`w-4 h-4 transition-transform ${openMenu === "Dashboards" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg> */}
              </div>
            </li>

            {/* Added Items */}
            <li>
              <div
                onClick={() => toggleMenu("Added Items")}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                  openMenu === "Added Items" 
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                <div className="flex flex-row gap-2 items-center">
                  <MdOutlineDomainAdd size={20} />
                  <span class="text-base">Added Items</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openMenu === "Added Items" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Submenu */}

              {openMenu === "Added Items" && (
                <ul className="ml-9 mt-1 space-y-2 text-gray-400">
                  {users.map((users) => (
                    <li className="hover:text-white cursor-pointer">
                      {users.items}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Customers */}
            <li>
              <div
                onClick={() => toggleMenu("Customers")}
                className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <div className="flex flex-row gap-2 items-center">
                  <RiContactsBook3Line size={20} />
                  <span className="text-base">Customers</span>
                </div>
              </div>
            </li>

            {/* Orders */}
            <li>
              <div
                onClick={() => toggleMenu("Customers")}
                className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <div className="flex flex-row gap-2 items-center">
                  <MdOutlineHomeWork size={20} />
                  <span className="text-base">Orders</span>
                </div>
              </div>
            </li>

            {/* Transcation */}
            <li>
              <div
                onClick={() => toggleMenu("Customers")}
                className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <div className="flex flex-row gap-2 items-center">
                  <MdPayment size={20} />
                  <span className="text-base">Transactions</span>
                </div>
              </div>
            </li>
          </ul>

          <div className="p-2 flex flex-col text-base mt-5">
               <div>CUSTOM</div>

                  {/* Pages */}
                  <ul>
            <li>
              <div
                onClick={() => toggleMenu("Pages")}
                className={`flex items-center justify-between p-2 mt-2 rounded-lg cursor-pointer ${
                  openMenu === "Pages"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                <div className="flex flex-row gap-2 items-center">
                  <MdOutlineDomainAdd size={20} />
                  <span class="text-base">Pages</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openMenu === "Pages" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Submenu */}

              {openMenu === "Pages" && (
                <ul className="ml-9 mt-2 space-y-2 text-gray-400">
                  {pages.map((pages) => (
                    <li className="hover:text-white cursor-pointer">
                      {pages.items}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            </ul>

                     {/* Authentication */}
                  <ul>
            <li>
              <div
                onClick={() => toggleMenu("Authentication")}
                className={`flex items-center justify-between p-2 mt-2 rounded-lg cursor-pointer ${
                  openMenu === "Authentication"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                <div className="flex flex-row gap-2 items-center">
                  <AiFillLock size={20} />
                  <span class="text-base"> Authentication</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openMenu === "Authentication" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Submenu */}

              {openMenu === "Authentication" && (
                <ul className="ml-9  space-y-2 text-gray-400">
                  {Auth.map((Auth) => (
                    <li className="hover:text-white cursor-pointer">
                      {Auth.items}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Stickynavbar;
