import { LoanCalculator } from "@/components/loan-calculator";

export function PersonalCalculator() {
  return (
    <section className="bg-white py-20 lg:py-28" id="calculator">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-text">
            Planning Tool
          </span>
          <h2
            className="mt-3 font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Personal Loan Calculator
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Estimate your monthly repayments before you apply.
          </p>
        </div>
        <LoanCalculator />
      </div>
    </section>
  );
}
