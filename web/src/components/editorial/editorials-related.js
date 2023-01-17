import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { device } from "../../styles/mediaQueries";
import { Link } from "gatsby";

const RelatedEditorialsWrapper = styled.div`
    padding: 1rem 1.5rem;
`

const RelatedEditorialsGrid = styled.div` 
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    @media ${device.mediaMinMedium} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .editorials-link {
        text-decoration: none;
        color: black;
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
            flex-direction: row;
            max-height: 50vh;
            .imgWrapper {
                flex: 1;
            }
            @media ${device.mediaMinMedium} {
                flex-direction: column;
                align-items: center;
            }
        }
    }

    .titleWrapper {
        width: 100%;
        padding: 0 0.5rem;
        flex: 1;
        h3 {
            font-family: 'PolySansSlim';
            font-weight: normal;
            text-transform: uppercase;
            text-align: left;
            padding: 0 0rem 0.875rem 0rem;
            @media ${device.mediaMinMedium} {
                padding: 0.875rem 0rem;
            }
        }
    }
`

const EditorialsRelated = ({relatedPosts}) => { 
  return (
      <RelatedEditorialsWrapper>
        <RelatedEditorialsGrid>
        {relatedPosts && 
          relatedPosts.map(node => (
            <Link to="/" className="editorials-link" key={node._id}>
              <div className="post">
                <GatsbyImage
                    image={node.previewImage.asset.gatsbyImageData}
                    alt="Smiling people"
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
        </RelatedEditorialsGrid>
      </RelatedEditorialsWrapper>
  )
}

export default EditorialsRelated