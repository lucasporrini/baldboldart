import { OTHER_PROJECTS } from "@/lib/constantes";
import { useColor } from "@/lib/context/color-context";
import { usePopup } from "@/lib/context/popup-providers";
import Image from "next/image";

export const MobileProject = () => {
  const { mainColor } = useColor();
  const { setData, openPopup } = usePopup();

  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-xs text-center mt-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">D&apos;AUTRES PROJETS</h2>
        <p className={`text-sm text-${mainColor} font-semibold`}>
          Restez aussi longtemps que vous le souhaitez.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {OTHER_PROJECTS.map((item, index) => (
          <div
            key={index}
            className={`bg-${mainColor} rounded-xl w-full h-full overflow-hidden`}
            onClick={() => {
              setData(item.title, item.subtitle, item.images);
              openPopup();
            }}
          >
            <Image
              src={item.images[0]}
              alt="Project 1"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
