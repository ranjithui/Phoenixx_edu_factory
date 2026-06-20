/** Branded animated background — used as the hero's base layer and Spline fallback. */
export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-hero-bg">
      {/* moving ember gradient wash */}
      <div
        className="absolute inset-0 opacity-70 animate-gradient-pan"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 75% 25%, hsl(24 95% 50% / 0.28), transparent 60%), radial-gradient(50% 50% at 15% 80%, hsl(38 92% 50% / 0.18), transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />
      {/* faint grid */}
      <div className="absolute inset-0 bg-grid-faint opacity-60" />
      {/* floating orbs — blur-2xl + will-change keeps these on the GPU's
          compositor layer so they don't trigger expensive per-frame repaints */}
      <div className="absolute left-[12%] top-[28%] h-40 w-40 rounded-full bg-primary/20 blur-2xl animate-float [will-change:transform]" />
      <div
        className="absolute right-[18%] top-[18%] h-56 w-56 rounded-full bg-amber-500/10 blur-2xl animate-float [will-change:transform]"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-[12%] left-[40%] h-48 w-48 rounded-full bg-primary/10 blur-2xl animate-float [will-change:transform]"
        style={{ animationDelay: "3s" }}
      />
    </div>
  )
}
