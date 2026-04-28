"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type PhaseCardProps = {
  phase: string;
  title: string;
  day: string;
  body: string;
  delay?: number;
};

function PhaseCard({ phase, title, day, body, delay = 0 }: PhaseCardProps) {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay={delay}
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      className="rounded-2xl bg-[#19B6C9] h-fit p-4 pt-8"
    >
      <div className="flex items-center gap-4 px-1 pb-4">
        <p className="text-[13px] font-extrabold text-black/85">{phase}:</p>
        <div className="h-px flex-1 bg-black/25" />
      </div>

      <div className="mx-auto w-full h-full rounded-2xl bg-[#0B0B0B] p-3 ring-1 ring-white/10">
        <h3 className="text-[18px] font-extrabold tracking-tight text-white md:text-[19px]">
          {title}
        </h3>

        <p className="mt-4 text-[11px] font-extrabold text-white/80">{day}</p>

        <p className="mt-2 text-[11px] leading-5 text-white/40">{body}</p>
      </div>
    </div>
  );
}

export default function ImplementationChronology() {
  useEffect(() => {
    AOS.init({
      offset: 140,
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2
            data-aos="fade-up"
            className="text-[34px] font-extrabold tracking-tight md:text-[44px]"
          >
            Implementation Chronology
          </h2>

          <div
            data-aos="zoom-in"
            data-aos-delay="120"
            className="mx-auto mt-5 inline-flex items-center rounded-full bg-white px-6 py-2 text-[12px] font-semibold text-black/80 shadow-[0_14px_35px_rgba(0,0,0,0.55)]"
          >
            From Cost Center to Revenue Architect
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="180"
            className="mx-auto mt-6 max-w-3xl text-[12px] leading-6 text-white/30 md:text-[13px]"
          >
            This isn&apos;t a software deployment—it&apos;s a consciousness
            migration. Your enterprise evolves through three distinct phases,
            each unlocking exponentially greater capabilities.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <PhaseCard
            phase="Phase 1"
            title="Consciousness Awakening"
            day="Day 1"
            body="Hyper-orchestrative self-service portal goes live. Users experience conversational workflows that feel like magic. Autonomous incident resolution foundation activates across your infrastructure. Self-healing compute capabilities begin operating. Your team witnesses their first incidents that resolve themselves."
            delay={0}
          />

          <PhaseCard
            phase="Phase 2"
            title="Autonomous Sovereignty"
            day="Day 90"
            body="Full false-positive suppression eliminates alert noise. Agentic security enforcement operates continuously across every endpoint. Predictive capacity planning forecasts needs months in advance. Your infrastructure begins making strategic decisions independently. Engineers transition from reactive to proactive roles."
            delay={120}
          />

          <PhaseCard
            phase="Phase 3"
            title="Cognitive Dominance"
            day="Day 180"
            body="Temporal prediction matrices reveal future states with unprecedented accuracy. Strategic intelligence canvases deliver executive insights that reshape business strategy. Perpetual evolution engine reaches full activation—your platform now improves
itself faster than human teams ever
could. You've achieved true enterprise consciousness"
            delay={240}
          />
        </div>
      </div>
    </section>
  );
}

