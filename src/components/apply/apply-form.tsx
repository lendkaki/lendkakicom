"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { OtterMascot } from "@/components/mascot/otter-mascot";

type Urgency = "Today" | "This Week" | "Not Sure" | null;
type Nationality = "sg-pr" | "foreigner" | null;
type Description = "full-time" | "self-employed" | "part-time" | "other" | null;

interface FormState {
  amount: number;
  urgency: Urgency;
  nationality: Nationality;
  description: Description;
  name: string;
  mobile: string;
  termsAccepted: boolean;
}

const STEPS = ["Get Funded", "About You", "Your Details", "Review"];

const URGENCY_OPTIONS: { label: string; emoji: string; value: Urgency }[] = [
  { label: "Today", emoji: "⚡", value: "Today" },
  { label: "This Week", emoji: "📅", value: "This Week" },
  { label: "Not Sure", emoji: "😌", value: "Not Sure" },
];

const DESCRIPTION_OPTIONS: { label: string; value: Description }[] = [
  { label: "Working Full-Time", value: "full-time" },
  { label: "Self-Employed", value: "self-employed" },
  { label: "Part-Time / Freelance", value: "part-time" },
  { label: "Platform Worker (PHV/Delivery)", value: "other" },
];

const DESCRIPTION_LABELS: Record<NonNullable<Description>, string> = {
  "full-time": "Working Full-Time",
  "self-employed": "Self-Employed",
  "part-time": "Part-Time / Freelance",
  "other": "Platform Worker (PHV/Delivery)",
};

