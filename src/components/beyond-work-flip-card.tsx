import { useState } from "react";
import type { BeyondWorkItem } from "@/data";

interface BeyondWorkFlipCardProps {
  item: BeyondWorkItem;
}

export function BeyondWorkFlipCard({ item }: BeyondWorkFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[500px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-opacity duration-500 ease-in-out"
        style={{
          opacity: isFlipped ? 0 : 1,
          pointerEvents: isFlipped ? "none" : "auto",
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full flex flex-col justify-between p-6 bg-card border border-border rounded-lg shadow-sm bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          {/* Dark gradient at bottom for white text contrast */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-b-lg pointer-events-none" />

          {/* Content wrapper */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Empty space at top */}
            <div />

            {/* Bottom text section - all white text */}
            <div className="flex flex-col gap-3">
              {/* Title */}
              <h3 className="text-3xl font-bold text-white">
                {item.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full flex flex-col p-6 bg-card border border-border rounded-lg shadow-sm overflow-y-auto"
          style={{
            opacity: isFlipped ? 1 : 0,
            pointerEvents: isFlipped ? "auto" : "none",
          }}
        >
          {/* Content */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
