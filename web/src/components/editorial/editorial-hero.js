import React, {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image'

const EditorialWrapper = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
  height: 100vh;

  div.heroText {
    padding: 2rem;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    @media ${device.mediaMinMedium} {
        padding: 4rem;
    }
    .heroTitleWrapper {
      display: flex;
      align-items: center;
      flex: 1;
    }
  }

  .heroTitle {
    font-size: 1.875rem;
    margin-bottom: 1.875rem;
    color: white;
    justify-self: center;
    @media ${device.mediaMinMedium} {
      font-size: 2rem;
    }
    @media ${device.mediaMinLarge} {
      font-size: 2.4rem;
    }
  }

  .heroSubTitle {
    text-transform: uppercase;
    color: white;
  }

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

const EditorialHero = React.forwardRef(({tl}, ref) => {

    const { heroBackgroundImage } = useStaticQuery(
      graphql`
        query {
          heroBackgroundImage: file(relativePath: { eq: "podcast-hero.png" }) {
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
      <EditorialWrapper ref={ref}>
        <Column className='clipped'>
          <BgImage 
            image={pluginImage}
            className="background-image" 
          />
        </Column>
        <Column className="left-column">
          <div className="heroText">
            <div className="heroTitleWrapper">
              <h3 className="heroTitle">Six ways to grow a podcast</h3>
            </div>
            <h4 className="heroSubTitle">richard blake december 14th 2020</h4>
          </div>
        </Column>
      </EditorialWrapper>
    )
})

export default EditorialHero