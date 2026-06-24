import { useState } from "react"
import {
  GraduationCap,
  HeartPulse,
  UtensilsCrossed,
  Code2,
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

// Problem-solution training content per industry.
const INDUSTRIES: Industry[] = [
  {
    icon: GraduationCap,
    label: "Education",
    blurb:
      "Institutions produce knowledge — but graduates often leave without the communication, confidence, or career skills employers demand on day one. We close the gap between academic learning and professional readiness, for faculty and students alike.",
    trainings: [
      { title: "Faculty Development", desc: "Equip educators to teach the skills employers actually look for." },
      { title: "Campus-to-Corporate", desc: "Build career readiness and interview confidence before students graduate." },
      { title: "Student Life Skills", desc: "Help students handle pressure, lead, and grow with confidence." },
      { title: "Career Counselling", desc: "Help students find direction and the right career path." },
    ],
  },
  {
    icon: HeartPulse,
    label: "Healthcare",
    blurb:
      "Healthcare professionals are trained in clinical skills — but patient communication, empathy under pressure, and team coordination are often left to chance, costing trust and outcomes. We train teams in the interpersonal skills that build high-functioning clinical environments.",
    trainings: [
      { title: "Patient Communication", desc: "Deliver information clearly and respond to anxiety with empathy." },
      { title: "Stress & Resilience", desc: "Help staff perform under pressure without burning out." },
      { title: "Team Coordination", desc: "Improve coordination and accountability across clinical and admin teams." },
      { title: "Healthcare Leadership", desc: "Build communication and team-motivation skills for healthcare managers." },
    ],
  },
  {
    icon: UtensilsCrossed,
    label: "Hospitality",
    blurb:
      "Hospitality businesses invest heavily in decor, food, and technology — but the guest experience often falls apart at the human level, where inconsistent service destroys reputation. We train teams to make every guest interaction exceptional, not just adequate.",
    trainings: [
      { title: "Guest Experience Excellence", desc: "Build the mindset that creates memorable, five-star guest stays." },
      { title: "Service Recovery", desc: "Turn a bad experience into a loyalty-building moment." },
      { title: "Communication & Presentation", desc: "Align how your team looks, speaks, and presents." },
      { title: "Hospitality Leadership", desc: "Build team-management skills that high-performing venues require." },
    ],
  },
  {
    icon: Code2,
    label: "IT",
    blurb:
      "IT professionals are technically brilliant — but communication gaps, poor stakeholder management, and underdeveloped leadership hold teams back from delivering their full value. We help IT teams make technical excellence visible to the business.",
    trainings: [
      { title: "Technical Communication", desc: "Translate technical thinking into clear, persuasive language for anyone." },
      { title: "Stakeholder Management", desc: "Keep projects aligned and clients confident through communication." },
      { title: "Agile Team Communication", desc: "Strengthen sprint communication and cross-functional alignment." },
      { title: "Leadership for Tech Leads", desc: "Turn strong engineers into effective, confident team leaders." },
    ],
  },
  {
    icon: Headset,
    label: "BPO",
    blurb:
      "BPO employers need agents who are confident, articulate, and process-literate from day one — but most freshers arrive with qualifications and no industry-ready skills. We train candidates and teams in exactly what employers need, before they walk through the door.",
    trainings: [
      { title: "Voice & Accent", desc: "Build speech clarity, consistency, and professional tone." },
      { title: "BPO Process & Etiquette", desc: "Make new agents operationally ready from day one." },
      { title: "Customer Handling & De-escalation", desc: "Help agents stay calm and de-escalate difficult calls." },
      { title: "Team Leader Development", desc: "Build coaching and performance skills for floor leaders." },
    ],
  },
  {
    icon: Store,
    label: "Retail",
    blurb:
      "Retail businesses invest in product range, store design, and pricing — but lose sales every day because floor staff can't connect with customers, handle objections, or close confidently. We train teams to sell with confidence and serve with warmth.",
    trainings: [
      { title: "Sales Floor Communication", desc: "Open conversations and guide customers to confident purchases." },
      { title: "Customer Experience", desc: "Turn first-time shoppers into loyal, returning customers." },
      { title: "Objection Handling & Closing", desc: "Give your team the technique to convert hesitation." },
      { title: "Retail Leadership", desc: "Turn store managers into motivating, effective team leaders." },
    ],
  },
  {
    icon: Factory,
    label: "Manufacturing",
    blurb:
      "Manufacturing demands precision, safety, and teamwork — but communication breakdowns, leadership gaps, and low morale quietly erode efficiency, safety, and output. We train teams and supervisors in the skills that keep operations running safely and smoothly.",
    trainings: [
      { title: "Safety Communication", desc: "Embed a speak-up culture where workers flag issues early." },
      { title: "Supervisor Leadership", desc: "Build coaching and people skills for production supervisors." },
      { title: "Team Communication & Coordination", desc: "Keep production moving with clear, accountable handoffs." },
      { title: "Productivity & Work Ethic", desc: "Rebuild accountability and the mindset that drives output." },
    ],
  },
  {
    icon: Landmark,
    label: "Banking",
    blurb:
      "Banking professionals are trusted with people's financial futures — but relationship skills, communication confidence, and ethical selling are rarely trained to the level customer trust and regulation demand. We train teams to build trust, improve service, and sell ethically.",
    trainings: [
      { title: "Customer Relationship Management", desc: "Build listening and empathy skills that retain customers." },
      { title: "Ethical Sales & Product Communication", desc: "Match the right product to the right customer, honestly." },
      { title: "Complaint Handling & Service Recovery", desc: "Resolve issues quickly while leaving customers feeling heard." },
      { title: "Leadership for Branch Managers", desc: "Build coaching and performance skills branches need." },
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
