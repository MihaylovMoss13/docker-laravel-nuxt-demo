export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: "static",
  mode: 'universal',
  colorMode: {
    classSuffix: "dark",
  },
  env: {
    BAIDU_ANALYTICS_KEY: '',
    GOOGLE_ANALYTICS_KEY: '',
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Институт Косметологии",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    script: [{hid: 'jivosite', src: '//code.jivo.ru/widget/vW0IPSeu4j'}]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/back-to-top.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy'
  ],

  auth: {
      strategies: {
          cookie: {
              endpoints: {
                  csrf: {
                      url: '/sanctum/csrf-cookie'
                  },
                  login: {
                      url: '/login'
                  },
                  logout: {
                      url: '/logout'
                  },
                  user: {
                      url: '/user'
                  }
              },
              user: {
                  property: 'data'
              },
          }
      },

      redirect: {
          login: '/login',
          logout: '/login',
          home: '/'
      },

      plugins: ['~/plugins/axios'],
  },

  axios: {
    baseURL: 'http://localhost',
    credentials: true,
    proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },

  proxy: {
    '/api/': { target: 'http://cosmetic.school/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  } 
};
