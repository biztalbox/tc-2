"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Card = {
  title: string;
  body: string;
  button: string;
  buttonNote: string;
};

const CARDS: Card[] = [
  {
    title: "Request Economic Transformation\nModel",
    body: "Receive an AI-calculated ROI projection specific to your enterprise. Discover precisely how much you’ll redirect from maintenance to market-disrupting innovation.",
    button: "Request immer...",
    buttonNote: "Schedule a 15-minute executive briefing.",
  },
  {
    title: "Request Economic Transformation Model",
    body: "Receive an AI-calculated ROI projection specific to your enterprise. Discover precisely how much you’ll redirect from maintenance to market-disrupting innovation.",
    button: "Request immer...",
    buttonNote: "Receive your ROI projection within 24 hours.",
  },
  {
    title: "Join the Cognitive Enterprise",
    body: "Access an exclusive, limited-seat think tank for organizations pioneering autonomous operations. Shape the future with fellow revolutionaries and gain unparalleled insights.",
    button: "Request immer...",
    buttonNote: "Limited seats. By invitation only.",
  },
];

function CardItem({ card, idx }: { card: Card; idx: number }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={idx * 120}
      className="group relative"
    >
      <div className="rounded-[18px] bg-white/4 p-px shadow-lg dark:shadow-none transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <div className="rounded-[18px] bg-secondary dark:bg-secondary/40 px-7 py-10 ring-1">
          <h4 className="text-center">
            {card.title}
          </h4>

          <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-foreground" />

          <p className="mx-auto mt-6 max-w-[290px] text-center text-[12px] leading-6 text-white/35">
            {card.body}
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay={idx * 120 + 220}
        className="mt-10 flex flex-col items-center"
      >
        <button className="rounded-full px-5 py-2.5 border border-white/45 bg-foreground text-[13px] font-semibold text-background transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#19B6C9] hover:bg-[#19B6C9] hover:text-black active:translate-y-px">
          {card.button}
        </button>

        <p className="mt-6 max-w-[240px] text-center text-[11px] leading-5 text-white/25">
          {card.buttonNote}
        </p>
      </div>
    </div>
  );
}

export default function ThreeCtaCards() {
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
    <section className="py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {CARDS.map((card, idx) => (
            <CardItem key={idx} card={card} idx={idx} />
          ))}
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="120"
          className="mx-auto mt-14 max-w-5xl text-center text-[12px] leading-6 text-white/30"
        >
          ZerofAI is deployed as a federated agentic mesh across AWS, Azure, and
          GCP, operating with SOC 2 Type II, ISO 27001, and GDPR compliance by
          design. The platform processes over 14 billion decision-points daily
          for global enterprises.
        </p>
      </div>
    </section>
  );
}

