import { useEffect, useRef, useState } from "react"
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Users,
  Activity,
  Headphones,
} from "lucide-react"
import heroSeminar from "../assets/hero-seminar1.jpg"

// Final values the cards count up to.
const TARGETS = { score: 89, completion: 92, satisfaction: 4.9, placement: 88 }

// Right-hand "course modules" card — each bar fills as the section scrolls in.
const MODULES = [
  { icon: MessageSquare, title: "Communication", level: "Soft Skills", pct: 100 },
  { icon: Users, title: "Leadership", level: "Practitioner", pct: 96 },
  { icon: Activity, title: "Resilience", level: "Life Skills", pct: 92 },
  { icon: Headphones, title: "Service Skills", level: "Hospitality", pct: 88 },
]

// Hero pain points — shown as a two-column grid under the intro line.
const PAIN_POINTS = [
  "Nerves before every presentation",
  "Interviews that go nowhere",
  "The promotion that keeps waiting",
  "The career plateau that won't break",
]

export function HeroSection() {
  const mediaRef = useRef<HTMLDivElement | null>(null)
  const [vals, setVals] = useState({ score: 0, completion: 0, satisfaction: 0, placement: 0 })

  // Count-up + bar-fill animation, triggered once the media scrolls into view.
  useEffect(() => {
    const el = mediaRef.current
    if (!el) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setVals({ ...TARGETS })
      return
    }

    let raf = 0
    let started = false
    const DUR = 1800

    const animate = (t0: number) => {
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / DUR)
        const e = 1 - Math.pow(1 - p, 3) // easeOutCubic
        setVals({
          score: TARGETS.score * e,
          completion: TARGETS.completion * e,
          satisfaction: TARGETS.satisfaction * e,
          placement: TARGETS.placement * e,
        })
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true
          raf = requestAnimationFrame(animate)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  // Full-circle progress ring geometry for the top-left card.
  const RING_C = 2 * Math.PI * 40
  const ringOffset = RING_C * (1 - vals.completion / 100)
  // 0→1 eased progress, reused to fill the module bars in sync with the ring.
  const ease = TARGETS.completion ? vals.completion / TARGETS.completion : 1

  return (
    <section id="home" className="relative overflow-hidden bg-background">
      {/* soft brand glow behind the media — keeps the clean split look */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-32">
        {/* ───────── LEFT — content ───────── */}
        <div className="flex animate-fade-up flex-col justify-center opacity-0">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground">
            Phoenixx Edu
            <Sparkles className="h-4 w-4 text-primary" />
          </span>

          <h1 className="mt-7 font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-foreground">
            Struggling With Skills, Confidence, or Career Growth?
            <br />
            <span className="text-gradient-ember">Over 1,000 People Already Broke Through.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-foreground sm:text-lg">
            We change behavior — not just fill notebooks. Certified NLP · Soft Skills · Career
            Workshops ·
          </p>

          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
            You already know what's holding you back —
          </p>

          {/* pain points — two-column grid, orange dot before each */}
          <div className="mt-3 grid max-w-xl grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {PAIN_POINTS.map((point) => (
              <div key={point} className="flex items-center text-sm text-foreground/80">
                <span className="mr-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {point}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 active:scale-[0.97]"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/919342721163?text=Hi%20Phoenixx%20Edu%2C%20I%27d%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 active:scale-[0.97]"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </span>
              Connect with us
            </a>
          </div>
        </div>

        {/* ───────── RIGHT — media + floating cards ───────── */}
        <div
          ref={mediaRef}
          className="relative animate-fade-up opacity-0 lg:pl-6"
          style={{ animationDelay: "0.15s" }}
        >
          {/* main media — HD seminar photo */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-2xl">
            <img
              src={heroSeminar}
              alt="Phoenixx Edu training seminar in session"
              className="h-full min-h-[24rem] w-full object-cover lg:min-h-[32rem]"
            />
          </div>

          {/* stats cards — stacked below image on mobile, floating over it on desktop */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0 lg:block">
          {/* floating card — circular progress, top-left */}
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xl lg:absolute lg:-left-6 lg:top-6 lg:w-44">
            <div className="relative mx-auto h-24 w-24">
              <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--border))" strokeWidth="9" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray={RING_C}
                  strokeDashoffset={ringOffset}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-card-foreground">{Math.round(vals.completion)}%</span>
              </div>
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-card-foreground">Completion Rate</p>
            <p className="text-center text-xs text-muted-foreground">Phoenixx Programs</p>
          </div>

          {/* floating card — module list with progress bars, bottom-right */}
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xl lg:absolute lg:-right-6 lg:bottom-6 lg:w-60">
            <div className="space-y-3">
              {MODULES.map((m) => {
                const Icon = m.icon
                const w = Math.round(m.pct * ease)
                return (
                  <div key={m.title} className="flex items-center gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="truncate text-xs font-semibold text-card-foreground">{m.title}</p>
                        <span className="text-[10px] font-medium text-muted-foreground">{w}%</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">{m.level}</p>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-border">
                        <div className="h-full rounded-full bg-primary transition-[width] duration-300" style={{ width: `${w}%` }} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
