import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  icon?: LucideIcon;
  external?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-black focus-visible:outline-ink",
  secondary:
    "border border-line bg-white/65 text-ink hover:-translate-y-0.5 hover:border-ink/30 focus-visible:outline-ink",
  ghost:
    "text-muted hover:text-ink focus-visible:outline-ink"
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  icon: Icon = ArrowUpRight,
  external
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      <Icon aria-hidden="true" className="h-4 w-4" />
    </>
  );

  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
    variantClasses[variant],
    className
  );

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer noopener" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
