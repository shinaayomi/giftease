import { GifteaseLogo2, ResetPasswordLogo } from "@/utils/AppImages";
import { Button, Form, Input, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function ResetPassword() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    console.log("Success:", values);

    const token = router.query.token;
    try {
      const response = await fetch(
        "http://143.110.144.25:8000/users/verify/forgot/password/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, ...values }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        message.success(data.message);
        setLoading(false);
        router.push("/");
      } else {
        message.error(data.message);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  type FieldType = {
    newPassword?: string;
    confirmPassword?: string;
  };

  return (
    <main className="min-h-screen grid place-items-center px-4 py-5">
      <section className="max-w-[500px] w-full">
        <Image
          src={GifteaseLogo2}
          alt="Giftease"
          className="mx-auto"
          width={96}
          height={96}
          priority
        />
        <Image
          src={ResetPasswordLogo}
          alt="ForgotPasswordLogo"
          className="mx-auto mt-12 md:mt-16"
          width={120}
          height={120}
          priority
        />
        <h2 className="text-app-purple text-center text-2xl md:text-[32px] font-satoshi-bold mt-6 md:mt-10 mb-4">
          Reset your Password
        </h2>
        <p className="text-center text-[#333] text-sm md:text-base mb-8">
          Set your password to access your account.
        </p>
        <div>
          <Form
            name="basic"
            layout="vertical"
            requiredMark={false}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="New Password"
              name="newPassword"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                placeholder="********"
                className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
              ]}
            >
              <Input.Password
                placeholder="********"
                className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                className="w-full form-btn bg-app-purple rounded-lg font-satoshi-bold mt-4"
                htmlType="submit"
                loading={loading}
              >
                Set Password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </main>
  );
}
