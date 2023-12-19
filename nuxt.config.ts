// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Haidar Muhammad Naufal | Frontend Developer",
      link: [{ rel: "icon", type: "image/x-icon", href: "/h.svg" }],
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Haidar Muhammad Naufal's  Portfolio",
        },
      ],
    },
    baseURL: "/",
    buildAssetsDir: "assets",
  },
  modules: [
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: true,
        },
      },
    ],
    "nuxt-icon",
    "@nuxt/image",
  ],
  image: {
    dir: "public",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  experimental: {
    payloadExtraction: false,
  },
});
