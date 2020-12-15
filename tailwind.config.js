module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: { fontFamily: {
    'sans': ['Inter'],
    'serif': ['Inter'],
    'mono': ['Inter'],
    'display': ['Inter'],
    'body': ['Inter'],
   },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
