import { Star } from "lucide-react"
import { Reveal } from "./Reveal"

const TESTIMONIALS = [
  {
    problem: "Rejected at every final interview despite being qualified.",
    quote:
      "Before the soft skills program, I was rejected at every final interview. Within three weeks of completing the workshop, I cleared two interviews and got my first job offer.",
    name: "Arun K.",
    role: "Fresh Graduate",
    initials: "AK",
  },
  {
    problem: "Stuck in the same role for two years, unable to break into a team lead position.",
    quote:
      "I had been trying to move into a team lead role for two years. After the NLP Practitioner workshop, my manager noticed the change immediately. I got promoted within six weeks.",
    name: "Priya K.",
    role: "BPO Professional",
    initials: "PK",
  },
  {
    problem: "Placement rates plateaued for three years despite strong academic results.",
    quote:
      "Our placement rates had plateaued for three years. After partnering with Phoenixx Edu Factory, we saw a 22% improvement in placement outcomes in one academic year.",
    name: "Dr. Suresh M.",
    role: "Principal",
    initials: "SM",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow-line text-xs font-semibold uppercase tracking-[0.2em] text-primary">Stories of Growth</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Real people. Real problems. Real results.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              These aren't success stories that happened by accident. They're what happens when the
              right training meets the right moment.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.06 * i}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_45px_-22px_hsl(24_95%_53%/0.4)]">
                <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                  The problem they came with
                </p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-card-foreground">{t.problem}</p>
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
