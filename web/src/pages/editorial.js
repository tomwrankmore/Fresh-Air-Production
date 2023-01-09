import React, {useRef} from "react";
import { device } from "../styles/mediaQueries";
import styled from "styled-components";
import CentralLogo from "../components/central-logo"
import SEO from "../components/seo";
import Layout from "../containers/layout";
import QuoteSection from "../components/quote-section";

import {
  EditorialHero,
  EditorialDescriptionSection,
  EditorialSectionOne,
  EditorialSectionTwo,
  EditorialImgSection,
  EditorialsRelated
} from "../components/editorial"

const EditorialWrapper = styled.div`
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
            <SEO title="Editorial" />
            <CentralLogo />
            <EditorialWrapper>
              <EditorialHero ref={heroRef} tl={heroTl}/>
              <EditorialDescriptionSection/>
              <QuoteSection text="“We make work that we're proud of, and we work with people we like.”" color='green' />
              <EditorialSectionOne />
              <EditorialImgSection />
              <EditorialSectionTwo />
              <EditorialsRelated />
            </EditorialWrapper>
        </Layout>
    )
}

export default Podcast