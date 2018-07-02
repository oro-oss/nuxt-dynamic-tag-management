/* global document, _satellite */

document.addEventListener('DOMContentLoaded', () => {
  _satellite.pageBottom()
})

export default ({ app: { router } }) => {
  router.afterEach(() => {
    _satellite.track('<%= options.trackName %>')
  })
}
