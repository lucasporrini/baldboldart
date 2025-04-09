import { calculateEyeStyle } from "@/lib/utils";

export const Mouth = ({
  eyePosition,
}: {
  eyePosition: { x: number; y: number };
}) => {
  return (
    <svg
      width="121"
      height="70"
      viewBox="0 0 121 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={calculateEyeStyle({
        x: eyePosition.x / 5,
        y: eyePosition.y / 5,
      })}
    >
      <path
        d="M8.80478 45.7108C-20.3911 -3.68375 38.6317 1.00774 60.029 1.00774C83.6963 1.00774 135.245 3.08441 115.793 41.7954C101.365 70.5099 31.5 84.1074 8.80478 45.7108Z"
        fill="#5A1919"
      />
      <path
        d="M26.3791 49.9625C11.3366 31.6565 49.7225 34.9814 61.3656 34.9814C74.244 34.9814 106.727 33.7137 93.3775 49.9625C84.6716 60.5593 35.9274 61.5824 26.3791 49.9625Z"
        fill="#B6505B"
      />
    </svg>
  );
};
