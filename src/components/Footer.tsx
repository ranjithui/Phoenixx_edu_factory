import { PhoenixMark } from "./Logo"

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V8h3v11ZM6.5 6.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM19 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.6-1.7 1.3-.1.2-.1.5-.1.8V19h-3V8h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.5 1.3 3.5 4.1V19Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.7 3.7 0 0 1-1.4-.9 3.7 3.7 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.1 3.3c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-3.3s0-2.1-.1-3.3c-.1-1.1-.2-1.7-.4-2.1a3.3 3.3 0 0 0-.8-1.3 3.3 3.3 0 0 0-1.3-.8c-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm6.3-8.2a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0Z",
  },
  {
    label: "X",
    href: "#",
    path: "M18.2 2h3.3l-7.2 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.7-8.8L1.7 2h6.8l4.7 6.2L18.2 2Zm-1.2 18h1.8L7.1 3.9H5.2L17 20Z",
  },
]

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "NLP Workshops", href: "#nlp" },
  { label: "About", href: "#about" },
  { label: "Who We Serve", href: "#audience" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-secondary">
                <PhoenixMark className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold text-foreground">Phoenixx Edu Factory</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A corporate training institute dedicated to fostering professional growth and
              organizational excellence.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground transition-colors hover:text-primary">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Get in Touch</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="tel:+919342721163" className="text-muted-foreground transition-colors hover:text-primary">+91 93427 21163</a></li>
              <li><a href="mailto:hr@phoenixxedu.com" className="text-muted-foreground transition-colors hover:text-primary">hr@phoenixxedu.com</a></li>
              <li className="text-muted-foreground">Vadavalli, Coimbatore – 641041</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Phoenixx Edu Factory. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Rise. Learn. Excel.</p>
        </div>
      </div>
    </footer>
  )
}
