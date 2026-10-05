// Single source of truth for all portfolio content.
// To add a new job, project, cert, or activity: add a new object to the
// relevant array below. No JSX/component edits required.

import ChevronWorkPic from "@/assets/chevron-work-pic.jpg";
import TambuliWorkPic from "@/assets/tambulilabs-work-pic.jpg";
import LeadingImg from "@/assets/Leading.jpg";
import VolunteeringImg from "@/assets/Volunteering.jpg";
import SharingImg from "@/assets/Sharing.jpg";
import TeachingImg from "@/assets/Teaching.jpg";
import PlayingImg from "@/assets/Playing.jpg";

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
};

export const profile: Profile = {
  name: "Christopher Bryan S. Evangelista",
  title: "Full Stack Developer · Cloud & AI Engineer ",
  tagline:
    "I'm a developer who loves turning messy problems into tools people actually enjoy using. I work across the full stack and the cloud, with a growing focus on AI that makes everyday work easier.",
  phone: "0976-482-6989",
  email: "christopherbryanevangelista@gmail.com",
  linkedin: "chrisbryevangelista12",
  github: "Krivr12",
  location: "Manila, Philippines",
};

export type StatItem = {
  id: string;
  value: string;
  label: string;
};

export const stats: StatItem[] = [
  { id: "gwa", value: "1.19", label: "GWA · Magna Cum Laude" },
  { id: "internships", value: "02+", label: "Internships / Roles" },
  { id: "projects", value: "02+", label: "Shipped Full-Stack Projects" },
  { id: "certs", value: "03", label: "Certifications" },
];

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  image?: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "chevron",
    company: "Chevron Holdings Inc.",
    role: "Software Engineer Intern",
    location: "Makati City, PH",
    startDate: "Mar 2026",
    endDate: "Jul 2026",
    bullets: [
      "Built an onboarding agentic system with Power Platform and Copilot Studio that cut onboarding time by about 50% and saved the team 3 to 4 hours per new hire.",
      "Trained non-technical teams to build their own workflows with Copilot Studio through the TechBlaze AI Cohort, bringing AI adoption beyond the tech team.",
    ],
    image: ChevronWorkPic,
  },
  {
    id: "tambuli-labs",
    company: "Tambuli Labs",
    role: "Software Developer I",
    location: "New Manila, Quezon City, PH",
    startDate: "Nov 2025",
    endDate: "Mar 2026",
    bullets: [
      "Engineered a performance tracking system for 20,000 personnel, giving leaders the data to guide task allocation and promotions.",
      "Centralized personnel records so candidate searches that once took days now take minutes.",
      "Delivered a full stack React and Django solution on time within a one-month deadline, using Shadcn/UI to move fast.",
    ],
    image: TambuliWorkPic,
  },
];

export type ProjectItem = {
  id: string;
  name: string;
  role: string;
  dateRange: string;
  description: string;
  bullets: string[];
  techStack: string[];
  link?: string;
  image?: string;
};

export const projects: ProjectItem[] = [
  {
    id: "flowgram",
    name: "FlowGram",
    role: "Full Stack Developer",
    dateRange: "Jul 2026 – Aug 2026",
    description:
      "A progressive web app built for AWS Community Day Manila 2026.",
    bullets: [
      "Designed and shipped a PWA optimized for offline-first usage at a live community event.",
      "Coordinated with the AWS Community Day Manila 2026 organizing team on delivery.",
    ],
    techStack: ["React", "PWA", "AWS"],
  },
  {
    id: "thesisko",
    name: "ThesISKO",
    role: "Full Stack Developer & Project Manager",
    dateRange: "Sep 2025 – Dec 2025",
    description:
      "A thesis repository platform with semantic search, secure storage, and role-based access.",
    bullets: [
      "Implemented semantic search with all-MiniLM-L6-v2, returning results in under 500ms.",
      "Architected storage across AWS S3, Supabase, and MongoDB.",
      "Enforced RBAC and encryption across the platform for data protection.",
    ],
    techStack: ["React", "AWS S3", "Supabase", "MongoDB", "Hugging Face"],
  },
];

export type SkillCategory =
  | "Web Development"
  | "Cloud & DevOps"
  | "AI & Data"
  | "Automation";

export const skills: Record<SkillCategory, string[]> = {
  "Web Development": ["React", "Node.js", "Django"],
  "Cloud & DevOps": ["AWS (S3, EC2)", "Azure", "Supabase", "Docker", "Vercel", "Git"],
  "AI & Data": ["Python", "SQL", "PostgreSQL", "MongoDB", "Hugging Face"],
  Automation: ["Power Apps", "Power Automate", "Copilot Studio"],
};

