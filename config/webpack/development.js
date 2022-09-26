process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery/src/jquery',
  jQuery: 'jquery/src/jquery',
  Popper: ['popper.js', 'default']
}))

module.exports = environment.toWebpackConfig()
