"use client";

import { createContext, useContext, useMemo } from "react";

interface ColorContextType {
  mainColor: "orange" | "rose";
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const random = useMemo(() => Math.floor(Math.random() * 100), []);
  const mainColor = useMemo(() => (random > 50 ? "orange" : "rose"), [random]);

  return (
    <ColorContext.Provider value={{ mainColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
}
