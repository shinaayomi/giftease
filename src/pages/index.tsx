import { Inter } from "next/font/google";
import HeadShare from "@/components/HeadShare";
import LandingPage from "@/layouts/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeadShare title="Log in" />
      <LandingPage />
    </main>
  );
}
