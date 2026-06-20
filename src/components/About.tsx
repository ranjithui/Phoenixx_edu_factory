import { Eye, Target, ShieldCheck, Users } from "lucide-react"
import { Reveal } from "./Reveal"

const PILLARS = [
  { icon: Eye, title: "Our Vision", text: "To be a catalyst for individual and organizational excellence, making quality skills training accessible to all." },
  { icon: Target, title: "Our Mission", text: "To deliver practical, outcome-driven training that bridges the gap between education and employability." },
  { icon: ShieldCheck, title: "Our Values", text: "Integrity, inclusivity, and impact — we measure success by the careers we help transform." },
  { icon: Users, title: "Leadership", text: "Guided by experienced trainers and coaches passionate about people development." },
]

const STATS = [
  { value: "6+", label: "Training Programs" },
  { value: "3", label: "NLP Certification Levels" },
  { value: "100%", label: "Practical, Hands-on" },
  { value: "1:1", label: "Career Counselling" },
]

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                A training institute built for transformation
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Like the phoenix, we believe in renewal and rising higher. Phoenixx Edu Factory partners
                with students, professionals, institutions, and communities to build the skills,
                confidence, and mindset needed to thrive in the modern workplace.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={0.05 * i}>
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <p className="text-3xl font-bold text-gradient-ember">{s.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-card-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
