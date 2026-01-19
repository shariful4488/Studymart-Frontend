/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#403f3f",
          secondary: "#d72050",
          accent: "#706f6f",
          "base-200": "#f3f3f3",
          "base-300": "#e7e7e7",
        },
      },
    ],
  },
};
