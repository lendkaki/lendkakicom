const KEYWORDS = [
  "FAST",
  "LICENSED",
  "FREE",
  "SECURE",
  "SIMPLE",
  "TRUSTED",
  "SAME-DAY",
  "TRANSPARENT",
  "NO HIDDEN FEES",
  "ZERO CREDIT IMPACT",
  "MAS REGULATED",
  "SINGPASS",
];

function TickerItem({ label }: { label: string }) {
  return (
    <span className="flex shrink-0 items-center gap-4">
      <span className="text-[11px] font-bold tracking-[0.18em] text-gray-800">
        {label}
      </span>
      <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
    </span>
  );
}

export function KeywordTicker() {
  const doubled = [...KEYWORDS, ...KEYWORDS];

  return (
    <div className="overflow-hidden border-y border-gray-200 bg-gray-50 py-3">
      <div
        className="flex animate-marquee-left gap-4 will-change-transform"
        style={{ width: "max-content" }}
        aria-hidden="true"
      >
        {doubled.map((kw, i) => (
          <TickerItem key={`${kw}-${i}`} label={kw} />
        ))}
      </div>
    </div>
  );
}
