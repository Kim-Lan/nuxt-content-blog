// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@vesp/nuxt-fontawesome'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: 'favicon.png' },
      ],
    }
  },
  css: ['~/assets/styles/main.css'],
  fontawesome: {
    component: "fa",
    icons: {
      solid: ['arrow-left'],
      regular: [],
      brands: ['github', 'linkedin']
    }
  }
})
