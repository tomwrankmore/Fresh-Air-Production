import { colors } from "../../styles/colors"
import { device } from "../../styles/mediaQueries"
import styled from "styled-components"

export const HeroWrapper = styled.div` 
    display: none;
    background-color: ${colors.FABlue};
    height: calc(100vh - 82px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 5rem;
    position: relative;
    flex-direction: column;
    gap: 4rem;
    overflow-x: hidden;
    @media ${device.mediaMinMedium} {
      justify-content: center;
      padding-top: 0;
    }

    .mobile-logo {
      max-width: 320px;
      justify-self: flex-start;
      @media ${device.mediaMinMedium} {
        display: none;
      }
    }
`

export const HeroInner = styled.div` 
    background-color: ${colors.FATurquoise};
    position: relative;
    width: 90%;
    aspect-ratio: 16 / 9;
    margin-top: 20px;

    @media ${device.mediaMinMedium} {
        width: clamp(20rem, 50vw, 70rem);
    }

    img {
        position: absolute;
        width: 100%;
        bottom: 0;
        right: -20px;
        --clip: 100% 0 0 0;
        clip-path: inset(var(--clip));
    }
`

export const Fresh = styled.h1` 
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 9rem;
    right: 50%;
`

export const Air = styled.h2` 
    position: absolute;
    top: 0;
    color: white;
    font-size: 6rem;
    left: 60%;
    top: 5%;
    z-index: 100;
`

export const Marquee = styled.div` 
    width: 300%;
    height: 2rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
        flex: 1;
        text-align: center;
    }
`

export const HeroGrid = styled.div` 
    display: grid;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
    .heroPeopleImgWrapper { 
    }
    .heroPeopleImg {
        
    }
`