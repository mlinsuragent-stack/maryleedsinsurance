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
        // Same hue (170.5deg) and saturation as secondary, lightness lowered
        // from 57.3% to 40.8% so small text passes AA: 4.60:1 on white
        // (plain secondary is only 2.63:1). Blog card category labels.
        "secondary-dark": "#537D76",
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
      borderRadius: {
        // Arched photo frame for 3:4 portraits: semicircular top (horizontal
        // radius 50% of width, vertical 37.5% of height = half the width at
        // 3:4) and softly rounded bottom corners. Explicit radii avoid the
        // CSS radius scaling that `rounded-t-full` triggers, which would
        // flatten the bottom corners to ~0.
        arch: "50% 50% 1rem 1rem / 37.5% 37.5% 1rem 1rem",
      },
      letterSpacing: {
        // Uppercase carrier wordmarks in the marquee.
        wordmark: "0.12em",
      },
    },
  },
  plugins: [],
} satisfies Config;
