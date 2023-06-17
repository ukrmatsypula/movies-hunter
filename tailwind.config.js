/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    spinner: () => ({
      default: {
        color: "#dae1e7",
        size: "2em",
        border: "3px",
        speed: "500ms",
      },
    }),
  },

  plugins: [
    require("tailwindcss-spinner")({
      className: "spinner",
      themeKey: "spinner",
    }),
  ],
};
