"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type {
  EvidenceProjectData,
  ProjectDecision,
  ProjectImage,
  ProjectSnapshotItem
} from "@/content/projects";
import { cn } from "@/lib/utils";

type EvidenceProjectProps = {
  project: EvidenceProjectData;
  className?: string;
  sectionId?: string;
};

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

function FadeIn({ children, className, delay = 0 }: FadeInProps) {
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
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ScreenshotImage({
  image,
  className,
  priority = false,
  sizes
}: {
  image: ProjectImage;
  className?: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <figure className={cn("group", className)}>
      <div className="relative overflow-hidden rounded-[28px] border border-hairline/70 bg-white/35">
        <Image
          src={image.src}
          alt={image.alt}
          width={1600}
          height={1000}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]"
          priority={priority}
          sizes={sizes}
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-3 text-sm leading-6 tracking-[-0.01em] text-stone/70">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function EvidenceHeader({ project }: { project: EvidenceProjectData }) {
  return (
    <header className="grid gap-10 md:grid-cols-[46fr_54fr] md:items-end md:gap-14">
      <FadeIn>
        <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
          {project.category}
        </p>
        <h2
          id={`${project.id}-title`}
          className="mt-5 font-sans text-[clamp(50px,13vw,76px)] font-semibold leading-[0.94] tracking-[-0.045em] text-ink md:text-[clamp(58px,5.5vw,82px)]"
        >
          {project.name}
        </h2>
        {project.supportingHeadline ? (
          <p className="mt-4 max-w-[520px] text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink md:text-[1.8rem]">
            {project.supportingHeadline}
          </p>
        ) : null}
        <p className="mt-5 max-w-[520px] text-lg leading-[1.6] tracking-[-0.01em] text-stone/80">
          {project.tagline}
        </p>
        <p className="mt-5 max-w-[560px] text-base leading-7 tracking-[-0.01em] text-stone/80">
          {project.overview}
        </p>
        <p className="mt-5 text-sm font-medium leading-6 tracking-[-0.01em] text-stone/70">
          {project.role} · {project.meta.join(" · ")}
        </p>
      </FadeIn>

      <FadeIn delay={0.08}>
        <ScreenshotImage
          image={project.headerImage}
          priority
          sizes="(min-width: 768px) 54vw, 100vw"
        />
      </FadeIn>
    </header>
  );
}

export function EvidenceGallery({ images }: { images: ProjectImage[] }) {
  return (
    <FadeIn className="mt-20 md:mt-28" delay={0.04}>
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {images.map((image) => (
          <ScreenshotImage
            key={`${image.src}-${image.caption ?? image.alt}`}
            image={image}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ))}
      </div>
    </FadeIn>
  );
}

export function ProjectSnapshot({ items }: { items: ProjectSnapshotItem[] }) {
  return (
    <FadeIn className="mt-10 border-y border-hairline/70 py-6 md:mt-12 md:py-7">
      <dl className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="text-sm font-medium leading-6 tracking-[-0.01em] text-stone/70">
              {item.label}
            </dt>
            <dd
              className={cn(
                "mt-2 text-base font-medium leading-7 tracking-[-0.02em] text-ink",
                item.label === "Timeline" ? "font-semibold" : ""
              )}
            >
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </FadeIn>
  );
}

export function ProjectProof({
  statement,
  supportingCopy
}: {
  statement: string;
  supportingCopy: string;
}) {
  return (
    <FadeIn className="mt-10 md:mt-12">
      <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
        What this proves
      </p>
      <p className="mt-4 max-w-[560px] whitespace-pre-line font-sans text-[clamp(36px,10vw,44px)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink md:text-[clamp(46px,4.7vw,58px)]">
        {statement}
      </p>
      <p className="mt-4 max-w-[520px] whitespace-pre-line text-lg leading-[1.6] tracking-[-0.01em] text-stone">
        {supportingCopy}
      </p>
    </FadeIn>
  );
}

export function DecisionList({ decisions }: { decisions: ProjectDecision[] }) {
  return (
    <FadeIn className="mt-10 md:mt-12">
      <div className="grid gap-6 md:grid-cols-[32fr_68fr] md:gap-14">
        <div>
          <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
            Product decisions
          </p>
        </div>

        <ol>
          {decisions.map((decision, index) => (
            <li
              key={decision.title}
              className="grid gap-3 border-t border-hairline/70 py-5 md:grid-cols-[56px_1fr] md:gap-8 md:py-6"
            >
              <span className="text-sm font-medium leading-6 tracking-[-0.01em] text-stone/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink md:text-[1.65rem]">
                  {decision.title}
                </h3>
                <p className="mt-3 max-w-[650px] text-lg leading-[1.55] tracking-[-0.01em] text-stone">
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

export function ProjectReflection({
  title,
  body
}: EvidenceProjectData["reflection"]) {
  return (
    <FadeIn className="mt-8 border-t border-hairline/70 pt-8 md:mt-10 md:pt-9">
      <div className="grid gap-6 md:grid-cols-[32fr_68fr] md:gap-14">
        <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
          Reflection
        </p>
        <div>
          <h3 className="max-w-[520px] whitespace-pre-line text-[clamp(32px,8vw,40px)] font-semibold leading-[1] tracking-[-0.045em] text-ink md:text-[clamp(38px,3.8vw,48px)]">
            {title}
          </h3>
          <p className="mt-4 max-w-[560px] text-lg leading-[1.6] tracking-[-0.01em] text-stone">
            {body}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export function EvidenceProject({
  project,
  className,
  sectionId
}: EvidenceProjectProps) {
  return (
    <section
      id={sectionId ?? project.id}
      className={cn("scroll-mt-24 py-16 md:pb-24 md:pt-20", className)}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <EvidenceHeader project={project} />
        <ProjectSnapshot items={project.snapshot} />
        <ProjectProof
          statement={project.proves}
          supportingCopy={project.provesSupportingCopy}
        />
        <DecisionList decisions={project.decisions} />
        <ProjectReflection {...project.reflection} />
      </div>
    </section>
  );
}
