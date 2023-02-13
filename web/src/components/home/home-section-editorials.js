import React from "react";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { device } from "../../styles/mediaQueries";

const EditorialsTitleWrapper = styled.div` 
    width: 100%;
    padding: 1rem 1rem 0 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    
    @media ${device.mediaMinMedium} {
      flex-direction: row;
      align-items: center;
    }

    h1 {
      font-weight: normal;
      margin-bottom: 0.5rem;
      @media ${device.mediaMinMedium} {
        margin: 0;
      }
    }
    .view-all-editorials {
      text-decoration: none;
      font-size: 1.25rem;
      &:hover {
        text-decoration: underline;
      }
    } 
`

const EditorialsWrapper = styled.div` 
    display: flex;
    position: relative;
    padding: 0.5rem;
    flex-direction: column;

    @media ${device.mediaMinLarge} {
        flex-direction: row;
    }

    .editorials-link {
        text-decoration: none;
        color: black;
        max-height: 50vh;
        &:hover {
            background-color: ${colors.FABlue};
            color: white;
        }
    }

    .titleWrapper {
        width: 100%;
        flex: 1;
        @media ${device.mediaMinMedium} {
          flex: 0;
        }
        h3 {
          font-family: 'PolySansSlim';
          font-weight: normal;
          text-align: left;
        }
    }

    .titleWrapperRight {
      padding: 0 0.5rem;
      @media ${device.mediaMinMedium} {
        padding: 0.5rem 0;
      }
    }

    .editorials-left-col, 
    .editorials-right-col {
        @media ${device.mediaMinMedium} {
            flex: 1;
        }
    }

    .featured-editorial-link{
      flex: 1;
    }

    .editorials-left-col {
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0.5rem;
        .imgWrapper {
            flex: 1;
            width: 100%;
        }

        .titleWrapper h3 {
          padding: 1rem 0;
          @media ${device.mediaMinMedium} {
            padding: 1rem 0.5rem 0 0.5rem;
          }
        }
        @media ${device.mediaMinMedium} {
            height: 100vh;
            position: sticky;
            top: 0;
            justify-content: flex-start;
        }
    }

    .editorials-right-col {

    }

    .editorials-right-grid {
        display: grid;
        grid-template-columns: 1fr;
        @media ${device.mediaMinMedium} {
            grid-template-columns: 1fr 1fr;
        }

        .post {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            height: auto;
            padding: 0.5rem 0.5rem 0.5rem 0.5rem;
            flex-direction: row;
            height: 100%;
            .imgWrapper {
                flex: 1;
            }
            @media ${device.mediaMinMedium} {
                /* height: 450px; */
                flex-direction: column;
                align-items: center;
                padding: 0.5rem 0.5rem 0 0.5rem;
            }
        }
    }
`

const Editorials = ({editorialNodes, featuredEditorial, homeEditorials}) => {
    return (
      <>
        <EditorialsTitleWrapper>
          <h1>Our Editorials</h1>
          <Link to="/editorials/" className="view-all-editorials">
            View all Editorials
          </Link>
        </EditorialsTitleWrapper>
        <EditorialsWrapper className="editorials-wrapper">
          <Link to={`/editorial/${featuredEditorial.slug.current}`} className="featured-editorial-link">
            <div className="editorials-left-col">
                {featuredEditorial?.heroImage?.asset?.gatsbyImageData && 
                  <GatsbyImage
                    image={featuredEditorial?.heroImage?.asset?.gatsbyImageData}
                    alt="Smiling people"
                    placeholder="blurred"
                    objectFit="cover"
                    className="imgWrapper"
                  />
                }
                <div className="titleWrapper">
                  <h3>Unearthed with Kew Gardens launches, exploring the relationship with food production and how it's made</h3>
                </div>
              </div>
          </Link>
          <div className="editorials-right-col">
            <div className="editorials-right-grid">
              {editorialNodes && 
                editorialNodes.map(node => (
                  <Link to={`/editorial/${node.slug.current}`} className="editorials-link" key={node.id}>
                    <div className="post">
                      <GatsbyImage
                        image={node.previewImage.asset.gatsbyImageData}
                        alt={node.previewImage.alt}
                        placeholder="blurred"
                        objectFit="cover"
                        className="imgWrapper"
                      />
                      <div className="titleWrapper titleWrapperRight">
                        <h3>{node.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </EditorialsWrapper>
      </>
    )
}

export default Editorials