module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1152px",
    },
    extend: {
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        primary: "#F2F6F9",
        secondary: "#F31717",
        grayLight: "#A4A4A4",
        gray: "#5B5B5B",
        lightBlue: "#B1C9DF",
      },
    },
    fontFamily: {},
  },
  future: {
    // hoverOnlyWhenSupported: true,
  },
  // plugins: [require("@tailwindcss/typography")],
};
