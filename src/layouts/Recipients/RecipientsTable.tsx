import { DotMenuIcon } from "@/utils/icons";
import { Dropdown, Table } from "antd";
import type { MenuProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import React from "react";

interface DataType {
  key: string;
  name: string;
  email: string;
  mobilePhone: string;
}

const columns: ColumnsType<AnyObject> | undefined = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Email address",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Mobile Phone",
    dataIndex: "mobilePhone",
    key: "mobilePhone",
    render: (price) => <>₦{price}</>,
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

export default function RecipientsTable() {
  const data: DataType[] = [
    {
      key: "1",
      name: "Hiradi Mibwala",
      email: "HIra@gmail.com",
      mobilePhone: "09036734746",
    },
    {
      key: "2",
      name: "Mibwala904848",
      email: "HIra@gmail.com",
      mobilePhone: "09036734746",
    },
    {
      key: "3",
      name: "Hiradi Mibwala",
      email: "HIra@gmail.com",
      mobilePhone: "09036734746",
    },
  ];

  return (
    <div className="paycodeTable">
      <Table columns={columns} dataSource={data} scroll={{ x: 670, y: 340 }} />
    </div>
  );
}
