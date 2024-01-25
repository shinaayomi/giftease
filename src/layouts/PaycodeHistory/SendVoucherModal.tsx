import {
  CircularCloseIcon,
  NigeriaIcon,
  USAIcon,
  WarningIcon,
} from "@/utils/icons";
import dynamic from "next/dynamic";
import React from "react";

const Modal = dynamic(async () => await import("antd/es/modal"), {
  ssr: false,
});
const Select = dynamic(async () => await import("antd/es/select"), {
  ssr: false,
});
const Input = dynamic(async () => await import("antd/es/input"), {
  ssr: false,
});

let sentence = "Fox";
let bg = sentence.split("");
bg[0] = "B";
console.log("--", bg);

export default function SendVoucherModal({ open, onOk, onCancel }: any) {
  const handleSelect = (value: unknown) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <Modal
        wrapClassName="voucherModal"
        width="720px"
        closable={false}
        footer={false}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
      >
        <div className="flex items-center justify-between border-b border-[#E0E0E0] py-[30px] px-4 md:px-6 lg:px-10">
          <h4 className="text-[#828282] text-xl md:text-2xl">Send Voucher</h4>
          <button onClick={onCancel}>
            <CircularCloseIcon />
          </button>
        </div>

        <div className="px-4 md:px-6 lg:px-10 pb-5">
          <p className="text-[#4F4F4F] my-[18px]">Send bulk voucher easily</p>
          <form>
            <label htmlFor="" className="inline-block text-black mb-3">
              Amount per Paycode
            </label>
            <div className="flex items-center gap-2">
              <Select
                defaultValue="naira"
                onChange={handleSelect}
                options={[
                  {
                    value: "naira",
                    label: (
                      <div className="flex items-center gap-2">
                        <NigeriaIcon />
                        <span className="text-[#9B9B9B] text-xs">NGA</span>
                      </div>
                    ),
                  },
                  {
                    value: "dollar",
                    label: (
                      <div className="flex items-center gap-2">
                        <USAIcon />{" "}
                        <span className="text-[#9B9B9B] text-xs">USD</span>
                      </div>
                    ),
                  },
                ]}
              />
              <Input
                className="h-14 bg-[#F8F8F8] border-[#E0E0E0] rounded-lg"
                placeholder="1000"
              />
            </div>
            <label htmlFor="" className="inline-block text-black mb-3 mt-4">
              Quantity
            </label>
            <Input
              className="h-14 bg-[#F8F8F8] border-[#E0E0E0] rounded-lg"
              placeholder="1000"
            />
            <label htmlFor="" className="inline-block text-black mb-3 mt-4">
              Beneficiary
            </label>
            <Select
              className="w-full"
              defaultValue="all"
              onChange={handleSelect}
              options={[
                {
                  value: "all",
                  label: "All members",
                },
                {
                  value: "per",
                  label: "first members",
                },
                {
                  value: "dollar",
                  label: "second members",
                },
              ]}
            />
            <label htmlFor="" className="inline-block text-black mb-3 mt-4">
              Voucher can be used for?
            </label>
            <Select
              className="w-full"
              defaultValue="all"
              onChange={handleSelect}
              options={[
                {
                  value: "all",
                  label: "All merchants",
                },
                {
                  value: "per",
                  label: "first merchant",
                },
                {
                  value: "dollar",
                  label: "second merchant",
                },
              ]}
            />
            <label htmlFor="" className="inline-block text-black mb-3 mt-4">
              Secret Word
            </label>
            <Input
              className="h-14 bg-[#F8F8F8] border-[#E0E0E0] rounded-lg"
              placeholder="e.g. new mail"
            />
            <label className="inline-block text-[#828282] text-sm mt-3 mb-6">
              Create a security word to protect your vouchers
            </label>
            <div className="flex items-center gap-[6px] text-[#9F0A0A]">
              <WarningIcon />
              <span className="text-sm">
                You will be charged 0.2% per Voucher
              </span>
            </div>
            <button
              onClick={onOk}
              className="w-full  h-14 bg-app-purple text-white text-base font-satoshi-bold rounded-lg border border-app-purple mt-8"
            >
              Send Voucher
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
