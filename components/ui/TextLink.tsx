import Link from "next/link";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export function TextLink({ children, href, className }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex h-12 items-center text-[0.92rem] font-medium tracking-[0.01em] text-stone transition duration-300 hover:text-ink focus-visible:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
