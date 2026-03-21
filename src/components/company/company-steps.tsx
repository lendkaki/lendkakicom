const STEPS = [
  {
    number: "1",
    title: "Tell Us What You Need",
    description:
      "Share your loan amount, purpose, and a few personal details. The entire form takes under a minute. No documents required at this stage.",
  },
  {
    number: "2",
    title: "We Find Your Best Match",
    description:
      "Your profile is securely reviewed by our panel of licensed banks and financial institutions. Within minutes, we identify the lender whose criteria and rates best fit your situation.",
  },
  {
    number: "3",
    title: "Get Funded, Often the Same Day",
    description:
      "Accept the offer that suits you, complete the lender's verification, and receive your funds. Many applicants see the money in their account within 24 hours.",
  },
];

export function CompanySteps() {
  return (
    <section className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header — left-aligned on lg, full width */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              How it works
            </span>
            <h2
              className="mt-3 font-display font-bold tracking-tight text-white"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              From Application to Approval in 3 Steps
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              No paperwork upfront, no branch visits needed.
            </p>

            {/* CTA below heading on desktop */}
            <a
              href="/apply"
              className="mt-8 hidden items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:inline-flex"
            >
              Start My Application →
            </a>
          </div>

          {/* Steps */}
          <ol className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <li key={step.number} className="relative flex gap-5">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <span
                    className="absolute left-[19px] top-[44px] h-[calc(100%-12px)] w-px bg-white/10"
                    aria-hidden="true"
                  />
                )}

                {/* Number badge */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-text shadow-sm">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pb-10">
                  <h3
                    className="font-display font-semibold text-white"
                    style={{ fontSize: "var(--text-lg)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile CTA */}
        <a
          href="/apply"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:hidden"
        >
          Start My Application →
        </a>
      </div>
    </section>
  );
}
