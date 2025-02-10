"use client";

import { useState } from "react";
import { FloatingButton } from "../floating-button";
import { FloatingPopup } from "../floating-popup";
import { HeroMobile } from "../hero/hero-mobile";
import { Slider } from "../slider/slider";

export const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center relative">
      <HeroMobile />
      <FloatingButton />
      <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-4 right-4 z-40 rounded-full bg-orange text-white p-4 shadow-lg"
      >
        Voir les projets
      </button>
      <FloatingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
      <Slider />
    </div>
  );
};
