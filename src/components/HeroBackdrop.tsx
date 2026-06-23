/**
 * Theme-adaptive hero backdrop — a branded SVG that recolors itself for light
 * and dark mode because every stroke/fill is driven by the theme CSS variables
 * (`--foreground`, `--primary`). Nothing here is a fixed-brightness raster, so
 * the same file reads correctly on the near-white light theme and the near-black
 * dark theme.
 *
 * The motif is on-field for a soft-skills / NLP / corporate-training institute:
 *   • a constellation of connected nodes  → human connection, communication, the
 *     "neuro-linguistic" wiring of NLP
 *   • an upward growth arc                → "Rise. Learn. Excel." / skill growth
 *   • ember-glow accent nodes (primary)   → the Phoenixx brand spark
 *
 * Composition is weighted to the top-right so it never competes with the
 * bottom-left headline + CTAs.
 */

// Constellation laid out in a 0–100 / 0–60 space (matches the viewBox below).
// Hand-placed (not random) so the graph reads as an intentional network.
const NODES: Array<{ x: number; y: number; r: number; accent?: boolean }> = [
  { x: 62, y: 10, r: 0.9 },
  { x: 74, y: 6, r: 1.3, accent: true },
  { x: 85, y: 14, r: 0.8 },
  { x: 92, y: 8, r: 1.0 },
  { x: 70, y: 20, r: 1.1, accent: true },
  { x: 82, y: 26, r: 0.9 },
  { x: 94, y: 22, r: 1.2 },
  { x: 60, y: 30, r: 0.8 },
  { x: 76, y: 36, r: 1.0, accent: true },
  { x: 88, y: 40, r: 0.9 },
  { x: 66, y: 44, r: 1.1 },
  { x: 96, y: 34, r: 0.8 },
]

// Edges reference NODES by index — the lines that make it read as a network.
const EDGES: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 3], [1, 4], [4, 5], [5, 6], [3, 6],
  [4, 7], [5, 8], [8, 9], [7, 10], [8, 10], [9, 11], [6, 9], [8, 11],
]

export function HeroBackdrop({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 60"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {/* Soft ember bloom behind the network — primary, very low alpha. */}
      <defs>
        <radialGradient id="hb-bloom" cx="78%" cy="22%" r="55%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.22" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hb-growth" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="100" height="60" fill="url(#hb-bloom)" />

      {/* Upward growth arc — "Rise. Learn. Excel." */}
      <path
        d="M 4 54 C 30 52, 46 40, 60 28 S 86 10, 98 4"
        stroke="url(#hb-growth)"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeDasharray="2 2.5"
      />

      {/* Network edges — structural lines tinted by the theme foreground. */}
      <g stroke="hsl(var(--foreground))" strokeOpacity="0.18" strokeWidth="0.18">
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
          />
        ))}
      </g>

      {/* Nodes — neutral ones follow the theme, accent ones glow ember. */}
      <g>
        {NODES.map((n, i) =>
          n.accent ? (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="hsl(var(--primary))"
              fillOpacity="0.9"
            />
          ) : (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="hsl(var(--foreground))"
              fillOpacity="0.4"
            />
          )
        )}
      </g>
    </svg>
  )
}
