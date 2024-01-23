import DashboardLayout from "@/components/DashboardLayout";
import { TicketIcon } from "@/utils/icons";

import React from "react";
import SupportTable from "./SupportTable";

export default function Support() {
  return (
    <DashboardLayout>
      <header className="flex flex-wrap flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-[#4F4F4F] text-2xl md:text-[32px] font-satoshi-medium me-auto">
          All Tickets
        </h2>
        <div>
          <button className="w-full sm:w-[233px] h-14 bg-app-purple text-white text-xl font-satoshi-medium rounded-lg border border-app-purple">
            Make a Complaint
          </button>
        </div>
      </header>
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        <div className="flex items-center gap-3 md:gap-5 bg-white rounded-lg p-[16px_13px_21px_24px]">
          <div className="w-8 h-8 grid place-items-center bg-[#F2F2F2] text-[#4F4F4F] rounded-full">
            <TicketIcon />
          </div>
          <div>
            <h1 className="text-[#4F4F4F] text-[32px] font-satoshi-black">
              05
            </h1>
            <p className="text-[#9B9B9B] text-xs tracking-[-0.24px]">
              Total Number of Tickets created
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-5 bg-white rounded-lg p-[16px_13px_21px_24px]">
          <div className="w-8 h-8 grid place-items-center bg-[#ECF9EC] text-[#008000] rounded-full">
            <TicketIcon />
          </div>
          <div>
            <h1 className="text-[#008000] text-[32px] font-satoshi-black">
              05
            </h1>
            <p className="text-[#9B9B9B] text-xs tracking-[-0.24px]">
              Resolved Tickets
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-5 bg-white rounded-lg p-[16px_13px_21px_24px]">
          <div className="w-8 h-8 grid place-items-center bg-[#FDF5E7] text-[#F2994A] rounded-full">
            <TicketIcon />
          </div>
          <div>
            <h1 className="text-[#FAB941] text-[32px] font-satoshi-black">
              00
            </h1>
            <p className="text-[#9B9B9B] text-xs tracking-[-0.24px]">
              In Progress
            </p>
          </div>
        </div>
      </article>

      <section className="bg-white rounded-lg mt-9">
        <SupportTable />
      </section>
    </DashboardLayout>
  );
}
