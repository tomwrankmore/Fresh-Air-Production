import React, {useLayoutEffect, useRef} from "react";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";
import BlockContent from "../block-content";

const PodcastDescriptionWrapper = styled.div` 
  text-align: center;
  padding: 0 1rem 1rem 1rem;
  @media ${device.mediaMinMedium} {
    padding: 0 2rem 2rem 2rem;
  }
  p {
    max-width: 75%;
    margin: 0 auto;
    padding-bottom: 1rem;
    line-height: 1.6rem;
    font-size: 1.2rem;
    max-width: 100%;
    @media ${device.mediaMinMedium} {
      max-width: 75%;
    }
  }
`

const PodcastDescriptionSection = React.forwardRef(({tl, podcast}, ref) => {
    return (
      <PodcastDescriptionWrapper>
        {podcast._rawBody && <BlockContent blocks={podcast._rawBody || []} />}
      </PodcastDescriptionWrapper>
    )
  }
)

export default PodcastDescriptionSection