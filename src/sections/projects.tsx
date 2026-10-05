import { ExternalLink } from "lucide-react";

import { projects } from "@/data";
import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";

export function Projects() {
  // When there are fewer than 3 items, distribute them evenly so they fill
  // the full width instead of leaving empty carousel space.
  const count = projects.length;
  const itemBasis =
    count >= 3
      ? "basis-full sm:basis-1/2 lg:basis-1/3"
      : count === 2
        ? "basis-full sm:basis-1/2"
        : "basis-full";

  return (
    <SectionContainer id="projects" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="What I've Built"
          title="Projects"
          subtitle="Products I've shipped end to end, from architecture to deployment."
        />
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <Carousel opts={{ align: "start", containScroll: "keepSnaps" }}>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className={`${itemBasis} min-w-0`}
              >
                <Card className="h-full w-full">
                  <CardHeader>
                    <span className="font-mono text-xs uppercase tracking-[0.05em] text-accent-brand">
                      {project.dateRange}
                    </span>
                    <CardTitle>{project.name}</CardTitle>
                    <p className="text-sm font-medium text-foreground/80">
                      {project.role}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {project.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-brand" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                    {project.link && (
                      <Button variant="secondary" size="sm" className="mt-1 self-start" asChild>
                        <a href={project.link} target="_blank" rel="noreferrer noopener">
                          View Project
                          <ExternalLink className="size-3.5" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
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
