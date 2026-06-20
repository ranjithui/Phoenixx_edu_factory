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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Who We Serve</p>
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
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">{a.title}</h3>
                <p className="mt-2 grow text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
