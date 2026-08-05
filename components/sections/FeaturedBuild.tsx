"use client";

import Image from "next/image";
import Link from "next/link";
import { homeRebuildCopy } from "@/content/rebuild";
import { usePreferences } from "@/lib/preferences";

export function FeaturedBuild() {
  const { language } = usePreferences();
  const copy = homeRebuildCopy[language].featuredBuild;

  return (
    <section className="border-t border-hairline/70 py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[46fr_54fr] md:items-start md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
              {copy.label}
            </p>
            <h2 className="mt-6 max-w-[760px] text-[clamp(44px,10vw,76px)] font-semibold leading-[0.96] tracking-[-0.045em] text-ink md:text-[clamp(58px,5.2vw,88px)]">
              {copy.headline}
            </h2>
            <h3 className="mt-10 text-[clamp(36px,8vw,62px)] font-semibold leading-none tracking-[-0.045em] text-ink">
              {copy.title}
            </h3>
            <p className="mt-6 max-w-[560px] text-xl font-semibold leading-[1.35] tracking-[-0.03em] text-ink/90">
              {copy.description}
            </p>
            <p className="mt-7 max-w-[600px] text-lg leading-[1.7] tracking-[-0.01em] text-stone">
              {copy.narrative}
            </p>
          </div>

          <div>
            <div className="visual-surface relative aspect-[16/10] overflow-hidden rounded-[28px] border border-hairline/90 p-4 md:p-5">
              <div className="relative h-full w-full overflow-hidden rounded-[20px] border border-hairline/80 bg-porcelain">
                <Image
                  src="/images/projects/ganfanmie-placeholder.svg"
                  alt="Ganfanmie product interface"
                  width={1200}
                  height={750}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>

            <dl className="mt-8 grid gap-4 border-y border-hairline/70 py-6 sm:grid-cols-2">
              {copy.proof.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.09em] text-stone/60">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-base font-semibold leading-6 tracking-[-0.01em] text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {copy.decisions.map((decision, index) => (
            <article key={decision.title} className="border-t border-hairline/80 pt-5">
              <p className="text-sm font-medium text-stone/60">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink">
                {decision.title}
              </h3>
              <p className="mt-4 text-base leading-7 tracking-[-0.01em] text-stone">
                {decision.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 max-w-[780px]">
          {copy.final.map((line) => (
            <p
              key={line}
              className="mt-4 text-[clamp(28px,7vw,44px)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink first:mt-0"
            >
              {line}
            </p>
          ))}
          <Link
            href="/work/fanfanme"
            className="mt-9 inline-flex min-h-11 items-center border-b border-ink/40 text-base font-semibold tracking-[-0.01em] text-ink transition hover:translate-x-1 hover:border-ink focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
