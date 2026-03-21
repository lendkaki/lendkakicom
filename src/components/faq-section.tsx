"use client";

import { useState } from "react";
import Link from "next/link";
import { OtterMascot } from "@/components/mascot/otter-mascot";

export const ALL_FAQS = [
  {
    q: "How does LendKaki work?",
    a: "LendKaki is a free loan comparison platform. You fill in one simple form — it takes under 2 minutes — and we instantly match you with personalised loan offers from our network of 20+ licensed banks and financial institutions. You compare the offers side by side and choose the one that suits you best. No separate applications, no running around.",
  },
  {
    q: "Is LendKaki's service really free?",
    a: "Yes, 100% free for borrowers — always. LendKaki earns a referral fee from lenders only when a loan is successfully disbursed to you. You will never be charged by LendKaki for using our platform, and there are no hidden fees of any kind.",
  },
  {
    q: "Will checking rates affect my credit score?",
    a: "No. LendKaki only performs soft credit inquiries during the matching process. Soft checks do not appear on your credit report and have zero impact on your credit score. Only if you proceed with a specific lender and they conduct a formal application will a hard check be made — and that would be disclosed to you before it happens.",
  },
  {
    q: "How quickly can I get approved?",
    a: "Most applicants receive matched offers within minutes of submitting their application. Approval timelines depend on the individual lender, but 75% of our applicants receive approval within 24 hours. Many lenders in our network can disburse funds the same day your application is approved.",
  },
  {
    q: "What types of loans can I apply for?",
    a: "LendKaki helps you compare Personal Loans, Business Loans, and Instant Loans from licensed lenders. If you are unsure which loan type suits your needs, our team is happy to guide you.",
  },
  {
    q: "Who are the lenders on your platform?",
    a: "All lenders on LendKaki are regulated by the Monetary Authority of Singapore (MAS) or licensed by the Ministry of Law (MinLaw). Our network includes major local banks, licensed finance companies, and licensed moneylenders. We do not work with unlicensed or unregulated lenders.",
  },
  {
    q: "What are the eligibility requirements?",
    a: "To apply through LendKaki you must be at least 21 years old, a Singapore Citizen, Permanent Resident, or foreigner with a valid pass, and have a valid Singapore mobile number. Individual lenders may have additional requirements such as minimum income thresholds — these will be shown alongside each offer.",
  },
  {
    q: "What documents do I need to prepare?",
    a: "For most applications you will need your NRIC or Passport, your last 3 months' payslips or CPF contribution history (for employed applicants), or your last 2 years' Notice of Assessment (for self-employed applicants). Some lenders may ask for additional documents during their own verification process.",
  },
  {
    q: "Can I apply if I have bad credit or existing loans?",
    a: "Yes. LendKaki works with lenders who cater to a wide range of credit profiles, including applicants with existing loans or less-than-perfect credit histories. While approval is ultimately at each lender's discretion, our matching algorithm will show you offers from lenders most likely to approve your profile.",
  },
  {
    q: "Is my personal information secure?",
    a: "Absolutely. LendKaki is fully compliant with Singapore's Personal Data Protection Act (PDPA). All data is transmitted over encrypted SSL/TLS connections and is only shared with licensed lenders you are matched with. We never sell your data to third parties. For more details, read our Privacy Policy.",
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 rounded py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <span
          className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 4v12M4 10h12"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-gray-500">{a}</p>
      </div>
    </div>
  );
}

interface FaqSectionProps {
  /** Limit the number of items shown. Shows all by default. */
  limit?: number;
  /** Whether to show the "Still have questions?" CTA at the bottom */
  showCta?: boolean;
}

export function FaqSection({ limit, showCta = true }: FaqSectionProps) {
  const items = limit ? ALL_FAQS.slice(0, limit) : ALL_FAQS;

  return (
    <section className="bg-white py-20 lg:py-28" id="faq">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <OtterMascot pose="think" size={90} />
          <h2
            className="mt-4 font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Everything you need to know about finding your perfect loan.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 rounded-2xl bg-surface px-6 ring-1 ring-border">
          {items.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* CTA */}
        {showCta && (
          <div className="mt-10 rounded-2xl bg-surface px-8 py-8 text-center ring-1 ring-border">
            <p className="text-sm font-semibold text-foreground">Still have questions?</p>
            <p className="mt-1 text-sm text-gray-500">
              Our team is here to help you make the right decision.
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/faq"
                className="inline-flex rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                See all FAQs
              </Link>
              <a
                href="https://wa.me/6589009628?text=Hi,%20I%20need%20loan%20assistance%20from%20Lendkaki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat with Us
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
