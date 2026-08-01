/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        instagram: {
          blue: "#0095f6",
          "blue-dark": "#1877f2",
          "blue-light": "#b2dffc",
          purple: "#c32aa3",
          pink: "#e1306c",
          orange: "#f77737",
          yellow: "#fcaf45",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
