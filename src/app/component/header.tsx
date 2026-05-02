"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { RiMoonClearLine } from "react-icons/ri";

const MEGA_MENU = [
  {
    heading: "Endpoint Management",
    items: [
      "Compliance Hardening",
      "Sentimental Analysis",
      "Software Deployment",
      "AD Management",
      "Software Metering",
      "Auto Compliance Adherence",
      "AI Insights",
      "Analytical Dashboard",
    ],
  },
  {
    heading: "End-user Management",
    items: [
      "Ticket Management",
      "Password Reset/ Account Unlock",
      "Knowledge Search",
      "Service Workflow Automation",
      "One Click Troubleshooters",
    ],
  },
  {
    heading: "Digital Employee Experience",
    items: ["Experience Management", "Employee Engagement", "Self Healing"],
  },
] as const;

type HeaderProps = {
  isLightTheme: boolean;
  onThemeToggle: () => void;
};

export default function Header({
  isLightTheme,
  onThemeToggle,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className={[
        "relative w-full overflow-hidden",
        isLightTheme ? "bg-white text-black" : "bg-black text-white",
      ].join(" ")}
    >
      <header className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
        {/* logo */}
        <div className="select-none">
          <Image
            src="/zerofai-logo.png"
            alt="ZerofAI"
            width={220}
            height={72}
            priority
            className="h-[34px] w-auto object-contain"
          />
        </div>

        {/* desktop nav pill (solid colors only) */}
        <div
          className={[
            "relative hidden w-full max-w-[720px] items-center justify-between gap-3 rounded-full px-5 py-2 md:flex",
            isLightTheme
              ? "border border-[#e6e6e6] bg-[#efefef]"
              : "border border-[#2f2f2f] bg-[#1f1f1f]",
          ].join(" ")}
        >
          <nav className="hidden min-w-0 flex-1 items-center gap-6 whitespace-nowrap md:flex">
            {MEGA_MENU.map((col, idx) => (
              <div key={col.heading} className="relative group">
                <Link
                  href="#"
                  className={[
                    "whitespace-nowrap text-sm font-semibold",
                    isLightTheme ? "text-black/60" : "text-white/90",
                  ].join(" ")}
                >
                  {col.heading}
                </Link>

                <div
                  className={[
                    "pointer-events-none absolute top-full z-50 min-w-[220px] pt-4 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0",
                    idx === 0
                      ? "left-0"
                      : idx === 1
                        ? "left-1/2 -translate-x-1/2 group-hover:-translate-x-1/2"
                        : "right-0",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "overflow-hidden rounded-[10px]",
                      isLightTheme
                        ? "border border-black/10 bg-white"
                        : "border border-white/10 bg-[#0b0b0b]",
                    ].join(" ")}
                  >
                    <div className={isLightTheme ? "divide-y divide-black/10" : "divide-y divide-white/10"}>
                      {col.items.map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className={[
                            "block px-4 py-2.5 text-left text-[12px] font-medium",
                            isLightTheme
                              ? "text-black/70 hover:bg-black/5 hover:text-black"
                              : "text-white/80 hover:bg-white/5 hover:text-white",
                          ].join(" ")}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${isLightTheme ? "dark" : "light"} theme`}
            aria-pressed={isLightTheme}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#19B6C9] text-white hover:brightness-105 active:brightness-95"
          >
            {isLightTheme ? <IoSunnyOutline size={20} /> : <RiMoonClearLine size={20} />}
          </button>
        </div>

        {/* mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${isLightTheme ? "dark" : "light"} theme`}
            aria-pressed={isLightTheme}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#19B6C9] text-white hover:brightness-105 active:brightness-95"
          >
            {isLightTheme ? <IoSunnyOutline size={20} /> : <RiMoonClearLine size={20} />}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-controls={mobileMenuId}
            aria-expanded={isMobileMenuOpen}
            className={[
              "grid h-10 w-10 place-items-center rounded-full ring-1 transition-colors",
              isLightTheme
                ? "bg-[#efefef] text-black ring-black/10 hover:bg-black/5"
                : "bg-white/10 text-white ring-white/15 hover:bg-white/15",
            ].join(" ")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* mobile menu overlay */}
      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-60 md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            id={mobileMenuId}
            className={[
              "absolute right-0 top-0 h-full w-[88vw] max-w-[360px] overflow-y-auto p-5 shadow-2xl",
              isLightTheme ? "bg-white text-black" : "bg-[#0b0b0b] text-white",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-extrabold tracking-tight">Menu</p>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className={[
                  "grid h-9 w-9 place-items-center rounded-full ring-1 transition-colors",
                  isLightTheme
                    ? "bg-black/5 text-black ring-black/10 hover:bg-black/10"
                    : "bg-white/10 text-white ring-white/15 hover:bg-white/15",
                ].join(" ")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {MEGA_MENU.map((col) => (
                <div key={`mobile-${col.heading}`}>
                  <p className="text-xs font-extrabold tracking-wide text-[#19B6C9]">{col.heading}</p>
                  <div className="mt-3 space-y-1">
                    {col.items.map((item) => (
                      <Link
                        key={`mobile-item-${col.heading}-${item}`}
                        href="#"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={[
                          "block rounded-lg px-3 py-2 text-sm font-semibold",
                          isLightTheme ? "text-black/80 hover:bg-black/5" : "text-white/85 hover:bg-white/10",
                        ].join(" ")}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {/* hero */}
      <div className="relative w-full">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div
            className={[
              "absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg]",
              isLightTheme
                ? "bg-linear-to-b from-black/3 via-black/6 to-black/8"
                : "bg-zinc-700/35 bg-linear-to-b from-zinc-700/10 via-zinc-900/20 to-zinc-950/40 shadow-xl",
            ].join(" ")}
          />
          <div
            className={[
              "absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg]",
              isLightTheme
                ? "bg-linear-to-b from-black/2 via-black/5 to-black/7"
                : "bg-zinc-700/35 bg-linear-to-b from-zinc-700/10 via-zinc-900/20 to-zinc-950/40 shadow-xl",
            ].join(" ")}
          />
        </div>

        <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 md:pt-20">
        <h1 className="text-[44px] font-extrabold leading-[0.98] tracking-tight sm:text-[64px] md:text-[84px]">
          The ZerofAI
        </h1>

        <div className="mt-5 inline-flex rounded-[10px] bg-[#19B6C9] px-5 py-2.5 text-[22px] font-extrabold leading-none text-white shadow-[0_18px_40px_rgba(0,0,0,0.45)] sm:mt-6 sm:px-8 sm:py-3 sm:text-[34px]">
          Manifesto
        </div>

        <p className="mt-10 max-w-[720px] text-sm leading-7 text-white/80">
          The enterprise IT paradigm is dying. Alert fatigue enslaves your teams.
          Tribal knowledge evaporates with every resignation. Your engineers
          fight yesterday&apos;s fires while tomorrow&apos;s threats multiply in
          silence.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-10 sm:gap-10">
          <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-[0_18px_35px_rgba(0,0,0,0.45)] hover:bg-white/95 active:bg-white/90">
            Book Demo
          </button>

          <button className="text-sm font-semibold text-[#19B6C9] underline underline-offset-10 decoration-[#19B6C9]/60 hover:text-[#3ed6e6] hover:decoration-[#3ed6e6]/70">
            Calculate Your Transformation
          </button>
        </div>
        </main>
      </div>
    </div>
  );
}