import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/projects/CaseStudyPage";
import { getCaseStudy } from "@/content/projects";

const project = getCaseStudy("fanfanme");

export const metadata: Metadata = {
  title: "干饭咩",
  description:
    "A case study about turning an everyday meal decision into a working AI product."
};

export default function FanfanmePage() {
  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
