const TRUST_BADGES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3L4 7v5c0 4.418 3.358 8.549 8 9.9C19.642 20.549 20 16.418 20 12V7l-8-4z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "MAS & MinLaw Regulated Partners",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Full PDPA Compliance",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
    label: "256-bit SSL Encrypted",
  },
];

export function MissionSection() {
  return (
    <section className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Our Mission
            </span>
            <h2
              className="mt-3 font-display font-bold tracking-tight text-white"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              Levelling the Playing Field for Borrowers
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              Singapore has dozens of licensed lenders, yet most people only approach the one or two
              banks they already know. That means they&apos;re likely over-paying on interest without
              realising it. LendKaki exists to close that gap by giving every borrower visibility
              across the full market so you can make a genuinely informed decision.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              We partner exclusively with financial institutions regulated by the Monetary Authority
              of Singapore (MAS) or the Ministry of Law (MinLaw). Our matching service is entirely
              free for borrowers, and it always will be.
            </p>
          </div>

          {/* Trust badges card */}
          <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 lg:p-10">
            <p
              className="font-display font-semibold text-white"
              style={{ fontSize: "var(--text-lg)" }}
            >
              Built on trust, regulated by law.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Every aspect of our platform is designed to protect you.
            </p>

            <ul className="mt-8 flex flex-col gap-5">
              {TRUST_BADGES.map((badge) => (
                <li key={badge.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-text">
                    {badge.icon}
                  </div>
                  <span className="text-sm font-semibold text-white">{badge.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs leading-relaxed text-gray-500">
                LendKaki is managed and operated by Lendkaki Pay Pte. Ltd. (UEN: 202607335C).
                Registered in Singapore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
