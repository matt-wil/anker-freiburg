import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      colors: {
        brand: {
          DEFAULT: "#1e1e1e",
          light: "#2a2a2a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        body: ["var(--font-source-sans)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
        open: ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
