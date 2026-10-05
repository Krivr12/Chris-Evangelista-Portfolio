import * as React from "react";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type RevealProps = React.ComponentProps<"div"> & {
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Wraps children with a subtle fade + slide-up entrance triggered once,
 * when the element scrolls into view. See master plan section 10.
 */
export function Reveal({
  className,
  style,
  delay = 0,
  children,
  ...props
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
