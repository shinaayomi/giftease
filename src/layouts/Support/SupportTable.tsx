import { DotMenuIcon } from "@/utils/icons";
import { Dropdown, Table } from "antd";
import type { MenuProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import React from "react";
import Image from "next/image";
import { AishaAliyu } from "@/utils/AppImages";

interface DataType {
  key: string;
  ticketId: string;
  subject: string;
  handledBy: string;
  dateCreated: string;
  status: string;
}

const columns: ColumnsType<AnyObject> | undefined = [
  {
    title: "Ticket ID",
    dataIndex: "ticketId",
    key: "ticketId",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
    render: (subj) => (
      <div className="flex items-center text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M10 0L20 10L10 20L0 10L10 0Z" fill="#EB5757" />
        </svg>
        <span className="text-[#333] ms-2">Complaint,</span>
        <span className="flex-1 text-[#BDBDBD]">{subj}</span>
      </div>
    ),
    width: 362,
  },
  {
    title: "Handled by",
    dataIndex: "handledBy",
    key: "handledBy",
    render: (handled) => (
      <div className="flex items-center gap-2">
        {" "}
        <Image
          src={AishaAliyu}
          alt={handled}
          className="rounded-full"
          width={24}
          height={24}
          priority
        />{" "}
        {handled}
      </div>
    ),
  },
  {
    title: "Date Created",
    key: "dateCreated",
    dataIndex: "dateCreated",
    render: (date) => <>{date}</>,
  },

  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status: string) => {
      return (
        <div
          className={`w-[108px] h-[35px] flex justify-center items-center rounded-lg text-sm ${
            status === "Done" ? "text-[#008000] bg-[#F0F8F0]" : "text-[#AE0D16]"
          }`}
        >
          ● {status}
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

export default function SupportTable() {
  const data: DataType[] = [
    {
      key: "1",
      ticketId: "#7456589",
      subject: "I tried to create a paycode of ₦50.",
      handledBy: "Samuel A.",
      dateCreated: "24/06/22 12:30pm",
      status: "Done",
    },
    {
      key: "2",
      ticketId: "#7456589",
      subject: "I tried to create a paycode of ₦50.",
      handledBy: "Samuel A.",
      dateCreated: "24/06/22 12:30pm",
      status: "Failed",
    },
    {
      key: "3",
      ticketId: "#7456589",
      subject: "I tried to create a paycode of ₦50.",
      handledBy: "Samuel A.",
      dateCreated: "24/06/22 12:30pm",
      status: "Done",
    },
  ];

  return (
    <div className="paycodeTable">
      <Table columns={columns} dataSource={data} scroll={{ x: 1070, y: 340 }} />
    </div>
  );
}
