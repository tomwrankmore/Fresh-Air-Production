import styled from "styled-components";
import { device } from "../styles/mediaQueries";
import { colors } from "../styles/colors";

export const Wrapper = styled.div` 
  margin: 0 auto;
  padding: 1em;
  display: flex;
  justify-content: flex-end;

  &.gradientBg {
    @media ${device.mediaMinMedium} {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    }
  }

  @media ${device.mediaMinLarge} {
    padding: 1.5em 1.5em;
  }
`

export const Nav = styled.nav` 
  
  display: none;

  &.showNav {
      /* display: block; */
      display: flex;
      align-items: center;
      justify-content: center;
  }

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  ul li {
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
  }

  @media (hover: hover) {
    ul li a:hover {
      text-decoration: underline;
    }
  }

  @media ${device.mediaMaxLarge} {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: 0 2rem;
    background-color: ${colors.FABlue};
    height: 100vh;

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
      font-family: "PolySansSlim";
    }
  }
`

export const StyledHeader = styled.div` 
  position: relative;
  top: 0;
  z-index: 200;
  width: 100%;
  position: fixed;
  background-color: ${colors.FABlue};
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