import React from "react";
import Marquee from "../components/home-section-marquee"
import {HeroWrapper, Fresh, Air, HeroInner, HeroGrid} from "./hero.styled";
import heroPeople from '../assets/hero-people-crop.png';

const Hero = ({heroMarqueeRef}) => {
    return (
        <HeroWrapper>
            <Fresh>Fresh</Fresh>
            <Air>Air</Air>
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

export default Hero;