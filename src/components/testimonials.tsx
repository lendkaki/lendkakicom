/**
 * Avatar images should be placed in /public/images/testimonials/
 * Filename format: [first-last].jpg  e.g. tan-wei-ming.jpg
 * When ready, swap the placeholder <span> in TestimonialCard for:
 *   <Image src={t.avatar} alt={t.name} width={32} height={32} className="rounded-full object-cover" />
 */

const TESTIMONIALS_ROW_1 = [
  {
    quote:
      "I was dreading applying to multiple banks. LendKaki matched me with 5 offers in under a minute. I saved over $2,000 in interest compared to my bank's rate.",
    name: "Tan Wei Ming",
    type: "Personal Loan",
    avatar: "/images/testimonials/tan-wei-ming.jpg",
  },
  {
    quote:
      "As an SME owner, getting a business loan used to take weeks. Through LendKaki I got approved within 24 hours and funds were in my account the next day.",
    name: "Ahmad Rizal",
    type: "Business Loan",
    avatar: "/images/testimonials/ahmad-rizal.jpg",
  },
  {
    quote:
      "Needed cash urgently and didn't want to wait days. LendKaki's instant loan match was exactly what I needed — fast approval and money in my account same day.",
    name: "Marcus Yeo",
    type: "Instant Loan",
    avatar: "/images/testimonials/marcus-yeo.jpg",
  },
  {
    quote:
      "The comparison tool is brilliant. I could see all my options side by side with real numbers. Ended up saving $150/month on my personal loan repayment.",
    name: "David Ong",
    type: "Personal Loan",
    avatar: "/images/testimonials/david-ong.jpg",
  },
  {
    quote:
      "Running a small business means cash flow can get tight. LendKaki found me a business loan with terms I could actually work with. Quick, easy, no fuss.",
    name: "Linda Koh",
    type: "Business Loan",
    avatar: "/images/testimonials/linda-koh.jpg",
  },
];

const TESTIMONIALS_ROW_2 = [
  {
    quote:
      "I was skeptical at first, but the process was genuinely free. No hidden charges, no spam calls. Just real offers from licensed lenders. Very impressed.",
    name: "Nurul Aisyah",
    type: "Personal Loan",
    avatar: "/images/testimonials/nurul-aisyah.jpg",
  },
  {
    quote:
      "Got an instant loan sorted in under an hour. The form took 2 minutes, and I had an offer confirmed before I even finished my coffee. Highly recommended.",
    name: "Jason Lim",
    type: "Instant Loan",
    avatar: "/images/testimonials/jason-lim.jpg",
  },
  {
    quote:
      "My business needed a short-term boost to cover a big order. LendKaki connected me with a lender who understood SME needs. Whole thing took less than a day.",
    name: "Wei Jie Tan",
    type: "Business Loan",
    avatar: "/images/testimonials/wei-jie-tan.jpg",
  },
  {
    quote:
      "After comparing 3 banks on my own and getting nowhere, LendKaki got me a personal loan at a rate none of them offered. Should have come here first.",
    name: "Siti Rahimah",
    type: "Personal Loan",
    avatar: "/images/testimonials/siti-rahimah.jpg",
  },
];

function TestimonialCard({
  quote,
  name,
  type,
  avatar,
}: {
  quote: string;
  name: string;
  type: string;
  avatar: string;
}) {
  return (
    <div className="w-[340px] shrink-0 rounded-xl border border-gray-200 bg-white px-6 py-5 sm:w-[380px]">
      <p className="text-sm leading-relaxed text-gray-600">&ldquo;{quote}&rdquo;</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* Avatar placeholder — swap for <Image src={avatar} ...> when ready */}
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#f7d347]/60 bg-[#f7d347]/10 text-sm"
            title={`Photo: ${avatar}`}
            aria-hidden="true"
          >
            🦦
          </span>
          <span className="text-sm font-semibold text-foreground">{name}</span>
        </div>
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
