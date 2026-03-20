import Link from "next/link";

export function HiwHero() {
  return (
    <section className="bg-white pb-12 pt-14 lg:pb-16 lg:pt-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h1
          className="animate-fade-up font-display font-bold tracking-tight text-foreground"
          style={{ fontSize: "var(--text-5xl)" }}
        >
          Get matched with the{" "}
          <span className="relative inline-block">
            best loan offers
            <span
              className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent"
              aria-hidden="true"
            />
          </span>
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-500">
          Apply once and receive personalised rates from 20+ licensed lenders in three simple
          steps. No paperwork upfront, no branch visits needed.
        </p>
        <div className="animate-fade-up mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/apply"
            className="inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Apply Now — It&apos;s Free
          </Link>
          <Link
            href="#steps"
            className="inline-flex rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            See the steps ↓
          </Link>
        </div>

        {/* Stat strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border pt-10">
          {[
            { value: "20+", label: "Licensed Lenders" },
            { value: "<2 min", label: "To Apply" },
            { value: "<24h", label: "Avg. Approval" },
            { value: "100%", label: "Free" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-display font-bold text-foreground"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
