"use client";

import { useMobile } from "../hooks/use-mobile";
import { DesktopLayout } from "./layout/desktop-layout";
import { MobileLayout } from "./layout/mobile-layout";

export const Orchestrator = () => {
  const isMobile = useMobile();

  if (isMobile) {
    return <MobileLayout />;
  }

  return <DesktopLayout />;
};
