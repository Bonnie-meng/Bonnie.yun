"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProjectPreviewData } from "@/content/projects";
import { cn } from "@/lib/utils";
import { usePreferences } from "@/lib/preferences";

type ProofOfWorkProps = {
  projects: ProjectPreviewData[];
};

function SystemFlowVisual() {
  const { t } = usePreferences();
  const steps = t.work.visuals.nftSteps;

  return (
    <div className="flex h-full items-center justify-center p-6 md:p-12">
      <ol className="grid w-full max-w-[540px] grid-cols-1 items-center gap-0 md:grid-cols-[1fr_22px_1fr_22px_1fr_22px_1fr_22px_1fr]">
        {steps.map((step, index) => (
          <li key={step} className="contents">
            <span className="flex min-h-9 items-center justify-center border border-ink/75 bg-porcelain/45 px-2 text-center text-[0.72rem] font-semibold tracking-[-0.02em] text-ink md:min-h-14 md:px-3 md:text-[0.86rem] lg:text-sm">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="mx-auto h-3 w-px bg-ink/75 md:h-px md:w-full" />
            ) : null}
          </li>
        ))}
      </ol>
      <div className="sr-only">{steps.join(" to ")}</div>
    </div>
  );
}

function WorkflowVisual() {
  const { t } = usePreferences();

  return (
    <div className="grid h-full content-center gap-3 p-5 md:gap-6 md:p-10">
      {t.work.visuals.workflowRows.map((row, index) => (
        <div
          key={row.label}
          className="grid gap-2 border-t border-hairline/90 pt-3 md:grid-cols-[96px_1fr] md:gap-5 md:pt-6"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-ink md:text-sm">
            {String(index + 1).padStart(2, "0")} {row.label}
          </span>
          <span className="text-sm font-medium leading-snug tracking-[-0.025em] text-ink md:text-lg">
            {row.body}
          </span>
        </div>
      ))}
    </div>
  );
}

function ProjectVisual({ project }: { project: ProjectPreviewData }) {
  return (
    <div
      className={cn(
        "group relative aspect-[16/10] overflow-hidden rounded-[28px] border border-hairline/90 visual-surface",
        project.visual.type === "image" ? "p-4 md:p-5" : "",
        project.visual.type === "workflow" ? "visual-surface-strong" : ""
      )}
    >
      {project.visual.type === "image" && project.visual.image ? (
        <div className="relative h-full w-full overflow-hidden rounded-[20px] border border-hairline/80 bg-porcelain">
          <div className="flex h-9 items-center gap-2 border-b border-hairline/70 px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-stone/35" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone/20" />
          </div>
          <Image
            src={project.visual.image.src}
            alt={project.visual.image.alt}
            width={1200}
            height={750}
            className="h-[calc(100%-36px)] w-full object-cover object-center transition duration-500 group-hover:scale-[1.015]"
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        </div>
      ) : null}
      {project.visual.type === "system" ? <SystemFlowVisual /> : null}
      {project.visual.type === "workflow" ? <WorkflowVisual /> : null}
    </div>
  );
}

function ProjectPreview({
  project,
  index
}: {
  project: ProjectPreviewData;
  index: number;
}) {
  const reverse = index % 2 === 1;
  const { t } = usePreferences();
  const copy = t.work.projects[project.slug];

  return (
    <article
      className="grid gap-10 border-t border-hairline/80 py-16 md:grid-cols-[46fr_54fr] md:items-center md:gap-16 md:py-24"
      aria-labelledby={`${project.slug}-preview-title`}
    >
      <div className={cn("max-w-[560px]", reverse ? "md:order-2 md:ml-auto" : "")}>
        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/75">
          {copy.capability}
        </p>
        <h3
          id={`${project.slug}-preview-title`}
          className="mt-6 text-[clamp(34px,8vw,54px)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink md:text-[clamp(44px,4.2vw,64px)]"
        >
          {copy.title}
        </h3>
        <p className="mt-6 max-w-[520px] text-[clamp(24px,6vw,34px)] font-semibold leading-[1.08] tracking-[-0.04em] text-ink/90 md:text-[clamp(28px,2.8vw,40px)]">
          {copy.context}
        </p>
        <p className="mt-8 max-w-[520px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
          {copy.description}
        </p>
        <dl className="mt-8 grid gap-4 border-y border-hairline/70 py-5 sm:grid-cols-3">
          {copy.meta.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.09em] text-stone/60">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm font-semibold leading-6 tracking-[-0.01em] text-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-base font-medium leading-7 tracking-[-0.01em] text-stone">
          {copy.outcome}
        </p>
        <Link
          href={project.href}
          className="mt-8 inline-flex min-h-11 items-center border-b border-ink/40 text-base font-semibold tracking-[-0.01em] text-ink transition duration-300 hover:translate-x-1 hover:border-ink focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          {copy.cta}
        </Link>
      </div>

      <div className={cn(reverse ? "md:order-1" : "")}>
        <ProjectVisual project={project} />
      </div>
    </article>
  );
}

export function ProofOfWork({ projects }: ProofOfWorkProps) {
  const { t } = usePreferences();

  return (
    <section
      id="work"
      className="scroll-mt-24 py-24 md:py-40"
      aria-labelledby="work-title"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-6 md:grid-cols-[58fr_42fr] md:items-end md:gap-8">
          <div>
            <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
              {t.work.label}
            </p>
            <h2
              id="work-title"
              className="mt-6 text-[clamp(48px,10vw,78px)] font-semibold leading-[0.96] tracking-[-0.045em] text-ink md:text-[clamp(60px,5.8vw,90px)]"
            >
              {t.work.title}
            </h2>
          </div>
          <p className="max-w-[420px] text-lg leading-[1.65] tracking-[-0.01em] text-stone md:justify-self-start">
            {t.work.description}
          </p>
        </div>

        <div className="mt-14 md:mt-20">
          {projects.map((project, index) => (
            <ProjectPreview
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
