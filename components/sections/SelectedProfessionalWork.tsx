"use client";

import { homeRebuildCopy, professionalWork } from "@/content/rebuild";
import { usePreferences } from "@/lib/preferences";
import { cn } from "@/lib/utils";

export function SelectedProfessionalWork() {
  const { language } = usePreferences();
  const copy = homeRebuildCopy[language].work;

  return (
    <section id="work" className="scroll-mt-24 border-t border-hairline/70 py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="max-w-[840px]">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
            {copy.label}
          </p>
          <h2 className="mt-6 text-[clamp(44px,10vw,76px)] font-semibold leading-[0.96] tracking-[-0.045em] text-ink md:text-[clamp(58px,5.3vw,88px)]">
            {copy.headline}
          </h2>
        </div>

        <div className="mt-16 grid gap-10">
          {professionalWork.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "border-t border-hairline/80 pt-8",
                project.style === "large"
                  ? "grid gap-10 md:grid-cols-[52fr_48fr] md:gap-16"
                  : project.style === "metrics"
                    ? "grid gap-10 md:grid-cols-[38fr_62fr] md:gap-14"
                    : "grid gap-10 md:grid-cols-[44fr_56fr] md:gap-14"
              )}
            >
              <div>
                <p className="text-sm font-medium text-stone/60">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-[clamp(32px,8vw,56px)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
                  {project.title[language]}
                </h3>
                <p className="mt-6 max-w-[580px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
                  {project.context[language]}
                </p>
                <p className="mt-5 max-w-[580px] text-base font-semibold leading-7 tracking-[-0.01em] text-ink">
                  {project.capability[language]}
                </p>
              </div>

              <div className="md:pt-10">
                <p className="max-w-[680px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
                  {project.handled[language]}
                </p>
                <ul
                  className={cn(
                    "mt-8 gap-3",
                    project.style === "metrics"
                      ? "grid sm:grid-cols-3"
                      : "flex flex-wrap"
                  )}
                >
                  {project.evidence.map((item) => (
                    <li
                      key={item}
                      className="border border-hairline/90 px-4 py-3 text-sm font-semibold leading-5 tracking-[-0.01em] text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
