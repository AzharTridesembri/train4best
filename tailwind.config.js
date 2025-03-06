module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#46397C",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
