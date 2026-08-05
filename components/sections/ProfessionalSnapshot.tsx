"use client";

import { capabilityAreas, profileStats } from "@/content/profile";
import { usePreferences } from "@/lib/preferences";

export function ProfessionalSnapshot() {
  const { t } = usePreferences();

  return (
    <section className="border-t border-hairline/70 py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[36fr_64fr] md:items-start md:gap-16">
          <div>
            <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
              {t.snapshot.label}
            </p>
            <h2 className="mt-5 max-w-[520px] text-[clamp(32px,7vw,52px)] font-semibold leading-[1] tracking-[-0.04em] text-ink md:text-[clamp(42px,4vw,64px)]">
              {t.snapshot.headline}
            </h2>
          </div>

          <div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-hairline/80 py-8 md:grid-cols-4 md:gap-x-8">
              {profileStats.map((stat) => (
                <div key={stat.labelKey}>
                  <dt className="text-sm font-medium leading-6 tracking-[-0.01em] text-stone/70">
                    {t.snapshot.stats[stat.labelKey]}
                  </dt>
                  <dd className="mt-2 text-[clamp(30px,8vw,48px)] font-semibold leading-none tracking-[-0.045em] text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
                {t.snapshot.capabilitiesLabel}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {capabilityAreas.map((capability, index) => (
                  <li
                    key={capability}
                    className="text-base font-medium leading-6 tracking-[-0.01em] text-stone"
                  >
                    {t.snapshot.capabilities[index]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
