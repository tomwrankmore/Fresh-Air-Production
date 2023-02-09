import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {SectionWrapper, Column} from "./editorial.styled"
import BlockContent from "../block-content";

const EditorialSectionOne = React.forwardRef(({image, text}, ref) => {
    return (
      <SectionWrapper>
        {!!text &&
          <Column className="text">
            <BlockContent blocks={text} />
          </Column>
        }
        
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
      </SectionWrapper>
    )
})

export default EditorialSectionOne;