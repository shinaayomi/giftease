import dynamic from "next/dynamic";
import React from "react";
import Sidebar from "./Sidebar";
import { CircularCloseIcon } from "@/utils/icons";
const Drawer = dynamic(async () => await import("antd/es/drawer"), {
  ssr: false,
});
export default function MobileSidebar({ open, onClose }: any) {
  return (
    <Drawer
      className="mobileDrawer"
      placement="left"
      onClose={onClose}
      open={open}
      closable={false}
    >
      <div className="block lg:hidden absolute top-4 right-4">
        <button onClick={onClose}>
          <CircularCloseIcon />
        </button>
      </div>
      <Sidebar />
    </Drawer>
  );
}
