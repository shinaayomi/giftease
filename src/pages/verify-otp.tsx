import HeadShare from "@/components/HeadShare";
import OtpConfirmation from "@/layouts/Auth/OtpConfirmation";
import React from "react";

export default function otp() {
  return (
    <div>
      <HeadShare title="OTP" />
      <OtpConfirmation />
    </div>
  );
}
