/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        app: "linear-gradient(144deg, #28272F 0%, #040404 100%);",
      },
      colors: {
        "app-gray": "rgba(255, 255, 255, 0.14)",
      },
    },
  },
  plugins: [],
};
