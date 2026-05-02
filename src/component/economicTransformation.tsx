"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type StatItem =
  | {
      value: number;
      fillPercent: number; // 0..100 (bar fill)
      label: string;
      description: string;
      barVariant?: "teal" | "muted";
    }
  | {
      value: "infinity";
      fillPercent: number; // usually 100
      label: string;
      description: string;
      barVariant?: "teal" | "muted";
    };

const STAT_BAR_HEIGHT_CLASS =
  "h-[6.25rem] min-h-[6.25rem] lg:h-[6.75rem] lg:min-h-[6.75rem]";

function StatCard({
  item,
  index,
  setFillRef,
  setTextRef,
}: {
  item: StatItem;
  index: number;
  setFillRef: (idx: number) => (el: HTMLDivElement | null) => void;
  setTextRef: (idx: number) => (el: HTMLSpanElement | null) => void;
}) {
  const variant =
    item.barVariant ??
    (item.value === 0 || item.value === "infinity" ? "muted" : "teal");
  const barBg = variant === "muted" ? "bg-[#003E35]" : "bg-[#0b4a53]";

  return (
    <div className="mx-auto flex h-full w-full min-w-0 max-w-[240px] flex-col items-center sm:max-w-none lg:w-[220px] lg:max-w-none xl:w-[230px]">
      <div
        className={[
          "relative z-10 w-[min(48%,4rem)] min-w-13 max-w-17 overflow-hidden rounded-t-[12px] text-center shadow-[0_10px_32px_rgba(0,0,0,0.42)]",
          STAT_BAR_HEIGHT_CLASS,
          barBg,
        ].join(" ")}
      >
        <div
          ref={setFillRef(index)}
          data-target={Math.max(0, Math.min(100, Math.round(item.fillPercent)))}
          className={[
            "absolute bottom-0 left-0 right-0 h-0 will-change-[height]",
            "bg-[linear-gradient(180deg,#23D3E8_0%,#19B6C9_60%,#118DA0_100%)]",
            "shadow-[0_-10px_28px_rgba(25,182,201,0.30)]",
          ].join(" ")}
          aria-hidden
        />

        <span
          ref={setTextRef(index)}
          data-count-target={typeof item.value === "number" ? `${item.value}` : ""}
          className="absolute inset-0 flex items-center justify-center text-[clamp(1.15rem,3.2vw,1.55rem)] font-extrabold leading-none tracking-tight text-white"
          style={{ willChange: "contents, opacity" }}
        >
          {item.value === "infinity" ? "∞" : `${item.value}%`}
        </span>
      </div>

      <div className="relative -mt-px flex w-full flex-1 overflow-hidden rounded-[12px] border border-white/8 bg-[#121212] shadow-[0_14px_40px_rgba(0,0,0,0.48)]">
        <div className="w-[7px] shrink-0 bg-[#19B6C9]" aria-hidden />
        <div className="flex min-h-[118px] min-w-0 flex-1 flex-col justify-center px-3 pb-5 pt-5 text-center lg:min-h-[128px] lg:px-3.5 lg:pt-6">
          <p className="text-[11px] font-extrabold leading-snug tracking-wide text-white lg:text-[11.5px]">
            {item.label}
          </p>
          <p className="mt-1.5 text-[9.5px] leading-relaxed text-white/45 lg:text-[10px]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EconomicTransformation() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const fillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const stats: StatItem[] = useMemo(
    () => [
      {
        value: 87,
        fillPercent: 87,
        label: "Reduction in L1/L2 Ticket Volume",
        description:
          "Thousands of hours reclaimed from repetitive resolution work",
        barVariant: "teal",
      },
      {
        value: 94,
        fillPercent: 94,
        label: "Improvement in MTTR",
        description: "Problems resolved before humans detect them",
        barVariant: "teal",
      },
      {
        value: 0,
        fillPercent: 6,
        label: "Compliance Violations",
        description: "Autonomous enforcement eliminates audit risks",
        barVariant: "muted",
      },
      {
        value: "infinity",
        fillPercent: 100,
        label: "Scalability Without Headcount",
        description: "Your infrastructure grows without expanding your team",
        barVariant: "muted",
      },
    ],
    [],
  );

  const setFillRef = useMemo(
    () => (idx: number) => (el: HTMLDivElement | null) => {
      fillRefs.current[idx] = el;
    },
    [],
  );

  const setTextRef = useMemo(
    () => (idx: number) => (el: HTMLSpanElement | null) => {
      textRefs.current[idx] = el;
    },
    [],
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      fillRefs.current.forEach((fill) => {
        if (!fill) return;
        const target = Number(fill.dataset.target ?? "0");
        fill.style.height = `${Math.max(0, Math.min(100, target))}%`;
      });
      textRefs.current.forEach((el, i) => {
        if (!el) return;
        const item = stats[i];
        el.textContent = item.value === "infinity" ? "∞" : `${item.value}%`;
        el.style.opacity = "1";
      });
      return;
    }

    const ctx = gsap.context(() => {
      const fills = fillRefs.current.filter(Boolean) as HTMLDivElement[];
      const texts = textRefs.current.filter(Boolean) as HTMLSpanElement[];

      const reset = () => {
        gsap.set(fills, { height: "0%" });
        textRefs.current.forEach((el, i) => {
          if (!el) return;
          const item = stats[i];
          if (item.value === "infinity") {
            el.textContent = "∞";
            gsap.set(el, { opacity: 0 });
          } else {
            el.textContent = "0%";
            gsap.set(el, { opacity: 1 });
          }
        });
      };

      const duration = 6;
      const ease = "power3.out";
      const staggerEach = 0.12;

      reset();

      const tl = gsap.timeline({ paused: true, defaults: { duration, ease } });

      tl.to(
        fills,
        {
          height: (i, target) => {
            const el = target as HTMLDivElement;
            const t = Number(el.dataset.target ?? "0");
            return `${Math.max(0, Math.min(100, t))}%`;
          },
          stagger: { each: staggerEach },
        },
        0,
      );

      stats.forEach((item, i) => {
        const el = textRefs.current[i];
        if (!el) return;

        if (item.value === "infinity") {
          tl.to(el, { opacity: 1, duration: 0.45, ease }, i * staggerEach + 0.12);
          return;
        }

        const toVal = Math.max(0, Math.min(100, Math.round(item.value)));
        const obj = { val: 0 };
        tl.to(
          obj,
          {
            val: toVal,
            duration,
            ease,
            onUpdate: () => {
              el.textContent = `${Math.round(obj.val)}%`;
            },
          },
          i * staggerEach,
        );
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          reset();
          tl.restart();
        },
        onEnterBack: () => {
          reset();
          tl.restart();
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [stats]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050505] text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2
            data-aos="fade-up"
            className="text-[34px] font-extrabold tracking-tight md:text-[44px]"
          >
            The Economic Transformation
          </h2>
          <div
            data-aos="zoom-in"
            data-aos-delay="120"
            className="mx-auto mt-5 inline-flex items-center rounded-full bg-[#19B6C9] px-6 py-2 text-[12px] font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,0.55)]"
          >
            From Cost Center to Revenue Architect
          </div>
        </div>

        <div className="mt-14 grid items-start gap-12 md:grid-cols-2 md:gap-12">
          <div data-aos="fade-up" className="flex h-full flex-col">
            <div className="min-h-[220px]">
              <div className="flex items-center gap-5">
                <p className="text-[12px] font-extrabold tracking-wide text-[#19B6C9]">
                  Traditional IT Reality
                </p>
                <div className="h-px flex-1 bg-white" />
              </div>

              <div className="mt-5 space-y-5 text-[12px] leading-6 text-white/35 md:text-[13px]">
                <p>
                  $2.3M annual spend on reactive maintenance. Engineers drowning
                  in repetitive tickets. Innovation budget consumed by
                  operational firefighting. Strategic initiatives perpetually
                  delayed because “keeping the lights on” demands every
                  resource.
                </p>
                <p>
                  Compliance violations accumulate. Security gaps widen.
                  Technical debt compounds. Meanwhile, competitors with
                  autonomous capabilities accelerate past you.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="80"
            className="flex h-full flex-col"
          >
            <div className="min-h-[220px]">
              <div className="flex items-center gap-5">
                <p className="text-[12px] font-extrabold tracking-wide text-[#19B6C9]">
                  ZerofAI-Enabled IT
                </p>
                <div className="h-px flex-1 bg-white" />
              </div>

              <div className="mt-5 space-y-5 text-[12px] leading-6 text-white/35 md:text-[13px]">
                <p>
                  $1M redirected to innovation initiatives that drive competitive
                  advantage. Engineers architecting next-generation
                  capabilities. Maintenance becomes automatic, invisible,
                  costless.
                </p>
                <p>
                  Your IT organization transforms from a cost center into a
                  revenue architect—the strategic engine that enables
                  market-disrupting innovations impossible for competitors still
                  trapped in reactive paradigms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-[980px] grid-cols-1 items-stretch gap-8 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:justify-items-center lg:gap-4 xl:gap-5">
          {stats.map((item, idx) => (
            <StatCard
              key={item.label}
              item={item}
              index={idx}
              setFillRef={setFillRef}
              setTextRef={setTextRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

