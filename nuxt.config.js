
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'keywords', content: 'DENTSU INTERNSHIP ARTDIRECTOR DESIGN' },
      // { property: "og:title", content:"DENTSU DESIGN SUMMER SCHOOL 2020" },
      // { property: 'og:description', content: 'DENTSU DESIGN SUMMER SCHOOL 2020' },
      // { property:"og:type", content:"website"},
      // { property:"og:url", content:"https://www.career.dentsu.jp/intern/2020/dss/"},
      // { property: 'og:image', content: 'https://dds-test.netlify.app/src_home/ogp.png' },
      // { property: 'og:site_name', content: 'DENTSU DESIGN SUMMER SCHOOL 2020' },
      // { property: 'fb:app_id', content: '828074940735241' },
      // { property: 'twitter:card', content: 'summary_large_image' },
      // { property: 'twitter:site', content: '@rfuji625' },
      // { property: 'twitter:creator', content: '@rfuji625' },
      // { property: 'twitter:description', content: 'DENTSU DESIGN SUMMER SCHOOL 2020' },
      // { property: 'twitter:image', content: 'https://dds-test.netlify.app/src_home/ogp.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:500,900']
    }
  },
  plugins: [
    '~/plugins/mixin',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