function formatAmount(val: number) {
  return `$${val.toLocaleString()}`;
}

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex justify-between">
        {STEPS.map((label, i) => (
          <span
            key={label}
            className={`text-xs font-semibold ${
              i + 1 <= step ? "text-foreground" : "text-gray-400"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="flex gap-1.5">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i + 1 <= step ? "bg-accent" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function TapButton({
  selected,
  onClick,
  children,
  className = "",
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-[56px] cursor-pointer items-center justify-center rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all duration-150 active:scale-[0.97] ${
        selected
          ? "border-accent bg-accent text-accent-text"
          : "border-border bg-white text-foreground hover:border-gray-400"
      } ${className}`}
    >
      {children}
    </button>
  );
}

function Step1({
  form,
  setForm,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}) {
  const [rawInput, setRawInput] = useState<string | null>(null);

  const handleAmountFocus = () => {
    setRawInput(String(form.amount));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/[^\d]/g, "");
    setRawInput(digits);
    const num = parseInt(digits, 10);
    if (!isNaN(num)) {
      setForm((f) => ({ ...f, amount: Math.min(200000, Math.max(1000, num)) }));
    }
  };

  const handleAmountBlur = () => {
    const num = parseInt(rawInput ?? "", 10);
    if (isNaN(num) || num < 1000) {
      setForm((f) => ({ ...f, amount: 1000 }));
    } else if (num > 200000) {
      setForm((f) => ({ ...f, amount: 200000 }));
    } else {
      const rounded = Math.round(num / 1000) * 1000;
      setForm((f) => ({ ...f, amount: rounded }));
    }
    setRawInput(null);
  };

  const displayValue =
    rawInput !== null ? rawInput : `$${form.amount.toLocaleString()}`;

  return (
    <div className="animate-fade-up">
      <h2
        className="font-display font-bold tracking-tight text-foreground"
        style={{ fontSize: "var(--text-2xl)" }}
      >
        How much do you need?
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Drag the slider or tap the amount to type.
      </p>

      {/* Editable amount display */}
      <div className="mt-6">
        <input
          type="text"
          inputMode="numeric"
          value={displayValue}
          onFocus={handleAmountFocus}
          onChange={handleAmountChange}
          onBlur={handleAmountBlur}
          aria-label="Desired loan amount"
          className="w-full cursor-text rounded-xl border-2 border-border bg-white py-3 text-center font-display font-bold tracking-tight text-foreground transition-colors hover:border-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          style={{ fontSize: "var(--text-4xl)" }}
        />
      </div>

      {/* Slider */}
      <div className="mt-4">
        <input
          type="range"
          min={1000}
          max={200000}
          step={1000}
          value={form.amount}
          onChange={(e) =>
            setForm((f) => ({ ...f, amount: Number(e.target.value) }))
          }
          className="apply-slider w-full cursor-pointer"
          aria-label="Desired loan amount slider"
        />
        <div className="mt-1 flex justify-between text-xs text-gray-400">
          <span>$1,000</span>
          <span>$200,000</span>
        </div>
      </div>

      {/* Urgency */}
      <div className="mt-8">
        <p className="mb-3 text-sm font-semibold text-foreground">
          When do you need the funds?
        </p>
        <div className="grid grid-cols-3 gap-3">
          {URGENCY_OPTIONS.map((opt) => (
            <TapButton
              key={opt.value}
              selected={form.urgency === opt.value}
              onClick={() => setForm((f) => ({ ...f, urgency: opt.value }))}
              className="flex-col gap-1"
            >
              <span className="text-xl">{opt.emoji}</span>
              <span>{opt.label}</span>
            </TapButton>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step2({
  form,
  setForm,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}) {
  return (
    <div className="animate-fade-up">
      <h2
        className="font-display font-bold tracking-tight text-foreground"
        style={{ fontSize: "var(--text-2xl)" }}
      >
        Tell us a little about yourself
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        This helps us match you to the right lenders.
      </p>

      {/* Nationality */}
      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-foreground">
          What is your residency status?
        </p>
        <div className="grid grid-cols-2 gap-3">
          <TapButton
            selected={form.nationality === "sg-pr"}
            onClick={() => setForm((f) => ({ ...f, nationality: "sg-pr" }))}
          >
            🇸🇬 Singapore / PR
          </TapButton>
          <TapButton
            selected={form.nationality === "foreigner"}
            onClick={() =>
              setForm((f) => ({ ...f, nationality: "foreigner" }))
            }
          >
            ✈️ Foreigner
          </TapButton>
        </div>
      </div>

      {/* Description */}
      <div className="mt-7">
        <p className="mb-3 text-sm font-semibold text-foreground">
          What best describes you?
        </p>
        <div className="grid grid-cols-2 gap-3">
          {DESCRIPTION_OPTIONS.map((opt) => (
            <TapButton
              key={opt.value}
              selected={form.description === opt.value}
              onClick={() =>
                setForm((f) => ({ ...f, description: opt.value }))
              }
            >
              {opt.label}
            </TapButton>
          ))}
        </div>
      </div>
    </div>
  );
}

function isSgMobileValid(mobile: string) {
  const digits = mobile.replace(/\s/g, "");
  return /^[89]\d{7}$/.test(digits);
}

function Step3({
  form,
  setForm,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}) {
  const [mobileTouched, setMobileTouched] = useState(false);
  const mobileError =
    mobileTouched && form.mobile.length > 0 && !isSgMobileValid(form.mobile);

  return (
    <div className="animate-fade-up">
      <h2
        className="font-display font-bold tracking-tight text-foreground"
        style={{ fontSize: "var(--text-2xl)" }}
      >
        Last step — we promise 🤞
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Just your name and number. That&apos;s it.
      </p>

      <div className="mt-7 flex flex-col gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="apply-name"
            className="mb-1.5 block text-sm font-semibold text-foreground"
          >
            Full Name
          </label>
          <input
            id="apply-name"
            type="text"
            placeholder="As per NRIC / Passport"
            value={form.name}
            onChange={(e) =>
              setForm((f) => ({ ...f, name: e.target.value }))
            }
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            autoComplete="name"
          />
        </div>

        {/* Mobile */}
        <div>
          <label
            htmlFor="apply-mobile"
            className="mb-1.5 block text-sm font-semibold text-foreground"
          >
            Mobile Number
          </label>
          <div className="flex">
            <span className="flex items-center rounded-l-lg border border-r-0 border-border bg-surface px-4 text-sm font-medium text-gray-500">
              +65
            </span>
            <input
              id="apply-mobile"
              type="tel"
              inputMode="numeric"
              placeholder="9123 4567"
              value={form.mobile}
              onChange={(e) => {
                const digits = e.target.value.replace(/[^\d\s]/g, "");
                setForm((f) => ({ ...f, mobile: digits }));
              }}
              onBlur={() => setMobileTouched(true)}
              className={`w-full rounded-r-lg border bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-1 ${
                mobileError
                  ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                  : "border-border focus:border-accent focus:ring-accent"
              }`}
              autoComplete="tel"
              maxLength={9}
            />
          </div>
          {mobileError && (
            <p className="mt-1.5 text-xs text-red-500">
              Enter a valid Singapore number (8 digits, starting with 8 or 9)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ReviewRow({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string;
  onEdit: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-border py-3 last:border-0">
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-foreground">{value}</p>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="text-xs font-semibold text-gray-500 underline underline-offset-2 hover:text-foreground"
      >
        Edit
      </button>
    </div>
  );
}

function Step4({
  form,
  setForm,
  setStep,
  onSubmit,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  setStep: (s: number) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="animate-fade-up">
      <h2
        className="font-display font-bold tracking-tight text-foreground"
        style={{ fontSize: "var(--text-2xl)" }}
      >
        Review your application
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Looks good? Hit submit and we&apos;ll find your best rates.
      </p>

      <div className="mt-6 rounded-xl bg-white px-5 py-1 shadow-sm ring-1 ring-border">
        <ReviewRow
          label="Full Name"
          value={form.name || "—"}
          onEdit={() => setStep(3)}
        />
        <ReviewRow
          label="Mobile"
          value={form.mobile ? `+65 ${form.mobile}` : "—"}
          onEdit={() => setStep(3)}
        />
        <ReviewRow
          label="Loan Amount"
          value={formatAmount(form.amount)}
          onEdit={() => setStep(1)}
        />
        <ReviewRow
          label="Funds Needed"
          value={form.urgency ?? "—"}
          onEdit={() => setStep(1)}
        />
        <ReviewRow
          label="Residency"
          value={
            form.nationality === "sg-pr"
              ? "Singapore / PR"
              : form.nationality === "foreigner"
                ? "Foreigner"
                : "—"
          }
          onEdit={() => setStep(2)}
        />
        <ReviewRow
          label="Employment"
          value={
            form.description ? DESCRIPTION_LABELS[form.description] : "—"
          }
          onEdit={() => setStep(2)}
        />
      </div>

      {/* Terms */}
      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={form.termsAccepted}
          onChange={(e) =>
            setForm((f) => ({ ...f, termsAccepted: e.target.checked }))
          }
          className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
        />
        <span className="text-xs leading-relaxed text-gray-500">
          By proceeding, I agree to LendKaki&apos;s{" "}
          <Link
            href="/terms"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Privacy Policy
          </Link>
          , and consent to be contacted by licensed lenders.
        </span>
      </label>

      <button
        type="button"
        onClick={onSubmit}
        disabled={!form.termsAccepted || !form.name || !form.mobile}
        className="mt-6 w-full cursor-pointer rounded-full bg-accent py-4 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        Get My Best Rates →
      </button>
    </div>
  );
}

const NEXT_STEPS = [
  "Our system is now matching your request to the most suitable lender from our network of 20+ licensed financial institutions.",
  "A LendKaki agent will reach out to you via WhatsApp shortly with your personalised loan offer and next steps.",
  "Simply reply to our WhatsApp message, and our agent will guide you through the process. Once verified, your loan will be disbursed directly from the lender.",
];

function SuccessScreen({ name }: { name: string }) {
  const firstName = name.trim().split(" ")[0] || "there";

  return (
    <div className="animate-fade-up -m-8 rounded-2xl bg-[#0d0d0d] p-8 lg:-m-10 lg:p-10">
      {/* Otter mascot — celebrating */}
      <div className="flex justify-center">
        <OtterMascot pose="celebrate" size={100} />
      </div>
      <h2
        className="mt-4 text-center font-display font-bold uppercase tracking-wider text-white"
        style={{ fontSize: "var(--text-2xl)" }}
      >
        Thank you, {firstName}! 🎉
      </h2>
      <p className="mt-1 text-center text-sm text-accent">
        What happens next?
      </p>

      <ol className="mt-7 flex flex-col gap-5">
        {NEXT_STEPS.map((step, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-text">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-gray-300">{step}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-700" />
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            or
          </span>
          <div className="h-px flex-1 bg-gray-700" />
        </div>
        <p className="mt-4 text-center text-sm text-accent">
          Can&apos;t wait? Chat with us now
        </p>
        <a
              href="https://wa.me/6589009628?text=Hi%2CI%20just%20submitted%20my%20loan%20application"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex w-full items-center justify-center gap-3 rounded-full border border-gray-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#25D366] hover:bg-[#25D366]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="#25D366"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.101 1.51 5.833L.057 23.321a.75.75 0 00.922.922l5.488-1.453A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.5-5.24-1.373l-.374-.217-3.877 1.026 1.026-3.877-.217-.374A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          WhatsApp Us Now
        </a>
      </div>
    </div>
  );
}

const LOADING_STATES = [
  "Processing your info…",
  "Looking into our pool of lenders…",
  "Matching your profile…",
];

const TOTAL_DURATION = 3600; // ms
const STATE_DURATION = TOTAL_DURATION / LOADING_STATES.length;

function LenderModal({
  name,
  onDone,
}: {
  name: string;
  onDone: () => void;
}) {
  const [phase, setPhase] = useState<"loading" | "found">("loading");
  const [loadingStep, setLoadingStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const firstName = name.trim().split(" ")[0] || "there";

  useEffect(() => {
    // Advance loading step text every STATE_DURATION ms
    const stepTimers = LOADING_STATES.slice(1).map((_, i) =>
      setTimeout(() => setLoadingStep(i + 1), STATE_DURATION * (i + 1))
    );

    // Smooth progress bar via requestAnimationFrame
    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);

    // Transition to found state
    const doneTimer = setTimeout(() => setPhase("found"), TOTAL_DURATION);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearTimeout(doneTimer);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal card */}
      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-[#0d0d0d] p-8 shadow-2xl">
        {phase === "loading" ? (
          <div className="flex flex-col items-center py-6 text-center">
            {/* Spinning circle loader */}
            <div className="relative flex h-20 w-20 items-center justify-center">
              <svg
                className="animate-spin"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                aria-hidden="true"
              >
                {/* Track */}
                <circle cx="40" cy="40" r="34" stroke="#2a2a2a" strokeWidth="6" />
                {/* Spinning arc */}
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="var(--accent)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="54 160"
                  strokeDashoffset="0"
                />
              </svg>
              {/* Yellow dot in centre */}
              <span className="absolute h-4 w-4 rounded-full bg-accent" />
            </div>

            {/* Step label */}
            <h3
              className="mt-6 font-display font-bold text-white transition-all duration-300"
              style={{ fontSize: "var(--text-xl)" }}
            >
              {LOADING_STATES[loadingStep]}
            </h3>

            {/* Step indicators */}
            <div className="mt-3 flex gap-1.5">
              {LOADING_STATES.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === loadingStep
                      ? "w-6 bg-accent"
                      : i < loadingStep
                        ? "w-1.5 bg-accent/50"
                        : "w-1.5 bg-gray-700"
                  }`}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-6 w-full overflow-hidden rounded-full bg-gray-800" style={{ height: 6 }}>
              <div
                className="h-full rounded-full bg-accent transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-1 text-right text-xs tabular-nums text-gray-500">
              {Math.round(progress)}%
            </p>

            {/* Rotating hint text */}
            <p className="mt-5 text-sm font-semibold text-accent animate-pulse">
              {loadingStep === 0 && "Hold on…"}
              {loadingStep === 1 && "Almost there…"}
              {loadingStep === 2 && "Just a moment…"}
            </p>
          </div>
        ) : (
          <div className="text-center">
            {/* Close button */}
            <button
              type="button"
              onClick={onDone}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-800 hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>

            {/* Otter mascot — celebrating */}
            <div className="flex justify-center">
              <OtterMascot pose="celebrate" size={90} />
            </div>

            <h3
              className="mt-3 font-display font-bold uppercase tracking-wider text-accent"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              Lenders Found! ✅
            </h3>
            <p className="mt-1 text-sm text-gray-300">
              Hi {firstName}, great news!
            </p>

            <p className="mt-5 text-sm leading-relaxed text-gray-300">
              We will WhatsApp you the next steps very soon during normal
              business hours{" "}
              <span className="font-semibold text-white">(Mon–Fri, 9am–6pm)</span>.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-700" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">or</span>
              <div className="h-px flex-1 bg-gray-700" />
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Chat with us now about your application
            </p>

            <a
          href="https://wa.me/6589009628?text=Hi%2CI%20just%20submitted%20my%20loan%20application"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-gray-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#25D366] hover:bg-[#25D366]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.101 1.51 5.833L.057 23.321a.75.75 0 00.922.922l5.488-1.453A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.5-5.24-1.373l-.374-.217-3.877 1.026 1.026-3.877-.217-.374A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp Us Now
            </a>

            <button
              type="button"
              onClick={onDone}
              className="mt-3 w-full cursor-pointer rounded-full bg-white py-3.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function ApplyForm() {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>({
    amount: 10000,
    urgency: null,
    nationality: null,
    description: null,
    name: "",
    mobile: "",
    termsAccepted: false,
  });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goNext = () => {
    setStep((s) => s + 1);
    setTimeout(scrollToForm, 50);
  };

  const goBack = () => {
    setStep((s) => s - 1);
    setTimeout(scrollToForm, 50);
  };

  const step1Valid = form.urgency !== null;
  const step2Valid = form.nationality !== null && form.description !== null;
  const step3Valid = form.name.trim().length > 0 && isSgMobileValid(form.mobile);

  const isNextValid =
    (step === 1 && step1Valid) ||
    (step === 2 && step2Valid) ||
    (step === 3 && step3Valid);

  return (
    <section className="bg-white py-10 lg:py-14" id="apply-form">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div
          ref={formRef}
          className="scroll-mt-24 rounded-2xl bg-surface p-8 shadow-sm ring-1 ring-border lg:p-10"
        >
          {submitted ? (
            <SuccessScreen name={form.name} />
          ) : (
            <>
              <ProgressBar step={step} />

              {step === 1 && <Step1 form={form} setForm={setForm} />}
              {step === 2 && <Step2 form={form} setForm={setForm} />}
              {step === 3 && <Step3 form={form} setForm={setForm} />}
              {step === 4 && (
                <Step4
                  form={form}
                  setForm={setForm}
                  setStep={(s) => {
                    setStep(s);
                    setTimeout(scrollToForm, 50);
                  }}
                  onSubmit={() => setShowModal(true)}
                />
              )}

              {/* Navigation */}
              {step < 4 && (
                <div className="mt-8 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={goBack}
                      className="cursor-pointer rounded text-sm font-semibold text-gray-500 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      ← Back
                    </button>
                  ) : (
                    <span />
                  )}
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!isNextValid}
                    className="cursor-pointer rounded-full bg-accent px-8 py-3 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {step === 3 ? "Review →" : "Next →"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Lender search modal */}
      {showModal && (
        <LenderModal
          name={form.name}
          onDone={() => {
            setShowModal(false);
            setSubmitted(true);
            setTimeout(() => {
              formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 50);
          }}
        />
      )}
    </section>
  );
}
