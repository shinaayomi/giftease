import LandingPageLayout from "@/components/LandingPageLayout";
import {
  ChickenRepublicLogo,
  SweetSensationLogo,
  ThePlaceLogo,
} from "@/utils/AppImages";
import { SearchIcon } from "@/utils/icons";
import { Input, Select } from "antd";
import Image from "next/image";
import React from "react";

export default function MarketingPlace() {
  const handleSelect = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <LandingPageLayout>
      <header className="bg-[url('/assets/images/market-place-bg.png')] bg-no-repeat bg-cover md:bg-[length:100%_100%] px-4 md:px-10 pt-16 pb-14">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-white text-xl md:text-[40px] font-satoshi-black">
              MARKETPLACE
            </h1>
            <p className="max-w-[497px] text-white font-satoshi-bold mt-3 mb-7">
              Generate vouchers for any of the listed stores/brands and share
              with your employees
            </p>
            <div className="max-w-[457px] w-full h-14 flex items-center bg-white px-1 md:px-4 py-2 rounded-[6px]">
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                variant="borderless"
                onChange={handleSelect}
                options={[
                  { value: "all", label: "All stores" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
              <span className="text-[#BDBDBD]">|</span>
              <Input
                className="flex-1 placeholder:text-[#828282] "
                variant="borderless"
                placeholder="Search for store, brand, etc."
                suffix={<SearchIcon color="#443792" />}
              />
            </div>
            <div className="flex justify-center items-center flex-wrap gap-3 mt-9">
              {["Restaurant", "Retail", "eCommerce", "Affiliate"].map(
                (category, index) => (
                  <button
                    key={index}
                    className="w-[133px] h-10 bg-[rgba(255,255,255,0.50)] text-white rounded-lg"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="px-4 md:px-10 lg:px-20 pt-14 pb-16 md:pb-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
            {[
              {
                image: ThePlaceLogo,
                title: "The Place",
                content:
                  "Enjoy the very best of dining experience with mouth watering yet affordable meal options from continental cuisines to the best of local dishes",
              },
              {
                image: ChickenRepublicLogo,
                title: "Chicken Republic",
                content:
                  "Enjoy the very best of dining experience with mouth watering yet affordable meal options from continental cuisines to the best of local dishes",
              },
              {
                image: SweetSensationLogo,
                title: "Sweet Sensation",
                content:
                  "Enjoy the very best of dining experience with mouth watering yet affordable meal options from continental cuisines to the best of local dishes",
              },
            ].map((organisation, index) => (
              <div
                key={index}
                className="bg-white shadow-[0px_4px_16px_6px_rgba(0,0,0,0.05)] rounded-lg"
              >
                <Image
                  src={organisation.image}
                  alt={organisation.title}
                  className="w-full rounded-t-lg"
                  width={412}
                  height={262}
                  priority
                />
                <div className="p-4 md:p-6 mt06">
                  <p className="text-[#4F4F4F] text-xl font-satoshi-medium">
                    {organisation.title}
                  </p>
                  <p className="text-[#4F4F4F] mt-2 mb-3">
                    {organisation.content}
                  </p>
                  <span className="bg-[#EAFFEA] text-[#008000] text-xs p-[4px_8px] rounded-[2px]">
                    Restaurant
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
}
