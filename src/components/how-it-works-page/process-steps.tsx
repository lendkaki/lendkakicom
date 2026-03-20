import Link from "next/link";

const STEPS = [
  {
    number: "01",
    title: "Apply Once",
    description:
      "Fill in your details in under 2 minutes. One simple form — no need to apply at every bank separately. No documents required at this stage.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 5H7C5.895 5 5 5.895 5 7v12c0 1.105.895 2 2 2h10c1.105 0 2-.895 2-2V7c0-1.105-.895-2-2-2h-2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    detail: "No documents needed upfront",
  },
  {
    number: "02",
    title: "Compare Offers",
    description:
      "Receive personalised rates from 20+ licensed lenders. Compare interest rates, tenure, and monthly instalments side by side — all in one place.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 6h18M3 12h18M3 18h18"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <rect x="7" y="4" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
        <rect x="7" y="10" width="7" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    detail: "Personalised rates, not generic estimates",
  },
  {
    number: "03",
    title: "Get Funded",
    description:
      "Choose the best offer for you. Funds can be disbursed as fast as the same day, directly to your account. No hidden fees, no surprises.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M16 3H8L2 7h20l-6-4z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M6 14h2M16 14h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    detail: "Same-day disbursement available",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-surface py-20 lg:py-28" id="steps">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-text">
            3 Simple Steps
          </span>
          <h2
            className="mt-3 font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            From application to approval
          </h2>
        </div>

        {/* Step cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 ring-1 ring-border transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Large faint number watermark */}
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none font-display font-bold text-gray-100 transition-colors duration-300 group-hover:text-gray-50"
                style={{ fontSize: "6rem", lineHeight: 1 }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Icon in accent badge */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-text">
                {step.icon}
              </div>

              {/* Step number label */}
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Step {step.number}
              </p>

              <h3
                className="mt-1.5 font-display font-semibold text-foreground"
                style={{ fontSize: "var(--text-xl)" }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{step.description}</p>

              {/* Detail tag */}
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-text">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-text" aria-hidden="true" />
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Connector arrows on desktop */}
        <div className="mt-8 hidden items-center justify-center gap-0 lg:flex">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex items-center">
              <span className="text-xs font-medium text-gray-400">{step.title}</span>
              {i < STEPS.length - 1 && (
                <span className="mx-6 text-accent" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/apply"
            className="inline-flex rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Start My Application →
          </Link>
          <p className="mt-3 text-xs text-gray-400">No obligation · No credit impact · 100% free</p>
        </div>
      </div>
    </section>
  );
}
