import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Reveal } from "./Reveal"
import { SERVICES } from "../data/services"

export function Services() {
  // Which panel is expanded. Hover sets it on desktop; tap/focus sets it on touch.
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow-line text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Services</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Find the program that solves your <span className="text-gradient-ember">specific challenge</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Every program at Phoenixx Edu Factory is built around a real problem that real people face. Find yours below.
            </p>
          </Reveal>
        </div>

        {/* Expanding accordion — hover on desktop, tap on touch, to expand a panel. */}
        <Reveal delay={0.15}>
          <div className="mt-16 flex h-[26rem] gap-2 sm:h-[28rem] lg:h-[30rem]">
            {SERVICES.map((s, i) => {
              const Icon = s.icon
              const isActive = active === i
              return (
                <Link
                  key={s.title}
                  to={`/services/${s.slug}`}
                  aria-label={`${s.title} — view program`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border text-left outline-none transition-[flex-grow] duration-500 ease-in-out focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ flexGrow: isActive ? 5 : 1, flexBasis: 0 }}
                >
                  {/* background gradient (swap for a photo later via <img>) */}
                  <span className="absolute inset-0" style={{ background: s.bg }} />
                  {/* darkening overlay — lifts on expand so the active panel reads brighter */}
                  <span
                    className={`absolute inset-0 transition-colors duration-500 ${
                      isActive ? "bg-black/30" : "bg-black/55"
                    }`}
                  />
                  {/* oversized watermark icon */}
                  <Icon className="absolute -right-3 top-4 h-24 w-24 text-white/10" />

                  {/* collapsed: vertical label, bottom-to-top */}
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-white [writing-mode:vertical-rl] [transform:rotate(180deg)]">
                      {s.title}
                    </span>
                  </span>

                  {/* expanded: full content, anchored bottom-left, fixed width so it
                      doesn't reflow while the panel animates */}
                  <div
                    className={`absolute bottom-0 left-0 flex w-[22rem] max-w-full flex-col items-start p-6 transition-opacity duration-300 sm:p-7 ${
                      isActive ? "opacity-100 delay-150" : "opacity-0"
                    }`}
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-white backdrop-blur">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{s.desc}</p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wider text-white/70">{s.tags}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all group-hover:gap-2.5">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
