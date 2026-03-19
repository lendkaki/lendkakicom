"use client";

import { useState } from "react";

const BENEFITS = [
  "Fast, easy application process",
  "Secure match with trusted lenders",
  "No hidden fees, full transparency",
  "Dedicated customer support",
];

const PURPOSES = [
  "Personal Loan",
  "Business Loan",
  "Bridging Loan",
  "Debt Consolidation",
  "Wedding Loan",
  "Renovation Loan",
  "Foreigner Loan",
  "Other",
];

export function CtaForm() {
  const [residency, setResidency] = useState<"local" | "foreigner">("local");

  return (
    <section className="bg-black pb-20 pt-40 lg:pb-28 lg:pt-52">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        {/* Left — headline + benefits */}
        <div>
          <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-text">
            20+ Trusted Lenders
          </span>
          <h2
            className="mt-6 font-display font-bold tracking-tight text-white"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Explore Your Personal Loan Options Now
          </h2>
          <ul className="mt-8 flex flex-col gap-4">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-0.5 shrink-0"
                >
                  <circle cx="10" cy="10" r="10" fill="var(--accent)" />
                  <path
                    d="M6.5 10.5L8.5 12.5L13.5 7.5"
                    stroke="var(--accent-text)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-gray-300">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl bg-gray-900 p-8"
        >
          <div className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <label
                htmlFor="cta-name"
                className="mb-1.5 block text-xs font-medium text-gray-400"
              >
                Name
              </label>
              <input
                id="cta-name"
                type="text"
                placeholder="Your full name"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            {/* Mobile */}
            <div>
              <label
                htmlFor="cta-mobile"
                className="mb-1.5 block text-xs font-medium text-gray-400"
              >
                Mobile Number
              </label>
              <input
                id="cta-mobile"
                type="tel"
                placeholder="+65"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            {/* Loan amount */}
            <div>
              <label
                htmlFor="cta-amount"
                className="mb-1.5 block text-xs font-medium text-gray-400"
              >
                Desired Loan Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  $
                </span>
                <input
                  id="cta-amount"
                  type="text"
                  placeholder="10,000"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 py-3 pl-8 pr-4 text-sm text-white placeholder:text-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            {/* Purpose */}
            <div>
              <label
                htmlFor="cta-purpose"
                className="mb-1.5 block text-xs font-medium text-gray-400"
              >
                Purpose of Loan
              </label>
              <select
                id="cta-purpose"
                defaultValue=""
                className="w-full appearance-none rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              >
                <option value="" disabled>
                  Select purpose of loan
                </option>
                {PURPOSES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Residency toggle */}
            <div>
              <span className="mb-1.5 block text-xs font-medium text-gray-400">
                Residency
              </span>
              <div className="flex rounded-lg bg-gray-800 p-1">
                <button
                  type="button"
                  onClick={() => setResidency("local")}
                  className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
                    residency === "local"
                      ? "bg-accent text-accent-text"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Singapore / PR
                </button>
                <button
                  type="button"
                  onClick={() => setResidency("foreigner")}
                  className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
                    residency === "foreigner"
                      ? "bg-accent text-accent-text"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Foreigner
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-accent py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Get Your Loan Options
            </button>

            <p className="text-center text-[11px] leading-relaxed text-gray-500">
              By proceeding, I agree to LendKaki&apos;s{" "}
              <a href="/terms" className="underline hover:text-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline hover:text-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
