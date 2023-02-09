import React, {useLayoutEffect, useRef} from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";

const EditorialImgSectionWrapper = styled.div` 
  padding: 0;
`

const EditorialImgSection = ({image}) => {
  return (
    <EditorialImgSectionWrapper>
      <GatsbyImage
        image={image}
        alt={image.alt}
        placeholder="blurred"
        layout="fullWidth"
        objectPosition="0 0"
        className="wwdSectionImg"
        imgClassName=''
      />
    </EditorialImgSectionWrapper>
  )
}

export default EditorialImgSection