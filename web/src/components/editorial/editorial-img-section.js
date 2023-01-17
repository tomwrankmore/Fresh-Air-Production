import React, {useLayoutEffect, useRef} from "react";
import { StaticImage } from "gatsby-plugin-image";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";

const EditorialImgSectionWrapper = styled.div` 
  padding: 0;
`

const EditorialImgSection = React.forwardRef((props, ref) => {
  return (
    <EditorialImgSectionWrapper>
      <StaticImage
        src="../../assets/podcast-img-holder.png"
        alt="Podcast image"
        placeholder="blurred"
        objectFit="cover"
        className="imgWrapper"
      />
    </EditorialImgSectionWrapper>
  )
}
)

export default EditorialImgSection