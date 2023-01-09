import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { device } from "../../styles/mediaQueries";

import PodcastPreview from "./podcast-preview";

const StyledPodcastGrid = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
gap: 4px;
h3 {
    background-color: ${colors.FABlue};
    padding: 1rem;
    color: white;
}
`

const PodcastGrid = (props) => {
  return (
    <StyledPodcastGrid>
      <PodcastPreview/>
      <PodcastPreview/>
      <PodcastPreview/>
      <PodcastPreview/>
    </StyledPodcastGrid>
  )
}

export default PodcastGrid