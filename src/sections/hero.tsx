import { Download, Mail } from "lucide-react";

import { profile } from "@/data";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Reveal } from "@/components/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import headshotUrl from "@/assets/headshot.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border py-16 md:py-28"
    >
      {/* subtle radial accent glow, kept low-opacity per "used sparingly" rule */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px circle at 80% 20%, rgba(185,255,102,0.06), transparent 60%)",
        }}
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col-reverse items-center gap-12 px-6 md:flex-row md:items-center md:justify-between">
        <Reveal className="flex max-w-xl flex-col items-start gap-6 text-left">
          <span className="font-mono text-xs uppercase tracking-[0.05em] text-accent-brand">
            Learn, Unlearn and Relearn
          </span>

          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] text-foreground text-balance">
            {profile.name}
          </h1>

          <p className="text-lg font-medium text-muted-foreground">
            {profile.title}
          </p>

          <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="size-4" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's Talk
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2">
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
            <Button variant="ghost" size="icon" asChild aria-label="Send email">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal
          delay={150}
          className="relative shrink-0"
        >
          <div className="relative size-56 md:size-72 lg:size-80 rounded-3xl border border-border bg-surface p-2 shadow-2xl">
            <Avatar className="size-full rounded-2xl">
              <AvatarImage
                src={headshotUrl}
                alt={profile.name}
                className="object-cover object-top grayscale contrast-110"
              />
              <AvatarFallback className="rounded-2xl text-3xl font-display">
                {profile.name
                  .split(" ")
                  .filter((p) => /^[A-Z]/.test(p))
                  .map((p) => p[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
