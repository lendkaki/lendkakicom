"use client";

import { useState } from "react";

const PERSONAL_FAQS = [
  {
    q: "What is a personal loan?",
    a: "A personal loan is an unsecured loan that gives you a lump sum of cash you repay over a fixed period in regular instalments. Unlike a credit card, a personal loan typically has a lower interest rate and a predictable monthly payment — making it a popular choice for large expenses, debt consolidation, or emergency funding in Singapore.",
  },
  {
    q: "What are the eligibility requirements for a personal loan in Singapore?",
    a: "Requirements vary by lender, but most require you to be at least 21 years old, have a valid Singapore NRIC or Employment Pass, and meet a minimum annual income (commonly $20,000–$30,000 for Singaporeans/PRs; higher for foreigners). Some licensed moneylenders have more flexible criteria for lower income groups.",
  },
  {
    q: "How quickly can I receive the funds?",
    a: "Many of our lender partners offer same-day or next-day disbursement once your application is approved. After you submit your application on LendKaki, a lender agent typically contacts you within a few hours to finalise the terms and process the transfer.",
  },
  {
    q: "Will applying for a personal loan through LendKaki affect my credit score?",
    a: "LendKaki performs only soft checks to match you with suitable lenders — this does not impact your credit score. A hard credit inquiry only occurs when a lender formally processes your full application, typically after you have chosen a preferred offer.",
  },
  {
    q: "Is LendKaki really free to use?",
    a: "Yes, 100% free. LendKaki is a free loan comparison platform for borrowers. We earn a referral fee from lenders only when a successful match is made. You will never be asked to pay any fee or commission to use our service.",
  },
  {
    q: "How much can I borrow with a personal loan?",
    a: "For licensed banks, unsecured loan limits are capped at 12× your monthly income (or 6× for some bank personal loans). For licensed moneylenders, the cap depends on your annual income: up to $3,000 for those earning under $20,000, or 6× monthly income for higher earners. LendKaki will match you to lenders appropriate for your profile.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="pr-6 text-sm font-semibold text-foreground">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border transition-transform duration-200 ${open ? "rotate-45 bg-accent border-accent" : "bg-transparent"}`}
          aria-hidden="true"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M6 1v10M1 6h10"
              stroke={open ? "var(--accent-text)" : "var(--foreground)"}
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm leading-relaxed text-gray-500">{a}</p>
      </div>
    </div>
  );
}

export function PersonalFaq() {
  return (
    <section className="bg-white py-20 lg:py-28" id="faq">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-text">
            FAQ
          </span>
          <h2
            className="mt-3 font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Personal Loan FAQs
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Common questions about personal loans in Singapore.
          </p>
        </div>

        {/* Accordion */}
        <div className="rounded-2xl bg-surface ring-1 ring-border px-6">
          {PERSONAL_FAQS.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        {/* Chat CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-surface p-8 text-center ring-1 ring-border">
          <p className="text-sm font-medium text-foreground">
            Still have questions? Our team is happy to help.
          </p>
          <a
            href="https://wa.me/6589009628?text=Hi%2C%20I%20have%20a%20question%20about%20personal%20loans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
