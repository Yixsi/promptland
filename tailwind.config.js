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
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
      },
      boxShadow: {
        custom: "inset 10px -50px 94px 0 rgb(199, 199, 199, 0.2)",
      },
      customShadow: {
        custom: "inset_10px_-50px_94px_0_rgb(199, 199, 199, 0.2)",
      }
      }
    },
  plugins: [],
};
