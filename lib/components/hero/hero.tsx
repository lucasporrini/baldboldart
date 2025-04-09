"use client";

import { useColor } from "@/lib/context/color-context";
import globalConfig from "@/lib/global.config";
import { EyePosition } from "@/lib/type";
import { useEffect, useState } from "react";
import { CubesBackground } from "../background/cubes-background";
import { FloatingButton } from "../floating-button";
import { Glasses } from "./glasses";
import { Mouth } from "./mouth";

export const Hero = () => {
  const { mainColor } = useColor();
  const [isMounted, setIsMounted] = useState(false);
  const [eyePosition, setEyePosition] = useState<EyePosition>({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setEyePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`flex flex-col h-screen w-full bg-${mainColor}`}>
      <div className="flex items-center justify-between w-full">
        <span className="w-10 h-10 rounded-full p-3"></span>
        <div className="flex flex-col items-center text-white font-oswald">
          <span className="font-bold ">Paris | Ile-de-France</span>
          <span className="text-sm">{globalConfig.email}</span>
        </div>
        <FloatingButton
          className="relative top-0 bottom-0 left-0 right-0"
          onClick={() => {}}
        />
      </div>

      <CubesBackground
        density={50}
        className="w-full h-full flex items-center justify-center"
      >
        <div className="flex h-full w-full flex-col items-center justify-center relative">
          <Glasses className="top-0 left-0" eyePosition={eyePosition} />
          <Mouth eyePosition={eyePosition} />
        </div>
      </CubesBackground>
    </div>
  );
};
