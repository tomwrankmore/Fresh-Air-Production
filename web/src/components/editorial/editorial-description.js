import React, {useLayoutEffect, useRef} from "react";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";
import BlockContent from "../block-content";

const EditorialDescriptionWrapper = styled.div` 
  text-align: center;
  padding: 0 1rem 1rem 1rem;
  @media ${device.mediaMinMedium} {
    padding: 4rem 2rem;
  }
  p {
    max-width: 75%;
    margin: 0 auto;
    padding-bottom: 1rem;
    max-width: 100%;
    line-height: 1.6rem;
    font-size: 1.2rem;
    @media ${device.mediaMinMedium} {
      max-width: 75%;
    }
  }
`

const EditorialDescriptionSection = React.forwardRef(({tl, bodyText}, ref) => {
    return (
      <EditorialDescriptionWrapper>
        <BlockContent blocks={bodyText} />
      </EditorialDescriptionWrapper>
    )
  }
)

export default EditorialDescriptionSection