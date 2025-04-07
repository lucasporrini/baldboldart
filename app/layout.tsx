import { ProjectPopup } from "@/lib/components/popup-project/project-popup";
import { ColorProvider } from "@/lib/context/color-context";
import { PopupProvider } from "@/lib/context/popup-providers";
import globalConfig from "@/lib/global.config";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: globalConfig.name + " - Portfolio",
  description: "Portfolio de " + globalConfig.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased ${oswald.className}`}
    >
      <body>
        <PopupProvider>
          <ColorProvider>
            {children}
            <ProjectPopup />
          </ColorProvider>
        </PopupProvider>
      </body>
    </html>
  );
}
