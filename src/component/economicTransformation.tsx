"use client";

type MetricCardProps = {
  title: string;
  subtitle: string;
  value: number; // 0..100
  accent?: "teal" | "muted";
  delay?: number;
};

function MetricCard({
  title,
  subtitle,
  value,
  accent = "teal",
  delay = 0,
}: MetricCardProps) {
  const fillClass =
    accent === "teal"
      ? "bg-[#19B6C9]"
      : "bg-[linear-gradient(90deg,rgba(255,255,255,0.18),rgba(255,255,255,0.10))]";

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="card-shadow h-full rounded-[10px] bg-white/4 px-5 py-5 ring-1 ring-white/10 transition-shadow duration-300 ease-out"
    >
      <div className="mx-auto h-[10px] w-full max-w-[420px] rounded-full bg-black/45 ring-1 ring-white/10">
        <div
          className={`h-full rounded-full ${fillClass}`}
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>

      <div className="mt-4 text-center">
        <p className="text-[12px] font-extrabold tracking-wide text-white/85">
          {title}
        </p>
        <p className="mt-1 text-[11px] leading-5 text-white/35">{subtitle}</p>
      </div>
    </div>
  );
}

export default function EconomicTransformation() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white">
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
          {/* Left column */}
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

            <div className="grid gap-5">
              <MetricCard
                title="Reduction in L1/L2 Ticket Volume"
                subtitle="Thousands of hours reclaimed from repetitive resolution work"
                value={78}
                accent="teal"
                delay={0}
              />
              <MetricCard
                title="Improvement in MTTR"
                subtitle="Problems resolved before humans detect them"
                value={70}
                accent="teal"
                delay={80}
              />
            </div>
          </div>

          {/* Right column */}
          <div data-aos="fade-up" data-aos-delay="80" className="flex h-full flex-col">
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

            <div className="grid gap-5">
              <MetricCard
                title="Compliance Violations"
                subtitle="Autonomous enforcement eliminates audit risk"
                value={0}
                accent="muted"
                delay={0}
              />
              <MetricCard
                title="Scalability Without Headcount"
                subtitle="Your infrastructure grows without expanding your team"
                value={0}
                accent="muted"
                delay={80}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

