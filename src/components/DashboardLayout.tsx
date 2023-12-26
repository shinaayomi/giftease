import React, { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { AishaAliyu, Bear } from "@/utils/AppImages";
import { Bellicon, DownArrowIcon, MenuIcon } from "@/utils/icons";
import type { MenuProps } from "antd";
import dynamic from "next/dynamic";
import MobileSidebar from "./MobileSidebar";
const Dropdown = dynamic(async () => await import("antd/es/dropdown"), {
  ssr: false,
});

const MenuProps = dynamic(async () => await import("antd/es/menu"), {
  ssr: false,
});

interface IProps {
  children: ReactNode;
}

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

export default function DashboardLayout({ children }: IProps) {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <aside className="fixed left-0 top-0 bottom-0 w-[320px] overflow-y-scroll hidden lg:block">
        <Sidebar />
      </aside>
      <section className="lg:ms-[320px]">
        {/* start top nav */}
        <nav className="fixed top-0 right-0 left-0 lg:left-[320px] z-10 flex justify-between items-center bg-white border-b border-[#F2F2F2] px-4 md:px-6 lg:px-11 py-3">
          <div className="flex items-center gap-3 sm:gap-5">
            <Image
              src={Bear}
              alt="ABC"
              className="rounded-lg"
              width={48}
              height={48}
              priority
            />
            <span className="text-black text-lg sm:text-xl">ABC Ventures</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="h-full border border-[#E0E0E0] rounded-lg p-2">
              <Bellicon />
            </button>
            <div className="hidden sm:block">
              <Dropdown menu={{ items }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <div className=" h-full flex items-center gap-[10px] bg-[rgba(255,255,255,0.05)] border border-[#E0E0E0] px-4 py-2 rounded-[10px] cursor-pointer">
                    <Image
                      src={AishaAliyu}
                      alt="Aisha Aliyu"
                      className="rounded-full"
                      width={32}
                      height={32}
                      priority
                    />
                    <p className="text-[#4F4F4F] me-2">Aisha</p>
                    <DownArrowIcon />
                  </div>
                </a>
              </Dropdown>
            </div>
          </div>
          <div className="block sm:hidden text-xl">
            <button onClick={() => setOpen(true)}>
              <MenuIcon />
            </button>
          </div>
        </nav>
        {/* end top nav */}

        {/* start body section */}
        <section className="min-h-screen bg-[#F5F6FA] px-4 md:px-6 lg:px-11 pt-28 pb-8">
          {children}
        </section>
        {/* end body section */}
      </section>

      <MobileSidebar open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
