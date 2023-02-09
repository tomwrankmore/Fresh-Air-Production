import React, {useLayoutEffect, useRef} from "react";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";
import BlockContent from "../block-content";

const EditorialDescriptionWrapper = styled.div` 
  padding: 2rem 1rem;
  @media ${device.mediaMinMedium} {
    padding: 4rem 2rem;
    max-width: 75%;
    margin: 0 auto;
  }
  p {
    padding-bottom: 1rem;
    line-height: 1.6rem;
    font-size: 1.2rem;
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