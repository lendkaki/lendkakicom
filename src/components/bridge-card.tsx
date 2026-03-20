import Link from "next/link";
import { OtterMascot } from "@/components/mascot/otter-mascot";

export function BridgeCard() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-accent px-10 py-12 lg:px-16 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          {/* Left — text content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent-text/60">
              Get started today
            </p>
            <h2
              className="mt-3 font-display font-bold leading-tight tracking-tight text-accent-text"
              style={{ fontSize: "var(--text-4xl)" }}
            >
              Find your best loan rate in minutes
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-accent-text/70">
              One application. 20+ licensed lenders. No credit impact. LendKaki
              matches you with the best offer — fast, free, and fully
              transparent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                Compare Rates Now
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center rounded-full border border-black/20 px-7 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                See how it works
              </Link>
            </div>
          </div>

          {/* Right — Kaki the Otter */}
          <div className="hidden lg:flex lg:items-end lg:justify-center">
            <OtterMascot pose="present" size={160} />
          </div>
        </div>
      </div>
    </div>
  );
}
