module.exports = {
  dest: 'docs',
  base: '/portafoliodev/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Edwin Torres',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Portafolio de Edwin Torres, desarrollador web',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,    
    nav: [
      {
        text: 'Inicio',
        link: '/',
      },
      {
        text: 'Contacto',
        link: 'mailto:edwintorres.mec@gmail.com',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/edwintorres1605?tab=repositories',
      },
    ],
    sidebar: [
      '/',
      '/about/',
      '/skills/',
      '/work/',
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
