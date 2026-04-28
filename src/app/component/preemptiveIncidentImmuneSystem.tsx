"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PreemptiveIncidentImmuneSystem() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      offset: 140,
      once: false,
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2
          data-aos="fade-left"
          className="text-[25px]  tracking-tight md:text-[40px]"
        >
          Pre-emptive Incident Immune System
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr]">
          <div
            data-aos="fade-left"
            className="relative max-w-4xl pl-6 text-sm leading-7 text-white/80"
          >
            <div className="absolute left-0 top-1 h-[86px] w-[3px] bg-[#19B6C9]" />
            <p>
              Where incidents meet their obsolescence. Alerts are intercepted by
              our Predictive Mitigation Mesh—a distributed network of
              specialized AI agents applying algorithmic resolution before human
              notification ever occurs.
            </p>
            <p className="mt-6">
              The result: 92% of Level 1 and Level 2 incidents autonomously
              resolved. Ticket volumes plummet. Mean Time To Resolution
              approaches zero. Your war room becomes a strategy room.
            </p>
          </div>

          <div data-aos="fade-up" className="relative mt-10">
            {/* cards */}
            <div className="relative z-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "DAY 1",
                  body: "Automated resolution for known issue patterns across your entire infrastructure",
                },
                {
                  title: "DAY 120",
                  body: "Full-spectrum autonomous incident lifecycle management with predictive intervention",
                },
                {
                  title: "Outcome",
                  body: "Your L1/L2 engineers transition from ticket processors to strategic architects",
                },
              ].map((c) => (
                <div key={c.title} className="relative text-center">
                  <p className="text-[16px] font-extrabold tracking-wide text-white">
                    {c.title}
                  </p>
                  <div className="mx-auto mt-2 h-[2px] w-12 bg-white/30" />
                  <p className="mx-auto mt-4 max-w-[170px] text-[11px] leading-5 text-white/80">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>

            {/* cyan step base */}
            <div className="pointer-events-none absolute left-1/2 top-[100px] z-0 h-[195px] w-screen -translate-x-1/2">
              <div className="absolute inset-0 bg-[#19B6C9]" />

              {/* black pockets under each card (match screenshot) */}
              <div className="absolute inset-x-0 top-0 h-[125px]">
                <div className="mx-auto h-full w-full max-w-6xl px-6">
                  <div className="grid h-full gap-5 md:grid-cols-3">
                    <div className="h-20 bg-[#050505]" />
                    <div className="h-20 bg-[#050505]" />
                    <div className="h-20 bg-[#050505]" />
                  </div>
                </div>
              </div>
            </div>

            {/* bottom padding so cyan base doesn't overflow */}
            <div className="h-[210px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

