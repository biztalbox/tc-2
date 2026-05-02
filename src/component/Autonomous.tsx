"use client";

import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";

const IMAGE_URL_1 =
  "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWl8ZW58MHx8MHx8fDA%3D";
const IMAGE_URL_2 =
  "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWl8ZW58MHx8MHx8fDA%3D";
const IMAGE_URL_3 =
  "https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpfGVufDB8fDB8fHww";
const IMAGE_URL_4 =
  "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWl8ZW58MHx8MHx8fDA%3D";

type Row = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

const ROWS: Row[] = [
  {
    title: "Conversational Hyper-Orchestration",
    subtitle: "Natural language transforms into complex, multi-system workflows instantly",
    imageUrl: IMAGE_URL_1,
  },
  {
    title: "Agentic Self-Healing",
    subtitle: "Password resets, software deployment, service fulfillment with zero human touch",
    imageUrl: IMAGE_URL_2,
  },
  {
    title: "Predictive Knowledge Delivery",
    subtitle:
      "AI-curated solutions delivered before the user finishes typing their question",
    imageUrl: IMAGE_URL_3,
  },
  {
    title: "Agentic Self-Healing",
    subtitle: "Password resets, software deployment, service fulfillment with zero human touch",
    imageUrl: IMAGE_URL_4,
  },
];

export default function Autonomous() {
  // By default, nothing is open/visible. Hovering a row activates it.
  const [active, setActive] = useState<number | null>(null);
  const lockRef = useRef<number | null>(null);
  const rows = useMemo(() => ROWS, []);

  const setActiveSmooth = useCallback((idx: number) => {
    if (lockRef.current !== null) return;
    setActive(idx);
    lockRef.current = window.setTimeout(() => {
      lockRef.current = null;
    }, 180);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-center text-[30px] font-extrabold tracking-tight md:text-[36px]">
          Autonomous Service Consciousness
        </h2>

        <div className="mt-10">
          <div
            className="relative"
            onMouseLeave={() => setActive(null)}
            onBlur={() => setActive(null)}
          >
            <div className="absolute left-0 right-0 top-0 z-0 h-px bg-white/10" />
            <div className="absolute left-0 right-0 bottom-0 z-0 h-px bg-white/10" />

            {/* Shared image card: appears between text and arrow, spans all rows */}
            <div
              className={[
                "pointer-events-none absolute right-20 top-1/2 z-10 hidden w-[250px] -translate-y-1/2 overflow-hidden rounded-[2px] bg-[#00BCD4] shadow-[0_20px_70px_rgba(0,0,0,0.65)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:block",
                active === null ? "opacity-0 translate-y-[-46%]" : "opacity-100 translate-y-[-50%]",
              ].join(" ")}
              aria-hidden={active === null}
            >
              <div className="relative h-[300px] w-[250px]">
                {rows.map((r, idx) => {
                  const show = active === idx;
                  return (
                    <div
                      key={`autonomous-image-${idx}`}
                      className={[
                        "absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        show ? "opacity-100" : "opacity-0",
                      ].join(" ")}
                    >
                      <Image
                        src={r.imageUrl}
                        alt={r.title}
                        fill
                        className="object-cover"
                        sizes="250px"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {rows.map((r, idx) => {
              const isActive = idx === active;
              return (
                <div key={`${idx}-${r.title}`} className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveSmooth(idx)}
                    onFocus={() => setActiveSmooth(idx)}
                    onClick={() => setActive(idx)}
                    className="group relative flex w-full items-center gap-6 py-7 pr-20 text-left outline-none lg:pr-[380px]"
                  >
                    {/* text */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[18px] font-extrabold tracking-tight text-white md:text-[20px]">
                        {r.title}
                      </p>
                      <p className="mt-1 text-[12px] leading-5 text-white/45 md:text-[13px]">
                        {r.subtitle}
                      </p>
                    </div>

                    {/* arrow */}
                    <div
                      className={[
                        "absolute right-0 top-1/2 grid h-11 w-11 shrink-0 -translate-y-1/2 place-items-center rounded-full bg-white/10 ring-1 ring-white/10 shadow-[0_14px_35px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:bg-white/14 group-hover:ring-white/20",
                        isActive
                          ? "translate-y-[-14%] -rotate-45 bg-[#00BCD4]/18 ring-[#00BCD4]/35"
                          : "translate-y-0 rotate-0",
                      ].join(" ")}
                      aria-hidden
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white/95 drop-shadow-[0_8px_18px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-px"
                      >
                        <path
                          d="M5 12h12"
                          stroke="currentColor"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* row divider + active accent */}
                  <div
                    className={[
                      "absolute left-0 right-0 bottom-0 z-0 h-px transition-colors duration-300",
                      isActive ? "bg-[#00BCD4]/90" : "bg-white/10",
                    ].join(" ")}
                  />
                  {isActive ? (
                    <div className="absolute left-0 right-0 bottom-0 z-0 h-px bg-[#00BCD4]/90" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

