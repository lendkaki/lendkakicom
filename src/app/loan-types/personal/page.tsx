import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaForm } from "@/components/cta-form";
import { PersonalHero } from "@/components/loan-types/personal-hero";
import { PersonalWhy } from "@/components/loan-types/personal-why";
import { PersonalCalculator } from "@/components/loan-types/personal-calculator";
import { PersonalTestimonials } from "@/components/loan-types/personal-testimonials";
import { PersonalFaq } from "@/components/loan-types/personal-faq";

export const metadata: Metadata = {
  title: "Best Personal Loans Singapore | Compare Rates | LendKaki",
  description:
    "Compare personal loan rates from 20+ licensed lenders and banks in Singapore. Free, no hidden fees, same-day approval available. Get your best offer in 60 seconds.",
};

export default function PersonalLoansPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero — no reveal, loads immediately */}
        <PersonalHero />

        {/* Why LendKaki */}
        <ScrollReveal delay={0}>
          <PersonalWhy />
        </ScrollReveal>

        {/* Inline CTA strip — midpage conversion nudge */}
        <ScrollReveal delay={0}>
          <section className="bg-accent py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div>
                  <p
                    className="font-display font-bold text-accent-text"
                    style={{ fontSize: "var(--text-xl)" }}
                  >
                    Ready to find your best rate?
                  </p>
                  <p className="mt-0.5 text-sm text-accent-text/70">
                    Free, no obligation, takes less than 2 minutes.
                  </p>
                </div>
                <a
                  href="/apply"
                  className="shrink-0 rounded-full bg-accent-text px-7 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
                >
                  Apply Now — Free →
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Calculator */}
        <ScrollReveal delay={0}>
          <PersonalCalculator />
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal delay={0}>
          <PersonalTestimonials />
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal delay={0}>
          <PersonalFaq />
        </ScrollReveal>

        {/* Bottom CTA form */}
        <CtaForm compact />
      </main>
      <Footer />
    </>
  );
}
