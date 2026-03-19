# Impeccable Audit Report — Lendkaki Homepage

**Date:** 2026-03-19  
**Scope:** Homepage (navbar, hero, trust strip, how-it-works, advantages, testimonials, CTA form, footer)  
**Reference:** Frontend-design skill, .impeccable.md design context

---

## Anti-Patterns Verdict

**Partial pass.** Good design token usage, no Inter/Roboto, no purple gradients, no glassmorphism, no nested cards. However several patterns keep the page too similar to sg.lendkaki.com:

- Section sequence mirrors the old site exactly (hero → trust strip → how it works → advantages → testimonials → form → footer)
- No Pera-style keyword ticker or feature cards with "Learn more →"
- Advantages tiles 2–4 are identical icon + heading + text cards (anti-pattern)
- Featured tile contains a decorative bar chart (sparkline-as-decoration anti-pattern)

---

## Executive Summary

| Severity | Count |
|----------|-------|
| Critical | 0 |
| High | 2 |
| Medium | 3 |
| Low | 3 |

**Top 3 issues:**
1. Layout and section structure too close to old sg.lendkaki.com
2. Identical card grid in Advantages (3 of 4 tiles)
3. Decorative bar chart in featured tile

---

## Detailed Findings

### High-Severity Issues

**H1 — Layout too similar to old site**  
- **Location:** Page composition, all sections  
- **Description:** Section order, types, and content mirror sg.lendkaki.com. No Pera-style keyword ticker; no feature section with "Learn more →" links; trust strip is a static 4-column grid vs Pera's scrolling keyword band.  
- **Impact:** Site feels like a restyle, not a distinctive redesign.  
- **Recommendation:** Add horizontal keyword ticker; reframe trust items or move them below a ticker; add Pera-style feature section.  
- **Fix:** `/arrange` + Pera design pass

**H2 — Identical card grid in Advantages**  
- **Location:** `src/components/advantages.tsx`, tiles 2–4  
- **Description:** Three tiles share identical structure: icon in rounded box → heading → paragraph. Frontend-design skill: "DON'T use identical card grids—same-sized cards with icon + heading + text, repeated endlessly."  
- **Impact:** Generic, templated feel.  
- **Recommendation:** Pera-style feature cards: icon, title, one-line description, "Learn more →" link; vary sizes.  
- **Fix:** `/arrange`, `/bolder`

### Medium-Severity Issues

**M1 — Decorative chart in featured Advantages tile**  
- **Location:** `src/components/advantages.tsx`, "Approval speed dashboard"  
- **Description:** Bar chart with day labels is decorative, conveys no real data. "DON'T use sparklines as decoration."  
- **Recommendation:** Replace with a single strong stat (e.g. "75% in <24h") or a minimal visual.  
- **Fix:** `/distill`

**M2 — Trust strip lacks differentiation**  
- **Location:** `src/components/trust-strip.tsx`  
- **Description:** Four items in a static grid. Pera uses a scrolling marquee of keywords for visual impact.  
- **Recommendation:** Add keyword ticker with motion; keep trust items as supporting row below hero or simplify them.  
- **Fix:** `/delight`, `/arrange`

**M3 — Missing focus-visible styles on interactive elements**  
- **Location:** `src/components/navbar.tsx`, `src/components/cta-form.tsx`, all buttons/links  
- **Description:** No explicit `focus-visible:ring` on custom buttons, toggles, and links.  
- **Impact:** Keyboard users may lack visible focus indicators (WCAG 2.4.7 Level AA).  
- **Fix:** `/harden`

### Low-Severity Issues

**L1 — Hero stat pills are label-heavy**  
- **Location:** `src/components/hero.tsx`, StatPill  
- **Description:** Labels ("Lowest rate found", "Apply securely with") make pills wordy. Could be simplified.  
- **Fix:** `/distill`

**L2 — Testimonials marquee reduced-motion duplicated content**  
- **Location:** `src/app/globals.css`, testimonials component  
- **Description:** When animation is stopped by reduced-motion, duplicated items remain in DOM.  
- **Fix:** `/harden`, `/adapt`

**L3 — CTA form consent copy**  
- **Location:** `src/components/cta-form.tsx`  
- **Description:** "consent to receive marketing messages" may need explicit PDPA opt-in language.  
- **Fix:** `/clarify`

---

## Positive Findings

- Design tokens (color, spacing, type) are consistent and not hard-coded in components
- Warm-tinted neutrals and single yellow accent match .impeccable.md
- Instrument Sans + DM Sans avoid overused fonts; fluid clamp() headings used correctly
- No nested cards, no glassmorphism, no gradient text
- Scroll-reveal uses opacity/transform only and respects `prefers-reduced-motion`
- Semantic HTML throughout (section, nav, main, footer, heading hierarchy)
- Tailwind v4 CSS custom properties pattern is clean and maintainable

---

## Recommendations by Priority

1. **Immediate:** Add keyword ticker, reframe Advantages as Pera-style feature cards
2. **Short-term:** Remove decorative chart; add focus-visible styles
3. **Medium-term:** Simplify hero stat pills; reduced-motion fallback for marquee
4. **Long-term:** PDPA consent copy review

## Suggested Commands

- `/arrange` — Section structure + Advantages layout
- `/distill` — Remove decorative chart, simplify pills
- `/delight` — Keyword ticker animation
- `/harden` — Focus indicators, reduced-motion
- `/clarify` — CTA consent copy
