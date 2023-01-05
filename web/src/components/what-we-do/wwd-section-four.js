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
  background-color: white;
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
  width: 100%;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  .title {
    font-size: 1.25rem;
    margin-bottom: 1.875rem;
    color: ${colors.FAGrey};
    @media ${device.mediaMinMedium} {
      font-size: 1.875rem;
    }
    @media ${device.mediaMinLarge} {
      font-size: 2rem;
    }
  }

  /* .heroTitle,
  .heroText {
    visibility: hidden;
  } */

  @media ${device.mediaMinMedium} {
    width: 50%;
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

  div.heroText {
    padding: 2rem;
    text-align: center;
    @media ${device.mediaMinMedium} {
        padding: 4rem;
        text-align: left;
    }
    position: relative;
    z-index: 1000;
  }

  p.smallPrint {
    font-size: 0.875rem;
    display: block;
    margin-top: 1rem;
  }

  &.clipped {
    --clip: 0 100% 0 0;
    clip-path: inset(var(--clip));
  }
`;

const AwardsList = styled.ul` 
    margin-bottom: 2rem;
    li:not(:last-child) {
        margin-bottom: 1rem;
    }
`

const WwdSectionFour = React.forwardRef(({tl}, ref) => {

    const { heroBackgroundImage } = useStaticQuery(
      graphql`
        query {
          heroBackgroundImage: file(relativePath: { eq: "wwd-section-4.png" }) {
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
        .fromTo('.tweenText', {
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
                <h3 className="title tweenText">CORPORATE CONTENT AWARDS EUROPE</h3>
                <AwardsList className="tweenText">
                    <li>Winner - Best Corporate Storytellers: “Ahead of the Field” with NFU Mutual, 2020</li>
                    <li>“The Case Files, with Slater + Gordon, 2021</li>
                    <li>“Rewirement”, with Legal & General, 2022</li>
                    <li>Best Use of Audio: </li>
                    <li>Gold - “Ahead of the Field”, with NFU Mutual, 2020</li>
                    <li>Gold - “The Energy Podcast”, with Shell, 2020</li>
                    <li>Gold - “The Case Files” with Slater + Gordon, & Markettiers4DC, 2021</li>
                    <li>Gold - “Rewirement” with Legal & General, 2022</li>
                    <li>Silver - “Call of the Wild” with WWF, 2022</li>
                    <li>Bronze - “What Were You Thinking?” with Vestiaire Collective, 2022</li>
                    <li>Highly Commended - “The Robot Podcast” with ABB, 2022</li>
                    <li>Best Use of a Celebrity or Influencer:  Gold - “Call of the Wild”, WWF, 2020</li>
                    <li>Best Campaign to Assist with Corporate Positioning: Highly Commended - “Rewirement”, with Legal & General, 2022</li>
                </AwardsList>
                <h2 className="title tweenText">Money Age Awards</h2>
                <p className="tweenText">Marketing Campaign of the Year - Highly Commended - Mortgage Insider, Barclays, 2021</p>
              </div>
          </Column>
      </HeroWrapper>
    )
})

export default WwdSectionFour