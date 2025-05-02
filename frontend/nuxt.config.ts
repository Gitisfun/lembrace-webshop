// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/google-fonts', '@nuxtjs/strapi', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      'Alex+Brush': true,
    },
    display: 'swap',
  },
  strapi: {
    url: 'http://localhost:1337',
  },
  image: {
    providers: {
      strapi: {
        provider: 'strapi',
        options: {
          baseURL: 'http://localhost:1337',
        },
      },
    },
  },
  runtimeConfig: {
    mollieApiKey: process.env.MOLLIE_API_KEY,
  },
});
