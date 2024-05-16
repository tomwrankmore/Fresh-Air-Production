import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { device } from "../styles/mediaQueries";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import BlockContent from "../components/block-content";
import CentralLogo from "../components/central-logo"

export const query = graphql`
  query ModernSlaveryStatementQuery {
    terms: sanityModernSlaveryStatement {
      title
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
  h1 {
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

const ModernSlaveryStatementPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Modern Slavery Statement" />
      <CentralLogo />
      <TermsWrapper>
        <h1>{data.terms.title}</h1>
        <BlockContent blocks={data.terms._rawBody} />
      </TermsWrapper>
    </Layout>
  )};

export default ModernSlaveryStatementPage;
