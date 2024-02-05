import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { message } from "antd";
import { useRouter } from "next/router";

export default function OtpConfirmationModal() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = async (v: any) => {
    let email = router.query.email;
    if (v.length === 6) {
      setLoading(true);
      try {
        const response = await fetch(
          "http://143.110.144.25:8000/users/verify/otp/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, token: v }),
          }
        );
        const data = await response.json();
        if (response.ok) {
          message.success(data.message);
          setLoading(false);
        } else {
          message.error(data.message);
          setLoading(false);
        }
      } catch (err: any) {
        console.log(err);
        setLoading(false);
      }
    }
    setOtp(v);
  };
  return (
    <section className="h-screen bg-white">
      <div className="max-w-[450px] mx-auto">
        <OTPInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          renderSeparator={<span></span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="otp-code_container"
          inputStyle="otp-code__input"

          // inputType='number'
        />
      </div>
    </section>
  );
}
