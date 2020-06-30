
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "むこうのくに ｜ 劇団ノーミーツ",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'keywords', content: 'むこうのくに　劇団ノーミーツ' },
      { property: "og:title", content:"むこうのくに　劇団ノーミーツ" },
      { property: 'og:description', content: 'むこうのくに　劇団ノーミーツ' },
      { property:"og:type", content:"website"},
      { property:"og:url", content:"https://nomeets-mukounokuni-lp.netlify.app/"},
      { property: 'og:image', content: 'https://nomeets-mukounokuni-lp.netlify.app/home/ogp.jpg' },
      { property: 'og:site_name', content: 'むこうのくに　劇団ノーミーツ' },
      { property: 'fb:app_id', content: '828074940735241' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@rfuji625' },
      { property: 'twitter:creator', content: '@rfuji625' },
      { property: 'twitter:description', content: 'むこうのくに　劇団ノーミーツ' },
      { property: 'twitter:image', content: 'https://nomeets-mukounokuni-lp.netlify.app/home/ogp.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://use.typekit.net/adq4juz.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  // buildModules: [
  //   '@nuxt/typescript-build',
  // ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader'
  ],
  // webfontloader: {
  //   google: {
  //     families: ['Noto+Sans+JP:500,900']
  //   }
  // },
  plugins: [
    '~/plugins/mixin',
    '~plugins/vue-scrollto',
    '~plugins/vue-youtube',
    '~plugins/v-lazy-image',
  ],
  router: {
    base: '/mukounokuni/'
  },
  /*
  ** Build configuration
  */
 build: {
  /*
  ** You can extend webpack config here
  */
 extend (config, ctx) {
    if (!!config.module) {
      config.module.rules.push({ test: /\.(vert|frag|glsl)$/i, use: ["raw-loader"] });
    }
  }
},
}
