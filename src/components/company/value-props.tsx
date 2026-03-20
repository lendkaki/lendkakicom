const VALUE_PROPS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="var(--accent-text)" strokeWidth="1.75" />
        <path d="M3 9h18" stroke="var(--accent-text)" strokeWidth="1.75" />
        <path d="M8 14h4M8 17h2" stroke="var(--accent-text)" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: "One Form, Multiple Rates",
    body: "Stop visiting every bank's website individually. Submit a single 60-second application and let our network of 20+ licensed lenders come back to you with their most competitive rates, saving you hours of legwork.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L4 7v5c0 4.418 3.358 8.549 8 9.9C19.642 20.549 20 16.418 20 12V7l-8-4z" stroke="var(--accent-text)" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="var(--accent-text)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Only MAS & MinLaw-Regulated Partners",
    body: "Every lender on LendKaki is licensed and regulated under Singapore law. We never work with unlicensed money lenders. You can verify each institution's licence on the MAS or MinLaw registries.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="var(--accent-text)" />
      </svg>
    ),
    title: "Updates Straight to Your WhatsApp",
    body: "No email threads to dig through. Once we match you with a lender, all next steps and instructions are sent directly to your WhatsApp so nothing slips through the cracks.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="7" r="3" stroke="var(--accent-text)" strokeWidth="1.75" />
        <circle cx="16" cy="8" r="2.5" stroke="var(--accent-text)" strokeWidth="1.75" />
        <path d="M2 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="var(--accent-text)" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M16 14c2.21 0 4 1.567 4 3.5" stroke="var(--accent-text)" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: "A Real Team Behind the Platform",
    body: "LendKaki isn't a faceless directory. Our Singapore-based advisors are available during business hours to answer questions, clarify terms, and walk you through your options if you need a hand.",
  },
];

export function ValueProps() {
  return (
    <section className="bg-surface py-20 lg:py-28" id="why-us">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-text">
            Why LendKaki
          </span>
          <h2
            className="mt-3 font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Why Singaporeans Pick LendKaki
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Taking out a loan doesn&apos;t have to be complicated or time-consuming.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {VALUE_PROPS.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white p-7 ring-1 ring-border transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                {item.icon}
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
