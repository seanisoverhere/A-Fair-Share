export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'A-Fair-Share',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/aos", mode: "client" }, { src: "@/plugins/vue-awesome-swiper", ssr: "false" }
  ],

  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios',
            '@nuxtjs/apollo',
            '@nuxtjs/proxy',
            '@nuxtjs/auth-next',
            '@nuxtjs/dotenv',
            'vue-scrollto/nuxt'
          ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
      }
    }
  },

  proxy: [
    'http://localhost:4000/graphql'
  ],
          
  axios: {
    // proxy: true
  },  

  auth: {
    // Options
  },

  // proxy: {
  //   '/api/': {
  //     target: 'http://localhost:5003', pathRewrite: { ' ^ /api/': '' }, changeOrigin: true
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }



}
