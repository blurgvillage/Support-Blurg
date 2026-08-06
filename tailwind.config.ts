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
    },
  },
  plugins: [],
};
export default config;
