import Link from "next/link";

const HERO_CARD = {
  title: "Compare 20+ Lenders in One Place",
  body: "One simple form connects your business to over 20 licensed lenders and banks. Receive multiple competitive business loan offers without the hassle of visiting each lender separately — or submitting multiple applications.",
  icon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="animate-draw"
      aria-hidden="true"
    >
      <path
        d="M9 5H7C5.895 5 5 5.895 5 7v12c0 1.105.895 2 2 2h10c1.105 0 2-.895 2-2V7c0-1.105-.895-2-2-2h-2"
        stroke="var(--accent-text)"
        strokeWidth="1.75"
        strokeLinecap="round"
        pathLength="1"
      />
      <rect
        x="9"
        y="3"
        width="6"
        height="4"
        rx="1"
        stroke="var(--accent-text)"
        strokeWidth="1.75"
        pathLength="1"
      />
      <path
        d="M9 12h6M9 16h4"
        stroke="var(--accent-text)"
        strokeWidth="1.75"
        strokeLinecap="round"
        pathLength="1"
      />
    </svg>
  ),
};

const SUPPORTING_CARDS = [
  {
    title: "Tailored for Singapore SMEs",
    body: "Our lender network understands the realities of running a business in Singapore. Whether you need working capital, equipment financing, or a cash flow buffer, we match you to lenders who fund businesses like yours.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="animate-draw"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="7"
          width="18"
          height="13"
          rx="2"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          pathLength="1"
        />
        <path
          d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          d="M12 12v4M10 14h4"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
          pathLength="1"
        />
      </svg>
    ),
  },
  {
    title: "Fast Working Capital",
    body: "Cash flow emergencies don't wait. Many of our lender partners offer approvals within 24 hours and same-day disbursement so your operations never skip a beat.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="animate-draw"
        aria-hidden="true"
      >
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
        />
      </svg>
    ),
  },
  {
    title: "Flexible Loan Terms",
    body: "Access loan amounts and repayment tenures designed around business cycles — not personal finance. Larger amounts, structured repayment schedules, and terms that won't strain your monthly cash flow.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="animate-draw"
        aria-hidden="true"
      >
        <polyline
          points="22 7 13.5 15.5 8.5 10.5 2 17"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
        />
        <polyline
          points="16 7 22 7 22 13"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
        />
      </svg>
    ),
  },
];

export function BusinessWhy() {
  return (
    <section className="bg-surface py-20 lg:py-28" id="why">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-text">
              Why LendKaki
            </span>
            <h2
              className="mt-3 font-display font-bold tracking-tight text-foreground"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              Why Choose LendKaki for Your Business Loan
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              We help Singapore businesses find better funding — faster, simpler, and for free.
            </p>
          </div>
        </div>

        {/* Hero card — full width */}
        <div className="mt-10">
          <div className="group rounded-2xl bg-accent p-8 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:p-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-text/10">
              {HERO_CARD.icon}
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h3
                  className="font-display font-semibold text-accent-text"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  {HERO_CARD.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-accent-text/70">
                  {HERO_CARD.body}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-accent-text px-5 py-2.5 text-xs font-bold text-accent">
                20+ lenders →
              </span>
            </div>
          </div>
        </div>

        {/* Supporting 3-column grid */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {SUPPORTING_CARDS.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl bg-white p-7 ring-1 ring-border transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                {card.icon}
              </div>
              <h3
                className="mt-5 font-display font-semibold text-foreground"
                style={{ fontSize: "var(--text-lg)" }}
              >
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Apply Now — It&apos;s Free →
          </Link>
          <p className="mt-2 text-xs text-gray-400">
            No obligation · No credit impact
          </p>
        </div>
      </div>
    </section>
  );
}
