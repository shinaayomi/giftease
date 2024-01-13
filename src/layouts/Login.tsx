import { GifteaseLogo2 } from "@/utils/AppImages";
import Image from "next/image";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
        <h2 className="text-app-purple text-center text-2xl md:text-[32px] font-satoshi-bold mt-12 md:mt-16 mb-4">
          👋 Welcome back,Admin
        </h2>
        <p className="text-center text-[#333] text-sm md:text-base mb-8">
          Login to your dashboard to see some transactions/activities you might
          have missed.
        </p>
        <div>
          <Form
            name="basic"
            layout="vertical"
            requiredMark={false}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Email address"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input
                className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
                placeholder="E.g. john@gmail.com"
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                placeholder="********"
                className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
              />
            </Form.Item>

            <Form.Item<FieldType> name="forgotPassword" className="mb-12">
              <Link href="" passHref>
                <span className="text-app-purple font-satoshi-bold">
                  Forgot password?
                </span>
              </Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                className="w-full h-12 md:h-14 bg-app-purple rounded-lg font-satoshi-bold"
                htmlType="submit"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </main>
  );
}
