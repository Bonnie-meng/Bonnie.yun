"use client";

import { usePreferences } from "@/lib/preferences";

export function About() {
  const { t } = usePreferences();

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-hairline/70 py-24 md:py-36"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-6 md:grid-cols-[42fr_58fr] md:px-10">
        <div>
          <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
            {t.about.label}
          </p>
          <h2
            id="about-title"
            className="mt-6 max-w-[520px] whitespace-pre-line text-[clamp(44px,10vw,72px)] font-semibold leading-[0.96] tracking-[-0.045em] text-ink md:text-[clamp(56px,5.6vw,86px)]"
          >
            {t.about.headline}
          </h2>
        </div>

        <div className="max-w-[640px] md:pt-14">
          <div className="space-y-6 text-lg leading-[1.65] tracking-[-0.01em] text-stone md:text-xl md:leading-[1.7]">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 border-t border-hairline/70 pt-6">
            <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
              {t.about.evolutionLabel}
            </p>
            <p className="mt-4 text-base font-medium tracking-[-0.01em] text-stone/75 md:text-lg">
              {t.about.evolutionPath}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
