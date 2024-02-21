/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   'sm': "450px",
    //   'md': "675px",
    //   'lg': "900px",
    //   'xl': "1024px",
    //   '2xl': "1600px"
    // },
    extend: {
      colors: {
        FABlue: "#00AFEE",
        FATurquoise: "#27D7FE",
        FAGrey: "#30323D",
        FAOrange: "#EAB464",
        FADarkerBlue: "#067BC2",
        FALightGreen: "#a7e8bd"
      }
    },
  },
  plugins: [],
}

