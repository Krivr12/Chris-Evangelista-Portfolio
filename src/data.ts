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
    "I build scalable full-stack products and AI-enabled automation — from onboarding agents that cut ramp-up time in half to semantic search that returns results in under 500ms.",
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
      "Built an onboarding agentic system using Power Platform and Copilot Studio, cutting onboarding time by ~50%.",
      "Served as a trainer for the AI Enablement / TechBlaze AI Cohort program.",
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
      "Delivered a performance tracking system covering 20,000 personnel.",
      "Optimized workflows, reducing search operations from days to minutes.",
      "Shipped a full React/Django stack in a one-month sprint cycle.",
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
      "At first, I wasn't sure if I could lead people, but whenever an opportunity arose, I always accepted and led in the best way I could. Through these experiences, I discovered that leadership isn't about having all the answers—it's about empowering others to find theirs, creating an environment where people feel supported and motivated to do their best work.",
    image: LeadingImg,
  },
  {
    id: "volunteering",
    title: "Volunteering",
    description:
      "During college, volunteering in various tech communities like the AWSUG opened me to opportunities I never expected. Meeting people from different backgrounds and experience levels gave me insights I would never get in a classroom. These connections shaped my perspective on collaboration, problem-solving, and the importance of giving back to the community.",
    image: VolunteeringImg,
  },
  {
    id: "sharing",
    title: "Sharing",
    description:
      "This is my way of giving back to the people who shared their knowledge and resources that shaped who I am today. Whether through mentoring, writing, or speaking, I believe in lifting others up the way I've been lifted. Sharing knowledge amplifies impact and creates a cycle of continuous learning across our community.",
    image: SharingImg,
  },
  {
    id: "teaching",
    title: "Teaching",
    description:
      "I believe the best way to learn is to teach. Explaining concepts to others forces me to deeply understand them and see gaps in my knowledge. Teaching isn't just about transferring information—it's about igniting curiosity, building confidence, and creating a culture where learning never stops.",
    image: TeachingImg,
  },
  {
    id: "playing",
    title: "Playing",
    description:
      "A healthy body means a healthy mind. While tech evolves rapidly, I recognize that maintaining physical and mental well-being is essential for sustained growth. Balancing learning with fitness allows me to stay sharp, energized, and ready to tackle complex challenges with a fresh perspective.",
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
