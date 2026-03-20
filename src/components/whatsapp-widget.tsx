"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function WhatsAppWidget() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/apply") return;

    const heroEl = document.querySelector<HTMLElement>("main > *:first-child");

    const check = () => {
      const threshold = heroEl ? heroEl.offsetHeight / 2 : 300;
      setVisible(window.scrollY >= threshold);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [pathname]);

  if (pathname === "/apply") return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/6589009628?text=Hi,%20I%20need%20loan%20assistance%20from%20Lendkaki"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.101 1.51 5.833L.057 23.321a.75.75 0 00.922.922l5.488-1.453A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.5-5.24-1.373l-.374-.217-3.877 1.026 1.026-3.877-.217-.374A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>

        {/* Pulsing red notification dot */}
        <span className="absolute right-0 top-0 flex h-3.5 w-3.5" aria-hidden="true">
          <span className="animate-ping-red absolute inline-flex h-full w-full rounded-full bg-red-500" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-red-500 ring-2 ring-white" />
        </span>
      </a>
    </div>
  );
}
