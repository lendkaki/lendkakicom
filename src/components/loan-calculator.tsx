"use client";

import { useState, useId, useCallback } from "react";
import Link from "next/link";

function fmt(n: number) {
  return n.toLocaleString("en-SG", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtPct(n: number) {
  return n.toLocaleString("en-SG", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

/** Reducing-balance monthly instalment */
function calcMonthly(principal: number, annualRate: number, months: number) {
  if (annualRate === 0) return principal / months;
  const r = annualRate / 100 / 12;
  const n = months;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

interface SliderFieldProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  onChange: (v: number) => void;
}

function SliderField({ id, label, value, min, max, step, displayValue, onChange }: SliderFieldProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-semibold text-foreground">
          {label}
        </label>
        <span
          className="font-display font-bold text-foreground"
          style={{ fontSize: "var(--text-2xl)" }}
        >
          {displayValue}
        </span>
      </div>
      <div className="mt-3">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="apply-slider w-full"
          style={
            {
              "--slider-pct": `${pct}%`,
            } as React.CSSProperties
          }
        />
        <div className="mt-1.5 flex justify-between text-xs text-gray-400">
          <span>{min === 1 ? "1%" : `$${min.toLocaleString()}`}</span>
          <span>
            {label === "Interest Rate (p.a.)"
              ? "48%"
              : label === "Tenure"
              ? "24 months"
              : "$100,000+"}
          </span>
        </div>
      </div>
    </div>
  );
}

/** SVG donut chart — principal vs interest */
function DonutChart({ principalPct }: { principalPct: number }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const interestPct = 100 - principalPct;
  const principalDash = (principalPct / 100) * circ;
  const interestDash = circ - principalDash;

  return (
    <svg viewBox="0 0 120 120" className="w-full max-w-[160px]" aria-hidden="true">
      {/* Track */}
      <circle cx="60" cy="60" r={r} fill="none" stroke="#e5e7eb" strokeWidth="14" />
      {/* Interest arc (gray, drawn first / underneath) */}
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="#d1d5db"
        strokeWidth="14"
        strokeDasharray={`${interestDash} ${principalDash}`}
        strokeDashoffset={0}
        transform="rotate(-90 60 60)"
      />
      {/* Principal arc (accent yellow) */}
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="14"
        strokeLinecap="butt"
        strokeDasharray={`${principalDash} ${interestDash}`}
        strokeDashoffset={0}
        transform="rotate(-90 60 60)"
      />
      {/* Centre label */}
      <text
        x="60"
        y="56"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="13"
        fontWeight="700"
        fill="currentColor"
      >
        {Math.round(principalPct)}%
      </text>
      <text
        x="60"
        y="70"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="8"
        fill="#9ca3af"
      >
        principal
      </text>
    </svg>
  );
}

export function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [tenure, setTenure] = useState(12);
  const [rate, setRate] = useState(6.0);

  const amountId = useId();
  const tenureId = useId();
  const rateId = useId();

  const monthly = useCallback(() => calcMonthly(amount, rate, tenure), [amount, rate, tenure])();
  const totalPayable = monthly * tenure;
  const totalInterest = totalPayable - amount;
  const principalPct = (amount / totalPayable) * 100;

  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:items-start">
        {/* ── Left: sliders ── */}
        <div className="rounded-2xl bg-surface p-8 ring-1 ring-border lg:p-10">
          <div className="flex flex-col gap-8">
            <SliderField
              id={amountId}
              label="Loan Amount"
              value={amount}
              min={1000}
              max={100000}
              step={500}
              displayValue={`$${amount.toLocaleString()}`}
              onChange={setAmount}
            />
            <SliderField
              id={tenureId}
              label="Tenure"
              value={tenure}
              min={1}
              max={24}
              step={1}
              displayValue={`${tenure} ${tenure === 1 ? "month" : "months"}`}
              onChange={setTenure}
            />
            <SliderField
              id={rateId}
              label="Interest Rate (p.a.)"
              value={rate}
              min={1}
              max={48}
              step={0.1}
              displayValue={`${fmtPct(rate)}%`}
              onChange={setRate}
            />
          </div>
        </div>

        {/* ── Right: results ── */}
        <div className="flex flex-col gap-4">
          {/* Monthly instalment — hero card */}
          <div className="rounded-2xl bg-black px-8 py-7 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Monthly Instalment
            </p>
            <p
              className="mt-2 font-display font-bold text-white"
              style={{ fontSize: "var(--text-4xl)" }}
            >
              ${fmt(monthly)}
            </p>
            <p className="mt-1 text-xs text-gray-500">per month</p>
          </div>

          {/* Breakdown */}
          <div className="rounded-2xl bg-surface p-6 ring-1 ring-border">
            <div className="flex items-center gap-6">
              <DonutChart principalPct={principalPct} />
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="text-xs text-gray-500">Principal</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">${fmt(amount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                    <span className="text-xs text-gray-500">Total Interest</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">${fmt(totalInterest)}</span>
                </div>
                <div className="mt-1 border-t border-border pt-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-foreground">Total Payable</span>
                  <span className="text-sm font-bold text-foreground">${fmt(totalPayable)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/apply"
            className="flex items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Get My Best Rates →
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-10 text-center text-[11px] leading-relaxed text-gray-400">
        This calculator provides indicative estimates only and does not constitute a loan offer.
        Actual loan terms, interest rates, and monthly instalments may vary depending on the lender,
        your credit profile, and other factors.
      </p>
    </div>
  );
}
