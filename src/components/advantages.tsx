import Link from "next/link";
import type { ReactNode } from "react";
import { OtterMascot } from "@/components/mascot/otter-mascot";

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
        <OtterMascot pose="approve" size={100} />
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
        <OtterMascot pose="present" size={100} />
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
        <OtterMascot pose="think" size={100} />
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
        <OtterMascot pose="celebrate" size={100} />
      </div>
    ),
  },
];

export function Advantages() {
  return (
    <section className="bg-white pb-20 pt-10 lg:pb-28 lg:pt-14">
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
              className="group grid overflow-hidden rounded-2xl bg-surface transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ gridTemplateRows: "6rem 11rem 1fr" }}
            >
              {/* Row 1 — heading, fixed 6rem so all icons align regardless of title length */}
              <div className="flex items-start overflow-hidden px-7 pt-7">
                <h3
                  className="font-display font-bold leading-snug tracking-tight text-foreground"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  {feature.title}
                </h3>
              </div>

              {/* Row 2 — illustration, fixed 11rem */}
              <div className="w-full px-7">
                {feature.illustration}
              </div>

              {/* Row 3 — description, fills remaining space */}
              <div className="px-7 pb-7 pt-6">
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
