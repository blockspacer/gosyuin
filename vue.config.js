const Dotenv = require('dotenv-webpack')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/gosyuin/'
    : '/',
  outputDir: 'docs',
  configureWebpack: {
    plugins: [new Dotenv()]
  }
}