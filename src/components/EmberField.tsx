import { useEffect, useRef } from "react"

/**
 * Lightweight local replacement for the remote Spline scene.
 * Renders drifting "ember" particles on a 2D canvas — the same warm, glowing
 * hero feel, but with no 2 MB WebGL bundle and no render loop running while the
 * hero is scrolled out of view (the loop pauses via IntersectionObserver and
 * when the tab is hidden, and honors prefers-reduced-motion).
 */
export function EmberField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Pre-render one soft ember glow to a sprite so we never build gradients
    // per-frame (the single biggest cost in naive particle canvases).
    const sprite = document.createElement("canvas")
    const SP = 64
    sprite.width = sprite.height = SP
    const sctx = sprite.getContext("2d")!
    const g = sctx.createRadialGradient(SP / 2, SP / 2, 0, SP / 2, SP / 2, SP / 2)
    g.addColorStop(0, "rgba(255, 170, 70, 0.9)")
    g.addColorStop(0.4, "rgba(249, 115, 22, 0.35)")
    g.addColorStop(1, "rgba(249, 115, 22, 0)")
    sctx.fillStyle = g
    sctx.fillRect(0, 0, SP, SP)

    type P = { x: number; y: number; r: number; vy: number; vx: number; a: number }
    let particles: P[] = []
    let w = 0
    let h = 0

    const seed = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Scale particle count to area so big screens aren't sparse, capped for perf.
      const count = Math.min(34, Math.round((w * h) / 42000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 6 + Math.random() * 22,
        vy: 0.12 + Math.random() * 0.45,
        vx: (Math.random() - 0.5) * 0.25,
        a: 0.25 + Math.random() * 0.5,
      }))
    }

    const drawFrame = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = "lighter"
      for (const p of particles) {
        ctx.globalAlpha = p.a
        ctx.drawImage(sprite, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2)
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = "source-over"
    }

    const step = () => {
      for (const p of particles) {
        p.y -= p.vy
        p.x += p.vx
        if (p.y + p.r < 0) {
          p.y = h + p.r
          p.x = Math.random() * w
        }
        if (p.x < -p.r) p.x = w + p.r
        else if (p.x > w + p.r) p.x = -p.r
      }
      drawFrame()
    }

    let raf = 0
    let running = false
    const loop = () => {
      step()
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (running || reduce) return
      running = true
      raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    seed()
    drawFrame() // paint one static frame immediately (also the reduced-motion result)

    // Only animate while the hero is actually on screen.
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { threshold: 0.01 }
    )
    io.observe(canvas)

    // Don't burn frames in a backgrounded tab.
    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener("visibilitychange", onVisibility)

    let resizeRaf = 0
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(() => {
        seed()
        drawFrame()
      })
    })
    ro.observe(canvas)

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
      cancelAnimationFrame(resizeRaf)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
