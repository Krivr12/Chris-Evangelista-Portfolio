import { experience } from "@/data";
import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";
import { ExperienceFlipCard } from "@/components/experience-flip-card";
import ChevronLogo from "@/assets/Chevron-Logo.png";
import TambuliLogo from "@/assets/Tambuli-Logo.jpg";

export function Experience() {
  const logoMap: Record<string, string> = {
    chevron: ChevronLogo,
    "tambuli-labs": TambuliLogo,
  };

  // When there are fewer than 3 items, distribute them evenly so they fill
  // the full width instead of leaving empty carousel space.
  const count = experience.length;
  const itemBasis =
    count >= 3
      ? "basis-full sm:basis-1/2 lg:basis-1/3"
      : count === 2
        ? "basis-full sm:basis-1/2"
        : "basis-full";

  return (
    <SectionContainer id="experience" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="Where I've Worked"
          title="Experience"
          subtitle="Roles where I built real systems for real teams."
        />
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <Carousel opts={{ align: "start", containScroll: "keepSnaps" }}>
          <CarouselContent>
            {experience.map((job) => {
              const logo = logoMap[job.id];
              return (
                <CarouselItem
                  key={job.id}
                  className={`${itemBasis} min-w-0`}
                >
                  <div className="h-full">
                    <ExperienceFlipCard experience={job} logo={logo} />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </Reveal>
    </SectionContainer>
  );
}
