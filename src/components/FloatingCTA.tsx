import { useEffect, useState } from "react"
import { CalendarCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionLink } from "./SectionLink"

/** Sticky "Book a Demo" button that slides in after the hero scrolls away. */
export function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <SectionLink
      hash="#contact"
      className={cn(
        "fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-amber-500 px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-105 active:scale-95",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      )}
    >
      <CalendarCheck className="h-4 w-4" />
      Book a Demo
    </SectionLink>
  )
}
