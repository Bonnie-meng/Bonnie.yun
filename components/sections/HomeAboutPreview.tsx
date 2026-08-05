"use client";

import Link from "next/link";
import { profile } from "@/content/profile";
import { usePreferences } from "@/lib/preferences";

export function HomeAboutPreview() {
  const { t } = usePreferences();

  return (
    <section className="border-t border-hairline/70 py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 md:grid-cols-[58fr_42fr] md:items-end md:px-10">
        <div>
          <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
            {t.aboutPreview.label}
          </p>
          <h2 className="mt-6 max-w-[820px] text-[clamp(42px,9vw,72px)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink md:text-[clamp(52px,4.8vw,82px)]">
            {t.aboutPreview.headline}
          </h2>
          <p className="mt-7 max-w-[680px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
            {t.aboutPreview.body}
          </p>
        </div>

        <div className="border-t border-hairline/80 pt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
            {t.aboutPreview.journeyLabel}
          </p>
          <p className="mt-4 text-xl font-semibold leading-tight tracking-[-0.035em] text-ink">
            {profile.journey.join(" → ")}
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex min-h-11 items-center text-base font-semibold tracking-[-0.01em] text-ink transition hover:translate-x-1 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            {t.aboutPreview.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
