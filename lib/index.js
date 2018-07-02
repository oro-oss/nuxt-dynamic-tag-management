const path = require('path')
const defaultsDeep = require('lodash.defaultsdeep')

module.exports = function nuxtDynamicTagManagement(_options) {
  const options = defaultsDeep({}, _options, {
    scriptSrc: null,
    trackName: 'page view'
  })

  if (!options.scriptSrc) {
    return
  }

  this.options.head.script.push({
    src: options.scriptSrc
  })

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'dynamic-tag-management.js',
    ssr: false,
    options
  })
}

module.exports.meta = require('../package.json')
