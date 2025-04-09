import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import globalConfig from "./lib/global.config";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-orange", "bg-rose", "text-orange", "text-rose"],
  theme: {
    extend: {
      colors: {
        background: `${globalConfig.colors.background}`,
        orange: {
          DEFAULT: `${globalConfig.colors.orange}`,
        },
        rose: {
          DEFAULT: `${globalConfig.colors.rose}`,
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "text-gradient": "linear-gradient(to bottom, white, transparent)",
      },
      maskImage: {
        "text-gradient": "linear-gradient(to bottom, white, transparent)",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(100vh) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(-100vh) rotate(360deg)",
          },
        },
        cubeFloat: {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "0",
          },
          "5%": {
            opacity: "0.5",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(-100vh) rotate(360deg)",
            opacity: "0",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [animate],
} satisfies Config;
