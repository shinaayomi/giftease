import { GifteaseLogo2, ResetPasswordLogo } from "@/utils/AppImages";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function ResetPassword() {
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    router.push("/");
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
                className="w-full form-btn bg-app-purple rounded-lg font-satoshi-bold"
                htmlType="submit"
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
