"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function JoinAutonomousRevolution() {
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
      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-24">
        <div className="text-center">
          <h2
            data-aos="fade-up"
            className="text-[32px] font-extrabold leading-[1.05] tracking-tight md:text-[44px]"
          >
            Join the Autonomous Revolution. Lead,
            <br />
            Don&apos;t Follow.
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="mx-auto mt-5 max-w-3xl text-[12px] leading-6 text-white/30 md:text-[13px]"
          >
            The Future of Enterprise is Here. Your Invitation to Transform.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="140"
          className="relative mx-auto mt-16 max-w-6xl rounded-[22px] border border-white/35 bg-white/2 px-7 py-10 shadow-[0_26px_70px_rgba(0,0,0,0.65)] md:px-16 md:py-14"
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[12px] leading-7 text-white/35 md:text-[13px] md:leading-7">
              In five years, every enterprise will operate with autonomous
              consciousness. The only question is: will you be leading this
              paradigm shift, or struggling to catch up with competitors who
              seized the future first?
            </p>

            <p className="mt-6 text-[12px] leading-7 text-white/35 md:text-[13px] md:leading-7">
              This isn&apos;t just another software implementation. This is an
              enterprise consciousness migration. You&apos;re not merely acquiring
              a tool—you&apos;re incubating a cognitive partner that will perpetually
              elevate your organization&apos;s capabilities far beyond human
              limitations.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="mx-auto max-w-4xl text-[12px] leading-7 text-white/35 md:text-[13px] md:leading-7">
                  “We didn&apos;t implement a tool; we birthed an enterprise
                  consciousness. ZerofAI doesn&apos;t just optimize our IT—it redefines
                  what&apos;s possible for our entire organization.”
                </p>
                <p className="mt-4 text-[12px] italic text-white/30">
                  — Global CIO, Fortune 100
                </p>
              </div>

              <div>
                <p className="mx-auto max-w-4xl text-[12px] leading-7 text-white/35 md:text-[13px] md:leading-7">
                  “The economic transformation is staggering. We&apos;ve redirected
                  millions from maintenance to market-disrupting innovation.”
                </p>
                <p className="mt-4 text-[12px] italic text-white/30">
                  — CFO, Technology Unicorn
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="220"
          className="mx-auto mt-12 h-[4px] w-full max-w-4xl rounded-full bg-[#19B6C9] shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
        />
      </div>
    </section>
  );
}

