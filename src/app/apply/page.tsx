import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TrustStrip } from "@/components/trust-strip";
import { ApplyHero } from "@/components/apply/apply-hero";
import { ApplyForm } from "@/components/apply/apply-form";
import { ApplyTestimonials } from "@/components/apply/apply-testimonials";
import { ApplyFaq } from "@/components/apply/apply-faq";

export const metadata: Metadata = {
  title: "Apply for a Loan | LendKaki",
  description:
    "Apply once and get matched to 20+ licensed lenders in Singapore. No credit impact. Same-day approval available. 100% free.",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <ApplyHero />
        <ApplyForm />
        <TrustStrip />
        <ApplyTestimonials />
        <ApplyFaq />

        {/* Bottom CTA */}
        <section className="bg-ink py-16 lg:py-20">
          <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
            <h2
              className="font-display font-bold tracking-tight text-white"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              Ready to find your best rate?
            </h2>
            <p className="mt-4 text-sm text-gray-400">
              Join thousands of Singaporeans who save on their loans every month.
            </p>
            <Link
              href="#apply-form"
              className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Get My Best Rates
            </Link>
            <p className="mt-4 text-xs text-gray-600">
              No obligation · No credit impact · 100% free
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
