import {
  Cube as CubeType,
  CubesBackground as CubesBackgroundType,
} from "@/lib/type";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

export const CubesBackground = ({
  density,
  minSize = 5,
  maxSize = 15,
  fadeStartPercentage = 50,
  children,
  className,
  cube,
}: CubesBackgroundType) => {
  const cubes = useMemo(() => {
    return Array.from({ length: density }).map(() => ({
      size: cube?.size
        ? Array.isArray(cube.size)
          ? Math.floor(Math.random() * (cube.size[1] - cube.size[0] + 1)) +
            cube.size[0]
          : cube.size
        : Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize,
      delay: `${
        cube?.delay
          ? Array.isArray(cube.delay)
            ? Math.random() * (cube.delay[1] - cube.delay[0]) + cube.delay[0]
            : cube.delay
          : Math.random() * 5
      }s`,
      duration: `${
        cube?.duration
          ? Array.isArray(cube.duration)
            ? Math.random() * (cube.duration[1] - cube.duration[0]) +
              cube.duration[0]
            : cube.duration
          : 10 + Math.random() * 10
      }s`,
      left: `${
        cube?.left
          ? Array.isArray(cube.left)
            ? Math.random() * (cube.left[1] - cube.left[0]) + cube.left[0]
            : cube.left
          : Math.random() * 100
      }%`,
    }));
  }, [
    density,
    cube?.size,
    cube?.delay,
    cube?.duration,
    cube?.left,
    maxSize,
    minSize,
  ]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <div className="absolute inset-0">
        {cubes.map((cube, index) => (
          <Cube
            key={index}
            size={cube.size}
            delay={cube.delay}
            duration={cube.duration}
            left={cube.left}
            fadeStartPercentage={fadeStartPercentage}
          />
        ))}
      </div>
      <div className="relative z-50">{children}</div>
    </div>
  );
};

const Cube = ({
  size,
  delay,
  duration,
  left,
  fadeStartPercentage,
}: CubeType & { fadeStartPercentage: number }) => {
  const cubeId = useMemo(
    () => `cube-${Math.random().toString(36).substring(2, 9)}`,
    []
  );

  return (
    <div
      className={cn(
        "absolute bottom-0 bg-background/30 rounded-md z-40",
        `w-${size} h-${size}`
      )}
      style={{
        left,
        animation: `${cubeId} ${duration} infinite ease-in-out`,
        animationDelay: delay,
        opacity: 0,
      }}
    >
      <style jsx>{`
        @keyframes ${cubeId} {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 0.5;
          }
          ${fadeStartPercentage}% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
