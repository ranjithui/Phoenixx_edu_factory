import { Reveal } from "./Reveal"
import { CountUp } from "./CountUp"

const STATS: Array<{ to: number; suffix?: string; label: string }> = [
  { to: 97, suffix: "%", label: "satisfaction" },
  { to: 91, suffix: "%", label: "placement" },
  { to: 6, suffix: "+", label: "programs" },
]

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        {/* centered header */}
        <div className="text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">About Us</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-medium leading-[1.15] text-foreground sm:text-4xl lg:text-5xl">
              "We don't teach skills.
              <br />
              We engineer transformation."
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Like the phoenix, we believe in renewal. Phoenixx Edu Factory partners with students,
              professionals, institutions, and communities to build the skills, confidence, and
              mindset needed to thrive in the modern workplace.
            </p>
          </Reveal>

          {/* inline stat pill */}
          <Reveal delay={0.15}>
            <div className="mx-auto mt-10 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full border border-border bg-card px-6 py-3 shadow-sm sm:gap-x-8 sm:px-8">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-x-6 sm:gap-x-8">
                  {i > 0 && <span className="h-5 w-px bg-border" />}
                  <p className="text-sm sm:text-base">
                    <span className="font-bold text-primary">
                      <CountUp to={s.to} suffix={s.suffix} />
                    </span>{" "}
                    <span className="text-muted-foreground">{s.label}</span>
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
