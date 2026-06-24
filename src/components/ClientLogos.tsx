import { Reveal } from "./Reveal"

/**
 * Client / partner logos.
 *
 * Drop logo image files into  src/assets/clientlogo/  named  client1, client2, …
 * ANY image format works (png, jpg, jpeg, svg, webp, gif, avif). They are picked
 * up automatically — no imports to edit — and shown in numeric order.
 */
const modules = import.meta.glob("../assets/clientlogo/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>

// natural sort by the number in the filename (client1 < client2 < … < client10)
const numberIn = (path: string) => parseInt(path.match(/(\d+)/)?.[1] ?? "0", 10)
// only treat image files as logos (ignore stray README/other files)
const IMAGE_RE = /\.(png|jpe?g|jfif|pjpeg|pjp|svg|webp|gif|avif|bmp|ico)$/i

const LOGOS = Object.entries(modules)
  .filter(([path]) => IMAGE_RE.test(path))
  .sort(([a], [b]) => numberIn(a) - numberIn(b))
  .map(([path, src]) => {
    const name = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "Client logo"
    return { src, name }
  })

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

        {LOGOS.length > 0 && (
          <Reveal delay={0.05}>
            {/* seamless auto-scrolling marquee — duplicated list loops on -50%
                translate; pauses on hover. Edges fade out via the mask. */}
            <div className="mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
                {[...LOGOS, ...LOGOS].map((l, i) => (
                  <div key={i} className="flex shrink-0 items-center justify-center px-10">
                    <img
                      src={l.src}
                      alt={l.name}
                      loading="lazy"
                      className="h-10 w-auto object-contain opacity-70 transition-all duration-300 hover:scale-105 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
