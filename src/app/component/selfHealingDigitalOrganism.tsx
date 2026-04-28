"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineShieldCheck } from "react-icons/hi2";

type Card = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#19B6C9] text-black shadow-[0_10px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
      {children}
    </div>
  );
}

export default function SelfHealingDigitalOrganism() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      offset: 140,
      once: false,
    });
  }, []);

  const cards: Card[] = [
    {
      title: "Autonomic Healing",
      body: "Compute anomalies detected and remediated in microseconds. Memory leaks sealed. Performance degradation reversed. Service interruptions prevented before they begin.",
      icon: (
        <IconBadge>
          <HiOutlineShieldCheck className="h-[22px] w-[22px]" />
        </IconBadge>
      ),
    },
    {
      title: "Autonomic Healing",
      body: "Compute anomalies detected and remediated in microseconds. Memory leaks sealed. Performance degradation reversed. Service interruptions prevented before they begin.",
      icon: (
        <IconBadge>
          <HiOutlineShieldCheck className="h-[22px] w-[22px]" />
        </IconBadge>
      ),
    },
    {
      title: "Autonomic Healing",
      body: "Compute anomalies detected and remediated in microseconds. Memory leaks sealed. Performance degradation reversed. Service interruptions prevented before they begin.",
      icon: (
        <IconBadge>
          <HiOutlineShieldCheck className="h-[22px] w-[22px]" />
        </IconBadge>
      ),
    },
    {
      title: "Autonomic Healing",
      body: "Compute anomalies detected and remediated in microseconds. Memory leaks sealed. Performance degradation reversed. Service interruptions prevented before they begin.",
      icon: (
        <IconBadge>
          <HiOutlineShieldCheck className="h-[22px] w-[22px]" />
        </IconBadge>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2
            data-aos="fade-left"
            className="text-[38px] font-extrabold tracking-tight md:text-[48px]"
          >
            Self-Healing&nbsp;&nbsp;Digital Organism
          </h2>

          <div data-aos="fade-left" className="mt-5 flex justify-center">
            <div className="rounded-full bg-[#19B6C9] px-6 py-2 text-xs font-semibold tracking-wide text-white shadow-[0_16px_40px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
              Autonomous Issue Management
            </div>
          </div>

          <p
            data-aos="fade-left"
            className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/80"
          >
            Your infrastructure evolves from static hardware into living,
            breathing digital physiology. It doesn&apos;t just respond to
            problems—it anticipates, prevents, and continuously optimizes itself
            without human intervention.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div
              key={`${c.title}-${i}`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="card-shadow group relative rounded-[18px] bg-white/6 p-2 ring-1 ring-white/10 transition-[background-color,box-shadow,ring-color,ring-width] duration-300 ease-in-out hover:bg-white hover:ring-2 hover:bounda-black"
            >
              <div className="hover:border-black hover:ring-2 hover:ring-black rounded-sm p-1">             <div className="flex items-start justify-between gap-4">
                {c.icon}
                <div className="pt-1 text-right">
                  <p className="text-sm font-extrabold text-white/90 transition-colors duration-300 ease-in-out group-hover:text-black">
                    {c.title}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/80 transition-colors duration-300 ease-in-out group-hover:text-black/70">
                {c.body}
              </p>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[18px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

