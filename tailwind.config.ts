import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textPrimary: "#92DCE5",
        textDisabled: "#dadada",
        textLight: "#EEE5E9",
        bgMain: "#000",

        primary: "#FF00C7",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem", // Extra small
        sm: "0.875rem", // Small
        base: "1rem", // Base
        lg: "1.125rem", // Large
        xl: "1.25rem", // Extra large
        "2xl": "1.5rem", // 2x large
        "3xl": "1.875rem", // 3x large
        "4xl": "2.25rem", // 4x large
        "5xl": "3rem", // 5x large
        "6xl": "3.75rem", // 6x large
        "7xl": "4.5rem", // 7x large
        "8xl": "6rem", // 8x large
        "9xl": "8rem", // 9x large
        h1: "3.5rem",
        h2: "2.25rem",
        h3: "1.5rem",
        p: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
