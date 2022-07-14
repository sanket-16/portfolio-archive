module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background-blue' : '#131B21',
      'white' : '#FFFFFF',
    },
    extend: {
      backgroundImage: {
        'luffy' : "url('./images/luffy.svg')",
        'akatsuki' : "url('./images/clouds.svg')",
      }
    },
  },
  plugins: [],
}