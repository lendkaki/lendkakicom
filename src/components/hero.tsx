"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { OtterMascot } from "@/components/mascot/otter-mascot";

const ROTATING_WORDS = ["business growth", "personal needs", "your goals"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-8 lg:pt-24">
        {/* Text content */}
        <div className="max-w-2xl">
          <h1
            className="font-display leading-[1.08] tracking-tight text-foreground"
            style={{ fontSize: "var(--text-5xl)" }}
          >
            The fastest loan platform for{" "}
            <span
              className={`inline-block bg-accent px-2 py-0.5 transition-all duration-400 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-3 opacity-0"
              }`}
              style={{ color: "var(--accent-text)" }}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
          </h1>

          <p
            className="mt-6 max-w-lg text-gray-500"
            style={{ fontSize: "var(--text-lg)", lineHeight: 1.7 }}
          >
            Compare 20+ licensed lenders. One application.
          </p>

          {/* CTAs + mobile otter side-by-side */}
          <div className="mt-10 flex items-center gap-6">
            {/* Buttons — stacked on mobile, row on sm+ */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/apply"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover"
              >
                Compare Rates Now
              </Link>
              <Link
                href="#how-it-works"
                className="rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                See How It Works
              </Link>
            </div>

            {/* Mobile otter — right of CTAs, hidden on desktop */}
            <div className="flex-shrink-0 lg:hidden">
              <OtterMascot pose="hero" size={110} />
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-12">
            <StatPill label="Lowest rate found" value="2.0% p.a." />
            <StatPill label="Avg. approval" value="<24h" />
            <StatPill label="Apply securely with" value="Singpass" />
          </div>
        </div>

        {/* Kaki the Otter mascot */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <OtterMascot pose="hero" size={220} />
        </div>
      </div>
    </section>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
      <span className="text-xs text-gray-400">{label}</span>
      <span className="text-xs font-semibold text-foreground">{value}</span>
    </div>
  );
}
