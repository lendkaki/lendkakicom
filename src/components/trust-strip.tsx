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
    value: "100%",
    label: "Free Service",
    sub: "No hidden fees ever",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col ${i < TRUST_ITEMS.length - 1 ? "sm:border-r sm:border-gray-200" : ""}`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
