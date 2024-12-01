/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minWidth: {
        xs: "360px",
        sm: "480px",
        xsm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1300px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
      maxWidth: {
        xs: "360px",
        sm: "480px",
        xsm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1300px",
        xxxl: "1600px",
        xxxxl: "1920px",
      },
      screens: {
        xs: "360px",
        sm: "480px",
        xsm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1400px",
        xxxl: "1600px",
        xxxxl: "1920px",
      },
      colors: {
        bgSecond: "#f2f2f2",
        bgBox: "#e05c0b",
        bgButton: "#ffd800",
      },
      fontSize: {
        h1: "36px",
        h2: "28px",
        body: "16px",
        small: "14px",
      },
    },
  },
  plugins: [],
};
