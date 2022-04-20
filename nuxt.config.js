export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'letterboxd-nuxtjs',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16',
      },
      { rel: 'manifest', type: 'image/x-icon', href: '/site.webmanifest' },
      {
        rel: 'preload',
        as: 'font',
        href: '/_nuxt/fonts/poppins-v19-latin/poppins-v19-latin-200.woff',
      },
      {
        rel: 'preload',
        as: 'font',
        href: '/_nuxt/fonts/poppins-v19-latin/poppins-v19-latin-700.woff',
      },
      {
        rel: 'preload',
        as: 'font',
        href: '/_nuxt/fonts/poppins-v19-latin/poppins-v19-latin-regular.woff',
      },
      {
        rel: 'preload',
        as: 'font',
        href: '/_nuxt/fonts/pt-serif-v16-latin/pt-serif-v16-latin-regular.woff',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/api.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/svg',
  ],

  buildDir: 'dist',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/http'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  env: {
    tmdbAPIKey: process.env.TMDB_API_KEY,
  },
}
