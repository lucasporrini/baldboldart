import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateEyeStyle = (eyePosition: { x: number; y: number }) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const offsetX = (eyePosition.x - centerX) / 100;
  const offsetY = (eyePosition.y - centerY) / 100;

  console.log(offsetX, offsetY);

  return {
    transform: `translate(${offsetX}px, ${offsetY}px)`,
  };
};
