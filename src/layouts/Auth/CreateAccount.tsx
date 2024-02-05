import AuthLayout from "@/components/AuthLayout";
import { GifteaseLogo2 } from "@/utils/AppImages";
import { countryData } from "@/utils/countrycode";
import { NigeriaIcon, USAIcon } from "@/utils/icons";
import { Button, Checkbox, Form, Input, Modal, Select, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function CreateAccount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    companyName: "",
    aboutUs: "",
    organizationEmail: "",
    businessRepresentative: "",
    companySize: "",
    country: "",
    countryCode: "",
    phoneNumber: "",
    password: "",
    terms_condition: false,
    pin: "",
  });
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState([]);
  const [countryCode, setCountryCode] = useState([]);

  const router = useRouter();

  const handleInputChange = (name: any, e: any) => {
    setInputValues({ ...inputValues, [name]: e.target.value });
  };

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    setLoading(true);

    const payload = {
      company_name: values.companyName,
      about: inputValues.aboutUs,
      email: values.organizationEmail,
      representative_name: values.businessRepresentative,
      password: values.password,
      country: values.country,
      phone: values.phoneNumber,
      company_size: values.companySize,
      pin: 99999,
    };

    try {
      const response = await fetch(
        "http://143.110.144.25:8000/users/register/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (response.ok) {
        message.success("Account created successfully");
        setLoading(false);
        setIsModalOpen(true);
      } else {
        message.error(data.message);
        setLoading(false);
      }
    } catch (err: any) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSelect = (value: any) => {
    console.log("selected", value);
  };

  type FieldType = {
    companyName?: string;
    aboutUs?: string;
    organizationEmail?: string;
    businessRepresentative?: string;
    companySize?: string;
    country?: string;
    countryCode?: string;
    phoneNumber?: string;
    password?: string;
    terms_condition?: boolean;
  };

  useEffect(() => {
    let data: any = [];
    countryData.map((country, i) => {
      if (country.status === "assigned") {
        data.push({
          value: country.ioc,
          label: country.name,
          key: i,
        });
      }
    });
    setCountry(data);
  }, []);

  useEffect(() => {
    let data: any = [];
    countryData.map((countryCodes, i) => {
      if (countryCodes.status === "assigned") {
        data.push({
          value: countryCodes.countryCallingCodes[0],
          label: (
            <div className="flex items-center gap-2">
              {countryCodes.emoji}{" "}
              <span className="text-[#9B9B9B] text-xs">
                ({countryCodes.countryCallingCodes})
              </span>
            </div>
          ),
          key: i,
        });
      }
    });
    setCountryCode(data);
  }, []);

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
          <h2 className="text-app-purple text-center text-2xl md:text-[32px] font-satoshi-bold mb-4">
            Create Account
          </h2>
          <p className="text-center text-[#333] text-sm md:text-base mb-8">
            Ready to simplify your employee rewards program? Let&apos;s get
            started! Sign up and experience the benefits of GiftEase today.
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
              <Form.Item<FieldType> label="Company’s name" name="companyName">
                <Input
                  className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
                  placeholder="E.g. john"
                  onChange={(e) => handleInputChange("companyName", e)}
                />
              </Form.Item>
              <Form.Item<FieldType> label="About Us" name="aboutUs">
                <Input
                  className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
                  placeholder="E.g. john@gmail.com"
                  onChange={(e) => handleInputChange("aboutUs", e)}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Organization’s email"
                name="organizationEmail"
              >
                <Input
                  className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
                  placeholder="E.g. john@gmail.com"
                  onChange={(e) => handleInputChange("organizationEmail", e)}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Business representative"
                name="businessRepresentative"
              >
                <Input
                  className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
                  placeholder="E.g. john"
                  onChange={(e) =>
                    handleInputChange("businessRepresentative", e)
                  }
                />
              </Form.Item>

              <Form.Item<FieldType> label="Company’s size" name="companySize">
                <Select
                  className="form-btn w-full border border-[#E0E0E0] rounded-lg"
                  defaultValue="Select Company’s size"
                  onChange={handleSelect}
                  options={[
                    {
                      value: "1-10",
                      label: "1 - 10",
                    },
                    {
                      value: "11-50",
                      label: "11 -50",
                    },
                    {
                      value: "51-100",
                      label: "51 -100",
                    },
                    {
                      value: "101-500",
                      label: "101 - 500",
                    },
                    {
                      value: "501+",
                      label: "501 and above",
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item<FieldType> label="Country" name="country">
                <Select
                  className="form-btn w-full border border-[#E0E0E0] rounded-lg"
                  defaultValue="Select a Country"
                  onChange={handleSelect}
                  //  onChange={(e) =>
                  //   handleInputChange("country", e)
                  // }
                  options={country}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Phone number"
                style={{ marginBottom: 0 }}
              >
                <div className="flex items-center gap-2">
                  <Form.Item<FieldType> name="countryCode">
                    <Select
                      className="form-btn"
                      style={{ width: 130 }}
                      defaultValue={`🇳🇬 (+234)`}
                      onChange={handleSelect}
                      options={countryCode}
                    />
                  </Form.Item>
                  <Form.Item<FieldType> name="phoneNumber" className="flex-1">
                    <Input
                      className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
                      placeholder="63683783783"
                      onChange={(e) => handleInputChange("phoneNumber", e)}
                    />
                  </Form.Item>
                </div>
              </Form.Item>

              <Form.Item<FieldType> label="Password" name="password">
                <Input.Password
                  placeholder="********"
                  className="h-12 md:h-14 border border-[#E0E0E0] rounded-lg"
                  onChange={(e) => handleInputChange("password", e)}
                />
              </Form.Item>

              <Form.Item<FieldType>
                name="terms_condition"
                valuePropName="checked"
              >
                <Checkbox
                  // onChange={(e) => handleInputChange("terms_condition", e)}
                  checked={inputValues.terms_condition}
                >
                  <span className="text-[#4F4F4F]">
                    I accept the{" "}
                    <span className="text-[#333] underline">
                      Terms and Conditions
                    </span>
                  </span>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  loading={loading}
                  type="primary"
                  className="w-full form-btn bg-app-purple rounded-lg font-satoshi-bold mt-4"
                  disabled={!inputValues.password ? true : false}
                  htmlType="submit"
                >
                  Create Account
                </Button>
              </Form.Item>
            </Form>
            <div className="text-center mt-8 pb-5">
              <p className="text-[#828282]">
                Already own an account?{" "}
                <Link
                  href={"/login"}
                  className="text-app-purple font-satoshi-bold"
                  passHref
                >
                  Log In
                </Link>
              </p>
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
            width="88"
            height="88"
            className="mx-auto"
            viewBox="0 0 88 88"
            fill="none"
          >
            <path
              d="M87.2688 35.7562C86.8786 34.7447 86.2254 33.8557 85.3766 33.1812L75.7516 25.5719V17.8453C75.7499 16.1882 75.0909 14.5995 73.9192 13.4277C72.7474 12.256 71.1587 11.597 69.5016 11.5953H59.1109L49.1188 2.67968C47.7117 1.4215 45.8848 0.735467 43.9974 0.756577C42.11 0.777686 40.2988 1.50441 38.9203 2.79375L29.4484 11.5953H18.4688C16.8117 11.597 15.2229 12.256 14.0512 13.4277C12.8794 14.5995 12.2204 16.1882 12.2188 17.8453V25.3078L2.54687 33.1969C1.83883 33.7918 1.26721 34.5322 0.870867 35.3677C0.474527 36.2033 0.262771 37.1144 0.25 38.0391V80.9844C0.251655 82.6415 0.910666 84.2302 2.08241 85.402C3.25415 86.5737 4.84291 87.2327 6.5 87.2344H81.5C83.1571 87.2327 84.7458 86.5737 85.9176 85.402C87.0893 84.2302 87.7483 82.6415 87.75 80.9844V38.0844C87.7407 37.2846 87.5773 36.4942 87.2688 35.7562ZM83.4375 35.6344C83.5179 35.7053 83.5946 35.7804 83.6672 35.8594L75.75 42.3625V29.5562L83.4375 35.6344ZM41.0438 5.08593C41.8529 4.32701 42.9168 3.89844 44.0261 3.88456C45.1353 3.87068 46.2096 4.2725 47.0375 5.01093L54.4172 11.5953H34.0391L41.0438 5.08593ZM15.3438 17.8437C15.345 17.0153 15.6746 16.2212 16.2604 15.6354C16.8462 15.0496 17.6403 14.72 18.4688 14.7187H69.5C70.3284 14.72 71.1226 15.0496 71.7083 15.6354C72.2941 16.2212 72.6238 17.0153 72.625 17.8437V44.9281L55.8312 58.725L46.7281 51.2953C45.9571 50.6692 44.994 50.3274 44.0008 50.3274C43.0075 50.3274 42.0445 50.6692 41.2734 51.2953L32.2203 58.6844L15.3453 44.8656L15.3438 17.8437ZM4.52344 35.6172L12.2188 29.3391V42.3078L4.3125 35.8359C4.38281 35.7641 4.44375 35.6844 4.52344 35.6172ZM81.5 84.1094H6.5C5.67158 84.1081 4.87744 83.7785 4.29166 83.1927C3.70588 82.6069 3.37624 81.8128 3.375 80.9844V39.1062L29.75 60.7031L7.85625 78.5703C7.54788 78.8361 7.35542 79.2118 7.31984 79.6173C7.28426 80.0229 7.40838 80.4263 7.66577 80.7417C7.92315 81.0571 8.29349 81.2596 8.69794 81.3061C9.10239 81.3526 9.50901 81.2394 9.83125 80.9906L43.25 53.7172C43.4627 53.5458 43.7276 53.4524 44.0008 53.4524C44.2739 53.4524 44.5388 53.5458 44.7516 53.7172L78.1687 80.9906C78.4899 81.2525 78.902 81.3761 79.3142 81.3342C79.7265 81.2923 80.1053 81.0883 80.3672 80.7672C80.6291 80.446 80.7527 80.034 80.7108 79.6217C80.6689 79.2094 80.4649 78.8307 80.1438 78.5687L58.3 60.7406L84.625 39.1156V80.9859C84.6238 81.8144 84.2941 82.6085 83.7083 83.1943C83.1226 83.7801 82.3284 84.1097 81.5 84.1109V84.1094ZM38.1828 42.4641L30.3047 33.3875C30.0482 33.0727 29.9243 32.6704 29.9592 32.2659C29.9942 31.8613 30.1853 31.4863 30.492 31.2202C30.7987 30.9541 31.197 30.8179 31.6024 30.8403C32.0079 30.8628 32.3886 31.0422 32.6641 31.3406L39.4203 39.1219L55.3578 22.525C55.6448 22.226 56.0388 22.0533 56.4531 22.0448C56.8675 22.0363 57.2682 22.1927 57.5672 22.4797C57.8662 22.7667 58.0389 23.1607 58.0474 23.575C58.0559 23.9893 57.8995 24.3901 57.6125 24.6891L40.4906 42.5219C40.3396 42.6776 40.158 42.8003 39.9572 42.8823C39.7565 42.9643 39.5409 43.0039 39.3241 42.9984C39.1072 42.993 38.8939 42.9427 38.6975 42.8507C38.5011 42.7588 38.3258 42.6271 38.1828 42.4641Z"
              fill="url(#paint0_linear_4_153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_153"
                x1="0.25"
                y1="43.9953"
                x2="87.75"
                y2="43.9953"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00C0FF" />
                <stop offset="1" stop-color="#5558FF" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-center text-[#4F4F4F] text-xl mt-5 mb-2">
            Verify your Mail
          </p>
          <p className="text-center text-[#4F4F4F]">
            We have you sent a verification mail with an OTP. Kindly check your
            mail.
          </p>
          <p className="text-center font-satoshi-medium mt-20">
            Didn’t get a mail?{" "}
            <button className="text-app-purple">Resend</button>
          </p>
        </div>
      </Modal>
    </AuthLayout>
  );
}
