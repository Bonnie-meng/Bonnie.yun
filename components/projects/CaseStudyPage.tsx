"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import type { CaseStudyData } from "@/content/projects";
import type { LocalizedCaseStudy } from "@/content/translations";
import { usePreferences } from "@/lib/preferences";

type CaseStudyPageProps = {
  project: CaseStudyData;
};

function CaseSection({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-6 border-t border-hairline/70 py-10 md:grid-cols-[32fr_68fr] md:gap-14 md:py-14">
      <h2 className="text-base font-medium tracking-[-0.01em] text-stone/70">
        {title}
      </h2>
      <div className="text-lg leading-[1.7] tracking-[-0.01em] text-stone">
        {children}
      </div>
    </section>
  );
}

function MetaGrid({
  labels,
  project
}: {
  labels: ReturnType<typeof usePreferences>["t"]["caseStudy"]["metaLabels"];
  project: LocalizedCaseStudy;
}) {
  const items = [
    { label: labels.role, value: project.role },
    { label: labels.timeline, value: project.timeline },
    { label: labels.team, value: project.team },
    { label: labels.platform, value: project.platform },
    { label: labels.outcome, value: project.outcome }
  ];

  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-6 border-y border-hairline/70 py-7 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-sm font-medium leading-6 tracking-[-0.01em] text-stone/70">
            {item.label}
          </dt>
          <dd className="mt-2 text-base font-semibold leading-7 tracking-[-0.02em] text-ink">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function DecisionList({
  decisions
}: {
  decisions: LocalizedCaseStudy["decisions"];
}) {
  return (
    <ol>
      {decisions.map((decision, index) => (
        <li
          key={decision.title}
          className="grid gap-3 border-t border-hairline/70 py-6 first:border-t-0 first:pt-0 md:grid-cols-[56px_1fr] md:gap-8"
        >
          <span className="text-sm font-medium leading-6 tracking-[-0.01em] text-stone/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink md:text-[1.65rem]">
              {decision.title}
            </h3>
            <p className="mt-3 max-w-[680px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
              {decision.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function SystemDiagram({ steps }: { steps: string[] }) {

  return (
    <figure className="visual-surface mt-10 overflow-hidden rounded-[24px] border border-hairline/80 p-8 md:p-12">
      <figcaption className="sr-only">NFT marketplace transfer flow</figcaption>
      <ol className="mx-auto grid max-w-[720px] gap-0 md:grid-cols-[1fr_36px_1fr_36px_1fr_36px_1fr_36px_1fr] md:items-center">
        {steps.map((step, index) => (
          <li key={step} className="contents">
            <span className="flex min-h-14 items-center justify-center border border-ink/75 bg-porcelain/45 px-3 text-center text-sm font-semibold tracking-[-0.02em] text-ink md:min-h-16 md:text-base">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="mx-auto h-10 w-px bg-ink/75 md:h-px md:w-full" />
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}

function ProofBlock({
  project,
  title
}: {
  project: LocalizedCaseStudy;
  title: string;
}) {
  if (!project.proves) {
    return null;
  }

  return (
    <CaseSection title={title}>
      <p className="max-w-[560px] whitespace-pre-line text-[clamp(34px,9vw,52px)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
        {project.proves.statement}
      </p>
      <p className="mt-5 max-w-[560px] whitespace-pre-line text-lg leading-[1.65] text-stone">
        {project.proves.supportingCopy}
      </p>
      <dl className="mt-8 grid gap-6 md:grid-cols-3">
        {project.proves.proof.map((item) => (
          <div key={item.label} className="border-t border-hairline/70 pt-5">
            <dt className="text-sm font-medium uppercase tracking-[0.08em] text-stone/60">
              {item.label}
            </dt>
            <dd className="mt-3 text-base leading-7 tracking-[-0.01em] text-stone">
              {item.statement}
            </dd>
          </div>
        ))}
      </dl>
    </CaseSection>
  );
}

function ProjectVisual({
  project,
  systemSteps
}: {
  project: CaseStudyData;
  systemSteps: string[];
}) {
  if (project.slug === "nft") {
    return <SystemDiagram steps={systemSteps} />;
  }

  if (!project.heroImage) {
    return null;
  }

  return (
    <figure className="mt-10">
      <div className="visual-surface relative aspect-[16/10] overflow-hidden rounded-[24px] border border-hairline/80 p-4 md:p-5">
        <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-hairline/70 bg-porcelain">
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
            priority
            sizes="(min-width: 768px) 100vw, 100vw"
          />
        </div>
      </div>
      {project.heroImage.caption ? (
        <figcaption className="mt-3 text-sm leading-6 tracking-[-0.01em] text-stone/70">
          {project.heroImage.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function CaseStudyPage({ project }: CaseStudyPageProps) {
  const { t } = usePreferences();
  const localizedProject = t.caseStudy.projects[project.slug];
  const systemSteps = t.work.visuals.nftSteps;

  useEffect(() => {
    document.title = `${localizedProject.title} | Bonnie Yun`;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", localizedProject.valueProposition);
    }
  }, [localizedProject.title, localizedProject.valueProposition]);

  return (
    <main>
      <article className="mx-auto w-full max-w-[1280px] px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-20">
        <Link
          href="/work"
          className="inline-flex min-h-11 items-center text-base font-medium tracking-[-0.01em] text-stone transition hover:text-ink focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          {t.caseStudy.back}
        </Link>

        <header className="mt-14 max-w-[900px] md:mt-20">
          <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
            {localizedProject.projectLabel}
          </p>
          <h1 className="mt-6 text-[clamp(52px,12vw,92px)] font-semibold leading-[0.94] tracking-[-0.045em] text-ink md:text-[clamp(72px,7vw,112px)]">
            {localizedProject.title}
          </h1>
          <p className="mt-8 max-w-[720px] text-[clamp(28px,7vw,48px)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink/90">
            {localizedProject.valueProposition}
          </p>
        </header>

        <ProjectVisual project={project} systemSteps={systemSteps} />

        <div className="mt-10 md:mt-14">
          <MetaGrid labels={t.caseStudy.metaLabels} project={localizedProject} />
        </div>

        <div className="mt-8 md:mt-12">
          <CaseSection title={t.caseStudy.sections.overview}>
            <p className="max-w-[720px]">{localizedProject.overview}</p>
          </CaseSection>

          <CaseSection title={t.caseStudy.sections.context}>
            <p className="max-w-[720px]">{localizedProject.context}</p>
          </CaseSection>

          <CaseSection title={t.caseStudy.sections.roleScope}>
            <div className="max-w-[720px]">
              <p>{localizedProject.responsibilities.join(" · ")}</p>
            </div>
          </CaseSection>

          <CaseSection title={t.caseStudy.sections.outcome}>
            <p className="max-w-[720px]">{localizedProject.outcome}</p>
          </CaseSection>

          <CaseSection title={t.caseStudy.sections.problem}>
            <p className="max-w-[720px]">{localizedProject.problem}</p>
          </CaseSection>

          <ProofBlock
            project={localizedProject}
            title={t.caseStudy.sections.proves}
          />

          <CaseSection title={t.caseStudy.sections.decisions}>
            <DecisionList decisions={localizedProject.decisions} />
          </CaseSection>

          <CaseSection title={t.caseStudy.sections.execution}>
            <p className="max-w-[720px]">{localizedProject.execution}</p>
          </CaseSection>

          <CaseSection title={t.caseStudy.sections.result}>
            <p className="max-w-[720px]">{localizedProject.result}</p>
          </CaseSection>

          <CaseSection title={t.caseStudy.sections.reflection}>
            <h2 className="max-w-[560px] whitespace-pre-line text-[clamp(34px,9vw,52px)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
              {localizedProject.reflection.title}
            </h2>
            <p className="mt-5 max-w-[620px]">
              {localizedProject.reflection.body}
            </p>
          </CaseSection>

          <nav
            className="border-t border-hairline/70 pt-10"
            aria-label="Next project"
          >
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-stone/60">
              {t.caseStudy.sections.nextProject}
            </p>
            <Link
              href={project.nextProject.href}
              className="mt-4 inline-flex min-h-11 items-center text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink transition hover:translate-x-1 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              {localizedProject.nextProject} →
            </Link>
          </nav>
        </div>
      </article>
    </main>
  );
}
