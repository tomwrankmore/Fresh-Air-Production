import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image'

const HeroWrapper = styled.div`
  background-color: ${colors.FABlue};
  width: 100%;
  height: calc(100vh - 82px);
  /* height: 100%; */
  display: flex;
  flex-direction: column-reverse;
  @media ${device.mediaMinMedium} {
    flex-direction: row;
  }
`;

const Column = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
  @media ${device.mediaMinMedium} {
    display: flex;
  }

  div.heroText {
    padding: 0 1rem;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    @media ${device.mediaMinMedium} {
        padding: 4rem;
    }
    .heroTitleWrapper {
      display: block;
      align-items: center;
      flex: 1;
      display: flex;
    }
  }

  .heroTitle {
    font-size: 2rem;
    margin: 0 auto 1.875rem auto;
    max-width: 75%;
    color: white;
    justify-self: center;
    @media ${device.mediaMinMedium} {
      font-size: 2rem;
      max-width: 100%;
    }
    @media ${device.mediaMinLarge} {
      font-size: 2.4rem;
    }
  }

  .heroSubTitle {
    text-transform: uppercase;
    @media ${device.mediaMaxMedium} {
      margin-bottom: 1rem;
    }
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
    --clip: 0 0 0 0;
    clip-path: inset(var(--clip));
    justify-content: flex-start;
    @media ${device.mediaMinMedium} {
      --clip: 100% 0 0 0;
    }
  }
`;

const PodcastHero = React.forwardRef(({tl, podcast}, ref) => {

    const heroBackgroundImage = podcast?.heroImage?.asset?.gatsbyImageData;
    const heroBackgroundColour = podcast?.heroBGColor?.title;

    let heroFlexDirection;
    

    const isMinMedium = useMediaQuery({
      query: '(min-width: 675px)'
    })

    if(isMinMedium) {
      podcast.isLeftAlignedHeroImg === true ? heroFlexDirection = 'row-reverse' : heroFlexDirection = 'row';
    } else {
      heroFlexDirection = 'column-reverse';
    }

    const pluginImage = getImage(heroBackgroundImage);
    const bgImage = convertToBgImage(pluginImage);

    useEffect(() => {
      let mm = gsap.matchMedia(ref);

      mm.add("(min-width: 675px)", () => {
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

        return () => {
          // revert any animations like split
        };
      })

      return () => mm.revert()
    }, [])

    return (
      <HeroWrapper 
        ref={ref} 
        style={{
          backgroundColor: podcast.heroBGColor?.title != null ? podcast.heroBGColor.color : colors.FABlue,
          flexDirection: heroFlexDirection 
        }}
        >
        <Column className="left-column">
          <div className="heroText">
            <div className="heroTitleWrapper">
              <h3 className="heroTitle">{podcast.title}</h3>
            </div>
            <h4 className="heroSubTitle">{podcast.subTitle}</h4>
          </div>
        </Column>
        <Column className='clipped'>
          <BgImage 
            image={pluginImage}
            className="background-image" 
          />
        </Column>
      </HeroWrapper>
    )
})

export default PodcastHero