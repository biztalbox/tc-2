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
    <section className="pt-16">
      <div className="container">
        <h2
          data-aos="fade-left"
        >
          Pre-emptive Incident Immune System
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr]">
          <div
            className="relative max-w-4xl pl-6 text-sm border-l-4 border-primary"
          >
            <p data-aos="fade-left">
              Where incidents meet their obsolescence. Alerts are intercepted by
              our Predictive Mitigation Mesh—a distributed network of
              specialized AI agents applying algorithmic resolution before human
              notification ever occurs.
            </p>
            <p className="mt-6" data-aos="fade-left">
              The result: 92% of Level 1 and Level 2 incidents autonomously
              resolved. Ticket volumes plummet. Mean Time To Resolution
              approaches zero. Your war room becomes a strategy room.
            </p>
          </div>

          <div className="">
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
                <div data-aos="fade-up" key={c.title} className="bg-background p-10 flex flex-col gap-8 text-center">
                  <h4>
                    {c.title}
                  </h4>
                  <p>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
       {/* cyan step base */}
       <div className="-mt-16 h-32 w-full bg-primary">
            </div>
    </section>
  );
}

