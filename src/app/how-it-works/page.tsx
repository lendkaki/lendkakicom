import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CtaForm } from "@/components/cta-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HiwHero } from "@/components/how-it-works-page/hiw-hero";
import { ProcessSteps } from "@/components/how-it-works-page/process-steps";
import { AdvantageSection } from "@/components/how-it-works-page/advantage-section";

export const metadata: Metadata = {
  title: "How It Works | LendKaki",
  description:
    "Apply once and receive personalised rates from 20+ licensed lenders in three simple steps. No paperwork upfront, no branch visits needed. 100% free.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero — above fold */}
        <HiwHero />

        {/* 3-step process — surface bg */}
        <ScrollReveal>
          <ProcessSteps />
        </ScrollReveal>

        {/* LendKaki Advantage — white bg */}
        <ScrollReveal delay={60}>
          <AdvantageSection />
        </ScrollReveal>

        {/* Apply form — black bg */}
        <CtaForm compact />
      </main>
      <Footer />
    </>
  );
}
