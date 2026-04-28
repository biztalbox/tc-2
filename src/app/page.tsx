"use client";

import { useEffect, useState } from "react";
import Header from "./component/header";
import ProposeReality from "./component/proposeReality";
import Autonomous from "./component/Autonomous";

import PreemptiveIncidentImmuneSystem from "./component/preemptiveIncidentImmuneSystem";
import SelfHealingDigitalOrganism from "./component/selfHealingDigitalOrganism";
import JoinAutonomousRevolution from "./component/joinAutonomousRevolution";
import ThreeCtaCards from "./component/threeCtaCards";
import ImplementationChronology from "./component/implementationChronology";
import EconomicTransformation from "./component/economicTransformation";
import TemporalPredictionPerpetualEvolution from "./component/temporalPredictionPerpetualEvolution";

export default function Home() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("zerofai-theme");
    const shouldUseLightTheme = storedTheme === "light";
    setIsLightTheme(shouldUseLightTheme);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("theme-light", isLightTheme);
    document.body.classList.toggle("theme-dark", !isLightTheme);
  }, [isLightTheme]);

  const handleThemeToggle = () => {
    setIsLightTheme((currentTheme) => {
      const nextTheme = !currentTheme;
      window.localStorage.setItem("zerofai-theme", nextTheme ? "light" : "dark");
      return nextTheme;
    });
  };

  return (
    <div>
      <Header isLightTheme={isLightTheme} onThemeToggle={handleThemeToggle} />
      <ProposeReality />
      <Autonomous />
      <PreemptiveIncidentImmuneSystem />
      <SelfHealingDigitalOrganism />
      <TemporalPredictionPerpetualEvolution />
      <EconomicTransformation />
      <ImplementationChronology />
      <JoinAutonomousRevolution />
      <ThreeCtaCards />
    </div>
  );
}