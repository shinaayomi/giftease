import { GifteaseLogo2 } from "@/utils/AppImages";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function LandingPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main>
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
