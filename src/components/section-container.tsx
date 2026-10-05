import * as React from "react";

import { cn } from "@/lib/utils";

type SectionContainerProps = React.ComponentProps<"section"> & {
  id: string;
};

/** Consistent max-width + spacing rhythm shell for every page section. */
export function SectionContainer({
  id,
  className,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("py-12 md:py-20", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">{children}</div>
    </section>
  );
}
