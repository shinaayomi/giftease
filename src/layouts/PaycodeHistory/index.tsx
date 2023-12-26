import DashboardLayout from "@/components/DashboardLayout";
import { OutlineFileInvoice, SearchIcon, ShareIcon } from "@/utils/icons";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import PaycodeTable from "./PaycodeTable";
import SendVoucherModal from "./SendVoucherModal";

const Input = dynamic(async () => await import("antd/es/input"), {
  ssr: false,
});

export default function PaycodeHistory() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <DashboardLayout>
        <section>
          <article className="flex flex-wrap flex-col sm:flex-row items-center gap-4">
            <h2 className="text-[#4F4F4F] text-2xl md:text-[32px] font-satoshi-medium me-auto">
              Paycode
            </h2>
            <div className="w-full sm:w-auto flex items-center flex-col sm:flex-row gap-3">
              <button className="w-full sm:w-[200px] h-14 text-app-purple text-xl font-satoshi-medium rounded-lg border border-app-purple">
                Check balance
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-[200px] h-14 bg-app-purple text-white text-xl font-satoshi-medium rounded-lg border border-app-purple"
              >
                Send Voucher
              </button>
            </div>
          </article>

          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            <div className="flex items-center gap-3 md:gap-5 bg-white rounded-lg p-[16px_13px_21px_24px]">
              <div className="w-8 h-8 grid place-items-center bg-[#F2F2F2] text-[#4F4F4F] rounded-full">
                <OutlineFileInvoice />
              </div>
              <div>
                <h1 className="text-[#4F4F4F] text-[32px] font-satoshi-black">
                  05
                </h1>
                <p className="text-[#9B9B9B] text-xs tracking-[-0.24px]">
                  All Paycodes generated
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5 bg-white rounded-lg p-[16px_13px_21px_24px]">
              <div className="w-8 h-8 grid place-items-center bg-[#ECF9EC] text-[#008000] rounded-full">
                <OutlineFileInvoice />
              </div>
              <div>
                <h1 className="text-[#008000] text-[32px] font-satoshi-black">
                  05
                </h1>
                <p className="text-[#9B9B9B] text-xs tracking-[-0.24px]">
                  All Active PayCodes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5 bg-white rounded-lg p-[16px_13px_21px_24px]">
              <div className="w-8 h-8 grid place-items-center bg-[#FDF5E7] text-[#F2994A] rounded-full">
                <OutlineFileInvoice />
              </div>
              <div>
                <h1 className="text-[#FAB941] text-[32px] font-satoshi-black">
                  00
                </h1>
                <p className="text-[#9B9B9B] text-xs tracking-[-0.24px]">
                  Used PayCodes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5 bg-white rounded-lg p-[16px_13px_21px_24px]">
              <div className="w-8 h-8 grid place-items-center bg-[#FFF2F8] text-[#EF5DA8] rounded-full">
                <OutlineFileInvoice />
              </div>
              <div>
                <h1 className="text-[#EF5DA8] text-[32px] font-satoshi-black">
                  00
                </h1>
                <p className="text-[#9B9B9B] text-xs tracking-[-0.24px]">
                  Expired PayCode
                </p>
              </div>
            </div>
          </article>

          <article className="grid  grid-cols-1 md:grid-cols-6 gap-4 mt-6">
            <Input
              placeholder="Search by ID, tickets"
              prefix={<SearchIcon />}
              className="md:col-span-3 h-14 bg-white border border-[#E0E0E0] hover:border-[#E0E0E0] rounded-lg px-4 py-2 app-input"
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
            <button className="h-14 flex justify-center items-center gap-2 bg-white border border-[#E0E0E0] rounded-lg px-4 py-2 text-app-purple">
              <ShareIcon />
              <span>Export sheet</span>
            </button>
          </article>
        </section>

        <section className="bg-white rounded-lg mt-5 overflow-x-scroll">
          <PaycodeTable />
        </section>

        <SendVoucherModal
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
        />
      </DashboardLayout>
    </div>
  );
}
