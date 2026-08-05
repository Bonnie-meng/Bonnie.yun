"use client";

import { homeRebuildCopy } from "@/content/rebuild";
import { usePreferences } from "@/lib/preferences";

function FlowRow({
  label,
  steps
}: {
  label: string;
  steps: readonly string[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
        {label}
      </p>
      <ol className="mt-4 flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="border border-hairline/90 px-3 py-2 text-sm font-semibold tracking-[-0.01em] text-ink">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="text-stone/45" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function WhyAIProduct() {
  const { language } = usePreferences();
  const copy = homeRebuildCopy[language].why;

  return (
    <section className="border-t border-hairline/70 py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[44fr_56fr] md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
              {copy.label}
            </p>
            <h2 className="mt-6 max-w-[720px] whitespace-pre-line text-[clamp(44px,10vw,76px)] font-semibold leading-[0.96] tracking-[-0.045em] text-ink md:text-[clamp(58px,5.3vw,88px)]">
              {copy.headline}
            </h2>
          </div>

          <div className="md:pt-14">
            <div className="max-w-[680px] space-y-6 text-lg leading-[1.7] tracking-[-0.01em] text-stone md:text-xl">
              {copy.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 grid gap-8 border-y border-hairline/70 py-8">
              <FlowRow label={copy.beforeLabel} steps={copy.before} />
              <FlowRow label={copy.nowLabel} steps={copy.now} />
            </div>

            <p className="mt-7 max-w-[620px] text-base font-semibold leading-7 tracking-[-0.01em] text-ink">
              {copy.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
