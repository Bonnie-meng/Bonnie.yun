import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LabEntryPage } from "@/components/pages/LabEntryPage";
import { labEntries } from "@/content/lab";

type LabEntryRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const metadata: Metadata = {
  title: "Lab Entry | Bonnie Yun",
  description: "A lab entry from Bonnie Yun."
};

export function generateStaticParams() {
  return labEntries.map((entry) => ({ slug: entry.slug }));
}

export default async function LabEntryRoute({ params }: LabEntryRouteProps) {
  const { slug } = await params;
  const entry = labEntries.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  return <LabEntryPage entry={entry} />;
}
