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
  // To update your resume, replace this file in /public (keep the same name).
  resume: "/Muhammad_Fahad_Resume.pdf",
  email: "muhammadfahad.offcl@gmail.com",
  whatsappDisplay: "+92 304 4782376",
  whatsappLink:
    "https://wa.me/923044782376?text=Hi%20Fahad%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!",
  location: "Lahore, Pakistan",
  company: "VoxFlow",
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
  { href: "#client-work", label: "Client Work" },
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
  resumeButton: { label: "Download CV" },
};

/* ---------- About ---------- */
export const about = {
  photoCaption: { label: "Founder", value: profile.company },
  mission:
    "My mission: become a top AI Engineer and ship products that genuinely move the needle for businesses and people. Strong foundations in C++, OOP, DSA, and database design.",
  facts: [
    { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
    { icon: Building2, label: "Company", value: profile.company },
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

/* ---------- Client work (real projects running for clients) ---------- */
export const clientWork: {
  title: string;
  client: string;
  status: string;
  summary: string;
  highlights: string[];
  stats: { value: string; label: string }[];
  stack: string[];
  video?: { src: string; poster: string; caption: string };
}[] = [
  {
    title: "WhatsApp Appointment Agent",
    client: "Private clinic · Lahore", // add the clinic's name here if they're happy to be named
    status: "Live since Oct 2026",
    summary:
      "An AI receptionist on WhatsApp that replies to patients the moment they message, answers their questions and books their appointment — around the clock, in Roman Urdu or English. The clinic's team only steps in when a patient needs a human.",
    highlights: [
      "Instantly answers patients arriving from the clinic's Facebook & Instagram ads",
      "Books appointments through a natural chat with tap-to-select options",
      "Checks each patient against the clinic's booking requirements before confirming",
      "Sends a confirmation with a token number, plus a reminder before the visit",
      "Logs every booking to Google Sheets in real time and sends the team a daily report",
      "Hosted, monitored and maintained by me under an ongoing support plan",
    ],
    stats: [
      { value: "24/7", label: "Always on" },
      { value: "~10s", label: "To book" },
      { value: "Live", label: "Real patients" },
    ],
    stack: ["n8n", "WhatsApp Cloud API", "OpenAI", "Supabase (RAG)", "Google Sheets", "Webhooks"],
    video: {
      src: "/media/whatsapp-agent-demo.mp4",
      poster: "/media/whatsapp-agent-poster.webp",
      caption: "Booking flow demo · sample patient data",
    },
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
  // Optional proof: an image in /public shown on the card and enlarged on click.
  certificate?: { image: string; id?: string };
}[] = [
  {
    icon: Award,
    title: "Agentic AI & Automation Expert",
    org: "Tech7 Academy",
    year: "Issued Jun 2026",
    desc: "Certified in designing and deploying autonomous AI agents — including AI calling systems, workflow automations and intelligent business solutions — through an n8n curriculum-approved program.",
    certificate: { image: "/media/tech7-certificate.webp", id: "33613" },
  },
  {
    icon: Building2,
    title: "Founder & Lead Automation Architect",
    org: profile.company,
    year: "May 2026 – Present",
    desc: "Founded VoxFlow — a technology agency focused on AI automation, agentic workflows, and intelligent digital systems. Architected scalable backend systems with Supabase and PostgreSQL.",
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
    { label: "Client Work", href: "#client-work" },
    { label: "Projects", href: "#projects" },
    { label: "Certs", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};
