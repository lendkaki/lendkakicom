import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoanCalculator } from "@/components/loan-calculator";
import { CtaForm } from "@/components/cta-form";

export const metadata: Metadata = {
  title: "Loan Calculator | LendKaki",
  description:
    "Estimate your monthly repayments, total interest, and total payable for any loan amount, tenure, and interest rate. Free Singapore loan calculator.",
};

export default function CalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Header */}
        <div className="border-b border-border bg-surface py-10 lg:py-14">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-text">
              Free Tool
            </span>
            <h1
              className="mt-4 font-display font-bold tracking-tight text-foreground"
              style={{ fontSize: "var(--text-4xl)" }}
            >
              Loan Calculator
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Estimate your monthly repayments, total interest, and more.
            </p>
          </div>
        </div>

        {/* Calculator */}
        <section className="py-12 lg:py-16">
          <LoanCalculator />
        </section>

        {/* Apply form */}
        <CtaForm compact />
      </main>
      <Footer />
    </>
  );
}
