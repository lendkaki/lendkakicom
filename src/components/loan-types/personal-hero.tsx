"use client";

import Link from "next/link";

const BULLETS = [
  "20+ licensed lenders in one place",
  "100% free, no hidden fees",
  "Same-day approval available",
];

function AnimatedCheck({ delay = 0 }: { delay?: number }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 shrink-0"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" fill="var(--accent)" />
      <path
        d="M6 10.5L8.5 13L14 7.5"
        stroke="var(--accent-text)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        style={{
          animation: `draw-in 0.6s ease forwards ${delay}ms`,
        }}
      />
    </svg>
  );
}

export function PersonalHero() {
  return (
    <section className="bg-white pb-16 pt-14 lg:pb-20 lg:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
          {/* Left — text */}
          <div className="animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-text">
              Personal Loans
            </p>
            <h1
              className="mt-4 font-display font-bold tracking-tight text-foreground"
              style={{ fontSize: "var(--text-5xl)" }}
            >
              Singapore&apos;s Best Personal Loan Rates in{" "}
              <span className="relative inline-block whitespace-nowrap">
                60 Seconds
                <span
                  className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent"
                  aria-hidden="true"
                />
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-500">
              One application, 20+ licensed lenders and banks. Get personalised personal loan offers
              tailored to your profile — for free.
            </p>

            {/* Animated bullet list */}
            <ul className="mt-7 flex flex-col gap-3">
              {BULLETS.map((text, i) => (
                <li key={text} className="flex items-start gap-3">
                  <AnimatedCheck delay={200 + i * 150} />
                  <span className="text-sm font-medium text-foreground">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Compare Rates Now — Free
              </Link>
              <Link
                href="#why"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Learn more ↓
              </Link>
            </div>

            {/* Micro trust note */}
            <p className="mt-4 text-xs text-gray-400">
              Trusted by thousands of Singaporeans · No credit impact
            </p>
          </div>

          {/* Right — floating offer card illustration */}
          <div className="hidden animate-fade-up lg:block" style={{ animationDelay: "150ms" }}>
            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl bg-gray-950 p-8 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Your best match
                  </span>
                  <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-text">
                    Top Offer
                  </span>
                </div>
                <p
                  className="mt-4 font-display font-bold text-white"
                  style={{ fontSize: "var(--text-4xl)" }}
                >
                  2.0%<span className="text-lg font-normal text-gray-400"> p.a.</span>
                </p>
                <p className="mt-1 text-sm text-gray-400">Effective interest rate</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Loan Amount", value: "$20,000" },
                    { label: "Tenure", value: "24 months" },
                    { label: "Monthly", value: "$851/mo" },
                    { label: "Approval", value: "Same Day" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/5 px-4 py-3">
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-xl bg-accent/10 px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 3L4 7v5c0 4.418 3.358 8.549 8 9.9C19.642 20.549 20 16.418 20 12V7l-8-4z"
                      stroke="var(--accent)"
                      strokeWidth="1.75"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="var(--accent)"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-accent">
                    MAS-regulated lender · Verified
                  </span>
                </div>
              </div>

              {/* Floating badge — "20+ offers" */}
              <div
                className="absolute -left-6 -top-4 animate-fade-up rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-border"
                style={{ animationDelay: "400ms" }}
              >
                <p className="text-xs text-gray-400">Matched offers</p>
                <p
                  className="font-display font-bold text-foreground"
                  style={{ fontSize: "var(--text-2xl)" }}
                >
                  20+
                </p>
              </div>

              {/* Floating badge — approval time */}
              <div
                className="absolute -bottom-4 -right-4 animate-fade-up rounded-2xl bg-accent px-4 py-3 shadow-xl"
                style={{ animationDelay: "550ms" }}
              >
                <p className="text-xs font-medium text-accent-text/70">Avg. approval</p>
                <p className="font-display text-lg font-bold text-accent-text">&lt;24h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
