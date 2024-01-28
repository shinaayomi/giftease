import DashboardLayout from "@/components/DashboardLayout";
import { UnverifiedIcon, WarningIcon } from "@/utils/icons";
import { Button } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import PersonnelmanagementImg from "../../../public/assets/images/Profile-manager-img.png";
import Image from "next/image";

export default function ProfileManagement() {
  const [activeTab, setActiveTab] = useState("Bussiness");

  return (
    <DashboardLayout>
      <section className="max-w-[758px] mx-auto bg-white rounded-lg py-10 px-4 md:px-8 lg:px-16">
        <h4 className="text-[#4F4F4F] text-2xl text-center font-satoshi-medium mb-5">
          Profile Management
        </h4>
        <div className="w-fit max-w-full mx-auto flex justify-center items-center bg-white border border-[rgba(178,177,255,0.50)] rounded-[30px] p-1 mb-7">
          {["Bussiness", "Business Logo"].map((btn, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(btn)}
              className={`max-w-1/2 w-[200px] h-[38px] ${
                activeTab === btn && "bg-[#E8E4FE] text-app-purple"
              } text-[#828282] rounded-[20px]`}
            >
              {btn}
            </button>
          ))}
        </div>

        {activeTab === "Bussiness" && (
          <article>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Business name", detail: "ABC Ventures" },
                { title: "Business Representative", detail: "Aisha Aliyu" },
                { title: "Email address", detail: "abc@gmail.com" },
                { title: "Phone number", detail: "+234875985" },
              ].map((bussiness, index) => (
                <div key={index}>
                  <p className="text-[#828282] font-satoshi-medium mb-2">
                    {bussiness.title}
                  </p>
                  <p className="text-xl text-[#4F4F4F] font-satoshi-medium">
                    {bussiness.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <WarningIcon />
              <p className="flex-1 text-sm text-[#828282]">
                You can not edit details in this section,{" "}
                <Link
                  href=""
                  className="text-app-purple font-satoshi-medium"
                  passHref
                >
                  Click here to create a ticket for updating Profile
                </Link>
                , by doing so you will be able to edit
              </p>
            </div>

            <div className="flex flex-col items-center text-center py-16 md:py-24">
              <UnverifiedIcon />
              <h6 className="text-black font-satoshi-medium mt-4 mb-2">
                Unverified Business
              </h6>
              <p className="text-[#828282] font-satoshi-medium">
                Verify your business to be able to send vouchers
              </p>
              <Button
                type="primary"
                className="w-[287px] max-w-full h-14 bg-app-purple text-white font-satoshi-medium rounded-lg mt-4"
              >
                Verify my business
              </Button>
            </div>
          </article>
        )}

        {activeTab === "Business Logo" && (
          <article className="flex flex-col items-center mx-auto pt-28 pb-20">
            <Image
              src={PersonnelmanagementImg}
              alt="Personnel management"
              width={176}
              height={176}
              priority
            />
            <Button
              type="primary"
              className="w-[500px] max-w-full h-14 bg-app-purple text-white hover:text-white rounded-lg  mt-12"
            >
              Update Changes
            </Button>
          </article>
        )}
      </section>
    </DashboardLayout>
  );
}
