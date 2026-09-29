import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f6f4ee",
        ink: "#111111",
        blue: "#3d5afe",
        sky: "#a9c7ff",
        lilac: "#c4a7ff",
        lime: "#e4f47a",
        pink: "#f5a3e8",
        mint: "#a8f0b4",
      },
      boxShadow: {
        brutal: "3px 3px 0 0 #111111",
        "brutal-lg": "6px 6px 0 0 #111111",
      },
      fontFamily: {
        sans: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        rise: "rise 0.35s ease both",
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
