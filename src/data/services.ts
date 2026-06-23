import {
  MessagesSquare,
  Sparkles,
  BrainCircuit,
  UtensilsCrossed,
  Headphones,
  GraduationCap,
  type LucideIcon,
} from "lucide-react"
import bannerImg from "../assets/hero-bg.jpg"

export type Service = {
  slug: string
  icon: LucideIcon
  title: string
  desc: string // short summary used on the accordion
  tags: string
  bg: string // gradient used on cards + page banner tint
  image: string // banner photo (placeholder — swap per service later)
  intro: string // longer opening paragraph on the page
  highlights: { title: string; desc: string }[] // what's covered
  outcomes: string[] // results learners walk away with
  audience: string // who it's for
}

// Single source of truth — used by the Services accordion, the navbar dropdown,
// and the individual service pages.
export const SERVICES: Service[] = [
  {
    slug: "soft-skills-training",
    icon: MessagesSquare,
    title: "Soft Skills Training",
    desc: "Communication, teamwork, and leadership skills that help you stand out and lead with confidence.",
    tags: "Communication · Teamwork · Leadership",
    bg: "linear-gradient(155deg, #7c2d12 0%, #b45309 55%, #1c1917 100%)",
    image: bannerImg,
    intro:
      "Technical ability gets you in the door — soft skills move you forward. Our Soft Skills program builds the everyday human skills that decide how far a person and a team can go: how clearly they speak, how well they listen, and how confidently they lead.",
    highlights: [
      { title: "Communication", desc: "Speak with clarity, structure ideas, and present with impact." },
      { title: "Teamwork & Collaboration", desc: "Build trust, give feedback, and work across functions." },
      { title: "Leadership Presence", desc: "Influence, delegate, and lead conversations with confidence." },
      { title: "Email & Etiquette", desc: "Professional written and workplace communication." },
    ],
    outcomes: [
      "Communicate confidently in meetings and presentations",
      "Handle conflict and feedback with maturity",
      "Lead and motivate small teams effectively",
    ],
    audience: "Students, early-career professionals, and corporate teams.",
  },
  {
    slug: "life-skills-training",
    icon: Sparkles,
    title: "Life Skills Training",
    desc: "Personal development and decision-making skills to navigate life and work with resilience.",
    tags: "Personal Growth · Decision-Making",
    bg: "linear-gradient(155deg, #9f1239 0%, #c2410c 55%, #1c1917 100%)",
    image: bannerImg,
    intro:
      "Life Skills training builds the inner foundation people need to thrive — emotional awareness, resilience, and the ability to make sound decisions under pressure. These are the skills that keep careers and lives on track when things get hard.",
    highlights: [
      { title: "Emotional Intelligence", desc: "Understand and manage emotions in yourself and others." },
      { title: "Decision-Making", desc: "Frame problems clearly and choose with confidence." },
      { title: "Resilience & Stress", desc: "Bounce back from setbacks and manage pressure." },
      { title: "Goal Setting", desc: "Turn intentions into focused, achievable plans." },
    ],
    outcomes: [
      "Manage stress and stay composed under pressure",
      "Make balanced decisions with confidence",
      "Set and follow through on meaningful goals",
    ],
    audience: "Students, professionals, and anyone navigating change.",
  },
  {
    slug: "nlp-workshops",
    icon: BrainCircuit,
    title: "NLP Workshops",
    desc: "Neuro-Linguistic Programming across Basic, Practitioner, and Master Practitioner levels.",
    tags: "Basic · Practitioner · Master",
    bg: "linear-gradient(155deg, #4c1d95 0%, #6d28d9 55%, #1e1b4b 100%)",
    image: bannerImg,
    intro:
      "Neuro-Linguistic Programming (NLP) gives you practical tools to understand how thinking, language, and behaviour connect — and how to change them. Our workshops run across three certified levels, from foundations to mastery.",
    highlights: [
      { title: "Basic", desc: "Core presuppositions, rapport, and outcome framing." },
      { title: "Practitioner", desc: "Language models, reframing, and belief change." },
      { title: "Master Practitioner", desc: "Advanced strategies, modelling, and coaching with NLP." },
      { title: "Real Application", desc: "Apply NLP to communication, sales, and leadership." },
    ],
    outcomes: [
      "Build instant rapport in any conversation",
      "Reframe limiting beliefs and patterns",
      "Coach yourself and others toward outcomes",
    ],
    audience: "Coaches, trainers, leaders, and self-development seekers.",
  },
  {
    slug: "hospitality-training",
    icon: UtensilsCrossed,
    title: "Hospitality Training",
    desc: "Customer service excellence and operations training for the hospitality industry.",
    tags: "Customer Service · Operations",
    bg: "linear-gradient(155deg, #064e3b 0%, #0f766e 55%, #022c22 100%)",
    image: bannerImg,
    intro:
      "In hospitality, service is the product. Our Hospitality program trains front-line and operations staff to deliver consistent, memorable guest experiences — the kind that build loyalty and reputation.",
    highlights: [
      { title: "Guest Service Excellence", desc: "Five-star service standards and etiquette." },
      { title: "Front Office Operations", desc: "Check-in, upselling, and complaint handling." },
      { title: "Grooming & Presence", desc: "Professional image and confident body language." },
      { title: "Team Coordination", desc: "Smooth service flow across departments." },
    ],
    outcomes: [
      "Deliver consistent, five-star guest experiences",
      "Handle complaints and recover service gracefully",
      "Coordinate confidently across hotel operations",
    ],
    audience: "Hotels, restaurants, resorts, and hospitality students.",
  },
  {
    slug: "bpo-skills-training",
    icon: Headphones,
    title: "BPO Skills Training",
    desc: "Voice, technical, and process skills to launch and grow a career in the BPO sector.",
    tags: "Voice · Technical · Process",
    bg: "linear-gradient(155deg, #0c4a6e 0%, #0e7490 55%, #082f49 100%)",
    image: bannerImg,
    intro:
      "The BPO sector rewards clear communication and calm, accurate process handling. Our BPO program prepares candidates to be job-ready from day one — on voice, on chat, and on process.",
    highlights: [
      { title: "Voice & Accent", desc: "Clear, neutral communication for global clients." },
      { title: "Customer Handling", desc: "De-escalation and call-quality skills." },
      { title: "Email & Chat Etiquette", desc: "Crisp, professional written communication." },
      { title: "Process Readiness", desc: "Productivity and quality-first work habits." },
    ],
    outcomes: [
      "Handle calls and chats with clarity and calm",
      "De-escalate difficult customer situations",
      "Meet quality and productivity benchmarks",
    ],
    audience: "Freshers and professionals entering the BPO/ITES sector.",
  },
  {
    slug: "institution-programs",
    icon: GraduationCap,
    title: "Institution Programs",
    desc: "College-to-corporate training and career counselling for educational institutions.",
    tags: "College-to-Corporate · Counselling",
    bg: "linear-gradient(155deg, #78350f 0%, #d97706 55%, #1c1917 100%)",
    image: bannerImg,
    intro:
      "We partner with colleges and institutions to bridge the gap between academics and employment. Our Institution Programs combine employability training, career counselling, and faculty development into a single, measurable journey.",
    highlights: [
      { title: "Campus-to-Corporate", desc: "Employability, resume, and interview readiness." },
      { title: "Career Counselling", desc: "Guided pathways from college to first job." },
      { title: "Faculty Development", desc: "Modern pedagogy and classroom communication." },
      { title: "Aptitude & Skills", desc: "Structured prep for placement success." },
    ],
    outcomes: [
      "Improve student placement readiness and outcomes",
      "Equip faculty with modern teaching skills",
      "Build a repeatable college-to-corporate pipeline",
    ],
    audience: "Colleges, universities, and training institutions.",
  },
]

export function getService(slug: string | undefined): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
