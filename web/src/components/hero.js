import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/media-queries";

const HeroWrapper = styled.div` 
    background-color: ${colors.freshAirBlue};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const HeroInner = styled.div` 
    background-color: ${colors.freshAirTurquoise};
    height: 50vh;
    width: 960px;
`

const Fresh = styled.h1` 
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 9rem;
    right: 50%;
`

const Air = styled.h2` 
    position: absolute;
    top: 0;
    color: white;
    font-size: 6rem;
    left: 50%;
`

const Hero = (props) => {
    return (
        <HeroWrapper>
            <Fresh>Fresh</Fresh>
            <Air>Air</Air>
            <HeroInner>
                Image goes here
            </HeroInner>
        </HeroWrapper>
    )
}

export default Hero;