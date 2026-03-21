import Link from "next/link";

const TESTIMONIALS = [
  {
    quote:
      "Applied at 10am, had the money in my account by 3pm the same day. I couldn't believe how fast LendKaki got me matched and approved. Genuinely the fastest loan experience I've ever had.",
    name: "Jason Lim",
    type: "Instant Loan",
    amount: "$8,000",
    initials: "JL",
  },
  {
    quote:
      "I was shocked by how fast it was. LendKaki matched me with a lender in minutes and they approved me within the hour. The funds were in my account before I even left the office.",
    name: "Marcus Yeo",
    type: "Instant Loan",
    amount: "$5,000",
    initials: "MY",
  },
  {
    quote:
      "Needed emergency cash for a family matter. I applied on my phone during lunch and got the loan disbursed the same afternoon. LendKaki made a stressful situation much easier to handle.",
    name: "Nurul Aisyah",
    type: "Instant Loan",
    amount: "$12,000",
    initials: "NA",
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

export function InstantTestimonials() {
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
            Funded the Same Day They Applied 🦦
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Real Singaporeans who got their loan the same day — no waiting, no hassle.
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
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-text">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="whitespace-nowrap text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
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
            Get your funds today →
          </Link>
        </div>
      </div>
    </section>
  );
}
