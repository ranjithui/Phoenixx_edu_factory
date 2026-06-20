import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import { Reveal } from "./Reveal"
import { cn } from "@/lib/utils"

const LEVELS = [
  {
    id: "basic",
    label: "Basic",
    tagline: "Foundations of NLP",
    blurb:
      "Discover how language and thought shape behavior. Build self-awareness, rapport, and goal-setting fundamentals.",
    outcomes: ["Core NLP presuppositions", "Building rapport instantly", "Outcome & goal framing", "Anchoring positive states"],
    duration: "2 days",
  },
  {
    id: "practitioner",
    label: "Practitioner",
    tagline: "Apply NLP in practice",
    blurb:
      "Master practical techniques for communication, influence, and change work you can use with clients and teams.",
    outcomes: ["Meta & Milton language models", "Reframing & belief change", "Submodalities & strategies", "Coaching with NLP"],
    duration: "5 days",
  },
  {
    id: "master",
    label: "Master Practitioner",
    tagline: "Advanced mastery",
    blurb:
      "Go deep into modelling excellence, advanced patterns, and the mindset to train and transform others.",
    outcomes: ["Modelling excellence", "Advanced timeline techniques", "Values & meta-programs", "Designing interventions"],
    duration: "7 days",
  },
]

export function NLPLevels() {
  const [active, setActive] = useState(1)
  const level = LEVELS[active]

  return (
    <section id="nlp" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">NLP Workshops</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Three levels. One transformation.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Progress from foundations to mastery. Select a level to explore what you'll learn.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          {/* level selector */}
          <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-background p-2">
            {LEVELS.map((l, i) => (
              <button
                key={l.id}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={cn(
                  "flex-1 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active === i
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* detail panel */}
          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid gap-px sm:grid-cols-5">
              <div className="bg-card p-8 sm:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {level.tagline}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{level.duration}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-card-foreground">
                  NLP {level.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{level.blurb}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  Enquire about this level <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <ul className="space-y-3 bg-secondary/40 p-8 sm:col-span-2">
                {level.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-card-foreground">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
