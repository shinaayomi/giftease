import HeadShare from "@/components/HeadShare";

import ResetPassword from "@/layouts/ResetPassword";
import React from "react";

export default function forgotPassword() {
  return (
    <div>
      <HeadShare title="Reset password" />
      <ResetPassword />
    </div>
  );
}
