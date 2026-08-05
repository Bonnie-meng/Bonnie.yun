"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { ProofOfWork } from "@/components/sections/ProofOfWork";
import { homeProjects } from "@/content/projects";
import { usePreferences } from "@/lib/preferences";

const professionalProjects = homeProjects.filter(
  (project) => project.slug !== "bonnie"
);

export function WorkIndexPage() {
  const { t } = usePreferences();

  return (
    <main>
      <section className="mx-auto w-full max-w-[1280px] px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24">
        <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
          {t.pages.work.label}
        </p>
        <h1 className="mt-6 max-w-[900px] text-[clamp(52px,12vw,92px)] font-semibold leading-[0.94] tracking-[-0.045em] text-ink md:text-[clamp(72px,7vw,112px)]">
          {t.pages.work.headline}
        </h1>
        <p className="mt-8 max-w-[640px] text-lg leading-[1.65] tracking-[-0.01em] text-stone md:text-xl md:leading-[1.7]">
          {t.pages.work.body}
        </p>
      </section>

      <ProofOfWork projects={professionalProjects} />

      <section className="border-t border-hairline/70 py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
          <h2 className="text-[clamp(34px,8vw,56px)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
            {t.pages.work.additionalTitle}
          </h2>
          <p className="mt-6 max-w-[620px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
            {t.pages.work.additionalPlaceholder}
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex min-h-11 items-center text-base font-semibold tracking-[-0.01em] text-ink transition hover:translate-x-1 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            {t.pages.work.contactCta}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
