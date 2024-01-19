import HeadShare from "@/components/HeadShare";
import ForgotPassword from "@/layouts/Auth/ForgotPassword";
import React from "react";

export default function forgotPassword() {
  return (
    <div>
      <HeadShare title="Forgot password" />
      <ForgotPassword />
    </div>
  );
}
