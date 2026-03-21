import Link from "next/link";

const TESTIMONIALS = [
  {
    quote:
      "Getting a business loan used to mean weeks of back-and-forth with banks. LendKaki matched us with 4 offers in under a day. We secured the working capital we needed to fulfil a major contract.",
    name: "Ahmad Rizal",
    type: "Business Loan",
    context: "F&B Business",
    amount: "$80,000",
    initials: "AR",
  },
  {
    quote:
      "As an e-commerce business we had very specific cash flow needs. LendKaki found us a lender who understood our revenue cycles and offered repayment terms that actually made sense for us.",
    name: "Linda Koh",
    type: "Business Loan",
    context: "E-commerce",
    amount: "$50,000",
    initials: "LK",
  },
  {
    quote:
      "Our logistics company needed equipment financing quickly. LendKaki's platform made the whole process surprisingly painless — one form, multiple offers, and funds in our account within 48 hours.",
    name: "Wei Jie Tan",
    type: "Business Loan",
    context: "Logistics",
    amount: "$120,000",
    initials: "WJ",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="var(--accent)"
          aria-hidden="true"
        >
          <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.435.59 3.43L7 8.91l-3.09 1.59.59-3.43L2 4.635l3.455-.545L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export function BusinessTestimonials() {
  return (
    <section className="bg-surface py-20 lg:py-28" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-text">
            Testimonials
          </span>
          <h2
            className="mt-3 font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Singapore Businesses That Got Funded 🦦
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Join thousands of Singapore SMEs who found better business loan rates with us.
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
                <div className="min-w-0">
                  <p className="whitespace-nowrap text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {t.context} · {t.amount}
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
            Get your business funded today →
          </Link>
        </div>
      </div>
    </section>
  );
}
