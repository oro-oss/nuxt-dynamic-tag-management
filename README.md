# nuxt-dynamic-tag-management

Nuxt.js module of Adobe Dynamic Tag Management.

## Usage

```sh
$ npm i nuxt-dynamic-tag-management
```

nuxt.config.js

```js
module.exports = {
  modules: [
    ['nuxt-dynamic-tag-management', {
      scriptSrc: '//assets.adobedtm.com/xxx/satelliteLib-xxx.js' // Script URL which you are directed to embed in your page
      trackName: 'page view' // A string value will be passed to the 1st argument of `_satellite.track`
    }]
  ]
}
```

## License

MIT
