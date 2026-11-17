import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#F6F6F7",
        paper: "#FFFFFF",
        tan: "#EFEFF0",
        ink: "#171717",
        "ink-2": "#525252",
        "ink-3": "#9CA3AF",
        line: "#E9E9EA",
        "cream-muted": "#A3A3A3",
        terracotta: "#171717",
        "terracotta-dark": "#000000",
      },
      keyframes: {
        "truck-drive": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(3px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(1.15)", opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "modal-in": {
          from: { opacity: "0", transform: "translateY(16px) scale(0.97)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "truck-drive": "truck-drive 1.2s ease-in-out infinite",
        "pulse-ring": "pulse-ring 1.8s ease-out infinite",
        "fade-in": "fade-in 0.2s ease-out",
        "modal-in": "modal-in 0.25s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
