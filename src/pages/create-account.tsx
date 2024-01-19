import HeadShare from "@/components/HeadShare";
import CreateAccount from "@/layouts/Auth/CreateAccount";
import React from "react";

export default function register() {
  return (
    <div>
      <HeadShare title="Create Account" />
      <CreateAccount />
    </div>
  );
}
