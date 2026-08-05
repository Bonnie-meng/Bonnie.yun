import { cn } from "@/lib/utils";

type SectionProps = {
  title: string;
  aside?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  description?: React.ReactNode;
  id?: string;
  label?: string;
};

export function Section({
  title,
  aside,
  children,
  className,
  contentClassName,
  description,
  id,
  label
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-24 md:py-40", className)}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[58fr_42fr] md:gap-12">
          <div className="max-w-[760px]">
            {label ? (
              <p className="mb-6 text-base font-medium tracking-[-0.01em] text-stone/70">
                {label}
              </p>
            ) : null}

            <h2
              id={id ? `${id}-title` : undefined}
              className="font-sans text-[clamp(44px,8vw,72px)] font-semibold leading-[0.96] tracking-[-0.045em] text-ink md:text-[clamp(56px,5.6vw,88px)]"
            >
              {title}
            </h2>

            {description ? (
              <p className="mt-8 max-w-[520px] text-lg leading-[1.65] tracking-[-0.01em] text-stone">
                {description}
              </p>
            ) : null}
          </div>

          {aside ? (
            <div className="self-end">
              {aside}
            </div>
          ) : null}
        </div>

        {children ? (
          <div className={cn("mt-12 md:mt-16", contentClassName)}>{children}</div>
        ) : null}
      </div>
    </section>
  );
}
