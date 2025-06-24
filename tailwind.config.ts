import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blog/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        title: ['var(--font-monoton)', 'sans-serif'],
        clean: ['var(--font-inter)', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
} satisfies Config;
