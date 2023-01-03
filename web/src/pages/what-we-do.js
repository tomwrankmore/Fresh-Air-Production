import React, {useRef} from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";
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
    const sectionOneRef = useRef(null)
    const sectionTwoRef = useRef(null)
    const sectionThreeRef = useRef(null)
    const sectionFourRef = useRef(null)
    const quoteSectionRef = useRef(null)
    const sectionLogoCloudRef = useRef(null)

    const { data, errors } = props;
    if (errors) {
      return (
        <Layout>
          <GraphQLErrorList errors={errors} />
        </Layout>
      );
    }
    const projectNodes =
      data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs);
    return (
      <Layout>
        <SEO title="Archive" />
        <WwdHero ref={heroRef}/>
        <WwdSectionOne ref={sectionOneRef} />
        <WwdSectionTwo ref={sectionTwoRef} />
        <WwdQuoteSection ref={quoteSectionRef} />
        <WwdSectionThree ref={sectionThreeRef} />
        <WwdSectionFour ref={sectionFourRef} />
        <WwdLogoCloud ref={sectionLogoCloudRef} />
      </Layout>
    );
  };

export default WhatWeDo