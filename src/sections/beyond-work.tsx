import { beyondWorkItems } from "@/data";
import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { BeyondWorkFlipCard } from "@/components/beyond-work-flip-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";

export function BeyondWork() {
  const count = beyondWorkItems.length;
  const itemBasis =
    count >= 3
      ? "basis-full sm:basis-1/2 lg:basis-1/3"
      : count === 2
        ? "basis-full sm:basis-1/2"
        : "basis-full";

  return (
    <SectionContainer id="beyond" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="Outside the Job"
          title="Beyond Work"
          subtitle="What drives me beyond the code."
        />
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <Carousel opts={{ align: "start", containScroll: "keepSnaps" }}>
          <CarouselContent>
            {beyondWorkItems.map((item) => (
              <CarouselItem
                key={item.id}
                className={`${itemBasis} min-w-0`}
              >
                <div className="h-full">
                  <BeyondWorkFlipCard item={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </Reveal>
    </SectionContainer>
  );
}
