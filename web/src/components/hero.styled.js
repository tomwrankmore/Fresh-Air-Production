import { colors } from "../styles/colors"
import { device } from "../styles/mediaQueries"
import styled from "styled-components"

export const HeroWrapper = styled.div` 
    background-color: ${colors.FABlue};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const HeroInner = styled.div` 
    background-color: ${colors.FATurquoise};
    position: relative;
    width: clamp(20rem, 50vw, 70rem);
    aspect-ratio: 16 / 9;
    margin-top: 20px;

    img {
        position: absolute;
        width: 100%;
        bottom: 0;
        right: -20px;
    }

    /* .heroPeopleImgWrapper {
        position: absolute;
        bottom: 0;
        left: 0px;
        right: -30px;
        top: -30px;
        width: 100%;
    }
    .heroPeopleImg {

    } */
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
    background-color: pink;
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
        /* grid-column: 2/4;
        grid-row: 1;
        overflow: visible; */
    }
    .heroPeopleImg {
        
    }
`