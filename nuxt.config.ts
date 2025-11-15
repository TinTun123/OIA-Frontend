// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import.meta.env.NUXT_PUBLIC_API_URL

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
    runtimeConfig: {
    public: {
      apiUrl: import.meta.env.NUXT_PUBLIC_API_URL,
      baseUrl: import.meta.env.NUXT_PUBLIC_BASE_URL,
      imageUrl: import.meta.env.NUXT_PUBLIC_IMAGE_URL
    }
  },
  devtools: { enabled: true },
   vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['./app/assets/css/main.css'],
  ssr: false,
  nitro: {
    preset: 'static'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
  ]
})