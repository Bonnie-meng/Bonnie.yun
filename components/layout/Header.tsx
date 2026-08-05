"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { primaryNavigation } from "@/content/navigation";
import { profile } from "@/content/profile";
import { usePreferences } from "@/lib/preferences";

export function Header() {
  const [open, setOpen] = useState(false);
  const { appliedTheme, cycleTheme, language, t, theme, toggleLanguage } =
    usePreferences();

  const navLinks = primaryNavigation.map((item) => ({
    href: item.href,
    label: t.nav[item.key]
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/70 bg-porcelain/86 backdrop-blur-xl">
      <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Link
          href="/#top"
          className="flex h-20 items-center text-[0.95rem] font-semibold tracking-[-0.01em] text-ink focus-visible:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          aria-label={t.nav.homeLabel}
          onClick={() => setOpen(false)}
        >
          Bonnie
        </Link>

        <nav className="hidden h-20 items-center gap-7 text-[0.9rem] font-medium text-stone md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-ink focus-visible:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="inline-flex min-h-10 items-center rounded-full px-1 text-[0.88rem] font-semibold text-ink transition hover:text-stone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            aria-label={t.nav.languageLabel}
            aria-pressed={language === "zh"}
            onClick={toggleLanguage}
          >
            <span className={language === "en" ? "underline underline-offset-4" : ""}>
              EN
            </span>
            <span className="px-1 text-stone/55">/</span>
            <span className={language === "zh" ? "underline underline-offset-4" : ""}>
              中
            </span>
          </button>
          <button
            type="button"
            className="inline-flex h-10 min-w-10 items-center justify-center rounded-full text-ink transition duration-200 hover:bg-fog focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            aria-label={`${t.nav.themeLabel}: ${t.nav.themeValues[theme]}`}
            aria-pressed={theme !== "system"}
            title={t.nav.themeValues[theme]}
            onClick={cycleTheme}
          >
            {appliedTheme === "dark" ? (
              <Moon className="h-4 w-4 transition duration-200" aria-hidden="true" />
            ) : (
              <Sun className="h-4 w-4 transition duration-200" aria-hidden="true" />
            )}
          </button>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-ink focus-visible:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            {t.nav.linkedIn}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center text-[0.9rem] font-medium text-stone transition hover:text-ink focus-visible:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? t.nav.close : t.nav.menu}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          className="border-b border-hairline/70 bg-porcelain/96 px-6 py-4 backdrop-blur-xl md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex min-h-11 items-center text-base font-medium tracking-[-0.01em] text-stone transition hover:text-ink focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-4 border-t border-hairline/70 pt-4">
              <button
                type="button"
                className="inline-flex min-h-11 items-center text-base font-semibold tracking-[-0.01em] text-ink focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                aria-label={t.nav.languageLabel}
                aria-pressed={language === "zh"}
                onClick={toggleLanguage}
              >
                <span
                  className={
                    language === "en" ? "underline underline-offset-4" : ""
                  }
                >
                  EN
                </span>
                <span className="px-1 text-stone/55">/</span>
                <span
                  className={
                    language === "zh" ? "underline underline-offset-4" : ""
                  }
                >
                  中
                </span>
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 items-center gap-2 text-base font-semibold tracking-[-0.01em] text-ink focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                aria-label={`${t.nav.themeLabel}: ${t.nav.themeValues[theme]}`}
                aria-pressed={theme !== "system"}
                onClick={cycleTheme}
              >
                {appliedTheme === "dark" ? (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                )}
                <span>{t.nav.themeValues[theme]}</span>
              </button>
            </div>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center text-base font-medium tracking-[-0.01em] text-stone transition hover:text-ink focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              onClick={() => setOpen(false)}
            >
              {t.nav.linkedIn}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
