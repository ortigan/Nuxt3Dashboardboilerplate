// https://nuxt.com/docs/api/configuration/nuxt-config
// import * as dayjs from 'dayjs'
// dayjs().format()
export default defineNuxtConfig({
  css: [
    '@/assets/css/style.css',
  ],
  modules: [
    'dayjs-nuxt'
  ],
  dayjs: {
    locales: ['en', 'fr'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'India/Mumbai',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})