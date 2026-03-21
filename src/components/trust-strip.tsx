const TRUST_ITEMS = [
  {
    value: "20+",
    label: "Licensed Lenders",
    sub: "MAS & MinLaw regulated",
  },
  {
    value: "<24h",
    label: "Same-Day Approval",
    sub: "Funds disbursed fast",
  },
  {
    value: "0",
    label: "Credit Impact",
    sub: "Soft checks only",
  },
  {
    value: "$10M+",
    label: "Loans Disbursed",
    sub: "And growing every month",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {TRUST_ITEMS.map((item, i) => {
            // On mobile (2-col): right border on col 0 (items 0 & 2), bottom border between rows (items 0 & 1)
            // On sm+ (4-col): right border on all except last
            const borderCls = [
              // vertical divider
              i % 2 === 0 ? "border-r border-gray-200" : "",           // mobile: right on left-column items
              i < TRUST_ITEMS.length - 1 ? "sm:border-r" : "sm:border-r-0", // sm+: right on all but last
              // horizontal divider between the two mobile rows
              i < 2 ? "border-b border-gray-200 sm:border-b-0" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div
                key={item.label}
                className={`flex flex-col items-center px-4 py-6 text-center sm:px-6 sm:py-0 ${borderCls}`}
              >
                <span
                  className="font-display font-bold leading-none tracking-tight text-foreground"
                  style={{ fontSize: "var(--text-3xl)" }}
                >
                  {item.value}
                </span>
                <span className="mt-2 text-sm font-semibold text-foreground">
                  {item.label}
                </span>
                <span className="mt-1 text-xs text-gray-400">{item.sub}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
