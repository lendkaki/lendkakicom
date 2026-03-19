import Link from "next/link";
import type { ReactNode } from "react";

interface Feature {
  title: string;
  description: ReactNode;
  href: string;
  illustration: ReactNode;
}

const FEATURES: Feature[] = [
  {
    title: "Fast Processing",
    description: (
      <>
        75% of applicants approved within 24 hours. Same-day disbursement
        available.{" "}
        <Link
          href="/company"
          className="font-semibold text-foreground underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          Learn more
        </Link>
      </>
    ),
    href: "/company",
    illustration: (
      <div className="flex h-full w-full items-center justify-center">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Lightning bolt — speed / fast approval */}
          <rect width="80" height="80" rx="16" fill="var(--accent)" fillOpacity="0.15" />
          <path
            d="M46 14L26 44H42L38 66L58 36H42L46 14Z"
            fill="var(--accent)"
            stroke="var(--accent-text)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "20+ Licensed Lenders",
    description: (
      <>
        Compare banks and MAS &amp; MinLaw regulated institutions side by side.
        All in one application.{" "}
        <Link
          href="/loan-types"
          className="font-semibold text-foreground underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          View loan types
        </Link>
      </>
    ),
    href: "/loan-types",
    illustration: (
      <div className="flex h-full w-full items-center justify-center">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Bank / building — lenders */}
          <rect width="80" height="80" rx="16" fill="var(--accent)" fillOpacity="0.15" />
          <rect x="24" y="52" width="32" height="14" rx="2" fill="var(--gray-800)" />
          <rect x="28" y="40" width="4" height="12" fill="var(--gray-700)" />
          <rect x="36" y="40" width="4" height="12" fill="var(--gray-700)" />
          <rect x="44" y="40" width="4" height="12" fill="var(--gray-700)" />
          <path
            d="M20 40H60L40 22L20 40Z"
            fill="var(--accent)"
            stroke="var(--accent-text)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect x="22" y="52" width="36" height="2" rx="1" fill="var(--gray-600)" />
        </svg>
      </div>
    ),
  },
  {
    title: "Zero Credit Impact",
    description: (
      <>
        Soft checks only — your credit score stays untouched while you shop for
        the best rate.{" "}
        <Link
          href="/company"
          className="font-semibold text-foreground underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          How it works
        </Link>
      </>
    ),
    href: "/company",
    illustration: (
      <div className="flex h-full w-full items-center justify-center">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Shield with check — protection / zero impact */}
          <rect width="80" height="80" rx="16" fill="var(--accent)" fillOpacity="0.15" />
          <path
            d="M40 14L18 24V42C18 54 40 66 40 66C40 66 62 54 62 42V24L40 14Z"
            fill="var(--accent)"
            fillOpacity="0.3"
            stroke="var(--accent)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M31 40L37 46L50 34"
            stroke="var(--gray-900)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Completely Free",
    description: (
      <>
        No hidden charges, no spam calls. LendKaki is 100% free for borrowers —
        always.{" "}
        <Link
          href="/company"
          className="font-semibold text-foreground underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          Our promise
        </Link>
      </>
    ),
    href: "/company",
    illustration: (
      <div className="flex h-full w-full items-center justify-center">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Dollar with a circle cross — free / no cost */}
          <rect width="80" height="80" rx="16" fill="var(--accent)" fillOpacity="0.15" />
          <circle
            cx="40"
            cy="40"
            r="22"
            fill="var(--accent)"
            fillOpacity="0.25"
            stroke="var(--accent)"
            strokeWidth="2.5"
          />
          <path
            d="M40 18V62M48 26H35.5C32.46 26 30 28.46 30 31.5C30 34.54 32.46 37 35.5 37H44.5C47.54 37 50 39.46 50 42.5C50 45.54 47.54 48 44.5 48H32"
            stroke="var(--gray-900)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
];

export function Advantages() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Why LendKaki
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-tight text-foreground"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              Everything you need
              <br />
              in one platform
            </h2>
          </div>
          <Link
            href="/company"
            className="text-sm font-semibold text-foreground underline underline-offset-4 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:self-end"
          >
            Learn about LendKaki →
          </Link>
        </div>

        {/* Pera-style card grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-surface transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Card heading */}
              <div className="px-7 pt-7">
                <h3
                  className="font-display font-bold leading-snug tracking-tight text-foreground"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  {feature.title}
                </h3>
              </div>

              {/* Illustration area */}
              <div className="mt-6 h-44 w-full px-7">
                {feature.illustration}
              </div>

              {/* Description */}
              <div className="mt-6 px-7 pb-7">
                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
