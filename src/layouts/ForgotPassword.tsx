import { ForgotPasswordLogo, GifteaseLogo2 } from "@/utils/AppImages";
import Image from "next/image";
import React from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ForgotPassword() {
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    router.push("/dashboard");
  };

  type FieldType = {
    email?: string;
    password?: string;
    forgotPassword?: string;
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
          src={ForgotPasswordLogo}
          alt="ForgotPasswordLogo"
          className="mx-auto mt-12 md:mt-16"
          width={120}
          height={120}
          priority
        />
        <h2 className="text-app-purple text-center text-2xl md:text-[32px] font-satoshi-bold mt-6 md:mt-10 mb-4">
          Forgot Password?
        </h2>
        <p className="text-center text-[#333] text-sm md:text-base mb-8">
          You don’t need to worry, We will send a reset instructions
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
              label="Email address"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input
                className="h-12 md:h-14 bg-[#F8F8F8] border border-[#E0E0E0] rounded-lg"
                placeholder="E.g. john@gmail.com"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                className="w-full form-btn bg-app-purple rounded-lg font-satoshi-bold"
                htmlType="submit"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          <div className="text-center">
            <button className="group/back inline-flex items-center gap-4 text-app-purple font-satoshi-bold mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                className="group-hover/back:me-4 duration-300"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M5.5 12H19.5M5.5 12L11.5 6M5.5 12L11.5 18"
                  stroke="#443792"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Back to login page</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
