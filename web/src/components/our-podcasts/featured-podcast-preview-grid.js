import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { device } from "../../styles/mediaQueries";
import FeaturedPodcastPreview from "./featured-podcast-preview";

const FeaturedPodcasts = styled.ul` 
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 0.75rem;
    @media ${device.mediaMinSmall} {
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem 4px;
    }
    @media ${device.mediaMinMedium} {
      grid-template-columns: 1fr 1fr 1fr;
    }
    h3 {
      background-color: ${colors.FABlue};
      padding: 1rem;
      color: white;
    }
    li {
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