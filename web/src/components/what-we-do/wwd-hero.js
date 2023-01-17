import React, {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image'

const HeroWrapper = styled.div`
  background-color: ${colors.FABlue};
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media ${device.mediaMinMedium} {
    flex-direction: row;
  }
`;

const Column = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  flex: 1;

  .heroTitle {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 1.875rem;
    color: white;
    @media ${device.mediaMinMedium} {
      font-size: 2rem;
      line-height: 2.4rem;
    }
    /* @media ${device.mediaMinLarge} {
      font-size: 2.4rem;
    } */
  }

  /* @media ${device.mediaMinMedium} {
    width: 50%;
  } */

  .background-image {
    width: 100%;
    min-height: 50vh;
    @media ${device.mediaMinMedium} {
      min-height: 100vh;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.heroText {
    padding: 2rem;
    text-align: center;
    @media ${device.mediaMinMedium} {
        padding: 4rem;
        /* text-align: left; */
    }
    position: relative;
  }

  p.smallPrint {
    font-size: 0.875rem;
    display: block;
    margin-top: 1rem;
  }

  &.clipped {
    --clip: 0 100% 0 0;
    clip-path: inset(var(--clip));
    justify-content: flex-start;
  }
`;

const WwdHero = React.forwardRef(({tl}, ref) => {

    const { heroBackgroundImage } = useStaticQuery(
      graphql`
        query {
          heroBackgroundImage: file(relativePath: { eq: "wwd-hero.png" }) {
            childImageSharp {
              gatsbyImageData(
                width: 2000
                quality: 50
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      `
    )
    const pluginImage = getImage(heroBackgroundImage);
    const bgImage = convertToBgImage(pluginImage);

    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        tl.current = gsap.timeline()
        .to('.clipped', {
          duration: 2,
          ease: "power4.out",
          "--clip": '0% 0% 0% 0%',
          delay: 0.5
        })
        .fromTo('.heroTitle', {
          yPercent: 20,
          stagger: 0.75,
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          yPercent: 0,
          stagger: 0.25
        }, '<+=0.5')
      }, ref);
      return () => ctx.revert()
    }, [])

    return (
      <HeroWrapper ref={ref}>
          <Column className='clipped'>
            <BgImage 
              image={pluginImage}
              className="background-image" 
            />
          </Column>
          <Column>
              <div className="heroText">
                <h3 className="heroTitle">We're a team of passionate audio producers who have worked for some of the biggest brands.</h3>
                <h3 className="heroTitle">We take the essence of a brand and bring it to life in audio.</h3>
                <h3 className="heroTitle">Want to get in touch? Click here to email us.</h3>
                {/* <div className="smaller-text-wrapper">
                    <p className="smallPrint heroText">
                        Your friendly neighbourhood bringer of vibes and flavour!!
                    </p>
                </div> */}
              </div>
          </Column>
      </HeroWrapper>
    )
})

export default WwdHero