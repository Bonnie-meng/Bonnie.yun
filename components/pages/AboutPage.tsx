"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { educationEntries } from "@/content/education";
import { experienceEntries } from "@/content/experience";
import { profile } from "@/content/profile";
import { usePreferences } from "@/lib/preferences";

export function AboutPage() {
  const { t } = usePreferences();

  return (
    <main>
      <section className="mx-auto w-full max-w-[1280px] px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24">
        <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
          {t.pages.about.intro.label}
        </p>
        <h1 className="mt-6 max-w-[980px] text-[clamp(52px,12vw,92px)] font-semibold leading-[0.94] tracking-[-0.045em] text-ink md:text-[clamp(72px,7vw,112px)]">
          {t.pages.about.intro.headline}
        </h1>
        <div className="mt-10 max-w-[720px] space-y-6 text-lg leading-[1.7] tracking-[-0.01em] text-stone md:text-xl">
          {t.pages.about.intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline/70 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
          <h2 className="text-[clamp(34px,8vw,56px)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
            {t.pages.about.journeyTitle}
          </h2>
          <p className="mt-6 text-xl font-semibold tracking-[-0.035em] text-ink">
            {profile.journey.join(" → ")}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {t.pages.about.journey.map((stage) => (
              <article key={stage.label} className="border-t border-hairline/80 pt-5">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-ink">
                  {stage.label}
                </h3>
                <p className="mt-4 text-base leading-7 tracking-[-0.01em] text-stone">
                  {stage.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-24 border-t border-hairline/70 py-16 md:py-24"
      >
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
          <h2 className="text-[clamp(34px,8vw,56px)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
            {t.pages.about.experienceTitle}
          </h2>
          <div className="mt-10 border-t border-hairline/80">
            {experienceEntries.map((entry) => (
              <article
                key={`${entry.company}-${entry.industry}`}
                className="grid gap-6 border-b border-hairline/80 py-8 md:grid-cols-[32fr_68fr] md:gap-14"
              >
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] text-ink">
                    {entry.company}
                  </h3>
                  <p className="mt-2 text-base font-medium leading-7 tracking-[-0.01em] text-stone">
                    {entry.role} · {entry.startDate}
                  </p>
                  {entry.industry ? (
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.08em] text-stone/60">
                      {entry.industry}
                    </p>
                  ) : null}
                </div>
                <div>
                  <p className="max-w-[720px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
                    {entry.summary}
                  </p>
                  <ul className="mt-5 grid gap-2 text-base leading-7 tracking-[-0.01em] text-stone">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline/70 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
          <h2 className="text-[clamp(34px,8vw,56px)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
            {t.pages.about.howTitle}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {t.pages.about.principles.map((principle) => (
              <article key={principle.title} className="border-t border-hairline/80 pt-5">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-ink">
                  {principle.title}
                </h3>
                <p className="mt-4 max-w-[560px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline/70 py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-6 md:grid-cols-2 md:px-10">
          <div>
            <h2 className="text-[clamp(34px,8vw,56px)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
              {t.pages.about.educationTitle}
            </h2>
            <div className="mt-8 border-t border-hairline/80">
              {educationEntries.map((entry) => (
                <article key={entry.institution} className="border-b border-hairline/80 py-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] text-ink">
                    {entry.institution}
                  </h3>
                  <p className="mt-3 text-base leading-7 tracking-[-0.01em] text-stone">
                    {[entry.degree, entry.field, entry.startDate]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  {entry.note ? (
                    <p className="mt-3 text-base leading-7 tracking-[-0.01em] text-stone/70">
                      {entry.note}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[clamp(34px,8vw,56px)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
              {t.pages.about.currentTitle}
            </h2>
            <p className="mt-8 max-w-[620px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
              {t.pages.about.currentBody}
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex min-h-11 items-center text-base font-semibold tracking-[-0.01em] text-ink transition hover:translate-x-1 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              {t.pages.about.contactCta}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
