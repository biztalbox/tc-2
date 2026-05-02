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
      "https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpfGVufDB8fDB8fHww",
  },
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
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 transition-[background-color,box-shadow,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        expanded
          ? "bg-[#19B6C9] text-[#0a0a0a] ring-[#19B6C9]/60"
          : "bg-gray-300 dark:bg-black/55 text-white ring-white/25",
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
        className="bg-secondary dark:bg-secondary/40 pb-12 md:pb-0"

      >

        <div className="flex w-full flex-col">
          {/* Desktop: edge-to-edge columns */}
          <div className="relative hidden min-h-145 w-full min-w-0 lg:block lg:h-[min(78vh,880px)]">
            <div className="flex h-full min-h-145 w-full overflow-hidden bg-secondary dark:bg-secondary/40">
              {pillars.map((p, idx) => {
                const isActive = pillarActive === idx;
                const titleOneLine = p.openTitle.replaceAll("\n", " ");
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setPillarActiveSmooth(idx)}
                    className={[
                      "group relative h-full cursor-pointer border-l border-gray-400 dark:border-white/30  transition-[flex-basis,background-color,box-shadow] duration-500 ease-in-out",
                      isActive
                        ? "basis-[min(400px,42vw)] shrink-0 bg-gray-300 dark:bg-[#19B6C9]/[0.07]"
                        : "basis-0 grow bg-gray-200 dark:bg-transparent  ",
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
                        className="flex-none text-center text-[15px] font-extrabold leading-none tracking-wide [writing-mode:vertical-rl] rotate-180 whitespace-nowrap sm:text-[17px] xl:text-[19px]"
                        style={{ textOrientation: "mixed" }}
                      >
                        {titleOneLine}
                      </p>
                    </div>

                    <div
                      className={[
                        "absolute inset-0 flex flex-col px-6 py-12 gap-10",
                        isActive
                          ? "pointer-events-auto opacity-100"
                          : "pointer-events-none opacity-0",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "shrink-0 pr-14 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-opacity motion-reduce:duration-200",
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "translate-x-12 opacity-0 delay-0",
                        ].join(" ")}
                      >
                        <h3 className="relative w-fit max-w-full cursor-default whitespace-pre-line pb-2 text-[clamp(26px,3.8vw,40px)] font-extrabold leading-[1.06] tracking-tight after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#19B6C9] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full">
                          {p.openTitle}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed">{p.openBody}</p>
                      </div>

                      <div
                        className={[
                          "transition-[opacity,transform] will-change-transform duration-500",
                          isActive
                            ? "mt-0 opacity-100"
                            : "mt-40 opacity-0",
                        ].join(" ")}
                      >
                        <div className="relative w-full rounded-xl shadow-xl h-60">
                          <Image
                            src={p.imageSrc}
                            alt={titleOneLine}
                            fill
                            className="object-cover rounded-xl"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={[
                        "absolute z-20 cursor-pointer transition-[top,bottom,left,right,transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
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
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:hidden">
            {pillars.map((p, idx) => {
              const isActive = pillarActive === idx;
              return (
                <button
                  key={`pillar-mobile-${idx}`}
                  type="button"
                  onClick={() => setPillarActive(idx)}
                  className={[
                    "flex w-full flex-col rounded-lg bg-white/6 px-5 py-4 text-left ring-1 ring-white/15 gap-4"
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3>
                      {p.openTitle.replaceAll("\n", " ")}
                    </h3>
                    <ColumnArrow expanded={isActive} />
                  </div>
                  <p className="text-white/45">{p.openBody}</p>
                  <div className="h-full">
                    <Image
                      src={p.imageSrc}
                      width={400}
                      height={400}
                      alt={p.openTitle.replaceAll("\n", " ")}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
