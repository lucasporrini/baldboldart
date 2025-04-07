import { useColor } from "@/lib/context/color-context";
import { usePopup } from "@/lib/context/popup-providers";

export const PopupButton = ({
  title,
  subtitle,
  images,
}: {
  title: string;
  subtitle: string;
  images: string[];
}) => {
  const { mainColor } = useColor();
  const { openPopup, setData } = usePopup();

  const handleClick = () => {
    setData(title, subtitle, images);
    openPopup();
  };

  return (
    <button
      onClick={handleClick}
      className={`w-fit min-w-40 mt-3 px-3 py-1.5 bg-${mainColor} text-white rounded-full transition-colors duration-200`}
    >
      {title}
    </button>
  );
};
