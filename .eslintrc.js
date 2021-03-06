module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@vue/eslint-config-prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: { 'vue/multi-word-component-names': 'off' },
  overrides: [
    {
      files: ['layouts/*', 'pages/*', 'pages/film/_filmId/*'],
      rules: { 'vue/multi-word-component-names': 'off' },
    },
  ],
}
