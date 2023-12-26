import dynamic from "next/dynamic";
import React from "react";

const Modal = dynamic(async () => await import("antd/es/modal"), {
  ssr: false,
});

export default function SendVoucherModal({ open, onOk, onCancel }: any) {
  return (
    <div>
      <Modal title="Basic Modal" open={open} onOk={onOk} onCancel={onCancel}>
        <div className="flex items-center justify-between">
          <h4>Send Voucher</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M19.9998 12L11.9998 20M11.9998 12L19.9998 20M29.3332 16C29.3332 23.3638 23.3636 29.3333 15.9998 29.3333C8.63604 29.3333 2.6665 23.3638 2.6665 16C2.6665 8.6362 8.63604 2.66667 15.9998 2.66667C23.3636 2.66667 29.3332 8.6362 29.3332 16Z"
              stroke="#BEBEBE"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Modal>
    </div>
  );
}
