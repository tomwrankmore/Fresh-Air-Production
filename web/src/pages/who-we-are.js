import React from "react";
import { graphql } from "gatsby";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries";
import styled from "styled-components";
import { mapEdgesToNodes } from "../lib/helpers";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import CentralLogo from "../components/central-logo"

import ManagementItem from '../components/who-we-are/management-item'
import StaffItem from '../components/who-we-are/staff-member-item'

export const query = graphql`
  query WhoWeArePageQuery {
    management: allSanityManagementMember {
      edges {
        node {
          name
          title
          id
          _rawBio
          image {
            asset {
              gatsbyImageData
              title
            }
          }
        }
      }
    }
    staffMembers: allSanityStaffMember(
      sort: {publishedAt: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          name
          title
          id
          _rawBio
          publishedAt
          image {
            asset {
              gatsbyImageData
            }
          }
          
        }
      }
    }
  }
`;

const WhoWeAreWrapper = styled.div` 
    padding: 120px 2rem 2rem;
    position: relative;
    /* .css-6bxxch-MuiPaper-root-MuiAccordion-root.Mui-expanded,
    .css-o4b71y-MuiAccordionSummary-content.Mui-expanded {
        margin: 0 !important;
    }
    .css-14ihzw6-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
        min-height: 48px;
    } */
`

const Directors = styled.ul` 
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 0.75rem;
    @media ${device.mediaMinMedium} {
        flex-direction: row;
        gap: 4px;
    }
    /* padding: 120px 2rem 0 2rem */
    li {
        flex: 1;
        h3 {
            background-color: ${colors.FABlue};
            padding: 1rem;
            color: white;
        }
        .MuiAccordionDetails-root p {
            margin-bottom: 1rem;
            line-height: 1.35rem;
        }

        .wwaSectionImg {
            max-height: 420px;
        }
    }
`

const StaffGrid = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media ${device.mediaMinSmall} {
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem 4px;
    }
    @media ${device.mediaMinLarge} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
    h3 {
        background-color: ${colors.FABlue};
        padding: 1rem;
        color: white;
    }
`

const WhoWeAre = (props) => {

  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const managementNodes = data && data.management && mapEdgesToNodes(data.management);
  const staffNodes = data && data.staffMembers && mapEdgesToNodes(data.staffMembers);

    return (
        <Layout>
            <SEO title="Who We Are" />
            <CentralLogo />
            <WhoWeAreWrapper>
                <Directors>
                  {managementNodes && 
                    managementNodes.map(node => (
                      <ManagementItem manager={node} key={node.id}/>
                    ))
                  }
                </Directors>
                <StaffGrid>
                  {staffNodes && 
                    staffNodes.map(node => (
                      <StaffItem staffMember={node} key={node.id}/>
                    ))
                  }
                </StaffGrid>
            </WhoWeAreWrapper>
        </Layout>
    )
}

export default WhoWeAre;