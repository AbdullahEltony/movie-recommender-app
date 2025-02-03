import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626",
        dark:{
          background: "#0b0b0b",
          text: "#c9cdd2",
        },
        light:{
          background: "#ffffff",
          text: "#171717",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
