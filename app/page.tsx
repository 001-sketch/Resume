"use client";

import { useState } from "react";
import PortfolioHero from "@/components/ui/portfolio-hero";
import { PortfolioLoadingScreen } from "@/components/ui/loader-one";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <PortfolioLoadingScreen onComplete={() => setIsLoading(false)} />}
      <PortfolioHero />
    </>
  );
}
