const ITEMS = [
  "Soft skills that get you hired",
  "NLP that changes how you think",
  "Hospitality training that impresses guests",
  "Corporate training that fixes real team problems",
  "Retail & sales skills that close more deals",
  "Career counselling that clears the confusion",
]

export function TrustStrip() {
  return (
    <section
      aria-label="What we offer"
      className="overflow-hidden border-y border-border bg-secondary/30 py-4"
    >
      {/* duplicated list so the -50% translate loops seamlessly; pauses on hover */}
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 text-sm font-medium uppercase tracking-wider text-muted-foreground"
          >
            {item}
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </section>
  )
}
