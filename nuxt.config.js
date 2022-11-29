// import colors from 'vuetify/es5/util/colors'
import * as storeConfig from './config/store.config.js'

export default {
  generate: {
    fallback: true
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - GTH',
    title: 'GTH',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/app.scss', '@mdi/font/css/materialdesignicons.min.css'],
  // css: ['@/assets/app.scss', '@/assets/css/materialdesignicons.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/api.js', ssr: false },
    { src: '~/plugins/vue-clipboard2.js', ssr: false }
    // { src: '~/plugins/index.strapi.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    /* New Modules */
    // https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: '.env' }],
    '@nuxtjs/moment'
  ],

  moment: {
    locales: ['es'],
    defaultLocale: 'es',
    // plugins: ['moment-strftime', 'moment-fquarter'],
    defaultTimezone: 'America/Bogota',
    timezone: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/nuxt-vuex-localstorage
    [
      'nuxt-vuex-localstorage',
      {
        localStorage: [], //  If not entered, “localStorage” is the default value
        sessionStorage: [...storeConfig.ADMIN, ...storeConfig.DTH] //  If not entered, “sessionStorage” is the default value
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BACKEND_API_URL
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['@/assets/_variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#000',
          secondary: '#fff'
          // three: "",
          // four: "",
          // five: "",
          // info: "",
          // warning: "",
          // error: "",
          // success: ""
        },
        light: {
          primary: '#000',
          secondary: '#fff',
          three: '#000000',
          // four: "",
          // five: "",
          // info: "",
          // warning: "",
          error: '#F90A0E'
          // success: ""
        }
      }
    }
  },

  // modifying the default loader
  loading: {
    color: '#05AC72',
    height: '2px',
    continuous: true,
    duration: 100
  },

  /*
   ** modifying the default loader
   */
  // loading: '~/components/Loader.vue',

  // Config PWA
  pwa: {
    icon: {
      source: '/static/icon.png'
    },
    manifest: {
      name: 'Classic GYM',
      short_name: 'Classic GYM',
      lang: 'es',
      useWebmanifestExtension: false
    },
    workbox: {
      // importScripts: ['/service-worker.js'],
      cleanupOutdatedCaches: true,
      cacheAssets: false,
      offline: true,
      dev: false
      // debug: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    VERSION: process.env.VERSION,
    PORT_HOST: process.env.PORT_HOST,
    BACKEND_API_URL: process.env.BACKEND_API_URL
  }
}
