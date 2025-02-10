"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { CONSTANTES } from "../constantes";
import globalConfig from "../global.config";

interface FloatingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FloatingPopup = ({ isOpen, onClose }: FloatingPopupProps) => {
  const DATA: { title: string; description: string }[] = useMemo(
    () => [
      {
        title: "Qui ?",
        description:
          "Jeune designer spécialiser dans le brand design et l’illustration numérique, graphiste de formation. Je parfait me technique en explorant nombre de style graphique différent.",
      },
      {
        title: "Quand ?",
        description:
          "Après plusieurs années de pratique et de perfectionnement de mes techniques, j’ai choisi de proposer mes services sous le nom de BaldBoldArt. Début 2025 a marqué les premiers mois d’officialisation de ce projet.",
      },
      {
        title: "Pourquoi ?",
        description:
          "Fatigué des présentations surchargées, j’ai commencé à en illustrer pour mes amis durant mon temps libre. Ce passe-temps m’a poussé à envisager le graphisme. Désormais, j’aide les entreprises à se distinguer grâce à une identité visuelle originale et impactante.",
      },
    ],
    []
  );
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 p-4 flex flex-col items-center overflow-y-auto bg-background">
      <div className="flex justify-end w-full">
        <button
          onClick={onClose}
          className="bg-orange size-14 flex items-center justify-center text-white p-1 rounded-full"
        >
          <BsArrowReturnLeft className="text-2xl" />
        </button>
      </div>
      <Image
        src="/writing.webp"
        alt="Background"
        width={CONSTANTES.POPUP.IMAGE_WIDTH}
        height={CONSTANTES.POPUP.IMAGE_HEIGHT}
      />
      <div className="bg-white rounded-3xl p-4 flex flex-col gap-6 items-center mt-20">
        <h2 className="text-4xl font-bold text-orange">Maxime Leconte</h2>
        {DATA.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-bold text-orange">
              {item.title.toUpperCase()}
            </h3>
            <p className="text-center">{item.description}</p>
          </div>
        ))}
        <div className="flex flex-col items-center gap-2 mt-8">
          <p className="text-background font-bold text-7xl">CONTACT</p>
          <p
            onClick={() => {
              window.open(`mailto:${globalConfig.email}`, "_blank");
            }}
            className="text-lg font-bold text-orange"
          >
            {globalConfig.email.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};
