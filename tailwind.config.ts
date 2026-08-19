import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A7B79",
        secondary: "#7CA8A1",
        accent: "#F4A363",
        highlight: "#DB767D",
        surface: "#D3F2E9",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        sans: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
