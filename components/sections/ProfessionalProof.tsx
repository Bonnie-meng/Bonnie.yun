"use client";

import { homeRebuildCopy, proofMetrics } from "@/content/rebuild";
import { usePreferences } from "@/lib/preferences";

export function ProfessionalProof() {
  const { language } = usePreferences();
  const copy = homeRebuildCopy[language].proof;

  return (
    <section className="border-t border-hairline/70 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="max-w-[900px]">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
            {copy.label}
          </p>
          <h2 className="mt-6 whitespace-pre-line text-[clamp(42px,9vw,72px)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink md:text-[clamp(56px,5vw,84px)]">
            {copy.headline}
          </h2>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 border-y border-hairline/80 py-8 md:grid-cols-4">
          {proofMetrics.map((metric) => (
            <article key={metric.value}>
              <p className="text-[clamp(42px,10vw,68px)] font-semibold leading-none tracking-[-0.055em] text-ink">
                {metric.value}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.035em] text-ink">
                {metric.label[language]}
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-stone/60">
                {metric.context[language]}
              </p>
              <p className="mt-5 text-base leading-7 tracking-[-0.01em] text-stone">
                {metric.description[language]}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-sm leading-6 tracking-[-0.01em] text-stone/65">
          {copy.note}
        </p>
      </div>
    </section>
  );
}
