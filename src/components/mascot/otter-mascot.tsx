/**
 * OtterMascot — Kaki the Otter
 *
 * Currently renders placeholder boxes that show the expected image file path
 * and a brief pose description. Replace each placeholder with:
 *   <Image src={`/images/mascot/otter-${pose}.png`} ... />
 * once the real mascot illustrations are ready.
 *
 * Expected files in /public/images/mascot/:
 *   otter-hero.png      — seated, holding a phone/loan offer card, looking confident
 *   otter-celebrate.png — arms raised in the air, big smile, celebrating
 *   otter-think.png     — paw on chin, tilted head, thoughtful expression
 *   otter-present.png   — one arm outstretched pointing/gesturing toward the CTA
 *   otter-approve.png   — thumbs up, checkmark badge visible, happy expression
 *   otter-work.png      — seated at a laptop, focused, typing
 *   otter-money.png     — holding a stack of coins or a document
 *   otter-small.png     — face/head only, no body, neutral friendly expression
 */

import Image from "next/image";

export type OtterPose =
  | "hero"
  | "celebrate"
  | "think"
  | "present"
  | "approve"
  | "work"
  | "money"
  | "small";

const POSE_META: Record<OtterPose, { label: string; desc: string; animClass: string }> = {
  hero:      { label: "otter-hero.png",      desc: "Seated · holding loan offer card",    animClass: "otter-float"  },
  celebrate: { label: "otter-celebrate.png", desc: "Arms raised · celebrating",            animClass: "otter-bounce" },
  think:     { label: "otter-think.png",     desc: "Paw on chin · thinking / FAQ",         animClass: "otter-sway"   },
  present:   { label: "otter-present.png",   desc: "Arm out · pointing at CTA",            animClass: "otter-wave"   },
  approve:   { label: "otter-approve.png",   desc: "Thumbs up · happy approval",           animClass: "otter-pulse"  },
  work:      { label: "otter-work.png",      desc: "At laptop · typing / working",         animClass: "otter-work"   },
  money:     { label: "otter-money.png",     desc: "Holding coins / document",             animClass: "otter-float"  },
  small:     { label: "otter-small.png",     desc: "Face only · neutral friendly",         animClass: ""             },
};

interface OtterMascotProps {
  pose?: OtterPose;
  /** Width in px — height auto-scales proportionally. Default 180 */
  size?: number;
  className?: string;
}

export function OtterMascot({ pose = "hero", size = 180, className = "" }: OtterMascotProps) {
  const meta = POSE_META[pose];
  const height = pose === "small" ? size : Math.round(size * 1.4);

  // ── When the real image file exists, swap this block for: ──────────
  // return (
  //   <Image
  //     src={`/images/mascot/${meta.label}`}
  //     alt="Kaki the Otter"
  //     width={size}
  //     height={height}
  //     className={`${meta.animClass} ${className}`}
  //   />
  // );
  // ──────────────────────────────────────────────────────────────────

  return (
    <span
      className={`inline-flex select-none flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#f7d347]/50 bg-[#f7d347]/10 ${meta.animClass} ${className}`}
      style={{ width: size, height, minWidth: size }}
      aria-hidden="true"
    >
      <span className="text-3xl">🦦</span>
      <span
        className="mt-1 px-2 text-center font-mono leading-snug text-[#8B6347]"
        style={{ fontSize: 10 }}
      >
        {meta.label}
      </span>
      <span
        className="mt-0.5 px-2 text-center leading-snug text-[#8B6347]/70"
        style={{ fontSize: 9 }}
      >
        {meta.desc}
      </span>
    </span>
  );
}
