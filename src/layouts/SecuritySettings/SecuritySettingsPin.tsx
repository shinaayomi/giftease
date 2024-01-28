import { Button, Form, Input } from "antd";
import React from "react";

export default function SecuritySettingsPin() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  type FieldType = {
    enterOTP?: string;
    newPin?: string;
    confirmPin?: string;
  };

  return (
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
          label="Enter OTP"
          name="enterOTP"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="********"
            className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="New Pin"
          name="newPin"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="********"
            className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Confirm Pin"
          name="confirmPin"
          rules={[{ required: true, message: "Please enter your password!" }]}
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
          >
            Set Pin
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
