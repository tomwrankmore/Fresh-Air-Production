import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { device } from "../../styles/mediaQueries"
import PodcastPreview from "./podcast-preview";

const StyledPodcastGrid = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
  grid-template-columns: 1fr;
  @media ${device.mediaMinSmall} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.mediaMinMedium} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  gap: 4px;
  h3 {
    background-color: ${colors.FABlue};
    padding: 1rem;
    color: white;
  }
`

const PodcastGrid = ({nodes}) => {
  return (
    <StyledPodcastGrid>
      {nodes &&
        nodes.map(node => (
          <li key={node.id}>
            <PodcastPreview node={node}/>
          </li>
        ))
      }
    </StyledPodcastGrid>
  )
}

export default PodcastGrid