import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/projects/CaseStudyPage";
import { getCaseStudy } from "@/content/projects";

const project = getCaseStudy("bonnie");

export const metadata: Metadata = {
  title: "bonnie.yun",
  description:
    "A case study about building a personal portfolio with AI support."
};

export default function BonniePage() {
  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
