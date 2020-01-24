import colors from 'vuetify/es5/util/colors';

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon-precomposed', type: 'image/png', href: '/icon/icon-144x144.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/persistedstate.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // pwa
    ['@nuxtjs/pwa', { icon: false }]
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  /*
   ** PWA
   */
  pwa: {
    workbox: {
      offline: true,
      cacheName: 'pwa',
      autoRegister: true,
      offlineAnalytics: true,
      //offlineAssets: ['/*'], //ワイルドカードとかは無理
      runtimeCaching: [
        {
          urlPattern: '/*',
          handler: 'networkFirst',
          method: 'GET'
        }
      ]
    },
    manifest: {
      name: 'Barcode Reader',
      lang: 'ja',
      short_name: 'BarcodeReader',
      title: 'Barcode Reader',
      'og:title': 'BarcodeReader',
      description: 'バーコードリーダーです。',
      'og:description': 'バーコードリーダーです。',
      theme_color: '#424242',
      background_color: '#424242',
      scope: 'https://qr.junic.jp/',
      icons: [
        { sizes: '72x72', type: 'image/png', src: '/icons/icon-72x72.png' },
        { sizes: '96x96', type: 'image/png', src: '/icons/icon-96x96.png' },
        { sizes: '128x128', type: 'image/png', src: '/icons/icon-128x128.png' },
        { sizes: '144x144', type: 'image/png', src: '/icons/icon-144x144.png' },
        { sizes: '152x152', type: 'image/png', src: '/icons/icon-152x152.png' },
        { sizes: '192x192', type: 'image/png', src: '/icons/icon-192x192.png' },
        { sizes: '384x384', type: 'image/png', src: '/icons/icon-384x384.png' },
        { sizes: '512x512', type: 'image/png', src: '/icons/icon-512x512.png' }
      ]
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** publicPath
     ** nuxtファイルの出力先
     */
    publicPath: '/fw/',

    /*
     ** 圧縮関連
     */
    terser: {
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV !== 'development'
        }
      }
    },

    /*
     ** You can extend webpack config here
     */
    //transpile: ['vue-magic-grid'],
    babel: {
      presets({ isServer }, [preset, options]) {
        options.corejs = { version: 3, proposals: true };
        options.useBuiltIns = 'usage';
        if (isServer) {
          options.targets = {
            node: 'current'
          };
        } else {
          options.targets = {
            browsers: [
              'last 2 Chrome versions',
              'last 2 Edge versions',
              'last 2 Firefox versions',
              'last 2 Safari versions',
              'iOS >= 11',
              'Android >= 4.4.4',
              'last 2 ChromeAndroid versions'
            ]
          };
        }

        options.loose = true;
        //options.debug = true;
        options.debug = false;
      },
      plugins: ['@babel/plugin-syntax-dynamic-import']
    },
    extend(config, { isDev, isClient }) {}
  }
};
