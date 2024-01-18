import { GifteaseLogo, GifteaseLogo2 } from "@/utils/AppImages";
import {
  CircularCloseIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon,
  TwitterIcon,
} from "@/utils/icons";
import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";

export const LandingpageNavbar = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      {path === "/" ? (
        <nav className="md:px-10 lg:px-20 md:py-5">
          <div className="container mx-auto">
            <div className="flex justify-between items-center flex-col md:flex-row gap-y-16">
              <div className="self-start md:self-center">
                <Link href="/" passHref>
                  <Image
                    src={GifteaseLogo}
                    alt="Giftease"
                    width={80}
                    height={80}
                    className="w-16 md:w-20 h-16 md:h-20"
                    priority
                  />
                </Link>
              </div>
              <div className="w-full md:w-auto flex md:items-center flex-col md:flex-row gap-9 text-center">
                <Link href="/" className="text-white" passHref>
                  Home
                </Link>
                <Link href="/#ourPartners" className="text-white" passHref>
                  Our Partners
                </Link>
                <Link href="/marketing-place" className="text-white" passHref>
                  Marketplace
                </Link>
              </div>

              <div className="hidden md:flex md:items-center flex-col md:flex-row gap-8 md:gap-14">
                <Link
                  href="/login"
                  className="text-white font-satoshi-bold"
                  passHref
                >
                  Login
                </Link>
                <button className="w-[147px] h-[56px] bg-white text-[#10093E] font-satoshi-bold rounded-2xl">
                  Create account
                </button>
              </div>

              <div className="w-full md:w-auto flex md:hidden justify-center items-center flex-col md:flex-row gap-3 md:gap-4 mb-9 md:mb-16">
                <button className="w-full md:w-[200px] h-14 text-white border border-white rounded-2xl whitespace-nowrap">
                  Explore marketplace
                </button>
                <button
                  onClick={() => router.push("/login")}
                  className="w-full md:w-[200px] h-14 bg-white text-[#10093E] rounded-2xl"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="md:px-10 lg:px-20 md:py-5">
          <div className="container mx-auto">
            <div className="w-full md:w-auto flex justify-between items-center flex-col md:flex-row gap-y-16">
              <div className="self-start md:self-center">
                <Link href="/" passHref>
                  <Image
                    src={GifteaseLogo2}
                    alt="Giftease"
                    width={80}
                    height={80}
                    className="w-16 md:w-20 h-16 md:h-20"
                    priority
                  />
                </Link>
              </div>
              <div className="flex md:items-center flex-col md:flex-row gap-9 text-center">
                <Link href="/" className="text-[#4F4F4F]" passHref>
                  Home
                </Link>
                <Link href="/#ourPartners" className="text-[#4F4F4F]" passHref>
                  Our Partners
                </Link>
                <Link
                  href="/marketing-place"
                  className={`pb-1 ${
                    path === "/marketing-place" ||
                    path === "/marketing-place/[marketplaceId]"
                      ? "text-app-purple border-b border-app-purple"
                      : "text-[#4F4F4F]"
                  }`}
                  passHref
                >
                  Marketplace
                </Link>
              </div>

              <div className="hidden md:flex md:items-center flex-col md:flex-row gap-8 md:gap-14">
                <Link
                  href="/login"
                  className="text-app-purple font-satoshi-bold"
                  passHref
                >
                  Login
                </Link>
                <button className="w-[147px] h-[56px] bg-app-purple text-white font-satoshi-bold rounded-2xl">
                  Create account
                </button>
              </div>

              <div className="w-full md:w-auto flex md:hidden justify-center items-center flex-col md:flex-row gap-3 md:gap-4 mb-9 md:mb-16">
                <button className="w-full md:w-[200px] h-14 text-white border border-white rounded-2xl whitespace-nowrap">
                  Explore marketplace
                </button>
                <button
                  onClick={() => router.push("/login")}
                  className="w-full md:w-[200px] h-14 bg-white text-[#10093E] rounded-2xl"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export const LandinPageMobileNav = () => {
  const router = useRouter();
  const path = router.pathname;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="block md:hidden px-4 md:px-10 lg:px-20 py-1 md:py-5">
      <div className="container mx-auto">
        {path === "/" ? (
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <Image
                src={GifteaseLogo}
                alt="Giftease"
                width={64}
                height={64}
                priority
              />
            </Link>
            <button onClick={showDrawer} className="bg-white rounded p-2">
              <MenuIcon />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <Image
                src={GifteaseLogo2}
                alt="Giftease"
                width={64}
                height={64}
                priority
              />
            </Link>
            <button className="bg-[#F4F6FF] rounded p-2" onClick={showDrawer}>
              <MenuIcon />
            </button>
          </div>
        )}
      </div>
      <div>
        <Drawer
          style={{ background: path === "/" ? "#443792" : "#ffffff" }}
          className="mobileDrawer"
          placement="left"
          onClose={onClose}
          open={open}
          closable={false}
        >
          <div className="absolute top-6 right-4">
            <button
              onClick={onClose}
              className="w-10 h-10 bg-[rgba(255,255,255,0.10)] rounded-full grid place-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.0659 8.99469C16.3588 8.70179 16.3588 8.22692 16.0659 7.93403C15.773 7.64113 15.2981 7.64113 15.0052 7.93403L12 10.9392L8.99482 7.93403C8.70192 7.64113 8.22705 7.64113 7.93416 7.93403C7.64126 8.22692 7.64126 8.70179 7.93416 8.99469L10.9394 11.9999L7.93415 15.0051C7.64125 15.298 7.64125 15.7729 7.93415 16.0658C8.22704 16.3586 8.70191 16.3586 8.99481 16.0658L12 13.0605L15.0052 16.0658C15.2981 16.3586 15.773 16.3586 16.0659 16.0658C16.3588 15.7729 16.3588 15.298 16.0659 15.0051L13.0607 11.9999L16.0659 8.99469Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <LandingpageNavbar />
        </Drawer>
      </div>
    </nav>
  );
};

export default function LandingPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const path = router.pathname;

  const date = new Date();

  return (
    <main>
      {path === "/" || (
        <>
          <div className="hidden md:block">
            <LandingpageNavbar />
          </div>
          <LandinPageMobileNav />
        </>
      )}

      <section>{children}</section>

      {/* start footer */}
      <footer className="px-4 md:px-10 lg:px-20 border-t border-[#F2F2FF] pt-7 pb-11 md:pb-20">
        <div className="container mx-auto">
          <div className="flex justify-between flex-col md:flex-row gap-8">
            <div>
              <div className="inline-flex flex-col items-center">
                <Link href="/" passHref>
                  <Image
                    src={GifteaseLogo2}
                    alt="Giftease"
                    width={68}
                    height={86}
                    priority
                  />
                </Link>
                <p className="text-[#4F4F4F] text-sm leaading-[150%]">
                  A Product of WallX
                </p>
              </div>
              <p className="text-[#828282] text-[10px] mt-[10px]">
                {date.getFullYear()} WallX. All right reserved.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-14">
              <div className="flex flex-col gap-1">
                <Link href="" passHref>
                  <div className="text-[#4F4F4F]">Product</div>
                </Link>
                <Link href="" passHref>
                  <div className="text-[#4F4F4F]">Privacy Policy</div>
                </Link>
                <Link href="" passHref>
                  <div className="text-[#4F4F4F]">Help</div>
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <Link href="/#ourPartners" passHref>
                  <div className="text-[#4F4F4F]">Our Partner</div>
                </Link>
                <Link href="/marketing-place" passHref>
                  <div className="text-[#4F4F4F]">Marketplace</div>
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <Link href="" passHref>
                  <div className="text-[#4F4F4F]">Create account</div>
                </Link>
                <Link href="/login" passHref>
                  <div className="text-[#4F4F4F]">Log in</div>
                </Link>
                <Link href="/forgot-password" passHref>
                  <div className="text-[#4F4F4F]">Forgot Password</div>
                </Link>
              </div>
            </div>

            <div className="flex gap-5">
              <Link
                href="https://www.facebook.com/wallx.africa"
                target="_blank"
                passHref
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://www.instagram.com/wallx.africa?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                passHref
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/company/wallx/"
                target="_blank"
                passHref
              >
                <LinkedinIcon />
              </Link>
              <Link
                href="https://twitter.com/wallx_africa?s=11&t=4Z11r4vBfwR9OfTnbUdPEw"
                target="_blank"
                passHref
              >
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </main>
  );
}
