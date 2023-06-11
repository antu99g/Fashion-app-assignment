/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
      },
      colors: {
        "custom-gray": "rgb(124,124,124)",
        "medium-gray": "rgba(136, 136, 136, 1)",
        green: "rgb(83,175,95)",
      },
      backgroundColor: {
        grey: "rgba(221, 221, 221, 1)",
        "light-gray": "rgba(243, 244, 245, 1)",
        "custom-gray": "rgba(238, 238, 238, 1)",
        "gray-pink": "rgb(253,243,249)",
        pink: "rgb(191,71,127)",
      },
      fontSize: {
        xs: ".58rem",
        sm: "0.8rem",
        base: "0.9rem",
        lg: "1.7rem",
      },
      fontWeight: {
        thin: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
      },
      backgroundImage: {
        "offer-img": "url('/offer-bg.png')",
      },
      boxShadow: {
        lg: "0px -2px 7px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
