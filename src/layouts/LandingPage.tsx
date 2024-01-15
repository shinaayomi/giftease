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
      <header className="bg-[url('/assets/images/landing-page-bg.webp')] bg-no-repeat bg-[length:100%_100%] ">
        <div className="hidden md:block">
          <LandingpageNavbar />
        </div>
        <LandinPageMobileNav />
        <section className="px-4 md:px-10 lg:px-20">
          <div className="container mx-auto">
            <h1>Elevate Employee Perks with Giftease</h1>
            <p>
              Say goodbye to the hassle of manual voucher creation. With
              GiftEase, you can effortlessly generate and customize vouchers for
              your employees. Choose from a variety of options to create the
              perfect rewards tailored to your team's needs.
            </p>
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
