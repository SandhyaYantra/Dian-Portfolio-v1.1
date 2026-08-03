import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const profile = {
  name: "Dian Septio",
  title: "Frontend Developer · Self-Taught Technologist",
  headline: "Building Digital Experiences Through Continuous Learning.",
  intro:
    "I moved from years of professional kitchen work into software development, carrying the same discipline into code. Today I build interfaces, study systems, and ship projects that document steady technical growth.",
  email: "dikhaira12@gmail.com",
  cvUrl: "/cv-dian-septio.pdf",
  socials: {
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
};

export const highlights = [
  {
    label: "Experience",
    value: "6 years",
    detail: "Professional kitchen operations, service under pressure.",
  },
  {
    label: "Learning",
    value: "1,200+ hours",
    detail: "Structured self-study across frontend fundamentals.",
  },
  { label: "Projects", value: "12 shipped", detail: "Practice builds, tools, and client work." },
  { label: "Certificates", value: "6 earned", detail: "Frontend, JavaScript, and UI foundations." },
];

export const timeline = [
  {
    stage: "Stage 01",
    title: "Professional Kitchen",
    period: "2022 — Present",
    body: "Worked line and prep in high-volume kitchens. Learned process design, timing, standards, and consistency under pressure.",
  },
  {
    stage: "Stage 02",
    title: "Discovering Technology",
    period: "2022 — Present",
    body: "Began studying HTML, CSS, and JavaScript after hours. Recognised the same craft logic behind software systems.",
  },
  {
    stage: "Stage 03",
    title: "Self-Learning & Building",
    period: "2023 — Present",
    body: "Moved from tutorials to real builds: component architecture, state, APIs, accessibility, and version control.",
  },
  {
    stage: "Stage 04",
    title: "Software Development Path",
    period: "2026 — ongoing",
    body: "Focused on React and TypeScript, deepening engineering fundamentals while contributing to production-quality work.",
  },
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "prep-board",
    name: "Prep Board",
    description:
      "A kitchen prep planner that turns daily service lists into trackable tasks, built to replace paper checklists.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: project1,
    year: "2026",
    featured: true,
  },
  {
    slug: "stock-sense",
    name: "Stock Sense",
    description:
      "Inventory tracking dashboard with usage trends and low-stock signals, designed around real ordering workflows.",
    tags: ["React", "Charts", "REST API"],
    image: project2,
    year: "2026",
    featured: true,
  },
  {
    slug: "learn-log",
    name: "Learn Log",
    description:
      "A personal learning tracker for study sessions and milestones, with progress rings and weekly review notes.",
    tags: ["JavaScript", "CSS", "LocalStorage"],
    image: project3,
    year: "2024",
    featured: true,
  },
  {
    slug: "pagecraft",
    name: "Pagecraft",
    description:
      "Lightweight landing page builder exploring layout primitives, design tokens, and reusable section blocks.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: project4,
    year: "2024",
    featured: false,
  },
];

export const certificates = [
  { title: "Responsive Web Design", org: "freeCodeCamp", date: "Mar 2024" },
  { title: "JavaScript Algorithms & Data Structures", org: "freeCodeCamp", date: "Aug 2024" },
  { title: "Frontend Development Fundamentals", org: "Dicoding", date: "Nov 2024" },
  { title: "React Foundations", org: "Scrimba", date: "Feb 2025" },
  { title: "UI Design Principles", org: "Coursera", date: "Jun 2025" },
  { title: "Git & Collaborative Workflows", org: "Dicoding", date: "Jan 2026" },
];
