"use client";

import ProposeReality from "../component/proposeReality";
import Autonomous from "../component/Autonomous";

import PreemptiveIncidentImmuneSystem from "../component/preemptiveIncidentImmuneSystem";
import SelfHealingDigitalOrganism from "../component/selfHealingDigitalOrganism";
import JoinAutonomousRevolution from "../component/joinAutonomousRevolution";
import ThreeCtaCards from "../component/threeCtaCards";
import ImplementationChronology from "../component/implementationChronology";
import EconomicTransformation from "../component/economicTransformation";
import TemporalPredictionPerpetualEvolution from "../component/temporalPredictionPerpetualEvolution";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* hero */}
      <section className="relative w-full py-16 lg:min-h-screen">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container">
          <h1 className="text-[44px] font-extrabold leading-[0.98] tracking-tight sm:text-[64px] md:text-[84px]">
            The ZerofAI
          </h1>

          <div className="mt-5 inline-flex rounded-[10px] bg-[#19B6C9] px-5 py-2.5 text-[22px] font-extrabold leading-none text-white sm:mt-6 sm:px-8 sm:py-3 sm:text-xl">
            Manifesto
          </div>

          <p className="mt-10 max-w-[720px] text-sm leading-7 text-black/75 dark:text-white/80">
            The enterprise IT paradigm is dying. Alert fatigue enslaves your teams.
            Tribal knowledge evaporates with every resignation. Your engineers
            fight yesterday&apos;s fires while tomorrow&apos;s threats multiply in
            silence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-10 sm:gap-10">
            <Link href="#" className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-black/90 active:bg-black/85 dark:bg-white dark:text-black">
              Book Demo
            </Link>
          </div>
        </div>
      </section>



      <ProposeReality />
      <Autonomous />
      <PreemptiveIncidentImmuneSystem />
      <SelfHealingDigitalOrganism />
      <TemporalPredictionPerpetualEvolution />
      <EconomicTransformation />
      <ImplementationChronology />
      <JoinAutonomousRevolution />
      <ThreeCtaCards />
    </main>
  );
}