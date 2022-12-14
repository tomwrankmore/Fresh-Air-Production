import styled from "styled-components";
import { device } from "../styles/mediaQueries";
import { colors } from "../styles/colors";

export const Wrapper = styled.div` 
  margin: 0 auto;
  /* max-width: 960px; */
  padding: 1em;
  display: flex;
  justify-content: flex-end;

  @media ${device.mediaMinLarge} {
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
    text-align: center;
  }

  ul li {
    /* flex: 1; */
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
    font-size: 1.2rem;
    /* text-align: center; */
  }

  @media (hover: hover) {
    ul li a:hover {
        /* color: grey */
        text-decoration: underline;
    }
  }

  @media ${device.mediaMaxLarge} {
    position: absolute;
    left: 1rem;
    right: 1rem;
    border-radius: 1rem;
    top: 5rem;
    padding: 0 2rem;
    background-color: white;

    ul {
      padding: 1rem 0;
    }

    ul li a {
      padding: 1.5rem 1.5rem;
    }
  }

  @media ${device.mediaMinLarge} {
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
      font-family: "Polysans";
    }
  }
`

export const StyledHeader = styled.div` 
  position: relative;
  z-index: 200;
  width: 100vw;
  position: fixed;


  .navigationLogo {
    display: none;
  }
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
    z-index: 1001;

    & svg {
        display: block;
        fill: inherit;
    }

    @media ${device.mediaMinLarge} {
        display: none;
    }
`