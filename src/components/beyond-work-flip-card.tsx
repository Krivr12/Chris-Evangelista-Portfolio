import { useState } from "react";
import type { CSSProperties } from "react";
import type { BeyondWorkItem } from "@/data";

interface BeyondWorkFlipCardProps {
  item: BeyondWorkItem;
}

// iOS Safari needs backface hiding declared on every child that gets its own
// compositing layer (positioned / z-indexed elements), not just the face.
const hideBackface: CSSProperties = {
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
};

export function BeyondWorkFlipCard({ item }: BeyondWorkFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[500px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: "1000px",
        WebkitPerspective: "1000px",
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full flex flex-col justify-between p-6 bg-card border border-border rounded-lg shadow-sm bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.image})`,
            ...hideBackface,
            // Own 3D layer, pushed slightly toward the viewer
            transform: "rotateY(0deg) translateZ(1px)",
          }}
        >
          {/* Dark gradient at bottom for white text contrast */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-b-lg pointer-events-none"
            style={hideBackface}
          />

          {/* Content wrapper */}
          <div
            className="relative z-10 flex flex-col justify-between h-full"
            style={hideBackface}
          >
            {/* Empty space at top */}
            <div />

            {/* Bottom text section - all white text */}
            <div className="flex flex-col gap-3" style={hideBackface}>
              {/* Title */}
              <h3 className="text-3xl font-bold text-white" style={hideBackface}>
                {item.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full flex flex-col p-6 bg-card border border-border rounded-lg shadow-sm overflow-hidden"
          style={{
            ...hideBackface,
            transform: "rotateY(180deg) translateZ(1px)",
            backgroundColor: "#141414",
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