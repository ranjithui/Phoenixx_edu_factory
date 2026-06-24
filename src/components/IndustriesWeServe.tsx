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
      { title: "Faculty Development", desc: "Workshops that improve teaching delivery, student engagement, and the transfer of real-world professional skills inside the classroom." },
      { title: "Campus-to-Corporate", desc: "End-to-end campus programs that build career readiness, professional communication, and interview confidence before students graduate." },
      { title: "Student Life Skills", desc: "Practical workshops that equip students to handle pressure, lead effectively, and grow with confidence after graduation." },
      { title: "Career Counselling", desc: "Structured counselling that helps students identify strengths, map a clear direction, and move into the right role with purpose." },
    ],
  },
  {
    icon: HeartPulse,
    label: "Healthcare",
    blurb:
      "Healthcare professionals are trained in clinical skills — but patient communication, empathy under pressure, and team coordination are often left to chance, costing trust and outcomes. We train teams in the interpersonal skills that build high-functioning clinical environments.",
    trainings: [
      { title: "Patient Communication", desc: "Workshops that help staff deliver information clearly, respond to anxiety with empathy, and make every patient feel cared for." },
      { title: "Stress & Resilience", desc: "Practical resilience and stress-management tools that help professionals perform consistently under pressure without burning out." },
      { title: "Team Coordination", desc: "Communication workshops that improve coordination, accountability, and collaboration across clinical and administrative teams." },
      { title: "Healthcare Leadership", desc: "Leadership programs for healthcare managers — communication, delegation, conflict resolution, and team motivation." },
    ],
  },
  {
    icon: UtensilsCrossed,
    label: "Hospitality",
    blurb:
      "Hospitality businesses invest heavily in decor, food, and technology — but the guest experience often falls apart at the human level, where inconsistent service destroys reputation. We train teams to make every guest interaction exceptional, not just adequate.",
    trainings: [
      { title: "Guest Experience Excellence", desc: "Workshops that build the customer mindset and professional standards that create memorable stays and five-star reviews." },
      { title: "Service Recovery", desc: "Training that gives staff the tools, language, and confidence to turn a bad experience into a loyalty-building moment." },
      { title: "Communication & Presentation", desc: "Communication and grooming workshops that align how your team looks, speaks, and presents with your brand's promise." },
      { title: "Hospitality Leadership", desc: "Leadership programs that build the team-management and service-leadership skills high-performing venues require." },
    ],
  },
  {
    icon: Code2,
    label: "IT",
    blurb:
      "IT professionals are technically brilliant — but communication gaps, poor stakeholder management, and underdeveloped leadership hold teams back from delivering their full value. We help IT teams make technical excellence visible to the business.",
    trainings: [
      { title: "Technical Communication", desc: "Workshops that teach IT professionals to translate technical thinking into clear, credible, persuasive language for any audience." },
      { title: "Stakeholder Management", desc: "Training that builds the relationship, expectation-setting, and presentation skills that keep projects aligned and clients confident." },
      { title: "Agile Team Communication", desc: "Workshops that strengthen sprint communication, retrospective quality, and cross-functional alignment." },
      { title: "Leadership for Tech Leads", desc: "Programs that turn individual contributors into effective team leaders — people management, communication, and decision-making." },
    ],
  },
  {
    icon: Headset,
    label: "BPO",
    blurb:
      "BPO employers need agents who are confident, articulate, and process-literate from day one — but most freshers arrive with qualifications and no industry-ready skills. We train candidates and teams in exactly what employers need, before they walk through the door.",
    trainings: [
      { title: "Voice & Accent", desc: "Training that builds speech clarity, pronunciation consistency, and professional tone — closing the gap between potential and placement." },
      { title: "BPO Process & Etiquette", desc: "Process and professional-etiquette training that makes new agents operationally ready and confident from their first shift." },
      { title: "Customer Handling & De-escalation", desc: "Workshops that teach agents to listen actively, respond calmly, and de-escalate conflict without losing the customer or the call." },
      { title: "Team Leader Development", desc: "Programs that build the coaching, performance-management, and communication skills high-performing BPO floors require." },
    ],
  },
  {
    icon: Store,
    label: "Retail",
    blurb:
      "Retail businesses invest in product range, store design, and pricing — but lose sales every day because floor staff can't connect with customers, handle objections, or close confidently. We train teams to sell with confidence and serve with warmth.",
    trainings: [
      { title: "Sales Floor Communication", desc: "Training that teaches staff to open conversations, read buying signals, and guide customers to a confident purchase decision." },
      { title: "Customer Experience", desc: "Workshops that build the attentiveness, empathy, and consistency that turn first-time shoppers into loyal, referring customers." },
      { title: "Objection Handling & Closing", desc: "Skills training that gives your team the language and technique to convert hesitation into decision." },
      { title: "Retail Leadership", desc: "Programs that build the coaching, communication, and motivational skills that turn store managers into genuine team leaders." },
    ],
  },
  {
    icon: Factory,
    label: "Manufacturing",
    blurb:
      "Manufacturing demands precision, safety, and teamwork — but communication breakdowns, leadership gaps, and low morale quietly erode efficiency, safety, and output. We train teams and supervisors in the skills that keep operations running safely and smoothly.",
    trainings: [
      { title: "Safety Communication", desc: "Workshops that embed a speak-up culture — where workers flag issues and supervisors respond without blame." },
      { title: "Supervisor Leadership", desc: "Programs that build the communication, coaching, and people-management skills production floors require." },
      { title: "Team Communication & Coordination", desc: "Workshops that build the clarity, accountability, and structured handoff habits that keep production moving." },
      { title: "Productivity & Work Ethic", desc: "Programs that rebuild accountability habits and the mindset that drives consistent, high-quality output every shift." },
    ],
  },
  {
    icon: Landmark,
    label: "Banking",
    blurb:
      "Banking professionals are trusted with people's financial futures — but relationship skills, communication confidence, and ethical selling are rarely trained to the level customer trust and regulation demand. We train teams to build trust, improve service, and sell ethically.",
    trainings: [
      { title: "Customer Relationship Management", desc: "Training that builds the listening, empathy, and personalisation skills that make banking customers feel valued — and stay." },
      { title: "Ethical Sales & Product Communication", desc: "Workshops that teach staff to match the right product to the right customer — building trust, not just transactions." },
      { title: "Complaint Handling & Service Recovery", desc: "Workshops that give staff the language and process to resolve issues quickly, professionally, and in a way that leaves customers heard." },
      { title: "Leadership for Branch Managers", desc: "Programs that build the coaching, team-communication, and performance-management skills high-performing branches require." },
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
