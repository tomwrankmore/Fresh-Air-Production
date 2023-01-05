import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import Marquee from "../marquee"
import {HeroWrapper, Fresh, Air, HeroInner, HeroGrid} from "./hero.styled";
import heroPeople from '../../assets/hero-people-crop.png';
import FreshSvg from '../../assets/Fresh.inline.svg'
import AirSvg from '../../assets/Air.inline.svg'
import { device } from "../../styles/mediaQueries";
import MobileLogo from "../../assets/FA-logo.png"

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

const Hero = React.forwardRef(({heroMarqueeRef, tl}, ref) => {
    
    useLayoutEffect(() => {
        const mover = ref.current.clientHeight - 270
        let ctx = gsap.context(() => {
            gsap.set('.air-svg', {
                y: - mover
            })
            gsap.set(heroMarqueeRef.current, {
                visibility: 'hidden'
            })
            tl = gsap.timeline()
            .from('.fresh-svg', {
                xPercent: -100,
                autoAlpha: 0
            })
            .from('.air-svg', {
                xPercent: 100,
                autoAlpha: 0
            }, '<+=0.35')
            .from('.hero-inner', {
                duration: 2,
                ease: "power4.out",
                autoAlpha: 0,
            }, '<+=0.15')
            .to('.hero-img', {
                duration: 1,
                ease: "power4.out",
                "--clip": '0% 0% 0% 0%',
            }, '<+=0.35')
            .from(heroMarqueeRef.current, {
                autoAlpha: 0,
                yPercent: 50
            }, '<+=0.15')

            gsap.to('.air-svg', {
                y:0,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top top",
                    end: "bottom 50%",
                    scrub: 2
                }
            })
        }, ref);
        return () => ctx.revert()
      }, [])

    return (
        <HeroWrapper ref={ref}>
            <SvgLogoWrapper>
                <div className="LogoContainer">
                    <FreshSvg className="fresh-svg" />
                    <AirSvg className="air-svg" />
                </div>
            </SvgLogoWrapper>
            <HeroInner className="hero-inner">
                {/* <p>empty content to display content replace with SVG to animate</p> */}
                {/* <StaticImage
                    src="../assets/hero-people.png"
                    alt="Smiling people"
                    placeholder="blurred"
                    layout="constrained"
                    className="heroPeopleImgWrapper"
                    imgClassName="heroPeopleImg"
                /> */}
                <img src={heroPeople} alt="alt" className="hero-img" />
            </HeroInner>
            {/* {isMobile && 
                <img src={MobileLogo} alt="" className="mobile-logo"/>  
            } */}
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