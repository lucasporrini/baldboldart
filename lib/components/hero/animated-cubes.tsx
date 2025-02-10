"use client";

import { useMemo } from "react";

export const AnimatedCubes = () => {
  const cubes = useMemo(() => {
    return [
      { delay: "0s", left: "10%", duration: "15s" },
      { delay: "2s", left: "20%", duration: "12s" },
      { delay: "4s", left: "60%", duration: "18s" },
      { delay: "6s", left: "80%", duration: "14s" },
      { delay: "8s", left: "40%", duration: "16s" },
    ];
  }, []);

  console.log(cubes);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {cubes.map((cube, index) => (
        <div
          key={index}
          className="absolute -bottom-8 w-8 h-8 bg-white/30 rounded-md"
          style={{
            left: cube.left,
            animation: `float ${cube.duration} infinite ease-in-out, spin ${cube.duration} infinite linear`,
            animationDelay: cube.delay,
          }}
        />
      ))}
    </div>
  );
};
