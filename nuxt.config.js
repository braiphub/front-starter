export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Braip Front-end Starter",
    htmlAttrs: {
      lang: "pt-BR",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "descrição",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      { rel: "stylesheet", href: "https://css.gg/css" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/sweetalert2.css",
    "@/assets/css/fontawesome.css",
    "@/assets/css/reset.css",
    "@/assets/css/global.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "@/components",
    {
      path: "@components/templates/",
      prefix: "template",
      extensions: ["vue"],
    },
    {
      path: "@components/organisms/",
      prefix: "organism",
      extensions: ["vue"],
    },
    {
      path: "@components/molecule/",
      prefix: "molecule",
      extensions: ["vue"],
    },
    {
      path: "@components/atoms/",
      prefix: "atom",
      extensions: ["vue"],
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
};
