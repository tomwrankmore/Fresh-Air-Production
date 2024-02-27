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
  EditorialsRelated,
  EditorialOmnySection
} from "./"

const EditorialWrapper = styled.div`
    a {
      color: black;
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
          isLeftAlignedHeroImg={editorial.isLeftAlignedHeroImg}
          heroBGColor={editorial.heroBGColor}
        />

        {!!editorial?.omnyWidget &&
          <EditorialOmnySection editorial={editorial}  />
        }

        {!!editorial?._rawBody &&
          <EditorialDescriptionSection
            bodyText={editorial._rawBody}
          />
        }

        {!!editorial?.quote &&
          <QuoteSection 
            color='green' 
            quote={editorial.quote}
          />
        }
        
        {!!editorial?._rawSectionOneText &&
          <EditorialSectionOne 
            image={editorial.sectionOneImage}
            text={editorial._rawSectionOneText}
          />
        }

        {!!editorial?.mainImage?.asset?.gatsbyImageData &&
          <EditorialImgSection
            image={editorial.mainImage} 
          />
        }

        {!!editorial?._rawSectionTwoText &&
          <EditorialSectionTwo 
            image={editorial.sectionTwoImage}
            text={editorial._rawSectionTwoText}
          />
        }

        {!!editorial?.relatedProjects &&
          <EditorialsRelated relatedPosts={editorial.relatedProjects} /> 
        }
        
      </EditorialWrapper>
    )
}

export default Editorial