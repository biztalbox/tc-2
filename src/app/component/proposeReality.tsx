"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RIGHT_IMAGE_URL =
  "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWl8ZW58MHx8MHx8fDA%3D";

/** Accent matches header cyan exactly */
const COGNITIVE_TEAL = "#19B6C9";

type CognitivePillar = {
  openTitle: string;
  openBody: string;
  /** Full line for vertical strip (screenshot-style) */
  verticalText: string;
};

/** Full set (intro + 7 pillars) — includes duplicate Learning-Driven as in mockup */
const COGNITIVE_PILLARS: CognitivePillar[] = [
  {
    openTitle: "The Cognitive\nArchitecture",
    openBody:
      "ZerofAI operates across six revolutionary pillars, each representing a fundamental reimagining of enterprise IT. Together, they form an interconnected intelligence that grows more powerful with every microsecond of operation.",
    verticalText: "The Cognitive Architecture",
  },
  {
    openTitle: "Response-Driven\nAssistance",
    openBody:
      "Response-Driven Assistance transforms service desks into conversational command centers.",
    verticalText:
      "Response-Driven Assistance transforms service desks into conversational command centers",
  },
  {
    openTitle: "Intelligent Incident\nMitigation",
    openBody:
      "Intelligent Incident Mitigation makes incidents obsolete before humans notice.",
    verticalText:
      "Intelligent Incident Mitigation makes incidents obsolete before humans notice",
  },
  {
    openTitle: "Autonomous Issue\nManagement",
    openBody:
      "Autonomous Issue Management creates living, breathing infrastructure.",
    verticalText:
      "Autonomous Issue Management creates living, breathing infrastructure",
  },
  {
    openTitle: "Predictive\nAnalytics",
    openBody:
      "Predictive Analytics forecasts infrastructure needs six months ahead.",
    verticalText:
      "Predictive Analytics forecasts infrastructure needs six months ahead",
  },
  {
    openTitle: "Learning-Driven\nManagement",
    openBody:
      "Learning-Driven Management ensures continuous intelligence growth.",
    verticalText:
      "Learning-Driven Management ensures continuous intelligence growth",
  },
  
  
];

