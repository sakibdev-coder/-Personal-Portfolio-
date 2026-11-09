import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#080D1A", electric: "#2563EB", sky: "#38BDF8", mist: "#94A3B8" },
      fontFamily: { sans: ["var(--font-geist)", "sans-serif"] }
    }
  },
  plugins: []
};

export default config;
