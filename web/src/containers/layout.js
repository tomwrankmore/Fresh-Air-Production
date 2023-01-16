import { graphql, StaticQuery, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/layout";
import '../styles/global.css'

// const query = graphql`
//   query SiteTitleQuery {
//     site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
//       title
//     }
//   }
// `;

const isBrowser = typeof document !== "undefined"

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false);
  function handleShowNav() {
    setShowNav(true);
    if(isBrowser) {
      document.body.classList.add("body-hide-overflow");
    }
  }
  function handleHideNav() {
    setShowNav(false);
    if(isBrowser) {
      document.body.classList.remove("body-hide-overflow");
    }
  }
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
    }
  `)

  if (!data.site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
    );
  }

  return (
    <Layout
      {...props}
      showNav={showNav}
      siteTitle={data.site.title}
      onHideNav={handleHideNav}
      onShowNav={handleShowNav}
    />
  )
}

export default LayoutContainer;
