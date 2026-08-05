import Link from "next/link";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export function PrimaryButton({ children, href, className }: PrimaryButtonProps) {
  return (
    <Link
      data-primary-cta
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--button-background)] px-6 text-[0.92rem] font-medium tracking-[0.01em] text-[var(--button-foreground)] shadow-button transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
        className
      )}
      href={href}
    >
      <span>{children} →</span>
    </Link>
  );
}
