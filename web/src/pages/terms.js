import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries";
import { Link } from "gatsby";
import BlockContent from "../components/block-content";
import CentralLogo from "../components/central-logo"
import {
  mapEdgesToNodes,
} from "../lib/helpers";

export const query = graphql`
  query EditorialsQuery {
    terms: sanityTerms {
      _rawBody
    }
  }
`;

const TermsWrapper = styled.div` 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 200px 1rem 1rem;
  flex-direction: column;
  margin: 0 auto;
  @media ${device.mediaMinMedium} {
    width: 75%;
  }
  h3 {
    margin-bottom: 2rem;
    font-size: 1.875rem;
    line-height: normal;
  }
  h4 {
    margin: 1rem 0 0.5rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.25rem;
  }
  a {
    text-decoration: none;
    &:hover {text-decoration: underline}
  }
  ul {
    list-style: disc;
    padding-left: 1.875rem;
    margin-bottom: 1rem;
    line-height: 1.25rem;
  }
`

const TermsPage = ({data}) => {
  // const termsNodes = data && data.terms && mapEdgesToNodes(data.terms);
  console.log('terms data: ', data.terms)
  return (
    <Layout>
      <SEO title="404: Not found" />
      <CentralLogo />
      <TermsWrapper>
        <BlockContent blocks={data.terms._rawBody} />
      </TermsWrapper>
    </Layout>
  )};

export default TermsPage;
