import React, {useRef} from "react";
import { device } from "../../styles/mediaQueries";
import styled from "styled-components";
import CentralLogo from "../central-logo"
import SEO from "../seo";
import Layout from "../../containers/layout";
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

const Editorial = () => {

  // Section refs
  const heroRef = useRef(null)
  const marqueeRef = useRef(null)

  // Timeline refs
  const heroTl = useRef(null)

    return (
      <EditorialWrapper>
        <EditorialHero ref={heroRef} tl={heroTl}/>
        <EditorialDescriptionSection/>
        <QuoteSection text="“We make work that we're proud of, and we work with people we like.”" color='green' />
        <EditorialSectionOne />
        <EditorialImgSection />
        <EditorialSectionTwo />
        <EditorialsRelated />
      </EditorialWrapper>
    )
}

export default Editorial