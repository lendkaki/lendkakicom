import Link from "next/link";

export function BridgeCard() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-accent px-10 py-12 lg:px-16 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          {/* Left — text content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent-text/60">
              Get started today
            </p>
            <h2
              className="mt-3 font-display font-bold leading-tight tracking-tight text-accent-text"
              style={{ fontSize: "var(--text-4xl)" }}
            >
              Find your best loan rate in minutes
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-accent-text/70">
              One application. 20+ licensed lenders. No credit impact. LendKaki
              matches you with the best offer — fast, free, and fully
              transparent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                Compare Rates Now
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center rounded-full border border-black/20 px-7 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                See how it works
              </Link>
            </div>
          </div>

          {/* Right — illustration placeholder */}
          <div className="hidden lg:block">
            <div className="relative flex h-52 w-52 items-center justify-center xl:h-60 xl:w-60">
              {/* Subtle decorative circle behind */}
              <div className="absolute inset-0 rounded-full bg-black/10" />
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="relative z-10"
              >
                {/* Stack of coins / money illustration */}
                <ellipse cx="60" cy="90" rx="36" ry="12" fill="var(--accent-text)" fillOpacity="0.15" />
                <rect x="24" y="54" width="72" height="36" rx="18" fill="var(--accent-text)" fillOpacity="0.18" />
                <rect x="30" y="42" width="60" height="30" rx="15" fill="var(--accent-text)" fillOpacity="0.25" />
                <rect x="36" y="32" width="48" height="24" rx="12" fill="var(--accent-text)" fillOpacity="0.35" />
                {/* Top coin face */}
                <ellipse cx="60" cy="32" rx="24" ry="8" fill="var(--accent-text)" fillOpacity="0.5" />
                <ellipse cx="60" cy="30" rx="24" ry="8" fill="var(--accent-text)" fillOpacity="0.7" />
                {/* Dollar sign */}
                <path
                  d="M60 22V38M65 25H57C55.3 25 54 26.3 54 28C54 29.7 55.3 31 57 31H63C64.7 31 66 32.3 66 34C66 35.7 64.7 37 63 37H55"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
