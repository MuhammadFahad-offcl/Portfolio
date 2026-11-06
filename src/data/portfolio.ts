/* ==================================================================
   ALL WEBSITE CONTENT LIVES IN THIS FILE.
   Edit text, links, skills, projects or credentials here — the
   sections read from these lists, so you never need to touch the
   layout code. Add or remove items and the page adapts.

   Icons come from https://lucide.dev/icons — import the one you want
   at the top of this file and use it as `icon: IconName`.
================================================================== */
import {
  Award,
  Bot,
  Building2,
  GraduationCap,
  Hotel,
  MapPin,
  MessageSquare,
  Share2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* ---------- Basic info ---------- */
export const profile = {
  name: "Muhammad Fahad",
  brand: "FAHAD", // big word in the footer
  logo: "MF.", // top-left of the navbar
  loaderText: "MUHAMMAD FAHAD", // short intro screen
  photo: "/fahad.webp", // file inside the /public folder
  email: "muhammadfahad.offcl@gmail.com",
  whatsappDisplay: "+92 304 4782376",
  whatsappLink:
    "https://wa.me/923044782376?text=Hi%20Fahad%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!",
  location: "Lahore, Pakistan",
  company: "VoxAi",
  linkedin: "https://linkedin.com/in/muhammad-fahad-275aa5390",
  github: "https://github.com/MuhammadFahad-offcl",
  // Contact form messages are delivered to this address (via formsubmit.co).
  // The very first message sends you an "Activate Form" email — click it once.
  formEmail: "muhammadfahad.offcl@gmail.com",
};

/* ---------- Navbar ---------- */
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

/* ---------- Hero (top of page) ---------- */
export const hero = {
  badge: "Available for AI automation projects",
  title: "Hi, I'm Muhammad Fahad",
  subtitle: "AI Automation & Agentic AI Specialist",
  description:
    "Helping businesses scale by integrating intelligent custom AI agents, production-grade n8n automation workflows, and robust web applications.",
  primaryButton: { label: "Hire Me", href: "#contact" },
  secondaryButton: { label: "View Projects", href: "#projects" },
};

/* ---------- About ---------- */
export const about = {
  photoCaption: { label: "Founder", value: "VoxAi" },
  mission:
    "My mission: become a top AI Engineer and ship products that genuinely move the needle for businesses and people. Strong foundations in C++, OOP, DSA, and database design.",
  facts: [
    { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
    { icon: Building2, label: "Company", value: "VoxAi" },
    { icon: GraduationCap, label: "Education", value: "BSCS @ UMT • 2024–2028" },
    { icon: Award, label: "Role", value: "Founder & Lead Automation Architect" },
  ] satisfies { icon: LucideIcon; label: string; value: string }[],
};
// The first About paragraph (with bold words) is in src/components/sections/About.tsx

/* ---------- Skills ---------- */
export const skillGroups: { title: string; chips: string[] }[] = [
  { title: "Languages", chips: ["C++", "TypeScript", "JavaScript"] },
  { title: "AI / Agentic AI", chips: ["AI Agents", "Agentic AI Systems", "Multi-Modal AI"] },
  { title: "Automation", chips: ["n8n (Core)", "Workflow Automation", "API Integrations"] },
  { title: "Web Development", chips: ["React / Next.js", "Tailwind CSS", "Framer Motion"] },
  { title: "Backend & Databases", chips: ["Node.js", "Supabase", "PostgreSQL"] },
  {
    title: "Tools",
    chips: ["Lovable", "GitHub", "Vercel", "VS Code", "Postman", "Docker basics"],
  },
  {
    title: "Platforms & APIs",
    chips: ["Webhooks", "REST APIs", "OpenAI", "Groq", "Third-party Integrations"],
  },
  {
    title: "Foundations",
    chips: ["OOP", "DSA", "Database Design", "Problem Solving", "System Design"],
  },
];

/* ---------- Projects ---------- */
export const projects: { icon: LucideIcon; title: string; desc: string; tags: string[] }[] = [
  {
    icon: MessageSquare,
    title: "WhatsApp AI Agent",
    desc: "Intelligent WhatsApp automation agent handling user queries, automated responses, and workflow management using AI tools and backend integrations.",
    tags: ["AI Agent", "n8n", "Node.js", "Webhooks"],
  },
  {
    icon: Share2,
    title: "Social Media Automation Agent",
    desc: "AI-powered social media automation for automated posting, scheduling, content handling, and engagement workflows across platforms.",
    tags: ["AI", "n8n", "Automation", "APIs"],
  },
  {
    icon: Hotel,
    title: "Hotel Reservation System",
    desc: "Designed and developed a full hotel reservation management system with room booking, customer management, and database integration.",
    tags: ["C++", "OOP", "Database", "Booking"],
  },
  {
    icon: Workflow,
    title: "n8n Automation Workflows",
    desc: "Production-grade webhook patterns, AI integrations, and complex HTTP node flows that automate real business operations.",
    tags: ["n8n", "Webhooks", "HTTP", "Workflows"],
  },
  {
    icon: Bot,
    title: "Agentic AI Workflow",
    desc: "Multi-step agentic AI system that plans, calls tools, and coordinates sub-agents to complete complex business tasks autonomously.",
    tags: ["Agentic AI", "AI Agents", "LLM", "Tools"],
  },
  {
    icon: MessageSquare,
    title: "Lead Gen Chatbot",
    desc: "AI-powered chatbot that qualifies leads 24/7, captures contact details, and routes hot prospects straight to the sales pipeline.",
    tags: ["AI", "Chatbot", "Lead Gen", "n8n"],
  },
];

/* ---------- Credentials ---------- */
export const credentials: {
  icon: LucideIcon;
  title: string;
  org: string;
  year: string;
  desc: string;
}[] = [
  {
    icon: Building2,
    title: "Founder & Lead Automation Architect",
    org: "VoxAi",
    year: "May 2026 – Present",
    desc: "Founded VoxAi — a technology agency focused on AI automation, agentic workflows, and intelligent digital systems. Architected scalable backend systems with Supabase and PostgreSQL.",
  },
  {
    icon: Award,
    title: "AI Automation & Agentic AI",
    org: "Self-led Projects",
    year: "2025 – Present",
    desc: "Built multi-modal AI automation workflows integrating text, audio, and image processing. Developed production AI agents and workflow systems with n8n and modern AI tooling.",
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Science in Computer Science",
    org: "University of Management and Technology (UMT)",
    year: "Oct 2024 – Expected 2028",
    desc: "Specializing in software engineering, AI, and database systems. Deep focus on C++, OOP, Data Structures & Algorithms.",
  },
  {
    icon: GraduationCap,
    title: "Intermediate in Computer Science (ICS)",
    org: "Punjab Group of Colleges",
    year: "Aug 2022 – Aug 2024",
    desc: "Foundations in programming, mathematics, and computing. Built early-stage academic software projects.",
  },
];

/* ---------- Footer ---------- */
export const footer = {
  description:
    "AI Automation Specialist crafting intelligent digital experiences that drive business growth.",
  getInTouch:
    "Have a project in mind or want to collaborate? Let's build something extraordinary together.",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certs", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};
