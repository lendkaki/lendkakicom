import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaForm } from "@/components/cta-form";
import { InstantHero } from "@/components/loan-types/instant-hero";
import { InstantWhy } from "@/components/loan-types/instant-why";
import { InstantCalculator } from "@/components/loan-types/instant-calculator";
import { InstantTestimonials } from "@/components/loan-types/instant-testimonials";
import { InstantFaq } from "@/components/loan-types/instant-faq";

export const metadata: Metadata = {
  title: "Instant Loans Singapore | Same-Day Disbursement | LendKaki",
  description:
    "Get an instant loan in Singapore with same-day fund disbursement. Compare offers from 20+ licensed lenders in 60 seconds. Free, no credit impact, apply in 2 minutes.",
};

export default function InstantLoansPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero — no reveal, loads immediately */}
        <InstantHero />

        {/* Why LendKaki for Instant Loans */}
        <ScrollReveal delay={0}>
          <InstantWhy />
        </ScrollReveal>

        {/* Inline CTA strip — urgency-focused nudge */}
        <ScrollReveal delay={0}>
          <section className="bg-accent py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div>
                  <p
                    className="font-display font-bold text-accent-text"
                    style={{ fontSize: "var(--text-xl)" }}
                  >
                    Need cash today?
                  </p>
                  <p className="mt-0.5 text-sm text-accent-text/70">
                    Apply now — most applicants get funds the same day.
                  </p>
                </div>
                <a
                  href="/apply"
                  className="shrink-0 rounded-full bg-accent-text px-7 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-ink-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
                >
                  Apply Now — Free →
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Calculator */}
        <ScrollReveal delay={0}>
          <InstantCalculator />
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal delay={0}>
          <InstantTestimonials />
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal delay={0}>
          <InstantFaq />
        </ScrollReveal>

        {/* Bottom CTA form */}
        <CtaForm compact />
      </main>
      <Footer />
    </>
  );
}
