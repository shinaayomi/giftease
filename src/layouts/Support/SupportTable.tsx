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
      ticketId: "657754U4I9647",
      subject: "Wallet top up Payment made from Flutterwave",
      handledBy: "Samuel A.",
      dateCreated: "24/06/22 12:30pm",
      status: "Done",
    },
    {
      key: "2",
      ticketId: "efzteteu8648j904848..",
      subject: "Voucher generated for The Place",
      handledBy: "Samuel A.",
      dateCreated: "24/06/22 12:30pm",
      status: "Failed",
    },
    {
      key: "3",
      ticketId: "efzteteu8648j904848..",
      subject: "Wallet top up Payment made from Flutterwave",
      handledBy: "Samuel A.",
      dateCreated: "24/06/22 12:30pm",
      status: "Done",
    },
  ];

  return (
    <div className="paycodeTable">
      <Table columns={columns} dataSource={data} scroll={{ x: 670, y: 340 }} />
    </div>
  );
}
