import { colors } from "../../styles/colors"
import { device } from "../../styles/mediaQueries"
import styled from "styled-components"

export const SvgLogoWrapper = styled.div`
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(0);
    z-index: 100;
    width: auto;
    align-items: flex-end;
    padding: 1.5rem 1rem;
    display: none;

    @media ${device.mediaMinMedium} {
      padding: 1.5rem 0;
      display: inline-block;
      width: 720px; 
      left: 50%;
      transform: translateX(-50%);
    }

    .LogoContainer {
      @media ${device.mediaMinSmall} {
        margin: 0 auto;
        width: 420px;
        height: 160px;
        display: flex;
        justify-content: space-between;
      }
    }

    .fresh-svg {
      width: 300px;
      height: auto;
      /* transform: translateY(-140px); */
      visibility: hidden;
      align-self: flex-end;
      @media ${device.mediaMinSmall} {
        transform: translateY(0);
      }
    }

    .air-svg {
        width: 100px;
        height: auto;
        /* float: right; */
        visibility: hidden;
        align-self: flex-start;
        @media ${device.mediaMinMedium} {
          width: 110px;
        }
    }
`

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
        /* right: -20px; */
        right: 0px;
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