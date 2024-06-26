import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries";
import styled from "styled-components";
import { mapEdgesToNodes } from "../lib/helpers";
import CentralLogo from "../components/central-logo-old"
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query EditorialsQuery {
    editorials: allSanityEditorial(
      sort: {publishedAt: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          slug {
            current
          }
          title
          publishedAt
          previewImage {
            alt
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

const EditorialsWrapper = styled.div`
    padding: 0 0 0;
`

const EditorialsGrid = styled.div` 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    @media ${device.mediaMinMedium} {
      grid-template-columns: 1fr 1fr
    }

    @media ${device.mediaMinLarge} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .editorials-link {
        text-decoration: none;
        color: black;
        display: flex;
        @media ${device.mediaMinMedium} {
          &.featured-post {
            grid-row: span 2;
            grid-column: span 2;
            max-height: 100vh;
            height: 100%;
            .post {
              max-height: 100%;
              width: 100%;
            }
          }
        }
        &:hover {
          background-color: ${colors.FABlue};
          color: white;
        }

        .post {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            height: auto;
            padding: 0.5rem 0.5rem 0.5rem 0.5rem;
            flex-direction: column;
            max-height: 50vh;
            @media ${device.mediaMaxMedium} {
              width: 100%;
            }
            .imgWrapper {
              flex: 1;
              width: 100%;
              /* aspect-ratio: 1/1; */
            }
            @media ${device.mediaMinMedium} {
                /* height: 450px; */
                flex-direction: column;
                align-items: center;
                padding: 0.5rem 0.5rem 0 0.5rem;
            }
        }
    }

    .titleWrapper {
        width: 100%;
        padding: 0 0.5rem;
        h3 {
          font-family: 'PolySansSlim';
          font-weight: normal;
          text-align: left;
          padding: 0.875rem 0rem;
        }
    }
`

const Editorials = ({data}) => {

  const editorialNodes = data && data.editorials && mapEdgesToNodes(data.editorials);
  // const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
  // const newboy = every_nth(editorialNodes, 9)

    return (
        <Layout>
          <SEO title="Editorials" />
          <CentralLogo />
          <EditorialsWrapper>
            <EditorialsGrid>
              {editorialNodes && 
                editorialNodes.map((node, index) => (
                  <Link 
                    to={`/editorial/${node.slug.current}`} className={
                    index === 0 || index === 7 || index === 10 ? "editorials-link featured-post" : "editorials-link"
                    }
                    key={node.id}
                  >
                    <div className="post">
                      <GatsbyImage
                        image={node.previewImage.asset.gatsbyImageData}
                        alt={node.previewImage.alt}
                        placeholder="blurred"
                        objectFit="cover"
                        className="imgWrapper"
                      />
                      <div className="titleWrapper">
                        <h3>{node.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </EditorialsGrid>
          </EditorialsWrapper>
        </Layout>
    )
}

export default Editorials