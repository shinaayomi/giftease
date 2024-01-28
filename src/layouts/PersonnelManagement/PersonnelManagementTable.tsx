import { DotMenuIcon, ViewIcon } from "@/utils/icons";
import { Dropdown, Table } from "antd";
import type { MenuProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import React from "react";
import Image from "next/image";
import { AishaAliyu } from "@/utils/AppImages";

interface DataType {
  key: string;
  name: string;
  emailAddress: string;
  voucher: string;
  lastSeen: string;
  role: string;
}

const columns: ColumnsType<AnyObject> | undefined = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <div className="flex justify-center items-center gap-2">
        {" "}
        <Image
          src={AishaAliyu}
          alt={text}
          className="rounded-full"
          width={24}
          height={24}
          priority
        />{" "}
        {text}
      </div>
    ),
    align: "center",
  },
  {
    title: "Email address",
    dataIndex: "emailAddress",
    key: "emailAddress",
    render: (mail) => <span className="">{mail}</span>,

    align: "center",
  },
  {
    title: "No. of Voucher Gen.",
    dataIndex: "voucher",
    key: "voucher",
    render: (vou) => <div className="text-[#4F4F4F]">{vou}</div>,
    align: "center",
  },
  {
    title: "Last seen",
    key: "lastSeen",
    dataIndex: "lastSeen",
    render: (seen) => (
      <span className={seen === "Online" ? "text-[#008000]" : "text-[#4F4F4F]"}>
        {seen}
      </span>
    ),
    align: "center",
  },

  {
    title: "Role",
    key: "role",
    dataIndex: "role",
    render: (role: string) => {
      return (
        <div
          className={`text-sm ${
            role === "HR Manager" ? "text-[#9B51E0]" : "text-[#008000]"
          }`}
        >
          {role}
        </div>
      );
    },
    align: "center",
  },
  {
    title: " ",
    key: "action",
    dataIndex: "action",
    render: () => {
      const items: MenuProps["items"] = [
        {
          label: (
            <button className="flex items-center gap-4 text-app-purple p-2">
              <ViewIcon /> View tickect
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
    align: "center",
  },
];

export default function PersonnelManagementTable() {
  const data: DataType[] = [
    {
      key: "1",
      name: "Aisha Aliyu",
      emailAddress: "Hira@gmail.com",
      voucher: "348",
      lastSeen: "Online",
      role: "HR Manager",
    },
    {
      key: "2",
      name: "Aisha Aliyu",
      emailAddress: "Hira@gmail.com",
      voucher: "348",
      lastSeen: "Today, 12:45pm",
      role: "HR Manager",
    },
    {
      key: "3",
      name: "Aisha Aliyu",
      emailAddress: "Hira@gmail.com",
      voucher: "348",
      lastSeen: "Online",
      role: "HR Manager",
    },
  ];

  return (
    <div className="paycodeTable">
      <Table columns={columns} dataSource={data} scroll={{ x: 1070, y: 340 }} />
    </div>
  );
}
