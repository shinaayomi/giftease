import LandingPageLayout, {
  LandinPageMobileNav,
  LandingpageNavbar,
} from "@/components/LandingPageLayout";
import { LandingPageHeroImg } from "@/utils/AppImages";
import Image from "next/image";
import React from "react";

export default function LandingPage() {
  return (
    <LandingPageLayout>
      <header className="bg-[url('/assets/images/landing-page-bg.webp')] bg-no-repeat bg-cover md:bg-[length:100%_100%]">
        <div className="hidden md:block">
          <LandingpageNavbar />
        </div>
        <LandinPageMobileNav />

        <section className="px-4 md:px-10 lg:px-20 py-[50px]">
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-5xl text-white text-center font-satoshi-black">
              Elevate{" "}
              <span className="text-[#FAB941]">
                Employee <br className="block sm:hidden" /> Perks
              </span>{" "}
              with Giftease
            </h1>
            <p className="max-w-[722px] mx-auto text-center text-sm md:text-base text-white font-satoshi-medium my-8 sm:mt-[10px] sm:mb-10">
              Say goodbye to the hassle of manual voucher creation. With
              GiftEase, you can effortlessly generate and customize vouchers for
              your employees. Choose from a variety of options to create the
              perfect rewards tailored to your team's needs.
            </p>
            <div className="hidden sm:flex justify-center items-center gap-4">
              <button className="w-[200px] h-14 bg-white text-[#10093E] rounded-2xl">
                Get Started
              </button>
              <button className="w-[200px] h-14 text-white border border-white rounded-2xl">
                Explore marketplace
              </button>
            </div>
            <Image
              src={LandingPageHeroImg}
              className="w-full"
              width={1238}
              height={552}
              alt="Hero"
              priority
            />
          </div>
        </section>
      </header>
    </LandingPageLayout>
  );
}
