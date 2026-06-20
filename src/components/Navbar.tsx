import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { Logo } from "./Logo"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "NLP", href: "#nlp" },
  { label: "Who We Serve", href: "#audience" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
        <Logo onDark={!scrolled} />

        {/* Center links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-xs uppercase tracking-widest transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="navCta"
            size="lg"
            className="hidden rounded-lg px-6 text-xs uppercase tracking-widest md:inline-flex"
            onClick={() => (window.location.href = "#contact")}
          >
            Get Quote
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-nav-button text-foreground transition-colors hover:bg-nav-button/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mb-3 rounded-xl border border-border bg-card/95 p-2 shadow-lg backdrop-blur-md md:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium uppercase tracking-wider text-primary-foreground"
          >
            Get Quote
          </a>
        </div>
      )}
    </header>
  )
}
