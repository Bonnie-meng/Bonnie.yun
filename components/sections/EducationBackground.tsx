"use client";

import { educationEntries } from "@/content/education";
import { homeRebuildCopy } from "@/content/rebuild";
import { usePreferences } from "@/lib/preferences";

export function EducationBackground() {
  const { language } = usePreferences();
  const copy = homeRebuildCopy[language].background;

  return (
    <section className="border-t border-hairline/70 py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 md:grid-cols-[42fr_58fr] md:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
            {copy.label}
          </p>
          <h2 className="mt-6 text-[clamp(36px,8vw,60px)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
            {copy.headline}
          </h2>
          <p className="mt-7 max-w-[560px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
            {copy.supporting}
          </p>
        </div>

        <div className="border-t border-hairline/80">
          {educationEntries.map((entry) => (
            <article key={entry.institution} className="border-b border-hairline/80 py-6">
              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-ink">
                {entry.institution}
              </h3>
              <p className="mt-3 text-base leading-7 tracking-[-0.01em] text-stone">
                {[entry.degree, entry.field].filter(Boolean).join(" · ")}
              </p>
              <p className="mt-1 text-base leading-7 tracking-[-0.01em] text-stone/70">
                {[entry.startDate, entry.endDate].filter(Boolean).join(" — ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
