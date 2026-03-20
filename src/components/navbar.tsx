"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    label: "Loan Types",
    href: "/loan-types",
    children: [
      { label: "Personal Loans", href: "/loan-types/personal", desc: "For personal & everyday needs" },
      { label: "Business Loans", href: "/loan-types/business", desc: "Funding for your business" },
      { label: "Instant Loans", href: "/loan-types/instant", desc: "Fast cash when you need it" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "Why LendKaki?", href: "/company", desc: "Our story and mission" },
      { label: "How It Works", href: "/how-it-works", desc: "3 steps to your best rate" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "FAQ", href: "/faq", desc: "Common questions answered" },
      { label: "Loan Calculator", href: "/calculator", desc: "Estimate your repayments" },
      { label: "PDPA Compliance", href: "/pdpa", desc: "Your data rights" },
    ],
  },
];

function DropdownItem({ item, onClose }: { item: typeof NAV_ITEMS[0]["children"][0]; onClose: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
    >
      <div className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-150 group-hover:scale-150" aria-hidden="true" />
      <div>
        <p className="text-sm font-semibold text-foreground">{item.label}</p>
        <p className="mt-0.5 text-xs text-gray-400">{item.desc}</p>
      </div>
    </Link>
  );
}

function NavDropdown({ item }: { item: typeof NAV_ITEMS[0] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const isActive = pathname.startsWith(item.href);

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`group relative flex cursor-pointer items-center gap-1 rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
          isActive ? "text-foreground" : "text-gray-600 hover:text-foreground"
        }`}
      >
        {/* Underline animation */}
        <span className="relative">
          {item.label}
          <span
            className={`absolute -bottom-0.5 left-0 h-px rounded-full bg-accent transition-all duration-200 ${
              isActive || open ? "w-full" : "w-0 group-hover:w-full"
            }`}
            aria-hidden="true"
          />
        </span>
        {/* Chevron */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-0 top-full mt-3 w-56 overflow-hidden rounded-2xl border border-border bg-white shadow-xl shadow-black/5 transition-all duration-200 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
        role="menu"
      >
        <div className="p-2">
          {item.children.map((child) => (
            <DropdownItem key={child.href} item={child} onClose={() => setOpen(false)} />
          ))}
        </div>
      </div>
    </li>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); setMobileExpanded(null); }, [pathname]);

  const toggleMobileSection = (label: string) =>
    setMobileExpanded((prev) => (prev === label ? null : label));

  return (
    <>
      {/* Dim overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/85 transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
      />

      <header className="sticky top-0 z-50 w-full">
        {/* Main bar */}
        <div
          className={`transition-[border-color,background-color] duration-300 ${
            scrolled
              ? "border-b border-border bg-white/95 backdrop-blur-sm"
              : "border-b border-transparent bg-white"
          }`}
        >
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
            {/* Logo */}
            <Link
              href="/"
              className="font-[family-name:var(--font-vampiro-one)] text-xl tracking-tight text-foreground"
            >
              Lend<span className="text-accent-text">Kaki</span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-8 md:flex">
              {NAV_ITEMS.map((item) => (
                <NavDropdown key={item.href} item={item} />
              ))}
            </ul>

            {/* Desktop CTA */}
            <Link
              href="/apply"
              className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:inline-flex"
            >
              Apply Now
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span className={`h-0.5 w-full origin-center rounded-full bg-foreground transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-full rounded-full bg-foreground transition-all duration-300 ${mobileOpen ? "scale-x-0 opacity-0" : ""}`} />
                <span className={`h-0.5 w-full origin-center rounded-full bg-foreground transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${
            mobileOpen ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <div className="bg-gray-950 px-4 pb-8 pt-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.href} className="border-b border-white/10 last:border-0">
                {/* Section toggle */}
                <button
                  type="button"
                  onClick={() => toggleMobileSection(item.label)}
                  className="flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  {item.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Sub-links */}
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ${
                    mobileExpanded === item.label ? "max-h-64" : "max-h-0"
                  }`}
                >
                  <ul className="flex flex-col gap-0.5 pb-3 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="flex items-center gap-2.5 rounded-lg px-2 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Apply Now */}
            <div className="mt-4 pt-2">
              <Link
                href="/apply"
                className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
