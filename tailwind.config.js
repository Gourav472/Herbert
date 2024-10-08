/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        lato:["Lato","sans-serif"]
      },
      container: {
        center: true,
        padding: "24px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1184px",
        }
      },
      fontSize: {
        'custom-2xl': "28px",
        'custom-3xl': "44px",
        'custom-4xl': "56px",
      },
      colors: {
        gray: "#00000029",
        lightGray: "#00000029",
        offGray: "#5F5F5F",
        mediumGray: "#D6D0CB",
        offBlack: "#010101",
        darkRed: "#FF4C24",
        lightOrange: "#FF9748",
        offOrange: "#FFF8F2",
      },
      backgroundImage: {
        'hero-bg': "url(./assets/images/webp/hero-bg.webp)",
        'gradient-orange': "linear-gradient(241.09deg, rgba(255, 76, 36, 0.15) -34.32%, rgba(255, 227, 108, 0.15) 109.3%)",
        'team-bg': "url(./assets/images/webp/team-bg.webp)",
        'faq-bg': "url(./assets/images/webp/faq-bg.webp)",
      },
      boxShadow: {
        '3xl': "0px -12px 10px -10px #FF9748 inset",
        '4xl': "0px 0px 16px 6px #8080801F",

      },
      backgroundSize: {
        'full': "100% 100%",
      }
    },
  },
  plugins: [],
}

