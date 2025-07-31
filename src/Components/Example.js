import React from "react";
import Dashboard from "./Dashboard";
import Timeframe from "./Timeframe";
import Stickynavbar from "./Stickynavbar";

const Example = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* ✅ Sidebar */}
      <Stickynavbar/>

      {/* ✅ Main Content Area */}
      <div className="flex-1  flex flex-col">
        {/* 🔝 Sticky Header */}
        <Dashboard/>

        {/* 📜 Scrollable Content */}
        <div className="flex-1 overflow-y-auto ">
       <Timeframe/>
       </div>
      </div>
    </div>
  );
};

export default Example;
