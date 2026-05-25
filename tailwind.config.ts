import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        carbon: "#0c0d0d",
        graphite: "#151616",
        line: "rgba(255,255,255,0.11)",
        paper: "#f4f0e8",
        muted: "#a7aaa5",
        sage: "#a8b5a0",
        brass: "#b4a06b"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0,0,0,0.38)"
      }
    }
  },
  plugins: []
};

export default config;
