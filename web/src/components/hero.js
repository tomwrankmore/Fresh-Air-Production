import React from "react";
import styled from "styled-components";
import Marquee from "../components/home-section-marquee"
import {HeroWrapper, Fresh, Air, HeroInner, HeroGrid} from "./hero.styled";
import heroPeople from '../assets/hero-people-crop.png';
import FreshSvg from '../assets/Fresh.inline.svg'
import AirSvg from '../assets/Air.inline.svg'

const SvgLogoWrapper = styled.div` 
    height: 100%;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    width: 720px;
    align-items: flex-end;
    padding: 1.5rem 0;

    .LogoContainer {
        margin: 0 auto;
    }

    .fresh-svg {
        width: 300px;
        height: auto;
    }

    .air-svg {
        width: 110px;
        height: auto;
        padding-bottom: 100px;
        margin-left: 6px;
    }
`

const Hero = React.forwardRef(({heroMarqueeRef}, ref) => {
    return (
        <HeroWrapper ref={ref}>
            <SvgLogoWrapper>
                <div className="LogoContainer">
                    <FreshSvg className="fresh-svg" />
                    <AirSvg className="air-svg" />
                </div>
            </SvgLogoWrapper>
            {/* <HeroGrid> */}
                <HeroInner>
                    {/* <p>empty content to display content replace with SVG to animate</p> */}
                    {/* <StaticImage
                        src="../assets/hero-people.png"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="constrained"
                        className="heroPeopleImgWrapper"
                        imgClassName="heroPeopleImg"
                    /> */}
                    <img src={heroPeople} alt="alt" />
                </HeroInner>
            {/* </HeroGrid> */}
            
            <Marquee 
                style={{color: 'white', position: 'absolute'}}
                textContent="WE MAKE PODCASTS FOR BRANDS, THAT AUDIENCES LOVE. WE MAKE PODCASTS FOR BRANDS, THAT AUDIENCES LOVE. WE MAKE PODCASTS FOR BRANDS, THAT AUDIENCES LOVE." 
                ref={heroMarqueeRef} 
            />
        </HeroWrapper>
    )
}
)

export default Hero;