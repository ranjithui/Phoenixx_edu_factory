import {
  MessagesSquare,
  Sparkles,
  BrainCircuit,
  UtensilsCrossed,
  Headphones,
  GraduationCap,
  ArrowRight,
} from "lucide-react"
import { Reveal } from "./Reveal"

const SERVICES = [
  {
    icon: MessagesSquare,
    title: "Soft Skills Training",
    desc: "Communication, teamwork, and leadership skills that help you stand out and lead with confidence.",
    tags: "Communication · Teamwork · Leadership",
  },
  {
    icon: Sparkles,
    title: "Life Skills Training",
    desc: "Personal development and decision-making skills to navigate life and work with resilience.",
    tags: "Personal Growth · Decision-Making",
  },
  {
    icon: BrainCircuit,
    title: "NLP Workshops",
    desc: "Neuro-Linguistic Programming across Basic, Practitioner, and Master Practitioner levels.",
    tags: "Basic · Practitioner · Master",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality Training",
    desc: "Customer service excellence and operations training for the hospitality industry.",
    tags: "Customer Service · Operations",
  },
  {
    icon: Headphones,
    title: "BPO Skills Training",
    desc: "Voice, technical, and process skills to launch and grow a career in the BPO sector.",
    tags: "Voice · Technical · Process",
  },
  {
    icon: GraduationCap,
    title: "Institution Programs",
    desc: "College-to-corporate training and career counselling for educational institutions.",
    tags: "College-to-Corporate · Counselling",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Services</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Training programs that build <span className="text-gradient-ember">real-world skills</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              From communication to corporate readiness — practical programs designed for measurable growth.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={0.05 * i}>
              <article className="group relative h-full cursor-default overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_18px_50px_-20px_hsl(24_95%_53%/0.45)]">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-primary">{s.tags}</p>
                <ArrowRight className="absolute right-6 top-7 h-5 w-5 text-muted-foreground/0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
