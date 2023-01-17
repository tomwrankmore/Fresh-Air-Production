/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


exports.onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
  const isBrowser = typeof document !== "undefined"
  if(isBrowser) {
    if(document.body.classList.contains("body-hide-overflow")) {
      document.body.classList.remove("body-hide-overflow");
    }
  }
}

exports.shouldUpdateScroll = () => {
  window.scrollTo()
}