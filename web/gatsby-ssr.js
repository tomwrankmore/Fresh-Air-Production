/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/PolySansSlim.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/PolySansSlim.otf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Ambit-Bold.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Ambit-Regular.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Ambit-SemiBold.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
    rel="preload"
    href="/fonts/Ambit-Bold.otf"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="interFont"
  />,
  <link
    rel="preload"
    href="/fonts/Ambit-Regular.otf"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="interFont"
  />,
  <link
    rel="preload"
    href="/fonts/Ambit-SemiBold.otf"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="interFont"
  />,
  ])
}