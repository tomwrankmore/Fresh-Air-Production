import React, { useRef, useEffect } from "react";
import { graphql } from "gatsby";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { mapEdgesToNodes } from "../lib/helpers";
import { colors } from "../styles/colors";
import CentralLogo from "../components/central-logo";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Hero from "../components/home/hero";
import Podcasts from "../components/home/home-section-podcasts";
import Marquee from "../components/marquee";
import WwdLogoCloud from "../components/what-we-do/wwd-logo-cloud";
import Work from "../components/home/home-section-work";
import Testimonials from "../components/home/home-section-testimonials";
import Editorials from "../components/home/home-section-editorials";
import TagCloud from "../components/home/home-section-cloud";
import { homePageQuery } from "../queries";
import HorizontalScrollSection from "../components/horizontal-scroll-section/"
import NewHero from "../components/new-hero";
import ScrollingMarquee from "../components/scrolling-marquee";

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
          # isFeaturedPost
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

  const heroImage = homePageContent.heroImage.asset.gatsbyImageData

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      {/* <CentralLogo ref={centralLogoRef} /> */}
      {/* <Hero
        ref={heroRef}
        heroMarqueeRef={heroMarqueeRef}
        tl={heroTl.current}
        heroMarqueeText={homePageContent.homeHeroTickerTape}
        heroImage={homePageContent.heroImage}
      /> */}
      <NewHero heroImage = {heroImage} />
      <Podcasts
        ref={podcastsRef}
        podcastHeading={homePageContent._rawHomePodcastHeading[0].children[0].text}
        homePodcasts={homePageContent.homePodcasts}
      />
      {/* <Marquee
        style={{ color: colors.FABlue }}
        textContent={homePageContent.homeSecondTickerTape}
        ref={marqueeRef}
      /> */}
      {/* <Work
        ref={horizontalPanelsRef}
        workSectionHeading={homePageContent.homeWorkSectionHeading}
        homeWorkSectionImage={homePageContent.homeWorkSectionImage}
        panelOneTitle={homePageContent.homeWorkPanelOneTitle}
        panelOneText={homePageContent._rawHomeWorkPanelOneText}
        panelOneImage={homePageContent.homeWorkPanelOneImage}
        panelTwoText={homePageContent._rawHomeWorkPanelTwoText}
        panelTwoTitle={homePageContent.homeWorkPanelTwoTitle}
        panelTwoImage={homePageContent.homeWorkPanelTwoImage}
        panelThreeTitle={homePageContent.homeWorkPanelThreeTitle}
        panelThreeText={homePageContent._rawHomeWorkPanelThreeText}
        panelThreeImage={homePageContent.homeWorkPanelThreeImage}
        panelFourTitle={homePageContent.homeWorkPanelFourTitle}
        panelFourText={homePageContent._rawHomeWorkPanelFourText}
        panelFourImage={homePageContent.homeWorkPanelFourImage}
      /> */}

      <HorizontalScrollSection 
        ref={horizontalScrollRef} 
        workSectionHeading={homePageContent.homeWorkSectionHeading}
        homeWorkSectionImage={homePageContent.homeWorkSectionImage}
        panelOneTitle={homePageContent.homeWorkPanelOneTitle}
        panelOneText={homePageContent._rawHomeWorkPanelOneText}
        panelOneImage={homePageContent.homeWorkPanelOneImage}
        panelTwoText={homePageContent._rawHomeWorkPanelTwoText}
        panelTwoTitle={homePageContent.homeWorkPanelTwoTitle}
        panelTwoImage={homePageContent.homeWorkPanelTwoImage}
        panelThreeTitle={homePageContent.homeWorkPanelThreeTitle}
        panelThreeText={homePageContent._rawHomeWorkPanelThreeText}
        panelThreeImage={homePageContent.homeWorkPanelThreeImage}
        panelFourTitle={homePageContent.homeWorkPanelFourTitle}
        panelFourText={homePageContent._rawHomeWorkPanelFourText}
        panelFourImage={homePageContent.homeWorkPanelFourImage}
      />

      {/* <WwdLogoCloud
        imageOne={homePageContent.homeClientsRowOne}
        imageTwo={homePageContent.homeClientsRowTwo}
        imageThree={homePageContent.homeClientsRowThree}
      /> */}
      <Testimonials testimonials={testimonials} />
      <Editorials
        editorialNodes={editorialNodes}
        featuredEditorial={homePageContent.homeFeaturedEditorial}
        homeEditorials={homePageContent.homeEditorials}
      />
      {/* <TagCloud ref={tagCloudRef} /> */}
      <ScrollingMarquee />

    </Layout>
  );
};

export default IndexPage;
