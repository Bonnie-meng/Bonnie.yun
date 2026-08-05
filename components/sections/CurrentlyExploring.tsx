"use client";

import { usePreferences } from "@/lib/preferences";

export function CurrentlyExploring() {
  const { t } = usePreferences();

  return (
    <section
      id="explore"
      className="scroll-mt-24 border-t border-hairline/70 py-24 md:py-36"
      aria-labelledby="explore-title"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[42fr_58fr] md:gap-16">
          <div>
            <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
              {t.exploring.label}
            </p>
            <h2
              id="explore-title"
              className="mt-6 max-w-[620px] text-[clamp(44px,10vw,72px)] font-semibold leading-[0.96] tracking-[-0.045em] text-ink md:text-[clamp(56px,5.6vw,86px)]"
            >
              {t.exploring.headline}
            </h2>
          </div>

          <div className="max-w-[680px] md:pt-14">
            <p className="max-w-[580px] text-lg leading-[1.65] tracking-[-0.01em] text-stone md:text-xl md:leading-[1.7]">
              {t.exploring.description}
            </p>

            <ol className="mt-14 grid gap-0 border-t border-hairline/80">
              {t.exploring.items.map((item) => (
                <li key={item.title}>
                  <article className="grid gap-5 border-b border-hairline/80 py-7 md:grid-cols-[132px_1fr] md:gap-8 md:py-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
                      {item.typeLabel}
                    </p>
                    <div>
                      <h3 className="text-[clamp(24px,6vw,36px)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-[520px] text-base leading-[1.6] tracking-[-0.01em] text-stone md:text-lg">
                        {item.description}
                      </p>
                      <p className="mt-5 text-base font-semibold tracking-[-0.01em] text-ink">
                        {item.cta}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
