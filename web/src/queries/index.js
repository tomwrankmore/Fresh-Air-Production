import { graphql } from "gatsby";

export const homePageQuery = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    testimonials: allSanityHomePageTestimonial {
      edges {
        node {
          id
          testimonial
          client
        }
      }
    }
    homePageContent: allSanityHomePageContent {
      edges {
        node {
          homeClientsRowOne {
            asset {
              gatsbyImageData
            }
          }
          homeClientsRowTwo {
            asset {
              gatsbyImageData
            }
          }
          homeClientsRowThree {
            asset {
              gatsbyImageData
            }
          }
          homeHeroTickerTape
          _rawHomePodcastHeading
          homePodcasts {
            id
            heroImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
            title
          }
          homeSecondTickerTape
          homeWorkSectionHeading
          homeWorkPanelOneTitle
          homeWorkPanelTwoTitle
          homeWorkPanelThreeTitle
          homeWorkPanelFourTitle
          _rawHomeWorkPanelOneText
          _rawHomeWorkPanelTwoText
          _rawHomeWorkPanelThreeText
          _rawHomeWorkPanelFourText
          heroImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          homeWorkSectionImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          homeWorkPanelOneImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          homeWorkPanelTwoImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          homeWorkPanelThreeImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          homeWorkPanelFourImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          homeFeaturedEditorial {
            id
            heroImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
            title
          }
          homeEditorials {
            id
            heroImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
            title
          }
        }
      }
    }
    newHomeContent: sanityHomePageType {
      homePageBuilder {
        ... on SanityHomeHero {
          _key
          _type
          visibleOnPage
          heading
          image {
            asset {
              gatsbyImageData(width: 1024, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        ... on SanityHomepagePodcasts {
          _type
          visibleOnPage
          homePodcasts {
            heroImage {
              asset {
                gatsbyImageData
              }
              alt
            }
            _rawExcerpt
            slug {
              current
            }
          }
          _rawHomePodcastHeading
        }
        ... on SanityHomeTickerTape {
          _key
          _type
          visibleOnPage
          homeTickerTapeText
        }
        ... on SanityHomeWeWork {
          _type
          visibleOnPage
          homeWeWorkHeading
          homeWeWorkMainImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          _rawPanelOneText
          _rawPanelTwoText
          _rawPanelThreeText
          _rawPanelFourText
          panelOneTitle
          panelTwoTitle
          panelThreeTitle
          panelFourTitle
          panelOneImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          panelTwoImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          panelThreeImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          panelFourImage {
            alt
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityHomeClients {
          _key
          _type
          visibleOnPage
          homeClientsRowOne {
            asset {
              gatsbyImageData
            }
          }
          homeClientsRowTwo {
            asset {
              gatsbyImageData
            }
          }
          homeClientsRowThree {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityHomeTestimonials {
          _key
          _type
          visibleOnPage
          homePageTestimonials {
            testimonial
            client
          }
        }
        ... on SanityHomeEditorials {
          _type
          homeEditorials {
            id
            heroImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
            title
            previewImage {
              alt
              asset {
                gatsbyImageData
              }
            }
          }
          homeFeaturedEditorial {
            id
            heroImage {
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
            title
          }
          visibleOnPage
        }
        ... on SanityHomeTagCloud {
          _key
          _type
          visibleOnPage
        }
      }
    }
    editorials: allSanityEditorial(
      sort: { publishedAt: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      limit: 8
    ) {
      edges {
        node {
          id
          slug {
            current
          }
          title
          publishedAt
          previewImage {
            alt
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;