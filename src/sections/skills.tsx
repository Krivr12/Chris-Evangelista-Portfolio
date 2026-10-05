import { skills } from "@/data";
import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";

const categories = Object.entries(skills);

export function Skills() {
  return (
    <SectionContainer id="skills" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="What I Work With"
          title="Skills"
          subtitle="Tools and technologies I reach for across the stack."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {categories.map(([category, items], i) => (
          <Reveal key={category} delay={i * 80}>
            <Card className="h-full">
              <CardTitle>{category}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
