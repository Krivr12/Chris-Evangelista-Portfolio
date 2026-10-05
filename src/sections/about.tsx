import { GraduationCap } from "lucide-react";

import { profile, stats, education } from "@/data";
import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <SectionContainer id="about">
      <Reveal>
        <SectionHeading
          eyebrow="Who I Am"
          title="About Me"
          subtitle="A quick look at how I got here and what I've built along the way."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal delay={80}>
          <Card className="h-full">
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              I'm {profile.name.split(" ")[0]}, a full stack developer and
              cloud &amp; AI engineer based in {profile.location}. I graduated
              Magna Cum Laude from the Polytechnic University of the
              Philippines with a GWA of 1.19, and since then I've shipped
              production systems ranging from agentic onboarding automation
              to semantic search platforms serving thousands of users.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              I care about building things that are fast, secure, and
              actually used — not just demoed. Outside of shipping code, I
              mentor other developers and speak on AI enablement.
            </p>
          </Card>
        </Reveal>

        <Reveal delay={160}>
          <Card className="h-full">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-muted border border-border text-accent-brand">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <p className="font-display text-base font-semibold text-foreground">
                  {education[0].school}
                </p>
                <p className="text-sm text-muted-foreground">
                  {education[0].degree}
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <span className="text-muted-foreground">
                {education[0].dateRange}
              </span>
              <span className="font-mono text-accent-brand">
                {education[0].honor}
              </span>
              <span className="text-subtle-foreground">
                GWA {education[0].gwa}
              </span>
            </div>
          </Card>
        </Reveal>
      </div>

      <Reveal delay={200} className="mt-6">
        <Card>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center gap-1 text-center">
                <span className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.05em] text-subtle-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
    </SectionContainer>
  );
}
