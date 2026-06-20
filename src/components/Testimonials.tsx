import { Star } from "lucide-react"
import { Reveal } from "./Reveal"

const TESTIMONIALS = [
  {
    quote:
      "The soft skills program completely changed how I present myself in interviews. I landed my first job within a month.",
    name: "Arun R.",
    role: "Fresh Graduate",
    initials: "AR",
  },
  {
    quote:
      "The NLP Practitioner workshop gave our managers practical tools they use every single day. Highly professional team.",
    name: "Priya K.",
    role: "HR Manager",
    initials: "PK",
  },
  {
    quote:
      "Their college-to-corporate program prepared our students for placements better than anything we'd tried before.",
    name: "Dr. Suresh M.",
    role: "College Placement Head",
    initials: "SM",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Stories of Growth</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              What learners say about us
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.06 * i}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 grow text-[15px] italic leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-card-foreground">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
