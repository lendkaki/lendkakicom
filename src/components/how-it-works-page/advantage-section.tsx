const ADVANTAGES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="var(--accent-text)" strokeWidth="1.75" />
        <path
          d="M12 7v5l3 3"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tag: "Speed",
    title: "Same-Day Approval",
    body: "75% of our applicants receive approval within 24 hours. Some lenders can disburse funds the same day you apply. No more waiting weeks for a loan decision.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3L4 7v5c0 4.418 3.358 8.549 8 9.9C19.642 20.549 20 16.418 20 12V7l-8-4z"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tag: "Trust",
    title: "20+ Licensed Lenders",
    body: "Every lender in our network is regulated by the Monetary Authority of Singapore (MAS) or licensed by the Ministry of Law (MinLaw). We never work with unlicensed operators.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 3l18 18M10.5 10.677A2 2 0 0012 14a2 2 0 002-2 2 2 0 00-.677-1.5"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M12 6C7.582 6 3.732 8.667 2 12.5c.796 1.715 2.07 3.179 3.65 4.25"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M8.5 5.5C9.587 5.18 10.77 5 12 5c4.418 0 8.268 2.667 10 6.5a13.12 13.12 0 01-3.5 4.5"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    tag: "Privacy",
    title: "Zero Credit Impact",
    body: "LendKaki only performs soft credit inquiries during the matching process. Your credit score is not impacted when you apply through our platform — only if you proceed with a specific lender.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
        />
        <path
          d="M8 12l2.5 2.5L16 9"
          stroke="var(--accent-text)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tag: "No Fees",
    title: "100% Free Service",
    body: "Our comparison service is completely free for borrowers. LendKaki earns referral fees from lenders, not from you. There are zero charges, zero hidden costs, zero obligations.",
  },
];

export function AdvantageSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-text">
              Why LendKaki
            </span>
            <h2
              className="mt-3 font-display font-bold tracking-tight text-foreground"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              The LendKaki Advantage
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-500 lg:text-right">
            Why thousands of Singaporeans choose us to find their best loan rates.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ADVANTAGES.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-surface p-7 ring-1 ring-border transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Icon + tag row */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                  {item.icon}
                </div>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-semibold text-gray-400">
                  {item.tag}
                </span>
              </div>

              <h3
                className="mt-5 font-display font-semibold text-foreground"
                style={{ fontSize: "var(--text-lg)" }}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
