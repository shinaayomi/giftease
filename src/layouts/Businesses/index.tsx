import DashboardLayout from "@/components/DashboardLayout";
import { PlusIcon } from "@/utils/icons";
import React from "react";

export default function Businesses() {
  return (
    <DashboardLayout>
      <header className="flex justify-between items-center">
        <div className="flex">
          <button>Business lists</button>
          <button>Business Verifications (10)</button>
          <button>Email Verifications (5)</button>
        </div>
        <button className="w-full sm:w-1/2 md:w-[172px] h-14 inline-flex justify-center items-center gap-2 bg-app-purple text-white font-satoshi-medium rounded-lg">
          <PlusIcon />
          <span>Invite a business</span>
        </button>
      </header>
    </DashboardLayout>
  );
}
