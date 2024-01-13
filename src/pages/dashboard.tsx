import HeadShare from "@/components/HeadShare";
import Dashboard from "@/layouts/Dashboard";
import React from "react";

export default function dashboard() {
  return (
    <div>
      <HeadShare title="Dashboard" />
      <Dashboard />
    </div>
  );
}
