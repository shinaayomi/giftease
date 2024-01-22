import DashboardLayout from "@/components/DashboardLayout";
import { SearchIcon, ShareIcon } from "@/utils/icons";
import { Input } from "antd";
import React from "react";
import TransactionHistoryTable from "./TransactionHistoryTable";

export default function TransactionHistory() {
  return (
    <DashboardLayout>
      <header className="flex justify-between sm:items-center flex-col md:flex-row gap-6">
        <div>
          <h2 className="text-[#4F4F4F] text-2xl md:text-[32px] font-satoshi-medium mb-2">
            Transaction History
          </h2>
          <p className="text-[#828282] text-sm md:text-base">
            Kindly use the filter fields to filter your result
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Search by ID"
            prefix={<SearchIcon />}
            className="md:col-span-3 h-14 bg-white border border-[#E0E0E0] hover:border-[#E0E0E0] rounded-lg px-4 py-2 app-input"
          />
          <button className="h-14 flex justify-center items-center gap-2 bg-white border border-[#E0E0E0] rounded-lg px-4 py-2 text-app-purple whitespace-pre">
            <ShareIcon />
            <span>Export sheet</span>
          </button>
        </div>
      </header>
      <section className="mt-10">
        <TransactionHistoryTable />
      </section>
    </DashboardLayout>
  );
}
