import React, {useRef} from "react";
import { colors } from "../styles/colors";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import CentralLogo from "../components/central-logo"
import Marquee from "../components/marquee"

import {
    WwdHero, 
    WwdSectionOne, 
    WwdSectionTwo, 
    WwdSectionThree, 
    WwdSectionFour, 
    WwdLogoCloud, 
    WwdQuoteSection 
} from "../components/what-we-do/"

const WhatWeDo = props => {

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
        <WwdSectionFour ref={sectionFourRef} tl={section4Tl} />
        <WwdLogoCloud ref={sectionLogoCloudRef} />
      </Layout>
    );
  };

export default WhatWeDo