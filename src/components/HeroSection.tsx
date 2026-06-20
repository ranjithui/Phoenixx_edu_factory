import { AnimatedBackground } from "./AnimatedBackground"
import { EmberField } from "./EmberField"

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden bg-hero-bg">
      {/* Local animated background — branded wash + drifting embers.
          Replaces the heavy 2 MB remote Spline scene; pauses when off-screen. */}
      <div className="absolute inset-0">
        <AnimatedBackground />
        <EmberField className="absolute inset-0 h-full w-full" />
      </div>

      {/* dark scrim for text legibility */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* content (bottom-left) */}
      <div className="pointer-events-none relative z-10 w-full max-w-[90%] px-6 pb-12 pt-32 sm:max-w-md md:px-12 lg:max-w-2xl lg:pb-16">
        <span
          className="mb-5 inline-flex animate-fade-up items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-primary opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Soft Skills · Life Skills · NLP
        </span>

        <h1
          className="mb-2 animate-fade-up text-[clamp(2.75rem,8vw,6rem)] font-bold uppercase leading-[1.05] tracking-[-0.04em] text-white opacity-0 md:mb-4"
          style={{ animationDelay: "0.2s" }}
        >
          Phoenixx <span className="text-primary">Edu</span>
        </h1>

        <p
          className="mb-3 animate-fade-up text-[clamp(1.125rem,2.5vw,1.875rem)] font-light text-white/85 opacity-0 md:mb-6"
          style={{ animationDelay: "0.4s" }}
        >
          Rise. Learn. Excel.
        </p>

        <p
          className="mb-4 animate-fade-up text-[clamp(0.9rem,1.5vw,1.25rem)] font-light text-white/65 opacity-0 md:mb-8"
          style={{ animationDelay: "0.55s" }}
        >
          A corporate training institute building real-world skills — soft skills, life skills,
          and NLP workshops that turn potential into performance. Practical, people-first
          training for students, professionals, and organizations.
        </p>

        <div
          className="flex animate-fade-up flex-wrap gap-3 font-semibold opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          <button
            onClick={() => (window.location.href = "#contact")}
            className="pointer-events-auto cursor-pointer rounded-md bg-primary px-6 py-3 text-sm text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97] md:px-8 md:py-4"
          >
            Book a Free Demo
          </button>
          <button
            onClick={() => (window.location.href = "#services")}
            className="pointer-events-auto cursor-pointer rounded-md bg-white px-6 py-3 text-sm text-zinc-900 transition-all hover:brightness-90 active:scale-[0.97] md:px-8 md:py-4"
          >
            Explore Programs
          </button>
        </div>

        <p
          className="mt-4 animate-fade-up text-xs font-light text-white/45 opacity-0 md:mt-6"
          style={{ animationDelay: "0.85s" }}
        >
          Trusted training partner · Coimbatore · 6+ programs delivered
        </p>
      </div>
    </section>
  )
}
