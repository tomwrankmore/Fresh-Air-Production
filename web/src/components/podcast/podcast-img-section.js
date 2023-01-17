import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const PodcastImgSectionWrapper = styled.div` 
  padding: 0;
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