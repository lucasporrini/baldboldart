"use client";

import { Orchestrator } from "@/lib/components/orchestrator";
import { useMobile } from "@/lib/hooks/use-mobile";

export default function Home() {
  const isMobile = useMobile();

  return (
    <main className="bg-background">
      <Orchestrator />
    </main>
  );
}
