import type { Config } from "tailwindcss";
type ColorType = {
  [key: string]: string;
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "50": "var(--custom-50)",
        "100": "var(--custom-100)",
        "200": "var(--custom-200)",
        "300": "var(--custom-300)",
        "400": "var(--custom-400)",
        "450": "var(--custom-450)",
        "500": "var(--custom-500)",
        "550": "var(--custom-550)",
        "600": "var(--custom-600)",
        "650": "var(--custom-650)",
        "700": "var(--custom-700)",
        "750": "var(--custom-750)",
        "800": "var(--custom-800)",
        "850": "var(--custom-850)",
        "900": "var(--custom-900)",
        "950": "var(--custom-950)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      } as ColorType,

      animation: {
        scroll: "scroll 20s linear infinite",
      },

      keyframes: {
        scroll: {
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
