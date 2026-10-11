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
        // Dark teal band (carrier marquee, testimonials): gradient light -> deep end.
        "primary-dark": "#075755",
        "primary-deep": "#053e3c",
        secondary: "#7CA8A1",
        accent: "#F4A363",
        // Lighter accent tint for text on the dark teal band: plain accent is
        // only 3.35:1 on a white/8% card over primary-dark (conservative bound for the real white/7); this is 4.82:1.
        "accent-light": "#FFD0A0",
        highlight: "#DB767D",
        surface: "#D3F2E9",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        sans: ["var(--font-body)"],
      },
      letterSpacing: {
        // Uppercase carrier wordmarks in the marquee.
        wordmark: "0.12em",
      },
    },
  },
  plugins: [],
} satisfies Config;
