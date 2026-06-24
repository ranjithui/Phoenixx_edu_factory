import { GraduationCap, Briefcase, Building2, HeartHandshake, ArrowRight } from "lucide-react"
import { Reveal } from "./Reveal"

const AUDIENCE = [
  {
    icon: GraduationCap,
    title: "Students",
    text: "Your degree got you this far — but employers want skills your classroom didn't teach. Our student programs close that gap with the communication, career clarity, and professional confidence to own any interview.",
    cta: "Find my program",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    text: "Stuck at the same level while the promotion keeps going to someone else? Our professional programs build the leadership communication, executive presence, and influence that make you impossible to overlook.",
    cta: "Find my program",
  },
  {
    icon: Building2,
    title: "Institutions",
    text: "Placement numbers that don't reflect your students' quality? Our institutional programs bridge academic excellence and employment-ready skills — better placements, stronger reputation, graduates who represent you well.",
    cta: "Partner with us",
  },
  {
    icon: HeartHandshake,
    title: "Communities",
    text: "Most training is built for people who already have access. Our community programs bring practical skills training to neighborhoods, NGOs, and organizations — because opportunity shouldn't be limited by access.",
    cta: "Learn more",
  },
]

export function Audience() {
  return (
    <section id="audience" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow-line text-xs font-semibold uppercase tracking-[0.2em] text-primary">Who We Serve</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Pick the path that fits you
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCE.map((a, i) => (
            <Reveal key={a.title} delay={0.05 * i}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_45px_-22px_hsl(24_95%_53%/0.4)]">
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(120% 80% at 50% 0%, hsl(24 95% 53% / 0.1), transparent 70%)" }}
                />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-4 text-lg font-semibold text-card-foreground">{a.title}</h3>
                <p className="relative mt-2 grow text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                <a
                  href="#contact"
                  className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                >
                  {a.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
