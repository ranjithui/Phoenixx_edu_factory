import {
  Sparkles,
  BrainCircuit,
  UtensilsCrossed,
  Briefcase,
  ShoppingBag,
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
    slug: "corporate-training",
    icon: Briefcase,
    title: "Corporate Training",
    desc: "Customized workforce development built around your team's real gaps — leadership, team dynamics, and the skills that turn talent into performance.",
    tags: "Leadership · Productivity · Team Building",
    bg: "linear-gradient(155deg, #0c4a6e 0%, #1d4ed8 55%, #0f172a 100%)",
    image: bannerImg,
    intro:
      "Your team is technically capable — but misaligned communication, underdeveloped leadership, and low team cohesion are quietly costing you performance, retention, and results. Our Corporate Training delivers customized workforce development programs built around your organization's actual gaps — covering leadership communication, team dynamics, productivity, and the interpersonal skills that determine whether talented people become high-performing teams.",
    highlights: [
      { title: "Leadership Development", desc: "Build managers who coach, delegate, and inspire." },
      { title: "Team Building", desc: "Improve collaboration, trust, and accountability." },
      { title: "Communication & Etiquette", desc: "Sharpen workplace and client communication." },
      { title: "Productivity & Time Management", desc: "Practical systems for getting high-value work done." },
    ],
    outcomes: [
      "Develop confident, capable people-leaders",
      "Boost team collaboration and accountability",
      "Lift overall workforce productivity and morale",
    ],
    audience: "Corporates, startups, and enterprise teams of any size.",
  },
  {
    slug: "life-skills-training",
    icon: Sparkles,
    title: "Life Skills Training",
    desc: "Emotional intelligence, resilience, and decision-making frameworks that help you take control of your direction.",
    tags: "Personal Growth · Decision-Making",
    bg: "linear-gradient(155deg, #9f1239 0%, #c2410c 55%, #1c1917 100%)",
    image: bannerImg,
    intro:
      "You feel overwhelmed by decisions, reactive in conflicts, and unclear about where your career or personal life is heading — and no training you've done has addressed the gap between who you are now and who you need to become. Our Life Skills Training builds the emotional intelligence, critical thinking, stress resilience, and decision-making frameworks that help you take control of your reactions, your relationships, and your direction.",
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
    desc: "The science of how language, thought, and behavior connect — tools to communicate with precision and build instant rapport.",
    tags: "Basic · Practitioner · Master",
    bg: "linear-gradient(155deg, #4c1d95 0%, #6d28d9 55%, #1e1b4b 100%)",
    image: bannerImg,
    intro:
      "You want to lead, influence, and connect — but your words don't land the way you intend, and you leave conversations feeling like you didn't get your point across no matter how much you prepare. Our NLP Workshops teach the science behind how language, thought, and behavior work together — giving you tools to communicate with precision, build instant rapport, and create the outcomes you design, across Basic, Practitioner, and Master Practitioner levels.",
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
    desc: "The customer-service mindset and professional standards that make every guest feel genuinely valued.",
    tags: "Customer Service · Operations",
    bg: "linear-gradient(155deg, #064e3b 0%, #0f766e 55%, #022c22 100%)",
    image: bannerImg,
    intro:
      "Your front-line team is technically trained — but they struggle to deliver the warm, consistent, professional guest experience that builds loyalty and reputation, and one bad interaction erases ten great ones. Our Hospitality Training builds the customer-service mindset, emotional intelligence, and professional standards that make every guest feel genuinely valued — not just processed. Because in hospitality, how you make people feel is the product.",
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
    slug: "retail-and-sales-training",
    icon: ShoppingBag,
    title: "Retail and Sales Training",
    desc: "Interpersonal skills, persuasion, and a customer-first mindset that turn product knowledge into actual sales.",
    tags: "Selling · Customer Service · Conversion",
    bg: "linear-gradient(155deg, #7c2d12 0%, #db2777 55%, #1c1917 100%)",
    image: bannerImg,
    intro:
      "Your sales team knows the product inside out — but they're losing deals because they can't read the customer, handle objections, or close with confidence, and product knowledge without people skills costs revenue. Our Retail and Sales Training builds the interpersonal skills, persuasion techniques, and customer-first mindset that turn product knowledge into actual sales — so your team knows how to connect, convince, and convert in any selling environment.",
    highlights: [
      { title: "Customer Engagement", desc: "Greet, understand, and connect with every customer." },
      { title: "Consultative Selling", desc: "Match needs to products and sell with confidence." },
      { title: "Objection Handling & Closing", desc: "Move conversations to a confident yes." },
      { title: "Upselling & Cross-Selling", desc: "Grow basket size without pressure tactics." },
    ],
    outcomes: [
      "Convert more walk-ins into paying customers",
      "Handle objections and close with confidence",
      "Deliver service that drives repeat business",
    ],
    audience: "Retail staff, sales executives, showrooms, and brand teams.",
  },
  {
    slug: "institution-programs",
    icon: GraduationCap,
    title: "Institution Programs",
    desc: "Corporate-readiness training, career counselling, and placement skills delivered directly to your campus.",
    tags: "College-to-Corporate · Counselling",
    bg: "linear-gradient(155deg, #78350f 0%, #d97706 55%, #1c1917 100%)",
    image: bannerImg,
    intro:
      "Your institution produces academically strong graduates — but placement rates don't reflect the quality of your students, because employers are screening for skills your curriculum doesn't cover. Phoenixx Edu Factory's Institution Programs bring structured corporate-readiness training, career counselling, and placement skills directly to your campus — bridging the gap between academic excellence and employment-ready performance, with a proven track record of improving placement outcomes.",
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
