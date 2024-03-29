import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {SectionWrapper, Column} from "./editorial.styled"
import BlockContent from "../block-content";

const EditorialSectionTwo = ({image, text}) => {
  return (
    <SectionWrapper>
      {!!image?.asset?.gatsbyImageData &&
        <Column className="clipped">
          <GatsbyImage
              image={image.asset.gatsbyImageData}
              alt={image.alt}
              placeholder="blurred"
              layout="fullWidth"
              objectPosition="0 0"
              className="wwdSectionImg"
              imgClassName=''
          />
        </Column>
      }
      <Column className="text">
        <BlockContent blocks={text} />
      </Column>
    </SectionWrapper>
  )
}

export default EditorialSectionTwo;