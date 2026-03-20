import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { KeywordTicker } from "@/components/keyword-ticker";
import { TrustStrip } from "@/components/trust-strip";
import { Advantages } from "@/components/advantages";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { BridgeCard } from "@/components/bridge-card";
import { FaqSection } from "@/components/faq-section";
import { CtaForm } from "@/components/cta-form";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero above the fold */}
        <Hero />

        {/* Pera-style keyword ticker — immediately after hero */}
        <KeywordTicker />

        {/* Stats / trust numbers — white background, generous space */}
        <TrustStrip />

        {/* Feature cards — Pera-style grid, white background */}
        <ScrollReveal>
          <Advantages />
        </ScrollReveal>

        {/* How it works — surface background for rhythm break */}
        <ScrollReveal delay={60}>
          <HowItWorks />
        </ScrollReveal>

        {/* Testimonials — surface background */}
        <ScrollReveal delay={60}>
          <Testimonials />
        </ScrollReveal>

        {/* FAQ accordion — white background, before CTA */}
        <ScrollReveal delay={60}>
          <FaqSection limit={6} />
        </ScrollReveal>

        {/* Overlapping bridge card — yellow accent, overlaps into the dark CTA section */}
        <ScrollReveal className="relative z-10 -mb-24 lg:-mb-32">
          <BridgeCard />
        </ScrollReveal>

        {/* Lead form — near-black dark section, extra top padding for bridge card overlap */}
        <ScrollReveal>
          <CtaForm />
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
