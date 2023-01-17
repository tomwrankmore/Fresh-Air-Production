import React, {useRef, useEffect} from "react";
import { colors } from "../styles/colors";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
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
} from "../components/what-we-do/"

export const query = graphql`
  query WhatWedoPageQuery {
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

  useEffect(() => {
    window.scrollTo(0,0)
  }, [data])

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
        <WwdHero ref={heroRef} tl={heroTl}/>
        <Marquee 
          style={{color: colors.FABlue}}
          textContent="podcasting is a booming medium. podcasting is a booming medium. podcasting is a booming medium." 
          ref={marqueeRef}
        />
        <WwdSectionOne ref={sectionOneRef} tl={section2Tl} />
        <Marquee 
          style={{color: colors.FABlue}}
          textContent="podcasting is a booming medium. podcasting is a booming medium. podcasting is a booming medium." 
          ref={marqueeRef}
        />
        <WwdSectionTwo ref={sectionTwoRef} tl={section2Tl}/>
        <WwdQuoteSection ref={quoteSectionRef} tl={quoteSection}/>
        <WwdSectionThree ref={sectionThreeRef} tl={section3Tl} />
        <Marquee 
          style={{color: colors.FABlue}}
          textContent="Our Awards. Our Awards. Our Awards" 
          ref={marqueeRef}
        />
        <WwdAwardsSection ref={sectionFourRef} tl={section4Tl} nodes={allAwardNodes} />
        <WwdLogoCloud ref={sectionLogoCloudRef} />
      </Layout>
    );
  };

export default WhatWeDo