export default function ProposeReality() {
  // First pillar open by default; stays open until another is hovered.
  const [pillarActive, setPillarActive] = useState<number>(0);
  const hoverLockRef = useRef<number | null>(null);
  const pillars = useMemo(() => COGNITIVE_PILLARS, []);

  const setPillarActiveSmooth = useCallback((idx: number) => {
    if (hoverLockRef.current !== null) return;
    setPillarActive(idx);
    hoverLockRef.current = window.setTimeout(() => {
      hoverLockRef.current = null;
    }, 220);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      offset: 120,
      once: false,
    });
  }, []);

  return (
    <>
      {/* Section 1 */}
      <section
        className="strip-bg relative w-full overflow-hidden bg-[#151518] text-white"
        aria-label="We Propose a New Reality"
      >
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <div className="absolute left-0 top-0 h-full w-full" />
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[1.15fr_0.85fr]">
          <div data-aos="fade-up" className="max-w-[720px]">
            <h2 className="text-[40px]  leading-[1.05] tracking-tight md:text-[46px]">
              We Propose a New Reality
            </h2>
            <p className="mt-3 text-[17px] font-medium text-white">
              Autonomous Enterprise Consciousness
            </p>

            <div className="mt-7 space-y-4 text-sm leading-6 text-white/70">
              <p>
                Imagine an IT infrastructure that breathes, thinks, and evolves.
                Not automation—true autonomy. Your digital ecosystem develops its
                own immune system that neutralizes threats before they manifest. A
                predictive nervous system that senses disruptions in their
                earliest electromagnetic whispers. Cognitive reasoning that
                operates at machine speed while executing boardroom-caliber
                strategy.
              </p>
              <p>
                This isn&apos;t science fiction. This is the ZerofAI reality,
                operating in production for Fortune 100 enterprises today.
              </p>
            </div>

            <div className="mt-8 h-[3px] w-[520px] max-w-full bg-[#19B6C9]" />

            <p className="mt-6 max-w-[700px] text-xs leading-6 text-white/70">
              “What if every ticket prevented itself? What if every incident
              resolved before the user knew? What if your IT budget shifted from
              maintenance to innovation?”
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="mx-auto w-full max-w-[360px] rounded-sm bg-[#19B6C9] p-0 shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
          >
            <div className="relative h-[400px] w-full overflow-hidden sm:h-[460px] md:h-[520px]">
              <Image
                src={RIGHT_IMAGE_URL}
                alt="AI and human hand"
                fill
                priority={false}
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 360px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Cognitive Architecture (screenshot layout: static left + 7 hover pillars) */}
      <section
        id="section-2"
        aria-labelledby="cognitive-architecture-heading"
        className="strip-bg relative w-full bg-[#151518] px-6 py-12 text-white md:py-16"
      >
        <div className="relative mx-auto w-full max-w-6xl">
          <h2 id="cognitive-architecture-heading" className="sr-only">
            The Cognitive Architecture
          </h2>

          {/* Intro column is now pillar 0 (same style/behavior as others). */}
          <div data-aos="fade-up" className="flex min-h-[280px] w-full min-w-0 flex-col lg:min-h-0">
            <div
              className="relative hidden h-[520px] w-full min-w-0 overflow-hidden lg:block lg:h-[560px]"
            >
              <div className="flex h-full w-full">
                {pillars.map((p, idx) => {
                  const isActive = pillarActive === idx;
                  return (
                    <div
                      key={`pillar-${idx}`}
                      onMouseEnter={() => setPillarActiveSmooth(idx)}
                      className={[
                        // keep a divider before the first pillar too (like screenshot)
                        "group relative h-full border-l border-white/20 transition-[flex-basis,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isActive
                          ? "basis-[min(360px,42vw)] shrink-0 "
                          : "basis-0 grow bg-transparent min-w-[72px] sm:min-w-[84px]",
                      ].join(" ")}
                      role="button"
                      tabIndex={0}
                      onFocus={() => setPillarActiveSmooth(idx)}
                    >
                      <div
                        className={[
                          "absolute inset-0 flex items-center justify-center px-2 transition-opacity duration-200 sm:px-3",
                          isActive ? "pointer-events-none opacity-0" : "opacity-100",
                        ].join(" ")}
                      >
                        <p
                          className="max-h-[92%] text-center text-[10px] font-semibold leading-snug text-white/75 [writing-mode:vertical-rl] rotate-180 sm:text-[11px] xl:text-[12px]"
                          style={{ textOrientation: "mixed" }}
                        >
                          {p.verticalText}
                        </p>
                      </div>

                      <div
                        className={[
                          // no scrollbar flash while opening
                          "absolute inset-0 overflow-hidden p-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] sm:p-8",
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "pointer-events-none -translate-x-2 opacity-0",
                        ].join(" ")}
                      >
                        <h3 className="whitespace-pre-line text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.05] tracking-tight text-white">
                          {p.openTitle}
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-white/45">{p.openBody}</p>
                        <div
                          className="mt-6 h-[220px] w-full rounded-[4px] sm:mt-8 sm:h-[260px]"
                          style={{ backgroundColor: COGNITIVE_TEAL }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile: intro is above; pillar cards */}
            <div className="grid gap-3 lg:hidden">
              {pillars.map((p, idx) => {
                const isActive = pillarActive === idx;
                return (
                  <button
                    key={`pillar-mobile-${idx}`}
                    type="button"
                    onClick={() => setPillarActive(idx)}
                    className={[
                      "w-full rounded-[14px] bg-white/6 px-5 py-4 text-left ring-1 ring-white/15 transition-colors",
                      isActive ? "bg-white/10" : "hover:bg-white/80",
                    ].join(" ")}
                  >
                    <p className="text-[15px] font-extrabold text-white/95">
                      {p.openTitle.replaceAll("\n", " ")}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/45">{p.openBody}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
