import React, { useRef, useEffect } from "react";
import { graphql } from "gatsby";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { mapEdgesToNodes } from "../lib/helpers";
import CentralLogo from "../components/central-logo-old"
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Hero from "../components/home/hero";
import HomeComponentMapper from "../components/home/homeComponentMapper";

export const query = graphql`
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
          # _rawHomePodcastHeading
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
          # _rawHomePodcastHeading
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

const IndexPage = props => {
  gsap.registerPlugin(ScrollTrigger);

  const { data, errors } = props;

  const editorialNodes = data && data.editorials && mapEdgesToNodes(data.editorials);

  // GSAP Timeline Refs
  const heroTl = useRef(null);
  const horizontalTl = useRef(null);
  const podcastTl = useRef(null);

  // Section Refs
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const centralLogoRef = useRef(null);
  const podcastsRef = useRef(null);
  const horizontalPanelsRef = useRef(null);
  const horizontalScrollRef = useRef(null);
  const heroMarqueeRef = useRef(null);
  const marqueeRef = useRef(null);
  const tagCloudRef = useRef(null);

  useEffect(() => {
    gsap.set(centralLogoRef.current, { visibility: "hidden" });
    gsap.to(centralLogoRef.current, {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: podcastsRef.current,
        start: "bottom top",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  // remember this:
  // mapEdgesToNodes(data.projects)
  //  .filter(filterOutDocsWithoutSlugs)
  //  .filter(filterOutDocsPublishedInTheFuture)

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const homePageContent = data.homePageContent.edges[0].node;
  const testimonials = mapEdgesToNodes(data.testimonials);

  const heroImage = homePageContent?.heroImage?.asset?.gatsbyImageData;

  const homeBlocks = data?.newHomeContent?.homePageBuilder;

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Hero
        ref={heroRef}
        heroMarqueeRef={heroMarqueeRef}
        tl={heroTl.current}
        heroMarqueeText={homePageContent.homeHeroTickerTape}
        heroImage={homePageContent.heroImage}
      />
      <CentralLogo ref={centralLogoRef} />
      # <HomeComponentMapper homeBlocks={homeBlocks} />

      {/* <ScrollingLogoCloud /> */}
    </Layout>
  );
};

export default IndexPage;
