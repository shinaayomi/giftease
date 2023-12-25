import DashboardLayout from "@/components/DashboardLayout";
import { GTBankLogo, PlaceLogo, WemaBankLogo } from "@/utils/AppImages";
import {
  Complainanticon,
  CopyIcon,
  NigeriaIcon,
  RecipientsIcon,
  USAIcon,
  VoucherIcon,
  WalletIcon,
} from "@/utils/icons";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const Select = dynamic(async () => await import("antd/es/select"), {
  ssr: false,
});

export default function Dashboard() {
  const handleSelect = (value: unknown) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <DashboardLayout>
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
            {/* Wallet balance */}
            <div className="md:col-span-2 bg-white rounded-lg p-[14px_16px_21px]">
              <p className="text-[#828282] text-xs mb-[15px]">Wallet Balance</p>
              <h1 className="text-[#4F4F4F] text-2xl lg:text-[32px] font-satoshi-black mb-1">
                ₦5,000,000,000
              </h1>
              <div className="app-select">
                <Select
                  defaultValue="naira"
                  onChange={handleSelect}
                  options={[
                    {
                      value: "naira",
                      label: (
                        <div className="flex items-center gap-2">
                          <NigeriaIcon />
                          <span className="text-[#9B9B9B] text-xs">
                            Naira Wallet
                          </span>
                        </div>
                      ),
                    },
                    {
                      value: "dollar",
                      label: (
                        <div className="flex items-center gap-2">
                          <USAIcon />{" "}
                          <span className="text-[#9B9B9B] text-xs">
                            US Dollars
                          </span>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
            {/* Total amount spent */}
            <div className="md:col-span-2 bg-white rounded-lg p-[14px_16px_21px]">
              <p className="text-[#828282] text-xs mb-[15px]">
                Total amount spent
              </p>
              <h1 className="text-[#4F4F4F] text-2xl lg:text-[32px] font-satoshi-black mb-1">
                ₦5,000,000,000
              </h1>
              <div className="app-select">
                <Select
                  defaultValue="dollar"
                  onChange={handleSelect}
                  options={[
                    {
                      value: "dollar",
                      label: (
                        <div className="flex items-center gap-2">
                          <USAIcon />{" "}
                          <span className="text-[#9B9B9B] text-xs">
                            US Dollars
                          </span>
                        </div>
                      ),
                    },
                    {
                      value: "naira",
                      label: (
                        <div className="flex items-center gap-2">
                          <NigeriaIcon />{" "}
                          <span className="text-[#9B9B9B] text-xs">
                            Naira Wallet
                          </span>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
            {/* Voucher Generated */}
            <div className="bg-white rounded-lg p-[14px_16px_21px]">
              <p className="text-[#828282] text-xs mb-[15px]">
                Voucher Generated
              </p>
              <h1 className="text-[#4F4F4F] text-2xl lg:text-[32px] font-satoshi-black mb-1">
                2,400
              </h1>
              <div className="w-10 h-10 grid place-items-center bg-[#F3F2FD] rounded-[32px]">
                <VoucherIcon />
              </div>
            </div>
            {/* Recipients */}
            <div className="bg-white rounded-lg p-[14px_16px_21px]">
              <p className="text-[#828282] text-xs mb-[15px]">
                Voucher Generated
              </p>
              <h1 className="text-[#4F4F4F] text-2xl lg:text-[32px] font-satoshi-black mb-1">
                2,400
              </h1>
              <div className="w-10 h-10 grid place-items-center bg-[#F3F2FD] text-[#6563FF] rounded-[32px]">
                <RecipientsIcon width="24px" height="24px" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="md:col-span-2">
              <article className="bg-white rounded-lg p-[16px_24px]">
                <p className="text-[#828282] text-sm font-satoshi-medium mb-4">
                  QUICK ACTIONS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px]">
                  {[
                    { icon: <WalletIcon />, title: "Fund Wallet" },
                    {
                      icon: <VoucherIcon width="40px" height="40px" />,
                      title: "Send Voucher",
                    },
                    { icon: <Complainanticon />, title: "Raise a complaint" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col  items-center gap-[10px] bg-white border border-[#F2F2F2] rounded-lg p-[17px_15px]"
                    >
                      {item.icon}
                      <p className="text-[#828282] text-sm font-satoshi-medium">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="bg-white rounded-lg p-[16px_24px] mt-2">
                Chartjs
              </article>
            </div>

            <div>
              <article className="bg-white rounded-lg p-4">
                <p className="text-[#828282] text-sm font-satoshi-medium mb-6">
                  VIRTUAL ACCOUNT
                </p>
                <div className="grid gap-[13px]">
                  {[
                    { title: "GTBank", image: GTBankLogo },
                    { title: "Wema Bank", image: WemaBankLogo },
                  ].map((bank, index) => (
                    <div
                      key={index}
                      className="flex pb-[15px] border-b border-[#F2F2F2]"
                    >
                      <div>
                        <Image
                          src={bank.image}
                          alt="GTBank"
                          className="rounded-full"
                          width={48}
                          height={48}
                          priority
                        />
                      </div>
                      <div className="ms-3 md:ms-6">
                        <h5 className="text-[#4F4F4F] text-xl font-satoshi-medium mb-1">
                          8206916671
                        </h5>
                        <p className="flex items-center gap-[10px] text-[#828282]">
                          <span>ABC Ventures</span>
                          <span className="w-2 h-2 bg-[#F2C94C] rounded-full"></span>
                          <span>{bank.title}</span>
                        </p>
                      </div>
                      <div className="self-center ms-auto">
                        <button>
                          <CopyIcon />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="bg-white rounded-lg p-4 mt-2">
                <p className="text-sm text-[#4F4F4F] font-satoshi-medium mb-5">
                  Latest Redemption
                </p>
                <div className="grid gap-4">
                  {Array.from({ length: 12 }).flatMap((_, index) => (
                    <div className="flex justify-between items-center">
                      <p className="text-[#4F4F4F] text-sm font-satoshi-medium">
                        Aliyu Rabiu
                      </p>
                      <div className="flex items-center gap-2">
                        <Image
                          src={PlaceLogo}
                          alt="Place"
                          width={24}
                          height={24}
                          priority
                        />
                        <p className="text-[#4F4F4F] text-sm font-satoshi-medium">
                          The Place
                        </p>
                      </div>
                      <p className="text-[#4F4F4F] text-sm font-satoshi-medium">
                        ₦5000
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
}
