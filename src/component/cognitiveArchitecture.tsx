"use client";

import { useCallback, useMemo, useRef, useState } from "react";

type Column = {
  openTitle: string;
  openBody: string;
  verticalText: string;
};

const COLUMNS: Column[] = [
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
      "Response-Driven Assistance transforms service desks into\nconversational command centers",
  },
  {
    openTitle: "Intelligent Incident\nMitigation",
    openBody:
      "Intelligent Incident Mitigation makes incidents obsolete before humans notice.",
    verticalText:
      "Intelligent Incident Mitigation makes incidents obsolete\nbefore humans notice",
  },
  {
    openTitle: "Autonomous Issue\nManagement",
    openBody:
      "Autonomous Issue Management creates living, self-healing infrastructure.",
    verticalText:
      "Autonomous Issue Management creates living,\nself-healing infrastructure",
  },
  {
    openTitle: "Predictive\nAnalytics",
    openBody:
      "Predictive Analytics forecasts infrastructure disruption months ahead.",
    verticalText:
      "Predictive Analytics forecasts infrastructure\nmonths ahead",
  },
  {
    openTitle: "Learning-Driven\nManagement",
    openBody:
      "Learning-Driven Management ensures continuous intelligence growth.",
    verticalText:
      "Learning-Driven Management ensures continuous\nintelligence growth",
  },
  {
    openTitle: "Business\nIntelligence",
    openBody: "Business Intelligence transforms data into strategic wisdom.",
    verticalText: "Business Intelligence transforms data into\nstrategic wisdom",
  },
];

export default function CognitiveArchitecture() {
  // first column open by default (PDF like)
  const [active, setActive] = useState<number>(0);
  const hoverLockRef = useRef<number | null>(null);

  const columns = useMemo(() => COLUMNS, []);

  const setActiveSmooth = useCallback((idx: number) => {
    if (hoverLockRef.current !== null) return;
    setActive(idx);
    hoverLockRef.current = window.setTimeout(() => {
      hoverLockRef.current = null;
    }, 220);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white">
      <div className="relative w-full py-16">
        {/* Desktop: vertical text columns, hover expands the hovered column */}
        <div
          className="relative hidden h-[560px] w-full overflow-hidden rounded-[18px] bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.55)] ring-1 ring-white/10 lg:block"
        >
          <div className="flex h-full w-full">
            {columns.map((p, idx) => {
              const isActive = idx === active;
              return (
                <div
                  key={`${idx}-${p.verticalText}`}
                  onMouseEnter={() => setActiveSmooth(idx)}
                  className={[
                    "group relative h-full border-l border-white/15 transition-[flex-basis,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive
                      ? "basis-[360px] bg-white/4"
                      : "basis-0 grow min-w-[92px] bg-transparent",
                  ].join(" ")}
                  role="button"
                  tabIndex={0}
                  onFocus={() => setActiveSmooth(idx)}
                >
                  {/* Closed (vertical) */}
                  <div
                    className={[
                      "absolute inset-0 flex items-center justify-center px-3 transition-opacity duration-200",
                      isActive ? "opacity-0 pointer-events-none" : "opacity-100",
                    ].join(" ")}
                  >
                    <div className="flex flex-col items-center gap-6">
                      <p
                        className="text-[13px] font-semibold text-white/70 [writing-mode:vertical-rl] rotate-180 text-center whitespace-pre-line"
                        style={{ textOrientation: "mixed" }}
                      >
                        {p.verticalText}
                      </p>
                    </div>
                  </div>

                  {/* Open card (inside same column, no overlap) */}
                  <div
                    className={[
                      "absolute inset-0 p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]",
                      isActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 pointer-events-none",
                    ].join(" ")}
                  >
                    <h2 className="text-[42px] font-extrabold leading-[1.05] tracking-tight whitespace-pre-line">
                      {p.openTitle}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/40">
                      {p.openBody}
                    </p>
                    <div className="mt-8 h-[300px] w-full rounded-[6px] bg-[#19B6C9]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/tablet: simple cards */}
        <div className="grid gap-4 lg:hidden">
          <div className="rounded-[18px] bg-white/5 px-6 py-6 ring-1 ring-white/10">
            <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-tight">
              The Cognitive Architecture
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/40">
              ZerofAI operates across six revolutionary pillars, each
              representing a fundamental reimagining of enterprise IT.
            </p>
            <div className="mt-6 h-[160px] w-full rounded-[6px] bg-[#19B6C9]" />
          </div>

          {COLUMNS.slice(1).map((p, idx) => {
            const isActive = idx + 1 === active;
            return (
              <button
                key={p.verticalText}
                type="button"
                onClick={() => setActive(idx + 1)}
                className={[
                  "w-full rounded-[16px] bg-white/5 px-6 py-5 text-left ring-1 ring-white/10 transition-colors",
                  isActive ? "bg-white/7" : "hover:bg-white/6",
                ].join(" ")}
              >
                <p className="mt-2 text-base font-extrabold text-white/90">
                  {p.openTitle.replaceAll("\n", " ")}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/45">{p.openBody}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

