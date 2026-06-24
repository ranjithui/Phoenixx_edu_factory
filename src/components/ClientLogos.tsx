import { Hexagon, Aperture, Box, Gem, Orbit, Shapes } from "lucide-react"
import { Reveal } from "./Reveal"

/**
 * Placeholder client/partner logos.
 * TODO: replace each entry with a real logo — swap the <Icon/> + name block for
 * an <img src={...} alt="Brand" className="h-8 w-auto" /> (drop files in
 * src/assets/ and import them, or use /public paths).
 */
const LOGOS = [
  { name: "TeaserTech", icon: Hexagon },
  { name: "Brightpath", icon: Aperture },
  { name: "Vertas", icon: Box },
  { name: "Lumina", icon: Gem },
  { name: "Drait Labs", icon: Orbit },
  { name: "Santhii", icon: Shapes },
]

export function ClientLogos() {
  return (
    <section aria-label="Our partners" className="border-y border-border bg-background py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by institutions &amp; organizations
          </p>
          <p className="mt-2 text-center text-sm text-muted-foreground/80">
            Because results speak louder than promises.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          {/* seamless auto-scrolling marquee — duplicated list loops on -50%
              translate; pauses on hover. Edges fade out via the mask. */}
          <div
            className="mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          >
            <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
              {[...LOGOS, ...LOGOS].map((l, i) => {
                const Icon = l.icon
                return (
                  <div
                    key={i}
                    className="flex shrink-0 items-center justify-center gap-2 px-10 text-muted-foreground/60 grayscale transition-all duration-300 hover:scale-105 hover:text-primary hover:grayscale-0"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-lg font-semibold tracking-tight">{l.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
