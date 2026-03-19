const STEPS = [
  {
    number: "01",
    title: "Apply Once",
    description:
      "Fill in your details in under 2 minutes. One simple form — no need to apply at every bank separately.",
  },
  {
    number: "02",
    title: "Compare Offers",
    description:
      "Receive personalised rates from 20+ licensed lenders. Compare interest rates, tenure, and monthly instalments side by side.",
  },
  {
    number: "03",
    title: "Get Funded",
    description:
      "Choose the best offer for you. Funds can be disbursed as fast as the same day, directly to your account.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          How It Works
        </p>
        <h2
          className="mt-3 max-w-md font-display font-bold tracking-tight text-foreground"
          style={{ fontSize: "var(--text-3xl)" }}
        >
          Get matched with the best loan offers
        </h2>

        {/* Bento layout: illustration left, steps right */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Illustration placeholder */}
          <div className="flex items-center justify-center rounded-2xl bg-surface p-12 lg:min-h-[420px]">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Illustration placeholder
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col justify-center gap-10">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative flex gap-5">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute left-[19px] top-10 h-[calc(100%+0.5rem)] w-px bg-gray-200" />
                )}

                {/* Number badge */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-text">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pb-2 pt-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
