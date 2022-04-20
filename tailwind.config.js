module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      screens: {
        mdl: '896px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class',
}
