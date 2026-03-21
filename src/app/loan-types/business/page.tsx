import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaForm } from "@/components/cta-form";
import { BusinessHero } from "@/components/loan-types/business-hero";
import { BusinessWhy } from "@/components/loan-types/business-why";
import { BusinessCalculator } from "@/components/loan-types/business-calculator";
import { BusinessTestimonials } from "@/components/loan-types/business-testimonials";
import { BusinessFaq } from "@/components/loan-types/business-faq";

export const metadata: Metadata = {
  title: "Best Business Loans Singapore | Compare SME Loan Rates | LendKaki",
  description:
    "Compare business loan rates from 20+ licensed lenders in Singapore. Fast approval, flexible terms, and free matching for Singapore-registered companies. Get your best SME loan offer in 60 seconds.",
};

export default function BusinessLoansPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero — no reveal, loads immediately */}
        <BusinessHero />

        {/* Why LendKaki for Business */}
        <ScrollReveal delay={0}>
          <BusinessWhy />
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
                    Ready to fund your business growth?
                  </p>
                  <p className="mt-0.5 text-sm text-accent-text/70">
                    Free, no obligation, takes less than 2 minutes.
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
          <BusinessCalculator />
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal delay={0}>
          <BusinessTestimonials />
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal delay={0}>
          <BusinessFaq />
        </ScrollReveal>

        {/* Bottom CTA form */}
        <CtaForm compact />
      </main>
      <Footer />
    </>
  );
}
