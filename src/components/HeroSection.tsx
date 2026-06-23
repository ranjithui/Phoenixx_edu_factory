import { useEffect, useRef, useState } from "react"
import {
  Sparkles,
  ArrowRight,
  Play,
  X,
  MessageSquare,
  Users,
  Activity,
  Headphones,
  Hexagon,
  Orbit,
  Gem,
  Aperture,
} from "lucide-react"
import heroVideo from "../assets/hero.mp4"
import heroPoster from "../assets/hero-poster.jpg"

// Final values the cards count up to.
const TARGETS = { score: 89, completion: 92, satisfaction: 4.9, placement: 88 }

// Right-hand "course modules" card — each bar fills as the section scrolls in.
const MODULES = [
  { icon: MessageSquare, title: "Communication", level: "Soft Skills", pct: 100 },
  { icon: Users, title: "Leadership", level: "Practitioner", pct: 96 },
  { icon: Activity, title: "Resilience", level: "Life Skills", pct: 92 },
  { icon: Headphones, title: "Service Skills", level: "Hospitality", pct: 88 },
]

// Placeholder partner marks — swap for real logos when available.
const PARTNERS = [
  { name: "NovaTech", icon: Hexagon },
  { name: "Orbit Labs", icon: Orbit },
  { name: "Lumina", icon: Gem },
  { name: "Brightpath", icon: Aperture },
]

export function HeroSection() {
  const mediaRef = useRef<HTMLDivElement | null>(null)
  const [vals, setVals] = useState({ score: 0, completion: 0, satisfaction: 0, placement: 0 })
  const [videoOpen, setVideoOpen] = useState(false)

  // Close the video lightbox on Escape, and lock body scroll while it's open.
  useEffect(() => {
    if (!videoOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false)
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [videoOpen])

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

          <h1 className="mt-7 font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight text-foreground">
            <span className="text-gradient-ember">Build real-world skills</span>
            <br />
            and rise with confidence
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Soft skills, life skills, and workshops delivered with a practical, people-first
            approach — helping students, professionals, and organizations grow with measurable
            results.
          </p>

          {/* partner row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            {PARTNERS.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.name}
                  className="flex items-center gap-2 text-muted-foreground/60 grayscale transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-base font-semibold tracking-tight">{p.name}</span>
                </div>
              )
            })}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all hover:opacity-90 active:scale-[0.97]"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Play className="h-3.5 w-3.5 translate-x-px fill-current" />
              </span>
              Watch video
            </button>
          </div>
        </div>

        {/* ───────── RIGHT — media + floating cards ───────── */}
        <div
          ref={mediaRef}
          className="relative animate-fade-up opacity-0 lg:pl-6"
          style={{ animationDelay: "0.15s" }}
        >
          {/* main media */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-2xl">
            <video
              className="h-full min-h-[24rem] w-full object-cover lg:min-h-[32rem]"
              poster={heroPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            {/* theme-adaptive shade over the video — white in light mode,
                black in dark mode (both derive from --background). A flat 40%
                fade in both modes, plus a soft bottom gradient for depth. */}
            <div className="pointer-events-none absolute inset-0 bg-background/40" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>

          {/* floating card — circular progress, top-left */}
          <div className="absolute -left-3 top-6 w-44 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-left-6">
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
            <p className="text-center text-xs text-muted-foreground">Across programs</p>
          </div>

          {/* floating card — module list with progress bars, bottom-right */}
          <div className="absolute -right-3 bottom-6 w-60 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-right-6">
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

      {/* ───────── video lightbox — full clip with sound + controls ───────── */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-up"
          onClick={() => setVideoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Phoenixx Edu video"
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="aspect-video w-full bg-black"
              poster={heroPoster}
              src={heroVideo}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}
