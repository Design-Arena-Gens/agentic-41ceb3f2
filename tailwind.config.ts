import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2fcf6",
          100: "#d6f5e3",
          200: "#adebc7",
          300: "#7bdca6",
          400: "#4dc985",
          500: "#2ab36a",
          600: "#1d8e55",
          700: "#176f44",
          800: "#145938",
          900: "#0d3b25"
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"]
      },
      boxShadow: {
        glow: "0 20px 45px -20px rgba(16, 185, 129, 0.45)"
      },
      backgroundImage: {
        "organic-texture": "radial-gradient(circle at top, rgba(255,255,255,0.45), rgba(255,255,255,0))"
      }
    }
  },
  plugins: []
};

export default config;
