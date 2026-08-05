"use client";

import Link from "next/link";
import { labEntries } from "@/content/lab";
import { usePreferences } from "@/lib/preferences";

export function LabPreview() {
  const { t } = usePreferences();

  return (
    <section className="border-t border-hairline/70 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[40fr_60fr] md:gap-16">
          <div>
            <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
              {t.labPreview.label}
            </p>
            <h2 className="mt-6 max-w-[620px] text-[clamp(40px,9vw,64px)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink md:text-[clamp(50px,4.5vw,76px)]">
              {t.labPreview.headline}
            </h2>
            <p className="mt-7 max-w-[560px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
              {t.labPreview.description}
            </p>
          </div>

          <div className="border-t border-hairline/80">
            {labEntries.slice(0, 3).map((entry) => {
              const copy = t.pages.lab.entries[entry.slug];

              return (
                <article
                  key={entry.slug}
                  className="grid gap-4 border-b border-hairline/80 py-6 md:grid-cols-[128px_1fr] md:gap-8"
                >
                  <div className="text-sm font-medium leading-6 tracking-[-0.01em] text-stone/65">
                    <p>{entry.date}</p>
                    <p>{copy.typeLabel}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink">
                      {copy.title}
                    </h3>
                    <p className="mt-3 max-w-[560px] text-base leading-7 tracking-[-0.01em] text-stone">
                      {copy.description}
                    </p>
                    <Link
                      href={entry.href}
                      className="mt-4 inline-flex min-h-11 items-center text-base font-semibold tracking-[-0.01em] text-ink transition hover:translate-x-1 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    >
                      {copy.cta}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/lab"
            className="inline-flex min-h-11 items-center text-base font-semibold tracking-[-0.01em] text-ink transition hover:translate-x-1 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            {t.labPreview.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
