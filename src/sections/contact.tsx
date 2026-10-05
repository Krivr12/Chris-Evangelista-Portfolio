import { Mail, Phone } from "lucide-react";

import { profile } from "@/data";
import { SectionContainer } from "@/components/section-container";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

export function Contact() {
  return (
    <SectionContainer id="contact" className="border-t border-border">
      <Reveal>
        <Card className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.05em] text-accent-brand">
            Get In Touch
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-foreground text-balance">
            Let's build something together.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[0.95rem] text-muted-foreground">
            Open to full-time roles, freelance projects, and interesting
            conversations about software, cloud, and AI. Reach out any time.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 max-w-full px-4 sm:flex-row">
            <Button size="lg" asChild className="max-w-full sm:max-w-none">
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4 flex-shrink-0" />
                <span className="truncate text-sm sm:text-base">{profile.email}</span>
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="max-w-full sm:max-w-none">
              <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>
                <Phone className="size-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">{profile.phone}</span>
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button variant="ghost" size="icon" asChild aria-label="LinkedIn profile">
              <a
                href={`https://linkedin.com/in/${profile.linkedin}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="GitHub profile">
              <a
                href={`https://github.com/${profile.github}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GithubIcon className="size-4" />
              </a>
            </Button>
          </div>
        </Card>
      </Reveal>

      <Separator className="mt-16" />
      <footer className="flex flex-col items-center gap-2 py-8 text-center">
        <p className="text-sm text-muted-foreground">{profile.name}</p>
        <p className="text-xs text-subtle-foreground">
          © {new Date().getFullYear()}
        </p>
      </footer>
    </SectionContainer>
  );
}
