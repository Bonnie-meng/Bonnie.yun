import type { Metadata } from "next";
import { WorkIndexPage } from "@/components/pages/WorkIndexPage";

export const metadata: Metadata = {
  title: "Work | Bonnie Yun",
  description: "A selection of Bonnie Yun's product work."
};

export default function WorkPage() {
  return <WorkIndexPage />;
}
