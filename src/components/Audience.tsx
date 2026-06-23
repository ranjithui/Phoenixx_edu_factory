import { GraduationCap, Briefcase, Building2, HeartHandshake } from "lucide-react"
import { Reveal } from "./Reveal"

const AUDIENCE = [
  { icon: GraduationCap, title: "Students", text: "Build employability skills and confidence to move from campus to career." },
  { icon: Briefcase, title: "Professionals", text: "Sharpen leadership, communication, and NLP skills to accelerate your growth." },
  { icon: Building2, title: "Institutions", text: "Partner with us for college-to-corporate programs and career counselling." },
  { icon: HeartHandshake, title: "Communities", text: "Inclusive training that uplifts marginalized communities with real opportunity." },
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
