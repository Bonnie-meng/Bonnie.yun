"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TextLink } from "@/components/ui/TextLink";
import { usePreferences } from "@/lib/preferences";

export function Hero() {
  const { t } = usePreferences();

  useEffect(() => {
    document.title = t.meta.homeTitle;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", t.meta.homeDescription);
    }
  }, [t.meta.homeDescription, t.meta.homeTitle]);

  return (
    <section
      id="top"
      className="min-h-[calc(100svh-80px)] overflow-hidden bg-porcelain"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid min-h-[calc(100svh-80px)] w-full max-w-[1280px] items-center gap-12 px-6 pb-16 pt-[136px] md:grid-cols-[58fr_42fr] md:gap-12 md:px-10 md:pb-0 md:pt-[72px]">
        <motion.div
          className="max-w-[720px] pt-2 md:pb-10"
          initial={false}
        >
          <motion.p
            className="text-base font-medium tracking-[-0.01em] text-stone/70"
            initial={false}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.div
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-medium tracking-[-0.01em] text-ink"
            initial={false}
            transition={{ duration: 0.6, delay: 0.03, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{t.hero.name}</span>
            <span className="text-stone/45" aria-hidden="true">
              /
            </span>
            <span className="text-stone/75">{t.hero.title}</span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            aria-label={t.hero.headline.replace(/\n/g, " ")}
            className="mt-6 max-w-[820px] font-sans text-[clamp(52px,13vw,78px)] font-semibold leading-[0.94] tracking-[-0.045em] text-ink md:mt-10 md:text-[clamp(64px,7vw,104px)]"
            initial={false}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.headline.split("\n").map((line, index) => (
              <span key={line} className={index > 0 ? "block" : undefined}>
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-10 max-w-[600px] whitespace-pre-line text-lg leading-[1.65] tracking-[-0.01em] text-stone md:mt-12"
            initial={false}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 md:mt-12"
            initial={false}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <PrimaryButton href="#ai-workflow">{t.hero.cta}</PrimaryButton>
            <TextLink href="#experience">{t.hero.experienceCta}</TextLink>
            <TextLink href="/#resume">{t.hero.resumeCta}</TextLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center pb-10 md:pb-0"
          initial={false}
          transition={{ duration: 0.85, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div
            data-hero-orb
            className="relative grid h-[460px] w-[460px] max-h-[72vw] max-w-[72vw] place-items-center overflow-hidden rounded-full border-2 border-white/90 md:h-[470px] md:w-[470px] md:-translate-x-16"
          >
            <div className="absolute inset-[1px] rounded-full border border-white/60" />
            <div className="absolute inset-[10px] rounded-full border border-white/20" />
            <div className="absolute inset-0 rounded-full opacity-[0.055] [background-image:repeating-radial-gradient(circle_at_50%_50%,rgba(23,23,23,0.16)_0_1px,transparent_1px_4px)]" />
            <div className="aspect-square w-[62%] rounded-full bg-[radial-gradient(circle_at_36%_30%,rgba(255,255,255,0.88)_0%,rgba(246,245,242,0.56)_34%,rgba(202,201,197,0.30)_62%,rgba(248,247,244,0)_74%)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
