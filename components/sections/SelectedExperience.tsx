"use client";

import Link from "next/link";
import { experienceEntries } from "@/content/experience";
import { homeRebuildCopy } from "@/content/rebuild";
import { usePreferences } from "@/lib/preferences";

export function SelectedExperience() {
  const { language } = usePreferences();
  const copy = homeRebuildCopy[language].experience;

  return (
    <section id="experience" className="scroll-mt-24 border-t border-hairline/70 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="max-w-[820px]">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
            {copy.label}
          </p>
          <h2 className="mt-6 whitespace-pre-line text-[clamp(42px,9vw,72px)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink md:text-[clamp(56px,5vw,84px)]">
            {copy.headline}
          </h2>
        </div>

        <div className="mt-14 border-t border-hairline/80">
          {experienceEntries.slice(0, 3).map((entry) => (
            <article
              key={`${entry.company}-${entry.industry}`}
              className="grid gap-6 border-b border-hairline/80 py-8 md:grid-cols-[32fr_68fr] md:gap-14"
            >
              <div>
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink">
                  {entry.company}
                </h3>
                <p className="mt-2 text-base font-medium leading-7 tracking-[-0.01em] text-stone">
                  {entry.role} · {entry.startDate} — {entry.endDate}
                </p>
                {entry.industry ? (
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.08em] text-stone/60">
                    {entry.industry}
                  </p>
                ) : null}
              </div>
              <div>
                {entry.context ? (
                  <p className="mb-5 max-w-[680px] text-lg font-semibold leading-[1.55] tracking-[-0.02em] text-ink">
                    {entry.context}
                  </p>
                ) : null}
                <p className="max-w-[680px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
                  {entry.summary}
                </p>
                {entry.projects ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {entry.projects.map((project) => (
                      <li
                        key={project}
                        className="border border-hairline/90 px-3 py-2 text-sm font-semibold tracking-[-0.01em] text-ink"
                      >
                        {project}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <ul className="mt-5 grid gap-2 text-base leading-7 tracking-[-0.01em] text-stone">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {entry.results ? (
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {entry.results.map((result) => (
                      <li
                        key={result}
                        className="bg-fog px-4 py-3 text-sm font-semibold tracking-[-0.01em] text-ink"
                      >
                        {result}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {entry.narrative ? (
                  <p className="mt-6 max-w-[680px] text-xl font-semibold leading-[1.35] tracking-[-0.03em] text-ink">
                    {entry.narrative}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-hairline/80 pt-7">
          <p className="text-base font-semibold tracking-[-0.01em] text-ink">
            {copy.earlierLabel}
          </p>
          <p className="mt-4 max-w-[820px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
            {copy.earlierCopy}
          </p>
          <Link
            href="/about#experience"
            className="mt-6 inline-flex min-h-11 items-center text-base font-semibold tracking-[-0.01em] text-ink transition hover:translate-x-1 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            {language === "zh" ? "查看完整经历 →" : "View Full Experience →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
