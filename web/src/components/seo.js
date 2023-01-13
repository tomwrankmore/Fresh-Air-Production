import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title }) {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
        title
        description
        url
        keywords
        Logo {
          asset {
            gatsbyImageData
          }
        }
        # author {
        #   name
        # }
      }
    }
  `)

  const metaDescription = description || (data.site && data.site.description) || "";
  const siteTitle = (data.site && data.site.title) || "";
  const siteUrl = (data.site && data.site.url) || "";
  const siteAuthor = (data.site && data.site.author && data.site.author.name) || "";
  const logo = (data.site.Logo && data.site.Logo.asset && data.site.Logo.asset.gatsbyImageData.images.fallback.src) || "";

  return (
    
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
      meta={[
        {
          name: "description",
          content: metaDescription
        },
        { 
          name: "og:image",
          content: logo
        },
        { 
          name: "og:image:height",
          content: '1200'
        },
        { 
          name: "og:image:width",
          content: '1200'
        },
        {
          name: "og:site_name",
          content: title
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: metaDescription
        },
        {
          property: "og:url",
          content: siteUrl
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:creator",
          content: siteAuthor
        },
        {
          name: "twitter:title",
          content: title
        },
        {
          name: "twitter:image",
          content: logo
        },
        {
          name: "twitter:url",
          content: siteUrl
        },
        {
          name: "twitter:description",
          content: metaDescription
        }
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", ")
              }
            : []
        )
        .concat(meta)}
    />
    )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;
