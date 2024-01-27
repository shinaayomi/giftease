import DashboardLayout from "@/components/DashboardLayout";
import {
  ChickenRepublicLogo,
  SweetSensationLogo,
  ThePlaceLogo,
} from "@/utils/AppImages";
import { SearchIcon } from "@/utils/icons";
import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Extras() {
  const router = useRouter();
  const [activeBtn, setActiveBtn] = useState("All");

  function handleActiveBtn(title: string) {
    return activeBtn === title;
  }

  return (
    <DashboardLayout>
      <section>
        <header className="flex justify-between sm:items-center flex-col md:flex-row gap-6">
          <div>
            <h2 className="text-[#4F4F4F] text-2xl md:text-[32px] font-satoshi-medium">
              Merchant Place
            </h2>
          </div>
          <div>
            <Input
              placeholder="Search by ID"
              prefix={<SearchIcon />}
              className="max-w-full w-[431px] h-14 bg-white border border-[#E0E0E0] hover:border-[#E0E0E0] rounded-lg px-4 py-2 app-input"
            />
          </div>
        </header>

        <nav className="flex items-center gap-3 flex-wrap my-6">
          {[
            { title: "All" },
            { title: "Restaurant" },
            { title: "Retail" },
            { title: "eCommerce" },
            { title: "Affiliate" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveBtn(item.title)}
              className={`w-[133px] h-10 ${
                handleActiveBtn(item.title)
                  ? "bg-white"
                  : "bg-[rgba(255,255,255,0.30)]"
              } rounded-lg`}
            >
              {item.title}
            </button>
          ))}
        </nav>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <article
              key={index}
              className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-[6px]"
            >
              <Image
                src={organisation.image}
                alt={organisation.title}
                className="aspect-square rounded-[6px]"
                width={154}
                height={150}
                priority
              />
              <div className="flex-1">
                <h5 className="text-[#4F4F4F] text-xl font-satoshi-medium">
                  {organisation.title}
                </h5>
                <p className="text-[#4F4F4F] text-sm mt-2 mb-3">
                  {organisation.content}
                </p>
                <div className="w-fit bg-[#EAFFEA] text-[#008000] text-xs p-[4px_8px] rounded-[2px] my-3">
                  Restaurant
                </div>
                <button
                  onClick={() => router.push(`/extras/${organisation.title}`)}
                  className="flex items-center text-app-purple"
                >
                  View merchant{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5.83301 14.1668L14.1663 5.8335M14.1663 5.8335H6.66634M14.1663 5.8335V13.3335"
                      stroke="#443792"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </section>
      </section>
    </DashboardLayout>
  );
}
