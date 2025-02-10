import { useColor } from "@/lib/context/color-context";
import globalConfig from "@/lib/global.config";
import Image from "next/image";

export const MobileProject = () => {
  const { mainColor } = useColor();

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 max-w-xs text-center mt-20">
        <h2 className="font-bold text-3xl">
          Une question ou un projet à réaliser ?
        </h2>
        <p className={`text-sm text-${mainColor} font-semibold`}>
          Mon objectif est de créer des visuels percutants et modernes pour
          simplifier votre communication, renforcer votre identité et captiver
          votre audience.
        </p>
        <button
          onClick={() => {
            window.open(`mailto:${globalConfig.email}`, "_blank");
          }}
          className={`bg-transparent text-${mainColor} font-bold border-2 border-${mainColor} px-4 py-2 rounded-full`}
        >
          Contactez-moi
        </button>
      </div>

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
              src="/writing.webp"
              alt="Project 1"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`bg-${mainColor} rounded-xl w-full h-full`}>
            <Image
              src="/writing.webp"
              alt="Project 1"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`bg-${mainColor} rounded-xl w-full h-full`}>
            <Image
              src="/writing.webp"
              alt="Project 1"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`bg-${mainColor} rounded-xl w-full h-full`}>
            <Image
              src="/writing.webp"
              alt="Project 1"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
