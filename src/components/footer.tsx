import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Loan Types",
    links: [
      { label: "Personal Loans", href: "/loan-types/personal" },
      { label: "Business Loans", href: "/loan-types/business" },
      { label: "Instant Loans", href: "/loan-types/instant" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why LendKaki?", href: "/company" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Loan Calculator", href: "/calculator" },
      { label: "PDPA Compliance", href: "/pdpa" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "support@lendkaki.com", href: "mailto:support@lendkaki.com" },
      { label: "+65 8900 9628", href: "tel:+6589009628" },
      {
        label: "2 Venture Drive, #19-21, Vision Exchange, Singapore 608526",
        href: "https://maps.app.goo.gl/aG7P68e8tuzJzwzj7",
      },
    ],
  },
];

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1Auajw8YMF/",
  instagram: "https://www.instagram.com/lendkaki.sg?igsh=NWRqYnoxcmpoMzBt",
  tiktok: "https://www.tiktok.com/@lendkaki.sg",
};

function SocialIcon({ platform }: { platform: "facebook" | "instagram" | "tiktok" }) {
  const paths: Record<string, string> = {
    facebook:
      "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    instagram:
      "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z",
    tiktok:
      "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.2V12a4.85 4.85 0 01-5.58-2.2V6.69h5.58z",
  };

  return (
    <a
      href={SOCIAL_LINKS[platform]}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`LendKaki on ${platform}`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-accent hover:text-accent"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d={paths[platform]} />
      </svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        {/* Top row — logo + socials */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-vampiro-one)] text-xl text-white"
            >
              Lend<span className="text-accent">Kaki</span>
            </Link>
            <p className="mt-2 max-w-xs text-sm text-gray-400">
              Singapore&apos;s most trusted loan comparison platform. Compare
              rates from banks and licensed financial institutions.
            </p>
          </div>
          <div className="flex gap-3">
            <SocialIcon platform="facebook" />
            <SocialIcon platform="instagram" />
            <SocialIcon platform="tiktok" />
          </div>
        </div>

        {/* Columns */}
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-accent"
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-800" />

        {/* Legal */}
        <div className="mt-6 flex flex-col gap-4 text-[11px] leading-relaxed text-gray-500 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <p>&copy; {new Date().getFullYear()} LendKaki. All rights reserved.</p>
            <p className="mt-2">
              LendKaki is managed and operated by Lendkaki Pay Pte. Ltd. (UEN:
              202607335C). LendKaki is a loan comparison platform. We are not a
              lender. All loan products are offered by licensed banks and
              financial institutions regulated by the Monetary Authority of
              Singapore (MAS) and/or the Ministry of Law (MinLaw). Rates shown
              are indicative and subject to change.
            </p>
          </div>
          <div className="flex gap-4 whitespace-nowrap">
            <Link href="/terms" className="transition-colors hover:text-accent">
              Terms of Use
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
