import Image from "next/image";
import Link from "next/link";

export function CompanyHero() {
  return (
    <section className="bg-white pb-0 pt-14 lg:pt-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Text block */}
        <div className="mx-auto max-w-2xl text-center">
          <h1
            className="font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--text-5xl)" }}
          >
            Apply Once.{" "}
            <span className="relative inline-block">
              Save Thousands.
              <span
                className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-500">
            Most people spend days contacting banks one by one. LendKaki lets you skip the queue —
            apply once, and let 20+ licensed lenders compete for your business.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/apply"
              className="inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Get My Free Rates
            </Link>
            <Link
              href="#why-us"
              className="inline-flex rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Learn more ↓
            </Link>
          </div>
        </div>

        {/* Team photo */}
        <div className="mt-14 animate-fade-up overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={encodeURI("/images/lendkaki team.jpg")}
            alt="The LendKaki team"
            width={1743}
            height={765}
            className="w-full object-cover"
            priority
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
