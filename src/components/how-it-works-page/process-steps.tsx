import Link from "next/link";
import { OtterMascot } from "@/components/mascot/otter-mascot";

const STEPS = [
  {
    number: "01",
    title: "Apply Once",
    description:
      "Fill in your details in under 2 minutes. One simple form — no need to apply at every bank separately. No documents required at this stage.",
    mascot: <OtterMascot pose="work" size={100} />,
    detail: "No documents needed upfront",
  },
  {
    number: "02",
    title: "Compare Offers",
    description:
      "Receive personalised rates from 20+ licensed lenders. Compare interest rates, tenure, and monthly instalments side by side — all in one place.",
    mascot: <OtterMascot pose="think" size={100} />,
    detail: "Personalised rates",
  },
  {
    number: "03",
    title: "Get Funded",
    description:
      "Choose the best offer for you. Funds can be disbursed as fast as the same day, directly to your account. No hidden fees, no surprises.",
    mascot: <OtterMascot pose="celebrate" size={100} />,
    detail: "Same-day disbursement available",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-surface pb-20 pt-10 lg:pb-28 lg:pt-14" id="steps">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-text">
            3 Simple Steps
          </span>
          <h2
            className="mt-3 font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            From application to approval
          </h2>
        </div>

        {/* Step cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 ring-1 ring-border transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Large faint number watermark */}
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none font-display font-bold leading-none text-gray-100 transition-colors duration-300 group-hover:text-gray-50 text-[11rem] lg:text-[8rem]"
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Otter mascot illustration */}
              <div className="relative flex items-center justify-center">
                {step.mascot}
              </div>

              {/* Step number label */}
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Step {step.number}
              </p>

              <h3
                className="mt-1.5 font-display font-semibold text-foreground"
                style={{ fontSize: "var(--text-xl)" }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{step.description}</p>

              {/* Detail tag */}
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-accent bg-ink px-3 py-1 text-xs font-semibold text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Connector arrows on desktop */}
        <div className="mt-8 hidden items-center justify-center gap-0 lg:flex">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex items-center">
              <span className="text-xs font-medium text-gray-400">{step.title}</span>
              {i < STEPS.length - 1 && (
                <span className="mx-6 text-accent" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/apply"
            className="inline-flex rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Start My Application →
          </Link>
          <p className="mt-3 text-xs text-gray-400">No obligation · No credit impact · 100% free</p>
        </div>
      </div>
    </section>
  );
}
