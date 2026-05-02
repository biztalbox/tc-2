"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "aos/dist/aos.css";

const RIGHT_IMAGE_URL =
  "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWl8ZW58MHx8MHx8fDA%3D";

type CognitivePillar = {
  openTitle: string;
  openBody: string;
  /** Bottom-of-column image (order matches columns left → right) */
  imageSrc: string;
};

/** Six pillars + image per column (user-provided assets). */
const COGNITIVE_PILLARS: CognitivePillar[] = [
  {
    openTitle: "The Cognitive\nArchitecture",
    openBody:
      "ZerofAI operates across six revolutionary pillars, each representing a fundamental reimagining of enterprise IT.",
    imageSrc:
"https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpfGVufDB8fDB8fHww",  },
  {
    openTitle: "Response-Driven\nAssistance",
    openBody:
      "Response-Driven Assistance transforms service desks into conversational command centers.",
    imageSrc:
    "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWl8ZW58MHx8MHx8fDA%3D",
  },
  {
    openTitle: "Intelligent Incident\nMitigation",
    openBody:
      "Intelligent Incident Mitigation makes incidents obsolete before humans notice.",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1733317429945-a3688f50430b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW50ZWxsaWdlbnQlMjBJbmNpZGVudCUyME1pdGlnYXRpb24lMjBpbiUyMGFpfGVufDB8fDB8fHww",
  },
  {
    openTitle: "Autonomous Issue\nManagement",
    openBody:
      "Autonomous Issue Management creates living, breathing infrastructure.",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpfGVufDB8fDB8fHww",
  },
  {
    openTitle: "Predictive\nAnalytics",
    openBody:
      "Predictive Analytics forecasts infrastructure needs six months ahead.",
    imageSrc:
      "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpfGVufDB8fDB8fHww",
  },
  {
    openTitle: "Learning-Driven\nManagement",
    openBody:
      "Learning-Driven Management ensures continuous intelligence growth.",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWl8ZW58MHx8MHx8fDA%3D",
  },
];

