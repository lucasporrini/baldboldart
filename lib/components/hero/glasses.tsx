import { Glasses as GlassesType } from "@/lib/type";
import { cn } from "@/lib/utils";

export const Glasses = ({
  className,
  color = "black",
  size = 222,
}: GlassesType) => {
  return (
    <svg
      className={cn("absolute", className)}
      width={size * 2}
      height={size}
      viewBox="0 0 474 222"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="110.772"
        cy="110.772"
        r="102.272"
        stroke={color}
        strokeWidth="17"
      />
      <circle
        cx="363.229"
        cy="110.772"
        r="102.272"
        stroke={color}
        strokeWidth="17"
      />
      <rect
        x="214.918"
        y="104.515"
        width="44.8975"
        height="12.5124"
        fill={color}
      />
    </svg>
  );
};
