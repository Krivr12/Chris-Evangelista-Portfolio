import { useState } from "react";
import { MapPin } from "lucide-react";
import type { ExperienceItem } from "@/data";

interface ExperienceFlipCardProps {
  experience: ExperienceItem;
  logo?: string;
}

export function ExperienceFlipCard({
  experience,
  logo,
}: ExperienceFlipCardProps) {
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
            backgroundImage: experience.image ? `url(${experience.image})` : undefined,
          }}
        >
          {/* Dark gradient at bottom for white text contrast */}
          {experience.image && (
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-b-lg pointer-events-none" />
          )}

          {/* Content wrapper */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Empty space at top */}
            <div />

            {/* Bottom text section - all white text */}
            <div className="flex flex-col gap-3">
              {/* Role */}
              <h3 className="text-2xl font-bold text-white">
                {experience.role}
              </h3>
              
              {/* Company */}
              <p className="text-base font-medium text-white">
                {experience.company}
              </p>
              
              {/* Location */}
              <p className="flex items-center gap-2 text-sm text-white">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </p>
              
              {/* Time period */}
              <span className="font-mono text-xs uppercase tracking-[0.05em] text-white/90 pt-2">
                {experience.startDate} – {experience.endDate}
              </span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full flex flex-col justify-between p-6 bg-card border border-border rounded-lg shadow-sm overflow-hidden"
          style={{
            opacity: isFlipped ? 1 : 0,
            pointerEvents: isFlipped ? "auto" : "none",
          }}
        >
          {/* Logo at top of back card */}
          {logo && (
            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-white p-2 flex items-center justify-center">
              <img
                src={logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {experience.role}
              </h3>
              <p className="text-sm text-accent-brand font-mono uppercase tracking-[0.05em] mb-4">
                {experience.startDate} – {experience.endDate}
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {experience.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-accent-brand flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
