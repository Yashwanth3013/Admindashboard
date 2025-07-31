import React from "react";
import Dashboard from "./Dashboard";

import { GiTempleGate } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

function Timeframe() {

     const cards=[
          {
               id:1,
               icon:<GiTempleGate size={36} style={{color:"#604AE3"}} />,
               text:"No of Items",
               price:"₹2,854",
          },
          {
               id:2,
               icon:<MdGroups size={36} style={{color:"#604AE3"}} />,
               text:"Total Revenue",
               price:"₹705",
          },
          {
               id:3,
               icon:<MdPersonPin size={36} style={{color:"#604AE3"}} />,
               text:"Customers",
               price:"₹9,431",
          },
          {
               id:4,
               icon:<RiMoneyDollarBoxLine size={36} style={{color:"#604AE3"}} />,
               text:"Total Orders",
               price:"₹60",
          },
     ]
  return (
     
    <div className="bg-gray-200 w-full md:h-dvh bg-gray-900 p-3  ">
      <div className="p-5 ">
        <div className="font-semibold" style={{ color: "#5D7186" }}>
          Analytics
        </div>
      </div>

      <div class="timeframe p-5 ">
        <span class="text-black text-sm px-6 py-1.5 rounded-full" style={{backgroundColor:"#E0E0E0"}}>
          Time Frame
        </span>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-5 lg:grid-cols-2 xl:grid-cols-3 mt-10 md:p-5">
{cards.map((cards)=>(
          <div className="card shadow-lg bg-white md:w-72 xl:w-72 h-40">
               
           <div className="flex flex-row justify-start items-center p-10 gap-10">
               <div className="flex flex-col justify-center items-center gap-5">
                    <div className="card shadow-lg w-10 bg-gray-100 flex justify-center items-center">
                         {cards.icon}
                    </div>
                    <div className="text-sm" style={{color:"#687D92"}}>{cards.text}</div>
               </div>
               <div className="text-black font-bold">
                    {cards.price}
               </div>
           </div>
           
          </div>
 ))}
        </div>
         <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-5 lg:grid-cols-2 xl:grid-cols-3 mt-10 md:p-5">
{cards.map((cards)=>(
          <div className="card shadow-lg bg-white md:w-72 xl:w-72 h-40">
               
           <div className="flex flex-row justify-start items-center p-10 gap-10">
               <div className="flex flex-col justify-center items-center gap-5">
                    <div className="card shadow-lg w-10 bg-gray-100 flex justify-center items-center">
                         {cards.icon}
                    </div>
                    <div className="text-sm" style={{color:"#687D92"}}>{cards.text}</div>
               </div>
               <div className="text-black font-bold">
                    {cards.price}
               </div>
           </div>
           
          </div>
 ))}
        </div>
      </div>
    </div>
  );
}

export default Timeframe;
