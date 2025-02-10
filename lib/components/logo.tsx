export const Logo = ({
  mode = "light",
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  mode?: "light" | "dark";
}) => {
  return (
    <div className="flex items-center gap-2">
      <img src="/baldy.svg" alt="logo" className="w-10 h-10" />
    </div>
  );
};
