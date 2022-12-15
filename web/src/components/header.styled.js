import styled from "styled-components";
import { device } from "../styles/mediaQueries";
import { colors } from "../styles/colors";

export const Wrapper = styled.div` 
  margin: 0 auto;
  /* max-width: 960px; */
  padding: 1em;
  display: flex;

  @media ${device.mediaMinSmall} {
    padding: 1.5em 1.5em;
  }
`

export const Nav = styled.nav` 
  
  display: none;

  &.showNav {
      display: block;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li a {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: 0.5rem 1rem;
    padding: 0.5rem;
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.075rem;
    text-align: center;
  }

  @media (hover: hover) {
    ul li a:hover {
        color: grey
    }
  }

  @media ${device.mediaMaxSmall} {
    position: absolute;
    left: 0;
    right: 0;
    top: 6rem;
    padding: 0 2rem;

    ul {
      padding: 1rem 0;
    }

    ul li a {
      padding: 0.5rem 1.5rem;
      margin-bottom: 1.5rem;
    }
  }

  @media ${device.mediaMinSmall} {
    display: flex;
    align-items: center;
    width: 100%;

    & ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 100%;
    }

    & ul li a {
    }
  }
`

export const StyledHeader = styled.div` 
  position: relative;
  z-index: 100;
  width: 100%;
  position: fixed;
`

export const ToggleNavButton = styled.button `   
    appearance: none;
    font-size: 25px;
    border: none;
    background: none;
    margin: 0;
    padding: calc(14 / 17 / 2 * 1rem);
    outline: none;
    color: inherit;

    & svg {
        display: block;
        fill: inherit;
    }

    @media ${device.mediaMinSmall} {
        display: none;
    }
`