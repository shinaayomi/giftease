import dynamic from "next/dynamic";
import React from "react";
import type { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import { DotMenuIcon, ViewIcon, WarningIcon } from "@/utils/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
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
  amtGenerated: string;
  amtRamaining: string;
  dateCreated: string;
  dateExpired: string;
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
    title: "Date Expired",
    key: "dateExpired",
    dataIndex: "dateExpired",
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
    render: (_, record) => {
      const items: MenuProps["items"] = [
        {
          label: (
            <button className="flex items-center gap-3 text-app-purple p-2">
              <ViewIcon /> <span>View tickect</span>
            </button>
          ),
          key: "0",
        },
        {
          label: (
            <button className="flex items-center gap-3 text-[#4F4F4F] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 21H21M3 18H21M21 6.2V11.8C21 12.9201 21 13.4802 20.782 13.908C20.5903 14.2843 20.2843 14.5903 19.908 14.782C19.4802 15 18.9201 15 17.8 15H6.2C5.07989 15 4.51984 15 4.09202 14.782C3.71569 14.5903 3.40973 14.2843 3.21799 13.908C3 13.4802 3 12.9201 3 11.8V6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2ZM21 6.2C20.5 6.5 19.6726 6.5 19.5 6.5C18.3954 6.5 17.5 5.60457 17.5 4.5C17.5 3.90265 17.7619 3.36647 18.1771 3M6 15C6.78105 14.219 6.78105 12.781 6 12C5.21895 11.219 3.78105 11.219 3 12M6 3C6.78105 3.78105 6.78105 5.21895 6 6C5.21895 6.78105 3.78105 6.78105 3 6M18 15C17.219 14.219 17.219 12.781 18 12C18.781 11.219 20.219 11.219 21 12M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Retrieve Paycode</span>
            </button>
          ),
          key: "1",
        },
        {
          label: (
            <button className="flex items-center gap-3 text-[#9F0A0A] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.8125 9.50224C9.9887 9.00136 10.3365 8.579 10.7942 8.30998C11.252 8.04095 11.7902 7.9426 12.3135 8.03237C12.8368 8.12213 13.3115 8.39421 13.6534 8.80041C13.9954 9.20661 14.1825 9.72072 14.1817 10.2517C14.1817 11.7506 11.9334 12.5 11.9334 12.5M11.9609 15.5H11.9709M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Report transaction</span>
            </button>
          ),
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
export default function PaycodeTable() {
  const data: DataType[] = [
    {
      key: "1",
      paycodeId: "efzteteu8648j904848..",
      beneficiary: "Hira Mibwala",
      amtGenerated: "56,000",
      amtRamaining: "3,455",
      dateCreated: "26/12/2023",
      dateExpired: "26/12/2024",
      status: "Active",
      action: "",
    },
    {
      key: "2",
      paycodeId: "efzteteu8648j904848..",
      beneficiary:
        "Hira Mibwala, Miebaka, Idris, Malik, Sunday, Tunde, Samuel, Ade, and 256 others",
      amtGenerated: "54,000",
      amtRamaining: "4,667",
      dateCreated: "26/12/2023",
      dateExpired: "26/12/2024",
      status: "Used",
      action: "",
    },
    {
      key: "3",
      paycodeId: "efzteteu8648j904848..",
      beneficiary: "Hira Mibwala",
      amtGenerated: "23,454",
      amtRamaining: "34,578,655",
      dateCreated: "26/12/2023",
      dateExpired: "26/12/2024",
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
