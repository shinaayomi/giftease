import Head from "next/head";
import React from "react";

export default function HeadShare({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="shortcut icon"
        href="/assets/images/Logo.svg"
        type="image/x-icon"
      />
    </Head>
  );
}
