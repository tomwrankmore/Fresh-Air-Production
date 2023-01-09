import React, {useRef} from "react";
import { colors } from "../../styles/colors";
import { device } from "../../styles/mediaQueries";
import styled from "styled-components";
import {
  PodcastHero, 
  PodcastIconsSection, 
  PodcastDescriptionSection, 
  PodcastQuoteSection, 
  PodcastImgSection, 
  PodcastEpisodesSection, 
  PodcastRelatedSection
} from "./"
import QuoteSection from "../quote-section";
import Marquee from "../marquee"

const PodcastWrapper = styled.div`
    padding: 120px 0 0;
    @media ${device.mediaMinLarge} {
      padding: 0;
    }
`

const Podcast = ({podcast}) => {

  // Section refs
  const heroRef = useRef(null)
  const marqueeRef = useRef(null)

  // Timeline refs
  const heroTl = useRef(null)

    return (
      <PodcastWrapper>
        <PodcastHero 
          ref={heroRef} 
          tl={heroTl} 
          podcast={podcast}
          />
        <Marquee 
          style={{color: colors.FABlue}}
          textContent="Available to listen to now. Available to listen to now. Available to listen to now." 
          ref={marqueeRef}
        />
        <PodcastIconsSection
          podcast={podcast}
        />
        <PodcastDescriptionSection
          podcast={podcast}
        />
        <QuoteSection 
          podcast={podcast}
          text="“We make work that we're proud of, and we work with people we like.”" color="blue" 
        />
        <PodcastImgSection
          podcast={podcast}
        />
        <PodcastEpisodesSection 
          podcast={podcast}
        />
        <PodcastRelatedSection 
          podcast={podcast}
        />
      </PodcastWrapper>
    )
}

export default Podcast