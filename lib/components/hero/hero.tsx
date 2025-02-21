"use client";

import { useColor } from "@/lib/context/color-context";
import globalConfig from "@/lib/global.config";
import { useEffect, useState } from "react";
import { FloatingButton } from "../floating-button";

export const Hero = () => {
  const { mainColor } = useColor();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`flex flex-col h-screen w-full bg-${mainColor}`}>
      <div className="flex items-center justify-between w-full">
        <span></span>
        <div className="flex flex-col items-center text-white font-oswald">
          <span className="font-bold ">Paris | Ile-de-France</span>
          <span className="text-sm">{globalConfig.email}</span>
        </div>
        <FloatingButton className="block" onClick={() => {}} />
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="text-4xl font-bold">Coucou from hero</h1>
      </div>
    </div>
  );
};
