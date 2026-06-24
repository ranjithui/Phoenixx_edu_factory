import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { Logo } from "./Logo"
import { SectionLink } from "./SectionLink"
import { SERVICES } from "../data/services"
import { cn } from "@/lib/utils"

// Home-section anchors (rendered via SectionLink so they work across pages).
const NAV_LINKS = [
  { label: "About", hash: "#about" },
  { label: "Who We Serve", hash: "#audience" },
  { label: "Contact", hash: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkClass =
    "text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Logo />

        {/* Center links */}
        <div className="hidden items-center gap-8 lg:flex">
          <SectionLink hash="#about" className={linkClass}>About</SectionLink>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(linkClass, "flex items-center gap-1")}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-xl border border-border bg-card/95 p-2 shadow-xl backdrop-blur-md">
                  {SERVICES.map((s) => {
                    const Icon = s.icon
                    return (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-primary" />
                        {s.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          <SectionLink hash="#audience" className={linkClass}>Who We Serve</SectionLink>
          <SectionLink hash="#contact" className={linkClass}>Contact</SectionLink>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <SectionLink hash="#contact" className="hidden lg:inline-flex">
            <Button
              variant="default"
              size="lg"
              className="rounded-lg px-6 text-xs uppercase tracking-widest"
            >
              Get Quotes
            </Button>
          </SectionLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-nav-button text-foreground transition-colors hover:bg-nav-button/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mb-3 max-h-[80vh] overflow-y-auto rounded-xl border border-border bg-card/95 p-2 shadow-lg backdrop-blur-md lg:hidden">
          <SectionLink
            hash="#about"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            About
          </SectionLink>

          {/* Services group */}
          <p className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-primary">Services</p>
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                {s.title}
              </Link>
            )
          })}

          <div className="mt-1 border-t border-border pt-1">
            {NAV_LINKS.filter((l) => l.hash !== "#about").map((l) => (
              <SectionLink
                key={l.hash}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </SectionLink>
            ))}
          </div>

          <SectionLink
            hash="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium uppercase tracking-wider text-primary-foreground"
          >
            Get Quotes
          </SectionLink>
        </div>
      )}
    </header>
  )
}
