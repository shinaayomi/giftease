import LandingPageLayout from "@/components/LandingPageLayout";
import { QRCode, ThePlaceLogo } from "@/utils/AppImages";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function MarketPlaceId() {
  const router = useRouter();

  const marketplaceId = router.query.marketplaceId;

  return (
    <LandingPageLayout>
      <section className="px-4 md:px-10 lg:px-20 mt-6 sm:pt-14 pb-16 md:pb-28">
        <div className="container mx-auto">
          <div className="text-[#828282] text-sm mb-8 md:mb-14">
            Marketplace/
            <span className="text-black">{marketplaceId}</span>
          </div>

          <article className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-14">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-6 md:gap-9">
                <Image
                  src={ThePlaceLogo}
                  alt={"Organisation"}
                  className="w-[105px] md:w-[154px] h-16 md:h-[93px]"
                  width={154}
                  height={93}
                  priority
                />
                <p className="text-[#4F4F4F] text-xl md:text-[32px] font-satoshi-medium">
                  {marketplaceId}
                </p>
              </div>
              <p className="text-sm mt-5 mb-4 md:mb-9">
                The Place is a proudly Nigerian company, operating in the
                hospitality sectors of the Nigerian economy. The brand is one of
                the business units operated by Nigeria. Enjoy the very best of
                dining experience with mouth watering yet affordable meal
                options from continental cuisines to the best of local dishes
              </p>

              <p className="text-[#828282] text-sm mt-3">Category</p>
              <p className="text-[#333] text-sm mb-4 mt-[10px]">
                Food, Restaurant
              </p>
              <p className="text-[#828282] text-sm mt-3">
                Address{" "}
                <button className="text-app-purple float-right">
                  View Location
                </button>
              </p>
              <p className="text-[#333] text-sm my-[10px]">
                No 170 Aminu Kano Crescent Wuse II Abuja.
              </p>
              <p className="text-[#333] text-sm my-[10px]">
                No 170 Aminu Kano Crescent Wuse II Abuja.
              </p>
              <p className="text-[#828282] text-sm mt-4">Phone number</p>
              <p className="text-[#333] text-sm my-[10px]">09071713847</p>
              <p className="text-[#333] text-sm my-[10px]">09071713847</p>
              <div className="flex items-center flex-col md:flex-row gap-2 mt-6 md:mt-9">
                <button className="w-full sm:w-[233px] h-12 sm:h-14 bg-app-purple text-sm md:text-xl text-white font-satoshi-medium rounded-lg">
                  Generate Voucher
                </button>
                {/* <button className="w-full sm:w-[260px] h-12 sm:h-14 text-app-purple text-sm md:text-xl font-satoshi-medium border border-app-purple rounded-lg">
                  Request for a Loyalty card
                </button> */}
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-[#A0A2A7] text-sm mb-3 md:mb-6">
                Scan QR Code
              </p>
              <Image
                src={QRCode}
                alt="QS Code"
                className="w-full h-auto"
                width={456}
                height={538}
                priority
              />
            </div>
          </article>
        </div>
      </section>
    </LandingPageLayout>
  );
}
