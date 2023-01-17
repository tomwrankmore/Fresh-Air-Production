import React, {useEffect} from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries";
import styled from "styled-components";
import { mapEdgesToNodes } from "../lib/helpers";
import CentralLogo from "../components/central-logo"
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
          isFeaturedPost
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
    padding: 120px 0 0;
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
                }
            }
        }
        /* &.featured-post-left {
            grid-column: 1/3;
        }
        &.featured-post-right {
            grid-column: 3/5;
        } */
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
            padding: 0.5rem 0.5rem 0 0.5rem;
            flex-direction: column;
            max-height: 50vh;
            .imgWrapper {
                flex: 1;
                /* max-height: 400px; */
            }
            @media ${device.mediaMinMedium} {
                /* height: 450px; */
                flex-direction: column;
                align-items: center;
            }
        }
    }

    .titleWrapper {
        width: 100%;
        padding: 0 0.5rem;
        h3 {
          font-family: 'PolySansSlim';
          font-weight: normal;
          text-transform: uppercase;
          text-align: left;
          padding: 0.875rem 0rem;
          /* @media ${device.mediaMinMedium} {
              padding: 0.875rem 0rem;
          } */
        }
    }
`



const Editorials = ({data}) => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [data])

  const editorialNodes = data && data.editorials && mapEdgesToNodes(data.editorials);

    return (
        <Layout>
          <SEO title="Our Podcasts" />
          <CentralLogo />
          <EditorialsWrapper>
            <EditorialsGrid>
              {editorialNodes && 
                editorialNodes.map(node => (
                  <Link 
                    to={`/editorial/${node.slug.current}`} className={
                    node.isFeaturedPost ? "editorials-link featured-post" : "editorials-link"
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
                        aspectRatio= "1:1"
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