import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { device } from "../../styles/mediaQueries"
import PodcastPreview from "./podcast-preview";

const StyledPodcastGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media ${device.mediaMinSmall} {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem 4px;
  }
  @media ${device.mediaMinMedium} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
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