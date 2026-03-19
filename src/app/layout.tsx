import type { Metadata } from "next";
import { DM_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { WhatsAppWidget } from "@/components/whatsapp-widget";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LendKaki | Find Singapore's Best Loan Rates",
  description:
    "Compare rates from 20+ licensed lenders in Singapore. One application, same-day approval, zero credit impact. Fast, free, and secure loan comparison.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
