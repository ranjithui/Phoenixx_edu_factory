import { ArrowRight, Phone } from "lucide-react"
import { Reveal } from "./Reveal"

export function CTASection() {
  return (
    <section className="px-6 pb-24 lg:px-12 lg:pb-32">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-orange-500 to-amber-600 px-8 py-16 text-center shadow-2xl sm:px-12 lg:py-24">
          {/* decorative grid + glows */}
          <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-20" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
              Start your journey
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Ready to rise, learn, and excel?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
              Book a free demo and see how Phoenixx Edu Factory turns potential into measurable
              performance — for students, professionals, and organizations.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
              >
                Book a Free Demo <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+919342721163"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.97]"
              >
                <Phone className="h-4 w-4" /> +91 93427 21163
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