export type CertificationItem = {
  id: string;
  name: string;
  issuer: string;
  date: string;
};

export const certifications: CertificationItem[] = [
  {
    id: "azure-ai-apps-agents",
    name: "Azure AI Apps and Agents Developer Associate",
    issuer: "Microsoft Certified",
    date: "Sep 2026",
  },
  {
    id: "azure-data-fundamentals",
    name: "Azure Data Fundamentals",
    issuer: "Microsoft Certified",
    date: "Dec 2025",
  },
  {
    id: "tesda-java",
    name: "Programming (Java) NC III",
    issuer: "TESDA",
    date: "Mar 2024",
  },
];

export type BeyondWorkItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const beyondWorkItems: BeyondWorkItem[] = [
  {
    id: "leading",
    title: "Leading",
    description:
      "I wasn't sure I could lead people. Part of me worried I'd let them down. But every time the chance came, I said yes and gave it my best, even when I felt unprepared. Along the way I learned that leadership isn't about having every answer. It's about listening first, helping others find their own answers, and building a space where people feel backed and want to do great work. The best teams I've been part of weren't built on authority. They were built on trust.",
    image: LeadingImg,
  },
  {
    id: "volunteering",
    title: "Volunteering",
    description:
      "In college, I started volunteering in tech communities like AWSUG, and it opened doors I never expected. I met people from all kinds of backgrounds and skill levels, from students just starting out to engineers with years of experience. Every conversation taught me something no classroom could. Those connections changed how I think about working together, solving problems, and giving back. Showing up for a community, even in small ways, ends up giving you far more than you put in.",
    image: VolunteeringImg,
  },
  {
    id: "sharing",
    title: "Sharing",
    description:
      "Many people shared what they knew so I could grow, and this is how I pay it forward. Free tutorials, patient answers, and honest advice from strangers shaped who I am today. I mentor, write, and speak because I want to lift others the way I was lifted. When knowledge is shared, it doesn't shrink. It spreads, and the whole community learns faster. Someone out there is stuck on the same problem I once had, and I want to be the reason they get unstuck.",
    image: SharingImg,
  },
  {
    id: "teaching",
    title: "Teaching",
    description:
      "The best way to learn something is to teach it. When I explain an idea to someone else, I find out how well I really understand it, and where I don't. Those gaps push me to go back, dig deeper, and come out sharper. But teaching is more than passing along facts. It's sparking curiosity, building confidence, and keeping the habit of learning alive. Seeing someone finally get it after struggling is one of the best feelings I know.",
    image: TeachingImg,
  },
  {
    id: "playing",
    title: "Playing",
    description:
      "A healthy body supports a healthy mind. Tech moves fast, and I can't keep up if I'm running on empty. Making time for fitness keeps me sharp and energized, and it gives my brain a break from the screen. Some of my best ideas show up when I'm away from my desk. Staying active helps me face hard problems with a clear head, and it reminds me that growth isn't only about code.",
    image: PlayingImg,
  },
];

export type VolunteeringItem = {
  id: string;
  org: string;
  role: string;
  dateRange: string;
  description: string;
};

export type SpeakingItem = {
  id: string;
  event: string;
  topic: string;
  date: string;
  link?: string;
};

export type LeadershipItem = {
  id: string;
  org: string;
  role: string;
  dateRange: string;
  description: string;
};

export type BeyondWork = {
  volunteering: VolunteeringItem[];
  speaking: SpeakingItem[];
  leadership: LeadershipItem[];
};

// Placeholder entries — replace with real ones as they come in.
export const beyondWork: BeyondWork = {
  volunteering: [
    {
      id: "volunteering-placeholder-1",
      org: "Organization Name",
      role: "Volunteer Role",
      dateRange: "Month Year – Month Year",
      description:
        "Placeholder description of the volunteering engagement and its impact. Replace with real details.",
    },
  ],
  speaking: [
    {
      id: "speaking-placeholder-1",
      event: "Event Name",
      topic: "Talk Topic",
      date: "Month Year",
      link: undefined,
    },
  ],
  leadership: [
    {
      id: "leadership-placeholder-1",
      org: "Organization Name",
      role: "Leadership Role",
      dateRange: "Month Year – Month Year",
      description:
        "Placeholder description of the leadership role and its impact. Replace with real details.",
    },
  ],
};

export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  honor: string;
  gwa: string;
  dateRange: string;
};

export const education: EducationItem[] = [
  {
    id: "pup",
    school: "Polytechnic University of the Philippines",
    degree: "BS Information Technology",
    honor: "Magna Cum Laude",
    gwa: "1.19",
    dateRange: "2022 – 2026",
  },
];
