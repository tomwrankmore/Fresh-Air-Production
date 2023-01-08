import React, {useLayoutEffect, useRef} from "react";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";

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

const EditorialDescriptionSection = React.forwardRef(({tl}, ref) => {
    return (
      <EditorialDescriptionWrapper>
        <p>You know Peter Parker got bitten by a radioactive spider and that was how he became Spiderman, but what about the origin stories of real-life superheroes?</p>
        <p>Amber Rose-Gill has got you covered with inspiring stories from ordinary people who do extraordinary things with a little help from The National Lottery. Like young activists working towards ending female genital mutilation, a songwriter determine to reframe grief, a woman on a mission to uncover hidden histories and more.</p> 
        <p>Follow and subscribe to Amazing Starts Here for a break from your regular podcasts and follow us on instagram for a FOMO free experience @nationallotterygoodcauses.</p>
      </EditorialDescriptionWrapper>
    )
  }
)

export default EditorialDescriptionSection