import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries"

const StyledCTA = styled.div` 
  background-color: ${colors.FAGrey};
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 200;
  width: 100%;
  height: 3rem;
  @media ${device.mediaMinMedium} {
    right: 5rem;
    bottom: 5rem;
    width: 120px;
    height: 120px;
    right: 1rem;
    bottom: 1rem;
    border-radius: 50%;
  }
  p {
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.25rem;
  }
`

const HeroCta = React.forwardRef((props, ref) => {
  return (
    <StyledCTA ref={ref}>
        <p>Get in touch</p>
    </StyledCTA>
  );
}
);

export default HeroCta;
