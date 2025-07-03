import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Here are your colors, with names. This is where the magic happens.
        'dark-bg': '#000000',
        'primary': '#3a1152',   // Deep Purple
        'secondary': '#4e4b1a', // Olive Green
        'accent': '#531e4c',    // Rich Magenta/Purple
        'neutral-dark': '#888994',
        'neutral-light': '#939ba9',
        'white': '#ffffff',
      },
      // Adding a subtle background pattern for the hero section
      backgroundImage: {
        'hero-pattern': "radial-gradient(circle at top, hsla(277, 60%, 10%, 0.5) 0%, transparent 40%)",
      }
    },
  },
  plugins: [],
};

export default config;
