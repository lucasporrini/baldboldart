import { useColor } from "@/lib/context/color-context";
import { Logo } from "./logo";

export const FloatingButton = ({ onClick }: { onClick: () => void }) => {
  const { mainColor } = useColor();

  return (
    <div className="fixed bottom-5 right-0 z-50">
      <button
        onClick={onClick}
        className={`bg-${mainColor} text-white p-3 rounded-l-full`}
      >
        <Logo />
      </button>
    </div>
  );
};
