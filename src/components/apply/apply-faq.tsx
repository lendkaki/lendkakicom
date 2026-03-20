"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is LendKaki's service really free?",
    a: "Yes, completely. LendKaki is 100% free for borrowers. We are compensated by lenders when a loan is successfully disbursed — you never pay anything extra, and there are no hidden fees.",
  },
  {
    q: "Will checking rates affect my credit score?",
    a: "No. LendKaki only performs soft credit checks during the matching process. Your credit score is not impacted when you apply through our platform.",
  },
  {
    q: "How quickly can I get approved?",
    a: "75% of applicants receive a match within minutes. Approval timelines vary by lender, but many offer same-day approvals with funds disbursed within 24 hours.",
  },
  {
    q: "Is my personal information secure?",
    a: "Absolutely. We comply with Singapore's Personal Data Protection Act (PDPA). Your data is encrypted and only shared with licensed lenders you are matched with.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
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
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-gray-500">{a}</p>
      </div>
    </div>
  );
}

export function ApplyFaq() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <h2
          className="text-center font-display font-bold tracking-tight text-foreground"
          style={{ fontSize: "var(--text-3xl)" }}
        >
          Common Questions
        </h2>

        <div className="mt-8 rounded-2xl bg-surface px-6 ring-1 ring-border">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
