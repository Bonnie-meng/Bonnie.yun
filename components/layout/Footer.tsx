"use client";

import Link from "next/link";
import { profile } from "@/content/profile";
import { usePreferences } from "@/lib/preferences";

export function Footer() {
  const { t } = usePreferences();
  const contactLinks = [
    { label: t.contact.links.email, href: `mailto:${profile.email}` },
    {
      label: t.contact.links.linkedIn,
      href: profile.linkedin,
      external: true
    },
    { label: t.contact.links.resume, href: profile.resumeUrl }
  ];

  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-hairline/70 pb-10 pt-20 md:pt-28"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[58fr_42fr] md:items-end md:gap-12">
          <div>
            <p className="text-base font-medium tracking-[-0.01em] text-stone/70">
              {t.contact.label}
            </p>
            <h2 className="mt-6 max-w-[720px] whitespace-pre-line text-[clamp(42px,9vw,72px)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink md:text-[clamp(56px,5vw,84px)]">
              {t.contact.headline}
            </h2>
            <p className="mt-7 max-w-[560px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
              {t.contact.description}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end"
            aria-label="Contact links"
          >
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="inline-flex min-h-11 items-center text-base font-semibold tracking-[-0.01em] text-ink transition hover:translate-x-1 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          id="resume"
          className="mt-28 flex flex-col gap-3 border-t border-hairline/70 pt-8 text-sm font-medium tracking-[-0.01em] text-stone/70 md:mt-36 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p>{t.footer.statement}</p>
            <p className="mt-2 text-xs font-medium text-stone/50">
              {t.footer.credit}
            </p>
          </div>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
