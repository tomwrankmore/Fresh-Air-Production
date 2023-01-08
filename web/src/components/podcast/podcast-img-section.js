import React, {useLayoutEffect, useRef} from "react";
import { StaticImage } from "gatsby-plugin-image";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";

const PodcastImgSectionWrapper = styled.div` 
  padding: 2rem 0 0 0;
`

const PodcastImgSection = React.forwardRef((props, ref) => {
  return (
    <PodcastImgSectionWrapper>
      <StaticImage
          src="../../assets/podcast-img-holder.png"
          alt="Podcast image"
          placeholder="blurred"
          objectFit="cover"
          className="imgWrapper"
      />
    </PodcastImgSectionWrapper>
  )
}
)

export default PodcastImgSection