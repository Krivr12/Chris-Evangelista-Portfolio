import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { BeyondWorkItem } from "@/data";

interface BeyondWorkFlipCardProps {
  item: BeyondWorkItem;
}

export function BeyondWorkFlipCard({ item }: BeyondWorkFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[500px] cursor-pointer"
      style={{
        perspective: "1000px",
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full flex flex-col justify-between p-6 bg-card border border-border rounded-lg shadow-sm bg-cover bg-center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
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
          className="absolute w-full h-full flex flex-col justify-between p-6 bg-card border border-border rounded-lg shadow-sm overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
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

          {/* Back button */}
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
            variant="secondary"
            size="sm"
            className="w-full mt-4"
          >
          </Button>
        </div>
      </div>
    </div>
  );
}
