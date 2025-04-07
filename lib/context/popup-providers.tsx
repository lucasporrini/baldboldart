"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type PopupContextType = {
  isOpen: boolean;
  title: string;
  subtitle: string;
  images: string[];
  setData: (title: string, subtitle: string, images: string[]) => void;
  openPopup: () => void;
  closePopup: () => void;
};

const defaultContext: PopupContextType = {
  isOpen: false,
  title: "",
  subtitle: "",
  images: [],
  setData: () => {},
  openPopup: () => {},
  closePopup: () => {},
};

const PopupContext = createContext<PopupContextType>(defaultContext);

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const setData = (title: string, subtitle: string, images: string[]) => {
    setTitle(title);
    setSubtitle(subtitle);
    setImages(images);
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <PopupContext.Provider
      value={{
        isOpen,
        title,
        subtitle,
        images,
        setData,
        openPopup,
        closePopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
