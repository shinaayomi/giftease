import { DotMenuIcon, ViewIcon } from "@/utils/icons";
import { Dropdown, Table } from "antd";
import type { MenuProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import React from "react";
import Link from "next/link";

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
    render: (phone) => <>{phone}</>,
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
              <ViewIcon /> <span>Send a Voucher</span>
            </button>
          ),
          key: "0",
        },
        {
          label: (
            <button className="flex items-center gap-3 text-[#008000] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.86461 6.88236C8.17813 5.56432 9.99326 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 11.5858 4.41421 11.25 4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 16.8325 7.16751 20.75 12 20.75C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.16751 16.8325 3.25 12 3.25C9.57851 3.25 7.38558 4.23462 5.80213 5.82352C5.77668 5.84906 5.75345 5.87597 5.73245 5.90401L4.47488 4.64645C4.33769 4.50926 4.13353 4.46382 3.95111 4.52986C3.76869 4.59591 3.64094 4.76152 3.62338 4.95473L3.26982 8.84382C3.25639 8.9916 3.30929 9.13771 3.41422 9.24264C3.51914 9.34757 3.66526 9.40047 3.81304 9.38703L7.70213 9.03348C7.89534 9.01591 8.06095 8.88817 8.12699 8.70575C8.19304 8.52332 8.1476 8.31916 8.01041 8.18198L6.7823 6.95386C6.81101 6.93235 6.83854 6.90852 6.86461 6.88236Z"
                  fill="currentColor"
                />
                <path
                  d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V12C11.25 12.2586 11.3832 12.4989 11.6025 12.636L14.6025 14.511C14.9538 14.7305 15.4165 14.6238 15.636 14.2725C15.8555 13.9212 15.7488 13.4585 15.3975 13.239L12.75 11.5843V7Z"
                  fill="currentColor"
                />
              </svg>
              <span>Transaction history</span>
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
                  d="M10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V3.75H5C4.58579 3.75 4.25 4.08579 4.25 4.5C4.25 4.91421 4.58579 5.25 5 5.25H19C19.4142 5.25 19.75 4.91421 19.75 4.5C19.75 4.08579 19.4142 3.75 19 3.75H14.75V3C14.75 2.58579 14.4142 2.25 14 2.25H10Z"
                  fill="#9F0A0A"
                />
                <path
                  d="M10 10.65C10.4142 10.65 10.75 10.9858 10.75 11.4L10.75 18.4C10.75 18.8142 10.4142 19.15 10 19.15C9.58579 19.15 9.25 18.8142 9.25 18.4L9.25 11.4C9.25 10.9858 9.58579 10.65 10 10.65Z"
                  fill="#9F0A0A"
                />
                <path
                  d="M14.75 11.4C14.75 10.9858 14.4142 10.65 14 10.65C13.5858 10.65 13.25 10.9858 13.25 11.4V18.4C13.25 18.8142 13.5858 19.15 14 19.15C14.4142 19.15 14.75 18.8142 14.75 18.4V11.4Z"
                  fill="#9F0A0A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.99142 7.91718C6.03363 7.53735 6.35468 7.25 6.73684 7.25H17.2632C17.6453 7.25 17.9664 7.53735 18.0086 7.91718L18.2087 9.71852C18.5715 12.9838 18.5715 16.2793 18.2087 19.5446L18.189 19.722C18.045 21.0181 17.0404 22.0517 15.7489 22.2325C13.2618 22.5807 10.7382 22.5807 8.25108 22.2325C6.95954 22.0517 5.955 21.0181 5.81098 19.722L5.79128 19.5446C5.42846 16.2793 5.42846 12.9838 5.79128 9.71852L5.99142 7.91718ZM7.40812 8.75L7.2821 9.88417C6.93152 13.0394 6.93152 16.2238 7.2821 19.379L7.3018 19.5563C7.37011 20.171 7.84652 20.6612 8.45905 20.747C10.8082 21.0758 13.1918 21.0758 15.5409 20.747C16.1535 20.6612 16.6299 20.171 16.6982 19.5563L16.7179 19.379C17.0685 16.2238 17.0685 13.0394 16.7179 9.88417L16.5919 8.75H7.40812Z"
                  fill="#9F0A0A"
                />
              </svg>
              <span>Remove User</span>
            </button>
          ),
          key: "3",
        },
      ];
      return (
        <Dropdown menu={{ items }} trigger={["click"]} placement="bottom">
          <button>
            <DotMenuIcon />
          </button>
        </Dropdown>
      );
    },
    align: "center",
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
      <Table columns={columns} dataSource={data} scroll={{ x: 870, y: 340 }} />
    </div>
  );
}
