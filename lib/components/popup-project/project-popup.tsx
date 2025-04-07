"use client";

import { useColor } from "@/lib/context/color-context";
import { useEffect } from "react";
import { usePopup } from "../../context/popup-providers";

const organizeImages = (images: string[]) => {
  const groups = [];
  let currentIndex = 0;

  while (currentIndex < images.length) {
    if (currentIndex === 0) {
      // Premier groupe : 2 images côte à côte
      groups.push(images.slice(currentIndex, currentIndex + 2));
      currentIndex += 2;
    } else if (currentIndex === 2) {
      // Deuxième groupe : 1 image pleine largeur
      groups.push([images[currentIndex]]);
      currentIndex += 1;
    } else {
      // Groupes suivants : 2 images côte à côte
      const remainingImages = images.slice(currentIndex, currentIndex + 2);
      if (remainingImages.length > 0) {
        groups.push(remainingImages);
      }
      currentIndex += 2;
    }
  }
  return groups;
};

export const ProjectPopup = () => {
  const { mainColor } = useColor();
  const { isOpen, closePopup, title, subtitle, images } = usePopup();

  // Prevent scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  console.log(images);

  if (!isOpen) return null;

  const imageGroups = organizeImages(images || []);

  return (
    <div className="fixed top-0 left-0 inset-0 bg-background z-50 w-screen h-screen overflow-y-auto">
      <div className="min-h-screen w-full p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 items-center mb-12 relative mx-auto">
            <h2 className="text-3xl font-bold text-primary uppercase mt-4">
              {title}
            </h2>
            <p
              className={`text-md font-semibold text-center text-${mainColor} `}
            >
              {subtitle}
            </p>
            <button
              onClick={closePopup}
              className={`absolute top-0 right-0 w-12 h-12 bg-${mainColor} rounded-full flex items-center justify-center transition-colors duration-200`}
              aria-label="Close popup"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {imageGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={`grid ${
                  group.length === 1 ? "grid-cols-1" : "grid-cols-2"
                } gap-2`}
              >
                {group.map((image, index) => (
                  <div
                    key={`${groupIndex}-${index}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl"
                  >
                    <img
                      src={image}
                      alt={`${title} - Image ${groupIndex * 2 + index + 1}`}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
