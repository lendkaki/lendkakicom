import Link from "next/link";

const WHY_CARDS = [
  {
    title: "2-Minute Application",
    body: "Our streamlined form takes under 2 minutes to complete. No lengthy paperwork, no branch visits, no fax. Just fill in your details once and let LendKaki do the legwork.",
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
        <circle cx="12" cy="14" r="2" stroke="var(--accent-text)" strokeWidth="1.75" pathLength="1" />
        <path
          d="M12 16v2"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
          pathLength="1"
        />
      </svg>
    ),
  },
  {
    title: "Same-Day Disbursement",
    body: "Most applicants receive their loan in their bank account the same day they apply. Our lender partners are built for speed — once approved, funds move fast.",
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
    title: "Instant Lender Matching",
    body: "The moment you submit, our matching engine compares offers from 20+ licensed lenders simultaneously. You get personalised results in seconds — not days.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="animate-draw"
        aria-hidden="true"
      >
        <circle cx="5" cy="12" r="2" stroke="var(--accent-text)" strokeWidth="1.75" pathLength="1" />
        <circle cx="19" cy="6" r="2" stroke="var(--accent-text)" strokeWidth="1.75" pathLength="1" />
        <circle cx="19" cy="18" r="2" stroke="var(--accent-text)" strokeWidth="1.75" pathLength="1" />
        <path
          d="M7 12h4m4-4.5L11 12m4 4.5L11 12"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
          pathLength="1"
        />
      </svg>
    ),
  },
  {
    title: "No Hidden Fees",
    body: "LendKaki is completely free for borrowers. We never charge you a cent. Our service is funded by lender referral fees — your cost is always zero, with no obligation to accept any offer.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="animate-draw"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          pathLength="1"
        />
        <path
          d="M8 12l2.5 2.5L16 9"
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

export function InstantWhy() {
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
              Why LendKaki for Your Instant Loan
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              When you need cash fast, every minute counts. Here is how we make it happen.
            </p>
          </div>
        </div>

        {/* 4-column cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CARDS.map((card) => (
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
            Apply Now — Get Funded Today →
          </Link>
          <p className="mt-2 text-xs text-gray-400">
            No obligation · No credit impact
          </p>
        </div>
      </div>
    </section>
  );
}
