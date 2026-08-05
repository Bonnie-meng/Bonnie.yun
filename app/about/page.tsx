import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About | Bonnie Yun",
  description: "Bonnie Yun's background, experience, and current direction."
};

export default function AboutRoute() {
  return <AboutPage />;
}
