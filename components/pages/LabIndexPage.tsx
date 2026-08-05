"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { labEntries } from "@/content/lab";
import { usePreferences } from "@/lib/preferences";

export function LabIndexPage() {
  const { t } = usePreferences();

  return (
    <main>
      <section className="mx-auto w-full max-w-[1280px] px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24">
        <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
          {t.pages.lab.label}
        </p>
        <h1 className="mt-6 max-w-[900px] text-[clamp(52px,12vw,92px)] font-semibold leading-[0.94] tracking-[-0.045em] text-ink md:text-[clamp(72px,7vw,112px)]">
          {t.pages.lab.headline}
        </h1>
        <p className="mt-8 max-w-[680px] text-lg leading-[1.65] tracking-[-0.01em] text-stone md:text-xl md:leading-[1.7]">
          {t.pages.lab.body}
        </p>
      </section>

      <section className="border-t border-hairline/70 pb-24 md:pb-32">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
          <div className="border-t border-hairline/80">
            {labEntries.map((entry) => {
              const copy = t.pages.lab.entries[entry.slug];

              return (
                <article
                  key={entry.slug}
                  className="grid gap-5 border-b border-hairline/80 py-8 md:grid-cols-[180px_1fr_120px] md:gap-10 md:py-10"
                >
                  <div className="text-sm font-medium leading-6 tracking-[-0.01em] text-stone/65">
                    <p>{entry.date}</p>
                    <p>{copy.typeLabel}</p>
                  </div>
                  <div>
                    <h2 className="text-[clamp(30px,7vw,48px)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
                      {copy.title}
                    </h2>
                    <p className="mt-4 max-w-[680px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
                      {copy.description}
                    </p>
                  </div>
                  <Link
                    href={entry.href}
                    className="inline-flex min-h-11 items-center text-base font-semibold tracking-[-0.01em] text-ink transition hover:translate-x-1 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:justify-self-end"
                  >
                    {copy.cta}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
