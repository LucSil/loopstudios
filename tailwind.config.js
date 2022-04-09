module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "p-white": "hsl(0, 0%, 100%)",
        "p-darkGray": "hsl(0, 0%, 55%)",
        "p-veryDarkGray": "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
