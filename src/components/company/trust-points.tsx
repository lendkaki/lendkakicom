const TRUST_POINTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="var(--accent-text)" strokeWidth="1.75" />
        <path d="M12 8v4l2.5 2.5" stroke="var(--accent-text)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 6.5L5 4M16 6.5L19 4" stroke="var(--accent-text)" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: "No Teaser Rates, No Bait-and-Switch",
    body: "What you see is what you get. Every rate quoted to you is based on your actual profile, not an eye-catching headline number that only the top 1% of applicants qualify for.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="var(--accent-text)" strokeWidth="1.75" />
        <path d="M8 11V7a4 4 0 018 0v4" stroke="var(--accent-text)" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="var(--accent-text)" />
      </svg>
    ),
    title: "Bank-Grade Data Protection",
    body: "Your information is encrypted end-to-end with 256-bit SSL and stored in compliance with Singapore's PDPA. We never sell or share your data with anyone you haven't approved.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="var(--accent-text)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Built for Urgency",
    body: "Need a bridging loan before your property closes? Emergency cash for your business? Our matching engine prioritises speed so you're not left waiting when time is critical.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="var(--accent-text)" strokeWidth="1.75" />
        <path d="M8 12l2.5 2.5L16 9" stroke="var(--accent-text)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Always Free for Borrowers",
    body: "LendKaki earns a referral fee from lenders, never from you. There are zero charges, zero hidden costs, and zero obligations. Walk away at any point if none of the offers suit you.",
  },
];

export function TrustPoints() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-text">
            Our Promise
          </span>
          <h2
            className="mt-3 font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Honest Rates. No Gimmicks. Zero Fees.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Here&apos;s why borrowers keep coming back.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TRUST_POINTS.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white p-7 ring-1 ring-border transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                {item.icon}
              </div>
              <h3
                className="mt-5 font-display font-semibold text-foreground"
                style={{ fontSize: "var(--text-lg)" }}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
