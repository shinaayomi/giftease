import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { PlusIcon } from "@/utils/icons";
import PersonnelManagementTable from "./PersonnelManagementTable";

export default function PersonnelManagement() {
  return (
    <DashboardLayout>
      <section>
        <header className="flex flex-wrap flex-col sm:flex-row items-center gap-4 mb-6">
          <h2 className="text-[#4F4F4F] text-2xl md:text-[32px] font-satoshi-medium me-auto">
            Personnels
          </h2>

          <button className="w-full sm:w-[186px] h-14 flex justify-center items-center gap-2 bg-app-purple text-white font-satoshi-medium rounded-lg border border-app-purple">
            <PlusIcon />
            Add a Personnel
          </button>
        </header>
      </section>

      <PersonnelManagementTable />
    </DashboardLayout>
  );
}
