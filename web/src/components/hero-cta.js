import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries"

const StyledCTA = styled.div` 
  background-color: ${colors.FAGrey};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  z-index: 200;
  width: 120px;
  height: 120px;
  /* transform: rotate(10deg); */
  p {
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.25rem;
  }

  @media ${device.mediaMinSmall} {
    /* padding: 2em; */
  }
`

const HeroCta = (props) => {
  return (
    <StyledCTA>
        <p>Get in<br/>touch</p>
    </StyledCTA>
    );
};

export default HeroCta;
