"use client";

import Link from "next/link";

const BULLETS = [
  "Apply in 2 minutes — no paperwork",
  "Same-day fund disbursement",
  "20+ licensed lenders, one application",
];

const ELIGIBILITY = [
  { label: "Min. age 18 years old", icon: "🪪" },
  { label: "Currently employed", icon: "💼" },
  { label: "Foreigners: $40K+ annual income", icon: "🌏" },
  { label: "S'poreans/PR: $300+ monthly income", icon: "🇸🇬" },
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
        style={{ animation: `draw-in 0.6s ease forwards ${delay}ms` }}
      />
    </svg>
  );
}

export function InstantHero() {
  return (
    <section className="bg-white pb-16 pt-14 lg:pb-20 lg:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
          {/* Left — text */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-accent bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-text shadow-[0_0_12px_2px_rgba(247,211,71,0.35)]">
              Instant Loans
            </span>
            <h1
              className="mt-4 font-display font-bold tracking-tight text-foreground"
              style={{ fontSize: "var(--text-5xl)" }}
            >
              Same-Day Loan{" "}
              <span className="relative inline-block whitespace-nowrap">
                Disbursement
                <span
                  className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent"
                  aria-hidden="true"
                />
              </span>{" "}
              in Singapore
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-500">
              Apply in 2 minutes, get matched instantly, and receive funds in
              your bank account the same day. No long waits, no unnecessary
              back-and-forth.
            </p>

            {/* Animated bullet list */}
            <ul className="mt-7 flex flex-col gap-3">
              {BULLETS.map((text, i) => (
                <li key={text} className="flex items-start gap-3">
                  <AnimatedCheck delay={200 + i * 150} />
                  <span className="text-sm font-medium text-foreground">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Eligibility pills */}
            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Eligibility Requirements
              </p>
              <div className="flex flex-wrap gap-2">
                {ELIGIBILITY.map((req) => (
                  <span
                    key={req.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground"
                  >
                    <span aria-hidden="true">{req.icon}</span>
                    {req.label}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Get Funds Today — Free
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
              Trusted by thousands of Singaporeans · No credit impact · MAS-regulated lenders
            </p>
          </div>

          {/* Right — floating instant loan offer card */}
          <div
            className="hidden animate-fade-up lg:block"
            style={{ animationDelay: "150ms" }}
          >
            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl bg-ink p-8 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Your best match
                  </span>
                  <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-text">
                    Instant Loan
                  </span>
                </div>
                <p
                  className="mt-4 font-display font-bold text-white"
                  style={{ fontSize: "var(--text-4xl)" }}
                >
                  4.0%
                  <span className="text-lg font-normal text-gray-400">
                    {" "}
                    p.a.
                  </span>
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Effective interest rate
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Loan Amount", value: "$5,000" },
                    { label: "Tenure", value: "6 months" },
                    { label: "Monthly", value: "$854/mo" },
                    { label: "Disbursement", value: "Same Day" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-white/5 px-4 py-3"
                    >
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-xl bg-accent/10 px-4 py-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
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

              {/* Floating badge — same day */}
              <div
                className="absolute -left-6 -top-4 animate-fade-up rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-border"
                style={{ animationDelay: "400ms" }}
              >
                <p className="text-xs text-gray-400">Disbursement</p>
                <p
                  className="font-display font-bold text-foreground"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  Same Day
                </p>
              </div>

              {/* Floating badge — approval time */}
              <div
                className="absolute -bottom-4 -right-4 animate-fade-up rounded-2xl bg-accent px-4 py-3 shadow-xl"
                style={{ animationDelay: "550ms" }}
              >
                <p className="text-xs font-medium text-accent-text/70">
                  Approval in
                </p>
                <p className="font-display text-lg font-bold text-accent-text">
                  &lt;2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
