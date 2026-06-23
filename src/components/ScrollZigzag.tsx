import { useEffect, useRef, useState } from "react"

/**
 * Scroll-progress zigzag — an orange line that weaves between every section and
 * "draws" itself as the user scrolls down the page.
 *
 * How it works:
 *  • We measure the vertical centre of each <section> in <main> plus the
 *    <footer>, and build a single path whose vertices alternate between a left
 *    and right inset → the zigzag.
 *  • The path is normalised with pathLength="1", so a strokeDashoffset that goes
 *    from 1 (hidden) to 0 (fully drawn) maps directly to scroll progress.
 *  • It's an absolutely-positioned, pointer-events-none overlay, so it sits over
 *    the content as an accent without ever blocking clicks. Colour comes from
 *    --primary, so it's correct in both light and dark themes.
 */
export function ScrollZigzag() {
  const [d, setD] = useState("")
  const [height, setHeight] = useState(0)
  const progressRef = useRef<SVGPathElement | null>(null)
  // Vertical span the line covers (top of About → bottom of footer), so drawing
  // can be mapped to the scroll position over exactly that range.
  const startYRef = useRef(0)
  const endYRef = useRef(1)

  // Build / rebuild the path whenever layout changes.
  useEffect(() => {
    const build = () => {
      // Skip the hero — the line starts with a horizontal above the About section.
      const sections = Array.from(
        document.querySelectorAll("main section")
      ).filter((el) => el.id !== "home") as HTMLElement[]
      const footer = document.querySelector("footer") as HTMLElement | null
      const nodes = footer ? [...sections, footer] : sections
      if (!nodes.length) return

      const w = window.innerWidth
      // Keep the line OUT of the content: run the verticals in the gutter just
      // outside the centered content column (max-w-7xl). When there's no real
      // gutter (small screens) fall back to the viewport edge — so the line only
      // traces the section edges and never overlaps cards or text.
      const container = document.querySelector("main .max-w-7xl") as HTMLElement | null
      const EDGE = 12 // min inset from the viewport edge
      const GAP = 18 // how far outside the content box to sit
      let leftX = EDGE
      let rightX = w - EDGE
      if (container) {
        const c = container.getBoundingClientRect()
        if (c.left > EDGE + GAP) leftX = c.left - GAP
        if (w - c.right > EDGE + GAP) rightX = c.right + GAP
      }

      // Serpentine outline that runs along the BOUNDARIES between sections
      // (each section's end) — the full-width horizontals sit in the gaps and
      // the verticals run down the side gutters, so the single line frames every
      // section hero → footer without ever crossing through a section's content.
      const ys = nodes.map((el) => el.getBoundingClientRect().top + window.scrollY)
      const last = nodes[nodes.length - 1].getBoundingClientRect()
      ys.push(last.bottom + window.scrollY)

      startYRef.current = ys[0]
      endYRef.current = ys[ys.length - 1]

      const pts: Array<{ x: number; y: number }> = []
      ys.forEach((y, i) => {
        if (i % 2 === 0) pts.push({ x: leftX, y }, { x: rightX, y })
        else pts.push({ x: rightX, y }, { x: leftX, y })
      })

      setD(
        pts
          .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
          .join(" ")
      )
      setHeight(document.documentElement.scrollHeight)
    }

    build()
    const ro = new ResizeObserver(build)
    ro.observe(document.body)
    window.addEventListener("resize", build)
    window.addEventListener("load", build)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", build)
      window.removeEventListener("load", build)
    }
  }, [])

  // Map scroll position → how much of the line is drawn.
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = progressRef.current
        if (!el) return
        // "Pen" = middle of the viewport. The line is drawn up to wherever the
        // pen currently sits within the line's own vertical span, so it follows
        // the scroll position in step with the section you're looking at.
        const pen = window.scrollY + window.innerHeight * 0.5
        const span = endYRef.current - startYRef.current
        const p = span > 0 ? Math.min(1, Math.max(0, (pen - startYRef.current) / span)) : 0
        el.style.strokeDashoffset = String(1 - p)
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [d])

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-30 w-full"
      style={{ height }}
      fill="none"
    >
      {/* the orange line, revealed by scroll (no pre-drawn track) */}
      <path
        ref={progressRef}
        d={d}
        pathLength={1}
        stroke="hsl(var(--primary))"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: 1,
          filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.5))",
          transition: "stroke-dashoffset 60ms linear",
        }}
      />
    </svg>
  )
}
