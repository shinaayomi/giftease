import { Button, Form, Input } from "antd";
import React from "react";

export default function SecuritySettingsPassword() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  type FieldType = {
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
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
          label="Old Password"
          name="oldPassword"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="********"
            className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="New Password"
          name="newPassword"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="********"
            className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Confirm Password"
          name="confirmPassword"
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
            Update Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
