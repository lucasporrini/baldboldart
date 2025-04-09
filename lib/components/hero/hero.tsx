"use client";

import { useColor } from "@/lib/context/color-context";
import globalConfig from "@/lib/global.config";
import { useEffect, useState } from "react";
import { FloatingButton } from "../floating-button";
import { Glasses } from "./glasses";

export const Hero = () => {
  const { mainColor } = useColor();
  const [isMounted, setIsMounted] = useState(false);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

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

  const calculateEyeStyle = (eyeX: number, eyeY: number) => {
    const offsetX = (eyePosition.x - eyeX) / 100;
    const offsetY = (eyePosition.y - eyeY) / 100;
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`,
    };
  };

  return (
    <div className={`flex flex-col h-screen w-full bg-${mainColor}`}>
      <div className="flex items-center justify-between w-full">
        <span></span>
        <div className="flex flex-col items-center text-white font-oswald">
          <span className="font-bold ">Paris | Ile-de-France</span>
          <span className="text-sm">{globalConfig.email}</span>
        </div>
        <FloatingButton
          className="relative top-0 bottom-0 left-0 right-0"
          onClick={() => {}}
        />
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative">
          <svg width="200" height="100" viewBox="0 0 200 100">
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="white"
              style={calculateEyeStyle(50, 50)}
            />
            <circle
              cx="150"
              cy="50"
              r="20"
              fill="white"
              style={calculateEyeStyle(150, 50)}
            />
          </svg>
          <Glasses className="absolute top-0 left-0 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};
