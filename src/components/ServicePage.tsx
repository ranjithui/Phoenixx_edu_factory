import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { getService, SERVICES } from "../data/services"
import { Reveal } from "./Reveal"
import { SectionLink } from "./SectionLink"

export function ServicePage() {
  const { slug } = useParams()
  const service = getService(slug)

  // Unknown slug → simple not-found with a way back.
  if (!service) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">Service not found</h1>
        <p className="mt-3 text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </main>
    )
  }

  const Icon = service.icon
  const others = SERVICES.filter((s) => s.slug !== service.slug)

  return (
    <main>
      {/* ───────── banner ───────── */}
      <section className="relative overflow-hidden pt-20">
        <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
        <span className="absolute inset-0" style={{ background: service.bg, opacity: 0.88 }} />
        <span className="absolute inset-0 bg-black/30" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <span>/</span>
            <SectionLink hash="#services" className="transition-colors hover:text-white">Services</SectionLink>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>

          <div className="mt-8 flex max-w-3xl flex-col items-start">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur">
              <Icon className="h-8 w-8" />
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{service.title}</h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/80">{service.tags}</p>
          </div>
        </div>
      </section>

      {/* ───────── content ───────── */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* main column */}
            <div className="lg:col-span-8">
              <Reveal>
                <p className="text-lg leading-relaxed text-foreground">{service.intro}</p>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="mt-12 text-2xl font-semibold text-foreground">What this program covers</h2>
              </Reveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.highlights.map((h, i) => (
                  <Reveal key={h.title} delay={0.05 * i}>
                    <div className="h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                      <h3 className="text-base font-semibold text-card-foreground">{h.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.05}>
                <h2 className="mt-12 text-2xl font-semibold text-foreground">What you'll walk away with</h2>
              </Reveal>
              <ul className="mt-6 space-y-3">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-base text-foreground">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Who it's for</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.audience}</p>

                <SectionLink
                  hash="#contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                >
                  Enquire about this program <ArrowRight className="h-4 w-4" />
                </SectionLink>

                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Other programs</h3>
                  <ul className="mt-3 space-y-1.5">
                    {others.map((s) => {
                      const OtherIcon = s.icon
                      return (
                        <li key={s.slug}>
                          <Link
                            to={`/services/${s.slug}`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            <OtherIcon className="h-4 w-4 text-primary" />
                            {s.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
