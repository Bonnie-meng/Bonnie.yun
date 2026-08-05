"use client";

import Link from "next/link";
import { homeRebuildCopy } from "@/content/rebuild";
import { usePreferences } from "@/lib/preferences";

export function VibeCodingJourney() {
  const { language } = usePreferences();
  const copy = homeRebuildCopy[language].vibe;

  return (
    <section
      id="vibe-coding"
      className="scroll-mt-24 border-t border-hairline/70 py-20 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[42fr_58fr] md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
              {copy.label}
            </p>
            <h2 className="mt-6 max-w-[700px] whitespace-pre-line text-[clamp(42px,9vw,70px)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink md:text-[clamp(52px,4.8vw,82px)]">
              {copy.headline}
            </h2>
          </div>

          <div className="border-t border-hairline/80">
            {copy.experiments.map((experiment) => (
              <article key={experiment.eyebrow} className="border-b border-hairline/80 py-8">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
                  {experiment.eyebrow}
                </p>
                <h3 className="mt-4 text-[clamp(28px,7vw,44px)] font-semibold leading-[1.04] tracking-[-0.04em] text-ink">
                  {experiment.title}
                </h3>
                <dl className="mt-7 grid gap-5">
                  {experiment.rows.map((row) => (
                    <div key={row.label} className="grid gap-2 md:grid-cols-[150px_1fr]">
                      <dt className="text-sm font-semibold uppercase tracking-[0.08em] text-stone/60">
                        {row.label}
                      </dt>
                      <dd className="text-base leading-7 tracking-[-0.01em] text-stone">
                        {row.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 max-w-[760px] md:ml-auto">
          {copy.closing.map((line) => (
            <p
              key={line}
              className="mt-4 text-[clamp(28px,7vw,44px)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink first:mt-0"
            >
              {line}
            </p>
          ))}
          <Link
            href="/lab"
            className="mt-8 inline-flex min-h-11 items-center border-b border-ink/40 text-base font-semibold tracking-[-0.01em] text-ink transition hover:translate-x-1 hover:border-ink focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
