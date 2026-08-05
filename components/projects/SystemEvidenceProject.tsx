"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type {
  ProjectDecision,
  SystemEvidenceProjectData,
  SystemStep
} from "@/content/projects";
import { cn } from "@/lib/utils";

type SystemEvidenceProjectProps = {
  project: SystemEvidenceProjectData;
  className?: string;
};

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

function FadeIn({ children, className }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInVariants}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SystemDiagram({ steps }: { steps: SystemStep[] }) {
  return (
    <FadeIn className="mt-14 md:mt-18">
      <figure aria-label="NFT Marketplace system flow">
        <div className="mx-auto max-w-[760px] border-y border-hairline/70 py-10 md:py-12">
          <ol className="mx-auto max-w-[420px]">
            {steps.map((step, index) => (
              <li key={step.label} className="text-center">
                <div className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink md:text-3xl">
                  {step.label}
                </div>
                {index < steps.length - 1 ? (
                  <div
                    className="mx-auto my-5 h-12 w-px bg-ink/70 md:my-6"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </figure>
    </FadeIn>
  );
}

function SystemDecisionList({ decisions }: { decisions: ProjectDecision[] }) {
  return (
    <FadeIn className="mt-14 md:mt-18">
      <div className="grid gap-8 md:grid-cols-[32fr_68fr] md:gap-14">
        <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
          Product decisions
        </p>

        <ol>
          {decisions.map((decision, index) => (
            <li
              key={decision.title}
              className="grid gap-3 border-t border-hairline/70 py-6 md:grid-cols-[56px_1fr] md:gap-8 md:py-7"
            >
              <span className="text-sm font-medium leading-6 tracking-[-0.01em] text-stone/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="max-w-[520px] whitespace-pre-line text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink md:text-[1.7rem]">
                  {decision.title}
                </h3>
                <p className="mt-3 max-w-[620px] whitespace-pre-line text-lg leading-[1.6] tracking-[-0.01em] text-stone">
                  {decision.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </FadeIn>
  );
}

export function SystemEvidenceProject({
  project,
  className
}: SystemEvidenceProjectProps) {
  return (
    <section
      id={project.id}
      className={cn("scroll-mt-24 py-16 md:py-24", className)}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <FadeIn>
          <p
            id={`${project.id}-title`}
            className="text-base font-medium tracking-[-0.01em] text-stone/70"
          >
            {project.title}
          </p>
          <h2 className="mt-5 max-w-[760px] whitespace-pre-line text-[clamp(42px,10vw,64px)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink md:text-[clamp(58px,5.7vw,84px)]">
            {project.statement}
          </h2>
          <p className="mt-7 max-w-[680px] whitespace-pre-line text-lg leading-[1.65] tracking-[-0.01em] text-stone">
            {project.supportingCopy}
          </p>
        </FadeIn>

        <SystemDiagram steps={project.systemSteps} />
        <SystemDecisionList decisions={project.decisions} />

        <FadeIn className="mt-10 md:mt-12">
          <a
            href={`#${project.id}`}
            className="inline-flex text-base font-semibold leading-6 tracking-[-0.01em] text-ink transition duration-300 hover:-translate-y-0.5 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            {project.cta}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
