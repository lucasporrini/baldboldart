import clsx from "clsx";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <img src="/baldy.svg" alt="logo" className="w-10 h-10" />
    </div>
  );
};
