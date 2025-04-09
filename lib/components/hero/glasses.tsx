import { EYE_DATA } from "@/lib/constantes";
import { Glasses as GlassesType } from "@/lib/type";
import { calculateEyeStyle } from "@/lib/utils";

export const Glasses = ({
  className,
  color = "black",
  size = 222,
  eyePosition,
}: GlassesType) => {
  return (
    <svg
      className={className}
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
      <circle
        cx={EYE_DATA.LEFT.BACKGROUND.position.x}
        cy={EYE_DATA.LEFT.BACKGROUND.position.y}
        r={EYE_DATA.LEFT.BACKGROUND.size}
        fill={EYE_DATA.LEFT.BACKGROUND.color}
      />
      <circle
        cx={EYE_DATA.LEFT.EYE.position.x}
        cy={EYE_DATA.LEFT.EYE.position.y}
        r={EYE_DATA.LEFT.EYE.size}
        fill={EYE_DATA.LEFT.EYE.color}
        style={calculateEyeStyle(eyePosition)}
      />
      <circle
        cx={EYE_DATA.LEFT.PUPIL.position.x}
        cy={EYE_DATA.LEFT.PUPIL.position.y}
        r={EYE_DATA.LEFT.PUPIL.size}
        fill={EYE_DATA.LEFT.PUPIL.color}
        style={calculateEyeStyle(eyePosition)}
      />
      <circle
        cx={EYE_DATA.RIGHT.BACKGROUND.position.x}
        cy={EYE_DATA.RIGHT.BACKGROUND.position.y}
        r={EYE_DATA.RIGHT.BACKGROUND.size}
        fill={EYE_DATA.RIGHT.BACKGROUND.color}
      />
      <circle
        cx={EYE_DATA.RIGHT.EYE.position.x}
        cy={EYE_DATA.RIGHT.EYE.position.y}
        r={EYE_DATA.RIGHT.EYE.size}
        fill={EYE_DATA.RIGHT.EYE.color}
        style={calculateEyeStyle(eyePosition)}
      />
      <circle
        cx={EYE_DATA.RIGHT.PUPIL.position.x}
        cy={EYE_DATA.RIGHT.PUPIL.position.y}
        r={EYE_DATA.RIGHT.PUPIL.size}
        fill={EYE_DATA.RIGHT.PUPIL.color}
        style={calculateEyeStyle(eyePosition)}
      />
    </svg>
  );
};
