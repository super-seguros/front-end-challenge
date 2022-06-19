const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "super-blue-light": "#1652f0",
        "super-blue-dark": "#27336e",
        "super-blue-darker": "#080d3a",
        "super-pink-light": "#ef5dac",
        "super-pink-dark": "#ee0a81",
        "super-grey-light": "#e3e5ec",
        "super-grey-dark": "#636c94",
        "super-green-light": "#6ecd95",
      },
      fontFamily: {
        "sans": ["Lato", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
  ],
}
