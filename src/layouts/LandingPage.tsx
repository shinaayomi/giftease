import LandingPageLayout, {
  LandinPageMobileNav,
  LandingpageNavbar,
} from "@/components/LandingPageLayout";
import {
  LandingPageHeroImg,
  AllianzImg,
  ArcaImg,
  BuyletImg,
  CapricornImg,
  DevrecruitImg,
  GTBank737Img,
  HabaipayImg,
  IntelliaImg,
  KpmgImg,
  MaxngImg,
  SendboxImg,
  SmartflowImg,
  Tenece,
  WallxLogo,
  HIWCreateAccountLogo,
  HIWWalletLogo,
  HIWVoucherLogo,
  Abdulrasaq,
} from "@/utils/AppImages";
import { Carousel } from "antd";
import Image from "next/image";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";

export default function LandingPage() {
  const slider = useRef<any>(null);

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
              perfect rewards tailored to your team&apos;s needs.
            </p>
            <div className="hidden sm:flex justify-center items-center gap-4 mb-16">
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

      <section className="bg-[#F8F8F8] sm:pt-10 sm:pb-16 py-6">
        <div className="container mx-auto px-4 md:px-10">
          <h5 className="text-app-purple text-center text-base sm:text-xl font-satoshi-bold mb-4 md:mb-8">
            WE ARE TRUSTED BY
          </h5>
        </div>
        <Marquee>
          <div className="flex items-center gap-10">
            {[
              AllianzImg,
              ArcaImg,
              BuyletImg,
              CapricornImg,
              DevrecruitImg,
              GTBank737Img,
              HabaipayImg,
              IntelliaImg,
              KpmgImg,
              MaxngImg,
              SendboxImg,
              SmartflowImg,
              Tenece,
              WallxLogo,
            ].map((company, index) => (
              <Image
                key={index}
                src={company}
                alt="Company"
                className="w-auto h-10 md:h-16"
                priority
              />
            ))}
          </div>
        </Marquee>
      </section>

      <section className="bg-white px-4 md:px-10 sm:pt-12 sm:pb-20 py-8">
        <div className="container mx-auto">
          <h5 className="text-app-purple text-center text-base sm:text-xl font-satoshi-bold mb-8 md:mb-14">
            HOW IT WORKS
          </h5>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
            {[
              {
                image: HIWCreateAccountLogo,
                title: "Create an Account",
                content:
                  "Register your company on GiftEase to start creating vouchers",
                titleColor: "text-app-purple",
              },
              {
                image: HIWWalletLogo,
                title: "Fund your Wallet",
                content: "Add money to your naira or dollar wallet ",
                titleColor: "text-[#5A4EF6]",
              },
              {
                image: HIWVoucherLogo,
                title: "Generate Vouchers",
                content: "Generate bulk vouchers to your employee. ",
                titleColor: "text-[#16A085]",
              },
            ].map((work, index) => (
              <div
                key={index}
                className="max-w-[264px] flex flex-col items-center text-center"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  width={56}
                  height={56}
                  className="w-10 lg:w-14 h-10 lg:h-14"
                  priority
                />
                <h5
                  className={`${work.titleColor} text-base lg:text-xl font-satoshi-bold mt-4 mb-3`}
                >
                  {work.title}
                </h5>
                <p className="text-[#4F4F4F] text-sm lg:text-base">
                  {work.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-10">
        <div className="container mx-auto">
          <div className="bg-[url('/assets/images/simple-fast-bg.png')] bg-[length:100%_100%] bg-no-repeat pt-6 md:pt-12 pb-10 md:pb-14 px-4 md:px-10">
            <div className="max-w-[722px] mx-auto text-center">
              <h1 className="text-white text-lg md:text-[40px] font-satoshi-bold ">
                SIMPLE<span className="text-[#FFD771]">.</span> FAST
                <span className="text-[#FFD771]">.</span> EASY TO USE
              </h1>
              <p className="text-white text-xs md:text-base font-satoshi-medium mt-3 md:mt-7 mb-8 md:mb-12 ">
                Say goodbye to the hassle of manual voucher creation. With
                GiftEase, you can effortlessly generate and customize vouchers
                for your employees. Choose from a variety of options to create
                the perfect rewards tailored to your team&apos;s needs.
              </p>
              <button className="w-full sm:w-[250px] h-14 bg-white text-app-purple text-sm md:text-base font-satoshi-bold rounded-lg">
                Start Generating Vouchers
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-10 py-10 md:py-20">
        <div className="container mx-auto">
          <h1 className="text-app-purple text-center text-lg md:text-[40px] font-satoshi-bold mb-5 md:mb-8">
            Don’t take our word for it. Trust our customers
          </h1>
          <div className="relative testimonial-carousel">
            <Carousel ref={slider} autoplay>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index}>
                  <div className="max-w-[768px] mx-auto text-center">
                    <p className="text-[#333] text-xs md:text-base">
                      “Giftease has revolutionized how we appreciate our
                      employees. The platform&apos;s ease of use, customization
                      options, and vast voucher selection have made it a
                      game-changer for us. Our employees love the personal
                      touch, and our HR team loves the efficiency it brings to
                      our rewards program”
                    </p>
                    <Image
                      src={Abdulrasaq}
                      alt="Abdurrazaq A."
                      width={56}
                      height={56}
                      className="w-10 md:w-14 h-10 md:h-14 mx-auto mt-8 mb-4 rounded-full"
                      priority
                    />
                    <p className="text-[#333] font-satoshi-medium">
                      Abdurrazaq A.
                    </p>
                    <p className="text-xs sm:text-sm text-[#4F4F4F] ">
                      Business Owner, XYZ Limited
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 hidden md:grid place-items-center rounded-full border border-app-purple"
              onClick={() => slider.current.prev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M20 11.5H7.83L13.42 5.91L12 4.5L4 12.5L12 20.5L13.41 19.09L7.83 13.5H20V11.5Z"
                  fill="#443792"
                />
              </svg>
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 hidden md:grid place-items-center rounded-full border border-app-purple"
              onClick={() => slider.current.next()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12 4.5L10.59 5.91L16.17 11.5H4V13.5H16.17L10.59 19.09L12 20.5L20 12.5L12 4.5Z"
                  fill="#443792"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
}
