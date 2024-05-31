// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: 'favicon.png'}],
    }
  },
  content: {},
})
