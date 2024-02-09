import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Button, message } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";
import { GifteaseLogo2 } from "@/utils/AppImages";

export default function OtpConfirmation() {
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
          message.success("OTP verified successfully");
          setLoading(false);
          router.push("/dashboard");
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

  const handleResend = async () => {
    let email = router.query.email;
    try {
      const response = await fetch(
        "http://143.110.144.25:8000/users/resend/otp/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        message.success(data.message);
        setLoading(false);
        router.push("/dashboard");
      } else {
        message.error(data.message);
        setLoading(false);
      }
    } catch (err: any) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    let email = router.query.email;
    setLoading(true);
    try {
      const response = await fetch(
        "http://143.110.144.25:8000/users/verify/otp/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, token: otp }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        message.success("OTP verified successfully");
        setLoading(false);
        router.push("/dashboard");
      } else {
        message.error(data.message);
        setLoading(false);
      }
    } catch (err: any) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen grid place-items-center px-4 py-5 bg-white">
      <div className="max-w-[536px] mx-auto">
        <Image
          src={GifteaseLogo2}
          alt="Giftease"
          className="mx-auto"
          width={96}
          height={96}
          priority
        />
        <h2 className="text-app-purple text-center text-2xl md:text-[32px] font-satoshi-bold mt-10 md:mt-14 mb-4">
          Verify OTP
        </h2>
        <p className="text-center text-[#333] text-sm md:text-base mb-8">
          Enter the one-time verification code sent to {router.query.email}
        </p>
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
        <p className="text-center mt-8">
          Didn’t get OTP?{" "}
          <button
            type="button"
            onClick={handleResend}
            className="text-app-purple font-satoshi-medium"
          >
            Resend
          </button>
        </p>
        <Button
          type="primary"
          loading={loading}
          className="w-full form-btn bg-app-purple rounded-lg font-satoshi-bold mt-12"
          htmlType="submit"
          disabled={otp.length < 5 ? true : false}
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </div>
    </section>
  );
}
