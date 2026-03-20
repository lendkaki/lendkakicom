const TESTIMONIALS = [
  {
    quote:
      "I was dreading applying to multiple banks. LendKaki matched me with 5 offers in under a minute. I saved over $2,000 in interest compared to my bank's rate.",
    name: "Tan Wei Ming",
    type: "Personal Loan",
    date: "14 Mar 2026",
  },
  {
    quote:
      "As an SME owner, getting a business loan used to take weeks. Through LendKaki I got approved within 24 hours and funds were in my account the next day.",
    name: "Ahmad Rizal",
    type: "Business Loan",
    date: "18 Mar 2026",
  },
  {
    quote:
      "Needed a bridging loan urgently for my property purchase. LendKaki connected me with a lender who disbursed the funds the same day. Lifesaver.",
    name: "Kenneth Teo",
    type: "Bridging Loan",
    date: "19 Feb 2026",
  },
];

export function ApplyTestimonials() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            className="font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Real Results from Real Borrowers
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Join thousands of Singaporeans who found better rates with us.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-border"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label="5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="var(--accent)"
                    aria-hidden="true"
                  >
                    <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.type}</p>
                </div>
                <p className="text-xs text-gray-400">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
