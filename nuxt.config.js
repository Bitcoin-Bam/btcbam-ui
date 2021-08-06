import webpack from 'webpack'

export default {
  head: {
    titleTemplate: '%s - btcbam.info',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/styles/main.scss',
    '@fortawesome/fontawesome-free/css/all.css',
    '@/styles/common.less',
    '@/styles/card.less',
    '@/styles/info-table.less',
    '@/icons/style.css'
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => ['script', 'style', 'font'].includes(type)
    }
  },
  build: {
    extend(config, {isServer}) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      })
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.btcbaminfoAPIBase': JSON.stringify(process.env.BTCBAMINFO_API_BASE
          || process.env[isServer ? 'BTCBAMINFO_API_BASE_SERVER' : 'BTCBAMINFO_API_BASE_CLIENT']
          || 'http://localhost:7001/'),
        'process.env.btcbaminfoWSBase': JSON.stringify(process.env.BTCBAMINFO_WS_BASE
          || process.env.BTCBAMINFO_API_BASE_WS
          || '//localhost:7001/'),
        'process.env.network': JSON.stringify(process.env.BTCBAM_NETWORK || 'mainnet')
      }))
    },
    extractCSS: true,
    postcss: {
      features: {
        customProperties: false
      }
    }
  },
  serverMiddleware: ['~/middleware/ip.js'],
  plugins: [
    '~/plugins/components.js',
    '~/plugins/i18n.js',
    '~/plugins/btcbam-utils.js',
    {src: '~/plugins/websocket.js', ssr: false}
  ]
}
