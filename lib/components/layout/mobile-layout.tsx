"use client";

import { useState } from "react";
import { MobileContact } from "../contact/mobile-contact";
import { FloatingButton } from "../floating-button";
import { FloatingPopup } from "../floating-popup";
import { HeroMobile } from "../hero/hero-mobile";
import { MobileProject } from "../projects/mobile-project";
import { Services } from "../services/services";
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
      <MobileProject />
      <Services />
      <MobileContact />
    </div>
  );
};
