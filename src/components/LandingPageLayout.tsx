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
        <nav className="px-4 md:px-10 lg:px-20 py-3 md:py-5">
          <div className="container mx-auto">
            <div className="flex justify-between md:items-center flex-col md:flex-row gap-y-16">
              <div>
                <Link href="/" passHref>
                  <Image
                    src={GifteaseLogo}
                    alt="Giftease"
                    width={80}
                    height={80}
                    priority
                  />
                </Link>
              </div>
              <div className="flex md:items-center flex-col md:flex-row gap-9">
                <Link href="" className="text-white" passHref>
                  Product
                </Link>
                <Link href="" className="text-white" passHref>
                  Our Partners
                </Link>
                <Link href="/marketing-place" className="text-white" passHref>
                  Marketplace
                </Link>
              </div>

              <div className="flex md:items-center flex-col md:flex-row gap-8 md:gap-14">
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
            </div>{" "}
          </div>
        </nav>
      ) : (
        <nav className="px-4 md:px-10 lg:px-20 py-3 md:py-5">
          <div className="container mx-auto">
            <div className="flex justify-between md:items-center flex-col md:flex-row gap-y-16">
              <div>
                <Link href="/" passHref>
                  <Image
                    src={GifteaseLogo2}
                    alt="Giftease"
                    width={80}
                    height={80}
                    priority
                  />
                </Link>
              </div>
              <div className="flex md:items-center flex-col md:flex-row gap-9">
                <Link href="" className="text-[#4F4F4F]" passHref>
                  Product
                </Link>
                <Link href="" className="text-[#4F4F4F]" passHref>
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

              <div className="flex md:items-center flex-col md:flex-row gap-8 md:gap-14">
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
          style={{ background: path === "/" ? "#16103B" : "#ffffff" }}
          className="mobileDrawer"
          placement="left"
          onClose={onClose}
          open={open}
          closable={false}
        >
          <div className="block sm:hidden absolute top-4 right-4">
            <button onClick={onClose}>
              <CircularCloseIcon />
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
                2023 WallX. All right reserved.
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
                <Link href="" passHref>
                  <div className="text-[#4F4F4F]">Our Partner</div>
                </Link>
                <Link href="" passHref>
                  <div className="text-[#4F4F4F]">Marketplace</div>
                </Link>
                <Link href="" passHref>
                  <div className="text-[#4F4F4F]">Add Personnel</div>
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <Link href="" passHref>
                  <div className="text-[#4F4F4F]">Create account</div>
                </Link>
                <Link href="" passHref>
                  <div className="text-[#4F4F4F]">Log in</div>
                </Link>
                <Link href="" passHref>
                  <div className="text-[#4F4F4F]">Forgot Password</div>
                </Link>
              </div>
            </div>

            <div className="flex gap-5">
              <Link href="" passHref>
                <FacebookIcon />
              </Link>
              <Link href="" passHref>
                <InstagramIcon />
              </Link>
              <Link href="" passHref>
                <LinkedinIcon />
              </Link>
              <Link href="" passHref>
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
