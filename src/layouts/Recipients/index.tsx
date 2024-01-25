import DashboardLayout from "@/components/DashboardLayout";
import { DownloadIcon, PlusIcon, SearchIcon, ShareIcon } from "@/utils/icons";
import { Input } from "antd";
import React from "react";
import RecipientsTable from "./RecipientsTable";

export default function Recipients() {
  return (
    <DashboardLayout>
      <section>
        <header className="flex flex-wrap flex-col sm:flex-row items-center gap-4">
          <h2 className="text-[#4F4F4F] text-2xl md:text-[32px] font-satoshi-medium me-auto">
            Recipients
          </h2>
          <div className="w-full sm:w-auto flex items-center flex-col sm:flex-row gap-3">
            <button className="w-full sm:w-[200px] h-14 flex justify-center items-center gap-2 text-app-purple text-xl font-satoshi-medium rounded-lg border border-app-purple">
              <PlusIcon />
              Add a recipient
            </button>
            <button className="w-full sm:w-[200px] h-14 flex justify-center items-center gap-2 bg-app-purple text-white text-xl font-satoshi-medium rounded-lg border border-app-purple">
              <DownloadIcon />
              Import recipients
            </button>
          </div>
        </header>

        <article className="grid  grid-cols-1 md:grid-cols-6 gap-4 my-6">
          <Input
            placeholder="Search by ID, tickets"
            prefix={<SearchIcon />}
            className="md:col-span-4 h-14 bg-white border border-[#E0E0E0] hover:border-[#E0E0E0] rounded-lg px-4 py-2 app-input"
          />
          <div className="h-14 flex justify-center items-center gap-2 bg-white border border-[#E0E0E0] rounded-lg px-4 py-2">
            <span className="text-[#828282]">Filter:</span>
            <select
              name=""
              id=""
              className="text-[#4F4F4F] border-0 outline-none"
            >
              <option value="1">None</option>
              <option value="2">Name</option>
              <option value="3">Date</option>
            </select>
          </div>
          <div className="h-14 flex justify-center items-center gap-2 bg-white border border-[#E0E0E0] rounded-lg px-4 py-2">
            <span className="text-[#828282]">Sort by:</span>
            <select
              name=""
              id=""
              className="text-[#4F4F4F] border-0 outline-none"
            >
              <option value="1">None</option>
              <option value="2">list</option>
              <option value="3">grid</option>
            </select>
          </div>
        </article>
        <RecipientsTable />
      </section>
    </DashboardLayout>
  );
}
