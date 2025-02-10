"use client";

import { useState } from "react";
import { FloatingButton } from "../floating-button";
import { FloatingPopup } from "../floating-popup";
import { HeroMobile } from "../hero/hero-mobile";
import { Slider } from "../slider/slider";

export const MobileLayout = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center relative">
      <HeroMobile />
      <FloatingButton onClick={() => setIsPopupOpen((prev) => !prev)} />
      <FloatingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
      <Slider />
    </div>
  );
};
