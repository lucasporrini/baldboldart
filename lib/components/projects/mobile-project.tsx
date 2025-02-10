import { useColor } from "@/lib/context/color-context";
import Image from "next/image";

export const MobileProject = () => {
  const { mainColor } = useColor();

  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-xs text-center mt-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">D&apos;AUTRES PROJETS</h2>
        <p className={`text-sm text-${mainColor} font-semibold`}>
          Restez aussi longtemps que vous le souhaitez.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className={`bg-${mainColor} rounded-xl w-full h-full`}>
          <Image
            src={`/writing-${mainColor}.webp`}
            alt="Project 1"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`bg-${mainColor} rounded-xl w-full h-full`}>
          <Image
            src={`/writing-${mainColor}.webp`}
            alt="Project 1"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`bg-${mainColor} rounded-xl w-full h-full`}>
          <Image
            src={`/writing-${mainColor}.webp`}
            alt="Project 1"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`bg-${mainColor} rounded-xl w-full h-full`}>
          <Image
            src={`/writing-${mainColor}.webp`}
            alt="Project 1"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
