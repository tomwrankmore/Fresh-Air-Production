import React, {useEffect} from "react";
import gsap from "gsap";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Marquee from "../marquee"
import { SvgLogoWrapper, HeroWrapper, Fresh, Air, HeroInner, HeroGrid } from "./hero.styled";
import heroPeople from '../../assets/HPHeaderImage.png';
import FreshSvg from '../../assets/Fresh.inline.svg'
import AirSvg from '../../assets/Air.inline.svg'
import { device } from "../../styles/mediaQueries";
import MobileLogo from "../../assets/FA-logo.png"

const Hero = React.forwardRef(({heroMarqueeRef, tl, heroMarqueeText, heroImage}, ref) => {
    
  useEffect(() => {

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
      <div className="mobile-logo">
        <StaticImage
          src="../../assets/FA-logo-mob.png"
          alt="Fresh Air Logo"
          placeholder="blurred"
          objectFit="contain"
          className="mobile-logo"
        />
      </div>
      <HeroInner className="hero-inner">
        <img src={heroImage.asset.gatsbyImageData.images.fallback.src} alt="alt" className="hero-img" />
      </HeroInner>
      <Marquee 
          style={{color: 'white'}}
          textContent={heroMarqueeText}
          ref={heroMarqueeRef}
          cn="home-marquee"
        />
    </HeroWrapper>
  )
}
)

export default Hero;