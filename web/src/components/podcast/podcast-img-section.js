import React, {useLayoutEffect, useRef} from "react";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";

const PodcastImgSectionWrapper = styled.div` 
  padding: 2rem 0 0 0;
`

const PodcastImgSection = React.forwardRef(({podcast}, ref) => {
  return (
    <PodcastImgSectionWrapper>
      <GatsbyImage
          image={podcast.mainImage.asset.gatsbyImageData}
          alt={podcast.mainImage.alt}
          placeholder="blurred"
          objectFit="cover"
          className="imgWrapper"
      />
    </PodcastImgSectionWrapper>
  )
}
)

export default PodcastImgSection