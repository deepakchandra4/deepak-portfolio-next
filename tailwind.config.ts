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
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPurple1: '#17153b', // rgb(23, 21, 59)
        customPurple2: '#2e236c', // rgb(46, 35, 108)
        customPurple3: '#433d8b', // rgb(67, 61, 139)
        customLavender: '#c8acd6', // rgb(200, 172, 214)
      },
    },
  },
  plugins: [],
};
export default config;
