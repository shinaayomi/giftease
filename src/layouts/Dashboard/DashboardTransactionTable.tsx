import { DotMenuIcon } from "@/utils/icons";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import React from "react";

interface DataType {
  key: string;
  transactionId: string;
  transactionType: string;
  amount: number;
  date: number;
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
];

export default function DashboardTransactionTable() {
  const data: DataType[] = [
    {
      key: "1",
      transactionId: "657754U4I9647",
      transactionType: "Wallet top-up",
      amount: 56000,
      date: 3455,
      status: "Successful",
    },
    {
      key: "2",
      transactionId: "efzteteu8648j904848..",
      transactionType: "Voucher gen.",
      amount: 54000,
      date: 4667,
      status: "Failed",
    },
    {
      key: "3",
      transactionId: "efzteteu8648j904848..",
      transactionType: "Wallet top-up",
      amount: 23454,
      date: 34578655,
      status: "Successful",
    },
  ];

  return (
    <div className="paycodeTable">
      <Table columns={columns} dataSource={data} scroll={{ x: 670, y: 340 }} />
    </div>
  );
}
