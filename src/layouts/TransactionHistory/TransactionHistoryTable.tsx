import { DotMenuIcon, ViewIcon } from "@/utils/icons";
import { Dropdown, Table } from "antd";
import type { MenuProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import React from "react";

interface DataType {
  key: string;
  transactionId: string;
  description: string;
  amount: string;
  date: string;
  transactionType: string;
  status: string;
}

const columns: ColumnsType<AnyObject> | undefined = [
  {
    title: "Transaction ID",
    dataIndex: "transactionId",
    key: "transactionId",
    render: (text) => <span>{text}</span>,
    width: 200,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (des) => <div className=" text-[#828282] truncate">{des}</div>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (price) => <>₦{price}</>,
  },
  {
    title: "Date",
    key: "date",
    dataIndex: "date",
    render: (date) => <>{date}</>,
  },
  {
    title: "Transaction Type",
    dataIndex: "transactionType",
    key: "transactionType",
    render: (transType: string) => {
      return (
        <div
          className={`w-[108px] h-[35px] flex items-center justify-center gap-2 text-sm rounded-lg border ${
            transType === "Wallet top-up"
              ? "bg-[#F0F8F0] text-[#008000] border-[#008000]"
              : "bg-[#EFEDFF] text-app-purple border-app-purple"
          }`}
        >
          {transType}
        </div>
      );
    },
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status: string) => {
      return (
        <div
          className={`text-sm ${
            status === "Successful" ? "text-[#008000]" : "text-[#AE0D16]"
          }`}
        >
          {status}
        </div>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: () => {
      const items: MenuProps["items"] = [
        {
          label: (
            <button className="flex items-center gap-3 text-app-purple p-2">
              <ViewIcon /> <span>View Details</span>
            </button>
          ),
          key: "0",
        },
      ];
      return (
        <Dropdown menu={{ items }} trigger={["click"]}>
          <button>
            <DotMenuIcon />
          </button>
        </Dropdown>
      );
    },
  },
];

export default function TransactionHistoryTable() {
  const data: DataType[] = [
    {
      key: "1",
      transactionId: "#Wall57645947",
      description: "Wallet top up Payment made from Flutterwave",
      amount: "56,000",
      date: "24/06/22 12:30pm",
      transactionType: "Wallet top-up",
      status: "Successful",
    },
    {
      key: "2",
      transactionId: "efzteteu8648j75y5",
      description: "Voucher generated for The Place",
      amount: "54,000",
      date: "24/06/22 12:30pm",
      transactionType: "Voucher gen.",
      status: "Failed",
    },
    {
      key: "3",
      transactionId: "efzteteu8648j75y5",
      description: "Wallet top up Payment made from Flutterwave",
      amount: "23,454",
      date: "24/06/22 12:30pm",
      transactionType: "Wallet top-up",
      status: "Successful",
    },
  ];

  return (
    <div className="paycodeTable">
      <Table columns={columns} dataSource={data} scroll={{ x: 1070, y: 340 }} />
    </div>
  );
}
