import React, {useRef, useEffect} from "react";
import { graphql } from "gatsby";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  mapEdgesToNodes,
} from "../lib/helpers";
import { colors } from "../styles/colors";
import CentralLogo from "../components/central-logo"
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Hero from "../components/home/hero";
import Podcasts from "../components/home/home-section-podcasts"
import Marquee from "../components/marquee"
import WwdLogoCloud from "../components/what-we-do/wwd-logo-cloud"
import Work from "../components/home/home-section-work"
import Testimonials from "../components/home/home-section-testimonials";
import Editorials from "../components/home/home-section-editorials";
import TagCloud from "../components/home/home-section-cloud"

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    homePageContent:
      allSanityHomePageContent {
        edges {
          node {
            homeHeroTickerTape
            _rawHomePodcastHeading
            homePodcasts {
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
            homeTestimonials {
              testimonial
              client
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
            homeEditorials {
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
          }
        }
      }
    editorials: allSanityEditorial(
      sort: {publishedAt: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
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
  const heroTl = useRef(null)
  const horizontalTl = useRef(null)
  const podcastTl = useRef(null)

  // Section Refs
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const centralLogoRef = useRef(null)
  const podcastsRef = useRef(null)
  const horizontalPanelsRef = useRef(null)
  const heroMarqueeRef = useRef(null)
  const marqueeRef = useRef(null)
  const tagCloudRef = useRef(null)

  useEffect(() => {
    gsap.set(centralLogoRef.current, {visibility: 'hidden'})
    gsap.to(centralLogoRef.current, {
        autoAlpha: 1,
        scrollTrigger: {
            trigger: podcastsRef.current,
            start: "bottom top",
            toggleActions: "play none none reverse"
          }
    })
  },[])

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

  const homePageContent = data.homePageContent.edges[0].node

  return (
      <Layout>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <CentralLogo ref={centralLogoRef}/>
        <Hero 
          ref={heroRef} 
          heroMarqueeRef={heroMarqueeRef} 
          tl={heroTl.current} 
          heroMarqueeText={homePageContent.homeHeroTickerTape}
        />
        <Podcasts 
          ref={podcastsRef} 
          podcastHeading={homePageContent._rawHomePodcastHeading[0].children[0].text} 
          homePodcasts={homePageContent.homePodcasts}  
        />
        <Marquee 
          style={{color: colors.FABlue}}
          textContent={homePageContent.homeSecondTickerTape}
          ref={marqueeRef}
        />
        <Work 
          ref={horizontalPanelsRef} 
          workSectionHeading={homePageContent.homeWorkSectionHeading}
          panelOneTitle={homePageContent.homeWorkPanelOneTitle}
          panelTwoTitle={homePageContent.homeWorkPanelTwoTitle}
          panelThreeTitle={homePageContent.homeWorkPanelThreeTitle}
          panelFourTitle={homePageContent.homeWorkPanelFourTitle}
          panelOneText={homePageContent._rawHomeWorkPanelOneText}
          panelTwoText={homePageContent._rawHomeWorkPanelTwoText}
          panelThreeText={homePageContent._rawHomeWorkPanelThreeText}
          panelFourText={homePageContent._rawHomeWorkPanelFourText}
        />
        <WwdLogoCloud />
        <Testimonials
          testimonials={homePageContent.homeTestimonials}
        />
        <Editorials 
          editorialNodes={editorialNodes} 
          featuredEditorial={homePageContent.homeFeaturedEditorial}
          homeEditorials={homePageContent.homeEditorials}
        />
        <TagCloud ref={tagCloudRef} />
      </Layout>
  );
};

export default IndexPage;
