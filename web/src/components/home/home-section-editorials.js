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
    align-items: center;
    justify-content: space-between;
    h1 {
        font-weight: normal;
    }
`

const EditorialsWrapper = styled.div` 
    display: flex;
    position: relative;
    padding: 0.5rem;
    flex-direction: column;

    @media ${device.mediaMinMedium} {
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
        padding: 0 0.5rem;
        flex: 0;
        h3 {
            font-family: 'Polysans';
            font-weight: normal;
            text-transform: uppercase;
            text-align: left;
            padding: 0 0rem 0.875rem 0rem;
            @media ${device.mediaMinMedium} {
                padding: 0.875rem 0rem;
            }
        }
    }

    .editorials-left-col, 
    .editorials-right-col {
        @media ${device.mediaMinMedium} {
            flex: 1;
        }
    }

    .editorials-left-col {
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0.5rem;
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
            padding: 0.5rem 0.5rem 0 0.5rem;
            flex-direction: row;
            height: 100%;
            .imgWrapper {
                flex: 1;
            }
            @media ${device.mediaMinMedium} {
                /* height: 450px; */
                flex-direction: column;
                align-items: center;
            }
        }
    }
`

const Editorials = ({editorialNodes}) => {
    return (
        <>
            <EditorialsTitleWrapper>
                <h1>Editorials</h1>
                <p>View all Editorials</p>
                
            </EditorialsTitleWrapper>
            <EditorialsWrapper className="editorials-wrapper">
                <div className="editorials-left-col">
                  <StaticImage
                    src="../../assets/blog1.png"
                    alt="Smiling people"
                    placeholder="blurred"
                    objectFit="cover"
                    className="imgWrapper"
                  />
                  <div className="titleWrapper">
                    <h3>Unearthed with Kew Gardens launches, exploring the relationship with food production and how it's made</h3>
                  </div>
                  
                </div>
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
                            <div className="titleWrapper">
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