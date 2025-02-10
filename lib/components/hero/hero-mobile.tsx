"use client";

import { CONSTANTES } from "@/lib/constantes";
import globalConfig from "@/lib/global.config";
import { TextGradient } from "@/lib/ui/text-gradient";
import Image from "next/image";
import { useMemo } from "react";
import { AnimatedCubes } from "./animated-cubes";

export const HeroMobile = () => {
  const keyword: {
    name: string;
    position: { top: string; left: string };
    color: string;
  }[] = useMemo(() => {
    return [
      {
        name: "BRANDING",
        position: {
          top: "top-14",
          left: "left-20",
        },
        color: "text-white",
      },
      {
        name: "ILLUSTRATION",
        position: {
          top: "top-2/4",
          left: "left-[40%]",
        },
        color: "text-white",
      },
      {
        name: "MOTION",
        position: {
          top: "top-3/4",
          left: "left-16",
        },
        color: "text-white",
      },
    ];
  }, []);
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
      <AnimatedCubes />

      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[calc(100vh+100px)] bg-orange rounded-full"></div>
      <div className="z-20 absolute bottom-[60px] flex items-center justify-center right-1/2 translate-x-1/2 size-[300px] bg-background rounded-full">
        <Image
          src="/hero-mobile.webp"
          alt="hero"
          width={CONSTANTES.HERO_MOBILE.IMAGE_WIDTH}
          height={CONSTANTES.HERO_MOBILE.IMAGE_HEIGHT}
          className="object-cover"
        />
      </div>

      <div className="absolute flex flex-col top-0 left-0  w-full z-10">
        <div className="relative h-[540px] w-full">
          {keyword.map((item) => (
            <div
              key={item.name}
              className={`absolute ${item.color} opacity-90 rounded-full ${item.position.top} ${item.position.left} font-bold text-4xl`}
            >
              <TextGradient
                className="text-3xl"
                text={item.name.toUpperCase()}
              />
            </div>
          ))}
        </div>
        <div className="text-center font-extrabold tracking-wide">
          <TextGradient
            className="text-5xl"
            text={globalConfig.name.toUpperCase()}
          />
        </div>
      </div>
    </div>
  );
};
