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

  console.log('editorial.sectionOneImage', editorial.sectionOneImage)

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
          color='green' 
          quote={editorial.quote}
        />
        <EditorialSectionOne 
          image={editorial.sectionOneImage}
          text={editorial._rawSectionOneText}

        />
        <EditorialImgSection
          image={editorial.mainImage} 
        />
        <EditorialSectionTwo 
          image={editorial.sectionTwoImage}
          text={editorial._rawSectionTwoText}
        />
        <EditorialsRelated 
          realatedPosts={editorial.relatedProjects} 
        />
      </EditorialWrapper>
    )
}

export default Editorial