import DashboardLayout from "@/components/DashboardLayout";
import React, { useState } from "react";
import SecuritySettingsPassword from "./SecuritySettingsPassword";
import SecuritySettingsPin from "./SecuritySettingsPin";

export default function SecuritySettings() {
  const [activeTab, setActiveTab] = useState("Password");

  const securityTabs: any = {
    Password: <SecuritySettingsPassword />,
    Pin: <SecuritySettingsPin />,
  };

  function renderTabs(param: any) {
    return securityTabs[param];
  }

  return (
    <DashboardLayout>
      <section className="max-w-[758px] mx-auto bg-white rounded-lg py-10 px-4 md:px-8 lg:px-16">
        <h4 className="text-[#4F4F4F] text-2xl text-center font-satoshi-medium mb-5">
          Security Settings
        </h4>
        <div className="w-fit max-w-full mx-auto flex justify-center items-center bg-white border border-[rgba(178,177,255,0.50)] rounded-[30px] p-1 mb-7">
          {["Password", "Pin"].map((btn, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(btn)}
              className={`max-w-1/2 w-[200px] h-[38px] ${
                activeTab === btn && "bg-[#E8E4FE] text-app-purple"
              } text-[#828282] rounded-[20px]`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="max-w-[500px] mx-auto my-16">
          {renderTabs(activeTab)}
        </div>
      </section>
    </DashboardLayout>
  );
}
