import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CtaForm } from "@/components/cta-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CompanyHero } from "@/components/company/company-hero";
import { ValueProps } from "@/components/company/value-props";
import { CompanySteps } from "@/components/company/company-steps";
import { TrustPoints } from "@/components/company/trust-points";
import { MissionSection } from "@/components/company/mission-section";

export const metadata: Metadata = {
  title: "Why LendKaki? | LendKaki",
  description:
    "Apply once, save thousands. LendKaki lets you skip the queue — apply once and let 20+ licensed lenders compete for your business. MAS & MinLaw regulated. 100% free.",
};

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero — above fold, no scroll reveal needed */}
        <CompanyHero />

        {/* Why Singaporeans pick us — surface bg */}
        <ScrollReveal>
          <ValueProps />
        </ScrollReveal>

        {/* 3-step process — white bg */}
        <ScrollReveal delay={60}>
          <CompanySteps />
        </ScrollReveal>

        {/* Trust points — surface bg */}
        <ScrollReveal delay={60}>
          <TrustPoints />
        </ScrollReveal>

        {/* Mission statement — white bg */}
        <ScrollReveal delay={60}>
          <MissionSection />
        </ScrollReveal>

        {/* Apply Now form — light bg (dark bg on all other pages) */}
        <CtaForm compact light />
      </main>
      <Footer />
    </>
  );
}
