"use client";

import { usePreferences } from "@/lib/preferences";

export function ProductStatement() {
  const { t } = usePreferences();

  return (
    <section
      className="statement-surface border-y border-hairline/70 py-16 md:py-24"
      aria-label="Product statement"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <p className="max-w-[1040px] whitespace-pre-line text-[clamp(44px,10vw,76px)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink md:text-[clamp(62px,5.8vw,92px)]">
          {t.statement}
        </p>
      </div>
    </section>
  );
}
