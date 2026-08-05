"use client";

import { aiWorkflowSteps, homeRebuildCopy } from "@/content/rebuild";
import { usePreferences } from "@/lib/preferences";

export function AIWorkflow() {
  const { language } = usePreferences();
  const copy = homeRebuildCopy[language].workflow;

  return (
    <section
      id="ai-workflow"
      className="scroll-mt-24 border-t border-hairline/70 py-24 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="max-w-[880px]">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone/65">
            {copy.label}
          </p>
          <h2 className="mt-6 whitespace-pre-line text-[clamp(44px,10vw,76px)] font-semibold leading-[0.96] tracking-[-0.045em] text-ink md:text-[clamp(58px,5.3vw,88px)]">
            {copy.headline}
          </h2>
        </div>

        <ol className="mt-16 grid gap-0 border-t border-hairline/80">
          {aiWorkflowSteps.map((step, index) => (
            <li
              key={step.title.en}
              className="grid gap-6 border-b border-hairline/80 py-8 md:grid-cols-[84px_30fr_38fr_32fr] md:gap-10"
            >
              <p className="text-sm font-medium text-stone/60">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink">
                {step.title[language]}
              </h3>
              <ul className="grid gap-2 text-base leading-7 tracking-[-0.01em] text-stone">
                {step.items[language].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-base font-semibold leading-7 tracking-[-0.01em] text-ink">
                {step.outcome[language]}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 max-w-[760px]">
          {copy.final.map((line) => (
            <p
              key={line}
              className="mt-4 text-[clamp(28px,7vw,44px)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink first:mt-0"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
