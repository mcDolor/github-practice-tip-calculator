import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: "hsl(172, 67%, 45%)",
          900: "hsl(183, 100%, 15%)",
        },
        grey: {
          500: "hsl(186, 14%, 43%)",
          400: "hsl(184, 14%, 56%)",
          200: "hsl(185, 41%, 84%)",
          50: "hsl(189, 47%, 97%)",
        },
        white: "hsl(0, 100%, 100%)",
      },
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
