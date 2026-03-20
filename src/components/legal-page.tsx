import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero strip */}
        <div className="border-b border-border bg-surface py-10 lg:py-14">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <BackButton />
            <h1
              className="mt-4 font-display font-bold tracking-tight text-foreground"
              style={{ fontSize: "var(--text-4xl)" }}
            >
              {title}
            </h1>
            <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="prose-legal">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
