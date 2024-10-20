module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {themes: [
    {
    latitude: {
      ...require("daisyui/src/theming/themes")["corporate"],
      primary: "#5d90f5",
      accent: "#5d90f5"
  }}
]
},
  theme: {
    extend: {
      colors: {
        'latitude-blue': '#EEF9FB',
      }
    }
  }
};
