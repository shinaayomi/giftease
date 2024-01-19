import HeadShare from "@/components/HeadShare";

import ResetPassword from "@/layouts/Auth/ResetPassword";
import React from "react";

export default function forgotPassword() {
  return (
    <div>
      <HeadShare title="Reset password" />
      <ResetPassword />
    </div>
  );
}
