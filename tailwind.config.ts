import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FFC0CB',
        'rose-pink': '#FFB6C1',
        'blush': '#F4C2C2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pink-glow': '0 4px 14px 0 rgba(255, 182, 193, 0.3)',
        'pink-soft': '0 2px 8px 0 rgba(255, 192, 203, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