/** Collapsed: dark pill; expanded (hover/open): site teal like reference layout */
function ColumnArrow({ expanded }: { expanded: boolean }) {
  return (
    <span
      className={[
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.45)] ring-1 transition-[background-color,box-shadow,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        expanded
          ? "bg-[#19B6C9] text-[#0a0a0a] ring-[#19B6C9]/60"
          : "bg-black/55 text-white ring-white/25",
      ].join(" ")}
      aria-hidden
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M7 17L17 7M17 7H9M17 7V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

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

  return (
    <>
      {/* Section 1 */}
      <section
        className="bg-secondary dark:bg-secondary/40 py-20"
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
          <div className="w-fit place-self-start relative">
            <Image
              width={500}
              height={500}
              src={RIGHT_IMAGE_URL}
              alt="AI and human hand"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          <div className="">
            <h2>
              We Propose a New Reality
            </h2>
            <p>
              Autonomous Enterprise Consciousness
            </p>

            <div className="mt-7 space-y-4">
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

            <div className="mt-8 h-1 max-w-full bg-primary" />

            <p className="mt-6 text-xs leading-6 text-neutral-700 dark:text-white/70">
              “What if every ticket prevented itself? What if every incident
              resolved before the user knew? What if your IT budget shifted from
              maintenance to innovation?”
            </p>
          </div>


        </div>
      </section>

      {/* Section 2 — Cognitive Architecture (screenshot layout: static left + 7 hover pillars) */}
      <section
        id="section-2"
        aria-labelledby="cognitive-architecture-heading"
        className="strip-bg relative w-full bg-secondary dark:bg-secondary/40 px-6 py-12 text-neutral-900 md:py-16 dark:text-white"
        className="strip-bg relative w-full bg-[#151518] py-12 text-white md:py-16"
      >
        <div className="container">
        <div className="relative w-full">
          <h2 id="cognitive-architecture-heading" className="sr-only">
            The Cognitive Architecture
          </h2>

          {/* Desktop: edge-to-edge columns */}
          <div data-aos="fade-up" className="flex min-h-[280px] w-full min-w-0 flex-col lg:min-h-0">
            <div className="relative hidden min-h-[580px] w-full min-w-0 lg:block lg:h-[min(78vh,880px)]">
              <div className="flex h-full min-h-[580px] w-full overflow-hidden bg-[#0d0d10]">
                {pillars.map((p, idx) => {
                  const isActive = pillarActive === idx;
                  const titleOneLine = p.openTitle.replaceAll("\n", " ");
                  return (
                    <div
                      key={`pillar-${idx}`}
                      onMouseEnter={() => setPillarActiveSmooth(idx)}
                      className={[
                        "group relative h-full cursor-default border-l border-white/30 shadow-[inset_-1px_0_0_rgba(25,182,201,0.06)] transition-[flex-basis,background-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] first:border-l-0",
                        isActive
                          ? "basis-[min(380px,42vw)] shrink-0 bg-[#19B6C9]/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                          : "basis-0 grow bg-transparent min-w-[76px] hover:bg-white/[0.03] sm:min-w-[88px]",
                      ].join(" ")}
                      role="button"
                      tabIndex={0}
                      onFocus={() => setPillarActiveSmooth(idx)}
                    >
                      {/* Fixed offset so every column's label starts on the same horizontal line (length-independent). */}
                      <div
                        className={[
                          "absolute left-0 right-0 top-[clamp(3.75rem,18.5vh,9.25rem)] z-0 flex justify-center px-2 transition-opacity duration-300 sm:px-3",
                          isActive ? "pointer-events-none opacity-0" : "opacity-100",
                        ].join(" ")}
                      >
                        <p
                          className="flex-none text-center text-[15px] font-extrabold leading-none tracking-wide text-white [writing-mode:vertical-rl] rotate-180 whitespace-nowrap sm:text-[17px] xl:text-[19px]"
                          style={{ textOrientation: "mixed" }}
                        >
                          {titleOneLine}
                        </p>
                      </div>

                      <div
                        className={[
                          "absolute inset-0 flex min-h-0 flex-col overflow-hidden px-6 pt-6 pb-14 sm:px-8 sm:pt-8 sm:pb-16",
                          isActive
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0",
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "shrink-0 pr-14 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-opacity motion-reduce:duration-200",
                            isActive
                              ? "translate-x-0 opacity-100 motion-reduce:delay-0"
                              : "translate-x-12 opacity-0 delay-0",
                          ].join(" ")}
                        >
                          <h3 className="relative w-fit max-w-full cursor-default whitespace-pre-line pb-2 text-[clamp(26px,3.8vw,40px)] font-extrabold leading-[1.06] tracking-tight text-white after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#19B6C9] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full">
                            {p.openTitle}
                          </h3>
                          <p className="mt-4 text-sm leading-relaxed text-white/50">{p.openBody}</p>
                        </div>

                        <div
                          className={[
                            "mt-auto min-h-0 shrink-0 pt-16 transition-[opacity,transform] duration-[560ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-opacity motion-reduce:duration-200 sm:pt-20",
                            isActive
                              ? "translate-x-0 opacity-100 delay-150 motion-reduce:delay-0"
                              : "translate-x-16 opacity-0 delay-0",
                          ].join(" ")}
                        >
                          <div className="relative h-[220px] w-full overflow-hidden rounded-xl bg-black/40 shadow-[0_16px_48px_rgba(0,0,0,0.45)] ring-1 ring-[#19B6C9]/25 sm:h-[260px] lg:h-[min(32vh,320px)] lg:min-h-[220px]">
                            <Image
                              src={p.imageSrc}
                              alt={titleOneLine}
                              fill
                              className="object-cover motion-reduce:transition-none"
                              sizes="(max-width: 1024px) 100vw, min(380px, 42vw)"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        className={[
                          "absolute z-20 cursor-pointer transition-[top,bottom,left,right,transform,opacity] duration-[520ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                          isActive
                            ? "right-5 top-5 translate-x-0 opacity-100 delay-150 sm:right-7 sm:top-7"
                            : "bottom-7 left-1/2 -translate-x-1/2 opacity-100",
                        ].join(" ")}
                      >
                        <ColumnArrow expanded={isActive} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile: padded cards */}
            <div className="mx-auto grid w-full max-w-6xl gap-3 px-6 lg:hidden">
              {pillars.map((p, idx) => {
                const isActive = pillarActive === idx;
                return (
                  <button
                    key={`pillar-mobile-${idx}`}
                    type="button"
                    onClick={() => setPillarActive(idx)}
                    className={[
                      "flex w-full flex-col rounded-[14px] bg-white/6 px-5 py-4 text-left ring-1 ring-white/15 transition-colors",
                      isActive ? "bg-white/10" : "hover:bg-white/80",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[15px] font-extrabold text-white/95">
                        {p.openTitle.replaceAll("\n", " ")}
                      </p>
                      <ColumnArrow expanded={isActive} />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/45">{p.openBody}</p>
                    <div className="relative mt-4 h-[140px] w-full shrink-0 overflow-hidden rounded-[6px]">
                      <Image
                        src={p.imageSrc}
                        alt={p.openTitle.replaceAll("\n", " ")}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
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
