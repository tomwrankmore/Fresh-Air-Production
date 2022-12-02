import React from "react";
import styled from "styled-components";
import { device } from "../styles/media-queries"

const StyledContainer = styled.div` 
  box-sizing: border-box;
  /* max-width: 960px; */
  /* padding: 1.5em; */
  margin: 0 auto;

  @media ${device.mediaMinSmall} {
    /* padding: 2em; */
  }
`

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
