import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { device } from "../../styles/mediaQueries";
import FeaturedPodcastPreview from "./featured-podcast-preview";

const FeaturedPodcasts = styled.ul` 
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
    @media ${device.mediaMinMedium} {
        flex-direction: row;
    }
    li {
        flex: 1;
        h3 {
            background-color: ${colors.FABlue};
            padding: 1rem;
            color: white;
        }
        .MuiAccordionDetails-root p {
            margin-bottom: 1rem;
            line-height: initial;
        }

        .wwaSectionImg {
            max-height: 420px;
        }
    }
`

const FeaturedPodcastGrid = ({nodes}) => {
  return (
    <FeaturedPodcasts>
      {nodes && 
        nodes.map(node => (
          <li key={node.id}>
            <FeaturedPodcastPreview node={node} />
          </li>
        ))
      }
    </FeaturedPodcasts>
  )
}

export default FeaturedPodcastGrid