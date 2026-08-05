import type { Metadata } from "next";
import { LabIndexPage } from "@/components/pages/LabIndexPage";

export const metadata: Metadata = {
  title: "Lab | Bonnie Yun",
  description: "Experiments, notes, and videos from Bonnie Yun."
};

export default function LabPage() {
  return <LabIndexPage />;
}
