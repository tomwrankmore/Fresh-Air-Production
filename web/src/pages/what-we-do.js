import React, {useRef} from "react";
import { graphql } from "gatsby";
import { colors } from "../styles/colors";
import { mapEdgesToNodes } from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import CentralLogo from "../components/central-logo"
import Marquee from "../components/marquee"

import {
    WwdHero, 
    WwdSectionOne, 
    WwdSectionTwo, 
    WwdSectionThree, 
    WwdAwardsSection, 
    WwdLogoCloud, 
    WwdQuoteSection 
} from "../components/what-we-do"

export const query = graphql`
  query WhatWedoPageQuery {
    whatWeDoPageContent: allSanityWhatWeDoContent {
      edges {
        node {
          wwdHeroImage {
            alt
            asset {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1024, 
                    quality: 50, 
                    placeholder: BLURRED, 
                    formats: AUTO
                  )
                }
              }
            }
          }
          _rawWwdHeroText
          wwdTickerTapeText
          _rawWwdSectionOneText
          _rawWwdSectionTwoText
          _rawWwdSectionThreeText
          wwdSectionOneImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          wwdSectionTwoImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          wwdSectionThreeImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          wwdPageQuote
        }
      }
    }
    awards: allSanityAward(
      sort: {publishedAt: DESC}
      filter: {publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          title
          _rawBody
          awardLeftImage {
            alt
            asset {
              gatsbyImageData
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1024, 
                    quality: 75, 
                    placeholder: BLURRED, 
                    formats: AUTO
                  )
                }
              }
            }
          }
          awardLogo {
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

const WhatWeDo = props => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const wwdPageContent = data && data.whatWeDoPageContent.edges[0].node;
  const allAwardNodes = data && data.awards && mapEdgesToNodes(data.awards);

  // Section refs
  const heroRef = useRef(null)
  const marqueeRef = useRef(null)
  const sectionOneRef = useRef(null)
  const sectionTwoRef = useRef(null)
  const sectionThreeRef = useRef(null)
  const sectionFourRef = useRef(null)
  const quoteSectionRef = useRef(null)
  const sectionLogoCloudRef = useRef(null)

  // Timeline refs
  const heroTl = useRef(null)
  const section2Tl = useRef(null)
  const section3Tl = useRef(null)
  const section4Tl = useRef(null)
  const quoteSection = useRef(null)

    return (
      <Layout>
        <SEO title="What We Do" />
        <CentralLogo />
        <WwdHero 
          ref={heroRef}
          tl={heroTl}
          heroImg = {wwdPageContent.wwdHeroImage}
          heroCopy = {wwdPageContent._rawWwdHeroText}
        />
        <Marquee 
          style={{color: colors.FABlue}}
          textContent={wwdPageContent.wwdTickerTapeText}
          ref={marqueeRef}
        />
        <WwdSectionOne 
          ref={sectionOneRef} 
          tl={section2Tl} 
          text={wwdPageContent._rawWwdSectionOneText}
          image={wwdPageContent.wwdSectionOneImage}
        />
        <Marquee 
          style={{color: colors.FABlue}}
          textContent="our ethos. our ethos. our ethos. our ethos. our ethos. our ethos." 
          ref={marqueeRef}
        />
        <WwdSectionTwo 
          ref={sectionTwoRef} 
          tl={section2Tl}
          text={wwdPageContent._rawWwdSectionTwoText}
          image={wwdPageContent.wwdSectionTwoImage}
        />
        <WwdQuoteSection 
          ref={quoteSectionRef} 
          tl={quoteSection}
          quoteText={wwdPageContent.wwdPageQuote}
        />
        <WwdSectionThree 
          ref={sectionThreeRef} 
          tl={section3Tl} 
          text={wwdPageContent._rawWwdSectionThreeText}
          image={wwdPageContent.wwdSectionThreeImage}
        />
        <Marquee 
          style={{color: colors.FABlue}}
          textContent="Our Awards. Our Awards. Our Awards" 
          ref={marqueeRef}
        />
        <WwdAwardsSection 
          ref={sectionFourRef} 
          tl={section4Tl} 
          nodes={allAwardNodes} 
        />
        <WwdLogoCloud ref={sectionLogoCloudRef} />
      </Layout>
    );
  };

export default WhatWeDo