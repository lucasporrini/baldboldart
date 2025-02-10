import globalConfig from "@/lib/global.config";
import Image from "next/image";

export const MobileContact = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center mt-20">
      <Image
        src="/mobile-footer.webp"
        alt="Contact"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col items-center justify-center w-full bg-orange">
        <p
          onClick={() => {
            window.open(`mailto:${globalConfig.email}`, "_blank");
          }}
          className="text-lg font-bold text-white"
        >
          {globalConfig.email.toUpperCase()}
        </p>
        <p className="text-white font-bold text-[20vw]">CONTACT</p>
        <span className="text-background text-[0.6rem]">
          Copyright© 2025 - Developped by {globalConfig.developer} - designed by{" "}
          {globalConfig.designer}
        </span>
      </div>
    </div>
  );
};
