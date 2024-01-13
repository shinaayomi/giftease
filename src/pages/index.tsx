import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "@/layouts/Login";
import HeadShare from "@/components/HeadShare";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeadShare title="Log in" />
      <Login />
    </main>
  );
}
