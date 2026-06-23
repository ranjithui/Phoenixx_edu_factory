import { useState } from "react"
import {
  GraduationCap,
  HeartPulse,
  UtensilsCrossed,
  Headset,
  Store,
  Factory,
  Landmark,
  ChevronRight,
  Check,
  type LucideIcon,
} from "lucide-react"
import { Reveal } from "./Reveal"

type Industry = {
  icon: LucideIcon
  label: string
  blurb: string
  trainings: { title: string; desc: string }[]
}

// Dummy training content per industry — swap copy as needed.
const INDUSTRIES: Industry[] = [
  {
    icon: GraduationCap,
    label: "Education",
    blurb: "Equipping campuses and faculty to bridge the gap between learning and the workplace.",
    trainings: [
      { title: "Faculty Development", desc: "Modern pedagogy and classroom communication skills." },
      { title: "Campus-to-Corporate", desc: "Employability, resume, and interview readiness for students." },
      { title: "Student Life Skills", desc: "Confidence, focus, and goal-setting workshops." },
      { title: "Career Counselling", desc: "Guided pathways from college to first job." },
    ],
  },
  {
    icon: HeartPulse,
    label: "Healthcare",
    blurb: "People-first training for clinical and support staff who care under pressure.",
    trainings: [
      { title: "Patient Communication", desc: "Empathy and bedside soft skills for care teams." },
      { title: "Front-desk Etiquette", desc: "Professional handling of patients and queries." },
      { title: "Stress & Resilience", desc: "Burnout management for caregivers and nurses." },
      { title: "Team Coordination", desc: "Smooth handovers across departments and shifts." },
    ],
  },
  {
    icon: UtensilsCrossed,
    label: "Hospitality",
    blurb: "Service-excellence programs that turn guests into loyal advocates.",
    trainings: [
      { title: "Guest Service Excellence", desc: "Five-star service standards and etiquette." },
      { title: "Front Office Operations", desc: "Check-in, upselling, and complaint handling." },
      { title: "Grooming & Presence", desc: "Professional image and confident body language." },
      { title: "Team Coordination", desc: "Cross-department service flow and speed." },
    ],
  },
  {
    icon: Headset,
    label: "IT & BPO",
    blurb: "Communication and process skills for global, client-facing teams.",
    trainings: [
      { title: "Voice & Accent", desc: "Clear, neutral communication for global clients." },
      { title: "Customer Handling", desc: "De-escalation and call-quality skills." },
      { title: "Email & Chat Etiquette", desc: "Crisp, professional written communication." },
      { title: "Process Readiness", desc: "Productivity and quality-first work habits." },
    ],
  },
  {
    icon: Store,
    label: "Retail",
    blurb: "Floor-ready selling and service skills that lift conversion and loyalty.",
    trainings: [
      { title: "Sales Conversion", desc: "Consultative selling on the shop floor." },
      { title: "Customer Delight", desc: "Greeting, assisting, and loyalty building." },
      { title: "Product Storytelling", desc: "Confident, benefit-led product pitches." },
      { title: "Complaint Handling", desc: "Turning frustrated buyers into repeat ones." },
    ],
  },
  {
    icon: Factory,
    label: "Manufacturing",
    blurb: "Frontline leadership and communication for safer, sharper shop floors.",
    trainings: [
      { title: "Shop-floor Communication", desc: "Clear instructions and safety briefings." },
      { title: "Supervisor Leadership", desc: "People management for line leads." },
      { title: "Teamwork & Discipline", desc: "Collaboration and ownership culture." },
      { title: "Problem-solving", desc: "Practical, on-the-line decision making." },
    ],
  },
  {
    icon: Landmark,
    label: "Banking",
    blurb: "Trust-building and compliant communication for customer-facing finance roles.",
    trainings: [
      { title: "Customer Relationship", desc: "Trust-based client servicing skills." },
      { title: "Compliance Etiquette", desc: "Professional, compliant communication." },
      { title: "Cross-sell Confidence", desc: "Pitching products with clarity and ethics." },
      { title: "Branch Leadership", desc: "Coaching and motivating front-line teams." },
    ],
  },
]

export function IndustriesWeServe() {
  const [active, setActive] = useState(0)
  const current = INDUSTRIES[active]
  const ActiveIcon = current.icon

  return (
    <section aria-label="Industries we serve" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow-line text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Industries We Serve
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Training that fits <span className="text-gradient-ember">every sector</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Hover an industry to see the programs we deliver for it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {/* ───────── industry selector ───────── */}
            <div className="lg:col-span-4">
              {/* mobile: horizontal scroll row · desktop: vertical list */}
              <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
                {INDUSTRIES.map((ind, i) => {
                  const Icon = ind.icon
                  const isActive = active === i
                  return (
                    <button
                      key={ind.label}
                      type="button"
                      aria-pressed={isActive}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary lg:w-full ${
                        isActive
                          ? "border-primary/50 bg-primary/10 shadow-sm"
                          : "border-border bg-card hover:border-primary/30"
                      }`}
                    >
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors duration-200 ${
                          isActive ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="whitespace-nowrap text-sm font-semibold text-foreground">{ind.label}</span>
                      <ChevronRight
                        className={`ml-auto hidden h-4 w-4 transition-all duration-200 lg:block ${
                          isActive ? "text-primary opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-60"
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* ───────── detail panel ───────── */}
            <div className="lg:col-span-8">
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
                {/* re-keyed so the content re-animates on change */}
                <div key={active} className="animate-fade-up">
                  <div className="flex items-start gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <ActiveIcon className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold text-card-foreground">{current.label}</h3>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">{current.blurb}</p>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {current.trainings.map((t) => (
                      <div
                        key={t.title}
                        className="flex gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
                      >
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-card-foreground">{t.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
