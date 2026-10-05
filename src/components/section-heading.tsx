import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

/** Shared heading block used across every section for visual consistency. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.05em] text-accent-brand">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-foreground text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground max-w-2xl text-[0.95rem] md:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
