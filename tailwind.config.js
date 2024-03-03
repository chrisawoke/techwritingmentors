/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        md: "1.6rem",
        lg: ["2.2rem", "1.3"],
        "5xl": ["8rem", "1.2"],
      },
      colors: {
        backGround: "#FAFCFF",
        LightBlue: "#E9F1FA",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        brightBlue: "#00ABE4",
      },
      // spacing: {
      //   0: "0",
      //   1: "0.4rem",
      //   2: "0.8rem",
      //   3: "1.2rem",
      //   4: "1.6rem",
      //   5: "2.3rem",
      //   6: "3.2rem",
      // },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
