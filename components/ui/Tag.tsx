import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line/80 bg-white/55 px-3 py-1 text-xs font-medium text-muted shadow-sm backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}
