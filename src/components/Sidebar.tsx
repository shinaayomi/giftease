import { AishaAliyu, GifteaseLogo } from "@/utils/AppImages";
import {
  DashboardIcon,
  ExtrasIcon,
  PaycodeHistoryicon,
  PersonnelManagementIcon,
  ProfileManagementIcon,
  RecipientsIcon,
  ReportsIcon,
  RightArrowIcon,
  SecuritySettingsIcon,
  SupportIcon,
} from "@/utils/icons";

import type { MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import dynamic from "next/dynamic";
const Dropdown = dynamic(async () => await import("antd/es/dropdown"), {
  ssr: false,
});

export default function Sidebar() {
  const router = useRouter();
  const path = router.pathname;

  const items: MenuProps["items"] = [
    {
      label: <a href="">1st menu item</a>,
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
    <aside className="min-h-screen flex flex-col bg-[#443792] px-6 pt-3 pb-14">
      <Link className="w-fit mx-auto block" href="/" passHref>
        <Image
          src={GifteaseLogo}
          alt="Giftease"
          width={96}
          height={96}
          priority
        />
      </Link>
      <div className="grid gap-2 mt-5">
        {[
          { icons: <DashboardIcon />, title: "Dashboard", link: "/" },
          {
            icons: <PaycodeHistoryicon />,
            title: "Paycode History",
            link: "/paycode-history",
          },
          { icons: <ReportsIcon />, title: "Reports", link: "" },
          { icons: <SupportIcon />, title: "Support", link: "" },
          { icons: <RecipientsIcon />, title: "Recipients", link: "" },
          { icons: <ExtrasIcon />, title: "Extras", link: "" },
        ].map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <div
              className={`h-14 flex items-center gap-4 px-4 py-2 rounded-lg duration-300 ${
                path === item.link
                  ? "bg-[#F7F6FF] text-app-purple font-satoshi-bold"
                  : "text-white hover:bg-[rgba(255,255,255,0.1)]"
              }`}
            >
              {item.icons} <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 border-t border-[rgba(242,242,242,0.20)] pt-3">
        <p className="text-[#F2F2F2] px-4 py-2">SETTINGS</p>
        <div className="grid gap-2 ">
          {[
            {
              icons: <ProfileManagementIcon />,
              title: "Profile Management",
              link: "",
            },
            {
              icons: <PersonnelManagementIcon />,
              title: "Personnel Management",
              link: "",
            },
            {
              icons: <SecuritySettingsIcon />,
              title: "Security Settings",
              link: "",
            },
          ].map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <div
                className={`h-14 flex items-center gap-4 px-4 py-2 rounded-lg duration-300 ${
                  path === item.link
                    ? "bg-[#F7F6FF] text-app-purple font-satoshi-bold"
                    : "text-white hover:bg-[rgba(255,255,255,0.1)]"
                }`}
              >
                {item.icons} <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <div className="flex items-center gap-[10px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] px-3 py-4 rounded-[10px] cursor-pointer">
              <Image
                src={AishaAliyu}
                alt="Aisha Aliyu"
                className="rounded-[10px]"
                width={32}
                height={32}
                priority
              />
              <div className="me-auto">
                <p className="text-sm text-white">Aisha Aliyu</p>
                <p className="text-[10px] text-white">HR Manager</p>
              </div>
              <RightArrowIcon />
            </div>
          </a>
        </Dropdown>
      </div>
    </aside>
  );
}
