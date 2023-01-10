import React, {useRef} from "react";
import { device } from "../../styles/mediaQueries";
import styled from "styled-components";
import QuoteSection from "../quote-section";

import {
  EditorialHero,
  EditorialDescriptionSection,
  EditorialSectionOne,
  EditorialSectionTwo,
  EditorialImgSection,
  EditorialsRelated
} from "."

const EditorialWrapper = styled.div`
    padding: 120px 0 0;
    @media ${device.mediaMinLarge} {
      padding: 0;
    }
`

const Editorial = ({editorial}) => {

  // Section refs
  const heroRef = useRef(null)
  const marqueeRef = useRef(null)

  // Timeline refs
  const heroTl = useRef(null)

    return (
      <EditorialWrapper>
        <EditorialHero 
          ref={heroRef} 
          tl={heroTl}
          heroImg={editorial.heroImage.asset.gatsbyImageData}
          title={editorial.title}
          subTitle={editorial.subTitle}
        />
        <EditorialDescriptionSection
          bodyText={editorial._rawBody}
        />
        <QuoteSection 
          text="“We make work that we're proud of, and we work with people we like.”" 
          color='green' 
          editorial={editorial}
        />
        <EditorialSectionOne 
          editorial={editorial}
        />
        <EditorialImgSection
          editorial={editorial} 
        />
        <EditorialSectionTwo 
          editorial={editorial} 
        />
        <EditorialsRelated 
          editorial={editorial} 
        />
      </EditorialWrapper>
    )
}

export default Editorial