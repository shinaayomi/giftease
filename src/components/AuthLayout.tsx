import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function AuthLayout({ children }: IProps) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <section>{children}</section>
      <section className="hidden md:grid bg-[url('/assets/images/auth-hero-img.webp')] bg-no-repeat bg-[length:100%_100%] px-6 xl:px-12 py-16">
        <article
          className="rounded-lg px-4 xl:px-8 pt-[26px] pb-16 mt-auto text-center"
          // style={{
          //   background:
          //     "linear-gradient(180deg, rgba(72, 77, 82, 0.60) 0%, rgba(105, 104, 104, 0.36) 100%)",
          // }}
        >
          <h2 className="text-2xl xl:text-[32px] text-white font-satoshi-bold mb-4">
            Generate Vouchers with Ease
          </h2>
          <p className="text-base xl:text-xl text-white font-satoshi-medium tracking-[-0.4px]">
            Say goodbye to the hassle of manual voucher creation. With GiftEase,
            you can effortlessly generate and customize vouchers for your
            employees. Choose from a variety of options to create the perfect
            rewards tailored to your team&apos;s needs.
          </p>
        </article>
      </section>
    </main>
  );
}
