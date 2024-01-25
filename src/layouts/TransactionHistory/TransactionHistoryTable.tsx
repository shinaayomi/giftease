import { DotMenuIcon } from "@/utils/icons";
import { Dropdown, Table } from "antd";
import type { MenuProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import React from "react";

interface DataType {
  key: string;
  transactionId: string;
  description: string;
  amount: number;
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
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
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
    render: (price) => <>₦{price}</>,
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
          label: <a href="">View</a>,
          key: "0",
        },
        {
          label: <a href="">2nd menu item</a>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "3rd menu item",
          key: "3",
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
      transactionId: "657754U4I9647",
      description: "Wallet top up Payment made from Flutterwave",
      amount: 56000,
      date: "26/01/2024",
      transactionType: "Wallet top-up",
      status: "Successful",
    },
    {
      key: "2",
      transactionId: "efzteteu8648j904848..",
      description: "Voucher generated for The Place",
      amount: 54000,
      date: "26/01/2024",
      transactionType: "Voucher gen.",
      status: "Failed",
    },
    {
      key: "3",
      transactionId: "efzteteu8648j904848..",
      description: "Wallet top up Payment made from Flutterwave",
      amount: 23454,
      date: "26/01/2024",
      transactionType: "Wallet top-up",
      status: "Successful",
    },
  ];

  return (
    <div className="paycodeTable">
      <Table columns={columns} dataSource={data} scroll={{ x: 670, y: 340 }} />
    </div>
  );
}
