export const TextGradient = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span
      className={`bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent ${className}`}
    >
      {text}
    </span>
  );
};
