/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "gray-800": "#282c3f;",
        "gray-300": "#7e808c",
        "yellow": "#ffa700;",
        "green-500": "#16a34a",
        "light-gray": "#d3d3d3",
        "orange-400":"#fd7e14"
      },
    },
  },
  plugins: [],
};
