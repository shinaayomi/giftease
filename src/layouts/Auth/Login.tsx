import { GifteaseLogo2 } from "@/utils/AppImages";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthLayout from "@/components/AuthLayout";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    setLoading(true)
    try {
      const response = await fetch(
        "http://143.110.144.25:8000/users/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      if (response.ok) {
        message.success("You are successfully logged in");
        setLoading(false)
        router.push("/dashboard")
      } else {
        message.error(data.message);
        setLoading(false)
      }
    } catch (err: any) {
      console.log(err);
      setLoading(false);
    }
  };


  type FieldType = {
    email?: string;
    password?: string;
  };

  return (
    <AuthLayout>
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
            Welcome Back
          </h2>
          <p className="text-center text-[#333] text-sm md:text-base mb-8">
            Login to your dashboard to see some transactions/activities you
            might have missed.
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
                rules={[
                  { required: true, message: "Please enter your email!" },
                ]}
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

              <Form.Item<FieldType>>
                <div className="pb-6">
                  <Link href="/forgot-password" passHref>
                    <span className="text-app-purple font-satoshi-bold">
                      Forgot password?
                    </span>
                  </Link>
                </div>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  loading={loading}
                  className="w-full form-btn bg-app-purple rounded-lg font-satoshi-bold mt-4"
                  htmlType="submit"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
            <div className="text-center mt-8 pb-5">
              <p className="text-[#828282]">
                Don’t have an account?{" "}
                <Link
                  href={"/create-account"}
                  className="text-app-purple font-satoshi-bold"
                  passHref
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </AuthLayout>
  );
}
