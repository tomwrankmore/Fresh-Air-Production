import React, {useRef} from "react";
import { graphql, Link } from "gatsby";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries";
import styled from "styled-components";
import CentralLogo from "../components/central-logo"
import GraphQLErrorList from "../components/graphql-error-list";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import {
  PodcastHero, 
  PodcastIconsSection, 
  PodcastDescriptionSection, 
  PodcastQuoteSection, 
  PodcastImgSection, 
  PodcastEpisodesSection, 
  PodcastRelatedSection
} from "../components/podcast/"
import QuoteSection from "../components/quote-section";
import Marquee from "../components/marquee"

const PodcastWrapper = styled.div`
    padding: 120px 0 0;
    @media ${device.mediaMinLarge} {
      padding: 0;
    }
`

const Podcast = () => {

  // Section refs
  const heroRef = useRef(null)
  const marqueeRef = useRef(null)

  // Timeline refs
  const heroTl = useRef(null)



    return (
        <Layout>
            <SEO title="Podcast" />
            <CentralLogo />
            <PodcastWrapper>
              <PodcastHero ref={heroRef} tl={heroTl} />
              <Marquee 
                style={{color: colors.FABlue}}
                textContent="Available to listen to now. Available to listen to now. Available to listen to now." 
                ref={marqueeRef}
              />
              <PodcastIconsSection />
              <PodcastDescriptionSection />
              <QuoteSection text="“We make work that we're proud of, and we work with people we like.”" color="blue" />
              <PodcastImgSection />
              <PodcastEpisodesSection />
              <PodcastRelatedSection />
            </PodcastWrapper>
        </Layout>
    )
}

export default Podcast