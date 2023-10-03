import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        voiletBlue: "#3639e4",
        websiteBase: "#f5f4fd",
        cream: "#feffff",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              custom_blue: "#3639e4",
              DEFAULT: "#006FEE",
            },
          },
        },
      },
    }),
  ],
};
