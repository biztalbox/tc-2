"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TOP_IMAGE =
  "https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlhZ3JhbXxlbnwwfHwwfHx8MA%3D%3D";

const BOTTOM_IMAGE =
  "https://media.istockphoto.com/id/1491115694/photo/mechanical-gear-with-technology-background-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=Npktz_nEzhJFBdQZrvJzBnfz2BXa5OKU4qjPn6-sQzM=";

export default function TemporalPredictionPerpetualEvolution() {
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
        <div className="text-center">
          <h2
            data-aos="fade-up"
            className="text-[34px] font-extrabold tracking-tight md:text-[44px]"
          >
            Temporal Prediction &amp; Perpetual Evolution
          </h2>
          
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mx-auto mt-4 max-w-3xl text-xs leading-6 text-white/35 md:text-sm"
          >
            ZerofAI operates across six revolutionary pillars, each representing
            a fundamental reimagining of enterprise IT. Together, they form an
            interconnected intelligence that grows more powerful with every
            microsecond of operation.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="75"
            className="mx-auto mt-5 h-[2px] w-90 rounded-full bg-[#19B6C9]"
          />
        </div>

        <div className="mt-14 space-y-12">
          {/* Top row */}
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.05fr]">
            <div
              data-aos="fade-left"
              className="relative mx-auto h-[220px] w-full max-w-[520px] overflow-hidden rounded-[6px] bg-[#19B6C9] shadow-[0_18px_50px_rgba(0,0,0,0.55)] md:h-[250px]"
            >
              <Image
                src={TOP_IMAGE}
                alt="Diagram"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 520px"
              />
            </div>

            <div data-aos="fade-right" className="text-white/40">
              <p className="text-xs font-extrabold tracking-wide text-[#19B6C9]">
                The Temporal Prediction Matrix
              </p>
              <p className="mt-2 text-xs font-semibold text-white/70">
                Predictive Analytics with AI Forecasting (PAIF)
              </p>

              <div className="mt-6 space-y-5 text-xs leading-6 md:text-sm md:leading-7">
                <p>
                  Six months into the future of your infrastructure. Cognitive
                  Capacity Forecasting predicts resource requirements with 94%
                  accuracy. The Incident Prophecy Engine models potential
                  failure chains before they manifest, calculating probability
                  cascades across interdependent systems.
                </p>
                <p>
                  Your CIO receives quarterly briefings titled “Infrastructure
                  Vulnerabilities That Will Never Materialize”—because they’ve
                  already been prevented.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr]">
            <div data-aos="fade-left" className="order-2 text-right md:order-1">
              <p className="text-xs font-extrabold tracking-wide text-[#19B6C9]">
                The Perpetual Evolution Engine
              </p>
              <p className="mt-2 text-xs font-semibold text-white/70">
                Predictive Analytics with AI Forecasting (PAIF)
              </p>
              <p className="mt-6 max-w-3xl text-xs leading-6 text-white/35 md:text-sm md:leading-7">
                While competitors offer automation, ZerofAI delivers Autonomous
                Evolution—machine intelligence that perpetually refines its own
                intelligence, evolves new capabilities, and adapts to emergent
                conditions.
              </p>
              <p className="mt-6 max-w-3xl text-xs leading-6 text-white/35 md:text-sm md:leading-7">
                The platform learns from every interaction, never resolving the
                same anomaly twice. It writes new ones. It discovers patterns
                humans can’t perceive and develops strategies humans haven’t
                conceived.
              </p>
            </div>

            <div
              data-aos="fade-right"
              className="order-1 relative mx-auto h-[220px] w-full max-w-[520px] overflow-hidden rounded-[6px] bg-[#19B6C9] shadow-[0_18px_50px_rgba(0,0,0,0.55)] md:order-2 md:h-[250px]"
            >
              <Image
                src={BOTTOM_IMAGE}
                alt="Mechanical gears"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 520px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

