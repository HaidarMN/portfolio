// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Haidar Muhammad Naufal | Full Stack Developer",
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
  runtimeConfig: {
    public: {
      FIREBASE_KEY: process.env.NUXT_FIREBASE_KEY,
    },
  },
  plugins: ["~/plugins/firebase.ts"],
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
    "@nuxt/eslint",
  ],
  image: {
    dir: "public",
  },
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
