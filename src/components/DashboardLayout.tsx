import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { Bear } from "@/utils/AppImages";

interface IProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: IProps) {
  return (
    <div>
      <aside className="fixed left-0 top-0 bottom-0 w-[320px] overflow-y-scroll hidden md:block">
        <Sidebar />
      </aside>
      <section className="md:ms-[320px]">
        <nav>
          <Image src={Bear} alt="ABC" width={48} height={48} priority />
        </nav>
        {children}
      </section>
    </div>
  );
}
