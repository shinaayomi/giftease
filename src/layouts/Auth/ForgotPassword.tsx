import { ForgotPasswordLogo, GifteaseLogo2 } from "@/utils/AppImages";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Form, Input, Modal, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ForgotPassword() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    setLoading(true);
    try {
      const res = await fetch(
        "http://143.110.144.25:8000/users/forgot/password/request/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      const data = await res.json();
      if (res.ok) {
        message.success("Password changed successfully");
        setLoading(false);
        setIsModalOpen(true);
      } else {
        message.error(data.message);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  type FieldType = {
    email?: string;
    password?: string;
    forgotPassword?: string;
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
                rules={[
                  { required: true, message: "Please put in your email!" },
                ]}
              >
                <Input
                  type="email"
                  className="h-12 md:h-14 bg-[#F8F8F8] border border-[#E0E0E0] rounded-lg"
                  placeholder="E.g. john@gmail.com"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  loading={loading}
                  type="primary"
                  className="w-full form-btn bg-app-purple rounded-lg font-satoshi-bold mt-4"
                  htmlType="submit"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
            <div className="text-center">
              <button
                onClick={() => router.push("/login")}
                className="group/back inline-flex items-center gap-4 text-app-purple font-satoshi-bold mt-2"
              >
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Back to login page</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={false}
        closable={false}
        width={694}
      >
        <div className="max-w-[300px] mx-auto pt-24 pb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            className="mx-auto"
            viewBox="0 0 100 100"
            fill="none"
          >
            <g clipPath="url(#clip0_639_5331)">
              <path
                d="M49.9998 7.99377C26.801 7.99377 7.99377 26.8012 7.99377 50.0004C7.99377 73.1989 26.801 92.0059 49.9998 92.0059C73.1987 92.0059 92.0059 73.1989 92.0059 50.0004C92.0059 26.8012 73.1987 7.99377 49.9998 7.99377Z"
                fill="#EDF3FC"
              />
              <path
                d="M49.9998 0.195312C22.5373 0.195312 0.195312 22.5375 0.195312 50.0004C0.195312 77.4627 22.5373 99.8047 49.9998 99.8047C77.4623 99.8047 99.8047 77.4627 99.8047 50.0004C99.8047 22.5375 77.4623 0.195312 49.9998 0.195312ZM49.9998 98.2092C23.4172 98.2092 1.79082 76.5828 1.79082 50.0004C1.79082 23.4176 23.4172 1.79063 49.9998 1.79063C76.5822 1.79063 98.2092 23.4174 98.2092 50.0004C98.2092 76.5828 76.5822 98.2092 49.9998 98.2092Z"
                fill="#EDF3FC"
              />
              <path
                d="M72.9211 24.998C71.5721 24.66 70.3401 23.9621 69.3566 22.9787C68.3731 21.9954 67.675 20.7635 67.3368 19.4145L67.2202 18.9453L67.102 19.4145C66.7641 20.7635 66.0662 21.9955 65.0828 22.9789C64.0994 23.9622 62.8675 24.6601 61.5184 24.998L61.0491 25.1162L61.5184 25.2344C62.8674 25.5722 64.0993 26.27 65.0827 27.2533C66.0661 28.2366 66.764 29.4684 67.102 30.8174L67.2202 31.2863L67.3368 30.8174C67.6751 29.4685 68.3732 28.2367 69.3567 27.2534C70.3402 26.2702 71.5721 25.5724 72.9211 25.2344L73.3907 25.1162L72.9211 24.998Z"
                fill="#5D8EF9"
              />
              <path
                d="M81.8125 31.4442L82.089 31.5135L81.8125 31.5828C81.0181 31.7818 80.2926 32.1928 79.7136 32.7719C79.1345 33.351 78.7236 34.0765 78.5248 34.8709L78.4551 35.1469L78.3859 34.8709C78.1869 34.0764 77.7758 33.3509 77.1966 32.7718C76.6174 32.1926 75.8918 31.7817 75.0972 31.5828L74.8217 31.5135L75.0972 31.4442C75.8917 31.2453 76.6173 30.8344 77.1965 30.2554C77.7757 29.6763 78.1868 28.9509 78.3859 28.1565L78.4551 27.8805L78.5248 28.1565C78.7238 28.9508 79.1347 29.6762 79.7137 30.2552C80.2928 30.8342 81.0182 31.2452 81.8125 31.4442Z"
                fill="#FFBE1B"
              />
              <path
                d="M42.0235 75.9301L42.6086 76.0693L42.0235 76.2092C38.6024 77.0303 35.9323 79.5892 35.0729 82.8656L34.9264 83.4252L34.7813 82.8656C33.9227 79.5892 31.251 77.0303 27.829 76.2092L27.2463 76.0693L27.829 75.9301C31.2512 75.1088 33.9229 72.549 34.7813 69.2736L34.9264 68.7137L35.0729 69.2736C35.9323 72.549 38.6026 75.1088 42.0235 75.9301ZM21.3727 53.1291L21.6702 53.2031L21.3727 53.2773C20.5199 53.4913 19.7412 53.9326 19.1196 54.5543C18.4979 55.1759 18.0566 55.9547 17.8426 56.8074L17.7684 57.1039L17.6944 56.8074C17.4805 55.9545 17.0391 55.1756 16.4172 54.5539C15.7953 53.9322 15.0163 53.491 14.1633 53.2773L13.8674 53.2031L14.1633 53.1291C15.0163 52.9152 15.7952 52.4739 16.417 51.8521C17.0389 51.2304 17.4804 50.4515 17.6944 49.5986L17.7684 49.3019L17.8426 49.5986C18.0566 50.4514 18.498 51.2301 19.1196 51.8518C19.7413 52.4736 20.52 52.915 21.3727 53.1291Z"
                fill="#330D84"
              />
              <path
                d="M71.5961 66.7285H28.4041C26.3555 66.7285 24.6949 65.068 24.6949 63.0188V36.9799C24.6949 34.9324 26.3553 33.2713 28.4041 33.2713H71.5961C73.6446 33.2713 75.3051 34.9324 75.3051 36.9799V63.0188C75.3051 65.0682 73.6447 66.7285 71.5961 66.7285Z"
                fill="#5932AE"
              />
              <path
                d="M52.2203 52.899C51.6029 53.4309 50.815 53.7234 50 53.7234C49.1851 53.7234 48.3972 53.4309 47.7797 52.899L45.0233 50.5252L26.0084 65.85C26.6772 66.4182 27.5265 66.7296 28.4041 66.7285H71.5963C72.5098 66.7285 73.3455 66.3977 73.9918 65.85L54.9768 50.5252L52.2203 52.899Z"
                fill="#6857E5"
              />
              <path
                d="M52.2203 52.899L73.9918 34.15C73.323 33.5818 72.4738 33.2704 71.5963 33.2715H28.4039C27.5263 33.2704 26.677 33.5818 26.0082 34.15L47.7795 52.899C48.397 53.4309 49.1849 53.7234 49.9999 53.7234C50.8149 53.7234 51.6028 53.4309 52.2203 52.899Z"
                fill="#8C7BFD"
              />
              <path
                d="M52.7039 48.1414C52.7039 49.6348 51.4933 50.8453 50 50.8453C48.5068 50.8453 47.2963 49.6348 47.2963 48.1414C47.2963 46.648 48.5068 45.4377 50 45.4377C51.4933 45.4377 52.7039 46.6482 52.7039 48.1414Z"
                fill="#FFBE1B"
              />
            </g>
            <defs>
              <clipPath id="clip0_639_5331">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-center text-[#4F4F4F] text-xl mt-5 mb-2">
            Check your Email!!!
          </p>
          <p className="text-center text-[#4F4F4F]">
            We have sent password recovery instructions to your mail.
          </p>
          <p className="text-center font-satoshi-medium mt-20">
            Didn’t get a mail?{" "}
            <button className="text-app-purple">Resend</button>
          </p>
        </div>
      </Modal>
    </>
  );
}
