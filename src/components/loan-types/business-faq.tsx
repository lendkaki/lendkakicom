"use client";

import { useState } from "react";
import { OtterMascot } from "@/components/mascot/otter-mascot";

const BUSINESS_FAQS = [
  {
    q: "What is a business loan?",
    a: "A business loan is a financing product designed to help companies fund operations, growth, or short-term cash flow needs. In Singapore, business loans can be used for working capital, equipment purchases, inventory financing, office renovations, or bridging gaps between payments. They are typically offered by licensed banks and financial institutions, with repayment structured over a fixed term.",
  },
  {
    q: "What are the eligibility requirements for a business loan through LendKaki?",
    a: "Authorised applicants must be minimum age 18 years old. Your company must: (1) be registered in Singapore as a Private Limited company (Pte Ltd); (2) have been operating for at least 1 year; and (3) have a minimum annual revenue of $100,000. Individual lenders may have additional requirements such as credit profile standards — these will be shown alongside each matched offer.",
  },
  {
    q: "How quickly can my business receive funds?",
    a: "Many lenders in our network can approve business loan applications within 24 hours and disburse funds the same day or the next business day. After you submit your application on LendKaki, a lender representative will typically contact you within a few hours to verify details and finalise terms. Timelines may vary based on the lender and the loan amount requested.",
  },
  {
    q: "Will applying affect my personal or business credit score?",
    a: "LendKaki performs only soft credit checks during the matching process, which have no impact on your personal or business credit score. A hard credit inquiry will only occur if you choose to proceed with a specific lender and they formally process your full application — and this will be clearly disclosed to you before it happens.",
  },
  {
    q: "Is LendKaki free for business loan applications?",
    a: "Yes, completely free for borrowers. LendKaki earns a referral fee from lenders only when a loan is successfully disbursed to your business. You will never be charged any fee, commission, or service charge for using our platform — and there is no obligation to accept any offer presented to you.",
  },
  {
    q: "How much can my business borrow?",
    a: "Business loan amounts vary by lender, your company's revenue, credit profile, and the specific loan product. Through LendKaki's network, businesses commonly access loans ranging from $20,000 to $500,000 or more. Lenders will assess your financials — typically the last 2 years of financial statements and recent bank statements — to determine the appropriate loan quantum.",
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
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border transition-transform duration-200 ${
            open ? "rotate-45 border-accent bg-accent" : "bg-transparent"
          }`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-gray-500">{a}</p>
      </div>
    </div>
  );
}

export function BusinessFaq() {
  return (
    <section className="bg-white py-20 lg:py-28" id="faq">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <OtterMascot pose="think" size={80} />
          <h2
            className="font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-500">
            Common questions about business loans in Singapore.
          </p>
        </div>

        {/* Accordion */}
        <div className="rounded-2xl bg-surface px-6 ring-1 ring-border">
          {BUSINESS_FAQS.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        {/* Chat CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-surface p-8 text-center ring-1 ring-border">
          <p className="text-sm font-medium text-foreground">
            Still have questions? 🦦 Our team is happy to help.
          </p>
          <a
            href="https://wa.me/6589009628?text=Hi%2C%20I%20have%20a%20question%20about%20business%20loans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
