import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "section" | "article" | "li"
}

/** Wraps content and fades/slides it up the first time it scrolls into view. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce || !("IntersectionObserver" in window)) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Tag = as as ElementType
  return (
    <Tag
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={cn(shown ? "animate-fade-up" : "opacity-0", className)}
    >
      {children}
    </Tag>
  )
}
