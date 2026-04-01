import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0f766e",
          foreground: "#ffffff"
        }
      }
    }
  },
  plugins: []
};

export default config;
