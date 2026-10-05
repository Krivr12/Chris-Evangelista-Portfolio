import { certifications } from "@/data";
import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import AzureAIAgentsLogo from "@/assets/AI-103-LOGO.webp";
import AzureDataFundamentalsLogo from "@/assets/DP-900-Logo.png";
import JavaTESDALogo from "@/assets/Tesda-Logo.png";

const logoMap: Record<string, string> = {
  "azure-ai-apps-agents": AzureAIAgentsLogo,
  "azure-data-fundamentals": AzureDataFundamentalsLogo,
  "tesda-java": JavaTESDALogo,
};

export function Certifications() {
  return (
    <SectionContainer id="certifications" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Formal training that backs up the hands-on work."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const logo = logoMap[cert.id];
          return (
            <Reveal key={cert.id} delay={i * 80}>
              <Card className="h-full">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  {logo && (
                    <div className="flex-shrink-0 size-14 rounded-lg bg-white p-2">
                      <img
                        src={logo}
                        alt={`${cert.name} logo`}
                        className="size-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-display text-base font-semibold leading-snug text-foreground">
                      {cert.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="mt-1 font-mono text-xs text-subtle-foreground">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </SectionContainer>
  );
}
