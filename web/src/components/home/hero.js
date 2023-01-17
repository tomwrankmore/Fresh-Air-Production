import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Marquee from "../marquee"
import { HeroWrapper, Fresh, Air, HeroInner, HeroGrid } from "./hero.styled";
import heroPeople from '../../assets/HPHeaderImage.png';
import FreshSvg from '../../assets/Fresh.inline.svg'
import AirSvg from '../../assets/Air.inline.svg'
import { device } from "../../styles/mediaQueries";
import MobileLogo from "../../assets/FA-logo.png"

const SvgLogoWrapper = styled.div`
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

const Hero = React.forwardRef(({heroMarqueeRef, tl}, ref) => {
    
  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
      const mover = ref.current.clientHeight - 270
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
      }, ref);

      let mm = gsap.matchMedia(ref);

      mm.add("(min-width: 675px)", () => {
        gsap.to('.air-svg', {
          y:0,
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom 50%",
            scrub: 2
          }
        })
      });

      return () => (ctx.revert(), mm.revert())

    }, [])
    

  return (
    <HeroWrapper ref={ref}>
      <SvgLogoWrapper>
        <div className="LogoContainer">
          <FreshSvg className="fresh-svg" />
          <AirSvg className="air-svg" />
        </div>
      </SvgLogoWrapper>
      <StaticImage
        src="../../assets/FA-logo-mob.png"
        alt="Fresh Air Logo"
        placeholder="blurred"
        objectFit="contain"
        className="mobile-logo"
      />
      <HeroInner className="hero-inner">
        <img src={heroPeople} alt="alt" className="hero-img" />
      </HeroInner>
      <Marquee 
          style={{color: 'white', position: 'absolute', padding: '150px 0 0 0'}}
          textContent="WE MAKE PODCASTS FOR BRANDS, THAT AUDIENCES LOVE. WE MAKE PODCASTS FOR BRANDS, THAT AUDIENCES LOVE. WE MAKE PODCASTS FOR BRANDS, THAT AUDIENCES LOVE." 
          ref={heroMarqueeRef}
        />
    </HeroWrapper>
  )
}
)

export default Hero;