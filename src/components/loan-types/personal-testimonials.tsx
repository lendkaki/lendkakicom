import Link from "next/link";

const TESTIMONIALS = [
  {
    quote:
      "I needed a personal loan urgently for an unexpected expense. LendKaki matched me with 3 offers within minutes. The rates were much better than what my bank offered.",
    name: "Tan Wei Ming",
    type: "Personal Loan",
    amount: "$15,000",
    initials: "TW",
  },
  {
    quote:
      "Was comparing personal loans across different banks for weeks. LendKaki did it all in one go. Saved me so much time and I got a great rate.",
    name: "Priya Nair",
    type: "Personal Loan",
    amount: "$30,000",
    initials: "PN",
  },
  {
    quote:
      "As a foreigner, I thought getting a personal loan in Singapore would be difficult. LendKaki connected me with lenders who cater to foreigners. Very smooth process.",
    name: "Ahmad Rizal",
    type: "Personal Loan",
    amount: "$8,000",
    initials: "AR",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--accent)" aria-hidden="true">
          <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.435.59 3.43L7 8.91l-3.09 1.59.59-3.43L2 4.635l3.455-.545L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export function PersonalTestimonials() {
  return (
    <section className="bg-surface py-20 lg:py-28" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-text">
            Real Results
          </span>
          <h2
            className="mt-3 font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Real Results from Real Borrowers
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Join thousands of Singaporeans who found better personal loan rates with us.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-7 ring-1 ring-border transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <StarRating />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                {/* Avatar circle */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-text">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.type} · {t.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Join thousands of happy borrowers →
          </Link>
        </div>
      </div>
    </section>
  );
}
