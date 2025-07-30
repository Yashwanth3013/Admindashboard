import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { RiDashboard2Line } from "react-icons/ri";
import { MdOutlineDomainAdd } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState("Added Items");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const users=[
     {
          id:1,
          items:"Total Items",
     },
     {
          id:2,
          items:"Added Items",
     }

]
  
  return (
    <div className="maindiv">

    {/* // Mobile Responsive// */}


 <div
      className="">
      <div className=" bg-gray-900">
        <div className="flex md:hidden flex-row justify-between p-5">
          <div className="text-white">Logo</div>
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
               
            <div className="w-full h-screen bg-gray-900 p-4 text-gray-300">
               
          <ul className="space-y-2">
            {/* Dashboards */}
            <li>
              <div
                onClick={() => toggleMenu("Dashboards")}
                className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 1.343-3 3v1h6v-1c0-1.657-1.343-3-3-3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Dashboards</span>
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
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h4l3 10h11M3 10V7a1 1 0 011-1h2l1 2m0 0h13v2H7l-1-2z"
                    />
                  </svg>
                  <span>Added Items</span>
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
                <ul className="ml-9 mt-1 space-y-1 text-gray-400">
                  <li className="hover:text-white cursor-pointer">
                    Total Items
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Added Items
                  </li>
                </ul>
              )}
            </li>

            {/* Customers */}
            <li>
              <div
                onClick={() => toggleMenu("Customers")}
                className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5V4H2v16h5m10 0v-6a4 4 0 00-8 0v6"
                    />
                  </svg>
                  <span>Customers</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openMenu === "Customers" ? "rotate-180" : ""
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
            </li>
          </ul>
        </div>
          </div>
        )}
      </Transition>
    </div>


    {/* //Main Responsive// */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-64 h-screen bg-gray-900 p-4 text-gray-300">
          <div className="text-white text-xl mt-3">Logo</div>

          
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
               
                <ul className="ml-9 mt-1 space-y-1 text-gray-400">
                    {users.map((users)=>(
                    
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
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openMenu === "Customers" ? "rotate-180" : ""
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
            </li>
          </ul>
        </div>
        <div>
          <div className="m-10">
            <h1 className="text-3xl font-bold">Main Content</h1>
            <p className="mt-4 text-gray-700">
              This sidebar can toggle on mobile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
