import {
  CircularCloseIcon,
  NigeriaIcon,
  USAIcon,
  WarningIcon,
} from "@/utils/icons";
import { Input, Modal, Select } from "antd";
import React from "react";

let sentence = "Fox";
let bg = sentence.split("");
bg[0] = "B";
console.log("--", bg);

const { TextArea } = Input;

export default function RaiseComplaintModal({ open, onOk, onCancel }: any) {
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
          <h4 className="text-[#828282] text-xl md:text-2xl">
            Make a Complaint
          </h4>
          <button onClick={onCancel}>
            <CircularCloseIcon />
          </button>
        </div>

        <div className="px-4 md:px-6 lg:px-10 pb-5">
          <form>
            <label htmlFor="" className="inline-block text-black mb-3 mt-4">
              Subject
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
              Message
            </label>
            <TextArea
              className="h-14 bg-[#F8F8F8] border-[#E0E0E0] rounded-lg"
              placeholder="e.g. new mail"
            />

            <button
              onClick={onOk}
              className="w-full  h-14 bg-app-purple text-white text-base font-satoshi-bold rounded-lg border border-app-purple mt-10"
            >
              Send Ticket
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
