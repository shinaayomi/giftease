import dynamic from "next/dynamic";
import React from "react";
import type { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import { DotMenuIcon } from "@/utils/icons";
const Table = dynamic(async () => await import("antd/es/table"), {
  ssr: false,
});
const Tag = dynamic(async () => await import("antd/es/tag"), {
  ssr: false,
});
const Space = dynamic(async () => await import("antd/es/space"), {
  ssr: false,
});

interface DataType {
  key: string;
  paycodeId: string;
  beneficiary: string;
  amtGenerated: number;
  amtRamaining: number;
  dateCreated: string;
  token: string;
  status: string;
  action: string;
}

const columns: ColumnsType<AnyObject> | undefined = [
  {
    title: "PayCode ID",
    dataIndex: "paycodeId",
    key: "paycodeId",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Beneficiary",
    dataIndex: "beneficiary",
    key: "age",
  },
  {
    title: "Amt Generated",
    dataIndex: "amtGenerated",
    key: "amtGenerated",
    render: (price) => <>₦{price}</>,
  },
  {
    title: "Amt Remaining",
    key: "amtRamaining",
    dataIndex: "amtRamaining",
    render: (price) => <>₦{price}</>,
  },
  {
    title: "Date Created",
    key: "dateCreated",
    dataIndex: "dateCreated",
  },
  {
    title: "Token",
    key: "token",
    dataIndex: "token",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status: string) => {
      return (
        <div
          className={`w-[108px] h-[35px] flex items-center justify-center gap-2 text-sm rounded-lg ${
            status === "Active"
              ? "bg-[#F0F8F0] text-[#008000]"
              : status === "Expired"
              ? "bg-[#FBF1F1] text-[#EB5757]"
              : "bg-[#F2F2F2] text-[#828282]"
          }`}
        >
          <span
            className={`w-[10px] h-[10px] rounded-full ${
              status === "Active"
                ? "bg-[#008000]"
                : status === "Expired"
                ? "bg-[#EB5757]"
                : "bg-[#828282]"
            }`}
          ></span>
          {status}
        </div>
      );
    },
  },
  {
    title: " ",
    key: "action",
    width: 60,
    render: (_, record) => (
      <button>
        <DotMenuIcon />
      </button>
    ),
  },
];
export default function PaycodeTable() {
  const data: DataType[] = [
    {
      key: "1",
      paycodeId: "efzteteu8648j904848..",
      beneficiary: "Hira Mibwala",
      amtGenerated: 56000,
      amtRamaining: 3455,
      dateCreated: "26/12/2023",
      token: "5869696",
      status: "Active",
      action: "",
    },
    {
      key: "2",
      paycodeId: "efzteteu8648j904848..",
      beneficiary:
        "Hira Mibwala, Miebaka, Idris, Malik, Sunday, Tunde, Samuel, Ade, and 256 others",
      amtGenerated: 54000,
      amtRamaining: 4667,
      dateCreated: "26/12/2023",
      token: "5869696",
      status: "Used",
      action: "",
    },
    {
      key: "3",
      paycodeId: "efzteteu8648j904848..",
      beneficiary: "Hira Mibwala",
      amtGenerated: 23454,
      amtRamaining: 34578655,
      dateCreated: "26/12/2023",
      token: "5869696",
      status: "Expired",
      action: "",
    },
  ];

  return (
    <div className="paycodeTable">
      <Table columns={columns} dataSource={data} scroll={{ x: 1240, y: 240 }} />
    </div>
  );
}
