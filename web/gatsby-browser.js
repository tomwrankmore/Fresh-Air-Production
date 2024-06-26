/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// import './src/styles/global.css'; // Global CSS
require('./src/styles/global.css')

// You can delete this file if you're not using it

const { wrapPageElement } = require("./gatsby-shared-pixel-scripts");

exports.onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    // console.log(`# IntersectionObserver is polyfilled!`)
  }
};

exports.onRouteUpdate = ({ location, prevLocation }) => {
  const isBrowser = typeof document !== "undefined";
  if (isBrowser) {
    if (document.body.classList.contains("body-hide-overflow")) {
      document.body.classList.remove("body-hide-overflow");
    }
  }
};

exports.shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  const currentPosition = getSavedScrollPosition(location);
  const queriedPosition = getSavedScrollPosition({ pathname: `/random` });

  window.scrollTo(...(currentPosition || [0, 0]));

  return false;
};

module.exports = {
  wrapPageElement: wrapPageElement
};