import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/projects/CaseStudyPage";
import { getCaseStudy } from "@/content/projects";

const project = getCaseStudy("nft");

export const metadata: Metadata = {
  title: "NFT Marketplace",
  description:
    "A case study about designing trust inside a complex NFT trading system."
};

export default function NftPage() {
  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
