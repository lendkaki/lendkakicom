import type { Metadata } from "next";
import { DM_Sans, Instrument_Sans, Vampiro_One } from "next/font/google";
import Script from "next/script";
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

const vampiroOne = Vampiro_One({
  variable: "--font-vampiro-one",
  subsets: ["latin"],
  weight: "400",
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
      className={`${dmSans.variable} ${instrumentSans.variable} ${vampiroOne.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {/* Meta Pixel — noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=920834750339516&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
        <WhatsAppWidget />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-REHKBEB1Q4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-REHKBEB1Q4');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '920834750339516');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
