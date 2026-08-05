"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import type { LabEntry } from "@/content/lab";
import { usePreferences } from "@/lib/preferences";

export function LabEntryPage({ entry }: { entry: LabEntry }) {
  const { t } = usePreferences();
  const copy = t.pages.lab.entries[entry.slug];

  return (
    <main>
      <article className="mx-auto w-full max-w-[1280px] px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
        <Link
          href="/lab"
          className="inline-flex min-h-11 items-center text-base font-medium tracking-[-0.01em] text-stone transition hover:text-ink focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          {t.pages.lab.back}
        </Link>

        <header className="mt-14 max-w-[900px]">
          <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
            {entry.date} · {copy.typeLabel}
          </p>
          <h1 className="mt-6 text-[clamp(52px,12vw,92px)] font-semibold leading-[0.94] tracking-[-0.045em] text-ink md:text-[clamp(72px,7vw,112px)]">
            {copy.title}
          </h1>
          <p className="mt-8 max-w-[720px] text-xl leading-[1.55] tracking-[-0.02em] text-stone md:text-2xl">
            {copy.description}
          </p>
        </header>

        <section className="mt-14 grid gap-6 border-t border-hairline/70 py-10 md:grid-cols-[32fr_68fr] md:gap-14">
          <h2 className="text-base font-medium tracking-[-0.01em] text-stone/70">
            {t.pages.lab.label}
          </h2>
          <p className="max-w-[720px] text-lg leading-[1.7] tracking-[-0.01em] text-stone">
            {copy.detail}
          </p>
        </section>

        {entry.sourceUrl ? (
          <section className="grid gap-6 border-t border-hairline/70 py-10 md:grid-cols-[32fr_68fr] md:gap-14">
            <h2 className="text-base font-medium tracking-[-0.01em] text-stone/70">
              {t.pages.lab.sourceLabel}
            </h2>
            <p className="text-lg leading-[1.7] tracking-[-0.01em] text-stone">
              {entry.sourceUrl}
            </p>
          </section>
        ) : null}
      </article>

      <Footer />
    </main>
  );
}
