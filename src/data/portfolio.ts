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
  Radar,
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
export type ProjectDetails = {
  status?: string;
  overview: string;
  steps?: { title: string; text: string }[];
  stack: { group: string; items: string[] }[];
  note?: string;
  link?: { label: string; href: string };
};

// `details` is optional: it fills the "View Details" panel. Projects without it
// show their description and tags there instead.
export const projects: {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  details?: ProjectDetails;
}[] = [
  {
    icon: MessageSquare,
    title: "WhatsApp AI Agent",
    desc: "Autonomous multimodal AI agent built with n8n, OpenAI, and Supabase that manages real-time appointments and clinic FAQs over WhatsApp voice notes and text.",
    tags: ["Multimodal AI", "n8n", "OpenAI", "Supabase RAG"],
    details: {
      status: "Production-ready · Open source",
      overview:
        "A production-ready, multimodal AI agent built with n8n, OpenAI, Supabase, and Google Sheets. It autonomously handles inbound text and voice messages over WhatsApp, manages real-time appointments (booking, rescheduling, cancellation, and history), and answers domain-specific FAQs using Retrieval-Augmented Generation (RAG).",
      steps: [
        {
          title: "Ingest & RAG Indexing",
          text: "Extracts clinic documentation from Google Drive PDFs, computes embeddings with OpenAI, and stores vector representations in Supabase.",
        },
        {
          title: "Inbound & Voice Pipeline",
          text: "Captures WhatsApp webhooks, triggers instant read receipts (blue ticks) and typing indicators, and transcribes voice notes with OpenAI Whisper.",
        },
        {
          title: "AI Agent & Tools",
          text: "n8n AI Agent with GPT-4o and conversation memory queries the Supabase vector store for FAQs and executes appointment lifecycle tools on Google Sheets.",
        },
        {
          title: "Multimodal Delivery",
          text: "Dynamically routes responses: delivers text messages or synthesizes natural voice notes via OpenAI TTS uploaded directly back to WhatsApp.",
        },
      ],
      stack: [
        { group: "AI & Multimodal", items: ["OpenAI GPT-4o", "OpenAI Whisper", "OpenAI TTS", "text-embedding-3-small"] },
        { group: "Workflow Engine", items: ["n8n", "AI Agent Node", "Window Memory", "Webhooks"] },
        { group: "Data & Knowledge", items: ["Supabase (Vector Store)", "Google Sheets DB", "Google Drive API"] },
        { group: "Messaging & UX", items: ["Meta WhatsApp Cloud API", "Blue Ticks", "Typing Indicator", "Voice Notes"] },
      ],
      note: "Features native UX feedback (blue ticks, typing indicators) and full bidirectional voice-to-voice communication for a natural patient experience.",
      link: {
        label: "View on GitHub",
        href: "https://github.com/MuhammadFahad-offcl/WhatsApp-Appointment-Agent-n8n",
      },
    },
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
    icon: Radar,
    title: "VoxFlow Lead Engine",
    desc: "AI agent system that finds local businesses, scores how much they need automation, and calls them in Urdu with a voice agent to book meetings — all from one dashboard.",
    tags: ["AI Agents", "HazelJS", "Vapi", "Next.js"],
    details: {
      status: "In development · v1 Nov 2026",
      overview:
        "An AI agent system I'm building for VoxFlow to find new clients on autopilot. Give it a niche and a city — the first target is dental clinics in Lahore — and it finds the businesses, works out how much each one needs AI automation with real evidence, matches the right VoxFlow service, then calls the business in Urdu with an AI voice agent and books a video meeting with me. Every step is tracked on one dashboard.",
      steps: [
        { title: "Discover", text: "Pulls businesses from Google Maps, removes duplicates and keeps only ideal clients." },
        { title: "Enrich", text: "Reads each business's website, reviews and public information." },
        { title: "Score", text: "Rates the need for automation from 0 to 100 using 13 evidence-backed signals: hot, warm or cold." },
        { title: "Match", text: "Picks the best-fit service from VoxFlow's catalog with vector search plus an LLM check." },
        { title: "Call", text: "Writes a personalised Urdu script; once I approve the campaign, a voice agent makes the call." },
        { title: "Book & log", text: "Books a slot on my Google Calendar during the call and logs the outcome on the dashboard." },
      ],
      stack: [
        { group: "AI & agents", items: ["HazelJS agents", "Claude (Anthropic)", "Vapi voice AI", "pgvector"] },
        { group: "Data & enrichment", items: ["Apify (Google Maps)", "Lightpanda browser", "Perplexity"] },
        { group: "Backend", items: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Zod"] },
        { group: "Dashboard", items: ["Next.js", "React", "Tailwind CSS"] },
        { group: "Integrations", items: ["Google Calendar API", "Webhooks"] },
        { group: "Engineering", items: ["Docker", "Jest", "GitHub Actions CI", "ESLint", "Prettier"] },
      ],
      note: "Calls responsibly: the agent says it's an AI, calls only within set hours, never more than twice, and honours do-not-call requests.",
      link: { label: "View on GitHub", href: "https://github.com/MuhammadFahad-offcl/voxflow-lead-engine" },
    },
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
