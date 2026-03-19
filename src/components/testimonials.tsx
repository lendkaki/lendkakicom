const TESTIMONIALS_ROW_1 = [
  {
    quote:
      "I was dreading applying to multiple banks. LendKaki matched me with 5 offers in under a minute. I saved over $2,000 in interest compared to my bank's rate.",
    name: "Tan Wei Ming",
    type: "Personal Loan",
  },
  {
    quote:
      "Finally consolidated all my credit card debts into one manageable loan. The whole process was transparent with no surprise fees, no hard credit checks.",
    name: "Priya Nair",
    type: "Debt Consolidation",
  },
  {
    quote:
      "As an SME owner, getting a business loan used to take weeks. Through LendKaki I got approved within 24 hours and funds were in my account the next day.",
    name: "Ahmad Rizal",
    type: "Business Loan",
  },
  {
    quote:
      "We needed funds for our wedding quickly. The multi-step form was super easy and took less than 2 minutes. Got a great rate from a lender I wouldn't have found on my own.",
    name: "Rachel Lim",
    type: "Wedding Loan",
  },
  {
    quote:
      "The comparison tool is brilliant. I could see all my options side by side with real numbers. Ended up saving $150/month on my personal loan repayment.",
    name: "David Ong",
    type: "Personal Loan",
  },
];

const TESTIMONIALS_ROW_2 = [
  {
    quote:
      "I was skeptical at first, but the process was genuinely free. No hidden charges, no spam calls. Just real offers from licensed lenders. Very impressed.",
    name: "Nurul Aisyah",
    type: "Personal Loan",
  },
  {
    quote:
      "Needed a bridging loan urgently for my property purchase. LendKaki connected me with a lender who disbursed the funds the same day. Lifesaver.",
    name: "Kenneth Teo",
    type: "Bridging Loan",
  },
  {
    quote:
      "Coming from overseas, I didn't know where to start with Singapore banks. LendKaki simplified everything and found me options that accept foreigners.",
    name: "Sarah Chen",
    type: "Foreigner Loan",
  },
  {
    quote:
      "After my renovation went over budget, I needed extra funds fast. Applied on LendKaki at night, had three offers by morning. Incredible turnaround.",
    name: "Ravi Chandran",
    type: "Renovation Loan",
  },
];

function TestimonialCard({
  quote,
  name,
  type,
}: {
  quote: string;
  name: string;
  type: string;
}) {
  return (
    <div className="w-[340px] shrink-0 rounded-xl border border-gray-200 bg-white px-6 py-5 sm:w-[380px]">
      <p className="text-sm leading-relaxed text-gray-600">&ldquo;{quote}&rdquo;</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="rounded-full bg-surface-raised px-2.5 py-0.5 text-[11px] font-medium text-gray-500">
          {type}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({
  testimonials,
  direction,
}: {
  testimonials: typeof TESTIMONIALS_ROW_1;
  direction: "left" | "right";
}) {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />

      <div
        className={`flex gap-4 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
        style={{ width: "max-content" }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Testimonials
        </p>
        <h2
          className="mt-3 font-display font-bold tracking-tight text-foreground"
          style={{ fontSize: "var(--text-3xl)" }}
        >
          What our borrowers say
        </h2>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <MarqueeRow testimonials={TESTIMONIALS_ROW_1} direction="left" />
        <MarqueeRow testimonials={TESTIMONIALS_ROW_2} direction="right" />
      </div>
    </section>
  );
}
